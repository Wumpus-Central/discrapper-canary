n.d(t, {
    A: () => g,
    Z: () => O,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(907331),
    l = n(481060),
    c = n(829968),
    u = n(565138),
    d = n(134432),
    f = n(973616),
    _ = n(768581),
    p = n(474936),
    h = n(388032),
    m = n(520816);
let g = {
    XXSMALL: m.xxsmall,
    XSMALL: m.xsmall,
    SMALL: m.small,
    MEDIUM: m.medium,
    MEDIUM_LARGE: m.mediumLarge,
    LARGE: m.large,
    XLARGE: m.xlarge,
};
function E(e) {
    switch (e) {
        case g.XXSMALL:
            return 16;
        case g.XSMALL:
            return 24;
        case g.SMALL:
            return 30;
        case g.MEDIUM:
            return 40;
        case g.MEDIUM_LARGE:
            return 48;
        case g.LARGE:
            return 60;
        default:
            return 80;
    }
}
function b(e) {
    if (null == e) return null;
    switch (e) {
        case p.Si.GUILD:
            return n(632342);
        case p.Si.TIER_0:
            return n(467596);
        case p.Si.TIER_1:
            return n(670957);
        case p.Si.TIER_2:
        case p.Si.LEGACY:
            return n(480768);
        default:
            return null;
    }
}
function y(e) {
    switch (e) {
        case g.XSMALL:
            return u.Z.Sizes.SMALLER;
        case g.SMALL:
            return u.Z.Sizes.SMALL;
        case g.LARGE:
            return u.Z.Sizes.LARGE;
        default:
        case g.MEDIUM:
            return u.Z.Sizes.MEDIUM;
    }
}
let O = i.forwardRef(function (e, t) {
    let n,
        {
            game: a,
            guild: p,
            skuId: O,
            pid: v,
            className: I,
            guildClassName: T,
            size: S = g.MEDIUM,
            allowUnknownGameIcon: A = !0,
        } = e,
        [C, N] = i.useState(null),
        [R, P] = i.useState(!1),
        D = i.useCallback((e) => {
            P(e);
        }, []),
        w = i.useRef(null);
    i.useEffect(() => {
        null != w.current && R && (cancelIdleCallback(w.current), (w.current = null));
    }, [R]);
    let L = (0, s.O)(D);
    if (
        (null != O && (n = b(O)),
        null != a &&
            null == n &&
            (a instanceof f.ZP
                ? (n = a.getIconURL(E(S)))
                : null != a.icon &&
                  (n = _.ZP.getApplicationIconURL({
                      id: a.id,
                      icon: a.icon,
                  }))),
        (n = (0, c.Z)(v, n)),
        i.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, _.pU)(n) || (0, d.Vv)(n)) {
                console.log("JANK loaded src ".concat(n, " as data URI or isImageLoaded")), N(n);
                return;
            }
            let e = () =>
                (0, d.po)(n, (e, t) => {
                    N(n);
                });
            if (R) return e();
            let t = requestIdleCallback(() => {
                (w.current = null), e();
            });
            return (
                (w.current = t),
                () => {
                    null != w.current && (cancelIdleCallback(w.current), (w.current = null));
                }
            );
        }, [n, R]),
        void 0 === n && null != p)
    ) {
        let e = y(S);
        return (0, r.jsx)(u.Z, {
            className: o()(m.gameIcon, T, I),
            guild: p,
            size: e,
        });
    }
    if (null == n || "" === n)
        return A
            ? (0, r.jsx)(l.IMN, {
                  size: "md",
                  color: "currentColor",
                  className: o()(m.gameIcon, S, I),
              })
            : null;
    let x = null == a ? void 0 : a.name,
        M =
            null != x && "" !== x
                ? h.intl.formatToPlainString(h.t.tiKyYg, { applicationName: x })
                : h.intl.string(h.t["2B/phM"]),
        j = (0, _.pU)(n),
        k = (0, d.Vv)(n),
        U = C === n || j || k;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            U ? null : (0, r.jsx)("div", { className: o()(m.gameIconLoading, S, I) }),
            (0, r.jsx)("img", {
                ref: t,
                alt: M,
                src: n,
                className: o()(m.gameIcon, S, I),
                style: U ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", {
                className: m.intersectionContainer,
                children: (0, r.jsx)("div", {
                    ref: L,
                    className: m.intersectionRef,
                }),
            }),
        ],
    });
});
