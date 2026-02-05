"use strict";
n.d(t, { FD: () => _, br: () => p, q3: () => f, rE: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(732955),
    l = n(397927),
    u = n(183555),
    c = n(973273);
function d(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: r } = (0, u.NJ)();
    return (e) => {
        null != t && r({ action: t }), n?.(e);
    };
}
function _(e) {
    let { action: t, onClick: n, variant: i = "secondary", size: a = "sm", ...s } = e,
        o = d({ action: t, onClick: n });
    return (0, r.jsx)(l.Button, { onClick: o, variant: i, size: a, ...s });
}
function f(e) {
    let {
            action: t,
            onClick: n,
            variant: i = "secondary",
            size: a = "sm",
            "aria-label": o,
            tooltipText: u,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: _,
            tooltipAlign: f,
            buttonRef: p,
            ...h
        } = e,
        m = d({ action: t, onClick: n });
    return (0, r.jsx)(s.m, {
        asContainer: !0,
        targetElementRef: p,
        text: u,
        __unsupportedReactNodeAsText: c,
        position: _,
        align: f,
        children: (0, r.jsx)(l.K0, { onClick: m, variant: i, size: a, "aria-label": o ?? u, ...h }),
    });
}
function p(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: i,
            tooltipPosition: l,
            tooltipAlign: u,
            "aria-label": _,
            action: f,
            onClick: p,
            buttonRef: h,
            disabled: m = !1,
            onMouseEnter: g,
            onMouseLeave: E,
            ...A
        } = e,
        I = d({ action: f, onClick: p });
    return (0, r.jsx)(s.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: i,
        position: l,
        align: u,
        children: (0, r.jsx)(o.DUT, {
            innerRef: h,
            className: a()(c.X, { [c.r]: m }),
            onClick: I,
            "aria-label": _ ?? n,
            "aria-disabled": m,
            onMouseEnter: g,
            onMouseLeave: E,
            ...A,
            children: (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
