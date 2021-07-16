
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
