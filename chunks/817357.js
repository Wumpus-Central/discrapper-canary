n.d(t, { default: () => E }), n(539854), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    s = n(100527),
    a = n(906732),
    c = n(204418),
    u = n(583434),
    d = n(83479),
    h = n(473608),
    f = n(832149),
    m = n(594174),
    p = n(78839),
    b = n(29920),
    g = n(780525),
    I = n(215023),
    k = n(388032),
    x = n(284613);
function y(e) {
    let { skuId: t, onSelect: n, selected: l } = e,
        { product: i } = (0, u.T)(t),
        s = (0, d.G)(i),
        a = [x.selectionItem];
    return (
        l && a.push(x.selected),
        (0, r.jsx)(o.P3F, {
            onClick: () => {
                null != i && n(i);
            },
            children: (0, r.jsx)(o.Kqy, {
                direction: 'horizontal',
                gap: 12,
                align: 'center',
                padding: {
                    top: 12,
                    right: 12,
                    bottom: 12,
                    left: 16
                },
                className: a.join(' '),
                children:
                    null != i
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.O, {
                                      product: i,
                                      fallbackLabel: null
                                  }),
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-md/semibold',
                                              children: i.name
                                          }),
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-sm/medium',
                                              color: 'header-secondary',
                                              children: s
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
function E(e) {
    let { transitionState: t, onClose: u } = e,
        d = {
            [g.e.skuId]: g.e,
            [g.xB.skuId]: g.xB,
            [g.We.skuId]: g.We
        },
        h = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
        [E, j] = l.useState(null),
        [_, P] = l.useState(null),
        [N, v] = l.useState(!1),
        T = (0, i.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: O } = (0, a.ZP)([s.Z.PREMIUM_MARKETING_REWARD_SELECTION_MODAL]),
        S = l.useMemo(() => (null != E ? { asset: E.assetHash } : null), [E]),
        C = () => {
            (0, o.ZDy)(async () => {
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
    if (null == T) return C(), null;
    let R = async () => {
            null != _ &&
                (v(!0),
                (await (0, b.Ei)({
                    rewardSkuIds: [_.skuId],
                    subscriptionId: T.id
                }))
                    ? ((0, o.pTH)(),
                      (0, b.es)(!1),
                      (0, f.Z)({
                          product: _,
                          analyticsLocations: O,
                          overrideTitle: k.intl.formatToPlainString(k.t.dTWbOz, { itemName: _.name }),
                          overrideDescription: k.intl.string(k.t.Gf9x7e),
                          purchaseType: I.o8.PROMOTIONAL
                      }))
                    : (v(!1), C()));
        },
        L = (e) => {
            N || (j(d[e.skuId]), P(e));
        };
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        size: o.CgR.LARGE,
        children: [
            (0, r.jsx)(o.hzk, {
                className: x.modalContent,
                children: (0, r.jsxs)(o.Kqy, {
                    gap: 24,
                    direction: 'horizontal',
                    align: 'center',
                    className: x.content,
                    children: [
                        (0, r.jsxs)(o.Kqy, {
                            gap: 12,
                            padding: {
                                top: 32,
                                right: 32,
                                bottom: 48,
                                left: 32
                            },
                            className: x.selectionPane,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'header-primary',
                                    className: x.title,
                                    children: k.intl.string(k.t.OZGelZ)
                                }),
                                Object.keys(d).map((e) => {
                                    let t = d[e];
                                    return (0, r.jsx)(
                                        y,
                                        {
                                            skuId: t.skuId,
                                            onSelect: L,
                                            selected: (null == _ ? void 0 : _.skuId) === t.skuId
                                        },
                                        t.skuId
                                    );
                                })
                            ]
                        }),
                        (0, r.jsxs)(o.Kqy, {
                            gap: 0,
                            align: 'center',
                            children: [
                                (0, r.jsx)('div', {
                                    className: x.closeButton,
                                    children: (0, r.jsx)(o.olH, { onClick: () => (0, o.pTH)() })
                                }),
                                null != h
                                    ? (0, r.jsx)(c.Z, {
                                          avatarDecorationOverride: S,
                                          user: h,
                                          guildId: null,
                                          avatarSize: o.EFr.SIZE_152
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, r.jsx)(o.mzw, {
                children: (0, r.jsxs)(o.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    children: [
                        (0, r.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: () => u(),
                            disabled: N,
                            children: k.intl.string(k.t['13/7kZ'])
                        }),
                        (0, r.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.BRAND,
                            onClick: R,
                            disabled: null == _,
                            submitting: N,
                            children: k.intl.string(k.t['cY+Ooa'])
                        })
                    ]
                })
            })
        ]
    });
}
