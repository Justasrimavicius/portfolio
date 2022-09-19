
function headerFade(){
    const header = document.querySelector('header');

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 100){
            header.style.opacity=0;
        }
        if(window.scrollY == 0){
            header.style.opacity=1;
        }
    })



}

export default headerFade;