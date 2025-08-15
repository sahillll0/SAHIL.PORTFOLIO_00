// 1. Initialize Locomotive Scroll
const scrolll = new LocomotiveScroll({
  el: document.querySelector('#main'), // The main scroll container
  smooth: true
});

// 2. Make navbar links work with Locomotive Scroll
document.querySelectorAll('a[data-scroll]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Stop normal jump
    const target = this.getAttribute('href'); // e.g. "#page2"
    scroll.scrollTo(target); // Smooth scroll to that section
  });
});











// Initialize Lenis
const lenis = new Lenis({

});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

gsap.registerPlugin(ScrollTrigger);




let cursor = document.querySelector("#cursor")
let body = document.querySelector("body")

document.addEventListener("mousemove", function (move) {
  cursor.style.left = move.x + "px"
  cursor.style.top = move.y + "px"
})

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,

});




// Select the SAHIL text
// const sahil = document.querySelector(".sahil");

// gsap.from(".sahil", {
//   y: -150,          // drops from top
//   opacity: 0,       // fades in
//   duration: 1.5,     // animation time
// });

const tl = gsap.timeline();

// Set initial states
gsap.set(".logo", { x: -100, opacity: 0 });
gsap.set(".dots", { scale: 0, opacity: 0 });
gsap.set(".original", { y: -50, opacity: 0 });
gsap.set(".sahil", {
  scale: 0,
  opacity: 0,
  rotationX: 1
});
gsap.set(".page1-bottom div", {
  y: 100,
  opacity: 0,
  scale: 0.8
});
gsap.set(".bg-circle", {
  scale: 0,
  opacity: 0
});

// Background circles animation
tl.to(".bg-circle", {
  scale: 1,
  opacity: 1,
  duration: 2,
  stagger: 0.3,
  ease: "elastic.out(1, 0.5)"
}, 0);

// Navbar animations
tl.to(".logo", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "back.out(1.7)"
}, 0.5)
  .to(".dots", {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "bounce.out"
  }, 0.8)
  .to(".original", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "back.out(1.7)"
  }, 1);

// SAHIL text animation - spectacular entrance
tl.to(".sahil", {
  scale: 1,
  opacity: 1,
  rotationX: 0,
  duration: 2,
  ease: "elastic.out(0.2, 0.3)",
  onComplete: () => {
    // Add continuous subtle animation to SAHIL
    gsap.to(".sahil", {
      scale: 1.02,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }
}, 1.5);

// Bottom section animations
tl.to(".location-info", {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "back.out(1.7)"
}, 2.5)
  .to(".availability-info", {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.7)"
  }, 2.7)
  .to(".role-info", {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(1.7)"
  }, 2.9);

// Additional hover animations
document.querySelectorAll('.page1-bottom div').forEach(div => {
  div.addEventListener('mouseenter', () => {
    gsap.to(div.querySelector('i'), {
      rotation: 360,
      scale: 1.2,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
  });

  div.addEventListener('mouseleave', () => {
    gsap.to(div.querySelector('i'), {
      rotation: 0,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
  });
});

// Button hover animation
document.querySelector('.right button').addEventListener('mouseenter', () => {
  gsap.to('.original', {
    y: -3,
    duration: 0.3,
    ease: "power2.out"
  });
});

document.querySelector('.right button').addEventListener('mouseleave', () => {
  gsap.to('.original', {
    y: 0,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Logo click animation
document.querySelector('.logo').addEventListener('click', () => {
  gsap.to('.logo', {
    rotation: 360,
    scale: 1.1,
    duration: 0.8,
    ease: "back.out(1.7)",
    onComplete: () => {
      gsap.to('.logo', {
        rotation: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });
});

// Parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth) - 0.5;
  const mouseY = (e.clientY / window.innerHeight) - 0.5;

  gsap.to('.bg-circle', {
    x: mouseX * 50,
    y: mouseY * 50,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
  });

  gsap.to('.sahil', {
    x: mouseX * 20,
    y: mouseY * 20,
    duration: 1,
    ease: "power2.out"
  });
});

// Page 3 typing animation
let textElement = document.querySelector(".page3-main .page-3-anim");
if (textElement) {
  let textContent = textElement.textContent;
  textElement.innerHTML = textContent.split("").map(letter => `<span>${letter}</span>`).join("");

  // GSAP typing animation
  gsap.from(".page3-main .page-3-anim span", {
    opacity: 0,
    x: -20,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".page3-main .page-3-anim",
      scroller: "#main",
      start: "top 70%",
    }
  });
}

// Image scale up effect


// page 7 skills


var swiper = new Swiper(".page6-main", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 5000, // Larger number = slower movement
  autoplay: {
    delay: 0, // Continuous movement
    disableOnInteraction: false,
  },
});

// Add after existing code...
// Mobile detection and optimization
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Adjust GSAP animations for mobile
  gsap.defaults({
    duration: 0.5,
    ease: "power2.out"
  });

  // Disable parallax on mobile
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(el => el.removeAttribute('data-parallax'));

  // Adjust smooth scroll settings
  locoScroll.destroy();
  locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
      smooth: true,
      inertia: 0.8,
      getDirection: true
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true
    }
  });
}

// Optimize animations
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true
});

// Update ScrollTrigger on resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
    if (locoScroll) {
      locoScroll.update();
    }
  }, 250);
}, { passive: true });

// Better touch handling for mobile
document.querySelectorAll('.page-3-card').forEach(card => {
  card.addEventListener('touchstart', function() {
    gsap.to(this, {
      scale: 0.95,
      duration: 0.2
    });
  }, { passive: true });

  card.addEventListener('touchend', function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.2
    });
  }, { passive: true });
});
// Handle mobile device detection


// Optimize scroll performance
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
      // Update animations that depend on scroll
      ScrollTrigger.update();
    }, 16);
  }
}, { passive: true });

// Handle window resize
window.addEventListener('resize', () => {
  // Update ScrollTrigger
  ScrollTrigger.refresh();
  
  // Update any position-dependent animations
  gsap.set(".sahil", { clearProps: "all" });
  tl.restart();
}, { passive: true });


gsap.registerPlugin(ScrollTrigger);

// ...existing code...

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page refresh
      
      // Get form data
      const formData = new FormData(contactForm);
      const resultElement = document.getElementById('result');
      
      // Show loading state
      resultElement.textContent = 'Sending message...';
      resultElement.style.color = '#007bff';
      
      // Send form data using fetch (Web3Forms)
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          resultElement.textContent = 'Message sent successfully! Thank you for reaching out.';
          resultElement.style.color = '#28a745';
          contactForm.reset(); // Clear the form
        } else {
          resultElement.textContent = 'Failed to send message. Please try again.';
          resultElement.style.color = '#dc3545';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultElement.textContent = 'An error occurred. Please try again later.';
        resultElement.style.color = '#dc3545';
      });
    });
  }
});

// Remove the old handleSubmit function and event listener
// The new implementation above replaces it

// Mobile Navbar Click Functionality
// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
  const center = document.querySelector('.center');
  const navDots = document.querySelector('.nav-dots');
  const navLinks = document.querySelector('.nav-links');
  
  if (navDots && center) {
    // Toggle navigation on click
    navDots.addEventListener('click', function(e) {
      e.preventDefault();
      center.classList.toggle('active');
    });

    // Close navigation when clicking outside
    document.addEventListener('click', function(e) {
      if (!center.contains(e.target)) {
        center.classList.remove('active');
      }
    });

    // Close navigation when clicking on a nav link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', function() {
        center.classList.remove('active');
      });
    });
  }
});

// Enhanced skill animation speed control
// Add this to make skills animation even more responsive
document.addEventListener('DOMContentLoaded', function() {
  const skillsContainer = document.querySelector('.skills-container');
  const toolsContainer = document.querySelector('.skill-tool .skills-container');
  
  // Faster animation on mobile
  if (window.innerWidth <= 750) {
    if (skillsContainer) {
      const skillsSwiper = skillsContainer.querySelector('.skills-swiper');
      if (skillsSwiper) {
        skillsSwiper.style.animationDuration = '12s'; // Even faster
      }
    }
    
    if (toolsContainer) {
      const toolsSwiper = toolsContainer.querySelector('.tools-swiper');
      if (toolsSwiper) {
        toolsSwiper.style.animationDuration = '15s'; // Even faster
      }
    }
  }
});

// // Optional: Add touch support for better mobile experience
// let touchStartX = 0;
// let touchEndX = 0;

// document.addEventListener('touchstart', function(e) {
//   touchStartX = e.changedTouches[0].screenX;
// });

// document.addEventListener('touchend', function(e) {
//   touchEndX = e.changedTouches[0].screenX;
//   handleSwipe();
// });

// function handleSwipe() {
//   const center = document.querySelector('.center');
//   if (touchEndX < touchStartX - 50) {
//     // Swipe left - close menu
//     center.classList.remove('active');
//   }
//   if (touchEndX > touchStartX + 50) {
//     // Swipe right - you can add functionality here if needed
//   }
// }

// Mobile Menu Handler
const mobileMenu = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Improved Mobile Animations
if (window.innerWidth <= 750) {
  // Adjust GSAP animations for mobile
  gsap.defaults({
    duration: 0.5,
    ease: "power2.out"
  });

  // Intersection Observer for card animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all cards
  document.querySelectorAll('.page-3-card').forEach(card => {
    observer.observe(card);
  });

  // Mobile-specific scroll animations
  ScrollTrigger.matchMedia({
    "(max-width: 750px)": function() {
      gsap.to(".sahil", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".sahil",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }
  });
}

// ...existing code...

// Mobile-specific animations
if (window.matchMedia("(min-width: 371px) and (max-width: 750px)").matches) {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px"
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe elements
  const page2Main = document.querySelector('.page2-main');
  const imgBox5 = document.querySelector('.imgbox5');

  if (page2Main) animationObserver.observe(page2Main);
  if (imgBox5) animationObserver.observe(imgBox5);

}


// Mobile-specific initialization
document.addEventListener('DOMContentLoaded', function() {
  const isMobile = window.matchMedia("(min-width: 371px) and (max-width: 750px)").matches;
  
  if (isMobile) {
    initMobileAnimations();
    setupMobileScrollTriggers();
    optimizeForMobile();
  }
});

function initMobileAnimations() {
  // Mobile-optimized GSAP settings
  gsap.defaults({
    duration: 0.8,
    ease: "power2.out"
  });
  
  // Mobile Landing Animation
  const mobileTl = gsap.timeline();
  
  // Set initial states for mobile
  gsap.set(".logo", { x: -50, opacity: 0 });
  gsap.set(".nav-dots", { scale: 0, opacity: 0 });
  gsap.set(".original", { y: -30, opacity: 0 });
  gsap.set(".sahil", { scale: 0.5, opacity: 0, y: 50 });
  gsap.set(".page1-bottom div", { y: 50, opacity: 0 });
  
  // Mobile entrance sequence
  mobileTl.to(".logo", {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: "back.out(1.5)"
  })
  .to(".nav-dots", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "bounce.out"
  }, 0.2)
  .to(".original", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "back.out(1.5)"
  }, 0.4)
  .to(".sahil", {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "elastic.out(0.5, 0.3)"
  }, 0.6)
  .to(".page1-bottom div", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.3)"
  }, 1.2);
}

function setupMobileScrollTriggers() {
  // Page 2 Animation
  gsap.fromTo(".page2-main", 
    { 
      scale: 0.8, 
      opacity: 0,
      y: 50
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Page 3 Cards Animation
  gsap.fromTo(".page-3-card", 
    {
      y: 80,
      opacity: 0,
      scale: 0.8
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.3)",
      scrollTrigger: {
        trigger: ".page3-bottom",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Page 3 Main Text Animation
  gsap.fromTo(".page3-main h1", 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page3-main",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Page 5 Image Animation
  gsap.fromTo(".imgbox5", 
    {
      scale: 0.6,
      opacity: 0,
      rotation: -10
    },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: "elastic.out(0.3, 0.4)",
      scrollTrigger: {
        trigger: ".sahilimage",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Skills Animation
  gsap.fromTo(".skillbox", 
    {
      y: 100,
      opacity: 0,
      scale: 0.7
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: ".page6-main",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
  
  // Contact Form Animation
  gsap.fromTo(".contact-card", 
    {
      y: 80,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
}

function optimizeForMobile() {
  // Disable cursor following on mobile
  const cursor = document.querySelector("#cursor");
  if (cursor) {
    cursor.style.display = "none";
  }
  
  // Enhanced touch interactions
  document.querySelectorAll('.page-3-card').forEach(card => {
    let touchTimeout;
    
    card.addEventListener('touchstart', function(e) {
      e.preventDefault();
      clearTimeout(touchTimeout);
      
      gsap.to(this, {
        scale: 0.95,
        duration: 0.15,
        ease: "power2.out"
      });
      
      // Long press effect
      touchTimeout = setTimeout(() => {
        gsap.to(this, {
          backgroundColor: "#e74a3f",
          duration: 0.3
        });
      }, 200);
    }, { passive: false });
    
    card.addEventListener('touchend', function(e) {
      e.preventDefault();
      clearTimeout(touchTimeout);
      
      gsap.to(this, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "back.out(1.3)"
      });
    }, { passive: false });
  });
  
  // Optimize scroll performance
  let ticking = false;
  
  function updateScrollAnimations() {
    // Update any scroll-dependent animations here
    ticking = false;
  }
  
  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollAnimations);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  
  // Mobile navigation enhancement
  const navDots = document.querySelector('.nav-dots');
  const navLinks = document.querySelector('.nav-links');
  
  if (navDots && navLinks) {
    navDots.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (navLinks.style.display === 'flex') {
        gsap.to(navLinks, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            navLinks.style.display = 'none';
          }
        });
      } else {
        navLinks.style.display = 'flex';
        gsap.fromTo(navLinks, 
          { opacity: 0, y: -20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4,
            ease: "back.out(1.3)"
          }
        );
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !navDots.contains(e.target)) {
        gsap.to(navLinks, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            navLinks.style.display = 'none';
          }
        });
      }
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu
        gsap.to(navLinks, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            navLinks.style.display = 'none';
          }
        });
      }
    });
  });
  
  // Form enhancements for mobile
  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      gsap.to(this, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out"
      });
    });
    
    input.addEventListener('blur', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });
  
  // Intersection Observer for better performance
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  };
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe all major sections
  document.querySelectorAll('.page-3, .page-4, .page-5, .page6, .page7').forEach(section => {
    animationObserver.observe(section);
  });
}

// Replace the existing mobile detection code with this enhanced version
window.addEventListener('resize', () => {
  const isMobile = window.matchMedia("(min-width: 371px) and (max-width: 750px)").matches;
  
  if (isMobile) {
    ScrollTrigger.refresh();
    initMobileAnimations();
  }
});



let locoScroll;

function initLocomotive() {
    if (window.innerWidth >= 371 && window.innerWidth <= 750) {
        if (!locoScroll) {
            locoScroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true
            });
            console.log('Locomotive Scroll initialized for tablet/mobile range.');
        }
    } else {
        if (locoScroll) {
            locoScroll.destroy();
            locoScroll = null;
            console.log('Locomotive Scroll destroyed for outside range.');
        }
    }
}

// Run on load
initLocomotive();

// Run on resize
window.addEventListener('resize', () => {
    initLocomotive();
});
