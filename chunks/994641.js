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
        children: b,
        onClick: p,
        onPointerDown: _,
        onKeyDown: m,
        size: x,
        className: g,
    } = e;
    return (0, i.jsx)("button", {
        ref: t,
        onMouseEnter: a,
        onMouseLeave: r,
        onFocus: c,
        onBlur: d,
        onContextMenu: l,
        type: "button",
        className: n()(s.button, "custom" !== x && s[x], g),
        onClick: p,
        onPointerDown: _,
        onKeyDown: m,
        "aria-label": o,
        "aria-pressed": u,
        "aria-disabled": h,
        "aria-describedby": f,
        children: b,
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
