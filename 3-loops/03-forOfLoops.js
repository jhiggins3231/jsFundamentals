// Loop over iterable properties
// Iterable meaning able to parse through with numbers

// We Can not use a for of loop with an object because objects  do not have indexes or iterable properties.
//FOR OF LOOPS ARE MAINLY USED FOR ARRAYS
let dogArray = ['Boxer', 'Pit', 'Husky', 'Great Dane']

for (dog of dogArray) {
    console.log(dog, 'goes bark');
}


