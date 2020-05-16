// sectioning function for dev branch commit

const section = (arr1, arr2) => {
  const section = new Array();
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      union.push(arr1[i]);
    }
  }
  return section;
};
