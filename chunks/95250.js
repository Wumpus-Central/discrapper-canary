n.d(t, { vd: () => nA.v, Mw: () => nh, oE: () => nv, XZ: () => r.X, CL: () => r.C });
var l,
    r = n(75304);
n(321073);
var i = n(627968),
    s = n(835245),
    a = n(192308),
    o = n(166532),
    u = n(7764),
    c = n(624210),
    d = n(26279);
async function C(e) {
    let { checkoutSucceeded: t, order: n } = e;
    if (!t && n?.id != null && n.status === d.Re.DRAFT)
        try {
            await (0, c.Nl)(n.id);
        } catch (e) {}
}
var p = n(310829),
    _ = n(174459),
    m = n(145659),
    T = n(793574),
    E = n(862241),
    I = n(284009),
    A = n.n(I),
    O = n(964486),
    S = n(666646),
    h = n(64700),
    g = n(17928),
    N = n(871109);
let f = h.createContext(void 0);
function x() {
    let e = h.useContext(f);
    return A()(null != e, "GuildProductPurchaseContext not found"), e;
}
function P(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, g.bG)([N.A], () => N.A.getGuildProduct(n));
    return (
        A()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(f.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function R(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = x(),
        s = (0, S.sw)();
    return (
        (0, O.Ay)(() => {
            var e;
            A()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("36115"),
                        n.e("78038"),
                        n.e("47539"),
                        n.e("67837"),
                        n.e("35778"),
                        n.e("47812"),
                        n.e("13583"),
                        n.e("28090"),
                    ]).then(n.bind(n, 779457));
                    return (n) => (0, i.jsx)(t, { ...e, ...n });
                }),
                t();
        }),
        null
    );
}
var v = n(503698),
    L = n.n(v),
    U = n(939249),
    j = n(789645),
    y = n(935462),
    M = n(303612),
    k = n(916261),
    F = n(575650);
function D(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(U.D, {
        className: L()(k.cG, t),
        onClick: n,
        children: (0, i.jsx)(j.P, { size: "xs", color: "currentColor", className: k.yP }),
    });
}
function b(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(y.rQ, {
        className: L()(k.wx, F.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(M.A, { className: k.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(D, { className: k.b, onClose: n }),
        ],
    });
}
var w = n(196617);
let H = {
    CHECKOUT_FLOW: r.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: E._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(P, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = x();
        return n === o.pn.CONFIRM
            ? null
            : (0, i.jsx)(b, { guildProductListing: l, className: w.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(R, { ...e }) },
};
var G = n(20742),
    B = n(688810),
    K = n(197510),
    W = n(848149),
    V = n(937008),
    Y = n(106778),
    z = n(228366),
    Z = n(213530),
    X = n(966971),
    Q = n(758836),
    q = n(483764);
let J = { sliderBodyClassName: q.Bz },
    $ = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(Y.Fk, { ref: n, className: q.Lb, environment: t.current }),
                (0, i.jsx)(Z.K, { options: l, className: L()(q.Oh, { [q.R]: !r }) }),
            ],
        });
    };
var ee = n(702841),
    et = n(775602),
    en = n(31823),
    el = n(211083),
    er = n(427675),
    ei = n(211159),
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
function eT(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            purchasePreviewError: s,
            appliedUserDiscounts: a,
        } = (0, ei.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, el.o)(),
        { application: u } = (0, en.V)(),
        c = (0, er.gU)(),
        d = (0, ee.bG)([es.A], () => es.A.getProduct(l)),
        C = h.useRef(!1);
    A()(null != l, "Expected selectedSkuId"), A()(null != u, "Expected application");
    let p = c[l];
    A()(null != p, "Expected sku");
    let _ = null != o || null != r || null != s,
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
                purchaseType: Q.gs.FIAT,
            }));
    }, [d, n, t, _, m]),
    _)
        ? (0, i.jsx)(eC.dZ, { children: (0, i.jsx)(ep.A, {}) })
        : null;
}
function eE(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, V.Pv)(),
        c = (0, ee.bG)([et.A], () => et.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, ei.t4)((e) => e.selectedSkuId),
        p = (0, ee.bG)([es.A], () => es.A.getProduct(C)),
        { confettiColors: _ } = (0, ea.A)(p?.styles);
    return (
        h.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === e_.vQ.USER_PROFILE_WISHLIST || u === e_.vQ.DM_CHANNEL_WISHLIST) &&
                z.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(ed.A, {
                          giftCode: n,
                          onClose: e.handleClose,
                          selectedGiftStyle: l,
                          hasSentMessage: r,
                          giftRecipient: s,
                          giftMessageError: a,
                          isSendingMessage: o,
                      }),
                      !e.hideConfetti &&
                          !c &&
                          (0, i.jsx)(eo.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eu.rA)(p?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(eT, { ...e })
    );
}
var eI = n(123292),
    eA = n(859040),
    eO = n(993408),
    eS = n(575593),
    eh = n(452027),
    eg = n(922016),
    eN = n(778712),
    ef = n(834730),
    ex = n(534514),
    eP = n(986687),
    eR = n(999291),
    ev = n(903209),
    eL = n(287809),
    eU = n(428262),
    ej = n(674658),
    ey = n(898461),
    eM = n(203632),
    ek = n(892118),
    eF = n(536572),
    eD = n(14702),
    eb = n(219103),
    ew = n(525723),
    eH = n(780651);
function eG(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, V.Pv)(),
        c = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
        d = eU.Ay.canUseShopDiscounts(c),
        C = (0, eR.Ay)(o?.id),
        p = h.useRef(null),
        [_, m] = h.useState(!1),
        { product: T } = (0, ej.q)(t, !0),
        E = h.useMemo(() => (0, eO.fT)(T, d), [T, d]),
        I = (0, ew.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [A] = T.items,
        O = (0, eF.VG)(T),
        S = null != o && o.id !== c?.id && T.type !== eS.R.BUNDLE && A.type !== eS.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: L()(eH.QU, s),
                children: (0, i.jsx)(eh.D, {
                    label: em.intl.string(em.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            eg.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => m(!1),
                                preload: () => (0, ev.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eP.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eN.FT)(eN._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ey.T)(A) ? A : null,
                                        pendingProfileEffect: (0, eM.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, ek.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(U.D, {
                                        ...l,
                                        className: eH.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(ef.E, {
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
            (0, i.jsxs)("div", {
                className: L()(eH.i1, null != u ? eH.cN : eH.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eH.Ug,
                        children: [
                            (0, i.jsx)(eD.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: eH.JZ,
                                children: [
                                    (0, i.jsx)(ef.E, { variant: "text-md/semibold", children: O }),
                                    (0, i.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === eS.R.BUNDLE
                                                ? null
                                                : A.type === eS.R.AVATAR_DECORATION
                                                  ? em.intl.string(em.t["7v0T9P"])
                                                  : A.type === eS.R.NAMEPLATE
                                                    ? em.intl.string(em.t.x5CoXR)
                                                    : A.type === eS.R.PROFILE_EFFECT
                                                      ? em.intl.string(em.t.wR5wOo)
                                                      : A.type === eS.R.PROFILE_FRAME
                                                        ? em.intl.string(em.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eb.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: E,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eH.Wh,
                            children: (0, i.jsx)(ef.E, {
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
var eB = n(783878),
    eK = n(966327),
    eW = n(427262);
let eV = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, V.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(eB.Z, {
                  selectionMode: "single",
                  label: em.intl.string(em.t.xFn72s),
                  placeholder: em.intl.string(em.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eW.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eK.A, { user: e, size: eN._3.SIZE_20 }),
                  })),
              }),
          });
};
var eY = n(735438),
    ez = n.n(eY),
    eZ = n(427358),
    eX = n(570287),
    eQ = n(994500);
function eq() {
    let e = (0, g.yK)([eQ.A], () => eQ.A.getFriendIDs()),
        t = (0, g.yK)([eZ.A], () =>
            eZ.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, eX.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = h.useMemo(() => ez().uniq([...e, ...t]), [e, t]);
    return (0, g.yK)(
        [eL.default],
        () =>
            n.reduce((e, t) => {
                let n = eL.default.getUser(t);
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
        { analyticsLocations: l } = (0, B.Ay)(T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(eI.Q, {
        text: em.intl.string(em.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eA.Cz)({ analyticsLocations: l, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e1.pX)(`${e2.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e3 = n(818348);
let e6 = (0, h.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    e5 = () => (0, h.useContext)(e6),
    e4 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = e5(),
            { analyticsLocations: l } = (0, B.Ay)();
        return (0, i.jsx)(eE, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e9 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => em.intl.string(em.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => em.intl.string(em.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    te = (e) => {
        let { step: t } = e,
            n = e9[t];
        return null == n ? null : (0, i.jsx)(G.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    tt = {
        CHECKOUT_FLOW: r.C.COLLECTIBLES_CHECKOUT,
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
                                setCustomGiftMessage: r,
                                giftRecipientError: s,
                                setGiftRecipientError: a,
                                validatingGiftRecipient: o,
                                giftRecipient: u,
                                giftingOrigin: c,
                                setValidatingGiftRecipient: d,
                            } = (0, V.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, ei.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            m = (0, er.gU)(),
                            T = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                            E = eq(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eA.JJ)(e.id, t)) || a(em.intl.string(em.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, O.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== e_.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(e2.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let A = () =>
                            (0, i.jsx)(eJ.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e7.iX,
                                innerClassName: e7.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: e7.qL, children: (0, i.jsx)(e$.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eO.pA)({ invoicePreview: p, selectedSkuId: C, skusById: m });
                                return c === e_.vQ.USER_PROFILE_WISHLIST || c === e_.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(e0.Z, { giftRecipient: u }),
                                              A(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eG, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e7.uW,
                                                      previewHeaderClassName: e7.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: e7.fi,
                                                  children: (0, i.jsx)(e8, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eV, {
                                                  selectedSkuId: C,
                                                  recipients: E,
                                                  className: e7.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              A(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eG, {
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
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > e_.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(nh, {
                    paymentModalStepProps: e,
                    layout: r.X.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [o.pn.REVIEW]: E._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, additionalOptions: n, children: l, ...r } = e,
                    {
                        environment: s,
                        confettiCanvas: a,
                        setConfettiCanvas: o,
                        customConfettiVisible: u,
                        setCustomConfettiVisible: c,
                        customConfettiDisplayOptions: d,
                        hideConfirmStepConfetti: C,
                    } = ((e) => {
                        let { skuId: t } = e,
                            n = h.useRef(new Y.OH()),
                            [l, r] = h.useState(null),
                            [i, s] = h.useState(!1),
                            a = h.useMemo(() => (0, X.AB)({ purchaseType: Q.gs.FIAT, skuId: t }), [t]);
                        return {
                            environment: n,
                            confettiCanvas: l,
                            setConfettiCanvas: r,
                            customConfettiVisible: i,
                            setCustomConfettiVisible: s,
                            customConfettiDisplayOptions: a,
                            hideConfirmStepConfetti: null != a,
                        };
                    })({ skuId: t }),
                    p = ((e) => {
                        let { skuId: t } = e;
                        return null != t ? [t] : [];
                    })({ skuId: t }),
                    _ = null != n ? n.onStepChange : void 0,
                    m = (0, h.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: c,
                            hideConfirmStepConfetti: C,
                            confettiCanvas: a,
                            onStepChange: _,
                        }),
                        [p, c, C, a, _],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($, {
                            environment: s,
                            setConfettiCanvas: o,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, i.jsx)(K.CheckoutRootProvider, {
                            ...r,
                            skuIDs: p,
                            stepConfigs: r.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e3.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e6.Provider, { value: m, children: l }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: l, setCustomConfettiVisible: r, onStepChange: i } = e5(),
                    { isGift: s } = (0, V.Pv)(),
                    a = (0, W.J)(),
                    {
                        paymentModalSkuId: o,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            s = h.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: h.useCallback(
                                (e) => {
                                    r(!1), n(e), z.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    d = h.useCallback(
                        (e) => {
                            u(e), e && s && a();
                        },
                        [u, s, a],
                    );
                return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: e2.FYj, onStepChange: i });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, V.Pv)();
            return n ? (0, i.jsx)(te, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e4, { ...e }), options: J },
    };
var tn = n(354033),
    tl = n(786300),
    tr = n(491057),
    ti = n(394584);
let [ts, ta] = (0, tl.A)(),
    to = {
        CHECKOUT_FLOW: r.C.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: E._M },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    r = h.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, i.jsx)(ts.Provider, { value: r, children: (0, i.jsx)(tr.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: r } = ta();
            return (0, i.jsx)(tn.Y, { onClose: t, listing: r, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(ti._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var tu = n(67480),
    tc = n(328968),
    td = n(371794),
    tC = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tp = {
    CHECKOUT_FLOW: r.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, V.Pv)(),
                s = (0, ei.t4)((e) => e.selectedSkuId),
                a = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                o = (0, g.bG)([tu.A], () => (null != s ? tu.A.get(s) : null), [s]),
                u = eq(),
                c = (0, g.bG)([tc.A], () => (null != s ? tc.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, td.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === a?.id || t.length > e_.Jo,
                _ = h.useMemo(() => ({ disabled: p }), [p]);
            return (0, i.jsx)(nh, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tC.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: tC.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tC.P6,
                        children: [
                            (0, i.jsx)(eV, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(eJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tC.iX,
                                innerClassName: tC.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: _,
            });
        },
        [o.pn.REVIEW]: E._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var t_ = n(429913),
    tm = n(733391),
    tT = n(821609),
    tE = n(318254),
    tI = n(262427),
    tA = n(510022),
    tO = n(317560),
    tS = n(366523),
    th = n(208733);
function tg(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, B.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, ei.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, en.V)(),
        a = (0, er.gU)(),
        { isGift: o, giftRecipient: u } = (0, V.Pv)();
    A()(null != l, "Expected selectedSkuId"), A()(null != s, "Expected application");
    let c = a[l];
    A()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, tO.j)(), t(), (0, tA.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(eC.dZ, {
        children: [
            (0, i.jsx)(ep.A, {}),
            (0, i.jsxs)("div", {
                className: th.EL,
                children: [
                    (0, i.jsx)(tS.e, { sku: c, shape: "square", containerClassName: th.LC }),
                    (0, i.jsx)(ex.D, {
                        variant: "heading-xl/semibold",
                        className: th.RS,
                        children: em.intl.string(em.t["5glWta"]),
                    }),
                    (0, i.jsx)(ef.E, {
                        variant: "text-md/normal",
                        children: em.intl.formatToPlainString(em.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: th.Is,
                            children: (0, i.jsx)(tI.J, {
                                Icon: tE.C,
                                text: em.intl.format(em.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: th.UD,
                        children: (0, i.jsx)(tT.$, { onClick: t, text: em.intl.string(em.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tN = n(889137),
    tf = n(742158),
    tx = n(683071),
    tP = n(313961),
    tR = n(238017),
    tv = n(650588),
    tL = n(723090),
    tU = n(763827),
    tj = n(403362),
    ty = n(871123),
    tM = n(832163),
    tk = n(44724),
    tF = n(980094),
    tD = n(806931),
    tb = n(107610);
function tw(e) {
    let { handleClose: t, sku: n, application: l } = e,
        r = h.useCallback(() => {
            (0, tk.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = h.useCallback(() => {
            t();
            let e = tM.A.getStorefrontState(n.applicationId)?.activePage;
            (0, ty.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, tk.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, i.jsx)("div", {
        className: tb.$O,
        children: (0, i.jsx)(eI.Q, {
            text: em.intl.string(em.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tH = {
    CHECKOUT_FLOW: r.C.SLAYER_STOREFRONT_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { handleStepChange: t, handleClose: n } = e,
                { renderStepBody: l, disabled: s } = ((e) => {
                    var t;
                    let n,
                        l,
                        r,
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
                            additionalUserIds: T,
                        } = (0, V.Pv)(),
                        E = (0, ei.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, en.V)(),
                        A = (0, g.bG)([eL.default], () => eL.default.getCurrentUser()),
                        O =
                            ((t = A?.id),
                            (n = eq()),
                            (l = (function (e) {
                                let t = (0, g.bG)([tU.A], () => (tU.A.isConnected() ? tU.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? tP.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, tD.Xw)(t) && !(0, tD.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, tD.Ay)(e) && !(0, tD.Ay)(t)
                                                ? -1
                                                : (0, tD.Ay)(t) && !(0, tD.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, g.yK)([eL.default], () => T?.map(eL.default.getUser).filter(tj.Vq) ?? [], [T])),
                            h.useMemo(
                                () =>
                                    ez().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, g.bG)([tu.A], () => (null != E ? tu.A.get(E) : null), [E]),
                        { userPrice: N } = (0, tL.CD)({ sku: S, priceSetAssignmentPurchaseType: e2.lid.GIFT }),
                        f = (0, ty.fq)(S),
                        x = (0, ty.xf)(S),
                        P = async (e, t) => {},
                        R = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, i.jsxs)("div", {
                                className: tb.mT,
                                children: [
                                    null != f &&
                                        (0, i.jsx)(tS.A, {
                                            containerClassName: tb.T3,
                                            cardImage: f,
                                            cardBackgroundImage: x,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tb._T,
                                        children: [
                                            (0, i.jsx)(tv.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(tR.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = S?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tb.Tc,
                                children: [
                                    null != c && (m === e_.vQ.USER_PROFILE_WISHLIST || m === e_.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(e0.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eV, { selectedSkuId: E, validateSelectedGift: P, recipients: O }),
                                    (0, i.jsx)(eJ.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tb.iX,
                                        innerClassName: tb.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tb.AN,
                                              children: [
                                                  (0, i.jsx)(tf.z, {
                                                      className: tb.jr,
                                                      children: em.intl.string(em.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tb.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tb.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != f &&
                                                                  (0, i.jsx)(tS.A, {
                                                                      containerClassName: tb.Iy,
                                                                      cardImage: f,
                                                                      cardBackgroundImage: x,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tb.vz,
                                                              children: [
                                                                  null != I && (0, i.jsx)(tF.Q, { application: I }),
                                                                  (0, i.jsx)(ef.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(ef.E, {
                                                              variant: "text-md/semibold",
                                                              children: N,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, ty.Ri)(S) &&
                                        (0, i.jsx)(tx.w, { type: "info", children: em.intl.string(em.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(tI.J, {
                                            Icon: tE.C,
                                            text: em.intl.format(em.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != S && (0, i.jsx)(tw, { handleClose: a, sku: S, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tb.Du, children: [v(), L()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === A?.id || o.length > e_.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(nh, {
                paymentModalStepProps: e,
                layout: r.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: E._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(tg, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: r, isGift: s, skuId: a, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, t_.h)(t);
                    h.useEffect(() => {
                        null == l ||
                            null == n ||
                            tc.A.isFetchingForSKU(n) ||
                            null != tu.A.get(n) ||
                            (0, tm.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: a }),
                (0, i.jsx)(K.CheckoutRootProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: e3.VV.ONE_TIME,
                    isGift: s,
                    ...o,
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
            n = (0, tN.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => em.intl.string(em.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => em.intl.string(em.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(G.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tG = n(274971),
    tB = n(480642),
    tK = n(944355),
    tW = n(977445),
    tV = n(908419),
    tY = n(211287),
    tz = n(623373),
    tZ = n(739508),
    tX = n(715054);
(0, s.A)();
var tQ = n(136857),
    tq = n(158317),
    tJ = n(566980),
    t$ = n(855104),
    t0 = n(120700),
    t1 = n(426398);
n(322076);
var t2 =
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
        (l[(l.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (l[(l.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (l[(l.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (l[(l.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        l),
    t7 = n(289873),
    t8 = n(241989),
    t3 = n(576052),
    t6 = n(120992),
    t5 = n(194256),
    t4 = n(319820),
    t9 = n(327105),
    ne = n(200766);
let nt = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, t4.AO)({ sku: t }),
            s = (0, t5.oO)(l);
        r ? (s = em.intl.string(t9.default.qwSlCO)) : (0, tz.Ab)(l) && (s = em.intl.string(em.t["0TmQRG"]));
        let a = (0, t5.dL)(t),
            o = (0, Q.EZ)(t.id) ? t3.m[t.id].render({ className: ne.$ }) : (0, i.jsx)(t8.WH, { sku: t, product: l });
        return (0, i.jsx)(t8.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tE.C,
        });
    },
    nn = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t6.c)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, ee.bG)([tu.A], () => tu.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(t7.y, { type: t7.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(nt, { sku: l, orbPriceAmount: n });
    },
    nl = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tK.vW, { label: em.intl.string(em.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tE.C });
    },
    nr = () => em.intl.string(em.t.wmcDyu);
function ni() {
    let { immediateDelivery: e } = (0, tV.U)(),
        t = nr();
    return (0, i.jsx)(tK._P, {
        variant: { type: tK.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let ns = (0, h.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    na = () => (0, h.useContext)(ns),
    no = { payment_gateway: e3.kM.VIRTUAL_CURRENCY, currency: e2.Yri.DISCORD_ORB },
    nu = {
        CHECKOUT_FLOW: r.C.ORB_CHECKOUT,
        CHECKOUT_STEPS: {
            [o.pn.REVIEW]: (e) => {
                let { handleStepChange: t } = e,
                    {
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        skuId: a,
                        analyticsSourceLocation: u,
                    } = na(),
                    { primaryButtonProps: c, ...d } = ((e) => {
                        let {
                                skuId: t,
                                analyticsSourceLocation: n,
                                orbProductContext: l,
                                isRedeeming: r,
                                orbRedemptionError: s,
                                onRedeemVirtualCurrency: a,
                                handleStepChange: u,
                            } = e,
                            { enabled: c } = tY.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, ei.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: T,
                                orbPriceAmount: E,
                                orbBalanceToDisplay: I,
                                onClickCheckout: A,
                                showCollectiblesDiscountWarning: O,
                                errorMessage: S,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: a } = (0, B.Ay)(),
                                    {
                                        selectedSkuId: u,
                                        setPurchaseState: c,
                                        firstConstraintReasonCode: d,
                                    } = (0, ei.t4)((e) => ({
                                        selectedSkuId: e.selectedSkuId,
                                        setPurchaseState: e.setPurchaseState,
                                        firstConstraintReasonCode:
                                            null != e.orderRecord
                                                ? e.orderRecord.firstUnsatisfiedConstraintReasonCode()
                                                : null,
                                    })),
                                    C = (0, t$.gN)(),
                                    T = (0, h.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, en.V)(),
                                            { hasPaymentSources: s } = (0, t1.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, ei.t4)((e) => e.contextMetadata),
                                            d = (0, h.useMemo)(
                                                () => ({
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e3.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e2.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...{
                                                        payment_type: e2.frM[e2.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: m.r.UNIFIED,
                                                        checkout_flow: t0.C.ORB_CHECKOUT,
                                                    },
                                                }),
                                                [a, c, i, t, l, r, n],
                                            );
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e2.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(e2.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e3.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e2.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(e2.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e2.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e2.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(e2.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e2.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(e2.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(e2.HAw.PAYMENT_FLOW_FAILED, {
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
                                        orbProductContext: r,
                                        analyticsLocations: a,
                                        analyticsSourceLocation: i,
                                    });
                                (0, h.useEffect)(() => {
                                    null != l &&
                                        null !== T.current &&
                                        (E(e2.HAw.PAYMENT_FLOW_FAILED, l), (T.current = null));
                                }, [l, E]);
                                let I = (0, h.useCallback)(() => {
                                        (T.current = C),
                                            E(e2.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tJ.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, s]),
                                    A = T.current ?? C,
                                    O = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, ew.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tq.FY && null != t)
                                                    switch (t) {
                                                        case t2.INSUFFICIENT_ORB_BALANCE:
                                                            return em.intl.string(em.t.keFvXM);
                                                        case t2.SKU_ALREADY_OWNED:
                                                            return em.intl.string(em.t.m371Mx);
                                                        case t2.BUNDLE_PARTIALLY_OWNED:
                                                            return em.intl.string(em.t.v9oC0p);
                                                        default:
                                                            return em.intl.string(em.t.fqJZ11);
                                                    }
                                                return e instanceof tq.j2
                                                    ? em.intl.string(em.t["2BmwgV"])
                                                    : e.code === tQ.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? em.intl.string(em.t.keFvXM)
                                                      : e.code === tQ.tG.ALREADY_PURCHASED
                                                        ? em.intl.string(em.t.m371Mx)
                                                        : em.intl.string(em.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: A,
                                    onClickCheckout: I,
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
                            N = (0, g.bG)([tu.A], () => tu.A.get(t), [t]),
                            f = (0, tW.uS)(N?.applicationId),
                            {
                                disabled: x,
                                tooltipText: P,
                                text: R,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: em.intl.string(em.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: em.intl.string(em.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: nr() };
                            })({ orbBalance: I, orbPriceAmount: c ? d : E, isInTestMode: f }),
                            v = (0, h.useMemo)(
                                () => ({ onClick: A, loading: r, text: R, disabled: x, tooltipText: P }),
                                [A, r, R, x, P],
                            ),
                            L = O ? em.intl.format(em.t.fsOXXO, {}) : null,
                            U = f ? em.intl.string(em.t.OvMyMd) : null;
                        return {
                            isStepLoading: T,
                            upperInlineNoticeProps: (0, h.useMemo)(() => {
                                if (null != U || null != L || null != S) {
                                    let e = [];
                                    return (
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "test-mode-warning-notice" }),
                                        null != L &&
                                            e.push({ type: "warning", message: L, key: "orb-checkout-warning-notice" }),
                                        null != S &&
                                            e.push({ type: "critical", message: S, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [U, L, S]),
                            purchaseItemContent: (0, i.jsx)(nn, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, i.jsx)(nl, { orbBalance: I }),
                            legalContent: (0, i.jsx)(ni, {}),
                            primaryButtonProps: v,
                            invoiceSummaryContent: null,
                            invoiceTotalDueLabel: null,
                            invoiceTotalDueValue: null,
                        };
                    })({
                        skuId: a,
                        analyticsSourceLocation: u,
                        orbProductContext: n,
                        isRedeeming: l,
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eC.dZ, { children: (0, i.jsx)(tG.T, { ...d }) }),
                        (0, i.jsx)(eC.UX, { children: (0, i.jsx)(tB.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: r } = e,
                    { order: s, setOrder: a } = (0, ei.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, g.bG)([eL.default], () => eU.Ay.canUseShopDiscounts(eL.default.getCurrentUser())),
                            a = (0, g.bG)([tu.A], () => tu.A.get(t), [t]),
                            o = (0, tL.JL)({ sku: a }),
                            { product: u } = (0, ej.q)(t),
                            c = (0, h.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tz.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tZ.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, tX.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
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
                    })({ skuId: t, loadId: n, order: s, onSignFailure: a }),
                    C = (0, h.useMemo)(
                        () => ({
                            orbProductContext: o,
                            isRedeeming: u,
                            orbRedemptionError: c,
                            onRedeemVirtualCurrency: d,
                            skuId: t,
                            analyticsSourceLocation: l,
                        }),
                        [o, u, c, d, t, l],
                    );
                return (0, i.jsx)(ns.Provider, { value: C, children: r });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { orbProductContext: l } = na(),
                    r = ((e) => {
                        let { orbProductContext: t, overrideAnalyticParams: n } = e;
                        return {
                            analyticsDataOverride: (0, h.useMemo)(() => {
                                if (null != t)
                                    return {
                                        ...n,
                                        price: t.orbPriceAmount ?? void 0,
                                        regular_price: t.orbPriceAmount ?? void 0,
                                    };
                            }, [t, n]),
                            skipConfirm: !0,
                        };
                    })({ orbProductContext: l, overrideAnalyticParams: no });
                return n({ ...t, ...r });
            },
            overrideAnalyticParams: no,
        },
    },
    nc = {
        [r.C.ORB_CHECKOUT]: {
            flowType: r.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nu,
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            flowType: r.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tt,
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tH,
        },
        [r.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_CHECKOUT },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tp,
        },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: H,
            flowType: r.C.GUILD_PRODUCT_CHECKOUT,
        },
        [r.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: to,
            purchaseType: e2.VVm.SUBSCRIPTION,
        },
        [r.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_BOOST_CHECKOUT },
    };
var nd = n(735305),
    nC = n(295405);
let np = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        { purchaseType: r } = (0, ei.t4)((e) => ({ purchaseType: e.purchaseType })),
        s = h.useCallback(
            () =>
                ((e) => {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = o.pn.REVIEW,
                        returnStepIfNoPaymentSources: l,
                        purchaseType: r,
                    } = e;
                    if (0 === Object.keys(nC.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        r === e3.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l, purchaseType: r }),
            [t, n, l, r],
        );
    return (0, i.jsx)(nd.x, { ...l, onReturn: s });
};
var n_ = n(86379),
    nm = n(545075);
let nT = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            r = (0, n_.Hp)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(nm.oO, {})
            : null;
    },
    nE = {
        [r.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, excludePaymentAuthSteps: !0, predicateStepType: "unified" },
        [r.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [r.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "subscription" },
    };
class nI {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = nc[e];
        if (!((e, t) => null != t && t.implemented && t.flowType === e)(e, t))
            throw Error(`Checkout flow ${e} is not implemented`);
        (this.checkoutFlowConfiguration = t),
            (this.tenantCheckoutFlowConfig = t.TENANT_CHECKOUT_FLOW_CONFIG),
            (this.internalCheckoutFlowControls = nE[e]),
            (this.override_analytic_params =
                this.tenantCheckoutFlowConfig.TENANT_PROVIDER_CONFIGS.overrideAnalyticParams);
    }
    getCheckoutStep(e) {
        return this.tenantCheckoutFlowConfig.CHECKOUT_STEPS[e];
    }
    generateRenderHeader() {
        let { CustomHeaderComponent: e } = this.tenantCheckoutFlowConfig;
        if (null != e) return (t, n, l) => (0, i.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? u.kO
            : "subscription" === e
              ? u.r3
              : {
                    key: null,
                    renderStep: (e) => (0, i.jsx)(nT, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }),
                };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== r.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(np, {
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
                renderStep: (e) => (0, i.jsx)(l, { ...e }),
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => em.intl.string(em.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => em.intl.string(em.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { excludePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            r = this.getPredicateStepConfig(),
            i = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            a = this.getReviewStepConfig(),
            c = this.createDefinedStepConfigsArray([r, ...(null != i ? [i] : []), s, ...(l ? [] : u.hh), a]);
        return null != n && c.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), c;
    }
    getApplicationIdFor1PShopSKU(e) {
        return this.checkoutFlow === r.C.ORB_CHECKOUT
            ? (0, p.P)(e)
            : this.checkoutFlow === r.C.COLLECTIBLES_CHECKOUT
              ? e2.FYj
              : void 0;
    }
    trackPaymentFlowCanceled(e) {
        let {
            loadId: t,
            skuId: n,
            skuProductLine: l,
            applicationId: r,
            discoverySessionId: i,
            analyticsLocations: s,
            analyticsObject: a,
            analyticsSourceLocation: o,
            isGift: u,
        } = e;
        _.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: e2.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: m.r.UNIFIED,
            checkout_flow: this.checkoutFlow,
            ...this.override_analytic_params,
        });
    }
    openCheckoutModal(e) {
        let {
                modalAPIOptions: t,
                additionalOptions: l,
                giftContextProps: r,
                onComplete: o,
                onClose: u,
                skuId: c,
                skuProductLine: d,
                discoverySessionId: p,
                applicationId: _,
                analyticsSourceLocation: m,
                analyticsLocations: T,
                analyticsObject: E,
                tenantParams: I,
                activeSubscription: A = null,
                ...O
            } = e,
            S = { current: (0, s.A)() },
            h = { current: null },
            g = (e) => {
                (S.current = e.id), (h.current = e);
            },
            { modalKey: N } = t,
            f = this.generateRenderHeader(),
            x = _ ?? this.getApplicationIdFor1PShopSKU(c),
            P = !!(null != r && r.isGift),
            R = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { UnifiedCheckoutInstance: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: P });
                return (n) =>
                    (0, i.jsx)(e, {
                        ...O,
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (R = !0);
                        },
                        onClose: u,
                        renderHeader: f,
                        skuId: c,
                        tenantParams: I ?? {},
                        loadId: S.current,
                        onOrderCreated: g,
                        discoverySessionId: p,
                        activeSubscription: A,
                        applicationId: x,
                        analyticsLocations: T,
                        analyticsObject: E,
                        analyticsSourceLocation: m,
                        renderModalProps: n,
                        giftContextProps: r,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(R, S.current), (0, a.closeModal)(N);
                },
                onCloseCallback: () => {
                    R ||
                        (C({ checkoutSucceeded: R, order: h.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: S.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: x,
                            discoverySessionId: p,
                            analyticsLocations: T,
                            analyticsObject: E,
                            analyticsSourceLocation: m,
                            isGift: P,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(R),
                        null != u && u(R, c);
                },
                modalKey: N,
            },
        );
    }
}
var nA = n(71804);
n(584160);
var nO = n(981036),
    nS = n(367644);
let nh = (e) => {
        let {
                paymentModalStepProps: { handleStepChange: t },
                layout: n,
                renderStepBody: l,
                renderLeftColumn: s,
                renderRightColumn: a,
                primaryCTAButtonProps: u,
                onBackClick: c,
            } = e,
            { hasPaymentSources: d } = (0, t1.jm)(),
            C = d ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
            p = h.useCallback(() => t(C), [t, C]),
            _ = h.useMemo(
                () =>
                    n === r.X.CUSTOM_STEP_BODY ? l() : (0, i.jsxs)("div", { className: nS.D, children: [s(), a()] }),
                [n, l, s, a],
            ),
            m = h.useMemo(() => ({ ...u, onClick: p, text: em.intl.string(em.t.XiOHRX) }), [u, p]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eC.dZ, { children: _ }),
                (0, i.jsx)(eC.UX, { children: (0, i.jsx)(nO.cy, { onBackClick: c, primaryCTAButtonProps: m }) }),
            ],
        });
    },
    ng = null,
    nN = null,
    nf = null,
    nx = null,
    nP = null,
    nR = null,
    nv = {
        [r.C.ORB_CHECKOUT]: {
            get: function () {
                return null == ng && (ng = new nI({ checkoutFlow: r.C.ORB_CHECKOUT })), ng;
            },
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nN && (nN = new nI({ checkoutFlow: r.C.COLLECTIBLES_CHECKOUT })), nN;
            },
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nf && (nf = new nI({ checkoutFlow: r.C.SLAYER_STOREFRONT_CHECKOUT })), nf;
            },
        },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nx && (nx = new nI({ checkoutFlow: r.C.PREMIUM_APPS_OTP_CHECKOUT })), nx;
            },
        },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nP && (nP = new nI({ checkoutFlow: r.C.GUILD_PRODUCT_CHECKOUT })), nP;
            },
        },
        [r.C.GUILD_ROLE_CHECKOUT]: {
            get: function () {
                return null == nR && (nR = new nI({ checkoutFlow: r.C.GUILD_ROLE_CHECKOUT })), nR;
            },
        },
    };
