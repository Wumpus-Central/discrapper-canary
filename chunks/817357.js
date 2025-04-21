n.d(t, { default: () => v }), n(539854), n(388685);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    s = n(481060),
    o = n(100527),
    a = n(906732),
    c = n(204418),
    d = n(583434),
    u = n(83479),
    h = n(473608),
    m = n(832149),
    f = n(594174),
    g = n(78839),
    p = n(29920),
    b = n(780525),
    k = n(215023),
    x = n(388032),
    j = n(284613);
function I(e) {
    let { skuId: t, onSelect: n, selected: i } = e,
        { product: r } = (0, d.T)(t),
        o = (0, u.G)(r),
        a = [j.selectionItem];
    return (
        i && a.push(j.selected),
        (0, l.jsx)(s.P3F, {
            onClick: () => {
                null != r && n(r);
            },
            children: (0, l.jsx)(s.Kqy, {
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
                    null != r
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(h.O, {
                                      product: r,
                                      fallbackLabel: null
                                  }),
                                  (0, l.jsxs)('div', {
                                      children: [
                                          (0, l.jsx)(s.Text, {
                                              variant: 'text-md/semibold',
                                              children: r.name
                                          }),
                                          (0, l.jsx)(s.X6q, {
                                              variant: 'heading-sm/medium',
                                              color: 'header-secondary',
                                              children: o
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
function v(e) {
    let { transitionState: t, onClose: d } = e,
        u = {
            [b.e.skuId]: b.e,
            [b.xB.skuId]: b.xB,
            [b.We.skuId]: b.We
        },
        h = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        [v, P] = i.useState(null),
        [y, O] = i.useState(null),
        [E, N] = i.useState(!1),
        T = (0, r.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: S } = (0, a.ZP)([o.Z.PREMIUM_MARKETING_REWARD_SELECTION_MODAL]),
        C = i.useMemo(() => (null != v ? { asset: v.assetHash } : null), [v]),
        Z = () => {
            (0, s.ZDy)(async () => {
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
    if (null == T) return Z(), null;
    let _ = async () => {
            null != y &&
                (N(!0),
                (await (0, p.Ei)({
                    rewardSkuIds: [y.skuId],
                    subscriptionId: T.id
                }))
                    ? ((0, s.pTH)(),
                      (0, p.es)(!1),
                      (0, m.Z)({
                          product: y,
                          analyticsLocations: S,
                          overrideTitle: x.intl.formatToPlainString(x.t.dTWbOz, { itemName: y.name }),
                          overrideDescription: x.intl.string(x.t.Gf9x7e),
                          purchaseType: k.o8.PROMOTIONAL
                      }))
                    : (N(!1), Z()));
        },
        L = (e) => {
            E || (P(u[e.skuId]), O(e));
        };
    return (0, l.jsxs)(s.Y0X, {
        transitionState: t,
        size: s.CgR.LARGE,
        children: [
            (0, l.jsx)(s.hzk, {
                className: j.modalContent,
                children: (0, l.jsxs)(s.Kqy, {
                    gap: 24,
                    direction: 'horizontal',
                    align: 'center',
                    className: j.content,
                    children: [
                        (0, l.jsxs)(s.Kqy, {
                            gap: 12,
                            padding: {
                                top: 32,
                                right: 32,
                                bottom: 48,
                                left: 32
                            },
                            className: j.selectionPane,
                            children: [
                                (0, l.jsx)(s.X6q, {
                                    variant: 'heading-lg/bold',
                                    color: 'header-primary',
                                    className: j.title,
                                    children: x.intl.string(x.t.OZGelZ)
                                }),
                                Object.keys(u).map((e) => {
                                    let t = u[e];
                                    return (0, l.jsx)(
                                        I,
                                        {
                                            skuId: t.skuId,
                                            onSelect: L,
                                            selected: (null == y ? void 0 : y.skuId) === t.skuId
                                        },
                                        t.skuId
                                    );
                                })
                            ]
                        }),
                        (0, l.jsxs)(s.Kqy, {
                            gap: 0,
                            align: 'center',
                            children: [
                                (0, l.jsx)('div', {
                                    className: j.closeButton,
                                    children: (0, l.jsx)(s.olH, { onClick: () => (0, s.pTH)() })
                                }),
                                null != h
                                    ? (0, l.jsx)(c.Z, {
                                          avatarDecorationOverride: C,
                                          user: h,
                                          guildId: null,
                                          avatarSize: s.EFr.SIZE_152
                                      })
                                    : null
                            ]
                        })
                    ]
                })
            }),
            (0, l.jsx)(s.mzw, {
                children: (0, l.jsxs)(s.Kqy, {
                    direction: 'horizontal',
                    justify: 'space-between',
                    children: [
                        (0, l.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: () => d(),
                            disabled: E,
                            children: x.intl.string(x.t['13/7kZ'])
                        }),
                        (0, l.jsx)(s.zxk, {
                            look: s.zxk.Looks.FILLED,
                            color: s.zxk.Colors.BRAND,
                            onClick: _,
                            disabled: null == y,
                            submitting: E,
                            children: x.intl.string(x.t['cY+Ooa'])
                        })
                    ]
                })
            })
        ]
    });
}
