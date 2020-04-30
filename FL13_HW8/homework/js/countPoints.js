function countPoints(points) {
let count = 0;
for (let i = 0; i<points.length; ++i) {
    if(points[i][0] > points[i][2]) {
        count += 3;
    } else if(points[i][0] === points[i][2]) {
        count += 1; 
    }
}
    return count;
}
countPoints(['3:1','1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1','1:0']);