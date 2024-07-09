export const price = (price) => {
    let NGNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return NGNaira.format(price)
}
