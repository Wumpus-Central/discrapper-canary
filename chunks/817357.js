n.d(t, { default: () => I }), n(653041), n(47120);
var l = n(200651),
    s = n(192379),
    r = n(442837),
    i = n(481060),
    o = n(100527),
    a = n(906732),
    c = n(204418),
    d = n(583434),
    u = n(473608),
    h = n(832149),
    m = n(594174),
    p = n(78839),
    b = n(29920),
    k = n(780525),
    x = n(215023),
    f = n(388032),
    g = n(284613);
function j(e) {
    let { skuId: t, onSelect: n, selected: s } = e,
        { product: r } = (0, d.T)(t),
        o = [g.selectionItem];
    return (
        s && o.push(g.selected),
        (0, l.jsx)(i.P3F, {
            onClick: () => {
                null != r && n(r);
            },
            children: (0, l.jsx)(i.Kqy, {
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
                    null != r
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.O, {
                                      product: r,
                                      fallbackLabel: null
                                  }),
                                  (0, l.jsxs)('div', {
                                      children: [
                                          (0, l.jsx)(i.Text, {
                                              variant: 'text-md/semibold',
                                              children: r.name
                                          }),
                                          (0, l.jsx)(i.X6q, {
                                              variant: 'heading-sm/medium',
                                              color: 'header-secondary',
                                              children: r.summary
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
function I(e) {
    let { transitionState: t, onClose: d } = e,
        u = {
            [k.e.skuId]: k.e,
            [k.xB.skuId]: k.xB,
            [k.We.skuId]: k.We
        },
        I = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        [y, O] = s.useState(null),
        [N, v] = s.useState(null),
        [P, z] = s.useState(!1),
        C = (0, r.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: _ } = (0, a.ZP)([o.Z.PREMIUM_MARKETING_REWARD_SELECTION_MODAL]),
        S = s.useMemo(() => (null != y ? { asset: y.assetHash } : null), [y]),
        T = () => {
            (0, i.ZDy)(async () => {
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
    if (null == C) return T(), null;
    let w = async () => {
            null != N &&
                (z(!0),
                (await (0, b.Ei)({
                    rewardSkuIds: [N.skuId],
                    subscriptionId: C.id
                }))
                    ? ((0, i.pTH)(),
                      (0, b.es)(!1),
                      (0, h.Z)({
                          product: N,
                          analyticsLocations: _,
                          overrideTitle: f.NW.formatToPlainString(f.t.dTWbOz, { itemName: N.name }),
                          overrideDescription: f.NW.string(f.t.Gf9x7e),
                          purchaseType: x.o8.PROMOTIONAL
                      }))
                    : (z(!1), T()));
        },
        E = (e) => {
            P || (O(u[e.skuId]), v(e));
        };
    return (0, l.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.LARGE,
        children: [
            (0, l.jsx)(i.hzk, {
                className: g.modalContent,
                children: (0, l.jsxs)(i.Kqy, {
                    gap: 24,
                    direction: 'horizontal',
                    align: 'center',
                    className: g.content,
                    children: [
                        (0, l.jsxs)(i.Kqy, {
                            gap: 12,
                            padding: {
                                top: 32,
                                right: 32,
                                bottom: 48,
                                left: 32
                            },
                            className: g.selectionPane,
                            children: [
                                (0, l.jsx)(i.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'header-primary',
                                    className: g.title,
                                    children: f.NW.string(f.t.OZGelZ)
                                }),
                                Object.keys(u).map((e) => {
                                    let t = u[e];
                                    return (0, l.jsx)(
                                        j,
                                        {
                                            skuId: t.skuId,
                                            onSelect: E,
                                            selected: (null == N ? void 0 : N.skuId) === t.skuId
                                        },
                                        t.skuId
                                    );
                                })
                            ]
                        }),
                        (0, l.jsxs)(i.Kqy, {
                            gap: 0,
                            align: 'center',
                            children: [
                                (0, l.jsx)('div', {
                                    className: g.closeButton,
                                    children: (0, l.jsx)(i.olH, { onClick: () => (0, i.pTH)() })
                                }),
                                null != I
                                    ? (0, l.jsx)(c.Z, {
                                          avatarDecorationOverride: S,
                                          user: I,
                                          guildId: null,
                                          avatarSize: i.EFr.SIZE_152
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, l.jsx)(i.mzw, {
                children: (0, l.jsxs)(i.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    children: [
                        (0, l.jsx)(i.zxk, {
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.PRIMARY,
                            onClick: () => d(),
                            disabled: P,
                            children: f.NW.string(f.t['13/7kZ'])
                        }),
                        (0, l.jsx)(i.zxk, {
                            look: i.zxk.Looks.FILLED,
                            color: i.zxk.Colors.BRAND,
                            onClick: w,
                            disabled: null == N,
                            submitting: P,
                            children: f.NW.string(f.t['cY+Ooa'])
                        })
                    ]
                })
            })
        ]
    });
}
