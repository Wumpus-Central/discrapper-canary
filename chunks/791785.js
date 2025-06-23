n.d(t, {
    I: () => ee,
    PaymentModal: () => $
}),
    n(388685);
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
    v = n(857039),
    I = n(104494),
    T = n(176919),
    S = n(711007),
    A = n(459965),
    N = n(509545),
    C = n(580130),
    R = n(626135),
    P = n(669079),
    w = n(74538),
    D = n(987209),
    L = n(563132),
    x = n(409813),
    k = n(45572),
    M = n(784707),
    j = n(614223),
    U = n(48175),
    G = n(435020),
    B = n(928886),
    V = n(456251),
    F = n(614277),
    Z = n(981631),
    H = n(474936),
    Y = n(388032),
    W = n(179742);
function K(e, t, n) {
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
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    J = 'billing';
function $(e) {
    let { analyticsDataOverride: t, analyticsLocations: n, analyticsLocation: a, analyticsObject: l, analyticsSourceLocation: d, analyticsSubscriptionType: p = Z.NYc.PREMIUM, onComplete: m, transitionState: C, initialPlanId: j, subscriptionTier: U, onClose: V, trialId: K, trialFooterMessageOverride: q, reviewWarningMessage: J, planGroup: ee = H.Y1, openInvoiceId: et, onSubscriptionConfirmation: en, renderPurchaseConfirmation: er, postSuccessGuild: ei, followupSKUInfo: ea, renderHeader: eo, applicationId: es, guildId: el, referralTrialOfferId: ec, skuId: eu, onStepChange: ed, shakeWhilePurchasing: ef = !1, isLargeModal: e_ = !1, isDynamicModal: ep = !1, hideShadow: eh = !1, returnRef: em, skipConfirm: eg = !1, continueSessionToInitialStep: eE } = e,
        { activitySessionId: eb, purchaseState: ey, setPurchaseState: eO, selectedSkuId: ev, setSelectedSkuId: eI, selectedPlan: eT, setSelectedPlanId: eS, setSelectedPlanNotification: eA, setStep: eN, setPurchaseError: eC, paymentAuthenticationState: eR, step: eP, contextMetadata: ew, purchaseTokenAuthState: eD, activeSubscription: eL, priceOptions: ex, hasPaymentSources: ek, paymentSourceId: eM, paymentSources: ej, purchaseType: eU, defaultPlanId: eG, premiumBrandRefreshBackgroundClassName: eB } = (0, L.JL)(),
        eV = (0, M.Z)(),
        eF = c.CgR.SMALL;
    e_ || (null == eV ? void 0 : eV.isLargeModal) ? (eF = c.CgR.LARGE) : (eP === x.h8.ADD_PAYMENT_STEPS || ep || (null == eV ? void 0 : eV.isDynamicModal)) && (eF = c.CgR.DYNAMIC);
    let { isGift: eZ, giftRecipient: eH, customGiftMessage: eY, emojiConfetti: eW, soundEffect: eK } = (0, D.wD)(),
        ez = (0, v.Z)({ location: 'Payment Modal' }),
        eq = (0, I.Ng)(),
        eX = null != U && !eZ && (0, I.Wp)(eq, U),
        [eQ, eJ] = i.useState(
            z(
                {
                    load_id: ew.loadId,
                    payment_type: Z.Zuq[eU],
                    location: null != a ? a : l,
                    source: d,
                    subscription_type: p,
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    is_gift: eZ,
                    eligible_for_trial: null != K,
                    location_stack: n,
                    sku_id: eu,
                    application_id: es,
                    guild_id: el,
                    payment_modal_version: $.CURRENT_VERSION,
                    activity_session_id: eb,
                    eligible_for_discount: eX
                },
                t
            )
        ),
        e$ = (0, G.m)(ej, eM);
    i.useEffect(() => {
        eJ((e) => {
            let n = null != eT ? (0, w.aS)(eT.id, !1, eZ, ex) : void 0;
            return z(
                X(z({}, e), {
                    subscription_plan_id: null == eT ? void 0 : eT.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == eT ? void 0 : eT.price,
                    currency: ex.currency,
                    sku_id: ev
                }),
                t
            );
        });
    }, [eT, ev, eZ, ex, t]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(z({}, eQ), {
                    continue_session_initial_step: eE,
                    has_saved_payment_source: ek
                })
            );
        }),
        i.useEffect(() => {
            if ((null != eG && null != eE ? eS(eG) : eS(j), null != eu)) eI(eu);
            else if (null != j) {
                var e;
                eI(null == (e = N.Z.get(j)) ? void 0 : e.skuId);
            }
        }, [eS, eI, j, eu, eG, eE]);
    let e0 = i.useCallback(() => {
            let e = (0, P.MY)(eH) === P.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            R.default.track(
                Z.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(z({}, eQ), {
                    is_custom_message_edited: eZ && e && null != eY ? eY !== Y.intl.string(Y.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eZ && e,
                    emoji_name: eZ && e && (null == eW ? void 0 : eW.id) == null ? (null == eW ? void 0 : eW.surrogates) : void 0,
                    sound_id: eZ && e ? (null == eK ? void 0 : eK.soundId) : void 0,
                    duration_ms: t - ew.startTime,
                    payment_source_type: null == e$ ? void 0 : e$.type
                })
            );
            let { enabled: n } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eZ && null != eH && null != a && n && (0, O.n)(a) && (0, y.Ni)(eH.id);
        }, [eQ, eW, eY, eH, eZ, eK, ew.startTime, e$, a]),
        e1 = i.useMemo(() => () => (null == V ? void 0 : V(ey === k.A.COMPLETED, ev)), [V, ey, ev]),
        e2 = (0, s.Z)(() => Date.now(), [eP]),
        e3 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: a } = t,
                    o = Date.now();
                if (e === x.h8.CONFIRM && (e0(), null == m || m(i), eg)) return void e1();
                eN(e), null == ed || ed(e), eC(null), eA(null), e === x.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eP;
                if (null === s || a)
                    return void R.default.track(
                        Z.rMx.PAYMENT_FLOW_LOADED,
                        X(z({}, eQ), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eE,
                            has_saved_payment_source: ek
                        })
                    );
                R.default.track(
                    Z.rMx.PAYMENT_FLOW_STEP,
                    X(z({}, eQ, r), {
                        from_step: s,
                        to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
                        step_duration_ms: o - e2,
                        flow_duration_ms: o - ew.startTime
                    })
                );
            },
            [eN, ed, eC, eA, eP, eE, eQ, e2, ew.startTime, e0, m, eg, e1, ek]
        );
    (0, T.bp)(eP, eR, e3, eO), (0, x.dZ)(eP, ey, eO), (0, S.p)(eP, eD, e3), (0, E.Z)(e1), (0, A.w)(eL, () => V(!1), eZ), (0, T.D6)(eR);
    let e4 = {
            initialPlanId: j,
            subscriptionTier: U,
            handleStepChange: e3,
            handleClose: e1,
            analyticsData: eQ,
            setAnalyticsData: eJ,
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
            skipConfirm: eg,
            continueSessionToInitialStep: eE
        },
        e5 = (0, B.U)({
            renderHeader: eo,
            referralTrialOfferId: ec,
            handleClose: e1
        });
    return (0, r.jsx)(c.UkV, {
        className: o()(W.shaker, { [W.halloweenModalHeight]: ez }),
        isShaking: ef && ey === k.A.PURCHASING,
        intensity: Q,
        children: (0, r.jsx)(c.Y0X, {
            className: o()(W.root, eB, {
                [W.withHeader]: null != e5,
                [W.halloweenModalHeight]: ez
            }),
            transitionState: C,
            hideShadow: eh,
            returnRef: em,
            size: eF,
            parentComponent: 'PaymentModal',
            children: (0, r.jsx)(
                F.ZP,
                z(
                    {
                        header: e5,
                        isLargeModal: e_ || (null == eV ? void 0 : eV.isLargeModal),
                        isDynamicModal: ep || (null == eV ? void 0 : eV.isDynamicModal)
                    },
                    e4
                )
            )
        })
    });
}
function ee(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: a, referralTrialOfferId: o, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: b, defaultPlanId: y, startedPaymentFlowWithPaymentSourcesRef: O } = (0, L.JL)(),
        { isGift: v } = (0, D.wD)(),
        I = O.current,
        T = (0, U.Z)({
            isGift: v,
            skuId: E,
            referralTrialOfferId: o
        }),
        [S, A] = i.useState(!0),
        N = (0, l.e7)([C.Z], () => C.Z.applicationIdsFetched.has(H.CL));
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
        { tags: { app_context: J } }
    ),
    i.useEffect(() => {
        if ((N || (0, d.yD)(H.CL), S || f)) return;
        let e = (0, j.Kp)({
            isTrial: T,
            isGift: v,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: I
        });
        null != c
            ? a(x.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? a(x.h8.REVIEW)
              : e
                ? (b((0, j.nA)(E, u, y)), a(x.h8.REVIEW))
                : null != t
                  ? a(x.h8.PLAN_SELECT)
                  : a(x.h8.SKU_SELECT);
    }, [c, u, f, N, n, S, a, t, E, b, T, y, v, I]),
    S)
        ? (0, r.jsx)(V.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
$.CURRENT_VERSION = 'v1';
