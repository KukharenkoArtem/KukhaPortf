import Image from 'next/image';
import imgSrc1 from './practic1.png';
import imgSrc2 from './practic2.png';
import imgSrc3 from './practic3.png';
import imgSrc4 from './practic4.png';
function Portfolio(){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link rel="stylesheet" href="/app/globals.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <section class="portfolio" id="portfolio">
            <h2 class="heading">Latest <span>Project</span></h2>
            <div class="portfolio-container">
                <div class="portfolio-box">
                    <Image src={imgSrc1} alt=''/>
                    <div class="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Here you can see an app for a video game.</p>
                        <a href="https://github.com/KukharenkoArtem/FE1.git" target='blank'><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
                    <Image src={imgSrc2} alt=''/>
                    <div class="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Here you can see an interactive input, maded by JS.</p>
                        <a href="https://github.com/KukharenkoArtem/22.04.git" target='blank'><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
                    <Image src={imgSrc3} alt=''/>
                    <div class="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Here you can see a modal box, maded by JS.</p>
                        <a href="https://github.com/KukharenkoArtem/27.05.git" target='blank'><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div class="portfolio-box">
                    <Image src={imgSrc4} alt=''/>
                    <div class="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Here you can see a group of 12 colours, maded by JS.</p>
                        <a href="https://github.com/KukharenkoArtem/26.05.git" target='blank'><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Portfolio;