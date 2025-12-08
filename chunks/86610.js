n.d(t, { J: () => I }), n(388685), n(539854), n(415506);
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(409813),
    s = n(346790),
    l = n(791785),
    c = n(961830),
    u = n(152521),
    d = n(733579),
    f = n(108135),
    p = n(147332),
    _ = n(333133),
    m = n(100788),
    h = n(981631),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e, t) => null != t && t.implemented && t.flowType === e,
    S = {
        [d.G.ORB_CHECKOUT]: {
            allowGiftCustomization: !1,
            disablePaymentAuthSteps: !0,
        },
        [d.G.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0 },
        [d.G.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class I {
    getUnifiedStepDefinition(e) {
        return this.tenantCheckoutFlowConfig.UnifiedCheckoutStepDefinitions[e];
    }
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.tenantCheckoutFlowConfig;
        if (null != e)
            return (t, n, i) =>
                (0, r.jsx)(e, {
                    plan: t,
                    onClose: n,
                    step: i,
                });
    }
    getPredicateStepConfig() {
        return this.checkoutFlow === d.G.COLLECTIBLES_CHECKOUT
            ? c.WA
            : this.checkoutFlow === d.G.ORB_CHECKOUT
              ? {
                    key: null,
                    renderStep: (e) =>
                        (0, r.jsx)(_.I, {
                            paymentModalStepProps: e,
                            defaultStep: o.h8.REVIEW,
                        }),
                }
              : {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(l.I, b({}, e)),
                };
    }
    getAddPaymentStepConfig() {
        if (this.checkoutFlow === d.G.ORB_CHECKOUT);
        else if (this.checkoutFlow === d.G.COLLECTIBLES_CHECKOUT) return s.n;
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = S[this.checkoutFlow];
        return t && n
            ? {
                  key: o.h8.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(p.P, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(o.h8.GIFT_CUSTOMIZATION),
                      }),
                  options: {
                      isLargeModal: !0,
                      useBreadcrumbLabel: () => g.intl.string(g.t["W685+b"]),
                  },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let { LEGACY_PAYMENT_STEPS: e = [] } = this.checkoutFlowConfiguration.TENANT_CHECKOUT_FLOW_CONFIG;
        return e.includes(o.h8.REVIEW)
            ? c.wo
            : {
                  key: o.h8.REVIEW,
                  renderStep: (e) =>
                      (0, r.jsx)(m.z, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(o.h8.REVIEW),
                      }),
                  options: { useBreadcrumbLabel: () => g.intl.string(g.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: r } = S[this.checkoutFlow],
            i = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig(),
            l = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([i, a, s, ...(r ? [] : c.yp), l]);
        return (
            null != n &&
                u.push({
                    key: o.h8.CONFIRM,
                    renderStep: n.renderStep,
                    options: n.options,
                }),
            u
        );
    }
    getApplicationId(e) {
        return this.checkoutFlow === d.G.ORB_CHECKOUT
            ? (0, u.Nb)(e)
            : this.checkoutFlow === d.G.COLLECTIBLES_CHECKOUT
              ? h.XAJ
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: o,
                giftContextProps: s,
                onCheckoutSuccess: l,
                skuId: c,
                loadId: u,
                applicationId: d,
                analyticsSourceLocation: f,
                analyticsLocations: p,
            } = e,
            _ = null != u ? u : (0, i.Z)(),
            { modalKey: m } = t,
            h = !1,
            g = this.generateRenderHeader(),
            E = null != d ? d : this.getApplicationId(c);
        return (0, a.ZDy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("9172").then(n.bind(n, 325906));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({ isGift: !!(null != s && s.isGift) }),
                        renderHeader: g,
                        skuId: c,
                        loadId: _,
                        applicationId: E,
                        analyticsLocations: p,
                        analyticsSourceLocation: f,
                        renderModalProps: t,
                        giftContextProps: s,
                        onCheckoutSuccess: (e) => {
                            h || l(e), (h = !0);
                        },
                        flowSpecificOptions: o,
                    });
            },
            O(b({}, t), {
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(h, _), (0, a.Mr3)(m);
                },
                modalKey: m,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        E(this, "checkoutFlow", void 0),
            E(this, "checkoutFlowConfiguration", void 0),
            E(this, "tenantCheckoutFlowConfig", void 0),
            (this.checkoutFlow = e);
        let t = f.d[e];
        if (!v(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        (this.checkoutFlowConfiguration = t), (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG);
    }
}
