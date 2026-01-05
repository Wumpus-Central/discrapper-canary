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
    C = n(459965),
    A = n(509545),
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
    F = n(456251),
    B = n(614277),
    V = n(545006),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(696970);
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
            onClose: F,
            trialId: z,
            trialFooterMessageOverride: Q,
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
            paymentModalVersion: ey = V.g,
        } = e,
        {
            activitySessionId: eO,
            purchaseState: ev,
            setPurchaseState: eS,
            selectedSkuId: eI,
            setSelectedSkuId: eT,
            selectedPlan: eC,
            setSelectedPlanId: eA,
            setSelectedPlanNotification: eN,
            setStep: eP,
            setPurchaseError: eR,
            paymentAuthenticationState: ew,
            step: eD,
            selectedSku: ex,
            contextMetadata: eL,
            purchaseTokenAuthState: ej,
            activeSubscription: eM,
            priceOptions: ek,
            hasPaymentSources: eU,
            paymentSourceId: eG,
            paymentSources: eZ,
            purchaseType: eF,
            defaultPlanId: eB,
            premiumBrandRefreshBackgroundClassName: eV,
            customCheckoutFlow: eH,
            invoicePreview: eY,
        } = (0, x.JL)(),
        eW = (0, M.Z)(),
        { isGift: eK, giftRecipient: ez, customGiftMessage: eq, emojiConfetti: eQ, soundEffect: eX } = (0, D.wD)(),
        eJ = c.CgR.SMALL;
    ep || (null == eW ? void 0 : eW.isLargeModal)
        ? (eJ = c.CgR.LARGE)
        : e_ || (null == eW ? void 0 : eW.isMediumModal)
          ? (eJ = c.CgR.MEDIUM)
          : (eD === L.h8.ADD_PAYMENT_STEPS || em || (null == eW ? void 0 : eW.isDynamicModal)) && (eJ = c.CgR.DYNAMIC);
    let e$ = (0, v.N)(),
        e0 = null != U && !eK && (0, S.Wp)(e$, U),
        [e1, e3] = i.useState(
            q(
                {
                    load_id: eL.loadId,
                    payment_type: H.Zuq[eF],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: _,
                    subscription_plan_id: null == eC ? void 0 : eC.id,
                    is_gift: eK,
                    eligible_for_trial: null != z,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: ey,
                    activity_session_id: eO,
                    eligible_for_discount: e0,
                    sku_product_line: null == ex ? void 0 : ex.productLine,
                },
                t,
            ),
        ),
        e2 = (0, G.m)(eZ, eG),
        e4 = null != eY ? eY.getDiscountIdIfExists() : void 0;
    i.useEffect(() => {
        e3((e) => {
            let n = null != eC ? (0, w.aS)(eC.id, !1, eK, ek) : void 0;
            return q(
                X(q({}, e), {
                    subscription_plan_id: null == eC ? void 0 : eC.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eC ? void 0 : eC.price,
                    currency: ek.currency,
                    sku_id: eI,
                    sku_product_line: null == ex ? void 0 : ex.productLine,
                }),
                t,
            );
        });
    }, [eC, eI, eK, ek, t, null == ex ? void 0 : ex.productLine]),
        (0, m.ZP)(() => {
            (0, g.U)(
                X(q({}, e1), {
                    continue_session_initial_step: eb,
                    custom_checkout_flow: eH,
                    has_saved_payment_source: eU,
                    discount_id: null != e$ ? e$.discount_id : e4,
                }),
            );
        }),
        i.useEffect(() => {
            if ((null == eC && (null != eB && null != eb ? eA(eB) : eA(k)), null != eu)) eT(eu);
            else if (null != k) {
                var e;
                eT(null == (e = A.Z.get(k)) ? void 0 : e.skuId);
            }
        }, [eA, eC, eT, k, eu, eB, eb]);
    let e5 = i.useCallback(() => {
            let e = (0, R.MY)(ez) === R.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(q({}, e1), {
                    is_custom_message_edited: eK && e && null != eq ? eq !== W.intl.string(W.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: eK && e,
                    emoji_name:
                        eK && e && (null == eQ ? void 0 : eQ.id) == null
                            ? null == eQ
                                ? void 0
                                : eQ.surrogates
                            : void 0,
                    sound_id: eK && e ? (null == eX ? void 0 : eX.soundId) : void 0,
                    duration_ms: t - eL.startTime,
                    payment_source_type: null == e2 ? void 0 : e2.type,
                }),
            );
            let { enabled: n } = b.w.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eK && null != ez && null != a && n && (0, O.n)(a) && (0, y.Ni)(ez.id);
        }, [e1, eQ, eq, ez, eK, eX, eL.startTime, e2, a]),
        e8 = i.useMemo(() => () => (null == F ? void 0 : F(ev === j.A.COMPLETED, eI)), [F, ev, eI]),
        e6 = (0, s.Z)(() => Date.now(), [eD]),
        e7 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === L.h8.CONFIRM && (e5(), null == h || h(i), eE)) return void e8();
                eP(e),
                    null == ed || ed(e),
                    eR(null),
                    eN(null),
                    e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(p.pB));
                let s = null != n ? n : eD;
                if (null === s || a)
                    return void P.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        X(q({}, e1), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eb,
                            has_saved_payment_source: eU,
                        }),
                    );
                P.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    X(q({}, e1, r), {
                        from_step: s,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e6,
                        flow_duration_ms: o - eL.startTime,
                    }),
                );
            },
            [eP, ed, eR, eN, eD, eb, e1, e6, eL.startTime, e5, h, eE, e8, eU],
        );
    (0, I.bp)(eD, ew, e7, eS),
        (0, L.dZ)(eD, ev, eS),
        (0, T.p)(eD, ej, e7),
        (0, E.Z)(e8),
        (0, C.w)(eM, () => F(!1), eK),
        (0, I.D6)(ew);
    let e9 = {
            initialPlanId: k,
            subscriptionTier: U,
            handleStepChange: e7,
            handleClose: e8,
            analyticsData: e1,
            setAnalyticsData: e3,
            trialId: z,
            trialFooterMessageOverride: Q,
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
        te = (0, Z.U)({
            renderHeader: eo,
            handleClose: e8,
        });
    return (0, r.jsx)(c.UkV, {
        className: K.shaker,
        isShaking: ef && ev === j.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(K.root, eV, { [K.withHeader]: null != te }),
            transitionState: N,
            hideShadow: eh,
            returnRef: eg,
            size: eJ,
            parentComponent: "PaymentModal",
            children: (0, r.jsx)(
                B.ZP,
                q(
                    {
                        header: te,
                        isLargeModal: ep || (null == eW ? void 0 : eW.isLargeModal),
                        isDynamicModal: em || (null == eW ? void 0 : eW.isDynamicModal),
                    },
                    e9,
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
        [C, A] = i.useState(!0),
        P = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(Y.CL));
    return (i.useEffect(() => {
        A(!p || !m || g);
    }, [g, m, p]),
    (0, _.Z)(
        "Payment Modal",
        C,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: m,
            currencyLoading: g,
        },
        { tags: { app_context: $ } },
    ),
    i.useEffect(() => {
        if ((P || (0, d.yD)(Y.CL), C || f)) return;
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
    }, [c, u, f, P, n, C, a, t, E, b, T, y, S, I, v]),
    C)
        ? (0, r.jsx)(F.Z, {})
        : f
          ? (0, r.jsx)(h.Vq, { onClose: s })
          : null;
}
