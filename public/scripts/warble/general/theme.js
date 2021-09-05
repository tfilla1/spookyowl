
document.addEventListener('DOMContentLoaded', () => {
    let changeThemeButton = document.querySelector('#changeTheme');
    let themes = ['warble', 'simple', 'black'];
    let currentTheme = 0;
    function changeTheme() {
        let container = document.querySelector('.container');
        let themeValue = themes[currentTheme];
        container.classList.remove(themeValue);
        currentTheme += 1; //warble >> simple || 0 >> 1
        console.log(currentTheme);
        changeThemeButton.innerHTML = (currentTheme + 1 >= themes.length ? themes[0] : themes[currentTheme + 1]);
        if (currentTheme >= themes.length) {
            currentTheme = 0;
            changeThemeButton.innerHTML = themes[currentTheme + 1];
        } 
        themeValue = themes[currentTheme];
        container.classList.add(themeValue);

        console.log(themeValue);

    }
    changeThemeButton.addEventListener('click', () => {
        changeTheme();
    });
})

