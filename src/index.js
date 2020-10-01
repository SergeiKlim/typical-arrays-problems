exports.min = function min (array) {

  if(!array || array.length === 0) {
    return 0;
  }
  let minimum = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
    console.log(minimum)

}

exports.max = function max (array) {
  if(!array || array.length === 0) {
    return 0;
  }
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximum) {
          maximum = array[i];
        }
    }
    return maximum;
    console.log(maximum)
}

exports.avg = function avg (array) {
  let sum = 0;
  let average = 0;
  if(!array || array.length === 0) {
    return 0;
  }
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    average = sum / array.length;
    return average;
    console.log(average);
}
