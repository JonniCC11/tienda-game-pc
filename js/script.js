document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegister = document.getElementById('showRegister');

    if (showRegister) {
        showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.parentElement.style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    if (registerForm) {
        registerForm.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registro completado');
            registerForm.style.display = 'none';
            loginForm.parentElement.style.display = 'block';
        });
    }

    function getCharacters(done) {
        const result = fetch("https://rickandmortyapi.com/api/character");

        result
            .then(response => response.json())
            .then(data => {
                done(data);
            })
            .catch(error => {
                console.error("Error al obtener los personajes:", error);
            });
    }

    getCharacters(data => {
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(`
                <article>
                    <div class="api-container">
                        <img src="${personaje.image}" alt="Personaje">
                    </div>
                    <h2>${personaje.name}</h2>
                    <span>${personaje.species}</span>
                </article>
            `);
            const api = document.querySelector('.api');
            if (api) {
                api.appendChild(article);
            }
        });
    });
});
