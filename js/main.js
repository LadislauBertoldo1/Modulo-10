$(document).ready(function () {

    // carousel de imagens com slick

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    //  máscara de telefone

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    //  máscara de CPF

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    //  máscara de CEP

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Valida o formulário

    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
});