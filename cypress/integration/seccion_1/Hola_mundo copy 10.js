
describe ("Holi, este es mi primer programita en cypress",()=>{

    //Error section
    Cypress.on('uncaught:exception',(err,Runnable)=>{
         return false
    })

    it("Mi primer test -> Hola Mundo",()=>{
        cy.log("Hola mundo")
        cy.wait(3000)//Agrega una espera de 3 segundos
    })

    it("Segundo Test -> Campo name",()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").type("Soy Alexandra")
    })


})//Cierre de "describe".