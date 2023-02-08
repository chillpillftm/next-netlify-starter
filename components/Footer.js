import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/pixel_heart.ico" alt="Pixel Heart" className={styles.logo} /> by degens for degens
      </footer>
    </>
  )
}
