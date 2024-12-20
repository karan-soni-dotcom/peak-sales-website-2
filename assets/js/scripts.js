//Easter Egg - Dino
    console.log(`%c
               __
              / _)
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|  
exit console 🦖 and Type "dino" `, 'color: white; font-family: consolas; font-size: 14px;');


document.addEventListener('DOMContentLoaded', function() {
    const easterEggContainer = document.getElementById('easter-egg-container');
    
    // Create the close button dynamically
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.id = 'close-easter-egg';
    closeButton.textContent = ''; // Remove visible close symbol
    closeButton.setAttribute('aria-label', 'Close'); // Accessible for screen readers

    
    // Exact same style as the removed HTML button
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '20px';
    closeButton.style.left = '50%';
    closeButton.style.transform = 'translateX(-50%)';
    closeButton.style.backgroundColor = '#f00';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px 20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10000';
    
    // Append the close button to the container
    easterEggContainer.appendChild(closeButton);

    // Function to hide the Easter egg container
    function hideEasterEgg() {
        easterEggContainer.style.display = 'none';
        const iframe = easterEggContainer.querySelector('iframe');
        iframe.blur();
        iframe.src = iframe.src; // Reset iframe state
    }

    // Event listener for the close button
    closeButton.addEventListener('click', hideEasterEgg);

    // Event listener for Escape key to close the iframe
    document.addEventListener('keydown', function(event) {
        if (event.code === "Escape" && easterEggContainer.style.display === 'flex') {
            hideEasterEgg();
        }
    });

    // 'dino' key sequence to show the Easter egg
    let typedKeys = '';
    document.addEventListener("keydown", function(event) {
        typedKeys += event.key.toLowerCase();
        
        if (typedKeys === "dino") {
            easterEggContainer.style.display = 'flex';
            const iframe = easterEggContainer.querySelector('iframe');
            iframe.focus();
            typedKeys = ''; // Reset after triggering
        } else if (!"dino".startsWith(typedKeys)) {
            typedKeys = ''; // Reset if sequence doesn't match
        }
    });
});