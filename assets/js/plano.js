

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

// Mostra o resultado

function ativarplano(){

    if(window.location.href == "http://127.0.0.1:5500/404.html#start"){
    planostart()
    
  }

  if(window.location.href == "http://127.0.0.1:5500/404.html#pro"){
   planopro()
 
  }
  if(window.location.href == "http://127.0.0.1:5500/404.html#advanced"){
   planoadv()
 
 
  }

    
if(document.getElementById("email").value == document.getElementById("emaildois").value){
    Swal.fire(
        '',
        'Você Colocou Seu Próprio Email Onde Devia Esta o Do Seu Amigo(a)',
        'error'
      )
}
}


function planostart(){
    
    var docRef = db.collection('usuarios').doc(document.getElementById("email").value).docRef.update({
        plano: localStorage.getItem("addplano"),
        sharedum:document.getElementById("emaildois").value,
        
        HorarioDoPlano:str_hora + str_data,
        ctt:document.getElementById("number").value,
    })
    .then(() => {
        Swal.fire({
            title: '<strong>Parabéns</strong>',
            icon: 'success',
            html:
              '<p>Plano Solicitado Com Sucesso</p>',
      
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
            '<a href="index.html">Continuar</a>',
           
    
          })
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });    
}




function planoadv(){
    db.collection("usuarios").where("email", "==", document.getElementById("emaildois").value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          localStorage.setItem("idemaildois", doc.data().id)
         
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    // Add a new document in collection "cities"
db.collection("usuarios").doc(document.getElementById("emaildois").value).update({
    plano: "PLANOSHARED",
    DonoPlano:  document.getElementById("email").value,
    HorarioDoPlano:str_hora + str_data,
})
.then(() => {
    Swal.fire({
        title: '<strong>Parabéns</strong>',
        icon: 'success',
        html:
          '<p>Plano Solicitado Com Sucesso</p>',
  
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
        '<a href="index.html">Continuar</a>',
       

      })
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

db.collection("usuarios").where("email", "==", document.getElementById("emailtres").value)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      localStorage.setItem("idemailtres", doc.data().id)
     
    });
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});

var docRef = db.collection('usuarios').doc(document.getElementById("email").value).update({
    plano: localStorage.getItem("addplano"),
    sharedum:document.getElementById("emaildois").value,
    
    HorarioDoPlano:str_hora + str_data,
    ctt:document.getElementById("number").value,
});

}



function planopro(){
    db.collection("usuarios").where("email", "==", document.getElementById("emaildois").value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          localStorage.setItem("idemaildois", doc.data().id)
         
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
   if(document.getElementById("emaildois").value > ""){
        // Add a new document in collection "cities"
db.collection("usuarios").doc(document.getElementById("emaildois").value).update({
    plano: "PLANOSHARED",
    DonoPlano:  document.getElementById("email").value,
    HorarioDoPlano:str_hora + str_data,
})
.then(() => {
    Swal.fire({
        title: '<strong>Parabéns</strong>',
        icon: 'success',
        html:
          '<p>Plano Solicitado Com Sucesso</p>',
  
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
        '<a href="index.html">Continuar</a>',
       

      })
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
   }
if(document.getElementById("emailtres").value > ""){
    
db.collection("usuarios").where("email", "==", document.getElementById("emailtres").value)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      localStorage.setItem("idemailtres", doc.data().id)
     
    });
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});
// Add a new document in collection "cities"
db.collection("usuarios").doc(document.getElementById("emailtres").value).update({
plano: "PLANOSHARED",
DonoPlano:  document.getElementById("email").value,
HorarioDoPlano:str_hora + str_data,
})
.then(() => {

  Swal.fire({
    title: '<strong>Parabéns</strong>',
    icon: 'success',
    html:
      '<p>Plano Solicitado Com Sucesso</p>',

    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
    '<a href="index.html">Continuar</a>',
   

  })


})
.catch((error) => {
console.error("Error writing document: ", error);
});

}
var docRef = db.collection('usuarios').doc(document.getElementById("email").value)

docRef.update({
    plano: localStorage.getItem("addplano"),
    sharedum:document.getElementById("emaildois").value,
    shareddois:document.getElementById("emailtres").value,
    HorarioDoPlano:str_hora + str_data,
    ctt:document.getElementById("number").value,
}).then(() => {
    Swal.fire({
        title: '<strong>Parabéns</strong>',
        icon: 'success',
        html:
          '<p>Plano Solicitado Com Sucesso</p>',
    
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
        '<a href="index.html">Continuar</a>',
       
    
      })
      
    
    })
    .catch((error) => {
    console.error("Error writing document: ", error);
    });

}


