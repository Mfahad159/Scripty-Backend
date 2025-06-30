async function FetchImage() {
    const button = document.querySelector('.fetchButton');
    const name = document.querySelector("#inputName").value.trim().toLowerCase();
    const imageContainer = document.querySelector('.image_container');

    try {
        if (!name) throw new Error("Please enter a Pokémon name");

        button.innerText = "Loading...";
        button.disabled = true;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!response.ok) {
            throw new Error(`Pokémon not found (${response.status})`);
        }

        const data = await response.json();

        const title = document.querySelector('.image_title');
        const image = document.querySelector('#image');

        image.src = data.sprites.front_default;
        title.innerHTML = name;
        imageContainer.style.display = 'flex';

        setTimeout(() => {
            button.innerText = "Fetch Again?";
        }, 1500);
    } 
    catch (error) {
        console.error("Fetch error:", error);
        alert(error.message); 
        button.innerText = "Try Again";
    } 
    finally {
        button.disabled = false;
    }
}
