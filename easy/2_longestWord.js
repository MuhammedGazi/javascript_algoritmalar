const longestWord = (str) => {
  const arr = str.replace(/[^a-zA-Z ]/g, "").split(" "); //burada regex ile sadece harfleri alıyoruz
  arr.sort((a, b) => {         //burada da uzunluklarına göre sıralıyoruz
    return b.length-a.length; //büyükten küçüğe doğru sıralıyoruz bunun için b-a yapıyoruz
  });
  return arr[0];
};

export { longestWord };
