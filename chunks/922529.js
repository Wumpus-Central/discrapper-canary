e.d(t, { A: () => c });
var s = e(627968),
    i = e(64700),
    n = e(503698),
    a = e.n(n),
    l = e(837381),
    o = e(749314),
    p = e(375708),
    d = e(701628);
let u = i.forwardRef(function (r, t) {
        let e,
            { className: i, isBeforeGroup: n = !1, itemId: u, ...c } = r,
            { children: f, isUnread: b } = c,
            { role: h, onFocus: y, ...g } = (0, l.rm)(u ?? "");
        return (
            "string" == typeof f && b
                ? (e = `${p.intl.string(p.t.y2b7CA)}, ${f}`)
                : "string" == typeof f
                  ? (e = f)
                  : b && (e = p.intl.string(p.t.y2b7CA)),
            (0, s.jsx)(o.A, {
                ...c,
                ...(null != u ? { ...g, onFocus: y } : void 0),
                ref: t,
                role: "separator",
                "aria-label": e,
                className: a()(i, { [d.yF]: !0, [d.ov]: null != f, [d.rd]: n }),
            })
        );
    }),
    c = i.memo(u);
