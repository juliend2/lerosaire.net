export default class App {
            
    constructor(container, chapelets) {
        this.index = 0
        this.container = container;
        this.chapelets = chapelets;
        this.currentChapelet = this.chapelets[3]

        this.init(this.currentChapelet);
    }

    init(chapelet) {
        const html = this.sectionsHTML(chapelet)
        this.container.innerHTML = html;

        new fullpage('#fullpage #slides', {
            sectionsColor: chapelet.backgroundColors,
            anchors: chapelet.anchors,
            // TODO: get a proper license and revert my hacks to disable license checking.
            // Get your license at https://alvarotrigo.com/fullPage/pricing/
            // licenseKey: 'YOUR LICENSE KEY HERE '
            
            afterSlideLoad: ( section, origin, destination, direction, trigger) => {
                this.index = section.index
                this.container.querySelector('#navigation').innerHTML = this.navigationText(chapelet)
            }
        });

    }

    sectionsHTML(chapelet) {
        return `<nav id="navigation">
                ${this.navigationText(chapelet)}
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

    navigationText(chapelet) {
        return `<a href="#" id="chapelet__switch">
            Mystères ${chapelet.name}</a>: 
            ${chapelet.mysteres[this.index].name}
            `
    }
}