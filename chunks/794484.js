n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    m = n(687362),
    g = n(32173),
    h = n(976465),
    p = n(391110),
    x = n(75077),
    f = n(320319),
    _ = n(761518);
let E = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: s, headerClassname: r } = e,
        a = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != r ? r : _.heading,
            children: s
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
    let { className: r, variant: C = p.R0.PERKS_DISCOVERABILITY, noBackground: T = !1, leftAlignHeaders: S = !1, showAllPerksButton: b, headerClassname: I, isFullScreen: N = !0 } = e,
        v = s.useRef(null),
        A = (0, u.yQ)(),
        j = (0, m.vi)(A),
        R = (0, d.ZP)('perks-discoverability'),
        O = C === p.R0.WHATS_NEW,
        P = (0, u.IY)(),
        y = (0, h.x$)();
    s.useEffect(() => {
        O && !j && (P(), y());
    }, [P, y, O, j]),
        s.useEffect(() => {
            let e = v.current;
            if (null == e || !j || !O) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), O && P();
            });
            return () => {
                cancelAnimationFrame(t), O && P();
            };
        }, [v, j, O, P]);
    let D = (0, x.Op)(O),
        B = (0, g.Z)(),
        Z = (0, x.mN)(),
        { fractionalState: L } = (0, c.Z)(),
        M = (0, x.sP)({
            perksCards: B,
            variant: C,
            shopMarketingVariation: R,
            isFullScreen: N,
            showTenureCard: null == A ? void 0 : A.showCard,
            isPremiumSubscriber: Z,
            fractionalState: L
        }),
        k = M.some((e) => null != e.pillText),
        [w, F] = s.useState(null),
        U = s.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === g.u.FREE_BOOST || (null == B ? void 0 : null === (n = B.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === g.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: F,
                    className: _.confettiCanvas,
                    environment: U.current
                }),
            (0, i.jsxs)('div', {
                ref: v,
                className: a()(
                    _.section,
                    {
                        [_.centerAlignSection]: !S,
                        [_.leftAlignSection]: S
                    },
                    r
                ),
                children: [
                    (0, i.jsx)(E, {
                        showAllPerksButton: b,
                        leftAlignHeaders: S,
                        title: D.title,
                        headerClassname: I
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: a()(_.subtitle, {
                            [_.subtitle]: null == b || S,
                            [_.subtitleWithButton]: null != b && !S,
                            [_.fullWidth]: O || S,
                            [_.moreSubtitleMargin]: k,
                            [_.leftAlignSubtitle]: S,
                            [_.centerAlignSubtitle]: !S
                        }),
                        children: D.subtitle
                    }),
                    !S &&
                        null != b &&
                        (0, i.jsx)('div', {
                            className: a()(_.showAllPerksButtonCenter),
                            children: b
                        }),
                    (0, i.jsx)('div', {
                        className: a()({
                            [_.cardContainer]: N,
                            [_.cardContainerNarrowWidth]: !N
                        }),
                        children: M.map((e, t) =>
                            (0, i.jsx)(
                                f.Z,
                                {
                                    confettiCanvas: e.name === g.u.FREE_BOOST || e.name === g.u.TENURE_REWARD_COLLECTIBLE ? w : void 0,
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
