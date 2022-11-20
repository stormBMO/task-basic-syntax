export function romanToInteger(str) {
    let result = 0;
    let l, r;
    let i = 0;
    while (i < str.length - 1) {
        switch (str[i]) {
            case 'I':
                l = 1;
                break;
            case 'V':
                l = 5;
                break;
            case 'X':
                l = 10;
                break;
            case 'L':
                l = 50;
                break;
            case 'C':
                l = 100;
                break;
            case 'D':
                l = 500;
                break;
            case 'M':
                l = 1000;
                break;
        }
        switch (str[i + 1]) {
            case 'I':
                r = 1;
                break;
            case 'V':
                r = 5;
                break;
            case 'X':
                r = 10;
                break;
            case 'L':
                r = 50;
                break;
            case 'C':
                r = 100;
                break;
            case 'D':
                r = 500;
                break;
            case 'M':
                r = 1000;
                break;
        }
        if (l >= r) {
            result += l;
            if (i == str.length - 2) {
                result += r;
                break;
            }
            i++;
        } else {
            result += r - l;
            i += 2;
        }
    }
    return result;
}
