"use strict";
n.d(t, { $m: () => w, Dc: () => x, EO: () => D, WM: () => b, jl: () => M, rI: () => R, rQ: () => L, s_: () => P });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(18005),
    c = n(562708),
    d = n(615300),
    _ = n(789645),
    h = n(844222),
    f = n(717421),
    p = n(187322),
    E = n(689175),
    m = n(475825),
    g = n(862482),
    A = n(305866),
    I = n(707554),
    T = n(989395),
    S = n(235986),
    y = n(231723),
    C = n(818348),
    N = n(375708),
    v = n(889277),
    R = (((i = {}).SMALL = "small"), (i.MEDIUM = "medium"), (i.LARGE = "large"), (i.DYNAMIC = "dynamic"), i);
let O = Object.freeze({ small: v.EX, medium: v.Y, large: v.as, dynamic: null });
var b = (((r = {}).DEFAULT = "default"), (r.SUBTLE = "subtle"), r);
function D(e) {
    let {
            transitionState: t,
            children: n,
            size: i = "small",
            role: r = "dialog",
            className: o,
            fullscreenOnMobile: _ = !0,
            hideShadow: E = !1,
            onAnimationEnd: m = C.tE,
            returnRef: g,
            animation: I = "default",
            parentComponent: S,
            ...N
        } = e,
        R = t === y.ip.ENTERING || t === y.ip.ENTERED;
    a.useContext(T.A)({
        type: c.ImpressionTypes.PAGE,
        name: c.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: b } = a.useContext(h.C),
        D = (0, f.z)(
            {
                opacity: +!!R,
                transform: R || b.enabled || "subtle" === I ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: d.A.Easing.out(d.A.Easing.quad), clamp: !0 },
                onRest: m,
            },
            "animate-always",
        ),
        L = a.useRef(null),
        w = null != N["aria-label"],
        M = null != N["aria-labelledby"],
        P = a.useId(),
        x = N["aria-labelledby"] ?? P,
        k = a.useMemo(() => ({ headerId: x, headerIdIsManaged: M }), [x, M]);
    return (0, s.jsx)(y.CP.Provider, {
        value: k,
        children: (0, s.jsx)(A.l, {
            className: v.Gg,
            role: r,
            returnRef: g,
            impressionType: c.ImpressionTypes.MODAL,
            "aria-labelledby": w ? void 0 : k.headerId,
            ...N,
            children: (0, s.jsx)(u.animated.div, {
                className: l()(o, v.zr, O[i], { [v.z]: _, [v.vl]: !E }),
                ref: L,
                style: D,
                children: (0, s.jsx)(p.xp, { containerRef: L, children: n }),
            }),
        }),
    });
}
function L(e) {
    let { headerId: t, headerIdIsManaged: n } = a.useContext(y.CP);
    return (0, s.jsx)(S.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? S.A.Direction.HORIZONTAL,
        justify: e.justify ?? S.A.Justify.START,
        align: e.align ?? S.A.Align.CENTER,
        wrap: e.wrap ?? S.A.Wrap.NO_WRAP,
        className: l()(v.wx, e.className, { [v.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function w(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: r, ...a } = e,
        o = (function (e) {
            switch (e ?? "thin") {
                case "auto":
                    return E.Gt;
                case "none":
                    return E.zC;
                default:
                    return E.Ch;
            }
        })(r);
    return (0, s.jsx)(o, {
        "data-migration-pending": !0,
        className: l()(v.Qs, t),
        ref: i,
        ...a,
        children: (0, s.jsx)(I.F, { children: n }),
    });
}
function M(e) {
    return (0, s.jsx)(S.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? S.A.Direction.HORIZONTAL_REVERSE,
        justify: e.justify ?? S.A.Justify.START,
        align: e.align ?? S.A.Align.STRETCH,
        wrap: e.wrap ?? S.A.Wrap.NO_WRAP,
        className: l()(v.qr, e.className, { [v.h0]: e.separator ?? !0 }),
        children: (0, s.jsx)(I.F, { children: e.children }),
    });
}
function P(e) {
    return (0, s.jsx)(g.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": N.intl.string(N.t.cpT0Cq),
        look: g.$n.Looks.BLANK,
        size: g.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: l()(e.innerClassName, { [v.Xk]: e.withCircleBackground }),
        className: l()(e.className, { [v.zB]: e.hideOnFullscreen, [v.VN]: !e.withCircleBackground }),
        children: (0, s.jsx)(_.P, { size: "md", color: "currentColor", className: l()(e.innerClassName, v.ut) }),
    });
}
function x(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, s.jsx)(m.OZ, { className: t, ref: n, ...i });
}
