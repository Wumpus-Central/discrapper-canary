n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(695349),
    m = n(314684),
    h = n(687362),
    g = n(675619),
    x = n(119850),
    _ = n(32173),
    p = n(391110),
    E = n(75077),
    C = n(320319),
    f = n(544232);
let T = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: s, headerClassname: r } = e,
            l = (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != r ? r : f.heading,
                children: s
            });
        return null == t
            ? l
            : n
              ? (0, i.jsxs)('div', {
                    className: f.sectionHeader,
                    children: [
                        l,
                        null != t &&
                            (0, i.jsx)('div', {
                                className: f.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, i.jsx)('div', {
                    className: f.container,
                    children: (0, i.jsx)('div', {
                        className: f.sectionHeaderSeeAll,
                        children: l
                    })
                });
    },
    N = (e) => {
        var t, n;
        let { className: r, variant: N = p.R0.PERKS_DISCOVERABILITY, noBackground: S = !1, leftAlignHeaders: I = !1, showAllPerksButton: b, headerClassname: v, isFullScreen: j = !0, shouldAutoScroll: A = !1 } = e,
            O = s.useRef(null),
            R = (0, m.yQ)(),
            P = (0, h.vi)(R),
            D = (0, d.ZP)('perks-discoverability'),
            y = N === p.R0.WHATS_NEW,
            Z = (0, m.IY)(),
            k = (0, x.x)();
        s.useEffect(() => {
            y && !P && (Z(), k());
        }, [Z, k, y, P]);
        let L = () => {
                y && P && Z();
            },
            B = P && y;
        (0, g.r)({
            ref: O,
            shouldScroll: B || A,
            onScrollEnd: L,
            onCleanup: L
        });
        let M = (0, E.Op)(y),
            w = (0, _.Z)(),
            V = (0, E.mN)(),
            { fractionalState: U } = (0, c.Z)(),
            G = (0, u.W)(),
            F = (0, E.sP)({
                perksCards: w,
                variant: N,
                shopMarketingVariation: D,
                isFullScreen: j,
                showTenureCard: null == R ? void 0 : R.showCard,
                isPremiumSubscriber: V,
                fractionalState: U,
                isInReverseTrial: G
            }),
            H = F.some((e) => null != e.pillText),
            [z, Y] = s.useState(null),
            W = s.useRef(new a.qA());
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((null == w ? void 0 : null === (t = w.freeBoost) || void 0 === t ? void 0 : t.name) === _.u.FREE_BOOST || (null == w ? void 0 : null === (n = w.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === _.u.TENURE_REWARD_COLLECTIBLE) &&
                    (0, i.jsx)(a.O_, {
                        ref: Y,
                        className: f.confettiCanvas,
                        environment: W.current
                    }),
                (0, i.jsxs)('div', {
                    ref: O,
                    className: l()(
                        f.section,
                        {
                            [f.centerAlignSection]: !I,
                            [f.leftAlignSection]: I
                        },
                        r
                    ),
                    children: [
                        (0, i.jsx)(T, {
                            showAllPerksButton: b,
                            leftAlignHeaders: I,
                            title: M.title,
                            headerClassname: v
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: l()(f.subtitle, {
                                [f.subtitle]: null == b || I,
                                [f.subtitleWithButton]: null != b && !I,
                                [f.fullWidth]: y || I,
                                [f.moreSubtitleMargin]: H,
                                [f.leftAlignSubtitle]: I,
                                [f.centerAlignSubtitle]: !I
                            }),
                            children: M.subtitle
                        }),
                        !I &&
                            null != b &&
                            (0, i.jsx)('div', {
                                className: l()(f.showAllPerksButtonCenter),
                                children: b
                            }),
                        (0, i.jsx)('div', {
                            className: l()({
                                [f.cardContainer]: j,
                                [f.cardContainerNarrowWidth]: !j
                            }),
                            children: F.map((e, t) =>
                                (0, i.jsx)(
                                    C.Z,
                                    {
                                        confettiCanvas: e.name === _.u.FREE_BOOST || e.name === _.u.TENURE_REWARD_COLLECTIBLE ? z : void 0,
                                        ...e,
                                        forceShadow: S
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
