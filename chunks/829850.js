"use strict";
n.d(t, { q: () => eh });
var i = n(627968),
    r = n(64700),
    s = n(976634),
    a = n(702841),
    o = n(568602),
    l = n(228366),
    u = n(158032),
    c = n(830382),
    d = n(964486),
    _ = n(11939),
    h = n(145659),
    f = n(31823),
    p = n(426398),
    E = n(211083),
    m = n(655857),
    g = n(666646),
    A = n(558620),
    I = n(427675),
    T = n(480642),
    S = n(211159),
    y = n(357669),
    C = n(319437),
    N = n(70730),
    v = n(45787),
    R = n(51501),
    O = n(422936),
    b = n(862990),
    D = n(410516),
    L = n(251913),
    w = n(166532),
    M = n(71319),
    P = n(344159),
    x = n(97352),
    k = n(174459),
    U = n(45938),
    G = n(428262),
    F = n(937008),
    V = n(566980),
    B = n(615310),
    j = n(216641),
    H = n(284009),
    Y = n.n(H),
    W = n(17928),
    K = n(935462),
    $ = n(546605),
    z = n(364995),
    q = n(463376),
    Z = n(584160),
    X = n(242874),
    Q = n(573359),
    J = n(165191),
    ee = n(237412),
    et = n(897904),
    en = n(906234),
    ei = n(652215),
    er = n(788868),
    es = n(818348),
    ea = n(575650);
function eo(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: s } = e,
        {
            selectedSkuId: a,
            purchaseState: o,
            paymentSourceId: l,
            purchaseType: u,
            premiumDiscountPercent: c,
            isPremiumDiscountAppliedToCheckoutInvoice: d,
        } = (0, S.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            purchaseType: e.purchaseType,
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
        })),
        _ = (0, W.bG)([Q.A], () => Q.A.isDisplayingWowMomentConfirmation),
        { isPremium: h, isPremiumGroupPurchase: f, isEligibleForTrial: p, isEligibleForDiscount: E } = (0, q.i)(),
        m = (0, A.A)(),
        g = (0, I.S3)(),
        y = (0, B.bB)(),
        { checkoutPaymentSources: C, storeCountry: N } = (0, z.t)(),
        v = r.useMemo(() => {
            if (null == l) return null;
            let e = C.find((e) => e.id === l);
            return e?.relocationCountry ?? null;
        }, [C, l]),
        { isGift: R, selectedGiftStyle: O, giftRecipient: b } = (0, F.Pv)(),
        D = (0, $.vg)("PaymentModalHeader"),
        L = g?.productLine === ei.EZt.COLLECTIBLES,
        M = g?.productLine === ei.EZt.SOCIAL_LAYER_GAME_ITEM,
        P = R && (0, U.Ik)(b) && y === w.pn.CONFIRM && null != O && !L && !M,
        x = null != t && null != y,
        k = [w.pn.SKU_SELECT, w.pn.SELECT_FREE_SKU],
        G = null != y && !k.includes(y) && null != a,
        V = (0, en.G)(m?.id ?? "") && !p;
    return r.useMemo(() => {
        if (null == y) return;
        if (
            (function (e) {
                let { step: t, skipUnifiedHeaderForSteps: n } = e,
                    i = null != n && n.includes(t);
                return Z.M.includes(t) && !i;
            })({ step: y, skipUnifiedHeaderForSteps: s })
        ) {
            let e = (0, Z.u)({
                step: y,
                skuId: a ?? (null != g ? g.id : null),
                showBetaBadge: f,
                showTrialBadge: p,
                showPromoBadge: E || V,
                premiumDiscountPercent: d ? c : null,
                storeCountryFromCheckoutContext: N,
                isStoreCountryEnabled: D,
                relocationCountry: v,
            });
            return (0, i.jsx)(T.s3, { ...e });
        }
        let e = null;
        return (
            P
                ? (e = (0, i.jsxs)("div", {
                      className: ea.kL,
                      children: [
                          (0, i.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, i.jsx)(J.A, {
                                  defaultAnimationState: X.oA.LOOP,
                                  giftStyle: O,
                                  className: ea.qq,
                              }),
                          }),
                          (0, i.jsx)(K.s_, { onClick: n, className: ea.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : x
                  ? (e = t(m ?? null, n, y))
                  : u === es.VV.ONE_TIME
                    ? (e = (0, i.jsx)(et.fs, { step: y, onClose: n }))
                    : G &&
                      (Y()(a in er.WN, `invalid sku id: ${a}`),
                      (e = (0, i.jsx)(ee.A, {
                          currentStep: y ?? void 0,
                          purchaseState: o,
                          premiumType: er.WN[a],
                          onClose: n,
                          showTrialBadge: p,
                          showDiscountBadge: E,
                          isGift: R,
                          giftRecipient: b,
                          isEligibleForTrial: p,
                          enablePremiumBrandRefresh: h,
                          isDisplayingWowMomentConfirmation: _,
                          isPremiumGroupPurchase: f,
                      }))),
            e
        );
    }, [s, D, N, v, O, n, o, t, m, g, a, y, p, E, c, d, V, P, G, x, u, R, b, h, _, f]);
}
var el = n(482132);
n(322076);
var eu = n(375708),
    ec = n(106451);
let ed = { [w.pn.GIFT_CUSTOMIZATION]: "xl", [w.pn.REVIEW]: "md", [w.pn.ADD_PAYMENT_STEPS]: "md" },
    e_ = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: r,
                isGift: s,
                giftRecipient: a,
                manaModalSize: o,
                modalSizeGetter: l,
                returnRef: u,
                children: c,
            } = e,
            d = (0, b.FY)({ isGift: s }),
            _ =
                null != l
                    ? l({ canCurrentlyPurchasePremiumGroup: d, isGift: s, giftRecipient: a })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              i = n ?? "md";
                          return null == e ? i : e in ed ? ed[e] : i;
                      })(t, { manaModalSizeFromProps: o });
        return (0, i.jsx)(T.Jg, {
            transitionState: n,
            size: _,
            returnRef: u,
            "aria-label": eu.intl.string(eu.t.q9EGps),
            onClose: async () => {
                await r();
            },
            children: c,
        });
    };
function eh(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: T,
            analyticsObject: b,
            analyticsSourceLocation: H,
            analyticsSubscriptionType: Y = ei.rzx.PREMIUM,
            onComplete: W,
            transitionState: K,
            initialPlanId: $,
            subscriptionTier: z,
            onClose: q,
            trialId: Z,
            reviewWarningMessage: X,
            planGroup: Q = er.LE,
            openInvoiceId: J,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: es,
            renderHeader: ea,
            skipUnifiedHeaderForSteps: ed,
            disableUnsupportedExternalSubscriptionHandler: eh = !1,
            applicationId: ef,
            guildId: ep,
            skuId: eE,
            onStepChange: em,
            shakeWhilePurchasing: eg = !1,
            isLargeModal: eA = !1,
            isMediumModal: eI = !1,
            returnRef: eT,
            skipConfirm: eS = !1,
            continueSessionToInitialStep: ey,
            paymentModalVersion: eC = "v1",
        } = e,
        { paymentSources: eN, hasPaymentSources: ev } = (0, p.jm)(),
        {
            selectedSkuId: eR,
            setSelectedSkuId: eO,
            setSelectedPlanId: eb,
            purchaseState: eD,
            setPurchaseState: eL,
            contextMetadata: ew,
            paymentSourceId: eM,
            setPurchaseError: eP,
            priceOptions: ex,
            activeSubscription: ek,
            purchaseType: eU,
            defaultPlanId: eG,
            customCheckoutFlow: eF,
            unifiedCheckoutFlow: eV,
        } = (0, S.t4)((e) => ({
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
        { displayCurrency: eB } = (0, m.Jn)(),
        { activitySessionId: ej } = (0, f.V)(),
        { paymentAuthenticationState: eH } = (0, E.o)(),
        eY = (0, a.bG)([M.A], () => M.A.purchaseTokenAuthState),
        eW = (0, g.sw)(),
        eK = (0, A.A)(),
        e$ = (0, I.S3)(),
        { isGift: ez, giftRecipient: eq, customGiftMessage: eZ, emojiConfetti: eX, soundEffect: eQ } = (0, F.Pv)(),
        eJ = (0, B.Z8)(),
        e0 = (0, B.bB)(),
        e1 = r.useMemo(() => {
            if (null != eJ) return eJ.options;
        }, [eJ]),
        e2 = (0, B.l)(),
        e3 = "sm";
    eA ? (e3 = "xl") : (eI || e0 === w.pn.ADD_PAYMENT_STEPS) && (e3 = "md");
    let e6 = null != e1 ? e1.modalSizeGetter : void 0,
        e4 = (0, O.O)(),
        e5 = null != z && !ez && (0, D.U9)(e4, z),
        [e7, e8] = r.useState({
            load_id: ew.loadId,
            discovery_session_id: ew.discoverySessionId,
            payment_type: ei.frM[eU],
            location: T ?? b,
            source: H,
            subscription_type: Y,
            subscription_plan_id: eK?.id ?? $,
            is_gift: ez,
            eligible_for_trial: null != Z,
            location_stack: n,
            sku_id: eE,
            application_id: ef,
            guild_id: ep,
            payment_modal_version: eC,
            activity_session_id: ej,
            eligible_for_discount: e5,
            sku_product_line: e$?.productLine,
            checkout_design: h.r.UNIFIED,
            checkout_flow: eV,
            ...t,
        }),
        e9 = (0, j.W)(eN, eM),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, _.h)(),
        tn = null != eW ? eW.getDiscountIdIfExists() : void 0;
    r.useEffect(() => {
        e8((e) => {
            let n = null != eK ? (0, G.y8)(eK.id, !1, ez, { paymentSourceId: ex.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: eB,
                sku_id: eR,
                sku_product_line: e$?.productLine,
                ...t,
            };
        });
    }, [eK, eR, ez, ex, eB, t, e$?.productLine]),
        (0, d.Ay)(() => {
            (0, y.b)({
                ...e7,
                continue_session_initial_step: ey,
                custom_checkout_flow: eF,
                has_saved_payment_source: ev,
                discount_id: null != e4 ? e4.discountId : tn,
            });
        }),
        r.useEffect(() => {
            null == eK && (null != eG && null != ey ? eb(eG) : eb($)),
                null != eE ? eO(eE) : null != $ && eO(x.A.get($)?.skuId);
        }, [eb, eK, eO, $, eE, eG, ey]);
    let ti = r.useCallback(() => {
            let e = (0, U.lo)(eq) === U.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            k.default.track(ei.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e7,
                is_custom_message_edited: ez && e && null != eZ ? eZ !== eu.intl.string(eu.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: ez && e,
                emoji_name: ez && e && eX?.id == null ? eX?.surrogates : void 0,
                sound_id: ez && e ? eQ?.soundId : void 0,
                duration_ms: t - ew.startTime,
                payment_source_type: e9?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = N.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            ez && null != eq && null != T && n && (0, R.WO)(T) && (0, v.Yd)(eq.id);
        }, [e7, eX, eZ, eq, ez, eQ, ew.startTime, e9, te, tt, T]),
        tr = r.useMemo(() => () => q?.(eD === V.h.COMPLETED, eR), [q, eD, eR]),
        ts = (0, s.A)(() => Date.now(), [e0]),
        ta = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: r, emitPaymentFlowLoadedEvent: s } = t,
                    a = Date.now();
                if (e === w.pn.CONFIRM && (ti(), W?.(r), eS)) return void tr();
                e2(e), em?.(e), eP(null), e === w.pn.ADD_PAYMENT_STEPS && (l.h.wait(u.ET), l.h.wait(c.T3));
                let o = null != n ? n : e0;
                null === o || s
                    ? k.default.track(ei.HAw.PAYMENT_FLOW_LOADED, {
                          ...e7,
                          initial_step: o ?? e,
                          continue_session_initial_step: ey,
                          has_saved_payment_source: ev,
                      })
                    : k.default.track(ei.HAw.PAYMENT_FLOW_STEP, {
                          ...e7,
                          ...i,
                          from_step: o,
                          to_step: e === w.pn.ADD_PAYMENT_STEPS ? w.pn.PAYMENT_TYPE : e,
                          step_duration_ms: a - ts,
                          flow_duration_ms: a - ew.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e2, em, eP, e0, ey, e7, ts, ew.startTime, ti, W, eS, tr, ev, te, tt],
        );
    return (
        (0, L.b)(e0, eH, ta, eL),
        r.useEffect(() => {
            null != e0 && e0 !== w.pn.AWAITING_PURCHASE_TOKEN_AUTH && eY === M.C.PENDING
                ? ta(w.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e0 === w.pn.AWAITING_PURCHASE_TOKEN_AUTH && eY === M.C.SUCCESS && ta(w.pn.REVIEW);
        }, [e0, eY, ta]),
        (0, C.A)(tr),
        (0, P.s)(ek, () => q(!1), ez, !eh),
        (0, L.QR)(eH),
        (0, i.jsx)(o.b, {
            className: ec.Xn,
            isShaking: eg && eD === V.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(e_, {
                step: e0,
                transitionState: K,
                isGift: ez,
                giftRecipient: eq,
                returnRef: eT,
                manaModalSize: e3,
                modalSizeGetter: e6,
                handleClose: tr,
                children: (0, i.jsx)(el.Ay, {
                    header: (0, i.jsx)(eo, { handleClose: tr, skipUnifiedHeaderForSteps: ed, renderHeader: ea }),
                    ...{
                        initialPlanId: $,
                        subscriptionTier: z,
                        handleStepChange: ta,
                        handleClose: tr,
                        analyticsData: e7,
                        setAnalyticsData: e8,
                        trialId: Z,
                        reviewWarningMessage: X,
                        planGroup: Q,
                        openInvoiceId: J,
                        analyticsLocation: T,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: et,
                        postSuccessGuild: en,
                        followupSKUInfo: es,
                        skipConfirm: eS,
                        continueSessionToInitialStep: ey,
                    },
                }),
            }),
        })
    );
}
