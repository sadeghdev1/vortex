import React from 'react';
import styles from './About.module.scss';
import Mclaren from '../../assets/images/mclaren.png'
export default function About(){
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h3>درباره ما</h3>
        <p>در Vortex، پلی به جهان خودروهای لوکس خارجی هستیم؛ جایی که سرعت، قدرت و زیبایی ترکیب می‌شود. از تأسیس ۲۰۲۵، مدل‌های برتر فراری، لامبورگینی، پورشه، بنتلی و رولز رویس را وارد می‌کنیم.</p>
        <br/>
        <p>از اشتیاق بنیان‌گذاران با تجربه بین‌المللی به مهندسی برتر متولد شدیم برای رفع محدودیت دسترسی در ایران. با شبکه تأمین‌کنندگان جهانی، خودروها را با بررسی‌های دقیق فنی و ایمنی عرضه می‌کنیم.</p>
        <img src={Mclaren} className={styles.Mclaren} />
        <h4>به ما بپیوندید و جاده‌های موفقیت را فتح کنید.</h4>
      </div>
    </section>
  )
}
