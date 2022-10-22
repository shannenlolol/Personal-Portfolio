import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
      <link rel='shortcut icon' href="/icons/favicon.ico"></link>
      <meta charset="utf-8"></meta>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="css/styles.css"></link>
      <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
    </Head>
  <div>
    
    <body>
    <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
      <a href=""><img className={styles.signature} src= "/icons/Shannen signature.png" alt=""></img></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <a class="nav-link text-muted" href="" className={styles.navitem}>About Me <i class="bi bi-stars"></i> </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-muted" href="" className={styles.navitem}> Projects <i class="bi bi-card-text"></i> </a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link text-muted" href="" className={styles.navitem}> Contact <i class="bi bi-person-lines-fill"></i></a>
                      </li>
                  </ul>
                </div>
              </nav>


        
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
