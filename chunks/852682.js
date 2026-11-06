n.d(t, { q: () => V });
var i = n(477900),
    a = n(582128),
    l = n(476231),
    s = n(568602),
    r = n(830382),
    u = n(964486),
    o = n(11939),
    c = n(145659),
    d = n(202475),
    _ = n(31823),
    p = n(211083),
    E = n(655857),
    S = n(883645),
    A = n(166532),
    m = n(516106),
    T = n(442467),
    f = n(558620),
    h = n(427675),
    k = n(169797),
    v = n(129230),
    P = n(840251),
    C = n(688151),
    I = n(652215);
let y = new P.E([], C.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var M = n(319437),
    D = n(251913),
    b = n(672619),
    N = n(97352),
    g = n(722178),
    O = n(45938),
    w = n(418200),
    W = n(792996),
    R = n(566980),
    x = n(216641),
    U = n(580133);
function F(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, S.s2)();
    return a.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function G(e) {
    let { step: t } = e;
    return t === A.pn.REVIEW ? (0, i.jsx)(U.l, {}) : (0, i.jsx)(U.f, {});
}
function L(e) {
    let { renderHeader: t, handleClose: n } = e,
        l = (0, S.s2)();
    return a.useMemo(
        () =>
            l === A.pn.REVIEW || l === A.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(G, { step: l })
                : (0, i.jsx)(F, { renderHeader: t, handleClose: n }),
        [t, n, l],
    );
}
var H = n(482132);
n(322076);
var j = n(682901),
    Y = n(796694);
let z = { [A.pn.GIFT_CUSTOMIZATION]: "xl", [A.pn.REVIEW]: "md", [A.pn.ADD_PAYMENT_STEPS]: "md" };
function q(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: a,
            isGift: l,
            manaModalSize: s,
            modalSizeOverride: r,
            modalSizeGetter: u,
            returnRef: o,
            children: c,
        } = e,
        d =
            r ??
            (null != u
                ? u({ isGift: l })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in z ? z[e] : i;
                  })(t, { manaModalSizeFromProps: s }));
    return (0, i.jsx)(k.Jg, {
        transitionState: n,
        size: d,
        returnRef: o,
        "aria-label": W.intl.string(W.t.q9EGps),
        onClose: async () => {
            await a();
        },
        children: c,
    });
}
function V(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: k,
            analyticsObject: P,
            analyticsSourceLocation: C,
            analyticsSubscriptionType: U = I.rzx.PREMIUM,
            onComplete: F,
            onClose: G,
            onStepChange: z,
            tenantHandlers: V,
            transitionState: J,
            initialPlanId: K,
            subscriptionTier: Z,
            trialId: B,
            reviewWarningMessage: Q,
            planGroup: X = j.LE,
            openInvoiceId: $,
            onSubscriptionConfirmation: ee,
            renderPurchaseConfirmation: et,
            postSuccessGuild: en,
            followupSKUInfo: ei,
            renderHeader: ea,
            applicationId: el,
            guildId: es,
            skuId: er,
            shakeWhilePurchasing: eu = !1,
            isLargeModal: eo = !1,
            isMediumModal: ec = !1,
            modalSizeOverride: ed,
            disableDefaultSlideTransformStyling: e_ = !1,
            returnRef: ep,
            skipConfirm: eE = !1,
            continueSessionToInitialStep: eS,
            startingStepOverride: eA,
            tenantManagesPaymentAuth: em = !1,
            paymentModalVersion: eT = "v1",
        } = e,
        { onComplete: ef, onStepChange: eh, onClose: ek } = V ?? {},
        {
            analyticsDataOverrideFromProps: ev,
            startedAttributes: eP,
            succeededAttributes: eC,
        } = a.useMemo(() => {
            if (null == t)
                return {
                    analyticsDataOverrideFromProps: void 0,
                    startedAttributes: void 0,
                    succeededAttributes: void 0,
                };
            let { startedAttributes: e, succeededAttributes: n, ...i } = t;
            return { analyticsDataOverrideFromProps: i, startedAttributes: e, succeededAttributes: n };
        }, [t]),
        eI = a.useCallback(
            (e) => {
                (F?.(e), ef?.(e));
            },
            [F, ef],
        ),
        ey = a.useCallback(
            (e, t) => {
                (G?.(e, t), ek?.(e, t));
            },
            [G, ek],
        ),
        eM = a.useCallback(
            (e) => {
                (z?.(e), eh?.(e));
            },
            [z, eh],
        ),
        { paymentSources: eD, hasPaymentSources: eb } = (0, d.j)(),
        {
            isGift: eN,
            selectedSkuId: eg,
            setSelectedSkuId: eO,
            setSelectedPlanId: ew,
            purchaseState: eW,
            setPurchaseState: eR,
            contextMetadata: ex,
            paymentSourceId: eU,
            setPurchaseError: eF,
            priceOptions: eG,
            purchaseType: eL,
            customCheckoutFlow: eH,
            unifiedCheckoutFlow: ej,
            quantity: eY,
            invoicePreview: ez,
            setLinkWalletEnabled: eq,
        } = (0, m.t4)((e) => ({
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            purchaseState: e.purchaseState,
            setPurchaseState: e.setPurchaseState,
            contextMetadata: e.contextMetadata,
            paymentSourceId: e.paymentSourceId,
            setPurchaseError: e.setPurchaseError,
            priceOptions: e.checkoutPriceOptions,
            purchaseType: e.purchaseType,
            customCheckoutFlow: e.customCheckoutFlow,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            quantity: e.quantity,
            invoicePreview: e.checkoutInvoicePreview,
            setLinkWalletEnabled: e.setLinkWalletEnabled,
        })),
        { displayCurrency: eV } = (0, E.Jn)(),
        { activitySessionId: eJ } = (0, _.V)(),
        { paymentAuthenticationState: eK } = (0, p.o)(),
        eZ = (0, f.A)(),
        eB = (0, h.S3)(),
        eQ = (0, S.Z8)(),
        eX = (0, S.s2)(),
        e$ = a.useMemo(() => {
            if (null != eQ) return eQ.options;
        }, [eQ]),
        e0 = (0, S.qv)(),
        e1 = "sm";
    eo ? (e1 = "xl") : (ec || eX === A.pn.ADD_PAYMENT_STEPS) && (e1 = "md");
    let e2 = null != e$ ? e$.modalSizeGetter : void 0,
        [e6, e8] = a.useState({
            load_id: ex.loadId,
            discovery_session_id: ex.discoverySessionId,
            payment_type: I.frM[eL],
            location: k ?? P,
            source: C,
            subscription_type: U,
            subscription_plan_id: eZ?.id ?? K,
            is_gift: eN,
            eligible_for_trial: null != B,
            location_stack: n,
            sku_id: er,
            application_id: el,
            guild_id: es,
            payment_modal_version: eT,
            activity_session_id: eJ,
            sku_product_line: eB?.productLine,
            quantity: eY,
            checkout_design: c.r.UNIFIED,
            checkout_flow: ej,
            open_invoice_id: $,
            ...ev,
        }),
        e5 = (0, x.W)(eD, eU),
        { giftCardBalance: e3, giftCardCurrency: e4 } = (0, o.h)(),
        { balance: e9 } = (0, b.W0)(),
        e7 = null != ez ? ez.getDiscountIdIfExists() : void 0;
    (a.useEffect(() => {
        e8((e) => {
            let t = null != eZ ? (0, g.y8)(eZ.id, !1, eN, { paymentSourceId: eG.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eZ?.id,
                price: t?.amount,
                regular_price: eZ?.price,
                currency: eV,
                sku_id: eg,
                sku_product_line: eB?.productLine,
                quantity: eY,
                virtual_currency_balance: e9,
                ...ev,
            };
        });
    }, [eZ, eg, eN, eG, eV, ev, eB?.productLine, eY, e9]),
        (0, u.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (v.default.track(I.HAw.PAYMENT_FLOW_STARTED, e, t), y.trigger());
            })({
                ...e6,
                ...eP,
                virtual_currency_balance: e9,
                continue_session_initial_step: eS,
                custom_checkout_flow: eH,
                has_saved_payment_source: eb,
                discount_id: eP?.discount_id ?? e7,
            });
        }),
        a.useEffect(() => {
            (null == eZ && ew(K), null != er ? eO(er) : null != K && eO(N.A.get(K)?.skuId));
        }, [ew, eZ, eO, K, er]));
    let te = (function () {
            let { isGift: e, giftRecipient: t, customGiftMessage: n, emojiConfetti: i, soundEffect: l } = (0, w.Pv)();
            return a.useMemo(() => {
                let a = e && (0, O.lo)(t) === O.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
                return {
                    is_custom_message_edited: a && null != n ? n !== W.intl.string(W.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: a,
                    emoji_name: a && null != i && null == i.id ? i.surrogates : void 0,
                    sound_id: a && null != l ? l.soundId : void 0,
                };
            }, [e, t, n, i, l]);
        })(),
        tt = a.useCallback(() => {
            let e = Date.now();
            v.default.track(I.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...e6,
                ...te,
                ...eC,
                duration_ms: e - ex.startTime,
                payment_source_type: e5?.type,
                gift_card_balance: e3,
                gift_card_currency: e4,
                virtual_currency_balance: e9,
            });
        }, [e6, te, eC, ex.startTime, e5, e3, e4, e9]),
        tn = a.useCallback(() => ey(eW === R.h.COMPLETED, eg), [ey, eW, eg]),
        ti = (0, l.A)(() => Date.now(), [eX]),
        ta = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: a, emitPaymentFlowLoadedEvent: l } = t,
                    s = Date.now();
                if (e === A.pn.CONFIRM && (tt(), eI(a), eE)) return void tn();
                (e0(e), eM(e), eF(null), e === A.pn.ADD_PAYMENT_STEPS && (0, r.T3)());
                let u = null != n ? n : eX;
                null === u || l
                    ? v.default.track(I.HAw.PAYMENT_FLOW_LOADED, {
                          ...e6,
                          initial_step: u ?? e,
                          continue_session_initial_step: eS,
                          has_saved_payment_source: eb,
                      })
                    : v.default.track(I.HAw.PAYMENT_FLOW_STEP, {
                          ...e6,
                          ...i,
                          from_step: u,
                          to_step: e === A.pn.ADD_PAYMENT_STEPS ? A.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: s - ti,
                          flow_duration_ms: s - ex.startTime,
                          gift_card_balance: e3,
                          gift_card_currency: e4,
                      });
            },
            [e0, eM, eF, eX, eS, e6, ti, ex.startTime, tt, eI, eE, tn, eb, e3, e4],
        );
    ((0, D.b)(eX, eK, ta, eR, !1, void 0, em),
        (function (e) {
            let t = (0, S.s2)(),
                { purchaseTokenAuthState: n } = (0, m.t4)((e) => ({
                    purchaseTokenAuthState: e.purchaseTokenAuthState,
                }));
            a.useEffect(() => {
                null != t && t !== A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === T.C.PENDING
                    ? e(A.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                    : t === A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === T.C.SUCCESS && e(A.pn.REVIEW);
            }, [t, n, e]);
        })(ta),
        (0, M.A)(tn),
        (0, D.QR)(eK, em));
    let tl = a.useCallback(
        (e) => {
            (eq(e?.linkWalletEnabled ?? !0), ta(A.pn.ADD_PAYMENT_STEPS));
        },
        [ta, eq],
    );
    return (0, i.jsx)(s.b, {
        className: Y.Xn,
        isShaking: eu && eW === R.h.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(q, {
            step: eX,
            transitionState: J,
            isGift: eN,
            returnRef: ep,
            manaModalSize: e1,
            modalSizeOverride: ed,
            modalSizeGetter: e2,
            handleClose: tn,
            children: (0, i.jsx)(H.Ay, {
                disableDefaultSlideTransformStyling: e_,
                header: (0, i.jsx)(L, { handleClose: tn, renderHeader: ea }),
                ...{
                    initialPlanId: K,
                    subscriptionTier: Z,
                    handleStepChange: ta,
                    handleClose: tn,
                    handlePaymentSourceAdd: tl,
                    analyticsData: e6,
                    setAnalyticsData: e8,
                    trialId: B,
                    reviewWarningMessage: Q,
                    planGroup: X,
                    openInvoiceId: $,
                    analyticsLocation: k,
                    onSubscriptionConfirmation: ee,
                    renderPurchaseConfirmation: et,
                    postSuccessGuild: en,
                    followupSKUInfo: ei,
                    skipConfirm: eE,
                    continueSessionToInitialStep: eS,
                    startingStepOverride: eA,
                    analyticsSourceLocation: C,
                },
            }),
        }),
    });
}
