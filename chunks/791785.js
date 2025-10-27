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
    D = n(987209),
    w = n(563132),
    L = n(409813),
    x = n(45572),
    M = n(784707),
    k = n(614223),
    j = n(48175),
    U = n(435020),
    G = n(928886),
    B = n(456251),
    Z = n(614277),
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
            initialPlanId: k,
            subscriptionTier: j,
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
            purchaseTokenAuthState: eD,
            activeSubscription: ew,
            priceOptions: eL,
            hasPaymentSources: ex,
            paymentSourceId: eM,
            paymentSources: ek,
            purchaseType: ej,
            defaultPlanId: eU,
            premiumBrandRefreshBackgroundClassName: eG,
            customCheckoutFlow: eB,
            invoicePreview: eZ,
        } = (0, w.JL)(),
        eF = (0, M.Z)(),
        { isGift: eV, giftRecipient: eH, customGiftMessage: eY, emojiConfetti: eW, soundEffect: eK } = (0, D.wD)(),
        ez = c.CgR.SMALL;
    ef || (null == eF ? void 0 : eF.isLargeModal)
        ? (ez = c.CgR.LARGE)
        : (eR === L.h8.ADD_PAYMENT_STEPS || e_ || (null == eF ? void 0 : eF.isDynamicModal)) && (ez = c.CgR.DYNAMIC);
    let eq = (0, v.Ng)(),
        eX = null != j && !eV && (0, v.Wp)(eq, j),
        [eQ, eJ] = i.useState(
            K(
                {
                    load_id: eP.loadId,
                    payment_type: F.Zuq[ej],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    is_gift: eV,
                    eligible_for_trial: null != W,
                    location_stack: n,
                    sku_id: ec,
                    application_id: eo,
                    guild_id: es,
                    payment_modal_version: J.CURRENT_VERSION,
                    activity_session_id: eE,
                    eligible_for_discount: eX,
                },
                t,
            ),
        ),
        e$ = (0, U.m)(ek, eM),
        e0 = null != eZ ? eZ.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        eJ((e) => {
            let n = null != eI ? (0, P.aS)(eI.id, !1, eV, eL) : void 0;
            return K(
                q(K({}, e), {
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eI ? void 0 : eI.price,
                    currency: eL.currency,
                    sku_id: eO,
                }),
                t,
            );
        });
    }, [eI, eO, eV, eL, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                q(K({}, eQ), {
                    continue_session_initial_step: eg,
                    custom_checkout_flow: eB,
                    has_saved_payment_source: ex,
                    discount_id: null != eq ? eq.discount_id : e0,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eI && (null != eU && null != eg ? eT(eU) : eT(k)), null != ec)) ev(ec);
            else if (null != k) {
                var e;
                ev(null == (e = A.Z.get(k)) ? void 0 : e.skuId);
            }
        }, [eT, eI, ev, k, ec, eU, eg]);
    let e1 = i.useCallback(() => {
            let e = (0, R.MY)(eH) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            N.default.track(
                F.rMx.PAYMENT_FLOW_SUCCEEDED,
                q(K({}, eQ), {
                    is_custom_message_edited: eV && e && null != eY ? eY !== H.intl.string(H.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: eV && e,
                    emoji_name:
                        eV && e && (null == eW ? void 0 : eW.id) == null
                            ? null == eW
                                ? void 0
                                : eW.surrogates
                            : void 0,
                    sound_id: eV && e ? (null == eK ? void 0 : eK.soundId) : void 0,
                    duration_ms: t - eP.startTime,
                    payment_source_type: null == e$ ? void 0 : e$.type,
                }),
            );
            let { enabled: n } = b.w.getCurrentConfig(
                { location: "PaymentModal emitPaymentFlowSuccess" },
                { autoTrackExposure: !1 },
            );
            eV && null != eH && null != a && n && (0, O.n)(a) && (0, y.Ni)(eH.id);
        }, [eQ, eW, eY, eH, eV, eK, eP.startTime, e$, a]),
        e3 = i.useMemo(() => () => (null == B ? void 0 : B(eb === x.A.COMPLETED, eO)), [B, eb, eO]),
        e2 = (0, s.Z)(() => Date.now(), [eR]),
        e4 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === L.h8.CONFIRM && (e1(), null == m || m(i), em)) return void e3();
                eA(e),
                    null == eu || eu(e),
                    eC(null),
                    eS(null),
                    e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eR;
                if (null === s || a)
                    return void N.default.track(
                        F.rMx.PAYMENT_FLOW_LOADED,
                        q(K({}, eQ), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eg,
                            has_saved_payment_source: ex,
                        }),
                    );
                N.default.track(
                    F.rMx.PAYMENT_FLOW_STEP,
                    q(K({}, eQ, r), {
                        from_step: s,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e2,
                        flow_duration_ms: o - eP.startTime,
                    }),
                );
            },
            [eA, eu, eC, eS, eR, eg, eQ, e2, eP.startTime, e1, m, em, e3, ex],
        );
    (0, I.bp)(eR, eN, e4, ey),
        (0, L.dZ)(eR, eb, ey),
        (0, T.p)(eR, eD, e4),
        (0, E.Z)(e3),
        (0, S.w)(ew, () => B(!1), eV),
        (0, I.D6)(eN);
    let e8 = {
            initialPlanId: k,
            subscriptionTier: j,
            handleStepChange: e4,
            handleClose: e3,
            analyticsData: eQ,
            setAnalyticsData: eJ,
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
        e5 = (0, G.U)({
            renderHeader: ea,
            referralTrialOfferId: el,
            handleClose: e3,
        });
    return (0, r.jsx)(c.UkV, {
        className: Y.shaker,
        isShaking: ed && eb === x.A.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(Y.root, eG, { [Y.withHeader]: null != e5 }),
            transitionState: C,
            hideShadow: ep,
            returnRef: eh,
            size: ez,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                Z.ZP,
                K(
                    {
                        header: e5,
                        isLargeModal: ef || (null == eF ? void 0 : eF.isLargeModal),
                        isDynamicModal: e_ || (null == eF ? void 0 : eF.isDynamicModal),
                    },
                    e8,
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
        } = (0, w.JL)(),
        { isGift: v } = (0, D.wD)(),
        I = O.current,
        T = (0, j.Z)({
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
        let e = (0, k.Kp)({
            isTrial: T,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I,
        });
        null != c
            ? a(L.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c,
              })
            : null != n
              ? a(L.h8.REVIEW)
              : e
                ? (b((0, k.nA)(E, u, y)), a(L.h8.REVIEW))
                : null != t
                  ? a(L.h8.PLAN_SELECT)
                  : a(L.h8.SKU_SELECT);
    }, [c, u, f, N, n, S, a, t, E, b, T, y, v, I]),
    S)
        ? (0, r.jsx)(B.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
J.CURRENT_VERSION = "v1";
