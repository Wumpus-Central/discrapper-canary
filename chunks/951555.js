n.d(t, { A: () => k });
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
    A = n(331322),
    E = n(683071),
    h = n(391048),
    S = n(158032),
    T = n(362111),
    p = n(457287),
    x = n(637141),
    f = n(688810),
    I = n(277984),
    _ = n(160946),
    N = n(351906),
    C = n(295405),
    b = n(97352),
    y = n(158045),
    v = n(83617),
    j = n(615396),
    O = n(543767),
    L = n(793574),
    R = n(166532),
    D = n(75678);
function P(e) {
    let { dropdownProps: t, subscription: n, openInvoice: l } = e,
        { analyticsLocations: s } = (0, f.Ay)(L.A.SUBSCRIPTION_DETAILS);
    return null == l
        ? (0, i.jsx)(x.Ay, { ...t, disabled: !0 })
        : (0, i.jsx)(x.Ay, {
              ...t,
              onChange: (e) => {
                  null != e &&
                      (0, D.A)({
                          initialPlanId: n.planIdFromItems,
                          openInvoiceId: l.id,
                          analyticsLocations: s,
                          initialPaymentSourceId: e.id,
                      });
              },
              onPaymentSourceAdd: () => {
                  (0, D.A)({
                      initialPlanId: n.planIdFromItems,
                      openInvoiceId: l.id,
                      analyticsLocations: s,
                      startingStepOverride: R.pn.ADD_PAYMENT_STEPS,
                  });
              },
          });
}
var G = n(652215),
    U = n(375708),
    M = n(153345),
    V = n(938442);
function k(e) {
    let {
            subscription: t,
            onPaymentSourceAdded: n,
            highlightAddPaymentMethodButton: s,
            analyticsLocation: a,
            currentInvoicePreview: L,
            disabled: R = !1,
            openInvoice: D,
        } = e,
        k = (0, u.bG)([N.A], () => N.A.hidePersonalInformation),
        [F, B, z] = (0, u.yK)([C.A], () => [
            C.A.paymentSources,
            C.A.hasFetchedPaymentSources,
            C.A.paymentSourceFetchError,
        ]),
        X = (0, _.Y)((0, j.MP)(t)),
        { analyticsLocations: Y } = (0, f.Ay)(),
        H = l.useMemo(() => {
            let e = L.checkoutContext;
            if (null == e) return Object.values(F).filter((e) => !e.invalid);
            let t = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
            return Object.values(F).filter((e) => !e.invalid && t.has(e.id));
        }, [F, L.checkoutContext]),
        [K, W] = l.useState(!1),
        [Z, q] = l.useState(t.currency);
    async function Q(e, n, i) {
        if (null == t) throw Error("missing subscription and paymentSource");
        (null == e ? await S.r6(t, n, i, Y, a) : await S.uK(t, e, i, Y, a), W(!1), q(n));
    }
    async function J(e, n, i) {
        W(!0);
        let l = await (0, O.OQ)({
                subscriptionId: t.id,
                paymentSourceId: e?.id,
                renewal: !0,
                currency: null != e ? void 0 : n,
                analyticsLocations: Y,
                analyticsLocation: a,
            }),
            s = { amount: l.subtotal, currency: l.currency };
        L.currency !== l.currency || (L.currency === l.currency && L.total !== l.total)
            ? await w(
                  l,
                  () => {
                      i(e, l.currency, s);
                  },
                  () => {
                      W(!1);
                  },
              )
            : i(e, l.currency, s);
    }
    function $(e) {
        ((0, v.c_)(e.id, (0, j.MP)(t)).then(() => {
            J(e, void 0, Q);
        }),
            "function" == typeof n && n(e.id));
    }
    let ee = () => {
        (0, d.openModalLazy)(
            async () => (e) => (0, i.jsx)(T.default, { ...e, onAddPaymentSource: $, analyticsLocation: a }),
            {
                onCloseCallback: () => {
                    (0, h.ET)();
                },
                onCloseRequest: G.tEg,
            },
        );
    };
    if (t.isPurchasedExternally) {
        let e;
        return (
            o()(null != t.paymentGateway, "Expected payment gateway when managed externally"),
            (e = (0, y.tW)(t.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")),
            (0, i.jsx)(g.Anchor, {
                href: e,
                useDefaultUnderlineStyles: !1,
                className: M.uZ,
                children: (0, i.jsx)(c.$, { variant: "secondary", text: U.intl.string(U.t.SgX7Ra), fullWidth: !0 }),
            })
        );
    }
    if ((!B && !z) || !X) return (0, i.jsx)(m.y, {});
    if (H.length > 0) {
        let e,
            n,
            l = b.A.get(t.planIdForCurrencies);
        o()(null != l, "Unable to fetch plan");
        let s = null != L.checkoutContext ? L.checkoutContext.allowed_currencies : null,
            a = null != s && s.length > 0 ? s : (0, v._w)(l, t.paymentSourceId, !1),
            u = null != t.paymentSourceId ? H.find((e) => e.id === t.paymentSourceId) : null,
            d = u?.type === G.hes.TDS_WALLET;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                ((n = {
                    prependOption:
                        null == (e = t.paymentSourceId) ? { label: U.intl.string(U.t.iA5vA1), value: null } : null,
                    paymentSources: H,
                    hidePersonalInformation: k,
                    selectedPaymentSourceId: e,
                    onChange: function (e) {
                        null != e && J(e, void 0, Q);
                    },
                    onPaymentSourceAdd: ee,
                    dropdownLoading: K,
                    disabled: R,
                    paymentGatewayRestrictions: t.eligiblePaymentGateways,
                }),
                t.status === G.Dmq.PAST_DUE && t.isPremium
                    ? (0, i.jsx)(P, { dropdownProps: n, subscription: t, openInvoice: D ?? null })
                    : (0, i.jsx)(x.Ay, { ...n })),
                null == t.paymentSourceId || d
                    ? null
                    : (0, i.jsx)(p.f, {
                          currencies: a,
                          children: (0, i.jsx)("div", {
                              className: r()(M.Gl, V.Uu, V.Hu),
                              children: (0, i.jsx)(p.A, {
                                  label: U.intl.string(U.t["0YjaXf"]),
                                  selectedCurrency: Z,
                                  currencies: a,
                                  onChange: (e) => {
                                      J(void 0, e, Q);
                                  },
                              }),
                          }),
                      }),
            ],
        });
    }
    if (z)
        return (0, i.jsxs)(A.B, {
            direction: "vertical",
            align: "start",
            gap: 8,
            children: [
                (0, i.jsx)(E.w, { type: "critical", children: U.intl.string(U.t["5mlOCW"]) }),
                (0, i.jsx)(c.$, {
                    variant: "secondary",
                    onClick: () => (0, I.$o)(),
                    text: U.intl.string(U.t["5911Lb"]),
                }),
            ],
        });
    return (0, i.jsx)(c.$, {
        fullWidth: !0,
        variant: s ? "primary" : "secondary",
        onClick: ee,
        text: U.intl.string(U.t.CpOiEO),
    });
}
async function w(e, t, l) {
    let s = await (0, d.openModalLazy)(
        async () => {
            let { default: s } = await n.e("771678").then(n.bind(n, 760941));
            return (n) => (0, i.jsx)(s, { newInvoice: e, onConfirm: t, onCancel: l, modalProps: n });
        },
        {
            onCloseRequest: () => {
                (null != s && (0, d.closeModal)(s), l());
            },
        },
    );
}
