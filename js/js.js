var all = document.querySelectorAll(".all");
var page = document.querySelectorAll(".page");
var callbacksDiv = document.querySelector("#callbacksDiv");
for (var i = 0; i < 8; ++i) {
    all[i].addEventListener("click", function () {
        [].forEach.call(page, function (el) {
            el.style.display = "none";
        });
        [].forEach.call(all, function (el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
        slideAnimation();
        fixedAnimation();

        if (all[0].classList.contains('active')) {
            page[0].style.display = "";
            all[4].classList.add("active")
            homeAnimation();
        } else if (all[1].classList.contains('active')) {
            aboutAnimation();
            page[1].style.display = "";
            all[5].classList.add("active");

        } else if (all[2].classList.contains('active')) {
            ServicesAnimation();
            page[2].style.display = "";
            all[6].classList.add("active")

        } else if (all[3].classList.contains('active')) {
            contactAnimation();
            page[3].style.display = "";
            all[7].classList.add("active")
        }

        else if (all[4].classList.contains('active')) {
            homeAnimation();
            page[0].style.display = "";
            all[0].classList.add("active")
        } else if (all[5].classList.contains('active')) {
            aboutAnimation();
            page[1].style.display = "";
            all[1].classList.add("active")
        } else if (all[6].classList.contains('active')) {
            ServicesAnimation();
            page[2].style.display = "";
            all[2].classList.add("active")
        } else if (all[7].classList.contains('active')) {
            contactAnimation();
            page[3].style.display = "";
            all[3].classList.add("active")

        }

    });
}
//********************************************counter page****************************************
var counter = document.querySelector("#callbacksDiv");

function changecounter(element, i) {
    element.addEventListener('click', function () {
        counter.innerHTML = "0" + (i + 1);
    }, false);
}

[].slice.call(document.getElementById('navright').children).forEach(changecounter);
[].slice.call(document.getElementById('menu').children).forEach(changecounter);
//********************************************counter page****************************************


//******************************************start on click remove class******************************************
var body = document.getElementsByTagName("BODY")[0];
var main = document.querySelectorAll(".main");

var menu = document.querySelector(".menu-icon");
menu.addEventListener("click", function () {
    body.classList.toggle('open');
});
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", function () {
        body.classList.remove('open');
    });
}
//******************************************end on click remove class******************************************


//********************************************text a home********************************************
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};
window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
//********************************************text a home********************************************


//********************************************start mouse move********************************************
const bob = document.querySelector('.cursol');
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.4;

function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;
    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);
    bob.style.left = ballX + 'px';
    bob.style.top = ballY + 'px';
    requestAnimationFrame(animate)
};
animate();
document.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
document.addEventListener('click', function (e) {
    e.preventDefault;
    bob.classList.remove('active');
    void bob.offsetWidth;
    bob.classList.add('active');
}, false);
//********************************************end mouse move********************************************


//********************************************start slider animation********************************************
const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const tl = new TimelineMax()

const slideAnimation = () => {
    tl.fromTo(slider, 1.2, { y: '120%' }, { y: '-100%', ease: Power2.easeInOut }, '-=1')
        .fromTo(slider2, 3.4, { y: '120%' }, { y: '-100%', ease: Power2.easeInOut }, '-=2')
}
slideAnimation();
//********************************************end slider animation********************************************
const fixedAnimation = () => {
    TweenMax.from(".follow-me", 1.1, {
        delay: .8,
        opacity: 0,
        x: -20,
        width: 0,
        ease: Expo.easeInOut
    });
    TweenMax.from(".link1", 1.1, {
        delay: .8,
        opacity: 0,
        x: -20,
        width: 0,
        ease: Expo.easeInOut
    });
    TweenMax.from(".link2", 1.1, {
        delay: 1.0,
        opacity: 0,
        x: -20,
        width: 0,
        ease: Expo.easeInOut
    });
    TweenMax.from(".link3", 1.1, {
        delay: 1.2,
        opacity: 0,
        x: -20,
        width: 0,
        ease: Expo.easeInOut
    });
    TweenMax.from(".link4", 1.1, {
        delay: 1.4,
        opacity: 0,
        x: -20,
        width: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".menu-icon", 1.1, {
        delay: 1.1,
        opacity: 0,
        y: -20,
        width: 0,
        ease: Expo.easeInOut
    });

    TweenMax.from(".sociale1", 1, {
        delay: 1.4,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".sociale2", 1, {
        delay: 1.3,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".sociale3", 1, {
        delay: 1.2,
        opacity: 0,
        y: -20,
        ease: Expo.easeInOut
    });
}
fixedAnimation();


const homeAnimation = () => {
    tl.fromTo("#home", 1.2, {
        scale: .8,
        ease: Power2.easeInOut
    }, {
        scale: 1, ease: Power2.easeInOut
    }, '-=1')
}
homeAnimation();

const aboutAnimation = () => {
    tl.fromTo(".about-img", 1.2, {
        opacity: 0,
        x: -20,
        ease: Power2.easeInOut
    }, {
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut
    }, '-=1')

    tl.fromTo(".about-title", 1.2,
        {
            y: -20,
            opacity: 0
        }, {
        y: 0, opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')

    tl.fromTo(".about-par", 1.3,
        {
            x: '100%',
            opacity: 0
        }, {
        x: '0%', opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".prosg1", 1.1,
        {
            y: '100%',
            opacity: 0
        }, {
        y: '0%', opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".prosg2", 1.2,
        {
            y: '100%',
            opacity: 0
        }, {
        y: '0%', opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".prosg3", 1.3,
        {
            y: '100%',
            opacity: 0
        }, {
        y: '0%', opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')

    tl.fromTo(".hire", 1.3,
        {
            x: '10%',
            opacity: 0
        }, {
        x: '0%', opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')

}
const ServicesAnimation = () => {
    tl.fromTo(".card", 1.2, {
        x: -20,
        opacity: 0,
        ease: Power2.easeInOut
    }, {
        x: 0,
        opacity: 1,
        ease: Power2.easeInOut
    }, '-=1')
}

const contactAnimation = () => {
    tl.fromTo(".information", 1.2,
        {
            x: -20,
            opacity: 0
        }, {
        x: 0, opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".Username-field", 1.2,
        {
            y: -20,
            opacity: 0
        }, {
        y: 0, opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".email-field", 1.3,
        {
            y: -20,
            opacity: 0
        }, {
        y: 0, opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".Phone-field", 1.4,
        {
            y: -20,
            opacity: 0
        }, {
        y: 0, opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
    tl.fromTo(".Message-field", .7,
        {
            x: "100%",
            opacity: 0
        }, {
        x: "0%", opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')

    tl.fromTo("#submit", 1.0,
        {
            y: "100%",
            opacity: 0
        }, {
        y: "0%",
        opacity: 1,
        ease: Power2.EaseInOut
    }, '-=1')
}