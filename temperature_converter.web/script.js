const convertButton = document.getElementById('convertBtn');
        const resultBox = document.getElementById('result');

        convertButton.addEventListener('click', function () {
            const unit = document.getElementById('unit').value;
            const temperature = parseFloat(document.getElementById('temperature').value);

            if (isNaN(temperature)) {
                alert('Please enter a valid temperature.');
                return;
            }

            if (unit === 'celsius') {
                const fahrenheit = (temperature * 9/5) + 32;
                resultBox.innerHTML = `${temperature} &deg;C = ${fahrenheit.toFixed(2)} &deg;F`;
            } else {
                const celsius = (temperature - 32) * 5/9;
                resultBox.innerHTML = `${temperature} &deg;F = ${celsius.toFixed(2)} &deg;C`;
            }
        });