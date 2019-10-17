/*Quando foi definido position:absolute no banner para centralizar o componente com relação
ao header, acontece um bug onde o menu quando sai do modo collapse fica atrás do banner.
 Para corrigir esse bug foi criado esse arquivo, que faz com que o banner seja deslocado para baixo
 quando o menu sai do collapse.

    $('#collapse-navbar') = seleciona o componente
    .on('show.bs.collapse' = classe bootstrap que representa quando o botão está sendo exibido
    function () = função a ser chamada
    $('.banner') = componente que vai sofrer alteração
    .css('transform', 'translate(-50%, 13%)' = altera o css do componente selecionado
*/
$('#collapse-navbar').on('show.bs.collapse', function () {
    $('.banner').css('transform', 'translate(-50%, 13%)')
});

$('#collapse-navbar').on('hide.bs.collapse', function () {
    $('.banner').css('transform', 'translate(-50%, -50%)')
});