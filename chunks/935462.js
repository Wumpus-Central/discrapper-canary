"use strict";
n.d(t, { $m: () => P, Dc: () => x, EO: () => L, WM: () => b, jl: () => w, rI: () => R, rQ: () => D, s_: () => M });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(580929),
    d = n(562708),
    c = n(615300),
    _ = n(789645),
    h = n(844222),
    f = n(717421),
    E = n(187322),
    p = n(689175),
    m = n(475825),
    g = n(862482),
    A = n(305866),
    I = n(707554),
    T = n(989395),
    S = n(235986),
    N = n(231723),
    C = n(818348),
    y = n(375708),
    v = n(889277),
    R = (((i = {}).SMALL = "small"), (i.MEDIUM = "medium"), (i.LARGE = "large"), (i.DYNAMIC = "dynamic"), i);
let O = Object.freeze({ small: v.EX, medium: v.Y, large: v.as, dynamic: null });
var b = (((r = {}).DEFAULT = "default"), (r.SUBTLE = "subtle"), r);
function L(e) {
    let {
            transitionState: t,
            children: n,
            size: i = "small",
            role: r = "dialog",
            className: o,
            fullscreenOnMobile: _ = !0,
            hideShadow: p = !1,
            onAnimationEnd: m = C.tE,
            returnRef: g,
            animation: I = "default",
            parentComponent: S,
            ...y
        } = e,
        R = t === N.ip.ENTERING || t === N.ip.ENTERED;
    a.useContext(T.A)({
        type: d.ImpressionTypes.PAGE,
        name: d.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: b } = a.useContext(h.C),
        L = (0, f.z)(
            {
                opacity: +!!R,
                transform: R || b.enabled || "subtle" === I ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: c.A.Easing.out(c.A.Easing.quad), clamp: !0 },
                onRest: m,
            },
            "animate-always",
        ),
        D = a.useRef(null),
        P = null != y["aria-label"],
        w = null != y["aria-labelledby"],
        M = a.useId(),
        x = y["aria-labelledby"] ?? M,
        U = a.useMemo(() => ({ headerId: x, headerIdIsManaged: w }), [x, w]);
    return (0, s.jsx)(N.CP.Provider, {
        value: U,
        children: (0, s.jsx)(A.l, {
            className: v.Gg,
            role: r,
            returnRef: g,
            impressionType: d.ImpressionTypes.MODAL,
            "aria-labelledby": P ? void 0 : U.headerId,
            ...y,
            children: (0, s.jsx)(u.animated.div, {
                className: l()(o, v.zr, O[i], { [v.z]: _, [v.vl]: !p }),
                ref: D,
                style: L,
                children: (0, s.jsx)(E.xp, { containerRef: D, children: n }),
            }),
        }),
    });
}
function D(e) {
    let { headerId: t, headerIdIsManaged: n } = a.useContext(N.CP);
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
function P(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: r, ...a } = e,
        o = (function (e) {
            switch (e ?? "thin") {
                case "auto":
                    return p.Gt;
                case "none":
                    return p.zC;
                default:
                    return p.Ch;
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
function w(e) {
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
function M(e) {
    return (0, s.jsx)(g.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": y.intl.string(y.t.cpT0Cq),
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
