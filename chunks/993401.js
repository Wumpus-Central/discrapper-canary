n.d(a, { FD: () => C, br: () => m, q3: () => b, rE: () => x });
var i = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    t = n(939249),
    o = n(821609),
    l = n(866665),
    c = n(408278),
    u = n(289873),
    d = n(183555),
    p = n(485371);
function x(e) {
    let { action: a, onClick: n } = e,
        { trackUserProfileAction: i } = (0, d.NJ)();
    return (e) => {
        (null != a && i({ action: a }), n?.(e));
    };
}
function C(e) {
    let { action: a, onClick: n, variant: r = "secondary", size: s = "sm", ...t } = e,
        l = x({ action: a, onClick: n });
    return (0, i.jsx)(o.$, { onClick: l, variant: r, size: s, ...t });
}
function b(e) {
    let {
            action: a,
            onClick: n,
            variant: r = "secondary",
            size: s = "sm",
            "aria-label": t,
            tooltipText: o,
            __unsupportedReactNodeAsText: u,
            tooltipPosition: d,
            tooltipAlign: p,
            buttonRef: C,
            ...b
        } = e,
        m = x({ action: a, onClick: n }),
        N = t ?? o;
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        targetElementRef: C,
        text: o,
        __unsupportedReactNodeAsText: u,
        position: d,
        align: p,
        ariaHidden: N === o,
        children: (0, i.jsx)(c.K, { onClick: m, variant: r, size: s, "aria-label": N, ...b }),
    });
}
function m(e) {
    let {
            icon: a,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: o,
            tooltipAlign: c,
            "aria-label": d,
            action: C,
            onClick: b,
            buttonRef: m,
            disabled: N = !1,
            onMouseEnter: h,
            onMouseLeave: j,
            loading: k = !1,
            ..._
        } = e,
        f = x({ action: C, onClick: b }),
        v = d ?? n;
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: o,
        align: c,
        ariaHidden: v === n,
        children: (0, i.jsx)(t.D, {
            innerRef: m,
            className: s()(p.Xc, { [p.r9]: N }),
            onClick: f,
            "aria-label": v,
            "aria-disabled": N,
            "aria-busy": k,
            onMouseEnter: h,
            onMouseLeave: j,
            ..._,
            children: k
                ? (0, i.jsx)(u.y, { className: p.u1, itemClassName: p.KL, type: u.t.SPINNING_CIRCLE })
                : (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
        }),
    });
}
