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
    _ = n(635921),
    p = n(869783),
    h = n(388032),
    m = n(264502),
    g = n(839526),
    E = n(4046),
    b = n(423741);
let y = (e, t) => {
        let { className: n, isFooterVisible: a, isDarkMode: y, isReducedMotion: O, subscriptionTier: v } = e,
            { analyticsLocations: I } = (0, c.ZP)(l.Z.PREMIUM_MARKETING_FOOTER_CTA),
            T = (0, f.Nx)(),
            S = (0, d.rO)(),
            A = i.useRef(null),
            [C, N] = i.useState(!1);
        return (
            i.useEffect(() => {
                !a || O || C || null == A.current || A.current.play();
            }, [a, O, C]),
            (0, r.jsx)(c.Gt, {
                value: I,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: o()(m.container, n),
                    children: [
                        (0, r.jsx)(s.Heading, {
                            className: m.footerHeader,
                            variant: "display-md",
                            color: "header-primary",
                            children: h.intl.string(h.t.lEw32m),
                        }),
                        (0, r.jsx)(_.PK, {
                            subscriptionTier: v,
                            inOfferExperience: T,
                            containerClassName: m.footerCTAContainer,
                            isApplicationHome: !0,
                            isDarkMode: y,
                        }),
                        (0, r.jsx)("div", {
                            className: m.footerArtContainer,
                            children: (0, r.jsx)(u.Z, {
                                playsInline: !0,
                                muted: !0,
                                preload: "auto",
                                poster: E.Z,
                                className: m.footerArt,
                                onEnded: () => {
                                    N(!0);
                                },
                                ref: A,
                                children: (0, r.jsx)("source", {
                                    src: S ? g.Z : b.Z,
                                    type: S ? p.m.MP4 : p.m.WEBM,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", { className: m.leftGradient }),
                        (0, r.jsx)("div", { className: m.rightGradient }),
                    ],
                }),
            })
        );
    },
    O = i.forwardRef(y);
