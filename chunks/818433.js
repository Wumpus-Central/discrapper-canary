l.d(t, { A: () => x });
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(292666),
    c = l(939249),
    o = l(834730),
    u = l(22231),
    d = l(718812),
    m = l(362081),
    h = l(696016),
    f = l(226180);
function x(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: x, clipName: v, setClipName: p } = (0, m.T)(),
        j = (0, d.h)(x),
        [g, b] = a.useState(!1);
    if (g)
        return (0, n.jsx)(r.k, {
            autoFocus: !0,
            value: v,
            placeholder: j,
            minLength: h.U_,
            maxLength: h.mk,
            onChange: (e) => p("" === e ? void 0 : e),
            onBlur: () => b(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let C = null != v && "" !== v ? v : j;
    return (0, n.jsxs)(c.D, {
        className: s()(f.x, i),
        onClick: () => b(!0),
        children: [
            (0, n.jsx)(o.E, { variant: t, color: "text-default", className: l, children: C }),
            (0, n.jsx)(u.R, { className: f.I, size: "xs", color: "currentColor" }),
        ],
    });
}
