// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    dst.splice(dstPos,0,...src.slice(srcPos, srcPos+length));
}
function count(array, str){
    let cnt=0;
    array.forEach(function (value) {
        if (value===str) {
           cnt++;
        }
    })
    return cnt;
}
function displayOccurrences(array){
    // сначала упорядочили
    const arr1 = array.sort(function (a, b) {
        if (a>b) return 1
        if (a<b) return -1
        return 0
    });
    // потом в другой массив удалили все повторяющиеся
    const arr2 =arr1.filter(function (value, index) {
        return value !== arr1[index+1];
    });
    // идем по второму массиву и для каждого элемента ищем количество вхождений в первый массив
    arr2.forEach(function (value) {
        console.log(value+"-> "+count(arr1,value));
    });
}
function ulSurround(strings){
    let str=strings.map(function (value) {
        return '<li>' + value + "</li>";
    });
    str.splice(0,0,"<ul>");
    str.splice(str.length,0,"</ul>")
    return str;

}
function lengthSort(array){
    return array.sort(function (a, b) {
        if (a.length>b.length) return 1
        if (a.length<b.length) return -1
        return 0
    });

}
