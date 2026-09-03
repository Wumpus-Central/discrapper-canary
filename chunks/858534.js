var n = e(664886),
    o = e(155084),
    s = e(705323);
t.exports = function (t, r, e) {
    var i, u;
    o(t);
    try {
        if (!(i = s(t, "return"))) {
            if ("throw" === r) throw e;
            return e;
        }
        i = n(i, t);
    } catch (t) {
        (u = !0), (i = t);
    }
    if ("throw" === r) throw e;
    if (u) throw i;
    return o(i), e;
};
