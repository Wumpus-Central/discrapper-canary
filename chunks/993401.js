"use strict";
n.d(t, { FD: () => h, br: () => E, q3: () => p, rE: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(939249),
    l = n(821609),
    u = n(408278),
    c = n(289873),
    d = n(183555),
    _ = n(318590);
function f(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, d.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function h(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: s = "sm", ...a } = e,
        o = f({ action: t, onClick: n });
    return (0, i.jsx)(l.$, { onClick: o, variant: r, size: s, ...a });
}
function p(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: s = "sm",
            "aria-label": o,
            tooltipText: l,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: d,
            tooltipAlign: _,
            buttonRef: h,
            ...p
        } = e,
        E = f({ action: t, onClick: n }),
        m = o ?? l;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: h,
        text: l,
        __unsupportedReactNodeAsText: c,
        position: d,
        align: _,
        ariaHidden: m === l,
        children: (0, i.jsx)(u.K, { onClick: E, variant: r, size: s, "aria-label": m, ...p }),
    });
}
function E(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: l,
            tooltipAlign: u,
            "aria-label": d,
            action: h,
            onClick: p,
            buttonRef: E,
            disabled: m = !1,
            onMouseEnter: g,
            onMouseLeave: A,
            loading: I = !1,
            ...T
        } = e,
        S = f({ action: h, onClick: p }),
        N = d ?? n;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: l,
        align: u,
        ariaHidden: N === n,
        children: (0, i.jsx)(o.D, {
            innerRef: E,
            className: s()(_.Xc, { [_.r9]: m }),
            onClick: S,
            "aria-label": N,
            "aria-disabled": m,
            "aria-busy": I,
            onMouseEnter: g,
            onMouseLeave: A,
            ...T,
            children: I
                ? (0, i.jsx)(c.y, { className: _.u1, itemClassName: _.KL, type: c.t.SPINNING_CIRCLE })
                : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
