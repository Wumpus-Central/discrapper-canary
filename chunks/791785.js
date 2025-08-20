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
    V = n(981631),
    F = n(474936),
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
            analyticsSubscriptionType: p = V.NYc.PREMIUM,
            onComplete: m,
            transitionState: C,
            initialPlanId: M,
            subscriptionTier: k,
            onClose: B,
            trialId: W,
            trialFooterMessageOverride: z,
            reviewWarningMessage: Q,
            planGroup: $ = F.Y1,
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
        } = (0, D.JL)(),
        eB = (0, j.Z)(),
        { isGift: eZ, giftRecipient: eV, customGiftMessage: eF, emojiConfetti: eH, soundEffect: eY } = (0, w.wD)(),
        eW = c.CgR.SMALL;
    ef || (null == eB ? void 0 : eB.isLargeModal)
        ? (eW = c.CgR.LARGE)
        : (eR === x.h8.ADD_PAYMENT_STEPS || e_ || (null == eB ? void 0 : eB.isDynamicModal)) && (eW = c.CgR.DYNAMIC);
    let eK = (0, v.Ng)(),
        ez = null != k && !eZ && (0, v.Wp)(eK, k),
        [eq, eX] = i.useState(
            K(
                {
                    load_id: eP.loadId,
                    payment_type: V.Zuq[ek],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    is_gift: eZ,
                    eligible_for_trial: null != W,
                    location_stack: n,
                    sku_id: ec,
                    application_id: eo,
                    guild_id: es,
                    payment_modal_version: J.CURRENT_VERSION,
                    activity_session_id: eE,
                    eligible_for_discount: ez,
                },
                t,
            ),
        ),
        eQ = (0, U.m)(eM, ej);
    i.useEffect(() => {
        eX((e) => {
            let n = null != eI ? (0, P.aS)(eI.id, !1, eZ, ex) : void 0;
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
    }, [eI, eO, eZ, ex, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                q(K({}, eq), {
                    continue_session_initial_step: eg,
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
    let eJ = i.useCallback(() => {
            let e = (0, R.MY)(eV) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            N.default.track(
                V.rMx.PAYMENT_FLOW_SUCCEEDED,
                q(K({}, eq), {
                    is_custom_message_edited: eZ && e && null != eF ? eF !== H.intl.string(H.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eZ && e,
                    emoji_name:
                        eZ && e && (null == eH ? void 0 : eH.id) == null
                            ? null == eH
                                ? void 0
                                : eH.surrogates
                            : void 0,
                    sound_id: eZ && e ? (null == eY ? void 0 : eY.soundId) : void 0,
                    duration_ms: t - eP.startTime,
                    payment_source_type: null == eQ ? void 0 : eQ.type,
                }),
            );
            let { enabled: n } = b.w.getCurrentConfig(
                { location: "PaymentModal emitPaymentFlowSuccess" },
                { autoTrackExposure: !1 },
            );
            eZ && null != eV && null != a && n && (0, O.n)(a) && (0, y.Ni)(eV.id);
        }, [eq, eH, eF, eV, eZ, eY, eP.startTime, eQ, a]),
        e$ = i.useMemo(() => () => (null == B ? void 0 : B(eb === L.A.COMPLETED, eO)), [B, eb, eO]),
        e0 = (0, s.Z)(() => Date.now(), [eR]),
        e1 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === x.h8.CONFIRM && (eJ(), null == m || m(i), em)) return void e$();
                eA(e),
                    null == eu || eu(e),
                    eC(null),
                    eS(null),
                    e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eR;
                if (null === s || a)
                    return void N.default.track(
                        V.rMx.PAYMENT_FLOW_LOADED,
                        q(K({}, eq), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eg,
                            has_saved_payment_source: eL,
                        }),
                    );
                N.default.track(
                    V.rMx.PAYMENT_FLOW_STEP,
                    q(K({}, eq, r), {
                        from_step: s,
                        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e0,
                        flow_duration_ms: o - eP.startTime,
                    }),
                );
            },
            [eA, eu, eC, eS, eR, eg, eq, e0, eP.startTime, eJ, m, em, e$, eL],
        );
    (0, I.bp)(eR, eN, e1, ey),
        (0, x.dZ)(eR, eb, ey),
        (0, T.p)(eR, ew, e1),
        (0, E.Z)(e$),
        (0, S.w)(eD, () => B(!1), eZ),
        (0, I.D6)(eN);
    let e2 = {
            initialPlanId: M,
            subscriptionTier: k,
            handleStepChange: e1,
            handleClose: e$,
            analyticsData: eq,
            setAnalyticsData: eX,
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
        e3 = (0, G.U)({
            renderHeader: ea,
            referralTrialOfferId: el,
            handleClose: e$,
        });
    return (0, r.jsx)(c.UkV, {
        className: Y.shaker,
        isShaking: ed && eb === L.A.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(Y.root, eG, { [Y.withHeader]: null != e3 }),
            transitionState: C,
            hideShadow: ep,
            returnRef: eh,
            size: eW,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                Z.ZP,
                K(
                    {
                        header: e3,
                        isLargeModal: ef || (null == eB ? void 0 : eB.isLargeModal),
                        isDynamicModal: e_ || (null == eB ? void 0 : eB.isDynamicModal),
                    },
                    e2,
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
        N = (0, l.e7)([C.Z], () => C.Z.applicationIdsFetched.has(F.CL));
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
        if ((N || (0, d.yD)(F.CL), S || f)) return;
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
