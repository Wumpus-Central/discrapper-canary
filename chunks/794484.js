n.d(t, { Z: () => E }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(995899),
    o = n(481060),
    c = n(975298),
    d = n(695349),
    u = n(314684),
    m = n(687362),
    g = n(675619),
    p = n(119850),
    h = n(32173),
    f = n(391110),
    _ = n(75077),
    b = n(320319),
    N = n(847408);
let x = (e) => {
        let { showAllPerksButton: t, leftAlignHeaders: n, title: i, headerClassname: s } = e,
            a = (0, r.jsx)(o.X6q, {
                variant: 'heading-xxl/extrabold',
                color: 'header-primary',
                className: null != s ? s : N.heading,
                children: i
            });
        return null == t
            ? a
            : n
              ? (0, r.jsxs)('div', {
                    className: N.sectionHeader,
                    children: [
                        a,
                        null != t &&
                            (0, r.jsx)('div', {
                                className: N.showAllPerksButton,
                                children: t
                            })
                    ]
                })
              : (0, r.jsx)('div', {
                    className: N.container,
                    children: (0, r.jsx)('div', {
                        className: N.sectionHeaderSeeAll,
                        children: a
                    })
                });
    },
    E = (e) => {
        var t;
        let { className: n, variant: s = f.R0.PERKS_DISCOVERABILITY, noBackground: E = !1, leftAlignHeaders: j = !1, showAllPerksButton: C, headerClassname: O, isFullScreen: S = !0, shouldAutoScroll: v = !1 } = e,
            T = i.useRef(null),
            I = (0, u.Er)(),
            y = (0, m.v)(I),
            A = s === f.R0.WHATS_NEW,
            P = (0, u.IY)(),
            R = (0, p.x)();
        i.useEffect(() => {
            A && !y && (P(), R());
        }, [P, R, A, y]);
        let D = () => {
                A && y && P();
            },
            Z = y && A;
        (0, g.r)({
            ref: T,
            shouldScroll: Z || v,
            onScrollEnd: D,
            onCleanup: D
        });
        let w = (0, _.Op)(A),
            k = (0, h.Z)(),
            W = (0, _.mN)(),
            { fractionalState: L } = (0, c.Z)(),
            B = (0, d.W)(),
            M = (0, _.sP)({
                perksCards: k,
                variant: s,
                isFullScreen: S,
                showTenureCard: null == I ? void 0 : I.showCard,
                isPremiumSubscriber: W,
                fractionalState: L,
                isInReverseTrial: B
            }),
            U = M.some((e) => null != e.pillText),
            [V, G] = i.useState(null),
            F = i.useRef(new l.qA());
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (null == k || null == (t = k.tenureRewardCollectible) ? void 0 : t.name) === h.u.TENURE_REWARD_COLLECTIBLE &&
                    (0, r.jsx)(l.O_, {
                        ref: G,
                        className: N.confettiCanvas,
                        environment: F.current
                    }),
                (0, r.jsxs)('div', {
                    ref: T,
                    className: a()(
                        N.section,
                        {
                            [N.centerAlignSection]: !j,
                            [N.leftAlignSection]: j
                        },
                        n
                    ),
                    children: [
                        (0, r.jsx)(x, {
                            showAllPerksButton: C,
                            leftAlignHeaders: j,
                            title: w.title,
                            headerClassname: O
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-lg/normal',
                            color: 'header-primary',
                            className: a()(N.subtitle, {
                                [N.subtitle]: null == C || j,
                                [N.subtitleWithButton]: null != C && !j,
                                [N.fullWidth]: A || j,
                                [N.moreSubtitleMargin]: U,
                                [N.leftAlignSubtitle]: j,
                                [N.centerAlignSubtitle]: !j
                            }),
                            children: w.subtitle
                        }),
                        !j &&
                            null != C &&
                            (0, r.jsx)('div', {
                                className: N.showAllPerksButtonCenter,
                                children: C
                            }),
                        (0, r.jsx)('div', {
                            className: a()({
                                [N.cardContainer]: S,
                                [N.cardContainerNarrowWidth]: !S
                            }),
                            children: M.map((e, t) => {
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
                                    })({ confettiCanvas: e.name === h.u.TENURE_REWARD_COLLECTIBLE ? V : void 0 }, e)),
                                    (i = i = { forceShadow: E }),
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
