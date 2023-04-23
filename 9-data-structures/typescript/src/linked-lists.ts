export default function LinkedListStructure() {
  // https://www.youtube.com/watch?v=ZBdE8DElQQU

  class Node {
    data: string | number;
    next: Node | null;
    constructor(data: string | number, next: Node | null = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    head: Node | null;
    size: number;
    constructor() {
      this.head = null;
      this.size = 0;
    }

    // Insert first

    insertFirst(data: string | number) {
      this.head = new Node(data, this.head);
      this.size++;
    }

    //  Insert last
    insertLast(data: string | number) {
      let node = new Node(data);
      let current;

      // If empty, make head

      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }

      this.size++;
    }

    // Insert at index

    insertAt(data: string | number, index: number) {
      if (index > 0 && index > this.size) {
        return;
      }

      if (index === 0) {
        this.insertFirst(data);
        return;
      }

      const node = new Node(data);
      let current: Node | null, previous: Node | null;
      //   Set current to first

      current = this.head;
      let count = 0;

      while (count < index) {
        previous = current;
        count++;

        current = current!.next;
      }

      node.next = current;
      previous!.next = node;
      this.size++;
    }

    // Get at index

    getAt(index: number) {
      let current = this.head;

      let count = 0;
      while (current) {
        if (count === index) {
          console.log(current.data);
        }

        count++;
        current = current.next;
      }

      return null;
    }

    // Remove at index

    removeAt(index: number) {
      if (index > 0 && index > this.size) {
        return;
      }
      let current = this.head;
      let previous: Node;
      let count = 0;

      // Remove first

      if (index === 0) {
        this.head = current!.next;
      } else {
        while (count < index) {
          count++;
          previous = current!;
          current = current!.next;
        }

        previous!.next = current!.next;
      }

      this.size--;
    }

    // Clear list

    clearList() {
      this.head = null;
      this.size = 0;
    }

    // Print list data

    printListData() {
      let current = this.head;

      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  const ll = new LinkedList();
  ll.insertFirst(100);
  ll.insertFirst(200);
  ll.insertFirst(300);

  ll.insertLast(400);

  ll.insertAt(500, 2);
  ll.insertAt(500, 0);
  ll.insertAt(500, 35);

  console.log("Before");
  ll.printListData();
  ll.removeAt(3);
  console.log("After");
  ll.printListData();

  //   ll.getAt(5);
}
