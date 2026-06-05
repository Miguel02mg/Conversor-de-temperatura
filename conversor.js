const boton = document.getElementById("btnConvertir");

boton.addEventListener("click", convertirTemperatura);

function convertirTemperatura() {
    const input = document.getElementById("celsius");
    const resultado = document.getElementById("resultado");
    const valor = input.value.trim();
    // Validación
    if (valor === "" || isNaN(valor)) {
        resultado.innerHTML = `
            <div class="alert alert-danger">
                Debes ingresar un valor numérico válido.
            </div>
        `;
        input.value = "";
        input.focus();
        return;
    }

    const celsius = parseFloat(valor);
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;

    resultado.innerHTML = `
        <div class="alert alert-success">
            <h5>Resultado</h5>
            <p><strong>Grados Kelvin:</strong> ${kelvin.toFixed(2)}</p>
            <p><strong>Grados Fahrenheit:</strong> ${fahrenheit.toFixed(2)}</p>
        </div>
    `;
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}