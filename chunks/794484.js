n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(314684),
    g = n(687362),
    m = n(32173),
    f = n(976465),
    p = n(391110),
    _ = n(75077),
    h = n(320319),
    x = n(761518);
let E = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
        s = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != a ? a : x.heading,
            children: r
        });
    return null == t
        ? s
        : n
          ? (0, i.jsxs)('div', {
                className: x.sectionHeader,
                children: [
                    s,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: x.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: x.container,
                children: (0, i.jsx)('div', {
                    className: x.sectionHeaderSeeAll,
                    children: s
                })
            });
};
t.Z = (e) => {
    var t, n;
    let { className: a, variant: b = p.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: v = !1, showAllPerksButton: T, headerClassname: N, isFullScreen: I = !0 } = e,
        S = r.useRef(null),
        R = (0, u.yQ)(),
        j = (0, g.vi)(R),
        A = (0, d.ZP)('perks-discoverability'),
        P = b === p.R0.WHATS_NEW,
        O = (0, u.IY)(),
        Z = (0, f.x$)();
    r.useEffect(() => {
        P && !j && (O(), Z());
    }, [O, Z, P, j]),
        r.useEffect(() => {
            let e = S.current;
            if (null == e || !j || !P) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), P && O();
            });
            return () => {
                cancelAnimationFrame(t), P && O();
            };
        }, [S, j, P, O]);
    let M = (0, _.Op)(P),
        B = (0, m.Z)(),
        y = (0, _.mN)(),
        { fractionalState: w } = (0, c.Z)(),
        k = (0, _.sP)({
            perksCards: B,
            variant: b,
            shopMarketingVariation: A,
            isFullScreen: I,
            showTenureCard: null == R ? void 0 : R.showCard,
            isPremiumSubscriber: y,
            fractionalState: w
        }),
        L = k.some((e) => null != e.pillText),
        [U, D] = r.useState(null),
        G = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            ((null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === m.u.FREE_BOOST || (null == B ? void 0 : null === (n = B.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === m.u.TENURE_REWARD_COLLECTIBLE) &&
                (0, i.jsx)(l.O_, {
                    ref: D,
                    className: x.confettiCanvas,
                    environment: G.current
                }),
            (0, i.jsxs)('div', {
                ref: S,
                className: s()(
                    x.section,
                    {
                        [x.centerAlignSection]: !v,
                        [x.leftAlignSection]: v
                    },
                    a
                ),
                children: [
                    (0, i.jsx)(E, {
                        showAllPerksButton: T,
                        leftAlignHeaders: v,
                        title: M.title,
                        headerClassname: N
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(x.subtitle, {
                            [x.subtitle]: null == T || v,
                            [x.subtitleWithButton]: null != T && !v,
                            [x.fullWidth]: P || v,
                            [x.moreSubtitleMargin]: L,
                            [x.leftAlignSubtitle]: v,
                            [x.centerAlignSubtitle]: !v
                        }),
                        children: M.subtitle
                    }),
                    !v &&
                        null != T &&
                        (0, i.jsx)('div', {
                            className: s()(x.showAllPerksButtonCenter),
                            children: T
                        }),
                    (0, i.jsx)('div', {
                        className: s()({
                            [x.cardContainer]: I,
                            [x.cardContainerNarrowWidth]: !I
                        }),
                        children: k.map((e, t) =>
                            (0, i.jsx)(
                                h.Z,
                                {
                                    confettiCanvas: e.name === m.u.FREE_BOOST || e.name === m.u.TENURE_REWARD_COLLECTIBLE ? U : void 0,
                                    ...e,
                                    forceShadow: C
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
