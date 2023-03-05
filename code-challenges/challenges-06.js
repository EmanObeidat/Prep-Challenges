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

const findMax = (arr)=>{
    let max=12;
    var arr=[12, 32, 22, 45, 78, 12, 50];
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    
    return max;
}
console.log(findMax());

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

const sumNums = (arr)=>{
    let sum=0;
    let array1=[20, '234', 'car', 41, 20, 'chair'];
    for(let i=0;i<array1.length;i++)
    {
        if(typeof array1[i]=="number")
        {
            sum+=array1[i];
        }
    }
    return sum;
}
console.log(sumNums());
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

const reverseArray = (arr)=>{
    let reversedArray = [];
    var originArray = ['C#', 'JS', 'Ruby','Python'] ;
    for (let i = originArray.length-1; i>=0 ; i--)
    {
    let value=originArray[i];
    reversedArray.push(value);
    }
    console.log(reversedArray);

    return originArray();

}
console.log(reverseArray());

// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};