n.d(t, { q: () => ei });
var i = n(627968),
    l = n(64700),
    u = n(976634),
    s = n(702841),
    o = n(568602),
    a = n(228366),
    r = n(158032),
    d = n(830382),
    c = n(964486),
    _ = n(11939),
    p = n(145659),
    m = n(31823),
    S = n(426398),
    E = n(211083),
    A = n(655857),
    f = n(666646),
    T = n(558620),
    I = n(427675),
    h = n(169797),
    P = n(211159),
    k = n(357669),
    y = n(319437),
    C = n(70730),
    D = n(45787),
    M = n(51501),
    g = n(422936),
    v = n(862990),
    w = n(410516),
    N = n(251913),
    b = n(166532),
    O = n(71319),
    U = n(344159),
    F = n(97352),
    R = n(174459),
    x = n(45938),
    G = n(428262),
    H = n(937008),
    Y = n(566980),
    W = n(615310),
    j = n(216641),
    L = n(364995),
    B = n(463376),
    z = n(584160),
    V = n(906234);
function J() {
    let {
            selectedSkuId: e,
            paymentSourceId: t,
            premiumDiscountPercent: n,
            selectedPlanId: u,
            isPremiumDiscountAppliedToCheckoutInvoice: s,
        } = (0, P.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            premiumDiscountPercent: e.get("premiumDiscountPercent"),
            isPremiumDiscountAppliedToCheckoutInvoice: e.get("isPremiumDiscountAppliedToCheckoutInvoice"),
            selectedPlanId: e.selectedPlanId,
        })),
        { isPremiumGroupPurchase: o, isEligibleForTrial: a, isEligibleForDiscount: r } = (0, B.i)(),
        d = (0, I.S3)(),
        c = (0, W.bB)(),
        { checkoutPaymentSources: _, storeCountry: p } = (0, L.t)(),
        m = l.useMemo(() => {
            if (null == t) return null;
            let e = _.find((e) => e.id === t);
            return null == e ? null : (e.relocationCountry ?? null);
        }, [_, t]),
        S = (0, V.G)(u ?? "") && !a,
        E = l.useMemo(
            () =>
                (0, z.uO)({
                    step: c ?? void 0,
                    skuId: e ?? (null != d ? d.id : null),
                    showBetaBadge: o,
                    showTrialBadge: a,
                    showPromoBadge: r || S,
                    premiumDiscountPercent: s ? n : null,
                    storeCountryFromCheckoutContext: p,
                    relocationCountry: m,
                }),
            [c, d, e, o, a, r, S, n, p, m, s],
        );
    return (0, i.jsx)(h.s3, { ...E });
}
function K(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, W.bB)();
    return l.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function Z(e) {
    let { renderHeader: t, handleClose: n, skipUnifiedHeaderForSteps: l } = e;
    return !(function (e) {
        let { step: t, skipUnifiedHeaderForSteps: n } = e;
        if (null == t) return !1;
        if (t === b.pn.REVIEW || t === b.pn.ADD_PAYMENT_STEPS) return !0;
        let i = null != n && n.includes(t);
        return z.MU.includes(t) && !i;
    })({ step: (0, W.bB)(), skipUnifiedHeaderForSteps: l })
        ? (0, i.jsx)(K, { renderHeader: t, handleClose: n })
        : (0, i.jsx)(J, {});
}
var q = n(482132);
n(322076);
var Q = n(652215),
    X = n(788868),
    $ = n(375708),
    ee = n(106451);
let et = { [b.pn.GIFT_CUSTOMIZATION]: "xl", [b.pn.REVIEW]: "md", [b.pn.ADD_PAYMENT_STEPS]: "md" },
    en = (e) => {
        let {
                step: t,
                transitionState: n,
                handleClose: l,
                isGift: u,
                giftRecipient: s,
                manaModalSize: o,
                modalSizeGetter: a,
                returnRef: r,
                children: d,
            } = e,
            c = (0, v.FY)({ isGift: u }),
            _ =
                null != a
                    ? a({ canCurrentlyPurchasePremiumGroup: c, isGift: u, giftRecipient: s })
                    : ((e, t) => {
                          let { manaModalSizeFromProps: n } = t,
                              i = n ?? "md";
                          return null == e ? i : e in et ? et[e] : i;
                      })(t, { manaModalSizeFromProps: o });
        return (0, i.jsx)(h.Jg, {
            transitionState: n,
            size: _,
            returnRef: r,
            "aria-label": $.intl.string($.t.q9EGps),
            onClose: async () => {
                await l();
            },
            children: d,
        });
    };
function ei(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: h,
            analyticsObject: v,
            analyticsSourceLocation: L,
            analyticsSubscriptionType: B = Q.rzx.PREMIUM,
            onComplete: z,
            transitionState: V,
            initialPlanId: J,
            subscriptionTier: K,
            onClose: et,
            trialId: ei,
            reviewWarningMessage: el,
            planGroup: eu = X.LE,
            openInvoiceId: es,
            onSubscriptionConfirmation: eo,
            renderPurchaseConfirmation: ea,
            postSuccessGuild: er,
            followupSKUInfo: ed,
            renderHeader: ec,
            skipUnifiedHeaderForSteps: e_,
            disableUnsupportedExternalSubscriptionHandler: ep = !1,
            applicationId: em,
            guildId: eS,
            skuId: eE,
            onStepChange: eA,
            shakeWhilePurchasing: ef = !1,
            isLargeModal: eT = !1,
            isMediumModal: eI = !1,
            returnRef: eh,
            skipConfirm: eP = !1,
            continueSessionToInitialStep: ek,
            paymentModalVersion: ey = "v1",
        } = e,
        { paymentSources: eC, hasPaymentSources: eD } = (0, S.jm)(),
        {
            selectedSkuId: eM,
            setSelectedSkuId: eg,
            setSelectedPlanId: ev,
            purchaseState: ew,
            setPurchaseState: eN,
            contextMetadata: eb,
            paymentSourceId: eO,
            setPurchaseError: eU,
            priceOptions: eF,
            activeSubscription: eR,
            purchaseType: ex,
            defaultPlanId: eG,
            customCheckoutFlow: eH,
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
        { displayCurrency: eW } = (0, A.Jn)(),
        { activitySessionId: ej } = (0, m.V)(),
        { paymentAuthenticationState: eL } = (0, E.o)(),
        eB = (0, s.bG)([O.A], () => O.A.purchaseTokenAuthState),
        ez = (0, f.sw)(),
        eV = (0, T.A)(),
        eJ = (0, I.S3)(),
        { isGift: eK, giftRecipient: eZ, customGiftMessage: eq, emojiConfetti: eQ, soundEffect: eX } = (0, H.Pv)(),
        e$ = (0, W.Z8)(),
        e0 = (0, W.bB)(),
        e1 = l.useMemo(() => {
            if (null != e$) return e$.options;
        }, [e$]),
        e6 = (0, W.l)(),
        e3 = "sm";
    eT ? (e3 = "xl") : (eI || e0 === b.pn.ADD_PAYMENT_STEPS) && (e3 = "md");
    let e5 = null != e1 ? e1.modalSizeGetter : void 0,
        e2 = (0, g.O)(),
        e8 = null != K && !eK && (0, w.U9)(e2, K),
        [e9, e4] = l.useState({
            load_id: eb.loadId,
            discovery_session_id: eb.discoverySessionId,
            payment_type: Q.frM[ex],
            location: h ?? v,
            source: L,
            subscription_type: B,
            subscription_plan_id: eV?.id ?? J,
            is_gift: eK,
            eligible_for_trial: null != ei,
            location_stack: n,
            sku_id: eE,
            application_id: em,
            guild_id: eS,
            payment_modal_version: ey,
            activity_session_id: ej,
            eligible_for_discount: e8,
            sku_product_line: eJ?.productLine,
            checkout_design: p.r.UNIFIED,
            checkout_flow: eY,
            ...t,
        }),
        e7 = (0, j.W)(eC, eO),
        { giftCardBalance: te, giftCardCurrency: tt } = (0, _.h)(),
        tn = null != ez ? ez.getDiscountIdIfExists() : void 0;
    l.useEffect(() => {
        e4((e) => {
            let n = null != eV ? (0, G.y8)(eV.id, !1, eK, { paymentSourceId: eF.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eV?.id,
                price: n?.amount,
                regular_price: eV?.price,
                currency: eW,
                sku_id: eM,
                sku_product_line: eJ?.productLine,
                ...t,
            };
        });
    }, [eV, eM, eK, eF, eW, t, eJ?.productLine]),
        (0, c.Ay)(() => {
            (0, k.b)({
                ...e9,
                continue_session_initial_step: ek,
                custom_checkout_flow: eH,
                has_saved_payment_source: eD,
                discount_id: null != e2 ? e2.discountId : tn,
            });
        }),
        l.useEffect(() => {
            null == eV && (null != eG && null != ek ? ev(eG) : ev(J)),
                null != eE ? eg(eE) : null != J && eg(F.A.get(J)?.skuId);
        }, [ev, eV, eg, J, eE, eG, ek]);
    let ti = l.useCallback(() => {
            let e = (0, x.lo)(eZ) === x.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            R.default.track(Q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e9,
                is_custom_message_edited: eK && e && null != eq ? eq !== $.intl.string($.t.ZkOo1U) : void 0,
                is_custom_emoji_sound_available: eK && e,
                emoji_name: eK && e && eQ?.id == null ? eQ?.surrogates : void 0,
                sound_id: eK && e ? eX?.soundId : void 0,
                duration_ms: t - eb.startTime,
                payment_source_type: e7?.type,
                gift_card_balance: te,
                gift_card_currency: tt,
            });
            let { enabled: n } = C.u.getConfig({ location: "PaymentModal emitPaymentFlowSuccess" }),
                i = null != h ? (0, M.NE)(h) : null;
            eK && null != eZ && n && null != i && (0, D.Yd)(eZ.id, i);
        }, [e9, eQ, eq, eZ, eK, eX, eb.startTime, e7, te, tt, h]),
        tl = l.useMemo(() => () => et?.(ew === Y.h.COMPLETED, eM), [et, ew, eM]),
        tu = (0, u.A)(() => Date.now(), [e0]),
        ts = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: l, emitPaymentFlowLoadedEvent: u } = t,
                    s = Date.now();
                if (e === b.pn.CONFIRM && (ti(), z?.(l), eP)) return void tl();
                e6(e), eA?.(e), eU(null), e === b.pn.ADD_PAYMENT_STEPS && (a.h.wait(r.ET), a.h.wait(d.T3));
                let o = null != n ? n : e0;
                null === o || u
                    ? R.default.track(Q.HAw.PAYMENT_FLOW_LOADED, {
                          ...e9,
                          initial_step: o ?? e,
                          continue_session_initial_step: ek,
                          has_saved_payment_source: eD,
                      })
                    : R.default.track(Q.HAw.PAYMENT_FLOW_STEP, {
                          ...e9,
                          ...i,
                          from_step: o,
                          to_step: e === b.pn.ADD_PAYMENT_STEPS ? b.pn.PAYMENT_TYPE : e,
                          step_duration_ms: s - tu,
                          flow_duration_ms: s - eb.startTime,
                          gift_card_balance: te,
                          gift_card_currency: tt,
                      });
            },
            [e6, eA, eU, e0, ek, e9, tu, eb.startTime, ti, z, eP, tl, eD, te, tt],
        );
    return (
        (0, N.b)(e0, eL, ts, eN),
        l.useEffect(() => {
            null != e0 && e0 !== b.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === O.C.PENDING
                ? ts(b.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                : e0 === b.pn.AWAITING_PURCHASE_TOKEN_AUTH && eB === O.C.SUCCESS && ts(b.pn.REVIEW);
        }, [e0, eB, ts]),
        (0, y.A)(tl),
        (0, U.s)(eR, () => et(!1), eK, !ep),
        (0, N.QR)(eL),
        (0, i.jsx)(o.b, {
            className: ee.Xn,
            isShaking: ef && ew === Y.h.PURCHASING,
            intensity: 2,
            children: (0, i.jsx)(en, {
                step: e0,
                transitionState: V,
                isGift: eK,
                giftRecipient: eZ,
                returnRef: eh,
                manaModalSize: e3,
                modalSizeGetter: e5,
                handleClose: tl,
                children: (0, i.jsx)(q.Ay, {
                    header: (0, i.jsx)(Z, { handleClose: tl, skipUnifiedHeaderForSteps: e_, renderHeader: ec }),
                    ...{
                        initialPlanId: J,
                        subscriptionTier: K,
                        handleStepChange: ts,
                        handleClose: tl,
                        analyticsData: e9,
                        setAnalyticsData: e4,
                        trialId: ei,
                        reviewWarningMessage: el,
                        planGroup: eu,
                        openInvoiceId: es,
                        analyticsLocation: h,
                        onSubscriptionConfirmation: eo,
                        renderPurchaseConfirmation: ea,
                        postSuccessGuild: er,
                        followupSKUInfo: ed,
                        skipConfirm: eP,
                        continueSessionToInitialStep: ek,
                    },
                }),
            }),
        })
    );
}
