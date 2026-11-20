var i = a(477900);
a(582128);
var r = a(503698),
    n = a.n(r),
    s = a(885619);
function c(e) {
    let {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: c,
        onBlur: d,
        onContextMenu: l,
        "aria-label": o,
        "aria-pressed": u,
        "aria-disabled": h,
        "aria-describedby": f,
        "aria-busy": b,
        children: p,
        onClick: _,
        onPointerDown: m,
        onKeyDown: x,
        size: g,
        className: A,
    } = e;
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: c,
        onBlur: d,
        onContextMenu: l,
        type: "button",
        className: n()(s.button, "custom" !== g && s[g], A),
        onClick: _,
        onPointerDown: m,
        onKeyDown: x,
        "aria-label": o,
        "aria-pressed": u,
        "aria-disabled": h,
        "aria-describedby": f,
        "aria-busy": b,
        children: p,
    });
}
a.d(
    t,
    {},
    {
        f: function (e) {
            let { className: t, ...a } = e;
            return (0, i.jsx)(c, { ...a, className: n()(s.shadow, t) });
        },
        l: c,
    },
);
