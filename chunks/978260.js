var t = /^(?:0|[1-9]\d*)$/;
e.exports = function (e, n) {
    var r = typeof e;
    return (
        !!(n = null == n ? 0x1fffffffffffff : n) &&
        ("number" == r || ("symbol" != r && t.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < n
    );
};
