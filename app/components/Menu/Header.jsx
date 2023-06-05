
function Header(){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KukharenkoPortfolio</title>
  <link rel="stylesheet" href="/app/globals.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
  <header className="header">
    <a href="#" className="logo">Portfolio.</a>
    <nav className="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
    </nav>
    <div class="bx bx-sun" id="darkMode-icon"></div>
  </header>
</>
    );
}

export default Header;