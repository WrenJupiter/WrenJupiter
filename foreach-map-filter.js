//accepts array (arr)
//return new array(return newArr)
//define new array (let newArr = [])
//values in array (arr.forEach(function(val)))
//pass to the function(newArr.push)
//values doubles (val * 2)

function doubleValues(arr) {
   let newArr = [];
   arr.forEach(function(val) {
    newArr.push(val * 2);
   }); 
   return newArr;
}



//accepts an array (arr)
//returns a new array (return newArr)
//with only the even values in the array (val % 2 === 0)
//passed to the function(newArr.push(val))

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        if(val % 2 === 0) {
            newArr.push(val)
        }
    });
    return newArr
}



//accepts an array (arr)
//returns a new array (return newArr)
//with only the first and last char of each string. ((val[0] + val[val.length - 1]))



function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val) {
        newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

//accepts an array (arr)
// a key (key)
//and a value (value)
//returns the array (return arr
//passed to the


// got confused here - function with the new key and value added for each object 
//thought i would need obj.keys and arr.push
//really bad with overthinking and overcomplicating things

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}


//accepts a string (str)
//returns an object (return obj)


//got confused here. thought i would need a template literal
//with the keys as the vowel and 
//values as the number of times the vowel appears in the string. 

//case insensitive (.toLowerCase)

function vowelCount(str){
    let vowelArr = str.split('');
    let obj = {};
    let vowels = "aeiou";

    vowelArr.forEach(function(let) {
        if (vowels.indexOf(let.toLowerCase()) !== -1) {
            if (obj[let.toLowerCase()]) {
                obj[let.toLowerCase()]++;
            }
            else {
                obj[let.toLowerCase()] = 1;
            }
        }
    });
   return obj;
}

//map



//accepts an array (arr)

//confused here
//returns a new array (thought i would new newArr)
//with all the values in the array passed to the function doubled (and to push and oduble the value)


function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return (val * 2);
    });
  }

// let newArr = [];
    // for(let i = 0; i < arr.length; i++) {
    //     newArr.push(arr[i.valueOf * 2])
    // };


//accepts an array (arr)
//returns a new array
//each value multiplied by the index (val *idx)

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val * idx;
    });
}

/*
accepts an array (arr)
and some key(key) 
returns a new array with the value of 
that key in each object.
*/

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    })
    
}


//accepts an array (arr)
//returns a new array with the value of the key
// with a name of "first" and the value of a key with the name (thought it would need a temeplate literal)
// of  "last" in each object, concatenated together with a space. (no concat needed)

function extractFullName(arr){
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
    
}

/*accepts an array of objects and a key (arr, key)
and returns a new array with all the objects 
that contain that key.*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

//accepts an array and a value (arr, searchValue)
//returns the first element in the array
//same value as the second parameter or undefined if the value is not 
//found in the array.


function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of 
objects, a key, and some value to search for and returns the
 first found value in the array.*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}

/*
accepts a string (str) 
returns a new string with all of the vowels (both uppercased and
lowercased) removed. */

function removeVowels(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

/*
accepts an array 
returns a new array
 odd numbers doubled 
map and filter to double 
filter the odd numbers*/

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 !== 0;;
    }).map(function(val) {
        return val * 2;
    });
}
