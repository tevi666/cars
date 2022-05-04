const dataCar = document.querySelector('.data');
const select = document.querySelector('select');
const getData = () => {
    return fetch('cars.json')
        .then(res => res.json())
        .catch(err => {
            console.log("ERROR: " + err.message);
        });
};
select.addEventListener('change', e => {
    getData().then(data => {
        const select = data.cars.filter(car => car.brand === e.target.value);
        try {
            if (select.length === 0) {
                throw new Error('Тачка не выбрана');
            }
            dataCar.innerHTML = '';
            dataCar.innerHTML = `
				<p>Тачка ${select[0].brand} ${select[0].model} </p>
				<p>Цена ${select[0].price} ₽</p>
			`;
        } catch (err) {
            dataCar.innerHTML = '';
            dataCar.innerHTML = `<p>${err}</p>`;
        }
    }).catch(err => {
        console.log("ERROR: " + err.message);
    });
});