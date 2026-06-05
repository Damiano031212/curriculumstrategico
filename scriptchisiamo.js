function toggleNavCSP(){
  var btn  = document.getElementById('cs-burger-csp');
  var menu = document.getElementById('cs-mobile-menu-csp');
  if(btn)  btn.classList.toggle('open');
  if(menu) menu.classList.toggle('open');
}