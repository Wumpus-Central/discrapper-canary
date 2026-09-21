l.d(t, { A: () => x });
var a = l(477900),
    n = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(95477),
    o = l(939249),
    c = l(834730),
    u = l(22231),
    d = l(718812),
    m = l(362081),
    f = l(696016);
l(600253);
var h = l(880275);
function x(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: x, clipName: p, setClipName: v } = (0, m.T)(),
        g = (0, d.h)(x),
        [j, C] = n.useState(!1);
    if (j)
        return (0, a.jsx)(r.k, {
            autoFocus: !0,
            value: p,
            placeholder: g,
            minLength: f.U_,
            maxLength: 200,
            onChange: (e) => v("" === e ? void 0 : e),
            onBlur: () => C(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let b = null != p && "" !== p ? p : g;
    return (0, a.jsxs)(o.D, {
        className: s()(h.x, i),
        onClick: () => C(!0),
        children: [
            (0, a.jsx)(c.E, { variant: t, color: "text-default", className: l, children: b }),
            (0, a.jsx)(u.PencilIcon, { className: h.I, size: "xs", color: "currentColor" }),
        ],
    });
}
