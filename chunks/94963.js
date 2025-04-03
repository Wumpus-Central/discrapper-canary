n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(688619),
    a = n.n(s),
    l = n(120356),
    o = n.n(l),
    c = n(97028),
    d = n(866442),
    u = n(442837),
    m = n(481060),
    g = n(650774),
    p = n(430824),
    h = n(900681),
    f = n(175557),
    b = n(688298),
    x = n(995119),
    j = n(116175),
    N = n(308083),
    _ = n(388032),
    v = n(249818),
    C = n(130116);
function O(e) {
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
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = [
        {
            name: 'Night Sky',
            bannerKind: N.qC.NIGHT_SKY,
            icon: m.Z6G
        },
        {
            name: 'Castle',
            bannerKind: N.qC.CASTLE,
            icon: m.CEn
        },
        {
            name: 'World Map',
            bannerKind: N.qC.WORLD_MAP,
            icon: m.enf
        },
        {
            name: 'Sea Foam',
            bannerKind: N.qC.SEA_FOAM,
            icon: m.Vkn
        },
        {
            name: 'Warp',
            bannerKind: N.qC.WARP_TUNNEL,
            icon: m.yMH
        },
        {
            name: 'House',
            bannerKind: N.qC.HOUSE,
            icon: m.WXD
        },
        {
            name: 'Pulsar',
            bannerKind: N.qC.HEIGHTMAP,
            icon: m.GHO
        },
        {
            name: 'Mesh',
            bannerKind: N.qC.MESH,
            icon: m.SVt
        },
        {
            name: 'Spatter',
            bannerKind: N.qC.SPATTER,
            icon: m.XKY
        }
    ],
    E = (e) => {
        let { name: t, primaryColor: n, secondaryColor: i, isCustom: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                s
                    ? (0, r.jsx)(m.V3v, { size: 'md' })
                    : (0, r.jsx)('div', {
                          className: v.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(i, ' 50%, ').concat(n, ' 50% )') }
                      }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: v.noWrap,
                    children: t
                })
            ]
        });
    },
    S = (e) => {
        var t;
        let { handleUpdate: n, progress: s, guildId: l } = e,
            { banner: S, brandPrimaryColor: T, brandSecondaryColor: P, badgePrimaryColor: w, badgeSecondaryColor: R } = s,
            Z = (0, u.e7)([p.Z], () => p.Z.getGuild(l)),
            D = null != (t = (0, u.e7)([g.Z], () => g.Z.getMemberCount(l))) ? t : 0,
            A = i.useMemo(
                () => ({
                    primary: null != T ? T : N.OH,
                    secondary: null != P ? P : N.K_
                }),
                [T, P]
            ),
            k = i.useMemo(() => {
                if (T === w && P === R) return 1;
                for (let e = 0; e < N.ym.length; e++) if (N.ym[e].primary === s.brandPrimaryColor && N.ym[e].secondary === s.brandSecondaryColor) return 2 + e;
                return 0;
            }, [T, P, w, R, s.brandPrimaryColor, s.brandSecondaryColor]),
            [W, L] = i.useState(!1),
            M = 0 === k,
            G = 1 === k,
            U = i.useMemo(() => {
                if (M) return A;
                {
                    if (G)
                        return {
                            primary: null != w ? w : j.Nh,
                            secondary: null != R ? R : j.vY
                        };
                    let e = N.ym[k - 2];
                    return {
                        primary: e.primary,
                        secondary: e.secondary
                    };
                }
            }, [A, G, M, w, R, k]),
            B = i.useCallback(() => {
                let e = I[Math.floor(Math.random() * I.length)].bannerKind;
                n({
                    banner: e,
                    brandPrimaryColor: a().random().hex(),
                    brandSecondaryColor: a().random().hex()
                });
            }, [n]);
        i.useEffect(() => {
            n({
                banner: S,
                brandPrimaryColor: U.primary,
                brandSecondaryColor: U.secondary
            });
        }, [n, S, U.primary, U.secondary]);
        let F = i.useMemo(() => {
            var e, t, n;
            return y(O({}, s), {
                id: l,
                name: null != (e = null == Z ? void 0 : Z.name) ? e : '',
                icon: null == Z ? void 0 : Z.icon,
                memberCount: D,
                games: Array.from(s.gameApplicationIds),
                traits: Array.from(s.interests),
                banner: S,
                badge: {
                    badgeKind: s.badgeKind,
                    primaryColor: null != w ? w : N.OH,
                    secondaryColor: null != R ? R : N.K_
                },
                branding: {
                    primaryColor: null != (t = U.primary) ? t : N.OH,
                    secondaryColor: null != (n = U.secondary) ? n : N.K_
                },
                gameActivity: Array.from(s.gameApplicationIds).reduce(
                    (e, t) => (
                        (e[t] = {
                            level: c.m.HIGH,
                            score: 0
                        }),
                        e
                    ),
                    {}
                )
            });
        }, [s, l, Z, D, S, w, R, U]);
        return (0, r.jsxs)('div', {
            className: C.slideContent,
            children: [
                (0, r.jsx)(m.X6q, {
                    variant: 'heading-xxl/medium',
                    className: C.title,
                    children: _.NW.string(_.t.kPwMOz)
                }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: C.subtitle,
                    children: _.NW.string(_.t['E+KhDA'])
                }),
                (0, r.jsxs)('div', {
                    className: v.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: v.leftColumn,
                            children: (0, r.jsxs)('div', {
                                className: v.colorsContainer,
                                children: [
                                    (0, r.jsx)(x.Z, { onClick: B }),
                                    (0, r.jsxs)('div', {
                                        className: v.colorPickerContainer,
                                        children: [
                                            (0, r.jsx)(m.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: _.NW.string(_.t.Ul1tIS)
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: v.colorPickerGrid,
                                                children: [
                                                    (0, r.jsx)(b.Z, {
                                                        showSecondaryColor: !0,
                                                        palette: A,
                                                        onPrimaryColorChange: (e) => {
                                                            n({ brandPrimaryColor: (0, d.Rf)(e) });
                                                        },
                                                        onSecondaryColorChange: (e) => {
                                                            n({ brandSecondaryColor: (0, d.Rf)(e) });
                                                        },
                                                        shouldShow: W,
                                                        onRequestClose: () => L(!1),
                                                        children: (e) =>
                                                            (0, r.jsx)(
                                                                m.P3F,
                                                                y(O({}, e), {
                                                                    onClick: () => {
                                                                        L((e) => !e);
                                                                    },
                                                                    className: o()(v.brandItemContainer, { [v.brandItemContainerSelected]: 0 === k }),
                                                                    children: (0, r.jsx)(E, {
                                                                        name: _.NW.string(_.t.AemVoa),
                                                                        isCustom: !0
                                                                    })
                                                                })
                                                            )
                                                    }),
                                                    (0, r.jsx)(m.P3F, {
                                                        onClick: () => {
                                                            n({
                                                                brandPrimaryColor: null != w ? w : N.OH,
                                                                brandSecondaryColor: null != R ? R : N.K_
                                                            });
                                                        },
                                                        className: o()(v.brandItemContainer, { [v.brandItemContainerSelected]: 1 === k }),
                                                        children: (0, r.jsx)(E, {
                                                            name: _.NW.string(_.t['1Pvr/v']),
                                                            primaryColor: w,
                                                            secondaryColor: R
                                                        })
                                                    }),
                                                    N.ym.map((e, t) =>
                                                        (0, r.jsx)(
                                                            m.P3F,
                                                            {
                                                                'aria-label': e.name,
                                                                onClick: () => {
                                                                    n({
                                                                        brandPrimaryColor: N.ym[t].primary,
                                                                        brandSecondaryColor: N.ym[t].secondary
                                                                    });
                                                                },
                                                                className: o()(v.brandItemContainer, { [v.brandItemContainerSelected]: k === t + 2 }),
                                                                children: (0, r.jsx)(E, {
                                                                    name: e.name,
                                                                    primaryColor: e.primary,
                                                                    secondaryColor: e.secondary
                                                                })
                                                            },
                                                            t
                                                        )
                                                    )
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: v.bannerPickerContainer,
                                        children: [
                                            (0, r.jsx)(m.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: _.NW.string(_.t.nH6S2d)
                                            }),
                                            (0, r.jsx)('div', {
                                                className: v.bannerPickerGrid,
                                                children: I.map((e, t) =>
                                                    (0, r.jsxs)(
                                                        m.P3F,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                n({ banner: e.bannerKind });
                                                            },
                                                            className: o()(v.bannerItemContainer, { [v.bannerItemContainerSelected]: e.bannerKind === S }),
                                                            children: [
                                                                (0, r.jsx)(e.icon, { size: 'md' }),
                                                                (0, r.jsx)(m.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    color: 'interactive-normal',
                                                                    className: v.noWrap,
                                                                    children: e.name
                                                                })
                                                            ]
                                                        },
                                                        t
                                                    )
                                                )
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: v.clanCardWrapper,
                            children: (0, r.jsx)(h.x, {
                                bannerComponent: (0, r.jsx)(f.Z, {
                                    banner: S,
                                    primaryTintColor: U.primary,
                                    secondaryTintColor: U.secondary,
                                    className: v.clanBannerPreview
                                }),
                                clan: F
                            })
                        })
                    ]
                })
            ]
        });
    };
