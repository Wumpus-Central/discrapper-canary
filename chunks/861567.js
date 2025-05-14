var n = TypeError;
t.exports = function (t) {
    if (t > 9007199254740991) throw n('Maximum allowed index exceeded');
    return t;
};
