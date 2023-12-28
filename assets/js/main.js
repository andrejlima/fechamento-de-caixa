function caixa() {
    let vendas = (document.getElementById('vendas').value);
    let cartao = (document.getElementById('cartao').value);
    let pix = (document.getElementById('pix').value);
    let vales = (document.getElementById('vales').value);
    let dh = (document.getElementById('dh').value);
    let show = document.getElementById('resultado');
    let showColor = document.getElementById('resultColor');

    if (vendas !== '' && cartao !== '' && pix !== '' && vales !== '' && dh !== '') {

        let vendas = parseFloat(document.getElementById('vendas').value);
        let cartao = parseFloat(document.getElementById('cartao').value);
        let pix = parseFloat(document.getElementById('pix').value);
        let vales = parseFloat(document.getElementById('vales').value);
        let dh = parseFloat(document.getElementById('dh').value);

        let soma = cartao + pix + vales + dh;
        let pixVales = pix + vales;

        let VendasFormat = vendas.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        let cartaoFormat = cartao.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        let pixValesFormat = pixVales.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        let dhFormat = dh.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        let resultado = soma - vendas;
        let resultadoFormat = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        if (resultado === 0) {
            showColor.style.backgroundColor = "initial";
            show.style.border = '2px solid black';
            showColor.innerText = 'Caixa bateu';
            show.innerHTML = `Resumo <br> Vendas: R$ ${VendasFormat} 
        <br> Cartão: R$ ${cartaoFormat} <br> Pix + Vales: R$ ${pixValesFormat}
        <br> DH: R$ ${dhFormat}`

        } else if (resultado > 0) {
            showColor.style.backgroundColor = "green";
            show.style.border = '2px solid black';
            showColor.innerText = 'Sobrou R$ ' + resultadoFormat;
            show.innerHTML = `Resumo <br> Vendas: R$ ${VendasFormat} 
        <br> Cartão: R$ ${cartaoFormat} <br> Pix + Vales: R$ ${pixValesFormat}
        <br> DH: R$ ${dhFormat}`
        } else {
            showColor.style.backgroundColor = "red";
            show.style.border = '2px solid black';
            showColor.innerText = 'Faltou R$ ' + (resultado * -1).toFixed(2);
            show.innerHTML = `Resumo <br> Vendas: R$ ${VendasFormat} 
        <br> Cartão: R$ ${cartaoFormat} <br> Pix + Vales: R$ ${pixValesFormat}
        <br> DH: R$ ${dhFormat}`
        }
    }
}
