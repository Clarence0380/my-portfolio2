// scroll sections 

let section = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
let top = window.scrollY
let offset = sec.offsetTop -100;
let height = sec.offsetHeight;
let id = sec.getAttribute('id'); 

if(top >= offset && top < offset + height) {
// active navar links
navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
});
// active section
sec.classList.add('show-animate');

}
else{
    sec.classList.remove('show-animate')
}
    });
        


    // sticky header 
    let header = document.querySelector('header');
    
    
    header.classList.toggle('sticky', window.scrollY > 100);
   } 