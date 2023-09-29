$(document).on("submit", "#cadastroClientes", function(event) {
	event.preventDefault()
	let dados = $(this).serialize()
    $.ajax({
        type: "POST",
        url: "seu_script_php.php",
        data: dados,
        success: function (data) {
            console.log("Resposta do servidor: " + data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Erro de requisição: " + textStatus, errorThrown);
        }
    });
})
