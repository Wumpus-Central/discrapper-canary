n.d(t, { q: () => es });
var i = n(627968),
    l = n(64700),
    u = n(976634),
    s = n(702841),
    o = n(568602),
    r = n(228366),
    a = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(234320),
    p = n(145659),
    m = n(31823),
    S = n(426398),
    E = n(211083),
    f = n(655857),
    A = n(666646),
    T = n(558620),
    I = n(427675),
    h = n(480642),
    P = n(211159),
    C = n(357669),
    k = n(319437),
    M = n(70730),
    y = n(45787),
    g = n(51501),
    D = n(422936),
    v = n(862990),
    b = n(410516),
    N = n(251913),
    w = n(166532),
    O = n(71319),
    U = n(344159),
    R = n(97352),
    x = n(174459),
    F = n(45938),
    H = n(428262),
    G = n(937008),
    Y = n(566980),
    j = n(615310),
    L = n(216641),
    W = n(120700),
    B = n(364995),
    z = n(463376),
    K = n(584160),
    V = n(906234),
    J = n(375708);
function Z(e) {
    let { headerBadgeConfig: t } = e,
        { selectedSkuId: n, paymentSourceId: u } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        s = (0, I.S3)(),
        o = (0, j.bB)(),
        { checkoutPaymentSources: r, storeCountry: a } = (0, B.t)(),
        d = l.useMemo(() => {
            if (null == u) return null;
            let e = r.find((e) => e.id === u);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [r, u]),
        c = l.useMemo(
            () =>
                (0, K.uO)({
                    step: o ?? void 0,
                    skuId: n ?? (null != s ? s.id : null),
                    storeCountryFromCheckoutContext: a,
                    relocationCountry: d,
                    ...t,
                }),
            [o, s, n, a, d, t],
        );
    return (0, i.jsx)(h.s3, { ...c });
}
function q() {
    let {
            premiumDiscountPercent: e,
            selectedPlanId: t,
            isPremiumDiscountAppliedToCheckoutInvoice: n,
        } = (0, P.t4)((e) => ({
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: u, isEligibleForTrial: s, isEligibleForDiscount: o } = (0, z.i)(),
        r = (0, V.G)(t ?? "") && !s,
        a = l.useMemo(() => {
            let t, i;
            return (
                u
                    ? (i = "beta")
                    : s
                      ? (i = "trial")
                      : (o || r) &&
                        (n && null != e && (t = J.intl.formatToPlainString(J.t.iiLbvu, { percent: e })), (i = "promo")),
                null != t ? { customHeaderBadgeText: t } : { headerBadgePreset: i }
            );
        }, [u, s, o, r, e, n]);
    return (0, i.jsx)(Z, { headerBadgeConfig: a });
}
let Q = { [W.C.PREMIUM_CHECKOUT]: () => (0, i.jsx)(q, {}) };
function X(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, j.bB)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function $(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: u } = e,
        s = (0, j.bB)(),
        o = (0, P.t4)((e) => e.unifiedCheckoutFlow),
        { shouldRenderCoreUnifiedHeader: r, renderCoreUnifiedHeader: a } = l.useMemo(
            () => ({
                shouldRenderCoreUnifiedHeader: (function (e) {
                    let { step: t, skipUnifiedHeaderForSteps: n } = e;
                    if (null == t) return !1;
                    if (t === w.pn.REVIEW || t === w.pn.ADD_PAYMENT_STEPS) return !0;
                    let i = null != n && n.includes(t);
                    return K.MU.includes(t) && !i;
                })({ step: s, skipUnifiedHeaderForSteps: u }),
                renderCoreUnifiedHeader: null != o && o in Q ? Q[o] : null,
            }),
            [s, u, o],
        );
    return l.useMemo(
        () => (r ? (null != a ? a() : (0, i.jsx)(Z, {})) : (0, i.jsx)(X, { renderHeader: t, handleClose: n })),
        [r, a, t, n],
    );
}
var ee = n(482132);
n(322076);
var et = n(652215),
    en = n(788868),
    ei = n(359379);
let el = { [w.pn.GIFT_CUSTOMIZATION]: "xl", [w.pn.REVIEW]: "md", [w.pn.ADD_PAYMENT_STEPS]: "md" };
function eu(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: l,
            isGift: u,
            giftRecipient: s,
            manaModalSize: o,
            modalSizeGetter: r,
            returnRef: a,
            children: d,
        } = e,
        c = (0, v.FY)({ isGift: u }),
        _ =
            null != r
                ? r({ canCurrentlyPurchasePremiumGroup: c, isGift: u, giftRecipient: s })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in el ? el[e] : i;
                  })(t, { manaModalSizeFromProps: o });
    return (0, i.jsx)(h.Jg, {
        transitionState: n,
        size: _,
        returnRef: a,
        "aria-label": J.intl.string(J.t.q9EGps),
        onClose: async () => {
            await l();
        },
        children: d,
    });
}
function es(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: h,
            analyticsObject: v,
            analyticsSourceLocation: W,
            analyticsSubscriptionType: B = et.rzx.PREMIUM,
            onComplete: z,
            transitionState: K,
            initialPlanId: V,
            subscriptionTier: Z,
            onClose: q,
            trialId: Q,
            reviewWarningMessage: X,
            planGroup: el = en.LE,
            openInvoiceId: es,
            onSubscriptionConfirmation: eo,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ea,
            followupSKUInfo: ed,
            renderHeader: ec,
            skipUnifiedHeaderForSteps: e_,
            disableUnsupportedExternalSubscriptionHandler: ep = !1,
            applicationId: em,
            guildId: eS,
            skuId: eE,
            onStepChange: ef,
            shakeWhilePurchasing: eA = !1,
            isLargeModal: eT = !1,
            isMediumModal: eI = !1,
            returnRef: eh,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: eC,
            paymentModalVersion: ek = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: ey } = (0, S.jm)(),
        {
            selectedSkuId: eg,
            setSelectedSkuId: eD,
            setSelectedPlanId: ev,
            purchaseState: eb,
            setPurchaseState: eN,
            contextMetadata: ew,
            paymentSourceId: eO,
            setPurchaseError: eU,
            priceOptions: eR,
            activeSubscription: ex,
            purchaseType: eF,
            defaultPlanId: eH,
            customCheckoutFlow: eG,
            unifiedCheckoutFlow: eY,
        } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            purchaseType: e.purchaseType,
            defaultPlanId: e.defaultPlanId,
            customCheckoutFlow: e.customCheckoutFlow,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        { displayCurrency: ej } = (0, f.Jn)(),
        { activitySessionId: eL } = (0, m.V)(),
        { paymentAuthenticationState: eW } = (0, E.o)(),
        eB = (0, s.bG)([O.A], () => O.A.purchaseTokenAuthState),
        ez = (0, A.sw)(),
        eK = (0, T.A)(),
        eV = (0, I.S3)(),
        { isGift: eJ, giftRecipient: eZ, customGiftMessage: eq, emojiConfetti: eQ, soundEffect: eX } = (0, G.Pv)(),
        e$ = (0, j.Z8)(),
        e0 = (0, j.bB)(),
        e1 = l.useMemo(() => {
            if (null != e$) return e$.options;
        }, [e$]),
        e6 = (0, j.l)(),
        e3 = "sm";
    eT ? (e3 = "xl") : (eI || e0 === w.pn.ADD_PAYMENT_STEPS) && (e3 = "md");
    let e2 = null != e1 ? e1.modalSizeGetter : void 0,
        e5 = (0, D.O)(),
        e4 = null != Z && !eJ && (0, b.U9)(e5, Z),
        [e8, e9] = l.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: et.frM[eF],
            location: h ?? v,
            source: W,
            subscription_type: B,
            subscription_plan_id: eK?.id ?? V,
            is_gift: eJ,
            eligible_for_trial: null != Q,
            location_stack: n,
            sku_id: eE,
            application_id: em,
            guild_id: eS,
            payment_modal_version: ek,
            activity_session_id: eL,
            eligible_for_discount: e4,
            sku_product_line: eV?.productLine,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            ...t,
        }),
        e7 = (0, L.W)(eM, eO),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, _.h)(),
        tn = null != ez ? ez.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e9((e) => {
            let n = null != eK ? (0, H.y8)(eK.id, !1, eJ, { paymentSourceId: eR.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: ej,
                sku_id: eg,
                sku_product_line: eV?.productLine,
                ...t,
            };
        });
    }, [eK, eg, eJ, eR, ej, t, eV?.productLine]),
        (0, c.Ay)(() => {
            (0, C.b)({
                ...e8,
                continue_session_initial_step: eC,
                custom_checkout_flow: eG,
                has_saved_payment_source: ey,
                discount_id: null != e5 ? e5.discountId : tn,
            });
        }),
        l.useEffect(() => {
            null == eK && (null != eH && null != eC ? ev(eH) : ev(V)),
                null != eE ? eD(eE) : null != V && eD(R.A.get(V)?.skuId);
        }, [ev, eK, eD, V, eE, eH, eC]);
    let ti = l.useCallback(() => {
            let e = (0, F.lo)(eZ) === F.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(et.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e8,
                is_custom_message_edited: eJ && e && null != eq ? eq !== J.intl.string(J.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eJ && e,
                emoji_name: eJ && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: eJ && e ? eX?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: e7?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = M.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" }),
                i = null != h ? (0, g.NE)(h) : null;
            eJ && null != eZ && n && null != i && (0, y.Yd)(eZ.id, i);
        }, [e8, eQ, eq, eZ, eJ, eX, ew.startTime, e7, te, tt, h]),
        tl = l.useMemo(() => () => q?.(eb === Y.h.COMPLETED, eg), [q, eb, eg]),
        tu = (0, u.A)(() => Date.now(), [e0]),
        ts = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: u } = t,
                    s = Date.now();
                if (e === w.pn.CONFIRM && (ti(), z?.(l), eP)) return void tl();
                e6(e), ef?.(e), eU(null), e === w.pn.ADD_PAYMENT_STEPS && (r.h.wait(a.ET), r.h.wait(d.T3));
                let o = null != n ? n : e0;
                null === o || u
                    ? x.default.track(et.HAw.PAYMENT_FLOW_LOADED, {
                          ...e8,
                          initial_step: o ?? e,
                          continue_session_initial_step: eC,
                          has_saved_payment_source: ey,
                      })
                    : x.default.track(et.HAw.PAYMENT_FLOW_STEP, {
                          ...e8,
                          ...i,
                          from_step: o,
                          to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - tu,
                          flow_duration_ms: s - ew.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e6, ef, eU, e0, eC, e8, tu, ew.startTime, ti, z, eP, tl, ey, te, tt],
        );
    return (
        (0, N.b)(e0, eW, ts, eN),
        l.useEffect(() => {
            null != e0 && e0 !== w.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === O.C.PENDING
                ? ts(w.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e0 === w.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === O.C.SUCCESS && ts(w.pn.REVIEW);
        }, [e0, eB, ts]),
        (0, k.A)(tl),
        (0, U.s)(ex, () => q(!1), eJ, !ep),
        (0, N.QR)(eW),
        (0, i.jsx)(o.b, {
            className: ei.Xn,
            isShaking: eA && eb === Y.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(eu, {
                step: e0,
                transitionState: K,
                isGift: eJ,
                giftRecipient: eZ,
                returnRef: eh,
                manaModalSize: e3,
                modalSizeGetter: e2,
                handleClose: tl,
                children: (0, i.jsx)(ee.Ay, {
                    header: (0, i.jsx)($, { handleClose: tl, skipUnifiedHeaderForSteps: e_, renderHeader: ec }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: Z,
                        handleStepChange: ts,
                        handleClose: tl,
                        analyticsData: e8,
                        setAnalyticsData: e9,
                        trialId: Q,
                        reviewWarningMessage: X,
                        planGroup: el,
                        openInvoiceId: es,
                        analyticsLocation: h,
                        onSubscriptionConfirmation: eo,
                        renderPurchaseConfirmation: er,
                        postSuccessGuild: ea,
                        followupSKUInfo: ed,
                        skipConfirm: eP,
                        continueSessionToInitialStep: eC,
                    },
                }),
            }),
        })
    );
}
