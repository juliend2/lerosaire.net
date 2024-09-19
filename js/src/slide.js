export default class Slide {
    constructor(index, mystere, imageSrc, options) {
        this.index = index
        this.mystere = mystere
        this.imageSrc = imageSrc
        this.options = options
    }

    toHTML() {
        let backgroundPosition = ''
        const [src, backgroundPositionValue] = (this.imageSrc || '').split('#')
        if (backgroundPositionValue) {
            let bgValue = backgroundPositionValue.replace('+', ' ')
            backgroundPosition = `background-position: ${bgValue}; `
        }
        return `<div 
                    class="slide image"
                    data-anchor="${this.mystere.anchor}--${this.index}"
                    style="background-image: url(${src}); ${backgroundPosition}"
                >
                    ${this.index == 0 ? `<h1 class="mystere__titre">${this.options?.title}</h1>` : ''}
                    
                </div>`
    }
}