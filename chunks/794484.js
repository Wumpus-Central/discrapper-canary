n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(695349),
    m = n(314684),
    g = n(687362),
    _ = n(675619),
    p = n(119850),
    f = n(32173),
    h = n(391110),
    x = n(75077),
    E = n(320319),
    C = n(544232);
let b = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
            s = (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != a ? a : C.heading,
                children: r
            });
        return null == t
            ? s
            : n
              ? (0, i.jsxs)('div', {
                    className: C.sectionHeader,
                    children: [
                        s,
                        null != t &&
                            (0, i.jsx)('div', {
                                className: C.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, i.jsx)('div', {
                    className: C.container,
                    children: (0, i.jsx)('div', {
                        className: C.sectionHeaderSeeAll,
                        children: s
                    })
                });
    },
    v = (e) => {
        var t, n;
        let { className: a, variant: v = h.R0.PERKS_DISCOVERABILITY, noBackground: T = !1, leftAlignHeaders: N = !1, showAllPerksButton: I, headerClassname: R, isFullScreen: j = !0, shouldAutoScroll: S = !1 } = e,
            A = r.useRef(null),
            P = (0, m.yQ)(),
            Z = (0, g.vi)(P),
            w = (0, d.ZP)('perks-discoverability'),
            M = v === h.R0.WHATS_NEW,
            B = (0, m.IY)(),
            y = (0, p.x)();
        r.useEffect(() => {
            M && !Z && (B(), y());
        }, [B, y, M, Z]);
        let k = () => {
                M && Z && B();
            },
            O = Z && M;
        (0, _.r)({
            ref: A,
            shouldScroll: O || S,
            onScrollEnd: k,
            onCleanup: k
        });
        let L = (0, x.Op)(M),
            D = (0, f.Z)(),
            U = (0, x.mN)(),
            { fractionalState: G } = (0, c.Z)(),
            V = (0, u.W)(),
            H = (0, x.sP)({
                perksCards: D,
                variant: v,
                shopMarketingVariation: w,
                isFullScreen: j,
                showTenureCard: null == P ? void 0 : P.showCard,
                isPremiumSubscriber: U,
                fractionalState: G,
                isInReverseTrial: V
            }),
            F = H.some((e) => null != e.pillText),
            [W, z] = r.useState(null),
            Y = r.useRef(new l.qA());
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((null == D ? void 0 : null === (t = D.freeBoost) || void 0 === t ? void 0 : t.name) === f.u.FREE_BOOST || (null == D ? void 0 : null === (n = D.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === f.u.TENURE_REWARD_COLLECTIBLE) &&
                    (0, i.jsx)(l.O_, {
                        ref: z,
                        className: C.confettiCanvas,
                        environment: Y.current
                    }),
                (0, i.jsxs)('div', {
                    ref: A,
                    className: s()(
                        C.section,
                        {
                            [C.centerAlignSection]: !N,
                            [C.leftAlignSection]: N
                        },
                        a
                    ),
                    children: [
                        (0, i.jsx)(b, {
                            showAllPerksButton: I,
                            leftAlignHeaders: N,
                            title: L.title,
                            headerClassname: R
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: s()(C.subtitle, {
                                [C.subtitle]: null == I || N,
                                [C.subtitleWithButton]: null != I && !N,
                                [C.fullWidth]: M || N,
                                [C.moreSubtitleMargin]: F,
                                [C.leftAlignSubtitle]: N,
                                [C.centerAlignSubtitle]: !N
                            }),
                            children: L.subtitle
                        }),
                        !N &&
                            null != I &&
                            (0, i.jsx)('div', {
                                className: s()(C.showAllPerksButtonCenter),
                                children: I
                            }),
                        (0, i.jsx)('div', {
                            className: s()({
                                [C.cardContainer]: j,
                                [C.cardContainerNarrowWidth]: !j
                            }),
                            children: H.map((e, t) =>
                                (0, i.jsx)(
                                    E.Z,
                                    {
                                        confettiCanvas: e.name === f.u.FREE_BOOST || e.name === f.u.TENURE_REWARD_COLLECTIBLE ? W : void 0,
                                        ...e,
                                        forceShadow: T
                                    },
                                    ''.concat(e.name, '_').concat(t)
                                )
                            )
                        })
                    ]
                })
            ]
        });
    };
