var e = /^(?:0|[1-9]\d*)$/;
t.exports = function (t, a) {
    var r = typeof t;
    return !!(a = null == a ? 9007199254740991 : a) && ('number' == r || ('symbol' != r && e.test(t))) && t > -1 && t % 1 == 0 && t < a;
};
