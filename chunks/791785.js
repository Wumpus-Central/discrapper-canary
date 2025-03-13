n.d(t, {
    I: () => ee,
    PaymentModal: () => $
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
    v = n(522558),
    b = n(522489),
    y = n(795448),
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
    B = n(928886),
    V = n(456251),
    F = n(614277),
    Z = n(981631),
    H = n(474936),
    W = n(388032),
    Y = n(210191);
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
function Q(e, t) {
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
let X = 2,
    J = 'billing';
function $(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: o, analyticsSourceLocation: l, analyticsSubscriptionType: d = Z.NYc.PREMIUM, onComplete: p, transitionState: m, initialPlanId: b, subscriptionTier: R, onClose: U, trialId: G, trialFooterMessageOverride: V, reviewWarningMessage: K, planGroup: q = H.Y1, openInvoiceId: J, onSubscriptionConfirmation: $, renderPurchaseConfirmation: ee, postSuccessGuild: et, followupSKUInfo: en, renderHeader: er, applicationId: ei, guildId: eo, referralTrialOfferId: ea, skuId: es, onStepChange: el, shakeWhilePurchasing: ec = !1, isLargeModal: eu = !1, isDynamicModal: ed = !1, hideShadow: ef = !1, returnRef: e_, skipConfirm: ep = !1, continueSessionToInitialStep: eh } = e,
        { activitySessionId: em, purchaseState: eg, setPurchaseState: eE, selectedSkuId: ev, setSelectedSkuId: eb, selectedPlan: ey, setSelectedPlanId: eO, setSelectedPlanNotification: eI, setStep: eS, setPurchaseError: eT, paymentAuthenticationState: eN, step: eA, contextMetadata: eC, purchaseTokenAuthState: eR, activeSubscription: eP, priceOptions: ew, hasPaymentSources: eD, paymentSourceId: eL, paymentSources: ex, purchaseType: eM, defaultPlanId: ek } = (0, x.JL)(),
        ej = (0, j.Z)(),
        eU = c.CgR.SMALL;
    eu || (null == ej ? void 0 : ej.isLargeModal) ? (eU = c.CgR.LARGE) : (eA === M.h8.ADD_PAYMENT_STEPS || ed || (null == ej ? void 0 : ej.isDynamicModal)) && (eU = c.CgR.DYNAMIC);
    let { isGift: eG, giftRecipient: eB, customGiftMessage: eV, emojiConfetti: eF, soundEffect: eZ } = (0, L.wD)(),
        eH = (0, I.Z)({ location: 'Payment Modal' }),
        eW = (0, S.Ng)(),
        eY = null != R && !eG && (0, S.Wp)(eW, R),
        [eK, ez] = i.useState({
            load_id: eC.loadId,
            payment_type: Z.Zuq[eM],
            location: null != n ? n : o,
            source: l,
            subscription_type: d,
            subscription_plan_id: null == ey ? void 0 : ey.id,
            is_gift: eG,
            eligible_for_trial: null != G,
            location_stack: t,
            sku_id: es,
            application_id: ei,
            guild_id: eo,
            payment_modal_version: 'v1',
            activity_session_id: em,
            eligible_for_discount: eY
        }),
        eq = null != eL ? ex[eL] : null;
    i.useEffect(() => {
        ez((e) => {
            let t = null != ey ? (0, D.aS)(ey.id, !1, eG, ew) : void 0;
            return Q(z({}, e), {
                subscription_plan_id: null == ey ? void 0 : ey.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ey ? void 0 : ey.price,
                currency: ew.currency,
                sku_id: ev
            });
        });
    }, [ey, ev, eG, ew]),
        (0, h.ZP)(() => {
            (0, g.U)(
                Q(z({}, eK), {
                    continue_session_initial_step: eh,
                    has_saved_payment_source: eD
                })
            );
        }),
        i.useEffect(() => {
            if ((null != ek && null != eh ? eO(ek) : eO(b), null != es)) eb(es);
            else if (null != b) {
                var e;
                eb(null === (e = C.Z.get(b)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [eO, eb, b, es, ek, eh]);
    let eQ = i.useCallback(() => {
            let e = (0, w.MY)(eB) === w.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            P.default.track(
                Z.rMx.PAYMENT_FLOW_SUCCEEDED,
                Q(z({}, eK), {
                    is_custom_message_edited: eG && e && null != eV ? eV !== W.NW.string(W.t.ZkOo1d) : void 0,
                    is_custom_emoji_sound_available: eG && e,
                    emoji_name: eG && e && (null == eF ? void 0 : eF.id) == null ? (null == eF ? void 0 : eF.surrogates) : void 0,
                    sound_id: eG && e ? (null == eZ ? void 0 : eZ.soundId) : void 0,
                    duration_ms: t - eC.startTime,
                    payment_source_type: null == eq ? void 0 : eq.type
                })
            );
            let { enabled: r } = v.w.getCurrentConfig({ location: 'PaymentModal emitPaymentFlowSuccess' }, { autoTrackExposure: !1 });
            eG && null != eB && null != n && r && (0, O.n)(n) && (0, y.Ni)(eB.id);
        }, [eK, eF, eV, eB, eG, eZ, eC.startTime, eq, n]),
        eX = i.useMemo(() => () => (null == U ? void 0 : U(eg === k.A.COMPLETED, ev)), [U, eg, ev]),
        eJ = (0, s.Z)(() => Date.now(), [eA]),
        e$ = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: r, fulfillment: i, emitPaymentFlowLoadedEvent: o } = t,
                    a = Date.now();
                if (e === M.h8.CONFIRM && (eQ(), null == p || p(i), ep)) {
                    eX();
                    return;
                }
                eS(e), null == el || el(e), eT(null), eI(null), e === M.h8.ADD_PAYMENT_STEPS && (u.Z.wait(f.fw), u.Z.wait(_.pB));
                let s = null != n ? n : eA;
                if (null === s || o) {
                    P.default.track(
                        Z.rMx.PAYMENT_FLOW_LOADED,
                        Q(z({}, eK), {
                            initial_step: null != s ? s : e,
                            continue_session_initial_step: eh,
                            has_saved_payment_source: eD
                        })
                    );
                    return;
                }
                P.default.track(
                    Z.rMx.PAYMENT_FLOW_STEP,
                    Q(z({}, eK, r), {
                        from_step: s,
                        to_step: e === M.h8.ADD_PAYMENT_STEPS ? M.h8.PAYMENT_TYPE : e,
                        step_duration_ms: a - eJ,
                        flow_duration_ms: a - eC.startTime
                    })
                );
            },
            [eS, el, eT, eI, eA, eh, eK, eJ, eC.startTime, eQ, p, ep, eX, eD]
        );
    (0, T.bp)(eA, eN, e$, eE), (0, M.dZ)(eA, eg, eE), (0, N.p)(eA, eR, e$), (0, E.Z)(eX), (0, A.w)(eP, () => U(!1), eG), (0, T.D6)(eN);
    let e0 = {
            initialPlanId: b,
            subscriptionTier: R,
            handleStepChange: e$,
            handleClose: eX,
            analyticsData: eK,
            setAnalyticsData: ez,
            trialId: G,
            trialFooterMessageOverride: V,
            reviewWarningMessage: K,
            planGroup: q,
            openInvoiceId: J,
            analyticsLocation: n,
            onSubscriptionConfirmation: $,
            renderPurchaseConfirmation: ee,
            postSuccessGuild: et,
            followupSKUInfo: en,
            referralTrialOfferId: ea,
            skipConfirm: ep,
            continueSessionToInitialStep: eh
        },
        e1 = (0, B.U)({
            renderHeader: er,
            referralTrialOfferId: ea,
            handleClose: eX
        });
    return (0, r.jsx)(c.UkV, {
        className: a()(Y.shaker, { [Y.halloweenModalHeight]: eH }),
        isShaking: ec && eg === k.A.PURCHASING,
        intensity: X,
        children: (0, r.jsx)(c.Y0X, {
            className: a()(Y.root, {
                [Y.withHeader]: null != e1,
                [Y.halloweenModalHeight]: eH
            }),
            transitionState: m,
            hideShadow: ef,
            returnRef: e_,
            size: eU,
            children: (0, r.jsx)(
                F.ZP,
                z(
                    {
                        header: e1,
                        isLargeModal: eu || (null == ej ? void 0 : ej.isLargeModal),
                        isDynamicModal: ed || (null == ej ? void 0 : ej.isDynamicModal)
                    },
                    e0
                )
            )
        })
    });
}
function ee(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: o, referralTrialOfferId: a, handleClose: s, continueSessionToInitialStep: c } = e,
        { activeSubscription: u, blockedPayments: f, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: h, currencyLoading: g, selectedSkuId: E, setSelectedPlanId: v, defaultPlanId: y, startedPaymentFlowWithPaymentSourcesRef: O, repeatPurchase: I } = (0, x.JL)(),
        { isGift: S } = (0, L.wD)(),
        T = O.current,
        N = (0, G.Z)({
            isGift: S,
            skuId: E,
            referralTrialOfferId: a
        }),
        { redirectToPlanSelectStep: A } = b.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [C, P] = i.useState(!0),
        w = (0, l.e7)([R.Z], () => R.Z.applicationIdsFetched.has(H.CL));
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
        { tags: { app_context: J } }
    ),
    i.useEffect(() => {
        if ((w || (0, d.yD)(H.CL), C || f)) return;
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
                ? (v((0, U.nA)(E, u, y)), o(M.h8.REVIEW))
                : null != t
                  ? o(M.h8.PLAN_SELECT)
                  : o(M.h8.SKU_SELECT);
    }, [c, u, f, w, n, C, o, t, E, v, N, y, S, T, I, A]),
    C)
        ? (0, r.jsx)(V.Z, {})
        : f
          ? (0, r.jsx)(m.Vq, { onClose: s })
          : null;
}
