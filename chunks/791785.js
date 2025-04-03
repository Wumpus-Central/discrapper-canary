n.d(t, {
    I: () => et,
    PaymentModal: () => ee
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(252759),
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
    y = n(522489),
    v = n(795448),
    O = n(317271),
    I = n(857039),
    S = n(104494),
    T = n(176919),
    N = n(711007),
    A = n(459965),
    C = n(509545),
    R = n(580130),
    P = n(626135),
    w = n(669079),
    D = n(74538),
    L = n(987209),
    x = n(563132),
    M = n(409813),
    k = n(45572),
    j = n(784707),
    U = n(614223),
    G = n(48175),
    B = n(435020),
    F = n(928886),
    V = n(456251),
    Z = n(614277),
    H = n(981631),
    W = n(474936),
    Y = n(388032),
    K = n(179742);
function z(e, t, n) {
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
function q(e) {
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
    $ = 'billing';
function ee(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: o, analyticsSourceLocation: l, analyticsSubscriptionType: d = H.NYc.PREMIUM, onComplete: p, transitionState: m, initialPlanId: y, subscriptionTier: R, onClose: U, trialId: G, trialFooterMessageOverride: V, reviewWarningMessage: z, planGroup: Q = W.Y1, openInvoiceId: $, onSubscriptionConfirmation: ee, renderPurchaseConfirmation: et, postSuccessGuild: en, followupSKUInfo: er, renderHeader: ei, applicationId: eo, guildId: ea, referralTrialOfferId: es, skuId: el, onStepChange: ec, shakeWhilePurchasing: eu = !1, isLargeModal: ed = !1, isDynamicModal: ef = !1, hideShadow: e_ = !1, returnRef: ep, skipConfirm: eh = !1, continueSessionToInitialStep: em } = e,
        { activitySessionId: eg, purchaseState: eE, setPurchaseState: eb, selectedSkuId: ey, setSelectedSkuId: ev, selectedPlan: eO, setSelectedPlanId: eI, setSelectedPlanNotification: eS, setStep: eT, setPurchaseError: eN, paymentAuthenticationState: eA, step: eC, contextMetadata: eR, purchaseTokenAuthState: eP, activeSubscription: ew, priceOptions: eD, hasPaymentSources: eL, paymentSourceId: ex, paymentSources: eM, purchaseType: ek, defaultPlanId: ej } = (0, x.JL)(),
        eU = (0, j.Z)(),
        eG = c.CgR.SMALL;
    ed || (null == eU ? void 0 : eU.isLargeModal) ? (eG = c.CgR.LARGE) : (eC === M.h8.ADD_PAYMENT_STEPS || ef || (null == eU ? void 0 : eU.isDynamicModal)) && (eG = c.CgR.DYNAMIC);
    let { isGift: eB, giftRecipient: eF, customGiftMessage: eV, emojiConfetti: eZ, soundEffect: eH } = (0, L.wD)(),
        eW = (0, I.Z)({ location: 'Payment Modal' }),
        eY = (0, S.Ng)(),
        eK = null != R && !eB && (0, S.Wp)(eY, R),
        [ez, eq] = i.useState({
            load_id: eR.loadId,
            payment_type: H.Zuq[ek],
            location: null != n ? n : o,
            source: l,
            subscription_type: d,
            subscription_plan_id: null == eO ? void 0 : eO.id,
            is_gift: eB,
            eligible_for_trial: null != G,
            location_stack: t,
            sku_id: el,
            application_id: eo,
            guild_id: ea,
            payment_modal_version: 'v1',
            activity_session_id: eg,
            eligible_for_discount: eK
        }),
        eQ = (0, B.m)(eM, ex);
    i.useEffect(() => {
        eq((e) => {
            let t = null != eO ? (0, D.aS)(eO.id, !1, eB, eD) : void 0;
            return X(q({}, e), {
                subscription_plan_id: null == eO ? void 0 : eO.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == eO ? void 0 : eO.price,
                currency: eD.currency,
                sku_id: ey
            });
        });
    }, [eO, ey, eB, eD]),
        (0, h.ZP)(() => {
            (0, g.U)(
                X(q({}, ez), {
                    continue_session_initial_step: em,
                    has_saved_payment_source: eL
                })
            );
        }),
        i.useEffect(() => {
            if ((null != ej && null != em ? eI(ej) : eI(y), null != el)) ev(el);
            else if (null != y) {
                var e;
                ev(null == (e = C.Z.get(y)) ? void 0 : e.skuId);
            }
        }, [eI, ev, y, el, ej, em]);
    let eX = i.useCallback(() => {
            let e = (0, w.MY)(eF) === w.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                H.rMx.PAYMENT_FLOW_SUCCEEDED,
                X(q({}, ez), {
                    is_custom_message_edited: eB && e && null != eV ? eV !== Y.NW.string(Y.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eB && e,
                    emoji_name: eB && e && (null == eZ ? void 0 : eZ.id) == null ? (null == eZ ? void 0 : eZ.surrogates) : void 0,
                    sound_id: eB && e ? (null == eH ? void 0 : eH.soundId) : void 0,
                    duration_ms: t - eR.startTime,
                    payment_source_type: null == eQ ? void 0 : eQ.type
                })
            );
            let { enabled: r } = b.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eB && null != eF && null != n && r && (0, O.n)(n) && (0, v.Ni)(eF.id);
        }, [ez, eZ, eV, eF, eB, eH, eR.startTime, eQ, n]),
        eJ = i.useMemo(() => () => (null == U ? void 0 : U(eE === k.A.COMPLETED, ey)), [U, eE, ey]),
        e$ = (0, s.Z)(() => Date.now(), [eC]),
        e0 = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: o } = t,
                    a = Date.now();
                if (e === M.h8.CONFIRM && (eX(), null == p || p(i), eh)) return void eJ();
                eT(e), null == ec || ec(e), eN(null), eS(null), e === M.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eC;
                if (null === s || o)
                    return void P.default.track(
                        H.rMx.PAYMENT_FLOW_LOADED,
                        X(q({}, ez), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: em,
                            has_saved_payment_source: eL
                        })
                    );
                P.default.track(
                    H.rMx.PAYMENT_FLOW_STEP,
                    X(q({}, ez, r), {
                        from_step: s,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: a - e$,
                        flow_duration_ms: a - eR.startTime
                    })
                );
            },
            [eT, ec, eN, eS, eC, em, ez, e$, eR.startTime, eX, p, eh, eJ, eL]
        );
    (0, T.bp)(eC, eA, e0, eb), (0, M.dZ)(eC, eE, eb), (0, N.p)(eC, eP, e0), (0, E.Z)(eJ), (0, A.w)(ew, () => U(!1), eB), (0, T.D6)(eA);
    let e1 = {
            initialPlanId: y,
            subscriptionTier: R,
            handleStepChange: e0,
            handleClose: eJ,
            analyticsData: ez,
            setAnalyticsData: eq,
            trialId: G,
            trialFooterMessageOverride: V,
            reviewWarningMessage: z,
            planGroup: Q,
            openInvoiceId: $,
            analyticsLocation: n,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: er,
            referralTrialOfferId: es,
            skipConfirm: eh,
            continueSessionToInitialStep: em
        },
        e2 = (0, F.U)({
            renderHeader: ei,
            referralTrialOfferId: es,
            handleClose: eJ
        });
    return (0, r.jsx)(c.UkV, {
        className: a()(K.shaker, { [K.halloweenModalHeight]: eW }),
        isShaking: eu && eE === k.A.PURCHASING,
        intensity: J,
        children: (0, r.jsx)(c.Y0X, {
            className: a()(K.root, {
                [K.withHeader]: null != e2,
                [K.halloweenModalHeight]: eW
            }),
            transitionState: m,
            hideShadow: e_,
            returnRef: ep,
            size: eG,
            children: (0, r.jsx)(
                Z.ZP,
                q(
                    {
                        header: e2,
                        isLargeModal: ed || (null == eU ? void 0 : eU.isLargeModal),
                        isDynamicModal: ef || (null == eU ? void 0 : eU.isDynamicModal)
                    },
                    e1
                )
            )
        })
    });
}
function et(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: o, referralTrialOfferId: a, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: b, defaultPlanId: v, startedPaymentFlowWithPaymentSourcesRef: O, repeatPurchase: I } = (0, x.JL)(),
        { isGift: S } = (0, L.wD)(),
        T = O.current,
        N = (0, G.Z)({
            isGift: S,
            skuId: E,
            referralTrialOfferId: a
        }),
        { redirectToPlanSelectStep: A } = y.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [C, P] = i.useState(!0),
        w = (0, l.e7)([R.Z], () => R.Z.applicationIdsFetched.has(W.CL));
    return (i.useEffect(() => {
        P(!_ || !h || g);
    }, [g, h, _]),
    (0, p.Z)(
        'Payment Modal',
        C,
        5,
        {
            hasFetchedSubscriptions: _,
            hasFetchedSubscriptionPlans: h,
            currencyLoading: g
        },
        { tags: { app_context: $ } }
    ),
    i.useEffect(() => {
        if ((w || (0, d.yD)(W.CL), C || f)) return;
        let e = (0, U.Kp)({
            isTrial: N,
            isGift: S,
            selectedSkuId: E,
            startedPaymentFlowWithPaymentSources: T
        });
        null != c
            ? o(M.h8.ADD_PAYMENT_STEPS, {
                  emitPaymentFlowLoadedEvent: !0,
                  trackedFromStep: c
              })
            : null != n
              ? o(I && A ? M.h8.PLAN_SELECT : M.h8.REVIEW)
              : e
                ? (b((0, U.nA)(E, u, v)), o(M.h8.REVIEW))
                : null != t
                  ? o(M.h8.PLAN_SELECT)
                  : o(M.h8.SKU_SELECT);
    }, [c, u, f, w, n, C, o, t, E, b, N, v, S, T, I, A]),
    C)
        ? (0, r.jsx)(V.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
