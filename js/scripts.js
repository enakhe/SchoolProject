$(document).ready(function () {
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum + "+");
                        }
                    });
            });
            a = 1;
        }
    });

    document.getElementById('open').addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "100%";
    })

    document.getElementById('close').addEventListener('click', () => {
        document.getElementById("mySidenav").style.width = "0";
    })
})