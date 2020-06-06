$("#request_demo_button").click(function(e) {
    console.log("i am cliked");
    e.preventDefault();
    let inputEmail1 = $("#emailForDemo ").val();
    console.log("inputEmail1: ", inputEmail1);
    $.post("https://www.keito.works/api/auth/cus ", {
            "name ": "all_demo_request ",
            "email ": inputEmail1,
            "phone ": " ",
            "subject ": " ",
            "message ": "Subscription request ",
        },
        function(data, status) {
            console.log("datA: ", data, status);
            // status will always return 200 even if request fails
            data = JSON.parse(data);
            console.log(data);
            if (data.status === 200) {
                $("#success-notification ").removeClass("hidden ");
                // hide notification after 3 seconds once it is triggered
                setTimeout(function() {
                    $("#success-notification ").addClass("hidden ");
                }, 5000);
            } else {
                $("#failure-notification ").removeClass("hidden ");
                // hide notification after 3 seconds once it is triggered
                setTimeout(function() {
                    $("#failure-notification ").addClass("hidden ");
                }, 5000);
            }
        });
});



$('.people').owlCarousel({
    loop: true,
    margin: 55,
    nav: true,
    navText: ['', ''],

    // autoplay: 1000, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


$('.first').owlCarousel({
    loop: true,
    margin: 35,
    nav: true,
    navText: ['', ''],

    // autoplay: 1000, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})


$('.kapture-carousel').owlCarousel({
    loop: true,
    margin: 35,
    nav: true,
    navText: ['', ''],
    // autoplay: 1000, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2.5
        }
    }
})




$('.ira-carousel').owlCarousel({
    loop: true,
    margin: 35,
    nav: true,
    navText: ['', ''],

    // autoplay: 1000, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

$('.discover-carousel').owlCarousel({
    loop: true,
    margin: 35,
    nav: true,
    navText: ['', ''],

    // autoplay: 1000, 
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})