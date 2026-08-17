l.d(t, { A: () => x });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(95477),
    o = l(939249),
    c = l(834730),
    u = l(22231),
    d = l(718812),
    m = l(362081),
    h = l(696016);
l(600253);
var f = l(226180);
function x(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: x, clipName: v, setClipName: p } = (0, m.T)(),
        g = (0, d.h)(x),
        [j, b] = a.useState(!1);
    if (j)
        return (0, n.jsx)(r.k, {
            autoFocus: !0,
            value: v,
            placeholder: g,
            minLength: h.U_,
            maxLength: 200,
            onChange: (e) => p("" === e ? void 0 : e),
            onBlur: () => b(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let C = null != v && "" !== v ? v : g;
    return (0, n.jsxs)(o.D, {
        className: s()(f.x, i),
        onClick: () => b(!0),
        children: [
            (0, n.jsx)(c.E, { variant: t, color: "text-default", className: l, children: C }),
            (0, n.jsx)(u.PencilIcon, { className: f.I, size: "xs", color: "currentColor" }),
        ],
    });
}
