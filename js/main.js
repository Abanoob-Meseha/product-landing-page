const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('nav ul');
const navbar = document.querySelector('nav')
const bannerImg = document.querySelector('.banner-img')
const collectionImgs = document.querySelectorAll('.collection_card') 
console.log(collectionImgs[0].id)

function setDisplayProperty() {
    if (window.innerWidth > 768) {
        menuList.style.display = 'flex';
    } else {
        menuList.style.display = 'none';
    }
  }
  
  // set initial display property on page load
  setDisplayProperty();
  
  // add event listener to update display property on resize
  window.addEventListener('resize', setDisplayProperty);

menuBtn.addEventListener('click', function() {
    if (menuList.style.display == 'none'){
            menuList.style.display = 'flex';
    }
    else{
            menuList.style.display = 'none';
    }

  });

// for making navbar change style when scrolling the page
  const threshold = 10; 
  window.addEventListener('scroll', () => {
    if (window.scrollY >= threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // make collection images clickable 
  for(let i=0;i<collectionImgs.length;i++){
    collectionImgs[i].addEventListener('click' , ()=>{
      bannerImg.src = `assets/images/bracelets/png/${collectionImgs[i].id}.png`
    })
  }
  