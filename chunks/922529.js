i.d(t, { A: () => d });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(813516),
    o = i(480972);
let c = a.forwardRef(function (e, t) {
        let { className: i, isBeforeGroup: a = !1, ...l } = e,
            { children: c } = l;
        return (0, n.jsx)(r.A, {
            ...l,
            ref: t,
            role: "separator",
            "aria-label": "string" == typeof c ? c : void 0,
            className: s()(i, { [o.yF]: !0, [o.ov]: null != c, [o.rd]: a }),
        });
    }),
    d = a.memo(c);
