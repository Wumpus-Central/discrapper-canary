n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(688619),
    s = n.n(l),
    a = n(120356),
    o = n.n(a),
    c = n(866442),
    d = n(481060),
    u = n(550271),
    m = n(688298),
    h = n(995119),
    g = n(116175),
    x = n(308083),
    p = n(388032),
    _ = n(853408),
    C = n(165809);
let f = [g.ZD.SWORD, g.ZD.WATER_DROP, g.ZD.SKULL, g.ZD.TOADSTOOL, g.ZD.MOON, g.ZD.LIGHTNING, g.ZD.LEAF, g.ZD.HEART, g.ZD.FIRE, g.ZD.COMPASS, g.ZD.CROSSHAIRS, g.ZD.FLOWER, g.ZD.FORCE, g.ZD.GEM, g.ZD.LAVA, g.ZD.PSYCHIC, g.ZD.SMOKE, g.ZD.SNOW, g.ZD.SOUND, g.ZD.SUN, g.ZD.WIND],
    v = (e) => {
        let { handleUpdate: t, badge: n, primaryColor: l, secondaryColor: a, tag: v, error: N, furthestStep: j, inSettings: I } = e,
            E = r.useMemo(() => {
                let e = (0, g.yf)();
                return {
                    primary: null != l ? l : e.primary,
                    secondary: null != a ? a : e.secondary
                };
            }, [l, a]);
        r.useEffect(() => {
            (null == l || null == a) &&
                t({
                    badgePrimaryColor: E.primary,
                    badgeSecondaryColor: E.secondary
                });
        }, [E.primary, E.secondary, t, l, a]);
        let b = r.useMemo(() => {
                for (let e = 0; e < g.sg.length; e++) if (g.sg[e].primary === E.primary && g.sg[e].secondary === E.secondary) return 1 + e;
                return 0;
            }, [E.primary, E.secondary]),
            [T, S] = r.useState(!1),
            R = r.useCallback(() => {
                let e = f[Math.floor(Math.random() * f.length)];
                t({
                    badgeKind: e,
                    badgePrimaryColor: s().random().hex(),
                    badgeSecondaryColor: s().random().hex()
                });
            }, [t]);
        return (
            r.useEffect(() => {
                j !== x.Wy.CUSTOMIZE_TAG_BADGE ||
                    I ||
                    t({
                        brandPrimaryColor: E.primary,
                        brandSecondaryColor: E.secondary
                    });
            }, [t, E.primary, E.secondary, j, l, a, I]),
            (0, i.jsxs)('div', {
                className: C.slideContent,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xxl/medium',
                        className: C.title,
                        children: p.intl.string(p.t.ZcHHvr)
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: C.subtitle,
                        children: p.intl.string(p.t.Tr399P)
                    }),
                    (0, i.jsx)(h.Z, { onClick: R }),
                    (0, i.jsxs)('div', {
                        className: _.container,
                        children: [
                            (0, i.jsxs)('div', {
                                className: _.badgesContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: _.pickerContainer,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: p.intl.string(p.t.eyPefn)
                                            }),
                                            (0, i.jsx)('div', {
                                                className: _.pickerGrid,
                                                children: f.map((e) =>
                                                    (0, i.jsx)(
                                                        d.P3F,
                                                        {
                                                            onClick: () => t({ badgeKind: e }),
                                                            className: o()(_.badgeAssetContainer, { [_.badgeAssetContainerSelected]: e === n }),
                                                            children: (0, i.jsx)(u.A, {
                                                                badge: e,
                                                                width: 32,
                                                                height: 32
                                                            })
                                                        },
                                                        ''.concat(e)
                                                    )
                                                )
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: _.pickerContainer,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: p.intl.string(p.t['93wr6e'])
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: _.pickerGrid,
                                                children: [
                                                    (0, i.jsx)(m.Z, {
                                                        showSecondaryColor: g.ME[n] >= 2,
                                                        palette: E,
                                                        onPrimaryColorChange: (e) => {
                                                            t({ badgePrimaryColor: (0, c.Rf)(e) });
                                                        },
                                                        onSecondaryColorChange: (e) => {
                                                            t({ badgeSecondaryColor: (0, c.Rf)(e) });
                                                        },
                                                        shouldShow: T,
                                                        onRequestClose: () => S(!1),
                                                        children: (e) =>
                                                            (0, i.jsx)(d.P3F, {
                                                                ...e,
                                                                onClick: () => {
                                                                    S((e) => !e);
                                                                },
                                                                className: o()(_.badgeAssetContainer, { [_.badgeAssetContainerSelected]: 0 === b }),
                                                                children: (0, i.jsx)(d.V3v, {
                                                                    size: 'custom',
                                                                    width: 20,
                                                                    height: 20
                                                                })
                                                            })
                                                    }),
                                                    g.sg.map((e, r) =>
                                                        (0, i.jsx)(
                                                            d.P3F,
                                                            {
                                                                onClick: () => {
                                                                    t({
                                                                        badgePrimaryColor: g.sg[r].primary,
                                                                        badgeSecondaryColor: g.sg[r].secondary
                                                                    });
                                                                },
                                                                className: o()(_.badgeAssetContainer, { [_.badgeAssetContainerSelected]: r + 1 === b }),
                                                                children: (0, i.jsx)(u.A, {
                                                                    badge: n,
                                                                    width: 32,
                                                                    height: 32,
                                                                    primaryTintColor: e.primary,
                                                                    secondaryTintColor: e.secondary
                                                                })
                                                            },
                                                            ''.concat(e.primary, ':').concat(e.secondary)
                                                        )
                                                    )
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: _.tagContainer,
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        children: p.intl.string(p.t['3eZP8/'])
                                    }),
                                    null != N &&
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'status-danger',
                                            className: C.errorText,
                                            children: N
                                        }),
                                    (0, i.jsx)(d.oil, {
                                        className: _.tagInputWrapper,
                                        inputClassName: _.tagInput,
                                        value: null != v ? v : '',
                                        onChange: (e) => t({ tag: e }),
                                        maxLength: x.cG,
                                        placeholder: p.intl.string(p.t['0V0ZFx']),
                                        autoFocus: !0,
                                        prefixElement: (0, i.jsx)(u.A, {
                                            badge: n,
                                            width: 40,
                                            height: 40,
                                            primaryTintColor: E.primary,
                                            secondaryTintColor: E.secondary
                                        })
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        className: _.tagValidationText,
                                        children: p.intl.string(p.t.lGtFwM)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    };
