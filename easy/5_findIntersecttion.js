const findIntersection = (arr) => {
  let intersection = [];

  const kume1 = arr[0].replace(/\s/g,"").split(","); //burada replace ile boşlukları sildik ve split ile virgüllere göre ayırdık
  const kume2 = arr[1].replace(/\s/g,"").split(",");

  kume2.forEach((item) => { //kume2 deki her bir elemanı kume1 de var mı diye kontrol ettik
    if (kume1.includes(item)) { //eğer varsa intersection dizisine ekledik
      intersection.push(item);
    }
  });
  if (intersection.length != 0) {
    return intersection.toString(); 
  } else {
    return false;
  }
};

export { findIntersection };
