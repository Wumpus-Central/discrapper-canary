r.d(t, { A: () => m });
var n = r(627968),
    i = r(735438),
    a = r.n(i),
    o = r(289873),
    l = r(331322),
    s = r(534514),
    d = r(828904),
    c = r(974175),
    u = r(985018);
function m(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE });
    let r = a().map(t, (e, t) => {
        if (!(c.R[t] || void 0 === e)) return (0, n.jsx)(c.q7, { label: t, value: e }, t);
    });
    return (0, n.jsxs)(l.B, {
        children: [
            (0, n.jsx)(s.D, { variant: "heading-md/medium", children: u.intl.string(u.t["2AGBWH"]) }),
            (0, d.C6)(r),
        ],
    });
}
