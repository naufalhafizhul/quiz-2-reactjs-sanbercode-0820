
const Balok = (...rests) => {
    let volume = 1;
    for (let rest of rests) volume = volume * rest;
    return `Balok = ${volume}`;
}

const Kubus = (...rests) => {
    let volume = 1;
    for (let rest of rests) volume = volume * rest;
    return `Kubus = ${volume}`;
}

console.log(Balok(9, 9, 9));
console.log(Kubus(8, 7, 6));
