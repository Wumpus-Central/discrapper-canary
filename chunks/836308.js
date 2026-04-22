n.d(t, { GJ: () => v, ZL: () => I, uv: () => T, zg: () => g });
var l = n(627968),
    i = n(64700),
    a = n(391048),
    r = n(73079),
    s = n(323082),
    o = n(459357),
    u = n(550238),
    c = n(93159),
    d = n(156312),
    p = n(166532),
    m = n(19311),
    h = n(869177),
    A = n(825755),
    _ = n(723702),
    C = n(71532),
    E = n(218075),
    y = n(632721),
    f = n(818348),
    P = n(985018),
    S = n(801753);
function x(e) {
    return () => (null != A.A.error && (0, a.ET)(), e());
}
function T(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        a = t;
    null != t && (a = x(t));
    let r = n;
    return null != n && (r = x(n)), (0, l.jsx)(m.Ay, { ...i, onPrimary: a, onBack: r });
}
function N(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? E.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, o.c)({ location: "AddPaymentStep" });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.je, { paymentRestrictionBannerType: n }),
            (0, l.jsx)(r.A, { ...e }),
            i && (0, l.jsx)(c.Z4, { className: S.SO }),
        ],
    });
}
let g = () => {
        let [e, t] = i.useState(!1),
            n = i.useRef(null);
        return {
            connectorPaymentRequestReady: e,
            setConnectorPaymentRequestReady: t,
            connectorPaymentRequestRef: n,
            showConnectorPaymentRequest: () => {
                null != n.current && n.current.show();
            },
        };
    },
    I = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: i,
                isEligibleForTrial: r,
                allowDesktopRedirectPurchase: o,
                onPaymentRequestSourceFailed: c,
                paymentModalArgs: m,
                handleStepChange: E,
                setPaymentMethodSteps: S,
                setPaymentRequestPaymentMethod: x,
                currentStep: T,
                setInfoNotice: g,
                completeSteps: I,
                paymentSourceTypeRestrictions: v,
                CREDIT_CARD_STEPS: b,
                PAYPAL_STEPS: R,
                VENMO_STEPS: M,
                PAYMENT_REQUEST_STEPS: j,
                PRZELEWY24_STEPS: L,
                EPS_STEPS: O,
                IDEAL_STEPS: D,
                CASH_APP_STEPS: U,
                setConnectorPaymentRequestReady: w,
                connectorPaymentRequestRef: k,
            } = e,
            { contextMetadata: F, activitySessionId: G } = (0, d.P5)(),
            { setBillingAddressState: B } = m,
            Y = (e, l) => {
                switch (e) {
                    case f.he.CARD:
                        o ? E(p.pn.AWAITING_BROWSER_CHECKOUT) : (S(b), E(p.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case f.he.PAYPAL:
                        S(R), E(p.pn.PAYPAL_INFORMATION);
                        break;
                    case f.he.VENMO:
                        S(M), E(p.pn.VENMO_INFORMATION);
                        break;
                    case f.he.PAYMENT_REQUEST:
                        o && "googlePay" === l
                            ? E(p.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : o && "applePay" === l
                              ? E(p.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (S(j), E(p.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case f.he.PRZELEWY24:
                        S(L), E(p.pn.PRZELEWY24_INFORMATION);
                        break;
                    case f.he.EPS:
                        S(O), E(p.pn.EPS_INFORMATION);
                        break;
                    case f.he.IDEAL:
                        S(D), E(p.pn.IDEAL_INFORMATION);
                        break;
                    case f.he.CASH_APP:
                        S(U), E(p.pn.CASH_APP_INFORMATION);
                        break;
                    case f.he.GIROPAY:
                    case f.he.PAYSAFE_CARD:
                    case f.he.GCASH:
                    case f.he.GRABPAY_MY:
                    case f.he.MOMO_WALLET:
                    case f.he.KAKAOPAY:
                    case f.he.GOPAY_WALLET:
                    case f.he.BANCONTACT:
                        S({ steps: [...t, ...y.GC, ...n], methodType: e }), E(p.pn.ADDRESS);
                }
                null != A.A.error && (0, a.ET)();
            },
            W = async (e, t) => {
                if (((0, a.mf)(e), null == e)) return void c();
                x(e);
                let { billingAddressInfo: n } = (0, C.uK)(e),
                    l = (0, u.Q)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), B({ isValid: l, info: n }), !l))
                    return void E(p.pn.ADDRESS);
                try {
                    var r;
                    (r = await (0, s.Tv)(e, n, i)), B((e) => ({ ...e, info: n })), S(j), I(r);
                } catch (e) {
                    c();
                }
            };
        if (T === p.pn.ATTEMPT_GOOGLE_PAY || T === p.pn.ATTEMPT_APPLE_PAY) {
            let e = P.intl.string(T === p.pn.ATTEMPT_APPLE_PAY ? P.t.czhXDv : P.t.Zj2xQ0);
            return (0, l.jsx)(h.V, {
                onChooseType: Y,
                paymentRequestWallet: T === p.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: W,
                onPaymentRequestFailure: () => {
                    Y(f.he.CARD), g(e);
                },
                onValidPaymentRequest: () => w(!0),
                paymentRequestRef: k,
            });
        }
        let V = !(0, _.isDesktop)() || o;
        return (0, l.jsx)(N, {
            onChooseType: Y,
            onStripePaymentMethodReceived: W,
            paymentRequestWallets: V ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: r,
            paymentRequestPaymentContext: { contextMetadata: F, activitySessionId: G },
            paymentSourceTypeRestrictions: v,
        });
    },
    v = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: i,
            currentStep: a,
            connectorPaymentRequestReady: r,
            showConnectorPaymentRequest: s,
        } = e;
        if (a === p.pn.ATTEMPT_GOOGLE_PAY || a === p.pn.ATTEMPT_APPLE_PAY) {
            let e = P.intl.string(a === p.pn.ATTEMPT_APPLE_PAY ? P.t.WoXvJL : P.t.wnVVr0);
            return (0, l.jsx)(T, {
                onBack: () => i(p.pn.PAYMENT_TYPE),
                primaryCTA: m.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !r,
                shouldUseManaModal: n,
            });
        }
        return (0, l.jsx)(T, { onBack: t, shouldUseManaModal: n });
    };
