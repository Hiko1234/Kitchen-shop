export const setValidateNumber = (
    value: string,
    error: any
) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)}${phoneNumber.slice(8, 10)}`
    }
    phoneNumber[0] != "0" || phoneNumberLength != 10 ? error(true) : error(false);
}