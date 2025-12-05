n.d(t, { J: () => y }), n(388685), n(415506);
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(409813),
    s = n(152521),
    l = n(733579),
    c = n(108135),
    u = n(147332),
    d = n(333133),
    f = n(100788),
    p = n(388032);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e, t) => null != t && t.implemented && t.flowType === e,
    b = {
        [l.GE.ORB_CHECKOUT]: { allowGifting: !1 },
        [l.GE.COLLECTIBLES_CHECKOUT]: { allowGifting: !0 },
        [l.GE.PREMIUM_CHECKOUT]: { allowGifting: !0 },
    };
class y {
    generateRenderHeader() {
        let { UnifiedCheckoutCustomHeader: e } = this.checkoutFlowConfiguration;
        if (null != e)
            return (t, n, i) =>
                (0, r.jsx)(e, {
                    plan: t,
                    onClose: n,
                    step: i,
                });
    }
    generateCheckoutStepConfigs(e) {
        let { hasGiftCustomization: t } = e,
            n = {
                key: null,
                renderStep: (e) =>
                    (0, r.jsx)(d.I, {
                        paymentModalStepProps: e,
                        defaultStep: o.h8.REVIEW,
                    }),
            },
            i = {
                key: o.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(f.z, { paymentModalStepProps: e }),
                options: { useBreadcrumbLabel: () => p.intl.string(p.t.QBnNHq) },
            },
            { allowGifting: a } = b[this.checkoutFlow];
        return [
            n,
            ...(t && a
                ? [
                      {
                          key: o.h8.GIFT_CUSTOMIZATION,
                          renderStep: (e) => (0, r.jsx)(u.P, { paymentModalStepProps: e }),
                          options: {},
                      },
                  ]
                : []),
            i,
        ];
    }
    getApplicationId(e) {
        if (this.checkoutFlow === l.GE.ORB_CHECKOUT) return (0, s.Nb)(e);
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
            { modalKey: h } = t,
            E = !1,
            b = this.generateRenderHeader(),
            y = null != d ? d : this.getApplicationId(c);
        return (0, a.ZDy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("9172").then(n.bind(n, 325906));
                return (t) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        stepConfigs: this.generateCheckoutStepConfigs({ hasGiftCustomization: null != s }),
                        renderHeader: b,
                        skuId: c,
                        loadId: _,
                        applicationId: y,
                        analyticsLocations: p,
                        analyticsSourceLocation: f,
                        renderModalProps: t,
                        giftContextProps: s,
                        onCheckoutSuccess: (e) => {
                            E || l(e), (E = !0);
                        },
                        flowSpecificOptions: o,
                    });
            },
            g(m({}, t), {
                onCloseRequest() {
                    null != t.onCloseRequest && t.onCloseRequest(E, _), (0, a.Mr3)(h);
                },
                modalKey: h,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        _(this, "checkoutFlow", void 0), _(this, "checkoutFlowConfiguration", void 0), (this.checkoutFlow = e);
        let t = c.d[e];
        if (!E(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        this.checkoutFlowConfiguration = t;
    }
}
