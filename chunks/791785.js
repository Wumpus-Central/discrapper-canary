n.d(t, {
    I: () => et,
    PaymentModal: () => ee
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(252759),
    l = n(399606),
    c = n(481060),
    u = n(570140),
    d = n(496929),
    f = n(366939),
    p = n(16084),
    _ = n(975608),
    h = n(493773),
    m = n(89057),
    g = n(232127),
    E = n(382577),
    v = n(522558),
    b = n(522489),
    y = n(439017),
    O = n(795448),
    S = n(317271),
    I = n(857039),
    T = n(104494),
    N = n(176919),
    A = n(711007),
    C = n(459965),
    R = n(509545),
    P = n(580130),
    w = n(626135),
    D = n(669079),
    x = n(74538),
    L = n(987209),
    M = n(563132),
    k = n(409813),
    j = n(45572),
    U = n(784707),
    G = n(614223),
    B = n(48175),
    Z = n(928886),
    F = n(456251),
    V = n(614277),
    H = n(981631),
    W = n(474936),
    Y = n(388032),
    K = n(195358);
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
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: o, analyticsSourceLocation: l, analyticsSubscriptionType: d = H.NYc.PREMIUM, onComplete: _, transitionState: m, initialPlanId: b, subscriptionTier: y, onClose: P, trialId: G, trialFooterMessageOverride: B, reviewWarningMessage: F, planGroup: z = W.Y1, openInvoiceId: Q, onSubscriptionConfirmation: $, renderPurchaseConfirmation: ee, postSuccessGuild: et, followupSKUInfo: en, renderHeader: er, applicationId: ei, guildId: eo, referralTrialOfferId: ea, skuId: es, onStepChange: el, shakeWhilePurchasing: ec = !1, isLargeModal: eu = !1, isDynamicModal: ed = !1, hideShadow: ef = !1, returnRef: ep, skipConfirm: e_ = !1, continueSessionToInitialStep: eh } = e,
        { activitySessionId: em, purchaseState: eg, setPurchaseState: eE, selectedSkuId: ev, setSelectedSkuId: eb, selectedPlan: ey, setSelectedPlanId: eO, setSelectedPlanNotification: eS, setStep: eI, setPurchaseError: eT, paymentAuthenticationState: eN, step: eA, contextMetadata: eC, purchaseTokenAuthState: eR, activeSubscription: eP, priceOptions: ew, hasPaymentSources: eD, paymentSourceId: ex, paymentSources: eL, purchaseType: eM, defaultPlanId: ek } = (0, M.JL)(),
        ej = (0, U.Z)(),
        eU = c.CgR.SMALL;
    eu || (null == ej ? void 0 : ej.isLargeModal) ? (eU = c.CgR.LARGE) : (eA === k.h8.ADD_PAYMENT_STEPS || ed || (null == ej ? void 0 : ej.isDynamicModal)) && (eU = c.CgR.DYNAMIC);
    let { isGift: eG, giftRecipient: eB, customGiftMessage: eZ, emojiConfetti: eF, soundEffect: eV } = (0, L.wD)(),
        eH = (0, I.Z)({ location: 'Payment Modal' }),
        eW = (0, T.Ng)(),
        eY = null != y && !eG && (0, T.Wp)(eW, y),
        [eK, ez] = i.useState({
            load_id: eC.loadId,
            payment_type: H.Zuq[eM],
            location: null != n ? n : o,
            source: l,
            subscription_type: d,
            subscription_plan_id: null == ey ? void 0 : ey.id,
            is_gift: eG,
            eligible_for_trial: null != G,
            location_stack: t,
            sku_id: es,
            application_id: ei,
            guild_id: eo,
            payment_modal_version: 'v1',
            activity_session_id: em,
            eligible_for_discount: eY
        }),
        eq = null != ex ? eL[ex] : null;
    i.useEffect(() => {
        ez((e) => {
            let t = null != ey ? (0, x.aS)(ey.id, !1, eG, ew) : void 0;
            return X(q({}, e), {
                subscription_plan_id: null == ey ? void 0 : ey.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ey ? void 0 : ey.price,
                currency: ew.currency,
                sku_id: ev
            });
        });
    }, [ey, ev, eG, ew]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(q({}, eK), {
                    continue_session_initial_step: eh,
                    has_saved_payment_source: eD
                })
            );
        }),
        i.useEffect(() => {
            if ((null != ek && null != eh ? eO(ek) : eO(b), null != es)) eb(es);
            else if (null != b) {
                var e;
                eb(null === (e = R.Z.get(b)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [eO, eb, b, es, ek, eh]);
    let eQ = i.useCallback(() => {
            let e = (0, D.MY)(eB) === D.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            w.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(q({}, eK), {
                    is_custom_message_edited: eG && e && null != eZ ? eZ !== Y.NW.string(Y.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eG && e,
                    emoji_name: eG && e && (null == eF ? void 0 : eF.id) == null ? (null == eF ? void 0 : eF.surrogates) : void 0,
                    sound_id: eG && e ? (null == eV ? void 0 : eV.soundId) : void 0,
                    duration_ms: t - eC.startTime,
                    payment_source_type: null == eq ? void 0 : eq.type
                })
            );
            let { enabled: r } = v.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eG && null != eB && null != n && r && (0, S.n)(n) && (0, O.Ni)(eB.id);
        }, [eK, eF, eZ, eB, eG, eV, eC.startTime, eq, n]),
        eX = i.useMemo(() => () => (null == P ? void 0 : P(eg === j.A.COMPLETED, ev)), [P, eg, ev]),
        eJ = (0, s.Z)(() => Date.now(), [eA]),
        e$ = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: o } = t,
                    a = Date.now();
                if (e === k.h8.CONFIRM && (eQ(), null == _ || _(i), e_)) {
                    eX();
                    return;
                }
                eI(e), null == el || el(e), eT(null), eS(null), e === k.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(p.pB));
                let s = null != n ? n : eA;
                if (null === s || o) {
                    w.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        X(q({}, eK), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eh,
                            has_saved_payment_source: eD
                        })
                    );
                    return;
                }
                w.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    X(q({}, eK, r), {
                        from_step: s,
                        to_step: e === k.h8.ADD_PAYMENT_STEPS ? k.h8.PAYMENT_TYPE : e,
                        step_duration_ms: a - eJ,
                        flow_duration_ms: a - eC.startTime
                    })
                );
            },
            [eI, el, eT, eS, eA, eh, eK, eJ, eC.startTime, eQ, _, e_, eX, eD]
        );
    (0, N.bp)(eA, eN, e$, eE), (0, k.dZ)(eA, eg, eE), (0, A.p)(eA, eR, e$), (0, E.Z)(eX), (0, C.w)(eP, () => P(!1), eG), (0, N.D6)(eN);
    let e0 = {
            initialPlanId: b,
            subscriptionTier: y,
            handleStepChange: e$,
            handleClose: eX,
            analyticsData: eK,
            setAnalyticsData: ez,
            trialId: G,
            trialFooterMessageOverride: B,
            reviewWarningMessage: F,
            planGroup: z,
            openInvoiceId: Q,
            analyticsLocation: n,
            onSubscriptionConfirmation: $,
            renderPurchaseConfirmation: ee,
            postSuccessGuild: et,
            followupSKUInfo: en,
            referralTrialOfferId: ea,
            skipConfirm: e_,
            continueSessionToInitialStep: eh
        },
        e1 = (0, Z.U)({
            renderHeader: er,
            referralTrialOfferId: ea,
            handleClose: eX
        });
    return (0, r.jsx)(c.UkV, {
        className: a()(K.shaker, { [K.halloweenModalHeight]: eH }),
        isShaking: ec && eg === j.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            className: a()(K.root, {
                [K.withHeader]: null != e1,
                [K.halloweenModalHeight]: eH
            }),
            transitionState: m,
            hideShadow: ef,
            returnRef: ep,
            size: eU,
            children: (0, r.jsx)(
                V.ZP,
                q(
                    {
                        header: e1,
                        isLargeModal: eu || (null == ej ? void 0 : ej.isLargeModal),
                        isDynamicModal: ed || (null == ej ? void 0 : ej.isDynamicModal)
                    },
                    e0
                )
            )
        })
    });
}
function et(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: o, referralTrialOfferId: a, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: v, defaultPlanId: O, startedPaymentFlowWithPaymentSourcesRef: S, repeatPurchase: I } = (0, M.JL)(),
        { isGift: T } = (0, L.wD)(),
        N = S.current,
        A = (0, B.Z)({
            isGift: T,
            skuId: E,
            referralTrialOfferId: a
        }),
        { defaultToMonthlyPlan: C } = y.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: R } = b.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [w, D] = i.useState(!0),
        x = (0, l.e7)([P.Z], () => P.Z.applicationIdsFetched.has(W.CL));
    return (i.useEffect(() => {
        D(!p || !h || g);
    }, [g, h, p]),
    (0, _.Z)(
        'Payment Modal',
        w,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g
        },
        { tags: { app_context: $ } }
    ),
    i.useEffect(() => {
        if ((x || (0, d.yD)(W.CL), w || f)) return;
        let e = (0, G.Kp)({
            isTrial: A,
            isGift: T,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: N
        });
        null != c
            ? o(k.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? o(I && R ? k.h8.PLAN_SELECT : k.h8.REVIEW)
              : e
                ? (v((0, G.nA)(E, u, O)), o(k.h8.REVIEW))
                : null != t
                  ? o(k.h8.PLAN_SELECT)
                  : o(k.h8.SKU_SELECT);
    }, [c, u, f, x, n, w, o, t, E, v, C, A, O, T, N, I, R]),
    w)
        ? (0, r.jsx)(F.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
