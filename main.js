

let resetBtn = document.getElementById("reset-btn");
$("#reset-btn").click(function () {
    let billTotal = document.querySelector("#bill-total").value;
    // let tipPercent = $('input[name=percentage]:checked').val()
    let peopleTotal = document.querySelector("#people-total").value;


    let tipPercent;
    function tipPercentFunc() {

        if (document.getElementById('5').checked) {
            tipPercent = .05;
        }
        else if (document.getElementById('10').checked) {
            tipPercent = '.1'
        }
        else if (document.getElementById('15').checked) {
            tipPercent = '.15'
        }
        else if (document.getElementById('25').checked) {
            tipPercent = '.25'
        }
        else if (document.getElementById('50').checked) {
            tipPercent = '.5'
        }
        else if (document.getElementById('custom-label')) {
            tipPercent = (document.querySelector("#custom-label").value) / 100;


        }
        return tipPercent;

    }

    let customTip = document.querySelector("#custom-label");
    let customTipRadio = document.querySelector("#custom");
    if (customTip === document.activeElement) {
        customTipRadio.prop('checked', true);
    }

    tipPercentFunc();
    console.log(tipPercent);
    let tipPerPerson = (billTotal * tipPercent) / peopleTotal;
    let totalPerPerson = (billTotal / peopleTotal) + tipPerPerson;
    console.log(billTotal);
    console.log(peopleTotal);
    console.log(billTotal / peopleTotal);
    console.log(tipPercent);
    console.log(tipPerPerson);
    console.log(customTip);

    let tipPerPersonhtml = document.querySelector("#tip-per-person");
    tipPerPersonhtml.innerHTML = '$' + tipPerPerson.toFixed(2);

    let totalPerPersonhtml = document.querySelector("#total-per-person");
    totalPerPersonhtml.innerHTML = '$' + totalPerPerson.toFixed(2);

})


