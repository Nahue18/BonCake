window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});
window.addEventListener('scroll', function(){
    const a = document.querySelector('a');
    a.classList.toggle("sticky", window.scrollY > 0)
});