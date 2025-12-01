n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(70097),
    d = n(526167),
    f = n(140465),
    p = n(635921),
    _ = n(869783),
    m = n(388032),
    h = n(264502),
    g = n(839526),
    E = n(4046),
    b = n(423741);
let y = (e, t) => {
        let { className: n, isFooterVisible: a, isDarkMode: y, isReducedMotion: O, subscriptionTier: v } = e,
            { analyticsLocations: S } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_FOOTER_CTA),
            I = (0, f.Nx)(),
            T = (0, d.rO)(),
            A = i.useRef(null),
            [C, N] = i.useState(!1);
        return (
            i.useEffect(() => {
                !a || O || C || null == A.current || A.current.play();
            }, [a, O, C]),
            (0, r.jsx)(c.Gt, {
                value: S,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: o()(h.container, n),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            className: h.footerHeader,
                            variant: "display-md",
                            color: "header-primary",
                            children: m.intl.string(m.t.lEw32m),
                        }),
                        (0, r.jsx)(p.PK, {
                            subscriptionTier: v,
                            inOfferExperience: I,
                            containerClassName: h.footerCTAContainer,
                            isApplicationHome: !0,
                            isDarkMode: y,
                        }),
                        (0, r.jsx)("div", {
                            className: h.footerArtContainer,
                            children: (0, r.jsx)(u.Z, {
                                playsInline: !0,
                                muted: !0,
                                preload: "auto",
                                poster: E.Z,
                                className: h.footerArt,
                                onEnded: () => {
                                    N(!0);
                                },
                                ref: A,
                                children: (0, r.jsx)("source", {
                                    src: T ? g.Z : b.Z,
                                    type: T ? _.m.MP4 : _.m.WEBM,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", { className: h.leftGradient }),
                        (0, r.jsx)("div", { className: h.rightGradient }),
                    ],
                }),
            })
        );
    },
    O = i.forwardRef(y);
