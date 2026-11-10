n.d(t, { q: () => q });
var i = n(477900),
    a = n(582128),
    s = n(476231),
    l = n(568602),
    o = n(830382),
    r = n(964486),
    u = n(11939),
    c = n(145659),
    d = n(202475),
    _ = n(624413),
    p = n(31823),
    S = n(211083),
    E = n(655857),
    m = n(883645),
    A = n(166532),
    h = n(516106),
    T = n(442467),
    f = n(558620),
    k = n(427675),
    I = n(169797),
    P = n(129230),
    C = n(840251),
    y = n(688151),
    v = n(652215);
let g = new C.E([], y.$G.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
var b = n(319437),
    M = n(672619),
    D = n(97352),
    N = n(448645),
    O = n(45938),
    w = n(418200),
    W = n(792996),
    R = n(566980),
    F = n(216641),
    G = n(580133);
function U(e) {
    let { renderHeader: t, handleClose: n } = e,
        i = (0, m.s2)();
    return a.useMemo(() => {
        if (null != i && null != t) return t({ handleClose: n, step: i });
    }, [n, t, i]);
}
function x(e) {
    let { step: t } = e;
    return t === A.pn.REVIEW ? (0, i.jsx)(G.l, {}) : (0, i.jsx)(G.f, {});
}
function H(e) {
    let { renderHeader: t, handleClose: n } = e,
        s = (0, m.s2)();
    return a.useMemo(
        () =>
            s === A.pn.REVIEW || s === A.pn.ADD_PAYMENT_STEPS
                ? (0, i.jsx)(x, { step: s })
                : (0, i.jsx)(U, { renderHeader: t, handleClose: n }),
        [t, n, s],
    );
}
var L = n(482132);
n(322076);
var j = n(796694);
let Y = { [A.pn.GIFT_CUSTOMIZATION]: "xl", [A.pn.REVIEW]: "md", [A.pn.ADD_PAYMENT_STEPS]: "md" };
function z(e) {
    let {
            step: t,
            transitionState: n,
            handleClose: a,
            isGift: s,
            manaModalSize: l,
            modalSizeOverride: o,
            modalSizeGetter: r,
            returnRef: u,
            children: c,
        } = e,
        d =
            o ??
            (null != r
                ? r({ isGift: s })
                : (function (e, t) {
                      let { manaModalSizeFromProps: n } = t,
                          i = n ?? "md";
                      return null == e ? i : e in Y ? Y[e] : i;
                  })(t, { manaModalSizeFromProps: l }));
    return (0, i.jsx)(I.Jg, {
        transitionState: n,
        size: d,
        returnRef: u,
        "aria-label": W.intl.string(W.t.q9EGps),
        onClose: async () => {
            await a();
        },
        children: c,
    });
}
function q(e) {
    let {
            analyticsDataOverride: t,
            analyticsLocations: n,
            analyticsLocation: I,
            analyticsObject: C,
            analyticsSourceLocation: y,
            onComplete: G,
            onClose: U,
            onStepChange: x,
            tenantHandlers: Y,
            transitionState: q,
            renderHeader: V,
            applicationId: J,
            skuId: K,
            shakeWhilePurchasing: Z = !1,
            modalSizeOverride: B,
            disableDefaultSlideTransformStyling: Q = !1,
            returnRef: X,
            paymentModalVersion: $ = "v1",
        } = e,
        { onComplete: ee, onStepChange: et, onClose: en } = Y ?? {},
        {
            analyticsDataOverrideFromProps: ei,
            startedAttributes: ea,
            succeededAttributes: es,
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
        el = a.useCallback(
            (e) => {
                (G?.(e), ee?.(e));
            },
            [G, ee],
        ),
        eo = a.useCallback(
            (e, t) => {
                (U?.(e, t), en?.(e, t));
            },
            [U, en],
        ),
        er = a.useCallback(
            (e) => {
                (x?.(e), et?.(e));
            },
            [x, et],
        ),
        { paymentSources: eu, hasPaymentSources: ec } = (0, d.j)(),
        {
            isGift: ed,
            selectedSkuId: e_,
            setSelectedSkuId: ep,
            setSelectedPlanId: eS,
            purchaseState: eE,
            setPurchaseState: em,
            contextMetadata: eA,
            paymentSourceId: eh,
            setPurchaseError: eT,
            priceOptions: ef,
            purchaseType: ek,
            customCheckoutFlow: eI,
            unifiedCheckoutFlow: eP,
            quantity: eC,
            invoicePreview: ey,
            setLinkWalletEnabled: ev,
            analyticsSubscriptionType: eg,
            tenantManagesPaymentAuth: eb,
            trialId: eM,
            openInvoiceId: eD,
            skipConfirm: eN,
            continueSessionToInitialStep: eO,
            initialPlanId: ew,
        } = (0, h.t4)((e) => ({
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
            analyticsSubscriptionType: e.getAnalyticsSubscriptionType(),
            tenantManagesPaymentAuth: e.getTenantManagesPaymentAuth(),
            trialId: e.getSharedCheckoutParams().trialId,
            openInvoiceId: e.getSharedCheckoutParams().openInvoiceId,
            skipConfirm: !0 === e.getSharedCheckoutParams().skipConfirm,
            initialPlanId: e.getInitialPlanId(K),
            continueSessionToInitialStep: e.getSharedCheckoutParams().continueSessionToInitialStep,
        })),
        { displayCurrency: eW } = (0, E.Jn)(),
        { activitySessionId: eR } = (0, p.V)(),
        { paymentAuthenticationState: eF } = (0, S.o)(),
        eG = (0, f.A)(),
        eU = (0, k.S3)(),
        ex = (0, m.Z8)(),
        eH = (0, m.s2)(),
        eL = a.useMemo(() => {
            if (null != ex) return ex.options;
        }, [ex]),
        ej = (0, m.qv)(),
        eY = eH === A.pn.ADD_PAYMENT_STEPS ? "md" : "sm",
        ez = null != eL ? eL.modalSizeGetter : void 0,
        [eq, eV] = a.useState({
            load_id: eA.loadId,
            discovery_session_id: eA.discoverySessionId,
            payment_type: v.frM[ek],
            location: I ?? C,
            source: y,
            subscription_type: eg,
            subscription_plan_id: eG?.id ?? ew,
            is_gift: ed,
            eligible_for_trial: null != eM,
            location_stack: n,
            sku_id: K,
            application_id: J,
            payment_modal_version: $,
            activity_session_id: eR,
            sku_product_line: eU?.productLine,
            quantity: eC,
            checkout_design: c.r.UNIFIED,
            checkout_flow: eP,
            open_invoice_id: eD,
            ...ei,
        }),
        eJ = (0, F.W)(eu, eh),
        { giftCardBalance: eK, giftCardCurrency: eZ } = (0, u.h)(),
        { balance: eB } = (0, M.W0)(),
        eQ = null != ey ? ey.getDiscountIdIfExists() : void 0;
    (a.useEffect(() => {
        eV((e) => {
            let t = null != eG ? (0, N.y8)(eG.id, !1, ed, { paymentSourceId: ef.paymentSourceId }) : void 0;
            return {
                ...e,
                subscription_plan_id: eG?.id,
                price: t?.amount,
                regular_price: eG?.price,
                currency: eW,
                sku_id: e_,
                sku_product_line: eU?.productLine,
                quantity: eC,
                virtual_currency_balance: eB,
                ...ei,
            };
        });
    }, [eG, e_, ed, ef, eW, ei, eU?.productLine, eC, eB]),
        (0, r.Ay)(() => {
            !(function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (P.default.track(v.HAw.PAYMENT_FLOW_STARTED, e, t), g.trigger());
            })({
                ...eq,
                ...ea,
                virtual_currency_balance: eB,
                continue_session_initial_step: eO,
                custom_checkout_flow: eI,
                has_saved_payment_source: ec,
                discount_id: ea?.discount_id ?? eQ,
            });
        }),
        a.useEffect(() => {
            (null == eG && eS(ew), null != K ? ep(K) : null != ew && ep(D.A.get(ew)?.skuId));
        }, [eS, eG, ep, ew, K]));
    let eX = (function () {
            let { isGift: e, giftRecipient: t, customGiftMessage: n, emojiConfetti: i, soundEffect: s } = (0, w.Pv)();
            return a.useMemo(() => {
                let a = e && (0, O.lo)(t) === O.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD;
                return {
                    is_custom_message_edited: a && null != n ? n !== W.intl.string(W.t.ZkOo1U) : void 0,
                    is_custom_emoji_sound_available: a,
                    emoji_name: a && null != i && null == i.id ? i.surrogates : void 0,
                    sound_id: a && null != s ? s.soundId : void 0,
                };
            }, [e, t, n, i, s]);
        })(),
        e$ = a.useCallback(() => {
            let e = Date.now();
            P.default.track(v.HAw.PAYMENT_FLOW_SUCCEEDED, {
                ...eq,
                ...eX,
                ...es,
                duration_ms: e - eA.startTime,
                payment_source_type: eJ?.type,
                gift_card_balance: eK,
                gift_card_currency: eZ,
                virtual_currency_balance: eB,
            });
        }, [eq, eX, es, eA.startTime, eJ, eK, eZ, eB]),
        e0 = a.useCallback(() => eo(eE === R.h.COMPLETED, e_), [eo, eE, e_]),
        e1 = (0, s.A)(() => Date.now(), [eH]),
        e2 = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: i, fulfillment: a, emitPaymentFlowLoadedEvent: s } = t,
                    l = Date.now();
                if (e === A.pn.CONFIRM && (e$(), el(a), eN)) return void e0();
                (ej(e), er(e), eT(null), e === A.pn.ADD_PAYMENT_STEPS && (0, o.T3)());
                let r = null != n ? n : eH;
                null === r || s
                    ? P.default.track(v.HAw.PAYMENT_FLOW_LOADED, {
                          ...eq,
                          initial_step: r ?? e,
                          continue_session_initial_step: eO,
                          has_saved_payment_source: ec,
                      })
                    : P.default.track(v.HAw.PAYMENT_FLOW_STEP, {
                          ...eq,
                          ...i,
                          from_step: r,
                          to_step: e === A.pn.ADD_PAYMENT_STEPS ? A.pn.PAYMENT_ELEMENT : e,
                          step_duration_ms: l - e1,
                          flow_duration_ms: l - eA.startTime,
                          gift_card_balance: eK,
                          gift_card_currency: eZ,
                      });
            },
            [ej, er, eT, eH, eO, eq, e1, eA.startTime, e$, el, eN, e0, ec, eK, eZ],
        );
    ((0, _.b)(eH, eF, e2, em, !1, void 0, eb),
        (function (e) {
            let t = (0, m.s2)(),
                { purchaseTokenAuthState: n } = (0, h.t4)((e) => ({
                    purchaseTokenAuthState: e.purchaseTokenAuthState,
                }));
            a.useEffect(() => {
                null != t && t !== A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === T.C.PENDING
                    ? e(A.pn.AWAITING_PURCHASE_TOKEN_AUTH)
                    : t === A.pn.AWAITING_PURCHASE_TOKEN_AUTH && n === T.C.SUCCESS && e(A.pn.REVIEW);
            }, [t, n, e]);
        })(e2),
        (0, b.A)(e0),
        (0, _.QR)(eF, eb));
    let e6 = a.useCallback(
        (e) => {
            (ev(e?.linkWalletEnabled ?? !0), e2(A.pn.ADD_PAYMENT_STEPS));
        },
        [e2, ev],
    );
    return (0, i.jsx)(l.b, {
        className: j.Xn,
        isShaking: Z && eE === R.h.PURCHASING,
        intensity: 2,
        children: (0, i.jsx)(z, {
            step: eH,
            transitionState: q,
            isGift: ed,
            returnRef: X,
            manaModalSize: eY,
            modalSizeOverride: B,
            modalSizeGetter: ez,
            handleClose: e0,
            children: (0, i.jsx)(L.Ay, {
                disableDefaultSlideTransformStyling: Q,
                header: (0, i.jsx)(H, { handleClose: e0, renderHeader: V }),
                ...{
                    handleStepChange: e2,
                    handleClose: e0,
                    handlePaymentSourceAdd: e6,
                    analyticsData: eq,
                    setAnalyticsData: eV,
                    analyticsLocation: I,
                    analyticsSourceLocation: y,
                },
            }),
        }),
    });
}
