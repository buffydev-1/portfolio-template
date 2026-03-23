document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    
    // If the user's preference in localStorage is dark...
    if (currentTheme == 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.body.setAttribute('data-theme', 'light');
    }
    
    // Listen for a click on the button 
    toggleButton.addEventListener('click', function() {
        // If the user's OS setting is dark and matches our .dark-mode class...
        let theme = 'light';
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            theme = 'dark';
        }
        // Finally, let's save the preference to localStorage to keep it then
        localStorage.setItem('theme', theme);
    });
});
