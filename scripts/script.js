const amount = document.querySelector('.amount');
const curTo = document.querySelector('.curTo');
const curResult = document.querySelector('.curResult');


let buildCubesList = (xml, currency) => {
    let list = document.querySelector('.' + currency);
    let cubes = xml.querySelectorAll('Cube');
    for (let i = 2; i < cubes.length; i++) {
        let option = document.createElement('option');
        let cubeName = cubes[i].getAttribute('currency');
        let cubeRate = cubes[i].getAttribute('rate');
        option.textContent = `${cubeName}`;
        option.setAttribute('value', `${cubeRate}`)
        list.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch("currency-rates.xml")
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            buildCubesList(xml, 'curTo');
        });
})


let onChangeFunction = () => {
    let x = curTo.value;
    let c = amount.value;
    let xc = x * c;
    curResult.textContent = +xc;
}


amount.addEventListener('input', () => {
    value = amount.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    onChangeFunction();
});
curTo.addEventListener('change', onChangeFunction);