var t = TypeError;
r.exports = function (r) {
    if (r > 9007199254740991) throw t('Maximum allowed index exceeded');
    return r;
};
