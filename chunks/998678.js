"use strict";
n.d(t, { KP: () => em, Y: () => eh });
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
    p = n(73079),
    h = n(15373),
    m = n(229403),
    g = n(959391),
    E = n(891197),
    A = n(202626),
    I = n(893234),
    T = n(964486),
    y = n(550238),
    S = n(648335),
    v = n(6332),
    C = n(182533),
    b = n(211528),
    N = n(626584),
    R = n(156312),
    O = n(166532),
    D = n(69494),
    L = n(19311),
    w = n(482132),
    x = n(617745),
    P = n(869177),
    M = n(921925),
    k = n(615405),
    U = n(825755),
    G = n(153084),
    V = n(295405),
    F = n(293700),
    B = n(67480),
    j = n(723702),
    H = n(71532),
    Y = n(427262),
    W = n(251913),
    K = n(68231),
    z = n(632638),
    $ = n(218075),
    q = n(682449),
    Z = n(490581),
    Q = n(168984),
    X = n(818348),
    J = n(985018),
    ee = n(240452),
    et = n(676032);
let en = new N.A("AddPaymentStep.tsx"),
    er = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    ei = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function ea(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? $.f.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: ee.rf,
        children: [(0, r.jsx)($.j, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.A, { ...e })],
    });
}
function es(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([U.A], () => U.A.error);
    return (0, r.jsx)("div", { className: ee.rf, children: (0, r.jsx)(A.A, { billingError: n, onCardInfoChange: t }) });
}
function eo() {
    return (0, r.jsx)("div", { className: ee.rf, children: (0, r.jsx)(h.A, {}) });
}
function el() {
    return (0, r.jsx)("div", { className: ee.rf, children: (0, r.jsx)(m.A, {}) });
}
function eu() {
    return (0, r.jsx)("div", { className: ee.rf, children: (0, r.jsx)(Q.A, {}) });
}
function ec() {
    let e = (0, l.bG)([k.A], () => k.A.isBusy),
        t = (0, l.bG)([U.A], () => U.A.stripePaymentMethod);
    return (0, r.jsx)(I.y, { className: ee.rf, stripePaymentMethod: t, submitting: e });
}
function ed(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.bG)([U.A], () => U.A.error);
    return (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(g.n, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i,
        }),
    });
}
function e_() {
    return (0, r.jsx)(E.N, { className: ee.rf });
}
function ef(e) {
    return () => (null != U.A.error && (0, f.ET)(), e());
}
function ep(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        a = t;
    null != t && (a = ef(t));
    let s = n;
    return null != n && (s = ef(n)), (0, r.jsx)(L.A, { ...i, onPrimary: a, onBack: s });
}
function eh(e) {
    let t,
        n,
        s,
        c,
        {
            paymentModalArgs: p,
            initialStep: h,
            prependSteps: m,
            appendSteps: g,
            onReturn: E,
            onComplete: A,
            onStepChange: I,
            breadcrumpSteps: T,
            currentBreadcrumpStep: N,
            header: k,
            analyticsData: G,
            analyticsLocation: F,
            hideBreadcrumbs: W = !1,
            usePaymentModalStep: $ = !1,
            isEligibleForTrial: Q = !1,
            allowDesktopRedirectPurchase: er = !1,
            toastContent: ei,
            continueSessionToInitialStep: ef,
            overwriteSubscriptionPaymentSource: eh = !1,
        } = e,
        { stripe: em, contextMetadata: eg, activitySessionId: eE, paymentElementsEnabled: eA } = (0, R.P5)(),
        eI = i.useMemo(() => {
            let e = h === O.pn.PAYMENT_TYPE || h === O.pn.PAYMENT_ELEMENT;
            return eA && e ? (er ? O.pn.AWAITING_BROWSER_CHECKOUT : O.pn.PAYMENT_ELEMENT) : h;
        }, [eA, h, er]),
        eT = i.useMemo(() => (0, Y.Gn)(), []),
        {
            CREDIT_CARD_STEPS: ey,
            PAYPAL_STEPS: eS,
            IDEAL_STEPS: ev,
            PAYMENT_REQUEST_STEPS: eC,
            VENMO_STEPS: eb,
            ADD_PAYMENT_STEPS: eN,
            PRZELEWY24_STEPS: eR,
            EPS_STEPS: eO,
            CASH_APP_STEPS: eD,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eL,
        } = (0, K.kh)({ prependSteps: m, appendSteps: g, paymentElementsEnabled: eA });
    function ew(e) {
        switch (e) {
            case O.pn.CREDIT_CARD_INFORMATION:
                return ey;
            case O.pn.CASH_APP_INFORMATION:
                return eD;
            default:
                return { steps: [O.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [ex, eP] = i.useState(eI),
        [eM, ek] = i.useState(null),
        [eU, eG] = i.useState(ew(eI)),
        eV = (0, l.bG)([U.A], () => U.A.redirectedPaymentSourceId),
        eF = (0, l.bG)([Z.A], () => Z.A.cashAppPayComponent),
        eB = { completeSteps: to, setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep },
        ej = i.useRef(eB);
    i.useEffect(() => {
        ej.current = eB;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ej.current;
            (async () => {
                if (null == eV) return;
                await (0, d.$o)();
                let n = V.A.getPaymentSource(eV);
                null != n && (e(n), t(!1), U.A.clearRedirectedPaymentSourceId());
            })();
        }, [eV]);
    let eH = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            ek(null), eP(e), t && I({ currentStep: ex, toStep: e });
        },
        [ex, I],
    );
    function eY(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== ei ? ei : J.intl.string(J.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            A(ex, e),
            eH(eI, !1);
    }
    let [eW, eK] = i.useState(null),
        {
            setPaymentSourceId: ez,
            creditCardState: e$,
            setCreditCardState: eq,
            tokenState: eZ,
            setTokenState: eQ,
            isSubmittingCurrentStep: eX,
            billingAddressState: eJ,
            setBillingAddressState: e0,
            setIsSubmittingCurrentStep: e1,
            hasRedirectURL: e2,
            setHasRedirectURL: e3,
            braintreeEmail: e6,
            braintreeNonce: e4,
            venmoUsername: e5,
            adyenPaymentData: e7,
            isAuthenticating: e8,
            epsBankState: e9,
            setEpsBankState: te,
            p24BankState: tt,
            setP24BankState: tn,
            selectedSkuId: tr,
        } = p,
        ti = tr ?? "",
        ta = (0, l.bG)([B.A], () => B.A.get(ti), [ti]),
        ts = ta?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function to(e) {
        ez(e.id), eY(e);
    }
    let tl = !(0, j.isDesktop)() || er ? ["googlePay", "applePay"] : [],
        [tu, tc] = i.useState(!1),
        td = i.useRef(null),
        t_ = () => {
            null != td.current && td.current.show();
        },
        {
            shouldRenderPaymentElement: tf,
            paymentElementReady: tp,
            paymentElementSelectedType: th,
            handlePaymentElementStep: tm,
            onBackFromPaymentElement: tg,
            combinedStripeElementsRef: tE,
            lastConfirmedSetupIntentRef: tA,
            stripePaymentElementProps: tI,
            stripeAddressElementProps: tT,
            addressElementKey: ty,
            remountAddressElement: tS,
        } = (0, b.Lw)({
            step: ex,
            continueSessionToInitialStep: ef,
            paymentElementsEnabled: eA,
            handleStepChange: eH,
            logger: en,
            shouldLogOnChangeEvents: eT || !1,
            onBillingAddressChange: (e, t) => {
                e0({ info: { ...eJ.info, ...e }, isValid: t });
            },
        }),
        tv = i.useCallback(
            (e, t) => (eA && null != t && (0, S.PE)(e) ? () => tm(e) : () => eH(O.pn.PAYMENT_TYPE)),
            [eA, tm, eH],
        );
    switch (ex) {
        case O.pn.ATTEMPT_GOOGLE_PAY:
        case O.pn.ATTEMPT_APPLE_PAY:
        case O.pn.PAYMENT_TYPE:
            let tC = (e, t) => {
                    switch (e) {
                        case X.he.CARD:
                            er ? eH(O.pn.AWAITING_BROWSER_CHECKOUT) : (eG(ey), eH(O.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case X.he.PAYPAL:
                            eG(eS), eH(O.pn.PAYPAL_INFORMATION);
                            break;
                        case X.he.VENMO:
                            eG(eb), eH(O.pn.VENMO_INFORMATION);
                            break;
                        case X.he.PAYMENT_REQUEST:
                            er && "googlePay" === t
                                ? eH(O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : er && "applePay" === t
                                  ? eH(O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eG(eC), eH(O.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case X.he.PRZELEWY24:
                            eG(eR), eH(O.pn.PRZELEWY24_INFORMATION);
                            break;
                        case X.he.EPS:
                            eG(eO), eH(O.pn.EPS_INFORMATION);
                            break;
                        case X.he.IDEAL:
                            eG(ev), eH(O.pn.IDEAL_INFORMATION);
                            break;
                        case X.he.CASH_APP:
                            eG(eD), eH(O.pn.CASH_APP_INFORMATION);
                            break;
                        case X.he.GIROPAY:
                        case X.he.PAYSAFE_CARD:
                        case X.he.GCASH:
                        case X.he.GRABPAY_MY:
                        case X.he.MOMO_WALLET:
                        case X.he.KAKAOPAY:
                        case X.he.GOPAY_WALLET:
                        case X.he.BANCONTACT:
                            eG({ steps: [...m, ...K.GC, ...g], methodType: e }), eH(O.pn.ADDRESS);
                    }
                    null != U.A.error && (0, f.ET)();
                },
                tb = (e, t) => {
                    e0((e) => ({ ...e, info: t })), eG(eC), to(e);
                };
            const tN = () => {
                eG(eN), eH(O.pn.PAYMENT_TYPE);
            };
            let tR = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tN();
                eK(e);
                let { billingAddressInfo: n } = (0, H.uK)(e),
                    r = y.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e0({ isValid: r, info: n }), !r))
                    return void eH(O.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, F);
                    tb(t, n);
                } catch (e) {
                    tN();
                }
            };
            if (ex === O.pn.ATTEMPT_GOOGLE_PAY || ex === O.pn.ATTEMPT_APPLE_PAY) {
                let e = J.intl.string(ex === O.pn.ATTEMPT_APPLE_PAY ? J.t.czhXDv : J.t.Zj2xQ0),
                    i = J.intl.string(ex === O.pn.ATTEMPT_APPLE_PAY ? J.t.WoXvJL : J.t.wnVVr0);
                (t = (0, r.jsx)(P.V, {
                    onChooseType: tC,
                    paymentRequestWallet: ex === O.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tR,
                    onPaymentRequestFailure: () => {
                        tC(X.he.CARD), ek(e);
                    },
                    onValidPaymentRequest: () => tc(!0),
                    paymentRequestRef: td,
                })),
                    (n = (0, r.jsx)(ep, {
                        onBack: () => eH(O.pn.PAYMENT_TYPE),
                        primaryCTA: L.A.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => t_(),
                        primaryDisabled: !tu,
                    }));
                break;
            }
            (t = (0, r.jsx)(ea, {
                onChooseType: tC,
                onStripePaymentMethodReceived: tR,
                paymentRequestWallets: tl,
                isEligibleForTrial: Q,
                paymentRequestPaymentContext: { contextMetadata: eg, activitySessionId: eE },
                paymentSourceTypeRestrictions: ts,
            })),
                (n = (0, r.jsx)(ep, { onBack: E }));
            break;
        case O.pn.PAYMENT_ELEMENT:
            if (!eA) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tO = async () => {
                e1(!0);
                try {
                    if (null == th || !(0, S.PE)(th))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = eL[th];
                    if ((eG({ steps: e, methodType: t === X.he.UNKNOWN ? th : t }), th === X.he.PAYMENT_REQUEST)) {
                        let e = tE.current,
                            { paymentMethod: t } = await (0, d.YB)(em, e),
                            { billingAddressInfo: n } = (0, H.uK)(t);
                        e0((e) => ({ ...e, info: n })), tS(), eH(O.pn.ADDRESS);
                    } else {
                        let e = (0, S.eI)(th);
                        null != e ? eH(e) : eH(O.pn.ADDRESS);
                    }
                } catch (e) {
                    en.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    e1(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(ep, {
                    onBack: () => {
                        tg(), E?.();
                    },
                    primaryCTA: L.A.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: eX,
                    primaryDisabled: !tp,
                    onPrimary: tO,
                }));
            break;
        case O.pn.CREDIT_CARD_INFORMATION:
            let tD = async (e) => {
                e1(!0);
                try {
                    let t = await (0, d.YJ)(em, e);
                    eQ({ token: t }), eH(O.pn.ADDRESS);
                } catch (e) {
                    en.error(e.message ?? JSON.stringify(e));
                } finally {
                    e1(!1);
                }
            };
            t = (0, r.jsx)(es, {
                onCardInfoChange: (e, t) => {
                    eq({ info: e, isValid: t }), e0((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tL = !e$.isValid,
                tw = () => {
                    eH(O.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ep, {
                        onBack: tw,
                        primaryCTA: L.A.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: J.intl.string(J.t.PDTjLN),
                        primarySubmitting: eX,
                        primaryDisabled: tL,
                        onPrimary: () => tD(t),
                    });
                },
            });
            break;
        case O.pn.AWAITING_BROWSER_CHECKOUT:
        case O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tx = () => {
                    eG(ey), eH(eA ? O.pn.PAYMENT_ELEMENT : O.pn.CREDIT_CARD_INFORMATION);
                },
                tP = () => {
                    eA ? (tg(), E?.()) : (eG(eN), eH(O.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)("div", {
                className: ee.rf,
                children: (0, r.jsx)(x.t, { step: ex, onPurchaseComplete: () => A(ex), onHandoffFailure: tx }),
            })),
                (n = (0, r.jsx)(x.q, { onPrimaryClick: tx, onBackClick: tP }));
            break;
        case O.pn.EPS_INFORMATION:
            t = (0, r.jsx)(C.A, {
                type: X.he.EPS,
                onAccountHolderNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                onEPSBankChange: (e) => te(e),
                epsBankValue: e9,
                billingAddressInfo: eJ.info,
            });
            let tM = tv(X.he.EPS, th);
            n = (0, r.jsx)(ep, {
                onBack: tM,
                primaryCTA: L.A.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled: void 0 === e9 || "" === e9 || "" === eJ.info.name,
                onPrimary: () => eH(O.pn.ADDRESS),
            });
            break;
        case O.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: X.he.IDEAL,
                onAccountHolderNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                billingAddressInfo: eJ.info,
            })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eH(O.pn.PAYMENT_TYPE),
                    primaryCTA: L.A.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primaryDisabled: "" === eJ.info.name,
                    onPrimary: () => eH(O.pn.ADDRESS),
                }));
            break;
        case O.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(C.A, {
                type: X.he.PRZELEWY24,
                onNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                onEmailChange: (e) => e0({ info: { ...eJ.info, email: e }, isValid: eJ.isValid }),
                onP24BankChange: (e) => {
                    tn(e);
                },
                p24BankValue: tt,
                billingAddressInfo: eJ.info,
            });
            let tk = tv(X.he.PRZELEWY24, th);
            n = (0, r.jsx)(ep, {
                onBack: tk,
                primaryCTA: L.A.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled:
                    void 0 === eJ.info.name ||
                    "" === eJ.info.name ||
                    void 0 === eJ.info.email ||
                    "" === eJ.info.email ||
                    void 0 === tt ||
                    "" === tt,
                onPrimary: () => eH(O.pn.ADDRESS),
            });
            break;
        case O.pn.PAYPAL_INFORMATION:
            let tU = 0 !== e6.length && null != e4;
            t = (0, r.jsx)(eo, {});
            let tG = tv(X.he.PAYPAL, th);
            n = (0, r.jsx)(ep, {
                onBack: tG,
                primaryCTA: L.A.CTAType.CONTINUE,
                primaryText: tU ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t.Djzd7L),
                onPrimary: () => (tU ? eH(O.pn.ADDRESS) : (0, _.$e)()),
            });
            break;
        case O.pn.VENMO_INFORMATION:
            let tV = 0 !== e5.length && null != e4;
            t = (0, r.jsx)(el, {});
            let tF = tv(X.he.VENMO, th);
            n = (0, r.jsx)(ep, {
                onBack: tF,
                primaryCTA: L.A.CTAType.CONTINUE,
                primaryText: tV ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["4KoTLM"]),
                onPrimary: () => (tV ? eH(O.pn.ADDRESS) : (0, _.jR)()),
            });
            break;
        case O.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ec, {})), (n = (0, r.jsx)(ep, { onBack: () => eH(O.pn.PAYMENT_TYPE) }));
            break;
        case O.pn.CASH_APP_INFORMATION:
            let tB = null != e7,
                tj = null != eF;
            t = (0, r.jsx)(eu, {});
            let tH = tv(X.he.CASH_APP, th);
            n = (0, r.jsx)(ep, {
                onBack: tH,
                primaryCTA: L.A.CTAType.CONTINUE,
                primaryText: tB ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["9ALP8w"]),
                onPrimary: () => (tB ? eH(O.pn.ADDRESS) : (0, q.uy)()),
                primaryDisabled: !tj,
            });
            break;
        case O.pn.ADDRESS:
            let tY = eA && null != th,
                tW = async () => {
                    e1(!0);
                    let e = tY ? th : eU.methodType,
                        t = [
                            em,
                            tE.current,
                            {
                                billingAddress: eJ.info,
                                paymentSourceType: e ?? X.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tA,
                            },
                            F,
                        ];
                    switch (e) {
                        case X.he.PAYMENT_REQUEST:
                            if (tY) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    to(e);
                                } catch (e) {
                                    e1(!1), en.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eW) throw (tN(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            to(await (0, d.Tv)(eW, eJ.info, F));
                            break;
                        case X.he.CARD:
                            try {
                                let e = tY ? await (0, d.im)(...t) : await (0, d.u6)(em, eZ.token, eJ.info, F);
                                to(e);
                            } catch {}
                            break;
                        case X.he.VENMO:
                        case X.he.PAYPAL:
                            try {
                                o()(null != e4, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e4, eJ.info, F);
                                to(e);
                            } catch {}
                            break;
                        case X.he.EPS:
                            try {
                                let e = await (0, d.Z9)(em, e9, eJ.info, F);
                                to(e);
                            } catch (e) {
                                en.warn(e);
                            }
                            break;
                        case X.he.IDEAL:
                            try {
                                let e = tY ? await (0, d.im)(...t) : await (0, d.EB)(em, eJ.info, F);
                                to(e);
                            } catch (e) {
                                en.warn(e);
                            }
                            break;
                        case X.he.PRZELEWY24:
                            try {
                                if (void 0 === tt) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(em, { p24Bank: tt }, eJ.info, F);
                                to(e);
                            } catch {}
                            break;
                        case X.he.PAYSAFE_CARD:
                        case X.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(eJ.info, e, F);
                                to(t);
                            } catch {}
                            break;
                        case X.he.GCASH:
                        case X.he.MOMO_WALLET:
                        case X.he.KAKAOPAY:
                        case X.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(eJ.info, e, F);
                                e3(t);
                            } catch {}
                            break;
                        case X.he.GIROPAY:
                        case X.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(em, eJ.info, e, F);
                                to(t);
                            } catch {}
                            break;
                        case X.he.CASH_APP:
                            try {
                                o()(null != e7, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(eJ.info, e, F, e7, eh);
                                o()(null != t, "Cash App Pay Payment Source missing"), to(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e2 || e1(!1);
                };
            switch (eU.methodType) {
                case X.he.CARD:
                    (c = O.pn.CREDIT_CARD_INFORMATION), (s = X.he.CARD);
                    break;
                case X.he.PAYPAL:
                    (c = O.pn.PAYPAL_INFORMATION), (s = X.he.PAYPAL);
                    break;
                case X.he.VENMO:
                    (c = O.pn.VENMO_INFORMATION), (s = X.he.VENMO);
                    break;
                case X.he.GIROPAY:
                    (c = O.pn.PAYMENT_TYPE), (s = X.he.GIROPAY);
                    break;
                case X.he.PAYSAFE_CARD:
                case X.he.GCASH:
                case X.he.GRABPAY_MY:
                case X.he.MOMO_WALLET:
                case X.he.KAKAOPAY:
                case X.he.GOPAY_WALLET:
                case X.he.BANCONTACT:
                    (c = O.pn.PAYMENT_TYPE), (s = eU.methodType);
                    break;
                case X.he.EPS:
                    (c = O.pn.EPS_INFORMATION), (s = X.he.EPS);
                    break;
                case X.he.IDEAL:
                    (c = O.pn.IDEAL_INFORMATION), (s = X.he.IDEAL);
                    break;
                case X.he.PRZELEWY24:
                    (c = O.pn.PRZELEWY24_INFORMATION), (s = X.he.PRZELEWY24);
                    break;
                case X.he.CASH_APP:
                    (c = O.pn.CASH_APP_INFORMATION), (s = X.he.CASH_APP);
                    break;
                default:
                    (c = O.pn.PAYMENT_TYPE), (s = X.he.CARD);
            }
            tY && (c = O.pn.PAYMENT_ELEMENT),
                (t = tY
                    ? null
                    : (0, r.jsx)(ed, {
                          billingAddressInfo: eJ.info,
                          onBillingAddressChange: (e, t) => {
                              e0({ info: { ...eJ.info, ...e }, isValid: t });
                          },
                          paymentSourceType: s,
                      })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eH(c),
                    primaryCTA: L.A.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: eX,
                    primaryDisabled: !eJ.isValid || e8,
                    onPrimary: tW,
                }));
            break;
        case O.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(e_, {});
            break;
        default:
            throw Error(`Unexpected step: ${ex}`);
    }
    let tK = eA && tf,
        tz = tK ? "combined_stripe_elements" : void 0,
        t$ = (0, r.jsxs)(u.YC2, {
            className: et.C9,
            staticClassName: et.a2,
            animatedNodeClassName: et.L2,
            fillParent: !0,
            overrideKey: tz,
            step: ex,
            steps: eU.steps,
            sideMargin: 20,
            children: [
                null != eM &&
                    (0, r.jsx)("div", {
                        className: ee.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: eM }),
                    }),
                tK &&
                    (0, r.jsx)(b.e4, {
                        step: ex,
                        analyticsContext:
                            null != G ? { activitySessionId: eE, contextMetadata: eg, analyticsData: G } : void 0,
                        paymentElementSelectedType: th,
                        elementsRef: tE,
                        stripePaymentElementProps: tI,
                        stripeAddressElementProps: tT,
                        addressElementKey: ty,
                        billingAddressInfo: eJ.info,
                        onSetupError: () => {
                            tg(), eH(O.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tq = ex === O.pn.PAYMENT_TYPE && 0 === m.length ? null : n;
    return $
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Q && (0, r.jsx)(D.A, { className: ee.At, isEligibleForTrial: Q }),
                  (0, r.jsxs)(w.dZ, { children: [(0, r.jsx)(M.A, { className: ee._8 }), t$] }),
                  (0, r.jsx)(w.UX, { children: tq }),
              ],
          })
        : (0, r.jsx)(z.A, {
              steps: T ?? eU.steps,
              currentStep: N ?? ex,
              overrideKey: tz,
              paymentError: p.paymentError,
              header: k,
              hideBreadcrumbs: W,
              body: t$,
              footer: tq,
          });
}
function em(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cf)([V.A], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : V.A.defaultPaymentSourceId,
        paymentSources: V.A.paymentSources,
        hasFetchedPaymentSources: V.A.hasFetchedPaymentSources,
    }));
    (0, T.Ay)(() => {
        null == Z.A.cashAppPayComponent && (0, q.UU)(), (0, _.UU)(), r || (0, d.$o)();
    });
    let [a, s] = i.useState(t);
    null != t && null == a && s(t);
    let [o, u] = i.useState(() => ({ info: er, isValid: !1 })),
        [p, h] = i.useState(() => ({ info: ei, isValid: !1 })),
        [m, g] = i.useState(""),
        [E, A] = i.useState(""),
        [I, y] = i.useState(() => ({ token: null })),
        [S, v, C, b, N] = (0, l.yK)([U.A], () => [
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
        [P, M] = i.useState(null),
        k = i.useRef(null),
        B = (0, l.bG)([G.A], () => G.A.isAwaitingAuthentication),
        [j, H] = (0, l.yK)([F.A], () => [F.A.purchaseTokenAuthState, F.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != P && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
        }, [P]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: s,
            creditCardState: o,
            setCreditCardState: u,
            tokenState: I,
            setTokenState: y,
            billingAddressState: p,
            setBillingAddressState: h,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: L,
            hasRedirectURL: w,
            setHasRedirectURL: x,
            braintreeEmail: S,
            braintreeNonce: v,
            venmoUsername: b,
            adyenPaymentData: N,
            paymentError: null != R ? R : C,
            paymentAuthenticationState: O ? W.oc.PENDING : null != R ? W.oc.ERROR : W.oc.NONE,
            purchaseError: P,
            setPurchaseError: M,
            purchaseErrorBlockRef: k,
            isAuthenticating: B,
            purchaseTokenAuthState: j,
            purchaseTokenHash: H,
            epsBankState: E,
            setEpsBankState: A,
            p24BankState: m,
            setP24BankState: g,
        }
    );
}
