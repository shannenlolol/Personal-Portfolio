import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
      <link rel='shortcut icon' href="/icons/favicon.ico"/>
    </Head>
    <div>
    <body>
      <div>
        <div className={styles.header}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div><br></br>
            <div className={styles.title}> <span> Hello! </span> <br /> <span> I'm Shannen</span></div>
        
        <div className={styles.photo_container} >
            <img className={styles.photo} src= "/icons/Profile pic.jpg" alt=""></img>
        </div>
        <div className={styles.button_container}>
            <a className={styles.cv} href= "https://www.linkedin.com/in/shannen-lee-4b7301216/"> LinkedIn </a>
            <a className={styles.contact} href="https://t.me/shannenlolol/</div>">Let's Talk!</a>
        </div>
        <br></br>
      </div>
      <p className={styles.about_me}>Send me an email!</p>
      <br></br>
      <div>
      <form action='mailto:shannenlolol@gmail.com' method="post" encType='text/plain'>
      <div className={styles.photo_container} >
        <label className={styles.about_me}>Your Name: </label>
        <input type="text" name="yourName"></input><br></br><br></br>
      </div>
      <br></br>
      <div className={styles.photo_container} >
        <label className={styles.about_me}>Your Email: </label>
        <input type="email" name="yourEmail" ></input><br></br><br></br>
        </div>
        <br></br>
        <div className={styles.photo_container} >
        <label className={styles.about_me}>Your Message: </label><br></br>
        <textarea name="yourMessage" rows="10" cols="30"></textarea><br></br><br></br>
        </div>
        <div className={styles.photo_container} >
        <input className={styles.cv} type="submit" name=""></input><br></br>
        </div>
        <br></br>
      </form>
      </div>
      </div>
      </body>
      </div>
      </div>
  )
}
