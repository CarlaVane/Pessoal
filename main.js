var typed= new Typed(".text",{
strings:["desenvolvedora frontend"," desenvolvedora Web"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});


// arquivo.js

// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactoForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Aqui você pode adicionar lógica para enviar os dados para um servidor,
        // por exemplo, usando fetch() ou XMLHttpRequest().
        // Neste exemplo, estamos simulando um tempo de envio com setTimeout.

        setTimeout(function() {
            // Exibir mensagem de formulário enviado
     

            // Limpar campos do formulário após o envio
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            // Alternativamente, você pode usar form.reset() para limpar todos os campos do formulário:
            // form.reset();
        }, 1000); // Simulação de tempo de envio (1 segundo)
    });
});
