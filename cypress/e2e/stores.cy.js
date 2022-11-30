const storesData = require('../fixtures/stores.json');

describe('Away Stores', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(`a[href="/stores"]`).click();
        cy.url().should('include', '/stores');
        //cy.title().should('eq', 'Stores | Away: Built for modern travel');
    })

    it('Navigate to Stores Page', () => {
        cy.get('div[class^=masthead_title] h1').should('have.text', 'Visit us IRL');
    })

    it('Verify Stores Data', () => {
        cy.get('span[class^=content_tile_medium_diptych_head]').each((element, index) => {
            expect(element).to.include.text(storesData[index].name);
        })

        cy.get('span[class^=content_tile_medium_diptych_dek]').each((element, index) => {
            expect(element).to.include.text(storesData[index].address);
        })
    })

    it('verify arrow is animated when hovering over the box', () => {
            cy.get('div[class*=copyContainer] div[class*=cta_iconRight]').eq(0).realHover().invoke('attr', 'class').should('contain', 'cta_lightExit');
    })

    it('drag the map', () => {
        cy.visit('/stores/austin')
        //verify the map can be clicked and dragged
        cy.get('div[class*=store_location_info] div[class*="mapContainer"]').realMouseDown().realMouseMove().realMouseUp();
    })
})
