n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return K;
        },
        PaymentPredicateStep: function () {
            return $;
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
    m = n(493773),
    L = n(89057),
    S = n(232127),
    p = n(382577),
    T = n(522558),
    E = n(522489),
    N = n(439017),
    h = n(795448),
    g = n(317271),
    A = n(857039),
    v = n(104494),
    R = n(176919),
    P = n(711007),
    x = n(459965),
    I = n(509545),
    M = n(580130),
    b = n(626135),
    y = n(669079),
    O = n(74538),
    Z = n(987209),
    D = n(563132),
    w = n(409813),
    k = n(45572),
    F = n(784707),
    j = n(614223),
    U = n(48175),
    H = n(928886),
    B = n(456251),
    Y = n(614277),
    V = n(981631),
    W = n(474936),
    z = n(388032),
    G = n(293803);
function K(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: u, analyticsSubscriptionType: d = V.NYc.PREMIUM, onComplete: _, transitionState: L, initialPlanId: E, subscriptionTier: N, onClose: M, trialId: j, trialFooterMessageOverride: U, reviewWarningMessage: B, planGroup: K = W.Y1, openInvoiceId: $, onSubscriptionConfirmation: Q, renderPurchaseConfirmation: q, postSuccessGuild: J, followupSKUInfo: X, renderHeader: ee, applicationId: et, guildId: en, referralTrialOfferId: ei, skuId: el, onStepChange: ea, shakeWhilePurchasing: er = !1, isLargeModal: eo = !1, hideShadow: eu = !1, returnRef: es, skipConfirm: ec = !1, continueSessionToInitialStep: ed } = e,
        { activitySessionId: ef, purchaseState: eC, setPurchaseState: e_, selectedSkuId: em, setSelectedSkuId: eL, selectedPlan: eS, setSelectedPlanId: ep, setSelectedPlanNotification: eT, setStep: eE, setPurchaseError: eN, paymentAuthenticationState: eh, step: eg, contextMetadata: eA, purchaseTokenAuthState: ev, activeSubscription: eR, priceOptions: eP, hasPaymentSources: ex, paymentSourceId: eI, paymentSources: eM, purchaseType: eb, defaultPlanId: ey } = (0, D.usePaymentContext)(),
        eO = (0, F.Z)(),
        eZ = s.ModalSize.SMALL;
    eo || (null == eO ? void 0 : eO.isLargeModal) ? (eZ = s.ModalSize.LARGE) : (null == eO ? void 0 : eO.isDynamicModal) && (eZ = s.ModalSize.DYNAMIC);
    let { isGift: eD, giftRecipient: ew, customGiftMessage: ek, emojiConfetti: eF, soundEffect: ej } = (0, Z.wD)(),
        eU = (0, A.Z)({ location: 'Payment Modal' }),
        eH = (0, v.Ng)(),
        eB = null != N && !eD && (0, v.Wp)(eH, N),
        [eY, eV] = l.useState({
            load_id: eA.loadId,
            payment_type: V.Zuq[eb],
            location: null != n ? n : a,
            source: u,
            subscription_type: d,
            subscription_plan_id: null == eS ? void 0 : eS.id,
            is_gift: eD,
            eligible_for_trial: null != j,
            location_stack: t,
            sku_id: el,
            application_id: et,
            guild_id: en,
            payment_modal_version: 'v1',
            activity_session_id: ef,
            eligible_for_discount: eB
        }),
        eW = null != eI ? eM[eI] : null;
    l.useEffect(() => {
        eV((e) => {
            let t = null != eS ? (0, O.aS)(eS.id, !1, eD, eP) : void 0;
            return {
                ...e,
                subscription_plan_id: null == eS ? void 0 : eS.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == eS ? void 0 : eS.price,
                currency: eP.currency,
                sku_id: em
            };
        });
    }, [eS, em, eD, eP]),
        (0, m.Z)(() => {
            (0, S.U)({
                ...eY,
                continue_session_initial_step: ed,
                has_saved_payment_source: ex
            });
        }),
        l.useEffect(() => {
            if ((null != ey && null != ed ? ep(ey) : ep(E), null != el)) eL(el);
            else if (null != E) {
                var e;
                eL(null === (e = I.Z.get(E)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ep, eL, E, el, ey, ed]);
    let ez = l.useCallback(() => {
            let e = (0, y.MY)(ew) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            b.default.track(V.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eY,
                is_custom_message_edited: eD && e && null != ek ? ek !== z.intl.string(z.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eD && e,
                emoji_name: eD && e && (null == eF ? void 0 : eF.id) == null ? (null == eF ? void 0 : eF.surrogates) : void 0,
                sound_id: eD && e ? (null == ej ? void 0 : ej.soundId) : void 0,
                duration_ms: t - eA.startTime,
                payment_source_type: null == eW ? void 0 : eW.type
            });
            let { enabled: i } = T.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eD && null != ew && null != n && i && (0, g.n)(n) && (0, h.Ni)(ew.id);
        }, [eY, eF, ek, ew, eD, ej, eA.startTime, eW, n]),
        eG = l.useMemo(() => () => (null == M ? void 0 : M(eC === k.A.COMPLETED, em)), [M, eC, em]),
        eK = (0, o.Z)(() => Date.now(), [eg]),
        e$ = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: a } = t,
                    r = Date.now();
                if (e === w.h8.CONFIRM && (ez(), null == _ || _(l), ec)) {
                    eG();
                    return;
                }
                eE(e), null == ea || ea(e), eN(null), eT(null), e === w.h8.ADD_PAYMENT_STEPS && (c.Z.wait(f.fw), c.Z.wait(C.pB));
                let o = null != n ? n : eg;
                if (null === o || a) {
                    b.default.track(V.rMx.PAYMENT_FLOW_LOADED, {
                        ...eY,
                        initial_step: null != o ? o : e,
                        continue_session_initial_step: ed,
                        has_saved_payment_source: ex
                    });
                    return;
                }
                b.default.track(V.rMx.PAYMENT_FLOW_STEP, {
                    ...eY,
                    ...i,
                    from_step: o,
                    to_step: e === w.h8.ADD_PAYMENT_STEPS ? w.h8.PAYMENT_TYPE : e,
                    step_duration_ms: r - eK,
                    flow_duration_ms: r - eA.startTime
                });
            },
            [eE, ea, eN, eT, eg, ed, eY, eK, eA.startTime, ez, _, ec, eG, ex]
        );
    (0, R.bp)(eg, eh, e$, e_), (0, w.dZ)(eg, eC, e_), (0, P.p)(eg, ev, e$), (0, p.Z)(eG), (0, x.w)(eR, () => M(!1), eD), (0, R.D6)(eh);
    let eQ = (0, H.U)({
        renderHeader: ee,
        referralTrialOfferId: ei,
        handleClose: eG
    });
    return (0, i.jsx)(s.Shaker, {
        className: r()(G.shaker, { [G.halloweenModalHeight]: eU }),
        isShaking: er && eC === k.A.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(s.ModalRoot, {
            className: r()(G.root, {
                [G.withHeader]: null != eQ,
                [G.halloweenModalHeight]: eU
            }),
            transitionState: L,
            hideShadow: eu,
            returnRef: es,
            size: eZ,
            children: (0, i.jsx)(Y.ZP, {
                header: eQ,
                isLargeModal: eo || (null == eO ? void 0 : eO.isLargeModal),
                isDynamicModal: null == eO ? void 0 : eO.isDynamicModal,
                initialPlanId: E,
                subscriptionTier: N,
                handleStepChange: e$,
                handleClose: eG,
                analyticsData: eY,
                setAnalyticsData: eV,
                trialId: j,
                trialFooterMessageOverride: U,
                reviewWarningMessage: B,
                planGroup: K,
                openInvoiceId: $,
                analyticsLocation: n,
                onSubscriptionConfirmation: Q,
                renderPurchaseConfirmation: q,
                postSuccessGuild: J,
                followupSKUInfo: X,
                referralTrialOfferId: ei,
                skipConfirm: ec,
                continueSessionToInitialStep: ed
            })
        })
    });
}
function $(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: r, handleClose: o, continueSessionToInitialStep: s } = e,
        { activeSubscription: c, blockedPayments: f, hasFetchedSubscriptions: C, hasFetchedSubscriptionPlans: m, currencyLoading: S, selectedSkuId: p, setSelectedPlanId: T, defaultPlanId: h, startedPaymentFlowWithPaymentSourcesRef: g, repeatPurchase: A } = (0, D.usePaymentContext)(),
        { isGift: v } = (0, Z.wD)(),
        R = g.current,
        P = (0, U.Z)({
            isGift: v,
            skuId: p,
            referralTrialOfferId: r
        }),
        { defaultToMonthlyPlan: x } = N.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: I } = E.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [b, y] = l.useState(!0),
        O = (0, u.e7)([M.Z], () => M.Z.applicationIdsFetched.has(W.CL));
    return (l.useEffect(() => {
        y(!C || !m || S);
    }, [S, m, C]),
    (0, _.Z)(
        'Payment Modal',
        b,
        5,
        {
            hasFetchedSubscriptions: C,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: S
        },
        { tags: { app_context: 'billing' } }
    ),
    l.useEffect(() => {
        if ((!O && (0, d.yD)(W.CL), b || f)) return;
        let e = (0, j.Kp)({
            isTrial: P,
            isGift: v,
            selectedSkuId: p,
            startedPaymentFlowWithPaymentSources: R
        });
        null != s
            ? a(w.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: s
              })
            : null != n
              ? a(A && I ? w.h8.PLAN_SELECT : w.h8.REVIEW)
              : e
                ? (T((0, j.nA)(p, c, h)), a(w.h8.REVIEW))
                : null != t
                  ? a(w.h8.PLAN_SELECT)
                  : a(w.h8.SKU_SELECT);
    }, [s, c, f, O, n, b, a, t, p, T, x, P, h, v, R, A, I]),
    b)
        ? (0, i.jsx)(B.Z, {})
        : f
          ? (0, i.jsx)(L.Vq, { onClose: o })
          : null;
}
