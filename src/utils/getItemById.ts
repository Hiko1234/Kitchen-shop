export const getItemById = (id: any, data: any) => {
    const targetItem = data.filter((el: any) => {
        if (el.id == id) {
            return el
        }
    })
    return targetItem[0];
}