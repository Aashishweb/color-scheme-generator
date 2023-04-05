function generateColorScheme() {
  fetch("https://api.color.pizza/v1/") // api for color codes
    .then((response) => response.json())
    .then((data) => {
      const colors = data.colors;
      const scheme = [];

      // Clear the contents of the color box containers
      for (let i = 1; i <= 5; i++) {
        const container = document.getElementById(`color-box-${i}`);
        container.innerHTML = "";
      }

      // Push random colors from the API response into the scheme array
      for (let i = 0; i < 5; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        scheme.push(color.hex);

        // Create a new element to contain the hex code
        const codeContainer = document.createElement("div");

        // Create a new element to display the hex code
        const code = document.createElement("p");
        code.innerHTML = color.hex;
        code.classList.add("color-code");

        // Add the code element to the code container
        codeContainer.appendChild(code);

        // Add the code container to the color box container
        const container = document.getElementById(`color-box-${i + 1}`);
        container.appendChild(codeContainer);

        // Set the background color of the color box
        container.style.backgroundColor = color.hex;
      }
    })
    .catch((error) => console.error(error));
}

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateColorScheme);

generateColorScheme();
