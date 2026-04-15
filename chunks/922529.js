n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(837381),
    o = n(813516),
    c = n(480972);
let d = l.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: l = !1, itemId: a, ...d } = e,
            { children: u } = d,
            { role: h, onFocus: m, ...A } = (0, r.rm)(a ?? "");
        return (0, i.jsx)(o.A, {
            ...d,
            ...(null != a ? { ...A, onFocus: m } : void 0),
            ref: t,
            role: "separator",
            "aria-label": "string" == typeof u ? u : void 0,
            className: s()(n, { [c.yF]: !0, [c.ov]: null != u, [c.rd]: l }),
        });
    }),
    u = l.memo(d);
