function calculateTargets() {
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);

    if (isNaN(entryPrice) || isNaN(stopLoss) || entryPrice <= 0 || stopLoss <= 0) {
        alert('Por favor, insira valores válidos para o preço de entrada e stop loss.');
        return;
    }

    const stopDistance = entryPrice - stopLoss;

    const target1 = entryPrice + stopDistance;
    const target2 = entryPrice + 1.5 * stopDistance;
    const target3 = entryPrice + 2 * stopDistance;
    const target4 = entryPrice + 2.5 * stopDistance;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>Alvo 1 </strong>➜ $${target1.toFixed(2)}</p>
        <p><strong>Alvo 2 </strong>➜ $${target2.toFixed(2)}</p>
        <p><strong>Alvo 3 </strong>➜ $${target3.toFixed(2)}</p>
        <p><strong>Alvo 4 </strong>➜ $${target4.toFixed(2)}</p>
    `;
}
function resetForm() {
    document.getElementById('investmentForm').reset();
    document.getElementById('results').innerHTML = '';
}