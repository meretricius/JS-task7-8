// 1
let cars = [{
    model: 'cobalt',
    company: 'general motors',
    engine: 1.5,
    price: 15000,
    beatan: true,
    year: 2022,
    mileage: 13000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "malibu",
    company: "general motors",
    color: "dry asphalt",
    engine: 2.4,
    price: 30000,
    beaten: false,
    year: 2022,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
},
{
    model: "tracker",
    company: "general motors",
    color: "black",
    engine: "2.2",
    price: 22000,
    beaten: false,
    year: 2021,
    mileage: 2000,
    tech_passport: {
        date: 2021,
        exp_date: 3031
    }
},
{
    model: "gentra",
    company: "general motors",
    color: "black",
    engine: 1.5,
    price: 17000,
    beaten: false,
    year: 2021,
    mileage: 6000,
    tech_passport: {
        date: 2021,
        exp_date: 2031,
    }
},
{
    model: 'Damas',
    company: 'Chevrolet',
    color: 'White',
    engine: 2.4,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 100,
    tech_pasport: {
        date: 2023,
        exp_date: 2033
    }
},
{
    model: "Spark",
    company: "general motors",
    color: "dirtygreen",
    engine: 1.250,
    price: 7000,
    beaten: true,
    year: 2008,
    mileage: 328000,
    tech_passport: {
        date: 2008,
        exp_date: 2023,
    }
},
{
    model: "Labo",
    company: "GM ",
    color: "white",
    engine: 0.8,
    price: 10000,
    beaten: false,
    year: 2023,
    mileage: 0,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
},
{
    model: "tico",
    company: "daewoo",
    color: "black",
    engine: 1.5,
    price: 10000,
    beaten: true,
    year: 2010,
    mileage: 1000,
    tech_passport: {
        date: 2022,
        exp_date: 2025,
    }
}, {
    model: 'traverse',
    company: 'chevrolet',
    color: 'black',
    engine: 3.6,
    price: 60000,
    beaten: false,
    year: 2023,
    mileage: 500,
    tech_passport: {
        date: 2023,
        exp_date: 2033
    }
}, {
    model: "volga",
    company: "uaz",
    color: "white",
    engine: 0.4,
    price: 700000,
    beaten: true,
    year: 1964,
    mileage: 3000000,
    tech_passport: {
        date: 1964,
        exp_date: 2023,
    }
}, {
    model: "velik",
    company: "Philips",
    color: "red",
    engine: "v12",
    price: 12000,
    beaten: false,
    year: 2009,
    mileage: 0,
    tech_passport: {
        date: 2022,
        exp_date: 2032,
    }
}, {
    model: "Porter",
    company: "Hyundai",
    color: "black",
    engine: 2.5,
    hp: 145,
    price: 31000,
    beaten: false,
    fuel_comsumption: 10.2,
    year: 2023,
    mileage: 100,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: 'Tahoe',
    company: 'CHEVROLET',
    color: 'black',
    engine: {
        capacity: '5.3',
        horsePower: '343hp'
    },
    price: 110000,
    beaten: false,
    year: 2022,
    mileage: 0,
    tech_passport: {
        date: 2022,
        expDate: 2032
    }
}, {
    model: "Mercedes-Benz CLS",
    company: "Mercedes-Benz",
    color: "black",
    engine: 3.0,
    price: 110000,
    beaten: false,
    year: 2023,
    mileage: 200,
    tech_passport: {
        date: 2023,
        exp_date: 2033,
    }
}, {
    model: "malibu",
    company: "Chevrolet",
    color: "sky rim",
    engine: 2.4,
    price: 15000,
    year: 2022,
    clash: false,
        mileage: 1500,
        tech_passport: {
            date: 2022,
            exp_date: 2054
        }
    }, {
        model: "matiz",
        company: "general motors",
        color: "yellow",
        engine: 0.8,
        price: 4000,
        beaten: false,
        year: 2018,
        mileage: 5000,
        tech_passport: {
            date: 2018,
            exp_date: 2028,
        }
    }, {
        model: "porter",
        company: "hyundai",
        color: "black",
        engine: 2.5,
        hp: 145,
        price: 31000,
        beaten: false,
        fuel_comsumption: 10.2,
        year: 2023,
        mileage: 100,
        tech_passport: {
            date: 2023,
            exp_date: 2033,
        }
    }, {
        model: 'bmw_x7',
        year: 2023,
        price: 85000,
        engine: 6.5,
        Drivetrain: "All Wheel Drive",
        Transmission_Order_Code: "2TB",
        engine: "3000cc",
        power: "375Bhp",
        Seating_Capacity: 6,
        Mileage: "11.29 - 14 kmpl",
        Fuel: "diesel",
        horsepower: 1000,
        beaten: false,
        color: "black"
    }
]

let from = prompt('from')
let up = prompt('up')


let result = []

cars.forEach(car => {
    if (car.price >= from && car.price <= up) {
        result.push(`model: ${car.model}, price: ${car.price} \n`)
    }
})

let oneOfThem = prompt('По вашей ценовой категории найдено вот эти машины ' + result + " Выберите один из этого списка написав название машины")
let findedCar = cars.find(car => car.model === oneOfThem)
let info = confirm(
    `model: ${findedCar.model},
    company: ${findedCar.company},
    color: ${findedCar.color},
    year: ${findedCar.year},
    price: ${findedCar.price},
    engine: ${findedCar.engine},
   beaten: ${findedCar.beaten},
   mileage: ${findedCar.mileage},
   tech_passport: { date: ${findedCar.date},
    experied: ${findedCar.exp_date}, }
`)

let cash = +prompt("Сколько у вас на счету?")
if( findedCar.price === cash ) {
    alert("Поздравляем вас с покупкой!") 
} else if(findedCar.price > cash) {
    alert("У вас нехватка денег")
} else if(cash > findedCar.price) {
    let payment = cash - findedCar.price
    alert(`Ваш остаток от оплаченной суммы: ${payment}`)
}


let currYear = 2023
let yearResults = cars.filter((car) => {
    if(currYear - car.year <= 2 ) {
        return car
    } 
})
console.log(yearResults);




// 2
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed": 
true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

arr.filter((item) => {
    if (item.completed === true) {
        a.arr.push(item)
        a.count++
    } else if(item.completed === false) {
        b.arr.push(item)
        b.count++
    }
})
console.log(a, "completed");
console.log(b, "not completed");


