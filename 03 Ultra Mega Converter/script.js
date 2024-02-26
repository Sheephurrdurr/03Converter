// Function checks which option is selected and displays the div matching the type
(function() {
    let select = document.getElementById("operationSelect");

    let displayCelToFahr = document.getElementById("celToFahrDiv");
    let displayFahrToCel = document.getElementById("fahrToCelDiv");
    let displayKelToCel = document.getElementById("KelToCelDiv");
    let displayCeltoKel = document.getElementById("CelToKelDiv");
    let displayYtoS = document.getElementById("yearsToSecondsDiv")

    function displayOperation() {
        let selectedOption = select.value; // selected option stored in variable
        if(selectedOption === "FtoC") { // If selectedOption matched Fahrenheit to Celcius, display div
            displayFahrToCel.style.display = "block";
            displayCelToFahr.style.display = "none";
            displayKelToCel.style.display = "none";
            displayCeltoKel.style.display = "none";
            displayYtoS.style.display = "none";

        } else if (selectedOption === "CtoF") { // If selectedOption match Celcius to Fahrenheit, display div
            displayCelToFahr.style.display = "block";
            displayFahrToCel.style.display = "none";
            displayKelToCel.style.display = "none";
            displayCeltoKel.style.display = "none";
            displayYtoS.style.display = "none";

        } else if (selectedOption === "KtoC") { // If selectedOption match Kelvin to Celcius, display div
            displayKelToCel.style.display = "block";
            displayCelToFahr.style.display = "none";
            displayFahrToCel.style.display = "none";
            displayCeltoKel.style.display = "none";
            displayYtoS.style.display = "none";

        } else if (selectedOption === "CtoK") { // If selectedOption match Celcius to Kelvin, display div
            displayCeltoKel.style.display = "block"
            displayKelToCel.style.display = "none";
            displayCelToFahr.style.display = "none";
            displayFahrToCel.style.display = "none";
            displayYtoS.style.display = "none";

        } else if (selectedOption === "YtoS") { // If selectedOption match Years to Seconds, display div
            displayYtoS.style.display = "block";
            displayCelToFahr.style.display = "none";
            displayFahrToCel.style.display = "none";
            displayCeltoKel.style.display = "none";
            displayKelToCel.style.display = "none";

        }
    } 

    select.addEventListener("change", displayOperation);

    
})();

(function() {
            // Fahrenheit to Celsius
    let resultFtoC = document.getElementById("resultLblFtoC");
    let inputFtoC = document.getElementById("userInputFtoC");
    let calculateBtnFtoC = document.getElementById("calculateBtnFtoC");

        function calcFtoC() {
            let inputFloatFtoC = parseFloat(inputFtoC.value); // Store userinput as float in variable
            if (isNaN(inputFloatFtoC)) { // Check for Not a Number in userinput
                resultFtoC.innerHTML = "Type a number"; 
            } else {
                let convertedValue = (inputFloatFtoC - 32) * 5 / 9; // Run the math and store in variable
                resultFtoC.innerHTML = convertedValue.toFixed(2) + " °C"; // display variable, with max 2 decimals
            }
        }
    
        inputFtoC.addEventListener("input", function() {
            resultFtoC.innerHTML = ""; // Delete stuff that's not being used anymore on new input
        });

        calculateBtnFtoC.addEventListener("click", calcFtoC);

})();

(function() {
            // Celsius to Fahrenheit
    let resultCtoF = document.getElementById("resultLblCtoF");
    let inputCtoF = document.getElementById("userInputCtoF");
    let calculateBtnCtoF = document.getElementById("calculateBtnCtoF");

    function calcCtoF() {
        let inputFloatCtoF = parseFloat(inputCtoF.value);
        if (isNaN(inputFloatCtoF)) {
            resultCtoF.innerHTML = "Type a number";
        } else {
            let convertedValue = (inputFloatCtoF * 9/5) + 32;
            resultCtoF.innerHTML = convertedValue.toFixed(2) + " °C"; 
        }
    }

    inputCtoF.addEventListener("input", function() {
        resultCtoF.innerHTML = "";
    });

    calculateBtnCtoF.addEventListener("click", calcCtoF);
})();

(function() {
            // Kelvin to Celcius
    let resultKtoC = document.getElementById("resultLblKtoC");
    let inputKtoC = document.getElementById("userInputKtoC");
    let calculateBtnKtoC = document.getElementById("calculateBtnKtoC");

    function calcKtoC() {
        let inputFloatKtoC = parseFloat(inputKtoC.value);
        if (isNaN(inputFloatKtoC)) {
            resultKtoC.innerHTML = "Type a number";
        } else {
            let convertedValue = inputFloatKtoC - 273.15;
            resultKtoC.innerHTML = convertedValue.toFixed(2) + " °C"; 
        }
    }

    inputKtoC.addEventListener("input", function() {
        resultKtoC.innerHTML = "";
    });

    calculateBtnKtoC.addEventListener("click", calcKtoC);
})();

(function() {
            // Celcius to Kelvin
    let resultCtoK = document.getElementById("resultLblCtoK");
    let inputCtoK = document.getElementById("userInputCtoK");
    let calculateBtnCtoK = document.getElementById("calculateBtnCtoK");

    function calcCtoK() {
        let inputFloatCtoK = parseFloat(inputCtoK.value);
        if (isNaN(inputFloatCtoK)) {
            resultCtoK.innerHTML = "Type a number";
        } else {
            let convertedValue = inputFloatCtoK + 273.15;
            resultCtoK.innerHTML = convertedValue.toFixed(2) + " °C"; 
        }
    }

    inputCtoK.addEventListener("input", function() {
        resultCtoK.innerHTML = "";
    });

    calculateBtnCtoK.addEventListener("click", calcCtoK);
})();
            // Converts Years to Seconds
(function() {
    let convBtn = document.getElementById("calculateBtnYtoS");
    let inputField = document.getElementById("userInputYtoS");
    let result = document.getElementById("resultYtoS");

    function convertTime() {
    let inputFloat = parseFloat(inputField.value);

    let convertedTime = inputFloat * 31536000;
    result.innerHTML = convertedTime.toLocaleString();
    
}

    convBtn.addEventListener("click", convertTime);
})();
            // Reset inputfield and result
(function() {
    let results = document.getElementsByClassName("resultDivStyle");
    let inputs = document.getElementsByClassName("inputStyle");

    let select = document.getElementById("operationSelect");

    function resetNumbers() {
        for (let i = 0; i < results.length; i++) {
            results[i].innerHTML = "Type a number";
        }
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""; // Clear input
        }
    }

    select.addEventListener("change", resetNumbers);
})();



/*
// Previous try, multiple calculations in one function. Uses if else. 
// Compares selectedOption.value to current selected option to decide which calculation to perform.
// Doesn't work tho, as I can't figure out how to scale it. Maybe Jesus will come to me in a dream with the answers. We'll see.
(function() {
    // Fahrenheit to Celcius
    let resultFtoC = document.getElementById("resultLblFtoC");
    let inputFtoC = document.getElementById("userInputFtoC");
    let calculateBtnFtoC = document.getElementById("calculateBtnFtoC");

    // Celcius To Fahrenhiet
    let resultCtoF = document.getElementById("resultLblFtoC");
    let inputCtoF = document.getElementById("userInputFtoC");
    let calculateBtnCtoF = document.getElementById("calculateBtnFtoC");


    function calcTemp(type) {
        let inputFloatFtoC = parseFloat(inputFtoC.value); // convert userInput to integer
        let inputFloatCtoF = parseFloat(inputCtoF.value);
        let convertedValue;
        
        if (type == "FtoC") {
            convertedValue = (inputFloatFtoC - 32) * 5 / 9;
        } else if (type == "CtoF") {
            convertedValue = inputFloatCtoF * (9 / 5) + 32;
        } else if (type == "KtoC") {
            convertedValue = inputFloat - 273.15;
        } else if (type == "default") {
            document.getElementById("title").innerHTML = "Select an operation, you";
            return;
        }
        resultFtoC.innerHTML = convertedValue; 
        resultCtoF.innerHTML = convertedValue; 
    }

    calculateBtnFtoC.addEventListener("click", function() {
        let selectedOption = document.getElementById("operationSelect").value;
        calcTemp(selectedOption);
    });

    calculateBtnCtoF.addEventListener("click", function() {
        let selectedOption = document.getElementById("operationSelect").value;
        calcTemp(selectedOption);
    });
})(); */