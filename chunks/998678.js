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
    et = n(240452),
    en = n(676032);
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
            shouldUseManaModal: eg = !1,
        } = e,
        { stripe: eE, contextMetadata: eA, activitySessionId: eI, paymentElementsEnabled: eT } = (0, O.P5)(),
        ey = i.useMemo(() => {
            let e = p === D.pn.PAYMENT_TYPE || p === D.pn.PAYMENT_ELEMENT;
            return eT && e ? (ei ? D.pn.AWAITING_BROWSER_CHECKOUT : D.pn.PAYMENT_ELEMENT) : p;
        }, [eT, p, ei]),
        eS = i.useMemo(() => (0, W.Gn)(), []),
        {
            CREDIT_CARD_STEPS: ev,
            PAYPAL_STEPS: eC,
            IDEAL_STEPS: eb,
            PAYMENT_REQUEST_STEPS: eN,
            VENMO_STEPS: eR,
            ADD_PAYMENT_STEPS: eO,
            PRZELEWY24_STEPS: eD,
            EPS_STEPS: eL,
            CASH_APP_STEPS: ew,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ex,
        } = (0, $.kh)({ prependSteps: g, appendSteps: E, paymentElementsEnabled: eT });
    function eP(e) {
        switch (e) {
            case D.pn.CREDIT_CARD_INFORMATION:
                return ev;
            case D.pn.CASH_APP_INFORMATION:
                return ew;
            default:
                return { steps: [D.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eM, ek] = i.useState(ey),
        [eU, eG] = i.useState(null),
        [eF, eV] = i.useState(eP(ey)),
        eB = (0, l.bG)([G.A], () => G.A.redirectedPaymentSourceId),
        ej = (0, l.bG)([Z.A], () => Z.A.cashAppPayComponent),
        eH = { completeSteps: tu, setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep },
        eY = i.useRef(eH);
    i.useEffect(() => {
        eY.current = eH;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eY.current;
            (async () => {
                if (null == eB) return;
                await (0, d.$o)();
                let n = V.A.getPaymentSource(eB);
                null != n && (e(n), t(!1), G.A.clearRedirectedPaymentSourceId());
            })();
        }, [eB]);
    let eW = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eG(null), ek(e), t && T({ currentStep: eM, toStep: e });
        },
        [eM, T],
    );
    function eK(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== ea ? ea : ee.intl.string(ee.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            I(eM, e),
            eW(ey, !1);
    }
    let [e$, ez] = i.useState(null),
        {
            setPaymentSourceId: eq,
            creditCardState: eX,
            setCreditCardState: eZ,
            tokenState: eQ,
            setTokenState: eJ,
            isSubmittingCurrentStep: e0,
            billingAddressState: e1,
            setBillingAddressState: e2,
            setIsSubmittingCurrentStep: e3,
            hasRedirectURL: e6,
            setHasRedirectURL: e4,
            braintreeEmail: e5,
            braintreeNonce: e7,
            venmoUsername: e8,
            adyenPaymentData: e9,
            isAuthenticating: te,
            epsBankState: tt,
            setEpsBankState: tn,
            p24BankState: tr,
            setP24BankState: ti,
            selectedSkuId: ta,
        } = h,
        ts = ta ?? "",
        to = (0, l.bG)([j.A], () => j.A.get(ts), [ts]),
        tl = to?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tu(e) {
        eq(e.id), eK(e);
    }
    let tc = !(0, H.isDesktop)() || ei ? ["googlePay", "applePay"] : [],
        [td, t_] = i.useState(!1),
        tf = i.useRef(null),
        th = () => {
            null != tf.current && tf.current.show();
        },
        {
            shouldRenderPaymentElement: tp,
            paymentElementReady: tm,
            paymentElementSelectedType: tg,
            handlePaymentElementStep: tE,
            onBackFromPaymentElement: tA,
            combinedStripeElementsRef: tI,
            lastConfirmedSetupIntentRef: tT,
            stripePaymentElementProps: ty,
            stripeAddressElementProps: tS,
            addressElementKey: tv,
            remountAddressElement: tC,
        } = (0, N.Lw)({
            step: eM,
            continueSessionToInitialStep: eh,
            paymentElementsEnabled: eT,
            handleStepChange: eW,
            logger: er,
            shouldLogOnChangeEvents: eS || !1,
            onBillingAddressChange: (e, t) => {
                e2({ info: { ...e1.info, ...e }, isValid: t });
            },
        }),
        tb = i.useCallback(
            (e, t) => (eT && null != t && (0, v.PE)(e) ? () => tE(e) : () => eW(D.pn.PAYMENT_TYPE)),
            [eT, tE, eW],
        );
    switch (eM) {
        case D.pn.ATTEMPT_GOOGLE_PAY:
        case D.pn.ATTEMPT_APPLE_PAY:
        case D.pn.PAYMENT_TYPE:
            let tN = (e, t) => {
                    switch (e) {
                        case J.he.CARD:
                            ei ? eW(D.pn.AWAITING_BROWSER_CHECKOUT) : (eV(ev), eW(D.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case J.he.PAYPAL:
                            eV(eC), eW(D.pn.PAYPAL_INFORMATION);
                            break;
                        case J.he.VENMO:
                            eV(eR), eW(D.pn.VENMO_INFORMATION);
                            break;
                        case J.he.PAYMENT_REQUEST:
                            ei && "googlePay" === t
                                ? eW(D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : ei && "applePay" === t
                                  ? eW(D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eV(eN), eW(D.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case J.he.PRZELEWY24:
                            eV(eD), eW(D.pn.PRZELEWY24_INFORMATION);
                            break;
                        case J.he.EPS:
                            eV(eL), eW(D.pn.EPS_INFORMATION);
                            break;
                        case J.he.IDEAL:
                            eV(eb), eW(D.pn.IDEAL_INFORMATION);
                            break;
                        case J.he.CASH_APP:
                            eV(ew), eW(D.pn.CASH_APP_INFORMATION);
                            break;
                        case J.he.GIROPAY:
                        case J.he.PAYSAFE_CARD:
                        case J.he.GCASH:
                        case J.he.GRABPAY_MY:
                        case J.he.MOMO_WALLET:
                        case J.he.KAKAOPAY:
                        case J.he.GOPAY_WALLET:
                        case J.he.BANCONTACT:
                            eV({ steps: [...g, ...$.GC, ...E], methodType: e }), eW(D.pn.ADDRESS);
                    }
                    null != G.A.error && (0, f.ET)();
                },
                tR = (e, t) => {
                    e2((e) => ({ ...e, info: t })), eV(eN), tu(e);
                };
            const tO = () => {
                eV(eO), eW(D.pn.PAYMENT_TYPE);
            };
            let tD = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tO();
                ez(e);
                let { billingAddressInfo: n } = (0, Y.uK)(e),
                    r = S.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e2({ isValid: r, info: n }), !r))
                    return void eW(D.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, B);
                    tR(t, n);
                } catch (e) {
                    tO();
                }
            };
            if (eM === D.pn.ATTEMPT_GOOGLE_PAY || eM === D.pn.ATTEMPT_APPLE_PAY) {
                let e = ee.intl.string(eM === D.pn.ATTEMPT_APPLE_PAY ? ee.t.czhXDv : ee.t.Zj2xQ0),
                    i = ee.intl.string(eM === D.pn.ATTEMPT_APPLE_PAY ? ee.t.WoXvJL : ee.t.wnVVr0);
                (t = (0, r.jsx)(M.V, {
                    onChooseType: tN,
                    paymentRequestWallet: eM === D.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tD,
                    onPaymentRequestFailure: () => {
                        tN(J.he.CARD), eG(e);
                    },
                    onValidPaymentRequest: () => t_(!0),
                    paymentRequestRef: tf,
                })),
                    (n = (0, r.jsx)(ep, {
                        onBack: () => eW(D.pn.PAYMENT_TYPE),
                        primaryCTA: w.A.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => th(),
                        primaryDisabled: !td,
                        shouldUseManaModal: eg,
                    }));
                break;
            }
            (t = (0, r.jsx)(es, {
                onChooseType: tN,
                onStripePaymentMethodReceived: tD,
                paymentRequestWallets: tc,
                isEligibleForTrial: Q,
                paymentRequestPaymentContext: { contextMetadata: eA, activitySessionId: eI },
                paymentSourceTypeRestrictions: tl,
            })),
                (n = (0, r.jsx)(ep, { onBack: A, shouldUseManaModal: eg }));
            break;
        case D.pn.PAYMENT_ELEMENT:
            if (!eT) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tL = async () => {
                e3(!0);
                try {
                    if (null == tg || !(0, v.PE)(tg))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ex[tg];
                    if ((eV({ steps: e, methodType: t === J.he.UNKNOWN ? tg : t }), tg === J.he.PAYMENT_REQUEST)) {
                        let e = tI.current,
                            { paymentMethod: t } = await (0, d.YB)(eE, e),
                            { billingAddressInfo: n } = (0, Y.uK)(t);
                        e2((e) => ({ ...e, info: n })), tC(), eW(D.pn.ADDRESS);
                    } else {
                        let e = (0, v.eI)(tg);
                        null != e ? eW(e) : eW(D.pn.ADDRESS);
                    }
                } catch (e) {
                    er.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    e3(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(ep, {
                    onBack: () => {
                        tA(), A?.();
                    },
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: e0,
                    primaryDisabled: !tm,
                    onPrimary: tL,
                    shouldUseManaModal: eg,
                }));
            break;
        case D.pn.CREDIT_CARD_INFORMATION:
            let tw = async (e) => {
                e3(!0);
                try {
                    let t = await (0, d.YJ)(eE, e);
                    eJ({ token: t }), eW(D.pn.ADDRESS);
                } catch (e) {
                    er.error(e.message ?? JSON.stringify(e));
                } finally {
                    e3(!1);
                }
            };
            t = (0, r.jsx)(eo, {
                onCardInfoChange: (e, t) => {
                    eZ({ info: e, isValid: t }), e2((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tx = !eX.isValid,
                tP = () => {
                    eW(D.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ep, {
                        onBack: tP,
                        primaryCTA: w.A.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: ee.intl.string(ee.t.PDTjLN),
                        primarySubmitting: e0,
                        primaryDisabled: tx,
                        onPrimary: () => tw(t),
                        shouldUseManaModal: eg,
                    });
                },
            });
            break;
        case D.pn.AWAITING_BROWSER_CHECKOUT:
        case D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tM = () => {
                    eV(ev), eW(eT ? D.pn.PAYMENT_ELEMENT : D.pn.CREDIT_CARD_INFORMATION);
                },
                tk = () => {
                    eT ? (tA(), A?.()) : (eV(eO), eW(D.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)("div", {
                className: et.rf,
                children: (0, r.jsx)(P.t, { step: eM, onPurchaseComplete: () => I(eM), onHandoffFailure: tM }),
            })),
                (n = (0, r.jsx)(P.q, { onPrimaryClick: tM, onBackClick: tk }));
            break;
        case D.pn.EPS_INFORMATION:
            t = (0, r.jsx)(b.A, {
                type: J.he.EPS,
                onAccountHolderNameChange: (e) => e2({ info: { ...e1.info, name: e }, isValid: e1.isValid }),
                onEPSBankChange: (e) => tn(e),
                epsBankValue: tt,
                billingAddressInfo: e1.info,
            });
            let tU = tb(J.he.EPS, tg);
            n = (0, r.jsx)(ep, {
                onBack: tU,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled: void 0 === tt || "" === tt || "" === e1.info.name,
                onPrimary: () => eW(D.pn.ADDRESS),
                shouldUseManaModal: eg,
            });
            break;
        case D.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(C.A, {
                type: J.he.IDEAL,
                onAccountHolderNameChange: (e) => e2({ info: { ...e1.info, name: e }, isValid: e1.isValid }),
                billingAddressInfo: e1.info,
            })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eW(D.pn.PAYMENT_TYPE),
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primaryDisabled: "" === e1.info.name,
                    onPrimary: () => eW(D.pn.ADDRESS),
                    shouldUseManaModal: eg,
                }));
            break;
        case D.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(b.A, {
                type: J.he.PRZELEWY24,
                onNameChange: (e) => e2({ info: { ...e1.info, name: e }, isValid: e1.isValid }),
                onEmailChange: (e) => e2({ info: { ...e1.info, email: e }, isValid: e1.isValid }),
                onP24BankChange: (e) => {
                    ti(e);
                },
                p24BankValue: tr,
                billingAddressInfo: e1.info,
            });
            let tG = tb(J.he.PRZELEWY24, tg);
            n = (0, r.jsx)(ep, {
                onBack: tG,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: ee.intl.string(ee.t.PDTjLN),
                primaryDisabled:
                    void 0 === e1.info.name ||
                    "" === e1.info.name ||
                    void 0 === e1.info.email ||
                    "" === e1.info.email ||
                    void 0 === tr ||
                    "" === tr,
                onPrimary: () => eW(D.pn.ADDRESS),
                shouldUseManaModal: eg,
            });
            break;
        case D.pn.PAYPAL_INFORMATION:
            let tF = 0 !== e5.length && null != e7;
            t = (0, r.jsx)(el, {});
            let tV = tb(J.he.PAYPAL, tg);
            n = (0, r.jsx)(ep, {
                onBack: tV,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tF ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t.Djzd7L),
                onPrimary: () => (tF ? eW(D.pn.ADDRESS) : (0, _.$e)()),
                shouldUseManaModal: eg,
            });
            break;
        case D.pn.VENMO_INFORMATION:
            let tB = 0 !== e8.length && null != e7;
            t = (0, r.jsx)(eu, {});
            let tj = tb(J.he.VENMO, tg);
            n = (0, r.jsx)(ep, {
                onBack: tj,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tB ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["4KoTLM"]),
                onPrimary: () => (tB ? eW(D.pn.ADDRESS) : (0, _.jR)()),
                shouldUseManaModal: eg,
            });
            break;
        case D.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ed, {})),
                (n = (0, r.jsx)(ep, { onBack: () => eW(D.pn.PAYMENT_TYPE), shouldUseManaModal: eg }));
            break;
        case D.pn.CASH_APP_INFORMATION:
            let tH = null != e9,
                tY = null != ej;
            t = (0, r.jsx)(ec, {});
            let tW = tb(J.he.CASH_APP, tg);
            n = (0, r.jsx)(ep, {
                onBack: tW,
                primaryCTA: w.A.CTAType.CONTINUE,
                primaryText: tH ? ee.intl.string(ee.t.PDTjLN) : ee.intl.string(ee.t["9ALP8w"]),
                onPrimary: () => (tH ? eW(D.pn.ADDRESS) : (0, X.uy)()),
                primaryDisabled: !tY,
                shouldUseManaModal: eg,
            });
            break;
        case D.pn.ADDRESS:
            let tK = eT && null != tg,
                t$ = async () => {
                    e3(!0);
                    let e = tK ? tg : eF.methodType,
                        t = [
                            eE,
                            tI.current,
                            {
                                billingAddress: e1.info,
                                paymentSourceType: e ?? J.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tT,
                            },
                            B,
                        ];
                    switch (e) {
                        case J.he.PAYMENT_REQUEST:
                            if (tK) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tu(e);
                                } catch (e) {
                                    e3(!1), er.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == e$) throw (tO(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tu(await (0, d.Tv)(e$, e1.info, B));
                            break;
                        case J.he.CARD:
                            try {
                                let e = tK ? await (0, d.im)(...t) : await (0, d.u6)(eE, eQ.token, e1.info, B);
                                tu(e);
                            } catch {}
                            break;
                        case J.he.VENMO:
                        case J.he.PAYPAL:
                            try {
                                o()(null != e7, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e7, e1.info, B);
                                tu(e);
                            } catch {}
                            break;
                        case J.he.EPS:
                            try {
                                let e = await (0, d.Z9)(eE, tt, e1.info, B);
                                tu(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.IDEAL:
                            try {
                                let e = tK ? await (0, d.im)(...t) : await (0, d.EB)(eE, e1.info, B);
                                tu(e);
                            } catch (e) {
                                er.warn(e);
                            }
                            break;
                        case J.he.PRZELEWY24:
                            try {
                                if (void 0 === tr) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(eE, { p24Bank: tr }, e1.info, B);
                                tu(e);
                            } catch {}
                            break;
                        case J.he.PAYSAFE_CARD:
                        case J.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e1.info, e, B);
                                tu(t);
                            } catch {}
                            break;
                        case J.he.GCASH:
                        case J.he.MOMO_WALLET:
                        case J.he.KAKAOPAY:
                        case J.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e1.info, e, B);
                                e4(t);
                            } catch {}
                            break;
                        case J.he.GIROPAY:
                        case J.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(eE, e1.info, e, B);
                                tu(t);
                            } catch {}
                            break;
                        case J.he.CASH_APP:
                            try {
                                o()(null != e9, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e1.info, e, B, e9, em);
                                o()(null != t, "Cash App Pay Payment Source missing"), tu(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e6 || e3(!1);
                };
            switch (eF.methodType) {
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
                    (c = D.pn.PAYMENT_TYPE), (s = eF.methodType);
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
            tK && (c = D.pn.PAYMENT_ELEMENT),
                (t = tK
                    ? null
                    : (0, r.jsx)(e_, {
                          billingAddressInfo: e1.info,
                          onBillingAddressChange: (e, t) => {
                              e2({ info: { ...e1.info, ...e }, isValid: t });
                          },
                          paymentSourceType: s,
                      })),
                (n = (0, r.jsx)(ep, {
                    onBack: () => eW(c),
                    primaryCTA: w.A.CTAType.CONTINUE,
                    primaryText: ee.intl.string(ee.t.PDTjLN),
                    primarySubmitting: e0,
                    primaryDisabled: !e1.isValid || te,
                    onPrimary: t$,
                    shouldUseManaModal: eg,
                }));
            break;
        case D.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(ef, {});
            break;
        default:
            throw Error(`Unexpected step: ${eM}`);
    }
    let tz = eT && tp,
        tq = tz ? "combined_stripe_elements" : void 0,
        tX = (0, r.jsxs)(u.YC2, {
            className: en.C9,
            staticClassName: en.a2,
            animatedNodeClassName: en.L2,
            fillParent: !0,
            overrideKey: tq,
            step: eM,
            steps: eF.steps,
            sideMargin: 20,
            children: [
                null != eU &&
                    (0, r.jsx)("div", {
                        className: et.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: eU }),
                    }),
                tz &&
                    (0, r.jsx)(N.e4, {
                        step: eM,
                        analyticsContext:
                            null != F ? { activitySessionId: eI, contextMetadata: eA, analyticsData: F } : void 0,
                        paymentElementSelectedType: tg,
                        elementsRef: tI,
                        stripePaymentElementProps: ty,
                        stripeAddressElementProps: tS,
                        addressElementKey: tv,
                        billingAddressInfo: e1.info,
                        onSetupError: () => {
                            tA(), eW(D.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tZ = eM === D.pn.PAYMENT_TYPE && 0 === g.length ? null : n;
    return q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Q && (0, r.jsx)(L.A, { className: et.At, isEligibleForTrial: Q }),
                  (0, r.jsxs)(x.dZ, { children: [(0, r.jsx)(k.A, { className: et._8 }), tX] }),
                  (0, r.jsx)(x.UX, { children: tZ }),
              ],
          })
        : (0, r.jsx)(z.A, {
              steps: y ?? eF.steps,
              currentStep: R ?? eM,
              overrideKey: tq,
              paymentError: h.paymentError,
              header: U,
              hideBreadcrumbs: K,
              body: tX,
              footer: tZ,
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
