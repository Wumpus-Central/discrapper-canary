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
    p = n(768581),
    _ = n(474936),
    m = n(388032),
    h = n(520816);
let g = {
    XXSMALL: h.xxsmall,
    XSMALL: h.xsmall,
    SMALL: h.small,
    MEDIUM: h.medium,
    MEDIUM_LARGE: h.mediumLarge,
    LARGE: h.large,
    XLARGE: h.xlarge,
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
        case _.Si.GUILD:
            return n(632342);
        case _.Si.TIER_0:
            return n(467596);
        case _.Si.TIER_1:
            return n(670957);
        case _.Si.TIER_2:
        case _.Si.LEGACY:
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
            guild: _,
            skuId: O,
            pid: v,
            className: S,
            guildClassName: I,
            size: T = g.MEDIUM,
            allowUnknownGameIcon: C = !0,
        } = e,
        [A, N] = i.useState(null),
        [P, R] = i.useState(!1),
        D = i.useCallback((e) => {
            R(e);
        }, []),
        w = i.useRef(null);
    i.useEffect(() => {
        null != w.current && P && (cancelIdleCallback(w.current), (w.current = null));
    }, [P]);
    let x = (0, s.O)(D);
    if (
        (null != O && (n = b(O)),
        null != a &&
            null == n &&
            (a instanceof f.ZP
                ? (n = a.getIconURL(E(T)))
                : null != a.icon &&
                  (n = p.ZP.getApplicationIconURL({
                      id: a.id,
                      icon: a.icon,
                  }))),
        (n = (0, c.Z)(v, n)),
        i.useEffect(() => {
            if (null == n || "" === n) return;
            if ((0, p.pU)(n) || (0, d.Vv)(n)) {
                console.log("JANK loaded src ".concat(n, " as data URI or isImageLoaded")), N(n);
                return;
            }
            let e = () =>
                (0, d.po)(n, (e, t) => {
                    N(n);
                });
            if (P) return e();
            let t = requestIdleCallback(() => {
                (w.current = null), e();
            });
            return (
                (w.current = t),
                () => {
                    null != w.current && (cancelIdleCallback(w.current), (w.current = null));
                }
            );
        }, [n, P]),
        void 0 === n && null != _)
    ) {
        let e = y(T);
        return (0, r.jsx)(u.Z, {
            className: o()(h.gameIcon, I, S),
            guild: _,
            size: e,
        });
    }
    if (null == n || "" === n)
        return C
            ? (0, r.jsx)(l.IMN, {
                  size: "md",
                  color: "currentColor",
                  className: o()(h.gameIcon, T, S),
              })
            : null;
    let L = null == a ? void 0 : a.name,
        j =
            null != L && "" !== L
                ? m.intl.formatToPlainString(m.t.tiKyYg, { applicationName: L })
                : m.intl.string(m.t["2B/phM"]),
        M = (0, p.pU)(n),
        k = (0, d.Vv)(n),
        U = A === n || M || k;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            U ? null : (0, r.jsx)("div", { className: o()(h.gameIconLoading, T, S) }),
            (0, r.jsx)("img", {
                ref: t,
                alt: j,
                src: n,
                className: o()(h.gameIcon, T, S),
                style: U ? void 0 : { display: "none" },
            }),
            (0, r.jsx)("div", {
                className: h.intersectionContainer,
                children: (0, r.jsx)("div", {
                    ref: x,
                    className: h.intersectionRef,
                }),
            }),
        ],
    });
});
