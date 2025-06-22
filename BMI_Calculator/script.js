let forms = document.querySelector('form');



forms.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('.result');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please Give a Valid Height ${height}`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please Give a Valid Weight ${weight}`;
    }
    else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        if (bmi <= 18.6) results.innerHTML = `<span>${bmi} Under Weight</span>`;
        if (bmi > 18.7 && bmi <= 24.9) results.innerHTML = `<span>${bmi} Normal Weight </span>`;
        if (bmi > 24.9) results.innerHTML = `<span>${bmi} Over Weight (need weight loss)</span>`;
    }


});
