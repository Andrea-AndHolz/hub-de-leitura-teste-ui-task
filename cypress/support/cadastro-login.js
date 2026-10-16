class Cadastro {

    //seletores

    campoNome() { return cy.get('#name') }
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    campoConfirmaSenha() { return cy.get('#confirm-password') }
    checkTermos() { return cy.get('#terms-agreement') }
    btnCriarConta() { return cy.get('#register-btn') }
    btnSairPagina() { return cy.get('.user-actions > .btn-outline-danger > .fas')}
    btnEntrar() { return cy.get('#login-btn')}



    //meodos

    visitaPaginaCadastro() {
        cy.visit('register.html')
    }

    visitarPaginaLogin(){
        cy.visit('login.html')
        cy.url().should('include', '/dashboard');
    }

    preencherFormCadastro(nome, email, telefone, senha, confirmaSenha) {
        this.campoNome().clear().type(nome)
        this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.campoConfirmaSenha().clear().type(confirmaSenha)
        this.checkTermos().check()
        this.btnCriarConta().click()
        cy.screenshot('cadastro-realizado', {overwrite:true})
    }

    fecharPagina(){
        this.btnSairPagina().click()
        
    }

    fazerLogin(email, senha){

        this.campoEmail().clear().type(email)
        this.campoSenha().clear().type(senha)
        this.btnEntrar().click()
        cy.screenshot('login-realizado', {overwrite:true})
   
    }

}
export default new Cadastro