n.d(t, { A: () => U });
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
    j = n(658040),
    O = n(166532),
    L = n(532794);
function D(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { enabled: s } = (0, j.z0)({ location: "premium_settings_payment_source_dropdown" }),
        { analyticsLocations: r } = (0, p.Ay)(v.A.SUBSCRIPTION_DETAILS);
    return s
        ? null == l
            ? (0, i.jsx)(x.Ay, { ...t, disabled: !0 })
            : (0, i.jsx)(x.Ay, {
                  ...t,
                  onChange: (e) => {
                      null != e &&
                          (0, L.A)({
                              initialPlanId: n.planIdFromItems,
                              openInvoiceId: l.id,
                              analyticsLocations: r,
                              initialPaymentSourceId: e.id,
                          });
                  },
                  onPaymentSourceAdd: () => {
                      (0, L.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: r,
                          startingStepOverride: O.pn.ADD_PAYMENT_STEPS,
                      });
                  },
              })
        : (0, i.jsx)(x.Ay, { ...t });
}
var R = n(652215),
    P = n(375708),
    G = n(153345),
    M = n(938442);
function U(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: s,
            analyticsLocation: a,
            currentInvoicePreview: v,
            disabled: j = !1,
            openInvoice: O,
        } = e,
        L = (0, u.bG)([f.A], () => f.A.hidePersonalInformation),
        [U, k] = (0, u.yK)([I.A], () => [I.A.paymentSources, I.A.hasFetchedPaymentSources]),
        w = (0, T.Y)((0, b.MP)(t)),
        { analyticsLocations: F } = (0, p.Ay)(),
        B = l.useMemo(() => {
            let e = v.checkoutContext;
            if (null == e) return Object.values(U).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(U).filter((e) => !e.invalid && t.has(e.id));
        }, [U, v.checkoutContext]),
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
            ? await V(
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
                onCloseRequest: R.tEg,
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
                className: G.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: P.intl.string(P.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!k || !w) return (0, i.jsx)(m.y, {});
    if (!(B.length > 0))
        return (0, i.jsx)(c.$, {
            fullWidth: !0,
            variant: s ? "primary" : "secondary",
            onClick: q,
            text: P.intl.string(P.t.CpOiEO),
        });
    {
        let e,
            n,
            l = _.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != v.checkoutContext ? v.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, C._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? B.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === R.hes.TDS_WALLET;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((n = {
                    prependOption:
                        null == (e = t.paymentSourceId) ? { label: P.intl.string(P.t.iA5vA1), value: null } : null,
                    paymentSources: B,
                    hidePersonalInformation: L,
                    selectedPaymentSourceId: e,
                    onChange: function (e) {
                        null != e && W(e, void 0, K);
                    },
                    onPaymentSourceAdd: q,
                    dropdownLoading: z,
                    disabled: j,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                }),
                t.status === R.Dmq.PAST_DUE
                    ? (0, i.jsx)(D, { dropdownProps: n, subscription: t, openInvoice: O ?? null })
                    : (0, i.jsx)(x.Ay, { ...n })),
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(S.f, {
                          currencies: a,
                          children: (0, i.jsx)("div", {
                              className: r()(G.Gl, M.Uu, M.Hu),
                              children: (0, i.jsx)(S.A, {
                                  label: P.intl.string(P.t["0YjaXf"]),
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
async function V(e, t, l) {
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
