/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de Membros', () => {
  beforeEach(() => {
    cy.visit('/')

  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `jr${Date.now()}@teste.com`
    cy.preencherCadastro('Josimar', 'Junior', email, '61123456789', 'Teste@20201')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!') // Corrigido: use vírgula para separar os argumentos
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    var email = `jr${Date.now()}@teste.com`
    cy.preencherCadastro('Josimar20', 'Junior', email, '61123456789', 'Teste@20201')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })
})