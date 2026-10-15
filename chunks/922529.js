e.d(r, { A: () => c });
var s = e(477900),
    i = e(582128),
    n = e(503698),
    l = e.n(n),
    a = e(837381),
    o = e(749314),
    p = e(105292),
    u = e(13673);
let c = i.memo(function (t) {
    let r,
        { className: e, isBeforeGroup: i = !1, itemId: n, ref: c, ...d } = t,
        { children: b, isUnread: h } = d,
        { role: y, onFocus: f, ...g } = (0, a.rm)(n ?? "");
    return (
        "string" == typeof b && h
            ? (r = `${p.intl.string(p.t.y2b7CA)}, ${b}`)
            : "string" == typeof b
              ? (r = b)
              : h && (r = p.intl.string(p.t.y2b7CA)),
        (0, s.jsx)(o.A, {
            ...d,
            ...(null != n ? { ...g, onFocus: f } : void 0),
            ref: c,
            role: "separator",
            "aria-label": r,
            className: l()(e, { [u.yF]: !0, [u.ov]: null != b, [u.rd]: i }),
        })
    );
});
