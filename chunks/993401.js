"use strict";
n.d(t, { FD: () => _, br: () => p, q3: () => f, rE: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(990078),
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
    let { action: t, onClick: n, variant: i = "secondary", size: s = "sm", ...a } = e,
        o = d({ action: t, onClick: n });
    return (0, r.jsx)(l.Button, { onClick: o, variant: i, size: s, ...a });
}
function f(e) {
    let {
            action: t,
            onClick: n,
            variant: i = "secondary",
            size: s = "sm",
            "aria-label": o,
            tooltipText: u,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: _,
            tooltipAlign: f,
            buttonRef: p,
            ...h
        } = e,
        m = d({ action: t, onClick: n });
    return (0, r.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: p,
        text: u,
        __unsupportedReactNodeAsText: c,
        position: _,
        align: f,
        children: (0, r.jsx)(l.K0, { onClick: m, variant: i, size: s, "aria-label": o ?? u, ...h }),
    });
}
function p(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: i,
            tooltipPosition: u,
            tooltipAlign: _,
            "aria-label": f,
            action: p,
            onClick: h,
            buttonRef: m,
            disabled: E = !1,
            onMouseEnter: g,
            onMouseLeave: A,
            loading: I = !1,
            ...T
        } = e,
        S = d({ action: p, onClick: h });
    return (0, r.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: i,
        position: u,
        align: _,
        children: (0, r.jsx)(o.DUT, {
            innerRef: m,
            className: s()(c.Xc, { [c.r9]: E }),
            onClick: S,
            "aria-label": f ?? n,
            "aria-disabled": E,
            onMouseEnter: g,
            onMouseLeave: A,
            ...T,
            children: I
                ? (0, r.jsx)(l.y$y, { className: c.u1, itemClassName: c.KL, type: l.tVU.SPINNING_CIRCLE })
                : (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
