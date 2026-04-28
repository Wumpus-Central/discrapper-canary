n.d(t, { E: () => tp, default: () => tE, STEPS: () => tm });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    u = n(793574),
    o = n(688810),
    d = n(120700),
    c = n(558620),
    p = n(94420),
    m = n(40185),
    E = n(810498),
    S = n(607399),
    I = n(795791),
    _ = n(788868),
    A = n(594832),
    P = n(97352),
    g = n(166403),
    x = n(937008),
    T = n(156312),
    h = n(166532),
    f = n(491057),
    j = n(566980),
    M = n(546042),
    R = n(735305),
    C = n(343834),
    b = n(926795),
    N = n(623020),
    k = n(615310),
    y = n(639289),
    O = n(284009),
    v = n.n(O),
    U = n(735438),
    D = n(877624),
    L = n(554146),
    w = n(192308),
    G = n(964486),
    F = n(841702),
    H = n(367727),
    B = n(374200),
    W = n(771566),
    z = n(954571),
    K = n(625494),
    V = n(45938),
    q = n(615396),
    Y = n(482132),
    Z = n(364840),
    X = n(821609),
    Q = n(778712),
    $ = n(97808),
    J = n(775602),
    ee = n(912140),
    et = n(674658),
    en = n(780898),
    el = n(344346),
    ei = n(898461),
    er = n(837015),
    es = n(61750),
    ea = n(287809),
    eu = n(758836),
    eo = n(985018),
    ed = n(258915);
function ec(e) {
    let { rewardSkuId: t, onClose: n } = e,
        s = (0, r.bG)([ea.default], () => ea.default.getCurrentUser()),
        a = (0, r.bG)([J.A], () => J.A.useReducedMotion),
        { analyticsLocations: u } = (0, o.Ay)(),
        d = Q._3.SIZE_32,
        { product: c, isFetching: p } = (0, et.q)(t),
        [m, E] = i.useState(!1),
        S = c?.items[0],
        {
            isNameplateReward: I,
            nameplateData: _,
            rewardAvatarDecorationSrc: A,
        } = i.useMemo(
            () =>
                null == S
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, er.F)(S)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: S.skuId,
                                src: S.asset,
                                palette: (0, en.H6)(S.palette ?? "sky"),
                                imgAlt: S.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, ei.T)(S)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, ee.A)({
                                  legacyAssetId: S.asset,
                                  skuId: S.skuId,
                                  size: d,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [S, d, a],
        );
    return (0, l.jsx)(Y.UX, {
        children: (0, l.jsx)(Z.j, {
            children: (0, l.jsxs)("div", {
                className: ed.W,
                children: [
                    I && null != _
                        ? (0, l.jsx)("div", {
                              className: ed.D,
                              onMouseEnter: () => E(!0),
                              onMouseLeave: () => E(!1),
                              children: (0, l.jsx)(el.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: _,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: m,
                              }),
                          })
                        : (0, l.jsx)($.Js, {
                              "aria-label": s?.username,
                              size: d,
                              src: s?.getAvatarURL(void 0, (0, Q.FT)(d), !a),
                              avatarDecoration: A,
                          }),
                    (0, l.jsx)(X.$, {
                        variant: "primary",
                        text: eo.intl.string(eo.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, es.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: u,
                                    purchaseType: eu.gs.PROMOTIONAL,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var ep = n(216641),
    em = n(921925),
    eE = n(652215),
    eS = n(49999);
function eI(e) {
    let t,
        {
            handleClose: s,
            planGroup: a,
            onSubscriptionConfirmation: u,
            renderPurchaseConfirmation: o,
            postSuccessGuild: d,
            followupSKUInfo: m,
            continueSessionToInitialStep: S,
        } = e,
        I = (0, p.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: _,
            paymentSources: A,
            paymentSourceId: P,
            updatedSubscription: g,
            startingPremiumSubscriptionPlanIdRef: h,
            startingFractionalPremiumEndsAtRef: j,
            isPremiumGroupPurchase: M,
        } = (0, T.P5)(),
        R = (0, c.A)(),
        C = (0, k.bB)(),
        {
            isGift: b,
            giftRecipient: N,
            giftCode: y,
            hasSentMessage: O,
            isSendingMessage: Z,
            sendGiftMessage: X,
            claimableRewards: Q,
            selectedGiftingPromotionReward: $,
        } = (0, x.Pv)(),
        { confirmationFooter: J } = (0, f.cG)(),
        ee = (0, E.px)(R, b, Q),
        et = (0, E.Mq)(R),
        en = (0, F.Mv)($, !1),
        el = (0, r.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        ei = (0, r.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        er = (0, ep.g)(A, P),
        es = b && null != $ && null != en && et;
    v()(null != R, "Expected plan to selected"),
        v()(null != I, "Expected selectedSkuId"),
        v()(null != C, "Step should be set");
    let ea = i.useCallback(() => {
        s(), u?.();
    }, [s, u]);
    (0, G.Ay)(() => {
        M &&
            z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != g,
                has_any_premium_group: g?.hasAnyPremiumGroup ?? !1,
                subscription_id: g?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (M)
                    if (null != g && g.hasAnyPremiumGroup) {
                        z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: g.id,
                        });
                        let e = (0, U.uniqueId)("premium-group-purchase-flow-modal");
                        (0, w.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("80813"),
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
                            has_updated_subscription: null != g,
                            has_any_premium_group: g?.hasAnyPremiumGroup ?? !1,
                        }),
                            K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                K._.subscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    K._.unsubscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [M, g]),
        i.useEffect(() => {
            !b || null == N || null == y || O || Z || (0, V.Ik)(N) || X({ onSubscriptionConfirmation: u });
        }, [X, b, N, y, O, Z, u]),
        i.useEffect(() => {
            ee &&
                null != ei &&
                null != el &&
                (0, H.qr)(L.M.GIFTING_PROMOTION_REMINDER, el, { dismissAction: eS.i.INDIRECT_ACTION });
        }, [ei, el, ee]);
    let eu = null != S ? W.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != o) t = o(R, ea, g);
    else if (b) t = (0, l.jsx)(W.fw, { planId: R.id, onClose: ea });
    else {
        let e =
            h.current === R.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: m,
                      startingPremiumSubscriptionPlanId: h.current,
                      isDowngrade: null != _ && (0, q.vT)(_, R.id, a),
                  };
        t = (0, l.jsx)(W.Ay, {
            planId: R.id,
            onClose: ea,
            paymentSourceType: er,
            hideClose: null != J,
            startingFractionalPremiumEndsAt: j.current,
            customCTAType: eu,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(Y.dZ, { children: [(0, l.jsx)(em.A, {}), t] }),
            null != J && J,
            es && null != $ && (0, l.jsx)(ec, { rewardSkuId: $, onClose: ea }),
        ],
    });
}
var e_ = n(20742),
    eA = n(430993),
    eP = n(331322),
    eg = n(503698),
    ex = n.n(eg),
    eT = n(575593),
    eh = n(187322),
    ef = n(890856),
    ej = n(947641),
    eM = n(661531),
    eR = n(534514),
    eC = n(834730),
    eb = n(713517),
    eN = n(929283),
    ek = n(761365),
    ey = n(267861);
let eO = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: u, selectedSkuId: o } = e,
        [d, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        m = i.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: E } = (0, eb.A)(m),
        S = !a && E,
        { product: I } = (0, et.q)(r);
    if (null == I) return null;
    let _ = I.items[0];
    return null == _
        ? null
        : ((0, ei.T)(_)
              ? ((n = eT.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(eN.i, { item: _, user: s, isHighlighted: S, avatarSize: Q._3.SIZE_96 })))
              : (0, er.F)(_) &&
                ((n = eT.R.NAMEPLATE),
                (t = (0, l.jsx)(ek.A, { nameplate: _, user: s, isHighlighted: S, size: "small" }))),
          (0, l.jsx)(eh.vN, {
              children: (0, l.jsxs)(ef.s, {
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
                                                (0, l.jsx)(ej.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eM.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: ey.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: ey.tZ,
                          children: [
                              (0, l.jsx)(eR.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eC.E, {
                                  variant: "text-sm/normal",
                                  children: a ? eo.intl.string(eo.t["6cfuDj"]) : eo.intl.string(eo.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var ev = n(696208),
    eU = n(683433),
    eD = n(344159);
function eL(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: u,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: d,
            isNextDisabled: p = !1,
        } = e,
        { paymentSources: m } = (0, T.P5)(),
        E = (0, c.A)(),
        { isGift: S, claimableRewards: I } = (0, x.Pv)();
    r = r ?? m;
    let {
            variant: _,
            text: A,
            onClick: P,
            disabled: g,
        } = ew({
            onStepChange: t,
            selectedPlanId: (n = n ?? E?.id),
            isGift: S,
            claimableRewards: I,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: o,
            isTrial: d,
            isNextDisabled: p,
        }),
        h = i.useMemo(
            () =>
                null != n && u.includes(n)
                    ? [{ variant: _, text: A, onClick: P, disabled: g }]
                    : [{ variant: "primary", text: eo.intl.string(eo.t.XqMe3N), disabled: !0 }],
            [_, A, P, g, n, u],
        );
    return (0, l.jsx)(ev.H, { leading: a && null != s ? (0, l.jsx)(eU.A, { onClick: s }) : void 0, actions: h });
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
        p = (0, c.A)(),
        m = (0, k.bB)(),
        { hasEntitlements: S } = (0, eD.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (S && !u);
    var _ = a ? eo.intl.string(eo.t.PDTjLN) : eo.intl.string(eo.t.XqMe3N),
        A = h.pn.ADD_PAYMENT_STEPS;
    return (
        I && (A = h.pn.REVIEW),
        (0, E.px)(p, l, i) && m !== h.pn.SELECT_FREE_SKU && (A = h.pn.SELECT_FREE_SKU),
        { variant: "primary", text: _, onClick: () => t(A), disabled: o }
    );
};
var eG = n(328232);
function eF(e) {
    let { handleStepChange: t } = e,
        n = (0, p.t4)((e) => e.selectedSkuId),
        s = (0, c.A)(),
        a = (0, k.bB)(),
        { setSelectedGiftingPromotionReward: u, selectedGiftingPromotionReward: o, claimableRewards: d } = (0, x.Pv)(),
        m = (0, r.bG)([ea.default], () => ea.default.getCurrentUser()),
        E = (0, r.yK)([B.A], () => B.A.getGiftPromotionRewardSkuIds()),
        S = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, o),
        [I, _] = i.useState(S),
        [A, P] = i.useState(!1);
    i.useEffect(() => {
        A || null != o || null == S || (u(S), _(S));
    }, [S, A, o, u]),
        v()(null != s, "Expected plan to selected"),
        v()(null != n, "Expected selectedSkuId"),
        v()(null != a, "Step should be set");
    let g = i.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        T = i.useMemo(() => 0 === E.length || null == I || !g, [E, I, g]);
    i.useEffect(() => {
        if (0 === E.length) {
            _(void 0), u(void 0);
            return;
        }
        (null != I && g && E.includes(I)) || null == I || (_(void 0), u(void 0));
    }, [E, g, I, u]);
    let f = (e) => {
            u(e), _(e), P(!0);
        },
        j = E.map((e) =>
            (0, l.jsx)(
                eO,
                { skuId: e, claimed: null != d && !d.includes(e), user: m, onSelect: f, selectedSkuId: I },
                e,
            ),
        ),
        M = (0, l.jsx)(Y.UX, {
            children: (0, l.jsx)(eL, {
                onStepChange: t,
                onBackClick: () => t(h.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [s.id],
                selectedPlanId: s.id,
                isNextDisabled: T,
            }),
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: eo.intl.string(eo.t.OEtqpm),
                subtitle: eo.intl.string(eo.t.h2nMp0),
            }),
            (0, l.jsx)(eA.c, {
                children: (0, l.jsx)(eP.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eG.Dq, children: j }),
                }),
            }),
            M,
        ],
    });
}
var eH = n(800471),
    eB = n(702841),
    eW = n(683071),
    ez = n(428644),
    eK = n(69882),
    eV = n(742810),
    eq = n(699595),
    eY = n(543767),
    eZ = n(807098),
    eX = n(298305),
    eQ = n(387745);
function e$() {
    let e = (0, r.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, x.Pv)(),
        n = (0, eZ.T)(e?.asset),
        i = (0, eZ.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, E.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        u = (0, E.gc)(i);
    null != u && ((u.backgroundSize = "cover, auto"), (u.backgroundPosition = "right center, 0% 0%"));
    let o = (0, E.x)(u, a);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: eQ.qD,
              style: o,
              children: [
                  (0, l.jsx)("div", {
                      className: eQ.my,
                      children: (0, l.jsx)(eX.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: Q._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, l.jsx)(eC.E, {
                      variant: "text-md/medium",
                      className: eQ._M,
                      color: "always-white",
                      children: eo.intl.string(eo.t.Abiuci),
                  }),
              ],
          });
}
var eJ = n(337092),
    e0 = n(975571),
    e1 = n(927578),
    e4 = n(69494),
    e8 = n(534479),
    e6 = n(340034),
    e2 = n(50956),
    e5 = n(71867),
    e3 = n(249872);
function e7(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: u } = e,
        o = (0, p.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: d,
            defaultPlanId: m,
            priceOptions: S,
            isPremium: I,
            isEligibleForTrial: A,
            isEligibleForDiscount: g,
            referralTrialOfferId: f,
        } = (0, T.P5)(),
        j = (0, c.A)(),
        M = (0, k.bB)(),
        { isGift: R, giftRecipient: C, giftMessage: b, claimableRewards: N } = (0, x.Pv)(),
        y = (0, E.Mq)(j),
        O = (0, eB.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        U = R && y && null != N && N.length > 0 && O,
        L = (A || g) ?? !1,
        w = i.useMemo(() => (0, e1.Tm)({ skuId: o, isPremium: I, defaultPlanId: m }), [o, I, m]),
        G = g && w.includes(_.gD.PREMIUM_MONTH_TIER_2) ? _.gD.PREMIUM_MONTH_TIER_2 : w[0],
        F = (0, eB.bG)([P.A], () => P.A.get(G)),
        H = [{ planId: F?.id, quantity: 1 }],
        [W, z] = i.useState(L),
        [K, q] = (0, eY.Kq)({
            items: H,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: S.paymentSourceId,
            currency: S.currency,
        });
    i.useEffect(() => {
        L && z(K?.subscriptionPeriodEnd == null);
    }, [K, L]),
        (0, ez.A)(
            "Payment Modal Plan Select Step",
            W,
            5,
            { proratedInvoicePreview: K, proratedInvoiceError: q, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let Z = q?.message ?? eo.intl.string(eo.t.R0RpRX),
        X = L && null == q,
        Q = L && null != q,
        $ = X && null == d && K?.subscriptionPeriodEnd == null,
        J = (0, eV.D7)({ location: "premium_payment_plan_select_step" });
    (0, eq.c)(K, g);
    let ee = i.useMemo(
        () => ({
            planOptions: w,
            selectedPlanId: j?.id,
            planGroup: r,
            subscriptionPeriodEnd: K?.subscriptionPeriodEnd,
            useCompactGiftComponents: U,
            handleClose: u,
        }),
        [w, j?.id, r, K?.subscriptionPeriodEnd, U, u],
    );
    if ($) return J ? (0, l.jsx)(eK.Ed, { className: e3.QW }) : (0, l.jsx)(e8.A, {});
    v()(null != M, "Step should be set"), v()(w.length > 0, "Premium plan options should be set");
    let et =
        J && !R
            ? (0, l.jsx)(e6.XH, { ...ee, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(eJ.$p, { ...ee });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e2.Z, { giftMessage: b }),
            !(R && (0, V.Ik)(C)) && (0, l.jsx)(e4.A, { isEligibleForTrial: A }),
            (0, l.jsxs)(Y.dZ, {
                children: [
                    !J && X && (0, l.jsx)("hr", { className: e3.T4 }),
                    (0, l.jsx)(e5.P, { className: e3.ZB, planSkuId: F?.skuId, referralTrialOfferId: f }),
                    (0, l.jsx)(em.A, {}),
                    Q ? (0, l.jsx)(eW.w, { type: "critical", children: Z }) : et,
                    X &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: ex()(e3.IM, { [e3.Go]: J }) }),
                                (0, l.jsx)(eC.E, {
                                    variant: "text-xs/normal",
                                    children: eo.intl.format(eo.t.BHtnqA, {
                                        link: e0.A.getArticleURL(eE.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(Y.UX, {
                children: [
                    U && (0, l.jsx)(e$, {}),
                    (0, l.jsx)(eL, {
                        onStepChange: t,
                        onBackClick: () => t(h.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: w,
                        shouldRenderUpdatedPaymentModal: X,
                        isTrial: A,
                    }),
                ],
            }),
        ],
    });
}
var e9 = n(234419),
    te = n(612669),
    tt = n(672525),
    tn = n(169801),
    tl = n(634378);
function ti(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        { setSelectedSkuId: i, setSelectedPlanId: r } = (0, p.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        {
            activeSubscription: s,
            startedPaymentFlowWithPaymentSourcesRef: a,
            priceOptions: u,
            defaultPlanId: o,
            hasPaymentSources: d,
        } = (0, T.P5)(),
        { isGift: c, claimableRewards: m } = (0, x.Pv)(),
        E = c && null != m && m.length > 0,
        S = (0, e9.V)(n);
    return (0, l.jsx)(tr, {
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
                let d = h.pn.PLAN_SELECT,
                    c = (0, e1.aZ)(t);
                (c !== _.pe.TIER_1 && c !== _.pe.TIER_2) || n !== _.pe.TIER_0 || r || (d = h.pn.WHAT_YOU_LOSE);
                let p = (0, tn.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    m = (0, eH.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== h.pn.WHAT_YOU_LOSE && m && ((d = h.pn.REVIEW), a((0, eH.xT)(n, t, o))),
                    i(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: s,
                newSkuId: e,
                setSelectedSkuId: i,
                handleStepChange: t,
                isGift: c,
                userTrialOffer: S,
                startedPaymentFlowWithPaymentSources: a.current,
                setSelectedPlanId: r,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, e1.mH)(_.pe.TIER_2)),
                    t(_.gD.PREMIUM_GROUP_MONTH),
                    n(l ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: _.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: i }),
        isGift: c,
        priceOptions: u,
        showPromotionalGiftBanner: E,
    });
}
function tr(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, te.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.rQ, { titleTextVariant: "heading-lg/semibold", title: eo.intl.string(eo.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: tl.eE,
                          children: (0, l.jsx)(tt.yS, {
                              onSelectSku: (e) => t((0, e1.mH)(e)),
                              onSelectPremiumGroup: s,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  })
                : (0, l.jsx)(eA.c, {
                      children: (0, l.jsx)("div", {
                          className: tl.a2,
                          children: (0, l.jsx)(tt.Ay, {
                              onSelectSku: (e) => t((0, e1.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: r,
                          }),
                      }),
                  }),
        ],
    });
}
var ts = n(825484),
    ta = n(380124);
function tu(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: r } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: a } = (0, T.P5)(),
        { isGift: u } = (0, x.Pv)(),
        o = null != s ? (0, e1.EL)(s) : null,
        d = null != o ? (0, e1.RH)(o.planId) : null,
        c = null != o ? (0, e1.m6)(o.planId) : null,
        m = (0, eH.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a.current });
    return (
        v()(null != c, "Expected premium type"),
        (0, l.jsx)(ta.A, {
            premiumType: c,
            titleText: eo.intl.string(eo.t["7VcWW0"]),
            subtitleText: eo.intl.format(eo.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(ts.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(X.$, {
                        variant: "primary",
                        text: eo.intl.string(eo.t["3PatSz"]),
                        onClick: () => {
                            m ? (r((0, eH.xT)(i, s)), t(h.pn.REVIEW)) : t(h.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(X.$, { variant: "secondary", onClick: n, text: eo.intl.string(eo.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let to = [h.pn.PLAN_SELECT, h.pn.ADD_PAYMENT_STEPS, h.pn.REVIEW, h.pn.CONFIRM];
function td(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: E,
            trialId: A,
            trialFooterMessageOverride: g,
            reviewWarningMessage: f,
            openInvoiceId: R,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: b,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: v,
            applicationId: U,
            guildId: D,
            referralTrialOfferId: L,
            skuId: w,
            returnRef: G,
            skipConfirm: F = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: B } = (0, o.Ay)();
    i.useEffect(() => {
        P.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let W = (0, p.t4)((e) => e.selectedSkuId),
        { purchaseState: z } = (0, T.P5)(),
        K = (0, k.bB)(),
        { isGift: V, giftMessage: q } = (0, x.Pv)(),
        Y = !V && W === _.pe.TIER_2 && !S.Ct && !S.KY && null == (0, I.uM)(),
        Z = z === j.h.PURCHASING;
    return (0, l.jsx)(y.A, {
        isConfirmationStep: K === h.pn.CONFIRM && null == H && null == b,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: Z,
        children: (0, l.jsx)(M.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eE.rzx.PREMIUM,
            onComplete: u,
            transitionState: d,
            initialPlanId: c,
            giftMessage: q,
            subscriptionTier: m,
            onClose: E,
            trialId: A,
            isGift: V,
            trialFooterMessageOverride: g,
            reviewWarningMessage: f,
            planGroup: _.LE,
            openInvoiceId: R,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: b,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: v,
            applicationId: U,
            guildId: D,
            referralTrialOfferId: L,
            skuId: w,
            shakeWhilePurchasing: !0,
            returnRef: G,
            skipConfirm: F,
            continueSessionToInitialStep: H,
        }),
    });
}
function tc(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, p.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, T.P5)(),
        a = (0, c.A)(),
        { isGift: u, claimableRewards: o } = (0, x.Pv)(),
        d = (0, tn.A)({ isGift: u, skuId: r, referralTrialOfferId: i }),
        m = (0, eH.lp)(d),
        S = (0, E.px)(a, u, o);
    return (0, l.jsx)(R.x, {
        ...e,
        breadcrumbSteps: to,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? h.pn.PLAN_SELECT : h.pn.REVIEW;
            m && (l = h.pn.REVIEW),
                S && e.length < 1 && (l = h.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: h.pn.PAYMENT_TYPE });
        },
    });
}
let tp = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(M.I, { ...e }) },
            {
                key: h.pn.SKU_SELECT,
                renderStep: (e) => (0, l.jsx)(ti, { ...e }),
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
                key: h.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(tu, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: h.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(e7, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eH.lp)(e) ? null : eo.intl.string(eo.t["r+SebU"])),
                    sectionHeaderText: () => eo.intl.string(eo.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: h.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(tc, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eH.lp)(e) ? null : eo.intl.string(eo.t.Sb6wI1)),
                },
            },
            { key: h.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(b.A, {}) },
            { key: h.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(C.A, {}) },
            {
                key: h.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(N._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eH.lp)(e) ? eo.intl.string(eo.t.UKbp1N) : eo.intl.string(eo.t.QBnNHq),
                },
            },
            {
                key: h.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(eI, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: h.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eF, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    tm = tp();
function tE(e) {
    let t = (0, r.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
        n = (0, m.cg)() ? _.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, o.Ay)(e.analyticsLocations, u.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: E,
            giftRecipient: S,
            giftStyle: I,
            isGift: P,
            loadId: h,
            referralCode: j,
            subscriptionTier: M,
            referralTrialOfferId: R,
        } = e;
    if (null != M && !Object.values(_.pe).includes(M)) throw Error("subscriptionTier must be a premium subscription");
    let C = (0, A.tA)({ giftRecipient: S, isGift: P ?? !1 }),
        b = i.useMemo(() => tp(C), [C]);
    return (0, l.jsx)(o.f5, {
        value: s,
        children: (0, l.jsx)(T.PaymentContextProvider, {
            loadId: h,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: b,
            skuIDs: [..._.oz],
            isGift: P,
            defaultPlanId: n ?? c,
            referralCode: j,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: R,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(f.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(x.dX, {
                    isGift: P,
                    giftRecipient: null == S ? void 0 : S,
                    giftMessage: E,
                    giftStyle: I,
                    giftingOrigin: p,
                    children: (0, l.jsx)(td, { ...e }),
                }),
            }),
        }),
    });
}
