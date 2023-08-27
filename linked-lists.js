//!This exercise will focus on the LInked List data structure

class newNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
    }

    appendNode(data) {
        const node = new newNode(data);

        if (!this.head) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = node

    }

    display() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const myList = new linkedList;

myList.appendNode(7)
myList.appendNode(9)
myList.appendNode(10)

myList.display()