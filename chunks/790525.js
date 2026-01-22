n.d(t, {
    A: () => f,
});
var r = n(514467),
    i = n(434891),
    a = n(619881),
    s = n(444746),
    o = n(421336),
    l = n(688899),
    c = n(324049),
    u = n(273101);

function d(e) {
    var t = e.getBoundingClientRect(),
        n = (0, u.LI)(t.width) / e.offsetWidth || 1,
        r = (0, u.LI)(t.height) / e.offsetHeight || 1;
    return 1 !== n || 1 !== r;
}

function f(e, t, n) {
    void 0 === n && (n = !1);
    var u = (0, s.sb)(t),
        f = (0, s.sb)(t) && d(t),
        p = (0, l.A)(t),
        _ = (0, r.A)(e, f, n),
        h = {
            scrollLeft: 0,
            scrollTop: 0,
        },
        m = {
            x: 0,
            y: 0,
        };
    return (
        (u || (!u && !n)) &&
            (("body" !== (0, a.A)(t) || (0, c.A)(p)) && (h = (0, i.A)(t)),
            (0, s.sb)(t)
                ? ((m = (0, r.A)(t, !0)), (m.x += t.clientLeft), (m.y += t.clientTop))
                : p && (m.x = (0, o.A)(p))),
        {
            x: _.left + h.scrollLeft - m.x,
            y: _.top + h.scrollTop - m.y,
            width: _.width,
            height: _.height,
        }
    );
}
