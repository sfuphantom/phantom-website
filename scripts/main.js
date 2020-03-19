new TypeIt( "#heroTyper", {
    strings: [" ", "Creatives", "Innovators", "Excellence", "Team Phantom"],
    speed: 150,
    startDelay: 1000,
    breakLines: false,
    autoStart: false
}).go(); // TypeIt Settings - See https://typeitjs.com/

$( 'a[href*="#"]' ).click( function(event) { // Navigation Scroll Animation

    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
        var target = $( this.hash );
        target = target.length ? target : $( '[name=' + this.hash.slice(1) + ']' );

        if ( target.length ) {
            event.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: target.offset().top - 106
            }, 1000 ); // html body jQuery .animate
        } // if target.length

    } // if Location Check

} ); // Smooth Scroll Navigation


$(document).click( function (event) {
    if ( $("#navbar_collapse").hasClass("show") === true && !$(event.target).hasClass("navbar-toggle") ) {
        $("#navbar_collapse").collapse('toggle');
    }
}); // Hides navbar_collapse on document.click


$(document).ready(function() {
    var offset = 750;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#back-to-top').addClass("fadeInUp").removeClass("fadeOut");
        } else {
            $('#back-to-top').removeClass("fadeInUp").addClass("fadeOut");
        }
    });
    $('[data-toggle="tooltip"]').tooltip(); // Enable all tooltips

}); // back to top
