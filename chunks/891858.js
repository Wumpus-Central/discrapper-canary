n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(397927),
    u = n(775602),
    d = n(793574),
    f = n(688810),
    p = n(531260),
    _ = n(954571),
    h = n(637073),
    m = n(278977),
    g = n(967196),
    E = n(907838),
    b = n(975662),
    y = n(322631),
    O = n(17307),
    A = n(652215),
    v = n(985018),
    S = n(70338),
    I = n(288894);
let T = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: T, previousComponent: C, enablePremiumBrandRefresh: N } = e,
        R = i.useRef(null),
        w = i.useRef(null),
        P = Object.entries((0, b.A)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: D } = (0, f.Ay)(d.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [x, L] = i.useState(!1),
        j = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        M = (0, O.LQ)(),
        { fractionalState: k } = (0, p.A)(),
        U = (0, h.d)();
    M
        ? ((t = v.intl.string(v.t["+vt7w9"])), (n = v.intl.string(v.t.LgHbnL)))
        : ((t = v.intl.string(v.t.LgHbnL)), (n = v.intl.string(v.t["+vt7w9"])));
    let G = () => {
        T(!1),
            _.default.track(A.HAw.NITRO_HOME_NAVIGATION, {
                current_component: y.A2.SEE_ALL,
                next_component: C,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(c.GtU, {
        className: s()(S.NX, {
            [S.ho]: a,
            [S.LM]: j,
        }),
        ref: R,
        children: (0, r.jsx)(c.hLv, {
            color: "nitro-pink",
            className: s()(S.kL, S.Gd, {
                [S.fv]: !N,
            }),
            children: (0, r.jsxs)(f.f5, {
                value: D,
                children: [
                    N
                        ? (0, r.jsx)(g.A, {
                              onBackClick: G,
                          })
                        : (0, r.jsx)(m.A, {
                              className: S.v1,
                              onBackClick: G,
                          }),
                    (0, r.jsxs)("div", {
                        className: s()(S.fi, {
                            [S._9]: N,
                        }),
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: S.R_,
                                children: t,
                            }),
                            (0, r.jsx)(E.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: y.cJ.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.cJ.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: S.R_,
                                children: n,
                            }),
                            (0, r.jsx)(E.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: y.cJ.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.cJ.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: S.R_,
                                children: v.intl.string(v.t.LTaxu9),
                            }),
                            (0, r.jsx)(E.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: y.cJ.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: k,
                                    isInReverseTrial: U,
                                }),
                                cardType: y.cJ.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: S.hz,
                    }),
                    (0, r.jsx)(l.L, {
                        innerRef: w,
                        onChange: (e) => {
                            e &&
                                !x &&
                                (_.default.track(A.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: D,
                                }),
                                L(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: w,
                            className: S._Z,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: I,
                        className: S.Kw,
                        width: 112,
                        height: 85,
                        alt: v.intl.string(v.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
