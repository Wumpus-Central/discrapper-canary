"use strict";
n.d(t, { FD: () => A, br: () => I, q3: () => h, rE: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(990078),
    l = n(939249),
    o = n(821609),
    d = n(408278),
    c = n(289873),
    u = n(183555),
    _ = n(391998);
function E(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, u.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function A(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: a = "sm", ...s } = e,
        l = E({ action: t, onClick: n });
    return (0, i.jsx)(o.$, { onClick: l, variant: r, size: a, ...s });
}
function h(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: a = "sm",
            "aria-label": l,
            tooltipText: o,
            __unsupportedReactNodeAsText: c,
            tooltipPosition: u,
            tooltipAlign: _,
            buttonRef: A,
            ...h
        } = e,
        I = E({ action: t, onClick: n }),
        f = l ?? o;
    return (0, i.jsx)(s.m, {
        asContainer: !0,
        targetElementRef: A,
        text: o,
        __unsupportedReactNodeAsText: c,
        position: u,
        align: _,
        ariaHidden: f === o,
        children: (0, i.jsx)(d.K, { onClick: I, variant: r, size: a, "aria-label": f, ...h }),
    });
}
function I(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: o,
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
    return (0, i.jsx)(s.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: o,
        align: d,
        ariaHidden: N === n,
        children: (0, i.jsx)(l.D, {
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
