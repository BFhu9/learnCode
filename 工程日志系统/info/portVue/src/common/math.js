
export const accAdd = (arg1, arg2) => {
    let r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
};



export const accRound = (n, decimals = 0) => {
    return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
};