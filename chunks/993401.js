n.d(r, { FD: () => v, br: () => C, q3: () => f, rE: () => h });
var t = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(939249),
    o = n(821609),
    s = n(866665),
    u = n(408278),
    d = n(289873),
    c = n(183555),
    m = n(318590);
function h(e) {
    let { action: r, onClick: n } = e,
        { trackUserProfileAction: t } = (0, c.NJ)();
    return (e) => {
        null != r && t({ action: r }), n?.(e);
    };
}
function v(e) {
    let { action: r, onClick: n, variant: l = "secondary", size: i = "sm", ...a } = e,
        s = h({ action: r, onClick: n });
    return (0, t.jsx)(o.$, { onClick: s, variant: l, size: i, ...a });
}
function f(e) {
    let {
            action: r,
            onClick: n,
            variant: l = "secondary",
            size: i = "sm",
            "aria-label": a,
            tooltipText: o,
            __unsupportedReactNodeAsText: d,
            tooltipPosition: c,
            tooltipAlign: m,
            buttonRef: v,
            ...f
        } = e,
        C = h({ action: r, onClick: n }),
        y = a ?? o;
    return (0, t.jsx)(s.m, {
        asContainer: !0,
        targetElementRef: v,
        text: o,
        __unsupportedReactNodeAsText: d,
        position: c,
        align: m,
        ariaHidden: y === o,
        children: (0, t.jsx)(u.K, { onClick: C, variant: l, size: i, "aria-label": y, ...f }),
    });
}
function C(e) {
    let {
            icon: r,
            tooltipText: n,
            __unsupportedReactNodeAsText: l,
            tooltipPosition: o,
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
    return (0, t.jsx)(s.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: l,
        position: o,
        align: u,
        ariaHidden: b === n,
        children: (0, t.jsx)(a.D, {
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
