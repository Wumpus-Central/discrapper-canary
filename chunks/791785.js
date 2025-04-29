n.d(t, {
    I: () => et,
    PaymentModal: () => ee
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    R = n(580130),
    P = n(626135),
    w = n(669079),
    D = n(74538),
    L = n(987209),
    x = n(563132),
    M = n(409813),
    k = n(45572),
    j = n(784707),
    U = n(614223),
    G = n(48175),
    B = n(435020),
    V = n(928886),
    F = n(456251),
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
    let { analyticsDataOverride: t, analyticsLocations: n, analyticsLocation: o, analyticsObject: l, analyticsSourceLocation: d, analyticsSubscriptionType: p = H.NYc.PREMIUM, onComplete: m, transitionState: y, initialPlanId: R, subscriptionTier: U, onClose: G, trialId: F, trialFooterMessageOverride: z, reviewWarningMessage: Q, planGroup: $ = Y.Y1, openInvoiceId: et, onSubscriptionConfirmation: en, renderPurchaseConfirmation: er, postSuccessGuild: ei, followupSKUInfo: eo, renderHeader: ea, applicationId: es, guildId: el, referralTrialOfferId: ec, skuId: eu, onStepChange: ed, shakeWhilePurchasing: ef = !1, isLargeModal: e_ = !1, isDynamicModal: ep = !1, hideShadow: eh = !1, returnRef: em, skipConfirm: eg = !1, continueSessionToInitialStep: eE } = e,
        { activitySessionId: eb, purchaseState: ey, setPurchaseState: eO, selectedSkuId: ev, setSelectedSkuId: eI, selectedPlan: eS, setSelectedPlanId: eT, setSelectedPlanNotification: eA, setStep: eN, setPurchaseError: eC, paymentAuthenticationState: eR, step: eP, contextMetadata: ew, purchaseTokenAuthState: eD, activeSubscription: eL, priceOptions: ex, hasPaymentSources: eM, paymentSourceId: ek, paymentSources: ej, purchaseType: eU, defaultPlanId: eG } = (0, x.JL)(),
        eB = (0, j.Z)(),
        eV = c.CgR.SMALL;
    e_ || (null == eB ? void 0 : eB.isLargeModal) ? (eV = c.CgR.LARGE) : (eP === M.h8.ADD_PAYMENT_STEPS || ep || (null == eB ? void 0 : eB.isDynamicModal)) && (eV = c.CgR.DYNAMIC);
    let { isGift: eF, giftRecipient: eZ, customGiftMessage: eH, emojiConfetti: eY, soundEffect: eW } = (0, L.wD)(),
        eK = (0, I.Z)({ location: 'Payment Modal' }),
        ez = (0, S.Ng)(),
        eq = null != U && !eF && (0, S.Wp)(ez, U),
        [eQ, eX] = i.useState(
            q(
                {
                    load_id: ew.loadId,
                    payment_type: H.Zuq[eU],
                    location: null != o ? o : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eS ? void 0 : eS.id,
                    is_gift: eF,
                    eligible_for_trial: null != F,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: ee.CURRENT_VERSION,
                    activity_session_id: eb,
                    eligible_for_discount: eq
                },
                t
            )
        ),
        eJ = (0, B.m)(ej, ek);
    i.useEffect(() => {
        eX((e) => {
            let n = null != eS ? (0, D.aS)(eS.id, !1, eF, ex) : void 0;
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
    }, [eS, ev, eF, ex, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(q({}, eQ), {
                    continue_session_initial_step: eE,
                    has_saved_payment_source: eM
                })
            );
        }),
        i.useEffect(() => {
            if ((null != eG && null != eE ? eT(eG) : eT(R), null != eu)) eI(eu);
            else if (null != R) {
                var e;
                eI(null == (e = C.Z.get(R)) ? void 0 : e.skuId);
            }
        }, [eT, eI, R, eu, eG, eE]);
    let e$ = i.useCallback(() => {
            let e = (0, w.MY)(eZ) === w.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(q({}, eQ), {
                    is_custom_message_edited: eF && e && null != eH ? eH !== W.intl.string(W.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eF && e,
                    emoji_name: eF && e && (null == eY ? void 0 : eY.id) == null ? (null == eY ? void 0 : eY.surrogates) : void 0,
                    sound_id: eF && e ? (null == eW ? void 0 : eW.soundId) : void 0,
                    duration_ms: t - ew.startTime,
                    payment_source_type: null == eJ ? void 0 : eJ.type
                })
            );
            let { enabled: n } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eF && null != eZ && null != o && n && (0, v.n)(o) && (0, O.Ni)(eZ.id);
        }, [eQ, eY, eH, eZ, eF, eW, ew.startTime, eJ, o]),
        e0 = i.useMemo(() => () => (null == G ? void 0 : G(ey === k.A.COMPLETED, ev)), [G, ey, ev]),
        e1 = (0, s.Z)(() => Date.now(), [eP]),
        e2 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: o } = t,
                    a = Date.now();
                if (e === M.h8.CONFIRM && (e$(), null == m || m(i), eg)) return void e0();
                eN(e), null == ed || ed(e), eC(null), eA(null), e === M.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eP;
                if (null === s || o)
                    return void P.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        X(q({}, eQ), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eE,
                            has_saved_payment_source: eM
                        })
                    );
                P.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    X(q({}, eQ, r), {
                        from_step: s,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: a - e1,
                        flow_duration_ms: a - ew.startTime
                    })
                );
            },
            [eN, ed, eC, eA, eP, eE, eQ, e1, ew.startTime, e$, m, eg, e0, eM]
        );
    (0, T.bp)(eP, eR, e2, eO), (0, M.dZ)(eP, ey, eO), (0, A.p)(eP, eD, e2), (0, E.Z)(e0), (0, N.w)(eL, () => G(!1), eF), (0, T.D6)(eR);
    let e3 = {
            initialPlanId: R,
            subscriptionTier: U,
            handleStepChange: e2,
            handleClose: e0,
            analyticsData: eQ,
            setAnalyticsData: eX,
            trialId: F,
            trialFooterMessageOverride: z,
            reviewWarningMessage: Q,
            planGroup: $,
            openInvoiceId: et,
            analyticsLocation: o,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: eo,
            referralTrialOfferId: ec,
            skipConfirm: eg,
            continueSessionToInitialStep: eE
        },
        e4 = (0, V.U)({
            renderHeader: ea,
            referralTrialOfferId: ec,
            handleClose: e0
        });
    return (0, r.jsx)(c.UkV, {
        className: a()(K.shaker, { [K.halloweenModalHeight]: eK }),
        isShaking: ef && ey === k.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            className: a()(K.root, {
                [K.withHeader]: null != e4,
                [K.halloweenModalHeight]: eK
            }),
            transitionState: y,
            hideShadow: eh,
            returnRef: em,
            size: eV,
            children: (0, r.jsx)(
                Z.ZP,
                q(
                    {
                        header: e4,
                        isLargeModal: e_ || (null == eB ? void 0 : eB.isLargeModal),
                        isDynamicModal: ep || (null == eB ? void 0 : eB.isDynamicModal)
                    },
                    e3
                )
            )
        })
    });
}
function et(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: o, referralTrialOfferId: a, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: b, defaultPlanId: O, startedPaymentFlowWithPaymentSourcesRef: v, repeatPurchase: I } = (0, x.JL)(),
        { isGift: S } = (0, L.wD)(),
        T = v.current,
        A = (0, G.Z)({
            isGift: S,
            skuId: E,
            referralTrialOfferId: a
        }),
        { redirectToPlanSelectStep: N } = y.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [C, P] = i.useState(!0),
        w = (0, l.e7)([R.Z], () => R.Z.applicationIdsFetched.has(Y.CL));
    return (i.useEffect(() => {
        P(!_ || !h || g);
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
            ? o(M.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? o(I && N ? M.h8.PLAN_SELECT : M.h8.REVIEW)
              : e
                ? (b((0, U.nA)(E, u, O)), o(M.h8.REVIEW))
                : null != t
                  ? o(M.h8.PLAN_SELECT)
                  : o(M.h8.SKU_SELECT);
    }, [c, u, f, w, n, C, o, t, E, b, A, O, S, T, I, N]),
    C)
        ? (0, r.jsx)(F.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
ee.CURRENT_VERSION = 'v1';
