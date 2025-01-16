n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    m = n(366939),
    g = n(623573),
    h = n(190947),
    p = n(275850),
    x = n(906732),
    f = n(15640),
    _ = n(246946),
    E = n(853872),
    C = n(509545),
    T = n(74538),
    S = n(212895),
    b = n(296848),
    I = n(374649),
    N = n(981631),
    v = n(388032),
    A = n(917264),
    j = n(847854);
function O(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: s, dropdownClassName: l, analyticsLocation: O, currentInvoicePreview: P, disabled: y = !1 } = e,
        B = (0, c.e7)([_.Z], () => _.Z.hidePersonalInformation),
        [D, Z] = (0, c.Wu)([E.Z], () => [E.Z.paymentSources, E.Z.hasFetchedPaymentSources]),
        L = (0, f.V)((0, b.yb)(t)),
        { analyticsLocations: M } = (0, x.ZP)(),
        k = r.useMemo(() => Object.values(D).filter((e) => !e.invalid), [D]),
        [w, F] = r.useState(!1),
        [U, V] = r.useState(t.currency),
        G = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await m.fG(t, n, M, O) : await m.tq(t, e, n, M, O), F(!1), V(n);
        },
        H = async (e, n, i) => {
            F(!0);
            let r = await (0, I.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: M,
                analyticsLocation: O
            });
            P.currency !== r.currency || (P.currency === r.currency && P.total !== r.total)
                ? await R(
                      r,
                      () => {
                          i(e, n);
                      },
                      () => {
                          F(!1);
                      }
                  )
                : i(e, n);
        },
        Y = (e) => {
            let n = C.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let i = (0, S.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : N.pKx.USD;
        },
        W = (e) => {
            null != e && H(e, Y(e), G);
        },
        z = (e) => {
            (0, S.i1)(e.id, (0, b.yb)(t)).then(() => {
                H(e, Y(e), G);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.openModalLazy)(
                async () => (e) =>
                    (0, i.jsx)(g.default, {
                        ...e,
                        onAddPaymentSource: z,
                        analyticsLocation: O
                    }),
                {
                    onCloseCallback: () => {
                        (0, u.fw)();
                    },
                    onCloseRequest: N.dG4
                }
            );
        };
    if (t.isPurchasedExternally)
        return ((e) => {
            o()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
            let t = (0, T.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
            return (0, i.jsx)(d.Anchor, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: A.externalLink,
                children: (0, i.jsx)(d.Button, {
                    fullWidth: !0,
                    look: d.Button.Looks.FILLED,
                    color: d.Button.Colors.PRIMARY,
                    children: v.intl.string(v.t.SgX7RU)
                })
            });
        })(t);
    if (!Z || !L) return (0, i.jsx)(d.Spinner, {});
    if (!(k.length > 0))
        return (0, i.jsx)(d.Button, {
            fullWidth: !0,
            look: d.Button.Looks.FILLED,
            color: s ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
            onClick: K,
            children: v.intl.string(v.t.CpOiEB)
        });
    else {
        let e = C.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, S.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(p.Z, {
                        prependOption:
                            null == e
                                ? {
                                      label: v.intl.string(v.t.iA5vAw),
                                      value: null
                                  }
                                : null,
                        className: l,
                        paymentSources: k,
                        hidePersonalInformation: B,
                        selectedPaymentSourceId: e,
                        onChange: W,
                        onPaymentSourceAdd: K,
                        dropdownLoading: w,
                        disabled: y
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(h.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: a()(A.currency, j.flex, j.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: v.intl.string(v.t['0YjaXV']) }),
                                  (0, i.jsx)(h.Z, {
                                      className: A.currencyDropdown,
                                      selectedCurrency: U,
                                      currencies: n,
                                      onChange: (e) => {
                                          H(void 0, e, G);
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
let R = async (e, t, r) => {
    let s = await (0, d.openModalLazy)(
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
                null != s && (0, d.closeModal)(s), r();
            }
        }
    );
};
