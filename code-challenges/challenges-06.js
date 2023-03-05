'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
var arr=[20, 31, 15, 41, 20, 48];
const findMax = (arr)=>{
    let max=null;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    console.log(max);
    return max;
}
console.log(findMax(arr));

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
let array1=[20, '234', 'car', 41, 20, 'chair'];
const sumNums = (arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i]=="number")
        {
            sum+=arr[i];
        }
    }
    return sum;
}
console.log(sumNums(array1));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
var originArray = ['C#', 'JS', 'Ruby','Python'] ;

const reverseArray = (arr)=>{
    let reversedArray = [];
    for (let i = originArray.length-1; i>=0 ; i--)
    {
    let value=originArray[i];
    reversedArray.push(value);
    }
    console.log(reversedArray);

    return originArray;

}
console.log(reverseArray(originArray));

// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};