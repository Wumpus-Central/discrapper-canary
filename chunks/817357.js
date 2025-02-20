n.d(t, { default: () => j }), n(653041), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(100527),
    a = n(906732),
    c = n(204418),
    d = n(583434),
    u = n(473608),
    f = n(832149),
    h = n(594174),
    m = n(78839),
    b = n(29920),
    k = n(780525),
    p = n(388032),
    x = n(265914);
function g(e) {
    let { skuId: t, onSelect: n, selected: l } = e,
        { product: i } = (0, d.T)(t),
        o = [x.selectionItem];
    return (
        l && o.push(x.selected),
        (0, r.jsx)(s.P3F, {
            onClick: () => {
                null != i && n(i);
            },
            children: (0, r.jsx)(s.Kqy, {
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
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(u.O, {
                                      product: i,
                                      fallbackLabel: null
                                  }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-md/semibold',
                                              children: i.name
                                          }),
                                          (0, r.jsx)(s.X6q, {
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
            [k.e.skuId]: k.e,
            [k.xB.skuId]: k.xB,
            [k.We.skuId]: k.We
        },
        j = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
        [y, I] = l.useState(null),
        [_, N] = l.useState(null),
        [E, O] = l.useState(!1),
        P = (0, i.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: v } = (0, a.ZP)([o.Z.PREMIUM_MARKETING_REWARD_SELECTION_MODAL]),
        C = l.useMemo(() => (null != y ? { asset: y.assetHash } : null), [y]),
        S = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('76025').then(n.bind(n, 393185));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
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
                        })({}, t)
                    );
            });
        };
    if (null == P) return S(), null;
    let R = async () => {
            null != _ &&
                (O(!0),
                (await (0, b.Ei)({
                    rewardSkuIds: [_.skuId],
                    subscriptionId: P.id
                }))
                    ? (d(),
                      (0, f.Z)({
                          product: _,
                          analyticsLocations: v,
                          overrideTitle: p.NW.formatToPlainString(p.t.dTWbOz, { itemName: _.name }),
                          overrideDescription: p.NW.string(p.t.Gf9x7e)
                      }))
                    : (O(!1), S()));
        },
        T = (e) => {
            !E && (I(u[e.skuId]), N(e));
        };
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.LARGE,
        children: [
            (0, r.jsx)(s.hzk, {
                className: x.modalContent,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 24,
                    direction: 'horizontal',
                    align: 'center',
                    className: x.content,
                    children: [
                        (0, r.jsxs)(s.Kqy, {
                            gap: 12,
                            padding: {
                                top: 32,
                                right: 32,
                                bottom: 48,
                                left: 32
                            },
                            className: x.selectionPane,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'header-primary',
                                    className: x.title,
                                    children: p.NW.string(p.t.OZGelZ)
                                }),
                                Object.keys(u).map((e) => {
                                    let t = u[e];
                                    return (0, r.jsx)(
                                        g,
                                        {
                                            skuId: t.skuId,
                                            onSelect: T,
                                            selected: (null == _ ? void 0 : _.skuId) === t.skuId
                                        },
                                        t.skuId
                                    );
                                })
                            ]
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            gap: 0,
                            align: 'center',
                            children: [
                                (0, r.jsx)('div', {
                                    className: x.closeButton,
                                    children: (0, r.jsx)(s.olH, { onClick: () => (0, s.pTH)() })
                                }),
                                null != j
                                    ? (0, r.jsx)(c.Z, {
                                          avatarDecorationOverride: C,
                                          user: j,
                                          guildId: null,
                                          avatarSize: s.EFr.SIZE_152
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(s.mzw, {
                children: (0, r.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    children: [
                        (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: () => d(),
                            disabled: E,
                            children: p.NW.string(p.t['13/7kZ'])
                        }),
                        (0, r.jsx)(s.zxk, {
                            look: s.zxk.Looks.FILLED,
                            color: s.zxk.Colors.BRAND,
                            onClick: R,
                            disabled: null == _,
                            submitting: E,
                            children: p.NW.string(p.t['cY+Ooa'])
                        })
                    ]
                })
            })
        ]
    });
}
