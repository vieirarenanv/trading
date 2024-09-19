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

    function getDecimalPlaces(number) {
        const numberString = number.toString();
        if (numberString.indexOf('.') === -1) return 0;
        return numberString.split('.')[1].length;
    }

    const decimalPlacesEntry = getDecimalPlaces(entryPrice);
    const decimalPlacesStopLoss = getDecimalPlaces(stopLoss);
    const decimalPlaces = Math.max(decimalPlacesEntry, decimalPlacesStopLoss);

    const formattedTarget1 = target1.toFixed(decimalPlaces);
    const formattedTarget2 = target2.toFixed(decimalPlaces);
    const formattedTarget3 = target3.toFixed(decimalPlaces);
    const formattedTarget4 = target4.toFixed(decimalPlaces);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p><strong>Alvo 1 </strong>➜ $${formattedTarget1}</p>
        <p><strong>Alvo 2 </strong>➜ $${formattedTarget2}</p>
        <p><strong>Alvo 3 </strong>➜ $${formattedTarget3}</p>
        <p><strong>Alvo 4 </strong>➜ $${formattedTarget4}</p>
    `;
}

function resetForm() {
    document.getElementById('investmentForm').reset();
    document.getElementById('results').innerHTML = '';
}
