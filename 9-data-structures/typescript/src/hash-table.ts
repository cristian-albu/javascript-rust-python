export default function HashTableStructure() {
  function hashStringToInt(string: string, tableSize: number) {
    let hash = 17;

    for (let i = 0; i < string.length; i++) {
      hash = (13 * hash * string.charCodeAt(i)) % tableSize;
    }

    console.log(hash);
    return hash;
  }

  class HashTable {
    table = new Array(2003);
    numItems = 0;
    loadFactor = this.numItems / this.table.length;

    setItem = (key: string, value: any) => {
      this.numItems++;
      const index = hashStringToInt(key, this.table.length);
      if (this.table[index]) {
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [[key, value]];
      }
    };
    getItem = (key: string) => {
      const index = hashStringToInt(key, this.table.length);
      if (!this.table[index]) {
        return null;
      }
      return this.table[index].find((x: string[]) => x[0] === key)[1];
    };
  }

  const myTable = new HashTable();
  myTable.setItem("firstName", "bob");
  myTable.getItem("firstName");
  myTable.setItem("lastName", "tim");

  console.log(myTable.getItem("firstName"), myTable.getItem("lastName"));
}

HashTableStructure();
