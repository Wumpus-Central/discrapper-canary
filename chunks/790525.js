"use strict";
n.d(t, { A: () => _ });
var r = n(514467),
    i = n(434891),
    a = n(619881),
    s = n(444746),
    o = n(421336),
    l = n(688899),
    u = n(324049),
    c = n(273101);
function d(e) {
    var t = e.getBoundingClientRect(),
        n = (0, c.LI)(t.width) / e.offsetWidth || 1,
        r = (0, c.LI)(t.height) / e.offsetHeight || 1;
    return 1 !== n || 1 !== r;
}
function _(e, t, n) {
    void 0 === n && (n = !1);
    var c = (0, s.sb)(t),
        _ = (0, s.sb)(t) && d(t),
        f = (0, l.A)(t),
        p = (0, r.A)(e, _, n),
        h = { scrollLeft: 0, scrollTop: 0 },
        m = { x: 0, y: 0 };
    return (
        (c || (!c && !n)) &&
            (("body" !== (0, a.A)(t) || (0, u.A)(f)) && (h = (0, i.A)(t)),
            (0, s.sb)(t)
                ? ((m = (0, r.A)(t, !0)), (m.x += t.clientLeft), (m.y += t.clientTop))
                : f && (m.x = (0, o.A)(f))),
        { x: p.left + h.scrollLeft - m.x, y: p.top + h.scrollTop - m.y, width: p.width, height: p.height }
    );
}
