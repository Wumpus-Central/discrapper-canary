"use strict";
n.d(t, { A: () => l });
var r = n(688899),
    i = n(175924),
    s = n(421336),
    a = n(257027),
    o = n(273101);
function l(e) {
    var t,
        n = (0, r.A)(e),
        l = (0, a.A)(e),
        u = null == (t = e.ownerDocument) ? void 0 : t.body,
        c = (0, o.T9)(n.scrollWidth, n.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0),
        d = (0, o.T9)(n.scrollHeight, n.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0),
        _ = -l.scrollLeft + (0, s.A)(e),
        f = -l.scrollTop;
    return (
        "rtl" === (0, i.A)(u || n).direction && (_ += (0, o.T9)(n.clientWidth, u ? u.clientWidth : 0) - c),
        { width: c, height: d, x: _, y: f }
    );
}
