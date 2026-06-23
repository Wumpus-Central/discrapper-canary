i.d(t, { q: () => e_ });
var n = i(627968),
    l = i(64700),
    s = i(976634),
    u = i(702841),
    a = i(568602),
    o = i(228366),
    r = i(158032),
    d = i(830382),
    c = i(964486),
    _ = i(11939),
    p = i(145659),
    m = i(31823),
    S = i(426398),
    E = i(211083),
    A = i(655857),
    h = i(666646),
    T = i(558620),
    f = i(427675),
    I = i(169797),
    P = i(211159),
    C = i(357669),
    k = i(319437),
    y = i(70730),
    g = i(45787),
    M = i(51501),
    v = i(422936),
    D = i(862990),
    N = i(410516),
    w = i(251913),
    O = i(166532),
    b = i(71319),
    L = i(344159),
    R = i(97352),
    x = i(174459),
    F = i(45938),
    U = i(428262),
    G = i(937008),
    W = i(566980),
    j = i(615310),
    Y = i(216641),
    H = i(284009),
    B = i.n(H),
    z = i(17928),
    K = i(935462),
    V = i(364995),
    Z = i(463376),
    q = i(584160),
    J = i(242874),
    $ = i(573359),
    Q = i(165191),
    X = i(237412),
    ee = i(897904),
    et = i(906234),
    ei = i(652215),
    en = i(788868),
    el = i(818348),
    es = i(575650);
function eu(e) {
    let { renderHeader: t, handleClose: i, skipUnifiedHeaderForSteps: s } = e,
        {
            selectedSkuId: u,
            purchaseState: a,
            paymentSourceId: o,
            purchaseType: r,
            premiumDiscountPercent: d,
            isPremiumDiscountAppliedToCheckoutInvoice: c,
        } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
            paymentSourceId: e.paymentSourceId,
            purchaseType: e.purchaseType,
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
        })),
        _ = (0, z.bG)([$.A], () => $.A.isDisplayingWowMomentConfirmation),
        { isPremium: p, isPremiumGroupPurchase: m, isEligibleForTrial: S, isEligibleForDiscount: E } = (0, Z.i)(),
        A = (0, T.A)(),
        h = (0, f.S3)(),
        C = (0, j.bB)(),
        { checkoutPaymentSources: k, storeCountry: y } = (0, V.t)(),
        g = l.useMemo(() => {
            if (null == o) return null;
            let e = k.find((e) => e.id === o);
            return e?.relocationCountry ?? null;
        }, [k, o]),
        { isGift: M, selectedGiftStyle: v, giftRecipient: D } = (0, G.Pv)(),
        N = h?.productLine === ei.EZt.COLLECTIBLES,
        w = h?.productLine === ei.EZt.SOCIAL_LAYER_GAME_ITEM,
        b = M && (0, F.Ik)(D) && C === O.pn.CONFIRM && null != v && !N && !w,
        L = null != t && null != C,
        R = [O.pn.SKU_SELECT, O.pn.SELECT_FREE_SKU],
        x = null != C && !R.includes(C) && null != u,
        U = (0, et.G)(A?.id ?? "") && !S;
    return l.useMemo(() => {
        if (null == C) return;
        if (
            (function (e) {
                let { step: t, skipUnifiedHeaderForSteps: i } = e,
                    n = null != i && i.includes(t);
                return q.M.includes(t) && !n;
            })({ step: C, skipUnifiedHeaderForSteps: s })
        ) {
            let e = (0, q.u)({
                step: C,
                skuId: u ?? (null != h ? h.id : null),
                showBetaBadge: m,
                showTrialBadge: S,
                showPromoBadge: E || U,
                premiumDiscountPercent: c ? d : null,
                storeCountryFromCheckoutContext: y,
                relocationCountry: g,
            });
            return (0, n.jsx)(I.s3, { ...e });
        }
        let e = null;
        return (
            b
                ? (e = (0, n.jsxs)("div", {
                      className: es.kL,
                      children: [
                          (0, n.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, n.jsx)(Q.A, {
                                  defaultAnimationState: J.oA.LOOP,
                                  giftStyle: v,
                                  className: es.qq,
                              }),
                          }),
                          (0, n.jsx)(K.s_, { onClick: i, className: es.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : L
                  ? (e = t(A ?? null, i, C))
                  : r === el.VV.ONE_TIME
                    ? (e = (0, n.jsx)(ee.fs, { step: C, onClose: i }))
                    : x &&
                      (B()(u in en.WN, `invalid sku id: ${u}`),
                      (e = (0, n.jsx)(X.A, {
                          currentStep: C ?? void 0,
                          purchaseState: a,
                          premiumType: en.WN[u],
                          onClose: i,
                          showTrialBadge: S,
                          showDiscountBadge: E,
                          isGift: M,
                          giftRecipient: D,
                          isEligibleForTrial: S,
                          enablePremiumBrandRefresh: p,
                          isDisplayingWowMomentConfirmation: _,
                          isPremiumGroupPurchase: m,
                      }))),
            e
        );
    }, [s, y, g, v, i, a, t, A, h, u, C, S, E, d, c, U, b, x, L, r, M, D, p, _, m]);
}
var ea = i(482132);
i(322076);
var eo = i(375708),
    er = i(106451);
let ed = { [O.pn.GIFT_CUSTOMIZATION]: "xl", [O.pn.REVIEW]: "md", [O.pn.ADD_PAYMENT_STEPS]: "md" },
    ec = (e) => {
        let {
                step: t,
                transitionState: i,
                handleClose: l,
                isGift: s,
                giftRecipient: u,
                manaModalSize: a,
                modalSizeGetter: o,
                returnRef: r,
                children: d,
            } = e,
            c = (0, D.FY)({ isGift: s }),
            _ =
                null != o
                    ? o({ canCurrentlyPurchasePremiumGroup: c, isGift: s, giftRecipient: u })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: i } = t,
                              n = i ?? "md";
                          return null == e ? n : e in ed ? ed[e] : n;
                      })(t, { manaModalSizeFromProps: a });
        return (0, n.jsx)(I.Jg, {
            transitionState: i,
            size: _,
            returnRef: r,
            "aria-label": eo.intl.string(eo.t.q9EGps),
            onClose: async () => {
                await l();
            },
            children: d,
        });
    };
function e_(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: i,
            analyticsLocation: I,
            analyticsObject: D,
            analyticsSourceLocation: H,
            analyticsSubscriptionType: B = ei.rzx.PREMIUM,
            onComplete: z,
            transitionState: K,
            initialPlanId: V,
            subscriptionTier: Z,
            onClose: q,
            trialId: J,
            reviewWarningMessage: $,
            planGroup: Q = en.LE,
            openInvoiceId: X,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: el,
            followupSKUInfo: es,
            renderHeader: ed,
            skipUnifiedHeaderForSteps: e_,
            disableUnsupportedExternalSubscriptionHandler: ep = !1,
            applicationId: em,
            guildId: eS,
            skuId: eE,
            onStepChange: eA,
            shakeWhilePurchasing: eh = !1,
            isLargeModal: eT = !1,
            isMediumModal: ef = !1,
            returnRef: eI,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: eC,
            paymentModalVersion: ek = "v1",
        } = e,
        { paymentSources: ey, hasPaymentSources: eg } = (0, S.jm)(),
        {
            selectedSkuId: eM,
            setSelectedSkuId: ev,
            setSelectedPlanId: eD,
            purchaseState: eN,
            setPurchaseState: ew,
            contextMetadata: eO,
            paymentSourceId: eb,
            setPurchaseError: eL,
            priceOptions: eR,
            activeSubscription: ex,
            purchaseType: eF,
            defaultPlanId: eU,
            customCheckoutFlow: eG,
            unifiedCheckoutFlow: eW,
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
        { displayCurrency: ej } = (0, A.Jn)(),
        { activitySessionId: eY } = (0, m.V)(),
        { paymentAuthenticationState: eH } = (0, E.o)(),
        eB = (0, u.bG)([b.A], () => b.A.purchaseTokenAuthState),
        ez = (0, h.sw)(),
        eK = (0, T.A)(),
        eV = (0, f.S3)(),
        { isGift: eZ, giftRecipient: eq, customGiftMessage: eJ, emojiConfetti: e$, soundEffect: eQ } = (0, G.Pv)(),
        eX = (0, j.Z8)(),
        e0 = (0, j.bB)(),
        e1 = l.useMemo(() => {
            if (null != eX) return eX.options;
        }, [eX]),
        e6 = (0, j.l)(),
        e5 = "sm";
    eT ? (e5 = "xl") : (ef || e0 === O.pn.ADD_PAYMENT_STEPS) && (e5 = "md");
    let e3 = null != e1 ? e1.modalSizeGetter : void 0,
        e2 = (0, v.O)(),
        e8 = null != Z && !eZ && (0, N.U9)(e2, Z),
        [e9, e4] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: ei.frM[eF],
            location: I ?? D,
            source: H,
            subscription_type: B,
            subscription_plan_id: eK?.id ?? V,
            is_gift: eZ,
            eligible_for_trial: null != J,
            location_stack: i,
            sku_id: eE,
            application_id: em,
            guild_id: eS,
            payment_modal_version: ek,
            activity_session_id: eY,
            eligible_for_discount: e8,
            sku_product_line: eV?.productLine,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eW,
            ...t,
        }),
        e7 = (0, Y.W)(ey, eb),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, _.h)(),
        ti = null != ez ? ez.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e4((e) => {
            let i = null != eK ? (0, U.y8)(eK.id, !1, eZ, { paymentSourceId: eR.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: i?.amount,
                regular_price: eK?.price,
                currency: ej,
                sku_id: eM,
                sku_product_line: eV?.productLine,
                ...t,
            };
        });
    }, [eK, eM, eZ, eR, ej, t, eV?.productLine]),
        (0, c.Ay)(() => {
            (0, C.b)({
                ...e9,
                continue_session_initial_step: eC,
                custom_checkout_flow: eG,
                has_saved_payment_source: eg,
                discount_id: null != e2 ? e2.discountId : ti,
            });
        }),
        l.useEffect(() => {
            null == eK && (null != eU && null != eC ? eD(eU) : eD(V)),
                null != eE ? ev(eE) : null != V && ev(R.A.get(V)?.skuId);
        }, [eD, eK, ev, V, eE, eU, eC]);
    let tn = l.useCallback(() => {
            let e = (0, F.lo)(eq) === F.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(ei.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eZ && e && null != eJ ? eJ !== eo.intl.string(eo.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eZ && e ? eQ?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: e7?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: i } = y.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eZ && null != eq && null != I && i && (0, M.WO)(I) && (0, g.Yd)(eq.id);
        }, [e9, e$, eJ, eq, eZ, eQ, eO.startTime, e7, te, tt, I]),
        tl = l.useMemo(() => () => q?.(eN === W.h.COMPLETED, eM), [q, eN, eM]),
        ts = (0, s.A)(() => Date.now(), [e0]),
        tu = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: i, analyticsDataOverride: n, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    u = Date.now();
                if (e === O.pn.CONFIRM && (tn(), z?.(l), eP)) return void tl();
                e6(e), eA?.(e), eL(null), e === O.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(d.T3));
                let a = null != i ? i : e0;
                null === a || s
                    ? x.default.track(ei.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: a ?? e,
                          continue_session_initial_step: eC,
                          has_saved_payment_source: eg,
                      })
                    : x.default.track(ei.HAw.PAYMENT_FLOW_STEP, {
                          ...e9,
                          ...n,
                          from_step: a,
                          to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                          step_duration_ms: u - ts,
                          flow_duration_ms: u - eO.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e6, eA, eL, e0, eC, e9, ts, eO.startTime, tn, z, eP, tl, eg, te, tt],
        );
    return (
        (0, w.b)(e0, eH, tu, ew),
        l.useEffect(() => {
            null != e0 && e0 !== O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === b.C.PENDING
                ? tu(O.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e0 === O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === b.C.SUCCESS && tu(O.pn.REVIEW);
        }, [e0, eB, tu]),
        (0, k.A)(tl),
        (0, L.s)(ex, () => q(!1), eZ, !ep),
        (0, w.QR)(eH),
        (0, n.jsx)(a.b, {
            className: er.Xn,
            isShaking: eh && eN === W.h.PURCHASING,
            intensity: 2,
            children: (0, n.jsx)(ec, {
                step: e0,
                transitionState: K,
                isGift: eZ,
                giftRecipient: eq,
                returnRef: eI,
                manaModalSize: e5,
                modalSizeGetter: e3,
                handleClose: tl,
                children: (0, n.jsx)(ea.Ay, {
                    header: (0, n.jsx)(eu, { handleClose: tl, skipUnifiedHeaderForSteps: e_, renderHeader: ed }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: Z,
                        handleStepChange: tu,
                        handleClose: tl,
                        analyticsData: e9,
                        setAnalyticsData: e4,
                        trialId: J,
                        reviewWarningMessage: $,
                        planGroup: Q,
                        openInvoiceId: X,
                        analyticsLocation: I,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: et,
                        postSuccessGuild: el,
                        followupSKUInfo: es,
                        skipConfirm: eP,
                        continueSessionToInitialStep: eC,
                    },
                }),
            }),
        })
    );
}
