n.d(e, { A: () => d });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(813516),
    o = n(10029);
let u = l.forwardRef(function (t, e) {
        let { className: n, isBeforeGroup: l = !1, ...r } = t,
            { children: u } = r;
        return (0, i.jsx)(a.A, {
            ...r,
            ref: e,
            role: "separator",
            "aria-label": "string" == typeof u ? u : void 0,
            className: s()(n, { [o.yF]: !0, [o.ov]: null != u, [o.rd]: l }),
        });
    }),
    d = l.memo(u);
