i.d(t, { A: () => U });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(284009),
    o = i.n(a),
    u = i(17928),
    d = i(192308),
    c = i(821609),
    g = i(349288),
    m = i(289873),
    A = i(391048),
    h = i(158032),
    E = i(362111),
    S = i(457287),
    T = i(637141),
    x = i(688810),
    p = i(160946),
    f = i(351906),
    N = i(295405),
    _ = i(97352),
    I = i(428262),
    C = i(83617),
    b = i(615396),
    v = i(543767),
    y = i(793574),
    j = i(658040),
    O = i(166532),
    R = i(532794);
function L(e) {
    let { dropdownProps: t, subscription: i, openInvoice: s } = e,
        { enabled: l } = (0, j.z0)({ location: "premium_settings_payment_source_dropdown" }),
        { analyticsLocations: r } = (0, x.Ay)(y.A.SUBSCRIPTION_DETAILS);
    return l
        ? null == s
            ? (0, n.jsx)(T.Ay, { ...t, disabled: !0 })
            : (0, n.jsx)(T.Ay, {
                  ...t,
                  onChange: (e) => {
                      null != e &&
                          (0, R.A)({
                              initialPlanId: i.planIdFromItems,
                              openInvoiceId: s.id,
                              analyticsLocations: r,
                              initialPaymentSourceId: e.id,
                          });
                  },
                  onPaymentSourceAdd: () => {
                      (0, R.A)({
                          initialPlanId: i.planIdFromItems,
                          openInvoiceId: s.id,
                          analyticsLocations: r,
                          startingStepOverride: O.pn.ADD_PAYMENT_STEPS,
                      });
                  },
              })
        : (0, n.jsx)(T.Ay, { ...t });
}
var D = i(652215),
    P = i(375708),
    G = i(423474),
    M = i(582835);
function U(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: i,
            highlightAddPaymentMethodButton: l,
            analyticsLocation: a,
            currentInvoicePreview: y,
            disabled: j = !1,
            openInvoice: O,
        } = e,
        R = (0, u.bG)([f.A], () => f.A.hidePersonalInformation),
        [U, k] = (0, u.yK)([N.A], () => [N.A.paymentSources, N.A.hasFetchedPaymentSources]),
        w = (0, p.Y)((0, b.MP)(t)),
        { analyticsLocations: F } = (0, x.Ay)(),
        B = s.useMemo(() => {
            let e = y.checkoutContext;
            if (null == e) return Object.values(U).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(U).filter((e) => !e.invalid && t.has(e.id));
        }, [U, y.checkoutContext]),
        [z, Y] = s.useState(!1),
        [X, H] = s.useState(t.currency);
    async function K(e, i, n) {
        if (null == t) throw Error("missing subscription and paymentSource");
        null == e ? await h.r6(t, i, n, F, a) : await h.uK(t, e, n, F, a), Y(!1), H(i);
    }
    async function W(e, i, n) {
        Y(!0);
        let s = await (0, v.OQ)({
                subscriptionId: t.id,
                paymentSourceId: e?.id,
                renewal: !0,
                currency: null != e ? void 0 : i,
                analyticsLocations: F,
                analyticsLocation: a,
            }),
            l = { amount: s.subtotal, currency: s.currency };
        y.currency !== s.currency || (y.currency === s.currency && y.total !== s.total)
            ? await V(
                  s,
                  () => {
                      n(e, s.currency, l);
                  },
                  () => {
                      Y(!1);
                  },
              )
            : n(e, s.currency, l);
    }
    function Z(e) {
        (0, C.c_)(e.id, (0, b.MP)(t)).then(() => {
            W(e, void 0, K);
        }),
            "function" == typeof i && i(e.id);
    }
    let q = () => {
        (0, d.openModalLazy)(
            async () => (e) => (0, n.jsx)(E.default, { ...e, onAddPaymentSource: Z, analyticsLocation: a }),
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
            (e = (0, I.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, n.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: G.uZ,
                children: (0, n.jsx)(c.$, { variant: "secondary", text: P.intl.string(P.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if (!k || !w) return (0, n.jsx)(m.y, {});
    if (!(B.length > 0))
        return (0, n.jsx)(c.$, {
            fullWidth: !0,
            variant: l ? "primary" : "secondary",
            onClick: q,
            text: P.intl.string(P.t.CpOiEO),
        });
    {
        let e,
            i,
            s = _.A.get(t.planIdForCurrencies);
        o()(null != s, "Unable to fetch plan");
        let l = null != y.checkoutContext ? y.checkoutContext.allowed_currencies : null,
            a = null != l && l.length > 0 ? l : (0, C._w)(s, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? B.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === D.hes.TDS_WALLET;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                ((i = {
                    prependOption:
                        null == (e = t.paymentSourceId) ? { label: P.intl.string(P.t.iA5vA1), value: null } : null,
                    paymentSources: B,
                    hidePersonalInformation: R,
                    selectedPaymentSourceId: e,
                    onChange: function (e) {
                        null != e && W(e, void 0, K);
                    },
                    onPaymentSourceAdd: q,
                    dropdownLoading: z,
                    disabled: j,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                }),
                t.status === D.Dmq.PAST_DUE
                    ? (0, n.jsx)(L, { dropdownProps: i, subscription: t, openInvoice: O ?? null })
                    : (0, n.jsx)(T.Ay, { ...i })),
                null == t.paymentSourceId || d
                    ? null
                    : (0, n.jsx)(S.f, {
                          currencies: a,
                          children: (0, n.jsx)("div", {
                              className: r()(G.Gl, M.Uu, M.Hu),
                              children: (0, n.jsx)(S.A, {
                                  label: P.intl.string(P.t["0YjaXf"]),
                                  selectedCurrency: X,
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
async function V(e, t, s) {
    let l = await (0, d.openModalLazy)(
        async () => {
            let { default: l } = await i.e("49297").then(i.bind(i, 760941));
            return (i) => (0, n.jsx)(l, { newInvoice: e, onConfirm: t, onCancel: s, modalProps: i });
        },
        {
            onCloseRequest: () => {
                null != l && (0, d.closeModal)(l), s();
            },
        },
    );
}
