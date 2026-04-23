n.d(t, { FD: () => g, br: () => _, q3: () => m, rE: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(990078),
    o = n(939249),
    u = n(821609),
    s = n(408278),
    c = n(289873),
    d = n(183555),
    A = n(391998);
function f(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: r } = (0, d.NJ)();
    return (e) => {
        null != t && r({ action: t }), n?.(e);
    };
}
function g(e) {
    let { action: t, onClick: n, variant: i = "secondary", size: l = "sm", ...a } = e,
        o = f({ action: t, onClick: n });
    return (0, r.jsx)(u.$, { onClick: o, variant: i, size: l, ...a });
}
function m(e) {
    let {
            action: t,
            onClick: n,
            variant: i = "secondary",
            size: l = "sm",
            "aria-label": o,
            tooltipText: u,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: d,
            tooltipAlign: A,
            buttonRef: g,
            ...m
        } = e,
        _ = f({ action: t, onClick: n });
    return (0, r.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: g,
        text: u,
        __unsupportedReactNodeAsText: c,
        position: d,
        align: A,
        children: (0, r.jsx)(s.K, { onClick: _, variant: i, size: l, "aria-label": o ?? u, ...m }),
    });
}
function _(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: i,
            tooltipPosition: u,
            tooltipAlign: s,
            "aria-label": d,
            action: g,
            onClick: m,
            buttonRef: _,
            disabled: I = !1,
            onMouseEnter: p,
            onMouseLeave: E,
            loading: C = !1,
            ...S
        } = e,
        h = f({ action: g, onClick: m });
    return (0, r.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: i,
        position: u,
        align: s,
        children: (0, r.jsx)(o.D, {
            innerRef: _,
            className: l()(A.Xc, { [A.r9]: I }),
            onClick: h,
            "aria-label": d ?? n,
            "aria-disabled": I,
            onMouseEnter: p,
            onMouseLeave: E,
            ...S,
            children: C
                ? (0, r.jsx)(c.y, { className: A.u1, itemClassName: A.KL, type: c.t.SPINNING_CIRCLE })
                : (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
