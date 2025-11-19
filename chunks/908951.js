n.d(t, { Z: () => L }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(159351),
    f = n(366939),
    _ = n(623573),
    p = n(190947),
    h = n(275850),
    m = n(906732),
    g = n(15640),
    E = n(246946),
    b = n(853872),
    y = n(509545),
    O = n(74538),
    v = n(212895),
    I = n(296848),
    T = n(374649),
    S = n(981631),
    A = n(388032),
    C = n(474157),
    N = n(465106);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
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
function w(e, t) {
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
            analyticsLocation: R,
            currentInvoicePreview: D,
            disabled: L = !1,
        } = e,
        M = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
        [j, k] = (0, c.Wu)([b.Z], () => [b.Z.paymentSources, b.Z.hasFetchedPaymentSources]),
        U = (0, g.V)((0, I.yb)(t)),
        { analyticsLocations: G } = (0, m.ZP)(),
        B = i.useMemo(() => Object.values(j).filter((e) => !e.invalid), [j]),
        [Z, F] = i.useState(!1),
        [V, H] = i.useState(t.currency),
        Y = async (e, n, r) => {
            if (null == t) throw Error("missing subscription and paymentSource");
            null == e ? await f.fG(t, n, r, G, R) : await f.tq(t, e, n, r, G, R), F(!1), H(n);
        },
        W = async (e, n, r) => {
            F(!0);
            let i = await (0, T.hz)({
                    subscriptionId: t.id,
                    paymentSourceId: null == e ? void 0 : e.id,
                    renewal: !0,
                    currency: n,
                    analyticsLocations: G,
                    analyticsLocation: R,
                }),
                a = {
                    amount: i.subtotal,
                    currency: i.currency,
                };
            D.currency !== i.currency || (D.currency === i.currency && D.total !== i.total)
                ? await x(
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
        K = (e) => {
            let n = y.Z.get(t.planIdForCurrencies);
            l()(null != e, "paymentSource not specified for change"), l()(null != n, "Unable to fetch plan");
            let r = (0, v.DE)(n.id, e.id, !1);
            return r.length > 0 ? r[0] : S.pKx.USD;
        },
        z = (e) => {
            null != e && W(e, K(e), Y);
        },
        q = (e) => {
            (0, v.i1)(e.id, (0, I.yb)(t)).then(() => {
                W(e, K(e), Y);
            }),
                "function" == typeof n && n(e.id);
        },
        X = () => {
            (0, u.ZDy)(
                async () => (e) =>
                    (0, r.jsx)(
                        _.default,
                        w(P({}, e), {
                            onAddPaymentSource: q,
                            analyticsLocation: R,
                        }),
                    ),
                {
                    onCloseCallback: () => {
                        (0, d.fw)();
                    },
                    onCloseRequest: S.dG4,
                },
            );
        },
        Q = () => {
            let e = t.paymentSourceId;
            return (0, r.jsx)(h.ZP, {
                prependOption:
                    null == e
                        ? {
                              label: A.intl.string(A.t.iA5vA1),
                              value: null,
                          }
                        : null,
                className: s,
                paymentSources: B,
                hidePersonalInformation: M,
                selectedPaymentSourceId: e,
                onChange: z,
                onPaymentSourceAdd: X,
                dropdownLoading: Z,
                disabled: L,
                paymentGatewayRestrictions: t.eligiblePaymentGateways,
            });
        },
        J = () =>
            (0, r.jsx)(u.Button, {
                fullWidth: !0,
                variant: a ? "primary" : "secondary",
                onClick: X,
                text: A.intl.string(A.t.CpOiEO),
            }),
        $ = (e) => {
            l()(null != e.paymentGateway, "Expected payment gateway when managed externally");
            let t = (0, O.JE)(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT");
            return (0, r.jsx)(u.Anchor, {
                href: t,
                useDefaultUnderlineStyles: !1,
                className: C.externalLink,
                children: (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    text: A.intl.string(A.t.SgX7Ra),
                    fullWidth: !0,
                }),
            });
        };
    if (t.isPurchasedExternally) return $(t);
    if (!k || !U) return (0, r.jsx)(u.$jN, {});
    if (!(B.length > 0)) return J();
    {
        let e = y.Z.get(t.planIdForCurrencies);
        l()(null != e, "Unable to fetch plan");
        let n = (0, v.DE)(e, t.paymentSourceId, !1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                Q(),
                null != t.paymentSourceId
                    ? (0, r.jsx)(p.b, {
                          currencies: n,
                          children: (0, r.jsxs)("div", {
                              className: o()(C.currency, N.flex, N.alignCenter),
                              children: [
                                  (0, r.jsx)("div", { children: A.intl.string(A.t["0YjaXf"]) }),
                                  (0, r.jsx)(p.Z, {
                                      className: C.currencyDropdown,
                                      selectedCurrency: V,
                                      currencies: n,
                                      onChange: (e) => {
                                          W(void 0, e, Y);
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
let x = async (e, t, i) => {
    let a = await (0, u.ZDy)(
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
                null != a && (0, u.Mr3)(a), i();
            },
        },
    );
};
