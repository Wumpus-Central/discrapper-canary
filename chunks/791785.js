r.r(n),
    r.d(n, {
        PaymentModal: function () {
            return J;
        },
        PaymentPredicateStep: function () {
            return $;
        }
    });
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(252759),
    c = r(399606),
    d = r(481060),
    f = r(570140),
    p = r(496929),
    h = r(366939),
    _ = r(16084),
    m = r(975608),
    g = r(493773),
    E = r(89057),
    v = r(232127),
    y = r(382577),
    b = r(522558),
    I = r(522489),
    T = r(439017),
    S = r(795448),
    A = r(317271),
    C = r(857039),
    N = r(104494),
    R = r(176919),
    O = r(711007),
    D = r(459965),
    L = r(509545),
    x = r(580130),
    w = r(626135),
    P = r(669079),
    M = r(74538),
    k = r(987209),
    U = r(563132),
    B = r(409813),
    G = r(45572),
    Z = r(784707),
    F = r(614223),
    V = r(48175),
    j = r(928886),
    H = r(456251),
    Y = r(614277),
    W = r(981631),
    K = r(474936),
    z = r(388032),
    q = r(293803);
let Q = 2,
    X = 'billing';
function J(e) {
    let { analyticsLocations: n, analyticsLocation: r, analyticsObject: i, analyticsSourceLocation: s, analyticsSubscriptionType: c = W.NYc.PREMIUM, onComplete: p, transitionState: m, initialPlanId: E, subscriptionTier: I, onClose: T, trialId: x, trialFooterMessageOverride: F, reviewWarningMessage: V, planGroup: H = K.Y1, openInvoiceId: X, onSubscriptionConfirmation: J, renderPurchaseConfirmation: $, postSuccessGuild: ee, followupSKUInfo: et, renderHeader: en, applicationId: er, guildId: ei, referralTrialOfferId: ea, skuId: eo, onStepChange: es, shakeWhilePurchasing: el = !1, isLargeModal: eu = !1, hideShadow: ec = !1, returnRef: ed, skipConfirm: ef = !1, continueSessionToInitialStep: ep } = e,
        { activitySessionId: eh, purchaseState: e_, setPurchaseState: em, selectedSkuId: eg, setSelectedSkuId: eE, selectedPlan: ev, setSelectedPlanId: ey, setSelectedPlanNotification: eb, setStep: eI, setPurchaseError: eT, paymentAuthenticationState: eS, step: eA, contextMetadata: eC, purchaseTokenAuthState: eN, activeSubscription: eR, priceOptions: eO, hasPaymentSources: eD, paymentSourceId: eL, paymentSources: ex, purchaseType: ew, defaultPlanId: eP } = (0, U.usePaymentContext)(),
        eM = (0, Z.Z)(),
        ek = d.ModalSize.SMALL;
    eu || (null == eM ? void 0 : eM.isLargeModal) ? (ek = d.ModalSize.LARGE) : (null == eM ? void 0 : eM.isDynamicModal) && (ek = d.ModalSize.DYNAMIC);
    let { isGift: eU, giftRecipient: eB, customGiftMessage: eG, emojiConfetti: eZ, soundEffect: eF } = (0, k.wD)(),
        eV = (0, C.Z)({ location: 'Payment Modal' }),
        ej = (0, N.Ng)(),
        eH = null != I && !eU && (0, N.Wp)(ej, I),
        [eY, eW] = o.useState({
            load_id: eC.loadId,
            payment_type: W.Zuq[ew],
            location: null != r ? r : i,
            source: s,
            subscription_type: c,
            subscription_plan_id: null == ev ? void 0 : ev.id,
            is_gift: eU,
            eligible_for_trial: null != x,
            location_stack: n,
            sku_id: eo,
            application_id: er,
            guild_id: ei,
            payment_modal_version: 'v1',
            activity_session_id: eh,
            eligible_for_discount: eH
        }),
        eK = null != eL ? ex[eL] : null;
    o.useEffect(() => {
        eW((e) => {
            let n = null != ev ? (0, M.aS)(ev.id, !1, eU, eO) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ev ? void 0 : ev.id,
                price: null == n ? void 0 : n.amount,
                regular_price: null == ev ? void 0 : ev.price,
                currency: eO.currency,
                sku_id: eg
            };
        });
    }, [ev, eg, eU, eO]),
        (0, g.Z)(() => {
            (0, v.U)({
                ...eY,
                continue_session_initial_step: ep,
                has_saved_payment_source: eD
            });
        }),
        o.useEffect(() => {
            if ((null != eP && null != ep ? ey(eP) : ey(E), null != eo)) eE(eo);
            else if (null != E) {
                var e;
                eE(null === (e = L.Z.get(E)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ey, eE, E, eo, eP, ep]);
    let ez = o.useCallback(() => {
            let e = (0, P.MY)(eB) === P.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                n = Date.now();
            w.default.track(W.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eY,
                is_custom_message_edited: eU && e && null != eG ? eG !== z.intl.string(z.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eU && e,
                emoji_name: eU && e && (null == eZ ? void 0 : eZ.id) == null ? (null == eZ ? void 0 : eZ.surrogates) : void 0,
                sound_id: eU && e ? (null == eF ? void 0 : eF.soundId) : void 0,
                duration_ms: n - eC.startTime,
                payment_source_type: null == eK ? void 0 : eK.type
            });
            let { enabled: i } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eU && null != eB && null != r && i && (0, A.n)(r) && (0, S.Ni)(eB.id);
        }, [eY, eZ, eG, eB, eU, eF, eC.startTime, eK, r]),
        eq = o.useMemo(() => () => (null == T ? void 0 : T(e_ === G.A.COMPLETED, eg)), [T, e_, eg]),
        eQ = (0, u.Z)(() => Date.now(), [eA]),
        eX = o.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: r, analyticsDataOverride: i, fulfillment: a, emitPaymentFlowLoadedEvent: o } = n,
                    s = Date.now();
                if (e === B.h8.CONFIRM && (ez(), null == p || p(a), ef)) {
                    eq();
                    return;
                }
                eI(e), null == es || es(e), eT(null), eb(null), e === B.h8.ADD_PAYMENT_STEPS && (f.Z.wait(h.fw), f.Z.wait(_.pB));
                let l = null != r ? r : eA;
                if (null === l || o) {
                    w.default.track(W.rMx.PAYMENT_FLOW_LOADED, {
                        ...eY,
                        initial_step: null != l ? l : e,
                        continue_session_initial_step: ep,
                        has_saved_payment_source: eD
                    });
                    return;
                }
                w.default.track(W.rMx.PAYMENT_FLOW_STEP, {
                    ...eY,
                    ...i,
                    from_step: l,
                    to_step: e === B.h8.ADD_PAYMENT_STEPS ? B.h8.PAYMENT_TYPE : e,
                    step_duration_ms: s - eQ,
                    flow_duration_ms: s - eC.startTime
                });
            },
            [eI, es, eT, eb, eA, ep, eY, eQ, eC.startTime, ez, p, ef, eq, eD]
        );
    (0, R.bp)(eA, eS, eX, em), (0, B.dZ)(eA, e_, em), (0, O.p)(eA, eN, eX), (0, y.Z)(eq), (0, D.w)(eR, () => T(!1), eU), (0, R.D6)(eS);
    let eJ = {
            initialPlanId: E,
            subscriptionTier: I,
            handleStepChange: eX,
            handleClose: eq,
            analyticsData: eY,
            setAnalyticsData: eW,
            trialId: x,
            trialFooterMessageOverride: F,
            reviewWarningMessage: V,
            planGroup: H,
            openInvoiceId: X,
            analyticsLocation: r,
            onSubscriptionConfirmation: J,
            renderPurchaseConfirmation: $,
            postSuccessGuild: ee,
            followupSKUInfo: et,
            referralTrialOfferId: ea,
            skipConfirm: ef,
            continueSessionToInitialStep: ep
        },
        e$ = (0, j.U)({
            renderHeader: en,
            referralTrialOfferId: ea,
            handleClose: eq
        });
    return (0, a.jsx)(d.Shaker, {
        className: l()(q.shaker, { [q.halloweenModalHeight]: eV }),
        isShaking: el && e_ === G.A.PURCHASING,
        intensity: Q,
        children: (0, a.jsx)(d.ModalRoot, {
            className: l()(q.root, {
                [q.withHeader]: null != e$,
                [q.halloweenModalHeight]: eV
            }),
            transitionState: m,
            hideShadow: ec,
            returnRef: ed,
            size: ek,
            children: (0, a.jsx)(Y.ZP, {
                header: e$,
                isLargeModal: eu || (null == eM ? void 0 : eM.isLargeModal),
                isDynamicModal: null == eM ? void 0 : eM.isDynamicModal,
                ...eJ
            })
        })
    });
}
function $(e) {
    let { subscriptionTier: n, initialPlanId: r, handleStepChange: i, referralTrialOfferId: s, handleClose: l, continueSessionToInitialStep: u } = e,
        { activeSubscription: d, blockedPayments: f, hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: _, currencyLoading: g, selectedSkuId: v, setSelectedPlanId: y, defaultPlanId: b, startedPaymentFlowWithPaymentSourcesRef: S, repeatPurchase: A } = (0, U.usePaymentContext)(),
        { isGift: C } = (0, k.wD)(),
        N = S.current,
        R = (0, V.Z)({
            isGift: C,
            skuId: v,
            referralTrialOfferId: s
        }),
        { defaultToMonthlyPlan: O } = T.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: D } = I.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [L, w] = o.useState(!0),
        P = (0, c.e7)([x.Z], () => x.Z.applicationIdsFetched.has(K.CL));
    return (o.useEffect(() => {
        w(!h || !_ || g);
    }, [g, _, h]),
    (0, m.Z)(
        'Payment Modal',
        L,
        5,
        {
            hasFetchedSubscriptions: h,
            hasFetchedSubscriptionPlans: _,
            currencyLoading: g
        },
        { tags: { app_context: X } }
    ),
    o.useEffect(() => {
        if ((!P && (0, p.yD)(K.CL), L || f)) return;
        let e = (0, F.Kp)({
            isTrial: R,
            isGift: C,
            selectedSkuId: v,
            startedPaymentFlowWithPaymentSources: N
        });
        null != u
            ? i(B.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: u
              })
            : null != r
              ? i(A && D ? B.h8.PLAN_SELECT : B.h8.REVIEW)
              : e
                ? (y((0, F.nA)(v, d, b)), i(B.h8.REVIEW))
                : null != n
                  ? i(B.h8.PLAN_SELECT)
                  : i(B.h8.SKU_SELECT);
    }, [u, d, f, P, r, L, i, n, v, y, O, R, b, C, N, A, D]),
    L)
        ? (0, a.jsx)(H.Z, {})
        : f
          ? (0, a.jsx)(E.Vq, { onClose: l })
          : null;
}
