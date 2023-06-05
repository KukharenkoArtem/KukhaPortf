function Home(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home</title>
  <link rel="stylesheet" href="/app/globals.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
  <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, I am</h3>
      <h1>Artem Kukharenko</h1>
      <p>
        I am a Front-End developer, web-designer and SQL programmer.
      </p>
      <div class="social-media">
        <a href="https://www.facebook.com/{kukh.artem}" target="blank"><i class="bx bxl-facebook" /></a>
        <a href="https://t.me/KukhaArtem" target="blank"><i class='bx bxl-telegram' ></i></a>
        <a href="https://www.instagram.com/kukhaartema_18" target="blank"><i class="bx bxl-instagram" /></a>
        <a href="https://kuharenkoartem131104@gmail.com" target="blank"><i class='bx bxl-gmail' ></i></a>
      </div>
      <a href="https://sweetcv.com/hve3iahtxxj60" target="blank" class="btn">Download CV</a>
    </div>
    <div class="profession-container">
      <div class="profession-box">
        <div class="profession" id='profession0'>
        <i class='bx bx-code-alt'></i>
        <h3>Web Developer</h3>
        </div>
        <div class="profession" id='profession1'>
        <i class='bx bx-camera'></i>
        <h3>Photographer</h3>
        </div>
        <div class="profession" id='profession2'>
        <i class='bx bx-palette'></i>
        <h3>Web Designer</h3>
        </div>
        <div class="profession" id='profession3'>
        <i class='bx bx-video-recording'></i>
        <h3>Videographer</h3>
        </div>
        <div class="circle"></div>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="home-img">
      <img src="favicon.ico" alt="" />
    </div>
  </section>
</>
    );
}

export default Home;