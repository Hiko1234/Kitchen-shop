export const getItemFromLS = (item: any) => {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(item);
        return data ? JSON.parse(data) : [];
    }
}