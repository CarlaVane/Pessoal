document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do Typed.js
    var typed = new Typed(".text", {
        strings: ["Desenvolvedora Full-Stack", "Estudante de Engenharia de Software", "Criadora de Soluções Digitais"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });

    // Formulário de Contato
    var form = document.getElementById('contactoForm');
    var messageSent = document.getElementById('messageSent');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obter valores do formulário
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Simulação de envio do formulário
        setTimeout(function() {
            // Exibe a mensagem de sucesso
            messageSent.style.display = "block";
            form.reset(); // Limpa o formulário

            // Esconde a mensagem de sucesso após 3 segundos
            setTimeout(function() {
                messageSent.style.display = "none";
            }, 3000);
        }, 1000);
    });
});
