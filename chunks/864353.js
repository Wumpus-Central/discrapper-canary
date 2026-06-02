n.d(t, { E: () => tI, default: () => t_, STEPS: () => tP });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    u = n(793574),
    o = n(688810),
    d = n(120700),
    c = n(426398),
    p = n(558620),
    m = n(571878),
    S = n(960851),
    E = n(380619),
    I = n(607399),
    P = n(795791),
    _ = n(788868),
    A = n(561794),
    h = n(97352),
    g = n(166403),
    x = n(937008),
    T = n(424297),
    f = n(166532),
    j = n(491057),
    b = n(566980),
    R = n(314671),
    C = n(735305),
    M = n(343834),
    v = n(926795),
    k = n(862241),
    y = n(615310),
    N = n(811656),
    O = n(284009),
    U = n.n(O),
    L = n(735438),
    D = n(877624),
    G = n(554146),
    w = n(192308),
    F = n(964486),
    H = n(841702),
    W = n(367727),
    B = n(374200),
    V = n(771566),
    z = n(174459),
    K = n(625494),
    q = n(45938),
    Y = n(615396),
    Z = n(482132),
    X = n(364840),
    Q = n(821609),
    $ = n(778712),
    J = n(97808),
    ee = n(775602),
    et = n(912140),
    en = n(674658),
    el = n(780898),
    ei = n(344346),
    er = n(898461),
    es = n(837015),
    ea = n(61750),
    eu = n(287809),
    eo = n(758836),
    ed = n(375708),
    ec = n(258915);
function ep(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: s } = e,
        a = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        u = (0, r.bG)([ee.A], () => ee.A.useReducedMotion),
        { analyticsLocations: d } = (0, o.Ay)(),
        c = $._3.SIZE_32,
        { product: p, isFetching: m } = (0, en.q)(t),
        [S, E] = i.useState(!1),
        I = p?.items[0],
        {
            isNameplateReward: P,
            nameplateData: _,
            rewardAvatarDecorationSrc: A,
        } = i.useMemo(
            () =>
                null == I
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, es.F)(I)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: I.skuId,
                                src: I.asset,
                                palette: (0, el.H6)(I.palette ?? "sky"),
                                imgAlt: I.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, er.T)(I)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, et.A)({
                                  legacyAssetId: I.asset,
                                  skuId: I.skuId,
                                  size: c,
                                  canAnimate: !u,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [I, c, u],
        );
    return (0, l.jsx)(Z.UX, {
        children: (0, l.jsx)(X.j, {
            children: (0, l.jsxs)("div", {
                className: ec.W,
                children: [
                    P && null != _
                        ? (0, l.jsx)("div", {
                              className: ec.D,
                              onMouseEnter: () => E(!0),
                              onMouseLeave: () => E(!1),
                              children: (0, l.jsx)(ei.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: _,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: S,
                              }),
                          })
                        : (0, l.jsx)(J.Js, {
                              "aria-label": a?.username,
                              size: c,
                              src: a?.getAvatarURL(void 0, (0, $.FT)(c), !u),
                              avatarDecoration: A,
                          }),
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t.kMYVwv),
                        loading: m,
                        onClick: () => {
                            null != p &&
                                (n(),
                                (0, ea.A)({
                                    product: p,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: d,
                                    purchaseType: eo.gs.PROMOTIONAL,
                                    onCloseCallback: s,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var em = n(216641),
    eS = n(921925),
    eE = n(652215),
    eI = n(49999);
function eP(e) {
    let t,
        {
            handleClose: s,
            planGroup: a,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: o,
            postSuccessGuild: d,
            followupSKUInfo: S,
            continueSessionToInitialStep: I,
        } = e,
        { paymentSources: P } = (0, c.jm)(),
        {
            activeSubscription: _,
            selectedSkuId: A,
            updatedSubscription: h,
            paymentSourceId: g,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: f,
            startingFractionalPremiumEndsAt: b,
        } = (0, m.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        R = (0, p.A)(),
        C = (0, y.bB)(),
        {
            isGift: M,
            giftRecipient: v,
            giftCode: k,
            hasSentMessage: N,
            isSendingMessage: O,
            sendGiftMessage: X,
            claimableRewards: Q,
            selectedGiftingPromotionReward: $,
            openGiftingBadgePostPurchaseModal: J,
        } = (0, x.Pv)(),
        { confirmationFooter: ee } = (0, j.cG)(),
        et = (0, E.px)(R, M, Q),
        en = (0, E.Mq)(R),
        el = (0, H.Mv)($, !1),
        ei = (0, r.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        er = (0, r.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        es = (0, em.g)(P, g),
        ea = M && null != $ && null != el && en;
    U()(null != R, "Expected plan to selected"),
        U()(null != A, "Expected selectedSkuId"),
        U()(null != C, "Step should be set");
    let eu = i.useCallback(() => {
        s(), u?.();
    }, [s, u]);
    (0, F.Ay)(() => {
        T &&
            z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != h,
                has_any_premium_group: h?.hasAnyPremiumGroup ?? !1,
                subscription_id: h?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (T)
                    if (null != h && h.hasAnyPremiumGroup) {
                        z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: h.id,
                        });
                        let e = (0, L.uniqueId)("premium-group-purchase-flow-modal");
                        (0, w.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("72414"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: h,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, w.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != h,
                            has_any_premium_group: h?.hasAnyPremiumGroup ?? !1,
                        }),
                            K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                K._.subscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    K._.unsubscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, h]),
        i.useEffect(() => {
            !M || null == v || null == k || N || O || (0, q.Ik)(v) || X({ onSubscriptionConfirmation: u });
        }, [X, M, v, k, N, O, u]),
        i.useEffect(() => {
            et &&
                null != er &&
                null != ei &&
                (0, W.qr)(G.M.GIFTING_PROMOTION_REMINDER, ei, { dismissAction: eI.i.INDIRECT_ACTION });
        }, [er, ei, et]);
    let eo = null != I ? V.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != o) t = o(R, eu, h);
    else if (M) t = (0, l.jsx)(V.fw, { planId: R.id, onClose: eu });
    else {
        let e =
            f === R.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: S,
                      startingPremiumSubscriptionPlanId: f,
                      isDowngrade: null != _ && (0, Y.vT)(_, R.id, a),
                  };
        t = (0, l.jsx)(V.Ay, {
            planId: R.id,
            onClose: eu,
            paymentSourceType: es,
            hideClose: null != ee,
            startingFractionalPremiumEndsAt: b,
            customCTAType: eo,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(Z.dZ, { children: [(0, l.jsx)(eS.A, {}), t] }),
            null != ee && ee,
            ea && null != $ && (0, l.jsx)(ep, { rewardSkuId: $, onClose: eu, onRewardModalClose: J }),
        ],
    });
}
var e_ = n(20742),
    eA = n(430993),
    eh = n(331322),
    eg = n(503698),
    ex = n.n(eg),
    eT = n(575593),
    ef = n(187322),
    ej = n(890856),
    eb = n(947641),
    eR = n(661531),
    eC = n(534514),
    eM = n(834730),
    ev = n(713517),
    ek = n(929283),
    ey = n(761365),
    eN = n(267861);
let eO = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: u, selectedSkuId: o } = e,
        [d, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        m = i.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: S } = (0, ev.A)(m),
        E = !a && S,
        { product: I } = (0, en.q)(r);
    if (null == I) return null;
    let P = I.items[0];
    return null == P
        ? null
        : ((0, er.T)(P)
              ? ((n = eT.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(ek.i, { item: P, user: s, isHighlighted: E, avatarSize: $._3.SIZE_96 })))
              : (0, es.F)(P) &&
                ((n = eT.R.NAMEPLATE),
                (t = (0, l.jsx)(ey.A, { nameplate: P, user: s, isHighlighted: E, size: "small" }))),
          (0, l.jsx)(ef.vN, {
              children: (0, l.jsxs)(ej.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == u || a || u(r);
                  },
                  className: ex()(eN._x, { [eN.Vp]: !a, [eN.mr]: E, [eN.md]: o === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: ex()(eN.VH, {
                              [eN._Q]: n === eT.R.AVATAR_DECORATION,
                              [eN.M4]: n === eT.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: ex()(eN.i1, { [eN.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(eb.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eR.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: eN.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: eN.tZ,
                          children: [
                              (0, l.jsx)(eC.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eM.E, {
                                  variant: "text-sm/normal",
                                  children: a ? ed.intl.string(ed.t["6cfuDj"]) : ed.intl.string(ed.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var eU = n(696208),
    eL = n(683433),
    eD = n(344159);
function eG(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: d,
            isNextDisabled: m = !1,
        } = e,
        { paymentSources: S } = (0, c.jm)(),
        E = (0, p.A)(),
        { isGift: I, claimableRewards: P } = (0, x.Pv)();
    r = r ?? S;
    let {
            variant: _,
            text: A,
            onClick: h,
            disabled: g,
        } = ew({
            onStepChange: t,
            selectedPlanId: (n = n ?? E?.id),
            isGift: I,
            claimableRewards: P,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: d,
            isNextDisabled: m,
        }),
        T = i.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: _, text: A, onClick: h, disabled: g }]
                    : [{ variant: "primary", text: ed.intl.string(ed.t.XqMe3N), disabled: !0 }],
            [_, A, h, g, n, u],
        );
    return (0, l.jsx)(eU.H, { leading: a && null != s ? (0, l.jsx)(eL.A, { onClick: s }) : void 0, actions: T });
}
let ew = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: u,
            isNextDisabled: o = !1,
        } = e,
        d = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        c = (0, p.A)(),
        m = (0, y.bB)(),
        { hasEntitlements: S } = (0, eD.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (S && !u);
    var P = a ? ed.intl.string(ed.t.PDTjLN) : ed.intl.string(ed.t.XqMe3N),
        _ = f.pn.ADD_PAYMENT_STEPS;
    return (
        I && (_ = f.pn.REVIEW),
        (0, E.px)(c, l, i) && m !== f.pn.SELECT_FREE_SKU && (_ = f.pn.SELECT_FREE_SKU),
        { variant: "primary", text: P, onClick: () => t(_), disabled: o }
    );
};
var eF = n(328232);
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, p.A)(),
        a = (0, y.bB)(),
        { setSelectedGiftingPromotionReward: u, selectedGiftingPromotionReward: o, claimableRewards: d } = (0, x.Pv)(),
        c = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        S = (0, r.yK)([B.A], () => B.A.getGiftPromotionRewardSkuIds()),
        E = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, o),
        [I, P] = i.useState(E),
        [_, A] = i.useState(!1);
    i.useEffect(() => {
        _ || null != o || null == E || (u(E), P(E));
    }, [E, _, o, u]),
        U()(null != s, "Expected plan to selected"),
        U()(null != n, "Expected selectedSkuId"),
        U()(null != a, "Step should be set");
    let h = i.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        g = i.useMemo(() => 0 === S.length || null == I || !h, [S, I, h]);
    i.useEffect(() => {
        if (0 === S.length) {
            P(void 0), u(void 0);
            return;
        }
        (null != I && h && S.includes(I)) || null == I || (P(void 0), u(void 0));
    }, [S, h, I, u]);
    let T = (e) => {
            u(e), P(e), A(!0);
        },
        j = S.map((e) =>
            (0, l.jsx)(
                eO,
                { skuId: e, claimed: null != d && !d.includes(e), user: c, onSelect: T, selectedSkuId: I },
                e,
            ),
        ),
        b = (0, l.jsx)(Z.UX, {
            children: (0, l.jsx)(eG, {
                onStepChange: t,
                onBackClick: () => t(f.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: g,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: ed.intl.string(ed.t.OEtqpm),
                subtitle: ed.intl.string(ed.t.h2nMp0),
            }),
            (0, l.jsx)(eA.c, {
                children: (0, l.jsx)(eh.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eF.Dq, children: j }),
                }),
            }),
            b,
        ],
    });
}
var eW = n(800471),
    eB = n(702841),
    eV = n(683071),
    ez = n(428644),
    eK = n(717925),
    eq = n(742810),
    eY = n(463376),
    eZ = n(699595),
    eX = n(543767),
    eQ = n(67948),
    e$ = n(807098),
    eJ = n(298305),
    e0 = n(387745);
function e1() {
    let e = (0, r.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, x.Pv)(),
        n = (0, e$.T)(e?.asset),
        i = (0, e$.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, E.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        u = (0, E.gc)(i);
    null != u && ((u.backgroundSize = "cover, auto"), (u.backgroundPosition = "right center, 0% 0%"));
    let o = (0, E.x)(u, a),
        d = e?.assetVariant === eQ.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: e0.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: ex()([e0.my], { [e0.R_]: d }),
                      children: (0, l.jsx)(eJ.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: d ? $._3.SIZE_72 : $._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eM.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: ed.intl.string(ed.t.Abiuci),
                  }),
              ],
          });
}
var e4 = n(410516),
    e6 = n(361597),
    e7 = n(975571),
    e8 = n(428262),
    e3 = n(69494),
    e2 = n(534479),
    e5 = n(340034),
    e9 = n(50956),
    te = n(71867),
    tt = n(249872);
function tn(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: u } = e,
        {
            selectedSkuId: o,
            priceOptions: d,
            referralTrialOfferId: c,
            activeSubscription: S,
            defaultPlanId: I,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: P, isEligibleForTrial: _, isEligibleForDiscount: A, discountOffer: g } = (0, eY.i)(),
        T = (0, e4.YJ)(g),
        j = (0, p.A)(),
        b = (0, y.bB)(),
        { isGift: R, giftRecipient: C, giftMessage: M, claimableRewards: v } = (0, x.Pv)(),
        k = (0, E.Mq)(j),
        N = (0, eB.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        O = R && k && null != v && v.length > 0 && N,
        L = (_ || A) ?? !1,
        G = i.useMemo(() => (0, e8.Tm)({ skuId: o, isPremium: P, defaultPlanId: I }), [o, P, I]),
        w = A && null != T && G.includes(T) ? T : G[0],
        F = (0, eB.bG)([h.A], () => h.A.get(w)),
        H = [{ planId: F?.id, quantity: 1 }],
        [W, V] = i.useState(L),
        [z, K] = (0, eX.YV)({
            items: H,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    i.useEffect(() => {
        L && V(z?.subscriptionPeriodEnd == null);
    }, [z, L]),
        (0, ez.A)(
            "Payment Modal Plan Select Step",
            W,
            5,
            { proratedInvoicePreview: z, proratedInvoiceError: K, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let Y = K?.message ?? ed.intl.string(ed.t.R0RpRX),
        X = L && null == K,
        Q = L && null != K,
        $ = X && null == S && z?.subscriptionPeriodEnd == null,
        J = (0, eq.D7)({ location: "premium_payment_plan_select_step" });
    (0, eZ.W)({ priceOptions: d, trialId: a, discountInvoicePreview: z });
    let ee = i.useMemo(
        () => ({
            planOptions: G,
            selectedPlanId: j?.id,
            planGroup: r,
            subscriptionPeriodEnd: z?.subscriptionPeriodEnd,
            useCompactGiftComponents: O,
            handleClose: u,
        }),
        [G, j?.id, r, z?.subscriptionPeriodEnd, O, u],
    );
    if ($) return J ? (0, l.jsx)(eK.E, { className: tt.QW }) : (0, l.jsx)(e2.A, {});
    U()(null != b, "Step should be set"), U()(G.length > 0, "Premium plan options should be set");
    let et =
        J && !R
            ? (0, l.jsx)(e5.XH, { ...ee, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(e6.$p, { ...ee });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e9.Z, { giftMessage: M }),
            !(R && (0, q.Ik)(C)) && (0, l.jsx)(e3.A, { isEligibleForTrial: _ }),
            (0, l.jsxs)(Z.dZ, {
                children: [
                    !J && X && (0, l.jsx)("hr", { className: tt.T4 }),
                    (0, l.jsx)(te.P, { className: tt.ZB, planSkuId: F?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eS.A, {}),
                    Q ? (0, l.jsx)(eV.w, { type: "critical", children: Y }) : et,
                    X &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: ex()(tt.IM, { [tt.Go]: J }) }),
                                (0, l.jsx)(eM.E, {
                                    variant: "text-xs/normal",
                                    children: ed.intl.format(ed.t.BHtnqA, {
                                        link: e7.A.getArticleURL(eE.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(Z.UX, {
                children: [
                    O && (0, l.jsx)(e1, {}),
                    (0, l.jsx)(eG, {
                        onStepChange: t,
                        onBackClick: () => t(f.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: G,
                        shouldRenderUpdatedPaymentModal: X,
                        isTrial: _,
                    }),
                ],
            }),
        ],
    });
}
var tl = n(234419),
    ti = n(39423),
    tr = n(672525),
    ts = n(169801),
    ta = n(634378);
function tu(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: i,
            setSelectedPlanId: r,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: u,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { hasPaymentSources: d } = (0, c.jm)(),
        { isGift: p, claimableRewards: S } = (0, x.Pv)(),
        E = p && null != S && S.length > 0,
        I = (0, tl.V)(n);
    return (0, l.jsx)(to, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: i,
                    isGift: r,
                    userTrialOffer: s,
                    setSelectedPlanId: a,
                    startedPaymentFlowWithPaymentSources: u,
                    defaultPlanId: o,
                } = e;
                l(n);
                let d = f.pn.PLAN_SELECT,
                    c = (0, e8.aZ)(t);
                (c !== _.pe.TIER_1 && c !== _.pe.TIER_2) || n !== _.pe.TIER_0 || r || (d = f.pn.WHAT_YOU_LOSE);
                let p = (0, ts.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    m = (0, eW.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== f.pn.WHAT_YOU_LOSE && m && ((d = f.pn.REVIEW), a((0, eW.xT)(n, t, o))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: o,
                setSelectedPlanId: r,
                defaultPlanId: u,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, e8.mH)(_.pe.TIER_2)),
                    t(_.gD.PREMIUM_GROUP_MONTH),
                    n(l ? f.pn.REVIEW : f.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: _.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: i }),
        isGift: p,
        priceOptions: s,
        showPromotionalGiftBanner: E,
    });
}
function to(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, ti.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.rQ, { titleTextVariant: "heading-lg/semibold", title: ed.intl.string(ed.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: ta.eE,
                          children: (0, l.jsx)(tr.yS, {
                              onSelectSku: (e) => t((0, e8.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: ta.a2,
                          children: (0, l.jsx)(tr.Ay, {
                              onSelectSku: (e) => t((0, e8.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var td = n(825484),
    tc = n(137728);
function tp(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: r,
            activeSubscription: s,
            startedPaymentFlowWithPaymentSources: a,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: u } = (0, x.Pv)(),
        o = null != s ? (0, e8.EL)(s) : null,
        d = null != o ? (0, e8.RH)(o.planId) : null,
        c = null != o ? (0, e8.m6)(o.planId) : null,
        p = (0, eW.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a });
    return (
        U()(null != c, "Expected premium type"),
        (0, l.jsx)(tc.A, {
            premiumType: c,
            titleText: ed.intl.string(ed.t["7VcWW0"]),
            subtitleText: ed.intl.format(ed.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(td.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, eW.xT)(i, s)), t(f.pn.REVIEW)) : t(f.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(Q.$, { variant: "secondary", onClick: n, text: ed.intl.string(ed.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let tm = [f.pn.PLAN_SELECT, f.pn.ADD_PAYMENT_STEPS, f.pn.REVIEW, f.pn.CONFIRM];
function tS(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: S,
            trialId: E,
            trialFooterMessageOverride: A,
            reviewWarningMessage: g,
            openInvoiceId: T,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: C,
            postSuccessGuild: M,
            followupSKUInfo: v,
            renderHeader: k,
            applicationId: O,
            guildId: U,
            referralTrialOfferId: L,
            skuId: D,
            returnRef: G,
            skipConfirm: w = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, o.Ay)();
    i.useEffect(() => {
        h.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: W, purchaseState: B } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        V = (0, y.bB)(),
        {
            isGift: z,
            giftMessage: K,
            selectedGiftingPromotionReward: q,
            openGiftingBadgePostPurchaseModal: Y,
        } = (0, x.Pv)(),
        Z = i.useCallback(
            (e, t) => {
                S(e, t), e && z && null == q && Y();
            },
            [S, z, q, Y],
        ),
        X = !z && W === _.pe.TIER_2 && !I.Ct && !I.KY && null == (0, P.uM)(),
        Q = B === b.h.PURCHASING;
    return (0, l.jsx)(N.A, {
        isConfirmationStep: V === f.pn.CONFIRM && null == F && null == C,
        isEligibleForWowMoment: X,
        shouldPrefetchWowMoment: Q,
        children: (0, l.jsx)(R.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eE.rzx.PREMIUM,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            giftMessage: K,
            subscriptionTier: p,
            onClose: Z,
            trialId: E,
            isGift: z,
            trialFooterMessageOverride: A,
            reviewWarningMessage: g,
            planGroup: _.LE,
            openInvoiceId: T,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: C,
            postSuccessGuild: M,
            followupSKUInfo: v,
            renderHeader: k,
            applicationId: O,
            guildId: U,
            referralTrialOfferId: L,
            skuId: D,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: w,
            continueSessionToInitialStep: F,
        }),
    });
}
function tE(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, m.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, c.jm)(),
        a = (0, p.A)(),
        { isGift: u, claimableRewards: o } = (0, x.Pv)(),
        d = (0, ts.A)({ isGift: u, skuId: r, referralTrialOfferId: i }),
        S = (0, eW.lp)(d),
        I = (0, E.px)(a, u, o);
    return (0, l.jsx)(C.x, {
        ...e,
        breadcrumbSteps: tm,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? f.pn.PLAN_SELECT : f.pn.REVIEW;
            S && (l = f.pn.REVIEW),
                I && e.length < 1 && (l = f.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: f.pn.PAYMENT_TYPE });
        },
    });
}
let tI = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(R.I, { ...e }) },
            {
                key: f.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(tu, { ...e }),
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
                key: f.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(tp, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: f.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(tn, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eW.lp)(e) ? null : ed.intl.string(ed.t["r+SebU"])),
                    sectionHeaderText: () => ed.intl.string(ed.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: f.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(tE, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eW.lp)(e) ? null : ed.intl.string(ed.t.Sb6wI1)),
                },
            },
            { key: f.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(v.A, {}) },
            { key: f.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(M.A, {}) },
            {
                key: f.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(k._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eW.lp)(e) ? ed.intl.string(ed.t.UKbp1N) : ed.intl.string(ed.t.QBnNHq),
                },
            },
            {
                key: f.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(eP, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: f.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eH, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    tP = tI();
function t_(e) {
    let t = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        n = (0, S.cg)() ? _.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, o.Ay)(e.analyticsLocations, u.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: m,
            giftRecipient: E,
            giftStyle: I,
            isGift: P,
            loadId: h,
            referralCode: f,
            subscriptionTier: b,
            referralTrialOfferId: R,
        } = e;
    if (null != b && !Object.values(_.pe).includes(b)) throw Error("subscriptionTier must be a premium subscription");
    let C = (0, A.tA)({ giftRecipient: E, isGift: P ?? !1 }),
        M = i.useMemo(() => tI(C), [C]);
    return (0, l.jsx)(o.f5, {
        value: s,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: M,
            skuIDs: [..._.oz],
            isGift: P,
            defaultPlanId: n ?? c,
            referralCode: f,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(j.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(x.dX, {
                    isGift: P,
                    giftRecipient: null == E ? void 0 : E,
                    giftMessage: m,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(tS, { ...e }),
                }),
            }),
        }),
    });
}
