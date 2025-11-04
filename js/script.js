document.addEventListener ("DOMContentLoaded", function () {
    "use strict";
    
    var menuToggle = document.querySelector('.menu-toggle');
    var menuList = document.querySelector('#menu ul');
    var menuClose = document.querySelector('.close-menu-toggle');
    var navLinks = document.querySelectorAll('.nav-link'); 
    
    function toggleMenu() {
        menuList.classList.toggle('show');
        
        if (menuClose) {
            if (menuList.classList.contains('show')) {
                menuToggle.style.display = 'none'; 
                menuClose.style.display = 'block'; 
            } else {
                menuToggle.style.display = 'block'; 
                menuClose.style.display = 'none'; 
            }
        }
    }
    
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', toggleMenu);
        
        if (menuClose) {
            menuClose.addEventListener('click', toggleMenu);
            menuClose.style.display = 'none'; 
        }
    }
    
    if (menuList && navLinks.length > 0) {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuList.classList.contains('show')) {
                    toggleMenu(); 
                }
            });
        });
    }
    
    var modal = document.getElementById("aviso-legal-modal");
    var btn = document.getElementById("modal-trigger");
    var span = document.querySelector(".close-button"); 

    if (btn) {
        btn.onclick = function() {
            if (modal) {
                modal.style.display = "block";
            }
        };
    }

    if (span) {
        span.onclick = function() {
            if (modal) {
                modal.style.display = "none";
            }
        };
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});