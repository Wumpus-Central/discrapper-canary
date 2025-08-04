(n.d(t, { Z: () => A }), n(388685), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(159351),
    p = n(366939),
    g = n(623573),
    h = n(190947),
    f = n(275850),
    b = n(906732),
    x = n(15640),
    _ = n(246946),
    j = n(853872),
    E = n(509545),
    C = n(74538),
    O = n(212895),
    v = n(296848),
    S = n(374649),
    T = n(981631),
    I = n(388032),
    N = n(628654),
    y = n(893354);
function A(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: s, dropdownClassName: l, analyticsLocation: A, currentInvoicePreview: R, disabled: D = !1 } = e,
        Z = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation),
        [w, k] = (0, c.Wu)([j.Z], () => [j.Z.paymentSources, j.Z.hasFetchedPaymentSources]),
        L = (0, x.V)((0, v.yb)(t)),
        { analyticsLocations: B } = (0, b.ZP)(),
        M = r.useMemo(() => Object.values(w).filter((e) => !e.invalid), [w]),
        [U, V] = r.useState(!1),
        [G, F] = r.useState(t.currency),
        H = async (e, n, i) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            (null == e ? await p.fG(t, n, i, B, A) : await p.tq(t, e, n, i, B, A), V(!1), F(n));
        },
        W = async (e, n, i) => {
            V(!0);
            let r = await (0, S.hz)({
                    subscriptionId: t.id,
                    paymentSourceId: null == e ? void 0 : e.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: B,
                    analyticsLocation: A
                }),
                s = {
                    amount: r.subtotal,
                    currency: r.currency
                };
            R.currency !== r.currency || (R.currency === r.currency && R.total !== r.total)
                ? await P(
                      r,
                      () => {
                          i(e, n, s);
                      },
                      () => {
                          V(!1);
                      }
                  )
                : i(e, n, s);
        },
        z = (e) => {
            let n = E.Z.get(t.planIdForCurrencies);
            (o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan'));
            let i = (0, O.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : T.pKx.USD;
        },
        Y = (e) => {
            null != e && W(e, z(e), H);
        },
        K = (e) => {
            ((0, O.i1)(e.id, (0, v.yb)(t)).then(() => {
                W(e, z(e), H);
            }),
                'function' == typeof n && n(e.id));
        },
        q = () => {
            (0, u.ZDy)(
                async () => (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        g.default,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })({}, e)),
                        (n = n =
                            {
                                onAddPaymentSource: K,
                                analyticsLocation: A
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
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
                        (0, m.fw)();
                    },
                    onCloseRequest: T.dG4
                }
            );
        };
    if (t.isPurchasedExternally) {
        o()(null != t.paymentGateway, 'Expected payment gateway when managed externally');
        let e = (0, C.JE)(t.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
        return (0, i.jsx)(u.eee, {
            href: e,
            useDefaultUnderlineStyles: !1,
            className: N.externalLink,
            children: (0, i.jsx)(u.zxk, {
                variant: 'secondary',
                text: I.intl.string(I.t.SgX7RU),
                fullWidth: !0
            })
        });
    }
    if (!k || !L) return (0, i.jsx)(u.$jN, {});
    if (!(M.length > 0))
        return (0, i.jsx)(d.zx, {
            fullWidth: !0,
            look: d.zx.Looks.FILLED,
            color: s ? d.zx.Colors.BRAND : d.zx.Colors.PRIMARY,
            onClick: q,
            children: I.intl.string(I.t.CpOiEB)
        });
    {
        let e = E.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, O.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(f.ZP, {
                        prependOption:
                            null == e
                                ? {
                                      label: I.intl.string(I.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: l,
                        paymentSources: M,
                        hidePersonalInformation: Z,
                        selectedPaymentSourceId: e,
                        onChange: Y,
                        onPaymentSourceAdd: q,
                        dropdownLoading: U,
                        disabled: D,
                        paymentGatewayRestrictions: t.eligiblePaymentGateways
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(h.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: a()(N.currency, y.flex, y.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: I.intl.string(I.t['0YjaXV']) }),
                                  (0, i.jsx)(h.Z, {
                                      className: N.currencyDropdown,
                                      selectedCurrency: G,
                                      currencies: n,
                                      onChange: (e) => {
                                          W(void 0, e, H);
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
let P = async (e, t, r) => {
    let s = await (0, u.ZDy)(
        async () => {
            let { default: s } = await n.e('97516').then(n.bind(n, 358927));
            return (n) =>
                (0, i.jsx)(s, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: r,
                    modalProps: n
                });
        },
        {
            onCloseRequest: () => {
                (null != s && (0, u.Mr3)(s), r());
            }
        }
    );
};
