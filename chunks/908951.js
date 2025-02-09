n.d(t, { Z: () => O }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    h = n(366939),
    m = n(623573),
    g = n(190947),
    x = n(275850),
    _ = n(906732),
    p = n(15640),
    E = n(246946),
    C = n(853872),
    N = n(509545),
    f = n(74538),
    I = n(212895),
    T = n(296848),
    S = n(374649),
    j = n(981631),
    v = n(388032),
    b = n(466577),
    A = n(801194);
function O(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: l, dropdownClassName: a, analyticsLocation: O, currentInvoicePreview: D, disabled: P = !1 } = e,
        y = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
        [Z, L] = (0, c.Wu)([C.Z], () => [C.Z.paymentSources, C.Z.hasFetchedPaymentSources]),
        k = (0, p.V)((0, T.yb)(t)),
        { analyticsLocations: B } = (0, _.ZP)(),
        M = s.useMemo(() => Object.values(Z).filter((e) => !e.invalid), [Z]),
        [V, w] = s.useState(!1),
        [U, G] = s.useState(t.currency),
        F = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await h.fG(t, n, B, O) : await h.tq(t, e, n, B, O), w(!1), G(n);
        },
        z = async (e, n, i) => {
            w(!0);
            let s = await (0, S.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: B,
                analyticsLocation: O
            });
            D.currency !== s.currency || (D.currency === s.currency && D.total !== s.total)
                ? await R(
                      s,
                      () => {
                          i(e, n);
                      },
                      () => {
                          w(!1);
                      }
                  )
                : i(e, n);
        },
        Y = (e) => {
            let n = N.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let i = (0, I.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : j.pKx.USD;
        },
        H = (e) => {
            null != e && z(e, Y(e), F);
        },
        W = (e) => {
            (0, I.i1)(e.id, (0, T.yb)(t)).then(() => {
                z(e, Y(e), F);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(m.default, {
                        ...e,
                        onAddPaymentSource: W,
                        analyticsLocation: O
                    }),
                {
                    onCloseCallback: () => {
                        (0, u.fw)();
                    },
                    onCloseRequest: j.dG4
                }
            );
        };
    if (t.isPurchasedExternally)
        return ((e) => {
            o()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
            let t = (0, f.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
            return (0, i.jsx)(d.eee, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: b.externalLink,
                children: (0, i.jsx)(d.zxk, {
                    fullWidth: !0,
                    look: d.zxk.Looks.FILLED,
                    color: d.zxk.Colors.PRIMARY,
                    children: v.intl.string(v.t.SgX7RU)
                })
            });
        })(t);
    if (!L || !k) return (0, i.jsx)(d.$jN, {});
    if (!(M.length > 0))
        return (0, i.jsx)(d.zxk, {
            fullWidth: !0,
            look: d.zxk.Looks.FILLED,
            color: l ? d.zxk.Colors.BRAND : d.zxk.Colors.PRIMARY,
            onClick: K,
            children: v.intl.string(v.t.CpOiEB)
        });
    {
        let e = N.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, I.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(x.Z, {
                        prependOption:
                            null == e
                                ? {
                                      label: v.intl.string(v.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: a,
                        paymentSources: M,
                        hidePersonalInformation: y,
                        selectedPaymentSourceId: e,
                        onChange: H,
                        onPaymentSourceAdd: K,
                        dropdownLoading: V,
                        disabled: P
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(g.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: r()(b.currency, A.flex, A.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: v.intl.string(v.t['0YjaXV']) }),
                                  (0, i.jsx)(g.Z, {
                                      className: b.currencyDropdown,
                                      selectedCurrency: U,
                                      currencies: n,
                                      onChange: (e) => {
                                          z(void 0, e, F);
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
let R = async (e, t, s) => {
    let l = await (0, d.ZDy)(
        async () => {
            let { default: l } = await n.e('97516').then(n.bind(n, 358927));
            return (n) =>
                (0, i.jsx)(l, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: s,
                    modalProps: n
                });
        },
        {
            onCloseRequest: () => {
                null != l && (0, d.Mr3)(l), s();
            }
        }
    );
};
