import React from 'react';
import styles from './Footer.module.scss';
import Phone from '../../assets/images/Phone.png'
import Smartphone from '../../assets/images/Smartphone.png'
import Atsign from '../../assets/images/Atsign.png'
import Visit from '../../assets/images/Visit.png'
import insta from '../../assets/images/Instagram.png'
import Logo from '../../assets/images/vortex-logo.jpeg'
export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={`${styles.cols} reveal`}>
          <div className={styles.col1}>
            <h4>تماس با ما</h4>
            <ul>
              <li><img src={Phone} />۰۲۱۲۳۴۵۶۷۸۹</li>
              <li><img src={Smartphone} />۰۹۱۲۳۴۵۶۷۸۹</li>
              <li><img src={Atsign} />your@gmail.com</li>
              <li><img src={Visit} />تهران ، خیابان ...</li>
            </ul>
          </div>

          <div className={styles.col2}>
            <h4>خدمات</h4>
            <ul>
              <li>خدمات خرید و فروش خودرو</li>
              <li>خدمات اداری و حقوقی</li>
              <li>خدمات کارشناسی و ارزیابی خودرو</li>
              <li>خدمات جانبی و رفاهی</li>
              <li>خدمات دیجیتال و تبلیغاتی</li>
            </ul>
          </div>
          
          <div className={styles.col3}>
            <h4>VORTEX</h4>
            <p>نمایشگاه خودرو  <span>vortex</span> با سال‌ها تجربه در زمینه خرید، فروش و معاوضه انواع خودروهای داخلی و خارجی، همواره در تلاش است تا با ارائه‌ی خدماتی صادقانه، شفاف و حرفه‌ای، اعتماد و رضایت کامل مشتریان خود را جلب کند. ما باور داریم که خرید خودرو تنها یک معامله نیست، بلکه آغاز یک رابطه‌ی بلندمدت با مشتری است. به همین دلیل، در هر مرحله از انتخاب تا تحویل خودرو، تیم مجرب ما در کنار شماست تا بهترین تصمیم را بگیرید.....</p>
            <button>بیشتر</button>
          </div>
      </div>

      <div className={styles.row1}>
        <a href="#"><img src={insta} /></a>
        <hr />
        <p>کلیه حقوق مادی و معنوی این اثر برای شرکت یاراوب محفوظ میباشد.</p>
        <h3>2026© Vortex. Yara website All rights reserved</h3>
      </div>
    </footer>
  )
}
