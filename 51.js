let arrays = [[1, 2, 3], [4, 5], [6]];
let result = [];
for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
        result.push(arrays[i][j]);
    }
}
console.log(result);