var i = n(706178);
(e.exports = E), (E.simpleSieve = m), (E.fermatTest = g);
var r = n(814033),
    a = new r(24),
    s = new (n(687363))(),
    o = new r(1),
    l = new r(2),
    u = new r(5);
new r(16), new r(8);
var c = new r(10),
    d = new r(3);
new r(7);
var f = new r(11),
    _ = new r(4);
new r(12);
var p = null;
function h() {
    if (null !== p) return p;
    var e = 1048576,
        t = [];
    t[0] = 2;
    for (var n = 1, i = 3; i < e; i += 2) {
        for (var r = Math.ceil(Math.sqrt(i)), a = 0; a < n && t[a] <= r && i % t[a] != 0; a++);
        (n !== a && t[a] <= r) || (t[n++] = i);
    }
    return (p = t), t;
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
    var t = r.mont(e);
    return 0 === l.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
}
function E(e, t) {
    var n, p;
    if (e < 16) return new r(2 === t || 5 === t ? [140, 123] : [140, 39]);
    for (t = new r(t); ; ) {
        for (n = new r(i(Math.ceil(e / 8))); n.bitLength() > e; ) n.ishrn(1);
        if ((n.isEven() && n.iadd(o), n.testn(1) || n.iadd(l), t.cmp(l))) {
            if (!t.cmp(u)) for (; n.mod(c).cmp(d); ) n.iadd(_);
        } else for (; n.mod(a).cmp(f); ) n.iadd(_);
        if (m((p = n.shrn(1))) && m(n) && g(p) && g(n) && s.test(p) && s.test(n)) return n;
    }
}
