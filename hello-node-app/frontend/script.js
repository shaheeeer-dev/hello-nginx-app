async function sayHello() {

    const name = document.getElementById("name").value;

    const response = await fetch(`/api/hello?name=${name}`);

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h2>${data.message}</h2>
        <p><strong>Handled by:</strong> ${data.server}</p>
    `;
}