const boton=document.getElementById('botonFormulario');
boton.addEventListener("click", function(){
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    
    if(email=="efrennm86@gmail.com" && password=="123456"){
        location.href ='cajero.html?cuenta=cuenta1';
    }else if(email=="efrennm862@gmail.com" && password=="123456"){
        location.href ='cajero.html?cuenta=cuenta2';
    }else if(email=="efrennm863@gmail.com" && password=="123456"){
        location.href ='cajero.html?cuenta=cuenta3';
    }
    
    else{
        const mensaje= document.getElementById('mensaje');
        mensaje.style.display="block";
    }
});