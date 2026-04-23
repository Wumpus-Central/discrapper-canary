"use strict";
n.d(t, { FD: () => h, br: () => f, q3: () => m, rE: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(939249),
    l = n(821609),
    d = n(408278),
    _ = n(289873),
    u = n(183555),
    c = n(318590);
function E(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, u.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function h(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: s = "sm", ...a } = e,
        o = E({ action: t, onClick: n });
    return (0, i.jsx)(l.$, { onClick: o, variant: r, size: s, ...a });
}
function m(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: s = "sm",
            "aria-label": o,
            tooltipText: l,
            __unsupportedReactNodeAsText: _,
            tooltipPosition: u,
            tooltipAlign: c,
            buttonRef: h,
            ...m
        } = e,
        f = E({ action: t, onClick: n }),
        g = o ?? l;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: h,
        text: l,
        __unsupportedReactNodeAsText: _,
        position: u,
        align: c,
        ariaHidden: g === l,
        children: (0, i.jsx)(d.K, { onClick: f, variant: r, size: s, "aria-label": g, ...m }),
    });
}
function f(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: l,
            tooltipAlign: d,
            "aria-label": u,
            action: h,
            onClick: m,
            buttonRef: f,
            disabled: g = !1,
            onMouseEnter: p,
            onMouseLeave: A,
            loading: I = !1,
            ...T
        } = e,
        S = E({ action: h, onClick: m }),
        N = u ?? n;
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: l,
        align: d,
        ariaHidden: N === n,
        children: (0, i.jsx)(o.D, {
            innerRef: f,
            className: s()(c.Xc, { [c.r9]: g }),
            onClick: S,
            "aria-label": N,
            "aria-disabled": g,
            "aria-busy": I,
            onMouseEnter: p,
            onMouseLeave: A,
            ...T,
            children: I
                ? (0, i.jsx)(_.y, { className: c.u1, itemClassName: c.KL, type: _.t.SPINNING_CIRCLE })
                : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
