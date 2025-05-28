function generateProductDescriptions(productList, colorVariants, priceList) {
  const outputDescriptions = [];

  const usableLength = Math.min(productList.length, colorVariants.length, priceList.length);
  const validProducts = productList.slice(0, usableLength);
  const validColors = colorVariants.slice(0, usableLength);
  const validPrices = priceList.slice(0, usableLength);

  const extraColors = colorVariants.slice(usableLength);

  // Pasangkan produk dengan warna dan harga
  validProducts.forEach((product, index) => {
    let adjustedColorIndex = 0;

    if (index > 0) {
      if (index % 2 === 0) {
        adjustedColorIndex = index - 1;
      } else {
        adjustedColorIndex = index < 5 ? index + 1 : index;
      }
    }

    const selectedColor = validColors[adjustedColorIndex];
    const selectedPrice = validPrices[index];

    outputDescriptions.push(`${product} ${selectedColor} ${selectedPrice}`);
  });

  // Menbambah satu kombinasi saja dengan warna ekstra, untuk produk pertama
  if (extraColors.length > 0) {
    outputDescriptions.push(`${validProducts[0]} ${extraColors[0]} ${validPrices[0]}`);
  }

  return outputDescriptions;
}

export default generateProductDescriptions;