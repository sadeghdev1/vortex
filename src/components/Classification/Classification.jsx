import React from 'react';
import styles from './Classification.module.scss';
import Models from '../../assets/images/models.png'
export default function Classification(){
  return (
    <section id="classification" className={styles.classification}>
      <div className={styles.container}>
        <h3 className='reveal-top'>کدوم مدل با سبک زندگی شما سازگاره؟ </h3>
        <img  className='reveal' src={Models} alt="models" />
        <h4>هر مدلی که دنبالش هستی، از شاسی‌بلندهای قدرتمند تا سدان‌های لوکس،<br/> همه در Vortex منتظر تو هستند.</h4>
      </div>
    </section>
  )
}
