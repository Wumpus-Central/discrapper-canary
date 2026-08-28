n.d(t, { A: () => M });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(17928),
    d = n(192308),
    c = n(821609),
    g = n(28863),
    m = n(289873),
    A = n(391048),
    h = n(158032),
    E = n(362111),
    S = n(457287),
    x = n(637141),
    p = n(688810),
    T = n(160946),
    f = n(351906),
    I = n(295405),
    _ = n(97352),
    N = n(158045),
    C = n(83617),
    b = n(615396),
    y = n(543767),
    v = n(793574),
    j = n(166532),
    O = n(532794);
function L(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, p.Ay)(v.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(x.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(x.Ay, {
              ...t,
              onChange: (e) => {
                  null != e &&
                      (0, O.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: s,
                          initialPaymentSourceId: e.id,
                      });
              },
              onPaymentSourceAdd: () => {
                  (0, O.A)({
                      initialPlanId: n.planIdFromItems,
                      openInvoiceId: l.id,
                      analyticsLocations: s,
                      startingStepOverride: j.pn.ADD_PAYMENT_STEPS,
                  });
              },
          });
}
var D = n(652215),
    R = n(375708),
    P = n(153345),
    G = n(938442);
function M(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: s,
            analyticsLocation: a,
            currentInvoicePreview: v,
            disabled: j = !1,
            openInvoice: O,
        } = e,
        M = (0, u.bG)([f.A], () => f.A.hidePersonalInformation),
        [V, k] = (0, u.yK)([I.A], () => [I.A.paymentSources, I.A.hasFetchedPaymentSources]),
        w = (0, T.Y)((0, b.MP)(t)),
        { analyticsLocations: F } = (0, p.Ay)(),
        B = l.useMemo(() => {
            let e = v.checkoutContext;
            if (null == e) return Object.values(V).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(V).filter((e) => !e.invalid && t.has(e.id));
        }, [V, v.checkoutContext]),
        [z, X] = l.useState(!1),
        [Y, H] = l.useState(t.currency);
    async function K(e, n, i) {
        if (null == t) throw Error("missing subscription and paymentSource");
        null == e ? await h.r6(t, n, i, F, a) : await h.uK(t, e, i, F, a), X(!1), H(n);
    }
    async function W(e, n, i) {
        X(!0);
        let l = await (0, y.OQ)({
                subscriptionId: t.id,
                paymentSourceId: e?.id,
                renewal: !0,
                currency: null != e ? void 0 : n,
                analyticsLocations: F,
                analyticsLocation: a,
            }),
            s = { amount: l.subtotal, currency: l.currency };
        v.currency !== l.currency || (v.currency === l.currency && v.total !== l.total)
            ? await U(
                  l,
                  () => {
                      i(e, l.currency, s);
                  },
                  () => {
                      X(!1);
                  },
              )
            : i(e, l.currency, s);
    }
    function Z(e) {
        (0, C.c_)(e.id, (0, b.MP)(t)).then(() => {
            W(e, void 0, K);
        }),
            "function" == typeof n && n(e.id);
    }
    let q = () => {
        (0, d.openModalLazy)(
            async () => (e) => (0, i.jsx)(E.default, { ...e, onAddPaymentSource: Z, analyticsLocation: a }),
            {
                onCloseCallback: () => {
                    (0, A.ET)();
                },
                onCloseRequest: D.tEg,
            },
        );
    };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, N.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: P.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: R.intl.string(R.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!k || !w) return (0, i.jsx)(m.y, {});
    if (!(B.length > 0))
        return (0, i.jsx)(c.$, {
            fullWidth: !0,
            variant: s ? "primary" : "secondary",
            onClick: q,
            text: R.intl.string(R.t.CpOiEO),
        });
    {
        let e,
            n,
            l = _.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != v.checkoutContext ? v.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, C._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? B.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === D.hes.TDS_WALLET;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((n = {
                    prependOption:
                        null == (e = t.paymentSourceId) ? { label: R.intl.string(R.t.iA5vA1), value: null } : null,
                    paymentSources: B,
                    hidePersonalInformation: M,
                    selectedPaymentSourceId: e,
                    onChange: function (e) {
                        null != e && W(e, void 0, K);
                    },
                    onPaymentSourceAdd: q,
                    dropdownLoading: z,
                    disabled: j,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                }),
                t.status === D.Dmq.PAST_DUE && t.isPremium
                    ? (0, i.jsx)(L, { dropdownProps: n, subscription: t, openInvoice: O ?? null })
                    : (0, i.jsx)(x.Ay, { ...n })),
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(S.f, {
                          currencies: a,
                          children: (0, i.jsx)("div", {
                              className: r()(P.Gl, G.Uu, G.Hu),
                              children: (0, i.jsx)(S.A, {
                                  label: R.intl.string(R.t["0YjaXf"]),
                                  selectedCurrency: Y,
                                  currencies: a,
                                  onChange: (e) => {
                                      W(void 0, e, K);
                                  },
                              }),
                          }),
                      }),
            ],
        });
    }
}
async function U(e, t, l) {
    let s = await (0, d.openModalLazy)(
        async () => {
            let { default: s } = await n.e("771678").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(s, { newInvoice: e, onConfirm: t, onCancel: l, modalProps: n });
        },
        {
            onCloseRequest: () => {
                null != s && (0, d.closeModal)(s), l();
            },
        },
    );
}
