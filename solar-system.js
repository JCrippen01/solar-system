
const celestialBodies = [
    {
        id: 1,
        name: "Sun",
        star: true,
        numberOfMoons: 0,
        distanceFromSun: 0,
        mass: 1.98e+30
    },
    {
        id: 2,
        name: "Mercury",
        star: false,
        numberOfMoons: 0,
        distanceFromSun: 48.47,
        mass: 3.285e+23
    },
    {
        id: 3,
        name: "Earth",
        star: false,
        numberOfMoons: 1,
        distanceFromSun: 147.5,
        mass: 5.97e+24
    }
]



const mars = {
    id: 4,
    name: "Mars",
    star: false,
    numberOfMoons: 2,
    distanceFromSun: 230,
    mass: 6.39e+23
}
celestialBodies.push(mars)


const createPlanet = (celestialBodiesObject) => {
    // adding `id` property to note object //
    const lastIndex = celestialBodies.length - 1
    const currentLastCelestialBodiesObject = celestialBodies[lastIndex]
    const maxId = currentLastCelestialBodiesObject.id
    const idForNewCelestialBodiesObject = maxId + 1

    celestialBodiesObject.id = idForNewCelestialBodiesObject
    celestialBodies.push(celestialBodiesObject)
}

const sirius = {
    name: "Sirius",
    star: true,
    numberOfMoons: 0,
    distanceFromSun: 8.6,
    mass: 2.02
}

createPlanet(sirius)
createPlanet({
    name: "Jupiter",
    star: false,
    numberOfMoons: 79,
    distanceFromSun: 410,
    mass: 14.39e+28
})

/*
    1. Calculate total number of moons in solar system with a function
    2. Function should return total sum
    3. Talk about different scopes
*/

