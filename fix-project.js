// fix-project.js
// اجرا: node fix-project.js
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const componentsDir = path.join(root,'src','components');
const stylesRel = "../../styles/variables.scss";

function walk(dir){
  const arr = [];
  if(!fs.existsSync(dir)) return arr;
  for(const name of fs.readdirSync(dir)){
    const p = path.join(dir,name);
    const s = fs.statSync(p);
    if(s.isDirectory()) arr.push(...walk(p));
    else arr.push(p);
  }
  return arr;
}

// 1) Replace HTML comments in .jsx/.js with JSX comments
const jsFiles = walk(path.join(root,'src')).filter(f=>f.endsWith('.jsx')||f.endsWith('.js'));
for(const f of jsFiles){
  let txt = fs.readFileSync(f,'utf8');
  if(txt.indexOf('<!--')!==-1){
    const newtxt = txt.replace(/<!--([\s\S]*?)-->/g, (m, g) => `{/*${g.trim()}*/}`);
    fs.writeFileSync(f, newtxt, 'utf8');
    console.log('Replaced HTML comments in', f);
  }
}

// 2) Prepend variables import to any .module.scss in components if missing
const scssFiles = walk(path.join(root,'src','components')).filter(f=>f.endsWith('.module.scss'));
for(const f of scssFiles){
  let txt = fs.readFileSync(f,'utf8');
  if(!txt.includes('variables.scss')){
    txt = `@import '${stylesRel}';\n` + txt;
    fs.writeFileSync(f, txt, 'utf8');
    console.log('Prepended variables import to', f);
  } else {
    console.log('Already has variables import:', f);
  }
}

// 3) Ensure variables.scss exists
const varsPath = path.join(root,'src','styles','variables.scss');
if(!fs.existsSync(varsPath)){
  fs.mkdirSync(path.dirname(varsPath), { recursive:true });
  fs.writeFileSync(varsPath, `$primary: #0f172a;\n$accent: #ef4444;\n$muted: #6b7280;\n$bg: #f8fafc;\n`, 'utf8');
  console.log('Created variables.scss at', varsPath);
} else {
  console.log('variables.scss exists');
}

// 4) Update package.json devDependencies to include @vitejs/plugin-react (non-destructive)
const pkgPath = path.join(root,'package.json');
if(fs.existsSync(pkgPath)){
  const pkg = JSON.parse(fs.readFileSync(pkgPath,'utf8'));
  pkg.devDependencies = pkg.devDependencies || {};
  if(!pkg.devDependencies['@vitejs/plugin-react']){
    pkg.devDependencies['@vitejs/plugin-react'] = '^5.0.0';
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
    console.log('Added @vitejs/plugin-react to package.json devDependencies');
  } else {
    console.log('@vitejs/plugin-react already in package.json');
  }
} else {
  console.log('package.json not found at project root — make sure you run the script from project root.');
}

console.log('Done. Now run: npm install && npm run dev');
