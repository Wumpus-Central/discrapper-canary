n.d(t, { E: () => t_, default: () => th, STEPS: () => tg });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    s = n(228366),
    a = n(73825),
    u = n(793574),
    o = n(688810),
    d = n(120700),
    c = n(426398),
    p = n(558620),
    m = n(722847),
    E = n(960851),
    S = n(380619),
    I = n(70283),
    A = n(192308),
    P = n(982240),
    _ = n(566980),
    g = n(998370),
    h = n(315693),
    x = n(607399),
    f = n(795791),
    T = n(788868),
    j = n(561794),
    R = n(97352),
    M = n(166403),
    C = n(937008),
    b = n(768050),
    y = n(166532),
    N = n(491057),
    k = n(314671),
    O = n(735305),
    v = n(343834),
    G = n(926795),
    L = n(862241),
    U = n(615310),
    D = n(811656),
    w = n(284009),
    F = n.n(w),
    H = n(735438),
    B = n(877624),
    W = n(554146),
    z = n(964486),
    V = n(841702),
    K = n(367727),
    q = n(374200),
    Y = n(771566),
    Z = n(174459),
    X = n(625494),
    Q = n(45938),
    $ = n(615396),
    J = n(482132),
    ee = n(364840),
    et = n(821609),
    en = n(778712),
    el = n(97808),
    er = n(775602),
    ei = n(912140),
    es = n(674658),
    ea = n(780898),
    eu = n(344346),
    eo = n(898461),
    ed = n(837015),
    ec = n(61750),
    ep = n(287809),
    em = n(758836),
    eE = n(375708),
    eS = n(258915);
function eI(e) {
    let { rewardSkuId: t, onClose: n } = e,
        s = (0, i.bG)([ep.default], () => ep.default.getCurrentUser()),
        a = (0, i.bG)([er.A], () => er.A.useReducedMotion),
        { analyticsLocations: u } = (0, o.Ay)(),
        d = en._3.SIZE_32,
        { product: c, isFetching: p } = (0, es.q)(t),
        [m, E] = r.useState(!1),
        S = c?.items[0],
        {
            isNameplateReward: I,
            nameplateData: A,
            rewardAvatarDecorationSrc: P,
        } = r.useMemo(
            () =>
                null == S
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, ed.F)(S)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: S.skuId,
                                src: S.asset,
                                palette: (0, ea.H6)(S.palette ?? "sky"),
                                imgAlt: S.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, eo.T)(S)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, ei.A)({
                                  legacyAssetId: S.asset,
                                  skuId: S.skuId,
                                  size: d,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [S, d, a],
        );
    return (0, l.jsx)(J.UX, {
        children: (0, l.jsx)(ee.j, {
            children: (0, l.jsxs)("div", {
                className: eS.W,
                children: [
                    I && null != A
                        ? (0, l.jsx)("div", {
                              className: eS.D,
                              onMouseEnter: () => E(!0),
                              onMouseLeave: () => E(!1),
                              children: (0, l.jsx)(eu.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: A,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(el.Js, {
                              "aria-label": s?.username,
                              size: d,
                              src: s?.getAvatarURL(void 0, (0, en.FT)(d), !a),
                              avatarDecoration: P,
                          }),
                    (0, l.jsx)(et.$, {
                        variant: "primary",
                        text: eE.intl.string(eE.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, ec.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: em.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var eA = n(216641),
    eP = n(921925),
    e_ = n(652215),
    eg = n(49999);
function eh(e) {
    let t,
        {
            handleClose: s,
            planGroup: a,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: o,
            postSuccessGuild: d,
            followupSKUInfo: E,
            continueSessionToInitialStep: I,
        } = e,
        { paymentSources: P } = (0, c.jm)(),
        {
            selectedSkuId: _,
            updatedSubscription: g,
            paymentSourceId: h,
            isPremiumGroupPurchase: x,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
        })),
        {
            activeSubscription: f,
            startingPremiumSubscriptionPlanIdRef: T,
            startingFractionalPremiumEndsAtRef: j,
        } = (0, b.P5)(),
        R = (0, p.A)(),
        M = (0, U.bB)(),
        {
            isGift: y,
            giftRecipient: k,
            giftCode: O,
            hasSentMessage: v,
            isSendingMessage: G,
            sendGiftMessage: L,
            claimableRewards: D,
            selectedGiftingPromotionReward: w,
        } = (0, C.Pv)(),
        { confirmationFooter: ee } = (0, N.cG)(),
        et = (0, S.px)(R, y, D),
        en = (0, S.Mq)(R),
        el = (0, V.Mv)(w, !1),
        er = (0, i.bG)([q.A], () => q.A.getGiftPromotion()?.id),
        ei = (0, i.bG)([q.A], () => {
            let e = q.A.getMarketingComponentByType(B.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        es = (0, eA.g)(P, h),
        ea = y && null != w && null != el && en;
    F()(null != R, "Expected plan to selected"),
        F()(null != _, "Expected selectedSkuId"),
        F()(null != M, "Step should be set");
    let eu = r.useCallback(() => {
        s(), u?.();
    }, [s, u]);
    (0, z.Ay)(() => {
        x &&
            Z.default.track(e_.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != g,
                has_any_premium_group: g?.hasAnyPremiumGroup ?? !1,
                subscription_id: g?.id,
            });
    }),
        r.useEffect(() => {
            function e() {
                if (x)
                    if (null != g && g.hasAnyPremiumGroup) {
                        Z.default.track(e_.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: g.id,
                        });
                        let e = (0, H.uniqueId)("premium-group-purchase-flow-modal");
                        (0, A.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("24789"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: g,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            X._.dispatch(e_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    X._.dispatch(e_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, A.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        Z.default.track(e_.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != g,
                            has_any_premium_group: g?.hasAnyPremiumGroup ?? !1,
                        }),
                            X._.dispatch(e_.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                X._.subscribe(e_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    X._.unsubscribe(e_.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [x, g]),
        r.useEffect(() => {
            !y || null == k || null == O || v || G || (0, Q.Ik)(k) || L({ onSubscriptionConfirmation: u });
        }, [L, y, k, O, v, G, u]),
        r.useEffect(() => {
            et &&
                null != ei &&
                null != er &&
                (0, K.qr)(W.M.GIFTING_PROMOTION_REMINDER, er, { dismissAction: eg.i.INDIRECT_ACTION });
        }, [ei, er, et]);
    let eo = null != I ? Y.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != o) t = o(R, eu, g);
    else if (y) t = (0, l.jsx)(Y.fw, { planId: R.id, onClose: eu });
    else {
        let e =
            T.current === R.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: E,
                      startingPremiumSubscriptionPlanId: T.current,
                      isDowngrade: null != f && (0, $.vT)(f, R.id, a),
                  };
        t = (0, l.jsx)(Y.Ay, {
            planId: R.id,
            onClose: eu,
            paymentSourceType: es,
            hideClose: null != ee,
            startingFractionalPremiumEndsAt: j.current,
            customCTAType: eo,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(J.dZ, { children: [(0, l.jsx)(eP.A, {}), t] }),
            null != ee && ee,
            ea && null != w && (0, l.jsx)(eI, { rewardSkuId: w, onClose: eu }),
        ],
    });
}
var ex = n(20742),
    ef = n(430993),
    eT = n(331322),
    ej = n(503698),
    eR = n.n(ej),
    eM = n(575593),
    eC = n(187322),
    eb = n(890856),
    ey = n(947641),
    eN = n(661531),
    ek = n(534514),
    eO = n(834730),
    ev = n(713517),
    eG = n(929283),
    eL = n(761365),
    eU = n(267861);
let eD = (e) => {
    let t,
        n,
        { skuId: i, user: s, claimed: a, onSelect: u, selectedSkuId: o } = e,
        [d, c] = r.useState(null),
        p = r.useCallback((e) => {
            c(e);
        }, []),
        m = r.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: E } = (0, ev.A)(m),
        S = !a && E,
        { product: I } = (0, es.q)(i);
    if (null == I) return null;
    let A = I.items[0];
    return null == A
        ? null
        : ((0, eo.T)(A)
              ? ((n = eM.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(eG.i, { item: A, user: s, isHighlighted: S, avatarSize: en._3.SIZE_96 })))
              : (0, ed.F)(A) &&
                ((n = eM.R.NAMEPLATE),
                (t = (0, l.jsx)(eL.A, { nameplate: A, user: s, isHighlighted: S, size: "small" }))),
          (0, l.jsx)(eC.vN, {
              children: (0, l.jsxs)(eb.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == i || null == u || a || u(i);
                  },
                  className: eR()(eU._x, { [eU.Vp]: !a, [eU.mr]: S, [eU.md]: o === i }),
                  children: [
                      (0, l.jsx)("div", {
                          className: eR()(eU.VH, {
                              [eU._Q]: n === eM.R.AVATAR_DECORATION,
                              [eU.M4]: n === eM.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: eR()(eU.i1, { [eU.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(ey.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eN.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: eU.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: eU.tZ,
                          children: [
                              (0, l.jsx)(ek.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eO.E, {
                                  variant: "text-sm/normal",
                                  children: a ? eE.intl.string(eE.t["6cfuDj"]) : eE.intl.string(eE.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var ew = n(696208),
    eF = n(683433),
    eH = n(344159);
function eB(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: s,
            showBackButton: a,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: d,
            isNextDisabled: m = !1,
        } = e,
        { paymentSources: E } = (0, c.jm)(),
        S = (0, p.A)(),
        { isGift: I, claimableRewards: A } = (0, C.Pv)();
    i = i ?? E;
    let {
            variant: P,
            text: _,
            onClick: g,
            disabled: h,
        } = eW({
            onStepChange: t,
            selectedPlanId: (n = n ?? S?.id),
            isGift: I,
            claimableRewards: A,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: d,
            isNextDisabled: m,
        }),
        x = r.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: P, text: _, onClick: g, disabled: h }]
                    : [{ variant: "primary", text: eE.intl.string(eE.t.XqMe3N), disabled: !0 }],
            [P, _, g, h, n, u],
        );
    return (0, l.jsx)(ew.H, { leading: a && null != s ? (0, l.jsx)(eF.A, { onClick: s }) : void 0, actions: x });
}
let eW = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: r,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: u,
            isNextDisabled: o = !1,
        } = e,
        d = (0, i.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        c = (0, p.A)(),
        m = (0, U.bB)(),
        { hasEntitlements: E } = (0, eH.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (E && !u);
    var A = a ? eE.intl.string(eE.t.PDTjLN) : eE.intl.string(eE.t.XqMe3N),
        P = y.pn.ADD_PAYMENT_STEPS;
    return (
        I && (P = y.pn.REVIEW),
        (0, S.px)(c, l, r) && m !== y.pn.SELECT_FREE_SKU && (P = y.pn.SELECT_FREE_SKU),
        { variant: "primary", text: A, onClick: () => t(P), disabled: o }
    );
};
var ez = n(328232);
function eV(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, p.A)(),
        a = (0, U.bB)(),
        { setSelectedGiftingPromotionReward: u, selectedGiftingPromotionReward: o, claimableRewards: d } = (0, C.Pv)(),
        c = (0, i.bG)([ep.default], () => ep.default.getCurrentUser()),
        E = (0, i.yK)([q.A], () => q.A.getGiftPromotionRewardSkuIds()),
        S = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, o),
        [I, A] = r.useState(S),
        [P, _] = r.useState(!1);
    r.useEffect(() => {
        P || null != o || null == S || (u(S), A(S));
    }, [S, P, o, u]),
        F()(null != s, "Expected plan to selected"),
        F()(null != n, "Expected selectedSkuId"),
        F()(null != a, "Step should be set");
    let g = r.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        h = r.useMemo(() => 0 === E.length || null == I || !g, [E, I, g]);
    r.useEffect(() => {
        if (0 === E.length) {
            A(void 0), u(void 0);
            return;
        }
        (null != I && g && E.includes(I)) || null == I || (A(void 0), u(void 0));
    }, [E, g, I, u]);
    let x = (e) => {
            u(e), A(e), _(!0);
        },
        f = E.map((e) =>
            (0, l.jsx)(
                eD,
                { skuId: e, claimed: null != d && !d.includes(e), user: c, onSelect: x, selectedSkuId: I },
                e,
            ),
        ),
        T = (0, l.jsx)(J.UX, {
            children: (0, l.jsx)(eB, {
                onStepChange: t,
                onBackClick: () => t(y.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: h,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: eE.intl.string(eE.t.OEtqpm),
                subtitle: eE.intl.string(eE.t.h2nMp0),
            }),
            (0, l.jsx)(ef.c, {
                children: (0, l.jsx)(eT.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: ez.Dq, children: f }),
                }),
            }),
            T,
        ],
    });
}
var eK = n(800471),
    eq = n(702841),
    eY = n(683071),
    eZ = n(428644),
    eX = n(717925),
    eQ = n(742810),
    e$ = n(463376),
    eJ = n(699595),
    e0 = n(543767),
    e1 = n(807098),
    e6 = n(298305),
    e4 = n(387745);
function e3() {
    let e = (0, i.bG)([q.A], () => {
            let e = q.A.getMarketingComponentByType(B.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, C.Pv)(),
        n = (0, e1.T)(e?.asset),
        r = (0, e1.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, S.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        u = (0, S.gc)(r);
    null != u && ((u.backgroundSize = "cover, auto"), (u.backgroundPosition = "right center, 0% 0%"));
    let o = (0, S.x)(u, a);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: e4.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: e4.my,
                      children: (0, l.jsx)(e6.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: en._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eO.E, {
                      variant: "text-md/medium",
                      className: e4._M,
                      color: "always-white",
                      children: eE.intl.string(eE.t.Abiuci),
                  }),
              ],
          });
}
var e8 = n(410516),
    e7 = n(361597),
    e2 = n(975571),
    e5 = n(428262),
    e9 = n(69494),
    te = n(534479),
    tt = n(340034),
    tn = n(50956),
    tl = n(71867),
    tr = n(249872);
function ti(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: a, handleClose: u } = e,
        {
            selectedSkuId: o,
            priceOptions: d,
            referralTrialOfferId: c,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { activeSubscription: E, defaultPlanId: I } = (0, b.P5)(),
        { isPremium: A, isEligibleForTrial: P, isEligibleForDiscount: _, discountOffer: g } = (0, e$.i)(),
        h = (0, e8.YJ)(g),
        x = (0, p.A)(),
        f = (0, U.bB)(),
        { isGift: T, giftRecipient: j, giftMessage: M, claimableRewards: N } = (0, C.Pv)(),
        k = (0, S.Mq)(x),
        O = (0, eq.bG)([q.A], () => {
            let e = q.A.getMarketingComponentByType(B.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        v = T && k && null != N && N.length > 0 && O,
        G = (P || _) ?? !1,
        L = r.useMemo(() => (0, e5.Tm)({ skuId: o, isPremium: A, defaultPlanId: I }), [o, A, I]),
        D = _ && null != h && L.includes(h) ? h : L[0],
        w = (0, eq.bG)([R.A], () => R.A.get(D)),
        H = [{ planId: w?.id, quantity: 1 }],
        [W, z] = r.useState(G),
        [V, K] = (0, e0.YV)({
            items: H,
            renewal: !1,
            preventFetch: !G,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    r.useEffect(() => {
        G && z(V?.subscriptionPeriodEnd == null);
    }, [V, G]),
        (0, eZ.A)(
            "Payment Modal Plan Select Step",
            W,
            5,
            { proratedInvoicePreview: V, proratedInvoiceError: K, isEligibleForOffer: G },
            { tags: { app_context: "billing" } },
        );
    let Y = K?.message ?? eE.intl.string(eE.t.R0RpRX),
        Z = G && null == K,
        X = G && null != K,
        $ = Z && null == E && V?.subscriptionPeriodEnd == null,
        ee = (0, eQ.D7)({ location: "premium_payment_plan_select_step" });
    (0, eJ.W)({ priceOptions: d, trialId: a, discountInvoicePreview: V });
    let et = r.useMemo(
        () => ({
            planOptions: L,
            selectedPlanId: x?.id,
            planGroup: i,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: v,
            handleClose: u,
        }),
        [L, x?.id, i, V?.subscriptionPeriodEnd, v, u],
    );
    if ($) return ee ? (0, l.jsx)(eX.E, { className: tr.QW }) : (0, l.jsx)(te.A, {});
    F()(null != f, "Step should be set"), F()(L.length > 0, "Premium plan options should be set");
    let en =
        ee && !T
            ? (0, l.jsx)(tt.XH, { ...et, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(e7.$p, { ...et });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tn.Z, { giftMessage: M }),
            !(T && (0, Q.Ik)(j)) && (0, l.jsx)(e9.A, { isEligibleForTrial: P }),
            (0, l.jsxs)(J.dZ, {
                children: [
                    !ee && Z && (0, l.jsx)("hr", { className: tr.T4 }),
                    (0, l.jsx)(tl.P, { className: tr.ZB, planSkuId: w?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eP.A, {}),
                    X ? (0, l.jsx)(eY.w, { type: "critical", children: Y }) : en,
                    Z &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: eR()(tr.IM, { [tr.Go]: ee }) }),
                                (0, l.jsx)(eO.E, {
                                    variant: "text-xs/normal",
                                    children: eE.intl.format(eE.t.BHtnqA, {
                                        link: e2.A.getArticleURL(e_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(J.UX, {
                children: [
                    v && (0, l.jsx)(e3, {}),
                    (0, l.jsx)(eB, {
                        onStepChange: t,
                        onBackClick: () => t(y.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: L,
                        shouldRenderUpdatedPaymentModal: Z,
                        isTrial: P,
                    }),
                ],
            }),
        ],
    });
}
var ts = n(234419),
    ta = n(39423),
    tu = n(672525),
    to = n(169801),
    td = n(634378);
function tc(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: r,
            setSelectedPlanId: i,
            priceOptions: s,
        } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { activeSubscription: a, startedPaymentFlowWithPaymentSourcesRef: u, defaultPlanId: o } = (0, b.P5)(),
        { hasPaymentSources: d } = (0, c.jm)(),
        { isGift: p, claimableRewards: E } = (0, C.Pv)(),
        S = p && null != E && E.length > 0,
        I = (0, ts.V)(n);
    return (0, l.jsx)(tp, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: r,
                    isGift: i,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: u,
                    defaultPlanId: o,
                } = e;
                l(n);
                let d = y.pn.PLAN_SELECT,
                    c = (0, e5.aZ)(t);
                (c !== T.pe.TIER_1 && c !== T.pe.TIER_2) || n !== T.pe.TIER_0 || i || (d = y.pn.WHAT_YOU_LOSE);
                let p = (0, to.t)({ userTrialOffer: s, isGift: i, skuId: n }),
                    m = (0, eK.vT)({
                        isTrial: p,
                        isGift: i,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== y.pn.WHAT_YOU_LOSE && m && ((d = y.pn.REVIEW), a((0, eK.xT)(n, t, o))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: r,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: u.current,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: r } = e;
                r((0, e5.mH)(T.pe.TIER_2)),
                    t(T.gD.PREMIUM_GROUP_MONTH),
                    n(l ? y.pn.REVIEW : y.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: T.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: r }),
        isGift: p,
        priceOptions: s,
        showPromotionalGiftBanner: S,
    });
}
function tp(e) {
    let { selectSku: t, isGift: n, priceOptions: r, showPromotionalGiftBanner: i, onSelectPremiumGroup: s } = e,
        a = (0, ta.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.rQ, { titleTextVariant: "heading-lg/semibold", title: eE.intl.string(eE.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(ef.c, {
                      children: (0, l.jsx)("div", {
                          className: td.eE,
                          children: (0, l.jsx)(tu.yS, {
                              onSelectSku: (e) => t((0, e5.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: r,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  })
                : (0, l.jsx)(ef.c, {
                      children: (0, l.jsx)("div", {
                          className: td.a2,
                          children: (0, l.jsx)(tu.Ay, {
                              onSelectSku: (e) => t((0, e5.mH)(e)),
                              isGift: n,
                              priceOptions: r,
                              showPromotionalGiftBanner: i,
                          }),
                      }),
                  }),
        ],
    });
}
var tm = n(825484),
    tE = n(137728);
function tS(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: r, setSelectedPlanId: i } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: a } = (0, b.P5)(),
        { isGift: u } = (0, C.Pv)(),
        o = null != s ? (0, e5.EL)(s) : null,
        d = null != o ? (0, e5.RH)(o.planId) : null,
        c = null != o ? (0, e5.m6)(o.planId) : null,
        p = (0, eK.vT)({ isTrial: !1, isGift: u, selectedSkuId: r, startedPaymentFlowWithPaymentSources: a.current });
    return (
        F()(null != c, "Expected premium type"),
        (0, l.jsx)(tE.A, {
            premiumType: c,
            titleText: eE.intl.string(eE.t["7VcWW0"]),
            subtitleText: eE.intl.format(eE.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(tm.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(et.$, {
                        variant: "primary",
                        text: eE.intl.string(eE.t["3PatSz"]),
                        onClick: () => {
                            p ? (i((0, eK.xT)(r, s)), t(y.pn.REVIEW)) : t(y.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(et.$, { variant: "secondary", onClick: n, text: eE.intl.string(eE.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let tI = [y.pn.PLAN_SELECT, y.pn.ADD_PAYMENT_STEPS, y.pn.REVIEW, y.pn.CONFIRM];
function tA(e) {
    let {
            analyticsLocation: t,
            analyticsObject: u,
            analyticsSourceLocation: d,
            onComplete: c,
            transitionState: p,
            initialPlanId: E,
            subscriptionTier: S,
            onClose: j,
            trialId: M,
            trialFooterMessageOverride: b,
            reviewWarningMessage: N,
            openInvoiceId: O,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: G,
            postSuccessGuild: L,
            followupSKUInfo: w,
            renderHeader: F,
            applicationId: H,
            guildId: B,
            referralTrialOfferId: W,
            skuId: z,
            returnRef: V,
            skipConfirm: K = !1,
            continueSessionToInitialStep: q,
        } = e,
        { analyticsLocations: Y } = (0, o.Ay)();
    r.useEffect(() => {
        R.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: Z, purchaseState: X } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        Q = (0, U.bB)(),
        { isGift: $, giftMessage: J } = (0, C.Pv)(),
        ee = (function () {
            let { enabled: e } = g.J.useConfig({ location: "useOpenGiftingBadgePostPurchaseModal" }),
                t = (0, i.bG)([P.Ay], () => P.Ay.getBadgeById(I.$.GIFTING)?.tiers),
                s = (0, m.t4)((e) => e.purchaseState),
                a = r.useRef(null);
            return (
                r.useEffect(() => {
                    e &&
                        s === _.h.PURCHASING &&
                        (a.current = P.Ay.getSingleRequirementProgress(I.$.GIFTING)?.current ?? null);
                }, [e, s]),
                r.useCallback(() => {
                    if (e && null != a.current && null != (null != t ? (0, h.aZ)(t, a.current) : null)) {
                        let e = a.current;
                        (0, A.openModalLazy)(async () => {
                            let { default: t } = await Promise.all([n.e("13396"), n.e("9964"), n.e("83703")]).then(
                                n.bind(n, 855210),
                            );
                            return (n) => (0, l.jsx)(t, { ...n, currentProgress: e });
                        });
                    }
                }, [e, t])
            );
        })(),
        et = r.useCallback(
            (e, t) => {
                j(e, t), e && $ && ee();
            },
            [j, $, ee],
        ),
        en = !$ && Z === T.pe.TIER_2 && !x.Ct && !x.KY && null == (0, f.uM)(),
        el = X === _.h.PURCHASING;
    return (0, l.jsx)(D.A, {
        isConfirmationStep: Q === y.pn.CONFIRM && null == q && null == G,
        isEligibleForWowMoment: en,
        shouldPrefetchWowMoment: el,
        children: (0, l.jsx)(k.PaymentModal, {
            analyticsLocations: Y,
            analyticsLocation: t,
            analyticsObject: u,
            analyticsSourceLocation: d,
            analyticsSubscriptionType: e_.rzx.PREMIUM,
            onComplete: c,
            transitionState: p,
            initialPlanId: E,
            giftMessage: J,
            subscriptionTier: S,
            onClose: et,
            trialId: M,
            isGift: $,
            trialFooterMessageOverride: b,
            reviewWarningMessage: N,
            planGroup: T.LE,
            openInvoiceId: O,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: G,
            postSuccessGuild: L,
            followupSKUInfo: w,
            renderHeader: F,
            applicationId: H,
            guildId: B,
            referralTrialOfferId: W,
            skuId: z,
            shakeWhilePurchasing: !0,
            returnRef: V,
            skipConfirm: K,
            continueSessionToInitialStep: q,
        }),
    });
}
function tP(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: r } = e,
        i = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, c.jm)(),
        a = (0, p.A)(),
        { isGift: u, claimableRewards: o } = (0, C.Pv)(),
        d = (0, to.A)({ isGift: u, skuId: i, referralTrialOfferId: r }),
        E = (0, eK.lp)(d),
        I = (0, S.px)(a, u, o);
    return (0, l.jsx)(O.x, {
        ...e,
        breadcrumbSteps: tI,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? y.pn.PLAN_SELECT : y.pn.REVIEW;
            E && (l = y.pn.REVIEW),
                I && e.length < 1 && (l = y.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: y.pn.PAYMENT_TYPE });
        },
    });
}
let t_ = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(k.I, { ...e }) },
            {
                key: y.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(tc, { ...e }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0,
                    modalSizeGetter: (t) => {
                        let { canCurrentlyPurchasePremiumGroup: n } = t;
                        return e || n ? "xl" : "md";
                    },
                },
            },
            {
                key: y.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(tS, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: y.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(ti, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eK.lp)(e) ? null : eE.intl.string(eE.t["r+SebU"])),
                    sectionHeaderText: () => eE.intl.string(eE.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: y.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(tP, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eK.lp)(e) ? null : eE.intl.string(eE.t.Sb6wI1)),
                },
            },
            { key: y.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(G.A, {}) },
            { key: y.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(v.A, {}) },
            {
                key: y.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(L._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eK.lp)(e) ? eE.intl.string(eE.t.UKbp1N) : eE.intl.string(eE.t.QBnNHq),
                },
            },
            {
                key: y.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(eh, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: y.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eV, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    tg = t_();
function th(e) {
    let t = (0, i.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        n = (0, E.cg)() ? T.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, o.Ay)(e.analyticsLocations, u.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: m,
            giftRecipient: S,
            giftStyle: I,
            isGift: A,
            loadId: P,
            referralCode: _,
            subscriptionTier: g,
            referralTrialOfferId: h,
        } = e;
    if (null != g && !Object.values(T.pe).includes(g)) throw Error("subscriptionTier must be a premium subscription");
    let x = (0, j.tA)({ giftRecipient: S, isGift: A ?? !1 }),
        f = r.useMemo(() => t_(x), [x]);
    return (0, l.jsx)(o.f5, {
        value: s,
        children: (0, l.jsx)(b.PaymentContextProvider, {
            loadId: P,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: f,
            skuIDs: [...T.oz],
            isGift: A,
            defaultPlanId: n ?? c,
            referralCode: _,
            referralTrialOfferId: h,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(N.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(C.dX, {
                    isGift: A,
                    giftRecipient: null == S ? void 0 : S,
                    giftMessage: m,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(tA, { ...e }),
                }),
            }),
        }),
    });
}
