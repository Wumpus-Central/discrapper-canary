n.d(t, { Z: () => O }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(159351),
    m = n(366939),
    h = n(623573),
    g = n(190947),
    _ = n(275850),
    x = n(906732),
    p = n(15640),
    E = n(246946),
    C = n(853872),
    f = n(509545),
    T = n(74538),
    N = n(212895),
    I = n(296848),
    S = n(374649),
    b = n(981631),
    v = n(388032),
    j = n(140407),
    A = n(652849);
function O(e) {
    let { subscription: t, onPaymentSourceAdded: n, highlightAddPaymentMethodButton: r, dropdownClassName: a, analyticsLocation: O, currentInvoicePreview: P, disabled: D = !1 } = e,
        y = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
        [Z, L] = (0, c.Wu)([C.Z], () => [C.Z.paymentSources, C.Z.hasFetchedPaymentSources]),
        k = (0, p.V)((0, I.yb)(t)),
        { analyticsLocations: B } = (0, x.ZP)(),
        M = s.useMemo(() => Object.values(Z).filter((e) => !e.invalid), [Z]),
        [w, V] = s.useState(!1),
        [U, G] = s.useState(t.currency),
        F = async (e, n) => {
            if (null == t) throw Error('missing subscription and paymentSource');
            null == e ? await m.fG(t, n, B, O) : await m.tq(t, e, n, B, O), V(!1), G(n);
        },
        H = async (e, n, i) => {
            V(!0);
            let s = await (0, S.hz)({
                subscriptionId: t.id,
                paymentSourceId: null == e ? void 0 : e.id,
                renewal: !0,
                currency: n,
                analyticsLocations: B,
                analyticsLocation: O
            });
            P.currency !== s.currency || (P.currency === s.currency && P.total !== s.total)
                ? await R(
                      s,
                      () => {
                          i(e, n);
                      },
                      () => {
                          V(!1);
                      }
                  )
                : i(e, n);
        },
        z = (e) => {
            let n = f.Z.get(t.planIdForCurrencies);
            o()(null != e, 'paymentSource not specified for change'), o()(null != n, 'Unable to fetch plan');
            let i = (0, N.DE)(n.id, e.id, !1);
            return i.length > 0 ? i[0] : b.pKx.USD;
        },
        Y = (e) => {
            null != e && H(e, z(e), F);
        },
        W = (e) => {
            (0, N.i1)(e.id, (0, I.yb)(t)).then(() => {
                H(e, z(e), F);
            }),
                'function' == typeof n && n(e.id);
        },
        K = () => {
            (0, d.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(h.default, {
                        ...e,
                        onAddPaymentSource: W,
                        analyticsLocation: O
                    }),
                {
                    onCloseCallback: () => {
                        (0, u.fw)();
                    },
                    onCloseRequest: b.dG4
                }
            );
        };
    if (t.isPurchasedExternally)
        return ((e) => {
            o()(null != e.paymentGateway, 'Expected payment gateway when managed externally');
            let t = (0, T.JE)(e.paymentGateway, 'PAYMENT_SOURCE_MANAGEMENT');
            return (0, i.jsx)(d.eee, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: j.externalLink,
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
            color: r ? d.zxk.Colors.BRAND : d.zxk.Colors.PRIMARY,
            onClick: K,
            children: v.intl.string(v.t.CpOiEB)
        });
    {
        let e = f.Z.get(t.planIdForCurrencies);
        o()(null != e, 'Unable to fetch plan');
        let n = (0, N.DE)(e, t.paymentSourceId, !1);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (() => {
                    let e = t.paymentSourceId;
                    return (0, i.jsx)(_.Z, {
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
                        onChange: Y,
                        onPaymentSourceAdd: K,
                        dropdownLoading: w,
                        disabled: D
                    });
                })(),
                null != t.paymentSourceId
                    ? (0, i.jsx)(g.b, {
                          currencies: n,
                          children: (0, i.jsxs)('div', {
                              className: l()(j.currency, A.flex, A.alignCenter),
                              children: [
                                  (0, i.jsx)('div', { children: v.intl.string(v.t['0YjaXV']) }),
                                  (0, i.jsx)(g.Z, {
                                      className: j.currencyDropdown,
                                      selectedCurrency: U,
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
let R = async (e, t, s) => {
    let r = await (0, d.ZDy)(
        async () => {
            let { default: r } = await n.e('97516').then(n.bind(n, 358927));
            return (n) =>
                (0, i.jsx)(r, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: s,
                    modalProps: n
                });
        },
        {
            onCloseRequest: () => {
                null != r && (0, d.Mr3)(r), s();
            }
        }
    );
};
