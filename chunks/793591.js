"use strict";
n.d(t, { o: () => r1 }), n(321073);
var i,
    r = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(231723),
    l = n(166532),
    u = n(925847),
    c = n(310829),
    d = n(174459),
    _ = n(75304),
    h = n(145659),
    f = n(624210),
    p = n(26279);
async function E(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === p.Re.DRAFT)
        try {
            await (0, f.Nl)(n.id);
        } catch (e) {}
}
var m = n(64700),
    g = n(17928),
    A = n(444927),
    I = n(964486),
    T = n(793574),
    S = n(120700),
    y = n(197510),
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
        m.useEffect(() => {
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
let es = [l.pn.PLAN_SELECT],
    ea = [
        { key: l.pn.PLAN_SELECT, renderStep: (e) => (0, r.jsx)(ee.c, { ...e }), options: { renderHeader: !0 } },
        {
            key: l.pn.PREMIUM_UPSELL,
            renderStep: (e) => (0, r.jsx)(et.d, { ...e }),
            options: { renderHeader: !1, hideSlider: !0 },
        },
    ],
    eo = {
        CHECKOUT_FLOW: S.C.GUILD_BOOST_CHECKOUT,
        CustomCheckoutPredicateStep: function (e) {
            let { handleStepChange: t } = e,
                n = (0, v.t4)((e) => e.activeSubscription),
                { guildId: i, analyticsLocation: s } = (0, $.Oe)(),
                a = (0, B.Hp)(),
                o = K(),
                { hasFetchedRelatedSubscriptionPlans: u, displayCurrency: c } = (0, H.Jn)(),
                { hasFetchedPremiumSubscriptionPlan: _ } = (0, z.l)(),
                h = null != n && null != n.renewalMutations,
                f = null != n && n.isPausedOrPausePending && !n.isPausedAllowsUpdatesButNotResume,
                p = !o || !u || !_ || null == c || "" === c;
            return ((0, I.Ay)(() => {
                h && d.default.track(q.HAw.PREMIUM_GUILD_PENDING_MODAL, { location: s, guild_id: i });
            }),
            m.useEffect(() => {
                p || a || f || h || t(l.pn.PLAN_SELECT);
            }, [p, a, f, h, t]),
            f)
                ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.mOWsF1) })
                : h
                  ? (0, r.jsx)(Q, { message: Z.intl.string(Z.t.npfhh0) })
                  : p
                    ? (0, r.jsx)(Y.A, {})
                    : a
                      ? (0, r.jsx)(j.oO, {})
                      : null;
        },
        STEPS_BEFORE_CHECKOUT: ea,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: en.b },
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
                    { numGuildBoostsToPurchase: i, guildId: s, existingAvailableSlotCount: a } = (0, $.Oe)(),
                    o = (0, D.bB)(),
                    u = (0, v.t4)((e) => e.purchaseState),
                    c = (0, L.n)("GuildBoostUnifiedCheckout"),
                    d = c && (o === l.pn.REVIEW || o === l.pn.CONFIRM),
                    _ = (0, F.A)(d),
                    h = m.useMemo(() => ({ quantity: i }), [i]);
                return c && o === l.pn.CONFIRM
                    ? (0, r.jsx)(G.A, {
                          mediaUrls: _.mediaUrls,
                          isSuccess: _.isSuccess,
                          transitionState: t.transitionState,
                          onClose: () => (t.onClose(u === b.h.COMPLETED), Promise.resolve()),
                          children: (e, n) =>
                              (0, r.jsx)(U.A, {
                                  transitionState: t.transitionState,
                                  guild: w.A.getGuild(s),
                                  guildBoostQuantity: i + a,
                                  isTransfer: !1,
                                  graphic: e,
                                  onClose: n,
                              }),
                      })
                    : n({
                          ...t,
                          analyticsDataOverride: h,
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
            return i === l.pn.PREMIUM_UPSELL
                ? null
                : i === l.pn.REVIEW
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
let ef = m.createContext(void 0);
function ep() {
    let e = m.useContext(ef);
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
        o = (0, e_.sw)();
    return (
        (0, I.Ay)(() => {
            var e;
            ed()(null != o, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: i.id, invoicePreview: o }),
                (0, a.openModalLazy)(async () => {
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
    CHECKOUT_STEPS: { [l.pn.REVIEW]: eu.p },
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
        return n === l.pn.CONFIRM
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
            purchaseError: s,
            purchasePreviewError: a,
            appliedUserDiscounts: o,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: l } = (0, eW.o)(),
        { application: u } = (0, eY.V)(),
        c = (0, eK.gU)(),
        d = (0, ej.bG)([e$.A], () => e$.A.getProduct(i)),
        _ = m.useRef(!1);
    ed()(null != i, "Expected selectedSkuId"), ed()(null != u, "Expected application");
    let h = c[i];
    ed()(null != h, "Expected sku");
    let f = null != l || null != s || null != a,
        p =
            o.length > 0
                ? Z.intl.formatToPlainString(Z.t.VuV3Td, { discountOfferAmount: o[0].discount.amount })
                : void 0;
    return (m.useEffect(() => {
        null == d ||
            f ||
            _.current ||
            ((_.current = !0),
            (0, eX.A)({
                product: d,
                overrideTitle: p,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: eG.gs.FIAT,
            }));
    }, [d, n, t, f, p]),
    f)
        ? (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(eJ.A, {}) })
        : null;
}
function e3(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: i,
            hasSentMessage: s,
            giftRecipient: a,
            giftMessageError: o,
            isSendingMessage: l,
            giftingOrigin: u,
        } = (0, eM.Pv)(),
        c = (0, ej.bG)([eH.Ay], () => eH.Ay.useReducedMotion),
        d = m.useRef(null),
        _ = (0, v.t4)((e) => e.selectedSkuId),
        h = (0, ej.bG)([e$.A], () => e$.A.getProduct(_)),
        { confettiColors: f } = (0, ez.A)(h?.styles);
    return (
        m.useEffect(() => {
            t &&
                null != a &&
                null != _ &&
                (u === e1.vQ.USER_PROFILE_WISHLIST || u === e1.vQ.DM_CHANNEL_WISHLIST) &&
                ex.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: _, recipientId: a.id });
        }, [t, a, _, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(eQ.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: i,
                          hasSentMessage: s,
                          giftRecipient: a,
                          giftMessageError: o,
                          isSendingMessage: l,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, r.jsx)(eq.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eZ.rA)(h?.categorySkuId),
                              colors: f?.map((e) => e.toHexString()),
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
            className: s,
            previewHeaderClassName: a,
            hideProfilePreview: o,
        } = e,
        { giftRecipient: l, giftRecipientError: u } = (0, eM.Pv)(),
        c = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        d = to.Ay.canUseShopDiscounts(c),
        _ = (0, tr.Ay)(l?.id),
        h = m.useRef(null),
        [f, p] = m.useState(!1),
        { product: E } = (0, tl.q)(t, !0),
        A = m.useMemo(() => (0, e5.fT)(E, d), [E, d]),
        I = (0, tp.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [T] = E.items,
        S = (0, t_.VG)(E),
        y = null != l && l.id !== c?.id && E.type !== e7.R.BUNDLE && T.type !== e7.R.NAMEPLATE && !o;
    return (0, r.jsxs)("div", {
        className: s,
        children: [
            (0, r.jsx)("div", {
                className: eA()(tE.QU, a),
                children: (0, r.jsx)(e8.D, {
                    label: Z.intl.string(Z.t.PpoJzt),
                    children:
                        y &&
                        (0, r.jsx)(
                            e9.Y,
                            {
                                targetElementRef: h,
                                align: "center",
                                shouldShow: f,
                                onRequestClose: () => p(!1),
                                preload: () => (0, ts.A)(l.id, l.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(ti.A, {
                                        ...e,
                                        user: l,
                                        pendingAvatar: l.getAvatarURL(null, (0, te.FT)(te._3.SIZE_80)),
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
                                        innerRef: h,
                                        onClick: (e) => {
                                            p((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            f ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(tt.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: Z.intl.string(Z.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            _?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: eA()(tE.i1, null != u ? tE.cN : tE.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: tE.Ug,
                        children: [
                            (0, r.jsx)(th.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: tE.JZ,
                                children: [
                                    (0, r.jsx)(tt.E, { variant: "text-md/semibold", children: S }),
                                    (0, r.jsx)(tn.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === e7.R.BUNDLE
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
                    null != u &&
                        (0, r.jsx)("div", {
                            className: tE.Wh,
                            children: (0, r.jsx)(tt.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: u,
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
        n = m.useMemo(() => ty().uniq([...e, ...t]), [e, t]);
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
                (0, a.closeAllModals)(),
                null == n
                    ? (0, e4.Cz)({ analyticsLocations: i, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, tL.pX)(`${q.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var tP = n(818348);
let tx = (0, m.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    tk = () => (0, m.useContext)(tx),
    tU = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = tk(),
            { analyticsLocations: i } = (0, eL.Ay)();
        return (0, r.jsx)(e3, { analyticsLocations: i, hideConfetti: t, confettiCanvas: n, ...e });
    },
    tG = {
        [l.pn.GIFT_CUSTOMIZATION]: () => Z.intl.string(Z.t["JCFN/y"]),
        [l.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => Z.intl.string(Z.t.lDbi6H),
        [l.pn.CONFIRM]: () => "",
    },
    tF = (e) => {
        let { step: t } = e,
            n = tG[t];
        return null == n ? null : (0, r.jsx)(eD.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tV = {
        CHECKOUT_FLOW: el.CL.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [l.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: i,
                        renderRightColumn: s,
                        ctaDisabled: a,
                        loading: o,
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
                                setValidatingGiftRecipient: _,
                            } = (0, eM.Pv)(),
                            { selectedSkuId: h, checkoutInvoicePreview: f } = (0, v.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, eK.gU)(),
                            E = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                            m = tR(),
                            A = async (e, t) => {
                                _(!0),
                                    null != a && o(),
                                    (await (0, e4.JJ)(e.id, t)) || o(Z.intl.string(Z.t["4kgVqQ"])),
                                    _(!1);
                            };
                        (0, I.Ay)(() => {
                            null != h &&
                                null != u &&
                                (c !== e1.vQ.DM_CHANNEL_WISHLIST &&
                                    d.default.track(q.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: h }),
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
                    l = m.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(el.Mw, {
                    paymentModalStepProps: e,
                    layout: el.XZ.TWO_COLUMN,
                    renderLeftColumn: i,
                    renderRightColumn: s,
                    primaryCTAButtonProps: l,
                });
            },
            [l.pn.REVIEW]: eu.p,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: i, ...s } = e,
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
                            n = m.useRef(new eP.OH()),
                            [i, r] = m.useState(null),
                            [s, a] = m.useState(!1),
                            o = m.useMemo(() => (0, eU.AB)({ purchaseType: eG.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: i,
                            setConfettiCanvas: r,
                            customConfettiVisible: s,
                            setCustomConfettiVisible: a,
                            customConfettiDisplayOptions: o,
                            hideConfirmStepConfetti: null != o,
                        };
                    })({ skuId: t }),
                    h = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    f = null != n ? n.onStepChange : void 0,
                    p = (0, m.useMemo)(
                        () => ({
                            skuIDs: h,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                            onStepChange: f,
                        }),
                        [h, c, _, o, f],
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
                            ...s,
                            skuIDs: h,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: tP.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(tx.Provider, { value: p, children: i }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: i, setCustomConfettiVisible: r, onStepChange: s } = tk(),
                    { isGift: a } = (0, eM.Pv)(),
                    o = (0, ew.J)(),
                    {
                        paymentModalSkuId: l,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: i, setCustomConfettiVisible: r } = e,
                            s = t[0] ?? null,
                            a = m.useCallback(() => {
                                r(!0), i?.();
                            }, [i, r]);
                        return {
                            paymentModalSkuId: s,
                            paymentModalOnClose: m.useCallback(
                                (e) => {
                                    r(!1), n(e), ex.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: a,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: i, setCustomConfettiVisible: r }),
                    d = m.useCallback(
                        (e) => {
                            u(e), e && a && o();
                        },
                        [u, a, o],
                    );
                return n({ ...t, skuId: l, onClose: d, onComplete: c, applicationId: q.FYj, onStepChange: s });
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
        s = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        a = (0, g.bG)([eH.Ay], () => eH.Ay.useReducedMotion),
        { analyticsLocations: o } = (0, eL.Ay)(),
        l = te._3.SIZE_32,
        { product: u, isFetching: c } = (0, tl.q)(t),
        [d, _] = m.useState(!1),
        h = u?.items[0],
        {
            isNameplateReward: f,
            nameplateData: p,
            rewardAvatarDecorationSrc: E,
        } = m.useMemo(
            () =>
                null == h
                    ? { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null }
                    : (0, ne.F)(h)
                      ? {
                            isNameplateReward: !0,
                            nameplateData: {
                                skuId: h.skuId,
                                src: h.asset,
                                palette: (0, t8.H6)(h.palette ?? "sky"),
                                imgAlt: h.label,
                            },
                            rewardAvatarDecorationSrc: null,
                        }
                      : (0, tu.T)(h)
                        ? {
                              isNameplateReward: !1,
                              nameplateData: null,
                              rewardAvatarDecorationSrc: (0, t7.A)({
                                  legacyAssetId: h.asset,
                                  skuId: h.skuId,
                                  size: l,
                                  canAnimate: !a,
                              }),
                          }
                        : { isNameplateReward: !1, nameplateData: null, rewardAvatarDecorationSrc: null },
            [h, l, a],
        );
    return (0, r.jsx)(e0.UX, {
        children: (0, r.jsx)(t6.j, {
            children: (0, r.jsxs)("div", {
                className: nt.W,
                children: [
                    f && null != p
                        ? (0, r.jsx)("div", {
                              className: nt.D,
                              onMouseEnter: () => _(!0),
                              onMouseLeave: () => _(!1),
                              children: (0, r.jsx)(t9.a, {
                                  user: s,
                                  nameplate: null,
                                  nameplateData: p,
                                  showPlaceholderUser: !0,
                                  nameplatePreviewSize: "xsmall",
                                  isHighlighted: d,
                              }),
                          })
                        : (0, r.jsx)(t5.Js, {
                              "aria-label": s?.username,
                              size: l,
                              src: s?.getAvatarURL(void 0, (0, te.FT)(l), !a),
                              avatarDecoration: E,
                          }),
                    (0, r.jsx)(t4.$, {
                        variant: "primary",
                        text: Z.intl.string(Z.t.kMYVwv),
                        loading: c,
                        onClick: () => {
                            null != u &&
                                (n(),
                                (0, eX.A)({
                                    product: u,
                                    shouldShowPromotionalExperience: !0,
                                    analyticsLocations: o,
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
            planGroup: s,
            onSubscriptionConfirmation: o,
            renderPurchaseConfirmation: l,
            postSuccessGuild: u,
            followupSKUInfo: c,
            continueSessionToInitialStep: _,
        } = e,
        { paymentSources: h } = (0, tz.jm)(),
        {
            activeSubscription: f,
            selectedSkuId: p,
            updatedSubscription: E,
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
        H = (0, ni.g)(h, A),
        Y = R && null != x && null != V && F,
        W = { selectedPlan: C, selectedSkuId: p, step: N };
    if (null == C) throw new t$.v({ message: "Expected plan to be selected", extraSentryInformation: W });
    if (null == p) throw new t$.v({ message: "Expected selectedSkuId", extraSentryInformation: W });
    if (null == N) throw new t$.v({ message: "Step should be set", extraSentryInformation: W });
    let K = m.useCallback(() => {
        i(), o?.();
    }, [i, o]);
    (0, I.Ay)(() => {
        T &&
            d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != E,
                has_any_premium_group: E?.hasAnyPremiumGroup ?? !1,
                subscription_id: E?.id,
            });
    }),
        m.useEffect(() => {
            function e() {
                if (T)
                    if (null != E && E.hasAnyPremiumGroup) {
                        d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: E.id });
                        let e = (0, tS.uniqueId)("premium-group-purchase-flow-modal");
                        (0, a.openModalLazy)(
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
                                        subscription: E,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, a.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        d.default.track(q.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != E,
                            has_any_premium_group: E?.hasAnyPremiumGroup ?? !1,
                        }),
                            t1._.dispatch(q.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                t1._.subscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    t1._.unsubscribe(q.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [T, E]),
        m.useEffect(() => {
            !R || null == O || null == b || L || w || (0, t2.Ik)(O) || M({ onSubscriptionConfirmation: o });
        }, [M, R, O, b, L, w, o]),
        m.useEffect(() => {
            G &&
                null != j &&
                null != B &&
                (0, tX.qr)(tK.M.GIFTING_PROMOTION_REMINDER, B, { dismissAction: nr.i.INDIRECT_ACTION });
        }, [j, B, G]);
    let $ = null != _ ? t0.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != l) t = l(C, K, E);
    else if (R) t = (0, r.jsx)(t0.fw, { planId: C.id, onClose: K });
    else {
        let e =
            S === C.id
                ? { postSuccessGuild: u }
                : {
                      followupSKUInfo: c,
                      startingPremiumSubscriptionPlanId: S,
                      isDowngrade: null != f && (0, t3.vT)(f, C.id, s),
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
        CHECKOUT_STEPS: { [l.pn.REVIEW]: tY.E },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: i,
                    } = e,
                    s = m.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, r.jsx)(na.Provider, { value: s, children: (0, r.jsx)(tH.Qt, { children: i }) });
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
        { skuId: i, user: s, claimed: a, onSelect: o, selectedSkuId: l } = e,
        [u, c] = m.useState(null),
        d = m.useCallback((e) => {
            c(e);
        }, []),
        _ = m.useMemo(() => ({ current: u }), [u]),
        { isHoveringOrFocusing: h } = (0, nS.A)(_),
        f = !a && h,
        { product: p } = (0, tl.q)(i);
    if (null == p) return null;
    let E = p.items[0];
    return null == E
        ? null
        : ((0, tu.T)(E)
              ? ((n = e7.R.AVATAR_DECORATION),
                (t = (0, r.jsx)(ny.i, { item: E, user: s, isHighlighted: f, avatarSize: te._3.SIZE_96 })))
              : (0, ne.F)(E) &&
                ((n = e7.R.NAMEPLATE),
                (t = (0, r.jsx)(nC.A, { nameplate: E, user: s, isHighlighted: f, size: "small" }))),
          (0, r.jsx)(ng.vN, {
              children: (0, r.jsxs)(nA.s, {
                  ref: d,
                  "aria-label": p.name ?? "",
                  onClick: () => {
                      null == i || null == o || a || o(i);
                  },
                  className: eA()(nN._x, { [nN.Vp]: !a, [nN.mr]: f, [nN.md]: l === i }),
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
                                            (0, r.jsx)("div", { className: eA()(nN.i1, { [nN.Sf]: a }), children: t }),
                                            a &&
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
                              (0, r.jsx)(tn.D, { variant: "heading-md/extrabold", children: p.name }),
                              (0, r.jsx)(tt.E, {
                                  variant: "text-sm/normal",
                                  children: a ? Z.intl.string(Z.t["6cfuDj"]) : Z.intl.string(Z.t.QQsaCc),
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
            onBackClick: s,
            showBackButton: a,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: c = !1,
        } = e,
        { paymentSources: d } = (0, tz.jm)(),
        _ = (0, tq.A)(),
        { isGift: h, claimableRewards: f } = (0, eM.Pv)();
    i = i ?? d;
    let {
            variant: p,
            text: E,
            onClick: g,
            disabled: A,
        } = nD({
            onStepChange: t,
            selectedPlanId: (n = n ?? _?.id),
            isGift: h,
            claimableRewards: f,
            paymentSources: i,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: c,
        }),
        I = m.useMemo(
            () =>
                null != n && o.includes(n)
                    ? [{ variant: p, text: E, onClick: g, disabled: A }]
                    : [{ variant: "primary", text: Z.intl.string(Z.t.XqMe3N), disabled: !0 }],
            [p, E, g, A, n, o],
        );
    return (0, r.jsx)(nR.H, { leading: a && null != s ? (0, r.jsx)(nO.A, { onClick: s }) : void 0, actions: I });
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
            isNextDisabled: u = !1,
        } = e,
        c = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        d = (0, tq.A)(),
        _ = (0, D.bB)(),
        { hasEntitlements: h } = (0, nh.X)(n, i),
        f = (null != c && null != c.paymentSourceId) || Object.keys(s).length > 0 || (h && !o);
    var p = a ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.XqMe3N),
        E = l.pn.ADD_PAYMENT_STEPS;
    return (
        f && (E = l.pn.REVIEW),
        (0, tQ.px)(d, i, r) && _ !== l.pn.SELECT_FREE_SKU && (E = l.pn.SELECT_FREE_SKU),
        { variant: "primary", text: p, onClick: () => t(E), disabled: u }
    );
};
var nL = n(328232);
function nw(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        i = (0, tq.A)(),
        s = (0, D.bB)(),
        { setSelectedGiftingPromotionReward: a, selectedGiftingPromotionReward: o, claimableRewards: u } = (0, eM.Pv)(),
        c = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
        d = (0, g.yK)([tJ.A], () => tJ.A.getGiftPromotionRewardSkuIds()),
        _ = (function (e, t) {
            if (null != e && 0 !== e.length) return null != t && e.includes(t) ? t : e[0];
        })(u, o),
        [h, f] = m.useState(_),
        [p, E] = m.useState(!1);
    m.useEffect(() => {
        p || null != o || null == _ || (a(_), f(_));
    }, [_, p, o, a]);
    let A = { selectedPlan: i, selectedSkuId: n, step: s };
    if (null == i) throw new t$.v({ message: "Expected plan to be selected", extraSentryInformation: A });
    if (null == n) throw new t$.v({ message: "Expected selectedSkuId", extraSentryInformation: A });
    if (null == s) throw new t$.v({ message: "Step should be set", extraSentryInformation: A });
    let I = m.useMemo(() => null != h && (u ?? []).includes(h), [h, u]),
        T = m.useMemo(() => 0 === d.length || null == h || !I, [d, h, I]);
    m.useEffect(() => {
        if (0 === d.length) {
            f(void 0), a(void 0);
            return;
        }
        (null != h && I && d.includes(h)) || null == h || (f(void 0), a(void 0));
    }, [d, I, h, a]);
    let S = (e) => {
            a(e), f(e), E(!0);
        },
        y = d.map((e) =>
            (0, r.jsx)(
                nv,
                { skuId: e, claimed: null != u && !u.includes(e), user: c, onSelect: S, selectedSkuId: h },
                e,
            ),
        ),
        C = (0, r.jsx)(e0.UX, {
            children: (0, r.jsx)(nb, {
                onStepChange: t,
                onBackClick: () => t(l.pn.PLAN_SELECT),
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
    let s = (0, m.useRef)(!1),
        a = { componentName: e, sentryErrorOptions: r, stateToCapture: i },
        o = (0, m.useRef)(a);
    (0, m.useEffect)(() => {
        o.current = a;
    }),
        (0, m.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: r } = o.current;
            if (t && !s.current) {
                s.current = !0;
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
    let { handleStepChange: t, initialPlanId: n, planGroup: i, subscriptionTier: s, trialId: a, handleClose: o } = e,
        {
            selectedSkuId: u,
            priceOptions: c,
            activeSubscription: d,
            defaultPlanId: _,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        { isPremium: h, isEligibleForTrial: f, isEligibleForDiscount: p, discountOffer: E } = (0, nG.i)(),
        g = (0, n$.YJ)(E),
        I = (0, tq.A)(),
        T = (0, D.bB)(),
        { isGift: S, giftRecipient: y, giftMessage: C, claimableRewards: N } = (0, eM.Pv)(),
        R = (0, tQ.Mq)(I),
        O = (0, ej.bG)([tJ.A], () => {
            let e = tJ.A.getMarketingComponentByType(tW.C.GIFT_CUSTOMIZATION_BANNER);
            return null != e && "giftCustomizationBanner" === e.properties.properties.oneofKind;
        }),
        b = S && R && null != N && N.length > 0 && O,
        L = (f || p) ?? !1,
        { monthlyDefaultSelected: w } = nB.A.useConfig({
            location: `PremiumPaymentPlanSelectStep${S ? "" : " - DO NOT USE"}`,
        }),
        M = (0, A.A)(w),
        P = m.useMemo(() => {
            let e = _;
            return S && M && null != u && (e = e1.En[u]), (0, to.Tm)({ skuId: u, isPremium: h, defaultPlanId: e });
        }, [u, h, _, S, M]),
        x = p && null != g && P.includes(g) ? g : P[0],
        k = (0, ej.bG)([np.A], () => np.A.get(x)),
        U = [{ planId: k?.id, quantity: 1 }],
        [G, F] = m.useState(L),
        [V, B] = (0, nV.YV)({
            items: U,
            renewal: !1,
            preventFetch: !L,
            applyEntitlements: !0,
            trialId: a,
            paymentSourceId: c.paymentSourceId,
            currency: c.currency,
        });
    m.useEffect(() => {
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
        W = H && null == d && V?.subscriptionPeriodEnd == null;
    (0, nF.W)({ priceOptions: c, trialId: a, discountInvoicePreview: V });
    let K = m.useMemo(
        () => ({
            planOptions: P,
            selectedPlanId: I?.id,
            planGroup: i,
            subscriptionPeriodEnd: V?.subscriptionPeriodEnd,
            useCompactGiftComponents: b,
            handleClose: o,
        }),
        [P, I?.id, i, V?.subscriptionPeriodEnd, b, o],
    );
    if (W) return (0, r.jsx)(nU.E, { className: n3.QW });
    ed()(null != T, "Step should be set"), ed()(P.length > 0, "Premium plan options should be set");
    let $ = S
        ? (0, r.jsx)(nz.$p, { ...K })
        : (0, r.jsx)(nX.X, { ...K, isInPlanSelectStep: !0, showPlanStatusSubText: !0 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n1, { giftMessage: C }),
            !(S && (0, t2.Ik)(y)) && (0, r.jsx)(nZ.A, { isEligibleForTrial: f }),
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
                        onBackClick: () => t(l.pn.SKU_SELECT),
                        showBackButton: null == n && null == s,
                        planOptions: P,
                        shouldRenderUpdatedPaymentModal: H,
                        isTrial: f,
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
            startedPaymentFlowWithPaymentSources: u,
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
                    startedPaymentFlowWithPaymentSources: u,
                    defaultPlanId: c,
                } = e;
                i(n);
                let d = l.pn.PLAN_SELECT,
                    _ = (0, to.aZ)(t);
                (_ !== e1.pe.TIER_1 && _ !== e1.pe.TIER_2) || n !== e1.pe.TIER_0 || s || (d = l.pn.WHAT_YOU_LOSE);
                let h = (function (e) {
                        let { userTrialOffer: t, isGift: n, skuId: i } = e;
                        return !n && null != t && null != i && e1.TP[t.trial_id].skus.includes(i);
                    })({ userTrialOffer: a, isGift: s, skuId: n }),
                    f = (0, nM.vT)({
                        isTrial: h,
                        isGift: s,
                        selectedSkuId: n,
                        startedPaymentFlowWithPaymentSources: u,
                    });
                d !== l.pn.WHAT_YOU_LOSE && f && ((d = l.pn.REVIEW), o((0, nM.xT)(n, t, c))),
                    r(d, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: a,
                newSkuId: e,
                setSelectedSkuId: n,
                handleStepChange: t,
                isGift: _,
                userTrialOffer: p,
                startedPaymentFlowWithPaymentSources: u,
                setSelectedPlanId: i,
                defaultPlanId: o,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: i, setSelectedSkuId: r } = e;
                r((0, to.mH)(e1.pe.TIER_2)),
                    t(e1.gD.PREMIUM_GROUP_MONTH),
                    n(i ? l.pn.REVIEW : l.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: e1.pe.TIER_2 } });
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
        { isGift: u } = (0, eM.Pv)(),
        c = null != a ? (0, to.EL)(a) : null,
        d = null != c ? (0, to.RH)(c.planId) : null,
        _ = null != c ? (0, to.m6)(c.planId) : null,
        h = (0, nM.vT)({ isTrial: !1, isGift: u, selectedSkuId: i, startedPaymentFlowWithPaymentSources: o });
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
                            h ? (s((0, nM.xT)(i, a)), t(l.pn.REVIEW)) : t(l.pn.PLAN_SELECT);
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
            key: l.pn.SKU_SELECT,
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
            key: l.pn.WHAT_YOU_LOSE,
            renderStep: (e) => (0, r.jsx)(is, { ...e }),
            options: { modalSizeGetter: () => "md", renderHeader: !1, hideSlider: !0 },
        },
        {
            key: l.pn.PLAN_SELECT,
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
            key: l.pn.SELECT_FREE_SKU,
            renderStep: (e) => (0, r.jsx)(nw, { ...e }),
            options: { modalSizeGetter: () => "lg", hideDefaultModalBody: !0 },
        },
    ],
    io = {
        CHECKOUT_FLOW: S.C.PREMIUM_CHECKOUT,
        STEPS_BEFORE_CHECKOUT: ia,
        CHECKOUT_STEPS: { [l.pn.REVIEW]: tY.E },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: {
                            confirmationFooter: t,
                            defaultPlanId: n,
                            referralCode: i,
                            referralTrialOfferId: s,
                            subscriptionTier: a,
                            subscription: o,
                        },
                        stepConfigs: u,
                        loadId: c,
                        giftContextProps: d = { isGift: !1, giftRecipient: null },
                        renderModalProps: _,
                        children: h,
                    } = e,
                    f = (0, g.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
                    p = (0, nc.cg)() ? e1.gD.PREMIUM_MONTH_TIER_2 : void 0,
                    { isGift: E, giftRecipient: A } = d;
                if (null != a && !Object.values(e1.pe).includes(a))
                    throw Error("subscriptionTier must be a premium subscription");
                let I = (0, nf.tA)({ giftRecipient: A, isGift: E ?? !1 }),
                    T = m.useMemo(
                        () =>
                            I
                                ? u.map((e) =>
                                      e.key === l.pn.SKU_SELECT && null != e.options
                                          ? { ...e, options: { ...e.options, modalSizeGetter: () => "xl" } }
                                          : e,
                                  )
                                : u,
                        [u, I],
                    ),
                    C = null != o ? o : f,
                    N = !E && null != C && C.isPurchasedExternally && null != C.paymentGateway;
                (0, nh.s)(C, () => _.onClose(), E ?? !1);
                let v = m.useMemo(() => [...e1.oz], []);
                return N
                    ? null
                    : (0, r.jsx)(y.M, {
                          loadId: c,
                          activeSubscription: C,
                          stepConfigs: T,
                          skuIDs: v,
                          isGift: E,
                          defaultPlanId: p ?? n,
                          referralCode: i,
                          referralTrialOfferId: s,
                          unifiedCheckoutFlow: S.C.PREMIUM_CHECKOUT,
                          children: (0, r.jsx)(tH.Qt, { confirmationFooter: t, children: h }),
                      });
            },
            TenantPaymentModalRenderer: (e) => {
                let {
                        originalPaymentModalProps: t,
                        renderPaymentModal: n,
                        tenantParams: { subscriptionTier: i },
                    } = e,
                    { onClose: s, renderPurchaseConfirmation: a, continueSessionToInitialStep: o } = t;
                m.useEffect(() => {
                    np.A.isLoadedForPremiumSKUs() || ex.h.wait(() => (0, nu.zS)());
                }, []);
                let { selectedSkuId: u, purchaseState: c } = (0, v.t4)((e) => ({
                        selectedSkuId: e.selectedSkuId,
                        purchaseState: e.purchaseState,
                    })),
                    d = (0, D.bB)(),
                    {
                        isGift: _,
                        selectedGiftingPromotionReward: h,
                        openGiftingBadgePostPurchaseModal: f,
                    } = (0, eM.Pv)(),
                    p = m.useCallback(
                        (e, t) => {
                            s(e, t), e && _ && null == h && f();
                        },
                        [s, _, h, f],
                    ),
                    E = !_ && u === e1.pe.TIER_2 && !nd.Ct && !nd.KY && null == (0, n_.uM)(),
                    g = c === b.h.PURCHASING;
                return (0, r.jsx)(nE.A, {
                    isConfirmationStep: d === l.pn.CONFIRM && null == o && null == a,
                    isEligibleForWowMoment: E,
                    shouldPrefetchWowMoment: g,
                    children: n({
                        ...t,
                        onClose: p,
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
        [s, a] = m.useState(null),
        o = m.useMemo(
            () => ({
                guildId: t,
                showBenefitsFirst: n,
                subscriptionMetadataRequest: s,
                setSubscriptionMetadataRequest: a,
            }),
            [t, n, s],
        );
    return (0, r.jsx)(id.Provider, { value: o, children: i });
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
        { subscriptionMetadataRequest: s } = i_(),
        { application: a } = (0, eY.V)(),
        o = (0, eK.S3)(),
        u = (0, ip.A)(iy.Y),
        c = (0, g.bG)([w.A], () => w.A.getGuild(s?.guild_id)),
        d = m.useCallback(() => t(l.pn.REVIEW), [t]);
    if (null == o) return null;
    let _ = (0, im.bg)(o.flags);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e0.dZ, {
                children: u
                    ? (0, r.jsx)(iI, {
                          confirmCta: Z.intl.string(Z.t.PBHFSq),
                          onConfirm: d,
                          onCancel: n,
                          title: Z.intl.format(Z.t["6n6oXA"], { tier: o.name }),
                          subtitle: _
                              ? Z.intl.string(Z.t.lzAoKB)
                              : Z.intl.formatToPlainString(Z.t["GqaY/j"], { guildName: c?.name }),
                          showOpenDiscord: !1,
                      })
                    : (0, r.jsx)(iu.Uf, {
                          icon: i?.thumbnail,
                          storeListingBenefits: i?.benefits,
                          application: a ?? void 0,
                          title: Z.intl.format(Z.t.haiCxc, { tier: o.name }),
                          subtitle: _ ? Z.intl.string(Z.t.RvtbP5) : Z.intl.string(Z.t.zY39Zu),
                          description: _
                              ? Z.intl.formatToPlainString(Z.t.QCe4rY, { applicationName: a?.name })
                              : Z.intl.string(Z.t.n1Pu8C),
                      }),
            }),
            !u &&
                (0, r.jsx)(e0.UX, {
                    children: (0, r.jsx)(iS.Ay, {
                        onBack: n,
                        backText: Z.intl.string(Z.t.TQBY1J),
                        onPrimary: d,
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
        { handleClose: i, onSubscriptionConfirmation: s } = e,
        a = (0, iE.K)(),
        { application: o } = (0, eY.V)(),
        { readySlideId: u, updatedSubscription: c } = (0, v.t4)((e) => ({
            readySlideId: e.readySlideId,
            updatedSubscription: e.updatedSubscription,
        })),
        d = (0, eK.S3)(),
        _ = (0, ip.A)(iy.Y),
        { createMultipleConfettiAt: h } = m.useContext(iN.x),
        f = d?.name ?? "",
        p = () => {
            i(), s?.();
        },
        E = u === l.pn.CONFIRM,
        g = (0, im.bg)(d?.flags ?? 0),
        A =
            null != a && a.benefits.length > 0
                ? Z.intl.formatToPlainString(Z.t["+IQQVM"], { benefitCount: a.benefits.length })
                : null,
        { showBenefitsFirst: I } = i_();
    return (
        I
            ? (t = _
                  ? (0, r.jsx)(iT, { tierName: f, onConfirm: p, subscription: c })
                  : (0, r.jsx)(iu.XG, { tierName: f, onConfirm: p, subscription: c }))
            : _
              ? (t = (0, r.jsx)(iI, {
                    title: Z.intl.format(Z.t.ea6tZr, { tierName: f }),
                    subtitle:
                        null != a && a.benefits.length > 0
                            ? Z.intl.formatToPlainString(Z.t.HNepft, { benefits: A })
                            : null,
                    onConfirm: p,
                    confirmCta: Z.intl.string(Z.t.nlkywz),
                }))
              : ((t =
                    null != a && null != o
                        ? (0, r.jsx)(iu.Uf, {
                              icon: a.thumbnail,
                              storeListingBenefits: a.benefits,
                              application: o,
                              title: Z.intl.format(Z.t["Q+qktS"], { tier: f }),
                              subtitle: Z.intl.string(Z.t.ECKxXU),
                              description: g
                                  ? Z.intl.format(Z.t["MAtQk/"], { applicationName: o?.name })
                                  : Z.intl.format(Z.t.vHkMF4, { tier: f }),
                          })
                        : (0, r.jsx)(Y.A, {})),
                (n = (0, r.jsx)(iS.Ay, {
                    onPrimary: p,
                    primaryCTA: iS.ti.CONTINUE,
                    primaryText: Z.intl.string(Z.t["JtWl+a"]),
                }))),
        m.useEffect(() => {
            eH.Ay.useReducedMotion && E && h(window.innerWidth / 2, window.innerHeight / 2);
        }, [h, E]),
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
                setSelectedSkuId: s,
                setSelectedPlanId: a,
                priceOptions: o,
            } = (0, v.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                priceOptions: e.checkoutPriceOptions,
            })),
            {
                hasFetchedRelatedSubscriptionPlans: u,
                subscriptionPriceOptionsLoading: c,
                displayCurrency: d,
            } = (0, H.Jn)(),
            { setSubscriptionMetadataRequest: _, guildId: h, showBenefitsFirst: f } = i_(),
            p = (0, B.Hp)(),
            E = K(),
            g = (0, D.l)(),
            { isGift: A } = (0, eM.Pv)(),
            I = f ? l.pn.BENEFITS : l.pn.REVIEW,
            [T, S] = m.useState(!E || !u || c);
        return (m.useEffect(() => {
            S(!E || !u || c);
        }, [c, u, E]),
        m.useEffect(() => {
            null != h && _({ guild_id: h });
        }, [h, _]),
        m.useEffect(() => {
            a(t);
            let e = null != t ? np.A.get(t) : null;
            T ||
                p ||
                (n((t) => {
                    let n = null != e ? (0, to.y8)(e.id, !1, A, { paymentSourceId: o.paymentSourceId }) : void 0;
                    return {
                        ...t,
                        subscription_plan_id: e?.id,
                        price: n?.amount,
                        regular_price: e?.price,
                        currency: d,
                    };
                }),
                null != e && (s(e?.skuId), g(I)));
        }, [p, t, A, T, o, d, i, n, a, s, g, I]),
        T)
            ? (0, r.jsx)(Y.A, {})
            : p
              ? (0, r.jsx)(j.oO, {})
              : null;
    },
    CustomHeaderComponent: (e) => {
        let { step: t, onClose: n } = e,
            i = m.useCallback(() => n(!1), [n]);
        return (0, r.jsx)(iu.fs, { step: t, onClose: i });
    },
    STEPS_BEFORE_CHECKOUT: [
        {
            key: l.pn.BENEFITS,
            renderStep: (e) => (0, r.jsx)(iC, { ...e }),
            options: { useBreadcrumbLabel: () => Z.intl.string(Z.t["5LD2+B"]) },
        },
    ],
    CHECKOUT_STEPS: {
        [l.pn.REVIEW]: function (e) {
            let { handleStepChange: t, planGroup: n, openInvoiceId: i, analyticsData: s, analyticsLocation: a } = e,
                {
                    purchaseState: o,
                    contextMetadata: u,
                    purchaseError: c,
                    setCurrency: d,
                    activeSubscription: _,
                } = (0, v.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    contextMetadata: e.contextMetadata,
                    purchaseError: e.purchaseError,
                    setCurrency: e.setCheckoutCurrency,
                    activeSubscription: e.activeSubscription,
                })),
                { paymentSources: h } = (0, tz.jm)(),
                { dropdownCurrencies: f } = (0, H.Jn)(),
                { subscriptionMetadataRequest: p, showBenefitsFirst: E } = i_(),
                g = E ? l.pn.BENEFITS : void 0,
                A = (0, tq.A)(),
                I = (0, eK.S3)();
            if (null == A)
                throw new t$.v({
                    message: "Expected plan to be selected",
                    extraSentryInformation: { selectedPlan: A },
                });
            let T = m.useRef(null),
                [S, y] = (0, iR.A)(!1, 500),
                C = (0, e_.mx)(),
                N = (0, im.bg)(I?.flags ?? 0);
            m.useEffect(() => {
                null != c && null != T.current && T.current.scrollIntoView({ behavior: "smooth" });
            }, [c]);
            let R = m.useRef(null),
                O = m.useCallback(() => {
                    t(l.pn.ADD_PAYMENT_STEPS);
                }, [t]);
            return o === b.h.PURCHASING
                ? (0, r.jsx)(Y.A, {})
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(e0.dZ, {
                              children:
                                  null == _
                                      ? (0, r.jsx)(iD._, {
                                            selectedPlanId: A.id,
                                            planGroup: n,
                                            paymentSources: h,
                                            handlePaymentSourceAdd: O,
                                            metadata: N ? void 0 : p,
                                        })
                                      : (0, r.jsx)(iO.A, {
                                            premiumSubscription: _,
                                            paymentSources: h,
                                            handlePaymentSourceAdd: O,
                                            planId: A.id,
                                            planGroup: n,
                                            currencies: f,
                                            onCurrencyChange: (e) => d(e),
                                            hasOpenInvoice: null != i,
                                            purchaseState: o,
                                        }),
                          }),
                          (0, r.jsx)(e0.UX, {
                              children: (0, r.jsx)(ib.U, {
                                  premiumSubscription: _ ?? null,
                                  onBack: () => null != g && t(g),
                                  handleStepChange: t,
                                  postPurchaseStep: l.pn.CONFIRM,
                                  legalTermsNodeRef: R,
                                  flashLegalTerms: () => y(!0),
                                  analyticsLocation: a,
                                  baseAnalyticsData: s,
                                  flowStartTime: u.startTime,
                                  planGroup: n,
                                  openInvoiceId: i,
                                  metadata: N ? void 0 : p,
                                  backButtonEligible: !!E || void 0,
                                  invoiceError: C,
                                  disablePurchase: p?.guild_id == null && !N,
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
                s = t.onClose,
                a = t.onComplete,
                o = m.useCallback(
                    (e) => {
                        s(e),
                            e &&
                                null != r &&
                                (W.hP(),
                                (0, il.f5)(r),
                                null != a && a(),
                                null != r && (i || ic.A.getGuildId() !== r) && (0, tL.pX)(q.BVt.CHANNEL(r)));
                    },
                    [s, a, i, r],
                );
            return n({ ...t, onClose: o, forceNewPaymentModal: !0 });
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
l.pn.GIFT_CUSTOMIZATION;
let iG = {
    CHECKOUT_FLOW: el.CL.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: i } = (0, eM.Pv)(),
                s = (0, v.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                o = (0, g.bG)([iP.A], () => (null != s ? iP.A.get(s) : null), [s]),
                l = tR(),
                u = (0, g.bG)([ix.A], () => (null != s ? ix.A.getForSKU(s) : null), [s]),
                c =
                    u?.headerBackground != null && o?.applicationId != null
                        ? (0, ik.YE)(o.applicationId, u.headerBackground, 256)
                        : void 0,
                d = async (e, t) => {},
                _ = null == i || i.id === a?.id || t.length > e1.Jo,
                h = m.useMemo(() => ({ disabled: _ }), [_]);
            return (0, r.jsx)(el.Mw, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: el.XZ.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iU.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(tn.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != c && (0, r.jsx)("img", { src: c, alt: o?.name ?? "", className: iU.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: iU.P6,
                        children: [
                            (0, r.jsx)(tT, { recipients: l, selectedSkuId: s, validateSelectedGift: d }),
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
                primaryCTAButtonProps: h,
            });
        },
        [l.pn.REVIEW]: eu.p,
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
        { selectedSkuId: i, entitlementsGranted: s } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: a } = (0, eY.V)(),
        o = (0, eK.gU)(),
        { isGift: l, giftRecipient: u } = (0, eM.Pv)();
    ed()(null != i, "Expected selectedSkuId"), ed()(null != a, "Expected application");
    let c = o[i];
    ed()(null != c, "Expected sku");
    let d = s.find((e) => e.sku_id === i),
        _ = d?.metadata?.orbs_reward;
    if (
        (m.useEffect(() => {
            l || ((0, iH.j)(), t(), (0, ij.n)({ sku: c, application: a, analyticsLocations: n, orbsReward: _ }));
        }, [l, c, a, t, n, _]),
        !l)
    )
        return null;
    let h = null != _ && _ > 0;
    return (0, r.jsxs)(e0.dZ, {
        children: [
            (0, r.jsx)(eJ.A, {}),
            (0, r.jsxs)("div", {
                className: iK.EL,
                children: [
                    (0, r.jsx)(iY.e, { sku: c, shape: "square", containerClassName: iK.LC }),
                    (0, r.jsx)(tn.D, {
                        variant: "heading-xl/semibold",
                        className: iK.RS,
                        children: Z.intl.string(Z.t["5glWta"]),
                    }),
                    (0, r.jsx)(tt.E, {
                        variant: "text-md/normal",
                        children: Z.intl.formatToPlainString(Z.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    h &&
                        (0, r.jsx)("div", {
                            className: iK.Is,
                            children: (0, r.jsx)(iW.A, {
                                Icon: iB.C,
                                text: Z.intl.format(Z.t["ZV+aS9"], { orbCount: _ }),
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
        s = m.useCallback(() => {
            (0, i6.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        o = m.useCallback(() => {
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
                ((0, a.closeAllModals)(),
                (0, i6.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, i]);
    return (0, r.jsx)("div", {
        className: i7.$O,
        children: (0, r.jsx)(e6.Q, {
            text: Z.intl.string(Z.t.ImioFL),
            onMouseDown: s,
            onClick: o,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let i9 = {
    CHECKOUT_FLOW: el.CL.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [l.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: i, disabled: s } = ((e) => {
                    var t;
                    let n,
                        i,
                        s,
                        { handleStepChange: a, handleClose: o } = e,
                        {
                            customGiftMessage: l = "",
                            setCustomGiftMessage: u,
                            giftRecipient: c,
                            emojiConfetti: d,
                            soundEffect: _,
                            setEmojiConfetti: h,
                            setSoundEffect: f,
                            giftingOrigin: p,
                            additionalUserIds: E,
                        } = (0, eM.Pv)(),
                        A = (0, v.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, eY.V)(),
                        T = (0, g.bG)([ta.default], () => ta.default.getCurrentUser()),
                        S =
                            ((t = T?.id),
                            (n = tR()),
                            (i = (function (e) {
                                let t = (0, g.bG)([i0.A], () => (i0.A.isConnected() ? i0.A.getChannelId() : null)),
                                    [n, i] = m.useState([]);
                                return (
                                    m.useEffect(() => {
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
                            (s = (0, g.yK)([ta.default], () => E?.map(ta.default.getUser).filter(i1.Vq) ?? [], [E])),
                            m.useMemo(
                                () =>
                                    ty().uniqWith(
                                        [...(null != c ? [c] : []), ...s, ...i, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, s, i, n],
                            )),
                        y = (0, g.bG)([iP.A], () => (null != A ? iP.A.get(A) : null), [A]),
                        { userPrice: C } = (0, iJ.CD)({ sku: y, priceSetAssignmentPurchaseType: q.lid.GIFT }),
                        N = (0, i2.fq)(y),
                        R = (0, i2.xf)(y),
                        O = async (e, t) => {},
                        b = (e) => {
                            null != f && f(null == e ? void 0 : e);
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
                                            (0, r.jsx)(iQ.A, { sound: _, onSelect: b }),
                                            (0, r.jsx)(iX.A, {
                                                setEmojiConfetti: h,
                                                emojiConfetti: null == d ? void 0 : d,
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
                                    null != c && (p === e1.vQ.USER_PROFILE_WISHLIST || p === e1.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(tD.Z, { giftRecipient: c })
                                        : (0, r.jsx)(tT, { selectedSkuId: A, validateSelectedGift: O, recipients: S }),
                                    (0, r.jsx)(tO.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: l,
                                        currentText: l,
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
                                    null != y && (0, r.jsx)(i8, { handleClose: o, sku: y, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: i7.Du, children: [D(), L()] }),
                        getLeftColumnComponent: D,
                        getRightColumnComponent: L,
                        onStepChange: a,
                        onBackClick: o,
                        disabled: null == c || c.id === T?.id || l.length > e1.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = m.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(el.Mw, {
                paymentModalStepProps: e,
                layout: el.XZ.CUSTOM_STEP_BODY,
                renderStepBody: i,
                primaryCTAButtonProps: a,
            });
        },
        [l.pn.REVIEW]: eu.p,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(i$, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: i, applicationId: s, isGift: a, skuId: o, ...l } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        i = (0, iF.h)(t);
                    m.useEffect(() => {
                        null == i ||
                            null == n ||
                            ix.A.isFetchingForSKU(n) ||
                            null != iP.A.get(n) ||
                            (0, iV.Pp)(i.id, n);
                    }, [i, n]);
                })({ applicationId: s, skuId: o }),
                (0, r.jsx)(y.M, {
                    loadId: i,
                    discoverySessionId: n,
                    applicationId: s,
                    skuIDs: [o],
                    purchaseType: tP.VV.ONE_TIME,
                    isGift: a,
                    ...l,
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
                .with(l.pn.GIFT_CUSTOMIZATION, () => Z.intl.string(Z.t["JCFN/y"]))
                .with(l.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => Z.intl.string(Z.t.lDbi6H))
                .with(l.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(eD.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var re = n(818824),
    rt = n(944355),
    rn = n(977445),
    ri = n(211287),
    rr = n(623373),
    rs = n(739508),
    ra = n(715054);
(0, s.A)();
var ro = n(136857),
    rl = n(158317),
    ru = n(855104);
n(322076);
var rc =
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
    rd = n(289873),
    r_ = n(241989),
    rh = n(576052),
    rf = n(120992),
    rp = n(194256),
    rE = n(319820),
    rm = n(327105),
    rg = n(200766);
let rA = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: i, isSocialLayerGameItem: s } = (0, rE.AO)({ sku: t }),
            a = (0, rp.oO)(i);
        s ? (a = Z.intl.string(rm.default.qwSlCO)) : (0, rr.Ab)(i) && (a = Z.intl.string(Z.t["0TmQRG"]));
        let o = (0, rp.dL)(t),
            l = (0, eG.EZ)(t.id) ? rh.m[t.id].render({ className: rg.$ }) : (0, r.jsx)(r_.WH, { sku: t, product: i });
        return (0, r.jsx)(r_.f7, {
            label: o,
            description: a,
            graphic: l,
            price: null != n ? `${n}` : "",
            PriceIcon: iB.C,
        });
    },
    rI = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, rf.c)({ applicationId: (0, c.P)(t), skuIDs: [t] });
        let i = (0, ej.bG)([iP.A], () => iP.A.get(t), [t]);
        return null == i
            ? (0, r.jsx)(rd.y, { type: rd.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(rA, { sku: i, orbPriceAmount: n });
    },
    rT = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(rt.vW, { label: Z.intl.string(Z.t.y0WGqP), value: null != t ? `${t}` : "", Icon: iB.C });
    },
    rS = () => Z.intl.string(Z.t.wmcDyu);
function ry() {
    let { immediateDelivery: e } = (0, re.U)(),
        t = rS();
    return (0, r.jsx)(rt._P, {
        variant: { type: rt.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let rC = (0, m.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    rN = () => (0, m.useContext)(rC),
    rv = { payment_gateway: tP.kM.VIRTUAL_CURRENCY, currency: q.Yri.DISCORD_ORB },
    rR = {
        CHECKOUT_FLOW: el.CL.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [l.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        skuId: o,
                        analyticsSourceLocation: u,
                    } = rN(),
                    { primaryButtonProps: _, ...f } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                isRedeeming: s,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            } = e,
                            { enabled: _ } = ri.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: f, orderOrbPriceAmount: p } = (0, v.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: E,
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
                                        analyticsSourceLocation: s,
                                        handleStepChange: a,
                                    } = e,
                                    { analyticsLocations: o } = (0, eL.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: _,
                                        firstConstraintReasonCode: f,
                                    } = (0, v.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    p = (0, ru.gN)(),
                                    E = (0, m.useRef)(p),
                                    { emitOrbCheckoutPaymentFlowEvent: g } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: i,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: s } = (0, eY.V)(),
                                            { hasPaymentSources: a } = (0, tz.jm)(),
                                            {
                                                loadId: o,
                                                startTime: u,
                                                discoverySessionId: _,
                                            } = (0, v.t4)((e) => e.contextMetadata),
                                            f = (0, m.useMemo)(
                                                () => ({
                                                    load_id: o,
                                                    discovery_session_id: _,
                                                    application_id: (0, c.P)(t),
                                                    location: i,
                                                    location_stack: i,
                                                    sku_id: t,
                                                    activity_session_id: s,
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
                                                        checkout_design: h.r.UNIFIED,
                                                        checkout_flow: S.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [o, _, s, t, i, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, m.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === q.HAw.PAYMENT_FLOW_STARTED
                                                        ? d.default.track(q.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...f,
                                                              has_saved_payment_source: a,
                                                              payment_gateway: tP.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === q.HAw.PAYMENT_FLOW_LOADED
                                                          ? d.default.track(q.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...f,
                                                                has_saved_payment_source: a,
                                                                initial_step: l.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === q.HAw.PAYMENT_FLOW_CANCELED
                                                            ? d.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...f,
                                                                  duration_ms: n,
                                                              })
                                                            : e === q.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? d.default.track(q.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...f,
                                                                    duration_ms: n,
                                                                })
                                                              : e === q.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? d.default.track(q.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...f,
                                                                      duration_ms: n,
                                                                  })
                                                                : d.default.track(q.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...f,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [u, f, a],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: r,
                                        analyticsLocations: o,
                                        analyticsSourceLocation: s,
                                    });
                                (0, m.useEffect)(() => {
                                    null != i &&
                                        null !== E.current &&
                                        (g(q.HAw.PAYMENT_FLOW_FAILED, i), (E.current = null));
                                }, [i, g]);
                                let A = (0, m.useCallback)(() => {
                                        (E.current = p),
                                            g(q.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                _(b.h.COMPLETED), a(l.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, _, p, g, a]),
                                    I = E.current ?? p,
                                    T = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, tp.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, m.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof rl.FY && null != t)
                                                    switch (t) {
                                                        case rc.INSUFFICIENT_ORB_BALANCE:
                                                            return Z.intl.string(Z.t.keFvXM);
                                                        case rc.SKU_ALREADY_OWNED:
                                                            return Z.intl.string(Z.t.m371Mx);
                                                        case rc.BUNDLE_PARTIALLY_OWNED:
                                                            return Z.intl.string(Z.t.v9oC0p);
                                                        default:
                                                            return Z.intl.string(Z.t.fqJZ11);
                                                    }
                                                return e instanceof rl.j2
                                                    ? Z.intl.string(Z.t["2BmwgV"])
                                                    : e.code === ro.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? Z.intl.string(Z.t.keFvXM)
                                                      : e.code === ro.tG.ALREADY_PURCHASED
                                                        ? Z.intl.string(Z.t.m371Mx)
                                                        : Z.intl.string(Z.t.fqJZ11);
                                            })(i, f),
                                        [i, f],
                                    ),
                                    orbPriceAmount: T,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: A,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: i,
                                orbRedemptionError: a,
                                onRedeemVirtualCurrency: o,
                                handleStepChange: u,
                            }),
                            N = (0, g.bG)([iP.A], () => iP.A.get(t), [t]),
                            R = (0, rn.uS)(N?.applicationId),
                            {
                                disabled: O,
                                tooltipText: D,
                                text: L,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: i = !1 } = e,
                                    { disabled: r, tooltipText: s } = (0, m.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: Z.intl.string(Z.t["c/rcUu"]) }
                                                : !i && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: Z.intl.string(Z.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, i],
                                    );
                                return { disabled: r, tooltipText: s, text: rS() };
                            })({ orbBalance: I, orbPriceAmount: _ ? f : A, isInTestMode: R }),
                            w = (0, m.useMemo)(
                                () => ({ onClick: T, loading: s, text: L, disabled: O, tooltipText: D }),
                                [T, s, L, O, D],
                            ),
                            M = y ? Z.intl.format(Z.t.fsOXXO, {}) : null,
                            P = R ? Z.intl.string(Z.t.OvMyMd) : null;
                        return {
                            isStepLoading: E,
                            upperInlineNoticeProps: (0, m.useMemo)(() => {
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
                            purchaseItemContent: (0, r.jsx)(rI, { skuId: t, orbPriceAmount: _ ? p : A }),
                            paymentMethodContent: (0, r.jsx)(rT, { orbBalance: I }),
                            legalContent: (0, r.jsx)(ry, {}),
                            primaryButtonProps: w,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: o,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: i,
                        orbRedemptionError: s,
                        onRedeemVirtualCurrency: a,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(nU.T, { ...f }) }),
                        (0, r.jsx)(e0.UX, { children: (0, r.jsx)(N.lo, { primaryButtonProps: _ }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: i, children: s } = e,
                    { order: a, setOrder: o } = (0, v.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: l,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: i, onSignFailure: r, order: s } = e,
                            a = (0, g.bG)([ta.default], () => to.Ay.canUseShopDiscounts(ta.default.getCurrentUser())),
                            o = (0, g.bG)([iP.A], () => iP.A.get(t), [t]),
                            l = (0, iJ.JL)({ sku: o }),
                            { product: u } = (0, tl.q)(t),
                            c = (0, m.useMemo)(() => {
                                if (null != l) return { orbPriceAmount: l.amount };
                                if (null != u) {
                                    let e = (0, rr.CW)({ product: u, hasShopDiscount: a });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [l, u, a]);
                        c?.orbPriceAmount == null &&
                            (0, rs.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: _,
                                error: h,
                            } = (0, ra.Q)({ skuId: t, loadId: n, order: s, onSignFailure: r }),
                            f = (0, m.useCallback)(
                                (e) => {
                                    d(t, n, (n) => {
                                        i?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, d, i],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: c,
                            onRedeemVirtualCurrency: f,
                            isRedeeming: _,
                            orbRedemptionError: h,
                        };
                    })({ skuId: t, loadId: n, order: a, onSignFailure: o }),
                    _ = (0, m.useMemo)(
                        () => ({
                            orbProductContext: l,
                            isRedeeming: u,
                            orbRedemptionError: c,
                            onRedeemVirtualCurrency: d,
                            skuId: t,
                            analyticsSourceLocation: i,
                        }),
                        [l, u, c, d, t, i],
                    );
                return (0, r.jsx)(rC.Provider, { value: _, children: s });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: i } = rN(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, m.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: i, overrideAnalyticParams: rv });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: rv,
        },
    },
    rO = {
        [_.C.ORB_CHECKOUT]: {
            flowType: _.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: rR,
        },
        [_.C.COLLECTIBLES_CHECKOUT]: {
            flowType: _.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tV,
        },
        [_.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: i9,
        },
        [_.C.PREMIUM_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: io,
        },
        [_.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: _.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [_.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: iG,
        },
        [_.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: iL,
        },
        [_.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: q.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: eb,
            flowType: _.C.GUILD_PRODUCT_CHECKOUT,
        },
        [_.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: nl,
            purchaseType: q.VVm.SUBSCRIPTION,
        },
        [_.C.GUILD_BOOST_CHECKOUT]: {
            implemented: !0,
            flowType: _.C.GUILD_BOOST_CHECKOUT,
            purchaseType: q.VVm.SUBSCRIPTION,
            TENANT_CHECKOUT_FLOW_CONFIG: eo,
        },
    };
var rb = n(735305),
    rD = n(295405);
let rL = (e) => {
        let { returnStep: t = l.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: i } = e,
            { purchaseType: s } = (0, v.t4)((e) => ({ purchaseType: e.purchaseType })),
            a = m.useCallback(
                () =>
                    ((e) => {
                        let {
                            paymentModalStepProps: t,
                            returnStep: n = l.pn.REVIEW,
                            returnStepIfNoPaymentSources: i,
                            purchaseType: r,
                        } = e;
                        if (0 === Object.keys(rD.A.paymentSources).length) {
                            if (null != i) return void t.handleStepChange(i);
                            r === tP.VV.SUBSCRIPTION
                                ? t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS })
                                : t.handleClose();
                        } else t.handleStepChange(n, { trackedFromStep: l.pn.ADD_PAYMENT_STEPS });
                    })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: i, purchaseType: s }),
                [t, n, i, s],
            );
        return (0, r.jsx)(rb.x, { ...i, onReturn: a });
    },
    rw = (e) => {
        let { initialPlanId: t } = e,
            n = (0, v.t4)((e) => e.selectedSkuId),
            i = (0, tq.A)(),
            { isGift: s, claimableRewards: a } = (0, eM.Pv)(),
            o = n8({ isGift: s, skuId: n }),
            u = (0, nM.lp)(o),
            c = (0, tQ.px)(i, s, a),
            d = m.useMemo(() => {
                let e = null == t ? l.pn.PLAN_SELECT : l.pn.REVIEW;
                return u && (e = l.pn.REVIEW), c && (e = l.pn.SELECT_FREE_SKU), e;
            }, [u, c, t]);
        return (0, r.jsx)(rL, { paymentModalStepProps: e, returnStep: l.pn.REVIEW, returnStepIfNoPaymentSources: d });
    },
    rM = (e) => {
        let {
            checkoutFlow: t,
            returnStep: n = l.pn.REVIEW,
            returnStepIfNoPaymentSources: i,
            paymentModalStepProps: s,
        } = e;
        return t === _.C.PREMIUM_CHECKOUT
            ? (0, r.jsx)(rw, { ...s })
            : (0, r.jsx)(rL, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: i });
    };
var rP = n(339048),
    rx = n(469778),
    rk = n(315949),
    rU = n(599062);
function rG() {
    let { refreshCategories: e } = (0, rk.A)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eD.rQ, { title: Z.intl.string(Z.t["p8+qtU"]) }),
            (0, r.jsx)(V.c, { children: (0, r.jsx)(rU.h, { onRetry: e, errorOrigin: rU.A.GIFT_MODAL }) }),
        ],
    });
}
function rF(e) {
    let { handleStepChange: t } = e,
        n = (0, v.t4)((e) => e.selectedSkuId),
        { paymentSources: i, hasFetchedPaymentSources: s } = (0, tz.jm)(),
        { application: a } = (0, eY.V)(),
        o = (0, B.Hp)(),
        u = (0, eK.gU)(),
        c = (0, eK.Hu)(),
        { isGift: d } = (0, eM.Pv)(),
        [_, h] = m.useState(!0),
        [f, p] = (0, ej.yK)([e$.A], () => [e$.A.isFetchingCategories, e$.A.error]);
    return (m.useEffect(() => {
        let e = null != a;
        c && s && e && h(f);
    }, [c, s, a, f]),
    m.useEffect(() => {
        if (_ || o || null == n) return;
        let e = u[n];
        d &&
        (e?.productLine === q.EZt.COLLECTIBLES ||
            e?.productLine === q.EZt.APPLICATION ||
            e?.productLine === q.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(l.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(i).length
              ? t(l.pn.ADD_PAYMENT_STEPS)
              : t(l.pn.REVIEW);
    }, [_, o, t, i, d, u, n]),
    _)
        ? (0, r.jsx)(Y.A, {})
        : o
          ? (0, r.jsx)(j.oO, {})
          : null != p
            ? (0, r.jsx)(rG, {})
            : null;
}
function rV(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: i, continueSessionToInitialStep: s } = e,
        { hasPaymentSources: a } = (0, tz.jm)(),
        {
            selectedSkuId: o,
            setSelectedPlanId: u,
            activeSubscription: c,
            defaultPlanId: d,
            startedPaymentFlowWithPaymentSources: _,
        } = (0, v.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        h = (0, B.Hp)(),
        f = K(),
        { hasFetchedRelatedSubscriptionPlans: p, subscriptionPriceOptionsLoading: E } = (0, H.Jn)(),
        { isGift: g } = (0, eM.Pv)(),
        A = n8({ isGift: g, skuId: o }),
        I = !f || !p || E,
        T = (0, ej.bG)([rx.A], () => rx.A.applicationIdsFetched.has(e1.tv));
    return (nk(
        "Payment Modal",
        I,
        5,
        { hasFetchedSubscriptions: f, hasFetchedSubscriptionPlans: p, subscriptionPriceOptionsLoading: E },
        { tags: { app_context: "billing" } },
    ),
    m.useEffect(() => {
        if ((T || (0, rP.LM)(e1.tv), I || h)) return;
        let e = (0, nM.vT)({ isTrial: A, isGift: g, selectedSkuId: o, startedPaymentFlowWithPaymentSources: _ });
        null != s
            ? i(l.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: s })
            : null != n
              ? n !== e1.gD.PREMIUM_GROUP_MONTH || a
                  ? i(l.pn.REVIEW)
                  : i(l.pn.ADD_PAYMENT_STEPS)
              : e
                ? (u((0, nM.xT)(o, c, d)), i(l.pn.REVIEW))
                : null != t
                  ? i(l.pn.PLAN_SELECT)
                  : i(l.pn.SKU_SELECT);
    }, [s, c, h, T, n, I, i, t, o, u, A, d, g, _, a]),
    I)
        ? (0, r.jsx)(Y.A, {})
        : h
          ? (0, r.jsx)(j.oO, {})
          : null;
}
var rB = n(343834),
    rj = n(830382),
    rH = n(349288),
    rY = n(94204);
function rW(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsxs)("div", {
            className: rY.a,
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
                                    : (0, r.jsx)(rH.Anchor, { onClick: i, children: Z.intl.string(Z.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function rK() {
    let e = m.useMemo(() => [{ variant: "primary", text: Z.intl.string(Z.t.g8vPzy), disabled: !0 }], []);
    return (0, r.jsx)(nR.H, { actions: e });
}
var r$ = n(599961);
function rz() {
    let [e, t] = m.useState(!1),
        n = async () => {
            t(!0), await (0, rj.lo)();
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(nZ.A, {}),
            (0, r.jsx)(e0.dZ, { children: (0, r.jsx)(rW, { className: r$.r, isEmailResent: e, resendEmail: n }) }),
            (0, r.jsx)(e0.UX, { children: (0, r.jsx)(rK, {}) }),
        ],
    });
}
let rq = { key: null, renderStep: (e) => (0, r.jsx)(rF, { ...e }), options: { modalSizeGetter: () => "md" } },
    rZ = { key: null, renderStep: (e) => (0, r.jsx)(rV, { ...e }) },
    rX = [
        { key: l.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(rz, {}) },
        { key: l.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(rB.A, {}), options: { renderHeader: !0 } },
    ];
var rQ = n(246681);
let rJ = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            i = (0, m.useRef)(!1),
            s = (0, B.Hp)(),
            { handleStepChange: a } = t;
        return ((0, m.useEffect)(() => {
            s || i.current || (a(n), (i.current = !0));
        }, [s, a, n]),
        s)
            ? (0, r.jsx)(j.oO, {})
            : null;
    },
    r0 = {
        [_.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [_.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
        [_.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [_.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [_.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [_.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class r1 {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = rO[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = r0[e]),
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
              ? rq
              : "subscription" === t
                ? rZ
                : {
                      key: null,
                      renderStep: (e) => (0, r.jsx)(rJ, { paymentModalStepProps: e, defaultStep: l.pn.REVIEW }),
                  };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== _.C.ORB_CHECKOUT)
            return {
                key: l.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(rM, {
                        checkoutFlow: this.checkoutFlow,
                        paymentModalStepProps: e,
                        returnStep: l.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? l.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            i = this.getCheckoutStep(l.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != i)
            return {
                key: l.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(i, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => Z.intl.string(Z.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(l.pn.REVIEW);
        return {
            key: l.pn.REVIEW,
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
            u = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([s, ...(null != a ? [a] : []), ...i, o, ...(r ? [] : rX), u]);
        return null != n && c.push({ key: l.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationId(e) {
        return this.checkoutFlow === _.C.ORB_CHECKOUT && null != e
            ? (0, c.P)(e)
            : this.checkoutFlow === _.C.COLLECTIBLES_CHECKOUT
              ? q.FYj
              : this.checkoutFlow === _.C.PREMIUM_CHECKOUT
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
            eligibleForTrial: f,
        } = e;
        d.default.track(q.HAw.PAYMENT_FLOW_CANCELED, {
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
            eligible_for_trial: f,
            payment_modal_version: "v2",
            checkout_design: h.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...(this.checkoutFlow === _.C.PREMIUM_CHECKOUT ? { subscription_type: q.rzx.PREMIUM } : {}),
            ...this.override_analytic_params,
        });
    }
    renderCheckoutInstance(e) {
        let {
                additionalOptions: t,
                giftContextProps: i,
                onComplete: l,
                onClose: c,
                skuId: d,
                skuProductLine: h,
                discoverySessionId: f,
                applicationId: p,
                analyticsSourceLocation: m,
                analyticsLocations: g,
                analyticsObject: A,
                tenantParams: I,
                activeSubscription: T = null,
                ...S
            } = e,
            y = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
            C = arguments.length > 2 ? arguments[2] : void 0,
            N = { current: (this.checkoutFlow === _.C.PREMIUM_CHECKOUT ? (0, u.A)() : null) ?? (0, s.A)() },
            v = { current: null },
            { modalKey: R } = C,
            O = this.generateRenderHeader(),
            b = p ?? this.getApplicationId(d),
            D = !!(null != i && i.isGift),
            L = !1,
            w = {
                ...S,
                checkoutFlow: this.checkoutFlow,
                checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                stepConfigs: this.generateCheckoutStepConfigs({ isGift: D }),
                onComplete: (e) => {
                    null != l && l(e), (L = !0);
                },
                onClose: c,
                renderHeader: O,
                skuId: d ?? null,
                tenantParams: I ?? {},
                loadId: N.current,
                onOrderCreated: (e) => {
                    (N.current = e.id), (v.current = e);
                },
                discoverySessionId: f,
                activeSubscription: T,
                applicationId: b,
                analyticsLocations: g,
                analyticsObject: A,
                analyticsSourceLocation: m,
                giftContextProps: i,
                additionalOptions: t,
            };
        if ("modal" === y)
            return (0, a.openModalLazy)(
                async () => {
                    let { UnifiedCheckoutInstance: e } = await Promise.resolve().then(n.bind(n, 246681));
                    return (t) => (0, r.jsx)(e, { ...w, renderModalProps: t });
                },
                {
                    ...C,
                    onCloseRequest: () => {
                        null != C.onCloseRequest && C.onCloseRequest(L, N.current),
                            C.skipCloseModalOnCloseRequest || (0, a.closeModal)(R);
                    },
                    onCloseCallback: () => {
                        L ||
                            (E({ checkoutSucceeded: L, order: v.current }),
                            this.trackPaymentFlowCanceled({
                                loadId: N.current,
                                skuId: d,
                                skuProductLine: h,
                                applicationId: b,
                                discoverySessionId: f,
                                analyticsLocation: S.analyticsLocation,
                                analyticsLocations: g,
                                analyticsObject: A,
                                analyticsSourceLocation: m,
                                isGift: D,
                                eligibleForTrial: null != S.trialId,
                            })),
                            null != C.onCloseCallback && C.onCloseCallback(L),
                            null != c && c(L, d);
                    },
                    modalKey: R,
                },
            );
        {
            let e = S.paymentModalOnClose ?? c,
                t = { transitionState: o.ip.ENTERED, onClose: () => (null != e && e(!1), Promise.resolve()) };
            return (0, r.jsx)(rQ.UnifiedCheckoutInstance, { ...w, paymentModalOnClose: e, renderModalProps: t });
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
