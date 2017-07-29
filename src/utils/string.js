function getStringWithArray(array) {
    let str;
    let IMEI;
    for (IMEI in array) {
        str = IMEI + '\n';
    }
    return str;
}

function getArrayWithString(string) {
    let array = string.split('\n');
    return array.slice(0, array.length - 1);
}

export default {
    getArrayWithString,
    getStringWithArray
}