class CelestialBody {
    constructor(name, picture, age, mass){
        this.name = name;
        this.picture = picture;
        this.age = age;
        this.mass = mass;
        this.imageUri = null;
    }

    getImageUri(host){
        this.imageUri = `http://${host}/images/planets/${this.picture}`
    }
}

module.exports = CelestialBody;