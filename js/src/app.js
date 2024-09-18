import Slide from './slide.js'

export default class App {
            
    constructor(container, chapelets) {
        this.container = container;
        this.chapelets = chapelets;
        this.currentChapelet = this.chapelets[3]

        this.init(this.currentChapelet);
    }

    init(chapelet) {
        const html = this.sectionsHTML(chapelet)
        document.querySelector(this.container).innerHTML = html;

        new fullpage('#fullpage #slides', {
            sectionsColor: chapelet.backgroundColors,
            anchors: chapelet.anchors,
            // TODO: get a proper license and revert my hacks to disable license checking.
            // Get your license at https://alvarotrigo.com/fullPage/pricing/
            // licenseKey: 'YOUR LICENSE KEY HERE '
        });

    }
    
    sectionsHTML(chapelet) {
        return `<nav id="navigation">
                ${chapelet.name}
            </nav>
            <section id="slides">
            ${
                chapelet.mysteres.map(mystere => {
                    return `<div class="section">${
                        mystere.toHTML()
                    }</div>`
                }).join('')
            }
            </section>`
    }
}