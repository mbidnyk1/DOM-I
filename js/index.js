const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src',siteContent['cta']['img-src'])

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])

const a = document.querySelectorAll('nav a');
a[0].textContent = siteContent['nav']['nav-item-1']
a[1].textContent = siteContent['nav']['nav-item-2']
a[2].textContent = siteContent['nav']['nav-item-3']
a[3].textContent = siteContent['nav']['nav-item-4']
a[4].textContent = siteContent['nav']['nav-item-5']
a[5].textContent = siteContent['nav']['nav-item-6']

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent['cta']['h1']

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button']

const top_h4 = document.querySelectorAll('.top-content .text-content h4');
const top_p = document.querySelectorAll('.top-content .text-content p');
top_h4[0].textContent = siteContent['main-content']['features-h4']
top_p[0].textContent = siteContent['main-content']['features-content']
top_h4[1].textContent = siteContent['main-content']['about-h4']
top_p[1].textContent = siteContent['main-content']['about-content']

const bottom_h4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottom_p = document.querySelectorAll('.bottom-content .text-content p');
bottom_h4[0].textContent = siteContent['main-content']['services-h4']
bottom_p[0].textContent = siteContent['main-content']['services-content']
bottom_h4[1].textContent = siteContent['main-content']['product-h4']
bottom_p[1].textContent = siteContent['main-content']['product-content']
bottom_h4[2].textContent = siteContent['main-content']['vision-h4']
bottom_p[2].textContent = siteContent['main-content']['vision-content']

const contact_h4 = document.querySelector('.contact h4');
contact_h4.textContent = siteContent['contact']['contact-h4']

const  p = document.querySelectorAll('.contact p');
p[0].textContent = siteContent['contact']['address']
p[1].textContent = siteContent['contact']['phone']
p[2].textContent = siteContent['contact']['email']

const  footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']


a.forEach(element => {
  element.style.color = "green";
})
const nav = document.querySelector('nav');
const item1 = document.createElement('navItem');
const item2 = document.createElement('navItem')
item1.textContent = 'Dat new new';
item2.textContent = 'New freezer';

const parentElement = document.querySelector('nav');

parentElement.append(item1,item2);


