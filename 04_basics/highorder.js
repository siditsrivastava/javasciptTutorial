


// HIGH ORDER LOOPS

// FOR OF
//  for (const iterator of object) {
    
//  }

const arr = [1,2,3,4,5,6]
 for (const num of arr) {
    // console.log(num);
 }


//  MAP :- it is collection of key -value pair , it is mostly similiar to the array , it carry a unique value 
const map = new Map();
map.set("IN" , "INDIA");
map.set("CHINA" , "CHINA");
map.set("USA" , "UNITED STATE OF AMERICA");
map.set("RUS" , "RUSSIA");

// console.log(map);

for(const country of map){
//   console.log(country , ':-' ,value);
}

for(const [country, value] of map){
//   console.log(country , ':-' ,value);
}

// MAP IS WORK ONLY IN ARRAY NOT IN OBJECT . 

// FOR OBJECTS WE USE A (FORIN LOOP) 

// FOR IN LOOPS


const obj = {
    id: "46653",
    name: 'sidit',
    mobile: 63925806121
}

// FORIN for OBJECT
for (const key in obj) {
    // console.log(`${key} is :- ${obj[key]}`)
}
// FORIN for  ARRAY

for (const key in arr) {
    // console.log(`${key} is :- ${arr[key]}`)
}

// FORIN for map
for (const key in map) {
    // console.log(`${key} is :-`)
}

// FOREACH LOOPS

const arrays = ["react" , "css3" , "html5" , "javascript"]


// SYNTAX

// THERE ARE THREE PARAMETER IN THE FOREACH LOOP.

arrays.forEach( (items , index , arr) => {

})


// 1st way 

arrays.forEach( function(items) {
        // console.log(items)
})

// 2nd way
arrays.forEach(element => {
    // console.log(element)
});

//3rd way

function printlan(items){
    // console.log(items);
}

arrays.forEach(printlan)


// FILTER 

const num = [1,2,3,4,5,6,7,8];

const a = num.filter(nums => {
    // console.log(nums)
    return nums;
} )

// console.log(a);


const data = [
    {
        title : 'Book One',
        genre : "Friction",
        publish : 1981 ,
        edition : 2014
    },
    {
        title : 'Book Two',
        genre : "Non-Friction",
        publish : 1991 ,
        edition : 2010
    },
    {
        title : 'Book Three',
        genre : "History",
        publish : 1999 ,
        edition : 2020
    },
    {
        title : 'Book Four',
        genre : "Math",
        publish : 300 ,
        edition : 2021
    },
    {
        title : 'Book Five',
        genre : "Friction",
        publish : 1955 ,
        edition : 2010
    },
    {
        title : 'Book Six',
        genre : "Non-Friction",
        publish : 1985 ,
        edition : 2014
    }
]

const datafetch = data.filter((items) => {
    return items.publish >= 1955
        
})

// console.log(datafetch);


// MAP 


const arrs = [ 1,2,3,4,5,6,7,8,9];


const ans = arrs.map(item => {
    return item*10
}).map(items => {
    return items + 1
}).filter(items =>{
    return items >=50;
})

// console.log(ans);


// REDUCE

// SYNTAX

// arrs.reduce((accumulator , currentValue) => {
//     return accumulator + currentValue
// } , initialValue);

// INITIAL VALUE WAS DECLERED MY PROGRAMER OR USER


const total = arr.reduce((acc, currVal) => {
    return acc + currVal
},0)

console.log(total);