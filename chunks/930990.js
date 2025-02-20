var n = e(545576),
    o = e(4340),
    i = e(641236),
    u = e(325008),
    a = i('species');
t.exports = function (t) {
    var r = n(t);
    u &&
        r &&
        !r[a] &&
        o(r, a, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
