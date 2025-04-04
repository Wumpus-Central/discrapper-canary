var e = n(178476),
    o = n(459341),
    i = n(394370),
    u = n(181794),
    s = i('species');
t.exports = function (t) {
    var r = e(t);
    u &&
        r &&
        !r[s] &&
        o(r, s, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
