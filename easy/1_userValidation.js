const userValidation = (str) => {
  if (
    str.length >= 4 && 
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.slice(0, 1)) && // /[a-zA-Z]/ anlamı: str'in ilk karakteri harf ise true döndür.
    /^\w+$/.test(str) &&                // /^\w+$/ anlamı: str'in içinde harf, rakam veya alt çizgiden başka bir karakter yoksa true döndür.
    /[a-zA-Z0-9]/.test(str.slice(-1))   // /[a-zA-Z0-9]/ anlamı: str'in son karakteri harf veya rakam ise true döndür.
  ) {
    return true;
  } else {
    return false;
  }
};

export { userValidation };
