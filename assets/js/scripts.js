$(function () {
    /*--=============================== 
    TOOLTIP
    =============================*/
    $('[data-toggle="tooltip"]').tooltip()


    /*--=============================== 
        PROPIEDADES DEL OBJETOS
         =============================*/
    let p = {
        navegacion: document.querySelectorAll('.nav-link a'),
        posicionScroll:0,
        enlace: null,
        intervalo:null,
        destinoScroll:0,
        padding:0

    }

    let m = {
        inicioScroll: function(){
            for(let i = 0; i < p.navegacion.length; i++){
                p.navegacion[i].addEventListener('click', m.desplazamiento)
            }
        },
        desplazamiento: function(e){
            e.preventDefault();
            p.enlace = e.target.getAttribute('href');
            p.destinoScroll = document.querySelector(p.enlace).offsetTop - 80;

            p.intervalo = setInterval(() => {

                if(p.posicionScroll < p.destinoScroll){
                    p.posicionScroll += 100;

                    if(p.posicionScroll >= p.destinoScroll){
                        p.posicionScroll = p.destinoScroll;

                        clearInterval(p.intervalo)
                    }
                }else{
                    p.posicionScroll -= 100;

				    if(p.posicionScroll <= p.destinoScroll){

					p.posicionScroll = p.destinoScroll;

					clearInterval(p.intervalo)

				}
                }

                window.scrollTo(0, p.posicionScroll )

            }, 100)
            
        }
    }

    m.inicioScroll();
  })