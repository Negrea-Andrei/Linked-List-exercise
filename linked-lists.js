//!This exercise will focus on the LInked List data structure
/*create the constructor for the class nodes class*/
class newNode {
    /*etch node will have a value and a pointer to the next node in line*/
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/*create a constructor for the linked list*/
/*here i will put all the methods necessary for the list*/

class linkedList {
    constructor() {
        /*etch list will have a head (starting point for the list) and a size*/
        this.head = null
        this.size = 0
    }

    /*this method will alow us to add a new node to the list*/
    appendNode(data) {
        /*we create a new node that will hold the the value we give it*/
        const node = new newNode(data);

        /*if the head of the list is not present, then we set the node as the head of the list*/
        if (!this.head) {
            this.head = node
            /*we increase the size of the list*/
            this.size += 1
            return
        }

        /*else we just ad the node to the pointer of the previous node*/
        /*we loop trough all the nodes until we find the last node and link owr node to the pointer of this node*/
        let current = this.head
        while (current.next) {
            current = current.next
        }

        current.next = node
        this.size += 1

    }

    /*this method adds a node to the start of the list even if there is already a head there*/ 
    prependNode(data) {
        /*we create a new node that we will add*/
        const node = new newNode(data);
        
        /*then we link the old head of the list to the pointer of our new head*/
        node.next = this.head

        /*then we set thea head as our new node and increase the size of the list*/
        this.head = node
        this.size += 1
    }

    /*this method will show the size of the list*/
    showSize() {
        console.log(`The size of the list is ${this.size}`)
    }

    /*this method will return the head of our list*/
    returnHead() {
        console.log(`The head of the list is ${this.head.data}`)
    }

    /*this method will return the last node of our list*/

    returnTail() {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        console.log(`The tail of the list is ${current.data}`)
    }

    /*this method will return the index of a value, if that value is present in our list*/
    at(index) {
        /*if we put a value that is lower than 0 or higher that the size of the list we return a error message*/
        if (index < 0 || index >= this.size) {
           return console.log(`ERROR! INDEX IS OUTSIDE OF THE LIST`)
        }

        /*set a variable to hold the info of the head of the list*/
        let current = this.head

        /*loot trough the list until we get to the index we want*/
        for (let i = 0; i < index; i++) {
            /*change the value of current as we loop trough the list*/
            current = current.next
        }
        /*after the loop is complete we console.log the data of the node at that index*/
        console.log(current.data)
    }

    /*this method removes the last node of the list*/
    pop() {
        /*if the head of the list is null,  we just return a message*/
        if(this.head == null){
            return console.log('this list is empty')
        }

        /*if the next node from the head is null, we just set the head to null*/
        else if(this.head.next == null){
            return this.head = null        
        }


        /*set a variable to hold the info of the head of the list*/
        let current = this.head
        /*we loop trough the list until we encounter a node that does not have a next node linked to another one*/
        while (current.next.next) {
            current = current.next
        }

        /*set that node to null*/
        current.next = null
    }

    /*this method checks if a value is in the list or not*/
    contains(value) {
        /*set a variable to hold the info of the head of the list*/
        let current = this.head;

        /*we loop trough the list*/
        while (current) {
            /*if we found the data , we return true*/
            if (current.data === value) {
                return console.log(`true`);
            }
            current = current.next;
        }
        /*if the loop is finished and we did not found the value, we return false*/
        return console.log(`nope`);
    }

    /*this method returns the index of the value, if the value is in the list*/
    find(value) {
        /*set a variable to hold the info of the head of the list*/
        let current = this.head;
        /*set the index to 0*/
        let index = 0;

        /*loop trough the list until we find a node that has the same value as the one we are looking for*/
        while (current) {
            /*if we found the value, we return*/
            if (current.data === value) {
                return console.log(index);
            }
            /*if the current node does not have the value, we move to the next and increase the index by 1*/
            current = current.next;
            index++;
        }
        /*if the value is not in the list, we return a message error*/
        return console.log('Value not found');
    }

    /*this method displays the linked list as a string with all the values of the nodes*/
    display() {
        /*we first initiate a variable as an empty string*/
        let results = ''

        /*set a variable to hold the info of the head of the list*/
        let current = this.head

        /*we loop trough the list and update the results string with the data from all the nodes*/
        while (current) {
            results += `(${current.data}) -> `
            current = current.next
        }
        /*then we add null as the last item of the string*/
        results += 'null';
        /*and console.log the results*/
        console.log(results)
    }
}


//?TEST THE METHODS:
const myList = new linkedList;

myList.appendNode(7)
myList.appendNode(9)
myList.appendNode(10)
myList.appendNode(10000)


myList.display()

myList.showSize()

myList.returnHead()

myList.returnTail()

myList.at(5)

myList.pop()
myList.pop()
myList.display()
myList.appendNode(1232132)

myList.contains(1232132)

myList.display()

myList.find(10)
myList.pop()
myList.display()

test