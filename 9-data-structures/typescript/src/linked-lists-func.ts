export default function LinkedListStructure2() {
  class ListNode {
    element: number;
    next: ListNode | null;
    constructor(element: number) {
      this.element = element;
      this.next = null;
    }
  }

  class LinkedList {
    length: number;
    head: ListNode | null;
    constructor() {
      this.length = 0;
      this.head = null;
    }

    getSize = () => {
      console.log(this.length);
      return this.length;
    };

    addNode = (element: number) => {
      let node = new ListNode(element);

      if (!this.head) {
        this.head = node;
        this.length = 1;
      } else {
        let current: ListNode = this.head;
        let previous: ListNode;

        while (current.next !== null) {
          previous = current;
          current = current.next;
        }

        current.next = node;
        console.log(`Added new element ${node.element}`);
        this.length++;
      }
    };

    insertNodeAt = (element: number, index: number) => {
      let node = new ListNode(element);

      if (index === this.length + 1) {
        this.addNode(element);
        return;
      } else if (index > this.length + 1 || index < 0) {
        console.log("Index out of bound");
        return;
      } else {
        let current: ListNode = this.head!;
        let previous: ListNode | null;

        let count = 0;

        while (count < index - 1 && current) {
          previous = current;
          current = current.next!;
          count++;
        }
        let next = current.next;
        current.next = node;

        node.next = next;
        this.length++;
        console.log(current.element);
      }
    };

    getNodes = () => {
      if (!this.head) {
        return;
      } else {
        let current: ListNode | null = this.head;

        let output = [];

        while (current) {
          output.push(current.element);

          current = current.next;
        }
        console.log(`Nodes: [${output}]`);
        return output;
      }
    };
  }

  let ll = new LinkedList();

  ll.addNode(15);
  ll.addNode(25);

  ll.insertNodeAt(35, 3);
  ll.insertNodeAt(35, 35);
  ll.insertNodeAt(35, -35);
  ll.getNodes();
  ll.insertNodeAt(44, 1);
  ll.getSize();
  ll.getNodes();

  ll.insertNodeAt(77, 3);
  ll.getNodes();
}

LinkedListStructure2();
