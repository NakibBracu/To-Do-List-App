let lists = []
console.log('For Adding new task type "new"')
console.log('For Show all tasks type "list"')
console.log('For Show all tasks type "delete"')
console.log('For delete specific task type the no of the task you want to delete like "1"')
let type_of_operation = prompt('Please Insert the operation you want to make. Press "q" for quit')

while (type_of_operation.toLowerCase() !== 'q') {
    if (type_of_operation.toLowerCase() == 'new') {
        const item = prompt('Please give the task Name')
        lists.push(item)
        console.log(`New Task ${item} added.`)
    } else if (type_of_operation.toLowerCase() == 'list') {
        showAllItem(lists)
    } else if (type_of_operation.toLowerCase() == 'delete') {
        let index = prompt('Please give the specific task number you want to delete')
        while(index < 0 || index > lists.length-1){
            index = prompt('Please give a valid index')
        }
        let newList = []
        for (let i = 0; i < lists.length; i++) {
            if (i != index) {
                newList.push(lists[i])
            }
        }
        lists = newList
        showAllItem(lists)
    } else {
        type_of_operation = prompt('Please Insert valid operations. otherwise, Press "q" for quit')
        continue
    }
    type_of_operation = prompt('Please Insert the operation you want to make. Press "q" for quit')
    if (type_of_operation.toLowerCase() === 'q') {
        break
    }
}

if (lists.length == 0) {
    console.log('The list is empty')
} else {
    console.log('The final to do list is')
    showAllItem(lists)
}

function showAllItem(lists) {
    console.log('============================')
    for (let i = 0; i < lists.length; i++) {
        console.log(`${i}: ${lists[i]}`)
    }
}
