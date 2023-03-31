const questionMark = (str) => {
  if (str.length < 5) {
    return false;
  }
  const newStr = str.replace(/[^0-9?]/g, ""); //burada replace ile sadece sayılar ve soru işaretlerini aldık
  const arr = newStr.split(""); 

  let sums = [];
  let sum = 0;
  let iterator = 0;

  arr.forEach((item) => {
    if (item != "?") { 
      sum = parseInt(item) + parseInt(arr[iterator + 4]); //burada 4 eleman sonrasındaki sayı ile topladık
      sums.push(sum);
    }
    iterator += 1;
  });
  console.log(sums);
  return sums.includes(10) ? true : false; //aralarında 4 soru işareti olan sayıların toplamı 10 ise true döndürdük
};

export { questionMark };
