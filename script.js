document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const resizeButton = document.getElementById('resizeButton');

    function createGrid(size) {
        container.innerHTML = '';
        const squareSize = 320 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.dataset.lightness = 1;

            // Hover effect
            square.addEventListener('mouseover', function () {
                // Generate random RGB color
                const randomColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;

                // Darken the square by 10%
                let lightness = parseFloat(square.dataset.lightness);
                lightness -= 0.1; //Reduce lightness by 10%
                square.dataset.lightness = lightness;

                // Apply the color with adjusted lightness
                square.style.backgroundColor = adjustColorBrightness(randomColor, lightness);
            });

            container.appendChild(square);
        }
    }

    function randomRGBValue() {
        return Math.floor(Math.random() * 256);
    }

    function adjustColorBrightness(color, lightness) {
        const rgbValues = color.match(/\d+/g).map(Number);

        return `rgb(${Math.floor(rgbValues[0] * lightness)}, ${Math.floor(rgbValues[1] * lightness)}, ${Math.floor(rgbValues[2] * lightness)})`;
    }

    resizeButton.addEventListener('click', function () {
        let newSize = prompt('Enter the number of squares per side (maximum 100):', 16);
        newSize = parseInt(newSize);

        if (newSize && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });

    resetButton.addEventListener('click', () =>{
        document.querySelectorAll('.square').forEach(square => {
            square.dataset.lightness = 1;
            // square.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}`;
            square.style.backgroundColor = 'aliceblue';

        });
            
        });

    randomButton.addEventListener('click', () => {
        document.querySelectorAll('.square').forEach(square => {
        square.dataset.lightness = 1;
        square.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}`;
    });
});

    
    

    createGrid(16);
});
