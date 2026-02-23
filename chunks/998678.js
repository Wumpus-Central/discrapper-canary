"use strict";
n.d(t, { KP: () => em, Y: () => eh });
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
    S = n(550238),
    y = n(648335),
    v = n(6332),
    N = n(182533),
    C = n(211528),
    b = n(626584),
    R = n(156312),
    O = n(166532),
    D = n(69494),
    L = n(19311),
    w = n(482132),
    x = n(617745),
    M = n(869177),
    P = n(921925),
    k = n(615405),
    U = n(825755),
    G = n(153084),
    F = n(295405),
    V = n(293700),
    B = n(67480),
    H = n(723702),
    j = n(71532),
    Y = n(427262),
    W = n(251913),
    K = n(68231),
    z = n(632638),
    $ = n(218075),
    q = n(682449),
    Z = n(490581),
    X = n(168984),
    Q = n(818348),
    J = n(985018),
    ee = n(240452),
    et = n(676032);
let en = new b.A("AddPaymentStep.tsx"),
    er = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    ei = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function es(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? $.f.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)($.j, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.A, { ...e })],
    });
}
function ea(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([U.A], () => U.A.error);
    return (0, r.jsx)(A.A, { billingError: n, onCardInfoChange: t });
}
function eo() {
    return (0, r.jsx)(h.A, {});
}
function el() {
    return (0, r.jsx)(m.A, {});
}
function eu() {
    return (0, r.jsx)(X.A, {});
}
function ec() {
    let e = (0, l.bG)([k.A], () => k.A.isBusy),
        t = (0, l.bG)([U.A], () => U.A.stripePaymentMethod);
    return (0, r.jsx)(I.y, { stripePaymentMethod: t, submitting: e });
}
function ed(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, l.bG)([U.A], () => U.A.error);
    return (0, r.jsx)(E.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function e_() {
    return (0, r.jsx)(g.N, {});
}
function ef(e) {
    return () => (null != U.A.error && (0, f.ET)(), e());
}
function ep(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        s = t;
    null != t && (s = ef(t));
    let a = n;
    return null != n && (a = ef(n)), (0, r.jsx)(L.Ay, { ...i, onPrimary: s, onBack: a });
}
function eh(e) {
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
            currentBreadcrumpStep: b,
            header: k,
            analyticsData: G,
            analyticsLocation: V,
            hideBreadcrumbs: W = !1,
            usePaymentModalStep: $ = !1,
            isEligibleForTrial: X = !1,
            allowDesktopRedirectPurchase: er = !1,
            toastContent: ei,
            continueSessionToInitialStep: ef,
            overwriteSubscriptionPaymentSource: eh = !1,
            shouldUseManaModal: em = !0,
        } = e,
        { stripe: eE, contextMetadata: eg, activitySessionId: eA, paymentElementsEnabled: eI } = (0, R.P5)(),
        eT = i.useMemo(() => {
            let e = h === O.pn.PAYMENT_TYPE || h === O.pn.PAYMENT_ELEMENT;
            return eI && e ? (er ? O.pn.AWAITING_BROWSER_CHECKOUT : O.pn.PAYMENT_ELEMENT) : h;
        }, [eI, h, er]),
        eS = i.useMemo(() => (0, Y.Gn)(), []),
        {
            CREDIT_CARD_STEPS: ey,
            PAYPAL_STEPS: ev,
            IDEAL_STEPS: eN,
            PAYMENT_REQUEST_STEPS: eC,
            VENMO_STEPS: eb,
            ADD_PAYMENT_STEPS: eR,
            PRZELEWY24_STEPS: eO,
            EPS_STEPS: eD,
            CASH_APP_STEPS: eL,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ew,
        } = (0, K.kh)({ prependSteps: m, appendSteps: E, paymentElementsEnabled: eI });
    function ex(e) {
        switch (e) {
            case O.pn.CREDIT_CARD_INFORMATION:
                return ey;
            case O.pn.CASH_APP_INFORMATION:
                return eL;
            default:
                return { steps: [O.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eM, eP] = i.useState(eT),
        [ek, eU] = i.useState(null),
        [eG, eF] = i.useState(ex(eT)),
        eV = (0, l.bG)([U.A], () => U.A.redirectedPaymentSourceId),
        eB = (0, l.bG)([Z.A], () => Z.A.cashAppPayComponent),
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
                let n = F.A.getPaymentSource(eV);
                null != n && (e(n), t(!1), U.A.clearRedirectedPaymentSourceId());
            })();
        }, [eV]);
    let eY = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eU(null), eP(e), t && I({ currentStep: eM, toStep: e });
        },
        [eM, I],
    );
    function eW(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== ei ? ei : J.intl.string(J.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            A(eM, e),
            eY(eT, !1);
    }
    let [eK, ez] = i.useState(null),
        {
            setPaymentSourceId: e$,
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
        ta = (0, l.bG)([B.A], () => B.A.get(ts), [ts]),
        to = ta?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        e$(e.id), eW(e);
    }
    let tu = !(0, H.isDesktop)() || er ? ["googlePay", "applePay"] : [],
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
        } = (0, C.Lw)({
            step: eM,
            continueSessionToInitialStep: ef,
            paymentElementsEnabled: eI,
            handleStepChange: eY,
            logger: en,
            shouldLogOnChangeEvents: eS || !1,
            onBillingAddressChange: (e, t) => {
                e1({ info: { ...e0.info, ...e }, isValid: t });
            },
        }),
        tN = i.useCallback(
            (e, t) => (eI && null != t && (0, y.PE)(e) ? () => tE(e) : () => eY(O.pn.PAYMENT_TYPE)),
            [eI, tE, eY],
        );
    switch (eM) {
        case O.pn.ATTEMPT_GOOGLE_PAY:
        case O.pn.ATTEMPT_APPLE_PAY:
        case O.pn.PAYMENT_TYPE:
            let tC = (e, t) => {
                    switch (e) {
                        case Q.he.CARD:
                            er ? eY(O.pn.AWAITING_BROWSER_CHECKOUT) : (eF(ey), eY(O.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case Q.he.PAYPAL:
                            eF(ev), eY(O.pn.PAYPAL_INFORMATION);
                            break;
                        case Q.he.VENMO:
                            eF(eb), eY(O.pn.VENMO_INFORMATION);
                            break;
                        case Q.he.PAYMENT_REQUEST:
                            er && "googlePay" === t
                                ? eY(O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : er && "applePay" === t
                                  ? eY(O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eF(eC), eY(O.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case Q.he.PRZELEWY24:
                            eF(eO), eY(O.pn.PRZELEWY24_INFORMATION);
                            break;
                        case Q.he.EPS:
                            eF(eD), eY(O.pn.EPS_INFORMATION);
                            break;
                        case Q.he.IDEAL:
                            eF(eN), eY(O.pn.IDEAL_INFORMATION);
                            break;
                        case Q.he.CASH_APP:
                            eF(eL), eY(O.pn.CASH_APP_INFORMATION);
                            break;
                        case Q.he.GIROPAY:
                        case Q.he.PAYSAFE_CARD:
                        case Q.he.GCASH:
                        case Q.he.GRABPAY_MY:
                        case Q.he.MOMO_WALLET:
                        case Q.he.KAKAOPAY:
                        case Q.he.GOPAY_WALLET:
                        case Q.he.BANCONTACT:
                            eF({ steps: [...m, ...K.GC, ...E], methodType: e }), eY(O.pn.ADDRESS);
                    }
                    null != U.A.error && (0, f.ET)();
                },
                tb = (e, t) => {
                    e1((e) => ({ ...e, info: t })), eF(eC), tl(e);
                };
            const tR = () => {
                eF(eR), eY(O.pn.PAYMENT_TYPE);
            };
            let tO = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tR();
                ez(e);
                let { billingAddressInfo: n } = (0, j.uK)(e),
                    r = S.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e1({ isValid: r, info: n }), !r))
                    return void eY(O.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, V);
                    tb(t, n);
                } catch (e) {
                    tR();
                }
            };
            if (eM === O.pn.ATTEMPT_GOOGLE_PAY || eM === O.pn.ATTEMPT_APPLE_PAY) {
                let e = J.intl.string(eM === O.pn.ATTEMPT_APPLE_PAY ? J.t.czhXDv : J.t.Zj2xQ0),
                    i = J.intl.string(eM === O.pn.ATTEMPT_APPLE_PAY ? J.t.WoXvJL : J.t.wnVVr0);
                (t = (0, r.jsx)(M.V, {
                    onChooseType: tC,
                    paymentRequestWallet: eM === O.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tO,
                    onPaymentRequestFailure: () => {
                        tC(Q.he.CARD), eU(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: t_,
                })),
                    (n = (0, r.jsx)(ep, {
                        onBack: () => eY(O.pn.PAYMENT_TYPE),
                        primaryCTA: L.Ay.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tc,
                        shouldUseManaModal: em,
                    }));
                break;
            }
            (t = (0, r.jsx)(es, {
                onChooseType: tC,
                onStripePaymentMethodReceived: tO,
                paymentRequestWallets: tu,
                isEligibleForTrial: X,
                paymentRequestPaymentContext: { contextMetadata: eg, activitySessionId: eA },
                paymentSourceTypeRestrictions: to,
            })),
                (n = (0, r.jsx)(ep, { onBack: g, shouldUseManaModal: em }));
            break;
        case O.pn.PAYMENT_ELEMENT:
            if (!eI) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tD = async () => {
                e2(!0);
                try {
                    if (null == tm || !(0, y.PE)(tm))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ew[tm];
                    if ((eF({ steps: e, methodType: t === Q.he.UNKNOWN ? tm : t }), tm === Q.he.PAYMENT_REQUEST)) {
                        let e = tA.current,
                            { paymentMethod: t } = await (0, d.YB)(eE, e),
                            { billingAddressInfo: n } = (0, j.uK)(t);
                        e1((e) => ({ ...e, info: n })), tv(), eY(O.pn.ADDRESS);
                    } else {
                        let e = (0, y.eI)(tm);
                        null != e ? eY(e) : eY(O.pn.ADDRESS);
                    }
                } catch (e) {
                    en.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(ep, {
                    onBack: () => {
                        tg(), g?.();
                    },
                    primaryCTA: L.Ay.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !th,
                    onPrimary: tD,
                    shouldUseManaModal: em,
                }));
            break;
        case O.pn.CREDIT_CARD_INFORMATION:
            let tL = async (e) => {
                e2(!0);
                try {
                    let t = await (0, d.YJ)(eE, e);
                    eQ({ token: t }), eY(O.pn.ADDRESS);
                } catch (e) {
                    en.error(e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            t = (0, r.jsx)(ea, {
                onCardInfoChange: (e, t) => {
                    eZ({ info: e, isValid: t }), e1((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tw = !eq.isValid,
                tx = () => {
                    eY(O.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ep, {
                        onBack: tx,
                        primaryCTA: L.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: J.intl.string(J.t.PDTjLN),
                        primarySubmitting: eJ,
                        primaryDisabled: tw,
                        onPrimary: () => tL(t),
                        shouldUseManaModal: em,
                    });
                },
            });
            break;
        case O.pn.AWAITING_BROWSER_CHECKOUT:
        case O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tM = () => {
                    eF(ey), eY(eI ? O.pn.PAYMENT_ELEMENT : O.pn.CREDIT_CARD_INFORMATION);
                },
                tP = () => {
                    eI ? (tg(), g?.()) : (eF(eR), eY(O.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(x.t, { step: eM, onPurchaseComplete: () => A(eM), onHandoffFailure: tM })),
                (n = (0, r.jsx)(x.q, { onPrimaryClick: tM, onBackClick: tP }));
            break;
        case O.pn.EPS_INFORMATION:
            t = (0, r.jsx)(N.A, {
                type: Q.he.EPS,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEPSBankChange: (e) => tt(e),
                epsBankValue: te,
                billingAddressInfo: e0.info,
            });
            let tk = tN(Q.he.EPS, tm);
            n = (0, r.jsx)(ep, {
                onBack: tk,
                primaryCTA: L.Ay.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled: void 0 === te || "" === te || "" === e0.info.name,
                onPrimary: () => eY(O.pn.ADDRESS),
                shouldUseManaModal: em,
            });
            break;
        case O.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: Q.he.IDEAL,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                billingAddressInfo: e0.info,
            })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eY(O.pn.PAYMENT_TYPE),
                    primaryCTA: L.Ay.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primaryDisabled: "" === e0.info.name,
                    onPrimary: () => eY(O.pn.ADDRESS),
                    shouldUseManaModal: em,
                }));
            break;
        case O.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(N.A, {
                type: Q.he.PRZELEWY24,
                onNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEmailChange: (e) => e1({ info: { ...e0.info, email: e }, isValid: e0.isValid }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: e0.info,
            });
            let tU = tN(Q.he.PRZELEWY24, tm);
            n = (0, r.jsx)(ep, {
                onBack: tU,
                primaryCTA: L.Ay.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled:
                    void 0 === e0.info.name ||
                    "" === e0.info.name ||
                    void 0 === e0.info.email ||
                    "" === e0.info.email ||
                    void 0 === tn ||
                    "" === tn,
                onPrimary: () => eY(O.pn.ADDRESS),
                shouldUseManaModal: em,
            });
            break;
        case O.pn.PAYPAL_INFORMATION:
            let tG = 0 !== e4.length && null != e5;
            t = (0, r.jsx)(eo, {});
            let tF = tN(Q.he.PAYPAL, tm);
            n = (0, r.jsx)(ep, {
                onBack: tF,
                primaryCTA: L.Ay.CTAType.CONTINUE,
                primaryText: tG ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t.Djzd7L),
                onPrimary: () => (tG ? eY(O.pn.ADDRESS) : (0, _.$e)()),
                shouldUseManaModal: em,
            });
            break;
        case O.pn.VENMO_INFORMATION:
            let tV = 0 !== e7.length && null != e5;
            t = (0, r.jsx)(el, {});
            let tB = tN(Q.he.VENMO, tm);
            n = (0, r.jsx)(ep, {
                onBack: tB,
                primaryCTA: L.Ay.CTAType.CONTINUE,
                primaryText: tV ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["4KoTLM"]),
                onPrimary: () => (tV ? eY(O.pn.ADDRESS) : (0, _.jR)()),
                shouldUseManaModal: em,
            });
            break;
        case O.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ec, {})),
                (n = (0, r.jsx)(ep, { onBack: () => eY(O.pn.PAYMENT_TYPE), shouldUseManaModal: em }));
            break;
        case O.pn.CASH_APP_INFORMATION:
            let tH = null != e8,
                tj = null != eB;
            t = (0, r.jsx)(eu, {});
            let tY = tN(Q.he.CASH_APP, tm);
            n = (0, r.jsx)(ep, {
                onBack: tY,
                primaryCTA: L.Ay.CTAType.CONTINUE,
                primaryText: tH ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["9ALP8w"]),
                onPrimary: () => (tH ? eY(O.pn.ADDRESS) : (0, q.uy)()),
                primaryDisabled: !tj,
                shouldUseManaModal: em,
            });
            break;
        case O.pn.ADDRESS:
            let tW = eI && null != tm,
                tK = async () => {
                    e2(!0);
                    let e = tW ? tm : eG.methodType,
                        t = [
                            eE,
                            tA.current,
                            {
                                billingAddress: e0.info,
                                paymentSourceType: e ?? Q.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tI,
                            },
                            V,
                        ];
                    switch (e) {
                        case Q.he.PAYMENT_REQUEST:
                            if (tW) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tl(e);
                                } catch (e) {
                                    e2(!1), en.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eK) throw (tR(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tl(await (0, d.Tv)(eK, e0.info, V));
                            break;
                        case Q.he.CARD:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.u6)(eE, eX.token, e0.info, V);
                                tl(e);
                            } catch {}
                            break;
                        case Q.he.VENMO:
                        case Q.he.PAYPAL:
                            try {
                                o()(null != e5, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e5, e0.info, V);
                                tl(e);
                            } catch {}
                            break;
                        case Q.he.EPS:
                            try {
                                let e = await (0, d.Z9)(eE, te, e0.info, V);
                                tl(e);
                            } catch (e) {
                                en.warn(e);
                            }
                            break;
                        case Q.he.IDEAL:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.EB)(eE, e0.info, V);
                                tl(e);
                            } catch (e) {
                                en.warn(e);
                            }
                            break;
                        case Q.he.PRZELEWY24:
                            try {
                                if (void 0 === tn) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(eE, { p24Bank: tn }, e0.info, V);
                                tl(e);
                            } catch {}
                            break;
                        case Q.he.PAYSAFE_CARD:
                        case Q.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e0.info, e, V);
                                tl(t);
                            } catch {}
                            break;
                        case Q.he.GCASH:
                        case Q.he.MOMO_WALLET:
                        case Q.he.KAKAOPAY:
                        case Q.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e0.info, e, V);
                                e6(t);
                            } catch {}
                            break;
                        case Q.he.GIROPAY:
                        case Q.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(eE, e0.info, e, V);
                                tl(t);
                            } catch {}
                            break;
                        case Q.he.CASH_APP:
                            try {
                                o()(null != e8, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e0.info, e, V, e8, eh);
                                o()(null != t, "Cash App Pay Payment Source missing"), tl(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e3 || e2(!1);
                };
            switch (eG.methodType) {
                case Q.he.CARD:
                    (c = O.pn.CREDIT_CARD_INFORMATION), (a = Q.he.CARD);
                    break;
                case Q.he.PAYPAL:
                    (c = O.pn.PAYPAL_INFORMATION), (a = Q.he.PAYPAL);
                    break;
                case Q.he.VENMO:
                    (c = O.pn.VENMO_INFORMATION), (a = Q.he.VENMO);
                    break;
                case Q.he.GIROPAY:
                    (c = O.pn.PAYMENT_TYPE), (a = Q.he.GIROPAY);
                    break;
                case Q.he.PAYSAFE_CARD:
                case Q.he.GCASH:
                case Q.he.GRABPAY_MY:
                case Q.he.MOMO_WALLET:
                case Q.he.KAKAOPAY:
                case Q.he.GOPAY_WALLET:
                case Q.he.BANCONTACT:
                    (c = O.pn.PAYMENT_TYPE), (a = eG.methodType);
                    break;
                case Q.he.EPS:
                    (c = O.pn.EPS_INFORMATION), (a = Q.he.EPS);
                    break;
                case Q.he.IDEAL:
                    (c = O.pn.IDEAL_INFORMATION), (a = Q.he.IDEAL);
                    break;
                case Q.he.PRZELEWY24:
                    (c = O.pn.PRZELEWY24_INFORMATION), (a = Q.he.PRZELEWY24);
                    break;
                case Q.he.CASH_APP:
                    (c = O.pn.CASH_APP_INFORMATION), (a = Q.he.CASH_APP);
                    break;
                default:
                    (c = O.pn.PAYMENT_TYPE), (a = Q.he.CARD);
            }
            tW && (c = O.pn.PAYMENT_ELEMENT),
                (t = tW
                    ? null
                    : (0, r.jsx)(ed, {
                          billingAddressInfo: e0.info,
                          onBillingAddressChange: (e, t) => {
                              e1({ info: { ...e0.info, ...e }, isValid: t });
                          },
                          paymentSourceType: a,
                      })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eY(c),
                    primaryCTA: L.Ay.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !e0.isValid || e9,
                    onPrimary: tK,
                    shouldUseManaModal: em,
                }));
            break;
        case O.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(e_, {});
            break;
        default:
            throw Error(`Unexpected step: ${eM}`);
    }
    let tz = eI && tp,
        t$ = tz ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(u.YC2, {
            className: et.C9,
            staticClassName: et.a2,
            animatedNodeClassName: et.L2,
            fillParent: !0,
            overrideKey: t$,
            step: eM,
            steps: eG.steps,
            sideMargin: 20,
            children: [
                null != ek &&
                    (0, r.jsx)("div", {
                        className: ee.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: ek }),
                    }),
                tz &&
                    (0, r.jsx)(C.e4, {
                        step: eM,
                        analyticsContext:
                            null != G ? { activitySessionId: eA, contextMetadata: eg, analyticsData: G } : void 0,
                        paymentElementSelectedType: tm,
                        elementsRef: tA,
                        stripePaymentElementProps: tT,
                        stripeAddressElementProps: tS,
                        addressElementKey: ty,
                        billingAddressInfo: e0.info,
                        onSetupError: () => {
                            tg(), eY(O.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tZ = eM === O.pn.PAYMENT_TYPE && 0 === m.length ? null : n;
    return $
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  X && (0, r.jsx)(D.A, { className: ee.At, isEligibleForTrial: X }),
                  (0, r.jsxs)(w.dZ, { children: [(0, r.jsx)(P.A, { className: ee._8 }), tq] }),
                  (0, r.jsx)(w.UX, { children: tZ }),
              ],
          })
        : (0, r.jsx)(z.A, {
              shouldUseManaModal: em,
              steps: T ?? eG.steps,
              currentStep: b ?? eM,
              overrideKey: t$,
              paymentError: p.paymentError,
              header: k,
              hideBreadcrumbs: W,
              body: tq,
              footer: tZ,
          });
}
function em(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cf)([F.A], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : F.A.defaultPaymentSourceId,
        paymentSources: F.A.paymentSources,
        hasFetchedPaymentSources: F.A.hasFetchedPaymentSources,
    }));
    (0, T.Ay)(() => {
        null == Z.A.cashAppPayComponent && (0, q.UU)(), (0, _.UU)(), r || (0, d.$o)();
    });
    let [s, a] = i.useState(t);
    null != t && null == s && a(t);
    let [o, u] = i.useState(() => ({ info: er, isValid: !1 })),
        [p, h] = i.useState(() => ({ info: ei, isValid: !1 })),
        [m, E] = i.useState(""),
        [g, A] = i.useState(""),
        [I, S] = i.useState(() => ({ token: null })),
        [y, v, N, C, b] = (0, l.yK)([U.A], () => [
            U.A.braintreeEmail,
            U.A.braintreeNonce,
            U.A.error,
            U.A.venmoUsername,
            U.A.adyenPaymentData,
        ]),
        [R, O] = (0, l.yK)([G.A], () => [G.A.error, G.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({ info: t, isValid: t.country.length > 0 });
        };
        return (
            c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, f.ET)();
            }
        );
    }, []);
    let [D, L] = i.useState(!1),
        [w, x] = i.useState(!1),
        [M, P] = i.useState(null),
        k = i.useRef(null),
        B = (0, l.bG)([G.A], () => G.A.isAwaitingAuthentication),
        [H, j] = (0, l.yK)([V.A], () => [V.A.purchaseTokenAuthState, V.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != M && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
        }, [M]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: a,
            creditCardState: o,
            setCreditCardState: u,
            tokenState: I,
            setTokenState: S,
            billingAddressState: p,
            setBillingAddressState: h,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: L,
            hasRedirectURL: w,
            setHasRedirectURL: x,
            braintreeEmail: y,
            braintreeNonce: v,
            venmoUsername: C,
            adyenPaymentData: b,
            paymentError: null != R ? R : N,
            paymentAuthenticationState: O ? W.oc.PENDING : null != R ? W.oc.ERROR : W.oc.NONE,
            purchaseError: M,
            setPurchaseError: P,
            purchaseErrorBlockRef: k,
            isAuthenticating: B,
            purchaseTokenAuthState: H,
            purchaseTokenHash: j,
            epsBankState: g,
            setEpsBankState: A,
            p24BankState: m,
            setP24BankState: E,
        }
    );
}
