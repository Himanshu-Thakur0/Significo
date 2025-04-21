function homePageAnimation() {
  //animating the homeSection div
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".homeSection",
      scroller: "body",
      start: "top top",
      end: "bottom 80%",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  // clipping the video and zooming in
  tl.to(
    ".videodiv",
    {
      "--clip": "2.1%",
      duration: 5,
      ease: Power2,
      onUpdate: function () {
        currentClip = gsap.getProperty(".videodiv", "--clip");
        if (currentClip == "2.1") {
          document.querySelector(".videodiv").style.display = "none";
        } else {
          document.querySelector(".videodiv").style.display = "block";
        }
      },
    },
    "a"
  );

  // zooming out the rows of sentences
  gsap.set(".rowsContainer", { scale: 5 });
  tl.to(
    ".rowsContainer",
    {
      scale: "1",
      duration: 5,
      ease: Power2,
    },
    "a"
  );

  // moving the rows of sentences left and right alternatively fo rowline div
  tl.to(
    ".lft",
    {
      x: "-35%",
      duration: 10,
      ease: Power2,
    },
    "b"
  );
  tl.to(
    ".rgt",
    {
      x: "-43%",
      duration: 10,
      ease: Power2,
    },
    "b"
  );

  //breaking the Centet text of homeSection div in letters
  function breakTheText() {
    var h1 = document.querySelector(".centerText h1");
    var centerText = h1.textContent;

    var splittedText = centerText.split("");

    var clutter = "";
    splittedText.forEach(function (elem) {
      clutter += `<span class="splitText">${elem}</span>`;
      h1.innerHTML = clutter;
      console.log(h1);
    });
  }
  breakTheText();

  tl.from(
    ".centerText h1 .splitText",
    {
      opacity: 0,
      duration: 10,
      stagger: 0.1,
    },
    "a"
  );
}

function craftPageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".craftSection",
      scroller: "body",
      start: "top 70%",
      end: "bottom top",
      scrub: 2,
      onEnter: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "cyan");
        console.log("enter");

        var homeSection = document.querySelector(".homeSection");
        homeSection.style.opacity = 0.5;
      },
      onEnterBack: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "cyan");
        console.log("enter back");

        var homeSection = document.querySelector(".homeSection");
        homeSection.style.opacity = 0.5;
      },
      onLeaveBack: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "black");
        console.log("leave back");

        var homeSection = document.querySelector(".homeSection");
        homeSection.style.opacity = 1;
      },
      // toggleActions: "play none none reverse"
    },
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".craftSection",
      scroller: "body",
      pin: true,
      scrub: true,
    },
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      start: "top top",
      scrub: 2,
    },
  });

  tl3.to(
    ".card1",
    {
      y: "-190vh",
    },
    "b"
  );
  tl3.to(
    ".card2",
    {
      y: "-190vh",
    },
    "b"
  );
  tl3.to(
    ".card3",
    {
      y: "-190vh",
    },
    "b"
  );
  tl3.to(
    ".card4",
    {
      y: "-190vh",
    },
    "b"
  );

  gsap.to(".cardContainer", {
    scrollTrigger: {
      trigger: ".card1",
      scroller: "body",
      start: "top 90%",
      onEnter: function () {
        var card = document.querySelector(".card1");
        card.setAttribute("theme", "black");
        card.style.width = "80%";
        card.style.transition =
          "background .5s ease , color .5s ease , width .5s ease";

        var text = document.querySelector(".card1 .textArea");
        text.style.marginRight = "5%";

        var icon = document.querySelector(".card1 .icon");
        icon.style.marginLeft = "5%";
      },
      onLeaveBack: function () {
        var card = document.querySelector(".card1");
        card.setAttribute("theme", "cyan");
        card.style.width = "70%";

        var text = document.querySelector(".card1 .textArea");
        text.style.marginRight = "0%";

        var icon = document.querySelector(".card1 .icon");
        icon.style.marginLeft = "0%";
      },
    },
  });
  gsap.to(".cardContainer", {
    scrollTrigger: {
      trigger: ".card2",
      scroller: "body",
      start: "top 115%",
      onEnter: function () {
        var card = document.querySelector(".card2");
        card.setAttribute("theme", "black");
        card.style.width = "80%";
        card.style.transition =
          "background .8s ease , color .8s ease , width .5s ease";

        var text = document.querySelector(".card2 .textArea");
        text.style.marginRight = "5%";

        var icon = document.querySelector(".card2 .icon");
        icon.style.marginLeft = "5%";
      },
      onLeaveBack: function () {
        var card = document.querySelector(".card2");
        card.setAttribute("theme", "cyan");
        card.style.width = "70%";

        var text = document.querySelector(".card2 .textArea");
        text.style.marginRight = "0%";

        var icon = document.querySelector(".card2 .icon");
        icon.style.marginLeft = "0%";
      },
    },
  });
  gsap.to(".cardContainer", {
    scrollTrigger: {
      trigger: ".card3",
      scroller: "body",
      start: "top 140%",
      onEnter: function () {
        var card = document.querySelector(".card3");
        card.setAttribute("theme", "black");
        card.style.width = "80%";
        card.style.transition =
          "background .8s ease , color .8s ease , width .5s ease";

        var text = document.querySelector(".card3 .textArea");
        text.style.marginRight = "5%";

        var icon = document.querySelector(".card3 .icon");
        icon.style.marginLeft = "5%";
      },
      onLeaveBack: function () {
        var card = document.querySelector(".card3");
        card.setAttribute("theme", "cyan");
        card.style.width = "70%";

        var text = document.querySelector(".card3 .textArea");
        text.style.marginRight = "0%";

        var icon = document.querySelector(".card3 .icon");
        icon.style.marginLeft = "0%";
      },
    },
  });
  gsap.to(".cardContainer", {
    scrollTrigger: {
      trigger: ".card4",
      scroller: "body",
      start: "top 160%",
      onEnter: function () {
        var card = document.querySelector(".card4");
        card.setAttribute("theme", "black");
        card.style.width = "80%";
        card.style.transition =
          "background .8s ease , color .8s ease , width .5s ease";

        var text = document.querySelector(".card4 .textArea");
        text.style.marginRight = "5%";

        var icon = document.querySelector(".card4 .icon");
        icon.style.marginLeft = "5%";
      },
      onLeaveBack: function () {
        var card = document.querySelector(".card4");
        card.setAttribute("theme", "cyan");
        card.style.width = "70%";

        var text = document.querySelector(".card4 .textArea");
        text.style.marginRight = "0%";

        var icon = document.querySelector(".card4 .icon");
        icon.style.marginLeft = "0%";
      },
    },
  });
}

function realPageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".realSection",
      scroller: "body",
      start: "-30% 25%",
      end: "bottom top",
      scrub: 2,
      // pin:true,
      onEnter: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "salmon");
        console.log("enter");
      },
      onLeaveBack: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "cyan");
        console.log("leave back");
      },
    },
  });

  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".slidesContainer",
      scroller: "body",
      start: "top top",
      end: "bottom -150%",
      pin: ".realSection",
      scrub: 3,
    },
  });

  tl1.to(".slide", {
    x: "-313%",
    duration: 1000,
  });
}

function teamPageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".teamSection",
      scroller: "body",

      start: "top 50%",
      end: "bottom top",
      scrub: 2,
      onEnter: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "white");
        console.log("enter");

        var slide = document.querySelector(".bottomImage");
        slide.style.opacity = 0;
        slide.style.transition = "opacity .8s ease";
      },
      onEnterBack: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "white");
        console.log("enter back");

        var slide = document.querySelector(".bottomImage");
        slide.style.opacity = 1;
        slide.style.transition = "opacity .8s ease";
      },
      onLeaveBack: function () {
        var body = document.querySelector(".themeController");
        body.setAttribute("theme", "salmon");
        console.log("leave back");

        var slide = document.querySelector(".bottomImage");
        slide.style.opacity = 1;
        slide.style.transition = "opacity .8s ease";
      },
    },
  });

  function hoverAnimation() {
    var listelem = document.querySelectorAll(".listelem");
    listelem.forEach(function (elem) {
      elem.addEventListener("mousemove", function (dets) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          scale: 1.3,
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
          y: gsap.utils.mapRange(
            0,
            window.innerHeight,
            -100,
            100,
            dets.clientY
          ),
          ease: Power4,
          duration: 0.3,
        });

        // gsap.to(this.querySelector(".content"), {
        //   color: "white",
        //   ease:Power4,
        //   duration:.3
        // })

        // gsap.to(this.querySelector(".bluelayer"),{
        //   height: "100%",
        //   ease:Power4,
        //   duration:.3,
        // })
      });
      elem.addEventListener("mouseleave", function (el) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 0,
          scale: 1,
          ease: Power4,
          duration: 0.3,
        });

        // gsap.to(this.querySelector(".bluelayer"),{
        //   height: "",
        //   ease:Power4,
        //   duration:.3,
        // })

        // gsap.to(this.querySelector(".content"), {
        //   color: "",
        //   ease:Power4,
        //   duration:.3
        // })
      });
    });

    var firstListelem = document.querySelector("#firstListelem");
    var bluelayer = document.querySelector("#firstBlueLayer");

    firstListelem.addEventListener("mousemove", function (dets, elem) {
      console.log(dets.movementY);
    });
    firstListelem.addEventListener("mouseleave", function (dets, elem) {
      console.log(dets);
    });
  }
  hoverAnimation();
}

function meetPageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".meetTeam .slides",
      scroller: "body",
      start: "top 6%",
      end: "bottom top",
      scrub: 2,
      pin: ".meetTeam",
    },
  });

  tl.to(".slides", {
    x: "20%",
    ease: Power2,
  });

  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".meetTeam",
      scroller: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
}

function capsulePageAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".capsulesSection",
      scroller: "body",
      start: "-70% top",
      end: "bottom 90%",
      scrub: 1,
    },
  });

  tl.to(
    ".capsulesSection .left",
    {
      y: "0vh",
      // ease: Power4
    },
    "a"
  );
  tl.to(
    ".capsulesSection .right .capsule2",
    {
      y: "0vh",
      // ease: Power4
    },
    "a"
  );
}

function footer2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer2",
      scroller: "body",
      start: "-60% 10%",
      end: "bottom bottom",
    },
    // onEnter: function () {
    //   var logo = document.querySelector(".logo")
    //   logo.style.height = "14rem"
    //   logo.style.transform = "translateY(15%)"
    //   logo.style.transition = "transform .5s ease"
    //   logo.style.transition = "height .5s ease"
    // },
    // onEnterBack: function () {
      
    // },
    // onLeaveBack: function () {
      
    // }
  });
  tl.to (".logo" , {
    y:"15%",
    "height": "14rem",
    duration: 1
  })
}

homePageAnimation();
craftPageAnimation();
realPageAnimation();
teamPageAnimation();
meetPageAnimation();
capsulePageAnimation();
footer2Animation();
