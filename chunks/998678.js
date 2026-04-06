"use strict";
n.d(t, { KP: () => eA, Y: () => eg });
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
    S = n(459357),
    y = n(721101),
    v = n(550238),
    N = n(648335),
    C = n(6332),
    R = n(182533),
    O = n(211528),
    b = n(93159),
    D = n(626584),
    L = n(156312),
    w = n(166532),
    M = n(69494),
    x = n(19311),
    P = n(482132);
n(615310);
var k = n(617745),
    U = n(869177),
    G = n(921925),
    F = n(615405),
    V = n(825755),
    B = n(153084),
    H = n(295405),
    j = n(293700),
    Y = n(67480),
    W = n(723702),
    K = n(71532),
    $ = n(427262),
    z = n(251913),
    q = n(68231),
    Z = n(632638),
    X = n(218075),
    Q = n(682449),
    J = n(490581),
    ee = n(168984),
    et = n(818348),
    en = n(985018),
    er = n(30565),
    ei = n(962693);
let es = new D.A("AddPaymentStep.tsx"),
    ea = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    eo = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function el(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? X.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, S.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(X.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(p.A, { ...e }),
            i && (0, r.jsx)(b.Z4, { className: er.SO }),
        ],
    });
}
function eu(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([V.A], () => V.A.error);
    return (0, r.jsx)(A.A, { billingError: n, onCardInfoChange: t });
}
function ec() {
    return (0, r.jsx)(h.A, {});
}
function ed() {
    return (0, r.jsx)(m.A, {});
}
function e_() {
    return (0, r.jsx)(ee.A, {});
}
function ef() {
    let e = (0, l.bG)([F.A], () => F.A.isBusy),
        t = (0, l.bG)([V.A], () => V.A.stripePaymentMethod);
    return (0, r.jsx)(I.y, { stripePaymentMethod: t, submitting: e });
}
function ep(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, l.bG)([V.A], () => V.A.error);
    return (0, r.jsx)(E.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function eh() {
    return (0, r.jsx)(g.N, {});
}
function em(e) {
    return () => (null != V.A.error && (0, f.ET)(), e());
}
function eE(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        s = t;
    null != t && (s = em(t));
    let a = n;
    return null != n && (a = em(n)), (0, r.jsx)(x.Ay, { ...i, onPrimary: s, onBack: a });
}
function eg(e) {
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
            header: y,
            analyticsData: b,
            analyticsLocation: D,
            hideBreadcrumbs: F = !1,
            usePaymentModalStep: B = !1,
            isEligibleForTrial: j = !1,
            allowDesktopRedirectPurchase: z = !1,
            toastContent: X,
            continueSessionToInitialStep: ee,
            overwriteSubscriptionPaymentSource: ea = !1,
            shouldUseManaModal: eo = !0,
        } = e,
        { stripe: em, contextMetadata: eg, activitySessionId: eA, paymentElementsEnabled: eI } = (0, L.P5)(),
        eT = i.useMemo(() => {
            let e = h === w.pn.PAYMENT_TYPE || h === w.pn.PAYMENT_ELEMENT;
            return eI && e ? (z ? w.pn.AWAITING_BROWSER_CHECKOUT : w.pn.PAYMENT_ELEMENT) : h;
        }, [eI, h, z]),
        eS = i.useMemo(() => (0, $.Gn)(), []),
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
        } = (0, q.kh)({ prependSteps: m, appendSteps: E, paymentElementsEnabled: eI });
    function eM(e) {
        switch (e) {
            case w.pn.CREDIT_CARD_INFORMATION:
                return ey;
            case w.pn.CASH_APP_INFORMATION:
                return eL;
            default:
                return { steps: [w.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [ex, eP] = i.useState(eT),
        [ek, eU] = i.useState(null),
        [eG, eF] = i.useState(eM(eT));
    i.useEffect(() => {
        (0, d.IV)();
    }, []);
    let eV = (0, l.bG)([V.A], () => V.A.redirectedPaymentSourceId),
        eB = (0, l.bG)([J.A], () => J.A.cashAppPayComponent),
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
                let n = H.A.getPaymentSource(eV);
                null != n && (e(n), t(!1), V.A.clearRedirectedPaymentSourceId());
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
            (0, u.createToast)(void 0 !== X ? X : en.intl.string(en.t["VJPg+l"]), u.ToastType.SUCCESS, {
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
        ta = (0, l.bG)([Y.A], () => Y.A.get(ts), [ts]),
        to = ta?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        ez(e.id), eW(e);
    }
    let tu = !(0, W.isDesktop)() || z ? ["googlePay", "applePay"] : [],
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
        } = (0, O.Lw)({
            step: ex,
            continueSessionToInitialStep: ee,
            paymentElementsEnabled: eI,
            handleStepChange: eY,
            logger: es,
            shouldLogOnChangeEvents: eS || !1,
            onBillingAddressChange: (e, t) => {
                e1({ info: { ...e0.info, ...e }, isValid: t });
            },
        }),
        tN = i.useCallback(
            (e, t) => (eI && null != t && (0, N.PE)(e) ? () => tE(e) : () => eY(w.pn.PAYMENT_TYPE)),
            [eI, tE, eY],
        );
    switch (ex) {
        case w.pn.ATTEMPT_GOOGLE_PAY:
        case w.pn.ATTEMPT_APPLE_PAY:
        case w.pn.PAYMENT_TYPE:
            let tC = (e, t) => {
                    switch (e) {
                        case et.he.CARD:
                            z ? eY(w.pn.AWAITING_BROWSER_CHECKOUT) : (eF(ey), eY(w.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case et.he.PAYPAL:
                            eF(ev), eY(w.pn.PAYPAL_INFORMATION);
                            break;
                        case et.he.VENMO:
                            eF(eR), eY(w.pn.VENMO_INFORMATION);
                            break;
                        case et.he.PAYMENT_REQUEST:
                            z && "googlePay" === t
                                ? eY(w.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : z && "applePay" === t
                                  ? eY(w.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eF(eC), eY(w.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case et.he.PRZELEWY24:
                            eF(eb), eY(w.pn.PRZELEWY24_INFORMATION);
                            break;
                        case et.he.EPS:
                            eF(eD), eY(w.pn.EPS_INFORMATION);
                            break;
                        case et.he.IDEAL:
                            eF(eN), eY(w.pn.IDEAL_INFORMATION);
                            break;
                        case et.he.CASH_APP:
                            eF(eL), eY(w.pn.CASH_APP_INFORMATION);
                            break;
                        case et.he.GIROPAY:
                        case et.he.PAYSAFE_CARD:
                        case et.he.GCASH:
                        case et.he.GRABPAY_MY:
                        case et.he.MOMO_WALLET:
                        case et.he.KAKAOPAY:
                        case et.he.GOPAY_WALLET:
                        case et.he.BANCONTACT:
                            eF({ steps: [...m, ...q.GC, ...E], methodType: e }), eY(w.pn.ADDRESS);
                    }
                    null != V.A.error && (0, f.ET)();
                },
                tR = (e, t) => {
                    e1((e) => ({ ...e, info: t })), eF(eC), tl(e);
                };
            const tO = () => {
                eF(eO), eY(w.pn.PAYMENT_TYPE);
            };
            let tb = async (e, t) => {
                if (((0, f.mf)(e), null == e)) return void tO();
                e$(e);
                let { billingAddressInfo: n } = (0, K.uK)(e),
                    r = v.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), e1({ isValid: r, info: n }), !r))
                    return void eY(w.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, D);
                    tR(t, n);
                } catch (e) {
                    tO();
                }
            };
            if (ex === w.pn.ATTEMPT_GOOGLE_PAY || ex === w.pn.ATTEMPT_APPLE_PAY) {
                let e = en.intl.string(ex === w.pn.ATTEMPT_APPLE_PAY ? en.t.czhXDv : en.t.Zj2xQ0),
                    i = en.intl.string(ex === w.pn.ATTEMPT_APPLE_PAY ? en.t.WoXvJL : en.t.wnVVr0);
                (t = (0, r.jsx)(U.V, {
                    onChooseType: tC,
                    paymentRequestWallet: ex === w.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tb,
                    onPaymentRequestFailure: () => {
                        tC(et.he.CARD), eU(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: t_,
                })),
                    (n = (0, r.jsx)(eE, {
                        onBack: () => eY(w.pn.PAYMENT_TYPE),
                        primaryCTA: x.Ay.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tc,
                        shouldUseManaModal: eo,
                    }));
                break;
            }
            (t = (0, r.jsx)(el, {
                onChooseType: tC,
                onStripePaymentMethodReceived: tb,
                paymentRequestWallets: tu,
                isEligibleForTrial: j,
                paymentRequestPaymentContext: { contextMetadata: eg, activitySessionId: eA },
                paymentSourceTypeRestrictions: to,
            })),
                (n = (0, r.jsx)(eE, { onBack: g, shouldUseManaModal: eo }));
            break;
        case w.pn.PAYMENT_ELEMENT:
            if (!eI) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tD = async () => {
                e2(!0);
                try {
                    if (null == tm || !(0, N.PE)(tm))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ew[tm];
                    if ((eF({ steps: e, methodType: t === et.he.UNKNOWN ? tm : t }), tm === et.he.PAYMENT_REQUEST)) {
                        let e = tA.current,
                            { paymentMethod: t } = await (0, d.YB)(em, e),
                            { billingAddressInfo: n } = (0, K.uK)(t);
                        e1((e) => ({ ...e, info: n })), tv(), eY(w.pn.ADDRESS);
                    } else {
                        let e = (0, N.eI)(tm);
                        null != e ? eY(e) : eY(w.pn.ADDRESS);
                    }
                } catch (e) {
                    es.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            (t = null),
                (n = (0, r.jsx)(eE, {
                    onBack: () => {
                        tg(), g?.();
                    },
                    primaryCTA: x.Ay.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !th,
                    onPrimary: tD,
                    shouldUseManaModal: eo,
                }));
            break;
        case w.pn.CREDIT_CARD_INFORMATION:
            let tL = async (e) => {
                e2(!0);
                try {
                    let t = await (0, d.YJ)(em, e);
                    eQ({ token: t }), eY(w.pn.ADDRESS);
                } catch (e) {
                    es.error(e.message ?? JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            t = (0, r.jsx)(eu, {
                onCardInfoChange: (e, t) => {
                    eZ({ info: e, isValid: t }), e1((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tw = !eq.isValid,
                tM = () => {
                    eY(w.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eE, {
                        onBack: tM,
                        primaryCTA: x.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: en.intl.string(en.t.PDTjLN),
                        primarySubmitting: eJ,
                        primaryDisabled: tw,
                        onPrimary: () => tL(t),
                        shouldUseManaModal: eo,
                    });
                },
            });
            break;
        case w.pn.AWAITING_BROWSER_CHECKOUT:
        case w.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case w.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tx = () => {
                    eF(ey), eY(eI ? w.pn.PAYMENT_ELEMENT : w.pn.CREDIT_CARD_INFORMATION);
                },
                tP = () => {
                    eI ? (tg(), g?.()) : (eF(eO), eY(w.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(k.t, { step: ex, onPurchaseComplete: () => A(ex), onHandoffFailure: tx })),
                (n = (0, r.jsx)(k.q, { onPrimaryClick: tx, onBackClick: tP }));
            break;
        case w.pn.EPS_INFORMATION:
            t = (0, r.jsx)(R.A, {
                type: et.he.EPS,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEPSBankChange: (e) => tt(e),
                epsBankValue: te,
                billingAddressInfo: e0.info,
            });
            let tk = tN(et.he.EPS, tm);
            n = (0, r.jsx)(eE, {
                onBack: tk,
                primaryCTA: x.Ay.CTAType.CONTINUE,
                primaryText: en.intl.string(en.t.PDTjLN),
                primaryDisabled: void 0 === te || "" === te || "" === e0.info.name,
                onPrimary: () => eY(w.pn.ADDRESS),
                shouldUseManaModal: eo,
            });
            break;
        case w.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(C.A, {
                type: et.he.IDEAL,
                onAccountHolderNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                billingAddressInfo: e0.info,
            })),
                (n = (0, r.jsx)(eE, {
                    onBack: () => eY(w.pn.PAYMENT_TYPE),
                    primaryCTA: x.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled: "" === e0.info.name,
                    onPrimary: () => eY(w.pn.ADDRESS),
                    shouldUseManaModal: eo,
                }));
            break;
        case w.pn.PRZELEWY24_INFORMATION:
            t = (0, r.jsx)(R.A, {
                type: et.he.PRZELEWY24,
                onNameChange: (e) => e1({ info: { ...e0.info, name: e }, isValid: e0.isValid }),
                onEmailChange: (e) => e1({ info: { ...e0.info, email: e }, isValid: e0.isValid }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: e0.info,
            });
            let tU = tN(et.he.PRZELEWY24, tm);
            n = (0, r.jsx)(eE, {
                onBack: tU,
                primaryCTA: x.Ay.CTAType.CONTINUE,
                primaryText: en.intl.string(en.t.PDTjLN),
                primaryDisabled:
                    void 0 === e0.info.name ||
                    "" === e0.info.name ||
                    void 0 === e0.info.email ||
                    "" === e0.info.email ||
                    void 0 === tn ||
                    "" === tn,
                onPrimary: () => eY(w.pn.ADDRESS),
                shouldUseManaModal: eo,
            });
            break;
        case w.pn.PAYPAL_INFORMATION:
            let tG = 0 !== e4.length && null != e5;
            t = (0, r.jsx)(ec, {});
            let tF = tN(et.he.PAYPAL, tm);
            n = (0, r.jsx)(eE, {
                onBack: tF,
                primaryCTA: x.Ay.CTAType.CONTINUE,
                primaryText: tG ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t.Djzd7L),
                onPrimary: () => (tG ? eY(w.pn.ADDRESS) : (0, _.$e)()),
                shouldUseManaModal: eo,
            });
            break;
        case w.pn.VENMO_INFORMATION:
            let tV = 0 !== e7.length && null != e5;
            t = (0, r.jsx)(ed, {});
            let tB = tN(et.he.VENMO, tm);
            n = (0, r.jsx)(eE, {
                onBack: tB,
                primaryCTA: x.Ay.CTAType.CONTINUE,
                primaryText: tV ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["4KoTLM"]),
                onPrimary: () => (tV ? eY(w.pn.ADDRESS) : (0, _.jR)()),
                shouldUseManaModal: eo,
            });
            break;
        case w.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ef, {})),
                (n = (0, r.jsx)(eE, { onBack: () => eY(w.pn.PAYMENT_TYPE), shouldUseManaModal: eo }));
            break;
        case w.pn.CASH_APP_INFORMATION:
            let tH = null != e8,
                tj = null != eB;
            t = (0, r.jsx)(e_, {});
            let tY = tN(et.he.CASH_APP, tm);
            n = (0, r.jsx)(eE, {
                onBack: tY,
                primaryCTA: x.Ay.CTAType.CONTINUE,
                primaryText: tH ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["9ALP8w"]),
                onPrimary: () => (tH ? eY(w.pn.ADDRESS) : (0, Q.uy)()),
                primaryDisabled: !tj,
                shouldUseManaModal: eo,
            });
            break;
        case w.pn.ADDRESS:
            let tW = eI && null != tm,
                tK = async () => {
                    e2(!0);
                    let e = tW ? tm : eG.methodType,
                        t = [
                            em,
                            tA.current,
                            {
                                billingAddress: e0.info,
                                paymentSourceType: e ?? et.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tI,
                            },
                            D,
                        ];
                    switch (e) {
                        case et.he.PAYMENT_REQUEST:
                            if (tW) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tl(e);
                                } catch (e) {
                                    e2(!1), es.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eK) throw (tO(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tl(await (0, d.Tv)(eK, e0.info, D));
                            break;
                        case et.he.CARD:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.u6)(em, eX.token, e0.info, D);
                                tl(e);
                            } catch {}
                            break;
                        case et.he.VENMO:
                        case et.he.PAYPAL:
                            try {
                                o()(null != e5, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e5, e0.info, D);
                                tl(e);
                            } catch {}
                            break;
                        case et.he.EPS:
                            try {
                                let e = await (0, d.Z9)(em, te, e0.info, D);
                                tl(e);
                            } catch (e) {
                                es.warn(e);
                            }
                            break;
                        case et.he.IDEAL:
                            try {
                                let e = tW ? await (0, d.im)(...t) : await (0, d.EB)(em, e0.info, D);
                                tl(e);
                            } catch (e) {
                                es.warn(e);
                            }
                            break;
                        case et.he.PRZELEWY24:
                            try {
                                if (void 0 === tn) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(em, { p24Bank: tn }, e0.info, D);
                                tl(e);
                            } catch {}
                            break;
                        case et.he.PAYSAFE_CARD:
                        case et.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e0.info, e, D);
                                tl(t);
                            } catch {}
                            break;
                        case et.he.GCASH:
                        case et.he.MOMO_WALLET:
                        case et.he.KAKAOPAY:
                        case et.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e0.info, e, D);
                                e6(t);
                            } catch {}
                            break;
                        case et.he.GIROPAY:
                        case et.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(em, e0.info, e, D);
                                tl(t);
                            } catch {}
                            break;
                        case et.he.CASH_APP:
                            try {
                                o()(null != e8, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e0.info, e, D, e8, ea);
                                o()(null != t, "Cash App Pay Payment Source missing"), tl(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e3 || e2(!1);
                };
            switch (eG.methodType) {
                case et.he.CARD:
                    (c = w.pn.CREDIT_CARD_INFORMATION), (a = et.he.CARD);
                    break;
                case et.he.PAYPAL:
                    (c = w.pn.PAYPAL_INFORMATION), (a = et.he.PAYPAL);
                    break;
                case et.he.VENMO:
                    (c = w.pn.VENMO_INFORMATION), (a = et.he.VENMO);
                    break;
                case et.he.GIROPAY:
                    (c = w.pn.PAYMENT_TYPE), (a = et.he.GIROPAY);
                    break;
                case et.he.PAYSAFE_CARD:
                case et.he.GCASH:
                case et.he.GRABPAY_MY:
                case et.he.MOMO_WALLET:
                case et.he.KAKAOPAY:
                case et.he.GOPAY_WALLET:
                case et.he.BANCONTACT:
                    (c = w.pn.PAYMENT_TYPE), (a = eG.methodType);
                    break;
                case et.he.EPS:
                    (c = w.pn.EPS_INFORMATION), (a = et.he.EPS);
                    break;
                case et.he.IDEAL:
                    (c = w.pn.IDEAL_INFORMATION), (a = et.he.IDEAL);
                    break;
                case et.he.PRZELEWY24:
                    (c = w.pn.PRZELEWY24_INFORMATION), (a = et.he.PRZELEWY24);
                    break;
                case et.he.CASH_APP:
                    (c = w.pn.CASH_APP_INFORMATION), (a = et.he.CASH_APP);
                    break;
                default:
                    (c = w.pn.PAYMENT_TYPE), (a = et.he.CARD);
            }
            tW && (c = w.pn.PAYMENT_ELEMENT),
                (t = tW
                    ? null
                    : (0, r.jsx)(ep, {
                          billingAddressInfo: e0.info,
                          onBillingAddressChange: (e, t) => {
                              e1({ info: { ...e0.info, ...e }, isValid: t });
                          },
                          paymentSourceType: a,
                      })),
                (n = (0, r.jsx)(eE, {
                    onBack: () => eY(c),
                    primaryCTA: x.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primarySubmitting: eJ,
                    primaryDisabled: !e0.isValid || e9,
                    onPrimary: tK,
                    shouldUseManaModal: eo,
                }));
            break;
        case w.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eh, {});
            break;
        default:
            throw Error(`Unexpected step: ${ex}`);
    }
    let t$ = eI && tp,
        tz = t$ ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(u.YC2, {
            className: ei.C9,
            staticClassName: ei.a2,
            animatedNodeClassName: ei.L2,
            fillParent: !0,
            overrideKey: tz,
            step: ex,
            steps: eG.steps,
            sideMargin: 20,
            children: [
                null != ek &&
                    (0, r.jsx)("div", {
                        className: er.Ns,
                        children: (0, r.jsx)(u.wx6, { type: "info", children: ek }),
                    }),
                t$ &&
                    (0, r.jsx)(O.e4, {
                        step: ex,
                        analyticsContext:
                            null != b ? { activitySessionId: eA, contextMetadata: eg, analyticsData: b } : void 0,
                        paymentElementSelectedType: tm,
                        elementsRef: tA,
                        stripePaymentElementProps: tT,
                        stripeAddressElementProps: tS,
                        addressElementKey: ty,
                        billingAddressInfo: e0.info,
                        onSetupError: () => {
                            tg(), eY(w.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tZ = ex === w.pn.PAYMENT_TYPE && 0 === m.length ? null : n;
    return B
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  j && (0, r.jsx)(M.A, { className: er.At, isEligibleForTrial: j }),
                  (0, r.jsxs)(P.dZ, { children: [(0, r.jsx)(G.A, { className: er._8 }), tq] }),
                  (0, r.jsx)(P.UX, { children: tZ }),
              ],
          })
        : (0, r.jsx)(Z.A, {
              shouldUseManaModal: eo,
              steps: T ?? eG.steps,
              currentStep: S ?? ex,
              overrideKey: tz,
              paymentError: p.paymentError,
              header: y,
              hideBreadcrumbs: F,
              body: tq,
              footer: tZ,
          });
}
function eA(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, l.cf)([H.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : H.A.defaultPaymentSourceId,
            paymentSources: H.A.paymentSources,
            hasFetchedPaymentSources: H.A.hasFetchedPaymentSources,
        })),
        s = (0, l.bG)([J.A], () => J.A.cashAppPayComponent),
        a = (0, l.bG)([y.A], () => y.A.data?.allowed_payment_source_types ?? null);
    (0, T.Ay)(() => {
        (0, _.UU)(), r || (0, d.$o)();
    }),
        i.useEffect(() => {
            null == s && null != a && a.includes(et.he.CASH_APP) && (0, Q.UU)();
        }, [a, s]);
    let [o, u] = i.useState(t);
    null != t && null == o && u(t);
    let [p, h] = i.useState(() => ({ info: ea, isValid: !1 })),
        [m, E] = i.useState(() => ({ info: eo, isValid: !1 })),
        [g, A] = i.useState(""),
        [I, S] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, l.yK)([V.A], () => [
            V.A.braintreeEmail,
            V.A.braintreeNonce,
            V.A.error,
            V.A.venmoUsername,
            V.A.adyenPaymentData,
        ]),
        [L, w] = (0, l.yK)([B.A], () => [B.A.error, B.A.isAwaitingAuthentication]);
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
        [U, G] = i.useState(null),
        F = i.useRef(null),
        Y = (0, l.bG)([B.A], () => B.A.isAwaitingAuthentication),
        [W, K] = (0, l.yK)([j.A], () => [j.A.purchaseTokenAuthState, j.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != U && null != F.current && F.current.scrollIntoView({ behavior: "smooth" });
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
            paymentAuthenticationState: w ? z.oc.PENDING : null != L ? z.oc.ERROR : z.oc.NONE,
            purchaseError: U,
            setPurchaseError: G,
            purchaseErrorBlockRef: F,
            isAuthenticating: Y,
            purchaseTokenAuthState: W,
            purchaseTokenHash: K,
            epsBankState: I,
            setEpsBankState: S,
            p24BankState: g,
            setP24BankState: A,
        }
    );
}
