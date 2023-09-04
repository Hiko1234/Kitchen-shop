export const getItemFromLS = (item: any) => {
    const data = localStorage.getItem(item);
    return data ? JSON.parse(data) : [];
}