function solution(phone_number) {
    const len= phone_number.length;
    const lastNum = phone_number.slice(-4);
    const hiddenPhoneNum = "*".repeat(len-4).concat(lastNum);
    
    return hiddenPhoneNum;

}
