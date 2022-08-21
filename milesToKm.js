function milestoKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const totalMiles = 14;
const totalkilometer = milestoKilometer(totalMiles);
console.log('Kilometer is:', totalkilometer);