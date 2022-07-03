const anArray = [3,5,1,8,7]

function writeADoublyLinkedList(linkedListHead){
    if (linkedListHead == null) 
        return console.log('null')

    console.log(linkedListHead.previous?.value || 'null', 
        '<-', linkedListHead.value, '->', 
        linkedListHead.next?.value || 'null')
    writeADoublyLinkedList(linkedListHead.next)
}

function recursivelyAddToDoublyLinkedList(array, index){
    if (index >= array.length) return null;
    const previousList = recursivelyAddToDoublyLinkedList(array, index+1)
    const newLink = {value: array[index], next: previousList, previous: null}
    if (previousList != null)
        previousList.previous = newLink;
    return newLink;
}

function createALinkedList(arr) {
    return recursivelyAddToDoublyLinkedList(arr, 0)
}

function insertFromStart(count, value, listHead) {
    if (listHead == null) return
    if (count == 0) {
        const newLink = {value: value, next: listHead, previous: listHead.previous}
        if (listHead.previous != null) listHead.previous.next = newLink

    }
    insertFromStart(count-1, value, listHead.next)
}

function getEndOfLinkedList(listHead)
{
    if (listHead == null) return listHead
    if (listHead.next == null) return listHead
    return getEndOfLinkedList(listHead.next)
}

function insertFromEnd(count, value, listTail) {
    if (listTail == null) return
    if (count === 0) {
        const newLink = {value: value, next: listTail.next, previous: listTail}
        if (listTail.next?.previous != null) listTail.next.previous = newLink
        listTail.next = newLink
    }
    insertFromEnd(count-1, value, listTail.previous)
}


const linkedListHead = createALinkedList(anArray)
insertFromStart(1, 'fromFront', linkedListHead)

const linkedListTail = getEndOfLinkedList(linkedListHead)
insertFromEnd(1, 'fromEnd', linkedListTail)
writeADoublyLinkedList(linkedListHead)

