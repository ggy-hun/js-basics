// union function for dev branch commit

const union = (arr1, arr2) => {
  const union = new Array();
  for (let i = 0; i < arr1.length; i++) {
    section.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    let missing = true;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        missing = false;
      }
    }
    if (missing === true) {
      section.push(arr2[i]);
    }
  }
  return union;
};
