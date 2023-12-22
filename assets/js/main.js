
function caixa() {

    let vendas = parseFloat(document.getElementById('vendas').value);
    let cartao = parseFloat(document.getElementById('cartao').value);
    let pix = parseFloat(document.getElementById('pix').value);
    let vales = parseFloat(document.getElementById('vales').value);
    let dh = parseFloat(document.getElementById('dh').value);
    let show = document.getElementById('resultado');

    console.log('vendas:', vendas);
    console.log('cartao:', cartao);
    console.log('pix:', pix);
    console.log('vales:', vales);
    console.log('dh:', dh);

    let soma = cartao + pix + vales + dh;

    let resultado = soma - vendas;

    console.log(soma)
    console.log(resultado)

    if (resultado === 0) {
        show.innerText = 'Caixa bateu';

    } else if (resultado > 0) {
        show.innerText = 'Sobrou R$ ' + resultado;
    } else {
        show.innerText = 'Faltou R$ ' + resultado;
    }
}
