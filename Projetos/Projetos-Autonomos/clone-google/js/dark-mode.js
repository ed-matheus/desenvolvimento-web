function darkMode() {

    // cor do background
    const background = document.querySelector('body');
    background.style.backgroundColor = "#1f1f1f";

    // cor do botao dark mode
    const botao = document.querySelector('.botao-dark');
    botao.style.backgroundColor = "#1f1f1f";

    // cores do header
    const menu_icon = document.querySelector('header');
    menu_icon.style.color = "#fafafa";

    const menu = document.querySelector('header .a');
    menu.style.color = "#fafafa";

    const menu2 = document.querySelector('header .b');
    menu2.style.color = "#fafafa";

    // cor da logo Moongle
    const logo = document.querySelector('.logo');
    logo.style.color = "#fafafa";

    // cores da lupa e do input
    const lupa = document.querySelector('.container-search');
    lupa.style.color = "#fafafa";

    const input = document.querySelector('.input');
    input.style.backgroundColor = "#1f1f1f";

    // trocando cor dos botoes
    const button = document.querySelector('.botao-a');
    button.style.backgroundColor = "#454545";

    const button2 = document.querySelector('.botao-b');
    button2.style.backgroundColor = "#454545";

    // trocando cor do texto dos botoes
    const button_text = document.querySelector('.botao-a');
    button_text.style.color = "#fafafa";

    const button_text2 = document.querySelector('.botao-b');
    button_text2.style.color = "#fafafa";

    // cores do footer
    const assinatura = document.querySelector('.marca');
    assinatura.style.color = "#fafafa";

    const footer_serv = document.querySelector('.footer-servidor');
    footer_serv.style.backgroundColor = "#454545";

    const footer_menu = document.querySelector('.footer-menu');
    footer_menu.style.backgroundColor = "#454545";

    // textos do footer
    const footer_text = document.querySelector('.formatacao');
    footer_text.style.color = "#fafafa";

    const footer_text2 = document.querySelector('.menu');
    footer_text2.style.color = "#fafafa";

    const footer_textRight2 = document.getElementById('light');
    footer_textRight2.style.color = "#fafafa";
}

