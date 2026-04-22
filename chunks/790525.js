"use strict";
n.d(t, { A: () => c });
var r = n(514467),
    i = n(434891),
    s = n(619881),
    a = n(444746),
    o = n(421336),
    l = n(688899),
    u = n(324049),
    d = n(273101);
function c(e, t, n) {
    void 0 === n && (n = !1);
    var c,
        _,
        f,
        E = (0, a.sb)(t),
        h =
            (0, a.sb)(t) &&
            ((c = t.getBoundingClientRect()),
            (_ = (0, d.LI)(c.width) / t.offsetWidth || 1),
            (f = (0, d.LI)(c.height) / t.offsetHeight || 1),
            1 !== _ || 1 !== f),
        p = (0, l.A)(t),
        m = (0, r.A)(e, h, n),
        g = { scrollLeft: 0, scrollTop: 0 },
        A = { x: 0, y: 0 };
    return (
        (E || (!E && !n)) &&
            (("body" !== (0, s.A)(t) || (0, u.A)(p)) && (g = (0, i.A)(t)),
            (0, a.sb)(t)
                ? ((A = (0, r.A)(t, !0)), (A.x += t.clientLeft), (A.y += t.clientTop))
                : p && (A.x = (0, o.A)(p))),
        { x: m.left + g.scrollLeft - A.x, y: m.top + g.scrollTop - A.y, width: m.width, height: m.height }
    );
}
