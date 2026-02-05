i.d(t, { A: () => c });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(813516),
    o = i(119907);
let d = a.forwardRef(function (e, t) {
        let { className: i, isBeforeGroup: a = !1, ...l } = e,
            { children: d } = l;
        return (0, n.jsx)(s.A, {
            ...l,
            ref: t,
            role: "separator",
            "aria-label": "string" == typeof d ? d : void 0,
            className: r()(i, { [o.yF]: !0, [o.ov]: null != d, [o.rd]: a }),
        });
    }),
    c = a.memo(d);
