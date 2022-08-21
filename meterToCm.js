function meterToCm(meter) {
    const centemeter = meter * 100;
    return centemeter;
}
const totalMeter = 2;
const totalCentemeter = meterToCm(totalMeter);
console.log('Total Centemeter:', totalCentemeter);