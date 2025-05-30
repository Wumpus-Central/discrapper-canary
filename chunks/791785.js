n.d(t, {
    I: () => et,
    PaymentModal: () => ee
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(554908),
    l = n(399606),
    c = n(481060),
    u = n(570140),
    d = n(496929),
    f = n(366939),
    _ = n(16084),
    p = n(975608),
    h = n(493773),
    m = n(89057),
    g = n(232127),
    E = n(382577),
    b = n(522558),
    y = n(522489),
    O = n(795448),
    v = n(317271),
    I = n(857039),
    S = n(104494),
    T = n(176919),
    A = n(711007),
    N = n(459965),
    C = n(509545),
    P = n(580130),
    R = n(626135),
    w = n(669079),
    D = n(74538),
    L = n(987209),
    x = n(563132),
    k = n(409813),
    M = n(45572),
    j = n(784707),
    U = n(614223),
    G = n(48175),
    B = n(435020),
    F = n(928886),
    V = n(456251),
    Z = n(614277),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(179742);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 2,
    $ = 'billing';
function ee(e) {
    let { analyticsDataOverride: t, analyticsLocations: n, analyticsLocation: a, analyticsObject: l, analyticsSourceLocation: d, analyticsSubscriptionType: p = H.NYc.PREMIUM, onComplete: m, transitionState: y, initialPlanId: P, subscriptionTier: U, onClose: G, trialId: V, trialFooterMessageOverride: z, reviewWarningMessage: Q, planGroup: $ = Y.Y1, openInvoiceId: et, onSubscriptionConfirmation: en, renderPurchaseConfirmation: er, postSuccessGuild: ei, followupSKUInfo: ea, renderHeader: eo, applicationId: es, guildId: el, referralTrialOfferId: ec, skuId: eu, onStepChange: ed, shakeWhilePurchasing: ef = !1, isLargeModal: e_ = !1, isDynamicModal: ep = !1, hideShadow: eh = !1, returnRef: em, skipConfirm: eg = !1, continueSessionToInitialStep: eE } = e,
        { activitySessionId: eb, purchaseState: ey, setPurchaseState: eO, selectedSkuId: ev, setSelectedSkuId: eI, selectedPlan: eS, setSelectedPlanId: eT, setSelectedPlanNotification: eA, setStep: eN, setPurchaseError: eC, paymentAuthenticationState: eP, step: eR, contextMetadata: ew, purchaseTokenAuthState: eD, activeSubscription: eL, priceOptions: ex, hasPaymentSources: ek, paymentSourceId: eM, paymentSources: ej, purchaseType: eU, defaultPlanId: eG, premiumRebrandBackgroundClassName: eB } = (0, x.JL)(),
        eF = (0, j.Z)(),
        eV = c.CgR.SMALL;
    e_ || (null == eF ? void 0 : eF.isLargeModal) ? (eV = c.CgR.LARGE) : (eR === k.h8.ADD_PAYMENT_STEPS || ep || (null == eF ? void 0 : eF.isDynamicModal)) && (eV = c.CgR.DYNAMIC);
    let { isGift: eZ, giftRecipient: eH, customGiftMessage: eY, emojiConfetti: eW, soundEffect: eK } = (0, L.wD)(),
        ez = (0, I.Z)({ location: 'Payment Modal' }),
        eq = (0, S.Ng)(),
        eQ = null != U && !eZ && (0, S.Wp)(eq, U),
        [eX, eJ] = i.useState(
            q(
                {
                    load_id: ew.loadId,
                    payment_type: H.Zuq[eU],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eS ? void 0 : eS.id,
                    is_gift: eZ,
                    eligible_for_trial: null != V,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: ee.CURRENT_VERSION,
                    activity_session_id: eb,
                    eligible_for_discount: eQ
                },
                t
            )
        ),
        e$ = (0, B.m)(ej, eM);
    i.useEffect(() => {
        eJ((e) => {
            let n = null != eS ? (0, D.aS)(eS.id, !1, eZ, ex) : void 0;
            return q(
                X(q({}, e), {
                    subscription_plan_id: null == eS ? void 0 : eS.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eS ? void 0 : eS.price,
                    currency: ex.currency,
                    sku_id: ev
                }),
                t
            );
        });
    }, [eS, ev, eZ, ex, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(q({}, eX), {
                    continue_session_initial_step: eE,
                    has_saved_payment_source: ek
                })
            );
        }),
        i.useEffect(() => {
            if ((null != eG && null != eE ? eT(eG) : eT(P), null != eu)) eI(eu);
            else if (null != P) {
                var e;
                eI(null == (e = C.Z.get(P)) ? void 0 : e.skuId);
            }
        }, [eT, eI, P, eu, eG, eE]);
    let e0 = i.useCallback(() => {
            let e = (0, w.MY)(eH) === w.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            R.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(q({}, eX), {
                    is_custom_message_edited: eZ && e && null != eY ? eY !== W.intl.string(W.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eZ && e,
                    emoji_name: eZ && e && (null == eW ? void 0 : eW.id) == null ? (null == eW ? void 0 : eW.surrogates) : void 0,
                    sound_id: eZ && e ? (null == eK ? void 0 : eK.soundId) : void 0,
                    duration_ms: t - ew.startTime,
                    payment_source_type: null == e$ ? void 0 : e$.type
                })
            );
            let { enabled: n } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eZ && null != eH && null != a && n && (0, v.n)(a) && (0, O.Ni)(eH.id);
        }, [eX, eW, eY, eH, eZ, eK, ew.startTime, e$, a]),
        e1 = i.useMemo(() => () => (null == G ? void 0 : G(ey === M.A.COMPLETED, ev)), [G, ey, ev]),
        e2 = (0, s.Z)(() => Date.now(), [eR]),
        e3 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === k.h8.CONFIRM && (e0(), null == m || m(i), eg)) return void e1();
                eN(e), null == ed || ed(e), eC(null), eA(null), e === k.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eR;
                if (null === s || a)
                    return void R.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        X(q({}, eX), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eE,
                            has_saved_payment_source: ek
                        })
                    );
                R.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    X(q({}, eX, r), {
                        from_step: s,
                        to_step: e === k.h8.ADD_PAYMENT_STEPS ? k.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e2,
                        flow_duration_ms: o - ew.startTime
                    })
                );
            },
            [eN, ed, eC, eA, eR, eE, eX, e2, ew.startTime, e0, m, eg, e1, ek]
        );
    (0, T.bp)(eR, eP, e3, eO), (0, k.dZ)(eR, ey, eO), (0, A.p)(eR, eD, e3), (0, E.Z)(e1), (0, N.w)(eL, () => G(!1), eZ), (0, T.D6)(eP);
    let e4 = {
            initialPlanId: P,
            subscriptionTier: U,
            handleStepChange: e3,
            handleClose: e1,
            analyticsData: eX,
            setAnalyticsData: eJ,
            trialId: V,
            trialFooterMessageOverride: z,
            reviewWarningMessage: Q,
            planGroup: $,
            openInvoiceId: et,
            analyticsLocation: a,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: ea,
            referralTrialOfferId: ec,
            skipConfirm: eg,
            continueSessionToInitialStep: eE
        },
        e5 = (0, F.U)({
            renderHeader: eo,
            referralTrialOfferId: ec,
            handleClose: e1
        });
    return (0, r.jsx)(c.UkV, {
        className: o()(K.shaker, { [K.halloweenModalHeight]: ez }),
        isShaking: ef && ey === M.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            className: o()(K.root, eB, {
                [K.withHeader]: null != e5,
                [K.halloweenModalHeight]: ez
            }),
            transitionState: y,
            hideShadow: eh,
            returnRef: em,
            size: eV,
            children: (0, r.jsx)(
                Z.ZP,
                q(
                    {
                        header: e5,
                        isLargeModal: e_ || (null == eF ? void 0 : eF.isLargeModal),
                        isDynamicModal: ep || (null == eF ? void 0 : eF.isDynamicModal)
                    },
                    e4
                )
            )
        })
    });
}
function et(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: o, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: b, defaultPlanId: O, startedPaymentFlowWithPaymentSourcesRef: v, repeatPurchase: I } = (0, x.JL)(),
        { isGift: S } = (0, L.wD)(),
        T = v.current,
        A = (0, G.Z)({
            isGift: S,
            skuId: E,
            referralTrialOfferId: o
        }),
        { redirectToPlanSelectStep: N } = y.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [C, R] = i.useState(!0),
        w = (0, l.e7)([P.Z], () => P.Z.applicationIdsFetched.has(Y.CL));
    return (i.useEffect(() => {
        R(!_ || !h || g);
    }, [g, h, _]),
    (0, p.Z)(
        'Payment Modal',
        C,
        5,
        {
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g
        },
        { tags: { app_context: $ } }
    ),
    i.useEffect(() => {
        if ((w || (0, d.yD)(Y.CL), C || f)) return;
        let e = (0, U.Kp)({
            isTrial: A,
            isGift: S,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: T
        });
        null != c
            ? a(k.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? a(I && N ? k.h8.PLAN_SELECT : k.h8.REVIEW)
              : e
                ? (b((0, U.nA)(E, u, O)), a(k.h8.REVIEW))
                : null != t
                  ? a(k.h8.PLAN_SELECT)
                  : a(k.h8.SKU_SELECT);
    }, [c, u, f, w, n, C, a, t, E, b, A, O, S, T, I, N]),
    C)
        ? (0, r.jsx)(V.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
ee.CURRENT_VERSION = 'v1';
