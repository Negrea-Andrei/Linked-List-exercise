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
        this.head = node
        this.size += 1
    }

    showSize() {
        console.log(`The size of the list is ${this.size}`)
    }

    returnHead() {
        console.log(`The head of the list is ${this.head.data}`)
    }

    returnTail() {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        console.log(`The tail of the list is ${current.data}`)
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            console.log(`ERROR! INDEX IS OUTSIDE OF THE LIST`)
        }

        let current = this.head

        for (let i = 0; i < index; i++) {
            current = current.next
        }
        console.log(current.data)
    }

    pop() {
        let current = this.head
        while (current.next.next) {
            current = current.next
        }

        current.next = null
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return console.log(`true`);
            }
            current = current.next;
        }
        return console.log(`nope`);
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === value) {
                return console.log(index);
            }
            current = current.next;
            index++;
        }
        return console.log('Value not found');
    }

    display() {
        let results = ''
        let current = this.head
        while (current) {
            results += `(${current.data}) -> `
            current = current.next
        }
        results += 'null';
        console.log(results)
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

myList.returnHead()

myList.returnTail()

myList.at(5)

myList.pop()
myList.display()
myList.appendNode(1232132)

myList.contains(1232132)

myList.find(10)