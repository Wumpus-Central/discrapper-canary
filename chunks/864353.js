n.d(t, { E: () => tS, default: () => tP, STEPS: () => tI });
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
    m = n(722847),
    E = n(960851),
    S = n(380619),
    I = n(607399),
    P = n(795791),
    A = n(788868),
    _ = n(561794),
    h = n(97352),
    g = n(166403),
    x = n(937008),
    T = n(834252),
    f = n(166532),
    j = n(491057),
    M = n(566980),
    R = n(546042),
    C = n(735305),
    b = n(343834),
    k = n(926795),
    N = n(862241),
    O = n(615310),
    y = n(811656),
    v = n(284009),
    U = n.n(v),
    D = n(735438),
    L = n(877624),
    G = n(554146),
    w = n(192308),
    F = n(964486),
    H = n(841702),
    B = n(367727),
    W = n(374200),
    z = n(771566),
    V = n(174459),
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
    let { rewardSkuId: t, onClose: n } = e,
        s = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        a = (0, r.bG)([ee.A], () => ee.A.useReducedMotion),
        { analyticsLocations: u } = (0, o.Ay)(),
        d = $._3.SIZE_32,
        { product: c, isFetching: p } = (0, en.q)(t),
        [m, E] = i.useState(!1),
        S = c?.items[0],
        {
            isNameplateReward: I,
            nameplateData: P,
            rewardAvatarDecorationSrc: A,
        } = i.useMemo(
            () =>
                null == S
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, es.F)(S)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: S.skuId,
                                src: S.asset,
                                palette: (0, el.H6)(S.palette ?? "sky"),
                                imgAlt: S.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, er.T)(S)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, et.A)({
                                  legacyAssetId: S.asset,
                                  skuId: S.skuId,
                                  size: d,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [S, d, a],
        );
    return (0, l.jsx)(Z.UX, {
        children: (0, l.jsx)(X.j, {
            children: (0, l.jsxs)("div", {
                className: ec.W,
                children: [
                    I && null != P
                        ? (0, l.jsx)("div", {
                              className: ec.D,
                              onMouseEnter: () => E(!0),
                              onMouseLeave: () => E(!1),
                              children: (0, l.jsx)(ei.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: P,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)(J.Js, {
                              "aria-label": s?.username,
                              size: d,
                              src: s?.getAvatarURL(void 0, (0, $.FT)(d), !a),
                              avatarDecoration: A,
                          }),
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, ea.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: eo.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var em = n(216641),
    eE = n(921925),
    eS = n(652215),
    eI = n(49999);
function eP(e) {
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
            selectedSkuId: A,
            updatedSubscription: _,
            paymentSourceId: h,
            isPremiumGroupPurchase: g,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.getSelectedPlanAttributes().isPremiumGroupPurchase,
        })),
        {
            activeSubscription: f,
            startingPremiumSubscriptionPlanIdRef: M,
            startingFractionalPremiumEndsAtRef: R,
        } = (0, T.P5)(),
        C = (0, p.A)(),
        b = (0, O.bB)(),
        {
            isGift: k,
            giftRecipient: N,
            giftCode: y,
            hasSentMessage: v,
            isSendingMessage: X,
            sendGiftMessage: Q,
            claimableRewards: $,
            selectedGiftingPromotionReward: J,
        } = (0, x.Pv)(),
        { confirmationFooter: ee } = (0, j.cG)(),
        et = (0, S.px)(C, k, $),
        en = (0, S.Mq)(C),
        el = (0, H.Mv)(J, !1),
        ei = (0, r.bG)([W.A], () => W.A.getGiftPromotion()?.id),
        er = (0, r.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        es = (0, em.g)(P, h),
        ea = k && null != J && null != el && en;
    U()(null != C, "Expected plan to selected"),
        U()(null != A, "Expected selectedSkuId"),
        U()(null != b, "Step should be set");
    let eu = i.useCallback(() => {
        s(), u?.();
    }, [s, u]);
    (0, F.Ay)(() => {
        g &&
            V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != _,
                has_any_premium_group: _?.hasAnyPremiumGroup ?? !1,
                subscription_id: _?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (g)
                    if (null != _ && _.hasAnyPremiumGroup) {
                        V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: _.id,
                        });
                        let e = (0, D.uniqueId)("premium-group-purchase-flow-modal");
                        (0, w.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("63277"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: _,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, w.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        V.default.track(eS.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != _,
                            has_any_premium_group: _?.hasAnyPremiumGroup ?? !1,
                        }),
                            K._.dispatch(eS.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                K._.subscribe(eS.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    K._.unsubscribe(eS.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [g, _]),
        i.useEffect(() => {
            !k || null == N || null == y || v || X || (0, q.Ik)(N) || Q({ onSubscriptionConfirmation: u });
        }, [Q, k, N, y, v, X, u]),
        i.useEffect(() => {
            et &&
                null != er &&
                null != ei &&
                (0, B.qr)(G.M.GIFTING_PROMOTION_REMINDER, ei, { dismissAction: eI.i.INDIRECT_ACTION });
        }, [er, ei, et]);
    let eo = null != I ? z.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != o) t = o(C, eu, _);
    else if (k) t = (0, l.jsx)(z.fw, { planId: C.id, onClose: eu });
    else {
        let e =
            M.current === C.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: E,
                      startingPremiumSubscriptionPlanId: M.current,
                      isDowngrade: null != f && (0, Y.vT)(f, C.id, a),
                  };
        t = (0, l.jsx)(z.Ay, {
            planId: C.id,
            onClose: eu,
            paymentSourceType: es,
            hideClose: null != ee,
            startingFractionalPremiumEndsAt: R.current,
            customCTAType: eo,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(Z.dZ, { children: [(0, l.jsx)(eE.A, {}), t] }),
            null != ee && ee,
            ea && null != J && (0, l.jsx)(ep, { rewardSkuId: J, onClose: eu }),
        ],
    });
}
var eA = n(20742),
    e_ = n(430993),
    eh = n(331322),
    eg = n(503698),
    ex = n.n(eg),
    eT = n(575593),
    ef = n(187322),
    ej = n(890856),
    eM = n(947641),
    eR = n(661531),
    eC = n(534514),
    eb = n(834730),
    ek = n(713517),
    eN = n(929283),
    eO = n(761365),
    ey = n(267861);
let ev = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: u, selectedSkuId: o } = e,
        [d, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        m = i.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: E } = (0, ek.A)(m),
        S = !a && E,
        { product: I } = (0, en.q)(r);
    if (null == I) return null;
    let P = I.items[0];
    return null == P
        ? null
        : ((0, er.T)(P)
              ? ((n = eT.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(eN.i, { item: P, user: s, isHighlighted: S, avatarSize: $._3.SIZE_96 })))
              : (0, es.F)(P) &&
                ((n = eT.R.NAMEPLATE),
                (t = (0, l.jsx)(eO.A, { nameplate: P, user: s, isHighlighted: S, size: "small" }))),
          (0, l.jsx)(ef.vN, {
              children: (0, l.jsxs)(ej.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == u || a || u(r);
                  },
                  className: ex()(ey._x, { [ey.Vp]: !a, [ey.mr]: S, [ey.md]: o === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: ex()(ey.VH, {
                              [ey._Q]: n === eT.R.AVATAR_DECORATION,
                              [ey.M4]: n === eT.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: ex()(ey.i1, { [ey.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(eM.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eR.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: ey.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: ey.tZ,
                          children: [
                              (0, l.jsx)(eC.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eb.E, {
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
    eD = n(683433),
    eL = n(344159);
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
        { paymentSources: E } = (0, c.jm)(),
        S = (0, p.A)(),
        { isGift: I, claimableRewards: P } = (0, x.Pv)();
    r = r ?? E;
    let {
            variant: A,
            text: _,
            onClick: h,
            disabled: g,
        } = ew({
            onStepChange: t,
            selectedPlanId: (n = n ?? S?.id),
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
                    ? [{ variant: A, text: _, onClick: h, disabled: g }]
                    : [{ variant: "primary", text: ed.intl.string(ed.t.XqMe3N), disabled: !0 }],
            [A, _, h, g, n, u],
        );
    return (0, l.jsx)(eU.H, { leading: a && null != s ? (0, l.jsx)(eD.A, { onClick: s }) : void 0, actions: T });
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
        m = (0, O.bB)(),
        { hasEntitlements: E } = (0, eL.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (E && !u);
    var P = a ? ed.intl.string(ed.t.PDTjLN) : ed.intl.string(ed.t.XqMe3N),
        A = f.pn.ADD_PAYMENT_STEPS;
    return (
        I && (A = f.pn.REVIEW),
        (0, S.px)(c, l, i) && m !== f.pn.SELECT_FREE_SKU && (A = f.pn.SELECT_FREE_SKU),
        { variant: "primary", text: P, onClick: () => t(A), disabled: o }
    );
};
var eF = n(328232);
function eH(e) {
    let { handleStepChange: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        s = (0, p.A)(),
        a = (0, O.bB)(),
        { setSelectedGiftingPromotionReward: u, selectedGiftingPromotionReward: o, claimableRewards: d } = (0, x.Pv)(),
        c = (0, r.bG)([eu.default], () => eu.default.getCurrentUser()),
        E = (0, r.yK)([W.A], () => W.A.getGiftPromotionRewardSkuIds()),
        S = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, o),
        [I, P] = i.useState(S),
        [A, _] = i.useState(!1);
    i.useEffect(() => {
        A || null != o || null == S || (u(S), P(S));
    }, [S, A, o, u]),
        U()(null != s, "Expected plan to selected"),
        U()(null != n, "Expected selectedSkuId"),
        U()(null != a, "Step should be set");
    let h = i.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        g = i.useMemo(() => 0 === E.length || null == I || !h, [E, I, h]);
    i.useEffect(() => {
        if (0 === E.length) {
            P(void 0), u(void 0);
            return;
        }
        (null != I && h && E.includes(I)) || null == I || (P(void 0), u(void 0));
    }, [E, h, I, u]);
    let T = (e) => {
            u(e), P(e), _(!0);
        },
        j = E.map((e) =>
            (0, l.jsx)(
                ev,
                { skuId: e, claimed: null != d && !d.includes(e), user: c, onSelect: T, selectedSkuId: I },
                e,
            ),
        ),
        M = (0, l.jsx)(Z.UX, {
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
            (0, l.jsx)(eA.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: ed.intl.string(ed.t.OEtqpm),
                subtitle: ed.intl.string(ed.t.h2nMp0),
            }),
            (0, l.jsx)(e_.c, {
                children: (0, l.jsx)(eh.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eF.Dq, children: j }),
                }),
            }),
            M,
        ],
    });
}
var eB = n(800471),
    eW = n(702841),
    ez = n(683071),
    eV = n(428644),
    eK = n(717925),
    eq = n(742810),
    eY = n(463376),
    eZ = n(699595),
    eX = n(543767),
    eQ = n(807098),
    e$ = n(298305),
    eJ = n(387745);
function e0() {
    let e = (0, r.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, x.Pv)(),
        n = (0, eQ.T)(e?.asset),
        i = (0, eQ.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, S.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        u = (0, S.gc)(i);
    null != u && ((u.backgroundSize = "cover, auto"), (u.backgroundPosition = "right center, 0% 0%"));
    let o = (0, S.x)(u, a);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: eJ.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: eJ.my,
                      children: (0, l.jsx)(e$.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: $._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eb.E, {
                      variant: "text-md/medium",
                      className: eJ._M,
                      color: "always-white",
                      children: ed.intl.string(ed.t.Abiuci),
                  }),
              ],
          });
}
var e1 = n(410516),
    e4 = n(361597),
    e6 = n(975571),
    e7 = n(428262),
    e2 = n(69494),
    e8 = n(534479),
    e3 = n(340034),
    e5 = n(50956),
    e9 = n(71867),
    te = n(249872);
function tt(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: u } = e,
        {
            selectedSkuId: o,
            priceOptions: d,
            referralTrialOfferId: c,
        } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            referralTrialOfferId: e.checkoutInitParameters.referralTrialOfferId ?? void 0,
        })),
        { activeSubscription: E, defaultPlanId: I } = (0, T.P5)(),
        { isPremium: P, isEligibleForTrial: A, isEligibleForDiscount: _, discountOffer: g } = (0, eY.i)(),
        j = (0, e1.YJ)(g),
        M = (0, p.A)(),
        R = (0, O.bB)(),
        { isGift: C, giftRecipient: b, giftMessage: k, claimableRewards: N } = (0, x.Pv)(),
        y = (0, S.Mq)(M),
        v = (0, eW.bG)([W.A], () => {
            let e = W.A.getMarketingComponentByType(L.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        D = C && y && null != N && N.length > 0 && v,
        G = (A || _) ?? !1,
        w = i.useMemo(() => (0, e7.Tm)({ skuId: o, isPremium: P, defaultPlanId: I }), [o, P, I]),
        F = _ && null != j && w.includes(j) ? j : w[0],
        H = (0, eW.bG)([h.A], () => h.A.get(F)),
        B = [{ planId: H?.id, quantity: 1 }],
        [z, V] = i.useState(G),
        [K, Y] = (0, eX.YV)({
            items: B,
            renewal: !1,
            preventFetch: !G,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    i.useEffect(() => {
        G && V(K?.subscriptionPeriodEnd == null);
    }, [K, G]),
        (0, eV.A)(
            "Payment Modal Plan Select Step",
            z,
            5,
            { proratedInvoicePreview: K, proratedInvoiceError: Y, isEligibleForOffer: G },
            { tags: { app_context: "billing" } },
        );
    let X = Y?.message ?? ed.intl.string(ed.t.R0RpRX),
        Q = G && null == Y,
        $ = G && null != Y,
        J = Q && null == E && K?.subscriptionPeriodEnd == null,
        ee = (0, eq.D7)({ location: "premium_payment_plan_select_step" });
    (0, eZ.c)(K, _);
    let et = i.useMemo(
        () => ({
            planOptions: w,
            selectedPlanId: M?.id,
            planGroup: r,
            subscriptionPeriodEnd: K?.subscriptionPeriodEnd,
            useCompactGiftComponents: D,
            handleClose: u,
        }),
        [w, M?.id, r, K?.subscriptionPeriodEnd, D, u],
    );
    if (J) return ee ? (0, l.jsx)(eK.E, { className: te.QW }) : (0, l.jsx)(e8.A, {});
    U()(null != R, "Step should be set"), U()(w.length > 0, "Premium plan options should be set");
    let en =
        ee && !C
            ? (0, l.jsx)(e3.XH, { ...et, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(e4.$p, { ...et });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e5.Z, { giftMessage: k }),
            !(C && (0, q.Ik)(b)) && (0, l.jsx)(e2.A, { isEligibleForTrial: A }),
            (0, l.jsxs)(Z.dZ, {
                children: [
                    !ee && Q && (0, l.jsx)("hr", { className: te.T4 }),
                    (0, l.jsx)(e9.P, { className: te.ZB, planSkuId: H?.skuId, referralTrialOfferId: c }),
                    (0, l.jsx)(eE.A, {}),
                    $ ? (0, l.jsx)(ez.w, { type: "critical", children: X }) : en,
                    Q &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: ex()(te.IM, { [te.Go]: ee }) }),
                                (0, l.jsx)(eb.E, {
                                    variant: "text-xs/normal",
                                    children: ed.intl.format(ed.t.BHtnqA, {
                                        link: e6.A.getArticleURL(eS.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(Z.UX, {
                children: [
                    D && (0, l.jsx)(e0, {}),
                    (0, l.jsx)(eG, {
                        onStepChange: t,
                        onBackClick: () => t(f.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: w,
                        shouldRenderUpdatedPaymentModal: Q,
                        isTrial: A,
                    }),
                ],
            }),
        ],
    });
}
var tn = n(234419),
    tl = n(39423),
    ti = n(672525),
    tr = n(169801),
    ts = n(634378);
function ta(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: i,
            setSelectedPlanId: r,
            priceOptions: s,
        } = (0, m.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
        })),
        { activeSubscription: a, startedPaymentFlowWithPaymentSourcesRef: u, defaultPlanId: o } = (0, T.P5)(),
        { hasPaymentSources: d } = (0, c.jm)(),
        { isGift: p, claimableRewards: E } = (0, x.Pv)(),
        S = p && null != E && E.length > 0,
        I = (0, tn.V)(n);
    return (0, l.jsx)(tu, {
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
                    c = (0, e7.aZ)(t);
                (c !== A.pe.TIER_1 && c !== A.pe.TIER_2) || n !== A.pe.TIER_0 || r || (d = f.pn.WHAT_YOU_LOSE);
                let p = (0, tr.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    m = (0, eB.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== f.pn.WHAT_YOU_LOSE && m && ((d = f.pn.REVIEW), a((0, eB.xT)(n, t, o))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: p,
                userTrialOffer: I,
                startedPaymentFlowWithPaymentSources: u.current,
                setSelectedPlanId: r,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, e7.mH)(A.pe.TIER_2)),
                    t(A.gD.PREMIUM_GROUP_MONTH),
                    n(l ? f.pn.REVIEW : f.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: A.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: i }),
        isGift: p,
        priceOptions: s,
        showPromotionalGiftBanner: S,
    });
}
function tu(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, tl.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(eA.rQ, { titleTextVariant: "heading-lg/semibold", title: ed.intl.string(ed.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(e_.c, {
                      children: (0, l.jsx)("div", {
                          className: ts.eE,
                          children: (0, l.jsx)(ti.yS, {
                              onSelectSku: (e) => t((0, e7.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(e_.c, {
                      children: (0, l.jsx)("div", {
                          className: ts.a2,
                          children: (0, l.jsx)(ti.Ay, {
                              onSelectSku: (e) => t((0, e7.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var to = n(825484),
    td = n(137728);
function tc(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: r } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: a } = (0, T.P5)(),
        { isGift: u } = (0, x.Pv)(),
        o = null != s ? (0, e7.EL)(s) : null,
        d = null != o ? (0, e7.RH)(o.planId) : null,
        c = null != o ? (0, e7.m6)(o.planId) : null,
        p = (0, eB.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a.current });
    return (
        U()(null != c, "Expected premium type"),
        (0, l.jsx)(td.A, {
            premiumType: c,
            titleText: ed.intl.string(ed.t["7VcWW0"]),
            subtitleText: ed.intl.format(ed.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(to.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(Q.$, {
                        variant: "primary",
                        text: ed.intl.string(ed.t["3PatSz"]),
                        onClick: () => {
                            p ? (r((0, eB.xT)(i, s)), t(f.pn.REVIEW)) : t(f.pn.PLAN_SELECT);
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
let tp = [f.pn.PLAN_SELECT, f.pn.ADD_PAYMENT_STEPS, f.pn.REVIEW, f.pn.CONFIRM];
function tm(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            openInvoiceId: T,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: C,
            postSuccessGuild: b,
            followupSKUInfo: k,
            renderHeader: N,
            applicationId: v,
            guildId: U,
            referralTrialOfferId: D,
            skuId: L,
            returnRef: G,
            skipConfirm: w = !1,
            continueSessionToInitialStep: F,
        } = e,
        { analyticsLocations: H } = (0, o.Ay)();
    i.useEffect(() => {
        h.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let { selectedSkuId: B, purchaseState: W } = (0, m.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseState: e.purchaseState,
        })),
        z = (0, O.bB)(),
        { isGift: V, giftMessage: K } = (0, x.Pv)(),
        q = !V && B === A.pe.TIER_2 && !I.Ct && !I.KY && null == (0, P.uM)(),
        Y = W === M.h.PURCHASING;
    return (0, l.jsx)(y.A, {
        isConfirmationStep: z === f.pn.CONFIRM && null == F && null == C,
        isEligibleForWowMoment: q,
        shouldPrefetchWowMoment: Y,
        children: (0, l.jsx)(R.PaymentModal, {
            analyticsLocations: H,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eS.rzx.PREMIUM,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            giftMessage: K,
            subscriptionTier: p,
            onClose: E,
            trialId: S,
            isGift: V,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            planGroup: A.LE,
            openInvoiceId: T,
            onSubscriptionConfirmation: j,
            renderPurchaseConfirmation: C,
            postSuccessGuild: b,
            followupSKUInfo: k,
            renderHeader: N,
            applicationId: v,
            guildId: U,
            referralTrialOfferId: D,
            skuId: L,
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
        d = (0, tr.A)({ isGift: u, skuId: r, referralTrialOfferId: i }),
        E = (0, eB.lp)(d),
        I = (0, S.px)(a, u, o);
    return (0, l.jsx)(C.x, {
        ...e,
        breadcrumbSteps: tp,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? f.pn.PLAN_SELECT : f.pn.REVIEW;
            E && (l = f.pn.REVIEW),
                I && e.length < 1 && (l = f.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: f.pn.PAYMENT_TYPE });
        },
    });
}
let tS = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(R.I, { ...e }) },
            {
                key: f.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(ta, { ...e }),
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
                renderStep: (e) => (0, l.jsx)(tc, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: f.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(tt, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eB.lp)(e) ? null : ed.intl.string(ed.t["r+SebU"])),
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
                    useBreadcrumbLabel: (e) => ((0, eB.lp)(e) ? null : ed.intl.string(ed.t.Sb6wI1)),
                },
            },
            { key: f.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(k.A, {}) },
            { key: f.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(b.A, {}) },
            {
                key: f.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(N._M, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eB.lp)(e) ? ed.intl.string(ed.t.UKbp1N) : ed.intl.string(ed.t.QBnNHq),
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
    tI = tS();
function tP(e) {
    let t = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        n = (0, E.cg)() ? A.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, o.Ay)(e.analyticsLocations, u.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: m,
            giftRecipient: S,
            giftStyle: I,
            isGift: P,
            loadId: h,
            referralCode: f,
            subscriptionTier: M,
            referralTrialOfferId: R,
        } = e;
    if (null != M && !Object.values(A.pe).includes(M)) throw Error("subscriptionTier must be a premium subscription");
    let C = (0, _.tA)({ giftRecipient: S, isGift: P ?? !1 }),
        b = i.useMemo(() => tS(C), [C]);
    return (0, l.jsx)(o.f5, {
        value: s,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: b,
            skuIDs: [...A.oz],
            isGift: P,
            defaultPlanId: n ?? c,
            referralCode: f,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(j.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(x.dX, {
                    isGift: P,
                    giftRecipient: null == S ? void 0 : S,
                    giftMessage: m,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(tm, { ...e }),
                }),
            }),
        }),
    });
}
