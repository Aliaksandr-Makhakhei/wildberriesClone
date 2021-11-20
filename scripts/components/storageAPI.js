//set and get data to LocalStorage

export function getStorageData(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data
}

export function setStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}