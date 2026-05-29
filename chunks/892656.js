n.d(t, { Mw: () => nd, gf: () => nC.g, XZ: () => i.X, oE: () => nI, CL: () => i.C });
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
async function _(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === C.Re.DRAFT)
        try {
            await (0, d.Nl)(n.id);
        } catch (e) {}
}
var p = n(310829),
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
let f = h.createContext(void 0);
function x() {
    let e = h.useContext(f);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function N(e) {
    let { children: t, skuId: n, ...l } = e,
        i = (0, P.bG)([g.A], () => g.A.getGuildProduct(n));
    return (
        O()(null != i, "guildProductListing cannot be null"),
        (0, r.jsx)(f.Provider, { value: { guildProductListing: i, ...l }, children: t })
    );
}
function R(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: i } = x(),
        s = (0, S.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            O()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: i, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("24716"),
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
    L = n.n(U),
    v = n(939249),
    y = n(789645),
    M = n(935462),
    j = n(303612),
    k = n(916261),
    F = n(575650);
function D(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(v.D, {
        className: L()(k.cG, t),
        onClick: n,
        children: (0, r.jsx)(y.P, { size: "xs", color: "currentColor", className: k.yP }),
    });
}
function b(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, r.jsxs)(M.rQ, {
        className: L()(k.wx, F.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(j.A, { className: k.F0, listing: t, imageSize: 500, alt: "" }),
            (0, r.jsx)(D, { className: k.b, onClose: n }),
        ],
    });
}
var w = n(196617);
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
            { guildProductListing: l } = x();
        return n === o.pn.CONFIRM
            ? null
            : (0, r.jsx)(b, { guildProductListing: l, className: w.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(R, { ...e }) },
};
var G = n(20742),
    K = n(688810),
    B = n(937008),
    W = n(536302),
    V = n(106778),
    Y = n(228366),
    Z = n(213530),
    z = n(966971),
    X = n(758836),
    q = n(483764);
let Q = { sliderBodyClassName: q.Bz },
    J = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: i } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(V.Fk, { ref: n, className: q.Lb, environment: t.current }),
                (0, r.jsx)(Z.K, { options: l, className: L()(q.Oh, { [q.R]: !i }) }),
            ],
        });
    };
var $ = n(702841),
    ee = n(775602),
    et = n(427675),
    en = n(722847),
    el = n(590180),
    ei = n(953150),
    er = n(524246),
    es = n(14368),
    ea = n(61750),
    eo = n(972607),
    eu = n(482132),
    ec = n(921925),
    ed = n(788868),
    eC = n(375708);
function e_(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: i,
            appliedUserDiscounts: s,
        } = (0, en.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { application: a, paymentError: o, purchasePreviewError: u } = (0, W.P5)(),
        c = (0, et.gU)(),
        d = (0, $.bG)([el.A], () => el.A.getProduct(l)),
        C = h.useRef(!1);
    O()(null != l, "Expected selectedSkuId"), O()(null != a, "Expected application");
    let _ = c[l];
    O()(null != _, "Expected sku");
    let p = null != o || null != i || null != u,
        m =
            s.length > 0
                ? eC.intl.formatToPlainString(eC.t.VuV3Td, { discountOfferAmount: s[0].discount.amount })
                : void 0;
    return (h.useEffect(() => {
        null == d ||
            p ||
            C.current ||
            ((C.current = !0),
            (0, ea.A)({
                product: d,
                overrideTitle: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: X.gs.FIAT,
            }));
    }, [d, n, t, p, m]),
    p)
        ? (0, r.jsx)(eu.dZ, { children: (0, r.jsx)(ec.A, {}) })
        : null;
}
function ep(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: i,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, B.Pv)(),
        c = (0, $.bG)([ee.A], () => ee.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, en.t4)((e) => e.selectedSkuId),
        _ = (0, $.bG)([el.A], () => el.A.getProduct(C)),
        { confettiColors: p } = (0, ei.A)(_?.styles);
    return (
        h.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === ed.vQ.USER_PROFILE_WISHLIST || u === ed.vQ.DM_CHANNEL_WISHLIST) &&
                Y.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, r.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, r.jsx)(eo.A, {
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
                          (0, r.jsx)(er.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, es.rA)(_?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, r.jsx)(e_, { ...e })
    );
}
var em = n(123292),
    eE = n(859040),
    eT = n(993408),
    eI = n(575593),
    eO = n(452027),
    eA = n(922016),
    eS = n(778712),
    eh = n(834730),
    eP = n(534514),
    eg = n(986687),
    ef = n(999291),
    ex = n(903209),
    eN = n(287809),
    eR = n(428262),
    eU = n(674658),
    eL = n(898461),
    ev = n(203632),
    ey = n(892118),
    eM = n(536572),
    ej = n(14702),
    ek = n(219103),
    eF = n(525723),
    eD = n(780651);
function eb(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: i,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, B.Pv)(),
        c = (0, P.bG)([eN.default], () => eN.default.getCurrentUser()),
        d = eR.Ay.canUseShopDiscounts(c),
        C = (0, ef.Ay)(o?.id),
        _ = h.useRef(null),
        [p, m] = h.useState(!1),
        { product: E } = (0, eU.q)(t, !0),
        T = h.useMemo(() => (0, eT.fT)(E, d), [E, d]),
        I = (0, eF.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [O] = E.items,
        A = (0, eM.VG)(E),
        S = null != o && o.id !== c?.id && E.type !== eI.R.BUNDLE && O.type !== eI.R.NAMEPLATE && !a;
    return (0, r.jsxs)("div", {
        className: i,
        children: [
            (0, r.jsx)("div", {
                className: L()(eD.QU, s),
                children: (0, r.jsx)(eO.D, {
                    label: eC.intl.string(eC.t.PpoJzt),
                    children:
                        S &&
                        (0, r.jsx)(
                            eA.Y,
                            {
                                targetElementRef: _,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => m(!1),
                                preload: () => (0, ex.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, r.jsx)(eg.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eS.FT)(eS._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, eL.T)(O) ? O : null,
                                        pendingProfileEffect: (0, ev.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, ey.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, r.jsx)(v.D, {
                                        ...l,
                                        className: eD.Nx,
                                        innerRef: _,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, r.jsx)(eh.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eC.intl.string(eC.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, r.jsxs)("div", {
                className: L()(eD.i1, null != u ? eD.cN : eD.no),
                children: [
                    (0, r.jsxs)("div", {
                        className: eD.Ug,
                        children: [
                            (0, r.jsx)(ej.O, { product: E }),
                            (0, r.jsxs)("div", {
                                className: eD.JZ,
                                children: [
                                    (0, r.jsx)(eh.E, { variant: "text-md/semibold", children: A }),
                                    (0, r.jsx)(eP.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === eI.R.BUNDLE
                                                ? null
                                                : O.type === eI.R.AVATAR_DECORATION
                                                  ? eC.intl.string(eC.t["7v0T9P"])
                                                  : O.type === eI.R.NAMEPLATE
                                                    ? eC.intl.string(eC.t.x5CoXR)
                                                    : O.type === eI.R.PROFILE_EFFECT
                                                      ? eC.intl.string(eC.t.wR5wOo)
                                                      : O.type === eI.R.PROFILE_FRAME
                                                        ? eC.intl.string(eC.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(ek.x, {
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
                            className: eD.Wh,
                            children: (0, r.jsx)(eh.E, {
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
var ew = n(783878),
    eH = n(966327),
    eG = n(427262);
let eK = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: i } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, B.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: l,
              children: (0, r.jsx)(ew.Z, {
                  selectionMode: "single",
                  label: eC.intl.string(eC.t.xFn72s),
                  placeholder: eC.intl.string(eC.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = i.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: i.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eG.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(eH.A, { user: e, size: eS._3.SIZE_20 }),
                  })),
              }),
          });
};
var eB = n(735438),
    eW = n.n(eB),
    eV = n(427358),
    eY = n(570287),
    eZ = n(994500);
function ez() {
    let e = (0, P.yK)([eZ.A], () => eZ.A.getFriendIDs()),
        t = (0, P.yK)([eV.A], () =>
            eV.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: i } = e,
                        r = (0, eY.q)(i);
                    return !t && (n >= 0.1 || l >= 0.1) && r;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = h.useMemo(() => eW().uniq([...e, ...t]), [e, t]);
    return (0, P.yK)(
        [eN.default],
        () =>
            n.reduce((e, t) => {
                let n = eN.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var eX = n(871181),
    eq = n(318007),
    eQ = n(285719),
    eJ = n(976860),
    e$ = n(652215),
    e0 = n(353791);
function e1(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, K.Ay)(E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, r.jsx)(em.Q, {
        text: eC.intl.string(eC.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eE.Cz)({ analyticsLocations: l, analyticsSource: E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, eJ.pX)(`${e$.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e2 = n(818348);
let e7 = (0, h.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    e8 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, h.useContext)(e7),
            { analyticsLocations: l } = (0, K.Ay)();
        return (0, r.jsx)(ep, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e6 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => eC.intl.string(eC.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => eC.intl.string(eC.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    e3 = (e) => {
        let { step: t } = e,
            n = e6[t];
        return null == n ? null : (0, r.jsx)(G.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    e5 = {
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
                            } = (0, B.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: _ } = (0, en.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, et.gU)(),
                            E = (0, P.bG)([eN.default], () => eN.default.getCurrentUser()),
                            T = ez(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eE.JJ)(e.id, t)) || a(eC.intl.string(eC.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== ed.vQ.DM_CHANNEL_WISHLIST &&
                                    m.default.track(e$.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let O = () =>
                            (0, r.jsx)(eX.A, {
                                onTextChange: (e) => i?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e0.iX,
                                innerClassName: e0.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, r.jsx)("div", { className: e0.qL, children: (0, r.jsx)(eq.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eT.pA)({ invoicePreview: _, selectedSkuId: C, skusById: p });
                                return c === ed.vQ.USER_PROFILE_WISHLIST || c === ed.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(eQ.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eb, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e0.uW,
                                                      previewHeaderClassName: e0.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, r.jsx)("div", {
                                                  className: e0.fi,
                                                  children: (0, r.jsx)(e1, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(eK, {
                                                  selectedSkuId: C,
                                                  recipients: T,
                                                  className: e0.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, r.jsx)(eb, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e0.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === E?.id || l.length > ed.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, r.jsx)(nd, {
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
                        hideConfirmStepConfetti: _,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = h.useRef(new V.OH()),
                            [l, i] = h.useState(null),
                            [r, s] = h.useState(!1),
                            a = h.useMemo(() => (0, z.AB)({ purchaseType: X.gs.FIAT, skuId: t }), [t]);
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
                    p = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    m = (0, h.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                        }),
                        [p, d, _, o],
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
                                    i(!1), n(e), Y.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
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
                        skuIDs: p,
                        setCustomConfettiVisible: d,
                    }),
                    O = null != l ? l.onStepChange : void 0,
                    A = (0, h.useMemo)(
                        () => ({
                            skuId: E,
                            onClose: T,
                            onComplete: I,
                            applicationId: e$.FYj,
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
                        (0, r.jsx)(J, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, r.jsx)(W.PaymentContextProvider, {
                            ...s,
                            skuIDs: p,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e2.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, r.jsx)(e7.Provider, {
                                value: m,
                                children: (0, r.jsx)(nC.g, { customPaymentModalProps: A, children: i }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: E.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, B.Pv)();
            return n ? (0, r.jsx)(e3, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(e8, { ...e }), options: Q },
    };
var e4 = n(67480),
    e9 = n(328968),
    te = n(371794),
    tt = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tn = {
    CHECKOUT_FLOW: i.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, B.Pv)(),
                s = (0, en.t4)((e) => e.selectedSkuId),
                a = (0, P.bG)([eN.default], () => eN.default.getCurrentUser()),
                o = (0, P.bG)([e4.A], () => (null != s ? e4.A.get(s) : null), [s]),
                u = ez(),
                c = (0, P.bG)([e9.A], () => (null != s ? e9.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, te.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                _ = null == l || l.id === a?.id || t.length > ed.Jo,
                p = h.useMemo(() => ({ disabled: _ }), [_]);
            return (0, r.jsx)(nd, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: i.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tt.P6,
                        children: [
                            o?.name != null &&
                                (0, r.jsx)(eP.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, r.jsx)("img", { src: d, alt: o?.name ?? "", className: tt.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, r.jsxs)("div", {
                        className: tt.P6,
                        children: [
                            (0, r.jsx)(eK, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, r.jsx)(eX.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tt.iX,
                                innerClassName: tt.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: p,
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
var tl = n(429913),
    ti = n(733391),
    tr = n(821609),
    ts = n(318254),
    ta = n(262427),
    to = n(510022),
    tu = n(317560),
    tc = n(366523),
    td = n(208733);
function tC(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, K.Ay)(),
        { selectedSkuId: l, entitlementsGranted: i } = (0, en.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, W.P5)(),
        a = (0, et.gU)(),
        { isGift: o, giftRecipient: u } = (0, B.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = i.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, tu.j)(), t(), (0, to.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let _ = null != C && C > 0;
    return (0, r.jsxs)(eu.dZ, {
        children: [
            (0, r.jsx)(ec.A, {}),
            (0, r.jsxs)("div", {
                className: td.EL,
                children: [
                    (0, r.jsx)(tc.e, { sku: c, shape: "square", containerClassName: td.LC }),
                    (0, r.jsx)(eP.D, {
                        variant: "heading-xl/semibold",
                        className: td.RS,
                        children: eC.intl.string(eC.t["5glWta"]),
                    }),
                    (0, r.jsx)(eh.E, {
                        variant: "text-md/normal",
                        children: eC.intl.formatToPlainString(eC.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    _ &&
                        (0, r.jsx)("div", {
                            className: td.Is,
                            children: (0, r.jsx)(ta.J, {
                                Icon: ts.C,
                                text: eC.intl.format(eC.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: td.UD,
                        children: (0, r.jsx)(tr.$, { onClick: t, text: eC.intl.string(eC.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var t_ = n(889137),
    tp = n(742158),
    tm = n(683071),
    tE = n(313961),
    tT = n(238017),
    tI = n(650588),
    tO = n(723090),
    tA = n(763827),
    tS = n(403362),
    th = n(871123),
    tP = n(832163),
    tg = n(44724),
    tf = n(980094),
    tx = n(627363),
    tN = n(587895),
    tR = n(71393),
    tU = n(806931),
    tL = n(107610);
function tv(e) {
    let { handleClose: t, guild: n, sku: l } = e,
        i = h.useCallback(() => {
            (0, tg.X)({ guildId: n.id });
        }, [n.id]),
        s = h.useCallback(() => {
            t();
            let e = tP.A.getStorefrontState(n.id)?.activePage;
            window.location.pathname.includes(e$.BVt.CHANNELS_GAME_SHOP(n.id, e ?? 0, l.id)) ||
                ((0, a.closeAllModals)(),
                (0, tg.default)({ guildId: n.id, pageIndex: e ?? 0, skuId: l.id, slug: l.slug }));
        }, [n.id, l.id, l.slug, t]);
    return (0, r.jsx)("div", {
        className: tL.$O,
        children: (0, r.jsx)(em.Q, {
            text: eC.intl.string(eC.t.ImioFL),
            onMouseDown: i,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ty = {
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
                            setEmojiConfetti: _,
                            setSoundEffect: p,
                            giftingOrigin: m,
                            additionalUserIds: E,
                        } = (0, B.Pv)(),
                        T = (0, en.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, W.P5)(),
                        O = (0, P.bG)([eN.default], () => eN.default.getCurrentUser()),
                        A =
                            ((t = O?.id),
                            (n = ez()),
                            (l = (function (e) {
                                let t = (0, P.bG)([tA.A], () => (tA.A.isConnected() ? tA.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? tE.A.getParticipants(t) : [],
                                            i = [],
                                            r = new Set();
                                        for (let t of n)
                                            (!(0, tU.Xw)(t) && !(0, tU.Ay)(t)) ||
                                                t.user.id === e ||
                                                r.has(t.user.id) ||
                                                (r.add(t.user.id), i.push(t));
                                        i.sort((e, t) =>
                                            (0, tU.Ay)(e) && !(0, tU.Ay)(t)
                                                ? -1
                                                : (0, tU.Ay)(t) && !(0, tU.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(i.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (i = (0, P.yK)([eN.default], () => E?.map(eN.default.getUser).filter(tS.Vq) ?? [], [E])),
                            h.useMemo(
                                () =>
                                    eW().uniqWith(
                                        [...(null != c ? [c] : []), ...i, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, i, l, n],
                            )),
                        S = (0, P.bG)([e4.A], () => (null != T ? e4.A.get(T) : null), [T]),
                        { normalPrice: g, discountedPrice: f } = (0, tO.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: e$.lid.GIFT,
                        }),
                        x = (0, th.fq)(S),
                        N = (0, th.xf)(S),
                        R = (function (e) {
                            let { shouldFetchIfMissing: t } =
                                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (0, th.bF)(e),
                                l = e?.applicationId,
                                i = (0, P.bG)([tN.A], () => (null != l ? tN.A.getApplication(l) : null), [l]),
                                r = i?.guildId,
                                s = (0, P.bG)([tR.A], () => (null != r ? tR.A.getGuild(r) : null), [r]);
                            return (
                                h.useEffect(() => {
                                    n && t && null == s && null != e && tx.Ay.fetchApplication(e.applicationId, !0);
                                }, [s, e, t, n]),
                                n ? s : null
                            );
                        })(S, { shouldFetchIfMissing: !0 }),
                        U = async (e, t) => {},
                        L = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, r.jsxs)("div", {
                                className: tL.mT,
                                children: [
                                    null != x &&
                                        (0, r.jsx)(tc.A, {
                                            containerClassName: tL.T3,
                                            cardImage: x,
                                            cardBackgroundImage: N,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: tL._T,
                                        children: [
                                            (0, r.jsx)(tI.A, { sound: C, onSelect: L }),
                                            (0, r.jsx)(tT.A, {
                                                setEmojiConfetti: _,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        y = () => {
                            let e = S?.orbsReward;
                            return (0, r.jsxs)("div", {
                                className: tL.Tc,
                                children: [
                                    null != c && (m === ed.vQ.USER_PROFILE_WISHLIST || m === ed.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, r.jsx)(eQ.Z, { giftRecipient: c })
                                        : (0, r.jsx)(eK, { selectedSkuId: T, validateSelectedGift: U, recipients: A }),
                                    (0, r.jsx)(eX.A, {
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
                                                  (0, r.jsx)(tp.z, {
                                                      className: tL.jr,
                                                      children: eC.intl.string(eC.t.PpoJzt),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                      className: tL.Wx,
                                                      children: [
                                                          (0, r.jsx)("div", {
                                                              className: tL.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != x &&
                                                                  (0, r.jsx)(tc.A, {
                                                                      containerClassName: tL.Iy,
                                                                      cardImage: x,
                                                                      cardBackgroundImage: N,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className: tL.vz,
                                                              children: [
                                                                  null != I && (0, r.jsx)(tf.Q, { application: I }),
                                                                  (0, r.jsx)(eh.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, r.jsx)(eh.E, {
                                                              variant: "text-md/semibold",
                                                              children: f ?? g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, th.Ri)(S) &&
                                        (0, r.jsx)(tm.w, { type: "info", children: eC.intl.string(eC.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, r.jsx)(ta.J, {
                                            Icon: ts.C,
                                            text: eC.intl.format(eC.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != R && null != S && (0, r.jsx)(tv, { handleClose: a, sku: S, guild: R }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, r.jsxs)("div", { className: tL.Du, children: [v(), y()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: y,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > ed.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, r.jsx)(nd, {
                paymentModalStepProps: e,
                layout: i.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, r.jsx)(tC, { ...e }) },
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
                    l = (0, tl.h)(t);
                h.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        e9.A.isFetchingForSKU(n) ||
                        null != e4.A.get(n) ||
                        (0, ti.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: i, skuId: a });
            let d = o.onClose,
                C = h.useCallback(() => {
                    d();
                }, [d]),
                _ = h.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, r.jsx)(W.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: i,
                skuIDs: [a],
                purchaseType: e2.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, r.jsx)(nC.g, { customPaymentModalProps: _, children: t }),
            });
        },
        tenantAnalyticsLocation: E.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, t_.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => eC.intl.string(eC.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => eC.intl.string(eC.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, r.jsx)(G.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tM = n(717925),
    tj = n(480642),
    tk = n(944355),
    tF = n(977445),
    tD = n(908419),
    tb = n(211287),
    tw = n(623373),
    tH = n(739508),
    tG = n(715054);
(0, s.A)();
var tK = n(136857),
    tB = n(158317),
    tW = n(566980),
    tV = n(855104),
    tY = n(120700),
    tZ = n(742810),
    tz = n(426398);
n(322076);
var tX =
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
    tq = n(289873),
    tQ = n(241989),
    tJ = n(576052),
    t$ = n(120992),
    t0 = n(194256),
    t1 = n(319820),
    t2 = n(327105),
    t7 = n(200766);
let t8 = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: i } = (0, t1.AO)({ sku: t }),
            s = (0, t0.oO)(l);
        i ? (s = eC.intl.string(t2.default.qwSlCO)) : (0, tw.Ab)(l) && (s = eC.intl.string(eC.t["0TmQRG"]));
        let a = (0, t0.dL)(t),
            o = (0, X.EZ)(t.id) ? tJ.m[t.id].render({ className: t7.$ }) : (0, r.jsx)(tQ.WH, { sku: t, product: l });
        return (0, r.jsx)(tQ.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: ts.C,
        });
    },
    t6 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t$.c)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, $.bG)([e4.A], () => e4.A.get(t), [t]);
        return null == l
            ? (0, r.jsx)(tq.y, { type: tq.y.Type.PULSING_ELLIPSIS })
            : (0, r.jsx)(t8, { sku: l, orbPriceAmount: n });
    },
    t3 = (e) => {
        let { orbBalance: t } = e;
        return (0, r.jsx)(tk.vW, { label: eC.intl.string(eC.t.y0WGqP), value: null != t ? `${t}` : "", Icon: ts.C });
    },
    t5 = () => eC.intl.string(eC.t.wmcDyu);
function t4() {
    let { immediateDelivery: e } = (0, tD.U)(),
        t = t5();
    return (0, r.jsx)(tk._P, {
        variant: { type: tk.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let t9 = (0, h.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    ne = {
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
                    } = (0, h.useContext)(t9),
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
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, en.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: _,
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
                                    } = (0, en.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, tV.gN)(),
                                    _ = (0, h.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: i,
                                            } = e,
                                            { activitySessionId: r } = (0, W.P5)(),
                                            { hasPaymentSources: s } = (0, tz.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, en.t4)((e) => e.contextMetadata),
                                            d = (0, h.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: r,
                                                    payment_gateway: e2.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e$.Yri.DISCORD_ORB,
                                                    ...(null != i && { source: i }),
                                                    ...((e = (0, tZ.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tY.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: e$.frM[e$.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tZ.rS.UNIFIED : tZ.rS.LEGACY,
                                                        checkout_flow: tY.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [a, c, r, t, l, i, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e$.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(e$.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e2.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e$.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(e$.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e$.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(e$.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e$.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(e$.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e$.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(e$.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === e$.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(e$.HAw.PAYMENT_FLOW_FAILED, {
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
                                        null !== _.current &&
                                        (E(e$.HAw.PAYMENT_FLOW_FAILED, l), (_.current = null));
                                }, [l, E]);
                                let T = (0, h.useCallback)(() => {
                                        (_.current = C),
                                            E(e$.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tW.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, s]),
                                    I = _.current ?? C,
                                    O = null != i ? i.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == i,
                                    showCollectiblesDiscountWarning: (0, eF.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tB.FY && null != t)
                                                    switch (t) {
                                                        case tX.INSUFFICIENT_ORB_BALANCE:
                                                            return eC.intl.string(eC.t.keFvXM);
                                                        case tX.SKU_ALREADY_OWNED:
                                                            return eC.intl.string(eC.t.m371Mx);
                                                        default:
                                                            return eC.intl.string(eC.t.fqJZ11);
                                                    }
                                                return e.code === tK.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                    ? eC.intl.string(eC.t.keFvXM)
                                                    : e.code === tK.tG.ALREADY_PURCHASED
                                                      ? eC.intl.string(eC.t.m371Mx)
                                                      : eC.intl.string(eC.t.fqJZ11);
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
                            S = (0, P.bG)([e4.A], () => e4.A.get(t), [t]),
                            g = (0, tF.u)(S?.applicationId),
                            {
                                disabled: f,
                                tooltipText: x,
                                text: N,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: i, tooltipText: r } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: eC.intl.string(eC.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: eC.intl.string(eC.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: i, tooltipText: r, text: t5() };
                            })({ orbBalance: T, orbPriceAmount: c ? d : E, isInTestMode: g }),
                            R = (0, h.useMemo)(
                                () => ({ onClick: I, loading: i, text: N, disabled: f, tooltipText: x }),
                                [I, i, N, f, x],
                            ),
                            U = O ? eC.intl.format(eC.t.fsOXXO, {}) : null,
                            L = g ? eC.intl.string(eC.t.OvMyMd) : null;
                        return {
                            isStepLoading: _,
                            upperInlineNoticeProps: (0, h.useMemo)(() => {
                                if (null != L || null != U || null != A) {
                                    let e = [];
                                    return (
                                        null != L &&
                                            e.push({ type: "warning", message: L, key: "test-mode-warning-notice" }),
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [L, U, A]),
                            purchaseItemContent: (0, r.jsx)(t6, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, r.jsx)(t3, { orbBalance: T }),
                            legalContent: (0, r.jsx)(t4, {}),
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
                        (0, r.jsx)(eu.dZ, { children: (0, r.jsx)(tM.T, { ...d }) }),
                        (0, r.jsx)(eu.UX, { children: (0, r.jsx)(tj.lo, { primaryButtonProps: c }) }),
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
                    { order: o, setOrder: u } = (0, en.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: C,
                        onRedeemVirtualCurrency: _,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: i, order: r } = e,
                            s = (0, P.bG)([eN.default], () => eR.Ay.canUseShopDiscounts(eN.default.getCurrentUser())),
                            a = (0, P.bG)([e4.A], () => e4.A.get(t), [t]),
                            o = (0, tO.JL)({ sku: a }),
                            { product: u } = (0, eU.q)(t),
                            c = (0, h.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tw.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tH.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: _,
                            } = (0, tG.Q)({ skuId: t, loadId: n, order: r, onSignFailure: i }),
                            p = (0, h.useCallback)(
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
                            onRedeemVirtualCurrency: p,
                            isRedeeming: C,
                            orbRedemptionError: _,
                        };
                    })({ skuId: t, loadId: n, order: o, onSignFailure: u }),
                    p = ((e) => {
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
                            onRedeemVirtualCurrency: _,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [c, d, C, _, t, l],
                    );
                return (0, r.jsx)(t9.Provider, {
                    value: m,
                    children: (0, r.jsx)(nC.g, { customPaymentModalProps: p, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e2.kM.VIRTUAL_CURRENCY, currency: e$.Yri.DISCORD_ORB },
        },
    },
    nt = {
        [i.C.ORB_CHECKOUT]: {
            flowType: i.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e$.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ne,
        },
        [i.C.COLLECTIBLES_CHECKOUT]: {
            flowType: i.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e$.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: e5,
        },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: i.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e$.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ty,
        },
        [i.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_CHECKOUT },
        [i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: i.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: i.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e$.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tn,
        },
        [i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: i.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [i.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e$.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: H,
            flowType: i.C.GUILD_PRODUCT_CHECKOUT,
        },
        [i.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_ROLE_CHECKOUT },
        [i.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: i.C.GUILD_BOOST_CHECKOUT },
    };
var nn = n(735305),
    nl = n(295405);
let ni = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        i = h.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = o.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(nl.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, r.jsx)(nn.x, { ...l, onReturn: i });
};
var nr = n(545075);
let ns = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            { blockedPayments: i } = (0, W.P5)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            i || l.current || (s(n), (l.current = !0));
        }, [i, s, n]),
        i)
            ? (0, r.jsx)(nr.oO, {})
            : null;
    },
    na = {
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
class no {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nt[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = na[e]),
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
              ? { key: null, renderStep: (e) => (0, r.jsx)(ns, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, r.jsx)(u.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== i.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, r.jsx)(ni, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => eC.intl.string(eC.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, r.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => eC.intl.string(eC.t.QBnNHq) },
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
            ? (0, p.P)(e)
            : this.checkoutFlow === i.C.COLLECTIBLES_CHECKOUT
              ? e$.FYj
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
            c = (0, tZ.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(e$.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: r,
            payment_type: e$.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: i,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? tZ.rS.UNIFIED : tZ.rS.LEGACY,
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
                applicationId: p,
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
            g = p ?? this.getApplicationIdFor1PShopSKU(c),
            f = !!(null != i && i.isGift),
            x = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: f });
                return (n) =>
                    (0, r.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (x = !0);
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
                    null != t.onCloseRequest && t.onCloseRequest(x, O.current), (0, a.closeModal)(h);
                },
                onCloseCallback: () => {
                    x ||
                        (_({ checkoutSucceeded: x, order: A.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: O.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: g,
                            discoverySessionId: C,
                            analyticsLocations: E,
                            analyticsObject: T,
                            analyticsSourceLocation: m,
                            isGift: f,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(x),
                        null != u && u(x, c);
                },
                modalKey: h,
            },
        );
    }
}
n(584160);
var nu = n(981036),
    nc = n(367644);
let nd = (e) => {
    let {
            paymentModalStepProps: { handleStepChange: t },
            layout: n,
            renderStepBody: l,
            renderLeftColumn: s,
            renderRightColumn: a,
            primaryCTAButtonProps: u,
            onBackClick: c,
        } = e,
        { hasPaymentSources: d } = (0, tz.jm)(),
        C = d ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
        _ = h.useCallback(() => t(C), [t, C]),
        p = h.useMemo(
            () =>
                n === i.X.CUSTOM_STEP_BODY
                    ? l()
                    : n === i.X.TWO_COLUMN
                      ? (0, r.jsxs)("div", { className: nc.D, children: [s(), a()] })
                      : null,
            [n, l, s, a],
        ),
        m = h.useMemo(() => ({ ...u, onClick: _, text: eC.intl.string(eC.t.XiOHRX) }), [u, _]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eu.dZ, { children: p }),
            (0, r.jsx)(eu.UX, { children: (0, r.jsx)(nu.cy, { onBackClick: c, primaryCTAButtonProps: m }) }),
        ],
    });
};
var nC = n(551892);
let n_ = null,
    np = null,
    nm = null,
    nE = null,
    nT = null,
    nI = {
        [i.C.ORB_CHECKOUT]: {
            get: function () {
                return null == n_ && (n_ = new no({ checkoutFlow: i.C.ORB_CHECKOUT })), n_;
            },
        },
        [i.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == np && (np = new no({ checkoutFlow: i.C.COLLECTIBLES_CHECKOUT })), np;
            },
        },
        [i.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new no({ checkoutFlow: i.C.SLAYER_STOREFRONT_CHECKOUT })), nm;
            },
        },
        [i.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nE && (nE = new no({ checkoutFlow: i.C.PREMIUM_APPS_OTP_CHECKOUT })), nE;
            },
        },
        [i.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nT && (nT = new no({ checkoutFlow: i.C.GUILD_PRODUCT_CHECKOUT })), nT;
            },
        },
    };
