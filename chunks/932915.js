"use strict";
r.d(t, { A: () => b });
var n = r(634502),
    o = r(615464),
    a = r(861599),
    i = r(545116),
    l = r(970552),
    s = r(5264),
    u = r(776931),
    c = r(625824),
    p = "[object Arguments]",
    d = "[object Array]",
    f = "[object Object]",
    h = Object.prototype.hasOwnProperty;
let b = function (e, t, r, b, v, g) {
    var x = (0, s.A)(e),
        y = (0, s.A)(t),
        m = x ? d : (0, l.A)(e),
        w = y ? d : (0, l.A)(t);
    (m = m == p ? f : m), (w = w == p ? f : w);
    var A = m == f,
        E = w == f,
        C = m == w;
    if (C && (0, u.A)(e)) {
        if (!(0, u.A)(t)) return !1;
        (x = !0), (A = !1);
    }
    if (C && !A)
        return g || (g = new n.A()), x || (0, c.A)(e) ? (0, o.A)(e, t, r, b, v, g) : (0, a.A)(e, t, m, r, b, v, g);
    if (!(1 & r)) {
        var _ = A && h.call(e, "__wrapped__"),
            O = E && h.call(t, "__wrapped__");
        if (_ || O) {
            var j = _ ? e.value() : e,
                k = O ? t.value() : t;
            return g || (g = new n.A()), v(j, k, r, b, g);
        }
    }
    return !!C && (g || (g = new n.A()), (0, i.A)(e, t, r, b, v, g));
};
