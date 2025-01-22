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
    g = n(119850),
    h = n(32173),
    p = n(391110),
    x = n(75077),
    f = n(320319),
    _ = n(761518);
let E = (e) => {
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
    let { className: s, variant: C = p.R0.PERKS_DISCOVERABILITY, noBackground: T = !1, leftAlignHeaders: S = !1, showAllPerksButton: b, headerClassname: I, isFullScreen: N = !0 } = e,
        v = r.useRef(null),
        A = (0, u.yQ)(),
        j = (0, m.vi)(A),
        O = (0, d.ZP)('perks-discoverability'),
        R = C === p.R0.WHATS_NEW,
        P = (0, u.IY)(),
        D = (0, g.x)();
    r.useEffect(() => {
        R && !j && (P(), D());
    }, [P, D, R, j]),
        r.useEffect(() => {
            let e = v.current;
            if (null == e || !j || !R) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), R && P();
            });
            return () => {
                cancelAnimationFrame(t), R && P();
            };
        }, [v, j, R, P]);
    let y = (0, x.Op)(R),
        B = (0, h.Z)(),
        Z = (0, x.mN)(),
        { fractionalState: L } = (0, c.Z)(),
        M = (0, x.sP)({
            perksCards: B,
            variant: C,
            shopMarketingVariation: O,
            isFullScreen: N,
            showTenureCard: null == A ? void 0 : A.showCard,
            isPremiumSubscriber: Z,
            fractionalState: L
        }),
        k = M.some((e) => null != e.pillText),
        [w, F] = r.useState(null),
        U = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === h.u.FREE_BOOST || (null == B ? void 0 : null === (n = B.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === h.u.TENURE_REWARD_COLLECTIBLE) &&
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
                    s
                ),
                children: [
                    (0, i.jsx)(E, {
                        showAllPerksButton: b,
                        leftAlignHeaders: S,
                        title: y.title,
                        headerClassname: I
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: a()(_.subtitle, {
                            [_.subtitle]: null == b || S,
                            [_.subtitleWithButton]: null != b && !S,
                            [_.fullWidth]: R || S,
                            [_.moreSubtitleMargin]: k,
                            [_.leftAlignSubtitle]: S,
                            [_.centerAlignSubtitle]: !S
                        }),
                        children: y.subtitle
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
                                    confettiCanvas: e.name === h.u.FREE_BOOST || e.name === h.u.TENURE_REWARD_COLLECTIBLE ? w : void 0,
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
