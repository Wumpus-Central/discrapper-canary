"use strict";
n.d(t, { FD: () => p, br: () => f, q3: () => A, rE: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(990078),
    s = n(939249),
    o = n(821609),
    c = n(408278),
    u = n(289873),
    d = n(183555),
    h = n(318590);
function _(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, d.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function p(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: l = "sm", ...a } = e,
        s = _({ action: t, onClick: n });
    return (0, i.jsx)(o.$, { onClick: s, variant: r, size: l, ...a });
}
function A(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: l = "sm",
            "aria-label": s,
            tooltipText: o,
            __unsupportedReactNodeAsText: u,
            tooltipPosition: d,
            tooltipAlign: h,
            buttonRef: p,
            ...A
        } = e,
        f = _({ action: t, onClick: n });
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        targetElementRef: p,
        text: o,
        __unsupportedReactNodeAsText: u,
        position: d,
        align: h,
        children: (0, i.jsx)(c.K, { onClick: f, variant: r, size: l, "aria-label": s ?? o, ...A }),
    });
}
function f(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: o,
            tooltipAlign: c,
            "aria-label": d,
            action: p,
            onClick: A,
            buttonRef: f,
            disabled: m = !1,
            onMouseEnter: g,
            onMouseLeave: E,
            loading: I = !1,
            ...v
        } = e,
        b = _({ action: p, onClick: A });
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: o,
        align: c,
        children: (0, i.jsx)(s.D, {
            innerRef: f,
            className: l()(h.Xc, { [h.r9]: m }),
            onClick: b,
            "aria-label": d ?? n,
            "aria-disabled": m,
            onMouseEnter: g,
            onMouseLeave: E,
            ...v,
            children: I
                ? (0, i.jsx)(u.y, { className: h.u1, itemClassName: h.KL, type: u.t.SPINNING_CIRCLE })
                : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
