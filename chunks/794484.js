n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    m = n(687362),
    g = n(675619),
    _ = n(119850),
    p = n(32173),
    f = n(391110),
    h = n(75077),
    x = n(320319),
    E = n(3185);
let C = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
            s = (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != a ? a : E.heading,
                children: r
            });
        return null == t
            ? s
            : n
              ? (0, i.jsxs)('div', {
                    className: E.sectionHeader,
                    children: [
                        s,
                        null != t &&
                            (0, i.jsx)('div', {
                                className: E.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, i.jsx)('div', {
                    className: E.container,
                    children: (0, i.jsx)('div', {
                        className: E.sectionHeaderSeeAll,
                        children: s
                    })
                });
    },
    b = (e) => {
        var t, n;
        let { className: a, variant: b = f.R0.PERKS_DISCOVERABILITY, noBackground: v = !1, leftAlignHeaders: T = !1, showAllPerksButton: N, headerClassname: I, isFullScreen: R = !0, shouldAutoScroll: j = !1 } = e,
            S = r.useRef(null),
            A = (0, u.yQ)(),
            P = (0, m.vi)(A),
            Z = (0, d.ZP)('perks-discoverability'),
            w = b === f.R0.WHATS_NEW,
            M = (0, u.IY)(),
            B = (0, _.x)();
        r.useEffect(() => {
            w && !P && (M(), B());
        }, [M, B, w, P]);
        let y = () => {
                w && P && M();
            },
            k = P && w;
        (0, g.r)({
            ref: S,
            shouldScroll: k || j,
            onScrollEnd: y,
            onCleanup: y
        });
        let O = (0, h.Op)(w),
            L = (0, p.Z)(),
            D = (0, h.mN)(),
            { fractionalState: U } = (0, c.Z)(),
            G = (0, h.sP)({
                perksCards: L,
                variant: b,
                shopMarketingVariation: Z,
                isFullScreen: R,
                showTenureCard: null == A ? void 0 : A.showCard,
                isPremiumSubscriber: D,
                fractionalState: U
            }),
            V = G.some((e) => null != e.pillText),
            [H, F] = r.useState(null),
            W = r.useRef(new l.qA());
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((null == L ? void 0 : null === (t = L.freeBoost) || void 0 === t ? void 0 : t.name) === p.u.FREE_BOOST || (null == L ? void 0 : null === (n = L.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === p.u.TENURE_REWARD_COLLECTIBLE) &&
                    (0, i.jsx)(l.O_, {
                        ref: F,
                        className: E.confettiCanvas,
                        environment: W.current
                    }),
                (0, i.jsxs)('div', {
                    ref: S,
                    className: s()(
                        E.section,
                        {
                            [E.centerAlignSection]: !T,
                            [E.leftAlignSection]: T
                        },
                        a
                    ),
                    children: [
                        (0, i.jsx)(C, {
                            showAllPerksButton: N,
                            leftAlignHeaders: T,
                            title: O.title,
                            headerClassname: I
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: s()(E.subtitle, {
                                [E.subtitle]: null == N || T,
                                [E.subtitleWithButton]: null != N && !T,
                                [E.fullWidth]: w || T,
                                [E.moreSubtitleMargin]: V,
                                [E.leftAlignSubtitle]: T,
                                [E.centerAlignSubtitle]: !T
                            }),
                            children: O.subtitle
                        }),
                        !T &&
                            null != N &&
                            (0, i.jsx)('div', {
                                className: s()(E.showAllPerksButtonCenter),
                                children: N
                            }),
                        (0, i.jsx)('div', {
                            className: s()({
                                [E.cardContainer]: R,
                                [E.cardContainerNarrowWidth]: !R
                            }),
                            children: G.map((e, t) =>
                                (0, i.jsx)(
                                    x.Z,
                                    {
                                        confettiCanvas: e.name === p.u.FREE_BOOST || e.name === p.u.TENURE_REWARD_COLLECTIBLE ? H : void 0,
                                        ...e,
                                        forceShadow: v
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
