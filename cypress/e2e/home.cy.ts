describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero section", () => {
    it('the h1 contains the correct text ', () => {
      cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
    })
  
    it('the features of the homepage are correct', () => {
  
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })


  
 
})