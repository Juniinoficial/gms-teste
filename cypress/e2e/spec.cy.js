/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de Membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Josimar')
    cy.get('#signup-lastname').type('Junior')
    cy.get('#signup-email').type('jr2@testes.com.br')
    cy.get('#signup-phone').type('61123456789')
    cy.get('#signup-password').type('Teste$2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro Realizado com Sucesso') // Corrigido: use vírgula para separar os argumentos
  })
})