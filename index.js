const express = require('express')

const cors = require('cors')


var instructors =  [{
    'id': 1,
    'fullName': 'Kyle Coberly',
    'Title': 'Faculty Director',
    'numberOfDogs': 0
},{
    'id': 2,
    'fullName': 'Danny Fritz',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 3,
    'fullName': 'CJ Reynolds',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 4,
    'fullName': 'Brooks Patton',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 5,
    'fullName': 'Roberto Ortega',
    'Title': 'Lead Instructor',
    'numberOfDogs': 1
},{
    'id': 6,
    'fullName': 'Chad Drummond',
    'Title': 'Instructor',
    'numberOfDogs': 0
},{
    'id': 7,
    'fullName': 'Kim Schleisinger',
    'Title': 'Instructor',
    'numberOfDogs': 0
},{
    'id': 8,
    'fullName': 'Peter Ostiguy',
    'Title': 'Associate Instructor',
    'numberOfDogs': 1
},{
    'id': 9,
    'fullName': 'Cass Torske',
    'Title': 'Resident',
    'numberOfDogs': 1
},{
    'id': 10,
    'fullName': 'Matt Winzer',
    'Title': 'Resident',
    'numberOfDogs': 2
},{
    'id': 11,
    'fullName': 'Aaron Goodman',
    'Title': 'Resident',
    'numberOfDogs': 0
},{
    'id': 12,
    'fullName': 'Michelle Bergquist',
    'Title': 'Resident',
    'numberOfDogs': 1
}]

function findId (data, id){
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get('/', function(request, response){
    response.json({data: instructors})
})

app.get('/:id', function(request, response) {
    var record = findId(instructors, request.params.id)
    if (!record) {
        response.status(404).json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
})

app.listen(process.env.PORT||3000)
