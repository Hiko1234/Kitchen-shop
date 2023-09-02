export const getRandomObjects = (data: any, count: any) => {
    const randomObjects: any = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        randomObjects.push(data.splice(randomIndex, 1)[0]);
    }

    return randomObjects;
}