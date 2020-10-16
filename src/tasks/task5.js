function getSumNumber(num) {

    let sum = 0, tmp;

    while (num) {

        tmp = num % 10;

        num = (num - tmp) / 10;

        sum += tmp;

    }

    return sum;

}



console.log(getSumNumber(132189));
