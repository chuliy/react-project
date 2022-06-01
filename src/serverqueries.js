// GET product list
export async function getItems() {
    let result = await fetch("http://localhost:3000/products")
        .then(res => res.json());
    return result
}

// GET categories list
export async function getCategories() {
    let result = await fetch("http://localhost:3000/categories")
        .then(res => res.json())
    return result
}

// POST new item
export async function postItem(item) {
    await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: item.name,
            cost: item.cost,
            categoryId: item.categoryId
        })
    })
}

// DELETE item
export async function deleteItem(idToDelete) {
    await fetch(`http://localhost:3000/product/${idToDelete}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        params: { id: idToDelete },
        body: null
    });
}

// MODIFY item on server
export async function modifyItem(item) {
    await fetch(`http://localhost:3000/product/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        params: { id: item.id },
        body: JSON.stringify({ name: item.name, cost: item.cost, categoryId: item.categoryId })
    })
}