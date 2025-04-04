var e = n(12879).IteratorPrototype,
    o = n(425184),
    i = n(132812),
    u = n(770050),
    s = n(903438),
    c = function () {
        return this;
    };
t.exports = function (t, r, n, f) {
    var a = r + ' Iterator';
    return (t.prototype = o(e, { next: i(+!f, n) })), u(t, a, !1, !0), (s[a] = c), t;
};
