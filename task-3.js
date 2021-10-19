const first = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const second = {
    d: 4,
    e: 5,
    f: 6
  };
  
  const third = {
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11
  };



  let obj = {
    ...first,
    ...second,
    ...third
    
};

//   function doTheMagic(obj) {

//     Object.entries(obj).map(x=> x+=x)
    
//   }

// console.log(Object.entries(obj))