n.d(t, { default: () => j }), n(653041), n(47120);
var l = n(200651),
    s = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(100527),
    a = n(906732),
    c = n(204418),
    d = n(583434),
    u = n(473608),
    m = n(832149),
    h = n(594174),
    b = n(78839),
    k = n(29920),
    p = n(780525),
    x = n(388032),
    f = n(265914);
function g(e) {
    let { skuId: t, onSelect: n, selected: s } = e,
        { product: i } = (0, d.T)(t),
        o = [f.selectionItem];
    return (
        s && o.push(f.selected),
        (0, l.jsx)(r.P3F, {
            onClick: () => {
                null != i && n(i);
            },
            children: (0, l.jsx)(r.Kqy, {
                direction: 'horizontal',
                gap: 12,
                align: 'center',
                padding: {
                    top: 12,
                    right: 12,
                    bottom: 12,
                    left: 16
                },
                className: o.join(' '),
                children:
                    null != i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.O, {
                                      product: i,
                                      fallbackLabel: null
                                  }),
                                  (0, l.jsxs)('div', {
                                      children: [
                                          (0, l.jsx)(r.Text, {
                                              variant: 'text-md/semibold',
                                              children: i.name
                                          }),
                                          (0, l.jsx)(r.X6q, {
                                              variant: 'heading-sm/medium',
                                              color: 'header-secondary',
                                              children: i.summary
                                          })
                                      ]
                                  })
                              ]
                          })
                        : null
            })
        })
    );
}
function j(e) {
    let { transitionState: t, onClose: d } = e,
        u = {
            [p.e.skuId]: p.e,
            [p.xB.skuId]: p.xB,
            [p.We.skuId]: p.We
        },
        j = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        [I, y] = s.useState(null),
        [v, N] = s.useState(null),
        [O, P] = s.useState(!1),
        z = (0, i.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: C } = (0, a.ZP)([o.Z.PREMIUM_MARKETING_REWARD_SELECTION_MODAL]),
        _ = s.useMemo(() => (null != I ? { asset: I.assetHash } : null), [I]),
        S = () => {
            (0, r.ZDy)(async () => {
                let { default: e } = await n.e('76025').then(n.bind(n, 393185));
                return (t) =>
                    (0, l.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({}, t)
                    );
            });
        };
    if (null == z) return S(), null;
    let w = async () => {
            null != v &&
                (P(!0),
                (await (0, k.Ei)({
                    rewardSkuIds: [v.skuId],
                    subscriptionId: z.id
                }))
                    ? ((0, r.pTH)(),
                      (0, k.es)(!1),
                      (0, m.Z)({
                          product: v,
                          analyticsLocations: C,
                          overrideTitle: x.NW.formatToPlainString(x.t.dTWbOz, { itemName: v.name }),
                          overrideDescription: x.NW.string(x.t.Gf9x7e)
                      }))
                    : (P(!1), S()));
        },
        E = (e) => {
            !O && (y(u[e.skuId]), N(e));
        };
    return (0, l.jsxs)(r.Y0X, {
        transitionState: t,
        size: r.CgR.LARGE,
        children: [
            (0, l.jsx)(r.hzk, {
                className: f.modalContent,
                children: (0, l.jsxs)(r.Kqy, {
                    gap: 24,
                    direction: 'horizontal',
                    align: 'center',
                    className: f.content,
                    children: [
                        (0, l.jsxs)(r.Kqy, {
                            gap: 12,
                            padding: {
                                top: 32,
                                right: 32,
                                bottom: 48,
                                left: 32
                            },
                            className: f.selectionPane,
                            children: [
                                (0, l.jsx)(r.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'header-primary',
                                    className: f.title,
                                    children: x.NW.string(x.t.OZGelZ)
                                }),
                                Object.keys(u).map((e) => {
                                    let t = u[e];
                                    return (0, l.jsx)(
                                        g,
                                        {
                                            skuId: t.skuId,
                                            onSelect: E,
                                            selected: (null == v ? void 0 : v.skuId) === t.skuId
                                        },
                                        t.skuId
                                    );
                                })
                            ]
                        }),
                        (0, l.jsxs)(r.Kqy, {
                            gap: 0,
                            align: 'center',
                            children: [
                                (0, l.jsx)('div', {
                                    className: f.closeButton,
                                    children: (0, l.jsx)(r.olH, { onClick: () => (0, r.pTH)() })
                                }),
                                null != j
                                    ? (0, l.jsx)(c.Z, {
                                          avatarDecorationOverride: _,
                                          user: j,
                                          guildId: null,
                                          avatarSize: r.EFr.SIZE_152
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, l.jsx)(r.mzw, {
                children: (0, l.jsxs)(r.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    children: [
                        (0, l.jsx)(r.zxk, {
                            look: r.zxk.Looks.LINK,
                            color: r.zxk.Colors.PRIMARY,
                            onClick: () => d(),
                            disabled: O,
                            children: x.NW.string(x.t['13/7kZ'])
                        }),
                        (0, l.jsx)(r.zxk, {
                            look: r.zxk.Looks.FILLED,
                            color: r.zxk.Colors.BRAND,
                            onClick: w,
                            disabled: null == v,
                            submitting: O,
                            children: x.NW.string(x.t['cY+Ooa'])
                        })
                    ]
                })
            })
        ]
    });
}
