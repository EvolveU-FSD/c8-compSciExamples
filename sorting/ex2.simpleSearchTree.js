const numbers = [7,2,6,3,5,1,9,8]

function  writeBinarySearchTree(treeNode, depth){
    depth = depth || ''
    if (treeNode.less) writeBinarySearchTree(treeNode.less, depth+'*')
    console.log(depth, ' ', treeNode.less?.value || 'null', 
        '<', treeNode.value, '<', 
        treeNode.greater?.value || 'null')
    if (treeNode.greater) writeBinarySearchTree(treeNode.greater, depth+'*')
}

function createTreeNode(newValue) {
    return {value: newValue, less: null, greater: null}
}
function addANodeToATree(newValue, tree){
    if (tree == null)
        return createTreeNode(newValue)

    if (newValue < tree.value) {
        if (tree.less == null) tree.less = createTreeNode(newValue)
        else addANodeToATree(newValue, tree.less)
    } else {
        if (tree.greater == null) tree.greater = createTreeNode(newValue)
        else addANodeToATree(newValue, tree.greater)
    }
    return tree
}

function createANewTree(values){
    let tree = null
    values.forEach(value => {
        tree = addANodeToATree(value, tree)
    })
    return tree
}

const newTree = createANewTree(numbers)
writeBinarySearchTree(newTree)