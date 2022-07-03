const anArray = [3,5,1,8,7]

function writeALinkedList(linkedListHead){
    if (linkedListHead == null) 
        return console.log('null')

    console.log(linkedListHead.value, '->')
    writeALinkedList(linkedListHead.next)
}

function recursivelyAddToLinkedList(array, index){
    if (index >= array.length) return null
    const previousList = 
        recursivelyAddToLinkedList(array, index+1)
        
    return {value: array[index], next: previousList}
}

function createALinkedList(arr) {
    const linkedList = recursivelyAddToLinkedList(arr, 0)
    writeALinkedList(linkedList)
}

createALinkedList(anArray)

