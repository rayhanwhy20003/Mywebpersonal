const menuToggle = document.querySelector('.menu-toggle input');
        const nav = document.querySelector('nav ul');

        menuToggle.addEventListener('click', function(){
            nav.classList.toggle('slide');
        });
        
       

    
        function checkmode(){
            let checkbox = document.getElementById("switch");
            let body = document.querySelector('body');
            let nav = document.querySelector('nav');
            let home = document.querySelector('.home p');
            let framework = document.querySelector('.framework');
            let logo = document.querySelector('.logo h1');
            let about = document.querySelector('.about');
            let portfolio = document.querySelector('.project');
            let blog = document.querySelector('.blog p');
            let image = document.querySelector("#image");
            
           
            

            if(checkbox.checked == false){
                checkbox.checked = true;
                body.style.backgroundColor = "#0A2E48";
                nav.style.backgroundColor = "#0A2E48";
                home.style.color = "white";
                framework.style.color ="white";
                logo.style.color = "white";
                about.style.color = "white";
                blog.style.color = "white";
                portfolio.style.color = "white";
                image.classList.add("fa-moon");
                image.style.color = "white";
               

                
                
    

            
            }else{
                checkbox.checked = false;
                body.style.backgroundColor = "#cececf";
                nav.style.backgroundColor = "#414142";
                home.style.color = "black";
                framework.style.color = "black";
                logo.style.color = "white";
                about.style.color = "black";
                blog.style.color = "black";
                portfolio.style.color = "black";
                image.classList.remove("fa-moon");
                image.classList.add("fa-sun");
                image.style.color = "yellow";
            }
        }
        ScrollReveal({ 
            reset: true,
            distance: '125px',
            duration:2000,
            delay:200
        });

        ScrollReveal().reveal('.image img',{ origin: 'left' });
        ScrollReveal().reveal('.text-content',{ origin: 'right' });
        ScrollReveal().reveal('#foto',{ origin: 'bottom' });
        ScrollReveal().reveal('.project',{ origin: 'bottom' });
        ScrollReveal().reveal('.project-box',{ origin: 'left' });
        ScrollReveal().reveal('.blog-box',{ origin: 'bottom' });
        ScrollReveal().reveal('.blog-container',{ origin: 'bottom' });
        ScrollReveal().reveal('.contact-text',{ origin: 'right' });
        ScrollReveal().reveal('.from-box',{ origin: 'left' });
        ScrollReveal().reveal('.text-area',{ origin: 'right' });
        ScrollReveal().reveal('.btn',{ origin: 'bottom' });
        ScrollReveal().reveal('.footer-content',{ origin: 'bottom' });