function enviarmsg(event) {
    event.preventDefault();  //  evita que a tela recarregue

    const nome = document.getElementById('id1').value;  //  Estou criando uma variável chamada nome (nome do usuário) onde ela digitou seu nome
    const mensagem = document.getElementById('id2').value; // Criei uma variável mensagem para a mensagem do usuário
    const telefone = '5581994114798';  //  variável que guarda meu número de telefone (Para onde é enviado a mensagem do9 usuário)

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;  //  variável onde guarda o nome e a mensagem do usuário
    const msgformated = encodeURIComponent(texto);  //  formata espaços para serem enviados por wpp

    const url = `https://wa.me/${telefone}?text=${msgformated}`;  //  criei uma variável que guarda meu número de telefone e guarda a mensagem formatada
    window.open(url, '_blank');  // usado para quando clicar no botão, ser enviado para a parte de mensagem no wpp. _blank (Página nova/Em branco)
}

