var r = n(706178);
(e.exports = E), (E.simpleSieve = m), (E.fermatTest = g);
var i = n(814033),
    o = new i(24),
    a = new (n(687363))(),
    s = new i(1),
    l = new i(2),
    c = new i(5);
new i(16), new i(8);
var u = new i(10),
    d = new i(3);
new i(7);
var f = new i(11),
    p = new i(4);
new i(12);
var _ = null;
function h() {
    if (null !== _) return _;
    var e = 1048576,
        t = [];
    t[0] = 2;
    for (var n = 1, r = 3; r < e; r += 2) {
        for (var i = Math.ceil(Math.sqrt(r)), o = 0; o < n && t[o] <= i && r % t[o] != 0; o++);
        (n !== o && t[o] <= i) || (t[n++] = r);
    }
    return (_ = t), t;
}
function m(e) {
    for (var t = h(), n = 0; n < t.length; n++)
        if (0 === e.modn(t[n])) {
            if (0 !== e.cmpn(t[n])) return !1;
            break;
        }
    return !0;
}
function g(e) {
    var t = i.mont(e);
    return 0 === l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
}
function E(e, t) {
    var n, _;
    if (e < 16) return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
    for (t = new i(t); ; ) {
        for (n = new i(r(Math.ceil(e / 8))); n.bitLength() > e; ) n.ishrn(1);
        if ((n.isEven() && n.iadd(s), n.testn(1) || n.iadd(l), t.cmp(l))) {
            if (!t.cmp(c)) for (; n.mod(u).cmp(d); ) n.iadd(p);
        } else for (; n.mod(o).cmp(f); ) n.iadd(p);
        if (m((_ = n.shrn(1))) && m(n) && g(_) && g(n) && a.test(_) && a.test(n)) return n;
    }
}
