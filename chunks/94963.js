n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(688619),
    a = n.n(l),
    s = n(120356),
    o = n.n(s),
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
    _ = n(308083),
    I = n(388032),
    N = n(463297),
    T = n(240938);
let j = [
        {
            name: 'Night Sky',
            bannerKind: _.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon
        },
        {
            name: 'Castle',
            bannerKind: _.qC.CASTLE,
            icon: m.CrownIcon
        },
        {
            name: 'World Map',
            bannerKind: _.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon
        },
        {
            name: 'Sea Foam',
            bannerKind: _.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon
        },
        {
            name: 'Warp',
            bannerKind: _.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon
        },
        {
            name: 'House',
            bannerKind: _.qC.HOUSE,
            icon: m.TreehouseIcon
        },
        {
            name: 'Pulsar',
            bannerKind: _.qC.HEIGHTMAP,
            icon: m.WaveformIcon
        },
        {
            name: 'Mesh',
            bannerKind: _.qC.MESH,
            icon: m.GridVerticalIcon
        },
        {
            name: 'Spatter',
            bannerKind: _.qC.SPATTER,
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
                          className: N.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(n, ' 50% )') }
                      }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: N.noWrap,
                    children: t
                })
            ]
        });
    };
t.Z = (e) => {
    var t;
    let { handleUpdate: n, progress: l, guildId: s } = e,
        { banner: S, brandPrimaryColor: E, brandSecondaryColor: R, badgePrimaryColor: y, badgeSecondaryColor: A } = l,
        Z = (0, u.e7)([g.Z], () => g.Z.getGuild(s)),
        L = null !== (t = (0, u.e7)([h.Z], () => h.Z.getMemberCount(s))) && void 0 !== t ? t : 0,
        D = r.useMemo(
            () => ({
                primary: null != E ? E : _.OH,
                secondary: null != R ? R : _.K_
            }),
            [E, R]
        ),
        O = r.useMemo(() => {
            if (E === y && R === A) return 1;
            for (let e = 0; e < _.ym.length; e++) if (_.ym[e].primary === l.brandPrimaryColor && _.ym[e].secondary === l.brandSecondaryColor) return 2 + e;
            return 0;
        }, [E, R, y, A, l.brandPrimaryColor, l.brandSecondaryColor]),
        [k, P] = r.useState(!1),
        M = 0 === O,
        w = 1 === O,
        B = r.useMemo(() => {
            if (M) return D;
            if (w)
                return {
                    primary: null != y ? y : v.Nh,
                    secondary: null != A ? A : v.vY
                };
            {
                let e = _.ym[O - 2];
                return {
                    primary: e.primary,
                    secondary: e.secondary
                };
            }
        }, [D, w, M, y, A, O]),
        U = r.useCallback(() => {
            let e = j[Math.floor(Math.random() * j.length)].bannerKind,
                t = a().random().hex();
            n({
                banner: e,
                brandPrimaryColor: t,
                brandSecondaryColor: a().random().hex()
            });
        }, [n]);
    r.useEffect(() => {
        n({
            banner: S,
            brandPrimaryColor: B.primary,
            brandSecondaryColor: B.secondary
        });
    }, [n, S, B.primary, B.secondary]);
    let G = r.useMemo(() => {
        var e, t, n;
        return {
            ...l,
            id: s,
            name: null !== (e = null == Z ? void 0 : Z.name) && void 0 !== e ? e : '',
            icon: null == Z ? void 0 : Z.icon,
            memberCount: L,
            games: Array.from(l.gameApplicationIds),
            traits: Array.from(l.interests),
            banner: S,
            badge: {
                badgeKind: l.badgeKind,
                primaryColor: null != y ? y : _.OH,
                secondaryColor: null != A ? A : _.K_
            },
            branding: {
                primaryColor: null !== (t = B.primary) && void 0 !== t ? t : _.OH,
                secondaryColor: null !== (n = B.secondary) && void 0 !== n ? n : _.K_
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
    }, [l, s, Z, L, S, y, A, B]);
    return (0, i.jsxs)('div', {
        className: T.slideContent,
        children: [
            (0, i.jsx)(m.Heading, {
                variant: 'heading-xxl/medium',
                className: T.title,
                children: I.intl.string(I.t.kPwMOz)
            }),
            (0, i.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: T.subtitle,
                children: I.intl.string(I.t['E+KhDA'])
            }),
            (0, i.jsxs)('div', {
                className: N.content,
                children: [
                    (0, i.jsx)('div', {
                        className: N.leftColumn,
                        children: (0, i.jsxs)('div', {
                            className: N.colorsContainer,
                            children: [
                                (0, i.jsx)(C.Z, { onClick: U }),
                                (0, i.jsxs)('div', {
                                    className: N.colorPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t.Ul1tIS)
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: N.colorPickerGrid,
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
                                                    shouldShow: k,
                                                    onRequestClose: () => P(!1),
                                                    children: (e) =>
                                                        (0, i.jsx)(m.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                P((e) => !e);
                                                            },
                                                            className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: 0 === O }),
                                                            children: (0, i.jsx)(b, {
                                                                name: I.intl.string(I.t.AemVoa),
                                                                isCustom: !0
                                                            })
                                                        })
                                                }),
                                                (0, i.jsx)(m.Clickable, {
                                                    onClick: () => {
                                                        n({
                                                            brandPrimaryColor: null != y ? y : _.OH,
                                                            brandSecondaryColor: null != A ? A : _.K_
                                                        });
                                                    },
                                                    className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: 1 === O }),
                                                    children: (0, i.jsx)(b, {
                                                        name: I.intl.string(I.t['1Pvr/v']),
                                                        primaryColor: y,
                                                        secondaryColor: A
                                                    })
                                                }),
                                                _.ym.map((e, t) =>
                                                    (0, i.jsx)(
                                                        m.Clickable,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                n({
                                                                    brandPrimaryColor: _.ym[t].primary,
                                                                    brandSecondaryColor: _.ym[t].secondary
                                                                });
                                                            },
                                                            className: o()(N.brandItemContainer, { [N.brandItemContainerSelected]: O === t + 2 }),
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
                                    className: N.bannerPickerContainer,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t.nH6S2d)
                                        }),
                                        (0, i.jsx)('div', {
                                            className: N.bannerPickerGrid,
                                            children: j.map((e, t) =>
                                                (0, i.jsxs)(
                                                    m.Clickable,
                                                    {
                                                        'aria-label': e.name,
                                                        onClick: () => {
                                                            n({ banner: e.bannerKind });
                                                        },
                                                        className: o()(N.bannerItemContainer, { [N.bannerItemContainerSelected]: e.bannerKind === S }),
                                                        children: [
                                                            (0, i.jsx)(e.icon, { size: 'md' }),
                                                            (0, i.jsx)(m.Text, {
                                                                variant: 'text-sm/medium',
                                                                color: 'interactive-normal',
                                                                className: N.noWrap,
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
                        className: N.clanCardWrapper,
                        children: (0, i.jsx)(x.xV, {
                            bannerComponent: (0, i.jsx)(p.Z, {
                                banner: S,
                                primaryTintColor: B.primary,
                                secondaryTintColor: B.secondary,
                                className: N.clanBannerPreview
                            }),
                            clan: G
                        })
                    })
                ]
            })
        ]
    });
};
