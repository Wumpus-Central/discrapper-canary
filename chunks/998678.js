"use strict";
n.d(t, { KP: () => eE, Y: () => em });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(284009),
    o = n.n(a),
    l = n(311907),
    u = n(397927),
    c = n(73153),
    d = n(384904),
    _ = n(493405),
    f = n(391048),
    p = n(73079),
    h = n(15373),
    m = n(229403),
    E = n(959391),
    g = n(891197),
    A = n(202626),
    I = n(893234),
    T = n(964486),
    S = n(721101),
    y = n(550238),
    v = n(648335),
    N = n(6332),
    C = n(182533),
    R = n(211528),
    O = n(626584),
    b = n(156312),
    D = n(166532),
    L = n(69494),
    w = n(19311),
    M = n(482132),
    x = n(617745),
    P = n(869177),
    k = n(921925),
    U = n(615405),
    G = n(825755),
    F = n(153084),
    V = n(295405),
    B = n(293700),
    H = n(67480),
    j = n(723702),
    Y = n(71532),
    W = n(427262),
    K = n(251913),
    $ = n(68231),
    z = n(632638),
    q = n(218075),
    Z = n(682449),
    X = n(490581),
    Q = n(168984),
    J = n(818348),
    ee = n(985018),
    et = n(470),
    en = n(586014);
let er = new O.A("AddPaymentStep.tsx"),
    ei = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    es = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function ea(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? q.fU.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(q.je, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.A, { ...e })],
    });
}
function eo(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([G.A], () => G.A.error);
    return (0, r.jsx)(A.A, { billingError: n, onCardInfoChange: t });
}
function el() {
    return (0, r.jsx)(h.A, {});
}
function eu() {
    return (0, r.jsx)(m.A, {});
}
function ec() {
    return (0, r.jsx)(Q.A, {});
}
function ed() {
    let e = (0, l.bG)([U.A], () => U.A.isBusy),
        t = (0, l.bG)([G.A], () => G.A.stripePaymentMethod);
    return (0, r.jsx)(I.y, { stripePaymentMethod: t, submitting: e });
}
function e_(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, l.bG)([G.A], () => G.A.error);
    return (0, r.jsx)(E.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function ef() {
    return (0, r.jsx)(g.N, {});
}
function ep(e) {
    return () => (null != G.A.error && (0, f.ET)(), e());
}
function eh(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        s = t;
    null != t && (s = ep(t));
    let a = n;
    return null != n && (a = ep(n)), (0, r.jsx)(w.Ay, { ...i, onPrimary: s, onBack: a });
}
function em(e) {
    let t,
        n,
        a,
        c,
        {
            paymentModalArgs: p,
            initialStep: h,
            prependSteps: m,
            appendSteps: E,
            onReturn: g,
            onComplete: A,
            onStepChange: I,
            breadcrumpSteps: T,
            currentBreadcrumpStep: S,
            header: O,
            analyticsData: U,
            analyticsLocation: F,
            hideBreadcrumbs: B = !1,
            usePaymentModalStep: K = !1,
            isEligibleForTrial: q = !1,
            allowDesktopRedirectPurchase: Q = !1,
            toastContent: ei,
            continueSessionToInitialStep: es,
            overwriteSubscriptionPaymentSource: ep = !1,
            shouldUseManaModal: em = !0,
        } = e,
        { stripe: eE, contextMetadata: eg, activitySessionId: eA, paymentElementsEnabled: eI } = (0, b.P5)(),
        eT = i.useMemo(() => {
            let e = h === D.pn.PAYMENT_TYPE || h === D.pn.PAYMENT_ELEMENT;
            return eI && e ? (Q ? D.pn.AWAITING_BROWSER_CHECKOUT : D.pn.PAYMENT_ELEMENT) : h;
        }, [eI, h, Q]),
        eS = i.useMemo(() => (0, W.Gn)(), []),
        {
            CREDIT_CARD_STEPS: ey,
            PAYPAL_STEPS: ev,
            IDEAL_STEPS: eN,
            PAYMENT_REQUEST_STEPS: eC,
            VENMO_STEPS: eR,
            ADD_PAYMENT_STEPS: eO,
            PRZELEWY24_STEPS: eb,
            EPS_STEPS: eD,
            CASH_APP_STEPS: eL,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ew,
        } = (0, $.kh)({ prependSteps: m, appendSteps: E, paymentElementsEnabled: eI });
    function eM(e) {
        switch (e) {
            case D.pn.CREDIT_CARD_INFORMATION:
                return ey;
            case D.pn.CASH_APP_INFORMATION:
                return eL;
            default:
                return { steps: [D.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [ex, eP] = i.useState(eT),
        [ek, eU] = i.useState(null),
        [eG, eF] = i.useState(eM(eT));
    i.useEffect(() => {
        (0, d.IV)();
    }, []);
    let eV = (0, l.bG)([G.A], () => G.A.redirectedPaymentSourceId),
        eB = (0, l.bG)([X.A], () => X.A.cashAppPayComponent),
        eH = { completeSteps: tl, setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep },
        ej = i.useRef(eH);
    i.useEffect(() => {
        ej.current = eH;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ej.current;
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
            eU(null), eP(e), t && I({ currentStep: ex, toStep: e });
        },
        [ex, I],
    );
    function eW(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== ei ? ei : ee.intl.string(ee.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            A(ex, e),
            eY(eT, !1);
    }
    let [eK, e$] = i.useState(null),
        {
            setPaymentSourceId: ez,
            creditCardState: eq,
            setCreditCardState: eZ,
            tokenState: eX,
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
        } = p,
        ts = ti ?? "",
        ta = (0, l.bG)([H.A], () => H.A.get(ts), [ts]),
        to = ta?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        ez(e.id), eW(e);
    }
    let tu = !(0, j.isDesktop)() || Q ? ["googlePay", "applePay"] : [],
        [tc, td] = i.useState(!1),
        t_ = i.useRef(null),
        tf = () => {
            null != t_.current && t_.current.show();
        },
        {
            shouldRenderPaymentElement: tp,
            paymentElementReady: th,
            paymentElementSelectedType: tm,
            handlePaymentElementStep: tE,
            onBackFromPaymentElement: tg,
            combinedStripeElementsRef: tA,
            lastConfirmedSetupIntentRef: tI,
            stripePaymentElementProps: tT,
            stripeAddressElementProps: tS,
            addressElementKey: ty,
            remountAddressElement: tv,
        } = (0, R.Lw)({
            step: ex,
            continueSessionToInitialStep: es,
            paymentElementsEnabled: eI,
            handleStepChange: eY,
            logger: er,
            shouldLogOnChangeEvents: eS || !1,
            onBillingAddressChange: (e, t) => {
                e1({ info: { ...e0.info, ...e }, isValid: t });
            },
        }),
        tN = i.useCallback(
            (e, t) => (eI && null != t && (0, v.PE)(e) ? () => tE(e) : () => eY(D.pn.PAYMENT_TYPE)),
            [eI, tE, eY],
        );
    switch (ex) {
        case D.pn.ATTEMPT_GOOGLE_PAY:
        case D.pn.ATTEMPT_APPLE_PAY:
        case D.pn.PAYMENT_TYPE:
            let tC = (e, t) => {
                    switch (e) {
                        case J.he.CARD:
                            Q ? eY(D.pn.AWAITING_BROWSER_CHECKOUT) : (eF(ey), eY(D.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case J.he.PAYPAL:
                            eF(ev), eY(D.pn.PAYPAL_INFORMATION);
                            break;
                        case J.he.VENMO:
                            eF(eR), eY(D.pn.VENMO_INFORMATION);
                            break;
                        case J.he.PAYMENT_REQUEST:
                            Q && "googlePay" === t
                                ? eY(D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : Q && "applePay" === t
                                  ? eY(D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eF(eC), eY(D.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case J.he.PRZELEWY24:
                            eF(eb), eY(D.pn.PRZELEWY24_INFORMATION);
                            break;
                        case J.he.EPS:
                            eF(eD), eY(D.pn.EPS_INFORMATION);
                            break;
                        case J.he.IDEAL:
                            eF(eN), eY(D.pn.IDEAL_INFORMATION);
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
                            eF({ steps: [...m, ...$.GC, ...E], methodType: e }), eY(D.pn.ADDRESS);
                    }
                    null != G.A.error && (0, f.ET)();
                },
                tR = (e, t) => {
                    e1((e) => ({ ...e, info: t })), eF(eC), tl(e);
                };
            const tO = () => {
                eF(eO), eY(D.pn.PAYMENT_TYPE);
            };
            let tb = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tO();
                e$(e);
                let { billingAddressInfo: n } = (0, Y.uK)(e),
                    r = y.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e1({ isValid: r, info: n }), !r))
                    return void eY(D.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, F);
                    tR(t, n);
                } catch (e) {
                    tO();
                }
            };
            if (ex === D.pn.ATTEMPT_GOOGLE_PAY || ex === D.pn.ATTEMPT_APPLE_PAY) {
                let e = ee.intl.string(ex === D.pn.ATTEMPT_APPLE_PAY ? ee.t.czhXDv : ee.t.Zj2xQ0),
                    i = ee.intl.string(ex === D.pn.ATTEMPT_APPLE_PAY ? ee.t.WoXvJL : ee.t.wnVVr0);
                (t = (0, r.jsx)(P.V, {
                    onChooseType: tC,
                    paymentRequestWallet: ex === D.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tb,
                    onPaymentRequestFailure: () => {
                        tC(J.he.CARD), eU(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: t_,
                })),
                    (n = (0, r.jsx)(eh, {
                        onBack: () => eY(D.pn.PAYMENT_TYPE),
                        primaryCTA: w.Ay.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tc,
                        shouldUseManaModal: em,
                    }));
                break;
            }
            (t = (0, r.jsx)(ea, {
                onChooseType: tC,
                onStripePaymentMethodReceived: tb,
                paymentRequestWallets: tu,
                isEligibleForTrial: q,
                paymentRequestPaymentContext: { contextMetadata: eg, activitySessionId: eA },
                paymentSourceTypeRestrictions: to,
            })),
                (n = (0, r.jsx)(eh, { onBack: g, shouldUseManaModal: em }));
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
                            { paymentMethod: t } = await (0, d.YB)(eE, e),
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
                (n = (0, r.jsx)(eh, {
                    onBack: () => {
                        tg(), g?.();
                    },
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !th,
                    onPrimary: tD,
                    shouldUseManaModal: em,
                }));
            break;
        case D.pn.CREDIT_CARD_INFORMATION:
            let tL = async (e) => {
                e2(!0);
                try {
                    let t = await (0, d.YJ)(eE, e);
                    eQ({ token: t }), eY(D.pn.ADDRESS);
                } catch (e) {
                    er.error(e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            t = (0, r.jsx)(eo, {
                onCardInfoChange: (e, t) => {
                    eZ({ info: e, isValid: t }), e1((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tw = !eq.isValid,
                tM = () => {
                    eY(D.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eh, {
                        onBack: tM,
                        primaryCTA: w.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: ee.intl.string(ee.t.PDTjLN),
                        primarySubmitting: eJ,
                        primaryDisabled: tw,
                        onPrimary: () => tL(t),
                        shouldUseManaModal: em,
                    });
                },
            });
            break;
        case D.pn.AWAITING_BROWSER_CHECKOUT:
        case D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tx = () => {
                    eF(ey), eY(eI ? D.pn.PAYMENT_ELEMENT : D.pn.CREDIT_CARD_INFORMATION);
                },
                tP = () => {
                    eI ? (tg(), g?.()) : (eF(eO), eY(D.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(x.t, { step: ex, onPurchaseComplete: () => A(ex), onHandoffFailure: tx })),
                (n = (0, r.jsx)(x.q, { onPrimaryClick: tx, onBackClick: tP }));
            break;
        case D.pn.EPS_INFORMATION:
            t = (0, r.jsx)(C.A, {
                type: J.he.EPS,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEPSBankChange: (e) => tt(e),
                epsBankValue: te,
                billingAddressInfo: e0.info,
            });
            let tk = tN(J.he.EPS, tm);
            n = (0, r.jsx)(eh, {
                onBack: tk,
                primaryCTA: w.Ay.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled: void 0 === te || "" === te || "" === e0.info.name,
                onPrimary: () => eY(D.pn.ADDRESS),
                shouldUseManaModal: em,
            });
            break;
        case D.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(N.A, {
                type: J.he.IDEAL,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                billingAddressInfo: e0.info,
            })),
                (n = (0, r.jsx)(eh, {
                    onBack: () => eY(D.pn.PAYMENT_TYPE),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primaryDisabled: "" === e0.info.name,
                    onPrimary: () => eY(D.pn.ADDRESS),
                    shouldUseManaModal: em,
                }));
            break;
        case D.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(C.A, {
                type: J.he.PRZELEWY24,
                onNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEmailChange: (e) => e1({ info: { ...e0.info, email: e }, isValid: e0.isValid }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: e0.info,
            });
            let tU = tN(J.he.PRZELEWY24, tm);
            n = (0, r.jsx)(eh, {
                onBack: tU,
                primaryCTA: w.Ay.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled:
                    void 0 === e0.info.name ||
                    "" === e0.info.name ||
                    void 0 === e0.info.email ||
                    "" === e0.info.email ||
                    void 0 === tn ||
                    "" === tn,
                onPrimary: () => eY(D.pn.ADDRESS),
                shouldUseManaModal: em,
            });
            break;
        case D.pn.PAYPAL_INFORMATION:
            let tG = 0 !== e4.length && null != e5;
            t = (0, r.jsx)(el, {});
            let tF = tN(J.he.PAYPAL, tm);
            n = (0, r.jsx)(eh, {
                onBack: tF,
                primaryCTA: w.Ay.CTAType.CONTINUE,
                primaryText: tG ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t.Djzd7L),
                onPrimary: () => (tG ? eY(D.pn.ADDRESS) : (0, _.$e)()),
                shouldUseManaModal: em,
            });
            break;
        case D.pn.VENMO_INFORMATION:
            let tV = 0 !== e7.length && null != e5;
            t = (0, r.jsx)(eu, {});
            let tB = tN(J.he.VENMO, tm);
            n = (0, r.jsx)(eh, {
                onBack: tB,
                primaryCTA: w.Ay.CTAType.CONTINUE,
                primaryText: tV ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["4KoTLM"]),
                onPrimary: () => (tV ? eY(D.pn.ADDRESS) : (0, _.jR)()),
                shouldUseManaModal: em,
            });
            break;
        case D.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ed, {})),
                (n = (0, r.jsx)(eh, { onBack: () => eY(D.pn.PAYMENT_TYPE), shouldUseManaModal: em }));
            break;
        case D.pn.CASH_APP_INFORMATION:
            let tH = null != e8,
                tj = null != eB;
            t = (0, r.jsx)(ec, {});
            let tY = tN(J.he.CASH_APP, tm);
            n = (0, r.jsx)(eh, {
                onBack: tY,
                primaryCTA: w.Ay.CTAType.CONTINUE,
                primaryText: tH ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["9ALP8w"]),
                onPrimary: () => (tH ? eY(D.pn.ADDRESS) : (0, Z.uy)()),
                primaryDisabled: !tj,
                shouldUseManaModal: em,
            });
            break;
        case D.pn.ADDRESS:
            let tW = eI && null != tm,
                tK = async () => {
                    e2(!0);
                    let e = tW ? tm : eG.methodType,
                        t = [
                            eE,
                            tA.current,
                            {
                                billingAddress: e0.info,
                                paymentSourceType: e ?? J.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tI,
                            },
                            F,
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
                            if (null == eK) throw (tO(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tl(await (0, d.Tv)(eK, e0.info, F));
                            break;
                        case J.he.CARD:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.u6)(eE, eX.token, e0.info, F);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.VENMO:
                        case J.he.PAYPAL:
                            try {
                                o()(null != e5, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e5, e0.info, F);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.EPS:
                            try {
                                let e = await (0, d.Z9)(eE, te, e0.info, F);
                                tl(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.IDEAL:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.EB)(eE, e0.info, F);
                                tl(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.PRZELEWY24:
                            try {
                                if (void 0 === tn) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(eE, { p24Bank: tn }, e0.info, F);
                                tl(e);
                            } catch {}
                            break;
                        case J.he.PAYSAFE_CARD:
                        case J.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e0.info, e, F);
                                tl(t);
                            } catch {}
                            break;
                        case J.he.GCASH:
                        case J.he.MOMO_WALLET:
                        case J.he.KAKAOPAY:
                        case J.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e0.info, e, F);
                                e6(t);
                            } catch {}
                            break;
                        case J.he.GIROPAY:
                        case J.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(eE, e0.info, e, F);
                                tl(t);
                            } catch {}
                            break;
                        case J.he.CASH_APP:
                            try {
                                o()(null != e8, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e0.info, e, F, e8, ep);
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
                    (c = D.pn.CREDIT_CARD_INFORMATION), (a = J.he.CARD);
                    break;
                case J.he.PAYPAL:
                    (c = D.pn.PAYPAL_INFORMATION), (a = J.he.PAYPAL);
                    break;
                case J.he.VENMO:
                    (c = D.pn.VENMO_INFORMATION), (a = J.he.VENMO);
                    break;
                case J.he.GIROPAY:
                    (c = D.pn.PAYMENT_TYPE), (a = J.he.GIROPAY);
                    break;
                case J.he.PAYSAFE_CARD:
                case J.he.GCASH:
                case J.he.GRABPAY_MY:
                case J.he.MOMO_WALLET:
                case J.he.KAKAOPAY:
                case J.he.GOPAY_WALLET:
                case J.he.BANCONTACT:
                    (c = D.pn.PAYMENT_TYPE), (a = eG.methodType);
                    break;
                case J.he.EPS:
                    (c = D.pn.EPS_INFORMATION), (a = J.he.EPS);
                    break;
                case J.he.IDEAL:
                    (c = D.pn.IDEAL_INFORMATION), (a = J.he.IDEAL);
                    break;
                case J.he.PRZELEWY24:
                    (c = D.pn.PRZELEWY24_INFORMATION), (a = J.he.PRZELEWY24);
                    break;
                case J.he.CASH_APP:
                    (c = D.pn.CASH_APP_INFORMATION), (a = J.he.CASH_APP);
                    break;
                default:
                    (c = D.pn.PAYMENT_TYPE), (a = J.he.CARD);
            }
            tW && (c = D.pn.PAYMENT_ELEMENT),
                (t = tW
                    ? null
                    : (0, r.jsx)(e_, {
                          billingAddressInfo: e0.info,
                          onBillingAddressChange: (e, t) => {
                              e1({ info: { ...e0.info, ...e }, isValid: t });
                          },
                          paymentSourceType: a,
                      })),
                (n = (0, r.jsx)(eh, {
                    onBack: () => eY(c),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !e0.isValid || e9,
                    onPrimary: tK,
                    shouldUseManaModal: em,
                }));
            break;
        case D.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(ef, {});
            break;
        default:
            throw Error(`Unexpected step: ${ex}`);
    }
    let t$ = eI && tp,
        tz = t$ ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(u.YC2, {
            className: en.C9,
            staticClassName: en.a2,
            animatedNodeClassName: en.L2,
            fillParent: !0,
            overrideKey: tz,
            step: ex,
            steps: eG.steps,
            sideMargin: 20,
            children: [
                null != ek &&
                    (0, r.jsx)("div", {
                        className: et.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: ek }),
                    }),
                t$ &&
                    (0, r.jsx)(R.e4, {
                        step: ex,
                        analyticsContext:
                            null != U ? { activitySessionId: eA, contextMetadata: eg, analyticsData: U } : void 0,
                        paymentElementSelectedType: tm,
                        elementsRef: tA,
                        stripePaymentElementProps: tT,
                        stripeAddressElementProps: tS,
                        addressElementKey: ty,
                        billingAddressInfo: e0.info,
                        onSetupError: () => {
                            tg(), eY(D.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tZ = ex === D.pn.PAYMENT_TYPE && 0 === m.length ? null : n;
    return K
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  q && (0, r.jsx)(L.A, { className: et.At, isEligibleForTrial: q }),
                  (0, r.jsxs)(M.dZ, { children: [(0, r.jsx)(k.A, { className: et._8 }), tq] }),
                  (0, r.jsx)(M.UX, { children: tZ }),
              ],
          })
        : (0, r.jsx)(z.A, {
              shouldUseManaModal: em,
              steps: T ?? eG.steps,
              currentStep: S ?? ex,
              overrideKey: tz,
              paymentError: p.paymentError,
              header: O,
              hideBreadcrumbs: B,
              body: tq,
              footer: tZ,
          });
}
function eE(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, l.cf)([V.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : V.A.defaultPaymentSourceId,
            paymentSources: V.A.paymentSources,
            hasFetchedPaymentSources: V.A.hasFetchedPaymentSources,
        })),
        s = (0, l.bG)([X.A], () => X.A.cashAppPayComponent),
        a = (0, l.bG)([S.A], () => S.A.data?.allowed_payment_source_types ?? null);
    (0, T.Ay)(() => {
        (0, _.UU)(), r || (0, d.$o)();
    }),
        i.useEffect(() => {
            null == s && null != a && a.includes(J.he.CASH_APP) && (0, Z.UU)();
        }, [a, s]);
    let [o, u] = i.useState(t);
    null != t && null == o && u(t);
    let [p, h] = i.useState(() => ({ info: ei, isValid: !1 })),
        [m, E] = i.useState(() => ({ info: es, isValid: !1 })),
        [g, A] = i.useState(""),
        [I, y] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, l.yK)([G.A], () => [
            G.A.braintreeEmail,
            G.A.braintreeNonce,
            G.A.error,
            G.A.venmoUsername,
            G.A.adyenPaymentData,
        ]),
        [L, w] = (0, l.yK)([F.A], () => [F.A.error, F.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            E({ info: t, isValid: t.country.length > 0 });
        };
        return (
            c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, f.ET)();
            }
        );
    }, []);
    let [M, x] = i.useState(!1),
        [P, k] = i.useState(!1),
        [U, H] = i.useState(null),
        j = i.useRef(null),
        Y = (0, l.bG)([F.A], () => F.A.isAwaitingAuthentication),
        [W, $] = (0, l.yK)([B.A], () => [B.A.purchaseTokenAuthState, B.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != U && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
        }, [U]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: u,
            creditCardState: p,
            setCreditCardState: h,
            tokenState: v,
            setTokenState: N,
            billingAddressState: m,
            setBillingAddressState: E,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: x,
            hasRedirectURL: P,
            setHasRedirectURL: k,
            braintreeEmail: C,
            braintreeNonce: R,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : O,
            paymentAuthenticationState: w ? K.oc.PENDING : null != L ? K.oc.ERROR : K.oc.NONE,
            purchaseError: U,
            setPurchaseError: H,
            purchaseErrorBlockRef: j,
            isAuthenticating: Y,
            purchaseTokenAuthState: W,
            purchaseTokenHash: $,
            epsBankState: I,
            setEpsBankState: y,
            p24BankState: g,
            setP24BankState: A,
        }
    );
}
