class cartProvider {
  constructor(key) {
    this.key = key;
  }
  getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }
  saveDataToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify("cart"));
  }
}
