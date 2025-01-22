n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    m = n(687362),
    g = n(675619),
    h = n(119850),
    p = n(32173),
    x = n(391110),
    f = n(75077),
    E = n(320319),
    _ = n(761518);
let C = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: s } = e,
        a = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != s ? s : _.heading,
            children: r
        });
    return null == t
        ? a
        : n
          ? (0, i.jsxs)('div', {
                className: _.sectionHeader,
                children: [
                    a,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: _.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: _.container,
                children: (0, i.jsx)('div', {
                    className: _.sectionHeaderSeeAll,
                    children: a
                })
            });
};
t.Z = (e) => {
    var t, n;
    let { className: s, variant: T = x.R0.PERKS_DISCOVERABILITY, noBackground: S = !1, leftAlignHeaders: b = !1, showAllPerksButton: I, headerClassname: N, isFullScreen: v = !0, shouldAutoScroll: A = !1 } = e,
        j = r.useRef(null),
        O = (0, u.yQ)(),
        R = (0, m.vi)(O),
        P = (0, d.ZP)('perks-discoverability'),
        D = T === x.R0.WHATS_NEW,
        y = (0, u.IY)(),
        B = (0, h.x)();
    r.useEffect(() => {
        D && !R && (y(), B());
    }, [y, B, D, R]);
    let Z = () => {
            D && R && y();
        },
        L = R && D;
    (0, g.r)({
        ref: j,
        shouldScroll: L || A,
        onScrollEnd: Z,
        onCleanup: Z
    });
    let M = (0, f.Op)(D),
        k = (0, p.Z)(),
        w = (0, f.mN)(),
        { fractionalState: F } = (0, c.Z)(),
        U = (0, f.sP)({
            perksCards: k,
            variant: T,
            shopMarketingVariation: P,
            isFullScreen: v,
            showTenureCard: null == O ? void 0 : O.showCard,
            isPremiumSubscriber: w,
            fractionalState: F
        }),
        V = U.some((e) => null != e.pillText),
        [G, H] = r.useState(null),
        Y = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == k ? void 0 : null === (t = k.freeBoost) || void 0 === t ? void 0 : t.name) === p.u.FREE_BOOST || (null == k ? void 0 : null === (n = k.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === p.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: H,
                    className: _.confettiCanvas,
                    environment: Y.current
                }),
            (0, i.jsxs)('div', {
                ref: j,
                className: a()(
                    _.section,
                    {
                        [_.centerAlignSection]: !b,
                        [_.leftAlignSection]: b
                    },
                    s
                ),
                children: [
                    (0, i.jsx)(C, {
                        showAllPerksButton: I,
                        leftAlignHeaders: b,
                        title: M.title,
                        headerClassname: N
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: a()(_.subtitle, {
                            [_.subtitle]: null == I || b,
                            [_.subtitleWithButton]: null != I && !b,
                            [_.fullWidth]: D || b,
                            [_.moreSubtitleMargin]: V,
                            [_.leftAlignSubtitle]: b,
                            [_.centerAlignSubtitle]: !b
                        }),
                        children: M.subtitle
                    }),
                    !b &&
                        null != I &&
                        (0, i.jsx)('div', {
                            className: a()(_.showAllPerksButtonCenter),
                            children: I
                        }),
                    (0, i.jsx)('div', {
                        className: a()({
                            [_.cardContainer]: v,
                            [_.cardContainerNarrowWidth]: !v
                        }),
                        children: U.map((e, t) =>
                            (0, i.jsx)(
                                E.Z,
                                {
                                    confettiCanvas: e.name === p.u.FREE_BOOST || e.name === p.u.TENURE_REWARD_COLLECTIBLE ? G : void 0,
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
