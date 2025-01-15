n(47120);
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
    f = n(650116),
    C = n(866262);
let v = [g.ZD.SWORD, g.ZD.WATER_DROP, g.ZD.SKULL, g.ZD.TOADSTOOL, g.ZD.MOON, g.ZD.LIGHTNING, g.ZD.LEAF, g.ZD.HEART, g.ZD.FIRE, g.ZD.COMPASS, g.ZD.CROSSHAIRS, g.ZD.FLOWER, g.ZD.FORCE, g.ZD.GEM, g.ZD.LAVA, g.ZD.PSYCHIC, g.ZD.SMOKE, g.ZD.SNOW, g.ZD.SOUND, g.ZD.SUN, g.ZD.WIND];
t.Z = (e) => {
    let { handleUpdate: t, badge: n, primaryColor: l, secondaryColor: a, tag: I, error: N, furthestStep: _, inSettings: T } = e,
        j = r.useMemo(() => {
            let e = (0, g.yf)();
            return {
                primary: null != l ? l : e.primary,
                secondary: null != a ? a : e.secondary
            };
        }, [l, a]);
    r.useEffect(() => {
        (null == l || null == a) &&
            t({
                badgePrimaryColor: j.primary,
                badgeSecondaryColor: j.secondary
            });
    }, [j.primary, j.secondary, t, l, a]);
    let b = r.useMemo(() => {
            for (let e = 0; e < g.sg.length; e++) if (g.sg[e].primary === j.primary && g.sg[e].secondary === j.secondary) return 1 + e;
            return 0;
        }, [j.primary, j.secondary]),
        [E, S] = r.useState(!1),
        R = r.useCallback(() => {
            let e = v[Math.floor(Math.random() * v.length)],
                n = s().random().hex();
            t({
                badgeKind: e,
                badgePrimaryColor: n,
                badgeSecondaryColor: s().random().hex()
            });
        }, [t]);
    return (
        r.useEffect(() => {
            _ === x.Wy.CUSTOMIZE_TAG_BADGE &&
                !T &&
                t({
                    brandPrimaryColor: j.primary,
                    brandSecondaryColor: j.secondary
                });
        }, [t, j.primary, j.secondary, _, l, a, T]),
        (0, i.jsxs)('div', {
            className: C.slideContent,
            children: [
                (0, i.jsx)(d.Heading, {
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
                    className: f.container,
                    children: [
                        (0, i.jsxs)('div', {
                            className: f.badgesContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: f.pickerContainer,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t.eyPefn)
                                        }),
                                        (0, i.jsx)('div', {
                                            className: f.pickerGrid,
                                            children: v.map((e) =>
                                                (0, i.jsx)(
                                                    d.Clickable,
                                                    {
                                                        onClick: () => t({ badgeKind: e }),
                                                        className: o()(f.badgeAssetContainer, { [f.badgeAssetContainerSelected]: e === n }),
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
                                    className: f.pickerContainer,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-xs/semibold',
                                            color: 'text-muted',
                                            children: p.intl.string(p.t['93wr6e'])
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: f.pickerGrid,
                                            children: [
                                                (0, i.jsx)(m.Z, {
                                                    showSecondaryColor: g.ME[n] >= 2,
                                                    palette: j,
                                                    onPrimaryColorChange: (e) => {
                                                        t({ badgePrimaryColor: (0, c.Rf)(e) });
                                                    },
                                                    onSecondaryColorChange: (e) => {
                                                        t({ badgeSecondaryColor: (0, c.Rf)(e) });
                                                    },
                                                    shouldShow: E,
                                                    onRequestClose: () => S(!1),
                                                    children: (e) =>
                                                        (0, i.jsx)(d.Clickable, {
                                                            ...e,
                                                            onClick: () => {
                                                                S((e) => !e);
                                                            },
                                                            className: o()(f.badgeAssetContainer, { [f.badgeAssetContainerSelected]: 0 === b }),
                                                            children: (0, i.jsx)(d.PaintPaletteIcon, {
                                                                size: 'custom',
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        })
                                                }),
                                                g.sg.map((e, r) =>
                                                    (0, i.jsx)(
                                                        d.Clickable,
                                                        {
                                                            onClick: () => {
                                                                t({
                                                                    badgePrimaryColor: g.sg[r].primary,
                                                                    badgeSecondaryColor: g.sg[r].secondary
                                                                });
                                                            },
                                                            className: o()(f.badgeAssetContainer, { [f.badgeAssetContainerSelected]: r + 1 === b }),
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
                            className: f.tagContainer,
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
                                (0, i.jsx)(d.TextInput, {
                                    className: f.tagInputWrapper,
                                    inputClassName: f.tagInput,
                                    value: null != I ? I : '',
                                    onChange: (e) => t({ tag: e }),
                                    maxLength: x.cG,
                                    placeholder: p.intl.string(p.t['0V0ZFx']),
                                    autoFocus: !0,
                                    prefixElement: (0, i.jsx)(u.A, {
                                        badge: n,
                                        width: 40,
                                        height: 40,
                                        primaryTintColor: j.primary,
                                        secondaryTintColor: j.secondary
                                    })
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    className: f.tagValidationText,
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
