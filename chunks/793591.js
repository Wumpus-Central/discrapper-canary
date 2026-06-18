"use strict";
n.d(t, { o: () => r6 }), n(321073);
var i,
    r = n(627968),
    s = n(64700),
    a = n(835245),
    o = n(192308),
    l = n(231723),
    u = n(166532),
    c = n(925847),
    d = n(310829),
    _ = n(174459),
    h = n(75304),
    f = n(145659),
    p = n(624210),
    E = n(26279);
async function m(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === E.Re.DRAFT)
        try {
            await (0, p.Nl)(n.id);
        } catch (e) {}
}
var g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    y = n(171835),
    C = n(584160),
    N = n(480642),
    v = n(211159),
    R = n(832286),
    O = n(958340),
    b = n(566980),
    D = n(615310),
    L = n(489254),
    w = n(71393),
    M = n(178368),
    P = n(166403),
    x = n(473145),
    k = n(802790),
    U = n(636441),
    G = n(587491),
    F = n(285753),
    V = n(430993),
    B = n(86379),
    j = n(545075),
    H = n(655857),
    Y = n(534479),
    W = n(753390);
function K() {
    let e = (0, g.bG)([P.A], () => P.A.hasFetchedSubscriptions());
    return (
        s.useEffect(() => {
            e || (0, W.hP)();
        }, [e]),
        e
    );
}
var $ = n(526151),
    z = n(303557),
    q = n(652215),
    Z = n(375708),
    X = n(898640);
function Q(e) {
    let { message: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.s3, { title: Z.intl.string(Z.t.q9EGps) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)("p", { className: X.C, children: t }) }),
        ],
    });
}
var J = n(989351),
    ee = n(619088),
    et = n(587187),
    en = n(130305),
    ei = n(121226),
    er = n(469633);
let es = [u.pn.PLAN_SELECT],
    ea = [
        { key: u.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(ee.c, { ...e }), options: { renderHeader: !0 } },
        {
            key: u.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(et.d, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    eo = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, v.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: a } = (0, $.Oe)(),
                o = (0, B.Hp)(),
                l = K(),
                { hasFetchedRelatedSubscriptionPlans: c, displayCurrency: d } = (0, H.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: h } = (0, z.l)(),
                f = null != n && null != n.renewalMutations,
                p = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                E = !l || !c || !h || null == d || "" === d;
            return ((0, I.Ay)(() => {
                f && _.default.track(q.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: a, guild_id: i });
            }),
            s.useEffect(() => {
                E || o || p || f || t(u.pn.PLAN_SELECT);
            }, [E, o, p, f, t]),
            p)
                ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.mOWsF1) })
                : f
                  ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.npfhh0) })
                  : E
                    ? (0, r.jsx)(Y.A, {})
                    : o
                      ? (0, r.jsx)(j.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: ea,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: en.b },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            guildId: t,
                            totalNumberOfSlotsToAssign: n = 1,
                            intent: i,
                            disablePremiumUpsell: s,
                            onSubscribeComplete: a,
                            closeGuildPerksModal: o,
                            analyticsLocation: l,
                        },
                        applicationId: u,
                        analyticsSourceLocation: c,
                        stepConfigs: d,
                        loadId: _,
                        onComplete: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    E = (0, A.A)(() => n - (0, x.D$)(M.A.boostSlots).length);
                return (
                    (0, I.Ay)(() => {
                        null != O.A.getGuild(t) || O.A.isGuildFetching(t) || (0, R.y)(t);
                    }),
                    (0, r.jsx)(y.M, {
                        activeSubscription: p,
                        stepConfigs: d,
                        skuIDs: er.q,
                        currencySkuIDs: er.q,
                        loadId: _,
                        unifiedCheckoutFlow: S.C.GUILD_BOOST_CHECKOUT,
                        children: (0, r.jsxs)($.mf, {
                            initialNumGuildBoostsToPurchase: E,
                            disablePremiumUpsell: s,
                            closeGuildPerksModal: o,
                            guildId: t,
                            analyticsLocation: l,
                            analyticsSourceLocation: c,
                            applicationId: u,
                            intent: i,
                            onSubscribeComplete: a,
                            children: [(0, r.jsx)(ei.B, { onComplete: h }), f],
                        }),
                    })
                );
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { numGuildBoostsToPurchase: i, guildId: a, existingAvailableSlotCount: o } = (0, $.Oe)(),
                    l = (0, D.bB)(),
                    c = (0, v.t4)((e) => e.purchaseState),
                    d = (0, L.n)("GuildBoostUnifiedCheckout"),
                    _ = d && (l === u.pn.REVIEW || l === u.pn.CONFIRM),
                    h = (0, F.A)(_),
                    f = s.useMemo(() => ({ quantity: i }), [i]);
                return d && l === u.pn.CONFIRM
                    ? (0, r.jsx)(G.A, {
                          mediaUrls: h.mediaUrls,
                          isSuccess: h.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(c === b.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(U.A, {
                                  transitionState: t.transitionState,
                                  guild: w.A.getGuild(a),
                                  guildBoostQuantity: i + o,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: f,
                          skipUnifiedHeaderForSteps: es,
                          disableUnsupportedExternalSubscriptionHandler: !0,
                          isMediumModal: !0,
                      });
            },
            tenantAnalyticsLocation: T.A.GUILD_BOOST_PURCHASE_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { plan: t, onClose: n, step: i } = e,
                s = (0, L.n)("GuildBoostUnifiedCheckout"),
                a = (0, v.t4)((e) => e.purchaseState);
            return i === u.pn.PREMIUM_UPSELL
                ? null
                : i === u.pn.REVIEW
                  ? (0, r.jsx)(N.s3, { ...(0, C.u)({ skuId: t?.skuId ?? null, step: i }) })
                  : s
                    ? (0, r.jsx)(N.s3, { title: (0, C.u)({ skuId: null, step: i }).title })
                    : (0, r.jsx)(k.A, { onClose: () => n(a === b.h.COMPLETED), currentStep: i, purchaseState: a });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(J.H, { ...e }), options: { renderHeader: !0 } },
    };
var el = n(529427),
    eu = n(630303),
    ec = n(284009),
    ed = n.n(ec),
    e_ = n(666646),
    eh = n(871109);
let ef = s.createContext(void 0);
function ep() {
    let e = s.useContext(ef);
    return ed()(null != e, "GuildProductPurchaseContext not found"), e;
}
function eE(e) {
    let { children: t, skuId: n, ...i } = e,
        s = (0, g.bG)([eh.A], () => eh.A.getGuildProduct(n));
    return (
        ed()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(ef.Provider, { value: { guildProductListing: s, ...i }, children: t })
    );
}
function em(e) {
    let { handleClose: t } = e,
        { guildProductListing: i, guildId: s } = ep(),
        a = (0, e_.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            ed()(null != a, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: a }),
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("57034"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, r.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var eg = n(503698),
    eA = n.n(eg),
    eI = n(939249),
    eT = n(789645),
    eS = n(935462),
    ey = n(303612),
    eC = n(916261),
    eN = n(575650);
function ev(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(eI.D, {
        className: eA()(eC.cG, t),
        onClick: n,
        children: (0, r.jsx)(eT.P, { size: "xs", color: "currentColor", className: eC.yP }),
    });
}
function eR(e) {
    let { guildProductListing: t, onClose: n, className: i } = e;
    return (0, r.jsxs)(eS.rQ, {
        className: eA()(eC.wx, eN.GI, i),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(ey.A, { className: eC.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(ev, { className: eC.b, onClose: n }),
        ],
    });
}
var eO = n(196617);
let eb = {
    CHECKOUT_FLOW: el.CL.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [u.pn.REVIEW]: eu.p },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: i,
            } = e;
            return (0, r.jsx)(eE, { guildId: t, skuId: n, children: i });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: i } = ep();
        return n === u.pn.CONFIRM
            ? null
            : (0, r.jsx)(eR, { guildProductListing: i, className: eO.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(em, { ...e }) },
};
var eD = n(20742),
    eL = n(688810),
    ew = n(848149),
    eM = n(937008),
    eP = n(106778),
    ex = n(228366),
    ek = n(213530),
    eU = n(966971),
    eG = n(758836),
    eF = n(483764);
let eV = { sliderBodyClassName: eF.Bz },
    eB = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: i, customConfettiVisible: s } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eP.Fk, { ref: n, className: eF.Lb, environment: t.current }),
                (0, r.jsx)(ek.K, { options: i, className: eA()(eF.Oh, { [eF.R]: !s }) }),
            ],
        });
    };
var ej = n(702841),
    eH = n(775602),
    eY = n(31823),
    eW = n(211083),
    eK = n(427675),
    e$ = n(590180),
    ez = n(953150),
    eq = n(524246),
    eZ = n(14368),
    eX = n(61750),
    eQ = n(972607),
    eJ = n(901930),
    e0 = n(482132),
    e1 = n(788868);
function e2(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: i,
            purchaseError: a,
            purchasePreviewError: o,
            appliedUserDiscounts: l,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: u } = (0, eW.o)(),
        { application: c } = (0, eY.V)(),
        d = (0, eK.gU)(),
        _ = (0, ej.bG)([e$.A], () => e$.A.getProduct(i)),
        h = s.useRef(!1);
    ed()(null != i, "Expected selectedSkuId"), ed()(null != c, "Expected application");
    let f = d[i];
    ed()(null != f, "Expected sku");
    let p = null != u || null != a || null != o,
        E =
            l.length > 0
                ? Z.intl.formatToPlainString(Z.t.VuV3Td, { discountOfferAmount: l[0].discount.amount })
                : void 0;
    return (s.useEffect(() => {
        null == _ ||
            p ||
            h.current ||
            ((h.current = !0),
            (0, eX.A)({
                product: _,
                overrideTitle: E,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: eG.gs.FIAT,
            }));
    }, [_, n, t, p, E]),
    p)
        ? (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(eJ.A, {}) })
        : null;
}
function e3(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: a,
            giftRecipient: o,
            giftMessageError: l,
            isSendingMessage: u,
            giftingOrigin: c,
        } = (0, eM.Pv)(),
        d = (0, ej.bG)([eH.Ay], () => eH.Ay.useReducedMotion),
        _ = s.useRef(null),
        h = (0, v.t4)((e) => e.selectedSkuId),
        f = (0, ej.bG)([e$.A], () => e$.A.getProduct(h)),
        { confettiColors: p } = (0, ez.A)(f?.styles);
    return (
        s.useEffect(() => {
            t &&
                null != o &&
                null != h &&
                (c === e1.vQ.USER_PROFILE_WISHLIST || c === e1.vQ.DM_CHANNEL_WISHLIST) &&
                ex.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: h, recipientId: o.id });
        }, [t, o, h, c]),
        t
            ? (0, r.jsxs)("div", {
                  ref: _,
                  children: [
                      (0, r.jsx)(eQ.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: a,
                          giftRecipient: o,
                          giftMessageError: l,
                          isSendingMessage: u,
                      }),
                      !e.hideConfetti &&
                          !d &&
                          (0, r.jsx)(eq.A, {
                              confettiTarget: _.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eZ.rA)(f?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(e2, { ...e })
    );
}
var e6 = n(123292),
    e4 = n(564064),
    e5 = n(993408),
    e7 = n(575593),
    e8 = n(452027),
    e9 = n(922016),
    te = n(778712),
    tt = n(834730),
    tn = n(534514),
    ti = n(986687),
    tr = n(999291),
    ts = n(903209),
    ta = n(287809),
    to = n(428262),
    tl = n(674658),
    tu = n(898461),
    tc = n(203632),
    td = n(892118),
    t_ = n(536572),
    th = n(456839),
    tf = n(219103),
    tp = n(525723),
    tE = n(780651);
function tm(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: i,
            className: a,
            previewHeaderClassName: o,
            hideProfilePreview: l,
        } = e,
        { giftRecipient: u, giftRecipientError: c } = (0, eM.Pv)(),
        d = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        _ = to.Ay.canUseShopDiscounts(d),
        h = (0, tr.Ay)(u?.id),
        f = s.useRef(null),
        [p, E] = s.useState(!1),
        { product: m } = (0, tl.q)(t, !0),
        A = s.useMemo(() => (0, e5.fT)(m, _), [m, _]),
        I = (0, tp.V_)(m);
    if (null == m || 0 === m.items.length) return null;
    let [T] = m.items,
        S = (0, t_.VG)(m),
        y = null != u && u.id !== d?.id && m.type !== e7.R.BUNDLE && T.type !== e7.R.NAMEPLATE && !l;
    return (0, r.jsxs)("div", {
        className: a,
        children: [
            (0, r.jsx)("div", {
                className: eA()(tE.QU, o),
                children: (0, r.jsx)(e8.D, {
                    label: Z.intl.string(Z.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            e9.Y,
                            {
                                targetElementRef: f,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => E(!1),
                                preload: () => (0, ts.A)(u.id, u.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(ti.A, {
                                        ...e,
                                        user: u,
                                        pendingAvatar: u.getAvatarURL(null, (0, te.FT)(te._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, tu.T)(T) ? T : null,
                                        pendingProfileEffect: (0, tc.C3)(T) ? T : null,
                                        pendingProfileFrame: (0, td.s)(T) ? T : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...i } = e;
                                    return (0, r.jsx)(eI.D, {
                                        ...i,
                                        className: tE.Nx,
                                        innerRef: f,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(tt.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: Z.intl.string(Z.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            h?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eA()(tE.i1, null != c ? tE.cN : tE.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tE.Ug,
                        children: [
                            (0, r.jsx)(th.O, { product: m }),
                            (0, r.jsxs)("div", {
                                className: tE.JZ,
                                children: [
                                    (0, r.jsx)(tt.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(tn.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            m?.type === e7.R.BUNDLE
                                                ? null
                                                : T.type === e7.R.AVATAR_DECORATION
                                                  ? Z.intl.string(Z.t["7v0T9P"])
                                                  : T.type === e7.R.NAMEPLATE
                                                    ? Z.intl.string(Z.t.x5CoXR)
                                                    : T.type === e7.R.PROFILE_EFFECT
                                                      ? Z.intl.string(Z.t.wR5wOo)
                                                      : T.type === e7.R.PROFILE_FRAME
                                                        ? Z.intl.string(Z.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(tf.x, {
                                priceAmount: n,
                                priceCurrency: i,
                                discount: A,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != c &&
                        (0, r.jsx)("div", {
                            className: tE.Wh,
                            children: (0, r.jsx)(tt.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: c,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var tg = n(783878),
    tA = n(966327),
    tI = n(427262);
let tT = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: i, recipients: s } = e,
        { giftRecipient: a, setGiftRecipient: o } = (0, eM.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: i,
              children: (0, r.jsx)(tg.Z, {
                  selectionMode: "single",
                  label: Z.intl.string(Z.t.xFn72s),
                  placeholder: Z.intl.string(Z.t.R0vK0N),
                  value: a?.id,
                  onSelectionChange: (e) => {
                      let i = s.find((t) => t.id === e);
                      null != i && (n(i, t), o(i));
                  },
                  options: s.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${tI.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(tA.A, { user: e, size: te._3.SIZE_20 }),
                  })),
              }),
          });
};
var tS = n(735438),
    ty = n.n(tS),
    tC = n(427358),
    tN = n(570287),
    tv = n(994500);
function tR() {
    let e = (0, g.yK)([tv.A], () => tv.A.getFriendIDs()),
        t = (0, g.yK)([tC.A], () =>
            tC.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: i, otherUserId: r } = e,
                        s = (0, tN.q)(r);
                    return !t && (n >= 0.1 || i >= 0.1) && s;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = s.useMemo(() => ty().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [ta.default],
        () =>
            n.reduce((e, t) => {
                let n = ta.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var tO = n(871181),
    tb = n(318007),
    tD = n(285719),
    tL = n(976860),
    tw = n(353791);
function tM(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: i } = (0, eL.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(e6.Q, {
        text: Z.intl.string(Z.t.J82mpK),
        onClick: function () {
            t(),
                (0, o.closeAllModals)(),
                null == n
                    ? (0, e4.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tL.pX)(`${q.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var tP = n(818348);
let tx = (0, s.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    tk = () => (0, s.useContext)(tx),
    tU = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = tk(),
            { analyticsLocations: i } = (0, eL.Ay)();
        return (0, r.jsx)(e3, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tG = {
        [u.pn.GIFT_CUSTOMIZATION]: () => Z.intl.string(Z.t["JCFN/y"]),
        [u.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => Z.intl.string(Z.t.lDbi6H),
        [u.pn.CONFIRM]: () => "",
    },
    tF = (e) => {
        let { step: t } = e,
            n = tG[t];
        return null == n ? null : (0, r.jsx)(eD.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tV = {
        CHECKOUT_FLOW: el.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: i,
                        renderRightColumn: a,
                        ctaDisabled: o,
                        loading: l,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: i = "",
                                setCustomGiftMessage: s,
                                giftRecipientError: a,
                                setGiftRecipientError: o,
                                validatingGiftRecipient: l,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, eM.Pv)(),
                            { selectedSkuId: h, checkoutInvoicePreview: f } = (0, v.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, eK.gU)(),
                            E = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                            m = tR(),
                            A = async (e, t) => {
                                d(!0),
                                    null != a && o(),
                                    (await (0, e4.JJ)(e.id, t)) || o(Z.intl.string(Z.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== e1.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(q.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
                                A(u, h));
                        });
                        let T = () =>
                            (0, r.jsx)(tO.A, {
                                onTextChange: (e) => s?.(e),
                                pendingText: i,
                                currentText: i,
                                disableThemedBackground: !0,
                                className: tw.iX,
                                innerClassName: tw.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: tw.qL, children: (0, r.jsx)(tb.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, e5.pA)({ invoicePreview: f, selectedSkuId: h, skusById: p });
                                return c === e1.vQ.USER_PROFILE_WISHLIST || c === e1.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tD.Z, { giftRecipient: u }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tm, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tw.uW,
                                                      previewHeaderClassName: tw.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: tw.fi,
                                                  children: (0, r.jsx)(tM, { handleClose: n, selectedSkuId: h }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(tT, {
                                                  selectedSkuId: h,
                                                  recipients: m,
                                                  className: tw.uh,
                                                  validateSelectedGift: A,
                                              }),
                                              T(),
                                              null != e &&
                                                  null != h &&
                                                  (0, r.jsx)(tm, {
                                                      skuId: h,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: tw.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != a || null == u || u.id === E?.id || i.length > e1.Jo,
                            loading: l,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = s.useMemo(() => ({ loading: l, disabled: o }), [l, o]);
                return (0, r.jsx)(el.Mw, {
                    paymentModalStepProps: e,
                    layout: el.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: a,
                    primaryCTAButtonProps: u,
                });
            },
            [u.pn.REVIEW]: eu.p,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, children: n, ...i } = e,
                    {
                        environment: a,
                        confettiCanvas: o,
                        setConfettiCanvas: l,
                        customConfettiVisible: u,
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: _,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = s.useRef(new eP.OH()),
                            [i, r] = s.useState(null),
                            [a, o] = s.useState(!1),
                            l = s.useMemo(() => (0, eU.AB)({ purchaseType: eG.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: i,
                            setConfettiCanvas: r,
                            customConfettiVisible: a,
                            setCustomConfettiVisible: o,
                            customConfettiDisplayOptions: l,
                            hideConfirmStepConfetti: null != l,
                        };
                    })({ skuId: t }),
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = (0, s.useMemo)(
                        () => ({
                            skuIDs: h,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                        }),
                        [h, c, _, o],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eB, {
                            environment: a,
                            setConfettiCanvas: l,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, r.jsx)(y.M, {
                            ...i,
                            skuIDs: h,
                            stepConfigs: i.stepConfigs,
                            activeSubscription: null,
                            purchaseType: tP.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(tx.Provider, { value: f, children: n }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r } = tk(),
                    { isGift: a } = (0, eM.Pv)(),
                    o = (0, ew.J)(),
                    {
                        paymentModalSkuId: l,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                            a = t[0] ?? null,
                            o = s.useCallback(() => {
                                r(!0), i?.();
                            }, [i, r]);
                        return {
                            paymentModalSkuId: a,
                            paymentModalOnClose: s.useCallback(
                                (e) => {
                                    r(!1), n(e), ex.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: o,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                    d = s.useCallback(
                        (e) => {
                            u(e), e && a && o();
                        },
                        [u, a, o],
                    );
                return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: q.FYj });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, eM.Pv)();
            return n ? (0, r.jsx)(tF, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tU, { ...e }), options: eV },
    };
var tB = n(354033),
    tj = n(786300),
    tH = n(491057),
    tY = n(496142),
    tW = n(877624),
    tK = n(554146),
    t$ = n(71804),
    tz = n(426398),
    tq = n(558620),
    tZ = n(841702),
    tX = n(367727),
    tQ = n(380619),
    tJ = n(374200),
    t0 = n(771566),
    t1 = n(625494),
    t2 = n(45938),
    t3 = n(615396),
    t6 = n(364840),
    t4 = n(821609),
    t5 = n(97808),
    t7 = n(912140),
    t8 = n(780898),
    t9 = n(344346),
    ne = n(837015),
    nt = n(258915);
function nn(e) {
    let { rewardSkuId: t, onClose: n, onRewardModalClose: i } = e,
        a = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        o = (0, g.bG)([eH.Ay], () => eH.Ay.useReducedMotion),
        { analyticsLocations: l } = (0, eL.Ay)(),
        u = te._3.SIZE_32,
        { product: c, isFetching: d } = (0, tl.q)(t),
        [_, h] = s.useState(!1),
        f = c?.items[0],
        {
            isNameplateReward: p,
            nameplateData: E,
            rewardAvatarDecorationSrc: m,
        } = s.useMemo(
            () =>
                null == f
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, ne.F)(f)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: f.skuId,
                                src: f.asset,
                                palette: (0, t8.H6)(f.palette ?? "sky"),
                                imgAlt: f.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, tu.T)(f)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, t7.A)({
                                  legacyAssetId: f.asset,
                                  skuId: f.skuId,
                                  size: u,
                                  canAnimate: !o,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [f, u, o],
        );
    return (0, r.jsx)(e0.UX, {
        children: (0, r.jsx)(t6.j, {
            children: (0, r.jsxs)("div", {
                className: nt.W,
                children: [
                    p && null != E
                        ? (0, r.jsx)("div", {
                              className: nt.D,
                              onMouseEnter: () => h(!0),
                              onMouseLeave: () => h(!1),
                              children: (0, r.jsx)(t9.a, {
                                  user: a,
                                  nameplate: null,
                                  nameplateData: E,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: _,
                              }),
                          })
                        : (0, r.jsx)(t5.Js, {
                              "aria-label": a?.username,
                              size: u,
                              src: a?.getAvatarURL(void 0, (0, te.FT)(u), !o),
                              avatarDecoration: m,
                          }),
                    (0, r.jsx)(t4.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t.kMYVwv),
                        loading: d,
                        onClick: () => {
                            null != c &&
                                (n(),
                                (0, eX.A)({
                                    product: c,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: l,
                                    purchaseType: eG.gs.PROMOTIONAL,
                                    onCloseCallback: i,
                                }));
                        },
                    }),
                ],
            }),
        }),
    });
}
var ni = n(216641),
    nr = n(49999);
function ns(e) {
    let t,
        {
            handleClose: i,
            planGroup: a,
            onSubscriptionConfirmation: l,
            renderPurchaseConfirmation: u,
            postSuccessGuild: c,
            followupSKUInfo: d,
            continueSessionToInitialStep: h,
        } = e,
        { paymentSources: f } = (0, tz.jm)(),
        {
            activeSubscription: p,
            selectedSkuId: E,
            updatedSubscription: m,
            paymentSourceId: A,
            isPremiumGroupPurchase: T,
            startingPremiumSubscriptionPlanId: S,
            startingFractionalPremiumEndsAt: y,
        } = (0, v.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            selectedSkuId: e.selectedSkuId,
            updatedSubscription: e.updatedSubscription,
            paymentSourceId: e.paymentSourceId,
            isPremiumGroupPurchase: e.get("isPremiumGroupPurchase"),
            startingPremiumSubscriptionPlanId: e.startingPremiumSubscriptionPlanId,
            startingFractionalPremiumEndsAt: e.startingFractionalPremiumEndsAt,
        })),
        C = (0, tq.A)(),
        N = (0, D.bB)(),
        {
            isGift: R,
            giftRecipient: O,
            giftCode: b,
            hasSentMessage: L,
            isSendingMessage: w,
            sendGiftMessage: M,
            claimableRewards: P,
            selectedGiftingPromotionReward: x,
            openGiftingBadgePostPurchaseModal: k,
        } = (0, eM.Pv)(),
        { confirmationFooter: U } = (0, tH.cG)(),
        G = (0, tQ.px)(C, R, P),
        F = (0, tQ.Mq)(C),
        V = (0, tZ.Mv)(x, !1),
        B = (0, g.bG)([tJ.A], () => tJ.A.getGiftPromotion()?.id),
        j = (0, g.bG)([tJ.A], () => {
            let e = tJ.A.getMarketingComponentByType(tW.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        H = (0, ni.g)(f, A),
        Y = R && null != x && null != V && F,
        W = { selectedPlan: C, selectedSkuId: E, step: N };
    if (null == C) throw new t$.v({ message: "Expected plan to be selected", extraSentryInformation: W });
    if (null == E) throw new t$.v({ message: "Expected selectedSkuId", extraSentryInformation: W });
    if (null == N) throw new t$.v({ message: "Step should be set", extraSentryInformation: W });
    let K = s.useCallback(() => {
        i(), l?.();
    }, [i, l]);
    (0, I.Ay)(() => {
        T &&
            _.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != m,
                has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                subscription_id: m?.id,
            });
    }),
        s.useEffect(() => {
            function e() {
                if (T)
                    if (null != m && m.hasAnyPremiumGroup) {
                        _.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: m.id });
                        let e = (0, tS.uniqueId)("premium-group-purchase-flow-modal");
                        (0, o.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("17494"),
                                    n.e("44616"),
                                    n.e("96680"),
                                    n.e("85579"),
                                ]).then(n.bind(n, 785606));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        subscription: m,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, o.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        _.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != m,
                            has_any_premium_group: m?.hasAnyPremiumGroup ?? !1,
                        }),
                            t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                t1._.subscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    t1._.unsubscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, m]),
        s.useEffect(() => {
            !R || null == O || null == b || L || w || (0, t2.Ik)(O) || M({ onSubscriptionConfirmation: l });
        }, [M, R, O, b, L, w, l]),
        s.useEffect(() => {
            G &&
                null != j &&
                null != B &&
                (0, tX.qr)(tK.M.GIFTING_PROMOTION_REMINDER, B, { dismissAction: nr.i.INDIRECT_ACTION });
        }, [j, B, G]);
    let $ = null != h ? t0.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != u) t = u(C, K, m);
    else if (R) t = (0, r.jsx)(t0.fw, { planId: C.id, onClose: K });
    else {
        let e =
            S === C.id
                ? { postSuccessGuild: c }
                : {
                      followupSKUInfo: d,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != p && (0, t3.vT)(p, C.id, a),
                  };
        t = (0, r.jsx)(t0.Ay, {
            planId: C.id,
            onClose: K,
            paymentSourceType: H,
            hideClose: null != U,
            startingFractionalPremiumEndsAt: y,
            customCTAType: $,
            ...e,
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(e0.dZ, { children: [(0, r.jsx)(eJ.A, {}), t] }),
            null != U && U,
            Y && null != x && (0, r.jsx)(nn, { rewardSkuId: x, onClose: K, onRewardModalClose: k }),
        ],
    });
}
let [na, no] = (0, tj.A)(),
    nl = {
        CHECKOUT_FLOW: el.CL.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: tY.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    a = s.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(na.Provider, { value: a, children: (0, r.jsx)(tH.Qt, { children: i }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: i, listing: s } = no();
            return (0, r.jsx)(tB.Y, { onClose: t, listing: s, step: n, guildId: i });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ns, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var nu = n(73825),
    nc = n(960851),
    nd = n(607399),
    n_ = n(795791),
    nh = n(344159),
    nf = n(561794),
    np = n(97352),
    nE = n(811656),
    nm = n(331322),
    ng = n(187322),
    nA = n(890856),
    nI = n(947641),
    nT = n(661531),
    nS = n(713517),
    ny = n(929283),
    nC = n(761365),
    nN = n(267861);
let nv = (e) => {
    let t,
        n,
        { skuId: i, user: a, claimed: o, onSelect: l, selectedSkuId: u } = e,
        [c, d] = s.useState(null),
        _ = s.useCallback((e) => {
            d(e);
        }, []),
        h = s.useMemo(() => ({ current: c }), [c]),
        { isHoveringOrFocusing: f } = (0, nS.A)(h),
        p = !o && f,
        { product: E } = (0, tl.q)(i);
    if (null == E) return null;
    let m = E.items[0];
    return null == m
        ? null
        : ((0, tu.T)(m)
              ? ((n = e7.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(ny.i, { item: m, user: a, isHighlighted: p, avatarSize: te._3.SIZE_96 })))
              : (0, ne.F)(m) &&
                ((n = e7.R.NAMEPLATE),
                (t = (0, r.jsx)(nC.A, { nameplate: m, user: a, isHighlighted: p, size: "small" }))),
          (0, r.jsx)(ng.vN, {
              children: (0, r.jsxs)(nA.s, {
                  ref: _,
                  "aria-label": E.name ?? "",
                  onClick: () => {
                      null == i || null == l || o || l(i);
                  },
                  className: eA()(nN._x, { [nN.Vp]: !o, [nN.mr]: p, [nN.md]: u === i }),
                  children: [
                      (0, r.jsx)("div", {
                          className: eA()(nN.VH, {
                              [nN._Q]: n === e7.R.AVATAR_DECORATION,
                              [nN.M4]: n === e7.R.NAMEPLATE,
                          }),
                          children:
                              null != t
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", { className: eA()(nN.i1, { [nN.Sf]: o }), children: t }),
                                            o &&
                                                (0, r.jsx)(nI.r, {
                                                    size: "custom",
                                                    width: 48,
                                                    height: 48,
                                                    color: nT.A.colors.INTERACTIVE_TEXT_ACTIVE,
                                                    className: nN.j0,
                                                }),
                                        ],
                                    })
                                  : null,
                      }),
                      (0, r.jsxs)("div", {
                          className: nN.tZ,
                          children: [
                              (0, r.jsx)(tn.D, { variant: "heading-md/extrabold", children: E.name }),
                              (0, r.jsx)(tt.E, {
                                  variant: "text-sm/normal",
                                  children: o ? Z.intl.string(Z.t["6cfuDj"]) : Z.intl.string(Z.t.QQsaCc),
                              }),
                          ],
                      }),
                  ],
              }),
          }));
};
var nR = n(696208),
    nO = n(683433);
function nb(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: l,
            shouldRenderUpdatedPaymentModal: u = !1,
            isTrial: c,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: _ } = (0, tz.jm)(),
        h = (0, tq.A)(),
        { isGift: f, claimableRewards: p } = (0, eM.Pv)();
    i = i ?? _;
    let {
            variant: E,
            text: m,
            onClick: g,
            disabled: A,
        } = nD({
            onStepChange: t,
            selectedPlanId: (n = n ?? h?.id),
            isGift: f,
            claimableRewards: p,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: u,
            isTrial: c,
            isNextDisabled: d,
        }),
        I = s.useMemo(
            () =>
                null != n && l.includes(n)
                    ? [{ variant: E, text: m, onClick: g, disabled: A }]
                    : [{ variant: "primary", text: Z.intl.string(Z.t.XqMe3N), disabled: !0 }],
            [E, m, g, A, n, l],
        );
    return (0, r.jsx)(nR.H, { leading: o && null != a ? (0, r.jsx)(nO.A, { onClick: a }) : void 0, actions: I });
}
let nD = (e) => {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: r,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: a,
            isTrial: o,
            isNextDisabled: l = !1,
        } = e,
        c = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        d = (0, tq.A)(),
        _ = (0, D.bB)(),
        { hasEntitlements: h } = (0, nh.X)(n, i),
        f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
    var p = a ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.XqMe3N),
        E = u.pn.ADD_PAYMENT_STEPS;
    return (
        f && (E = u.pn.REVIEW),
        (0, tQ.px)(d, i, r) && _ !== u.pn.SELECT_FREE_SKU && (E = u.pn.SELECT_FREE_SKU),
        { variant: "primary", text: p, onClick: () => t(E), disabled: l }
    );
};
var nL = n(328232);
function nw(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        i = (0, tq.A)(),
        a = (0, D.bB)(),
        { setSelectedGiftingPromotionReward: o, selectedGiftingPromotionReward: l, claimableRewards: c } = (0, eM.Pv)(),
        d = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        _ = (0, g.yK)([tJ.A], () => tJ.A.getGiftPromotionRewardSkuIds()),
        h = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(c, l),
        [f, p] = s.useState(h),
        [E, m] = s.useState(!1);
    s.useEffect(() => {
        E || null != l || null == h || (o(h), p(h));
    }, [h, E, l, o]);
    let A = { selectedPlan: i, selectedSkuId: n, step: a };
    if (null == i) throw new t$.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new t$.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == a) throw new t$.v({ message: "Step should be set", extraSentryInformation: A });
    let I = s.useMemo(() => null != f && (c ?? []).includes(f), [f, c]),
        T = s.useMemo(() => 0 === _.length || null == f || !I, [_, f, I]);
    s.useEffect(() => {
        if (0 === _.length) {
            p(void 0), o(void 0);
            return;
        }
        (null != f && I && _.includes(f)) || null == f || (p(void 0), o(void 0));
    }, [_, I, f, o]);
    let S = (e) => {
            o(e), p(e), m(!0);
        },
        y = _.map((e) =>
            (0, r.jsx)(
                nv,
                { skuId: e, claimed: null != c && !c.includes(e), user: d, onSelect: S, selectedSkuId: f },
                e,
            ),
        ),
        C = (0, r.jsx)(e0.UX, {
            children: (0, r.jsx)(nb, {
                onStepChange: t,
                onBackClick: () => t(u.pn.PLAN_SELECT),
                shouldRenderUpdatedPaymentModal: !0,
                showBackButton: !0,
                planOptions: [i.id],
                selectedPlanId: i.id,
                isNextDisabled: T,
            }),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eD.rQ, {
                titleTextVariant: "heading-lg/semibold",
                title: Z.intl.string(Z.t.OEtqpm),
                subtitle: Z.intl.string(Z.t.h2nMp0),
            }),
            (0, r.jsx)(V.c, {
                children: (0, r.jsx)(nm.B, {
                    direction: "vertical",
                    justify: "center",
                    align: "center",
                    children: (0, r.jsx)("div", { className: nL.Dq, children: y }),
                }),
            }),
            C,
        ],
    });
}
var nM = n(800471),
    nP = n(683071),
    nx = n(38405);
let nk = (e, t, n, i, r) => {
    let a = (0, s.useRef)(!1),
        o = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        l = (0, s.useRef)(o);
    (0, s.useEffect)(() => {
        l.current = o;
    }),
        (0, s.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: r } = l.current;
            if (t && !a.current) {
                a.current = !0;
                let t = setTimeout(() => {
                    let t = Error(`${e} is taking too long to load.`);
                    nx.A.setExtra({ loadingState: r, loadingTimeSeconds: n }),
                        nx.A.captureException(t, { ...i, tags: { ...i?.tags } });
                }, 1e3 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
var nU = n(38785),
    nG = n(463376),
    nF = n(699595),
    nV = n(543767),
    nB = n(442123),
    nj = n(67948),
    nH = n(807098),
    nY = n(298305),
    nW = n(387745);
function nK() {
    let e = (0, g.bG)([tJ.A], () => {
            let e = tJ.A.getMarketingComponentByType(tW.C.GIFT_CUSTOMIZATION_BANNER);
            return null == e || "giftCustomizationBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftCustomizationBanner;
        }),
        { claimableRewards: t } = (0, eM.Pv)(),
        n = (0, nH.T)(e?.asset),
        i = (0, nH.T)(e?.backgroundAsset),
        s = e?.gradient,
        a =
            null != s && null != s.colors && s.colors.length >= 2
                ? (0, tQ.K5)({ gradient: s.colors, angle: s.angle ?? void 0 })
                : void 0,
        o = (0, tQ.gc)(i);
    null != o && ((o.backgroundSize = "cover, auto"), (o.backgroundPosition = "right center, 0% 0%"));
    let l = (0, tQ.x)(o, a),
        u = e?.assetVariant === nj.u.LARGE_TILTED;
    return null == e || null == t
        ? null
        : (0, r.jsxs)("div", {
              className: nW.qD,
              style: l,
              children: [
                  (0, r.jsx)("div", {
                      className: eA()([nW.my], { [nW.R_]: u }),
                      children: (0, r.jsx)(nY.A, {
                          claimableRewards: t,
                          maxRewardImageSrc: n ?? "",
                          size: u ? te._3.SIZE_72 : te._3.SIZE_40,
                          imageScaling: 1.25,
                      }),
                  }),
                  (0, r.jsx)(tt.E, {
                      variant: "text-md/medium",
                      color: "always-white",
                      children: Z.intl.string(Z.t.Abiuci),
                  }),
              ],
          });
}
var n$ = n(410516),
    nz = n(361597),
    nq = n(975571),
    nZ = n(69494),
    nX = n(622631),
    nQ = n(597770),
    nJ = n(102741),
    n0 = n(296589);
function n1(e) {
    let { giftMessage: t = Z.intl.string(Z.t["DrgnS+"]) } = e,
        { isGift: n, giftRecipient: i } = (0, eM.Pv)();
    return !n || (0, t2.Ik)(i)
        ? null
        : (0, r.jsx)(nJ.A, {
              className: n0.z,
              iconSize: nJ.A.Sizes.SMALL,
              icon: nQ.o,
              color: null == t ? nJ.A.Colors.PRIMARY : nJ.A.Colors.SECONDARY,
              children: t,
          });
}
var n2 = n(71867),
    n3 = n(249872);
function n6(e) {
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: a, trialId: o, handleClose: l } = e,
        {
            selectedSkuId: c,
            priceOptions: d,
            activeSubscription: _,
            defaultPlanId: h,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: f, isEligibleForTrial: p, isEligibleForDiscount: E, discountOffer: m } = (0, nG.i)(),
        g = (0, n$.YJ)(m),
        I = (0, tq.A)(),
        T = (0, D.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: C, claimableRewards: N } = (0, eM.Pv)(),
        R = (0, tQ.Mq)(I),
        O = (0, ej.bG)([tJ.A], () => {
            let e = tJ.A.getMarketingComponentByType(tW.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        b = S && R && null != N && N.length > 0 && O,
        L = (p || E) ?? !1,
        { monthlyDefaultSelected: w } = nB.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        M = (0, A.A)(w),
        P = s.useMemo(() => {
            let e = h;
            return S && M && null != c && (e = e1.En[c]), (0, to.Tm)({ skuId: c, isPremium: f, defaultPlanId: e });
        }, [c, f, h, S, M]),
        x = E && null != g && P.includes(g) ? g : P[0],
        k = (0, ej.bG)([np.A], () => np.A.get(x)),
        U = [{ planId: k?.id, quantity: 1 }],
        [G, F] = s.useState(L),
        [V, B] = (0, nV.YV)({
            items: U,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: o,
            paymentSourceId: d.paymentSourceId,
            currency: d.currency,
        });
    s.useEffect(() => {
        L && F(V?.subscriptionPeriodEnd == null);
    }, [V, L]),
        nk(
            "Payment Modal Plan Select Step",
            G,
            5,
            { proratedInvoicePreview: V, proratedInvoiceError: B, isEligibleForOffer: L },
            { tags: { app_context: "billing" } },
        );
    let j = B?.message ?? Z.intl.string(Z.t.R0RpRX),
        H = L && null == B,
        Y = L && null != B,
        W = H && null == _ && V?.subscriptionPeriodEnd == null;
    (0, nF.W)({ priceOptions: d, trialId: o, discountInvoicePreview: V });
    let K = s.useMemo(
        () => ({
            planOptions: P,
            selectedPlanId: I?.id,
            planGroup: i,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: b,
            handleClose: l,
        }),
        [P, I?.id, i, V?.subscriptionPeriodEnd, b, l],
    );
    if (W) return (0, r.jsx)(nU.E, { className: n3.QW });
    ed()(null != T, "Step should be set"), ed()(P.length > 0, "Premium plan options should be set");
    let $ = S
        ? (0, r.jsx)(nz.$p, { ...K })
        : (0, r.jsx)(nX.X, { ...K, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n1, { giftMessage: C }),
            !(S && (0, t2.Ik)(y)) && (0, r.jsx)(nZ.A, { isEligibleForTrial: p }),
            (0, r.jsxs)(e0.dZ, {
                children: [
                    (0, r.jsx)(n2.P, { className: n3.ZB, planSkuId: k?.skuId }),
                    (0, r.jsx)(eJ.A, {}),
                    Y ? (0, r.jsx)(nP.w, { type: "critical", children: j }) : $,
                    H &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("hr", { className: eA()(n3.IM, n3.Go) }),
                                (0, r.jsx)(tt.E, {
                                    variant: "text-xs/normal",
                                    children: Z.intl.format(Z.t.BHtnqA, {
                                        link: nq.A.getArticleURL(q.MVz.PREMIUM_DETAILS_CANCEL_SUB),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(e0.UX, {
                children: [
                    b && (0, r.jsx)(nK, {}),
                    (0, r.jsx)(nb, {
                        onStepChange: t,
                        onBackClick: () => t(u.pn.SKU_SELECT),
                        showBackButton: null == n && null == a,
                        planOptions: P,
                        shouldRenderUpdatedPaymentModal: H,
                        isTrial: p,
                    }),
                ],
            }),
        ],
    });
}
var n4 = n(234419),
    n5 = n(862990),
    n7 = n(672525);
function n8(e) {
    let { isGift: t, skuId: n } = e,
        i = (0, v.t4)((e) => e.referralTrialOfferId ?? void 0),
        r = (0, n4.V)(i);
    return !t && null != r && null != n && e1.TP[r.trial_id].skus.includes(n);
}
var n9 = n(634378);
function ie(e) {
    let { handleStepChange: t } = e,
        {
            setSelectedSkuId: n,
            setSelectedPlanId: i,
            priceOptions: s,
            activeSubscription: a,
            defaultPlanId: o,
            startedPaymentFlowWithPaymentSources: l,
            referralTrialOfferId: c,
        } = (0, v.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            referralTrialOfferId: e.referralTrialOfferId ?? void 0,
        })),
        { hasPaymentSources: d } = (0, tz.jm)(),
        { isGift: _, claimableRewards: h } = (0, eM.Pv)(),
        f = _ && null != h && h.length > 0,
        p = (0, n4.V)(c);
    return (0, r.jsx)(it, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: i,
                    handleStepChange: r,
                    isGift: s,
                    userTrialOffer: a,
                    setSelectedPlanId: o,
                    startedPaymentFlowWithPaymentSources: l,
                    defaultPlanId: c,
                } = e;
                i(n);
                let d = u.pn.PLAN_SELECT,
                    _ = (0, to.aZ)(t);
                (_ !== e1.pe.TIER_1 && _ !== e1.pe.TIER_2) || n !== e1.pe.TIER_0 || s || (d = u.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && e1.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, nM.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: l,
                    });
                d !== u.pn.WHAT_YOU_LOSE && f && ((d = u.pn.REVIEW), o((0, nM.xT)(n, t, c))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: p,
                startedPaymentFlowWithPaymentSources: l,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, to.mH)(e1.pe.TIER_2)),
                    t(e1.gD.PREMIUM_GROUP_MONTH),
                    n(i ? u.pn.REVIEW : u.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: e1.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: d, setSelectedSkuId: n }),
        isGift: _,
        priceOptions: s,
        showPromotionalGiftBanner: f,
    });
}
function it(e) {
    let { selectSku: t, isGift: n, priceOptions: i, showPromotionalGiftBanner: s, onSelectPremiumGroup: a } = e,
        o = (0, n5.FY)({ isGift: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eD.rQ, { titleTextVariant: "heading-lg/semibold", title: Z.intl.string(Z.t["r+SebU"]) }),
            o
                ? (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: n9.eE,
                          children: (0, r.jsx)(n7.yS, {
                              onSelectSku: (e) => t((0, to.mH)(e)),
                              onSelectPremiumGroup: a,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, r.jsx)(V.c, {
                      children: (0, r.jsx)("div", {
                          className: n9.a2,
                          children: (0, r.jsx)(n7.Ay, {
                              onSelectSku: (e) => t((0, to.mH)(e)),
                              isGift: n,
                              priceOptions: i,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
var ii = n(825484),
    ir = n(137728);
function is(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            selectedSkuId: i,
            setSelectedPlanId: s,
            activeSubscription: a,
            startedPaymentFlowWithPaymentSources: o,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { isGift: l } = (0, eM.Pv)(),
        c = null != a ? (0, to.EL)(a) : null,
        d = null != c ? (0, to.RH)(c.planId) : null,
        _ = null != c ? (0, to.m6)(c.planId) : null,
        h = (0, nM.vT)({ isTrial: !1, isGift: l, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
    return (
        ed()(null != _, "Expected premium type"),
        (0, r.jsx)(ir.A, {
            premiumType: _,
            titleText: Z.intl.string(Z.t["7VcWW0"]),
            subtitleText: Z.intl.format(Z.t.Qk34Ik, { subscriptionName: d }),
            footer: (0, r.jsxs)(ii.e, {
                direction: "horizontal-reverse",
                align: "center",
                children: [
                    (0, r.jsx)(t4.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t["3PatSz"]),
                        onClick: () => {
                            h ? (s((0, nM.xT)(i, a)), t(u.pn.REVIEW)) : t(u.pn.PLAN_SELECT);
                        },
                    }),
                    (0, r.jsx)(t4.$, { variant: "secondary", onClick: n, text: Z.intl.string(Z.t.rzVN6j) }),
                ],
            }),
            onClose: n,
            isDowngrade: !0,
        })
    );
}
let ia = [
        {
            key: u.pn.SKU_SELECT,
            renderStep: (e) => (0, r.jsx)(ie, { ...e }),
            options: {
                renderHeader: !1,
                hideSlider: !0,
                modalSizeGetter: (e) => {
                    let { canCurrentlyPurchasePremiumGroup: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(is, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: u.pn.PLAN_SELECT,
            renderStep: (e) => (0, r.jsx)(n6, { ...e }),
            options: {
                renderHeader: !0,
                useBreadcrumbLabel: (e) => ((0, nM.lp)(e) ? null : Z.intl.string(Z.t["r+SebU"])),
                sectionHeaderText: () => Z.intl.string(Z.t.UKbp1N),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
        {
            key: u.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(nw, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    io = {
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: ia,
        CHECKOUT_STEPS: { [u.pn.REVIEW]: tY.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: i,
                            referralTrialOfferId: a,
                            subscriptionTier: o,
                            subscription: l,
                        },
                        stepConfigs: c,
                        loadId: d,
                        giftContextProps: _ = { isGift: !1, giftRecipient: null },
                        renderModalProps: h,
                        children: f,
                    } = e,
                    p = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    E = (0, nc.cg)() ? e1.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: m, giftRecipient: A } = _;
                if (null != o && !Object.values(e1.pe).includes(o))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, nf.tA)({ giftRecipient: A, isGift: m ?? !1 }),
                    T = s.useMemo(
                        () =>
                            I
                                ? c.map((e) =>
                                      e.key === u.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : c,
                        [c, I],
                    ),
                    C = null != l ? l : p,
                    N = !m && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, nh.s)(C, () => h.onClose(), m ?? !1);
                let v = s.useMemo(() => [...e1.oz], []);
                return N
                    ? null
                    : (0, r.jsx)(y.M, {
                          loadId: d,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: m,
                          defaultPlanId: E ?? n,
                          referralCode: i,
                          referralTrialOfferId: a,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(tH.Qt, { confirmationFooter: t, children: f }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: a, renderPurchaseConfirmation: o, continueSessionToInitialStep: l } = t;
                s.useEffect(() => {
                    np.A.isLoadedForPremiumSKUs() || ex.h.wait(() => (0, nu.zS)());
                }, []);
                let { selectedSkuId: c, purchaseState: d } = (0, v.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    _ = (0, D.bB)(),
                    {
                        isGift: h,
                        selectedGiftingPromotionReward: f,
                        openGiftingBadgePostPurchaseModal: p,
                    } = (0, eM.Pv)(),
                    E = s.useCallback(
                        (e, t) => {
                            a(e, t), e && h && null == f && p();
                        },
                        [a, h, f, p],
                    ),
                    m = !h && c === e1.pe.TIER_2 && !nd.Ct && !nd.KY && null == (0, n_.uM)(),
                    g = d === b.h.PURCHASING;
                return (0, r.jsx)(nE.A, {
                    isConfirmationStep: _ === u.pn.CONFIRM && null == l && null == o,
                    isEligibleForWowMoment: m,
                    shouldPrefetchWowMoment: g,
                    children: n({
                        ...t,
                        onClose: E,
                        analyticsSubscriptionType: q.rzx.PREMIUM,
                        shakeWhilePurchasing: !0,
                        planGroup: e1.LE,
                        subscriptionTier: i,
                    }),
                });
            },
            tenantAnalyticsLocation: T.A.PREMIUM_PAYMENT_MODAL,
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, r.jsx)(ns, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var il = n(143582),
    iu = n(897904),
    ic = n(967198);
let [id, i_] = (0, tj.A)();
function ih(e) {
    let { guildId: t, showBenefitsFirst: n, children: i } = e,
        [a, o] = s.useState(null),
        l = s.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: a,
                setSubscriptionMetadataRequest: o,
            }),
            [t, n, a],
        );
    return (0, r.jsx)(id.Provider, { value: l, children: i });
}
n(938796);
var ip = n(241524),
    iE = n(266060),
    im = n(163437),
    ig = n(701273),
    iA = n(425013);
let iI = (e) => {
    let { onConfirm: t, onCancel: n, title: i, subtitle: s, confirmCta: a, showOpenDiscord: o = !0 } = e;
    return (0, r.jsxs)("div", {
        className: iA.RP,
        children: [
            (0, r.jsx)(tn.D, { className: iA.RS, variant: "heading-lg/extrabold", children: i }),
            null != s
                ? (0, r.jsx)(tt.E, { className: iA.sT, variant: "text-sm/normal", color: "text-default", children: s })
                : null,
            (0, r.jsxs)("div", {
                className: iA.UD,
                children: [
                    o &&
                        (0, r.jsx)(t4.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, ig.A)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(t4.$, { variant: "secondary", text: a, fullWidth: !0, onClick: t }),
                    null != n &&
                        (0, r.jsx)(t4.$, {
                            variant: "secondary",
                            text: Z.intl.string(Z.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function iT(e) {
    let { onConfirm: t, tierName: n, subscription: i } = e;
    return (0, r.jsxs)("div", {
        className: iA.RP,
        children: [
            (0, r.jsx)(tn.D, {
                className: iA.RS,
                variant: "heading-lg/extrabold",
                children: Z.intl.format(Z.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(tt.E, {
                className: iA.sT,
                variant: "text-sm/normal",
                color: "text-default",
                children: Z.intl.format(Z.t.OsAK9h, { timestamp: i?.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: iA.UD,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: iA.__invalid_openDiscordButton,
                        children: (0, r.jsx)(t4.$, {
                            variant: "primary",
                            text: Z.intl.string(Z.t["8L5bZG"]),
                            onClick: () => (0, ig.A)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(t4.$, { variant: "secondary", text: Z.intl.string(Z.t.nlkywz), onClick: t }),
                ],
            }),
        ],
    });
}
var iS = n(19311),
    iy = n(376747);
function iC(e) {
    let { handleStepChange: t, handleClose: n } = e,
        i = (0, iE.K)(),
        { subscriptionMetadataRequest: a } = i_(),
        { application: o } = (0, eY.V)(),
        l = (0, eK.S3)(),
        c = (0, ip.A)(iy.Y),
        d = (0, g.bG)([w.A], () => w.A.getGuild(a?.guild_id)),
        _ = s.useCallback(() => t(u.pn.REVIEW), [t]);
    if (null == l) return null;
    let h = (0, im.bg)(l.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e0.dZ, {
                children: c
                    ? (0, r.jsx)(iI, {
                          confirmCta: Z.intl.string(Z.t.PBHFSq),
                          onConfirm: _,
                          onCancel: n,
                          title: Z.intl.format(Z.t["6n6oXA"], { tier: l.name }),
                          subtitle: h
                              ? Z.intl.string(Z.t.lzAoKB)
                              : Z.intl.formatToPlainString(Z.t["GqaY/j"], { guildName: d?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(iu.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: o ?? void 0,
                          title: Z.intl.format(Z.t.haiCxc, { tier: l.name }),
                          subtitle: h ? Z.intl.string(Z.t.RvtbP5) : Z.intl.string(Z.t.zY39Zu),
                          description: h
                              ? Z.intl.formatToPlainString(Z.t.QCe4rY, { applicationName: o?.name })
                              : Z.intl.string(Z.t.n1Pu8C),
                      }),
            }),
            !c &&
                (0, r.jsx)(e0.UX, {
                    children: (0, r.jsx)(iS.Ay, {
                        onBack: n,
                        backText: Z.intl.string(Z.t.TQBY1J),
                        onPrimary: _,
                        primaryCTA: iS.ti.CONTINUE,
                        primaryText: Z.intl.string(Z.t["gZhF+3"]),
                    }),
                }),
        ],
    });
}
var iN = n(21161);
function iv(e) {
    let t,
        n,
        { handleClose: i, onSubscriptionConfirmation: a } = e,
        o = (0, iE.K)(),
        { application: l } = (0, eY.V)(),
        { readySlideId: c, updatedSubscription: d } = (0, v.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        _ = (0, eK.S3)(),
        h = (0, ip.A)(iy.Y),
        { createMultipleConfettiAt: f } = s.useContext(iN.x),
        p = _?.name ?? "",
        E = () => {
            i(), a?.();
        },
        m = c === u.pn.CONFIRM,
        g = (0, im.bg)(_?.flags ?? 0),
        A =
            null != o && o.benefits.length > 0
                ? Z.intl.formatToPlainString(Z.t["+IQQVM"], { benefitCount: o.benefits.length })
                : null,
        { showBenefitsFirst: I } = i_();
    return (
        I
            ? (t = h
                  ? (0, r.jsx)(iT, { tierName: p, onConfirm: E, subscription: d })
                  : (0, r.jsx)(iu.XG, { tierName: p, onConfirm: E, subscription: d }))
            : h
              ? (t = (0, r.jsx)(iI, {
                    title: Z.intl.format(Z.t.ea6tZr, { tierName: p }),
                    subtitle:
                        null != o && o.benefits.length > 0
                            ? Z.intl.formatToPlainString(Z.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: E,
                    confirmCta: Z.intl.string(Z.t.nlkywz),
                }))
              : ((t =
                    null != o && null != l
                        ? (0, r.jsx)(iu.Uf, {
                              icon: o.thumbnail,
                              storeListingBenefits: o.benefits,
                              application: l,
                              title: Z.intl.format(Z.t["Q+qktS"], { tier: p }),
                              subtitle: Z.intl.string(Z.t.ECKxXU),
                              description: g
                                  ? Z.intl.format(Z.t["MAtQk/"], { applicationName: l?.name })
                                  : Z.intl.format(Z.t.vHkMF4, { tier: p }),
                          })
                        : (0, r.jsx)(Y.A, {})),
                (n = (0, r.jsx)(iS.Ay, {
                    onPrimary: E,
                    primaryCTA: iS.ti.CONTINUE,
                    primaryText: Z.intl.string(Z.t["JtWl+a"]),
                }))),
        s.useEffect(() => {
            eH.Ay.useReducedMotion && m && f(window.innerWidth / 2, window.innerHeight / 2);
        }, [f, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(e0.dZ, { children: [(0, r.jsx)(eJ.A, {}), t] }),
                null != n && (0, r.jsx)(e0.UX, { children: n }),
            ],
        })
    );
}
var iR = n(304072),
    iO = n(427858),
    ib = n(166926),
    iD = n(953761);
let iL = {
    CHECKOUT_FLOW: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    CustomCheckoutPredicateStep: function (e) {
        let { initialPlanId: t, setAnalyticsData: n } = e,
            {
                selectedSkuId: i,
                setSelectedSkuId: a,
                setSelectedPlanId: o,
                priceOptions: l,
            } = (0, v.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: c,
                subscriptionPriceOptionsLoading: d,
                displayCurrency: _,
            } = (0, H.Jn)(),
            { setSubscriptionMetadataRequest: h, guildId: f, showBenefitsFirst: p } = i_(),
            E = (0, B.Hp)(),
            m = K(),
            g = (0, D.l)(),
            { isGift: A } = (0, eM.Pv)(),
            I = p ? u.pn.BENEFITS : u.pn.REVIEW,
            [T, S] = s.useState(!m || !c || d);
        return (s.useEffect(() => {
            S(!m || !c || d);
        }, [d, c, m]),
        s.useEffect(() => {
            null != f && h({ guild_id: f });
        }, [f, h]),
        s.useEffect(() => {
            o(t);
            let e = null != t ? np.A.get(t) : null;
            T ||
                E ||
                (n((t) => {
                    let n = null != e ? (0, to.y8)(e.id, !1, A, { paymentSourceId: l.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: _,
                    };
                }),
                null != e && (a(e?.skuId), g(I)));
        }, [E, t, A, T, l, _, i, n, o, a, g, I]),
        T)
            ? (0, r.jsx)(Y.A, {})
            : E
              ? (0, r.jsx)(j.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = s.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(iu.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: u.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(iC, { ...e }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [u.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: a, analyticsLocation: o } = e,
                {
                    purchaseState: l,
                    contextMetadata: c,
                    purchaseError: d,
                    setCurrency: _,
                    activeSubscription: h,
                } = (0, v.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: f } = (0, tz.jm)(),
                { dropdownCurrencies: p } = (0, H.Jn)(),
                { subscriptionMetadataRequest: E, showBenefitsFirst: m } = i_(),
                g = m ? u.pn.BENEFITS : void 0,
                A = (0, tq.A)(),
                I = (0, eK.S3)();
            if (null == A)
                throw new t$.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = s.useRef(null),
                [S, y] = (0, iR.A)(!1, 500),
                C = (0, e_.mx)(),
                N = (0, im.bg)(I?.flags ?? 0);
            s.useEffect(() => {
                null != d && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
            }, [d]);
            let R = s.useRef(null),
                O = s.useCallback(() => {
                    t(u.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return l === b.h.PURCHASING
                ? (0, r.jsx)(Y.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(e0.dZ, {
                              children:
                                  null == h
                                      ? (0, r.jsx)(iD._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: O,
                                            metadata: N ? void 0 : E,
                                        })
                                      : (0, r.jsx)(iO.A, {
                                            premiumSubscription: h,
                                            paymentSources: f,
                                            handlePaymentSourceAdd: O,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: p,
                                            onCurrencyChange: (e) => _(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: l,
                                        }),
                          }),
                          (0, r.jsx)(e0.UX, {
                              children: (0, r.jsx)(ib.U, {
                                  premiumSubscription: h ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: u.pn.CONFIRM,
                                  legalTermsNodeRef: R,
                                  flashLegalTerms: () => y(!0),
                                  analyticsLocation: o,
                                  baseAnalyticsData: a,
                                  flowStartTime: c.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: N ? void 0 : E,
                                  backButtonEligible: !!m || void 0,
                                  invoiceError: C,
                                  disablePurchase: E?.guild_id == null && !N,
                                  onPaymentSourceAdd: O,
                              }),
                          }),
                      ],
                  });
        },
    },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let {
                    loadId: t,
                    applicationId: n,
                    activeSubscription: i,
                    stepConfigs: s,
                    skuId: a,
                    tenantParams: o,
                    children: l,
                } = e,
                { guildId: u, showBenefitsFirst: c } = o;
            return (0, r.jsx)(y.M, {
                loadId: t,
                applicationId: n,
                activeSubscription: i,
                stepConfigs: s,
                skuIDs: [a],
                unifiedCheckoutFlow: S.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
                children: (0, r.jsx)(ih, {
                    guildId: u,
                    showBenefitsFirst: c,
                    children: (0, r.jsx)(tH.Qt, { children: l }),
                }),
            });
        },
        TenantPaymentModalRenderer: (e) => {
            let {
                    originalPaymentModalProps: t,
                    renderPaymentModal: n,
                    tenantParams: { forcesTransitionToGuild: i, guildId: r },
                } = e,
                a = t.onClose,
                o = t.onComplete,
                l = s.useCallback(
                    (e) => {
                        a(e),
                            e &&
                                null != r &&
                                (W.hP(),
                                (0, il.f5)(r),
                                null != o && o(),
                                null != r && (i || ic.A.getGuildId() !== r) && (0, tL.pX)(q.BVt.CHANNEL(r)));
                    },
                    [a, o, i, r],
                );
            return n({ ...t, onClose: l, forceNewPaymentModal: !0 });
        },
        tenantAnalyticsLocation: T.A.APPLICATION_SUBSCRIPTION_CHECKOUT,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(iv, { ...e }) },
};
var iw = n(989553);
function iM(e) {
    let { handleClose: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { application: i } = (0, eY.V)(),
        s = (0, eK.gU)(),
        { isGift: a, giftRecipient: o } = (0, eM.Pv)();
    ed()(null != n, "Expected selectedSkuId"), ed()(null != i, "Expected application");
    let l = s[n];
    ed()(null != l, "Expected sku");
    let u = a
        ? Z.intl.formatToPlainString(Z.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : Z.intl.formatToPlainString(Z.t.wK0IbP, { applicationName: i.name, itemName: l.name });
    return (0, r.jsxs)(e0.dZ, {
        children: [
            (0, r.jsx)(eJ.A, {}),
            (0, r.jsxs)("div", {
                className: iw.EL,
                children: [
                    (0, r.jsx)(tn.D, { variant: "heading-xxl/bold", className: iw.RS, children: "Success!" }),
                    (0, r.jsx)(tt.E, { variant: "text-md/normal", children: u }),
                    (0, r.jsx)("div", { className: iw.yF }),
                    (0, r.jsx)(t4.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var iP = n(67480),
    ix = n(328968),
    ik = n(371794),
    iU = n(565756);
u.pn.GIFT_CUSTOMIZATION;
let iG = {
    CHECKOUT_FLOW: el.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, eM.Pv)(),
                a = (0, v.t4)((e) => e.selectedSkuId),
                o = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                l = (0, g.bG)([iP.A], () => (null != a ? iP.A.get(a) : null), [a]),
                u = tR(),
                c = (0, g.bG)([ix.A], () => (null != a ? ix.A.getForSKU(a) : null), [a]),
                d =
                    c?.headerBackground != null && l?.applicationId != null
                        ? (0, ik.YE)(l.applicationId, c.headerBackground, 256)
                        : void 0,
                _ = async (e, t) => {},
                h = null == i || i.id === o?.id || t.length > e1.Jo,
                f = s.useMemo(() => ({ disabled: h }), [h]);
            return (0, r.jsx)(el.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: el.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iU.P6,
                        children: [
                            l?.name != null &&
                                (0, r.jsx)(tn.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: l.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: l?.name ?? "", className: iU.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iU.P6,
                        children: [
                            (0, r.jsx)(tT, { recipients: u, selectedSkuId: a, validateSelectedGift: _ }),
                            (0, r.jsx)(tO.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: iU.iX,
                                innerClassName: iU.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: f,
            });
        },
        [u.pn.REVIEW]: eu.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(iM, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var iF = n(429913),
    iV = n(733391),
    iB = n(318254),
    ij = n(510022),
    iH = n(317560),
    iY = n(366523),
    iW = n(910200),
    iK = n(208733);
function i$(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, eL.Ay)(),
        { selectedSkuId: i, entitlementsGranted: a } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: o } = (0, eY.V)(),
        l = (0, eK.gU)(),
        { isGift: u, giftRecipient: c } = (0, eM.Pv)();
    ed()(null != i, "Expected selectedSkuId"), ed()(null != o, "Expected application");
    let d = l[i];
    ed()(null != d, "Expected sku");
    let _ = a.find((e) => e.sku_id === i),
        h = _?.metadata?.orbs_reward;
    if (
        (s.useEffect(() => {
            u || ((0, iH.j)(), t(), (0, ij.n)({ sku: d, application: o, analyticsLocations: n, orbsReward: h }));
        }, [u, d, o, t, n, h]),
        !u)
    )
        return null;
    let f = null != h && h > 0;
    return (0, r.jsxs)(e0.dZ, {
        children: [
            (0, r.jsx)(eJ.A, {}),
            (0, r.jsxs)("div", {
                className: iK.EL,
                children: [
                    (0, r.jsx)(iY.e, { sku: d, shape: "square", containerClassName: iK.LC }),
                    (0, r.jsx)(tn.D, {
                        variant: "heading-xl/semibold",
                        className: iK.RS,
                        children: Z.intl.string(Z.t["5glWta"]),
                    }),
                    (0, r.jsx)(tt.E, {
                        variant: "text-md/normal",
                        children: Z.intl.formatToPlainString(Z.t["2VjPTw"], {
                            itemName: d.name,
                            giftRecipient: c?.username ?? "your recipient",
                        }),
                    }),
                    f &&
                        (0, r.jsx)("div", {
                            className: iK.Is,
                            children: (0, r.jsx)(iW.A, {
                                Icon: iB.C,
                                text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: h }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: iK.UD,
                        children: (0, r.jsx)(t4.$, { onClick: t, text: Z.intl.string(Z.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var iz = n(889137),
    iq = n(742158),
    iZ = n(313961),
    iX = n(238017),
    iQ = n(650588),
    iJ = n(117218),
    i0 = n(763827),
    i1 = n(403362),
    i2 = n(871123),
    i3 = n(832163),
    i6 = n(44724),
    i4 = n(980094),
    i5 = n(806931),
    i7 = n(107610);
function i8(e) {
    let { handleClose: t, sku: n, application: i } = e,
        a = s.useCallback(() => {
            (0, i6.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        l = s.useCallback(() => {
            t();
            let e = i3.A.getStorefrontState(n.applicationId)?.activePage;
            (0, i2.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: i?.guildId,
                skuId: n.id,
            }) ||
                ((0, o.closeAllModals)(),
                (0, i6.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: i7.$O,
        children: (0, r.jsx)(e6.Q, {
            text: Z.intl.string(Z.t.ImioFL),
            onMouseDown: a,
            onClick: l,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let i9 = {
    CHECKOUT_FLOW: el.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [u.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: a } = ((e) => {
                    var t;
                    let n,
                        i,
                        a,
                        { handleStepChange: o, handleClose: l } = e,
                        {
                            customGiftMessage: u = "",
                            setCustomGiftMessage: c,
                            giftRecipient: d,
                            emojiConfetti: _,
                            soundEffect: h,
                            setEmojiConfetti: f,
                            setSoundEffect: p,
                            giftingOrigin: E,
                            additionalUserIds: m,
                        } = (0, eM.Pv)(),
                        A = (0, v.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, eY.V)(),
                        T = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = tR()),
                            (i = (function (e) {
                                let t = (0, g.bG)([i0.A], () => (i0.A.isConnected() ? i0.A.getChannelId() : null)),
                                    [n, i] = s.useState([]);
                                return (
                                    s.useEffect(() => {
                                        let n = null != t ? iZ.A.getParticipants(t) : [],
                                            r = [],
                                            s = new Set();
                                        for (let t of n)
                                            (!(0, i5.Xw)(t) && !(0, i5.Ay)(t)) ||
                                                t.user.id === e ||
                                                s.has(t.user.id) ||
                                                (s.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, i5.Ay)(e) && !(0, i5.Ay)(t)
                                                ? -1
                                                : (0, i5.Ay)(t) && !(0, i5.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            i(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (a = (0, g.yK)([ta.default], () => m?.map(ta.default.getUser).filter(i1.Vq) ?? [], [m])),
                            s.useMemo(
                                () =>
                                    ty().uniqWith(
                                        [...(null != d ? [d] : []), ...a, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [d, a, i, n],
                            )),
                        y = (0, g.bG)([iP.A], () => (null != A ? iP.A.get(A) : null), [A]),
                        { userPrice: C } = (0, iJ.CD)({ sku: y, priceSetAssignmentPurchaseType: q.lid.GIFT }),
                        N = (0, i2.fq)(y),
                        R = (0, i2.xf)(y),
                        O = async (e, t) => {},
                        b = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        D = () =>
                            (0, r.jsxs)("div", {
                                className: i7.mT,
                                children: [
                                    null != N &&
                                        (0, r.jsx)(iY.A, {
                                            containerClassName: i7.T3,
                                            cardImage: N,
                                            cardBackgroundImage: R,
                                            altText: y?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: i7._T,
                                        children: [
                                            (0, r.jsx)(iQ.A, { sound: h, onSelect: b }),
                                            (0, r.jsx)(iX.A, {
                                                setEmojiConfetti: f,
                                                emojiConfetti: null == _ ? void 0 : _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = y?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: i7.Tc,
                                children: [
                                    null != d && (E === e1.vQ.USER_PROFILE_WISHLIST || E === e1.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tD.Z, { giftRecipient: d })
                                        : (0, r.jsx)(tT, { selectedSkuId: A, validateSelectedGift: O, recipients: S }),
                                    (0, r.jsx)(tO.A, {
                                        onTextChange: (e) => c?.(e),
                                        pendingText: u,
                                        currentText: u,
                                        disableThemedBackground: !0,
                                        className: i7.iX,
                                        innerClassName: i7.pt,
                                    }),
                                    null == y
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: i7.AN,
                                              children: [
                                                  (0, r.jsx)(iq.z, {
                                                      className: i7.jr,
                                                      children: Z.intl.string(Z.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: i7.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: i7.Xb,
                                                              children:
                                                                  null != y &&
                                                                  null != N &&
                                                                  (0, r.jsx)(iY.A, {
                                                                      containerClassName: i7.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: R,
                                                                      altText: y.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: i7.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(i4.Q, { application: I }),
                                                                  (0, r.jsx)(tt.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: y.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(tt.E, {
                                                              variant: "text-md/semibold",
                                                              children: C,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != y &&
                                        (0, i2.Ri)(y) &&
                                        (0, r.jsx)(nP.w, { type: "info", children: Z.intl.string(Z.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(iW.A, {
                                            Icon: iB.C,
                                            text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != y && (0, r.jsx)(i8, { handleClose: l, sku: y, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: i7.Du, children: [D(), L()] }),
                        getLeftColumnComponent: D,
                        getRightColumnComponent: L,
                        onStepChange: o,
                        onBackClick: l,
                        disabled: null == d || d.id === T?.id || u.length > e1.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                o = s.useMemo(() => ({ disabled: a }), [a]);
            return (0, r.jsx)(el.Mw, {
                paymentModalStepProps: e,
                layout: el.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: o,
            });
        },
        [u.pn.REVIEW]: eu.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(i$, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: a, isGift: o, skuId: l, ...u } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, iF.h)(t);
                    s.useEffect(() => {
                        null == i ||
                            null == n ||
                            ix.A.isFetchingForSKU(n) ||
                            null != iP.A.get(n) ||
                            (0, iV.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: a, skuId: l }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: a,
                    skuIDs: [l],
                    purchaseType: tP.VV.ONE_TIME,
                    isGift: o,
                    ...u,
                    activeSubscription: null,
                    children: t,
                })
            );
        },
        TenantPaymentModalRenderer: (e) => {
            let { originalPaymentModalProps: t, renderPaymentModal: n } = e;
            return n({ ...t, analyticsObject: t.analyticsSourceLocation });
        },
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, iz.YW)(t)
                .with(u.pn.GIFT_CUSTOMIZATION, () => Z.intl.string(Z.t["JCFN/y"]))
                .with(u.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => Z.intl.string(Z.t.lDbi6H))
                .with(u.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(eD.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var re = n(46225),
    rt = n(587895),
    rn = n(818824),
    ri = n(944355),
    rr = n(977445),
    rs = n(211287),
    ra = n(623373),
    ro = n(739508),
    rl = n(715054);
(0, a.A)();
var ru = n(136857),
    rc = n(158317),
    rd = n(855104);
n(322076);
var r_ =
        (((i = {})[(i.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (i[(i.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (i[(i.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (i[(i.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (i[(i.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (i[(i.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (i[(i.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (i[(i.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (i[(i.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (i[(i.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (i[(i.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (i[(i.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (i[(i.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (i[(i.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        i),
    rh = n(289873),
    rf = n(241989),
    rp = n(576052),
    rE = n(120992),
    rm = n(194256),
    rg = n(319820),
    rA = n(327105),
    rI = n(200766);
let rT = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, rg.AO)({ sku: t }),
            a = (0, rm.oO)(i);
        s ? (a = Z.intl.string(rA.default.qwSlCO)) : (0, ra.Ab)(i) && (a = Z.intl.string(Z.t["0TmQRG"]));
        let o = (0, rm.dL)(t),
            l = (0, eG.EZ)(t.id) ? rp.m[t.id].render({ className: rI.$ }) : (0, r.jsx)(rf.WH, { sku: t, product: i });
        return (0, r.jsx)(rf.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: iB.C,
        });
    },
    rS = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, rE.c)({ applicationId: (0, d.P)(t), skuIDs: [t] });
        let i = (0, ej.bG)([iP.A], () => iP.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(rh.y, { type: rh.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(rT, { sku: i, orbPriceAmount: n });
    },
    ry = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(ri.vW, { label: Z.intl.string(Z.t.y0WGqP), value: null != t ? `${t}` : "", Icon: iB.C });
    },
    rC = () => Z.intl.string(Z.t.wmcDyu);
function rN(e) {
    let { skuId: t } = e,
        { immediateDelivery: n } = (0, rn.U)(),
        i = (function (e) {
            let { skuId: t } = e,
                n = rC(),
                i = (0, g.bG)([iP.A], () => iP.A.get(t), [t]),
                r = i?.productLine,
                s = i?.applicationId,
                a = (0, g.bG)([rt.A], () => (r === q.EZt.SOCIAL_LAYER_GAME_ITEM ? rt.A.getApplication(s) : null), [
                    s,
                    r,
                ]),
                { fetched: o, hasAlreadyLinked: l } = (0, re.RD)(a);
            return r !== q.EZt.SOCIAL_LAYER_GAME_ITEM
                ? { type: ri.I0.OrbsRedemption, purchaseButtonText: n }
                : {
                      type: ri.I0.GiftGameShop,
                      purchaseButtonText: n,
                      applicationName: a?.name,
                      applicationId: s,
                      shouldAppendDisclaimer: o && !l,
                  };
        })({ skuId: t });
    return (0, r.jsx)(ri._P, { variant: i, paymentSourceType: null, immediateDelivery: n });
}
let rv = (0, s.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    rR = () => (0, s.useContext)(rv),
    rO = { payment_gateway: tP.kM.VIRTUAL_CURRENCY, currency: q.Yri.DISCORD_ORB },
    rb = {
        CHECKOUT_FLOW: el.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [u.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        skuId: l,
                        analyticsSourceLocation: c,
                    } = rR(),
                    { primaryButtonProps: h, ...p } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: a,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            } = e,
                            { enabled: h } = rs.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: p, orderOrbPriceAmount: E } = (0, v.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: m,
                                orbPriceAmount: A,
                                orbBalanceToDisplay: I,
                                onClickCheckout: T,
                                showCollectiblesDiscountWarning: y,
                                errorMessage: C,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: i,
                                        orbProductContext: r,
                                        analyticsSourceLocation: a,
                                        handleStepChange: o,
                                    } = e,
                                    { analyticsLocations: l } = (0, eL.Ay)(),
                                    {
                                        selectedSkuId: c,
                                        setPurchaseState: h,
                                        firstConstraintReasonCode: p,
                                    } = (0, v.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    E = (0, rd.gN)(),
                                    m = (0, s.useRef)(E),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: a } = (0, eY.V)(),
                                            { hasPaymentSources: o } = (0, tz.jm)(),
                                            {
                                                loadId: l,
                                                startTime: c,
                                                discoverySessionId: h,
                                            } = (0, v.t4)((e) => e.contextMetadata),
                                            p = (0, s.useMemo)(
                                                () => ({
                                                    load_id: l,
                                                    discovery_session_id: h,
                                                    application_id: (0, d.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: a,
                                                    payment_gateway: tP.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: q.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: q.frM[q.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: f.r.UNIFIED,
                                                        checkout_flow: S.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [l, h, a, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, s.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - c;
                                                    e === q.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(q.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...p,
                                                              has_saved_payment_source: o,
                                                              payment_gateway: tP.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === q.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...p,
                                                                has_saved_payment_source: o,
                                                                initial_step: u.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === q.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...p,
                                                                  duration_ms: n,
                                                              })
                                                            : e === q.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(q.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...p,
                                                                    duration_ms: n,
                                                                })
                                                              : e === q.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(q.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...p,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [c, p, o],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: l,
                                        analyticsSourceLocation: a,
                                    });
                                (0, s.useEffect)(() => {
                                    null != i &&
                                        null !== m.current &&
                                        (g(q.HAw.PAYMENT_FLOW_FAILED, i), (m.current = null));
                                }, [i, g]);
                                let A = (0, s.useCallback)(() => {
                                        (m.current = E),
                                            g(q.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                h(b.h.COMPLETED), o(u.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, h, E, g, o]),
                                    I = m.current ?? E,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tp.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, s.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof rc.FY && null != t)
                                                    switch (t) {
                                                        case r_.INSUFFICIENT_ORB_BALANCE:
                                                            return Z.intl.string(Z.t.keFvXM);
                                                        case r_.SKU_ALREADY_OWNED:
                                                            return Z.intl.string(Z.t.m371Mx);
                                                        case r_.BUNDLE_PARTIALLY_OWNED:
                                                            return Z.intl.string(Z.t.v9oC0p);
                                                        default:
                                                            return Z.intl.string(Z.t.fqJZ11);
                                                    }
                                                return e instanceof rc.j2
                                                    ? Z.intl.string(Z.t["2BmwgV"])
                                                    : e.code === ru.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? Z.intl.string(Z.t.keFvXM)
                                                      : e.code === ru.tG.ALREADY_PURCHASED
                                                        ? Z.intl.string(Z.t.m371Mx)
                                                        : e.code === ru.tG.BILLING_ORDER_NOT_SIGNABLE
                                                          ? Z.intl.string(Z.t.ZHgEG7)
                                                          : Z.intl.string(Z.t.fqJZ11);
                                            })(i, p),
                                        [i, p],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: c,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: o,
                                onRedeemVirtualCurrency: l,
                                handleStepChange: c,
                            }),
                            N = (0, g.bG)([iP.A], () => iP.A.get(t), [t]),
                            R = (0, rr.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: D,
                                text: L,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: a } = (0, s.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: Z.intl.string(Z.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: Z.intl.string(Z.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: a, text: rC() };
                            })({ orbBalance: I, orbPriceAmount: h ? p : A, isInTestMode: R }),
                            w = (0, s.useMemo)(
                                () => ({ onClick: T, loading: a, text: L, disabled: O, tooltipText: D }),
                                [T, a, L, O, D],
                            ),
                            M = y ? Z.intl.format(Z.t.fsOXXO, {}) : null,
                            P = R ? Z.intl.string(Z.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, s.useMemo)(() => {
                                if (null != P || null != M || null != C) {
                                    let e = [];
                                    return (
                                        null != P &&
                                            e.push({ type: "warning", message: P, key: "test-mode-warning-notice" }),
                                        null != M &&
                                            e.push({ type: "warning", message: M, key: "orb-checkout-warning-notice" }),
                                        null != C &&
                                            e.push({ type: "critical", message: C, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [P, M, C]),
                            purchaseItemContent: (0, r.jsx)(rS, { skuId: t, orbPriceAmount: h ? E : A }),
                            paymentMethodContent: (0, r.jsx)(ry, { orbBalance: I }),
                            legalContent: (0, r.jsx)(rN, { skuId: t }),
                            primaryButtonProps: w,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: l,
                        analyticsSourceLocation: c,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: a,
                        onRedeemVirtualCurrency: o,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(nU.T, { ...p }) }),
                        (0, r.jsx)(e0.UX, { children: (0, r.jsx)(N.lo, { primaryButtonProps: h }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: a } = e,
                    { order: o, setOrder: l } = (0, v.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: u,
                        isRedeeming: c,
                        orbRedemptionError: d,
                        onRedeemVirtualCurrency: _,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: a } = e,
                            o = (0, g.bG)([ta.default], () => to.Ay.canUseShopDiscounts(ta.default.getCurrentUser())),
                            l = (0, g.bG)([iP.A], () => iP.A.get(t), [t]),
                            u = (0, iJ.JL)({ sku: l }),
                            { product: c } = (0, tl.q)(t),
                            d = (0, s.useMemo)(() => {
                                if (null != u) return { orbPriceAmount: u.amount };
                                if (null != c) {
                                    let e = (0, ra.CW)({ product: c, hasShopDiscount: o });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [u, c, o]);
                        d?.orbPriceAmount == null &&
                            (0, ro.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: _,
                                isSubmitting: h,
                                error: f,
                            } = (0, rl.Q)({ skuId: t, loadId: n, order: a, onSignFailure: r }),
                            p = (0, s.useCallback)(
                                (e) => {
                                    _(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, _, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: d,
                            onRedeemVirtualCurrency: p,
                            isRedeeming: h,
                            orbRedemptionError: f,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: l }),
                    h = (0, s.useMemo)(
                        () => ({
                            orbProductContext: u,
                            isRedeeming: c,
                            orbRedemptionError: d,
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [u, c, d, _, t, i],
                    );
                return (0, r.jsx)(rv.Provider, { value: h, children: a });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = rR(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, s.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: rO });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: rO,
        },
    },
    rD = {
        [h.C.ORB_CHECKOUT]: {
            flowType: h.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: rb,
        },
        [h.C.COLLECTIBLES_CHECKOUT]: {
            flowType: h.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tV,
        },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: i9,
        },
        [h.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: io,
        },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: iG,
        },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: iL,
        },
        [h.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eb,
            flowType: h.C.GUILD_PRODUCT_CHECKOUT,
        },
        [h.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: nl,
            purchaseType: q.VVm.SUBSCRIPTION,
        },
        [h.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: h.C.GUILD_BOOST_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: eo,
        },
    };
var rL = n(735305),
    rw = n(295405);
let rM = (e) => {
        let { returnStep: t = u.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
            { purchaseType: a } = (0, v.t4)((e) => ({ purchaseType: e.purchaseType })),
            o = s.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = u.pn.REVIEW,
                            returnStepIfNoPaymentSources: i,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(rw.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === tP.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: a }),
                [t, n, i, a],
            );
        return (0, r.jsx)(rL.x, { ...i, onReturn: o });
    },
    rP = (e) => {
        let { initialPlanId: t } = e,
            n = (0, v.t4)((e) => e.selectedSkuId),
            i = (0, tq.A)(),
            { isGift: a, claimableRewards: o } = (0, eM.Pv)(),
            l = n8({ isGift: a, skuId: n }),
            c = (0, nM.lp)(l),
            d = (0, tQ.px)(i, a, o),
            _ = s.useMemo(() => {
                let e = null == t ? u.pn.PLAN_SELECT : u.pn.REVIEW;
                return c && (e = u.pn.REVIEW), d && (e = u.pn.SELECT_FREE_SKU), e;
            }, [c, d, t]);
        return (0, r.jsx)(rM, { paymentModalStepProps: e, returnStep: u.pn.REVIEW, returnStepIfNoPaymentSources: _ });
    },
    rx = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = u.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === h.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(rP, { ...s })
            : (0, r.jsx)(rM, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var rk = n(339048),
    rU = n(469778),
    rG = n(315949),
    rF = n(599062);
function rV() {
    let { refreshCategories: e } = (0, rG.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eD.rQ, { title: Z.intl.string(Z.t["p8+qtU"]) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)(rF.h, { onRetry: e, errorOrigin: rF.A.GIFT_MODAL }) }),
        ],
    });
}
function rB(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: a } = (0, tz.jm)(),
        { application: o } = (0, eY.V)(),
        l = (0, B.Hp)(),
        c = (0, eK.gU)(),
        d = (0, eK.Hu)(),
        { isGift: _ } = (0, eM.Pv)(),
        [h, f] = s.useState(!0),
        [p, E] = (0, ej.yK)([e$.A], () => [e$.A.isFetchingCategories, e$.A.error]);
    return (s.useEffect(() => {
        let e = null != o;
        d && a && e && f(p);
    }, [d, a, o, p]),
    s.useEffect(() => {
        if (h || l || null == n) return;
        let e = c[n];
        _ &&
        (e?.productLine === q.EZt.COLLECTIBLES ||
            e?.productLine === q.EZt.APPLICATION ||
            e?.productLine === q.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [h, l, t, i, _, c, n]),
    h)
        ? (0, r.jsx)(Y.A, {})
        : l
          ? (0, r.jsx)(j.oO, {})
          : null != E
            ? (0, r.jsx)(rV, {})
            : null;
}
function rj(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: a } = e,
        { hasPaymentSources: o } = (0, tz.jm)(),
        {
            selectedSkuId: l,
            setSelectedPlanId: c,
            activeSubscription: d,
            defaultPlanId: _,
            startedPaymentFlowWithPaymentSources: h,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        f = (0, B.Hp)(),
        p = K(),
        { hasFetchedRelatedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m } = (0, H.Jn)(),
        { isGift: g } = (0, eM.Pv)(),
        A = n8({ isGift: g, skuId: l }),
        I = !p || !E || m,
        T = (0, ej.bG)([rU.A], () => rU.A.applicationIdsFetched.has(e1.tv));
    return (nk(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: E, subscriptionPriceOptionsLoading: m },
        { tags: { app_context: "billing" } },
    ),
    s.useEffect(() => {
        if ((T || (0, rk.LM)(e1.tv), I || f)) return;
        let e = (0, nM.vT)({ isTrial: A, isGift: g, selectedSkuId: l, startedPaymentFlowWithPaymentSources: h });
        null != a
            ? i(u.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: a })
            : null != n
              ? n !== e1.gD.PREMIUM_GROUP_MONTH || o
                  ? i(u.pn.REVIEW)
                  : i(u.pn.ADD_PAYMENT_STEPS)
              : e
                ? (c((0, nM.xT)(l, d, _)), i(u.pn.REVIEW))
                : null != t
                  ? i(u.pn.PLAN_SELECT)
                  : i(u.pn.SKU_SELECT);
    }, [a, d, f, T, n, I, i, t, l, c, A, _, g, h, o]),
    I)
        ? (0, r.jsx)(Y.A, {})
        : f
          ? (0, r.jsx)(j.oO, {})
          : null;
}
var rH = n(343834),
    rY = n(830382),
    rW = n(349288),
    rK = n(94204);
function r$(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: rK.a,
            children: [
                (0, r.jsx)(tn.D, { variant: "heading-xl/bold", children: Z.intl.string(Z.t.Q03WWV) }),
                (0, r.jsxs)("p", {
                    children: [
                        (0, r.jsx)(tt.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.BxPxhI) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)(tt.E, { variant: "text-md/normal", children: Z.intl.string(Z.t.Y3fdOp) }),
                        (0, r.jsx)("br", {}),
                        (0, r.jsxs)(tt.E, {
                            variant: "text-md/normal",
                            children: [
                                Z.intl.string(Z.t.Paa4v4),
                                "\xa0",
                                n
                                    ? Z.intl.string(Z.t.StGVvC)
                                    : (0, r.jsx)(rW.Anchor, { onClick: i, children: Z.intl.string(Z.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rz() {
    let e = s.useMemo(() => [{ variant: "primary", text: Z.intl.string(Z.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(nR.H, { actions: e });
}
var rq = n(599961);
function rZ() {
    let [e, t] = s.useState(!1),
        n = async () => {
            t(!0), await (0, rY.lo)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nZ.A, {}),
            (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(r$, { className: rq.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(e0.UX, { children: (0, r.jsx)(rz, {}) }),
        ],
    });
}
let rX = { key: null, renderStep: (e) => (0, r.jsx)(rB, { ...e }), options: { modalSizeGetter: () => "md" } },
    rQ = { key: null, renderStep: (e) => (0, r.jsx)(rj, { ...e }) },
    rJ = [
        { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(rZ, {}) },
        { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(rH.A, {}), options: { renderHeader: !0 } },
    ],
    r0 = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, s.useRef)(!1),
            a = (0, B.Hp)(),
            { handleStepChange: o } = t;
        return ((0, s.useEffect)(() => {
            a || i.current || (o(n), (i.current = !0));
        }, [a, o, n]),
        a)
            ? (0, r.jsx)(j.oO, {})
            : null;
    },
    r1 = {
        [h.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [h.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [h.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [h.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [h.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [h.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    },
    r2 = (0, s.lazy)(() =>
        Promise.all([n.e("4080"), n.e("93438"), n.e("54791"), n.e("25246"), n.e("33319"), n.e("8430")])
            .then(n.bind(n, 427325))
            .then((e) => {
                let { UnifiedCheckoutInstance: t } = e;
                return { default: t };
            }),
    ),
    r3 = (e) => (0, r.jsx)(r2, { ...e });
class r6 {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = rD[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = r1[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, i) => (0, r.jsx)(e, { plan: t, onClose: n, step: i });
    }
    getPredicateStepConfig() {
        let { CustomCheckoutPredicateStep: e } = this.tenantCheckoutFlowConfig,
            { predicateStepType: t } = this.internalCheckoutFlowControls;
        return null != e
            ? { key: null, renderStep: (t) => (0, r.jsx)(e, { ...t }) }
            : "one_time_payment" === t
              ? rX
              : "subscription" === t
                ? rQ
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(r0, { paymentModalStepProps: e, defaultStep: u.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== h.C.ORB_CHECKOUT)
            return {
                key: u.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(rx, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: u.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? u.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(u.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != i)
            return {
                key: u.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => Z.intl.string(Z.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(u.pn.REVIEW);
        return {
            key: u.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n, STEPS_BEFORE_CHECKOUT: i = [] } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: r } = this.internalCheckoutFlowControls,
            s = this.getPredicateStepConfig(),
            a = this.getGiftCustomizationStepConfig({ isGift: t }),
            o = this.getAddPaymentStepConfig({ isGift: t }),
            l = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : rJ), l]);
        return null != n && c.push({ key: u.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === h.C.ORB_CHECKOUT && null != e
            ? (0, d.P)(e)
            : this.checkoutFlow === h.C.COLLECTIBLES_CHECKOUT
              ? q.FYj
              : this.checkoutFlow === h.C.PREMIUM_CHECKOUT
                ? e1.tv
                : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: i,
            applicationId: r,
            discoverySessionId: s,
            analyticsLocation: a,
            analyticsLocations: o,
            analyticsObject: l,
            analyticsSourceLocation: u,
            isGift: c,
            eligibleForTrial: d,
        } = e;
        _.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: s,
            payment_type: q.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: c,
            sku_id: n,
            sku_product_line: i,
            application_id: r,
            location: a ?? l,
            location_stack: o,
            source: u,
            eligible_for_trial: d,
            payment_modal_version: "v2",
            checkout_design: f.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? { subscription_type: q.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                giftContextProps: t,
                checkoutHandlers: { onComplete: i, onClose: u } = {},
                checkoutConfiguration: {
                    skuId: d,
                    skuProductLine: _,
                    discoverySessionId: f,
                    applicationId: p,
                    activeSubscription: E,
                },
                unifiedCheckoutProviderProps: { analyticsLocations: g, analyticsSourceLocation: A },
                forwardedPaymentModalProps: { analyticsObject: I, ...T } = {},
                tenantParams: S,
            } = e,
            y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            C = arguments.length > 2 ? arguments[2] : void 0,
            v = { current: (this.checkoutFlow === h.C.PREMIUM_CHECKOUT ? (0, c.A)() : null) ?? (0, a.A)() },
            R = { current: null },
            { modalKey: O } = C,
            b = this.generateRenderHeader(),
            D = p ?? this.getApplicationId(d),
            L = !!(null != t && t.isGift),
            w = !1,
            M = {
                ...T,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: L }),
                onComplete: (e) => {
                    null != i && i(e), (w = !0);
                },
                onClose: u,
                renderHeader: b,
                skuId: d ?? null,
                tenantParams: S ?? {},
                loadId: v.current,
                onOrderCreated: (e) => {
                    (v.current = e.id), (R.current = e);
                },
                discoverySessionId: f,
                activeSubscription: E ?? null,
                applicationId: D,
                analyticsLocations: g,
                analyticsObject: I,
                analyticsSourceLocation: A,
                giftContextProps: t,
            };
        if ("modal" === y)
            return (0, o.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.all([
                        n.e("4080"),
                        n.e("93438"),
                        n.e("54791"),
                        n.e("25246"),
                        n.e("33319"),
                        n.e("8430"),
                    ]).then(n.bind(n, 427325));
                    return (t) => (0, r.jsx)(e, { ...M, renderModalProps: t });
                },
                {
                    ...C,
                    onCloseRequest: () => {
                        null != C.onCloseRequest && C.onCloseRequest(w, v.current),
                            C.skipCloseModalOnCloseRequest || (0, o.closeModal)(O);
                    },
                    onCloseCallback: () => {
                        w ||
                            (m({ checkoutSucceeded: w, order: R.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: v.current,
                                skuId: d,
                                skuProductLine: _,
                                applicationId: D,
                                discoverySessionId: f,
                                analyticsLocation: T.analyticsLocation,
                                analyticsLocations: g,
                                analyticsObject: I,
                                analyticsSourceLocation: A,
                                isGift: L,
                                eligibleForTrial: null != T.trialId,
                            })),
                            null != C.onCloseCallback && C.onCloseCallback(w),
                            null != u && u(w, d);
                    },
                    modalKey: O,
                },
            );
        {
            let e = T.paymentModalOnClose ?? u,
                t = { transitionState: l.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(s.Suspense, {
                fallback: (0, r.jsx)(N.Jg, {
                    transitionState: l.ip.ENTERED,
                    onClose: q.tEg,
                    size: "md",
                    isModalContentLoading: !0,
                }),
                children: (0, r.jsx)(r3, { ...M, paymentModalOnClose: e, renderModalProps: t }),
            });
        }
    }
    openCheckoutModal(e) {
        let { modalAPIOptions: t } = e;
        return this.renderCheckoutInstance(e, "modal", t);
    }
    renderStandaloneCheckout(e) {
        return this.renderCheckoutInstance(e, "standalone", { modalKey: "standalone-checkout" });
    }
}
