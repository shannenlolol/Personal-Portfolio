import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body>
      <link rel='icon' href="favicon.ico?v=2"></link>
      <p className={styles.header_text_1}> Hello I'm</p>
      <p className={styles.header_text_2}>Shannen Lee</p>
      <p className={styles.header_text_3}>Student at NTU</p>
      <div className={styles.button_container}>
        <a className={styles.cv} href= "https://www.linkedin.com/in/shannen-lee-4b7301216/"> LinkedIn </a>
        <a className={styles.contact} href="https://t.me/shannenlolol/</div>">Let's Talk</a>
      </div>
      <div className={styles.photo_container}>
        <img className={styles.photo} src= "/icons/Profile pic.jpg" alt=""></img>
      </div>
      <p className={styles.about_me}>Hello, I love my kkumas</p>
      <br></br>
      <form action='mailto:shannenlolol@gmail.com' method="post" encType='text/plain'>
        <label>Your Name: </label>
        <input type="text" name="yourName"></input><br></br><br></br>
        <label>Your Email: </label>
        <input type="email" name="yourEmail" ></input><br></br><br></br>
        <label>Your Message: </label><br></br>
        <textarea name="yourMessage" rows="10" cols="30"></textarea><br></br><br></br>
        <input type="submit" name=""></input><br></br>
      </form>
      </body>
  )
}
