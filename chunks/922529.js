n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(837381),
    o = n(813516),
    c = n(985018),
    d = n(798204);
let u = l.forwardRef(function (e, t) {
        let n,
            { className: l, isBeforeGroup: a = !1, itemId: u, ...h } = e,
            { children: m, isUnread: A } = h,
            { role: g, onFocus: p, ..._ } = (0, r.rm)(u ?? "");
        return (
            "string" == typeof m && A
                ? (n = `${c.intl.string(c.t.y2b7CA)}, ${m}`)
                : "string" == typeof m
                  ? (n = m)
                  : A && (n = c.intl.string(c.t.y2b7CA)),
            (0, i.jsx)(o.A, {
                ...h,
                ...(null != u ? { ..._, onFocus: p } : void 0),
                ref: t,
                role: "separator",
                "aria-label": n,
                className: s()(l, { [d.yF]: !0, [d.ov]: null != m, [d.rd]: a }),
            })
        );
    }),
    h = l.memo(u);
