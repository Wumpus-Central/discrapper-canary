n.d(e, { A: () => u });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(813516),
    o = n(50397);
let d = l.forwardRef(function (t, e) {
        let { className: n, isBeforeGroup: l = !1, ...r } = t,
            { children: d } = r;
        return (0, i.jsx)(s.A, {
            ...r,
            ref: e,
            role: "separator",
            "aria-label": "string" == typeof d ? d : void 0,
            className: a()(n, { [o.yF]: !0, [o.ov]: null != d, [o.rd]: l }),
        });
    }),
    u = l.memo(d);
