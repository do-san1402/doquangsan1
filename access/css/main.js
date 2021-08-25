const navMenu = document.getElementById('nav-table-mobile'),
      navToggle = document.getElementById('nav-toggle'),
      navCloes = document.getElementById('nav-close'),
      navOverflay = document.getElementById('overflay')

if (navToggle) {
   navToggle.addEventListener('click', () =>{
       navMenu.classList.add('show-menu')
       navOverflay.classList.add('show-overplay')
   })
  
}
if(navCloes) {
    navCloes.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navOverflay.classList.remove('show-overplay')
    })
}
