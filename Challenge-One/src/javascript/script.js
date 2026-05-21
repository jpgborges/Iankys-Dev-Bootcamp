// Comment: Selecting every password icon in the html
const passwordIcons = document.querySelectorAll('.password-icon');

passwordIcons.forEach(icon => {
    // Comment: Creating a function to change the icon at click
    icon.addEventListener('click', function() {
        // Comment: Saving on this variable which input is calling this function
        const input = this.parentElement.querySelector('.form-control');
        // Comment: If the input being used is password, show the password, if not, hide it.
        input.type = input.type === 'password' ? 'text' : 'password';
        // Comment: Toggle the icon. 
        this.classList.toggle('fa-eye');
    })
})