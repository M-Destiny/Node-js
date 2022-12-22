var user = [{
    name: 'John',
    age: 30,
    place: 'New York'
}, {
    name: 'Peter',
    age: 40,
    place: 'London'
}, {
    name: 'Mark',
    age: 50,
    place: 'Paris'
}, {
    name: 'James',
    age: 60,
    place: 'Berlin'
}, {
    name: 'John',
    age: 70,
    place: 'New York'
}]

// Use destructuring to get the name, age and place from the user object
// and print it in the console

var { name, age, place } = user;
// console.log(name, age, place)


a = [10, 20, 0, 10, 20, 0, 10, 22, 33, 22, 33, 0, 12, 23]
b = []
//push unique value in array a to array b using indexof method
for (i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) == -1) {
        b.push(a[i])
    }
}


// Event module For tommorow
// Event module
