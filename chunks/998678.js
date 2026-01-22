n.d(t, {
    KP: () => eA,
    Y: () => eO,
}),
    n(896048),
    n(457529),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(284009),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(384904),
    f = n(493405),
    p = n(391048),
    _ = n(73079),
    h = n(15373),
    m = n(229403),
    g = n(959391),
    E = n(891197),
    b = n(202626),
    y = n(893234),
    O = n(964486),
    A = n(550238),
    v = n(648335),
    S = n(6332),
    I = n(182533),
    T = n(211528),
    C = n(626584),
    N = n(156312),
    R = n(166532),
    w = n(69494),
    P = n(19311),
    D = n(482132),
    x = n(617745),
    L = n(869177),
    j = n(921925),
    M = n(615405),
    k = n(825755),
    U = n(153084),
    G = n(295405),
    V = n(293700),
    F = n(67480),
    B = n(723702),
    H = n(71532),
    Y = n(427262),
    W = n(251913),
    K = n(68231),
    z = n(632638),
    q = n(218075),
    X = n(682449),
    Z = n(490581),
    Q = n(168984),
    $ = n(818348),
    J = n(985018),
    ee = n(240452),
    et = n(676032);

function en(e, t, n) {
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

function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}

function ei(e, t) {
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

function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = eo(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let el = new C.A("AddPaymentStep.tsx"),
    ec = {
        name: "",
        cardNumber: "",
        expirationDate: "",
        cvc: "",
    },
    eu = {
        email: "",
        name: "",
        country: "",
        line1: "",
        line2: "",
        city: "",
        postalCode: "",
        state: "",
    };

function ed(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? q.f.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: ee.rf,
        children: [
            (0, r.jsx)(q.j, {
                paymentRestrictionBannerType: n,
            }),
            (0, r.jsx)(_.A, er({}, e)),
        ],
    });
}

function ef(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([k.A], () => k.A.error);
    return (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(b.A, {
            billingError: n,
            onCardInfoChange: t,
        }),
    });
}

function ep() {
    return (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(h.A, {}),
    });
}

function e_() {
    return (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(m.A, {}),
    });
}

function eh() {
    return (0, r.jsx)("div", {
        className: ee.rf,
        children: (0, r.jsx)(Q.A, {}),
    });
}

function em() {
    let e = (0, l.bG)([M.A], () => M.A.isBusy),
        t = (0, l.bG)([k.A], () => k.A.stripePaymentMethod);
    return (0, r.jsx)(y.y, {
        className: ee.rf,
        stripePaymentMethod: t,
        submitting: e,
    });
}

function eg(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.bG)([k.A], () => k.A.error);
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

function eE() {
    return (0, r.jsx)(E.N, {
        className: ee.rf,
    });
}

function eb(e) {
    return () => (null != k.A.error && (0, p.ET)(), e());
}

function ey(e) {
    let { onPrimary: t, onBack: n } = e,
        i = es(e, ["onPrimary", "onBack"]),
        a = t;
    null != t && (a = eb(t));
    let s = n;
    return (
        null != n && (s = eb(n)),
        (0, r.jsx)(
            P.A,
            ea(er({}, i), {
                onPrimary: a,
                onBack: s,
            }),
        )
    );
}

function eO(e) {
    var t;
    let n,
        s,
        u,
        _,
        {
            paymentModalArgs: h,
            initialStep: m,
            prependSteps: g,
            appendSteps: E,
            onReturn: b,
            onComplete: y,
            onStepChange: O,
            breadcrumpSteps: C,
            currentBreadcrumpStep: M,
            header: U,
            analyticsData: V,
            analyticsLocation: W,
            hideBreadcrumbs: q = !1,
            usePaymentModalStep: Q = !1,
            isEligibleForTrial: en = !1,
            allowDesktopRedirectPurchase: ei = !1,
            toastContent: es,
            continueSessionToInitialStep: eo,
            overwriteSubscriptionPaymentSource: ec = !1,
        } = e,
        { stripe: eu, contextMetadata: eb, activitySessionId: eO, paymentElementsEnabled: eA } = (0, N.P5)(),
        ev = i.useMemo(() => {
            let e = m === R.pn.PAYMENT_TYPE || m === R.pn.PAYMENT_ELEMENT;
            return eA && e ? (ei ? R.pn.AWAITING_BROWSER_CHECKOUT : R.pn.PAYMENT_ELEMENT) : m;
        }, [eA, m, ei]),
        eS = i.useMemo(() => (0, Y.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eI,
            PAYPAL_STEPS: eT,
            IDEAL_STEPS: eC,
            PAYMENT_REQUEST_STEPS: eN,
            VENMO_STEPS: eR,
            ADD_PAYMENT_STEPS: ew,
            PRZELEWY24_STEPS: eP,
            EPS_STEPS: eD,
            CASH_APP_STEPS: ex,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eL,
        } = (0, K.kh)({
            prependSteps: g,
            appendSteps: E,
            paymentElementsEnabled: eA,
        });

    function ej(e) {
        switch (e) {
            case R.pn.CREDIT_CARD_INFORMATION:
                return eI;
            case R.pn.CASH_APP_INFORMATION:
                return ex;
            default:
                return {
                    steps: [R.pn.ADD_PAYMENT_STEPS],
                };
        }
    }
    let [eM, ek] = i.useState(ev),
        [eU, eG] = i.useState(null),
        [eV, eF] = i.useState(ej(ev)),
        eB = (0, l.bG)([k.A], () => k.A.redirectedPaymentSourceId),
        eH = (0, l.bG)([Z.A], () => Z.A.cashAppPayComponent),
        eY = {
            completeSteps: tu,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep,
        },
        eW = i.useRef(eY);
    i.useEffect(() => {
        eW.current = eY;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eW.current;
            (async () => {
                if (null == eB) return;
                await (0, d.$o)();
                let n = G.A.getPaymentSource(eB);
                null != n && (e(n), t(!1), k.A.clearRedirectedPaymentSourceId());
            })();
        }, [eB]);
    let eK = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eG(null),
                ek(e),
                t &&
                    O({
                        currentStep: eM,
                        toStep: e,
                    });
        },
        [eM, O],
    );

    function ez(e) {
        (0, c.showToast)(
            (0, c.createToast)(void 0 !== es ? es : J.intl.string(J.t["VJPg+l"]), c.ToastType.SUCCESS, {
                position: c.ToastPosition.BOTTOM,
            }),
        ),
            y(eM, e),
            eK(ev, !1);
    }
    let [eq, eX] = i.useState(null),
        {
            setPaymentSourceId: eZ,
            creditCardState: eQ,
            setCreditCardState: e$,
            tokenState: eJ,
            setTokenState: e0,
            isSubmittingCurrentStep: e1,
            billingAddressState: e2,
            setBillingAddressState: e3,
            setIsSubmittingCurrentStep: e6,
            hasRedirectURL: e4,
            setHasRedirectURL: e5,
            braintreeEmail: e7,
            braintreeNonce: e8,
            venmoUsername: e9,
            adyenPaymentData: te,
            isAuthenticating: tt,
            epsBankState: tn,
            setEpsBankState: tr,
            p24BankState: ti,
            setP24BankState: ta,
            selectedSkuId: ts,
        } = h,
        to = null != ts ? ts : "",
        tl = (0, l.bG)([F.A], () => F.A.get(to), [to]),
        tc = null == tl || null == (t = tl.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());

    function tu(e) {
        eZ(e.id), ez(e);
    }
    let td = !(0, B.isDesktop)() || ei ? ["googlePay", "applePay"] : [],
        [tf, tp] = i.useState(!1),
        t_ = i.useRef(null),
        th = () => {
            null != t_.current && t_.current.show();
        },
        {
            shouldRenderPaymentElement: tm,
            paymentElementReady: tg,
            paymentElementSelectedType: tE,
            handlePaymentElementStep: tb,
            onBackFromPaymentElement: ty,
            combinedStripeElementsRef: tO,
            lastConfirmedSetupIntentRef: tA,
            stripePaymentElementProps: tv,
            stripeAddressElementProps: tS,
            addressElementKey: tI,
            remountAddressElement: tT,
        } = (0, T.Lw)({
            step: eM,
            continueSessionToInitialStep: eo,
            paymentElementsEnabled: eA,
            handleStepChange: eK,
            logger: el,
            shouldLogOnChangeEvents: eS || !1,
            onBillingAddressChange: (e, t) => {
                e3({
                    info: er({}, e2.info, e),
                    isValid: t,
                });
            },
        }),
        tC = i.useCallback(
            (e, t) => (eA && null != t && (0, v.PE)(e) ? () => tb(e) : () => eK(R.pn.PAYMENT_TYPE)),
            [eA, tb, eK],
        );
    switch (eM) {
        case R.pn.ATTEMPT_GOOGLE_PAY:
        case R.pn.ATTEMPT_APPLE_PAY:
        case R.pn.PAYMENT_TYPE:
            let tN = (e, t) => {
                    switch (e) {
                        case $.he.CARD:
                            ei ? eK(R.pn.AWAITING_BROWSER_CHECKOUT) : (eF(eI), eK(R.pn.CREDIT_CARD_INFORMATION));
                            break;
                        case $.he.PAYPAL:
                            eF(eT), eK(R.pn.PAYPAL_INFORMATION);
                            break;
                        case $.he.VENMO:
                            eF(eR), eK(R.pn.VENMO_INFORMATION);
                            break;
                        case $.he.PAYMENT_REQUEST:
                            ei && "googlePay" === t
                                ? eK(R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : ei && "applePay" === t
                                  ? eK(R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eF(eN), eK(R.pn.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case $.he.PRZELEWY24:
                            eF(eP), eK(R.pn.PRZELEWY24_INFORMATION);
                            break;
                        case $.he.EPS:
                            eF(eD), eK(R.pn.EPS_INFORMATION);
                            break;
                        case $.he.IDEAL:
                            eF(eC), eK(R.pn.IDEAL_INFORMATION);
                            break;
                        case $.he.CASH_APP:
                            eF(ex), eK(R.pn.CASH_APP_INFORMATION);
                            break;
                        case $.he.GIROPAY:
                        case $.he.PAYSAFE_CARD:
                        case $.he.GCASH:
                        case $.he.GRABPAY_MY:
                        case $.he.MOMO_WALLET:
                        case $.he.KAKAOPAY:
                        case $.he.GOPAY_WALLET:
                        case $.he.BANCONTACT:
                            eF({
                                steps: [...g, ...K.GC, ...E],
                                methodType: e,
                            }),
                                eK(R.pn.ADDRESS);
                    }
                    null != k.A.error && (0, p.ET)();
                },
                tR = (e, t) => {
                    e3((e) =>
                        ea(er({}, e), {
                            info: t,
                        }),
                    ),
                        eF(eN),
                        tu(e);
                };
            const tw = () => {
                eF(ew), eK(R.pn.PAYMENT_TYPE);
            };
            let tP = async (e, t) => {
                if (((0, p.mf)(e), null == e)) return void tw();
                eX(e);
                let { billingAddressInfo: n } = (0, H.uK)(e),
                    r = A.V.every((e) => {
                        let t = n[e];
                        return null != t && "" !== t;
                    });
                if (
                    ((null == n.name || "" === n.name) && null != t && (n.name = t),
                    e3({
                        isValid: r,
                        info: n,
                    }),
                    !r)
                )
                    return void eK(R.pn.ADDRESS);
                try {
                    let t = await (0, d.Tv)(e, n, W);
                    tR(t, n);
                } catch (e) {
                    tw();
                }
            };
            if (eM === R.pn.ATTEMPT_GOOGLE_PAY || eM === R.pn.ATTEMPT_APPLE_PAY) {
                let e = J.intl.string(eM === R.pn.ATTEMPT_APPLE_PAY ? J.t.czhXDv : J.t.Zj2xQ0),
                    t = J.intl.string(eM === R.pn.ATTEMPT_APPLE_PAY ? J.t.WoXvJL : J.t.wnVVr0);
                (n = (0, r.jsx)(L.V, {
                    onChooseType: tN,
                    paymentRequestWallet: eM === R.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tP,
                    onPaymentRequestFailure: () => {
                        tN($.he.CARD), eG(e);
                    },
                    onValidPaymentRequest: () => tp(!0),
                    paymentRequestRef: t_,
                })),
                    (s = (0, r.jsx)(ey, {
                        onBack: () => eK(R.pn.PAYMENT_TYPE),
                        primaryCTA: P.A.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => th(),
                        primaryDisabled: !tf,
                    }));
                break;
            }
            (n = (0, r.jsx)(ed, {
                onChooseType: tN,
                onStripePaymentMethodReceived: tP,
                paymentRequestWallets: td,
                isEligibleForTrial: en,
                paymentRequestPaymentContext: {
                    contextMetadata: eb,
                    activitySessionId: eO,
                },
                paymentSourceTypeRestrictions: tc,
            })),
                (s = (0, r.jsx)(ey, {
                    onBack: b,
                }));
            break;
        case R.pn.PAYMENT_ELEMENT:
            if (!eA) throw (0, d.ne)("Payment Elements not enabled, invalid step", !0);
            let tD = async () => {
                e6(!0);
                try {
                    if (null == tE || !(0, v.PE)(tE))
                        throw (0, d.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = eL[tE];
                    if (
                        (eF({
                            steps: e,
                            methodType: t === $.he.UNKNOWN ? tE : t,
                        }),
                        tE === $.he.PAYMENT_REQUEST)
                    ) {
                        let e = tO.current,
                            { paymentMethod: t } = await (0, d.YB)(eu, e),
                            { billingAddressInfo: n } = (0, H.uK)(t);
                        e3((e) =>
                            ea(er({}, e), {
                                info: n,
                            }),
                        ),
                            tT(),
                            eK(R.pn.ADDRESS);
                    } else {
                        let e = (0, v.eI)(tE);
                        null != e ? eK(e) : eK(R.pn.ADDRESS);
                    }
                } catch (t) {
                    var e;
                    el.error(
                        "Error on submitting Payment Element step: ",
                        null != (e = t.message) ? e : JSON.stringify(t),
                    );
                } finally {
                    e6(!1);
                }
            };
            (n = null),
                (s = (0, r.jsx)(ey, {
                    onBack: () => {
                        ty(), null == b || b();
                    },
                    primaryCTA: P.A.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: e1,
                    primaryDisabled: !tg,
                    onPrimary: tD,
                }));
            break;
        case R.pn.CREDIT_CARD_INFORMATION:
            let tx = async (e) => {
                e6(!0);
                try {
                    let t = await (0, d.YJ)(eu, e);
                    e0({
                        token: t,
                    }),
                        eK(R.pn.ADDRESS);
                } catch (e) {
                    var t;
                    el.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e6(!1);
                }
            };
            n = (0, r.jsx)(ef, {
                onCardInfoChange: (e, t) => {
                    e$({
                        info: e,
                        isValid: t,
                    }),
                        e3((t) =>
                            ea(er({}, t), {
                                info: ea(er({}, t.info), {
                                    name: e.name,
                                }),
                            }),
                        );
                },
            });
            let tL = !eQ.isValid,
                tj = () => {
                    eK(R.pn.PAYMENT_TYPE);
                };
            s = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ey, {
                        onBack: tj,
                        primaryCTA: P.A.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: J.intl.string(J.t.PDTjLN),
                        primarySubmitting: e1,
                        primaryDisabled: tL,
                        onPrimary: () => tx(t),
                    });
                },
            });
            break;
        case R.pn.AWAITING_BROWSER_CHECKOUT:
        case R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tM = () => {
                    eF(eI), eK(eA ? R.pn.PAYMENT_ELEMENT : R.pn.CREDIT_CARD_INFORMATION);
                },
                tk = () => {
                    eA ? (ty(), null == b || b()) : (eF(ew), eK(R.pn.PAYMENT_TYPE));
                };
            (n = (0, r.jsx)("div", {
                className: ee.rf,
                children: (0, r.jsx)(x.t, {
                    step: eM,
                    onPurchaseComplete: () => y(eM),
                    onHandoffFailure: tM,
                }),
            })),
                (s = (0, r.jsx)(x.q, {
                    onPrimaryClick: tM,
                    onBackClick: tk,
                }));
            break;
        case R.pn.EPS_INFORMATION:
            n = (0, r.jsx)(I.A, {
                type: $.he.EPS,
                onAccountHolderNameChange: (e) =>
                    e3({
                        info: ea(er({}, e2.info), {
                            name: e,
                        }),
                        isValid: e2.isValid,
                    }),
                onEPSBankChange: (e) => tr(e),
                epsBankValue: tn,
                billingAddressInfo: e2.info,
            });
            let tU = tC($.he.EPS, tE);
            s = (0, r.jsx)(ey, {
                onBack: tU,
                primaryCTA: P.A.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled: void 0 === tn || "" === tn || "" === e2.info.name,
                onPrimary: () => eK(R.pn.ADDRESS),
            });
            break;
        case R.pn.IDEAL_INFORMATION:
            (n = (0, r.jsx)(S.A, {
                type: $.he.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e3({
                        info: ea(er({}, e2.info), {
                            name: e,
                        }),
                        isValid: e2.isValid,
                    }),
                billingAddressInfo: e2.info,
            })),
                (s = (0, r.jsx)(ey, {
                    onBack: () => eK(R.pn.PAYMENT_TYPE),
                    primaryCTA: P.A.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primaryDisabled: "" === e2.info.name,
                    onPrimary: () => eK(R.pn.ADDRESS),
                }));
            break;
        case R.pn.PRZELEWY24_INFORMATION:
            n = (0, r.jsx)(I.A, {
                type: $.he.PRZELEWY24,
                onNameChange: (e) =>
                    e3({
                        info: ea(er({}, e2.info), {
                            name: e,
                        }),
                        isValid: e2.isValid,
                    }),
                onEmailChange: (e) =>
                    e3({
                        info: ea(er({}, e2.info), {
                            email: e,
                        }),
                        isValid: e2.isValid,
                    }),
                onP24BankChange: (e) => {
                    ta(e);
                },
                p24BankValue: ti,
                billingAddressInfo: e2.info,
            });
            let tG = tC($.he.PRZELEWY24, tE);
            s = (0, r.jsx)(ey, {
                onBack: tG,
                primaryCTA: P.A.CTAType.CONTINUE,
                primaryText: J.intl.string(J.t.PDTjLN),
                primaryDisabled:
                    void 0 === e2.info.name ||
                    "" === e2.info.name ||
                    void 0 === e2.info.email ||
                    "" === e2.info.email ||
                    void 0 === ti ||
                    "" === ti,
                onPrimary: () => eK(R.pn.ADDRESS),
            });
            break;
        case R.pn.PAYPAL_INFORMATION:
            let tV = 0 !== e7.length && null != e8;
            n = (0, r.jsx)(ep, {});
            let tF = tC($.he.PAYPAL, tE);
            s = (0, r.jsx)(ey, {
                onBack: tF,
                primaryCTA: P.A.CTAType.CONTINUE,
                primaryText: tV ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t.Djzd7L),
                onPrimary: () => (tV ? eK(R.pn.ADDRESS) : (0, f.$e)()),
            });
            break;
        case R.pn.VENMO_INFORMATION:
            let tB = 0 !== e9.length && null != e8;
            n = (0, r.jsx)(e_, {});
            let tH = tC($.he.VENMO, tE);
            s = (0, r.jsx)(ey, {
                onBack: tH,
                primaryCTA: P.A.CTAType.CONTINUE,
                primaryText: tB ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["4KoTLM"]),
                onPrimary: () => (tB ? eK(R.pn.ADDRESS) : (0, f.jR)()),
            });
            break;
        case R.pn.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(em, {})),
                (s = (0, r.jsx)(ey, {
                    onBack: () => eK(R.pn.PAYMENT_TYPE),
                }));
            break;
        case R.pn.CASH_APP_INFORMATION:
            let tY = null != te,
                tW = null != eH;
            n = (0, r.jsx)(eh, {});
            let tK = tC($.he.CASH_APP, tE);
            s = (0, r.jsx)(ey, {
                onBack: tK,
                primaryCTA: P.A.CTAType.CONTINUE,
                primaryText: tY ? J.intl.string(J.t.PDTjLN) : J.intl.string(J.t["9ALP8w"]),
                onPrimary: () => (tY ? eK(R.pn.ADDRESS) : (0, X.uy)()),
                primaryDisabled: !tW,
            });
            break;
        case R.pn.ADDRESS:
            let tz = eA && null != tE,
                tq = async () => {
                    e6(!0);
                    let e = tz ? tE : eV.methodType,
                        t = [
                            eu,
                            tO.current,
                            {
                                billingAddress: e2.info,
                                paymentSourceType: null != e ? e : $.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: tA,
                            },
                            W,
                        ];
                    switch (e) {
                        case $.he.PAYMENT_REQUEST:
                            if (tz) {
                                try {
                                    let e = await (0, d.im)(...t);
                                    tu(e);
                                } catch (e) {
                                    e6(!1), el.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eq) throw (tw(), (0, d.i0)("Missing paymentRequestPaymentMethod"));
                            tu(await (0, d.Tv)(eq, e2.info, W));
                            break;
                        case $.he.CARD:
                            try {
                                let e = tz ? await (0, d.im)(...t) : await (0, d.u6)(eu, eJ.token, e2.info, W);
                                tu(e);
                            } catch (e) {}
                            break;
                        case $.he.VENMO:
                        case $.he.PAYPAL:
                            try {
                                o()(null != e8, "Missing braintreeNonce");
                                let e = await (0, d.u1)(e8, e2.info, W);
                                tu(e);
                            } catch (e) {}
                            break;
                        case $.he.EPS:
                            try {
                                let e = await (0, d.Z9)(eu, tn, e2.info, W);
                                tu(e);
                            } catch (e) {
                                el.warn(e);
                            }
                            break;
                        case $.he.IDEAL:
                            try {
                                let e = tz ? await (0, d.im)(...t) : await (0, d.EB)(eu, e2.info, W);
                                tu(e);
                            } catch (e) {
                                el.warn(e);
                            }
                            break;
                        case $.he.PRZELEWY24:
                            try {
                                if (void 0 === ti) throw (0, d.i0)("Bank required for Przelewy24");
                                let e = await (0, d.TD)(
                                    eu,
                                    {
                                        p24Bank: ti,
                                    },
                                    e2.info,
                                    W,
                                );
                                tu(e);
                            } catch (e) {}
                            break;
                        case $.he.PAYSAFE_CARD:
                        case $.he.GRABPAY_MY:
                            try {
                                let t = await (0, d.A8)(e2.info, e, W);
                                tu(t);
                            } catch (e) {}
                            break;
                        case $.he.GCASH:
                        case $.he.MOMO_WALLET:
                        case $.he.KAKAOPAY:
                        case $.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.$M)(e2.info, e, W);
                                e5(t);
                            } catch (e) {}
                            break;
                        case $.he.GIROPAY:
                        case $.he.BANCONTACT:
                            try {
                                let t = await (0, d.bw)(eu, e2.info, e, W);
                                tu(t);
                            } catch (e) {}
                            break;
                        case $.he.CASH_APP:
                            try {
                                o()(null != te, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.$M)(e2.info, e, W, te, ec);
                                o()(null != t, "Cash App Pay Payment Source missing"), tu(t);
                            } catch (e) {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e4 || e6(!1);
                };
            switch (eV.methodType) {
                case $.he.CARD:
                    (_ = R.pn.CREDIT_CARD_INFORMATION), (u = $.he.CARD);
                    break;
                case $.he.PAYPAL:
                    (_ = R.pn.PAYPAL_INFORMATION), (u = $.he.PAYPAL);
                    break;
                case $.he.VENMO:
                    (_ = R.pn.VENMO_INFORMATION), (u = $.he.VENMO);
                    break;
                case $.he.GIROPAY:
                    (_ = R.pn.PAYMENT_TYPE), (u = $.he.GIROPAY);
                    break;
                case $.he.PAYSAFE_CARD:
                case $.he.GCASH:
                case $.he.GRABPAY_MY:
                case $.he.MOMO_WALLET:
                case $.he.KAKAOPAY:
                case $.he.GOPAY_WALLET:
                case $.he.BANCONTACT:
                    (_ = R.pn.PAYMENT_TYPE), (u = eV.methodType);
                    break;
                case $.he.EPS:
                    (_ = R.pn.EPS_INFORMATION), (u = $.he.EPS);
                    break;
                case $.he.IDEAL:
                    (_ = R.pn.IDEAL_INFORMATION), (u = $.he.IDEAL);
                    break;
                case $.he.PRZELEWY24:
                    (_ = R.pn.PRZELEWY24_INFORMATION), (u = $.he.PRZELEWY24);
                    break;
                case $.he.CASH_APP:
                    (_ = R.pn.CASH_APP_INFORMATION), (u = $.he.CASH_APP);
                    break;
                default:
                    (_ = R.pn.PAYMENT_TYPE), (u = $.he.CARD);
            }
            tz && (_ = R.pn.PAYMENT_ELEMENT),
                (n = tz
                    ? null
                    : (0, r.jsx)(eg, {
                          billingAddressInfo: e2.info,
                          onBillingAddressChange: (e, t) => {
                              e3({
                                  info: er({}, e2.info, e),
                                  isValid: t,
                              });
                          },
                          paymentSourceType: u,
                      })),
                (s = (0, r.jsx)(ey, {
                    onBack: () => eK(_),
                    primaryCTA: P.A.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLN),
                    primarySubmitting: e1,
                    primaryDisabled: !e2.isValid || tt,
                    onPrimary: tq,
                }));
            break;
        case R.pn.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eE, {});
            break;
        default:
            throw Error("Unexpected step: ".concat(eM));
    }
    let tX = eA && tm,
        tZ = tX ? "combined_stripe_elements" : void 0,
        tQ = (0, r.jsxs)(c.YC2, {
            className: et.C9,
            staticClassName: et.a2,
            animatedNodeClassName: et.L2,
            fillParent: !0,
            overrideKey: tZ,
            step: eM,
            steps: eV.steps,
            sideMargin: 20,
            children: [
                null != eU &&
                    (0, r.jsx)("div", {
                        className: ee.Ns,
                        children: (0, r.jsx)(c.wx6, {
                            type: "info",
                            children: eU,
                        }),
                    }),
                tX &&
                    (0, r.jsx)(T.e4, {
                        step: eM,
                        analyticsContext:
                            null != V
                                ? {
                                      activitySessionId: eO,
                                      contextMetadata: eb,
                                      analyticsData: V,
                                  }
                                : void 0,
                        paymentElementSelectedType: tE,
                        elementsRef: tO,
                        stripePaymentElementProps: tv,
                        stripeAddressElementProps: tS,
                        addressElementKey: tI,
                        billingAddressInfo: e2.info,
                        onSetupError: () => {
                            ty(), eK(R.pn.PAYMENT_TYPE);
                        },
                    }),
                n,
            ],
        }),
        t$ = eM === R.pn.PAYMENT_TYPE && 0 === g.length ? null : s;
    return Q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  en &&
                      (0, r.jsx)(w.A, {
                          className: ee.At,
                          isEligibleForTrial: en,
                      }),
                  (0, r.jsxs)(D.dZ, {
                      children: [
                          (0, r.jsx)(j.A, {
                              className: ee._8,
                          }),
                          tQ,
                      ],
                  }),
                  (0, r.jsx)(D.UX, {
                      children: t$,
                  }),
              ],
          })
        : (0, r.jsx)(z.A, {
              steps: null != C ? C : eV.steps,
              currentStep: null != M ? M : eM,
              overrideKey: tZ,
              paymentError: h.paymentError,
              header: U,
              hideBreadcrumbs: q,
              body: tQ,
              footer: t$,
          });
}

function eA(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cf)([G.A], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : G.A.defaultPaymentSourceId,
        paymentSources: G.A.paymentSources,
        hasFetchedPaymentSources: G.A.hasFetchedPaymentSources,
    }));
    (0, O.Ay)(() => {
        null == Z.A.cashAppPayComponent && (0, X.UU)(), (0, f.UU)(), r || (0, d.$o)();
    });
    let [a, s] = i.useState(t);
    null != t && null == a && s(t);
    let [o, c] = i.useState(() => ({
            info: ec,
            isValid: !1,
        })),
        [_, h] = i.useState(() => ({
            info: eu,
            isValid: !1,
        })),
        [m, g] = i.useState(""),
        [E, b] = i.useState(""),
        [y, A] = i.useState(() => ({
            token: null,
        })),
        [v, S, I, T, C] = (0, l.yK)([k.A], () => [
            k.A.braintreeEmail,
            k.A.braintreeNonce,
            k.A.error,
            k.A.venmoUsername,
            k.A.adyenPaymentData,
        ]),
        [N, R] = (0, l.yK)([U.A], () => [U.A.error, U.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({
                info: t,
                isValid: t.country.length > 0,
            });
        };
        return (
            u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, p.ET)();
            }
        );
    }, []);
    let [w, P] = i.useState(!1),
        [D, x] = i.useState(!1),
        [L, j] = i.useState(null),
        M = i.useRef(null),
        F = (0, l.bG)([U.A], () => U.A.isAwaitingAuthentication),
        [B, H] = (0, l.yK)([V.A], () => [V.A.purchaseTokenAuthState, V.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != L &&
                null != M.current &&
                M.current.scrollIntoView({
                    behavior: "smooth",
                });
        }, [L]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: s,
            creditCardState: o,
            setCreditCardState: c,
            tokenState: y,
            setTokenState: A,
            billingAddressState: _,
            setBillingAddressState: h,
            isSubmittingCurrentStep: w,
            setIsSubmittingCurrentStep: P,
            hasRedirectURL: D,
            setHasRedirectURL: x,
            braintreeEmail: v,
            braintreeNonce: S,
            venmoUsername: T,
            adyenPaymentData: C,
            paymentError: null != N ? N : I,
            paymentAuthenticationState: R ? W.oc.PENDING : null != N ? W.oc.ERROR : W.oc.NONE,
            purchaseError: L,
            setPurchaseError: j,
            purchaseErrorBlockRef: M,
            isAuthenticating: F,
            purchaseTokenAuthState: B,
            purchaseTokenHash: H,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g,
        }
    );
}
