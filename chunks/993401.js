n.d(t, { FD: () => p, br: () => m, q3: () => f, rE: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(990078),
    o = n(939249),
    s = n(821609),
    c = n(408278),
    d = n(289873),
    u = n(183555),
    _ = n(318590);
function h(e) {
    let { action: t, onClick: n } = e,
        { trackUserProfileAction: i } = (0, u.NJ)();
    return (e) => {
        null != t && i({ action: t }), n?.(e);
    };
}
function p(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: a = "sm", ...l } = e,
        o = h({ action: t, onClick: n });
    return (0, i.jsx)(s.$, { onClick: o, variant: r, size: a, ...l });
}
function f(e) {
    let {
            action: t,
            onClick: n,
            variant: r = "secondary",
            size: a = "sm",
            "aria-label": o,
            tooltipText: s,
            __unsupportedReactNodeAsText: d,
            tooltipPosition: u,
            tooltipAlign: _,
            buttonRef: p,
            ...f
        } = e,
        m = h({ action: t, onClick: n }),
        A = o ?? s;
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        targetElementRef: p,
        text: s,
        __unsupportedReactNodeAsText: d,
        position: u,
        align: _,
        ariaHidden: A === s,
        children: (0, i.jsx)(c.K, { onClick: m, variant: r, size: a, "aria-label": A, ...f }),
    });
}
function m(e) {
    let {
            icon: t,
            tooltipText: n,
            __unsupportedReactNodeAsText: r,
            tooltipPosition: s,
            tooltipAlign: c,
            "aria-label": u,
            action: p,
            onClick: f,
            buttonRef: m,
            disabled: A = !1,
            onMouseEnter: g,
            onMouseLeave: b,
            loading: y = !1,
            ...E
        } = e,
        v = h({ action: p, onClick: f }),
        S = u ?? n;
    return (0, i.jsx)(l.m, {
        asContainer: !0,
        text: n,
        __unsupportedReactNodeAsText: r,
        position: s,
        align: c,
        ariaHidden: S === n,
        children: (0, i.jsx)(o.D, {
            innerRef: m,
            className: a()(_.Xc, { [_.r9]: A }),
            onClick: v,
            "aria-label": S,
            "aria-disabled": A,
            "aria-busy": y,
            onMouseEnter: g,
            onMouseLeave: b,
            ...E,
            children: y
                ? (0, i.jsx)(d.y, { className: _.u1, itemClassName: _.KL, type: d.t.SPINNING_CIRCLE })
                : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
        }),
    });
}
