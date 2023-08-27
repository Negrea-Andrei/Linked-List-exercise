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
        this.size = 0
    }

    appendNode(data) {
        const node = new newNode(data);

        if (!this.head) {
            this.head = node
            this.size += 1
            return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = node
        this.size += 1

    }

    prependNode(data) {
        const node = new newNode(data);
        node.next = this.head
        this.head= node
        this.size += 1
    }

    showSize() {
        console.log(this.size)
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
myList.prependNode(1)
myList.appendNode(10000)


myList.prependNode(111)

myList.display()

myList.showSize()