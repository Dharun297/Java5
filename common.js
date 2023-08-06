// Find the common elements in the following arrays

num1 = [22, 58, 69, 12, 47, 55, 7, 36, 89, 75];
num2 = [12, 34, 46, 22, 67, 47, 89];
let commonnum =  gotcommon();

gotcommon();
function gotcommon() {
    let common = [];

    for (i = 0; i < num1.length; i++) {
        for (j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j]) {
                common.push(num1[i]);
            }
        }
    }
    return common;
}

console.log(commonnum);