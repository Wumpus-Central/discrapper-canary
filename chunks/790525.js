"use strict";
n.d(t, { A: () => d });
var r = n(514467),
    i = n(434891),
    s = n(619881),
    a = n(444746),
    o = n(421336),
    l = n(688899),
    u = n(324049),
    c = n(273101);
function d(e, t, n) {
    void 0 === n && (n = !1);
    var d,
        _,
        f,
        p = (0, a.sb)(t),
        h =
            (0, a.sb)(t) &&
            ((d = t.getBoundingClientRect()),
            (_ = (0, c.LI)(d.width) / t.offsetWidth || 1),
            (f = (0, c.LI)(d.height) / t.offsetHeight || 1),
            1 !== _ || 1 !== f),
        E = (0, l.A)(t),
        m = (0, r.A)(e, h, n),
        g = { scrollLeft: 0, scrollTop: 0 },
        A = { x: 0, y: 0 };
    return (
        (p || (!p && !n)) &&
            (("body" !== (0, s.A)(t) || (0, u.A)(E)) && (g = (0, i.A)(t)),
            (0, a.sb)(t)
                ? ((A = (0, r.A)(t, !0)), (A.x += t.clientLeft), (A.y += t.clientTop))
                : E && (A.x = (0, o.A)(E))),
        { x: m.left + g.scrollLeft - A.x, y: m.top + g.scrollTop - A.y, width: m.width, height: m.height }
    );
}
