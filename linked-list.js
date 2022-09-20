#!/usr/bin/env node
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(value) {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = new Node (value, null)
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head = newNode
        this.length++
    }


    toString() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class Node {
    constructor(value, next) {
       this.value = value
       this.next = next 
    }
}

const test = new LinkedList()
test.prepend(10)
test.append(20)
test.append(30)
test.append(40)
test.toString()