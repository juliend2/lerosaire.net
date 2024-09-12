
export default class Mystere {
    constructor(name, description, images = []) {
        this.name = name;
        this.description = description;
        this.imageSources = images;
    }

    get anchor() {
        return this.slugify(this.name);
    }

    get images() {
        return this.imageSources;
    }

    set images(sources) {
        this.imageSources = sources;
    }

    slugify(string) {
        return string.toLowerCase()
            .replace(/[éèêë]/g, 'e')
            .replace(/[ìíîï]/g, 'i')
            .replace(/[òóôõ]/g, 'o')
            .replace(/[ùúûü]/g, 'u')
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    }

}

