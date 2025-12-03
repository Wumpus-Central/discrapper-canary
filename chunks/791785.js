n.d(t, {
    I: () => et,
    PaymentModal: () => ee,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(35387),
    l = n(399606),
    c = n(481060),
    u = n(570140),
    d = n(496929),
    f = n(366939),
    p = n(16084),
    _ = n(975608),
    m = n(493773),
    h = n(89057),
    g = n(232127),
    E = n(382577),
    b = n(522558),
    y = n(795448),
    O = n(317271),
    v = n(622909),
    S = n(230916),
    I = n(176919),
    T = n(711007),
    A = n(459965),
    C = n(509545),
    N = n(580130),
    P = n(626135),
    R = n(669079),
    w = n(74538),
    D = n(987209),
    x = n(563132),
    L = n(409813),
    j = n(45572),
    M = n(784707),
    k = n(614223),
    U = n(48175),
    G = n(435020),
    Z = n(928886),
    B = n(456251),
    F = n(614277),
    V = n(545006),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(876414);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 2,
    $ = "billing";
function ee(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: a,
            analyticsObject: l,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: _ = H.NYc.PREMIUM,
            onComplete: h,
            transitionState: N,
            initialPlanId: k,
            subscriptionTier: U,
            onClose: B,
            trialId: z,
            trialFooterMessageOverride: X,
            reviewWarningMessage: $,
            planGroup: ee = Y.Y1,
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
            isLargeModal: ep = !1,
            isMediumModal: e_ = !1,
            isDynamicModal: em = !1,
            hideShadow: eh = !1,
            returnRef: eg,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: eb,
        } = e,
        {
            activitySessionId: ey,
            purchaseState: eO,
            setPurchaseState: ev,
            selectedSkuId: eS,
            setSelectedSkuId: eI,
            selectedPlan: eT,
            setSelectedPlanId: eA,
            setSelectedPlanNotification: eC,
            setStep: eN,
            setPurchaseError: eP,
            paymentAuthenticationState: eR,
            step: ew,
            selectedSku: eD,
            contextMetadata: ex,
            purchaseTokenAuthState: eL,
            activeSubscription: ej,
            priceOptions: eM,
            hasPaymentSources: ek,
            paymentSourceId: eU,
            paymentSources: eG,
            purchaseType: eZ,
            defaultPlanId: eB,
            premiumBrandRefreshBackgroundClassName: eF,
            customCheckoutFlow: eV,
            invoicePreview: eH,
        } = (0, x.JL)(),
        eY = (0, M.Z)(),
        { isGift: eW, giftRecipient: eK, customGiftMessage: ez, emojiConfetti: eq, soundEffect: eX } = (0, D.wD)(),
        eQ = c.CgR.SMALL;
    ep || (null == eY ? void 0 : eY.isLargeModal)
        ? (eQ = c.CgR.LARGE)
        : e_ || (null == eY ? void 0 : eY.isMediumModal)
          ? (eQ = c.CgR.MEDIUM)
          : (ew === L.h8.ADD_PAYMENT_STEPS || em || (null == eY ? void 0 : eY.isDynamicModal)) && (eQ = c.CgR.DYNAMIC);
    let eJ = (0, v.N)(),
        e$ = null != U && !eW && (0, S.Wp)(eJ, U),
        [e0, e1] = i.useState(
            q(
                {
                    load_id: ex.loadId,
                    payment_type: H.Zuq[eZ],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: _,
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    is_gift: eW,
                    eligible_for_trial: null != z,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: V.g,
                    activity_session_id: ey,
                    eligible_for_discount: e$,
                    sku_product_line: null == eD ? void 0 : eD.productLine,
                },
                t,
            ),
        ),
        e3 = (0, G.m)(eG, eU),
        e2 = null != eH ? eH.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e1((e) => {
            let n = null != eT ? (0, w.aS)(eT.id, !1, eW, eM) : void 0;
            return q(
                Q(q({}, e), {
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eT ? void 0 : eT.price,
                    currency: eM.currency,
                    sku_id: eS,
                    sku_product_line: null == eD ? void 0 : eD.productLine,
                }),
                t,
            );
        });
    }, [eT, eS, eW, eM, t, null == eD ? void 0 : eD.productLine]),
        (0, m.ZP)(() => {
            (0, g.U)(
                Q(q({}, e0), {
                    continue_session_initial_step: eb,
                    custom_checkout_flow: eV,
                    has_saved_payment_source: ek,
                    discount_id: null != eJ ? eJ.discount_id : e2,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eT && (null != eB && null != eb ? eA(eB) : eA(k)), null != eu)) eI(eu);
            else if (null != k) {
                var e;
                eI(null == (e = C.Z.get(k)) ? void 0 : e.skuId);
            }
        }, [eA, eT, eI, k, eu, eB, eb]);
    let e4 = i.useCallback(() => {
            let e = (0, R.MY)(eK) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                Q(q({}, e0), {
                    is_custom_message_edited: eW && e && null != ez ? ez !== W.intl.string(W.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: eW && e,
                    emoji_name:
                        eW && e && (null == eq ? void 0 : eq.id) == null
                            ? null == eq
                                ? void 0
                                : eq.surrogates
                            : void 0,
                    sound_id: eW && e ? (null == eX ? void 0 : eX.soundId) : void 0,
                    duration_ms: t - ex.startTime,
                    payment_source_type: null == e3 ? void 0 : e3.type,
                }),
            );
            let { enabled: n } = b.w.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eW && null != eK && null != a && n && (0, O.n)(a) && (0, y.Ni)(eK.id);
        }, [e0, eq, ez, eK, eW, eX, ex.startTime, e3, a]),
        e5 = i.useMemo(() => () => (null == B ? void 0 : B(eO === j.A.COMPLETED, eS)), [B, eO, eS]),
        e8 = (0, s.Z)(() => Date.now(), [ew]),
        e6 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === L.h8.CONFIRM && (e4(), null == h || h(i), eE)) return void e5();
                eN(e),
                    null == ed || ed(e),
                    eP(null),
                    eC(null),
                    e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(p.pB));
                let s = null != n ? n : ew;
                if (null === s || a)
                    return void P.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        Q(q({}, e0), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eb,
                            has_saved_payment_source: ek,
                        }),
                    );
                P.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    Q(q({}, e0, r), {
                        from_step: s,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e8,
                        flow_duration_ms: o - ex.startTime,
                    }),
                );
            },
            [eN, ed, eP, eC, ew, eb, e0, e8, ex.startTime, e4, h, eE, e5, ek],
        );
    (0, I.bp)(ew, eR, e6, ev),
        (0, L.dZ)(ew, eO, ev),
        (0, T.p)(ew, eL, e6),
        (0, E.Z)(e5),
        (0, A.w)(ej, () => B(!1), eW),
        (0, I.D6)(eR);
    let e7 = {
            initialPlanId: k,
            subscriptionTier: U,
            handleStepChange: e6,
            handleClose: e5,
            analyticsData: e0,
            setAnalyticsData: e1,
            trialId: z,
            trialFooterMessageOverride: X,
            reviewWarningMessage: $,
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
        e9 = (0, Z.U)({
            renderHeader: eo,
            referralTrialOfferId: ec,
            handleClose: e5,
        });
    return (0, r.jsx)(c.UkV, {
        className: K.shaker,
        isShaking: ef && eO === j.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(K.root, eF, { [K.withHeader]: null != e9 }),
            transitionState: N,
            hideShadow: eh,
            returnRef: eg,
            size: eQ,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                F.ZP,
                q(
                    {
                        header: e9,
                        isLargeModal: ep || (null == eY ? void 0 : eY.isLargeModal),
                        isDynamicModal: em || (null == eY ? void 0 : eY.isDynamicModal),
                    },
                    e7,
                ),
            ),
        }),
    });
}
function et(e) {
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
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: g,
            selectedSkuId: E,
            setSelectedPlanId: b,
            defaultPlanId: y,
            startedPaymentFlowWithPaymentSourcesRef: O,
            hasPaymentSources: v,
        } = (0, x.JL)(),
        { isGift: S } = (0, D.wD)(),
        I = O.current,
        T = (0, U.Z)({
            isGift: S,
            skuId: E,
            referralTrialOfferId: o,
        }),
        [A, C] = i.useState(!0),
        P = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(Y.CL));
    return (i.useEffect(() => {
        C(!p || !m || g);
    }, [g, m, p]),
    (0, _.Z)(
        "Payment Modal",
        A,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: g,
        },
        { tags: { app_context: $ } },
    ),
    i.useEffect(() => {
        if ((P || (0, d.yD)(Y.CL), A || f)) return;
        let e = (0, k.Kp)({
            isTrial: T,
            isGift: S,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I,
        });
        null != c
            ? a(L.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c,
              })
            : null != n
              ? n !== Y.Xh.PREMIUM_GROUP_MONTH || v
                  ? a(L.h8.REVIEW)
                  : a(L.h8.ADD_PAYMENT_STEPS)
              : e
                ? (b((0, k.nA)(E, u, y)), a(L.h8.REVIEW))
                : null != t
                  ? a(L.h8.PLAN_SELECT)
                  : a(L.h8.SKU_SELECT);
    }, [c, u, f, P, n, A, a, t, E, b, T, y, S, I, v]),
    A)
        ? (0, r.jsx)(B.Z, {})
        : f
          ? (0, r.jsx)(h.Vq, { onClose: s })
          : null;
}
ee.CURRENT_VERSION = V.g;
