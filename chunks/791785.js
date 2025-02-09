n.d(t, {
    I: () => X,
    PaymentModal: () => Q
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(252759),
    l = n(399606),
    u = n(481060),
    c = n(570140),
    d = n(496929),
    f = n(366939),
    _ = n(16084),
    p = n(975608),
    h = n(493773),
    m = n(89057),
    g = n(232127),
    E = n(382577),
    v = n(522558),
    y = n(522489),
    I = n(439017),
    T = n(795448),
    b = n(317271),
    S = n(857039),
    A = n(104494),
    N = n(176919),
    C = n(711007),
    R = n(459965),
    O = n(509545),
    D = n(580130),
    L = n(626135),
    x = n(669079),
    w = n(74538),
    P = n(987209),
    M = n(563132),
    k = n(409813),
    U = n(45572),
    G = n(784707),
    B = n(614223),
    Z = n(48175),
    F = n(928886),
    V = n(456251),
    j = n(614277),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(768953);
let z = 2,
    q = 'billing';
function Q(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: a, analyticsSourceLocation: l, analyticsSubscriptionType: d = H.NYc.PREMIUM, onComplete: p, transitionState: m, initialPlanId: y, subscriptionTier: I, onClose: D, trialId: B, trialFooterMessageOverride: Z, reviewWarningMessage: V, planGroup: q = Y.Y1, openInvoiceId: Q, onSubscriptionConfirmation: X, renderPurchaseConfirmation: J, postSuccessGuild: $, followupSKUInfo: ee, renderHeader: et, applicationId: en, guildId: ei, referralTrialOfferId: er, skuId: ea, onStepChange: es, shakeWhilePurchasing: eo = !1, isLargeModal: el = !1, isDynamicModal: eu = !1, hideShadow: ec = !1, returnRef: ed, skipConfirm: ef = !1, continueSessionToInitialStep: e_ } = e,
        { activitySessionId: ep, purchaseState: eh, setPurchaseState: em, selectedSkuId: eg, setSelectedSkuId: eE, selectedPlan: ev, setSelectedPlanId: ey, setSelectedPlanNotification: eI, setStep: eT, setPurchaseError: eb, paymentAuthenticationState: eS, step: eA, contextMetadata: eN, purchaseTokenAuthState: eC, activeSubscription: eR, priceOptions: eO, hasPaymentSources: eD, paymentSourceId: eL, paymentSources: ex, purchaseType: ew, defaultPlanId: eP } = (0, M.JL)(),
        eM = (0, G.Z)(),
        ek = u.CgR.SMALL;
    el || (null == eM ? void 0 : eM.isLargeModal) ? (ek = u.CgR.LARGE) : (eA === k.h8.ADD_PAYMENT_STEPS || eu || (null == eM ? void 0 : eM.isDynamicModal)) && (ek = u.CgR.DYNAMIC);
    let { isGift: eU, giftRecipient: eG, customGiftMessage: eB, emojiConfetti: eZ, soundEffect: eF } = (0, P.wD)(),
        eV = (0, S.Z)({ location: 'Payment Modal' }),
        ej = (0, A.Ng)(),
        eH = null != I && !eU && (0, A.Wp)(ej, I),
        [eY, eW] = r.useState({
            load_id: eN.loadId,
            payment_type: H.Zuq[ew],
            location: null != n ? n : a,
            source: l,
            subscription_type: d,
            subscription_plan_id: null == ev ? void 0 : ev.id,
            is_gift: eU,
            eligible_for_trial: null != B,
            location_stack: t,
            sku_id: ea,
            application_id: en,
            guild_id: ei,
            payment_modal_version: 'v1',
            activity_session_id: ep,
            eligible_for_discount: eH
        }),
        eK = null != eL ? ex[eL] : null;
    r.useEffect(() => {
        eW((e) => {
            let t = null != ev ? (0, w.aS)(ev.id, !1, eU, eO) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ev ? void 0 : ev.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ev ? void 0 : ev.price,
                currency: eO.currency,
                sku_id: eg
            };
        });
    }, [ev, eg, eU, eO]),
        (0, h.ZP)(() => {
            (0, g.U)({
                ...eY,
                continue_session_initial_step: e_,
                has_saved_payment_source: eD
            });
        }),
        r.useEffect(() => {
            if ((null != eP && null != e_ ? ey(eP) : ey(y), null != ea)) eE(ea);
            else if (null != y) {
                var e;
                eE(null === (e = O.Z.get(y)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ey, eE, y, ea, eP, e_]);
    let ez = r.useCallback(() => {
            let e = (0, x.MY)(eG) === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            L.default.track(H.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eY,
                is_custom_message_edited: eU && e && null != eB ? eB !== W.intl.string(W.t.ZkOo1d) : void 0,
                is_custom_emoji_sound_available: eU && e,
                emoji_name: eU && e && (null == eZ ? void 0 : eZ.id) == null ? (null == eZ ? void 0 : eZ.surrogates) : void 0,
                sound_id: eU && e ? (null == eF ? void 0 : eF.soundId) : void 0,
                duration_ms: t - eN.startTime,
                payment_source_type: null == eK ? void 0 : eK.type
            });
            let { enabled: i } = v.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eU && null != eG && null != n && i && (0, b.n)(n) && (0, T.Ni)(eG.id);
        }, [eY, eZ, eB, eG, eU, eF, eN.startTime, eK, n]),
        eq = r.useMemo(() => () => (null == D ? void 0 : D(eh === U.A.COMPLETED, eg)), [D, eh, eg]),
        eQ = (0, o.Z)(() => Date.now(), [eA]),
        eX = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: r, emitPaymentFlowLoadedEvent: a } = t,
                    s = Date.now();
                if (e === k.h8.CONFIRM && (ez(), null == p || p(r), ef)) {
                    eq();
                    return;
                }
                eT(e), null == es || es(e), eb(null), eI(null), e === k.h8.ADD_PAYMENT_STEPS && (c.Z.wait(f.fw), c.Z.wait(_.pB));
                let o = null != n ? n : eA;
                if (null === o || a) {
                    L.default.track(H.rMx.PAYMENT_FLOW_LOADED, {
                        ...eY,
                        initial_step: null != o ? o : e,
                        continue_session_initial_step: e_,
                        has_saved_payment_source: eD
                    });
                    return;
                }
                L.default.track(H.rMx.PAYMENT_FLOW_STEP, {
                    ...eY,
                    ...i,
                    from_step: o,
                    to_step: e === k.h8.ADD_PAYMENT_STEPS ? k.h8.PAYMENT_TYPE : e,
                    step_duration_ms: s - eQ,
                    flow_duration_ms: s - eN.startTime
                });
            },
            [eT, es, eb, eI, eA, e_, eY, eQ, eN.startTime, ez, p, ef, eq, eD]
        );
    (0, N.bp)(eA, eS, eX, em), (0, k.dZ)(eA, eh, em), (0, C.p)(eA, eC, eX), (0, E.Z)(eq), (0, R.w)(eR, () => D(!1), eU), (0, N.D6)(eS);
    let eJ = {
            initialPlanId: y,
            subscriptionTier: I,
            handleStepChange: eX,
            handleClose: eq,
            analyticsData: eY,
            setAnalyticsData: eW,
            trialId: B,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: V,
            planGroup: q,
            openInvoiceId: Q,
            analyticsLocation: n,
            onSubscriptionConfirmation: X,
            renderPurchaseConfirmation: J,
            postSuccessGuild: $,
            followupSKUInfo: ee,
            referralTrialOfferId: er,
            skipConfirm: ef,
            continueSessionToInitialStep: e_
        },
        e$ = (0, F.U)({
            renderHeader: et,
            referralTrialOfferId: er,
            handleClose: eq
        });
    return (0, i.jsx)(u.UkV, {
        className: s()(K.shaker, { [K.halloweenModalHeight]: eV }),
        isShaking: eo && eh === U.A.PURCHASING,
        intensity: z,
        children: (0, i.jsx)(u.Y0X, {
            className: s()(K.root, {
                [K.withHeader]: null != e$,
                [K.halloweenModalHeight]: eV
            }),
            transitionState: m,
            hideShadow: ec,
            returnRef: ed,
            size: ek,
            children: (0, i.jsx)(j.ZP, {
                header: e$,
                isLargeModal: el || (null == eM ? void 0 : eM.isLargeModal),
                isDynamicModal: eu || (null == eM ? void 0 : eM.isDynamicModal),
                ...eJ
            })
        })
    });
}
function X(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: s, handleClose: o, continueSessionToInitialStep: u } = e,
        { activeSubscription: c, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: v, defaultPlanId: T, startedPaymentFlowWithPaymentSourcesRef: b, repeatPurchase: S } = (0, M.JL)(),
        { isGift: A } = (0, P.wD)(),
        N = b.current,
        C = (0, Z.Z)({
            isGift: A,
            skuId: E,
            referralTrialOfferId: s
        }),
        { defaultToMonthlyPlan: R } = I.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: O } = y.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [L, x] = r.useState(!0),
        w = (0, l.e7)([D.Z], () => D.Z.applicationIdsFetched.has(Y.CL));
    return (r.useEffect(() => {
        x(!_ || !h || g);
    }, [g, h, _]),
    (0, p.Z)(
        'Payment Modal',
        L,
        5,
        {
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g
        },
        { tags: { app_context: q } }
    ),
    r.useEffect(() => {
        if ((w || (0, d.yD)(Y.CL), L || f)) return;
        let e = (0, B.Kp)({
            isTrial: C,
            isGift: A,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: N
        });
        null != u
            ? a(k.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: u
              })
            : null != n
              ? a(S && O ? k.h8.PLAN_SELECT : k.h8.REVIEW)
              : e
                ? (v((0, B.nA)(E, c, T)), a(k.h8.REVIEW))
                : null != t
                  ? a(k.h8.PLAN_SELECT)
                  : a(k.h8.SKU_SELECT);
    }, [u, c, f, w, n, L, a, t, E, v, R, C, T, A, N, S, O]),
    L)
        ? (0, i.jsx)(V.Z, {})
        : f
          ? (0, i.jsx)(m.Vq, { onClose: o })
          : null;
}
