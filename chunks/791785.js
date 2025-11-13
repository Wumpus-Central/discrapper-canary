n.d(t, {
    I: () => ee,
    PaymentModal: () => $,
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
    v = n(622909),
    I = n(230916),
    T = n(176919),
    S = n(711007),
    A = n(459965),
    C = n(509545),
    N = n(580130),
    R = n(626135),
    P = n(669079),
    D = n(74538),
    w = n(987209),
    x = n(563132),
    L = n(409813),
    M = n(45572),
    j = n(784707),
    k = n(614223),
    U = n(48175),
    G = n(435020),
    B = n(928886),
    Z = n(456251),
    F = n(614277),
    V = n(981631),
    H = n(474936),
    Y = n(388032),
    W = n(876414);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 2,
    J = "billing";
function $(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: p = V.NYc.PREMIUM,
            onComplete: m,
            transitionState: N,
            initialPlanId: k,
            subscriptionTier: U,
            onClose: Z,
            trialId: K,
            trialFooterMessageOverride: q,
            reviewWarningMessage: J,
            planGroup: ee = H.Y1,
            openInvoiceId: et,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: ea,
            renderHeader: eo,
            applicationId: es,
            guildId: el,
            referralTrialOfferId: ec,
            skuId: eu,
            onStepChange: ed,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: e_ = !1,
            isMediumModal: ep = !1,
            isDynamicModal: eh = !1,
            hideShadow: em = !1,
            returnRef: eg,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: eb,
        } = e,
        {
            activitySessionId: ey,
            purchaseState: eO,
            setPurchaseState: ev,
            selectedSkuId: eI,
            setSelectedSkuId: eT,
            selectedPlan: eS,
            setSelectedPlanId: eA,
            setSelectedPlanNotification: eC,
            setStep: eN,
            setPurchaseError: eR,
            paymentAuthenticationState: eP,
            step: eD,
            selectedSku: ew,
            contextMetadata: ex,
            purchaseTokenAuthState: eL,
            activeSubscription: eM,
            priceOptions: ej,
            hasPaymentSources: ek,
            paymentSourceId: eU,
            paymentSources: eG,
            purchaseType: eB,
            defaultPlanId: eZ,
            premiumBrandRefreshBackgroundClassName: eF,
            customCheckoutFlow: eV,
            invoicePreview: eH,
        } = (0, x.JL)(),
        eY = (0, j.Z)(),
        { isGift: eW, giftRecipient: eK, customGiftMessage: ez, emojiConfetti: eq, soundEffect: eX } = (0, w.wD)(),
        eQ = c.CgR.SMALL;
    e_ || (null == eY ? void 0 : eY.isLargeModal)
        ? (eQ = c.CgR.LARGE)
        : ep || (null == eY ? void 0 : eY.isMediumModal)
          ? (eQ = c.CgR.MEDIUM)
          : (eD === L.h8.ADD_PAYMENT_STEPS || eh || (null == eY ? void 0 : eY.isDynamicModal)) && (eQ = c.CgR.DYNAMIC);
    let eJ = (0, v.N)(),
        e$ = null != U && !eW && (0, I.Wp)(eJ, U),
        [e0, e1] = i.useState(
            z(
                {
                    load_id: ex.loadId,
                    payment_type: V.Zuq[eB],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eS ? void 0 : eS.id,
                    is_gift: eW,
                    eligible_for_trial: null != K,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: $.CURRENT_VERSION,
                    activity_session_id: ey,
                    eligible_for_discount: e$,
                    sku_product_line: null == ew ? void 0 : ew.productLine,
                },
                t,
            ),
        ),
        e2 = (0, G.m)(eG, eU),
        e3 = null != eH ? eH.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1((e) => {
            let n = null != eS ? (0, D.aS)(eS.id, !1, eW, ej) : void 0;
            return z(
                X(z({}, e), {
                    subscription_plan_id: null == eS ? void 0 : eS.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eS ? void 0 : eS.price,
                    currency: ej.currency,
                    sku_id: eI,
                    sku_product_line: null == ew ? void 0 : ew.productLine,
                }),
                t,
            );
        });
    }, [eS, eI, eW, ej, t, null == ew ? void 0 : ew.productLine]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(z({}, e0), {
                    continue_session_initial_step: eb,
                    custom_checkout_flow: eV,
                    has_saved_payment_source: ek,
                    discount_id: null != eJ ? eJ.discount_id : e3,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eS && (null != eZ && null != eb ? eA(eZ) : eA(k)), null != eu)) eT(eu);
            else if (null != k) {
                var e;
                eT(null == (e = C.Z.get(k)) ? void 0 : e.skuId);
            }
        }, [eA, eS, eT, k, eu, eZ, eb]);
    let e4 = i.useCallback(() => {
            let e = (0, P.MY)(eK) === P.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            R.default.track(
                V.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(z({}, e0), {
                    is_custom_message_edited: eW && e && null != ez ? ez !== Y.intl.string(Y.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: eW && e,
                    emoji_name:
                        eW && e && (null == eq ? void 0 : eq.id) == null
                            ? null == eq
                                ? void 0
                                : eq.surrogates
                            : void 0,
                    sound_id: eW && e ? (null == eX ? void 0 : eX.soundId) : void 0,
                    duration_ms: t - ex.startTime,
                    payment_source_type: null == e2 ? void 0 : e2.type,
                }),
            );
            let { enabled: n } = b.w.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eW && null != eK && null != a && n && (0, O.n)(a) && (0, y.Ni)(eK.id);
        }, [e0, eq, ez, eK, eW, eX, ex.startTime, e2, a]),
        e8 = i.useMemo(() => () => (null == Z ? void 0 : Z(eO === M.A.COMPLETED, eI)), [Z, eO, eI]),
        e5 = (0, s.Z)(() => Date.now(), [eD]),
        e6 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === L.h8.CONFIRM && (e4(), null == m || m(i), eE)) return void e8();
                eN(e),
                    null == ed || ed(e),
                    eR(null),
                    eC(null),
                    e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eD;
                if (null === s || a)
                    return void R.default.track(
                        V.rMx.PAYMENT_FLOW_LOADED,
                        X(z({}, e0), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eb,
                            has_saved_payment_source: ek,
                        }),
                    );
                R.default.track(
                    V.rMx.PAYMENT_FLOW_STEP,
                    X(z({}, e0, r), {
                        from_step: s,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e5,
                        flow_duration_ms: o - ex.startTime,
                    }),
                );
            },
            [eN, ed, eR, eC, eD, eb, e0, e5, ex.startTime, e4, m, eE, e8, ek],
        );
    (0, T.bp)(eD, eP, e6, ev),
        (0, L.dZ)(eD, eO, ev),
        (0, S.p)(eD, eL, e6),
        (0, E.Z)(e8),
        (0, A.w)(eM, () => Z(!1), eW),
        (0, T.D6)(eP);
    let e7 = {
            initialPlanId: k,
            subscriptionTier: U,
            handleStepChange: e6,
            handleClose: e8,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: K,
            trialFooterMessageOverride: q,
            reviewWarningMessage: J,
            planGroup: ee,
            openInvoiceId: et,
            analyticsLocation: a,
            onSubscriptionConfirmation: en,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ei,
            followupSKUInfo: ea,
            referralTrialOfferId: ec,
            skipConfirm: eE,
            continueSessionToInitialStep: eb,
        },
        e9 = (0, B.U)({
            renderHeader: eo,
            referralTrialOfferId: ec,
            handleClose: e8,
        });
    return (0, r.jsx)(c.UkV, {
        className: W.shaker,
        isShaking: ef && eO === M.A.PURCHASING,
        intensity: Q,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(W.root, eF, { [W.withHeader]: null != e9 }),
            transitionState: N,
            hideShadow: em,
            returnRef: eg,
            size: eQ,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                F.ZP,
                z(
                    {
                        header: e9,
                        isLargeModal: e_ || (null == eY ? void 0 : eY.isLargeModal),
                        isDynamicModal: eh || (null == eY ? void 0 : eY.isDynamicModal),
                    },
                    e7,
                ),
            ),
        }),
    });
}
function ee(e) {
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
        } = (0, x.JL)(),
        { isGift: v } = (0, w.wD)(),
        I = O.current,
        T = (0, U.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: o,
        }),
        [S, A] = i.useState(!0),
        C = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(H.CL));
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
        { tags: { app_context: J } },
    ),
    i.useEffect(() => {
        if ((C || (0, d.yD)(H.CL), S || f)) return;
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
    }, [c, u, f, C, n, S, a, t, E, b, T, y, v, I]),
    S)
        ? (0, r.jsx)(Z.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
$.CURRENT_VERSION = "v1";
