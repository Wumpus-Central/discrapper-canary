n.d(r, { FD: () => v, br: () => C, q3: () => f, rE: () => h });
var t = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(990078),
    o = n(939249),
    s = n(821609),
    u = n(408278),
    d = n(289873),
    c = n(183555),
    m = n(391998);
function h(e) {
    let { action: r, onClick: n } = e,
        { trackUserProfileAction: t } = (0, c.NJ)();
    return (e) => {
        null != r && t({ action: r }), n?.(e);
    };
}
function v(e) {
    let { action: r, onClick: n, variant: l = "secondary", size: i = "sm", ...a } = e,
        o = h({ action: r, onClick: n });
    return (0, t.jsx)(s.$, { onClick: o, variant: l, size: i, ...a });
}
function f(e) {
    let {
            action: r,
            onClick: n,
            variant: l = "secondary",
            size: i = "sm",
            "aria-label": o,
            tooltipText: s,
            __unsupportedReactNodeAsText: d,
            tooltipPosition: c,
            tooltipAlign: m,
            buttonRef: v,
            ...f
        } = e,
        C = h({ action: r, onClick: n }),
        y = o ?? s;
    return (0, t.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: v,
        text: s,
        __unsupportedReactNodeAsText: d,
        position: c,
        align: m,
        ariaHidden: y === s,
        children: (0, t.jsx)(u.K, { onClick: C, variant: l, size: i, "aria-label": y, ...f }),
    });
}
function C(e) {
    let {
            icon: r,
            tooltipText: n,
            __unsupportedReactNodeAsText: l,
            tooltipPosition: s,
            tooltipAlign: u,
            "aria-label": c,
            action: v,
            onClick: f,
            buttonRef: C,
            disabled: y = !1,
            onMouseEnter: A,
            onMouseLeave: p,
            loading: x = !1,
            ...N
        } = e,
        R = h({ action: v, onClick: f }),
        b = c ?? n;
    return (0, t.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: l,
        position: s,
        align: u,
        ariaHidden: b === n,
        children: (0, t.jsx)(o.D, {
            innerRef: C,
            className: i()(m.Xc, { [m.r9]: y }),
            onClick: R,
            "aria-label": b,
            "aria-disabled": y,
            "aria-busy": x,
            onMouseEnter: A,
            onMouseLeave: p,
            ...N,
            children: x
                ? (0, t.jsx)(d.y, { className: m.u1, itemClassName: m.KL, type: d.t.SPINNING_CIRCLE })
                : (0, t.jsx)(r, { size: "xs", color: "currentColor" }),
        }),
    });
}
