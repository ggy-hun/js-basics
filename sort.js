// sorting function for dev branch commit

const sort = (arr) => {
  const trueArr = new Array();
  const falseArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === condition) {
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  return {
    trueArr,
    falseArr
  };
};
