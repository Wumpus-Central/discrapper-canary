n.d(t, { Z: () => T }), n(47120), n(724458);
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
    _ = n(688298),
    C = n(995119),
    f = n(116175),
    v = n(308083),
    N = n(388032),
    j = n(606372),
    I = n(212617);
let E = [
        {
            name: 'Night Sky',
            bannerKind: v.qC.NIGHT_SKY,
            icon: m.Z6G
        },
        {
            name: 'Castle',
            bannerKind: v.qC.CASTLE,
            icon: m.CEn
        },
        {
            name: 'World Map',
            bannerKind: v.qC.WORLD_MAP,
            icon: m.enf
        },
        {
            name: 'Sea Foam',
            bannerKind: v.qC.SEA_FOAM,
            icon: m.Vkn
        },
        {
            name: 'Warp',
            bannerKind: v.qC.WARP_TUNNEL,
            icon: m.yMH
        },
        {
            name: 'House',
            bannerKind: v.qC.HOUSE,
            icon: m.WXD
        },
        {
            name: 'Pulsar',
            bannerKind: v.qC.HEIGHTMAP,
            icon: m.GHO
        },
        {
            name: 'Mesh',
            bannerKind: v.qC.MESH,
            icon: m.SVt
        },
        {
            name: 'Spatter',
            bannerKind: v.qC.SPATTER,
            icon: m.XKY
        }
    ],
    b = (e) => {
        let { name: t, primaryColor: n, secondaryColor: r, isCustom: l } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l
                    ? (0, i.jsx)(m.V3v, { size: 'md' })
                    : (0, i.jsx)('div', {
                          className: j.brandItemCircle,
                          style: { background: 'linear-gradient(-45deg, '.concat(r, ' 50%, ').concat(n, ' 50% )') }
                      }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'interactive-normal',
                    className: j.noWrap,
                    children: t
                })
            ]
        });
    },
    T = (e) => {
        var t;
        let { handleUpdate: n, progress: l, guildId: a } = e,
            { banner: T, brandPrimaryColor: S, brandSecondaryColor: R, badgePrimaryColor: Z, badgeSecondaryColor: y } = l,
            A = (0, u.e7)([g.Z], () => g.Z.getGuild(a)),
            L = null !== (t = (0, u.e7)([h.Z], () => h.Z.getMemberCount(a))) && void 0 !== t ? t : 0,
            D = r.useMemo(
                () => ({
                    primary: null != S ? S : v.OH,
                    secondary: null != R ? R : v.K_
                }),
                [S, R]
            ),
            k = r.useMemo(() => {
                if (S === Z && R === y) return 1;
                for (let e = 0; e < v.ym.length; e++) if (v.ym[e].primary === l.brandPrimaryColor && v.ym[e].secondary === l.brandSecondaryColor) return 2 + e;
                return 0;
            }, [S, R, Z, y, l.brandPrimaryColor, l.brandSecondaryColor]),
            [O, P] = r.useState(!1),
            w = 0 === k,
            M = 1 === k,
            U = r.useMemo(() => {
                if (w) return D;
                if (M)
                    return {
                        primary: null != Z ? Z : f.Nh,
                        secondary: null != y ? y : f.vY
                    };
                {
                    let e = v.ym[k - 2];
                    return {
                        primary: e.primary,
                        secondary: e.secondary
                    };
                }
            }, [D, M, w, Z, y, k]),
            G = r.useCallback(() => {
                let e = E[Math.floor(Math.random() * E.length)].bannerKind;
                n({
                    banner: e,
                    brandPrimaryColor: s().random().hex(),
                    brandSecondaryColor: s().random().hex()
                });
            }, [n]);
        r.useEffect(() => {
            n({
                banner: T,
                brandPrimaryColor: U.primary,
                brandSecondaryColor: U.secondary
            });
        }, [n, T, U.primary, U.secondary]);
        let B = r.useMemo(() => {
            var e, t, n;
            return {
                ...l,
                id: a,
                name: null !== (e = null == A ? void 0 : A.name) && void 0 !== e ? e : '',
                icon: null == A ? void 0 : A.icon,
                memberCount: L,
                games: Array.from(l.gameApplicationIds),
                traits: Array.from(l.interests),
                banner: T,
                badge: {
                    badgeKind: l.badgeKind,
                    primaryColor: null != Z ? Z : v.OH,
                    secondaryColor: null != y ? y : v.K_
                },
                branding: {
                    primaryColor: null !== (t = U.primary) && void 0 !== t ? t : v.OH,
                    secondaryColor: null !== (n = U.secondary) && void 0 !== n ? n : v.K_
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
        }, [l, a, A, L, T, Z, y, U]);
        return (0, i.jsxs)('div', {
            className: I.slideContent,
            children: [
                (0, i.jsx)(m.X6q, {
                    variant: 'heading-xxl/medium',
                    className: I.title,
                    children: N.intl.string(N.t.kPwMOz)
                }),
                (0, i.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    className: I.subtitle,
                    children: N.intl.string(N.t['E+KhDA'])
                }),
                (0, i.jsxs)('div', {
                    className: j.content,
                    children: [
                        (0, i.jsx)('div', {
                            className: j.leftColumn,
                            children: (0, i.jsxs)('div', {
                                className: j.colorsContainer,
                                children: [
                                    (0, i.jsx)(C.Z, { onClick: G }),
                                    (0, i.jsxs)('div', {
                                        className: j.colorPickerContainer,
                                        children: [
                                            (0, i.jsx)(m.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: N.intl.string(N.t.Ul1tIS)
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: j.colorPickerGrid,
                                                children: [
                                                    (0, i.jsx)(_.Z, {
                                                        showSecondaryColor: !0,
                                                        palette: D,
                                                        onPrimaryColorChange: (e) => {
                                                            n({ brandPrimaryColor: (0, d.Rf)(e) });
                                                        },
                                                        onSecondaryColorChange: (e) => {
                                                            n({ brandSecondaryColor: (0, d.Rf)(e) });
                                                        },
                                                        shouldShow: O,
                                                        onRequestClose: () => P(!1),
                                                        children: (e) =>
                                                            (0, i.jsx)(m.P3F, {
                                                                ...e,
                                                                onClick: () => {
                                                                    P((e) => !e);
                                                                },
                                                                className: o()(j.brandItemContainer, { [j.brandItemContainerSelected]: 0 === k }),
                                                                children: (0, i.jsx)(b, {
                                                                    name: N.intl.string(N.t.AemVoa),
                                                                    isCustom: !0
                                                                })
                                                            })
                                                    }),
                                                    (0, i.jsx)(m.P3F, {
                                                        onClick: () => {
                                                            n({
                                                                brandPrimaryColor: null != Z ? Z : v.OH,
                                                                brandSecondaryColor: null != y ? y : v.K_
                                                            });
                                                        },
                                                        className: o()(j.brandItemContainer, { [j.brandItemContainerSelected]: 1 === k }),
                                                        children: (0, i.jsx)(b, {
                                                            name: N.intl.string(N.t['1Pvr/v']),
                                                            primaryColor: Z,
                                                            secondaryColor: y
                                                        })
                                                    }),
                                                    v.ym.map((e, t) =>
                                                        (0, i.jsx)(
                                                            m.P3F,
                                                            {
                                                                'aria-label': e.name,
                                                                onClick: () => {
                                                                    n({
                                                                        brandPrimaryColor: v.ym[t].primary,
                                                                        brandSecondaryColor: v.ym[t].secondary
                                                                    });
                                                                },
                                                                className: o()(j.brandItemContainer, { [j.brandItemContainerSelected]: k === t + 2 }),
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
                                        className: j.bannerPickerContainer,
                                        children: [
                                            (0, i.jsx)(m.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: N.intl.string(N.t.nH6S2d)
                                            }),
                                            (0, i.jsx)('div', {
                                                className: j.bannerPickerGrid,
                                                children: E.map((e, t) =>
                                                    (0, i.jsxs)(
                                                        m.P3F,
                                                        {
                                                            'aria-label': e.name,
                                                            onClick: () => {
                                                                n({ banner: e.bannerKind });
                                                            },
                                                            className: o()(j.bannerItemContainer, { [j.bannerItemContainerSelected]: e.bannerKind === T }),
                                                            children: [
                                                                (0, i.jsx)(e.icon, { size: 'md' }),
                                                                (0, i.jsx)(m.Text, {
                                                                    variant: 'text-sm/medium',
                                                                    color: 'interactive-normal',
                                                                    className: j.noWrap,
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
                            className: j.clanCardWrapper,
                            children: (0, i.jsx)(x.x, {
                                bannerComponent: (0, i.jsx)(p.Z, {
                                    banner: T,
                                    primaryTintColor: U.primary,
                                    secondaryTintColor: U.secondary,
                                    className: j.clanBannerPreview
                                }),
                                clan: B
                            })
                        })
                    ]
                })
            ]
        });
    };
