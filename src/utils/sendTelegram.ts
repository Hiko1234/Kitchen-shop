export const sendTelegram = async (
    message: string,
    baseUrl: string,
    chatID: string
) => {
    const url: string = `${baseUrl}sendMessage?chat_id=${chatID}&text=${message}`

    const response: Response = await fetch(url);

    if (!response.ok){
        const error = await response.json();
        await Promise.reject(error.description || "Щось пішло не так");
    }
}