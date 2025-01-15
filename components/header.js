class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
    <style>
        html {
            --font-fam: Verdana,sans-serif;
        }

        /* Theme toggle */
        body {
            background-color: rgb(27, 26, 26);
            color: white;
        }

        .light-mode {
            background-color: white;
            color : rgb(41, 41, 41);
        }

        /* Navbar container */
        .navbar {
            overflow: hidden;
            font-family: var(font-fam);
            padding: 1%;
        }       

    /* Links inside the navbar */
        .navbar navtext {
            font-family: var(font-fam);
            float: center;
            font-size: 24px;
            color:rgb(255, 0, 0);
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

        .navbar .mode-toggle {
            background-color: none;
        }

        .navbar a {
            float: center;
            font-size: 20px;
            color: #aaabac;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        
        .navbar a:hover, .dropdown:hover .dropbtn {
            font-variation-settings: "wght" 582; 
            letter-spacing: 1px;
            text-decoration: underline;
        }

    /* Show the dropdown menu on hover */
        .dropdown:hover .dropdown-content {
        display: block;
        font-variation-settings: "wght" 582; 
        letter-spacing: 1px;
        }

        .span{
            font-family: 'Consolas';
        } 
    </style>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="./components/scripts.js" type="text/javascript" defer></script>
    
    <div class="navbar" id="MyTopnav">
        <navtext>Marian Lu Portfolio</navtext>
        <p><a style="float: center" href="./index.html" class="active">About</a>
        <a style="float: center" href="./projects.html" class="active">Projects</a>
        <a style="float: center" href="./resume.html" class="active">Resume</a>
        <button style="float: right;" class="mode-toggle"><i style="color:rgb(255, 0, 0);" class="fa-solid fa-sun fa-xl"></i></button>     
    </div>
    </header>
    `;

    }
}

customElements.define('header-component', Header);