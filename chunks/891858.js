n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(230109),
    c = n(397927),
    d = n(775602),
    u = n(793574),
    _ = n(688810),
    m = n(531260),
    A = n(954571),
    g = n(637073),
    E = n(278977),
    h = n(967196),
    p = n(907838),
    C = n(975662),
    x = n(322631),
    T = n(17307),
    I = n(652215),
    S = n(985018),
    f = n(520089),
    N = n(288894);
let b = (e) => {
    let t,
        n,
        { isAllPerksVisible: r, setIsAllPerksVisible: b, previousComponent: R, enablePremiumBrandRefresh: v } = e,
        O = s.useRef(null),
        j = s.useRef(null),
        P = Object.entries((0, C.A)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e;
        }, {}),
        { analyticsLocations: y } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [L, D] = s.useState(!1),
        M = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        G = (0, T.LQ)(),
        { fractionalState: U } = (0, m.A)(),
        k = (0, g.d)();
    G
        ? ((t = S.intl.string(S.t["+vt7w9"])), (n = S.intl.string(S.t.LgHbnL)))
        : ((t = S.intl.string(S.t.LgHbnL)), (n = S.intl.string(S.t["+vt7w9"])));
    let B = () => {
        b(!1),
            A.default.track(I.HAw.NITRO_HOME_NAVIGATION, {
                current_component: x.A2.SEE_ALL,
                next_component: R,
                interaction_component: "Back Button",
            });
    };
    return (0, i.jsx)(c.GtU, {
        className: a()(f.NX, { [f.ho]: r, [f.LM]: M }),
        ref: O,
        children: (0, i.jsx)(c.hLv, {
            color: "nitro-pink",
            className: a()(f.kL, f.Gd, { [f.fv]: !v }),
            children: (0, i.jsxs)(_.f5, {
                value: y,
                children: [
                    v ? (0, i.jsx)(h.A, { onBackClick: B }) : (0, i.jsx)(E.A, { className: f.v1, onBackClick: B }),
                    (0, i.jsxs)("div", {
                        className: a()(f.fi, { [f._9]: v }),
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: t,
                            }),
                            (0, i.jsx)(p.A, {
                                className: f.Nm,
                                cards: (0, T.vx)({
                                    perksCards: P,
                                    variant: x.cJ.CARD_CAROUSEL_FIRST_ROW,
                                    isPremiumSubscriber: G,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_FIRST_ROW,
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: n,
                            }),
                            (0, i.jsx)(p.A, {
                                className: f.Nm,
                                cards: (0, T.vx)({
                                    perksCards: P,
                                    variant: x.cJ.CARD_CAROUSEL_SECOND_ROW,
                                    isPremiumSubscriber: G,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_SECOND_ROW,
                            }),
                            (0, i.jsx)(c.Heading, {
                                variant: "heading-xxl/extrabold",
                                color: "text-strong",
                                className: f.R_,
                                children: S.intl.string(S.t.LTaxu9),
                            }),
                            (0, i.jsx)(p.A, {
                                className: f.Nm,
                                cards: (0, T.vx)({
                                    perksCards: P,
                                    variant: x.cJ.CARD_CAROUSEL_THIRD_ROW,
                                    isPremiumSubscriber: G,
                                    hideCardsOnNarrowScreen: !0,
                                    fractionalState: U,
                                    isInReverseTrial: k,
                                }),
                                cardType: x.cJ.CARD_CAROUSEL_THIRD_ROW,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: f.hz }),
                    (0, i.jsx)(o.L, {
                        innerRef: j,
                        onChange: (e) => {
                            e &&
                                !L &&
                                (A.default.track(I.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: y }),
                                D(!0));
                        },
                        children: (0, i.jsx)("div", { ref: j, className: f._Z }),
                    }),
                    (0, i.jsx)("img", {
                        src: N,
                        className: f.Kw,
                        width: 112,
                        height: 85,
                        alt: S.intl.string(S.t.X4IxWL),
                    }),
                ],
            }),
        }),
    });
};
