function kgToGram(kg) {
    const gram = kg * 1000;
    return gram;
}
const totalKg = 15;
const totalGram = kgToGram(totalKg);
console.log('Total Gram:', totalGram);