n.d(t, { J: () => g }), n(415506);
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(409813),
    s = n(152521),
    l = n(108135),
    c = n(333133),
    u = n(100788),
    d = n(388032);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e, t) => null != t && t.implemented && t.flowType === e;
class g {
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
    generateCheckoutStepConfigs() {
        return [
            {
                key: null,
                renderStep: (e) =>
                    (0, r.jsx)(c.I, {
                        paymentModalStepProps: e,
                        defaultStep: o.h8.REVIEW,
                    }),
            },
            {
                key: o.h8.REVIEW,
                renderStep: (e) => (0, r.jsx)(u.s, { paymentModalStepProps: e }),
                options: { useBreadcrumbLabel: () => d.intl.string(d.t.QBnNHq) },
            },
        ];
    }
    getApplicationId(e) {
        if (this.checkoutFlow === l.G.ORB_CHECKOUT) return (0, s.Nb)(e);
    }
    openCheckoutModal(e) {
        let {
                skuId: t,
                loadId: o,
                applicationId: s,
                analyticsSourceLocation: l,
                analyticsLocations: c,
                flowSpecificOptions: u,
                onCheckoutSuccess: d,
                modalOptions: f,
            } = e,
            { purchaseType: _, UnifiedCheckoutContextProvider: h } = this.checkoutFlowConfiguration,
            g = null != o ? o : (0, i.Z)(),
            { modalKey: E } = f,
            b = !1,
            y = this.generateRenderHeader(),
            O = null != s ? s : this.getApplicationId(t);
        return (0, a.ZDy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("9172").then(n.bind(n, 325906));
                return (n) =>
                    (0, r.jsx)(e, {
                        purchaseType: _,
                        UnifiedCheckoutContextProvider: h,
                        stepConfigs: this.generateCheckoutStepConfigs(),
                        renderHeader: y,
                        skuId: t,
                        loadId: g,
                        applicationId: O,
                        analyticsLocations: c,
                        renderModalProps: n,
                        analyticsSourceLocation: l,
                        onCheckoutSuccess: (e) => {
                            b || d(e), (b = !0);
                        },
                        flowSpecificOptions: u,
                    });
            },
            m(p({}, f), {
                onCloseRequest() {
                    null != f.onCloseRequest && f.onCloseRequest(b, g), (0, a.Mr3)(E);
                },
                modalKey: E,
            }),
        );
    }
    constructor({ checkoutFlow: e }) {
        f(this, "checkoutFlow", void 0), f(this, "checkoutFlowConfiguration", void 0), (this.checkoutFlow = e);
        let t = l.d[e];
        if (!h(e, t)) throw Error("Checkout flow ".concat(e, " is not implemented"));
        this.checkoutFlowConfiguration = t;
    }
}
