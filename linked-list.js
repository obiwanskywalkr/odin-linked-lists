#!/usr/bin/env node

class Node {
    constructor(value, next) {
       this.value = value
       this.next = next 
    }
}

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

    getSize() {
        return this.length
    }

    getHead() {
        return this.head
    }

    getTail() {
        let current = this.head
        while (current.next) {
            current = current.next
        }

        return current
    }

    at(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    pop() {
        const newTail = this.at(this.length - 2)
        newTail.next = newTail.next.next
        this.length--
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

LinkedList.from = function(...values) {
    const list = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        list.prepend(values[i])
        this.length++
    }

    return list
}

const test = LinkedList.from(10, 20, 30, 40, 50)
test.toString()
test.append(60)
test.toString()