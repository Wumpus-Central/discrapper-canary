n.d(t, { Z: () => y }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    m = n(366939),
    g = n(623573),
    p = n(190947),
    h = n(275850),
    f = n(906732),
    b = n(15640),
    N = n(246946),
    x = n(853872),
    _ = n(509545),
    E = n(74538),
    j = n(212895),
    O = n(296848),
    C = n(374649),
    S = n(981631),
    v = n(388032),
    T = n(628654),
    I = n(893354);
function y(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: s, dropdownClassName: l, analyticsLocation: y, currentInvoicePreview: P, disabled: R = !1 } = e,
        D = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation),
        [Z, w] = (0, c.Wu)([x.Z], () => [x.Z.paymentSources, x.Z.hasFetchedPaymentSources]),
        k = (0, b.V)((0, O.yb)(t)),
        { analyticsLocations: W } = (0, f.ZP)(),
        L = i.useMemo(() => Object.values(Z).filter((e) => !e.invalid), [Z]),
        [B, M] = i.useState(!1),
        [U, V] = i.useState(t.currency),
        G = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await m.fG(t, n, W, y) : await m.tq(t, e, n, W, y), M(!1), V(n);
        },
        F = async (e, n, r) => {
            M(!0);
            let i = await (0, C.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: W,
                analyticsLocation: y
            });
            P.currency !== i.currency || (P.currency === i.currency && P.total !== i.total)
                ? await A(
                      i,
                      () => {
                          r(e, n);
                      },
                      () => {
                          M(!1);
                      }
                  )
                : r(e, n);
        },
        H = (e) => {
            let n = _.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let r = (0, j.DE)(n.id, e.id, !1);
            return r.length > 0 ? r[0] : S.pKx.USD;
        },
        z = (e) => {
            null != e && F(e, H(e), G);
        },
        Y = (e) => {
            (0, j.i1)(e.id, (0, O.yb)(t)).then(() => {
                F(e, H(e), G);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.ZDy)(
                async () => (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        g.default,
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
                                onAddPaymentSource: Y,
                                analyticsLocation: y
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
                },
                {
                    onCloseCallback: () => {
                        (0, u.fw)();
                    },
                    onCloseRequest: S.dG4
                }
            );
        };
    if (t.isPurchasedExternally) {
        o()(null != t.paymentGateway, 'Expected payment gateway when managed externally');
        let e = (0, E.JE)(t.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
        return (0, r.jsx)(d.eee, {
            href: e,
            useDefaultUnderlineStyles: !1,
            className: T.externalLink,
            children: (0, r.jsx)(d.zxk, {
                fullWidth: !0,
                look: d.zxk.Looks.FILLED,
                color: d.zxk.Colors.PRIMARY,
                children: v.NW.string(v.t.SgX7RU)
            })
        });
    }
    if (!w || !k) return (0, r.jsx)(d.$jN, {});
    if (!(L.length > 0))
        return (0, r.jsx)(d.zxk, {
            fullWidth: !0,
            look: d.zxk.Looks.FILLED,
            color: s ? d.zxk.Colors.BRAND : d.zxk.Colors.PRIMARY,
            onClick: K,
            children: v.NW.string(v.t.CpOiEB)
        });
    {
        let e = _.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, j.DE)(e, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, r.jsx)(h.Z, {
                        prependOption:
                            null == e
                                ? {
                                      label: v.NW.string(v.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: l,
                        paymentSources: L,
                        hidePersonalInformation: D,
                        selectedPaymentSourceId: e,
                        onChange: z,
                        onPaymentSourceAdd: K,
                        dropdownLoading: B,
                        disabled: R
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, r.jsx)(p.b, {
                          currencies: n,
                          children: (0, r.jsxs)('div', {
                              className: a()(T.currency, I.flex, I.alignCenter),
                              children: [
                                  (0, r.jsx)('div', { children: v.NW.string(v.t['0YjaXV']) }),
                                  (0, r.jsx)(p.Z, {
                                      className: T.currencyDropdown,
                                      selectedCurrency: U,
                                      currencies: n,
                                      onChange: (e) => {
                                          F(void 0, e, G);
                                      }
                                  })
                              ]
                          })
                      })
                    : null
            ]
        });
    }
}
let A = async (e, t, i) => {
    let s = await (0, d.ZDy)(
        async () => {
            let { default: s } = await n.e('97516').then(n.bind(n, 358927));
            return (n) =>
                (0, r.jsx)(s, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: i,
                    modalProps: n
                });
        },
        {
            onCloseRequest: () => {
                null != s && (0, d.Mr3)(s), i();
            }
        }
    );
};
