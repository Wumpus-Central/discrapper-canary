n.d(t, { E: () => tp, default: () => tE, STEPS: () => tm });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    s = n(228366),
    a = n(73825),
    o = n(793574),
    u = n(688810),
    d = n(120700),
    c = n(558620),
    p = n(94420),
    m = n(40185),
    E = n(810498),
    S = n(607399),
    I = n(795791),
    _ = n(788868),
    P = n(594832),
    x = n(97352),
    A = n(166403),
    h = n(937008),
    g = n(156312),
    T = n(166532),
    f = n(491057),
    j = n(566980),
    R = n(546042),
    M = n(735305),
    C = n(343834),
    y = n(926795),
    N = n(623020),
    b = n(615310),
    k = n(639289),
    O = n(284009),
    v = n.n(O),
    w = n(735438),
    D = n(877624),
    G = n(554146),
    U = n(192308),
    L = n(964486),
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
    eo = n(758836),
    eu = n(985018),
    ed = n(258915);
function ec(e) {
    let { rewardSkuId: t, onClose: n } = e,
        s = (0, r.bG)([ea.default], () => ea.default.getCurrentUser()),
        a = (0, r.bG)([J.A], () => J.A.useReducedMotion),
        { analyticsLocations: o } = (0, u.Ay)(),
        d = Q._3.SIZE_32,
        { product: c, isFetching: p } = (0, et.q)(t),
        [m, E] = i.useState(!1),
        S = c?.items[0],
        {
            isNameplateReward: I,
            nameplateData: _,
            rewardAvatarDecorationSrc: P,
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
                              avatarDecoration: P,
                          }),
                    (0, l.jsx)(X.$, {
                        variant: "primary",
                        text: eu.intl.string(eu.t.kMYVwv),
                        loading: p,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, es.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: o,
                                    purchaseType: eo.gs.PROMOTIONAL,
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
            onSubscriptionConfirmation: o,
            renderPurchaseConfirmation: u,
            postSuccessGuild: d,
            followupSKUInfo: m,
            continueSessionToInitialStep: S,
        } = e,
        I = (0, p.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: _,
            paymentSources: P,
            paymentSourceId: x,
            updatedSubscription: A,
            startingPremiumSubscriptionPlanIdRef: T,
            startingFractionalPremiumEndsAtRef: j,
            isPremiumGroupPurchase: R,
        } = (0, g.P5)(),
        M = (0, c.A)(),
        C = (0, b.bB)(),
        {
            isGift: y,
            giftRecipient: N,
            giftCode: k,
            hasSentMessage: O,
            isSendingMessage: Z,
            sendGiftMessage: X,
            claimableRewards: Q,
            selectedGiftingPromotionReward: $,
        } = (0, h.Pv)(),
        { confirmationFooter: J } = (0, f.cG)(),
        ee = (0, E.px)(M, y, Q),
        et = (0, E.Mq)(M),
        en = (0, F.Mv)($, !1),
        el = (0, r.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        ei = (0, r.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        er = (0, ep.g)(P, x),
        es = y && null != $ && null != en && et;
    v()(null != M, "Expected plan to selected"),
        v()(null != I, "Expected selectedSkuId"),
        v()(null != C, "Step should be set");
    let ea = i.useCallback(() => {
        s(), o?.();
    }, [s, o]);
    (0, L.Ay)(() => {
        R &&
            z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != A,
                has_any_premium_group: A?.hasAnyPremiumGroup ?? !1,
                subscription_id: A?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (R)
                    if (null != A && A.hasAnyPremiumGroup) {
                        z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, {
                            subscription_id: A.id,
                        });
                        let e = (0, w.uniqueId)("premium-group-purchase-flow-modal");
                        (0, U.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("85579").then(n.bind(n, 785606));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: A,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, U.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        z.default.track(eE.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != A,
                            has_any_premium_group: A?.hasAnyPremiumGroup ?? !1,
                        }),
                            K._.dispatch(eE.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                K._.subscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    K._.unsubscribe(eE.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [R, A]),
        i.useEffect(() => {
            !y || null == N || null == k || O || Z || (0, V.Ik)(N) || X({ onSubscriptionConfirmation: o });
        }, [X, y, N, k, O, Z, o]),
        i.useEffect(() => {
            ee &&
                null != ei &&
                null != el &&
                (0, H.qr)(G.M.GIFTING_PROMOTION_REMINDER, el, { dismissAction: eS.i.INDIRECT_ACTION });
        }, [ei, el, ee]);
    let eo = null != S ? W.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(M, ea, A);
    else if (y) t = (0, l.jsx)(W.fw, { planId: M.id, onClose: ea });
    else {
        let e =
            T.current === M.id
                ? { postSuccessGuild: d }
                : {
                      followupSKUInfo: m,
                      startingPremiumSubscriptionPlanId: T.current,
                      isDowngrade: null != _ && (0, q.vT)(_, M.id, a),
                  };
        t = (0, l.jsx)(W.Ay, {
            planId: M.id,
            onClose: ea,
            paymentSourceType: er,
            hideClose: null != J,
            startingFractionalPremiumEndsAt: j.current,
            customCTAType: eo,
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
    eP = n(430993),
    ex = n(331322),
    eA = n(503698),
    eh = n.n(eA),
    eg = n(575593),
    eT = n(187322),
    ef = n(890856),
    ej = n(947641),
    eR = n(661531),
    eM = n(534514),
    eC = n(834730),
    ey = n(713517),
    eN = n(929283),
    eb = n(761365),
    ek = n(267861);
let eO = (e) => {
    let t,
        n,
        { skuId: r, user: s, claimed: a, onSelect: o, selectedSkuId: u } = e,
        [d, c] = i.useState(null),
        p = i.useCallback((e) => {
            c(e);
        }, []),
        m = i.useMemo(() => ({ current: d }), [d]),
        { isHoveringOrFocusing: E } = (0, ey.A)(m),
        S = !a && E,
        { product: I } = (0, et.q)(r);
    if (null == I) return null;
    let _ = I.items[0];
    return null == _
        ? null
        : ((0, ei.T)(_)
              ? ((n = eg.R.AVATAR_DECORATION),
                (t = (0, l.jsx)(eN.i, { item: _, user: s, isHighlighted: S, avatarSize: Q._3.SIZE_96 })))
              : (0, er.F)(_) &&
                ((n = eg.R.NAMEPLATE),
                (t = (0, l.jsx)(eb.A, { nameplate: _, user: s, isHighlighted: S, size: "small" }))),
          (0, l.jsx)(eT.vN, {
              children: (0, l.jsxs)(ef.s, {
                  ref: p,
                  "aria-label": I.name ?? "",
                  onClick: () => {
                      null == r || null == o || a || o(r);
                  },
                  className: eh()(ek._x, { [ek.Vp]: !a, [ek.mr]: S, [ek.md]: u === r }),
                  children: [
                      (0, l.jsx)("div", {
                          className: eh()(ek.VH, {
                              [ek._Q]: n === eg.R.AVATAR_DECORATION,
                              [ek.M4]: n === eg.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("div", { className: eh()(ek.i1, { [ek.Sf]: a }), children: t }),
                                            a &&
                                                (0, l.jsx)(ej.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: eR.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: ek.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, l.jsxs)("div", {
                          className: ek.tZ,
                          children: [
                              (0, l.jsx)(eM.D, { variant: "heading-md/extrabold", children: I.name }),
                              (0, l.jsx)(eC.E, {
                                  variant: "text-sm/normal",
                                  children: a ? eu.intl.string(eu.t["6cfuDj"]) : eu.intl.string(eu.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var ev = n(696208),
    ew = n(683433),
    eD = n(344159);
function eG(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: r,
            onBackClick: s,
            showBackButton: a,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: u = !1,
            isTrial: d,
            isNextDisabled: p = !1,
        } = e,
        { paymentSources: m } = (0, g.P5)(),
        E = (0, c.A)(),
        { isGift: S, claimableRewards: I } = (0, h.Pv)();
    r = r ?? m;
    let {
            variant: _,
            text: P,
            onClick: x,
            disabled: A,
        } = eU({
            onStepChange: t,
            selectedPlanId: (n = n ?? E?.id),
            isGift: S,
            claimableRewards: I,
            paymentSources: r,
            shouldRenderUpdatedPaymentModal: u,
            isTrial: d,
            isNextDisabled: p,
        }),
        T = i.useMemo(
            () =>
                null != n && o.includes(n)
                    ? [{ variant: _, text: P, onClick: x, disabled: A }]
                    : [{ variant: "primary", text: eu.intl.string(eu.t.XqMe3N), disabled: !0 }],
            [_, P, x, A, n, o],
        );
    return (0, l.jsx)(ev.H, { leading: a && null != s ? (0, l.jsx)(ew.A, { onClick: s }) : void 0, actions: T });
}
let eU = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: l,
            claimableRewards: i,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: u = !1,
        } = e,
        d = (0, r.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        p = (0, c.A)(),
        m = (0, b.bB)(),
        { hasEntitlements: S } = (0, eD.X)(n, l),
        I = (null != d && null != d.paymentSourceId) || Object.keys(s).length > 0 || (S && !o);
    var _ = a ? eu.intl.string(eu.t.PDTjLN) : eu.intl.string(eu.t.XqMe3N),
        P = T.pn.ADD_PAYMENT_STEPS;
    return (
        I && (P = T.pn.REVIEW),
        (0, E.px)(p, l, i) && m !== T.pn.SELECT_FREE_SKU && (P = T.pn.SELECT_FREE_SKU),
        { variant: "primary", text: _, onClick: () => t(P), disabled: u }
    );
};
var eL = n(328232);
function eF(e) {
    let { handleStepChange: t } = e,
        n = (0, p.t4)((e) => e.selectedSkuId),
        s = (0, c.A)(),
        a = (0, b.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: u, claimableRewards: d } = (0, h.Pv)(),
        m = (0, r.bG)([ea.default], () => ea.default.getCurrentUser()),
        E = (0, r.yK)([B.A], () => B.A.getGiftPromotionRewardSkuIds()),
        S = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(d, u),
        [I, _] = i.useState(S),
        [P, x] = i.useState(!1);
    i.useEffect(() => {
        P || null != u || null == S || (o(S), _(S));
    }, [S, P, u, o]),
        v()(null != s, "Expected plan to selected"),
        v()(null != n, "Expected selectedSkuId"),
        v()(null != a, "Step should be set");
    let A = i.useMemo(() => null != I && (d ?? []).includes(I), [I, d]),
        g = i.useMemo(() => 0 === E.length || null == I || !A, [E, I, A]);
    i.useEffect(() => {
        if (0 === E.length) {
            _(void 0), o(void 0);
            return;
        }
        (null != I && A && E.includes(I)) || null == I || (_(void 0), o(void 0));
    }, [E, A, I, o]);
    let f = (e) => {
            o(e), _(e), x(!0);
        },
        j = E.map((e) =>
            (0, l.jsx)(
                eO,
                { skuId: e, claimed: null != d && !d.includes(e), user: m, onSelect: f, selectedSkuId: I },
                e,
            ),
        ),
        R = (0, l.jsx)(Y.UX, {
            children: (0, l.jsx)(eG, {
                onStepChange: t,
                onBackClick: () => t(T.pn.PLAN_SELECT),
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
                title: eu.intl.string(eu.t.OEtqpm),
                subtitle: eu.intl.string(eu.t.h2nMp0),
            }),
            (0, l.jsx)(eP.c, {
                children: (0, l.jsx)(ex.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, l.jsx)("div", { className: eL.Dq, children: j }),
                }),
            }),
            R,
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
        { claimableRewards: t } = (0, h.Pv)(),
        n = (0, eZ.T)(e?.asset),
        i = (0, eZ.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, E.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, E.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let u = (0, E.x)(o, a);
    return null == e || null == t
        ? null
        : (0, l.jsxs)("div", {
              className: eQ.qD,
              style: u,
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
                      children: eu.intl.string(eu.t.Abiuci),
                  }),
              ],
          });
}
var eJ = n(337092),
    e0 = n(975571),
    e1 = n(927578),
    e2 = n(69494),
    e6 = n(534479),
    e8 = n(340034),
    e4 = n(50956),
    e5 = n(71867),
    e3 = n(249872);
function e7(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: r, subscriptionTier: s, trialId: a, handleClose: o } = e,
        u = (0, p.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: d,
            defaultPlanId: m,
            priceOptions: S,
            isPremium: I,
            isEligibleForTrial: P,
            isEligibleForDiscount: A,
            referralTrialOfferId: f,
        } = (0, g.P5)(),
        j = (0, c.A)(),
        R = (0, b.bB)(),
        { isGift: M, giftRecipient: C, giftMessage: y, claimableRewards: N } = (0, h.Pv)(),
        k = (0, E.Mq)(j),
        O = (0, eB.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(D.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        w = M && k && null != N && N.length > 0 && O,
        G = (P || A) ?? !1,
        U = i.useMemo(() => (0, e1.Tm)({ skuId: u, isPremium: I, defaultPlanId: m }), [u, I, m]),
        L = A && U.includes(_.gD.PREMIUM_MONTH_TIER_2) ? _.gD.PREMIUM_MONTH_TIER_2 : U[0],
        F = (0, eB.bG)([x.A], () => x.A.get(L)),
        H = [{ planId: F?.id, quantity: 1 }],
        [W, z] = i.useState(G),
        [K, q] = (0, eY.Kq)({
            items: H,
            renewal: !1,
            preventFetch: !G,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: S.paymentSourceId,
            currency: S.currency,
        });
    i.useEffect(() => {
        G && z(K?.subscriptionPeriodEnd == null);
    }, [K, G]),
        (0, ez.A)(
            "Payment Modal Plan Select Step",
            W,
            5,
            { proratedInvoicePreview: K, proratedInvoiceError: q, isEligibleForOffer: G },
            { tags: { app_context: "billing" } },
        );
    let Z = q?.message ?? eu.intl.string(eu.t.R0RpRX),
        X = G && null == q,
        Q = G && null != q,
        $ = X && null == d && K?.subscriptionPeriodEnd == null,
        J = (0, eV.D7)({ location: "premium_payment_plan_select_step" });
    (0, eq.c)(K, A);
    let ee = i.useMemo(
        () => ({
            planOptions: U,
            selectedPlanId: j?.id,
            planGroup: r,
            subscriptionPeriodEnd: K?.subscriptionPeriodEnd,
            useCompactGiftComponents: w,
            handleClose: o,
        }),
        [U, j?.id, r, K?.subscriptionPeriodEnd, w, o],
    );
    if ($) return J ? (0, l.jsx)(eK.Ed, { className: e3.QW }) : (0, l.jsx)(e6.A, {});
    v()(null != R, "Step should be set"), v()(U.length > 0, "Premium plan options should be set");
    let et =
        J && !M
            ? (0, l.jsx)(e8.XH, { ...ee, isInPlanSelectStep: !0, showPlanStatusSubText: !0 })
            : (0, l.jsx)(eJ.$p, { ...ee });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e4.Z, { giftMessage: y }),
            !(M && (0, V.Ik)(C)) && (0, l.jsx)(e2.A, { isEligibleForTrial: P }),
            (0, l.jsxs)(Y.dZ, {
                children: [
                    !J && X && (0, l.jsx)("hr", { className: e3.T4 }),
                    (0, l.jsx)(e5.P, { className: e3.ZB, planSkuId: F?.skuId, referralTrialOfferId: f }),
                    (0, l.jsx)(em.A, {}),
                    Q ? (0, l.jsx)(eW.w, { type: "critical", children: Z }) : et,
                    X &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("hr", { className: eh()(e3.IM, { [e3.Go]: J }) }),
                                (0, l.jsx)(eC.E, {
                                    variant: "text-xs/normal",
                                    children: eu.intl.format(eu.t.BHtnqA, {
                                        link: e0.A.getArticleURL(eE.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, l.jsxs)(Y.UX, {
                children: [
                    w && (0, l.jsx)(e$, {}),
                    (0, l.jsx)(eG, {
                        onStepChange: t,
                        onBackClick: () => t(T.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: U,
                        shouldRenderUpdatedPaymentModal: X,
                        isTrial: P,
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
            priceOptions: o,
            defaultPlanId: u,
            hasPaymentSources: d,
        } = (0, g.P5)(),
        { isGift: c, claimableRewards: m } = (0, h.Pv)(),
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
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: u,
                } = e;
                l(n);
                let d = T.pn.PLAN_SELECT,
                    c = (0, e1.aZ)(t);
                (c !== _.pe.TIER_1 && c !== _.pe.TIER_2) || n !== _.pe.TIER_0 || r || (d = T.pn.WHAT_YOU_LOSE);
                let p = (0, tn.t)({ userTrialOffer: s, isGift: r, skuId: n }),
                    m = (0, eH.vT)({
                        isTrial: p,
                        isGift: r,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: o,
                    });
                d !== T.pn.WHAT_YOU_LOSE && m && ((d = T.pn.REVIEW), a((0, eH.xT)(n, t, u))),
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
                defaultPlanId: u,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: i } = e;
                i((0, e1.mH)(_.pe.TIER_2)),
                    t(_.gD.PREMIUM_GROUP_MONTH),
                    n(l ? T.pn.REVIEW : T.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: _.pe.TIER_2 } });
            })({ setSelectedPlanId: r, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: i }),
        isGift: c,
        priceOptions: o,
        showPromotionalGiftBanner: E,
    });
}
function tr(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: r, onSelectPremiumGroup: s } = e,
        a = (0, te.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(e_.rQ, { titleTextVariant: "heading-lg/semibold", title: eu.intl.string(eu.t["r+SebU"]) }),
            a
                ? (0, l.jsx)(eP.c, {
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
                : (0, l.jsx)(eP.c, {
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
function to(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { selectedSkuId: i, setSelectedPlanId: r } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
        })),
        { activeSubscription: s, startedPaymentFlowWithPaymentSourcesRef: a } = (0, g.P5)(),
        { isGift: o } = (0, h.Pv)(),
        u = null != s ? (0, e1.EL)(s) : null,
        d = null != u ? (0, e1.RH)(u.planId) : null,
        c = null != u ? (0, e1.m6)(u.planId) : null,
        m = (0, eH.vT)({ isTrial: !1, isGift: o, selectedSkuId: i, startedPaymentFlowWithPaymentSources: a.current });
    return (
        v()(null != c, "Expected premium type"),
        (0, l.jsx)(ta.A, {
            premiumType: c,
            titleText: eu.intl.string(eu.t["7VcWW0"]),
            subtitleText: eu.intl.format(eu.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, l.jsxs)(ts.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, l.jsx)(X.$, {
                        variant: "primary",
                        text: eu.intl.string(eu.t["3PatSz"]),
                        onClick: () => {
                            m ? (r((0, eH.xT)(i, s)), t(T.pn.REVIEW)) : t(T.pn.PLAN_SELECT);
                        },
                    }),
                    (0, l.jsx)(X.$, { variant: "secondary", onClick: n, text: eu.intl.string(eu.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let tu = [T.pn.PLAN_SELECT, T.pn.ADD_PAYMENT_STEPS, T.pn.REVIEW, T.pn.CONFIRM];
function td(e) {
    let {
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            subscriptionTier: m,
            onClose: E,
            trialId: P,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            openInvoiceId: M,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: y,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: v,
            applicationId: w,
            guildId: D,
            referralTrialOfferId: G,
            skuId: U,
            returnRef: L,
            skipConfirm: F = !1,
            continueSessionToInitialStep: H,
        } = e,
        { analyticsLocations: B } = (0, u.Ay)();
    i.useEffect(() => {
        x.A.isLoadedForPremiumSKUs() || s.h.wait(() => (0, a.zS)());
    }, []);
    let W = (0, p.t4)((e) => e.selectedSkuId),
        { purchaseState: z } = (0, g.P5)(),
        K = (0, b.bB)(),
        { isGift: V, giftMessage: q } = (0, h.Pv)(),
        Y = !V && W === _.pe.TIER_2 && !S.Ct && !S.KY && null == (0, I.uM)(),
        Z = z === j.h.PURCHASING;
    return (0, l.jsx)(k.A, {
        isConfirmationStep: K === T.pn.CONFIRM && null == H && null == y,
        isEligibleForWowMoment: Y,
        shouldPrefetchWowMoment: Z,
        children: (0, l.jsx)(R.PaymentModal, {
            analyticsLocations: B,
            analyticsLocation: t,
            analyticsObject: n,
            analyticsSourceLocation: r,
            analyticsSubscriptionType: eE.rzx.PREMIUM,
            onComplete: o,
            transitionState: d,
            initialPlanId: c,
            giftMessage: q,
            subscriptionTier: m,
            onClose: E,
            trialId: P,
            isGift: V,
            trialFooterMessageOverride: A,
            reviewWarningMessage: f,
            planGroup: _.LE,
            openInvoiceId: M,
            onSubscriptionConfirmation: C,
            renderPurchaseConfirmation: y,
            postSuccessGuild: N,
            followupSKUInfo: O,
            renderHeader: v,
            applicationId: w,
            guildId: D,
            referralTrialOfferId: G,
            skuId: U,
            shakeWhilePurchasing: !0,
            returnRef: L,
            skipConfirm: F,
            continueSessionToInitialStep: H,
        }),
    });
}
function tc(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: i } = e,
        r = (0, p.t4)((e) => e.selectedSkuId),
        { paymentSources: s } = (0, g.P5)(),
        a = (0, c.A)(),
        { isGift: o, claimableRewards: u } = (0, h.Pv)(),
        d = (0, tn.A)({ isGift: o, skuId: r, referralTrialOfferId: i }),
        m = (0, eH.lp)(d),
        S = (0, E.px)(a, o, u);
    return (0, l.jsx)(M.x, {
        ...e,
        breadcrumbSteps: tu,
        onReturn: () => {
            let e = Object.values(s),
                l = e.length < 1 && null == t ? T.pn.PLAN_SELECT : T.pn.REVIEW;
            m && (l = T.pn.REVIEW),
                S && e.length < 1 && (l = T.pn.SELECT_FREE_SKU),
                n(l, { trackedFromStep: T.pn.PAYMENT_TYPE });
        },
    });
}
let tp = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return [
            { key: null, renderStep: (e) => (0, l.jsx)(R.I, { ...e }) },
            {
                key: T.pn.SKU_SELECT,
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
                key: T.pn.WHAT_YOU_LOSE,
                renderStep: (e) => (0, l.jsx)(to, { ...e }),
                options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
            },
            {
                key: T.pn.PLAN_SELECT,
                renderStep: (e) => (0, l.jsx)(e7, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eH.lp)(e) ? null : eu.intl.string(eu.t["r+SebU"])),
                    sectionHeaderText: () => eu.intl.string(eu.t.UKbp1N),
                    modalSizeGetter: (e) => {
                        let { isGift: t } = e;
                        return t ? "xl" : "md";
                    },
                },
            },
            {
                key: T.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) => (0, l.jsx)(tc, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) => ((0, eH.lp)(e) ? null : eu.intl.string(eu.t.Sb6wI1)),
                },
            },
            { key: T.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(y.A, {}) },
            { key: T.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(C.A, {}) },
            {
                key: T.pn.REVIEW,
                renderStep: (e) => (0, l.jsx)(N._, { ...e }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: (e) =>
                        (0, eH.lp)(e) ? eu.intl.string(eu.t.UKbp1N) : eu.intl.string(eu.t.QBnNHq),
                },
            },
            {
                key: T.pn.CONFIRM,
                renderStep: (e) => (0, l.jsx)(eI, { ...e }),
                options: { modalSizeGetter: () => "md" },
            },
            {
                key: T.pn.SELECT_FREE_SKU,
                renderStep: (e) => (0, l.jsx)(eF, { ...e }),
                options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
            },
        ];
    },
    tm = tp();
function tE(e) {
    let t = (0, r.bG)([A.A], () => A.A.getPremiumTypeSubscription()),
        n = (0, m.cg)() ? _.gD.PREMIUM_MONTH_TIER_2 : void 0,
        { analyticsLocations: s } = (0, u.Ay)(e.analyticsLocations, o.A.PREMIUM_PAYMENT_MODAL),
        {
            confirmationFooter: a,
            defaultPlanId: c,
            giftingOrigin: p,
            giftMessage: E,
            giftRecipient: S,
            giftStyle: I,
            isGift: x,
            loadId: T,
            referralCode: j,
            subscriptionTier: R,
            referralTrialOfferId: M,
        } = e;
    if (null != R && !Object.values(_.pe).includes(R)) throw Error("subscriptionTier must be a premium subscription");
    let C = (0, P.tA)({ giftRecipient: S, isGift: x ?? !1 }),
        y = i.useMemo(() => tp(C), [C]);
    return (0, l.jsx)(u.f5, {
        value: s,
        children: (0, l.jsx)(g.PaymentContextProvider, {
            loadId: T,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: y,
            skuIDs: [..._.oz],
            isGift: x,
            defaultPlanId: n ?? c,
            referralCode: j,
            wasTier2PremiumBeforePurchase: e.wasTier2PremiumBeforePurchase,
            referralTrialOfferId: M,
            unifiedCheckoutFlow: d.C.PREMIUM_CHECKOUT,
            children: (0, l.jsx)(f.Qt, {
                confirmationFooter: a,
                children: (0, l.jsx)(h.dX, {
                    isGift: x,
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
