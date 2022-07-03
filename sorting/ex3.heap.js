const numbers = [7,2,6,3,5,1,9,8]

const heap = new Array(32)
let heapSize = 0

function writeHeap(){
        console.log(heap.slice(0, heapSize).join(','))
}

function swapElements(location, compareTo){
    const temp = heap[location]
    heap[location] = heap[compareTo]
    heap[compareTo] = temp
}

function fixHeapUp(location){
    const compareTo = Math.floor(location/2)
    if (heap[location] < heap[compareTo]) {
        swapElements(location, compareTo)
        fixHeapUp(compareTo)
    }
}

function addToHeap(newValue){
    heapSize += 1
    heap[heapSize-1] = newValue
    fixHeapUp(heapSize-1)
    console.log()
    console.log()
}


function fixHeapDown(startingPoint){
    const leftChild = startingPoint*2
    const rightChild = startingPoint*2+1

    if (leftChild >= heapSize) return
    if ((rightChild >= heapSize) || 
        (heap[leftChild] < heap[rightChild])){
            // check the left child for swap
            if (heap[startingPoint] > heap[leftChild])
            {
                swapElements(startingPoint, leftChild)
                fixHeapDown(leftChild)
            }
    } else {
        // check the right child
        if (heap[startingPoint] > heap[rightChild])
        {
            swapElements(startingPoint, rightChild)
            fixHeapDown(rightChild)
        }
    }
}

function removeTopFromHeap(){
    if (heapSize === 0) return
    const value = heap[0]
    heap[0] = heap[heapSize-1]
    heapSize -= 1
    fixHeapDown(0)
    return value
}





numbers.forEach(number => {
    addToHeap(number)
})
writeHeap()

while(heapSize > 0){
    const nextValue = removeTopFromHeap()
    console.log(nextValue)
}
writeHeap()
