document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // getInputFieldValueById();   
        // const addMoney = getInputFieldValueById();
        // console.log(addMoney);

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        // console.log(addMoney,pinNumber);
    })