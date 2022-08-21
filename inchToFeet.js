/* const myInches = 12;
const myFeet = myInches / 12;
console.log('My Feet:', myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet:', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('Dadi Feet:', dadiFeet); 

==> Eivabe ekadik bar na kaj korea function ea ekbarii kora jay
*/

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada Feet:', dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('Nana Feet:', nanaFeet);

const jantushInches = 60;
const jantushFeet = inchToFeet(jantushInches);
console.log('Jantush Feet:', jantushFeet);