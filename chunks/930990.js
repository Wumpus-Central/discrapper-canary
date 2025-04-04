var r = n(545576),
    i = n(4340),
    o = n(641236),
    a = n(325008),
    s = o('species');
e.exports = function (e) {
    var t = r(e);
    a &&
        t &&
        !t[s] &&
        i(t, s, {
            configurable: !0,
            get: function () {
                return this;
            }
        });
};
