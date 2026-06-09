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
    m = n(793574),
    T = n(862241),
    E = n(284009),
    I = n.n(E),
    A = n(964486),
    O = n(666646),
    S = n(64700),
    h = n(17928),
    g = n(871109);
let N = S.createContext(void 0);
function f() {
    let e = S.useContext(N);
    return I()(null != e, "GuildProductPurchaseContext not found"), e;
}
function x(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, h.bG)([g.A], () => g.A.getGuildProduct(n));
    return (
        I()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(N.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function P(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = f(),
        s = (0, O.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            I()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("68826"),
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
var R = n(503698),
    v = n.n(R),
    L = n(939249),
    U = n(789645),
    j = n(935462),
    y = n(303612),
    M = n(916261),
    k = n(575650);
function F(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(L.D, {
        className: v()(M.cG, t),
        onClick: n,
        children: (0, i.jsx)(U.P, { size: "xs", color: "currentColor", className: M.yP }),
    });
}
function D(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(j.rQ, {
        className: v()(M.wx, k.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(y.A, { className: M.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(F, { className: M.b, onClose: n }),
        ],
    });
}
var b = n(196617);
let w = {
    CHECKOUT_FLOW: r.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: T._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(x, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: m.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = f();
        return n === o.pn.CONFIRM
            ? null
            : (0, i.jsx)(D, { guildProductListing: l, className: b.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(P, { ...e }) },
};
var H = n(20742),
    G = n(688810),
    B = n(197510),
    K = n(848149),
    W = n(937008),
    V = n(106778),
    Y = n(228366),
    z = n(213530),
    Z = n(966971),
    X = n(758836),
    Q = n(483764);
let q = { sliderBodyClassName: Q.Bz },
    J = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(V.Fk, { ref: n, className: Q.Lb, environment: t.current }),
                (0, i.jsx)(z.K, { options: l, className: v()(Q.Oh, { [Q.R]: !r }) }),
            ],
        });
    };
var $ = n(702841),
    ee = n(775602),
    et = n(31823),
    en = n(211083),
    el = n(427675),
    er = n(571878),
    ei = n(590180),
    es = n(953150),
    ea = n(524246),
    eo = n(14368),
    eu = n(61750),
    ec = n(972607),
    ed = n(482132),
    eC = n(921925),
    ep = n(788868),
    e_ = n(375708);
function em(e) {
    let { handleClose: t, analyticsLocations: n } = e,
        {
            selectedSkuId: l,
            purchaseError: r,
            purchasePreviewError: s,
            appliedUserDiscounts: a,
        } = (0, er.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
            appliedUserDiscounts: e.appliedUserDiscounts,
        })),
        { paymentError: o } = (0, en.o)(),
        { application: u } = (0, et.V)(),
        c = (0, el.gU)(),
        d = (0, $.bG)([ei.A], () => ei.A.getProduct(l)),
        C = S.useRef(!1);
    I()(null != l, "Expected selectedSkuId"), I()(null != u, "Expected application");
    let p = c[l];
    I()(null != p, "Expected sku");
    let _ = null != o || null != r || null != s,
        m =
            a.length > 0
                ? e_.intl.formatToPlainString(e_.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (S.useEffect(() => {
        null == d ||
            _ ||
            C.current ||
            ((C.current = !0),
            (0, eu.A)({
                product: d,
                overrideTitle: m,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: X.gs.FIAT,
            }));
    }, [d, n, t, _, m]),
    _)
        ? (0, i.jsx)(ed.dZ, { children: (0, i.jsx)(eC.A, {}) })
        : null;
}
function eT(e) {
    let {
            isGift: t,
            giftCode: n,
            selectedGiftStyle: l,
            hasSentMessage: r,
            giftRecipient: s,
            giftMessageError: a,
            isSendingMessage: o,
            giftingOrigin: u,
        } = (0, W.Pv)(),
        c = (0, $.bG)([ee.A], () => ee.A.useReducedMotion),
        d = S.useRef(null),
        C = (0, er.t4)((e) => e.selectedSkuId),
        p = (0, $.bG)([ei.A], () => ei.A.getProduct(C)),
        { confettiColors: _ } = (0, es.A)(p?.styles);
    return (
        S.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === ep.vQ.USER_PROFILE_WISHLIST || u === ep.vQ.DM_CHANNEL_WISHLIST) &&
                Y.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
        }, [t, s, C, u]),
        t
            ? (0, i.jsxs)("div", {
                  ref: d,
                  children: [
                      (0, i.jsx)(ec.A, {
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
                          (0, i.jsx)(ea.A, {
                              confettiTarget: d.current,
                              confettiCanvas: e.confettiCanvas,
                              sprites: (0, eo.rA)(p?.categorySkuId),
                              colors: _?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(em, { ...e })
    );
}
var eE = n(123292),
    eI = n(859040),
    eA = n(993408),
    eO = n(575593),
    eS = n(452027),
    eh = n(922016),
    eg = n(778712),
    eN = n(834730),
    ef = n(534514),
    ex = n(986687),
    eP = n(999291),
    eR = n(903209),
    ev = n(287809),
    eL = n(428262),
    eU = n(674658),
    ej = n(898461),
    ey = n(203632),
    eM = n(892118),
    ek = n(536572),
    eF = n(14702),
    eD = n(219103),
    eb = n(525723),
    ew = n(780651);
function eH(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, W.Pv)(),
        c = (0, h.bG)([ev.default], () => ev.default.getCurrentUser()),
        d = eL.Ay.canUseShopDiscounts(c),
        C = (0, eP.Ay)(o?.id),
        p = S.useRef(null),
        [_, m] = S.useState(!1),
        { product: T } = (0, eU.q)(t, !0),
        E = S.useMemo(() => (0, eA.fT)(T, d), [T, d]),
        I = (0, eb.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [A] = T.items,
        O = (0, ek.VG)(T),
        g = null != o && o.id !== c?.id && T.type !== eO.R.BUNDLE && A.type !== eO.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: v()(ew.QU, s),
                children: (0, i.jsx)(eS.D, {
                    label: e_.intl.string(e_.t.PpoJzt),
                    children:
                        g &&
                        (0, i.jsx)(
                            eh.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => m(!1),
                                preload: () => (0, eR.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(ex.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eg.FT)(eg._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ej.T)(A) ? A : null,
                                        pendingProfileEffect: (0, ey.C3)(A) ? A : null,
                                        pendingProfileFrame: (0, eM.s)(A) ? A : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(L.D, {
                                        ...l,
                                        className: ew.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eN.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: e_.intl.string(e_.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: v()(ew.i1, null != u ? ew.cN : ew.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: ew.Ug,
                        children: [
                            (0, i.jsx)(eF.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: ew.JZ,
                                children: [
                                    (0, i.jsx)(eN.E, { variant: "text-md/semibold", children: O }),
                                    (0, i.jsx)(ef.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === eO.R.BUNDLE
                                                ? null
                                                : A.type === eO.R.AVATAR_DECORATION
                                                  ? e_.intl.string(e_.t["7v0T9P"])
                                                  : A.type === eO.R.NAMEPLATE
                                                    ? e_.intl.string(e_.t.x5CoXR)
                                                    : A.type === eO.R.PROFILE_EFFECT
                                                      ? e_.intl.string(e_.t.wR5wOo)
                                                      : A.type === eO.R.PROFILE_FRAME
                                                        ? e_.intl.string(e_.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eD.x, {
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
                            className: ew.Wh,
                            children: (0, i.jsx)(eN.E, {
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
var eG = n(783878),
    eB = n(966327),
    eK = n(427262);
let eW = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, W.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(eG.Z, {
                  selectionMode: "single",
                  label: e_.intl.string(e_.t.xFn72s),
                  placeholder: e_.intl.string(e_.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eK.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eB.A, { user: e, size: eg._3.SIZE_20 }),
                  })),
              }),
          });
};
var eV = n(735438),
    eY = n.n(eV),
    ez = n(427358),
    eZ = n(570287),
    eX = n(994500);
function eQ() {
    let e = (0, h.yK)([eX.A], () => eX.A.getFriendIDs()),
        t = (0, h.yK)([ez.A], () =>
            ez.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, eZ.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = S.useMemo(() => eY().uniq([...e, ...t]), [e, t]);
    return (0, h.yK)(
        [ev.default],
        () =>
            n.reduce((e, t) => {
                let n = ev.default.getUser(t);
                return null == n || n.bot || e.push(n), e;
            }, []),
        [n],
    );
}
var eq = n(871181),
    eJ = n(318007),
    e$ = n(285719),
    e0 = n(976860),
    e1 = n(652215),
    e2 = n(353791);
function e7(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, G.Ay)(m.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(eE.Q, {
        text: e_.intl.string(e_.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eI.Cz)({ analyticsLocations: l, analyticsSource: m.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e0.pX)(`${e1.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e8 = n(818348);
let e3 = (0, S.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
        onStepChange: void 0,
    }),
    e6 = () => (0, S.useContext)(e3),
    e5 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = e6(),
            { analyticsLocations: l } = (0, G.Ay)();
        return (0, i.jsx)(eT, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e4 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => e_.intl.string(e_.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => e_.intl.string(e_.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    e9 = (e) => {
        let { step: t } = e,
            n = e4[t];
        return null == n ? null : (0, i.jsx)(H.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    te = {
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
                            } = (0, W.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, er.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            m = (0, el.gU)(),
                            T = (0, h.bG)([ev.default], () => ev.default.getCurrentUser()),
                            E = eQ(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eI.JJ)(e.id, t)) || a(e_.intl.string(e_.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== ep.vQ.DM_CHANNEL_WISHLIST &&
                                    _.default.track(e1.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let O = () =>
                            (0, i.jsx)(eq.A, {
                                onTextChange: (e) => r?.(e),
                                pendingText: l,
                                currentText: l,
                                disableThemedBackground: !0,
                                className: e2.iX,
                                innerClassName: e2.pt,
                            });
                        return {
                            renderLeftColumn: () =>
                                (0, i.jsx)("div", { className: e2.qL, children: (0, i.jsx)(eJ.t, { isShopGift: !0 }) }),
                            renderRightColumn: () => {
                                let e = (0, eA.pA)({ invoicePreview: p, selectedSkuId: C, skusById: m });
                                return c === ep.vQ.USER_PROFILE_WISHLIST || c === ep.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(e$.Z, { giftRecipient: u }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eH, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e2.uW,
                                                      previewHeaderClassName: e2.vX,
                                                      hideProfilePreview: !0,
                                                  }),
                                              (0, i.jsx)("div", {
                                                  className: e2.fi,
                                                  children: (0, i.jsx)(e7, { handleClose: n, selectedSkuId: C }),
                                              }),
                                          ],
                                      })
                                    : (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(eW, {
                                                  selectedSkuId: C,
                                                  recipients: E,
                                                  className: e2.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              O(),
                                              null != e &&
                                                  null != C &&
                                                  (0, i.jsx)(eH, {
                                                      skuId: C,
                                                      priceAmount: e.amount,
                                                      priceCurrency: e.currency,
                                                      className: e2.Ng,
                                                  }),
                                          ],
                                      });
                            },
                            onStepChange: t,
                            onBackClick: n,
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > ep.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = S.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(nh, {
                    paymentModalStepProps: e,
                    layout: r.X.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [o.pn.REVIEW]: T._M,
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
                            n = S.useRef(new V.OH()),
                            [l, r] = S.useState(null),
                            [i, s] = S.useState(!1),
                            a = S.useMemo(() => (0, Z.AB)({ purchaseType: X.gs.FIAT, skuId: t }), [t]);
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
                    m = (0, S.useMemo)(
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
                        (0, i.jsx)(J, {
                            environment: s,
                            setConfettiCanvas: o,
                            customConfettiDisplayOptions: d,
                            customConfettiVisible: u,
                        }),
                        (0, i.jsx)(B.CheckoutRootProvider, {
                            ...r,
                            skuIDs: p,
                            stepConfigs: r.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e8.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e3.Provider, { value: m, children: l }),
                        }),
                    ],
                });
            },
            TenantPaymentModalRenderer: (e) => {
                let { originalPaymentModalProps: t, renderPaymentModal: n } = e,
                    { skuIDs: l, setCustomConfettiVisible: r, onStepChange: i } = e6(),
                    { isGift: s } = (0, W.Pv)(),
                    a = (0, K.J)(),
                    {
                        paymentModalSkuId: o,
                        paymentModalOnClose: u,
                        paymentModalOnComplete: c,
                    } = ((e) => {
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            s = S.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: S.useCallback(
                                (e) => {
                                    r(!1), n(e), Y.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
                            ),
                            paymentModalOnComplete: s,
                        };
                    })({ onClose: t.onClose, onComplete: t.onComplete, skuIDs: l, setCustomConfettiVisible: r }),
                    d = S.useCallback(
                        (e) => {
                            u(e), e && s && a();
                        },
                        [u, s, a],
                    );
                return n({ ...t, skuId: o, onClose: d, onComplete: c, applicationId: e1.FYj, onStepChange: i });
            },
            tenantAnalyticsLocation: m.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, W.Pv)();
            return n ? (0, i.jsx)(e9, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e5, { ...e }), options: q },
    };
var tt = n(354033),
    tn = n(786300),
    tl = n(491057),
    tr = n(394584);
let [ti, ts] = (0, tn.A)(),
    ta = {
        CHECKOUT_FLOW: r.C.GUILD_ROLE_CHECKOUT,
        CHECKOUT_STEPS: { [o.pn.REVIEW]: T._M },
        TENANT_PROVIDER_CONFIGS: {
            CustomTenantProvider: (e) => {
                let {
                        tenantParams: { guildId: t, listing: n },
                        children: l,
                    } = e,
                    r = S.useMemo(() => ({ guildId: t, listing: n }), [t, n]);
                return (0, i.jsx)(ti.Provider, { value: r, children: (0, i.jsx)(tl.Qt, { children: l }) });
            },
            tenantProvidesCheckoutRoot: !1,
        },
        CustomHeaderComponent: (e) => {
            let { onClose: t, step: n } = e,
                { guildId: l, listing: r } = ts();
            return (0, i.jsx)(tt.Y, { onClose: t, listing: r, step: n, guildId: l });
        },
        CUSTOM_CONFIRM_STEP_CONFIG: {
            renderStep: (e) => (0, i.jsx)(tr._, { ...e }),
            options: { modalSizeGetter: () => "md" },
        },
    };
var to = n(67480),
    tu = n(328968),
    tc = n(371794),
    td = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tC = {
    CHECKOUT_FLOW: r.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, W.Pv)(),
                s = (0, er.t4)((e) => e.selectedSkuId),
                a = (0, h.bG)([ev.default], () => ev.default.getCurrentUser()),
                o = (0, h.bG)([to.A], () => (null != s ? to.A.get(s) : null), [s]),
                u = eQ(),
                c = (0, h.bG)([tu.A], () => (null != s ? tu.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, tc.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === a?.id || t.length > ep.Jo,
                _ = S.useMemo(() => ({ disabled: p }), [p]);
            return (0, i.jsx)(nh, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: td.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(ef.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: td.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: td.P6,
                        children: [
                            (0, i.jsx)(eW, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(eq.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: td.iX,
                                innerClassName: td.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: _,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: u.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: m.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var tp = n(429913),
    t_ = n(733391),
    tm = n(821609),
    tT = n(318254),
    tE = n(262427),
    tI = n(510022),
    tA = n(317560),
    tO = n(366523),
    tS = n(208733);
function th(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, G.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, er.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, et.V)(),
        a = (0, el.gU)(),
        { isGift: o, giftRecipient: u } = (0, W.Pv)();
    I()(null != l, "Expected selectedSkuId"), I()(null != s, "Expected application");
    let c = a[l];
    I()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (S.useEffect(() => {
            o || ((0, tA.j)(), t(), (0, tI.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(ed.dZ, {
        children: [
            (0, i.jsx)(eC.A, {}),
            (0, i.jsxs)("div", {
                className: tS.EL,
                children: [
                    (0, i.jsx)(tO.e, { sku: c, shape: "square", containerClassName: tS.LC }),
                    (0, i.jsx)(ef.D, {
                        variant: "heading-xl/semibold",
                        className: tS.RS,
                        children: e_.intl.string(e_.t["5glWta"]),
                    }),
                    (0, i.jsx)(eN.E, {
                        variant: "text-md/normal",
                        children: e_.intl.formatToPlainString(e_.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: tS.Is,
                            children: (0, i.jsx)(tE.J, {
                                Icon: tT.C,
                                text: e_.intl.format(e_.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tS.UD,
                        children: (0, i.jsx)(tm.$, { onClick: t, text: e_.intl.string(e_.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tg = n(889137),
    tN = n(742158),
    tf = n(683071),
    tx = n(313961),
    tP = n(238017),
    tR = n(650588),
    tv = n(723090),
    tL = n(763827),
    tU = n(403362),
    tj = n(871123),
    ty = n(832163),
    tM = n(44724),
    tk = n(980094),
    tF = n(806931),
    tD = n(107610);
function tb(e) {
    let { handleClose: t, sku: n, application: l } = e,
        r = S.useCallback(() => {
            (0, tM.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = S.useCallback(() => {
            t();
            let e = ty.A.getStorefrontState(n.applicationId)?.activePage;
            (0, tj.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, tM.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, i.jsx)("div", {
        className: tD.$O,
        children: (0, i.jsx)(eE.Q, {
            text: e_.intl.string(e_.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tw = {
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
                        } = (0, W.Pv)(),
                        E = (0, er.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, et.V)(),
                        A = (0, h.bG)([ev.default], () => ev.default.getCurrentUser()),
                        O =
                            ((t = A?.id),
                            (n = eQ()),
                            (l = (function (e) {
                                let t = (0, h.bG)([tL.A], () => (tL.A.isConnected() ? tL.A.getChannelId() : null)),
                                    [n, l] = S.useState([]);
                                return (
                                    S.useEffect(() => {
                                        let n = null != t ? tx.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, tF.Xw)(t) && !(0, tF.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, tF.Ay)(e) && !(0, tF.Ay)(t)
                                                ? -1
                                                : (0, tF.Ay)(t) && !(0, tF.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, h.yK)([ev.default], () => T?.map(ev.default.getUser).filter(tU.Vq) ?? [], [T])),
                            S.useMemo(
                                () =>
                                    eY().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        g = (0, h.bG)([to.A], () => (null != E ? to.A.get(E) : null), [E]),
                        { userPrice: N } = (0, tv.CD)({ sku: g, priceSetAssignmentPurchaseType: e1.lid.GIFT }),
                        f = (0, tj.fq)(g),
                        x = (0, tj.xf)(g),
                        P = async (e, t) => {},
                        R = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, i.jsxs)("div", {
                                className: tD.mT,
                                children: [
                                    null != f &&
                                        (0, i.jsx)(tO.A, {
                                            containerClassName: tD.T3,
                                            cardImage: f,
                                            cardBackgroundImage: x,
                                            altText: g?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tD._T,
                                        children: [
                                            (0, i.jsx)(tR.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(tP.A, {
                                                setEmojiConfetti: p,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        L = () => {
                            let e = g?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tD.Tc,
                                children: [
                                    null != c && (m === ep.vQ.USER_PROFILE_WISHLIST || m === ep.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(e$.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eW, { selectedSkuId: E, validateSelectedGift: P, recipients: O }),
                                    (0, i.jsx)(eq.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tD.iX,
                                        innerClassName: tD.pt,
                                    }),
                                    null == g
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tD.AN,
                                              children: [
                                                  (0, i.jsx)(tN.z, {
                                                      className: tD.jr,
                                                      children: e_.intl.string(e_.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tD.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tD.Xb,
                                                              children:
                                                                  null != g &&
                                                                  null != f &&
                                                                  (0, i.jsx)(tO.A, {
                                                                      containerClassName: tD.Iy,
                                                                      cardImage: f,
                                                                      cardBackgroundImage: x,
                                                                      altText: g.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tD.vz,
                                                              children: [
                                                                  null != I && (0, i.jsx)(tk.Q, { application: I }),
                                                                  (0, i.jsx)(eN.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: g.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eN.E, {
                                                              variant: "text-md/semibold",
                                                              children: N,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != g &&
                                        (0, tj.Ri)(g) &&
                                        (0, i.jsx)(tf.w, { type: "info", children: e_.intl.string(e_.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(tE.J, {
                                            Icon: tT.C,
                                            text: e_.intl.format(e_.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != g && (0, i.jsx)(tb, { handleClose: a, sku: g, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tD.Du, children: [v(), L()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === A?.id || o.length > ep.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = S.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(nh, {
                paymentModalStepProps: e,
                layout: r.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(th, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let { children: t, discoverySessionId: n, loadId: l, applicationId: r, isGift: s, skuId: a, ...o } = e;
            return (
                ((e) => {
                    let { applicationId: t, skuId: n } = e,
                        l = (0, tp.h)(t);
                    S.useEffect(() => {
                        null == l ||
                            null == n ||
                            tu.A.isFetchingForSKU(n) ||
                            null != to.A.get(n) ||
                            (0, t_.Pp)(l.id, n);
                    }, [l, n]);
                })({ applicationId: r, skuId: a }),
                (0, i.jsx)(B.CheckoutRootProvider, {
                    loadId: l,
                    discoverySessionId: n,
                    applicationId: r,
                    skuIDs: [a],
                    purchaseType: e8.VV.ONE_TIME,
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
        tenantAnalyticsLocation: m.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tg.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => e_.intl.string(e_.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => e_.intl.string(e_.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(H.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tH = n(717925),
    tG = n(480642),
    tB = n(944355),
    tK = n(977445),
    tW = n(908419),
    tV = n(211287),
    tY = n(623373),
    tz = n(739508),
    tZ = n(715054);
(0, s.A)();
var tX = n(136857),
    tQ = n(158317),
    tq = n(566980),
    tJ = n(855104),
    t$ = n(120700),
    t0 = n(742810),
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
        r ? (s = e_.intl.string(t9.default.qwSlCO)) : (0, tY.Ab)(l) && (s = e_.intl.string(e_.t["0TmQRG"]));
        let a = (0, t5.dL)(t),
            o = (0, X.EZ)(t.id) ? t3.m[t.id].render({ className: ne.$ }) : (0, i.jsx)(t8.WH, { sku: t, product: l });
        return (0, i.jsx)(t8.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tT.C,
        });
    },
    nn = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t6.c)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, $.bG)([to.A], () => to.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(t7.y, { type: t7.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(nt, { sku: l, orbPriceAmount: n });
    },
    nl = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tB.vW, { label: e_.intl.string(e_.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tT.C });
    },
    nr = () => e_.intl.string(e_.t.wmcDyu);
function ni() {
    let { immediateDelivery: e } = (0, tW.U)(),
        t = nr();
    return (0, i.jsx)(tB._P, {
        variant: { type: tB.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let ns = (0, S.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    na = () => (0, S.useContext)(ns),
    no = { payment_gateway: e8.kM.VIRTUAL_CURRENCY, currency: e1.Yri.DISCORD_ORB },
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
                            { enabled: c } = tV.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, er.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: m,
                                orbPriceAmount: T,
                                orbBalanceToDisplay: E,
                                onClickCheckout: I,
                                showCollectiblesDiscountWarning: A,
                                errorMessage: O,
                            } = ((e) => {
                                let {
                                        skuId: t,
                                        onRedeemVirtualCurrency: n,
                                        orbRedemptionError: l,
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
                                        handleStepChange: s,
                                    } = e,
                                    { analyticsLocations: a } = (0, G.Ay)(),
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
                                    C = (0, tJ.gN)(),
                                    m = (0, S.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, et.V)(),
                                            { hasPaymentSources: s } = (0, t1.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, er.t4)((e) => e.contextMetadata),
                                            d = (0, S.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e1.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...((e = (0, t0.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: t$.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: e1.frM[e1.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? t0.rS.UNIFIED : t0.rS.LEGACY,
                                                        checkout_flow: t$.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [a, c, i, t, l, r, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, S.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e1.HAw.PAYMENT_FLOW_STARTED
                                                        ? _.default.track(e1.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e1.HAw.PAYMENT_FLOW_LOADED
                                                          ? _.default.track(e1.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e1.HAw.PAYMENT_FLOW_CANCELED
                                                            ? _.default.track(e1.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e1.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? _.default.track(e1.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e1.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? _.default.track(e1.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : _.default.track(e1.HAw.PAYMENT_FLOW_FAILED, {
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
                                (0, S.useEffect)(() => {
                                    null != l &&
                                        null !== m.current &&
                                        (T(e1.HAw.PAYMENT_FLOW_FAILED, l), (m.current = null));
                                }, [l, T]);
                                let E = (0, S.useCallback)(() => {
                                        (m.current = C),
                                            T(e1.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tq.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, T, s]),
                                    I = m.current ?? C,
                                    A = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, eb.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, S.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tQ.FY && null != t)
                                                    switch (t) {
                                                        case t2.INSUFFICIENT_ORB_BALANCE:
                                                            return e_.intl.string(e_.t.keFvXM);
                                                        case t2.SKU_ALREADY_OWNED:
                                                            return e_.intl.string(e_.t.m371Mx);
                                                        case t2.BUNDLE_PARTIALLY_OWNED:
                                                            return e_.intl.string(e_.t.v9oC0p);
                                                        default:
                                                            return e_.intl.string(e_.t.fqJZ11);
                                                    }
                                                return e instanceof tQ.j2
                                                    ? e_.intl.string(e_.t["2BmwgV"])
                                                    : e.code === tX.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? e_.intl.string(e_.t.keFvXM)
                                                      : e.code === tX.tG.ALREADY_PURCHASED
                                                        ? e_.intl.string(e_.t.m371Mx)
                                                        : e_.intl.string(e_.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: A,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: E,
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
                            g = (0, h.bG)([to.A], () => to.A.get(t), [t]),
                            N = (0, tK.uS)(g?.applicationId),
                            {
                                disabled: f,
                                tooltipText: x,
                                text: P,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, S.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: e_.intl.string(e_.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: e_.intl.string(e_.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: nr() };
                            })({ orbBalance: E, orbPriceAmount: c ? d : T, isInTestMode: N }),
                            R = (0, S.useMemo)(
                                () => ({ onClick: I, loading: r, text: P, disabled: f, tooltipText: x }),
                                [I, r, P, f, x],
                            ),
                            v = A ? e_.intl.format(e_.t.fsOXXO, {}) : null,
                            L = N ? e_.intl.string(e_.t.OvMyMd) : null;
                        return {
                            isStepLoading: m,
                            upperInlineNoticeProps: (0, S.useMemo)(() => {
                                if (null != L || null != v || null != O) {
                                    let e = [];
                                    return (
                                        null != L &&
                                            e.push({ type: "warning", message: L, key: "test-mode-warning-notice" }),
                                        null != v &&
                                            e.push({ type: "warning", message: v, key: "orb-checkout-warning-notice" }),
                                        null != O &&
                                            e.push({ type: "critical", message: O, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [L, v, O]),
                            purchaseItemContent: (0, i.jsx)(nn, { skuId: t, orbPriceAmount: c ? C : T }),
                            paymentMethodContent: (0, i.jsx)(nl, { orbBalance: E }),
                            legalContent: (0, i.jsx)(ni, {}),
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
                        orbRedemptionError: r,
                        onRedeemVirtualCurrency: s,
                        handleStepChange: t,
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ed.dZ, { children: (0, i.jsx)(tH.T, { ...d }) }),
                        (0, i.jsx)(ed.UX, { children: (0, i.jsx)(tG.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let { skuId: t, loadId: n, analyticsSourceLocation: l, children: r } = e,
                    { order: s, setOrder: a } = (0, er.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: o,
                        isRedeeming: u,
                        orbRedemptionError: c,
                        onRedeemVirtualCurrency: d,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, h.bG)([ev.default], () => eL.Ay.canUseShopDiscounts(ev.default.getCurrentUser())),
                            a = (0, h.bG)([to.A], () => to.A.get(t), [t]),
                            o = (0, tv.JL)({ sku: a }),
                            { product: u } = (0, eU.q)(t),
                            c = (0, S.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tY.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tz.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, tZ.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
                            _ = (0, S.useCallback)(
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
                    C = (0, S.useMemo)(
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
                            analyticsDataOverride: (0, S.useMemo)(() => {
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
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nu,
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            flowType: r.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: te,
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tw,
        },
        [r.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_CHECKOUT },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tC,
        },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: w,
            flowType: r.C.GUILD_PRODUCT_CHECKOUT,
        },
        [r.C.GUILD_ROLE_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.GUILD_ROLE_CHECKOUT,
            TENANT_CHECKOUT_FLOW_CONFIG: ta,
            purchaseType: e1.VVm.SUBSCRIPTION,
        },
        [r.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_BOOST_CHECKOUT },
    };
var nd = n(735305),
    nC = n(295405);
let np = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        { purchaseType: r } = (0, er.t4)((e) => ({ purchaseType: e.purchaseType })),
        s = S.useCallback(
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
                        r === e8.VV.SUBSCRIPTION
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
            l = (0, S.useRef)(!1),
            r = (0, n_.Hp)(),
            { handleStepChange: s } = t;
        return ((0, S.useEffect)(() => {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => e_.intl.string(e_.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => e_.intl.string(e_.t.QBnNHq) },
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
              ? e1.FYj
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
            } = e,
            c = (0, t0.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        _.default.track(e1.HAw.PAYMENT_FLOW_CANCELED, {
            load_id: t,
            discovery_session_id: i,
            payment_type: e1.frM[this.checkoutFlowConfiguration.purchaseType],
            is_gift: u,
            sku_id: n,
            sku_product_line: l,
            application_id: r,
            location: a,
            location_stack: s,
            source: o,
            payment_modal_version: "v2",
            checkout_design: c ? t0.rS.UNIFIED : t0.rS.LEGACY,
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
            p = S.useCallback(() => t(C), [t, C]),
            _ = S.useMemo(
                () =>
                    n === r.X.CUSTOM_STEP_BODY ? l() : (0, i.jsxs)("div", { className: nS.D, children: [s(), a()] }),
                [n, l, s, a],
            ),
            m = S.useMemo(() => ({ ...u, onClick: p, text: e_.intl.string(e_.t.XiOHRX) }), [u, p]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ed.dZ, { children: _ }),
                (0, i.jsx)(ed.UX, { children: (0, i.jsx)(nO.cy, { onBackClick: c, primaryCTAButtonProps: m }) }),
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
