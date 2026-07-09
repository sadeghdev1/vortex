  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import styles from './Navbar.module.scss';

  export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    // Change Navbar appearance when scrolled
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 60);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      
    }, []);

    // Scroll Lock when menuOpen
    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      };
    }, [menuOpen]);

    // Closing Menu with ESC
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
    

    return (
      <header className={`${styles.header} ${
        scrolled ? styles.scrolled : ""
      }`}>
        <div className="container">
          <div className={styles.row}>

            {/* Menu Icon*/}
            <i
              className={`bx ${menuOpen ? 'bx-x menuOpen' : 'bx-menu'} ${styles.menuIcon}`}
              onClick={() => setMenuOpen(true)}
            ></i>
            
            <a className={styles.logo} href="#hero">Vortex</a>

            {/* Menu*/}
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>

              {/* Close Icon */}
              {menuOpen && (
                <i
                  className={`bx bx-x ${styles.closeIcon}`}
                  onClick={() => setMenuOpen(false)}
                ></i>
              )}

              {/* <Link to="/" onClick={() => setMenuOpen(false)}>صفحه اصلی</Link> */}
              <a href="#hero" onClick={() => setMenuOpen(false)}>صفحه اصلی</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>درباره ما</a>
              <a href="#classification" onClick={() => setMenuOpen(false)}>دسته بندی</a>
              <a href="#collection" onClick={() => setMenuOpen(false)}>کلکسیون</a>
              {/* <Link to="/gallery" onClick={() => setMenuOpen(false)}>گالری</Link> */}
              <a href="#contact" onClick={() => setMenuOpen(false)}>ارتباط با ما</a>
            </nav>

            {menuOpen && (
              <div
                className={styles.overlay}
                onClick={() => setMenuOpen(false)}
              ></div>
            )}

            <a className="blog" href="#blog">وبلاگ</a>

          </div>
        </div>
      </header>
    );
  }
