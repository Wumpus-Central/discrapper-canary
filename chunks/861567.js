var t = TypeError,
    n = 9007199254740991;
e.exports = function (e) {
    if (e > n) throw t('Maximum allowed index exceeded');
    return e;
};
