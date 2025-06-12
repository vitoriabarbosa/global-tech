
// efeito no menu
(function() {
  const nav = document.getElementById('nav-bar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) nav.classList.add('fixed-menu');
    else nav.classList.remove('fixed-menu');
  });
})();

(function() {
  const logo = document.getElementById('logo');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) logo.classList.add('logo-effect');
    else logo.classList.remove('logo-effect');
  });
})();


// Voltar ao inicio
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// fazer o botao de inicio aparecer
(function() {
  const top = document.getElementById('to-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) top.classList.add('btn-top');
    else top.classList.remove('btn-top');
  });
})();


function abrirLogin() {
  window.open("login.html");
}



function validarForm() {
  const nome = document.forms[0].texto.value;
  const email = document.forms[0].email.value;
  const telefone = document.forms[0].telefone.value;
  const mensagem = document.forms[0].texto.value;

  if(nome=="" || email=="" || telefone=="" || mensagem==""){
    alert("HUM... PARECE QUE VOCÊ ESQUECEU DE PREENCHER OS CAMPOS...");   
  }
  return false;
}



// tentando validar o form :/

var campoNumero = document.querySelector('.numero');
var regex = /^\(\d{2}\)\d{4,5}-\d{4}$/;

function numero() {
  if (regex.test(campoNumero.value)) {
    alert("Esse é um numero fixo");
  } else {
    alert("Email e número de telefone válidos!");

  }
}


var campoText = document.querySelector('.text');
var regex = /([a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9._-]+)/gi;

function text() {
  if (regex.test(campoText.value)) {
    alert("Esse é um email inválido");
  } else {
    alert("Esse é um email válido");

  }
}

function validatorTelefone(telefone) {
  let telefonePattern = /^\(\d{2}\)\d{4,5}-\d{4}$/;
  return telefonePattern.test(telefone);
}




// Menu NavBar responsivo
class MobileMenu {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileMenu(
  ".mobile-menu",
  ".nav-menu",
  ".nav-menu li",
);
mobileNavbar.init();
