n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(119617),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(695349),
    m = n(314684),
    g = n(687362),
    p = n(675619),
    h = n(119850),
    f = n(32173),
    N = n(391110),
    x = n(75077),
    b = n(320319),
    _ = n(276671);
let E = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: s } = e,
            a = (0, r.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : _.heading,
                children: i
            });
        return null == t
            ? a
            : n
              ? (0, r.jsxs)('div', {
                    className: _.sectionHeader,
                    children: [
                        a,
                        null != t &&
                            (0, r.jsx)('div', {
                                className: _.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, r.jsx)('div', {
                    className: _.container,
                    children: (0, r.jsx)('div', {
                        className: _.sectionHeaderSeeAll,
                        children: a
                    })
                });
    },
    j = (e) => {
        var t, n;
        let { className: s, variant: j = N.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: O = !1, showAllPerksButton: v, headerClassname: S, isFullScreen: T = !0, shouldAutoScroll: I = !1 } = e,
            y = i.useRef(null),
            A = (0, m.yQ)(),
            P = (0, g.vi)(A),
            R = (0, d.ZP)('perks-discoverability'),
            D = j === N.R0.WHATS_NEW,
            Z = (0, m.IY)(),
            w = (0, h.x)();
        i.useEffect(() => {
            D && !P && (Z(), w());
        }, [Z, w, D, P]);
        let k = () => {
                D && P && Z();
            },
            W = P && D;
        (0, p.r)({
            ref: y,
            shouldScroll: W || I,
            onScrollEnd: k,
            onCleanup: k
        });
        let L = (0, x.Op)(D),
            B = (0, f.Z)(),
            M = (0, x.mN)(),
            { fractionalState: U } = (0, c.Z)(),
            V = (0, u.W)(),
            G = (0, x.sP)({
                perksCards: B,
                variant: j,
                shopMarketingVariation: R,
                isFullScreen: T,
                showTenureCard: null == A ? void 0 : A.showCard,
                isPremiumSubscriber: M,
                fractionalState: U,
                isInReverseTrial: V
            }),
            F = G.some((e) => null != e.pillText),
            [H, z] = i.useState(null),
            Y = i.useRef(new l.qA());
        return (0, r.jsxs)(r.Fragment, {
            children: [
                ((null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === f.u.FREE_BOOST || (null == B ? void 0 : null === (n = B.tenureRewardCollectible) || void 0 === n ? void 0 : n.name) === f.u.TENURE_REWARD_COLLECTIBLE) &&
                    (0, r.jsx)(l.O_, {
                        ref: z,
                        className: _.confettiCanvas,
                        environment: Y.current
                    }),
                (0, r.jsxs)('div', {
                    ref: y,
                    className: a()(
                        _.section,
                        {
                            [_.centerAlignSection]: !O,
                            [_.leftAlignSection]: O
                        },
                        s
                    ),
                    children: [
                        (0, r.jsx)(E, {
                            showAllPerksButton: v,
                            leftAlignHeaders: O,
                            title: L.title,
                            headerClassname: S
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: a()(_.subtitle, {
                                [_.subtitle]: null == v || O,
                                [_.subtitleWithButton]: null != v && !O,
                                [_.fullWidth]: D || O,
                                [_.moreSubtitleMargin]: F,
                                [_.leftAlignSubtitle]: O,
                                [_.centerAlignSubtitle]: !O
                            }),
                            children: L.subtitle
                        }),
                        !O &&
                            null != v &&
                            (0, r.jsx)('div', {
                                className: a()(_.showAllPerksButtonCenter),
                                children: v
                            }),
                        (0, r.jsx)('div', {
                            className: a()({
                                [_.cardContainer]: T,
                                [_.cardContainerNarrowWidth]: !T
                            }),
                            children: G.map((e, t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    b.Z,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({ confettiCanvas: e.name === f.u.FREE_BOOST || e.name === f.u.TENURE_REWARD_COLLECTIBLE ? H : void 0 }, e)),
                                    (i = i = { forceShadow: C }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n),
                                    ''.concat(e.name, '_').concat(t)
                                );
                            })
                        })
                    ]
                })
            ]
        });
    };
