const graph = [
    {start: 'A', end: 'C', cost: 2},
    {start: 'A', end: 'B', cost: 4},
 
    {start: 'B', end: 'D', cost: 10},
    {start: 'B', end: 'C', cost: 5},
 
    {start: 'C', end: 'E', cost: 3},
 
    {start: 'D', end: 'F', cost: 11},

    {start: 'E', end: 'D', cost: 4}
]

let workingSolutions = []

function addAWorkingSolution(solution){
    workingSolutions.push(solution)

    // this would be great place to a BST or HEAP!
    workingSolutions = workingSolutions.sort((solA, solB) => solA.totalCost - solB.totalCost)
}

function getAllPathsFromEndpoint(start){
    return  graph.filter(path => path.start == start)
}

function findShortestPathFrom(start, end){
    const allPathsFromStart =getAllPathsFromEndpoint(start)
    allPathsFromStart.forEach(path => {
        const solution = {
            path: [path.start, path.end], 
            totalCost: path.cost}
        addAWorkingSolution(solution)
    })
    while (workingSolutions.length > 0){
        const currentPath = workingSolutions.shift()
        const path = currentPath.path
        const lastPoint = path[path.length-1]
        if (lastPoint == end)
            return currentPath
        
        const pathsOut = getAllPathsFromEndpoint(lastPoint)
        pathsOut.forEach(pathOut => {
            const newPath = {
                path: [...path, pathOut.end], 
                totalCost: currentPath.totalCost + pathOut.cost}
            addAWorkingSolution(newPath)
        })
    }
    return null // found no path
}

const shortSolution = findShortestPathFrom('A', 'F')
console.log('found the shortest path', shortSolution)