import React from 'react';
import styles from './Contact.module.scss';
export default function Contact(){
  return (
    <section id="contact" className={styles.contact}>
      <h4>با ما در ارتباط باشید</h4>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={(e)=>{e.preventDefault(); alert('پیام ارسال شد')}}>

          <div className={styles.inputbox}>
            <div>
              <label htmlFor="name">نام و نام خانوادگی</label><br />
              <input id="name" name="name" type="text" placeholder="نام و نام خانوادگی شما" required />
            </div>
            
            <div>
              <label htmlFor="email">آدرس ایمیل</label><br />
              <input id={styles.email} name="email" type="email" placeholder="your@gmail.com" required />
            </div>
          </div>

          <div className={styles.inputbox2}>
              <label htmlFor="subject">موضوع</label>
              <input className={styles.subject} type="text" name="subject" placeholder="موضوع پیام خود را بنویسید..." />

              <label htmlFor="message">پیام</label>
              <textarea id="message" name="message" cols="30" rows="5" placeholder="نظرات خود را با ما به اشتراک بگذارید..." required />
          </div>
          
          <button type="submit">ارسال پیام</button>
        </form>
      </div>
    </section>
  )
}
