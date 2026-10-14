l.d(t, { A: () => p });
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
function p(e) {
    let { variant: t, className: l, containerClassName: i } = e,
        { clip: p, clipName: x, setClipName: v } = (0, m.T)(),
        g = (0, d.h)(p),
        [j, b] = n.useState(!1);
    if (j)
        return (0, a.jsx)(r.k, {
            autoFocus: !0,
            value: x,
            placeholder: g,
            minLength: f.U_,
            maxLength: 200,
            onChange: (e) => v("" === e ? void 0 : e),
            onBlur: () => b(!1),
            onKeyDown: (e) => {
                ("Enter" === e.key || "Escape" === e.key) && (e.stopPropagation(), e.currentTarget.blur());
            },
        });
    let y = null != x && "" !== x ? x : g;
    return (0, a.jsxs)(o.D, {
        className: s()(h.x, i),
        onClick: () => b(!0),
        children: [
            (0, a.jsx)(c.E, { variant: t, color: "text-default", className: l, children: y }),
            (0, a.jsx)(u.PencilIcon, { className: h.I, size: "xs", color: "currentColor" }),
        ],
    });
}
