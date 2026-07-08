n.d(t, { q: () => eo });
var i = n(627968),
    l = n(64700),
    u = n(976634),
    s = n(702841),
    o = n(568602),
    r = n(228366),
    a = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(11939),
    p = n(145659),
    m = n(31823),
    S = n(426398),
    f = n(211083),
    E = n(655857),
    I = n(666646),
    h = n(558620),
    A = n(427675),
    T = n(169797),
    P = n(6938),
    C = n(357669),
    k = n(319437),
    M = n(70730),
    y = n(45787),
    D = n(51501),
    b = n(422936),
    v = n(862990),
    g = n(410516),
    N = n(251913),
    O = n(166532),
    U = n(71319),
    w = n(344159),
    x = n(97352),
    H = n(174459),
    R = n(45938),
    F = n(428262),
    G = n(937008),
    j = n(566980),
    Y = n(615310),
    L = n(216641),
    W = n(120700),
    B = n(364995),
    z = n(463376),
    K = n(584160),
    V = n(35587),
    q = n(906234),
    J = n(375708);
function Z(e) {
    let { headerBadgeConfig: t } = e,
        { selectedSkuId: n, paymentSourceId: u } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
        })),
        s = (0, A.S3)(),
        o = (0, Y.bB)(),
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
    return (0, i.jsx)(T.s3, { ...c });
}
function Q() {
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
        r = (0, q.G)(t ?? "") && !s,
        a = (0, V.Sq)(),
        d = l.useMemo(() => {
            let t, i;
            return (
                u
                    ? (i = "beta")
                    : s
                      ? (i = "trial")
                      : (o || r || a) &&
                        (n && null != e && (t = J.intl.formatToPlainString(J.t.iiLbvu, { percent: e })), (i = "promo")),
                null != t ? { customHeaderBadgeText: t } : { headerBadgePreset: i }
            );
        }, [u, s, o, r, a, e, n]);
    return (0, i.jsx)(Z, { headerBadgeConfig: d });
}
let X = { [W.C.PREMIUM_CHECKOUT]: () => (0, i.jsx)(Q, {}) };
function $(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, Y.bB)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function ee(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: u } = e,
        s = (0, Y.bB)(),
        o = (0, P.t4)((e) => e.unifiedCheckoutFlow),
        { shouldRenderCoreUnifiedHeader: r, renderCoreUnifiedHeader: a } = l.useMemo(
            () => ({
                shouldRenderCoreUnifiedHeader: (function (e) {
                    let { step: t, skipUnifiedHeaderForSteps: n } = e;
                    if (null == t) return !1;
                    if (t === O.pn.REVIEW || t === O.pn.ADD_PAYMENT_STEPS) return !0;
                    let i = null != n && n.includes(t);
                    return K.MU.includes(t) && !i;
                })({ step: s, skipUnifiedHeaderForSteps: u }),
                renderCoreUnifiedHeader: null != o && o in X ? X[o] : null,
            }),
            [s, u, o],
        );
    return l.useMemo(
        () => (r ? (null != a ? a() : (0, i.jsx)(Z, {})) : (0, i.jsx)($, { renderHeader: t, handleClose: n })),
        [r, a, t, n],
    );
}
var et = n(482132);
n(322076);
var en = n(652215),
    ei = n(202541),
    el = n(106451);
let eu = { [O.pn.GIFT_CUSTOMIZATION]: "xl", [O.pn.REVIEW]: "md", [O.pn.ADD_PAYMENT_STEPS]: "md" };
function es(e) {
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
                      return null == e ? i : e in eu ? eu[e] : i;
                  })(t, { manaModalSizeFromProps: o });
    return (0, i.jsx)(T.Jg, {
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
function eo(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: T,
            analyticsObject: v,
            analyticsSourceLocation: W,
            analyticsSubscriptionType: B = en.rzx.PREMIUM,
            onComplete: z,
            transitionState: K,
            initialPlanId: V,
            subscriptionTier: q,
            onClose: Z,
            trialId: Q,
            reviewWarningMessage: X,
            planGroup: $ = ei.LE,
            openInvoiceId: eu,
            onSubscriptionConfirmation: eo,
            renderPurchaseConfirmation: er,
            postSuccessGuild: ea,
            followupSKUInfo: ed,
            renderHeader: ec,
            skipUnifiedHeaderForSteps: e_,
            disableUnsupportedExternalSubscriptionHandler: ep = !1,
            applicationId: em,
            guildId: eS,
            skuId: ef,
            onStepChange: eE,
            shakeWhilePurchasing: eI = !1,
            isLargeModal: eh = !1,
            isMediumModal: eA = !1,
            returnRef: eT,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: eC,
            tenantManagesPaymentAuth: ek = !1,
            paymentModalVersion: eM = "v1",
        } = e,
        { paymentSources: ey, hasPaymentSources: eD } = (0, S.jm)(),
        {
            selectedSkuId: eb,
            setSelectedSkuId: ev,
            setSelectedPlanId: eg,
            purchaseState: eN,
            setPurchaseState: eO,
            contextMetadata: eU,
            paymentSourceId: ew,
            setPurchaseError: ex,
            priceOptions: eH,
            activeSubscription: eR,
            purchaseType: eF,
            defaultPlanId: eG,
            customCheckoutFlow: ej,
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
        { displayCurrency: eL } = (0, E.Jn)(),
        { activitySessionId: eW } = (0, m.V)(),
        { paymentAuthenticationState: eB } = (0, f.o)(),
        ez = (0, s.bG)([U.A], () => U.A.purchaseTokenAuthState),
        eK = (0, I.sw)(),
        eV = (0, h.A)(),
        eq = (0, A.S3)(),
        { isGift: eJ, giftRecipient: eZ, customGiftMessage: eQ, emojiConfetti: eX, soundEffect: e$ } = (0, G.Pv)(),
        e0 = (0, Y.Z8)(),
        e1 = (0, Y.bB)(),
        e6 = l.useMemo(() => {
            if (null != e0) return e0.options;
        }, [e0]),
        e3 = (0, Y.l)(),
        e2 = "sm";
    eh ? (e2 = "xl") : (eA || e1 === O.pn.ADD_PAYMENT_STEPS) && (e2 = "md");
    let e5 = null != e6 ? e6.modalSizeGetter : void 0,
        e4 = (0, b.O)(),
        e9 = null != q && !eJ && (0, g.U9)(e4, q),
        [e8, e7] = l.useState({
            load_id: eU.loadId,
            discovery_session_id: eU.discoverySessionId,
            payment_type: en.frM[eF],
            location: T ?? v,
            source: W,
            subscription_type: B,
            subscription_plan_id: eV?.id ?? V,
            is_gift: eJ,
            eligible_for_trial: null != Q,
            location_stack: n,
            sku_id: ef,
            application_id: em,
            guild_id: eS,
            payment_modal_version: eM,
            activity_session_id: eW,
            eligible_for_discount: e9,
            sku_product_line: eq?.productLine,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            ...t,
        }),
        te = (0, L.W)(ey, ew),
        { giftCardBalance: tt, giftCardCurrency: tn } = (0, _.h)(),
        ti = null != eK ? eK.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e7((e) => {
            let n = null != eV ? (0, F.y8)(eV.id, !1, eJ, { paymentSourceId: eH.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eL,
                sku_id: eb,
                sku_product_line: eq?.productLine,
                ...t,
            };
        });
    }, [eV, eb, eJ, eH, eL, t, eq?.productLine]),
        (0, c.Ay)(() => {
            (0, C.b)({
                ...e8,
                continue_session_initial_step: eC,
                custom_checkout_flow: ej,
                has_saved_payment_source: eD,
                discount_id: null != e4 ? e4.discountId : ti,
            });
        }),
        l.useEffect(() => {
            null == eV && (null != eG && null != eC ? eg(eG) : eg(V)),
                null != ef ? ev(ef) : null != V && ev(x.A.get(V)?.skuId);
        }, [eg, eV, ev, V, ef, eG, eC]);
    let tl = l.useCallback(() => {
            let e = (0, R.lo)(eZ) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            H.default.track(en.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e8,
                is_custom_message_edited: eJ && e && null != eQ ? eQ !== J.intl.string(J.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eJ && e,
                emoji_name: eJ && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: eJ && e ? e$?.soundId : void 0,
                duration_ms: t - eU.startTime,
                payment_source_type: te?.type,
                gift_card_balance: tt,
                gift_card_currency: tn,
            });
        }, [e8, eX, eQ, eZ, eJ, e$, eU.startTime, te, tt, tn]),
        tu = l.useCallback(() => {
            let { enabled: e } = M.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != T ? (0, D.NE)(T) : null;
            eJ && null != eZ && e && null != t && (0, y.Yd)(eZ.id, t);
        }, [T, eJ, eZ]),
        ts = l.useMemo(() => () => Z?.(eN === j.h.COMPLETED, eb), [Z, eN, eb]),
        to = (0, u.A)(() => Date.now(), [e1]),
        tr = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: u } = t,
                    s = Date.now();
                if (e === O.pn.CONFIRM && (tl(), z?.(l), tu(), eP)) return void ts();
                e3(e), eE?.(e), ex(null), e === O.pn.ADD_PAYMENT_STEPS && (r.h.wait(a.ET), r.h.wait(d.T3));
                let o = null != n ? n : e1;
                null === o || u
                    ? H.default.track(en.HAw.PAYMENT_FLOW_LOADED, {
                          ...e8,
                          initial_step: o ?? e,
                          continue_session_initial_step: eC,
                          has_saved_payment_source: eD,
                      })
                    : H.default.track(en.HAw.PAYMENT_FLOW_STEP, {
                          ...e8,
                          ...i,
                          from_step: o,
                          to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - to,
                          flow_duration_ms: s - eU.startTime,
                          gift_card_balance: tt,
                          gift_card_currency: tn,
                      });
            },
            [e3, eE, ex, e1, eC, e8, to, eU.startTime, tl, z, tu, eP, ts, eD, tt, tn],
        );
    return (
        (0, N.b)(e1, eB, tr, eO, !1, void 0, ek),
        l.useEffect(() => {
            null != e1 && e1 !== O.pn.AWAITING_PURCHASE_TOKEN_AUTH && ez === U.C.PENDING
                ? tr(O.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e1 === O.pn.AWAITING_PURCHASE_TOKEN_AUTH && ez === U.C.SUCCESS && tr(O.pn.REVIEW);
        }, [e1, ez, tr]),
        (0, k.A)(ts),
        (0, w.s)(eR, () => Z(!1), eJ, !ep),
        (0, N.QR)(eB, ek),
        (0, i.jsx)(o.b, {
            className: el.Xn,
            isShaking: eI && eN === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(es, {
                step: e1,
                transitionState: K,
                isGift: eJ,
                giftRecipient: eZ,
                returnRef: eT,
                manaModalSize: e2,
                modalSizeGetter: e5,
                handleClose: ts,
                children: (0, i.jsx)(et.Ay, {
                    header: (0, i.jsx)(ee, { handleClose: ts, skipUnifiedHeaderForSteps: e_, renderHeader: ec }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: q,
                        handleStepChange: tr,
                        handleClose: ts,
                        analyticsData: e8,
                        setAnalyticsData: e7,
                        trialId: Q,
                        reviewWarningMessage: X,
                        planGroup: $,
                        openInvoiceId: eu,
                        analyticsLocation: T,
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
