const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo('ul', {opacity: 0}, {opacity: 1, duration: 3});
