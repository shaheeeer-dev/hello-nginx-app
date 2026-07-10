async function sayHello() {

    // Get the value entered by the user
    const name = document.getElementById("name").value;

    // Check if the input is empty
    if (name.trim() === "") {
        document.getElementById("result").textContent = "Please enter your name.";
        return;
    }

    try {

        // Send request to the backend through Nginx
        const response = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);

        // Convert JSON response into a JavaScript object
        const data = await response.json();

        // Display the message
        document.getElementById("result").textContent = data.message;

    } catch (error) {

        console.error(error);

        document.getElementById("result").textContent =
            "Unable to connect to the server.";

    }
}