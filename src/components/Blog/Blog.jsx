import React from 'react';
import styles from './Blog.module.scss';
import Lambo from '../../assets/images/lambo.png';
export default function Blog(){
  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <h4>وبلاگ</h4>
        <div className={styles.list}>
          
          <article className={styles.post}>
            <img src={Lambo} />
            <h5>چرا خرید از نمایشگاه معتبر، بهتر از معامله شخصی است؟</h5>
            <p>امروزه بسیاری از افراد برای خرید یا فروش خودرو، از سایت‌ها و پلتفرم‌های آنلاین استفاده می‌کنند. اما هنوز هم خرید از یک نمایشگاه معتبر مزایای فراوانی دارد که نباید نادیده گرفت...</p>
            <a>مطالعه بیشتر</a>
          </article>

          <article className={styles.post}>
            <img src={Lambo} />
            <h5>راهنمای خرید خودروی دست دوم — از کجا بفهمیم ماشین خوبه؟</h5>
            <p>خرید خودروی کارکرده همیشه یکی از چالش‌برانگیزترین تصمیم‌ها برای خریداران است. چون برخلاف خودروی صفر، باید از وضعیت فنی، بدنه و مدارک ماشین مطمئن بشید...</p>
            <a>مطالعه بیشتر</a>
          </article>

        </div>
      </div>
    </section>
  )
}
