
export default class App {
            
    constructor(container, chapelets) {
        this.container = container;
        this.chapelets = chapelets;

        this.init(this.chapelets[3]);
    }

    init(chapelet) {
        const html = this.sectionsHTML(chapelet).join('')
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
            return `<div class="section">
                    <div class="slide" data-anchor="${mystere.anchor}">
                        <h1>${mystere.name}</h1>
                        <p>${mystere.description}</p>
                    </div>
                    ${mystere.images.map(src => {
                        return `<div class="slide image" data-anchor="${mystere.anchor}--2" style="background-image: url(${src});">
                            <h1>Scroll horizontal</h1>
                        </div>`
                    })}
                    
                </div>
            `
        })
    }
}