"use strict";
n.d(t, { GJ: () => O, ZL: () => R, uv: () => v, zg: () => C });
var r = n(627968),
    i = n(64700),
    s = n(391048),
    a = n(73079),
    o = n(323082),
    l = n(459357),
    u = n(550238),
    c = n(93159),
    d = n(156312),
    _ = n(166532),
    f = n(19311),
    p = n(869177),
    h = n(825755),
    m = n(723702),
    E = n(71532),
    g = n(218075),
    A = n(632721),
    I = n(818348),
    T = n(985018),
    S = n(120420);
function y(e) {
    return () => (null != h.A.error && (0, s.ET)(), e());
}
function v(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        s = t;
    null != t && (s = y(t));
    let a = n;
    return null != n && (a = y(n)), (0, r.jsx)(f.Ay, { ...i, onPrimary: s, onBack: a });
}
function N(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? g.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, l.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(a.A, { ...e }),
            i && (0, r.jsx)(c.Z4, { className: S.SO }),
        ],
    });
}
let C = () => {
        let [e, t] = i.useState(!1),
            n = i.useRef(null),
            r = () => {
                null != n.current && n.current.show();
            };
        return {
            connectorPaymentRequestReady: e,
            setConnectorPaymentRequestReady: t,
            connectorPaymentRequestRef: n,
            showConnectorPaymentRequest: r,
        };
    },
    R = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: i,
                isEligibleForTrial: a,
                allowDesktopRedirectPurchase: l,
                onPaymentRequestSourceFailed: c,
                paymentModalArgs: f,
                handleStepChange: g,
                setPaymentMethodSteps: S,
                setPaymentRequestPaymentMethod: y,
                currentStep: v,
                setInfoNotice: C,
                completeSteps: R,
                paymentSourceTypeRestrictions: O,
                CREDIT_CARD_STEPS: b,
                PAYPAL_STEPS: D,
                VENMO_STEPS: L,
                PAYMENT_REQUEST_STEPS: w,
                PRZELEWY24_STEPS: M,
                EPS_STEPS: x,
                IDEAL_STEPS: P,
                CASH_APP_STEPS: k,
                setConnectorPaymentRequestReady: U,
                connectorPaymentRequestRef: G,
            } = e,
            { contextMetadata: F, activitySessionId: V } = (0, d.P5)(),
            { setBillingAddressState: B } = f,
            H = (e, r) => {
                switch (e) {
                    case I.he.CARD:
                        l ? g(_.pn.AWAITING_BROWSER_CHECKOUT) : (S(b), g(_.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case I.he.PAYPAL:
                        S(D), g(_.pn.PAYPAL_INFORMATION);
                        break;
                    case I.he.VENMO:
                        S(L), g(_.pn.VENMO_INFORMATION);
                        break;
                    case I.he.PAYMENT_REQUEST:
                        l && "googlePay" === r
                            ? g(_.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : l && "applePay" === r
                              ? g(_.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (S(w), g(_.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case I.he.PRZELEWY24:
                        S(M), g(_.pn.PRZELEWY24_INFORMATION);
                        break;
                    case I.he.EPS:
                        S(x), g(_.pn.EPS_INFORMATION);
                        break;
                    case I.he.IDEAL:
                        S(P), g(_.pn.IDEAL_INFORMATION);
                        break;
                    case I.he.CASH_APP:
                        S(k), g(_.pn.CASH_APP_INFORMATION);
                        break;
                    case I.he.GIROPAY:
                    case I.he.PAYSAFE_CARD:
                    case I.he.GCASH:
                    case I.he.GRABPAY_MY:
                    case I.he.MOMO_WALLET:
                    case I.he.KAKAOPAY:
                    case I.he.GOPAY_WALLET:
                    case I.he.BANCONTACT:
                        S({ steps: [...t, ...A.GC, ...n], methodType: e }), g(_.pn.ADDRESS);
                }
                null != h.A.error && (0, s.ET)();
            },
            j = (e, t) => {
                B((e) => ({ ...e, info: t })), S(w), R(e);
            },
            Y = async (e, t) => {
                if (((0, s.mf)(e), null == e)) return void c();
                y(e);
                let { billingAddressInfo: n } = (0, E.uK)(e),
                    r = u.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), B({ isValid: r, info: n }), !r))
                    return void g(_.pn.ADDRESS);
                try {
                    let t = await (0, o.Tv)(e, n, i);
                    j(t, n);
                } catch (e) {
                    c();
                }
            };
        if (v === _.pn.ATTEMPT_GOOGLE_PAY || v === _.pn.ATTEMPT_APPLE_PAY) {
            let e = T.intl.string(v === _.pn.ATTEMPT_APPLE_PAY ? T.t.czhXDv : T.t.Zj2xQ0);
            return (0, r.jsx)(p.V, {
                onChooseType: H,
                paymentRequestWallet: v === _.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: Y,
                onPaymentRequestFailure: () => {
                    H(I.he.CARD), C(e);
                },
                onValidPaymentRequest: () => U(!0),
                paymentRequestRef: G,
            });
        }
        let W = !(0, m.isDesktop)() || l ? ["googlePay", "applePay"] : [];
        return (0, r.jsx)(N, {
            onChooseType: H,
            onStripePaymentMethodReceived: Y,
            paymentRequestWallets: W,
            isEligibleForTrial: a,
            paymentRequestPaymentContext: { contextMetadata: F, activitySessionId: V },
            paymentSourceTypeRestrictions: O,
        });
    },
    O = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: i,
            currentStep: s,
            connectorPaymentRequestReady: a,
            showConnectorPaymentRequest: o,
        } = e;
        if (s === _.pn.ATTEMPT_GOOGLE_PAY || s === _.pn.ATTEMPT_APPLE_PAY) {
            let e = T.intl.string(s === _.pn.ATTEMPT_APPLE_PAY ? T.t.WoXvJL : T.t.wnVVr0);
            return (0, r.jsx)(v, {
                onBack: () => i(_.pn.PAYMENT_TYPE),
                primaryCTA: f.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => o(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, r.jsx)(v, { onBack: t, shouldUseManaModal: n });
    };
