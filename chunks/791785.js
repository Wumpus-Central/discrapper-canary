n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return G;
        },
        PaymentPredicateStep: function () {
            return K;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(252759),
    u = n(399606),
    s = n(481060),
    c = n(570140),
    d = n(496929),
    f = n(366939),
    C = n(16084),
    _ = n(975608),
    m = n(89057),
    L = n(232127),
    S = n(382577),
    p = n(522558),
    T = n(522489),
    E = n(439017),
    N = n(795448),
    h = n(317271),
    g = n(857039),
    A = n(104494),
    v = n(176919),
    R = n(711007),
    P = n(459965),
    x = n(509545),
    I = n(580130),
    M = n(626135),
    b = n(669079),
    y = n(74538),
    O = n(987209),
    D = n(563132),
    Z = n(409813),
    w = n(45572),
    k = n(784707),
    F = n(614223),
    j = n(48175),
    U = n(928886),
    H = n(456251),
    B = n(614277),
    Y = n(981631),
    V = n(474936),
    W = n(388032),
    z = n(293803);
function G(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: u, analyticsSubscriptionType: d = Y.NYc.PREMIUM, onComplete: _, transitionState: m, initialPlanId: T, subscriptionTier: E, onClose: I, trialId: F, trialFooterMessageOverride: j, reviewWarningMessage: H, planGroup: G = V.Y1, openInvoiceId: K, onSubscriptionConfirmation: $, renderPurchaseConfirmation: Q, postSuccessGuild: q, followupSKUInfo: J, renderHeader: X, applicationId: ee, guildId: et, referralTrialOfferId: en, skuId: ei, onStepChange: el, shakeWhilePurchasing: ea = !1, isLargeModal: er = !1, hideShadow: eo = !1, returnRef: eu, skipConfirm: es = !1, continueSessionToInitialStep: ec } = e,
        { activitySessionId: ed, purchaseState: ef, setPurchaseState: eC, selectedSkuId: e_, setSelectedSkuId: em, selectedPlan: eL, setSelectedPlanId: eS, setSelectedPlanNotification: ep, setStep: eT, setPurchaseError: eE, paymentAuthenticationState: eN, step: eh, contextMetadata: eg, purchaseTokenAuthState: eA, activeSubscription: ev, priceOptions: eR, hasPaymentSources: eP, paymentSourceId: ex, paymentSources: eI, purchaseType: eM, defaultPlanId: eb } = (0, D.usePaymentContext)(),
        ey = (0, k.Z)(),
        eO = s.ModalSize.SMALL;
    er || (null == ey ? void 0 : ey.isLargeModal) ? (eO = s.ModalSize.LARGE) : (null == ey ? void 0 : ey.isDynamicModal) && (eO = s.ModalSize.DYNAMIC);
    let { isGift: eD, giftRecipient: eZ, customGiftMessage: ew, emojiConfetti: ek, soundEffect: eF } = (0, O.wD)(),
        ej = (0, g.Z)({ location: 'Payment Modal' }),
        eU = (0, A.Ng)(),
        eH = null != E && !eD && (0, A.Wp)(eU, E),
        [eB, eY] = l.useState({
            load_id: eg.loadId,
            payment_type: Y.Zuq[eM],
            location: null != n ? n : a,
            source: u,
            subscription_type: d,
            subscription_plan_id: null == eL ? void 0 : eL.id,
            is_gift: eD,
            eligible_for_trial: null != F,
            location_stack: t,
            sku_id: ei,
            application_id: ee,
            guild_id: et,
            payment_modal_version: 'v1',
            activity_session_id: ed,
            eligible_for_discount: eH
        }),
        eV = null != ex ? eI[ex] : null;
    l.useEffect(() => {
        eY((e) => {
            let t = null != eL ? (0, y.aS)(eL.id, !1, eD, eR) : void 0;
            return {
                ...e,
                subscription_plan_id: null == eL ? void 0 : eL.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == eL ? void 0 : eL.price,
                currency: eR.currency,
                sku_id: e_
            };
        });
    }, [eL, e_, eD, eR]),
        l.useEffect(() => {
            (0, L.U)({
                ...eB,
                continue_session_initial_step: ec,
                has_saved_payment_source: eP
            });
        }, []),
        l.useEffect(() => {
            if ((null != eb && null != ec ? eS(eb) : eS(T), null != ei)) em(ei);
            else if (null != T) {
                var e;
                em(null === (e = x.Z.get(T)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [eS, em, T, ei, eb, ec]);
    let eW = l.useCallback(() => {
            let e = (0, b.MY)(eZ) === b.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            M.default.track(Y.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eB,
                is_custom_message_edited: eD && e && null != ew ? ew !== W.intl.string(W.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eD && e,
                emoji_name: eD && e && (null == ek ? void 0 : ek.id) == null ? (null == ek ? void 0 : ek.surrogates) : void 0,
                sound_id: eD && e ? (null == eF ? void 0 : eF.soundId) : void 0,
                duration_ms: t - eg.startTime,
                payment_source_type: null == eV ? void 0 : eV.type
            });
            let { enabled: i } = p.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eD && null != eZ && null != n && i && (0, h.n)(n) && (0, N.Ni)(eZ.id);
        }, [eB, ek, ew, eZ, eD, eF, eg.startTime, eV, n]),
        ez = l.useMemo(() => () => (null == I ? void 0 : I(ef === w.A.COMPLETED, e_)), [I, ef, e_]),
        eG = (0, o.Z)(() => Date.now(), [eh]),
        eK = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    r = Date.now();
                if (e === Z.h8.CONFIRM && (eW(), null == _ || _(l), es)) {
                    ez();
                    return;
                }
                eT(e), null == el || el(e), eE(null), ep(null), e === Z.h8.ADD_PAYMENT_STEPS && (c.Z.wait(f.fw), c.Z.wait(C.pB));
                let o = null != n ? n : eh;
                if (null === o || a) {
                    M.default.track(Y.rMx.PAYMENT_FLOW_LOADED, {
                        ...eB,
                        initial_step: null != o ? o : e,
                        continue_session_initial_step: ec,
                        has_saved_payment_source: eP
                    });
                    return;
                }
                M.default.track(Y.rMx.PAYMENT_FLOW_STEP, {
                    ...eB,
                    ...i,
                    from_step: o,
                    to_step: e === Z.h8.ADD_PAYMENT_STEPS ? Z.h8.PAYMENT_TYPE : e,
                    step_duration_ms: r - eG,
                    flow_duration_ms: r - eg.startTime
                });
            },
            [eT, el, eE, ep, eh, ec, eB, eG, eg.startTime, eW, _, es, ez, eP]
        );
    (0, v.bp)(eh, eN, eK, eC), (0, Z.dZ)(eh, ef, eC), (0, R.p)(eh, eA, eK), (0, S.Z)(ez), (0, P.w)(ev, () => I(!1), eD), (0, v.D6)(eN);
    let e$ = (0, U.U)({
        renderHeader: X,
        referralTrialOfferId: en,
        handleClose: ez
    });
    return (0, i.jsx)(s.Shaker, {
        className: r()(z.shaker, { [z.halloweenModalHeight]: ej }),
        isShaking: ea && ef === w.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(s.ModalRoot, {
            className: r()(z.root, {
                [z.withHeader]: null != e$,
                [z.halloweenModalHeight]: ej
            }),
            transitionState: m,
            hideShadow: eo,
            returnRef: eu,
            size: eO,
            children: (0, i.jsx)(B.ZP, {
                header: e$,
                isLargeModal: er || (null == ey ? void 0 : ey.isLargeModal),
                isDynamicModal: null == ey ? void 0 : ey.isDynamicModal,
                initialPlanId: T,
                subscriptionTier: E,
                handleStepChange: eK,
                handleClose: ez,
                analyticsData: eB,
                setAnalyticsData: eY,
                trialId: F,
                trialFooterMessageOverride: j,
                reviewWarningMessage: H,
                planGroup: G,
                openInvoiceId: K,
                analyticsLocation: n,
                onSubscriptionConfirmation: $,
                renderPurchaseConfirmation: Q,
                postSuccessGuild: q,
                followupSKUInfo: J,
                referralTrialOfferId: en,
                skipConfirm: es,
                continueSessionToInitialStep: ec
            })
        })
    });
}
function K(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: o, continueSessionToInitialStep: s } = e,
        { activeSubscription: c, blockedPayments: f, hasFetchedSubscriptions: C, hasFetchedSubscriptionPlans: L, currencyLoading: S, selectedSkuId: p, setSelectedPlanId: N, defaultPlanId: h, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, D.usePaymentContext)(),
        { isGift: v } = (0, O.wD)(),
        R = g.current,
        P = (0, j.Z)({
            isGift: v,
            skuId: p,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: x } = E.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: M } = T.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [b, y] = l.useState(!0),
        w = (0, u.e7)([I.Z], () => I.Z.applicationIdsFetched.has(V.CL));
    return (l.useEffect(() => {
        y(!C || !L || S);
    }, [S, L, C]),
    (0, _.Z)(
        'Payment Modal',
        b,
        5,
        {
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: L,
            currencyLoading: S
        },
        { tags: { app_context: 'billing' } }
    ),
    l.useEffect(() => {
        if ((!w && (0, d.yD)(V.CL), b || f)) return;
        let e = (0, F.Kp)({
            isTrial: P,
            isGift: v,
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSources: R
        });
        null != s
            ? a(Z.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: s
              })
            : null != n
              ? a(A && M ? Z.h8.PLAN_SELECT : Z.h8.REVIEW)
              : e
                ? (N((0, F.nA)(p, c, h)), a(Z.h8.REVIEW))
                : null != t
                  ? a(Z.h8.PLAN_SELECT)
                  : a(Z.h8.SKU_SELECT);
    }, [s, c, f, w, n, b, a, t, p, N, x, P, h, v, R, A, M]),
    b)
        ? (0, i.jsx)(H.Z, {})
        : f
          ? (0, i.jsx)(m.Vq, { onClose: o })
          : null;
}
