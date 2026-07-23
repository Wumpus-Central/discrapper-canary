a.d(s, { k: () => u });
var t = a(627968),
    i = a(64700),
    n = a(503698),
    r = a.n(n),
    l = a(187322),
    c = a(657718),
    d = a(85277),
    o = a(48525);
function u(e) {
    let {
            role: s = "button",
            type: a = "button",
            size: n = "md",
            variant: u = "secondary",
            icon: p,
            iconOpticalOffsetMargin: b = 0,
            focusProps: h,
            pressed: f = !1,
            "aria-label": k,
            buttonRef: j,
            disabled: m,
            className: x,
            style: N,
            ...v
        } = e,
        y = i.useRef(null),
        C = j ?? y,
        w = (0, t.jsx)(c.a, {
            icon: p,
            iconOpticalOffsetMargin: b,
            iconPosition: "start",
            size: n,
            ref: C,
            disabled: m,
        });
    return (0, t.jsx)(l.vN, {
        ...h,
        children: (0, t.jsx)("button", {
            role: s,
            type: a,
            "aria-pressed": f,
            className: r()(d.button, o.button, d[n], o[u], { [o.pressed]: f }),
            "aria-label": k,
            disabled: m,
            ref: C,
            ...v,
            children: (0, t.jsx)("div", { className: d.buttonChildrenWrapper, children: w }),
        }),
    });
}
