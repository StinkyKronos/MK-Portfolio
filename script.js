function typed(){
var typed = new Typed('.animate', {
    strings: ["Murali Krishna"],
    typeSpeed: 100
});
}


function openNav() {

    if (document.getElementById("myNav").style.width == "250px") {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("hamburger").src = "https://img.icons8.com/material-outlined/24/000000/menu--v1.png";
    }
    else {
        document.getElementById("myNav").style.width = "250px";
        document.getElementById("hamburger").src = "https://img.icons8.com/material-two-tone/24/000000/horizontal-line.png";
    }
}

function scrollDown() {
    window.scrollBy(0, 600);
}


function afterLoad() {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    }, 600);

    var typed = new Typed('.animate', {
        strings: ["Murali Krishna"],
        typeSpeed: 100
    });
}

const counters = document.querySelectorAll(".counter");

function counter() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / 1000;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        };

        updateCount();
});
}

