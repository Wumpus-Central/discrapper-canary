n.d(t, {
    A: () => l,
});
var r = n(688899),
    i = n(175924),
    a = n(421336),
    s = n(257027),
    o = n(273101);

function l(e) {
    var t,
        n = (0, r.A)(e),
        l = (0, s.A)(e),
        c = null == (t = e.ownerDocument) ? void 0 : t.body,
        u = (0, o.T9)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
        d = (0, o.T9)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
        f = -l.scrollLeft + (0, a.A)(e),
        p = -l.scrollTop;
    return (
        "rtl" === (0, i.A)(c || n).direction && (f += (0, o.T9)(n.clientWidth, c ? c.clientWidth : 0) - u),
        {
            width: u,
            height: d,
            x: f,
            y: p,
        }
    );
}
