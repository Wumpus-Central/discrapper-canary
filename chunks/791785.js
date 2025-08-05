(n.d(t, {
    I: () => J,
    PaymentModal: () => Q
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(554908),
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
    N = n(580130),
    C = n(626135),
    w = n(669079),
    R = n(74538),
    P = n(987209),
    D = n(563132),
    L = n(409813),
    x = n(45572),
    k = n(784707),
    j = n(614223),
    M = n(48175),
    U = n(435020),
    G = n(928886),
    B = n(456251),
    Z = n(27034),
    F = n(981631),
    V = n(474936),
    H = n(388032),
    Y = n(179742);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            }));
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let $ = 2,
    X = 'billing';
function Q(e) {
    let { analyticsDataOverride: t, analyticsLocations: n, analyticsLocation: a, analyticsObject: l, analyticsSourceLocation: d, analyticsSubscriptionType: p = F.NYc.PREMIUM, onComplete: m, transitionState: N, initialPlanId: j, subscriptionTier: M, onClose: B, trialId: W, trialFooterMessageOverride: z, reviewWarningMessage: X, planGroup: J = V.Y1, openInvoiceId: ee, onSubscriptionConfirmation: et, renderPurchaseConfirmation: en, postSuccessGuild: er, followupSKUInfo: ei, renderHeader: ea, applicationId: eo, guildId: es, referralTrialOfferId: el, skuId: ec, onStepChange: eu, shakeWhilePurchasing: ed = !1, isLargeModal: ef = !1, isDynamicModal: e_ = !1, hideShadow: ep = !1, returnRef: eh, skipConfirm: em = !1, continueSessionToInitialStep: eg } = e,
        { activitySessionId: eE, purchaseState: eb, setPurchaseState: ey, selectedSkuId: eO, setSelectedSkuId: ev, selectedPlan: eI, setSelectedPlanId: eT, setSelectedPlanNotification: eS, setStep: eA, setPurchaseError: eN, paymentAuthenticationState: eC, step: ew, contextMetadata: eR, purchaseTokenAuthState: eP, activeSubscription: eD, priceOptions: eL, hasPaymentSources: ex, paymentSourceId: ek, paymentSources: ej, purchaseType: eM, defaultPlanId: eU, premiumBrandRefreshBackgroundClassName: eG } = (0, D.JL)(),
        eB = (0, k.Z)(),
        { isGift: eZ, giftRecipient: eF, customGiftMessage: eV, emojiConfetti: eH, soundEffect: eY } = (0, P.wD)(),
        eW = c.CgR.SMALL;
    ef || (null == eB ? void 0 : eB.isLargeModal) ? (eW = c.CgR.LARGE) : (ew === L.h8.ADD_PAYMENT_STEPS || e_ || (null == eB ? void 0 : eB.isDynamicModal)) && (eW = c.CgR.DYNAMIC);
    let eK = (0, v.Ng)(),
        ez = null != M && !eZ && (0, v.Wp)(eK, M),
        [eq, e$] = i.useState(
            K(
                {
                    load_id: eR.loadId,
                    payment_type: F.Zuq[eM],
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
                    payment_modal_version: Q.CURRENT_VERSION,
                    activity_session_id: eE,
                    eligible_for_discount: ez
                },
                t
            )
        ),
        eX = (0, U.m)(ej, ek);
    (i.useEffect(() => {
        e$((e) => {
            let n = null != eI ? (0, R.aS)(eI.id, !1, eZ, eL) : void 0;
            return K(
                q(K({}, e), {
                    subscription_plan_id: null == eI ? void 0 : eI.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eI ? void 0 : eI.price,
                    currency: eL.currency,
                    sku_id: eO
                }),
                t
            );
        });
    }, [eI, eO, eZ, eL, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                q(K({}, eq), {
                    continue_session_initial_step: eg,
                    has_saved_payment_source: ex
                })
            );
        }),
        i.useEffect(() => {
            if ((null == eI && (null != eU && null != eg ? eT(eU) : eT(j)), null != ec)) ev(ec);
            else if (null != j) {
                var e;
                ev(null == (e = A.Z.get(j)) ? void 0 : e.skuId);
            }
        }, [eT, eI, ev, j, ec, eU, eg]));
    let eQ = i.useCallback(() => {
            let e = (0, w.MY)(eF) === w.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            C.default.track(
                F.rMx.PAYMENT_FLOW_SUCCEEDED,
                q(K({}, eq), {
                    is_custom_message_edited: eZ && e && null != eV ? eV !== H.intl.string(H.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eZ && e,
                    emoji_name: eZ && e && (null == eH ? void 0 : eH.id) == null ? (null == eH ? void 0 : eH.surrogates) : void 0,
                    sound_id: eZ && e ? (null == eY ? void 0 : eY.soundId) : void 0,
                    duration_ms: t - eR.startTime,
                    payment_source_type: null == eX ? void 0 : eX.type
                })
            );
            let { enabled: n } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eZ && null != eF && null != a && n && (0, O.n)(a) && (0, y.Ni)(eF.id);
        }, [eq, eH, eV, eF, eZ, eY, eR.startTime, eX, a]),
        eJ = i.useMemo(() => () => (null == B ? void 0 : B(eb === x.A.COMPLETED, eO)), [B, eb, eO]),
        e0 = (0, s.Z)(() => Date.now(), [ew]),
        e1 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === L.h8.CONFIRM && (eQ(), null == m || m(i), em)) return void eJ();
                (eA(e), null == eu || eu(e), eN(null), eS(null), e === L.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB)));
                let s = null != n ? n : ew;
                if (null === s || a)
                    return void C.default.track(
                        F.rMx.PAYMENT_FLOW_LOADED,
                        q(K({}, eq), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eg,
                            has_saved_payment_source: ex
                        })
                    );
                C.default.track(
                    F.rMx.PAYMENT_FLOW_STEP,
                    q(K({}, eq, r), {
                        from_step: s,
                        to_step: e === L.h8.ADD_PAYMENT_STEPS ? L.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e0,
                        flow_duration_ms: o - eR.startTime
                    })
                );
            },
            [eA, eu, eN, eS, ew, eg, eq, e0, eR.startTime, eQ, m, em, eJ, ex]
        );
    ((0, I.bp)(ew, eC, e1, ey), (0, L.dZ)(ew, eb, ey), (0, T.p)(ew, eP, e1), (0, E.Z)(eJ), (0, S.w)(eD, () => B(!1), eZ), (0, I.D6)(eC));
    let e2 = {
            initialPlanId: j,
            subscriptionTier: M,
            handleStepChange: e1,
            handleClose: eJ,
            analyticsData: eq,
            setAnalyticsData: e$,
            trialId: W,
            trialFooterMessageOverride: z,
            reviewWarningMessage: X,
            planGroup: J,
            openInvoiceId: ee,
            analyticsLocation: a,
            onSubscriptionConfirmation: et,
            renderPurchaseConfirmation: en,
            postSuccessGuild: er,
            followupSKUInfo: ei,
            referralTrialOfferId: el,
            skipConfirm: em,
            continueSessionToInitialStep: eg
        },
        e3 = (0, G.U)({
            renderHeader: ea,
            referralTrialOfferId: el,
            handleClose: eJ
        });
    return (0, r.jsx)(c.UkV, {
        className: Y.shaker,
        isShaking: ed && eb === x.A.PURCHASING,
        intensity: $,
        children: (0, r.jsx)(c.Y0X, {
            'data-migration-pending': !0,
            className: o()(Y.root, eG, { [Y.withHeader]: null != e3 }),
            transitionState: N,
            hideShadow: ep,
            returnRef: eh,
            size: eW,
            parentComponent: 'PaymentModal',
            children: (0, r.jsx)(
                Z.ZP,
                K(
                    {
                        header: e3,
                        isLargeModal: ef || (null == eB ? void 0 : eB.isLargeModal),
                        isDynamicModal: e_ || (null == eB ? void 0 : eB.isDynamicModal)
                    },
                    e2
                )
            )
        })
    });
}
function J(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: o, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: b, defaultPlanId: y, startedPaymentFlowWithPaymentSourcesRef: O } = (0, D.JL)(),
        { isGift: v } = (0, P.wD)(),
        I = O.current,
        T = (0, M.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: o
        }),
        [S, A] = i.useState(!0),
        C = (0, l.e7)([N.Z], () => N.Z.applicationIdsFetched.has(V.CL));
    return (i.useEffect(() => {
        A(!_ || !h || g);
    }, [g, h, _]),
    (0, p.Z)(
        'Payment Modal',
        S,
        5,
        {
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g
        },
        { tags: { app_context: X } }
    ),
    i.useEffect(() => {
        if ((C || (0, d.yD)(V.CL), S || f)) return;
        let e = (0, j.Kp)({
            isTrial: T,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I
        });
        null != c
            ? a(L.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? a(L.h8.REVIEW)
              : e
                ? (b((0, j.nA)(E, u, y)), a(L.h8.REVIEW))
                : null != t
                  ? a(L.h8.PLAN_SELECT)
                  : a(L.h8.SKU_SELECT);
    }, [c, u, f, C, n, S, a, t, E, b, T, y, v, I]),
    S)
        ? (0, r.jsx)(B.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
Q.CURRENT_VERSION = 'v1';
