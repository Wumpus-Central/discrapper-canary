n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(688619),
    s = n.n(l),
    a = n(120356),
    o = n.n(a),
    c = n(97028),
    d = n(866442),
    u = n(442837),
    m = n(481060),
    h = n(650774),
    g = n(430824),
    x = n(900681),
    p = n(175557),
    f = n(688298),
    C = n(995119),
    v = n(116175),
    I = n(308083),
    N = n(388032),
    _ = n(591620),
    T = n(866262);
let j = [
        {
            name: 'Night Sky',
            bannerKind: I.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon
        },
        {
            name: 'Castle',
            bannerKind: I.qC.CASTLE,
            icon: m.CrownIcon
        },
        {
            name: 'World Map',
            bannerKind: I.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon
        },
        {
            name: 'Sea Foam',
            bannerKind: I.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon
        },
        {
            name: 'Warp',
            bannerKind: I.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon
        },
        {
            name: 'House',
            bannerKind: I.qC.HOUSE,
            icon: m.TreehouseIcon
        },
        {
            name: 'Pulsar',
            bannerKind: I.qC.HEIGHTMAP,
            icon: m.WaveformIcon
        },
        {
            name: 'Mesh',
            bannerKind: I.qC.MESH,
            icon: m.GridVerticalIcon
        },
        {
            name: 'Spatter',
            bannerKind: I.qC.SPATTER,
            icon: m.PaintbrushThickIcon
        }
    ],
    b = (e) => {
        let { name: t, primaryColor: n, secondaryColor: r, isCustom: l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l
                    ? (0, i.jsx)(m.PaintPaletteIcon, { size: 'md' })
                    : (0, i.jsx)('div', {
                          className: _.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(n, ' 50% )') }
                      }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: _.noWrap,
                    children: t
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { handleUpdate: n, progress: l, guildId: a } = e,
        { banner: E, brandPrimaryColor: S, brandSecondaryColor: R, badgePrimaryColor: y, badgeSecondaryColor: A } = l,
        Z = (0, u.e7)([g.Z], () => g.Z.getGuild(a)),
        L = null !== (t = (0, u.e7)([h.Z], () => h.Z.getMemberCount(a))) && void 0 !== t ? t : 0,
        D = r.useMemo(
            () => ({
                primary: null != S ? S : I.OH,
                secondary: null != R ? R : I.K_
            }),
            [S, R]
        ),
        O = r.useMemo(() => {
            if (S === y && R === A) return 1;
            for (let e = 0; e < I.ym.length; e++) if (I.ym[e].primary === l.brandPrimaryColor && I.ym[e].secondary === l.brandSecondaryColor) return 2 + e;
            return 0;
        }, [S, R, y, A, l.brandPrimaryColor, l.brandSecondaryColor]),
        [M, P] = r.useState(!1),
        k = 0 === O,
        w = 1 === O,
        B = r.useMemo(() => {
            if (k) return D;
            if (w)
                return {
                    primary: null != y ? y : v.Nh,
                    secondary: null != A ? A : v.vY
                };
            {
                let e = I.ym[O - 2];
                return {
                    primary: e.primary,
                    secondary: e.secondary
                };
            }
        }, [D, w, k, y, A, O]),
        U = r.useCallback(() => {
            let e = j[Math.floor(Math.random() * j.length)].bannerKind,
                t = s().random().hex();
            n({
                banner: e,
                brandPrimaryColor: t,
                brandSecondaryColor: s().random().hex()
            });
        }, [n]);
    r.useEffect(() => {
        n({
            banner: E,
            brandPrimaryColor: B.primary,
            brandSecondaryColor: B.secondary
        });
    }, [n, E, B.primary, B.secondary]);
    let G = r.useMemo(() => {
        var e, t, n;
        return {
            ...l,
            id: a,
            name: null !== (e = null == Z ? void 0 : Z.name) && void 0 !== e ? e : '',
            icon: null == Z ? void 0 : Z.icon,
            memberCount: L,
            games: Array.from(l.gameApplicationIds),
            traits: Array.from(l.interests),
            banner: E,
            badge: {
                badgeKind: l.badgeKind,
                primaryColor: null != y ? y : I.OH,
                secondaryColor: null != A ? A : I.K_
            },
            branding: {
                primaryColor: null !== (t = B.primary) && void 0 !== t ? t : I.OH,
                secondaryColor: null !== (n = B.secondary) && void 0 !== n ? n : I.K_
            },
            gameActivity: Array.from(l.gameApplicationIds).reduce(
                (e, t) => (
                    (e[t] = {
                        level: c.m.HIGH,
                        score: 0
                    }),
                    e
                ),
                {}
            )
        };
    }, [l, a, Z, L, E, y, A, B]);
    return (0, i.jsxs)('div', {
        className: T.slideContent,
        children: [
            (0, i.jsx)(m.Heading, {
                variant: 'heading-xxl/medium',
                className: T.title,
                children: N.intl.string(N.t.kPwMOz)
            }),
            (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.subtitle,
                children: N.intl.string(N.t['E+KhDA'])
            }),
            (0, i.jsxs)('div', {
                className: _.content,
                children: [
                    (0, i.jsx)('div', {
                        className: _.leftColumn,
                        children: (0, i.jsxs)('div', {
                            className: _.colorsContainer,
                            children: [
                                (0, i.jsx)(C.Z, { onClick: U }),
                                (0, i.jsxs)('div', {
                                    className: _.colorPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: N.intl.string(N.t.Ul1tIS)
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: _.colorPickerGrid,
                                            children: [
                                                (0, i.jsx)(f.Z, {
                                                    showSecondaryColor: !0,
                                                    palette: D,
                                                    onPrimaryColorChange: (e) => {
                                                        n({ brandPrimaryColor: (0, d.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        n({ brandSecondaryColor: (0, d.Rf)(e) });
                                                    },
                                                    shouldShow: M,
                                                    onRequestClose: () => P(!1),
                                                    children: (e) =>
                                                        (0, i.jsx)(m.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                P((e) => !e);
                                                            },
                                                            className: o()(_.brandItemContainer, { [_.brandItemContainerSelected]: 0 === O }),
                                                            children: (0, i.jsx)(b, {
                                                                name: N.intl.string(N.t.AemVoa),
                                                                isCustom: !0
                                                            })
                                                        })
                                                }),
                                                (0, i.jsx)(m.Clickable, {
                                                    onClick: () => {
                                                        n({
                                                            brandPrimaryColor: null != y ? y : I.OH,
                                                            brandSecondaryColor: null != A ? A : I.K_
                                                        });
                                                    },
                                                    className: o()(_.brandItemContainer, { [_.brandItemContainerSelected]: 1 === O }),
                                                    children: (0, i.jsx)(b, {
                                                        name: N.intl.string(N.t['1Pvr/v']),
                                                        primaryColor: y,
                                                        secondaryColor: A
                                                    })
                                                }),
                                                I.ym.map((e, t) =>
                                                    (0, i.jsx)(
                                                        m.Clickable,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                n({
                                                                    brandPrimaryColor: I.ym[t].primary,
                                                                    brandSecondaryColor: I.ym[t].secondary
                                                                });
                                                            },
                                                            className: o()(_.brandItemContainer, { [_.brandItemContainerSelected]: O === t + 2 }),
                                                            children: (0, i.jsx)(b, {
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
                                (0, i.jsxs)('div', {
                                    className: _.bannerPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: N.intl.string(N.t.nH6S2d)
                                        }),
                                        (0, i.jsx)('div', {
                                            className: _.bannerPickerGrid,
                                            children: j.map((e, t) =>
                                                (0, i.jsxs)(
                                                    m.Clickable,
                                                    {
                                                        'aria-label': e.name,
                                                        onClick: () => {
                                                            n({ banner: e.bannerKind });
                                                        },
                                                        className: o()(_.bannerItemContainer, { [_.bannerItemContainerSelected]: e.bannerKind === E }),
                                                        children: [
                                                            (0, i.jsx)(e.icon, { size: 'md' }),
                                                            (0, i.jsx)(m.Text, {
                                                                variant: 'text-sm/medium',
                                                                color: 'interactive-normal',
                                                                className: _.noWrap,
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
                    (0, i.jsx)('div', {
                        className: _.clanCardWrapper,
                        children: (0, i.jsx)(x.xV, {
                            bannerComponent: (0, i.jsx)(p.Z, {
                                banner: E,
                                primaryTintColor: B.primary,
                                secondaryTintColor: B.secondary,
                                className: _.clanBannerPreview
                            }),
                            clan: G
                        })
                    })
                ]
            })
        ]
    });
};
