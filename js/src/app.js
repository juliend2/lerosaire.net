import Slide from './slide.js'

export default class App {
            
    constructor(container, chapelets) {
        this.container = container;
        this.chapelets = chapelets;

        this.init(this.chapelets[3]);
    }

    init(chapelet) {
        const html = this.sectionsHTML(chapelet)
        document.querySelector(this.container).innerHTML = html;

        new fullpage('#fullpage', {
            sectionsColor: chapelet.backgroundColors,
            anchors: chapelet.anchors,
            // TODO: get a proper license and revert my hacks to disable license checking.
            // Get your license at https://alvarotrigo.com/fullPage/pricing/
            // licenseKey: 'YOUR LICENSE KEY HERE '
        });

    }
    
    sectionsHTML(chapelet) {
        return chapelet.mysteres.map(mystere => {
            return `<div class="section">${
                mystere.toHTML()
            }</div>`
        }).join('')
    }
}