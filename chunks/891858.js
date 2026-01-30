n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    p = n(531260),
    m = n(954571),
    g = n(637073),
    A = n(278977),
    f = n(967196),
    b = n(907838),
    h = n(975662),
    E = n(322631),
    O = n(17307),
    C = n(652215),
    x = n(985018),
    S = n(520089),
    T = n(288894);
let I = (e) => {
    let t,
        n,
        { isAllPerksVisible: l, setIsAllPerksVisible: I, previousComponent: y, enablePremiumBrandRefresh: N } = e,
        j = i.useRef(null),
        v = i.useRef(null),
        P = Object.entries((0, h.A)()).reduce((e, t) => {
            let [n, r] = t;
            return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e;
        }, {}),
        { analyticsLocations: R } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [D, L] = i.useState(!1),
        w = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        M = (0, O.LQ)(),
        { fractionalState: G } = (0, p.A)(),
        U = (0, g.d)();
    M
        ? ((t = x.intl.string(x.t["+vt7w9"])), (n = x.intl.string(x.t.LgHbnL)))
        : ((t = x.intl.string(x.t.LgHbnL)), (n = x.intl.string(x.t["+vt7w9"])));
    let k = () => {
        I(!1),
            m.default.track(C.HAw.NITRO_HOME_NAVIGATION, {
                current_component: E.A2.SEE_ALL,
                next_component: y,
                interaction_component: "Back Button",
            });
    };
    return (0, r.jsx)(c.GtU, {
        className: s()(S.NX, {
            [S.ho]: l,
            [S.LM]: w,
        }),
        ref: j,
        children: (0, r.jsx)(c.hLv, {
            color: "nitro-pink",
            className: s()(S.kL, S.Gd, {
                [S.fv]: !N,
            }),
            children: (0, r.jsxs)(_.f5, {
                value: R,
                children: [
                    N
                        ? (0, r.jsx)(f.A, {
                              onBackClick: k,
                          })
                        : (0, r.jsx)(A.A, {
                              className: S.v1,
                              onBackClick: k,
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
                            (0, r.jsx)(b.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: E.cJ.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: U,
                                }),
                                cardType: E.cJ.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: S.R_,
                                children: n,
                            }),
                            (0, r.jsx)(b.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: E.cJ.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: U,
                                }),
                                cardType: E.cJ.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: S.R_,
                                children: x.intl.string(x.t.LTaxu9),
                            }),
                            (0, r.jsx)(b.A, {
                                className: S.Nm,
                                cards: (0, O.vx)({
                                    perksCards: P,
                                    variant: E.cJ.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: M,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: G,
                                    isInReverseTrial: U,
                                }),
                                cardType: E.cJ.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: S.hz,
                    }),
                    (0, r.jsx)(o.L, {
                        innerRef: v,
                        onChange: (e) => {
                            e &&
                                !D &&
                                (m.default.track(C.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: R,
                                }),
                                L(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: v,
                            className: S._Z,
                        }),
                    }),
                    (0, r.jsx)("img", {
                        src: T,
                        className: S.Kw,
                        width: 112,
                        height: 85,
                        alt: x.intl.string(x.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
