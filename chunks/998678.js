"use strict";
n.d(t, { KP: () => ec, Y: () => eu });
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
    p = n(15373),
    h = n(229403),
    m = n(959391),
    E = n(891197),
    g = n(202626),
    A = n(893234),
    I = n(964486),
    T = n(721101),
    S = n(648335),
    y = n(6332),
    v = n(182533),
    N = n(211528),
    C = n(626584),
    R = n(156312),
    O = n(166532),
    b = n(69494),
    D = n(19311),
    L = n(482132);
n(615310);
var w = n(617745),
    M = n(921925),
    x = n(615405),
    P = n(825755),
    k = n(153084),
    U = n(295405),
    G = n(293700),
    F = n(67480),
    V = n(71532),
    B = n(427262),
    H = n(251913),
    j = n(68231),
    Y = n(232610),
    W = n(632638),
    K = n(682449),
    $ = n(490581),
    z = n(168984),
    q = n(818348),
    Z = n(985018),
    X = n(30565),
    Q = n(962693);
let J = new C.A("AddPaymentStep.tsx"),
    ee = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    et = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function en(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(g.A, { billingError: n, onCardInfoChange: t });
}
function er() {
    return (0, r.jsx)(p.A, {});
}
function ei() {
    return (0, r.jsx)(h.A, {});
}
function es() {
    return (0, r.jsx)(z.A, {});
}
function ea() {
    let e = (0, l.bG)([x.A], () => x.A.isBusy),
        t = (0, l.bG)([P.A], () => P.A.stripePaymentMethod);
    return (0, r.jsx)(A.y, { stripePaymentMethod: t, submitting: e });
}
function eo(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, l.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(m.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function el() {
    return (0, r.jsx)(E.N, {});
}
function eu(e) {
    let t,
        n,
        a,
        c,
        {
            paymentModalArgs: f,
            initialStep: p,
            prependSteps: h,
            appendSteps: m,
            onReturn: E,
            onComplete: g,
            onStepChange: A,
            breadcrumpSteps: I,
            currentBreadcrumpStep: T,
            header: C,
            analyticsData: x,
            analyticsLocation: k,
            hideBreadcrumbs: G = !1,
            usePaymentModalStep: H = !1,
            isEligibleForTrial: z = !1,
            allowDesktopRedirectPurchase: ee = !1,
            toastContent: et,
            continueSessionToInitialStep: eu,
            overwriteSubscriptionPaymentSource: ec = !1,
            shouldUseManaModal: ed = !0,
        } = e,
        { stripe: e_, contextMetadata: ef, activitySessionId: ep, paymentElementsEnabled: eh } = (0, R.P5)(),
        em = i.useMemo(() => {
            let e = p === O.pn.PAYMENT_TYPE || p === O.pn.PAYMENT_ELEMENT;
            return eh && e ? (ee ? O.pn.AWAITING_BROWSER_CHECKOUT : O.pn.PAYMENT_ELEMENT) : p;
        }, [eh, p, ee]),
        eE = i.useMemo(() => (0, B.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eg,
            PAYPAL_STEPS: eA,
            IDEAL_STEPS: eI,
            PAYMENT_REQUEST_STEPS: eT,
            VENMO_STEPS: eS,
            ADD_PAYMENT_STEPS: ey,
            PRZELEWY24_STEPS: ev,
            EPS_STEPS: eN,
            CASH_APP_STEPS: eC,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eR,
        } = (0, j.kh)({ prependSteps: h, appendSteps: m, paymentElementsEnabled: eh });
    function eO(e) {
        switch (e) {
            case O.pn.CREDIT_CARD_INFORMATION:
                return eg;
            case O.pn.CASH_APP_INFORMATION:
                return eC;
            default:
                return { steps: [O.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eb, eD] = i.useState(em),
        [eL, ew] = i.useState(null),
        [eM, ex] = i.useState(eO(em));
    i.useEffect(() => {
        (0, d.IV)();
    }, []);
    let eP = (0, l.bG)([P.A], () => P.A.redirectedPaymentSourceId),
        ek = (0, l.bG)([$.A], () => $.A.cashAppPayComponent),
        eU = { completeSteps: tr, setIsSubmittingCurrentStep: f.setIsSubmittingCurrentStep },
        eG = i.useRef(eU);
    i.useEffect(() => {
        eG.current = eU;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eG.current;
            (async () => {
                if (null == eP) return;
                await (0, d.$o)();
                let n = U.A.getPaymentSource(eP);
                null != n && (e(n), t(!1), P.A.clearRedirectedPaymentSourceId());
            })();
        }, [eP]);
    let eF = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            ew(null), eD(e), t && A({ currentStep: eb, toStep: e });
        },
        [eb, A],
    );
    function eV(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== et ? et : Z.intl.string(Z.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            g(eb, e),
            eF(em, !1);
    }
    let [eB, eH] = i.useState(null),
        {
            setPaymentSourceId: ej,
            creditCardState: eY,
            setCreditCardState: eW,
            tokenState: eK,
            setTokenState: e$,
            isSubmittingCurrentStep: ez,
            billingAddressState: eq,
            setBillingAddressState: eZ,
            setIsSubmittingCurrentStep: eX,
            hasRedirectURL: eQ,
            setHasRedirectURL: eJ,
            braintreeEmail: e0,
            braintreeNonce: e1,
            venmoUsername: e2,
            adyenPaymentData: e3,
            isAuthenticating: e6,
            epsBankState: e4,
            setEpsBankState: e5,
            p24BankState: e7,
            setP24BankState: e8,
            selectedSkuId: e9,
        } = f,
        te = e9 ?? "",
        tt = (0, l.bG)([F.A], () => F.A.get(te), [te]),
        tn = tt?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tr(e) {
        ej(e.id), eV(e);
    }
    let ti = () => {
            ex(ey), eF(O.pn.PAYMENT_TYPE);
        },
        {
            shouldRenderPaymentElement: ts,
            paymentElementReady: ta,
            paymentElementSelectedType: to,
            handlePaymentElementStep: tl,
            onBackFromPaymentElement: tu,
            combinedStripeElementsRef: tc,
            lastConfirmedSetupIntentRef: td,
            stripePaymentElementProps: t_,
            stripeAddressElementProps: tf,
            addressElementKey: tp,
            remountAddressElement: th,
        } = (0, N.Lw)({
            step: eb,
            continueSessionToInitialStep: eu,
            paymentElementsEnabled: eh,
            handleStepChange: eF,
            logger: J,
            shouldLogOnChangeEvents: eE || !1,
            onBillingAddressChange: (e, t) => {
                eZ({ info: { ...eq.info, ...e }, isValid: t });
            },
        }),
        tm = i.useCallback(
            (e, t) => (eh && null != t && (0, S.PE)(e) ? () => tl(e) : () => eF(O.pn.PAYMENT_TYPE)),
            [eh, tl, eF],
        ),
        tE = H ? (0, r.jsx)(M.A, { className: X._8 }) : null,
        tg = (0, Y.zg)();
    switch (eb) {
        case O.pn.ATTEMPT_GOOGLE_PAY:
        case O.pn.ATTEMPT_APPLE_PAY:
        case O.pn.PAYMENT_TYPE:
            let tA = {
                CREDIT_CARD_STEPS: eg,
                PAYPAL_STEPS: eA,
                VENMO_STEPS: eS,
                PAYMENT_REQUEST_STEPS: eT,
                PRZELEWY24_STEPS: ev,
                EPS_STEPS: eN,
                IDEAL_STEPS: eI,
                CASH_APP_STEPS: eC,
            };
            (t = (0, r.jsx)(Y.ZL, {
                prependSteps: h,
                appendSteps: m,
                analyticsLocation: k,
                isEligibleForTrial: z,
                allowDesktopRedirectPurchase: ee,
                onPaymentRequestSourceFailed: ti,
                paymentModalArgs: f,
                handleStepChange: eF,
                setPaymentMethodSteps: ex,
                setPaymentRequestPaymentMethod: eH,
                currentStep: eb,
                setInfoNotice: ew,
                completeSteps: tr,
                paymentSourceTypeRestrictions: tn,
                ...tA,
                ...tg,
            })),
                (n = (0, r.jsx)(Y.GJ, {
                    shouldUseManaModal: ed,
                    onReturn: E,
                    handleStepChange: eF,
                    currentStep: eb,
                    ...tg,
                }));
            break;
        case O.pn.PAYMENT_ELEMENT:
            if (!eh) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tI = async () => {
                eX(!0);
                try {
                    if (null == to || !(0, S.PE)(to))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = eR[to];
                    if ((ex({ steps: e, methodType: t === q.he.UNKNOWN ? to : t }), to === q.he.PAYMENT_REQUEST)) {
                        let e = tc.current,
                            { paymentMethod: t } = await (0, d.YB)(e_, e),
                            { billingAddressInfo: n } = (0, V.uK)(t);
                        eZ((e) => ({ ...e, info: n })), th(), eF(O.pn.ADDRESS);
                    } else {
                        let e = (0, S.eI)(to);
                        null != e ? eF(e) : eF(O.pn.ADDRESS);
                    }
                } catch (e) {
                    J.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    eX(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(Y.uv, {
                    onBack: () => {
                        tu(), E?.();
                    },
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primarySubmitting: ez,
                    primaryDisabled: !ta,
                    onPrimary: tI,
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.CREDIT_CARD_INFORMATION:
            let tT = async (e) => {
                eX(!0);
                try {
                    let t = await (0, d.YJ)(e_, e);
                    e$({ token: t }), eF(O.pn.ADDRESS);
                } catch (e) {
                    J.error(e.message ?? JSON.stringify(e));
                } finally {
                    eX(!1);
                }
            };
            t = (0, r.jsx)(en, {
                onCardInfoChange: (e, t) => {
                    eW({ info: e, isValid: t }), eZ((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tS = !eY.isValid,
                ty = () => {
                    eF(O.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(Y.uv, {
                        onBack: ty,
                        primaryCTA: D.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: Z.intl.string(Z.t.PDTjLN),
                        primarySubmitting: ez,
                        primaryDisabled: tS,
                        onPrimary: () => tT(t),
                        shouldUseManaModal: ed,
                    });
                },
            });
            break;
        case O.pn.AWAITING_BROWSER_CHECKOUT:
        case O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tv = () => {
                    ex(eg), eF(eh ? O.pn.PAYMENT_ELEMENT : O.pn.CREDIT_CARD_INFORMATION);
                },
                tN = () => {
                    eh ? (tu(), E?.()) : (ex(ey), eF(O.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(w.t, { step: eb, onPurchaseComplete: () => g(eb), onHandoffFailure: tv })),
                (n = (0, r.jsx)(w.q, { onPrimaryClick: tv, onBackClick: tN }));
            break;
        case O.pn.EPS_INFORMATION:
            t = (0, r.jsx)(v.A, {
                type: q.he.EPS,
                onAccountHolderNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                onEPSBankChange: (e) => e5(e),
                epsBankValue: e4,
                billingAddressInfo: eq.info,
            });
            let tC = tm(q.he.EPS, to);
            n = (0, r.jsx)(Y.uv, {
                onBack: tC,
                primaryCTA: D.Ay.CTAType.CONTINUE,
                primaryText: Z.intl.string(Z.t.PDTjLN),
                primaryDisabled: void 0 === e4 || "" === e4 || "" === eq.info.name,
                onPrimary: () => eF(O.pn.ADDRESS),
                shouldUseManaModal: ed,
            });
            break;
        case O.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(y.A, {
                type: q.he.IDEAL,
                onAccountHolderNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                billingAddressInfo: eq.info,
            })),
                (n = (0, r.jsx)(Y.uv, {
                    onBack: () => eF(O.pn.PAYMENT_TYPE),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled: "" === eq.info.name,
                    onPrimary: () => eF(O.pn.ADDRESS),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(v.A, {
                type: q.he.PRZELEWY24,
                onNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                onEmailChange: (e) => eZ({ info: { ...eq.info, email: e }, isValid: eq.isValid }),
                onP24BankChange: (e) => {
                    e8(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eq.info,
            });
            let tR = tm(q.he.PRZELEWY24, to);
            n = (0, r.jsx)(Y.uv, {
                onBack: tR,
                primaryCTA: D.Ay.CTAType.CONTINUE,
                primaryText: Z.intl.string(Z.t.PDTjLN),
                primaryDisabled:
                    void 0 === eq.info.name ||
                    "" === eq.info.name ||
                    void 0 === eq.info.email ||
                    "" === eq.info.email ||
                    void 0 === e7 ||
                    "" === e7,
                onPrimary: () => eF(O.pn.ADDRESS),
                shouldUseManaModal: ed,
            });
            break;
        case O.pn.PAYPAL_INFORMATION:
            let tO = 0 !== e0.length && null != e1;
            t = (0, r.jsx)(er, {});
            let tb = tm(q.he.PAYPAL, to);
            n = (0, r.jsx)(Y.uv, {
                onBack: tb,
                primaryCTA: D.Ay.CTAType.CONTINUE,
                primaryText: tO ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.Djzd7L),
                onPrimary: () => (tO ? eF(O.pn.ADDRESS) : (0, _.$e)()),
                shouldUseManaModal: ed,
            });
            break;
        case O.pn.VENMO_INFORMATION:
            let tD = 0 !== e2.length && null != e1;
            t = (0, r.jsx)(ei, {});
            let tL = tm(q.he.VENMO, to);
            n = (0, r.jsx)(Y.uv, {
                onBack: tL,
                primaryCTA: D.Ay.CTAType.CONTINUE,
                primaryText: tD ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["4KoTLM"]),
                onPrimary: () => (tD ? eF(O.pn.ADDRESS) : (0, _.jR)()),
                shouldUseManaModal: ed,
            });
            break;
        case O.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ea, {})),
                (n = (0, r.jsx)(Y.uv, { onBack: () => eF(O.pn.PAYMENT_TYPE), shouldUseManaModal: ed }));
            break;
        case O.pn.CASH_APP_INFORMATION:
            let tw = null != e3,
                tM = null != ek;
            t = (0, r.jsx)(es, {});
            let tx = tm(q.he.CASH_APP, to);
            n = (0, r.jsx)(Y.uv, {
                onBack: tx,
                primaryCTA: D.Ay.CTAType.CONTINUE,
                primaryText: tw ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["9ALP8w"]),
                onPrimary: () => (tw ? eF(O.pn.ADDRESS) : (0, K.uy)()),
                primaryDisabled: !tM,
                shouldUseManaModal: ed,
            });
            break;
        case O.pn.ADDRESS:
            let tP = eh && null != to,
                tk = async () => {
                    eX(!0);
                    let e = tP ? to : eM.methodType,
                        t = [
                            e_,
                            tc.current,
                            {
                                billingAddress: eq.info,
                                paymentSourceType: e ?? q.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: td,
                            },
                            k,
                        ];
                    switch (e) {
                        case q.he.PAYMENT_REQUEST:
                            if (tP) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tr(e);
                                } catch (e) {
                                    eX(!1), J.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eB) throw (ti(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tr(await (0, d.Tv)(eB, eq.info, k));
                            break;
                        case q.he.CARD:
                            try {
                                let e = tP ? await (0, d.im)(...t) : await (0, d.u6)(e_, eK.token, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.VENMO:
                        case q.he.PAYPAL:
                            try {
                                o()(null != e1, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e1, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.EPS:
                            try {
                                let e = await (0, d.Z9)(e_, e4, eq.info, k);
                                tr(e);
                            } catch (e) {
                                J.warn(e);
                            }
                            break;
                        case q.he.IDEAL:
                            try {
                                let e = tP ? await (0, d.im)(...t) : await (0, d.EB)(e_, eq.info, k);
                                tr(e);
                            } catch (e) {
                                J.warn(e);
                            }
                            break;
                        case q.he.PRZELEWY24:
                            try {
                                if (void 0 === e7) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(e_, { p24Bank: e7 }, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.PAYSAFE_CARD:
                        case q.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(eq.info, e, k);
                                tr(t);
                            } catch {}
                            break;
                        case q.he.GCASH:
                        case q.he.MOMO_WALLET:
                        case q.he.KAKAOPAY:
                        case q.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(eq.info, e, k);
                                eJ(t);
                            } catch {}
                            break;
                        case q.he.GIROPAY:
                        case q.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(e_, eq.info, e, k);
                                tr(t);
                            } catch {}
                            break;
                        case q.he.CASH_APP:
                            try {
                                o()(null != e3, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(eq.info, e, k, e3, ec);
                                o()(null != t, "Cash App Pay Payment Source missing"), tr(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    eQ || eX(!1);
                };
            switch (eM.methodType) {
                case q.he.CARD:
                    (c = O.pn.CREDIT_CARD_INFORMATION), (a = q.he.CARD);
                    break;
                case q.he.PAYPAL:
                    (c = O.pn.PAYPAL_INFORMATION), (a = q.he.PAYPAL);
                    break;
                case q.he.VENMO:
                    (c = O.pn.VENMO_INFORMATION), (a = q.he.VENMO);
                    break;
                case q.he.GIROPAY:
                    (c = O.pn.PAYMENT_TYPE), (a = q.he.GIROPAY);
                    break;
                case q.he.PAYSAFE_CARD:
                case q.he.GCASH:
                case q.he.GRABPAY_MY:
                case q.he.MOMO_WALLET:
                case q.he.KAKAOPAY:
                case q.he.GOPAY_WALLET:
                case q.he.BANCONTACT:
                    (c = O.pn.PAYMENT_TYPE), (a = eM.methodType);
                    break;
                case q.he.EPS:
                    (c = O.pn.EPS_INFORMATION), (a = q.he.EPS);
                    break;
                case q.he.IDEAL:
                    (c = O.pn.IDEAL_INFORMATION), (a = q.he.IDEAL);
                    break;
                case q.he.PRZELEWY24:
                    (c = O.pn.PRZELEWY24_INFORMATION), (a = q.he.PRZELEWY24);
                    break;
                case q.he.CASH_APP:
                    (c = O.pn.CASH_APP_INFORMATION), (a = q.he.CASH_APP);
                    break;
                default:
                    (c = O.pn.PAYMENT_TYPE), (a = q.he.CARD);
            }
            tP && (c = O.pn.PAYMENT_ELEMENT),
                (t = tP
                    ? null
                    : (0, r.jsx)(eo, {
                          billingAddressInfo: eq.info,
                          onBillingAddressChange: (e, t) => {
                              eZ({ info: { ...eq.info, ...e }, isValid: t });
                          },
                          paymentSourceType: a,
                      })),
                (n = (0, r.jsx)(Y.uv, {
                    onBack: () => eF(c),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primarySubmitting: ez,
                    primaryDisabled: !eq.isValid || e6,
                    onPrimary: tk,
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(el, {});
            break;
        default:
            throw Error(`Unexpected step: ${eb}`);
    }
    let tU = eh && ts,
        tG = tU ? "combined_stripe_elements" : void 0,
        tF = (0, r.jsxs)(u.YC2, {
            className: Q.C9,
            staticClassName: Q.a2,
            animatedNodeClassName: Q.L2,
            fillParent: !0,
            overrideKey: tG,
            step: eb,
            steps: eM.steps,
            sideMargin: 20,
            children: [
                null != eL &&
                    (0, r.jsx)("div", { className: X.Ns, children: (0, r.jsx)(u.wx6, { type: "info", children: eL }) }),
                tU &&
                    (0, r.jsx)(N.e4, {
                        step: eb,
                        analyticsContext:
                            null != x ? { activitySessionId: ep, contextMetadata: ef, analyticsData: x } : void 0,
                        paymentElementSelectedType: to,
                        elementsRef: tc,
                        stripePaymentElementProps: t_,
                        stripeAddressElementProps: tf,
                        addressElementKey: tp,
                        billingAddressInfo: eq.info,
                        onSetupError: () => {
                            tu(), eF(O.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tV = eb === O.pn.PAYMENT_TYPE && 0 === h.length ? null : n;
    return H
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  z && (0, r.jsx)(b.A, { className: X.At, isEligibleForTrial: z }),
                  (0, r.jsxs)(L.dZ, { children: [tE, tF] }),
                  (0, r.jsx)(L.UX, { children: tV }),
              ],
          })
        : (0, r.jsx)(W.A, {
              shouldUseManaModal: ed,
              steps: I ?? eM.steps,
              currentStep: T ?? eb,
              overrideKey: tG,
              paymentError: f.paymentError,
              header: C,
              hideBreadcrumbs: G,
              body: tF,
              footer: tV,
          });
}
function ec(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, l.cf)([U.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : U.A.defaultPaymentSourceId,
            paymentSources: U.A.paymentSources,
            hasFetchedPaymentSources: U.A.hasFetchedPaymentSources,
        })),
        s = (0, l.bG)([$.A], () => $.A.cashAppPayComponent),
        a = (0, l.bG)([T.A], () => T.A.data?.allowed_payment_source_types ?? null);
    (0, I.Ay)(() => {
        (0, _.UU)(), r || (0, d.$o)();
    }),
        i.useEffect(() => {
            null == s && null != a && a.includes(q.he.CASH_APP) && (0, K.UU)();
        }, [a, s]);
    let [o, u] = i.useState(t);
    null != t && null == o && u(t);
    let [p, h] = i.useState(() => ({ info: ee, isValid: !1 })),
        [m, E] = i.useState(() => ({ info: et, isValid: !1 })),
        [g, A] = i.useState(""),
        [S, y] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, l.yK)([P.A], () => [
            P.A.braintreeEmail,
            P.A.braintreeNonce,
            P.A.error,
            P.A.venmoUsername,
            P.A.adyenPaymentData,
        ]),
        [L, w] = (0, l.yK)([k.A], () => [k.A.error, k.A.isAwaitingAuthentication]);
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
        [F, V] = i.useState(!1),
        [B, j] = i.useState(null),
        Y = i.useRef(null),
        W = (0, l.bG)([k.A], () => k.A.isAwaitingAuthentication),
        [z, Z] = (0, l.yK)([G.A], () => [G.A.purchaseTokenAuthState, G.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != B && null != Y.current && Y.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
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
            hasRedirectURL: F,
            setHasRedirectURL: V,
            braintreeEmail: C,
            braintreeNonce: R,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : O,
            paymentAuthenticationState: w ? H.oc.PENDING : null != L ? H.oc.ERROR : H.oc.NONE,
            purchaseError: B,
            setPurchaseError: j,
            purchaseErrorBlockRef: Y,
            isAuthenticating: W,
            purchaseTokenAuthState: z,
            purchaseTokenHash: Z,
            epsBankState: S,
            setEpsBankState: y,
            p24BankState: g,
            setP24BankState: A,
        }
    );
}
