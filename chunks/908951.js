n.d(t, { Z: () => y }), n(388685), n(415506);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    m = n(366939),
    g = n(623573),
    p = n(190947),
    h = n(275850),
    f = n(906732),
    b = n(15640),
    _ = n(246946),
    x = n(853872),
    E = n(509545),
    j = n(74538),
    C = n(212895),
    O = n(296848),
    S = n(374649),
    v = n(981631),
    T = n(388032),
    I = n(628654),
    N = n(893354);
function y(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: s, dropdownClassName: a, analyticsLocation: y, currentInvoicePreview: P, disabled: R = !1 } = e,
        D = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation),
        [Z, w] = (0, c.Wu)([x.Z], () => [x.Z.paymentSources, x.Z.hasFetchedPaymentSources]),
        k = (0, b.V)((0, O.yb)(t)),
        { analyticsLocations: L } = (0, f.ZP)(),
        B = r.useMemo(() => Object.values(Z).filter((e) => !e.invalid), [Z]),
        [M, U] = r.useState(!1),
        [V, G] = r.useState(t.currency),
        F = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await m.fG(t, n, L, y) : await m.tq(t, e, n, L, y), U(!1), G(n);
        },
        H = async (e, n, i) => {
            U(!0);
            let r = await (0, S.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: L,
                analyticsLocation: y
            });
            P.currency !== r.currency || (P.currency === r.currency && P.total !== r.total)
                ? await A(
                      r,
                      () => {
                          i(e, n);
                      },
                      () => {
                          U(!1);
                      }
                  )
                : i(e, n);
        },
        z = (e) => {
            let n = E.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let i = (0, C.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : v.pKx.USD;
        },
        W = (e) => {
            null != e && H(e, z(e), F);
        },
        Y = (e) => {
            (0, C.i1)(e.id, (0, O.yb)(t)).then(() => {
                H(e, z(e), F);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.ZDy)(
                async () => (e) => {
                    var t, n;
                    return (0, i.jsx)(
                        g.default,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
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
                        (0, u.fw)();
                    },
                    onCloseRequest: v.dG4
                }
            );
        };
    if (t.isPurchasedExternally) {
        o()(null != t.paymentGateway, 'Expected payment gateway when managed externally');
        let e = (0, j.JE)(t.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
        return (0, i.jsx)(d.eee, {
            href: e,
            useDefaultUnderlineStyles: !1,
            className: I.externalLink,
            children: (0, i.jsx)(d.zxk, {
                fullWidth: !0,
                look: d.zxk.Looks.FILLED,
                color: d.zxk.Colors.PRIMARY,
                children: T.intl.string(T.t.SgX7RU)
            })
        });
    }
    if (!w || !k) return (0, i.jsx)(d.$jN, {});
    if (!(B.length > 0))
        return (0, i.jsx)(d.zxk, {
            fullWidth: !0,
            look: d.zxk.Looks.FILLED,
            color: s ? d.zxk.Colors.BRAND : d.zxk.Colors.PRIMARY,
            onClick: K,
            children: T.intl.string(T.t.CpOiEB)
        });
    {
        let e = E.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, C.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(h.ZP, {
                        prependOption:
                            null == e
                                ? {
                                      label: T.intl.string(T.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: a,
                        paymentSources: B,
                        hidePersonalInformation: D,
                        selectedPaymentSourceId: e,
                        onChange: W,
                        onPaymentSourceAdd: K,
                        dropdownLoading: M,
                        disabled: R,
                        paymentGatewayRestrictions: t.eligiblePaymentGateways
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(p.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: l()(I.currency, N.flex, N.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: T.intl.string(T.t['0YjaXV']) }),
                                  (0, i.jsx)(p.Z, {
                                      className: I.currencyDropdown,
                                      selectedCurrency: V,
                                      currencies: n,
                                      onChange: (e) => {
                                          H(void 0, e, F);
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
let A = async (e, t, r) => {
    let s = await (0, d.ZDy)(
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
                null != s && (0, d.Mr3)(s), r();
            }
        }
    );
};
