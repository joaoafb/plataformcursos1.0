function loadpage(){
    if(localStorage.getItem("cadastrado") == ""){
        
    }else{
        document.getElementById("emaillogin").value = localStorage.getItem("email")
    }

    if(localStorage.getItem("Login") == "logado"){
       logado()
    }
}


function cadastro(){


    var docRef = db.collection("usuarios").doc(document.getElementById("email").value);

docRef.get().then((doc) => {
    if (doc.exists) {
        Swal.fire({
            title: '<strong>Já Existe Conta Com Esse Email</u></strong>',
            icon: 'error',
            
             showConfirmButton:false,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            
           
            
           
          })
    } else {
        // doc.data() will be undefined in this case
       

db.collection("usuarios").doc(document.getElementById("email").value).set({
    nome:document.getElementById("nome").value,
    email:document.getElementById("email").value,
    senha:document.getElementById("senha").value,
    id:document.getElementById("email").value +  document.getElementById("senha").value,
    hrcriacao: str_data + " as " + str_hora,
 })
 .then(() => {
    localStorage.setItem("cadastrado", "sim")

    localStorage.setItem("email",document.getElementById("email").value )

    
     Swal.fire({
         title: '<strong>Conta Criada Com Sucesso</u></strong>',
         icon: 'success',
         html:
           'Agora Você Tem Total Acesso a Nossa Plataforma!', 
           
         showCloseButton: true,
         showCancelButton: false,
         focusConfirm: true,
         confirmButtonText:
           '<i  class="fa fa-thumbs-up"></i> Continuar!',
         confirmButtonColor:'#3056d3',
        
 
        
       })
      
 })
 .catch((error) => {
     console.error("Error writing document: ", error);
 });
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


}


function login(){

    db.collection("usuarios").where("id", "==", document.getElementById("emaillogin").value +  document.getElementById("senhalogin").value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            localStorage.setItem("Login", "logado")
            localStorage.setItem("email", doc.data().email )
            localStorage.setItem("senha", doc.data().senha)
            localStorage.setItem("nome", doc.data().nome)
            localStorage.setItem("datacriacao", doc.data(). hrcriacao)
            localStorage.setItem("plano", doc.data().plano)
            localStorage.setItem("horarioplano", doc.data().HorarioDoPlano)
            localStorage.setItem("sharedum", doc.data().sharedum)
                    localStorage.setItem("shareddois", doc.data().shareddois)
        
            logado()
           
        }
        );
        
    })
  
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });



    
    
}

function index(){
    location.href = "index.html"
}

function logado(){
    Swal.fire({
        title: '<strong>Logado Com Sucesso!</u></strong><br><br><a href="index.html" class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark" style="background-color:#3056d3;" >Continuar</a>',
        icon: 'success',
       
         showConfirmButton:false,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        
        
       
      })
}



function checkaccount(){
    if(localStorage.getItem("Login") == "logado"){
        document.getElementById("btnslogin").style.display = "None"
        document.getElementById("myname").innerHTML = "Olá, " + localStorage.getItem("nome")
    }
    else{

        document.getElementById("dropconta").style.display = "none"
    }
   
}

function deslogar(){
    Swal.fire({
        title: '<strong>Deslogado Com Sucesso!</u></strong><br><br><button onclick=" localStorage.clear();    location.reload()" class="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark" style="background-color:#3056d3;" >Continuar</a>',
        icon: 'success',
       
         showConfirmButton:false,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        
        
       
      })
     
}



// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;
