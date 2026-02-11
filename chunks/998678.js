"use strict";
n.d(t, { KP: () => eg, Y: () => em });
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(284009),
    o = n.n(s),
    l = n(311907),
    u = n(397927),
    c = n(73153),
    d = n(384904),
    _ = n(493405),
    f = n(391048),
    h = n(73079),
    p = n(15373),
    g = n(229403),
    E = n(959391),
    A = n(891197),
    I = n(202626),
    T = n(893234),
    y = n(964486),
    S = n(550238),
    v = n(648335),
    C = n(6332),
    b = n(182533),
    N = n(211528),
    R = n(626584),
    O = n(156312),
    D = n(166532),
    L = n(69494),
    w = n(19311),
    x = n(482132),
    P = n(617745),
    M = n(869177),
    k = n(921925),
    U = n(615405),
    G = n(825755),
    F = n(153084),
    V = n(295405),
    B = n(293700),
    j = n(67480),
    H = n(723702),
    Y = n(71532),
    W = n(427262),
    K = n(251913),
    $ = n(68231),
    z = n(632638),
    q = n(218075),
    X = n(682449),
    Z = n(490581),
    Q = n(168984),
    J = n(818348),
    ee = n(985018),
    et = n(470),
    en = n(586014);
let er = new R.A("AddPaymentStep.tsx"),
    ei = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    ea = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function es(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? q.f.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: et.rf,
        children: [(0, r.jsx)(q.j, { paymentRestrictionBannerType: n }), (0, r.jsx)(h.A, { ...e })],
    });
}
function eo(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([G.A], () => G.A.error);
    return (0, r.jsx)("div", { className: et.rf, children: (0, r.jsx)(I.A, { billingError: n, onCardInfoChange: t }) });
}
function el() {
    return (0, r.jsx)("div", { className: et.rf, children: (0, r.jsx)(p.A, {}) });
}
function eu() {
    return (0, r.jsx)("div", { className: et.rf, children: (0, r.jsx)(g.A, {}) });
}
function ec() {
    return (0, r.jsx)("div", { className: et.rf, children: (0, r.jsx)(Q.A, {}) });
}
function ed() {
    let e = (0, l.bG)([U.A], () => U.A.isBusy),
        t = (0, l.bG)([G.A], () => G.A.stripePaymentMethod);
    return (0, r.jsx)(T.y, { className: et.rf, stripePaymentMethod: t, submitting: e });
}
function e_(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.bG)([G.A], () => G.A.error);
    return (0, r.jsx)("div", {
        className: et.rf,
        children: (0, r.jsx)(E.n, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i,
        }),
    });
}
function ef() {
    return (0, r.jsx)(A.N, { className: et.rf });
}
function eh(e) {
    return () => (null != G.A.error && (0, f.ET)(), e());
}
function ep(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        a = t;
    null != t && (a = eh(t));
    let s = n;
    return null != n && (s = eh(n)), (0, r.jsx)(w.A, { ...i, onPrimary: a, onBack: s });
}
function em(e) {
    let t,
        n,
        s,
        c,
        {
            paymentModalArgs: h,
            initialStep: p,
            prependSteps: g,
            appendSteps: E,
            onReturn: A,
            onComplete: I,
            onStepChange: T,
            breadcrumpSteps: y,
            currentBreadcrumpStep: R,
            header: U,
            analyticsData: F,
            analyticsLocation: B,
            hideBreadcrumbs: K = !1,
            usePaymentModalStep: q = !1,
            isEligibleForTrial: Q = !1,
            allowDesktopRedirectPurchase: ei = !1,
            toastContent: ea,
            continueSessionToInitialStep: eh,
            overwriteSubscriptionPaymentSource: em = !1,
        } = e,
        { stripe: eg, contextMetadata: eE, activitySessionId: eA, paymentElementsEnabled: eI } = (0, O.P5)(),
        eT = i.useMemo(() => {
            let e = p === D.pn.PAYMENT_TYPE || p === D.pn.PAYMENT_ELEMENT;
            return eI && e ? (ei ? D.pn.AWAITING_BROWSER_CHECKOUT : D.pn.PAYMENT_ELEMENT) : p;
        }, [eI, p, ei]),
        ey = i.useMemo(() => (0, W.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eS,
            PAYPAL_STEPS: ev,
            IDEAL_STEPS: eC,
            PAYMENT_REQUEST_STEPS: eb,
            VENMO_STEPS: eN,
            ADD_PAYMENT_STEPS: eR,
            PRZELEWY24_STEPS: eO,
            EPS_STEPS: eD,
            CASH_APP_STEPS: eL,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ew,
        } = (0, $.kh)({ prependSteps: g, appendSteps: E, paymentElementsEnabled: eI });
    function ex(e) {
        switch (e) {
            case D.pn.CREDIT_CARD_INFORMATION:
                return eS;
            case D.pn.CASH_APP_INFORMATION:
                return eL;
            default:
                return { steps: [D.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eP, eM] = i.useState(eT),
        [ek, eU] = i.useState(null),
        [eG, eF] = i.useState(ex(eT)),
        eV = (0, l.bG)([G.A], () => G.A.redirectedPaymentSourceId),
        eB = (0, l.bG)([Z.A], () => Z.A.cashAppPayComponent),
        ej = { completeSteps: tl, setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep },
        eH = i.useRef(ej);
    i.useEffect(() => {
        eH.current = ej;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eH.current;
            (async () => {
                if (null == eV) return;
                await (0, d.$o)();
                let n = V.A.getPaymentSource(eV);
                null != n && (e(n), t(!1), G.A.clearRedirectedPaymentSourceId());
            })();
        }, [eV]);
    let eY = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eU(null), eM(e), t && T({ currentStep: eP, toStep: e });
        },
        [eP, T],
    );
    function eW(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== ea ? ea : ee.intl.string(ee.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            I(eP, e),
            eY(eT, !1);
    }
    let [eK, e$] = i.useState(null),
        {
            setPaymentSourceId: ez,
            creditCardState: eq,
            setCreditCardState: eX,
            tokenState: eZ,
            setTokenState: eQ,
            isSubmittingCurrentStep: eJ,
            billingAddressState: e0,
            setBillingAddressState: e1,
            setIsSubmittingCurrentStep: e2,
            hasRedirectURL: e3,
            setHasRedirectURL: e6,
            braintreeEmail: e4,
            braintreeNonce: e5,
            venmoUsername: e7,
            adyenPaymentData: e8,
            isAuthenticating: e9,
            epsBankState: te,
            setEpsBankState: tt,
            p24BankState: tn,
            setP24BankState: tr,
            selectedSkuId: ti,
        } = h,
        ta = ti ?? "",
        ts = (0, l.bG)([j.A], () => j.A.get(ta), [ta]),
        to = ts?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        ez(e.id), eW(e);
    }
    let tu = !(0, H.isDesktop)() || ei ? ["googlePay", "applePay"] : [],
        [tc, td] = i.useState(!1),
        t_ = i.useRef(null),
        tf = () => {
            null != t_.current && t_.current.show();
        },
        {
            shouldRenderPaymentElement: th,
            paymentElementReady: tp,
            paymentElementSelectedType: tm,
            handlePaymentElementStep: tg,
            onBackFromPaymentElement: tE,
            combinedStripeElementsRef: tA,
            lastConfirmedSetupIntentRef: tI,
            stripePaymentElementProps: tT,
            stripeAddressElementProps: ty,
            addressElementKey: tS,
            remountAddressElement: tv,
        } = (0, N.Lw)({
            step: eP,
            continueSessionToInitialStep: eh,
            paymentElementsEnabled: eI,
            handleStepChange: eY,
            logger: er,
            shouldLogOnChangeEvents: ey || !1,
            onBillingAddressChange: (e, t) => {
                e1({ info: { ...e0.info, ...e }, isValid: t });
            },
        }),
        tC = i.useCallback(
            (e, t) => (eI && null != t && (0, v.PE)(e) ? () => tg(e) : () => eY(D.pn.PAYMENT_TYPE)),
            [eI, tg, eY],
        );
    switch (eP) {
        case D.pn.ATTEMPT_GOOGLE_PAY:
        case D.pn.ATTEMPT_APPLE_PAY:
        case D.pn.PAYMENT_TYPE:
            let tb = (e, t) => {
                    switch (e) {
                        case J.he.CARD:
                            ei ? eY(D.pn.AWAITING_BROWSER_CHECKOUT) : (eF(eS), eY(D.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case J.he.PAYPAL:
                            eF(ev), eY(D.pn.PAYPAL_INFORMATION);
                            break;
                        case J.he.VENMO:
                            eF(eN), eY(D.pn.VENMO_INFORMATION);
                            break;
                        case J.he.PAYMENT_REQUEST:
                            ei && "googlePay" === t
                                ? eY(D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : ei && "applePay" === t
                                  ? eY(D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eF(eb), eY(D.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case J.he.PRZELEWY24:
                            eF(eO), eY(D.pn.PRZELEWY24_INFORMATION);
                            break;
                        case J.he.EPS:
                            eF(eD), eY(D.pn.EPS_INFORMATION);
                            break;
                        case J.he.IDEAL:
                            eF(eC), eY(D.pn.IDEAL_INFORMATION);
                            break;
                        case J.he.CASH_APP:
                            eF(eL), eY(D.pn.CASH_APP_INFORMATION);
                            break;
                        case J.he.GIROPAY:
                        case J.he.PAYSAFE_CARD:
                        case J.he.GCASH:
                        case J.he.GRABPAY_MY:
                        case J.he.MOMO_WALLET:
                        case J.he.KAKAOPAY:
                        case J.he.GOPAY_WALLET:
                        case J.he.BANCONTACT:
                            eF({ steps: [...g, ...$.GC, ...E], methodType: e }), eY(D.pn.ADDRESS);
                    }
                    null != G.A.error && (0, f.ET)();
                },
                tN = (e, t) => {
                    e1((e) => ({ ...e, info: t })), eF(eb), tl(e);
                };
            const tR = () => {
                eF(eR), eY(D.pn.PAYMENT_TYPE);
            };
            let tO = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tR();
                e$(e);
                let { billingAddressInfo: n } = (0, Y.uK)(e),
                    r = S.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e1({ isValid: r, info: n }), !r))
                    return void eY(D.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, B);
                    tN(t, n);
                } catch (e) {
                    tR();
                }
            };
            if (eP === D.pn.ATTEMPT_GOOGLE_PAY || eP === D.pn.ATTEMPT_APPLE_PAY) {
                let e = ee.intl.string(eP === D.pn.ATTEMPT_APPLE_PAY ? ee.t.czhXDv : ee.t.Zj2xQ0),
                    i = ee.intl.string(eP === D.pn.ATTEMPT_APPLE_PAY ? ee.t.WoXvJL : ee.t.wnVVr0);
                (t = (0, r.jsx)(M.V, {
                    onChooseType: tb,
                    paymentRequestWallet: eP === D.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tO,
                    onPaymentRequestFailure: () => {
                        tb(J.he.CARD), eU(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: t_,
                })),
                    (n = (0, r.jsx)(ep, {
                        onBack: () => eY(D.pn.PAYMENT_TYPE),
                        primaryCTA: w.A.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tc,
                    }));
                break;
            }
            (t = (0, r.jsx)(es, {
                onChooseType: tb,
                onStripePaymentMethodReceived: tO,
                paymentRequestWallets: tu,
                isEligibleForTrial: Q,
                paymentRequestPaymentContext: { contextMetadata: eE, activitySessionId: eA },
                paymentSourceTypeRestrictions: to,
            })),
                (n = (0, r.jsx)(ep, { onBack: A }));
            break;
        case D.pn.PAYMENT_ELEMENT:
            if (!eI) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tD = async () => {
                e2(!0);
                try {
                    if (null == tm || !(0, v.PE)(tm))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ew[tm];
                    if ((eF({ steps: e, methodType: t === J.he.UNKNOWN ? tm : t }), tm === J.he.PAYMENT_REQUEST)) {
                        let e = tA.current,
                            { paymentMethod: t } = await (0, d.YB)(eg, e),
                            { billingAddressInfo: n } = (0, Y.uK)(t);
                        e1((e) => ({ ...e, info: n })), tv(), eY(D.pn.ADDRESS);
                    } else {
                        let e = (0, v.eI)(tm);
                        null != e ? eY(e) : eY(D.pn.ADDRESS);
                    }
                } catch (e) {
                    er.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(ep, {
                    onBack: () => {
                        tE(), A?.();
                    },
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !tp,
                    onPrimary: tD,
                }));
            break;
        case D.pn.CREDIT_CARD_INFORMATION:
            let tL = async (e) => {
                e2(!0);
                try {
                    let t = await (0, d.YJ)(eg, e);
                    eQ({ token: t }), eY(D.pn.ADDRESS);
                } catch (e) {
                    er.error(e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            t = (0, r.jsx)(eo, {
                onCardInfoChange: (e, t) => {
                    eX({ info: e, isValid: t }), e1((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tw = !eq.isValid,
                tx = () => {
                    eY(D.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ep, {
                        onBack: tx,
                        primaryCTA: w.A.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: ee.intl.string(ee.t.PDTjLN),
                        primarySubmitting: eJ,
                        primaryDisabled: tw,
                        onPrimary: () => tL(t),
                    });
                },
            });
            break;
        case D.pn.AWAITING_BROWSER_CHECKOUT:
        case D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tP = () => {
                    eF(eS), eY(eI ? D.pn.PAYMENT_ELEMENT : D.pn.CREDIT_CARD_INFORMATION);
                },
                tM = () => {
                    eI ? (tE(), A?.()) : (eF(eR), eY(D.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)("div", {
                className: et.rf,
                children: (0, r.jsx)(P.t, { step: eP, onPurchaseComplete: () => I(eP), onHandoffFailure: tP }),
            })),
                (n = (0, r.jsx)(P.q, { onPrimaryClick: tP, onBackClick: tM }));
            break;
        case D.pn.EPS_INFORMATION:
            t = (0, r.jsx)(b.A, {
                type: J.he.EPS,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEPSBankChange: (e) => tt(e),
                epsBankValue: te,
                billingAddressInfo: e0.info,
            });
            let tk = tC(J.he.EPS, tm);
            n = (0, r.jsx)(ep, {
                onBack: tk,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled: void 0 === te || "" === te || "" === e0.info.name,
                onPrimary: () => eY(D.pn.ADDRESS),
            });
            break;
        case D.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(C.A, {
                type: J.he.IDEAL,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                billingAddressInfo: e0.info,
            })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eY(D.pn.PAYMENT_TYPE),
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primaryDisabled: "" === e0.info.name,
                    onPrimary: () => eY(D.pn.ADDRESS),
                }));
            break;
        case D.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(b.A, {
                type: J.he.PRZELEWY24,
                onNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEmailChange: (e) => e1({ info: { ...e0.info, email: e }, isValid: e0.isValid }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: e0.info,
            });
            let tU = tC(J.he.PRZELEWY24, tm);
            n = (0, r.jsx)(ep, {
                onBack: tU,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled:
                    void 0 === e0.info.name ||
                    "" === e0.info.name ||
                    void 0 === e0.info.email ||
                    "" === e0.info.email ||
                    void 0 === tn ||
                    "" === tn,
                onPrimary: () => eY(D.pn.ADDRESS),
            });
            break;
        case D.pn.PAYPAL_INFORMATION:
            let tG = 0 !== e4.length && null != e5;
            t = (0, r.jsx)(el, {});
            let tF = tC(J.he.PAYPAL, tm);
            n = (0, r.jsx)(ep, {
                onBack: tF,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tG ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t.Djzd7L),
                onPrimary: () => (tG ? eY(D.pn.ADDRESS) : (0, _.$e)()),
            });
            break;
        case D.pn.VENMO_INFORMATION:
            let tV = 0 !== e7.length && null != e5;
            t = (0, r.jsx)(eu, {});
            let tB = tC(J.he.VENMO, tm);
            n = (0, r.jsx)(ep, {
                onBack: tB,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tV ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["4KoTLM"]),
                onPrimary: () => (tV ? eY(D.pn.ADDRESS) : (0, _.jR)()),
            });
            break;
        case D.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ed, {})), (n = (0, r.jsx)(ep, { onBack: () => eY(D.pn.PAYMENT_TYPE) }));
            break;
        case D.pn.CASH_APP_INFORMATION:
            let tj = null != e8,
                tH = null != eB;
            t = (0, r.jsx)(ec, {});
            let tY = tC(J.he.CASH_APP, tm);
            n = (0, r.jsx)(ep, {
                onBack: tY,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tj ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["9ALP8w"]),
                onPrimary: () => (tj ? eY(D.pn.ADDRESS) : (0, X.uy)()),
                primaryDisabled: !tH,
            });
            break;
        case D.pn.ADDRESS:
            let tW = eI && null != tm,
                tK = async () => {
                    e2(!0);
                    let e = tW ? tm : eG.methodType,
                        t = [
                            eg,
                            tA.current,
                            {
                                billingAddress: e0.info,
                                paymentSourceType: e ?? J.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tI,
                            },
                            B,
                        ];
                    switch (e) {
                        case J.he.PAYMENT_REQUEST:
                            if (tW) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tl(e);
                                } catch (e) {
                                    e2(!1), er.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eK) throw (tR(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tl(await (0, d.Tv)(eK, e0.info, B));
                            break;
                        case J.he.CARD:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.u6)(eg, eZ.token, e0.info, B);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.VENMO:
                        case J.he.PAYPAL:
                            try {
                                o()(null != e5, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e5, e0.info, B);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.EPS:
                            try {
                                let e = await (0, d.Z9)(eg, te, e0.info, B);
                                tl(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.IDEAL:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.EB)(eg, e0.info, B);
                                tl(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.PRZELEWY24:
                            try {
                                if (void 0 === tn) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(eg, { p24Bank: tn }, e0.info, B);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.PAYSAFE_CARD:
                        case J.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e0.info, e, B);
                                tl(t);
                            } catch {}
                            break;
                        case J.he.GCASH:
                        case J.he.MOMO_WALLET:
                        case J.he.KAKAOPAY:
                        case J.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e0.info, e, B);
                                e6(t);
                            } catch {}
                            break;
                        case J.he.GIROPAY:
                        case J.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(eg, e0.info, e, B);
                                tl(t);
                            } catch {}
                            break;
                        case J.he.CASH_APP:
                            try {
                                o()(null != e8, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e0.info, e, B, e8, em);
                                o()(null != t, "Cash App Pay Payment Source missing"), tl(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e3 || e2(!1);
                };
            switch (eG.methodType) {
                case J.he.CARD:
                    (c = D.pn.CREDIT_CARD_INFORMATION), (s = J.he.CARD);
                    break;
                case J.he.PAYPAL:
                    (c = D.pn.PAYPAL_INFORMATION), (s = J.he.PAYPAL);
                    break;
                case J.he.VENMO:
                    (c = D.pn.VENMO_INFORMATION), (s = J.he.VENMO);
                    break;
                case J.he.GIROPAY:
                    (c = D.pn.PAYMENT_TYPE), (s = J.he.GIROPAY);
                    break;
                case J.he.PAYSAFE_CARD:
                case J.he.GCASH:
                case J.he.GRABPAY_MY:
                case J.he.MOMO_WALLET:
                case J.he.KAKAOPAY:
                case J.he.GOPAY_WALLET:
                case J.he.BANCONTACT:
                    (c = D.pn.PAYMENT_TYPE), (s = eG.methodType);
                    break;
                case J.he.EPS:
                    (c = D.pn.EPS_INFORMATION), (s = J.he.EPS);
                    break;
                case J.he.IDEAL:
                    (c = D.pn.IDEAL_INFORMATION), (s = J.he.IDEAL);
                    break;
                case J.he.PRZELEWY24:
                    (c = D.pn.PRZELEWY24_INFORMATION), (s = J.he.PRZELEWY24);
                    break;
                case J.he.CASH_APP:
                    (c = D.pn.CASH_APP_INFORMATION), (s = J.he.CASH_APP);
                    break;
                default:
                    (c = D.pn.PAYMENT_TYPE), (s = J.he.CARD);
            }
            tW && (c = D.pn.PAYMENT_ELEMENT),
                (t = tW
                    ? null
                    : (0, r.jsx)(e_, {
                          billingAddressInfo: e0.info,
                          onBillingAddressChange: (e, t) => {
                              e1({ info: { ...e0.info, ...e }, isValid: t });
                          },
                          paymentSourceType: s,
                      })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eY(c),
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !e0.isValid || e9,
                    onPrimary: tK,
                }));
            break;
        case D.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(ef, {});
            break;
        default:
            throw Error(`Unexpected step: ${eP}`);
    }
    let t$ = eI && th,
        tz = t$ ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(u.YC2, {
            className: en.C9,
            staticClassName: en.a2,
            animatedNodeClassName: en.L2,
            fillParent: !0,
            overrideKey: tz,
            step: eP,
            steps: eG.steps,
            sideMargin: 20,
            children: [
                null != ek &&
                    (0, r.jsx)("div", {
                        className: et.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: ek }),
                    }),
                t$ &&
                    (0, r.jsx)(N.e4, {
                        step: eP,
                        analyticsContext:
                            null != F ? { activitySessionId: eA, contextMetadata: eE, analyticsData: F } : void 0,
                        paymentElementSelectedType: tm,
                        elementsRef: tA,
                        stripePaymentElementProps: tT,
                        stripeAddressElementProps: ty,
                        addressElementKey: tS,
                        billingAddressInfo: e0.info,
                        onSetupError: () => {
                            tE(), eY(D.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tX = eP === D.pn.PAYMENT_TYPE && 0 === g.length ? null : n;
    return q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Q && (0, r.jsx)(L.A, { className: et.At, isEligibleForTrial: Q }),
                  (0, r.jsxs)(x.dZ, { children: [(0, r.jsx)(k.A, { className: et._8 }), tq] }),
                  (0, r.jsx)(x.UX, { children: tX }),
              ],
          })
        : (0, r.jsx)(z.A, {
              steps: y ?? eG.steps,
              currentStep: R ?? eP,
              overrideKey: tz,
              paymentError: h.paymentError,
              header: U,
              hideBreadcrumbs: K,
              body: tq,
              footer: tX,
          });
}
function eg(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cf)([V.A], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : V.A.defaultPaymentSourceId,
        paymentSources: V.A.paymentSources,
        hasFetchedPaymentSources: V.A.hasFetchedPaymentSources,
    }));
    (0, y.Ay)(() => {
        null == Z.A.cashAppPayComponent && (0, X.UU)(), (0, _.UU)(), r || (0, d.$o)();
    });
    let [a, s] = i.useState(t);
    null != t && null == a && s(t);
    let [o, u] = i.useState(() => ({ info: ei, isValid: !1 })),
        [h, p] = i.useState(() => ({ info: ea, isValid: !1 })),
        [g, E] = i.useState(""),
        [A, I] = i.useState(""),
        [T, S] = i.useState(() => ({ token: null })),
        [v, C, b, N, R] = (0, l.yK)([G.A], () => [
            G.A.braintreeEmail,
            G.A.braintreeNonce,
            G.A.error,
            G.A.venmoUsername,
            G.A.adyenPaymentData,
        ]),
        [O, D] = (0, l.yK)([F.A], () => [F.A.error, F.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            p({ info: t, isValid: t.country.length > 0 });
        };
        return (
            c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, f.ET)();
            }
        );
    }, []);
    let [L, w] = i.useState(!1),
        [x, P] = i.useState(!1),
        [M, k] = i.useState(null),
        U = i.useRef(null),
        j = (0, l.bG)([F.A], () => F.A.isAwaitingAuthentication),
        [H, Y] = (0, l.yK)([B.A], () => [B.A.purchaseTokenAuthState, B.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != M && null != U.current && U.current.scrollIntoView({ behavior: "smooth" });
        }, [M]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: s,
            creditCardState: o,
            setCreditCardState: u,
            tokenState: T,
            setTokenState: S,
            billingAddressState: h,
            setBillingAddressState: p,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: w,
            hasRedirectURL: x,
            setHasRedirectURL: P,
            braintreeEmail: v,
            braintreeNonce: C,
            venmoUsername: N,
            adyenPaymentData: R,
            paymentError: null != O ? O : b,
            paymentAuthenticationState: D ? K.oc.PENDING : null != O ? K.oc.ERROR : K.oc.NONE,
            purchaseError: M,
            setPurchaseError: k,
            purchaseErrorBlockRef: U,
            isAuthenticating: j,
            purchaseTokenAuthState: H,
            purchaseTokenHash: Y,
            epsBankState: A,
            setEpsBankState: I,
            p24BankState: g,
            setP24BankState: E,
        }
    );
}
