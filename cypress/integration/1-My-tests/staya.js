describe('Тестируем форму логина и пароля Staya.ru', function () {

    it('Логин верный, пароль верный', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Вход').click();
        cy.get('.auth-form > form > [type="email"]').type('melanie-alice@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('1234stayaDOG');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
        cy.contains('Выйти из аккаунта').click();
    })

    it('Логин верный, пароль неверный', function () {
        cy.visit('https://staya.dog/');
        cy.contains('Вход').click();
        cy.get('.auth-form > form > [type="email"]').type('melanie-alice@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('1234');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.error-label')
    })
})
