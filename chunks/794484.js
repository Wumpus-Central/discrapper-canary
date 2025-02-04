n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    m = n(687362),
    h = n(675619),
    g = n(119850),
    _ = n(32173),
    x = n(391110),
    p = n(75077),
    E = n(320319),
    C = n(761518);
let f = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: s, headerClassname: r } = e,
            l = (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != r ? r : C.heading,
                children: s
            });
        return null == t
            ? l
            : n
              ? (0, i.jsxs)('div', {
                    className: C.sectionHeader,
                    children: [
                        l,
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
                        children: l
                    })
                });
    },
    T = (e) => {
        var t, n;
        let { className: r, variant: T = x.R0.PERKS_DISCOVERABILITY, noBackground: N = !1, leftAlignHeaders: I = !1, showAllPerksButton: S, headerClassname: b, isFullScreen: v = !0, shouldAutoScroll: j = !1 } = e,
            A = s.useRef(null),
            O = (0, u.yQ)(),
            R = (0, m.vi)(O),
            P = (0, d.ZP)('perks-discoverability'),
            D = T === x.R0.WHATS_NEW,
            y = (0, u.IY)(),
            Z = (0, g.x)();
        s.useEffect(() => {
            D && !R && (y(), Z());
        }, [y, Z, D, R]);
        let k = () => {
                D && R && y();
            },
            L = R && D;
        (0, h.r)({
            ref: A,
            shouldScroll: L || j,
            onScrollEnd: k,
            onCleanup: k
        });
        let B = (0, p.Op)(D),
            M = (0, _.Z)(),
            w = (0, p.mN)(),
            { fractionalState: V } = (0, c.Z)(),
            U = (0, p.sP)({
                perksCards: M,
                variant: T,
                shopMarketingVariation: P,
                isFullScreen: v,
                showTenureCard: null == O ? void 0 : O.showCard,
                isPremiumSubscriber: w,
                fractionalState: V
            }),
            G = U.some((e) => null != e.pillText),
            [F, H] = s.useState(null),
            z = s.useRef(new a.qA());
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((null == M ? void 0 : null === (t = M.freeBoost) || void 0 === t ? void 0 : t.name) === _.u.FREE_BOOST || (null == M ? void 0 : null === (n = M.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === _.u.TENURE_REWARD_COLLECTIBLE) &&
                    (0, i.jsx)(a.O_, {
                        ref: H,
                        className: C.confettiCanvas,
                        environment: z.current
                    }),
                (0, i.jsxs)('div', {
                    ref: A,
                    className: l()(
                        C.section,
                        {
                            [C.centerAlignSection]: !I,
                            [C.leftAlignSection]: I
                        },
                        r
                    ),
                    children: [
                        (0, i.jsx)(f, {
                            showAllPerksButton: S,
                            leftAlignHeaders: I,
                            title: B.title,
                            headerClassname: b
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: l()(C.subtitle, {
                                [C.subtitle]: null == S || I,
                                [C.subtitleWithButton]: null != S && !I,
                                [C.fullWidth]: D || I,
                                [C.moreSubtitleMargin]: G,
                                [C.leftAlignSubtitle]: I,
                                [C.centerAlignSubtitle]: !I
                            }),
                            children: B.subtitle
                        }),
                        !I &&
                            null != S &&
                            (0, i.jsx)('div', {
                                className: l()(C.showAllPerksButtonCenter),
                                children: S
                            }),
                        (0, i.jsx)('div', {
                            className: l()({
                                [C.cardContainer]: v,
                                [C.cardContainerNarrowWidth]: !v
                            }),
                            children: U.map((e, t) =>
                                (0, i.jsx)(
                                    E.Z,
                                    {
                                        confettiCanvas: e.name === _.u.FREE_BOOST || e.name === _.u.TENURE_REWARD_COLLECTIBLE ? F : void 0,
                                        ...e,
                                        forceShadow: N
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
