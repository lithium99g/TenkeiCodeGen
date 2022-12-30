// TODO: 
//     ✅ Add Tenkei icon, change color in illustrator
//     Copy to clipboard?
//     Delete after some time... 
//     Make it appear automatically

//SL24NWA1, SL24NWA2, SL24NWA3, ..., SL24NWB1, ...
//SL25NWA1, SL25NWA2, ...

// Functions
function codeHour(hour) {
    const times = {
        '0': 'AO', '1': 'BO', '2': 'CO', '3': 'DO', '4': 'EO', '5': 'FO', '6': 'GO',
        '7': 'HO', '8': 'IO', '9': 'JO', '10': 'KO', '11': 'LO', '12': 'AP', '13': 'BP',
        '14': 'CP', '15': 'DP', '16': 'EP', '17': 'FP', '18': 'GP', '19': 'HP', '20': 'IP',
        '21': 'JP', '22': 'KP', '23': 'LP',
    }
    return times[hour];
}

function codeMonth(month) {
    const months = {
        '1': 'A', '2': 'B', '3': 'C', '4': 'D',
        '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I',
        '10': 'J', '11': 'K', '12': 'L',
    }
    return months[month];
}

function codeYear(year) {
    const years = {'2022': 'W', '2023': 'X', '2024': 'Y', '2025': 'Z'}
    return years[year];
}

const isBetween = (number, min, max) => min <= number && number < max;

function codeSecond(second) {
    if (isBetween(second, 0, 10)) return 'A';
    else if (isBetween(second, 10, 20)) return 'B';
    else if (isBetween(second, 20, 30)) return 'C';
    else if (isBetween(second, 30, 40)) return 'D';
    else if (isBetween(second, 40, 50)) return 'E';
    else return 'F';
}

function dd(number) {  // Double digit function
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

function generateCode(animus='A', nation='N') {
    let elements = [animus];
    const now = new Date();
    elements.push(codeMonth(now.getMonth()+1));
    elements.push(dd(now.getDate()));
    elements.push(codeHour(now.getHours()));
    elements.push(dd(now.getMinutes()));
    elements.push(codeYear(now.getFullYear()));
    elements.push(nation);
    elements.push(codeSecond(now.getSeconds()))
    return elements.join('')
}

function generateCode_v2(animus='A', nation='N') {
    let elements = [animus];
    const now = new Date();
    elements.push(codeMonth(now.getMonth()+1));
    elements.push(dd(now.getDate()));
    elements.push(nation);
    elements.push(codeYear(now.getFullYear()));
    return elements.join('')
}

const outputPurchase = document.querySelector('#purchase .output');
const outputClient = document.querySelector('#client .output');

outputPurchase.textContent = generateCode_v2('S');
outputClient.textContent = generateCode_v2('T');
