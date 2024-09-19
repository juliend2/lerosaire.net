export default class App {
            
    constructor(container, chapelets, currentChapeletIndex = 1) {
        this.index = 0
        this.container = container;
        this.chapelets = chapelets;
        this.currentChapelet = this.chapelets[currentChapeletIndex - 1]

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
            <div id="chapelets-navigation" style="display: none;">
                <a href="" class='x-close' onclick="return window.hideChapeletNavigation(this);">Close</a>
                <ul>
                    <li><a href="?c=1">Mystères Joyeux</a></li>
                    <li><a href="?c=2">Mystères Lumineux</a></li>
                    <li><a href="?c=3">Mystères Douloureux</a></li>
                    <li><a href="?c=4">Mystères Glorieux</a></li>
                </ul>
            </div>
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
        return `<a href="#" id="chapelet__switch" onclick="return window.displayChapeletNavigation(this);">
            Mystères ${chapelet.name}</a>: 
            ${chapelet.mysteres[this.index].name}
            `
    }

    displayChapeletNavigation() {
        this.container.querySelector('#chapelets-navigation').style.display = 'flex'
    }

    hideChapeletsNavigation() {
        console.log('bob')
        this.container.querySelector('#chapelets-navigation').style.display = 'none'
    }
}