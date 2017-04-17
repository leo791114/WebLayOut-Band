$(function () {
    myMap();
    initToolTip();
    smoothScrolling();
    slideEffect();
});

function myMap() {
    var myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        draggable: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($("#googleMap")[0], mapProp);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}

function initToolTip() {
    $('[data-toggle = "tooltip"]').tooltip();
}

function smoothScrolling() {
    $(".navbar a, footer a[href = '#myPage']").on('click', function (event) {
        // make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // prevent default anchor click behavior
            event.preventDefault();
            // store hash
            var hash = this.hash;
            // use jquery animate() method to add smooth page scroll
            // the optional number (900) specifies the number of milliseconds it takes to scroll to the specific area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
}

function slideEffect() {
    $(window).scroll(function () {
        $('.slideadmin').each(function () {
            var position = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (position < winTop + 600) {
                $(this).addClass('slide');
            }
        });
    });
}