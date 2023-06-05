 function About(){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link rel="stylesheet" href="/app/globals.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <section class="about" id="about">
            <div class="about-img">
            <i class='bx bx-universal-access'></i>
            </div>
            <div class="about-content">
                <h2 class="heading">About <span>Me</span></h2>
                <h3>Hi, I'm Here to Help You with Your Project!</h3>
                <p>In this portfolio you can see my projects and my achievements, which can help you with creating your own portfolio, CV etc.
                </p>
                <a href="#portfolio" class="btn">Read More</a>
            </div>
        </section>
        <section class="services" id="services">
            <h2 class="heading">My <span>Services</span></h2>
            <div class="services-container">
                <div class="services-box">
                <i class='bx bx-code-curly'></i>
                <h3>Web Development</h3>
                <p>I have been working with HTML, CSS, JavaScript and React for 4 years. I can make different web-pages for different kinds and thematic.</p>
                    <a href="#portfolio" className="btn">Read More</a>
                </div>
                <div class="services-box">
                <i class='bx bx-brush' ></i>
                <h3>Graphic Design</h3>
                <p>I can design my own web pages, also I help to design other pages, maked by my colleagues and friends. I use many popular methods, liked by React and JSX.</p>
                    <a href="#portfolio" className="btn">Read More</a>
                </div>
                <div class="services-box">
                <i class='bx bx-line-chart' ></i>
                <h3>Digital Marketing</h3>
                <p>I am not only a Front-End. Also I have worked a Project Manager and SQL administrator. I can organize the work in group and monitor project process.</p>
                    <a href="#portfolio" className="btn">Read More</a>
                </div>
            </div>
        </section>
        </>    
    );
}

export default About;