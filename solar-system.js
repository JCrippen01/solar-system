
const solarSystem = [
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

for (const planet of solarSystem) {
    if (planet.star === false) {
        
        console.log(`${planet.name} is a planet and not a star`)
    } else {
        console.log(`${planet.name} is a star and not a planet`)
    }
}

const mars = {
        id: 4,
        name: "Mars",
        star: false,
        numberOfMoons: 2,
        distanceFromSun: 230,
        mass: 6.39e+23
}

solarSystem.push(mars)

const sirius = {
    name: "Sirius",
    star: true,
    numberOfMoons: 0,
    distanceFromSun: 8.6,
    mass: 2.02
}

const createPlanet = (solarSystemObject) => {
    // adding `id` property to note object //
    const lastIndex = solarSystem.length - 1
    const currentLastSolarSystemObject = solarSystem[lastIndex]
    const maxId = currentLastSolarSystemObject.id
    const idForNewSolarSystemObject = maxId + 1

    solarSystemObject.id = idForNewSolarSystemObject
    solarSystem.push(solarSystemObject)
   
}
createPlanet(sirius)

console.log(solarSystem)