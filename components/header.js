class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
        <style>
        /* Navbar container */
        .navbar {
            overflow: hidden;
            font-family: monospace, sans-serif;
            padding: 2%;
        }       

    /* Links inside the navbar */
        .navbar a {
            float: left;
            font-size: 20px;
            color: #456061;
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
    <div class="navbar" id="MyTopnav">
        <a href="./index.html" class="active">About</a>
        <a href="./projects.html" class="active">Projects</a>
        <a href="./contact.html" class="active">Contact</a>          
    </div>
    </header>
    `;

    }
}

customElements.define('header-component', Header);