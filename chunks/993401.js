n.d(r, { FD: () => f, br: () => A, q3: () => v, rE: () => h });
var t = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(939249),
    s = n(821609),
    o = n(866665),
    u = n(408278),
    d = n(289873),
    c = n(183555),
    m = n(485371);
function h(e) {
    let { action: r, onClick: n } = e,
        { trackUserProfileAction: t } = (0, c.NJ)();
    return (e) => {
        null != r && t({ action: r }), n?.(e);
    };
}
function f(e) {
    let { action: r, onClick: n, variant: l = "secondary", size: i = "sm", ...a } = e,
        o = h({ action: r, onClick: n });
    return (0, t.jsx)(s.$, { onClick: o, variant: l, size: i, ...a });
}
function v(e) {
    let {
            action: r,
            onClick: n,
            variant: l = "secondary",
            size: i = "sm",
            "aria-label": a,
            tooltipText: s,
            __unsupportedReactNodeAsText: d,
            tooltipPosition: c,
            tooltipAlign: m,
            buttonRef: f,
            ...v
        } = e,
        A = h({ action: r, onClick: n }),
        C = a ?? s;
    return (0, t.jsx)(o.m, {
        asContainer: !0,
        targetElementRef: f,
        text: s,
        __unsupportedReactNodeAsText: d,
        position: c,
        align: m,
        ariaHidden: C === s,
        children: (0, t.jsx)(u.K, { onClick: A, variant: l, size: i, "aria-label": C, ...v }),
    });
}
function A(e) {
    let {
            icon: r,
            tooltipText: n,
            __unsupportedReactNodeAsText: l,
            tooltipPosition: s,
            tooltipAlign: u,
            "aria-label": c,
            action: f,
            onClick: v,
            buttonRef: A,
            disabled: C = !1,
            onMouseEnter: y,
            onMouseLeave: p,
            loading: x = !1,
            ...N
        } = e,
        R = h({ action: f, onClick: v }),
        b = c ?? n;
    return (0, t.jsx)(o.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: l,
        position: s,
        align: u,
        ariaHidden: b === n,
        children: (0, t.jsx)(a.D, {
            innerRef: A,
            className: i()(m.Xc, { [m.r9]: C }),
            onClick: R,
            "aria-label": b,
            "aria-disabled": C,
            "aria-busy": x,
            onMouseEnter: y,
            onMouseLeave: p,
            ...N,
            children: x
                ? (0, t.jsx)(d.y, { className: m.u1, itemClassName: m.KL, type: d.t.SPINNING_CIRCLE })
                : (0, t.jsx)(r, { size: "xs", color: "currentColor" }),
        }),
    });
}
