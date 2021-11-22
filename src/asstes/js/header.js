document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('top_nav').classList.add('d-none');
            document.getElementById('navbar_top').classList.add('shadow-sm');
            // add padding top to show content behind navbar
            var navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('top_nav').classList.remove('d-none');
            document.getElementById('navbar_top').classList.remove('shadow-sm');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
