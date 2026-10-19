/// <reference types="cypress"/>
import cadastro from '../support/cadastro-login';

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cadastro.visitaPaginaCadastro();
    });

    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.fixture('usuario').then((user) => {
            cadastro.preencherFormCadastro('Andrea Santos', email, '11 56568787', user.senha, user.senha)
            cy.url().should('include', 'dashboard');
            cy.get('.user-actions > .btn-outline-danger > .fas')
            cadastro.fecharPagina()
            cadastro.fazerLogin(email, user.senha);
            cy.screenshot('login-realizado', { overwrite: true })
        })
    });
})
