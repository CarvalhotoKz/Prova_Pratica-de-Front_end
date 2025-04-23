let totalGastos = 0;

document.getElementById('adicionarGasto').addEventListener('click', () => {
    const valorInput = document.getElementById('valor');
    const descricaoInput = document.getElementById('descricao');
    const categoriaSelect = document.getElementById('categoria');
    const valor = parseFloat(valorInput.value);
    const descricao = descricaoInput.value;
    const categoria = categoriaSelect.value;
