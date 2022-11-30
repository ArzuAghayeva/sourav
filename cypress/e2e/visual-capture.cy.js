describe('Visual Captures', () => {
    it('should compare screenshots of before and after', () => {
        cy.visit('https://www.awaytravel.com/stores/austin')
        cy.compareSnapshot('div[class^=store_location_info_mapContainer]')
        cy.get('div[class^=store_location_info_mapContainer]').realMouseDown().realMouseMove().realMouseUp();
        cy.compareSnapshot('div[class^=store_location_info_mapContainer]')
    })
})