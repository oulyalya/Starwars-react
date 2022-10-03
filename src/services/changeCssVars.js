/*
Формат CSS-переменной:
--theme-default-СВОЙСТВО # дефолтная переменная
--theme-light-СВОЙСТВО   # для "light"
--theme-dark-СВОЙСТВО    # для "dark"
--theme-neutral-СВОЙСТВО # для "neutral"
*/

export const changeCssVars = theme => {
    const root = document.querySelector(':root');

    const cssVars = ['header', 'bgimg'];

    cssVars.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`)

    });
};
