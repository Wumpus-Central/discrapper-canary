n.d(t, { Z: () => j }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(995899),
    o = n(481060),
    c = n(975298),
    d = n(695349),
    u = n(314684),
    m = n(687362),
    p = n(675619),
    g = n(119850),
    h = n(32173),
    f = n(391110),
    b = n(75077),
    _ = n(320319),
    x = n(847408);
let E = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: s } = e,
            l = (0, i.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : x.heading,
                children: r
            });
        return null == t
            ? l
            : n
              ? (0, i.jsxs)('div', {
                    className: x.sectionHeader,
                    children: [
                        l,
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
                        children: l
                    })
                });
    },
    j = (e) => {
        var t;
        let { className: n, variant: s = f.R0.PERKS_DISCOVERABILITY, noBackground: j = !1, leftAlignHeaders: C = !1, showAllPerksButton: O, headerClassname: S, isFullScreen: v = !0, shouldAutoScroll: T = !1 } = e,
            N = r.useRef(null),
            I = (0, u.Er)(),
            y = (0, m.v)(I),
            A = s === f.R0.WHATS_NEW,
            P = (0, u.IY)(),
            R = (0, g.x)();
        r.useEffect(() => {
            A && !y && (P(), R());
        }, [P, R, A, y]);
        let D = () => {
                A && y && P();
            },
            Z = y && A;
        (0, p.r)({
            ref: N,
            shouldScroll: Z || T,
            onScrollEnd: D,
            onCleanup: D
        });
        let w = (0, b.Op)(A),
            k = (0, h.Z)(),
            L = (0, b.mN)(),
            { fractionalState: M } = (0, c.Z)(),
            B = (0, d.W)(),
            U = (0, b.sP)({
                perksCards: k,
                variant: s,
                isFullScreen: v,
                showTenureCard: null == I ? void 0 : I.showCard,
                isPremiumSubscriber: L,
                fractionalState: M,
                isInReverseTrial: B
            }),
            V = U.some((e) => null != e.pillText),
            [G, F] = r.useState(null),
            H = r.useRef(new a.qA());
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (null == k || null == (t = k.tenureRewardCollectible) ? void 0 : t.name) === h.u.TENURE_REWARD_COLLECTIBLE &&
                    (0, i.jsx)(a.O_, {
                        ref: F,
                        className: x.confettiCanvas,
                        environment: H.current
                    }),
                (0, i.jsxs)('div', {
                    ref: N,
                    className: l()(
                        x.section,
                        {
                            [x.centerAlignSection]: !C,
                            [x.leftAlignSection]: C
                        },
                        n
                    ),
                    children: [
                        (0, i.jsx)(E, {
                            showAllPerksButton: O,
                            leftAlignHeaders: C,
                            title: w.title,
                            headerClassname: S
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: l()(x.subtitle, {
                                [x.subtitle]: null == O || C,
                                [x.subtitleWithButton]: null != O && !C,
                                [x.fullWidth]: A || C,
                                [x.moreSubtitleMargin]: V,
                                [x.leftAlignSubtitle]: C,
                                [x.centerAlignSubtitle]: !C
                            }),
                            children: w.subtitle
                        }),
                        !C &&
                            null != O &&
                            (0, i.jsx)('div', {
                                className: x.showAllPerksButtonCenter,
                                children: O
                            }),
                        (0, i.jsx)('div', {
                            className: l()({
                                [x.cardContainer]: v,
                                [x.cardContainerNarrowWidth]: !v
                            }),
                            children: U.map((e, t) => {
                                var n, r;
                                return (0, i.jsx)(
                                    _.Z,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({ confettiCanvas: e.name === h.u.TENURE_REWARD_COLLECTIBLE ? G : void 0 }, e)),
                                    (r = r = { forceShadow: j }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
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
