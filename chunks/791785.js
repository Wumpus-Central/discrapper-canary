n.d(t, {
    I: () => $,
    PaymentModal: () => J,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(548680),
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
    y = n(795448),
    O = n(317271),
    v = n(104494),
    I = n(176919),
    T = n(711007),
    S = n(459965),
    A = n(509545),
    C = n(580130),
    N = n(626135),
    R = n(669079),
    P = n(74538),
    w = n(987209),
    D = n(563132),
    x = n(409813),
    L = n(45572),
    j = n(784707),
    M = n(614223),
    k = n(48175),
    U = n(435020),
    G = n(928886),
    B = n(456251),
    Z = n(27034),
    F = n(981631),
    V = n(474936),
    H = n(388032),
    Y = n(876414);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 2,
    Q = "billing";
function J(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: p = F.NYc.PREMIUM,
            onComplete: m,
            transitionState: C,
            initialPlanId: M,
            subscriptionTier: k,
            onClose: B,
            trialId: W,
            trialFooterMessageOverride: z,
            reviewWarningMessage: Q,
            planGroup: $ = V.Y1,
            openInvoiceId: ee,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            renderHeader: ea,
            applicationId: eo,
            guildId: es,
            referralTrialOfferId: el,
            skuId: ec,
            onStepChange: eu,
            shakeWhilePurchasing: ed = !1,
            isLargeModal: ef = !1,
            isDynamicModal: e_ = !1,
            hideShadow: ep = !1,
            returnRef: eh,
            skipConfirm: em = !1,
            continueSessionToInitialStep: eg,
        } = e,
        {
            activitySessionId: eE,
            purchaseState: eb,
            setPurchaseState: ey,
            selectedSkuId: eO,
            setSelectedSkuId: ev,
            selectedPlan: eI,
            setSelectedPlanId: eT,
            setSelectedPlanNotification: eS,
            setStep: eA,
            setPurchaseError: eC,
            paymentAuthenticationState: eN,
            step: eR,
            contextMetadata: eP,
            purchaseTokenAuthState: ew,
            activeSubscription: eD,
            priceOptions: ex,
            hasPaymentSources: eL,
            paymentSourceId: ej,
            paymentSources: eM,
            purchaseType: ek,
            defaultPlanId: eU,
            premiumBrandRefreshBackgroundClassName: eG,
            customCheckoutFlow: eB,
        } = (0, D.JL)(),
        eZ = (0, j.Z)(),
        { isGift: eF, giftRecipient: eV, customGiftMessage: eH, emojiConfetti: eY, soundEffect: eW } = (0, w.wD)(),
        eK = c.CgR.SMALL;
    ef || (null == eZ ? void 0 : eZ.isLargeModal)
        ? (eK = c.CgR.LARGE)
        : (eR === x.h8.ADD_PAYMENT_STEPS || e_ || (null == eZ ? void 0 : eZ.isDynamicModal)) && (eK = c.CgR.DYNAMIC);
    let ez = (0, v.Ng)(),
        eq = null != k && !eF && (0, v.Wp)(ez, k),
        [eX, eQ] = i.useState(
            K(
                {
                    load_id: eP.loadId,
                    payment_type: F.Zuq[ek],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    is_gift: eF,
                    eligible_for_trial: null != W,
                    location_stack: n,
                    sku_id: ec,
                    application_id: eo,
                    guild_id: es,
                    payment_modal_version: J.CURRENT_VERSION,
                    activity_session_id: eE,
                    eligible_for_discount: eq,
                },
                t,
            ),
        ),
        eJ = (0, U.m)(eM, ej);
    i.useEffect(() => {
        eQ((e) => {
            let n = null != eI ? (0, P.aS)(eI.id, !1, eF, ex) : void 0;
            return K(
                q(K({}, e), {
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eI ? void 0 : eI.price,
                    currency: ex.currency,
                    sku_id: eO,
                }),
                t,
            );
        });
    }, [eI, eO, eF, ex, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                q(K({}, eX), {
                    continue_session_initial_step: eg,
                    custom_checkout_flow: eB,
                    has_saved_payment_source: eL,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eI && (null != eU && null != eg ? eT(eU) : eT(M)), null != ec)) ev(ec);
            else if (null != M) {
                var e;
                ev(null == (e = A.Z.get(M)) ? void 0 : e.skuId);
            }
        }, [eT, eI, ev, M, ec, eU, eg]);
    let e$ = i.useCallback(() => {
            let e = (0, R.MY)(eV) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            N.default.track(
                F.rMx.PAYMENT_FLOW_SUCCEEDED,
                q(K({}, eX), {
                    is_custom_message_edited: eF && e && null != eH ? eH !== H.intl.string(H.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eF && e,
                    emoji_name:
                        eF && e && (null == eY ? void 0 : eY.id) == null
                            ? null == eY
                                ? void 0
                                : eY.surrogates
                            : void 0,
                    sound_id: eF && e ? (null == eW ? void 0 : eW.soundId) : void 0,
                    duration_ms: t - eP.startTime,
                    payment_source_type: null == eJ ? void 0 : eJ.type,
                }),
            );
            let { enabled: n } = b.w.getCurrentConfig(
                { location: "PaymentModal emitPaymentFlowSuccess" },
                { autoTrackExposure: !1 },
            );
            eF && null != eV && null != a && n && (0, O.n)(a) && (0, y.Ni)(eV.id);
        }, [eX, eY, eH, eV, eF, eW, eP.startTime, eJ, a]),
        e0 = i.useMemo(() => () => (null == B ? void 0 : B(eb === L.A.COMPLETED, eO)), [B, eb, eO]),
        e1 = (0, s.Z)(() => Date.now(), [eR]),
        e2 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === x.h8.CONFIRM && (e$(), null == m || m(i), em)) return void e0();
                eA(e),
                    null == eu || eu(e),
                    eC(null),
                    eS(null),
                    e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eR;
                if (null === s || a)
                    return void N.default.track(
                        F.rMx.PAYMENT_FLOW_LOADED,
                        q(K({}, eX), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eg,
                            has_saved_payment_source: eL,
                        }),
                    );
                N.default.track(
                    F.rMx.PAYMENT_FLOW_STEP,
                    q(K({}, eX, r), {
                        from_step: s,
                        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e1,
                        flow_duration_ms: o - eP.startTime,
                    }),
                );
            },
            [eA, eu, eC, eS, eR, eg, eX, e1, eP.startTime, e$, m, em, e0, eL],
        );
    (0, I.bp)(eR, eN, e2, ey),
        (0, x.dZ)(eR, eb, ey),
        (0, T.p)(eR, ew, e2),
        (0, E.Z)(e0),
        (0, S.w)(eD, () => B(!1), eF),
        (0, I.D6)(eN);
    let e3 = {
            initialPlanId: M,
            subscriptionTier: k,
            handleStepChange: e2,
            handleClose: e0,
            analyticsData: eX,
            setAnalyticsData: eQ,
            trialId: W,
            trialFooterMessageOverride: z,
            reviewWarningMessage: Q,
            planGroup: $,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: em,
            continueSessionToInitialStep: eg,
        },
        e4 = (0, G.U)({
            renderHeader: ea,
            referralTrialOfferId: el,
            handleClose: e0,
        });
    return (0, r.jsx)(c.UkV, {
        className: Y.shaker,
        isShaking: ed && eb === L.A.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(Y.root, eG, { [Y.withHeader]: null != e4 }),
            transitionState: C,
            hideShadow: ep,
            returnRef: eh,
            size: eK,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                Z.ZP,
                K(
                    {
                        header: e4,
                        isLargeModal: ef || (null == eZ ? void 0 : eZ.isLargeModal),
                        isDynamicModal: e_ || (null == eZ ? void 0 : eZ.isDynamicModal),
                    },
                    e3,
                ),
            ),
        }),
    });
}
function $(e) {
    let {
            subscriptionTier: t,
            initialPlanId: n,
            handleStepChange: a,
            referralTrialOfferId: o,
            handleClose: s,
            continueSessionToInitialStep: c,
        } = e,
        {
            activeSubscription: u,
            blockedPayments: f,
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
            selectedSkuId: E,
            setSelectedPlanId: b,
            defaultPlanId: y,
            startedPaymentFlowWithPaymentSourcesRef: O,
        } = (0, D.JL)(),
        { isGift: v } = (0, w.wD)(),
        I = O.current,
        T = (0, k.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: o,
        }),
        [S, A] = i.useState(!0),
        N = (0, l.e7)([C.Z], () => C.Z.applicationIdsFetched.has(V.CL));
    return (i.useEffect(() => {
        A(!_ || !h || g);
    }, [g, h, _]),
    (0, p.Z)(
        "Payment Modal",
        S,
        5,
        {
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g,
        },
        { tags: { app_context: Q } },
    ),
    i.useEffect(() => {
        if ((N || (0, d.yD)(V.CL), S || f)) return;
        let e = (0, M.Kp)({
            isTrial: T,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I,
        });
        null != c
            ? a(x.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c,
              })
            : null != n
              ? a(x.h8.REVIEW)
              : e
                ? (b((0, M.nA)(E, u, y)), a(x.h8.REVIEW))
                : null != t
                  ? a(x.h8.PLAN_SELECT)
                  : a(x.h8.SKU_SELECT);
    }, [c, u, f, N, n, S, a, t, E, b, T, y, v, I]),
    S)
        ? (0, r.jsx)(B.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
J.CURRENT_VERSION = "v1";
