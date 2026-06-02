n.d(t, { Mw: () => np, gf: () => n_.g, XZ: () => i.X, oE: () => nA, CL: () => i.C });
var l,
    i = n(75304);
n(321073);
var r = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(166532),
    u = n(314671),
    c = n(7764),
    d = n(624210),
    C = n(26279);
async function p(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === C.Re.DRAFT)
        try {
            await (0, d.Nl)(n.id);
        } catch (e) {}
}
var _ = n(310829),
    m = n(174459),
    E = n(793574),
    T = n(862241),
    I = n(284009),
    O = n.n(I),
    A = n(964486),
    S = n(666646),
    h = n(64700),
    P = n(17928),
    g = n(871109);
let x = h.createContext(void 0);
function f() {
    let e = h.useContext(x);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function N(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, P.bG)([g.A], () => g.A.getGuildProduct(n));
    return (
        O()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(x.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function R(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = f(),
        s = (0, S.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            O()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("68826"),
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
var U = n(503698),
    v = n.n(U),
    L = n(939249),
    y = n(789645),
    M = n(935462),
    j = n(303612),
    k = n(916261),
    F = n(575650);
function D(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(L.D, {
        className: v()(k.cG, t),
        onClick: n,
        children: (0, r.jsx)(y.P, { size: "xs", color: "currentColor", className: k.yP }),
    });
}
function w(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(M.rQ, {
        className: v()(k.wx, F.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(j.A, { className: k.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(D, { className: k.b, onClose: n }),
        ],
    });
}
var b = n(196617);
let H = {
    CHECKOUT_FLOW: i.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: T._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, r.jsx)(N, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: E.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = f();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(w, { guildProductListing: l, className: b.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(R, { ...e }) },
};
var G = n(20742),
    K = n(688810),
    B = n(848149),
    W = n(937008),
    V = n(424297),
    Y = n(106778),
    Z = n(228366),
    z = n(213530),
    X = n(966971),
    q = n(758836),
    Q = n(483764);
let J = { sliderBodyClassName: Q.Bz },
    $ = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(Y.Fk, { ref: n, className: Q.Lb, environment: t.current }),
                (0, r.jsx)(z.K, { options: l, className: v()(Q.Oh, { [Q.R]: !i }) }),
            ],
        });
    };
var ee = n(702841),
    et = n(775602),
    en = n(31823),
    el = n(211083),
    ei = n(427675),
    er = n(722847),
    es = n(590180),
    ea = n(953150),
    eo = n(524246),
    eu = n(14368),
    ec = n(61750),
    ed = n(972607),
    eC = n(482132),
    ep = n(921925),
    e_ = n(788868),
    em = n(375708);
function eE(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: i,
            purchasePreviewError: s,
            appliedUserDiscounts: a,
        } = (0, er.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, el.o)(),
        { application: u } = (0, en.V)(),
        c = (0, ei.gU)(),
        d = (0, ee.bG)([es.A], () => es.A.getProduct(l)),
        C = h.useRef(!1);
    O()(null != l, "Expected selectedSkuId"), O()(null != u, "Expected application");
    let p = c[l];
    O()(null != p, "Expected sku");
    let _ = null != o || null != i || null != s,
        m =
            a.length > 0
                ? em.intl.formatToPlainString(em.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (h.useEffect(() => {
        null == d ||
            _ ||
            C.current ||
            ((C.current = !0),
            (0, ec.A)({
                product: d,
                overrideTitle: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: q.gs.FIAT,
            }));
    }, [d, n, t, _, m]),
    _)
        ? (0, r.jsx)(eC.dZ, { children: (0, r.jsx)(ep.A, {}) })
        : null;
}
function eT(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, W.Pv)(),
        c = (0, ee.bG)([et.A], () => et.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, er.t4)((e) => e.selectedSkuId),
        p = (0, ee.bG)([es.A], () => es.A.getProduct(C)),
        { confettiColors: _ } = (0, ea.A)(p?.styles);
    return (
        h.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === e_.vQ.USER_PROFILE_WISHLIST || u === e_.vQ.DM_CHANNEL_WISHLIST) &&
                Z.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(ed.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: i,
                          giftRecipient: s,
                          giftMessageError: a,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, r.jsx)(eo.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eu.rA)(p?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(eE, { ...e })
    );
}
var eI = n(123292),
    eO = n(859040),
    eA = n(993408),
    eS = n(575593),
    eh = n(452027),
    eP = n(922016),
    eg = n(778712),
    ex = n(834730),
    ef = n(534514),
    eN = n(986687),
    eR = n(999291),
    eU = n(903209),
    ev = n(287809),
    eL = n(428262),
    ey = n(674658),
    eM = n(898461),
    ej = n(203632),
    ek = n(892118),
    eF = n(536572),
    eD = n(14702),
    ew = n(219103),
    eb = n(525723),
    eH = n(780651);
function eG(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, W.Pv)(),
        c = (0, P.bG)([ev.default], () => ev.default.getCurrentUser()),
        d = eL.Ay.canUseShopDiscounts(c),
        C = (0, eR.Ay)(o?.id),
        p = h.useRef(null),
        [_, m] = h.useState(!1),
        { product: E } = (0, ey.q)(t, !0),
        T = h.useMemo(() => (0, eA.fT)(E, d), [E, d]),
        I = (0, eb.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [O] = E.items,
        A = (0, eF.VG)(E),
        S = null != o && o.id !== c?.id && E.type !== eS.R.BUNDLE && O.type !== eS.R.NAMEPLATE && !a;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: v()(eH.QU, s),
                children: (0, r.jsx)(eh.D, {
                    label: em.intl.string(em.t.PpoJzt),
                    children:
                        S &&
                        (0, r.jsx)(
                            eP.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => m(!1),
                                preload: () => (0, eU.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(eN.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eg.FT)(eg._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, eM.T)(O) ? O : null,
                                        pendingProfileEffect: (0, ej.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, ek.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(L.D, {
                                        ...l,
                                        className: eH.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(ex.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: em.intl.string(em.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: v()(eH.i1, null != u ? eH.cN : eH.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: eH.Ug,
                        children: [
                            (0, r.jsx)(eD.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: eH.JZ,
                                children: [
                                    (0, r.jsx)(ex.E, { variant: "text-md/semibold", children: A }),
                                    (0, r.jsx)(ef.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === eS.R.BUNDLE
                                                ? null
                                                : O.type === eS.R.AVATAR_DECORATION
                                                  ? em.intl.string(em.t["7v0T9P"])
                                                  : O.type === eS.R.NAMEPLATE
                                                    ? em.intl.string(em.t.x5CoXR)
                                                    : O.type === eS.R.PROFILE_EFFECT
                                                      ? em.intl.string(em.t.wR5wOo)
                                                      : O.type === eS.R.PROFILE_FRAME
                                                        ? em.intl.string(em.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ew.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: T,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, r.jsx)("div", {
                            className: eH.Wh,
                            children: (0, r.jsx)(ex.E, {
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
var eK = n(783878),
    eB = n(966327),
    eW = n(427262);
let eV = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, W.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(eK.Z, {
                  selectionMode: "single",
                  label: em.intl.string(em.t.xFn72s),
                  placeholder: em.intl.string(em.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = i.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: i.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eW.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(eB.A, { user: e, size: eg._3.SIZE_20 }),
                  })),
              }),
          });
};
var eY = n(735438),
    eZ = n.n(eY),
    ez = n(427358),
    eX = n(570287),
    eq = n(994500);
function eQ() {
    let e = (0, P.yK)([eq.A], () => eq.A.getFriendIDs()),
        t = (0, P.yK)([ez.A], () =>
            ez.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, eX.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = h.useMemo(() => eZ().uniq([...e, ...t]), [e, t]);
    return (0, P.yK)(
        [ev.default],
        () =>
            n.reduce((e, t) => {
                let n = ev.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var eJ = n(871181),
    e$ = n(318007),
    e0 = n(285719),
    e1 = n(976860),
    e2 = n(652215),
    e7 = n(353791);
function e8(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, K.Ay)(E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(eI.Q, {
        text: em.intl.string(em.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eO.Cz)({ analyticsLocations: l, analyticsSource: E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e1.pX)(`${e2.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e6 = n(818348);
let e3 = (0, h.createContext)({
    setCustomConfettiVisible: () => {},
    confettiCanvas: null,
    hideConfirmStepConfetti: !1,
    skuIDs: [],
});
function e5(e) {
    let { paymentModalProps: t, isGift: n, children: l } = e,
        i = (0, B.J)(),
        s = (0, h.useMemo)(
            () => ({
                ...t,
                onClose: (e) => {
                    t.onClose?.(e), e && n && i();
                },
            }),
            [t, n, i],
        );
    return (0, r.jsx)(n_.g, { customPaymentModalProps: s, children: l });
}
let e4 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, h.useContext)(e3),
            { analyticsLocations: l } = (0, K.Ay)();
        return (0, r.jsx)(eT, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e9 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => em.intl.string(em.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => em.intl.string(em.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    te = (e) => {
        let { step: t } = e,
            n = e9[t];
        return null == n ? null : (0, r.jsx)(G.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tt = {
        CHECKOUT_FLOW: i.C.COLLECTIBLES_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.GIFT_CUSTOMIZATION]: (e) => {
                let { handleStepChange: t, handleClose: n } = e,
                    {
                        renderLeftColumn: l,
                        renderRightColumn: s,
                        ctaDisabled: a,
                        loading: o,
                    } = ((e) => {
                        let { handleStepChange: t, handleClose: n } = e,
                            {
                                customGiftMessage: l = "",
                                setCustomGiftMessage: i,
                                giftRecipientError: s,
                                setGiftRecipientError: a,
                                validatingGiftRecipient: o,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, W.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, er.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            _ = (0, ei.gU)(),
                            E = (0, P.bG)([ev.default], () => ev.default.getCurrentUser()),
                            T = eQ(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eO.JJ)(e.id, t)) || a(em.intl.string(em.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== e_.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(e2.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let O = () =>
                            (0, r.jsx)(eJ.A, {
                                onTextChange: (e) => i?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e7.iX,
                                innerClassName: e7.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: e7.qL, children: (0, r.jsx)(e$.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eA.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
                                return c === e_.vQ.USER_PROFILE_WISHLIST || c === e_.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(e0.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eG, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e7.uW,
                                                      previewHeaderClassName: e7.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: e7.fi,
                                                  children: (0, r.jsx)(e8, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(eV, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: e7.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eG, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e7.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === E?.id || l.length > e_.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(np, {
                    paymentModalStepProps: e,
                    layout: i.X.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [o.pn.REVIEW]: T._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, renderModalProps: n, additionalOptions: l, children: i, ...s } = e,
                    {
                        environment: a,
                        confettiCanvas: o,
                        setConfettiCanvas: u,
                        customConfettiVisible: c,
                        setCustomConfettiVisible: d,
                        customConfettiDisplayOptions: C,
                        hideConfirmStepConfetti: p,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = h.useRef(new Y.OH()),
                            [l, i] = h.useState(null),
                            [r, s] = h.useState(!1),
                            a = h.useMemo(() => (0, X.AB)({ purchaseType: q.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: l,
                            setConfettiCanvas: i,
                            customConfettiVisible: r,
                            setCustomConfettiVisible: s,
                            customConfettiDisplayOptions: a,
                            hideConfirmStepConfetti: null != a,
                        };
                    })({ skuId: t }),
                    _ = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    m = (0, h.useMemo)(
                        () => ({
                            skuIDs: _,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: p,
                            confettiCanvas: o,
                        }),
                        [_, d, p, o],
                    ),
                    {
                        paymentModalSkuId: E,
                        paymentModalOnClose: T,
                        paymentModalOnComplete: I,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: i } = e,
                            r = t[0] ?? null,
                            s = h.useCallback(() => {
                                i(!0), l?.();
                            }, [l, i]);
                        return {
                            paymentModalSkuId: r,
                            paymentModalOnClose: h.useCallback(
                                (e) => {
                                    i(!1), n(e), Z.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, i],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({
                        onClose: h.useCallback(() => {
                            n.onClose();
                        }, [n]),
                        onComplete: s.onComplete,
                        skuIDs: _,
                        setCustomConfettiVisible: d,
                    }),
                    O = null != l ? l.onStepChange : void 0,
                    A = (0, h.useMemo)(
                        () => ({
                            skuId: E,
                            onClose: T,
                            onComplete: I,
                            applicationId: e2.FYj,
                            initialPlanId: null,
                            onStepChange: O,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [E, T, I, n.transitionState, n.returnRef, O],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)($, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, r.jsx)(V.PaymentContextProvider, {
                            ...s,
                            skuIDs: _,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e6.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(e3.Provider, {
                                value: m,
                                children: (0, r.jsx)(e5, { paymentModalProps: A, isGift: s.isGift, children: i }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: E.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, W.Pv)();
            return n ? (0, r.jsx)(te, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(e4, { ...e }), options: J },
    };
var tn = n(67480),
    tl = n(328968),
    ti = n(371794),
    tr = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let ts = {
    CHECKOUT_FLOW: i.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, W.Pv)(),
                s = (0, er.t4)((e) => e.selectedSkuId),
                a = (0, P.bG)([ev.default], () => ev.default.getCurrentUser()),
                o = (0, P.bG)([tn.A], () => (null != s ? tn.A.get(s) : null), [s]),
                u = eQ(),
                c = (0, P.bG)([tl.A], () => (null != s ? tl.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, ti.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === a?.id || t.length > e_.Jo,
                _ = h.useMemo(() => ({ disabled: p }), [p]);
            return (0, r.jsx)(np, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: i.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tr.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(ef.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: o?.name ?? "", className: tr.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tr.P6,
                        children: [
                            (0, r.jsx)(eV, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, r.jsx)(eJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tr.iX,
                                innerClassName: tr.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: _,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: c.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: E.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ta = n(429913),
    to = n(733391),
    tu = n(821609),
    tc = n(318254),
    td = n(262427),
    tC = n(510022),
    tp = n(317560),
    t_ = n(366523),
    tm = n(208733);
function tE(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, K.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, er.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, en.V)(),
        a = (0, ei.gU)(),
        { isGift: o, giftRecipient: u } = (0, W.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = i.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, tp.j)(), t(), (0, tC.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, r.jsxs)(eC.dZ, {
        children: [
            (0, r.jsx)(ep.A, {}),
            (0, r.jsxs)("div", {
                className: tm.EL,
                children: [
                    (0, r.jsx)(t_.e, { sku: c, shape: "square", containerClassName: tm.LC }),
                    (0, r.jsx)(ef.D, {
                        variant: "heading-xl/semibold",
                        className: tm.RS,
                        children: em.intl.string(em.t["5glWta"]),
                    }),
                    (0, r.jsx)(ex.E, {
                        variant: "text-md/normal",
                        children: em.intl.formatToPlainString(em.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, r.jsx)("div", {
                            className: tm.Is,
                            children: (0, r.jsx)(td.J, {
                                Icon: tc.C,
                                text: em.intl.format(em.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: tm.UD,
                        children: (0, r.jsx)(tu.$, { onClick: t, text: em.intl.string(em.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tT = n(889137),
    tI = n(742158),
    tO = n(683071),
    tA = n(313961),
    tS = n(238017),
    th = n(650588),
    tP = n(723090),
    tg = n(763827),
    tx = n(403362),
    tf = n(871123),
    tN = n(832163),
    tR = n(44724),
    tU = n(980094),
    tv = n(806931),
    tL = n(107610);
function ty(e) {
    let { handleClose: t, sku: n, application: l } = e,
        i = h.useCallback(() => {
            (0, tR.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = h.useCallback(() => {
            t();
            let e = tN.A.getStorefrontStateForApplicationId(n.applicationId)?.activePage;
            (0, tf.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, tR.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, r.jsx)("div", {
        className: tL.$O,
        children: (0, r.jsx)(eI.Q, {
            text: em.intl.string(em.t.ImioFL),
            onMouseDown: i,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tM = {
    CHECKOUT_FLOW: i.C.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: s } = ((e) => {
                    var t;
                    let n,
                        l,
                        i,
                        { handleStepChange: s, handleClose: a } = e,
                        {
                            customGiftMessage: o = "",
                            setCustomGiftMessage: u,
                            giftRecipient: c,
                            emojiConfetti: d,
                            soundEffect: C,
                            setEmojiConfetti: p,
                            setSoundEffect: _,
                            giftingOrigin: m,
                            additionalUserIds: E,
                        } = (0, W.Pv)(),
                        T = (0, er.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, en.V)(),
                        O = (0, P.bG)([ev.default], () => ev.default.getCurrentUser()),
                        A =
                            ((t = O?.id),
                            (n = eQ()),
                            (l = (function (e) {
                                let t = (0, P.bG)([tg.A], () => (tg.A.isConnected() ? tg.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? tA.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tv.Xw)(t) && !(0, tv.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tv.Ay)(e) && !(0, tv.Ay)(t)
                                                ? -1
                                                : (0, tv.Ay)(t) && !(0, tv.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, P.yK)([ev.default], () => E?.map(ev.default.getUser).filter(tx.Vq) ?? [], [E])),
                            h.useMemo(
                                () =>
                                    eZ().uniqWith(
                                        [...(null != c ? [c] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, i, l, n],
                            )),
                        S = (0, P.bG)([tn.A], () => (null != T ? tn.A.get(T) : null), [T]),
                        { normalPrice: g, discountedPrice: x } = (0, tP.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: e2.lid.GIFT,
                        }),
                        f = (0, tf.fq)(S),
                        N = (0, tf.xf)(S),
                        R = async (e, t) => {},
                        U = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, r.jsxs)("div", {
                                className: tL.mT,
                                children: [
                                    null != f &&
                                        (0, r.jsx)(t_.A, {
                                            containerClassName: tL.T3,
                                            cardImage: f,
                                            cardBackgroundImage: N,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: tL._T,
                                        children: [
                                            (0, r.jsx)(th.A, { sound: C, onSelect: U }),
                                            (0, r.jsx)(tS.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = S?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: tL.Tc,
                                children: [
                                    null != c && (m === e_.vQ.USER_PROFILE_WISHLIST || m === e_.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(e0.Z, { giftRecipient: c })
                                        : (0, r.jsx)(eV, { selectedSkuId: T, validateSelectedGift: R, recipients: A }),
                                    (0, r.jsx)(eJ.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tL.iX,
                                        innerClassName: tL.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: tL.AN,
                                              children: [
                                                  (0, r.jsx)(tI.z, {
                                                      className: tL.jr,
                                                      children: em.intl.string(em.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: tL.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: tL.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != f &&
                                                                  (0, r.jsx)(t_.A, {
                                                                      containerClassName: tL.Iy,
                                                                      cardImage: f,
                                                                      cardBackgroundImage: N,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: tL.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(tU.Q, { application: I }),
                                                                  (0, r.jsx)(ex.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(ex.E, {
                                                              variant: "text-md/semibold",
                                                              children: x ?? g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tf.Ri)(S) &&
                                        (0, r.jsx)(tO.w, { type: "info", children: em.intl.string(em.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(td.J, {
                                            Icon: tc.C,
                                            text: em.intl.format(em.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != S && (0, r.jsx)(ty, { handleClose: a, sku: S, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: tL.Du, children: [v(), L()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > e_.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(np, {
                paymentModalStepProps: e,
                layout: i.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tE, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesPaymentContext: !0,
        CustomTenantProvider: (e) => {
            let {
                children: t,
                discoverySessionId: n,
                loadId: l,
                applicationId: i,
                isGift: s,
                skuId: a,
                renderModalProps: o,
                analyticsSourceLocation: u,
                ...c
            } = e;
            ((e) => {
                let { applicationId: t, skuId: n } = e,
                    l = (0, ta.h)(t);
                h.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        tl.A.isFetchingForSKU(n) ||
                        null != tn.A.get(n) ||
                        (0, to.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: i, skuId: a });
            let d = o.onClose,
                C = h.useCallback(() => {
                    d();
                }, [d]),
                p = h.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, r.jsx)(V.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: i,
                skuIDs: [a],
                purchaseType: e6.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, r.jsx)(n_.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: E.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tT.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => em.intl.string(em.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => em.intl.string(em.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(G.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tj = n(717925),
    tk = n(480642),
    tF = n(944355),
    tD = n(977445),
    tw = n(908419),
    tb = n(211287),
    tH = n(623373),
    tG = n(739508),
    tK = n(715054);
(0, s.A)();
var tB = n(136857),
    tW = n(158317),
    tV = n(566980),
    tY = n(855104),
    tZ = n(120700),
    tz = n(742810),
    tX = n(426398);
n(322076);
var tq =
        (((l = {})[(l.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (l[(l.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (l[(l.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (l[(l.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (l[(l.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (l[(l.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (l[(l.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (l[(l.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (l[(l.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (l[(l.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        l),
    tQ = n(289873),
    tJ = n(241989),
    t$ = n(576052),
    t0 = n(120992),
    t1 = n(194256),
    t2 = n(319820),
    t7 = n(327105),
    t8 = n(200766);
let t6 = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, t2.AO)({ sku: t }),
            s = (0, t1.oO)(l);
        i ? (s = em.intl.string(t7.default.qwSlCO)) : (0, tH.Ab)(l) && (s = em.intl.string(em.t["0TmQRG"]));
        let a = (0, t1.dL)(t),
            o = (0, q.EZ)(t.id) ? t$.m[t.id].render({ className: t8.$ }) : (0, r.jsx)(tJ.WH, { sku: t, product: l });
        return (0, r.jsx)(tJ.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tc.C,
        });
    },
    t3 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t0.c)({ applicationId: (0, _.P)(t), skuIDs: [t] });
        let l = (0, ee.bG)([tn.A], () => tn.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(tQ.y, { type: tQ.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(t6, { sku: l, orbPriceAmount: n });
    },
    t5 = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(tF.vW, { label: em.intl.string(em.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tc.C });
    },
    t4 = () => em.intl.string(em.t.wmcDyu);
function t9() {
    let { immediateDelivery: e } = (0, tw.U)(),
        t = t4();
    return (0, r.jsx)(tF._P, {
        variant: { type: tF.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let ne = (0, h.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    nt = {
        CHECKOUT_FLOW: i.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: s,
                        skuId: a,
                        analyticsSourceLocation: u,
                    } = (0, h.useContext)(ne),
                    { primaryButtonProps: c, ...d } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: i,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: u,
                            } = e,
                            { enabled: c } = tb.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, er.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: p,
                                orbPriceAmount: E,
                                orbBalanceToDisplay: T,
                                onClickCheckout: I,
                                showCollectiblesDiscountWarning: O,
                                errorMessage: A,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: i,
                                        analyticsSourceLocation: r,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: a } = (0, K.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: c,
                                        firstConstraintReasonCode: d,
                                    } = (0, er.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, tY.gN)(),
                                    p = (0, h.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, en.V)(),
                                            { hasPaymentSources: s } = (0, tX.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, er.t4)((e) => e.contextMetadata),
                                            d = (0, h.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, _.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e2.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tz.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tZ.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: e2.frM[e2.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tz.rS.UNIFIED : tz.rS.LEGACY,
                                                        checkout_flow: tZ.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [a, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e2.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(e2.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e2.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(e2.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e2.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e2.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(e2.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e2.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(e2.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === e2.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(e2.HAw.PAYMENT_FLOW_FAILED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                      ...(null != t
                                                                          ? {
                                                                                payment_error_code: t.code,
                                                                                error_message: t.message,
                                                                            }
                                                                          : {}),
                                                                  });
                                                },
                                                [u, d, s],
                                            ),
                                        };
                                    })({
                                        skuId: t,
                                        orbProductContext: i,
                                        analyticsLocations: a,
                                        analyticsSourceLocation: r,
                                    });
                                (0, h.useEffect)(() => {
                                    null != l &&
                                        null !== p.current &&
                                        (E(e2.HAw.PAYMENT_FLOW_FAILED, l), (p.current = null));
                                }, [l, E]);
                                let T = (0, h.useCallback)(() => {
                                        (p.current = C),
                                            E(e2.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tV.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, s]),
                                    I = p.current ?? C,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eb.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tW.FY && null != t)
                                                    switch (t) {
                                                        case tq.INSUFFICIENT_ORB_BALANCE:
                                                            return em.intl.string(em.t.keFvXM);
                                                        case tq.SKU_ALREADY_OWNED:
                                                            return em.intl.string(em.t.m371Mx);
                                                        default:
                                                            return em.intl.string(em.t.fqJZ11);
                                                    }
                                                return e instanceof tW.j2
                                                    ? em.intl.string(em.t["2BmwgV"])
                                                    : e.code === tB.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? em.intl.string(em.t.keFvXM)
                                                      : e.code === tB.tG.ALREADY_PURCHASED
                                                        ? em.intl.string(em.t.m371Mx)
                                                        : em.intl.string(em.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: T,
                                    selectedSkuId: u,
                                };
                            })({
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: u,
                            }),
                            S = (0, P.bG)([tn.A], () => tn.A.get(t), [t]),
                            g = (0, tD.u)(S?.applicationId),
                            {
                                disabled: x,
                                tooltipText: f,
                                text: N,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: em.intl.string(em.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: em.intl.string(em.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: t4() };
                            })({ orbBalance: T, orbPriceAmount: c ? d : E, isInTestMode: g }),
                            R = (0, h.useMemo)(
                                () => ({ onClick: I, loading: i, text: N, disabled: x, tooltipText: f }),
                                [I, i, N, x, f],
                            ),
                            U = O ? em.intl.format(em.t.fsOXXO, {}) : null,
                            v = g ? em.intl.string(em.t.OvMyMd) : null;
                        return {
                            isStepLoading: p,
                            upperInlineNoticeProps: (0, h.useMemo)(() => {
                                if (null != v || null != U || null != A) {
                                    let e = [];
                                    return (
                                        null != v &&
                                            e.push({ type: "warning", message: v, key: "test-mode-warning-notice" }),
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [v, U, A]),
                            purchaseItemContent: (0, r.jsx)(t3, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, r.jsx)(t5, { orbBalance: T }),
                            legalContent: (0, r.jsx)(t9, {}),
                            primaryButtonProps: R,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: a,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: i,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(eC.dZ, { children: (0, r.jsx)(tj.T, { ...d }) }),
                        (0, r.jsx)(eC.UX, { children: (0, r.jsx)(tk.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesPaymentContext: !1,
            CustomTenantProvider: (e) => {
                let {
                        skuId: t,
                        loadId: n,
                        analyticsSourceLocation: l,
                        renderModalProps: i,
                        overrideAnalyticParams: s,
                        children: a,
                    } = e,
                    { order: o, setOrder: u } = (0, er.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: C,
                        onRedeemVirtualCurrency: p,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            s = (0, P.bG)([ev.default], () => eL.Ay.canUseShopDiscounts(ev.default.getCurrentUser())),
                            a = (0, P.bG)([tn.A], () => tn.A.get(t), [t]),
                            o = (0, tP.JL)({ sku: a }),
                            { product: u } = (0, ey.q)(t),
                            c = (0, h.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tH.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tG.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, tK.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            _ = (0, h.useCallback)(
                                (e) => {
                                    d(t, n, (n) => {
                                        l?.({ entitlements: n, skuId: t }), e(n);
                                    });
                                },
                                [t, n, d, l],
                            );
                        return {
                            skuId: t,
                            loadId: n,
                            orbProductContext: c,
                            onRedeemVirtualCurrency: _,
                            isRedeeming: C,
                            orbRedemptionError: p,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: u }),
                    _ = ((e) => {
                        let { orbProductContext: t, onClose: n, overrideAnalyticParams: l } = e;
                        return {
                            analyticsDataOverride: (0, h.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...l,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, l]),
                            onClose: (0, h.useCallback)(async () => {
                                await n();
                            }, [n]),
                            skipConfirm: !0,
                        };
                    })({ onClose: i.onClose, orbProductContext: c, overrideAnalyticParams: s }),
                    m = (0, h.useMemo)(
                        () => ({
                            orbProductContext: c,
                            isRedeeming: d,
                            orbRedemptionError: C,
                            onRedeemVirtualCurrency: p,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [c, d, C, p, t, l],
                    );
                return (0, r.jsx)(ne.Provider, {
                    value: m,
                    children: (0, r.jsx)(n_.g, { customPaymentModalProps: _, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e6.kM.VIRTUAL_CURRENCY, currency: e2.Yri.DISCORD_ORB },
        },
    },
    nn = {
        [i.C.ORB_CHECKOUT]: {
            flowType: i.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nt,
        },
        [i.C.COLLECTIBLES_CHECKOUT]: {
            flowType: i.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tt,
        },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: i.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tM,
        },
        [i.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_CHECKOUT },
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: i.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ts,
        },
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [i.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: H,
            flowType: i.C.GUILD_PRODUCT_CHECKOUT,
        },
        [i.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_ROLE_CHECKOUT },
        [i.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_BOOST_CHECKOUT },
    };
var nl = n(735305),
    ni = n(295405);
let nr = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        i = h.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = o.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(ni.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, r.jsx)(nl.x, { ...l, onReturn: i });
};
var ns = n(86379),
    na = n(545075);
let no = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            i = (0, ns.Hp)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            i || l.current || (s(n), (l.current = !0));
        }, [i, s, n]),
        i)
            ? (0, r.jsx)(na.oO, {})
            : null;
    },
    nu = {
        [i.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [i.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [i.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [i.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [i.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
    };
class nc {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nn[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = nu[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, l) => (0, r.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? c.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, r.jsx)(no, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, r.jsx)(u.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== i.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(nr, {
                        paymentModalStepProps: e,
                        returnStep: o.pn.REVIEW,
                        returnStepIfNoPaymentSources: t && n ? o.pn.GIFT_CUSTOMIZATION : void 0,
                    }),
                options: { renderHeader: !0 },
            };
    }
    getGiftCustomizationStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls,
            l = this.getCheckoutStep(o.pn.GIFT_CUSTOMIZATION);
        if (t && n && null != l)
            return {
                key: o.pn.GIFT_CUSTOMIZATION,
                renderStep: (e) => (0, r.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => em.intl.string(em.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => em.intl.string(em.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            i = this.getPredicateStepConfig(),
            r = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            a = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([i, r, s, ...(l ? [] : c.hh), a]);
        return null != n && u.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), u;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === i.C.ORB_CHECKOUT
            ? (0, _.P)(e)
            : this.checkoutFlow === i.C.COLLECTIBLES_CHECKOUT
              ? e2.FYj
              : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
                loadId: t,
                skuId: n,
                skuProductLine: l,
                applicationId: i,
                discoverySessionId: r,
                analyticsLocations: s,
                analyticsObject: a,
                analyticsSourceLocation: o,
                isGift: u,
            } = e,
            c = (0, tz.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: e2.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tz.rS.UNIFIED : tz.rS.LEGACY,
            checkout_flow: this.checkoutFlow,
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                modalAPIOptions: t,
                additionalOptions: l,
                giftContextProps: i,
                onComplete: o,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: C,
                applicationId: _,
                analyticsSourceLocation: m,
                analyticsLocations: E,
                analyticsObject: T,
                tenantParams: I,
            } = e,
            O = { current: (0, s.A)() },
            A = { current: null },
            S = (e) => {
                (O.current = e.id), (A.current = e);
            },
            { modalKey: h } = t,
            P = this.generateRenderHeader(),
            g = _ ?? this.getApplicationIdFor1PShopSKU(c),
            x = !!(null != i && i.isGift),
            f = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: x });
                return (n) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (f = !0);
                        },
                        onClose: u,
                        renderHeader: P,
                        skuId: c,
                        tenantParams: I ?? {},
                        loadId: O.current,
                        onOrderCreated: S,
                        discoverySessionId: C,
                        applicationId: g,
                        analyticsLocations: E,
                        analyticsObject: T,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: i,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(f, O.current), (0, a.closeModal)(h);
                },
                onCloseCallback: () => {
                    f ||
                        (p({ checkoutSucceeded: f, order: A.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: O.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: g,
                            discoverySessionId: C,
                            analyticsLocations: E,
                            analyticsObject: T,
                            analyticsSourceLocation: m,
                            isGift: x,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(f),
                        null != u && u(f, c);
                },
                modalKey: h,
            },
        );
    }
}
n(584160);
var nd = n(981036),
    nC = n(367644);
let np = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: l,
            renderLeftColumn: s,
            renderRightColumn: a,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tX.jm)(),
        C = d ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
        p = h.useCallback(() => t(C), [t, C]),
        _ = h.useMemo(
            () =>
                n === i.X.CUSTOM_STEP_BODY
                    ? l()
                    : n === i.X.TWO_COLUMN
                      ? (0, r.jsxs)("div", { className: nC.D, children: [s(), a()] })
                      : null,
            [n, l, s, a],
        ),
        m = h.useMemo(() => ({ ...u, onClick: p, text: em.intl.string(em.t.XiOHRX) }), [u, p]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eC.dZ, { children: _ }),
            (0, r.jsx)(eC.UX, { children: (0, r.jsx)(nd.cy, { onBackClick: c, primaryCTAButtonProps: m }) }),
        ],
    });
};
var n_ = n(551892);
let nm = null,
    nE = null,
    nT = null,
    nI = null,
    nO = null,
    nA = {
        [i.C.ORB_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new nc({ checkoutFlow: i.C.ORB_CHECKOUT })), nm;
            },
        },
        [i.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nE && (nE = new nc({ checkoutFlow: i.C.COLLECTIBLES_CHECKOUT })), nE;
            },
        },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nT && (nT = new nc({ checkoutFlow: i.C.SLAYER_STOREFRONT_CHECKOUT })), nT;
            },
        },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nI && (nI = new nc({ checkoutFlow: i.C.PREMIUM_APPS_OTP_CHECKOUT })), nI;
            },
        },
        [i.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nO && (nO = new nc({ checkoutFlow: i.C.GUILD_PRODUCT_CHECKOUT })), nO;
            },
        },
    };
