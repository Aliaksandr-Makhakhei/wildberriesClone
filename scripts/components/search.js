function normalizeString(string) {
  string = string.replaceAll(' ', '')
  return string.trim().toLowerCase();
}

function compareStrings(string1, string2) {
  return normalizeString(string1).includes(normalizeString(string2));
}

export function filterProducts(products, searchTerm) {
  if (!searchTerm.length) return [];
  return products.filter(({ category, name, price }) => {
    switch (true) {
      case compareStrings(category, searchTerm):
        return true;
      case compareStrings(name, searchTerm):
        return true;
      case compareStrings(price, searchTerm):
        return true;
      default:
        return false;
    }
  });
}