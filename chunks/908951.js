n.d(t, { Z: () => L }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(159351),
    _ = n(366939),
    p = n(623573),
    h = n(190947),
    m = n(275850),
    g = n(906732),
    E = n(15640),
    b = n(246946),
    y = n(853872),
    O = n(509545),
    v = n(74538),
    I = n(212895),
    T = n(296848),
    S = n(374649),
    A = n(981631),
    C = n(388032),
    N = n(318877),
    R = n(149715);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: a,
            dropdownClassName: s,
            analyticsLocation: P,
            currentInvoicePreview: D,
            disabled: L = !1,
        } = e,
        M = (0, c.e7)([b.Z], () => b.Z.hidePersonalInformation),
        [k, U] = (0, c.Wu)([y.Z], () => [y.Z.paymentSources, y.Z.hasFetchedPaymentSources]),
        G = (0, E.V)((0, T.yb)(t)),
        { analyticsLocations: B } = (0, g.ZP)(),
        Z = i.useMemo(() => Object.values(k).filter((e) => !e.invalid), [k]),
        [V, F] = i.useState(!1),
        [H, Y] = i.useState(t.currency),
        W = async (e, n, r) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await _.fG(t, n, r, B, P) : await _.tq(t, e, n, r, B, P), F(!1), Y(n);
        },
        K = async (e, n, r) => {
            F(!0);
            let i = await (0, S.hz)({
                    subscriptionId: t.id,
                    paymentSourceId: null == e ? void 0 : e.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: B,
                    analyticsLocation: P,
                }),
                a = {
                    amount: i.subtotal,
                    currency: i.currency,
                };
            D.currency !== i.currency || (D.currency === i.currency && D.total !== i.total)
                ? await j(
                      i,
                      () => {
                          r(e, n, a);
                      },
                      () => {
                          F(!1);
                      },
                  )
                : r(e, n, a);
        },
        z = (e) => {
            let n = O.Z.get(t.planIdForCurrencies);
            l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
            let r = (0, I.DE)(n.id, e.id, !1);
            return r.length > 0 ? r[0] : A.pKx.USD;
        },
        q = (e) => {
            null != e && K(e, z(e), W);
        },
        X = (e) => {
            (0, I.i1)(e.id, (0, T.yb)(t)).then(() => {
                K(e, z(e), W);
            }),
                "function" == typeof n && n(e.id);
        },
        Q = () => {
            (0, d.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        p.default,
                        x(w({}, e), {
                            onAddPaymentSource: X,
                            analyticsLocation: P,
                        }),
                    ),
                {
                    onCloseCallback: () => {
                        (0, f.fw)();
                    },
                    onCloseRequest: A.dG4,
                },
            );
        },
        J = () => {
            let e = t.paymentSourceId;
            return (0, r.jsx)(m.ZP, {
                prependOption:
                    null == e
                        ? {
                              label: C.intl.string(C.t.iA5vAw),
                              value: null,
                          }
                        : null,
                className: s,
                paymentSources: Z,
                hidePersonalInformation: M,
                selectedPaymentSourceId: e,
                onChange: q,
                onPaymentSourceAdd: Q,
                dropdownLoading: V,
                disabled: L,
                paymentGatewayRestrictions: t.eligiblePaymentGateways,
            });
        },
        $ = () =>
            (0, r.jsx)(u.zx, {
                fullWidth: !0,
                look: u.zx.Looks.FILLED,
                color: a ? u.zx.Colors.BRAND : u.zx.Colors.PRIMARY,
                onClick: Q,
                children: C.intl.string(C.t.CpOiEB),
            }),
        ee = (e) => {
            l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
            let t = (0, v.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
            return (0, r.jsx)(d.eee, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: N.externalLink,
                children: (0, r.jsx)(d.zxk, {
                    variant: "secondary",
                    text: C.intl.string(C.t.SgX7RU),
                    fullWidth: !0,
                }),
            });
        };
    if (t.isPurchasedExternally) return ee(t);
    if (!U || !G) return (0, r.jsx)(d.$jN, {});
    if (!(Z.length > 0)) return $();
    {
        let e = O.Z.get(t.planIdForCurrencies);
        l()(null != e, "Unable to fetch plan");
        let n = (0, I.DE)(e, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                J(),
                null != t.paymentSourceId
                    ? (0, r.jsx)(h.b, {
                          currencies: n,
                          children: (0, r.jsxs)("div", {
                              className: o()(N.currency, R.flex, R.alignCenter),
                              children: [
                                  (0, r.jsx)("div", { children: C.intl.string(C.t["0YjaXV"]) }),
                                  (0, r.jsx)(h.Z, {
                                      className: N.currencyDropdown,
                                      selectedCurrency: H,
                                      currencies: n,
                                      onChange: (e) => {
                                          K(void 0, e, W);
                                      },
                                  }),
                              ],
                          }),
                      })
                    : null,
            ],
        });
    }
}
let j = async (e, t, i) => {
    let a = await (0, d.ZDy)(
        async () => {
            let { default: a } = await n.e("97516").then(n.bind(n, 358927));
            return (n) =>
                (0, r.jsx)(a, {
                    newInvoice: e,
                    onConfirm: t,
                    onCancel: i,
                    modalProps: n,
                });
        },
        {
            onCloseRequest: () => {
                null != a && (0, d.Mr3)(a), i();
            },
        },
    );
};
