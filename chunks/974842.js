n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(688619),
    a = n.n(s),
    l = n(120356),
    o = n.n(l),
    c = n(866442),
    d = n(481060),
    u = n(550271),
    m = n(688298),
    g = n(995119),
    p = n(116175),
    h = n(308083),
    f = n(388032),
    b = n(420003),
    x = n(130116);
let j = [p.ZD.SWORD, p.ZD.WATER_DROP, p.ZD.SKULL, p.ZD.TOADSTOOL, p.ZD.MOON, p.ZD.LIGHTNING, p.ZD.LEAF, p.ZD.HEART, p.ZD.FIRE, p.ZD.COMPASS, p.ZD.CROSSHAIRS, p.ZD.FLOWER, p.ZD.FORCE, p.ZD.GEM, p.ZD.LAVA, p.ZD.PSYCHIC, p.ZD.SMOKE, p.ZD.SNOW, p.ZD.SOUND, p.ZD.SUN, p.ZD.WIND],
    N = (e) => {
        let { handleUpdate: t, badge: n, primaryColor: s, secondaryColor: l, tag: N, error: _, furthestStep: v, inSettings: C } = e,
            O = i.useMemo(() => {
                let e = (0, p.yf)();
                return {
                    primary: null != s ? s : e.primary,
                    secondary: null != l ? l : e.secondary
                };
            }, [s, l]);
        i.useEffect(() => {
            (null == s || null == l) &&
                t({
                    badgePrimaryColor: O.primary,
                    badgeSecondaryColor: O.secondary
                });
        }, [O.primary, O.secondary, t, s, l]);
        let y = i.useMemo(() => {
                for (let e = 0; e < p.sg.length; e++) if (p.sg[e].primary === O.primary && p.sg[e].secondary === O.secondary) return 1 + e;
                return 0;
            }, [O.primary, O.secondary]),
            [I, E] = i.useState(!1),
            S = i.useCallback(() => {
                let e = j[Math.floor(Math.random() * j.length)];
                t({
                    badgeKind: e,
                    badgePrimaryColor: a().random().hex(),
                    badgeSecondaryColor: a().random().hex()
                });
            }, [t]);
        return (
            i.useEffect(() => {
                v !== h.Wy.CUSTOMIZE_TAG_BADGE ||
                    C ||
                    t({
                        brandPrimaryColor: O.primary,
                        brandSecondaryColor: O.secondary
                    });
            }, [t, O.primary, O.secondary, v, s, l, C]),
            (0, r.jsxs)('div', {
                className: x.slideContent,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-xxl/medium',
                        className: x.title,
                        children: f.NW.string(f.t.ZcHHvr)
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: x.subtitle,
                        children: f.NW.string(f.t.Tr399P)
                    }),
                    (0, r.jsx)(g.Z, { onClick: S }),
                    (0, r.jsxs)('div', {
                        className: b.container,
                        children: [
                            (0, r.jsxs)('div', {
                                className: b.badgesContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: b.pickerContainer,
                                        children: [
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: f.NW.string(f.t.eyPefn)
                                            }),
                                            (0, r.jsx)('div', {
                                                className: b.pickerGrid,
                                                children: j.map((e) =>
                                                    (0, r.jsx)(
                                                        d.P3F,
                                                        {
                                                            onClick: () => t({ badgeKind: e }),
                                                            className: o()(b.badgeAssetContainer, { [b.badgeAssetContainerSelected]: e === n }),
                                                            children: (0, r.jsx)(u.A, {
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
                                    (0, r.jsxs)('div', {
                                        className: b.pickerContainer,
                                        children: [
                                            (0, r.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: f.NW.string(f.t['93wr6e'])
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: b.pickerGrid,
                                                children: [
                                                    (0, r.jsx)(m.Z, {
                                                        showSecondaryColor: p.ME[n] >= 2,
                                                        palette: O,
                                                        onPrimaryColorChange: (e) => {
                                                            t({ badgePrimaryColor: (0, c.Rf)(e) });
                                                        },
                                                        onSecondaryColorChange: (e) => {
                                                            t({ badgeSecondaryColor: (0, c.Rf)(e) });
                                                        },
                                                        shouldShow: I,
                                                        onRequestClose: () => E(!1),
                                                        children: (e) => {
                                                            var t, n;
                                                            return (0, r.jsx)(
                                                                d.P3F,
                                                                ((t = (function (e) {
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
                                                                })({}, e)),
                                                                (n = n =
                                                                    {
                                                                        onClick: () => {
                                                                            E((e) => !e);
                                                                        },
                                                                        className: o()(b.badgeAssetContainer, { [b.badgeAssetContainerSelected]: 0 === y }),
                                                                        children: (0, r.jsx)(d.V3v, {
                                                                            size: 'custom',
                                                                            width: 20,
                                                                            height: 20
                                                                        })
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                    : (function (e, t) {
                                                                          var n = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var r = Object.getOwnPropertySymbols(e);
                                                                              n.push.apply(n, r);
                                                                          }
                                                                          return n;
                                                                      })(Object(n)).forEach(function (e) {
                                                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                      }),
                                                                t)
                                                            );
                                                        }
                                                    }),
                                                    p.sg.map((e, i) =>
                                                        (0, r.jsx)(
                                                            d.P3F,
                                                            {
                                                                onClick: () => {
                                                                    t({
                                                                        badgePrimaryColor: p.sg[i].primary,
                                                                        badgeSecondaryColor: p.sg[i].secondary
                                                                    });
                                                                },
                                                                className: o()(b.badgeAssetContainer, { [b.badgeAssetContainerSelected]: i + 1 === y }),
                                                                children: (0, r.jsx)(u.A, {
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
                            (0, r.jsxs)('div', {
                                className: b.tagContainer,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/semibold',
                                        color: 'text-muted',
                                        children: f.NW.string(f.t['3eZP8/'])
                                    }),
                                    null != _ &&
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'status-danger',
                                            className: x.errorText,
                                            children: _
                                        }),
                                    (0, r.jsx)(d.oil, {
                                        className: b.tagInputWrapper,
                                        inputClassName: b.tagInput,
                                        value: null != N ? N : '',
                                        onChange: (e) => t({ tag: e }),
                                        maxLength: h.cG,
                                        placeholder: f.NW.string(f.t['0V0ZFx']),
                                        autoFocus: !0,
                                        prefixElement: (0, r.jsx)(u.A, {
                                            badge: n,
                                            width: 40,
                                            height: 40,
                                            primaryTintColor: O.primary,
                                            secondaryTintColor: O.secondary
                                        })
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        className: b.tagValidationText,
                                        children: f.NW.string(f.t.lGtFwM)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    };
