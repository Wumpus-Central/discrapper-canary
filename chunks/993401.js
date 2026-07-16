"use strict";
n.d(t, { FD: () => A, br: () => I, q3: () => h, rE: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(939249),
    l = n(821609),
    o = n(866665),
    d = n(408278),
    c = n(289873),
    u = n(183555),
    _ = n(318590);
function E(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, u.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function A(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: a = "sm", ...s } = e,
        o = E({ action: t, onClick: n });
    return (0, i.jsx)(l.$, { onClick: o, variant: r, size: a, ...s });
}
function h(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: a = "sm",
            "aria-label": s,
            tooltipText: l,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: u,
            tooltipAlign: _,
            buttonRef: A,
            ...h
        } = e,
        I = E({ action: t, onClick: n }),
        f = s ?? l;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        targetElementRef: A,
        text: l,
        __unsupportedReactNodeAsText: c,
        position: u,
        align: _,
        ariaHidden: f === l,
        children: (0, i.jsx)(d.K, { onClick: I, variant: r, size: a, "aria-label": f, ...h }),
    });
}
function I(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: l,
            tooltipAlign: d,
            "aria-label": u,
            action: A,
            onClick: h,
            buttonRef: I,
            disabled: f = !1,
            onMouseEnter: p,
            onMouseLeave: T,
            loading: m = !1,
            ...g
        } = e,
        S = E({ action: A, onClick: h }),
        N = u ?? n;
    return (0, i.jsx)(o.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: l,
        align: d,
        ariaHidden: N === n,
        children: (0, i.jsx)(s.D, {
            innerRef: I,
            className: a()(_.Xc, { [_.r9]: f }),
            onClick: S,
            "aria-label": N,
            "aria-disabled": f,
            "aria-busy": m,
            onMouseEnter: p,
            onMouseLeave: T,
            ...g,
            children: m
                ? (0, i.jsx)(c.y, { className: _.u1, itemClassName: _.KL, type: c.t.SPINNING_CIRCLE })
                : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
