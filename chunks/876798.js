t.d(e, { k: () => b });
var i = t(477900),
    n = t(582128),
    s = t(503698),
    l = t.n(s),
    c = t(259678),
    r = t(657718),
    o = t(65406),
    d = t(70074),
    u = t(671678);
let p = { default: d.mQ, critical: d.kD, "icon-only": d.e7 };
function b(a) {
    let {
            type: e = "button",
            size: t = "md",
            variant: s = "default",
            icon: d,
            selectedIcon: b,
            iconOpticalOffsetMargin: h = 0,
            focusProps: f,
            pressed: m = !1,
            "aria-label": k,
            buttonRef: x,
            disabled: j,
            className: N,
            style: g,
            ...v
        } = a,
        y = n.useRef(null),
        C = x ?? y,
        w = (0, i.jsx)(r.a, {
            icon: m && null != b ? b : d,
            iconOpticalOffsetMargin: h,
            iconPosition: "start",
            size: t,
            ref: C,
            disabled: j,
        });
    return (0, i.jsx)(c.vN, {
        ...f,
        children: (0, i.jsx)("button", {
            "data-mana-component": "toggle-icon-button",
            type: e,
            "aria-pressed": m,
            className: l()(o.button, u.x, p[s], o[t]),
            "aria-label": k,
            disabled: j,
            ref: C,
            ...v,
            children: (0, i.jsx)("div", { className: o.buttonChildrenWrapper, children: w }),
        }),
    });
}
