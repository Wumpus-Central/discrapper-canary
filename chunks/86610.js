n.d(t, { J: () => T }), n(388685), n(539854), n(415506);
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(409813),
    s = n(791785),
    l = n(961830),
    c = n(152521),
    u = n(733579),
    d = n(508869),
    f = n(108135),
    p = n(899560),
    _ = n(147332),
    m = n(333133),
    h = n(100788),
    g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e, t) => null != t && t.implemented && t.flowType === e,
    I = {
        [u.G.ORB_CHECKOUT]: {
            allowGiftCustomization: !1,
            disablePaymentAuthSteps: !0,
            predicateStepType: "unified",
        },
        [u.G.COLLECTIBLES_CHECKOUT]: {
            allowGiftCustomization: !0,
            predicateStepType: "one_time_payment",
        },
        [u.G.SLAYER_STOREFRONT_CHECKOUT]: {
            allowGiftCustomization: !0,
            predicateStepType: "one_time_payment",
        },
        [u.G.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class T {
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
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? l.WA
            : "unified" === e
              ? {
                    key: null,
                    renderStep: (e) =>
                        (0, r.jsx)(m.I, {
                            paymentModalStepProps: e,
                            defaultStep: o.h8.REVIEW,
                        }),
                }
              : {
                    key: null,
                    renderStep: (e) => (0, r.jsx)(s.I, y({}, e)),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== u.G.ORB_CHECKOUT)
            return {
                key: o.h8.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(p.a, {
                        paymentModalStepProps: e,
                        returnStep: o.h8.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? o.h8.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        return t && n
            ? {
                  key: o.h8.GIFT_CUSTOMIZATION,
                  renderStep: (e) =>
                      (0, r.jsx)(_.P, {
                          paymentModalStepProps: e,
                          unifiedStepDefinition: this.getUnifiedStepDefinition(o.h8.GIFT_CUSTOMIZATION),
                      }),
                  options: {
                      isLargeModal: !0,
                      useBreadcrumbLabel: () => E.intl.string(E.t["W685+b"]),
                  },
              }
            : void 0;
    }
    getReviewStepConfig() {
        let e = this.getUnifiedStepDefinition(o.h8.REVIEW);
        return (0, d._)(e)
            ? l.wo
            : {
                  key: o.h8.REVIEW,
                  renderStep: (t) =>
                      (0, r.jsx)(h.z, {
                          paymentModalStepProps: t,
                          unifiedStepDefinition: e,
                      }),
                  options: { useBreadcrumbLabel: () => E.intl.string(E.t.QBnNHq) },
              };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            c = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([i, a, s, ...(r ? [] : l.yp), c]);
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
        return this.checkoutFlow === u.G.ORB_CHECKOUT
            ? (0, c.Nb)(e)
            : this.checkoutFlow === u.G.COLLECTIBLES_CHECKOUT
              ? g.XAJ
              : void 0;
    }
    openCheckoutModal(e) {
        let {
                openModalOptions: t,
                flowSpecificOptions: o,
                giftContextProps: s,
                onComplete: l,
                onClose: c,
                skuId: u,
                loadId: d,
                applicationId: f,
                analyticsSourceLocation: p,
                analyticsLocations: _,
            } = e,
            m = null != d ? d : (0, i.Z)(),
            { modalKey: h } = t,
            g = this.generateRenderHeader(),
            E = null != f ? f : this.getApplicationId(u),
            b = !1,
            O = null != o ? o : void 0;
        return (0, a.ZDy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("9172").then(n.bind(n, 325906));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: this.generateCheckoutStepConfigs({ isGift: !!(null != s && s.isGift) }),
                        onComplete: (e) => {
                            null != l && l(e), (b = !0);
                        },
                        onClose: c,
                        renderHeader: g,
                        skuId: u,
                        loadId: m,
                        applicationId: E,
                        analyticsLocations: _,
                        analyticsSourceLocation: p,
                        renderModalProps: t,
                        giftContextProps: s,
                        flowSpecificOptions: O,
                    });
            },
            v(y({}, t), {
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(b, m), (0, a.Mr3)(h);
                },
                modalKey: h,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        b(this, "checkoutFlow", void 0),
            b(this, "checkoutFlowConfiguration", void 0),
            b(this, "tenantCheckoutFlowConfig", void 0),
            b(this, "internalCheckoutFlowControls", void 0),
            (this.checkoutFlow = e);
        let t = f.d[e];
        if (!S(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = I[e]);
    }
}
