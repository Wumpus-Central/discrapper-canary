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
    y = n(70730),
    M = n(45787),
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
    q = n(584160),
    K = n(35587),
    V = n(906234),
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
                (0, q.uO)({
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
        r = (0, V.G)(t ?? "") && !s,
        a = (0, K.Sq)(),
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
                    return q.MU.includes(t) && !i;
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
            transitionState: q,
            initialPlanId: K,
            subscriptionTier: V,
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
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eM, hasPaymentSources: eD } = (0, S.jm)(),
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
            quantity: eL,
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
            quantity: e.quantity,
        })),
        { displayCurrency: eW } = (0, E.Jn)(),
        { activitySessionId: eB } = (0, m.V)(),
        { paymentAuthenticationState: ez } = (0, f.o)(),
        eq = (0, s.bG)([U.A], () => U.A.purchaseTokenAuthState),
        eK = (0, I.sw)(),
        eV = (0, h.A)(),
        eJ = (0, A.S3)(),
        { isGift: eZ, giftRecipient: eQ, customGiftMessage: eX, emojiConfetti: e$, soundEffect: e0 } = (0, G.Pv)(),
        e1 = (0, Y.Z8)(),
        e6 = (0, Y.bB)(),
        e3 = l.useMemo(() => {
            if (null != e1) return e1.options;
        }, [e1]),
        e2 = (0, Y.l)(),
        e5 = "sm";
    eh ? (e5 = "xl") : (eA || e6 === O.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e4 = null != e3 ? e3.modalSizeGetter : void 0,
        e9 = (0, b.O)(),
        e8 = null != V && !eZ && (0, g.U9)(e9, V),
        [e7, te] = l.useState({
            load_id: eU.loadId,
            discovery_session_id: eU.discoverySessionId,
            payment_type: en.frM[eF],
            location: T ?? v,
            source: W,
            subscription_type: B,
            subscription_plan_id: eV?.id ?? K,
            is_gift: eZ,
            eligible_for_trial: null != Q,
            location_stack: n,
            sku_id: ef,
            application_id: em,
            guild_id: eS,
            payment_modal_version: ey,
            activity_session_id: eB,
            eligible_for_discount: e8,
            sku_product_line: eJ?.productLine,
            quantity: eL,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            ...t,
        }),
        tt = (0, L.W)(eM, ew),
        { giftCardBalance: tn, giftCardCurrency: ti } = (0, _.h)(),
        tl = null != eK ? eK.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        te((e) => {
            let n = null != eV ? (0, F.y8)(eV.id, !1, eZ, { paymentSourceId: eH.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eW,
                sku_id: eb,
                sku_product_line: eJ?.productLine,
                quantity: eL,
                ...t,
            };
        });
    }, [eV, eb, eZ, eH, eW, t, eJ?.productLine, eL]),
        (0, c.Ay)(() => {
            (0, C.b)({
                ...e7,
                continue_session_initial_step: eC,
                custom_checkout_flow: ej,
                has_saved_payment_source: eD,
                discount_id: null != e9 ? e9.discountId : tl,
            });
        }),
        l.useEffect(() => {
            null == eV && (null != eG && null != eC ? eg(eG) : eg(K)),
                null != ef ? ev(ef) : null != K && ev(x.A.get(K)?.skuId);
        }, [eg, eV, ev, K, ef, eG, eC]);
    let tu = l.useCallback(() => {
            let e = (0, R.lo)(eQ) === R.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            H.default.track(en.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: eZ && e && null != eX ? eX !== J.intl.string(J.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eZ && e ? e0?.soundId : void 0,
                duration_ms: t - eU.startTime,
                payment_source_type: tt?.type,
                gift_card_balance: tn,
                gift_card_currency: ti,
            });
        }, [e7, e$, eX, eQ, eZ, e0, eU.startTime, tt, tn, ti]),
        ts = l.useCallback(() => {
            let { enabled: e } = y.u.getConfig({ location: "maybeSoftDismissGiftIntentOnPurchase" }),
                t = null != T ? (0, D.NE)(T) : null;
            eZ && null != eQ && e && null != t && (0, M.Yd)(eQ.id, t);
        }, [T, eZ, eQ]),
        to = l.useMemo(() => () => Z?.(eN === j.h.COMPLETED, eb), [Z, eN, eb]),
        tr = (0, u.A)(() => Date.now(), [e6]),
        ta = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: u } = t,
                    s = Date.now();
                if (e === O.pn.CONFIRM && (tu(), z?.(l), ts(), eP)) return void to();
                e2(e), eE?.(e), ex(null), e === O.pn.ADD_PAYMENT_STEPS && (r.h.wait(a.ET), r.h.wait(d.T3));
                let o = null != n ? n : e6;
                null === o || u
                    ? H.default.track(en.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: o ?? e,
                          continue_session_initial_step: eC,
                          has_saved_payment_source: eD,
                      })
                    : H.default.track(en.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: o,
                          to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - tr,
                          flow_duration_ms: s - eU.startTime,
                          gift_card_balance: tn,
                          gift_card_currency: ti,
                      });
            },
            [e2, eE, ex, e6, eC, e7, tr, eU.startTime, tu, z, ts, eP, to, eD, tn, ti],
        );
    return (
        (0, N.b)(e6, ez, ta, eO, !1, void 0, ek),
        l.useEffect(() => {
            null != e6 && e6 !== O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === U.C.PENDING
                ? ta(O.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e6 === O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eq === U.C.SUCCESS && ta(O.pn.REVIEW);
        }, [e6, eq, ta]),
        (0, k.A)(to),
        (0, w.s)(eR, () => Z(!1), eZ, !ep),
        (0, N.QR)(ez, ek),
        (0, i.jsx)(o.b, {
            className: el.Xn,
            isShaking: eI && eN === j.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(es, {
                step: e6,
                transitionState: q,
                isGift: eZ,
                giftRecipient: eQ,
                returnRef: eT,
                manaModalSize: e5,
                modalSizeGetter: e4,
                handleClose: to,
                children: (0, i.jsx)(et.Ay, {
                    header: (0, i.jsx)(ee, { handleClose: to, skipUnifiedHeaderForSteps: e_, renderHeader: ec }),
                    ...{
                        initialPlanId: K,
                        subscriptionTier: V,
                        handleStepChange: ta,
                        handleClose: to,
                        analyticsData: e7,
                        setAnalyticsData: te,
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
