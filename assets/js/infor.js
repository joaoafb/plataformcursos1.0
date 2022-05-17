function inforconta(){
  
    Swal.fire({
        title: '<strong>Informações Da Conta</strong>',
        icon: 'info',
        html:
        '<div style="text-align:left;">' +
          '<b>Nome:</b> <span id="nome"></span> ' +
            '<br>' +
            '<b>Email:</b> <span id="email"></span> ' +
            '<br>' +
            '<b>Data Criação:</b> <span id="datacriacao"></span> ' +
            '</div>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
      })
      document.getElementById("nome").innerHTML = localStorage.getItem("nome")
      document.getElementById("email").innerHTML = localStorage.getItem("email")
      document.getElementById("datacriacao").innerHTML = localStorage.getItem("datacriacao")
}




function meuplano(){
  
    Swal.fire({
        title: '<strong>Informações Sobre Seu Plano</strong>',
        icon: 'info',
        html:
        '<div style="text-align:left;">' +
          '<b>Nome Do Plano:</b> <span id="plano"></span> ' +
            '<br>' +
            '<b>Horario De Ativação:</b> <span id="horarioplano"></span> ' +
            '<br>' +
            '<br>' +
            '<b>Plano Compartilhado</b>  ' +
            '<br>' +
            '<b>Email Usuario 1:</b> <span id="sharedum"></span> ' +
            '<br>' +
            '<b>Email Usuario 2:</b> <span id="shareddois"></span> ' + 
            '</div>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        showConfirmButton: false,
      })
      document.getElementById("plano").innerHTML = localStorage.getItem("plano")
      document.getElementById("horarioplano").innerHTML = localStorage.getItem("horarioplano")
      document.getElementById("sharedum").innerHTML = localStorage.getItem("sharedum")
      document.getElementById("shareddois").innerHTML = localStorage.getItem("shareddois")
}