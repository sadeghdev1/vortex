import React from 'react';
import styles from './Hero.module.scss';
import Bugatti from '../../assets/images/bugatti-1.png'
export default function Hero(){
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className='reveal-top'>Vortex</h1>
            {/* <img src={Bugatti} /> */}
            <div className={styles.content}>
              <h2>غوطه‌ور در گرداب سرعت</h2>
              <p>جایی که ماشین‌های لوکس خارجی، تورنمنت قدرت و تجمل را با هم رقم می‌زنند.</p>
              <div className={styles.cta}>
                <button className={styles.primary}>مشاهده بروز ترین کلکسیون</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
