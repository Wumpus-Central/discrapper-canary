"use strict";
n.d(t, { $m: () => w, Dc: () => U, EO: () => D, WM: () => b, jl: () => M, rI: () => v, rQ: () => L, s_: () => P });
var r,
    i,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(517738),
    d = n(110259),
    c = n(615300),
    _ = n(789645),
    f = n(844222),
    E = n(717421),
    h = n(187322),
    p = n(599319),
    m = n(475825),
    g = n(862482),
    A = n(305866),
    I = n(707554),
    T = n(989395),
    S = n(235986),
    y = n(231723),
    N = n(818348),
    O = n(985018),
    R = n(889277),
    v = (((r = {}).SMALL = "small"), (r.MEDIUM = "medium"), (r.LARGE = "large"), (r.DYNAMIC = "dynamic"), r);
let C = Object.freeze({ small: R.EX, medium: R.Y, large: R.as, dynamic: null });
var b = (((i = {}).DEFAULT = "default"), (i.SUBTLE = "subtle"), i);
function D(e) {
    let {
            transitionState: t,
            children: n,
            size: r = "small",
            role: i = "dialog",
            className: o,
            fullscreenOnMobile: _ = !0,
            hideShadow: p = !1,
            onAnimationEnd: m = N.tE,
            returnRef: g,
            animation: I = "default",
            parentComponent: S,
            ...O
        } = e,
        v = t === y.ip.ENTERING || t === y.ip.ENTERED;
    a.useContext(T.A)({
        type: d.ImpressionTypes.PAGE,
        name: d.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: b } = a.useContext(f.C),
        D = (0, E.z)(
            {
                opacity: +!!v,
                transform: v || b.enabled || "subtle" === I ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: c.A.Easing.out(c.A.Easing.quad), clamp: !0 },
                onRest: m,
            },
            "animate-always",
        ),
        L = a.useRef(null),
        w = null != O["aria-label"],
        M = null != O["aria-labelledby"],
        P = a.useId(),
        U = O["aria-labelledby"] ?? P,
        k = a.useMemo(() => ({ headerId: U, headerIdIsManaged: M }), [U, M]);
    return (0, s.jsx)(y.CP.Provider, {
        value: k,
        children: (0, s.jsx)(A.l, {
            className: R.Gg,
            role: i,
            returnRef: g,
            impressionType: d.ImpressionTypes.MODAL,
            "aria-labelledby": w ? void 0 : k.headerId,
            ...O,
            children: (0, s.jsx)(u.animated.div, {
                className: l()(o, R.zr, C[r], { [R.z]: _, [R.vl]: !p }),
                ref: L,
                style: D,
                children: (0, s.jsx)(h.xp, { containerRef: L, children: n }),
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
        className: l()(R.wx, e.className, { [R.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function w(e) {
    let { className: t, children: n, scrollerRef: r, scrollbarType: i, ...a } = e,
        o = (function (e) {
            switch (e ?? "thin") {
                case "auto":
                    return p.Gt;
                case "none":
                    return p.zC;
                default:
                    return p.Ch;
            }
        })(i);
    return (0, s.jsx)(o, {
        "data-migration-pending": !0,
        className: l()(R.Qs, t),
        ref: r,
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
        className: l()(R.qr, e.className, { [R.h0]: e.separator ?? !0 }),
        children: (0, s.jsx)(I.F, { children: e.children }),
    });
}
function P(e) {
    return (0, s.jsx)(g.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": O.intl.string(O.t.cpT0Cq),
        look: g.$n.Looks.BLANK,
        size: g.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: l()(e.innerClassName, { [R.Xk]: e.withCircleBackground }),
        className: l()(e.className, { [R.zB]: e.hideOnFullscreen, [R.VN]: !e.withCircleBackground }),
        children: (0, s.jsx)(_.P, { size: "md", color: "currentColor", className: l()(e.innerClassName, R.ut) }),
    });
}
function U(e) {
    let { className: t, scrollerRef: n, ...r } = e;
    return (0, s.jsx)(m.OZ, { className: t, ref: n, ...r });
}
