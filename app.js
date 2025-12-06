// template_39bw9hp
// service_7vptyjw
// Lla1TgnGzMUoZCynX



let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
   if(contrastToggle){
    document.body.classList += ' dark-theme'
   }else{
    document.body.classList.remove('dark-theme')
   }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success'); 
    loading.classList += ' modal__overlay--visible';
    emailjs
        .sendForm(
            'service_7vptyjw',
            'template_39bw9hp',
            event.target,
            'Lla1TgnGzMUoZCynX'
        ).then(() =>{
            loading.classList.remove('modal__overlay--visible');
            success.classList += ' modal__overlay--visible';
        }).catch(() =>{
            loading.classList.remove('modal__overlay--visible');
            alert(
                "Email service is currently unavailable. Please contact me directly at maria.sui@gmail.com"
            );
        })
}


let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}