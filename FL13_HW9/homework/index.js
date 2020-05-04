function convert(...str) {
    for(let i = 0; i < str.length; i++) {
        if (typeof str[i] === 'string') {
            str[i] = +str[i];
        } else if (typeof str[i] === 'number') {
            str[i] = str[i] + '';
        }
    }
    return str;
}

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
}

function mapArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            arr[i] = +arr[i];
        }
    } 
    executeforEach(arr, callback);
    return arr;
}

function filterArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, function(item) {
        if(callback(item)) {
            newArr.push(item);
        }
    })
    return newArr;
}

function containsValue(arr, el) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === el) {
            return true;
        } 
    return false;  
    }
}

function flipOver(str) {
    let reverse = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

function makeListFromRange(arr) {
    let newArr = [];
    for(let i = arr[0]; i < arr[1] + 1; i++) {
        newArr.push(i);
    }
    return newArr;
}

function getArrayOfKeys(arr, key) {
    const keys = [];
    executeforEach(arr, function(callback) {
        keys.push(callback[key]);
    });
    return keys;
}

function substitute(arr) {
    const firstLimit = 10;
    const secondLimit = 20
    mapArray(arr, function(limit) {
        if (limit < secondLimit && limit > firstLimit) {
            return '*';
        } else {
            return limit;
        }
    });
    return arr;
}

function getPastDay(date, days) {
    let oneDayInMS = 86400000;
    date = new Date(date.getTime() - oneDayInMS * days);
    return new Date(date).getDate();
}

function formatDate(date) {
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}