n.d(t, { q: () => ep });
var i = n(627968),
    l = n(64700),
    s = n(976634),
    u = n(702841),
    a = n(568602),
    o = n(228366),
    r = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(11939),
    p = n(145659),
    m = n(31823),
    S = n(426398),
    E = n(211083),
    A = n(655857),
    h = n(666646),
    T = n(558620),
    f = n(427675),
    I = n(480642),
    P = n(211159),
    y = n(357669),
    C = n(319437),
    k = n(70730),
    g = n(45787),
    M = n(51501),
    v = n(422936),
    D = n(862990),
    N = n(410516),
    w = n(251913),
    O = n(166532),
    b = n(71319),
    L = n(344159),
    R = n(97352),
    x = n(174459),
    F = n(45938),
    U = n(428262),
    G = n(937008),
    W = n(566980),
    j = n(615310),
    H = n(216641),
    Y = n(284009),
    B = n.n(Y),
    z = n(17928),
    K = n(935462),
    V = n(546605),
    Z = n(364995),
    q = n(463376),
    J = n(584160),
    $ = n(242874),
    Q = n(573359),
    X = n(165191),
    ee = n(237412),
    et = n(897904),
    en = n(906234),
    ei = n(652215),
    el = n(788868),
    es = n(818348),
    eu = n(575650);
function ea(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: s } = e,
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
        _ = (0, z.bG)([Q.A], () => Q.A.isDisplayingWowMomentConfirmation),
        { isPremium: p, isPremiumGroupPurchase: m, isEligibleForTrial: S, isEligibleForDiscount: E } = (0, q.i)(),
        A = (0, T.A)(),
        h = (0, f.S3)(),
        y = (0, j.bB)(),
        { checkoutPaymentSources: C, storeCountry: k } = (0, Z.t)(),
        g = l.useMemo(() => {
            if (null == o) return null;
            let e = C.find((e) => e.id === o);
            return e?.relocationCountry ?? null;
        }, [C, o]),
        { isGift: M, selectedGiftStyle: v, giftRecipient: D } = (0, G.Pv)(),
        N = (0, V.vg)("PaymentModalHeader"),
        w = h?.productLine === ei.EZt.COLLECTIBLES,
        b = h?.productLine === ei.EZt.SOCIAL_LAYER_GAME_ITEM,
        L = M && (0, F.Ik)(D) && y === O.pn.CONFIRM && null != v && !w && !b,
        R = null != t && null != y,
        x = [O.pn.SKU_SELECT, O.pn.SELECT_FREE_SKU],
        U = null != y && !x.includes(y) && null != u,
        W = (0, en.G)(A?.id ?? "") && !S;
    return l.useMemo(() => {
        if (null == y) return;
        if (
            (function (e) {
                let { step: t, skipUnifiedHeaderForSteps: n } = e,
                    i = null != n && n.includes(t);
                return J.M.includes(t) && !i;
            })({ step: y, skipUnifiedHeaderForSteps: s })
        ) {
            let e = (0, J.u)({
                step: y,
                skuId: u ?? (null != h ? h.id : null),
                showBetaBadge: m,
                showTrialBadge: S,
                showPromoBadge: E || W,
                premiumDiscountPercent: c ? d : null,
                storeCountryFromCheckoutContext: k,
                isStoreCountryEnabled: N,
                relocationCountry: g,
            });
            return (0, i.jsx)(I.s3, { ...e });
        }
        let e = null;
        return (
            L
                ? (e = (0, i.jsxs)("div", {
                      className: eu.kL,
                      children: [
                          (0, i.jsx)("div", {
                              "aria-hidden": !0,
                              style: { display: "contents" },
                              children: (0, i.jsx)(X.A, {
                                  defaultAnimationState: $.oA.LOOP,
                                  giftStyle: v,
                                  className: eu.qq,
                              }),
                          }),
                          (0, i.jsx)(K.s_, { onClick: n, className: eu.b, "data-migration-pending": !0 }),
                      ],
                  }))
                : R
                  ? (e = t(A ?? null, n, y))
                  : r === es.VV.ONE_TIME
                    ? (e = (0, i.jsx)(et.fs, { step: y, onClose: n }))
                    : U &&
                      (B()(u in el.WN, `invalid sku id: ${u}`),
                      (e = (0, i.jsx)(ee.A, {
                          currentStep: y ?? void 0,
                          purchaseState: a,
                          premiumType: el.WN[u],
                          onClose: n,
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
    }, [s, N, k, g, v, n, a, t, A, h, u, y, S, E, d, c, W, L, U, R, r, M, D, p, _, m]);
}
var eo = n(482132);
n(322076);
var er = n(375708),
    ed = n(106451);
let ec = { [O.pn.GIFT_CUSTOMIZATION]: "xl", [O.pn.REVIEW]: "md", [O.pn.ADD_PAYMENT_STEPS]: "md" },
    e_ = (e) => {
        let {
                step: t,
                transitionState: n,
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
                          let { manaModalSizeFromProps: n } = t,
                              i = n ?? "md";
                          return null == e ? i : e in ec ? ec[e] : i;
                      })(t, { manaModalSizeFromProps: a });
        return (0, i.jsx)(I.Jg, {
            transitionState: n,
            size: _,
            returnRef: r,
            "aria-label": er.intl.string(er.t.q9EGps),
            onClose: async () => {
                await l();
            },
            children: d,
        });
    };
function ep(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: I,
            analyticsObject: D,
            analyticsSourceLocation: Y,
            analyticsSubscriptionType: B = ei.rzx.PREMIUM,
            onComplete: z,
            transitionState: K,
            initialPlanId: V,
            subscriptionTier: Z,
            onClose: q,
            trialId: J,
            reviewWarningMessage: $,
            planGroup: Q = el.LE,
            openInvoiceId: X,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: es,
            renderHeader: eu,
            skipUnifiedHeaderForSteps: ec,
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
            continueSessionToInitialStep: ey,
            paymentModalVersion: eC = "v1",
        } = e,
        { paymentSources: ek, hasPaymentSources: eg } = (0, S.jm)(),
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
        { activitySessionId: eH } = (0, m.V)(),
        { paymentAuthenticationState: eY } = (0, E.o)(),
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
    let e2 = null != e1 ? e1.modalSizeGetter : void 0,
        e3 = (0, v.O)(),
        e4 = null != Z && !eZ && (0, N.U9)(e3, Z),
        [e8, e9] = l.useState({
            load_id: eO.loadId,
            discovery_session_id: eO.discoverySessionId,
            payment_type: ei.frM[eF],
            location: I ?? D,
            source: Y,
            subscription_type: B,
            subscription_plan_id: eK?.id ?? V,
            is_gift: eZ,
            eligible_for_trial: null != J,
            location_stack: n,
            sku_id: eE,
            application_id: em,
            guild_id: eS,
            payment_modal_version: eC,
            activity_session_id: eH,
            eligible_for_discount: e4,
            sku_product_line: eV?.productLine,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eW,
            ...t,
        }),
        e7 = (0, H.W)(ek, eb),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, _.h)(),
        tn = null != ez ? ez.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e9((e) => {
            let n = null != eK ? (0, U.y8)(eK.id, !1, eZ, { paymentSourceId: eR.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eK?.id,
                price: n?.amount,
                regular_price: eK?.price,
                currency: ej,
                sku_id: eM,
                sku_product_line: eV?.productLine,
                ...t,
            };
        });
    }, [eK, eM, eZ, eR, ej, t, eV?.productLine]),
        (0, c.Ay)(() => {
            (0, y.b)({
                ...e8,
                continue_session_initial_step: ey,
                custom_checkout_flow: eG,
                has_saved_payment_source: eg,
                discount_id: null != e3 ? e3.discountId : tn,
            });
        }),
        l.useEffect(() => {
            null == eK && (null != eU && null != ey ? eD(eU) : eD(V)),
                null != eE ? ev(eE) : null != V && ev(R.A.get(V)?.skuId);
        }, [eD, eK, ev, V, eE, eU, ey]);
    let ti = l.useCallback(() => {
            let e = (0, F.lo)(eq) === F.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            x.default.track(ei.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e8,
                is_custom_message_edited: eZ && e && null != eJ ? eJ !== er.intl.string(er.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eZ && e,
                emoji_name: eZ && e && e$?.id == null ? e$?.surrogates : void 0,
                sound_id: eZ && e ? eQ?.soundId : void 0,
                duration_ms: t - eO.startTime,
                payment_source_type: e7?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = k.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" });
            eZ && null != eq && null != I && n && (0, M.WO)(I) && (0, g.Yd)(eq.id);
        }, [e8, e$, eJ, eq, eZ, eQ, eO.startTime, e7, te, tt, I]),
        tl = l.useMemo(() => () => q?.(eN === W.h.COMPLETED, eM), [q, eN, eM]),
        ts = (0, s.A)(() => Date.now(), [e0]),
        tu = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: s } = t,
                    u = Date.now();
                if (e === O.pn.CONFIRM && (ti(), z?.(l), eP)) return void tl();
                e6(e), eA?.(e), eL(null), e === O.pn.ADD_PAYMENT_STEPS && (o.h.wait(r.ET), o.h.wait(d.T3));
                let a = null != n ? n : e0;
                null === a || s
                    ? x.default.track(ei.HAw.PAYMENT_FLOW_LOADED, {
                          ...e8,
                          initial_step: a ?? e,
                          continue_session_initial_step: ey,
                          has_saved_payment_source: eg,
                      })
                    : x.default.track(ei.HAw.PAYMENT_FLOW_STEP, {
                          ...e8,
                          ...i,
                          from_step: a,
                          to_step: e === O.pn.ADD_PAYMENT_STEPS ? O.pn.PAYMENT_TYPE : e,
                          step_duration_ms: u - ts,
                          flow_duration_ms: u - eO.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e6, eA, eL, e0, ey, e8, ts, eO.startTime, ti, z, eP, tl, eg, te, tt],
        );
    return (
        (0, w.b)(e0, eY, tu, ew),
        l.useEffect(() => {
            null != e0 && e0 !== O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === b.C.PENDING
                ? tu(O.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e0 === O.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === b.C.SUCCESS && tu(O.pn.REVIEW);
        }, [e0, eB, tu]),
        (0, C.A)(tl),
        (0, L.s)(ex, () => q(!1), eZ, !ep),
        (0, w.QR)(eY),
        (0, i.jsx)(a.b, {
            className: ed.Xn,
            isShaking: eh && eN === W.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(e_, {
                step: e0,
                transitionState: K,
                isGift: eZ,
                giftRecipient: eq,
                returnRef: eI,
                manaModalSize: e5,
                modalSizeGetter: e2,
                handleClose: tl,
                children: (0, i.jsx)(eo.Ay, {
                    header: (0, i.jsx)(ea, { handleClose: tl, skipUnifiedHeaderForSteps: ec, renderHeader: eu }),
                    ...{
                        initialPlanId: V,
                        subscriptionTier: Z,
                        handleStepChange: tu,
                        handleClose: tl,
                        analyticsData: e8,
                        setAnalyticsData: e9,
                        trialId: J,
                        reviewWarningMessage: $,
                        planGroup: Q,
                        openInvoiceId: X,
                        analyticsLocation: I,
                        onSubscriptionConfirmation: ee,
                        renderPurchaseConfirmation: et,
                        postSuccessGuild: en,
                        followupSKUInfo: es,
                        skipConfirm: eP,
                        continueSessionToInitialStep: ey,
                    },
                }),
            }),
        })
    );
}
