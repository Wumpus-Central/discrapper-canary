n.d(t, { Mw: () => n_, gf: () => np.g, XZ: () => r.X, oE: () => nA, CL: () => r.C });
var l,
    r = n(75304);
n(321073);
var i = n(627968),
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
    E = n(174459),
    T = n(793574),
    m = n(862241),
    I = n(284009),
    O = n.n(I),
    A = n(964486),
    S = n(666646),
    h = n(64700),
    P = n(17928),
    g = n(871109);
let N = h.createContext(void 0);
function f() {
    let e = h.useContext(N);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function x(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, P.bG)([g.A], () => g.A.getGuildProduct(n));
    return (
        O()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(N.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function R(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = f(),
        s = (0, S.sw)();
    return (
        (0, A.Ay)(() => {
            var e;
            O()(null != s, "invoicePreview cannot be null"),
                (e = { guildId: r, guildProductListingId: l.id, invoicePreview: s }),
                (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        n.e("99406"),
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
var L = n(503698),
    U = n.n(L),
    v = n(939249),
    M = n(789645),
    y = n(935462),
    k = n(303612),
    j = n(916261),
    F = n(575650);
function D(e) {
    let { className: t, onClose: n } = e;
    return (0, i.jsx)(v.D, {
        className: U()(j.cG, t),
        onClick: n,
        children: (0, i.jsx)(M.P, { size: "xs", color: "currentColor", className: j.yP }),
    });
}
function w(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(y.rQ, {
        className: U()(j.wx, F.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(k.A, { className: j.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(D, { className: j.b, onClose: n }),
        ],
    });
}
var b = n(196617);
let H = {
    CHECKOUT_FLOW: r.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: m._M },
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
        tenantAnalyticsLocation: T.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = f();
        return n === o.pn.CONFIRM
            ? null
            : (0, i.jsx)(w, { guildProductListing: l, className: b.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(R, { ...e }) },
};
var G = n(20742),
    B = n(688810),
    K = n(197510),
    V = n(848149),
    W = n(937008),
    Y = n(106778),
    Z = n(228366),
    z = n(213530),
    X = n(966971),
    q = n(758836),
    Q = n(483764);
let J = { sliderBodyClassName: Q.Bz },
    $ = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(Y.Fk, { ref: n, className: Q.Lb, environment: t.current }),
                (0, i.jsx)(z.K, { options: l, className: U()(Q.Oh, { [Q.R]: !r }) }),
            ],
        });
    };
var ee = n(702841),
    et = n(775602),
    en = n(31823),
    el = n(211083),
    er = n(427675),
    ei = n(571878),
    es = n(590180),
    ea = n(953150),
    eo = n(524246),
    eu = n(14368),
    ec = n(61750),
    ed = n(972607),
    eC = n(482132),
    e_ = n(921925),
    ep = n(788868),
    eE = n(375708);
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
    O()(null != l, "Expected selectedSkuId"), O()(null != u, "Expected application");
    let _ = c[l];
    O()(null != _, "Expected sku");
    let p = null != o || null != r || null != s,
        E =
            a.length > 0
                ? eE.intl.formatToPlainString(eE.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (h.useEffect(() => {
        null == d ||
            p ||
            C.current ||
            ((C.current = !0),
            (0, ec.A)({
                product: d,
                overrideTitle: E,
                analyticsLocations: n,
                onCloseCallback: t,
                purchaseType: q.gs.FIAT,
            }));
    }, [d, n, t, p, E]),
    p)
        ? (0, i.jsx)(eC.dZ, { children: (0, i.jsx)(e_.A, {}) })
        : null;
}
function em(e) {
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
        c = (0, ee.bG)([et.A], () => et.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, ei.t4)((e) => e.selectedSkuId),
        _ = (0, ee.bG)([es.A], () => es.A.getProduct(C)),
        { confettiColors: p } = (0, ea.A)(_?.styles);
    return (
        h.useEffect(() => {
            t &&
                null != s &&
                null != C &&
                (u === ep.vQ.USER_PROFILE_WISHLIST || u === ep.vQ.DM_CHANNEL_WISHLIST) &&
                Z.h.dispatch({ type: "WISHLIST_GIFT_SENT", skuId: C, recipientId: s.id });
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
                              sprites: (0, eu.rA)(_?.categorySkuId),
                              colors: p?.map((e) => e.toHexString()),
                          }),
                  ],
              })
            : (0, i.jsx)(eT, { ...e })
    );
}
var eI = n(123292),
    eO = n(859040),
    eA = n(993408),
    eS = n(575593),
    eh = n(452027),
    eP = n(922016),
    eg = n(778712),
    eN = n(834730),
    ef = n(534514),
    ex = n(986687),
    eR = n(999291),
    eL = n(903209),
    eU = n(287809),
    ev = n(428262),
    eM = n(674658),
    ey = n(898461),
    ek = n(203632),
    ej = n(892118),
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
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, W.Pv)(),
        c = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
        d = ev.Ay.canUseShopDiscounts(c),
        C = (0, eR.Ay)(o?.id),
        _ = h.useRef(null),
        [p, E] = h.useState(!1),
        { product: T } = (0, eM.q)(t, !0),
        m = h.useMemo(() => (0, eA.fT)(T, d), [T, d]),
        I = (0, eb.V_)(T);
    if (null == T || 0 === T.items.length) return null;
    let [O] = T.items,
        A = (0, eF.VG)(T),
        S = null != o && o.id !== c?.id && T.type !== eS.R.BUNDLE && O.type !== eS.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: U()(eH.QU, s),
                children: (0, i.jsx)(eh.D, {
                    label: eE.intl.string(eE.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            eP.Y,
                            {
                                targetElementRef: _,
                                align: "center",
                                shouldShow: p,
                                onRequestClose: () => E(!1),
                                preload: () => (0, eL.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(ex.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eg.FT)(eg._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ey.T)(O) ? O : null,
                                        pendingProfileEffect: (0, ek.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, ej.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(v.D, {
                                        ...l,
                                        className: eH.Nx,
                                        innerRef: _,
                                        onClick: (e) => {
                                            E((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            p ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eN.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eE.intl.string(eE.t["2GnJQL"]),
                                        }),
                                    });
                                },
                            },
                            C?.userId,
                        ),
                }),
            }),
            (0, i.jsxs)("div", {
                className: U()(eH.i1, null != u ? eH.cN : eH.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eH.Ug,
                        children: [
                            (0, i.jsx)(eD.O, { product: T }),
                            (0, i.jsxs)("div", {
                                className: eH.JZ,
                                children: [
                                    (0, i.jsx)(eN.E, { variant: "text-md/semibold", children: A }),
                                    (0, i.jsx)(ef.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            T?.type === eS.R.BUNDLE
                                                ? null
                                                : O.type === eS.R.AVATAR_DECORATION
                                                  ? eE.intl.string(eE.t["7v0T9P"])
                                                  : O.type === eS.R.NAMEPLATE
                                                    ? eE.intl.string(eE.t.x5CoXR)
                                                    : O.type === eS.R.PROFILE_EFFECT
                                                      ? eE.intl.string(eE.t.wR5wOo)
                                                      : O.type === eS.R.PROFILE_FRAME
                                                        ? eE.intl.string(eE.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(ew.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: m,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eH.Wh,
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
var eB = n(783878),
    eK = n(966327),
    eV = n(427262);
let eW = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, W.Pv)();
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: l,
              children: (0, i.jsx)(eB.Z, {
                  selectionMode: "single",
                  label: eE.intl.string(eE.t.xFn72s),
                  placeholder: eE.intl.string(eE.t.R0vK0N),
                  value: s?.id,
                  onSelectionChange: (e) => {
                      let l = r.find((t) => t.id === e);
                      null != l && (n(l, t), a(l));
                  },
                  options: r.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${eV.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eK.A, { user: e, size: eg._3.SIZE_20 }),
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
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, eX.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = h.useMemo(() => eZ().uniq([...e, ...t]), [e, t]);
    return (0, P.yK)(
        [eU.default],
        () =>
            n.reduce((e, t) => {
                let n = eU.default.getUser(t);
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
        text: eE.intl.string(eE.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eO.Cz)({ analyticsLocations: l, analyticsSource: T.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
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
        r = (0, V.J)(),
        s = (0, h.useMemo)(
            () => ({
                ...t,
                onClose: (e) => {
                    t.onClose?.(e), e && n && r();
                },
            }),
            [t, n, r],
        );
    return (0, i.jsx)(np.g, { customPaymentModalProps: s, children: l });
}
let e9 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, h.useContext)(e3),
            { analyticsLocations: l } = (0, B.Ay)();
        return (0, i.jsx)(em, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e4 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => eE.intl.string(eE.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => eE.intl.string(eE.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    te = (e) => {
        let { step: t } = e,
            n = e4[t];
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
                            } = (0, W.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: _ } = (0, ei.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            p = (0, er.gU)(),
                            T = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                            m = eQ(),
                            I = async (e, t) => {
                                d(!0),
                                    null != s && a(),
                                    (await (0, eO.JJ)(e.id, t)) || a(eE.intl.string(eE.t["4kgVqQ"])),
                                    d(!1);
                            };
                        (0, A.Ay)(() => {
                            null != C &&
                                null != u &&
                                (c !== ep.vQ.DM_CHANNEL_WISHLIST &&
                                    E.default.track(e2.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let O = () =>
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
                                let e = (0, eA.pA)({ invoicePreview: _, selectedSkuId: C, skusById: p });
                                return c === ep.vQ.USER_PROFILE_WISHLIST || c === ep.vQ.DM_CHANNEL_WISHLIST
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(e0.Z, { giftRecipient: u }),
                                              O(),
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
                                              (0, i.jsx)(eW, {
                                                  selectedSkuId: C,
                                                  recipients: m,
                                                  className: e7.uh,
                                                  validateSelectedGift: I,
                                              }),
                                              O(),
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
                            ctaDisabled: null != s || null == u || u.id === T?.id || l.length > ep.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(n_, {
                    paymentModalStepProps: e,
                    layout: r.X.TWO_COLUMN,
                    renderLeftColumn: l,
                    renderRightColumn: s,
                    primaryCTAButtonProps: u,
                });
            },
            [o.pn.REVIEW]: m._M,
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, renderModalProps: n, additionalOptions: l, children: r, ...s } = e,
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
                            n = h.useRef(new Y.OH()),
                            [l, r] = h.useState(null),
                            [i, s] = h.useState(!1),
                            a = h.useMemo(() => (0, X.AB)({ purchaseType: q.gs.FIAT, skuId: t }), [t]);
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
                    E = (0, h.useMemo)(
                        () => ({
                            skuIDs: p,
                            setCustomConfettiVisible: d,
                            hideConfirmStepConfetti: _,
                            confettiCanvas: o,
                        }),
                        [p, d, _, o],
                    ),
                    {
                        paymentModalSkuId: T,
                        paymentModalOnClose: m,
                        paymentModalOnComplete: I,
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
                                    r(!1), n(e), Z.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
                                },
                                [n, r],
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
                            skuId: T,
                            onClose: m,
                            onComplete: I,
                            applicationId: e2.FYj,
                            initialPlanId: null,
                            onStepChange: O,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [T, m, I, n.transitionState, n.returnRef, O],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, i.jsx)(K.CheckoutRootProvider, {
                            ...s,
                            skuIDs: p,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e6.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e3.Provider, {
                                value: E,
                                children: (0, i.jsx)(e5, { paymentModalProps: A, isGift: s.isGift, children: r }),
                            }),
                        }),
                    ],
                });
            },
            tenantAnalyticsLocation: T.A.COLLECTIBLES_PAYMENT_MODAL,
        },
        CustomHeaderComponent: (e) => {
            let { step: t } = e,
                { isGift: n } = (0, W.Pv)();
            return n ? (0, i.jsx)(te, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e9, { ...e }), options: J },
    };
var tn = n(67480),
    tl = n(328968),
    tr = n(371794),
    ti = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let ts = {
    CHECKOUT_FLOW: r.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, W.Pv)(),
                s = (0, ei.t4)((e) => e.selectedSkuId),
                a = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                o = (0, P.bG)([tn.A], () => (null != s ? tn.A.get(s) : null), [s]),
                u = eQ(),
                c = (0, P.bG)([tl.A], () => (null != s ? tl.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, tr.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                _ = null == l || l.id === a?.id || t.length > ep.Jo,
                p = h.useMemo(() => ({ disabled: _ }), [_]);
            return (0, i.jsx)(n_, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: ti.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(ef.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: ti.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: ti.P6,
                        children: [
                            (0, i.jsx)(eW, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(eJ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: ti.iX,
                                innerClassName: ti.pt,
                            }),
                        ],
                    }),
                primaryCTAButtonProps: p,
            });
        },
        [o.pn.REVIEW]: m._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: c.zX,
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => e.children,
        tenantProvidesCheckoutRoot: !1,
        tenantAnalyticsLocation: T.A.APPLICATION_OTP_PAYMENT_MODAL,
    },
};
var ta = n(429913),
    to = n(733391),
    tu = n(821609),
    tc = n(318254),
    td = n(262427),
    tC = n(510022),
    t_ = n(317560),
    tp = n(366523),
    tE = n(208733);
function tT(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, B.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, ei.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, en.V)(),
        a = (0, er.gU)(),
        { isGift: o, giftRecipient: u } = (0, W.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, t_.j)(), t(), (0, tC.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let _ = null != C && C > 0;
    return (0, i.jsxs)(eC.dZ, {
        children: [
            (0, i.jsx)(e_.A, {}),
            (0, i.jsxs)("div", {
                className: tE.EL,
                children: [
                    (0, i.jsx)(tp.e, { sku: c, shape: "square", containerClassName: tE.LC }),
                    (0, i.jsx)(ef.D, {
                        variant: "heading-xl/semibold",
                        className: tE.RS,
                        children: eE.intl.string(eE.t["5glWta"]),
                    }),
                    (0, i.jsx)(eN.E, {
                        variant: "text-md/normal",
                        children: eE.intl.formatToPlainString(eE.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    _ &&
                        (0, i.jsx)("div", {
                            className: tE.Is,
                            children: (0, i.jsx)(td.J, {
                                Icon: tc.C,
                                text: eE.intl.format(eE.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tE.UD,
                        children: (0, i.jsx)(tu.$, { onClick: t, text: eE.intl.string(eE.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tm = n(889137),
    tI = n(742158),
    tO = n(683071),
    tA = n(313961),
    tS = n(238017),
    th = n(650588),
    tP = n(723090),
    tg = n(763827),
    tN = n(403362),
    tf = n(871123),
    tx = n(832163),
    tR = n(44724),
    tL = n(980094),
    tU = n(806931),
    tv = n(107610);
function tM(e) {
    let { handleClose: t, sku: n, application: l } = e,
        r = h.useCallback(() => {
            (0, tR.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = h.useCallback(() => {
            t();
            let e = tx.A.getStorefrontState(n.applicationId)?.activePage;
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
    return (0, i.jsx)("div", {
        className: tv.$O,
        children: (0, i.jsx)(eI.Q, {
            text: eE.intl.string(eE.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let ty = {
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
                            setEmojiConfetti: _,
                            setSoundEffect: p,
                            giftingOrigin: E,
                            additionalUserIds: T,
                        } = (0, W.Pv)(),
                        m = (0, ei.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, en.V)(),
                        O = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                        A =
                            ((t = O?.id),
                            (n = eQ()),
                            (l = (function (e) {
                                let t = (0, P.bG)([tg.A], () => (tg.A.isConnected() ? tg.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? tA.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, tU.Xw)(t) && !(0, tU.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, tU.Ay)(e) && !(0, tU.Ay)(t)
                                                ? -1
                                                : (0, tU.Ay)(t) && !(0, tU.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, P.yK)([eU.default], () => T?.map(eU.default.getUser).filter(tN.Vq) ?? [], [T])),
                            h.useMemo(
                                () =>
                                    eZ().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, P.bG)([tn.A], () => (null != m ? tn.A.get(m) : null), [m]),
                        { userPrice: g } = (0, tP.CD)({ sku: S, priceSetAssignmentPurchaseType: e2.lid.GIFT }),
                        N = (0, tf.fq)(S),
                        f = (0, tf.xf)(S),
                        x = async (e, t) => {},
                        R = (e) => {
                            null != p && p(null == e ? void 0 : e);
                        },
                        L = () =>
                            (0, i.jsxs)("div", {
                                className: tv.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(tp.A, {
                                            containerClassName: tv.T3,
                                            cardImage: N,
                                            cardBackgroundImage: f,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tv._T,
                                        children: [
                                            (0, i.jsx)(th.A, { sound: C, onSelect: R }),
                                            (0, i.jsx)(tS.A, {
                                                setEmojiConfetti: _,
                                                emojiConfetti: null == d ? void 0 : d,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        U = () => {
                            let e = S?.orbsReward;
                            return (0, i.jsxs)("div", {
                                className: tv.Tc,
                                children: [
                                    null != c && (E === ep.vQ.USER_PROFILE_WISHLIST || E === ep.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(e0.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eW, { selectedSkuId: m, validateSelectedGift: x, recipients: A }),
                                    (0, i.jsx)(eJ.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tv.iX,
                                        innerClassName: tv.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tv.AN,
                                              children: [
                                                  (0, i.jsx)(tI.z, {
                                                      className: tv.jr,
                                                      children: eE.intl.string(eE.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tv.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tv.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != N &&
                                                                  (0, i.jsx)(tp.A, {
                                                                      containerClassName: tv.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: f,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tv.vz,
                                                              children: [
                                                                  null != I && (0, i.jsx)(tL.Q, { application: I }),
                                                                  (0, i.jsx)(eN.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eN.E, {
                                                              variant: "text-md/semibold",
                                                              children: g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tf.Ri)(S) &&
                                        (0, i.jsx)(tO.w, { type: "info", children: eE.intl.string(eE.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(td.J, {
                                            Icon: tc.C,
                                            text: eE.intl.format(eE.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != S && (0, i.jsx)(tM, { handleClose: a, sku: S, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tv.Du, children: [L(), U()] }),
                        getLeftColumnComponent: L,
                        getRightColumnComponent: U,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > ep.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(n_, {
                paymentModalStepProps: e,
                layout: r.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: m._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(tT, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesCheckoutRoot: !0,
        CustomTenantProvider: (e) => {
            let {
                children: t,
                discoverySessionId: n,
                loadId: l,
                applicationId: r,
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
                    null == l || null == n || tl.A.isFetchingForSKU(n) || null != tn.A.get(n) || (0, to.Pp)(l.id, n);
                }, [l, n]);
            })({ applicationId: r, skuId: a });
            let d = o.onClose,
                C = h.useCallback(() => {
                    d();
                }, [d]),
                _ = h.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, i.jsx)(K.CheckoutRootProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: e6.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, i.jsx)(np.g, { customPaymentModalProps: _, children: t }),
            });
        },
        tenantAnalyticsLocation: T.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tm.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => eE.intl.string(eE.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => eE.intl.string(eE.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(G.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var tk = n(717925),
    tj = n(480642),
    tF = n(944355),
    tD = n(977445),
    tw = n(908419),
    tb = n(211287),
    tH = n(623373),
    tG = n(739508),
    tB = n(715054);
(0, s.A)();
var tK = n(136857),
    tV = n(158317),
    tW = n(566980),
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
        (l[(l.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (l[(l.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (l[(l.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (l[(l.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
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
            { product: l, isSocialLayerGameItem: r } = (0, t2.AO)({ sku: t }),
            s = (0, t1.oO)(l);
        r ? (s = eE.intl.string(t7.default.qwSlCO)) : (0, tH.Ab)(l) && (s = eE.intl.string(eE.t["0TmQRG"]));
        let a = (0, t1.dL)(t),
            o = (0, q.EZ)(t.id) ? t$.m[t.id].render({ className: t8.$ }) : (0, i.jsx)(tJ.WH, { sku: t, product: l });
        return (0, i.jsx)(tJ.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: tc.C,
        });
    },
    t3 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, t0.c)({ applicationId: (0, p.P)(t), skuIDs: [t] });
        let l = (0, ee.bG)([tn.A], () => tn.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tQ.y, { type: tQ.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(t6, { sku: l, orbPriceAmount: n });
    },
    t5 = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tF.vW, { label: eE.intl.string(eE.t.y0WGqP), value: null != t ? `${t}` : "", Icon: tc.C });
    },
    t9 = () => eE.intl.string(eE.t.wmcDyu);
function t4() {
    let { immediateDelivery: e } = (0, tw.U)(),
        t = t9();
    return (0, i.jsx)(tF._P, {
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
                    } = (0, h.useContext)(ne),
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
                            { enabled: c } = tb.A.useConfig({ location: "orb_checkout_review_step" }),
                            { invoicePreviewTotal: d, orderOrbPriceAmount: C } = (0, ei.t4)((e) => {
                                let n = null != e.orderRecord ? e.orderRecord.getInvoicePreview() : null;
                                return {
                                    invoicePreviewTotal: null != n ? n.total : null,
                                    orderOrbPriceAmount:
                                        null != n ? n.getInvoicePreviewLineItemUnitPriceForSku(t) : null,
                                };
                            }),
                            {
                                isStepLoading: _,
                                orbPriceAmount: T,
                                orbBalanceToDisplay: m,
                                onClickCheckout: I,
                                showCollectiblesDiscountWarning: O,
                                errorMessage: A,
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
                                    C = (0, tY.gN)(),
                                    _ = (0, h.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: T } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, en.V)(),
                                            { hasPaymentSources: s } = (0, tX.jm)(),
                                            {
                                                loadId: a,
                                                startTime: u,
                                                discoverySessionId: c,
                                            } = (0, ei.t4)((e) => e.contextMetadata),
                                            d = (0, h.useMemo)(() => {
                                                let e;
                                                return {
                                                    load_id: a,
                                                    discovery_session_id: c,
                                                    application_id: (0, p.P)(t),
                                                    location: l,
                                                    location_stack: l,
                                                    sku_id: t,
                                                    activity_session_id: i,
                                                    payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e2.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
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
                                            }, [a, c, i, t, l, r, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e2.HAw.PAYMENT_FLOW_STARTED
                                                        ? E.default.track(e2.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e6.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e2.HAw.PAYMENT_FLOW_LOADED
                                                          ? E.default.track(e2.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e2.HAw.PAYMENT_FLOW_CANCELED
                                                            ? E.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e2.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? E.default.track(e2.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e2.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? E.default.track(e2.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : E.default.track(e2.HAw.PAYMENT_FLOW_FAILED, {
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
                                        null !== _.current &&
                                        (T(e2.HAw.PAYMENT_FLOW_FAILED, l), (_.current = null));
                                }, [l, T]);
                                let m = (0, h.useCallback)(() => {
                                        (_.current = C),
                                            T(e2.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tW.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, T, s]),
                                    I = _.current ?? C,
                                    O = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, eb.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tV.FY && null != t)
                                                    switch (t) {
                                                        case tq.INSUFFICIENT_ORB_BALANCE:
                                                            return eE.intl.string(eE.t.keFvXM);
                                                        case tq.SKU_ALREADY_OWNED:
                                                            return eE.intl.string(eE.t.m371Mx);
                                                        case tq.BUNDLE_PARTIALLY_OWNED:
                                                            return eE.intl.string(eE.t.v9oC0p);
                                                        default:
                                                            return eE.intl.string(eE.t.fqJZ11);
                                                    }
                                                return e instanceof tV.j2
                                                    ? eE.intl.string(eE.t["2BmwgV"])
                                                    : e.code === tK.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                      ? eE.intl.string(eE.t.keFvXM)
                                                      : e.code === tK.tG.ALREADY_PURCHASED
                                                        ? eE.intl.string(eE.t.m371Mx)
                                                        : eE.intl.string(eE.t.fqJZ11);
                                            })(l, d),
                                        [l, d],
                                    ),
                                    orbPriceAmount: O,
                                    orbBalanceToDisplay: I,
                                    onClickCheckout: m,
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
                                disabled: N,
                                tooltipText: f,
                                text: x,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: eE.intl.string(eE.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: eE.intl.string(eE.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: t9() };
                            })({ orbBalance: m, orbPriceAmount: c ? d : T, isInTestMode: g }),
                            R = (0, h.useMemo)(
                                () => ({ onClick: I, loading: r, text: x, disabled: N, tooltipText: f }),
                                [I, r, x, N, f],
                            ),
                            L = O ? eE.intl.format(eE.t.fsOXXO, {}) : null,
                            U = g ? eE.intl.string(eE.t.OvMyMd) : null;
                        return {
                            isStepLoading: _,
                            upperInlineNoticeProps: (0, h.useMemo)(() => {
                                if (null != U || null != L || null != A) {
                                    let e = [];
                                    return (
                                        null != U &&
                                            e.push({ type: "warning", message: U, key: "test-mode-warning-notice" }),
                                        null != L &&
                                            e.push({ type: "warning", message: L, key: "orb-checkout-warning-notice" }),
                                        null != A &&
                                            e.push({ type: "critical", message: A, key: "orb-checkout-error-notice" }),
                                        e
                                    );
                                }
                                return null;
                            }, [U, L, A]),
                            purchaseItemContent: (0, i.jsx)(t3, { skuId: t, orbPriceAmount: c ? C : T }),
                            paymentMethodContent: (0, i.jsx)(t5, { orbBalance: m }),
                            legalContent: (0, i.jsx)(t4, {}),
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
                        (0, i.jsx)(eC.dZ, { children: (0, i.jsx)(tk.T, { ...d }) }),
                        (0, i.jsx)(eC.UX, { children: (0, i.jsx)(tj.lo, { primaryButtonProps: c }) }),
                    ],
                });
            },
        },
        TENANT_PROVIDER_CONFIGS: {
            tenantProvidesCheckoutRoot: !1,
            CustomTenantProvider: (e) => {
                let {
                        skuId: t,
                        loadId: n,
                        analyticsSourceLocation: l,
                        renderModalProps: r,
                        overrideAnalyticParams: s,
                        children: a,
                    } = e,
                    { order: o, setOrder: u } = (0, ei.t4)((e) => ({ order: e.order, setOrder: e.setOrder })),
                    {
                        orbProductContext: c,
                        isRedeeming: d,
                        orbRedemptionError: C,
                        onRedeemVirtualCurrency: _,
                    } = ((e) => {
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, P.bG)([eU.default], () => ev.Ay.canUseShopDiscounts(eU.default.getCurrentUser())),
                            a = (0, P.bG)([tn.A], () => tn.A.get(t), [t]),
                            o = (0, tP.JL)({ sku: a }),
                            { product: u } = (0, eM.q)(t),
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
                                error: _,
                            } = (0, tB.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
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
                    })({ onClose: r.onClose, orbProductContext: c, overrideAnalyticParams: s }),
                    E = (0, h.useMemo)(
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
                return (0, i.jsx)(ne.Provider, {
                    value: E,
                    children: (0, i.jsx)(np.g, { customPaymentModalProps: p, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e6.kM.VIRTUAL_CURRENCY, currency: e2.Yri.DISCORD_ORB },
        },
    },
    nn = {
        [r.C.ORB_CHECKOUT]: {
            flowType: r.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: nt,
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
            TENANT_CHECKOUT_FLOW_CONFIG: ty,
        },
        [r.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_CHECKOUT },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: ts,
        },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e2.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: H,
            flowType: r.C.GUILD_PRODUCT_CHECKOUT,
        },
        [r.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_ROLE_CHECKOUT },
        [r.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_BOOST_CHECKOUT },
    };
var nl = n(735305),
    nr = n(295405);
let ni = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = h.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = o.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(nr.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(nl.x, { ...l, onReturn: r });
};
var ns = n(86379),
    na = n(545075);
let no = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            r = (0, ns.Hp)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(na.oO, {})
            : null;
    },
    nu = {
        [r.C.ORB_CHECKOUT]: { allowGiftCustomization: !1, disablePaymentAuthSteps: !0, predicateStepType: "unified" },
        [r.C.COLLECTIBLES_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: { allowGiftCustomization: !0, predicateStepType: "one_time_payment" },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_BOOST_CHECKOUT]: { allowGiftCustomization: !1 },
        [r.C.GUILD_PRODUCT_CHECKOUT]: { allowGiftCustomization: !1, predicateStepType: "one_time_payment" },
        [r.C.GUILD_ROLE_CHECKOUT]: { allowGiftCustomization: !1 },
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
        if (null != e) return (t, n, l) => (0, i.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? c.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, i.jsx)(no, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(u.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== r.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(ni, {
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
                options: { modalSizeGetter: () => "xl", useBreadcrumbLabel: () => eE.intl.string(eE.t["W685+b"]) },
            };
    }
    getReviewStepConfig() {
        let e = this.getCheckoutStep(o.pn.REVIEW);
        return {
            key: o.pn.REVIEW,
            renderStep: (t) => (0, i.jsx)(e, { ...t }),
            options: { useBreadcrumbLabel: () => eE.intl.string(eE.t.QBnNHq) },
        };
    }
    createDefinedStepConfigsArray(e) {
        return e.filter((e) => null != e);
    }
    generateCheckoutStepConfigs(e) {
        let { isGift: t } = e,
            { CUSTOM_CONFIRM_STEP_CONFIG: n } = this.tenantCheckoutFlowConfig,
            { disablePaymentAuthSteps: l } = this.internalCheckoutFlowControls,
            r = this.getPredicateStepConfig(),
            i = this.getGiftCustomizationStepConfig({ isGift: t }),
            s = this.getAddPaymentStepConfig({ isGift: t }),
            a = this.getReviewStepConfig(),
            u = this.createDefinedStepConfigsArray([r, i, s, ...(l ? [] : c.hh), a]);
        return null != n && u.push({ key: o.pn.CONFIRM, renderStep: n.renderStep, options: n.options }), u;
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
            } = e,
            c = (0, tz.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        E.default.track(e2.HAw.PAYMENT_FLOW_CANCELED, {
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
            checkout_design: c ? tz.rS.UNIFIED : tz.rS.LEGACY,
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
                discoverySessionId: C,
                applicationId: p,
                analyticsSourceLocation: E,
                analyticsLocations: T,
                analyticsObject: m,
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
            N = !!(null != r && r.isGift),
            f = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: N });
                return (n) =>
                    (0, i.jsx)(e, {
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
                        analyticsLocations: T,
                        analyticsObject: m,
                        analyticsSourceLocation: E,
                        renderModalProps: n,
                        giftContextProps: r,
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
                        (_({ checkoutSucceeded: f, order: A.current }),
                        this.trackPaymentFlowCanceled({
                            loadId: O.current,
                            skuId: c,
                            skuProductLine: d,
                            applicationId: g,
                            discoverySessionId: C,
                            analyticsLocations: T,
                            analyticsObject: m,
                            analyticsSourceLocation: E,
                            isGift: N,
                        })),
                        null != t.onCloseCallback && t.onCloseCallback(f),
                        null != u && u(f, c);
                },
                modalKey: h,
            },
        );
    }
}
n(71804), n(584160);
var nd = n(981036),
    nC = n(367644);
let n_ = (e) => {
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
        _ = h.useCallback(() => t(C), [t, C]),
        p = h.useMemo(
            () => (n === r.X.CUSTOM_STEP_BODY ? l() : (0, i.jsxs)("div", { className: nC.D, children: [s(), a()] })),
            [n, l, s, a],
        ),
        E = h.useMemo(() => ({ ...u, onClick: _, text: eE.intl.string(eE.t.XiOHRX) }), [u, _]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eC.dZ, { children: p }),
            (0, i.jsx)(eC.UX, { children: (0, i.jsx)(nd.cy, { onBackClick: c, primaryCTAButtonProps: E }) }),
        ],
    });
};
var np = n(551892);
let nE = null,
    nT = null,
    nm = null,
    nI = null,
    nO = null,
    nA = {
        [r.C.ORB_CHECKOUT]: {
            get: function () {
                return null == nE && (nE = new nc({ checkoutFlow: r.C.ORB_CHECKOUT })), nE;
            },
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == nT && (nT = new nc({ checkoutFlow: r.C.COLLECTIBLES_CHECKOUT })), nT;
            },
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new nc({ checkoutFlow: r.C.SLAYER_STOREFRONT_CHECKOUT })), nm;
            },
        },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nI && (nI = new nc({ checkoutFlow: r.C.PREMIUM_APPS_OTP_CHECKOUT })), nI;
            },
        },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nO && (nO = new nc({ checkoutFlow: r.C.GUILD_PRODUCT_CHECKOUT })), nO;
            },
        },
    };
