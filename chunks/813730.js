n.d(t, { Mw: () => nd, gf: () => nC.g, XZ: () => r.X, oE: () => nI, CL: () => r.C });
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
function N() {
    let e = h.useContext(x);
    return O()(null != e, "GuildProductPurchaseContext not found"), e;
}
function f(e) {
    let { children: t, skuId: n, ...l } = e,
        r = (0, P.bG)([g.A], () => g.A.getGuildProduct(n));
    return (
        O()(null != r, "guildProductListing cannot be null"),
        (0, i.jsx)(x.Provider, { value: { guildProductListing: r, ...l }, children: t })
    );
}
function R(e) {
    let { handleClose: t } = e,
        { guildProductListing: l, guildId: r } = N(),
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
    return (0, i.jsx)(L.D, {
        className: v()(k.cG, t),
        onClick: n,
        children: (0, i.jsx)(y.P, { size: "xs", color: "currentColor", className: k.yP }),
    });
}
function w(e) {
    let { guildProductListing: t, onClose: n, className: l } = e;
    return (0, i.jsxs)(M.rQ, {
        className: v()(k.wx, F.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)(j.A, { className: k.F0, listing: t, imageSize: 500, alt: "" }),
            (0, i.jsx)(D, { className: k.b, onClose: n }),
        ],
    });
}
var b = n(196617);
let H = {
    CHECKOUT_FLOW: r.C.GUILD_PRODUCT_CHECKOUT,
    CHECKOUT_STEPS: { [o.pn.REVIEW]: T._M },
    TENANT_PROVIDER_CONFIGS: {
        CustomTenantProvider: (e) => {
            let {
                tenantParams: { guildId: t },
                skuId: n,
                children: l,
            } = e;
            return (0, i.jsx)(f, { guildId: t, skuId: n, children: l });
        },
        tenantProvidesPaymentContext: !1,
        tenantAnalyticsLocation: E.A.GUILD_PRODUCT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { onClose: t, step: n } = e,
            { guildProductListing: l } = N();
        return n === o.pn.CONFIRM
            ? null
            : (0, i.jsx)(w, { guildProductListing: l, className: b.w, onClose: () => t(!1) });
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(R, { ...e }) },
};
var G = n(20742),
    K = n(688810),
    B = n(259160),
    W = n(768050),
    V = n(106778),
    Y = n(228366),
    Z = n(213530),
    z = n(966971),
    X = n(758836),
    q = n(483764);
let Q = { sliderBodyClassName: q.Bz },
    J = (e) => {
        let { environment: t, setConfettiCanvas: n, customConfettiDisplayOptions: l, customConfettiVisible: r } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(V.Fk, { ref: n, className: q.Lb, environment: t.current }),
                (0, i.jsx)(Z.K, { options: l, className: v()(q.Oh, { [q.R]: !r }) }),
            ],
        });
    };
var $ = n(702841),
    ee = n(775602),
    et = n(31823),
    en = n(211083),
    el = n(427675),
    er = n(722847),
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
        C = h.useRef(!1);
    O()(null != l, "Expected selectedSkuId"), O()(null != u, "Expected application");
    let p = c[l];
    O()(null != p, "Expected sku");
    let _ = null != o || null != r || null != s,
        m =
            a.length > 0
                ? e_.intl.formatToPlainString(e_.t.VuV3Td, { discountOfferAmount: a[0].discount.amount })
                : void 0;
    return (h.useEffect(() => {
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
        } = (0, B.Pv)(),
        c = (0, $.bG)([ee.A], () => ee.A.useReducedMotion),
        d = h.useRef(null),
        C = (0, er.t4)((e) => e.selectedSkuId),
        p = (0, $.bG)([ei.A], () => ei.A.getProduct(C)),
        { confettiColors: _ } = (0, es.A)(p?.styles);
    return (
        h.useEffect(() => {
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
var eT = n(123292),
    eI = n(859040),
    eO = n(993408),
    eA = n(575593),
    eS = n(452027),
    eh = n(922016),
    eP = n(778712),
    eg = n(834730),
    ex = n(534514),
    eN = n(986687),
    ef = n(999291),
    eR = n(903209),
    eU = n(287809),
    ev = n(428262),
    eL = n(674658),
    ey = n(898461),
    eM = n(203632),
    ej = n(892118),
    ek = n(536572),
    eF = n(14702),
    eD = n(219103),
    ew = n(525723),
    eb = n(780651);
function eH(e) {
    let {
            skuId: t,
            priceAmount: n,
            priceCurrency: l,
            className: r,
            previewHeaderClassName: s,
            hideProfilePreview: a,
        } = e,
        { giftRecipient: o, giftRecipientError: u } = (0, B.Pv)(),
        c = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
        d = ev.Ay.canUseShopDiscounts(c),
        C = (0, ef.Ay)(o?.id),
        p = h.useRef(null),
        [_, m] = h.useState(!1),
        { product: E } = (0, eL.q)(t, !0),
        T = h.useMemo(() => (0, eO.fT)(E, d), [E, d]),
        I = (0, ew.V_)(E);
    if (null == E || 0 === E.items.length) return null;
    let [O] = E.items,
        A = (0, ek.VG)(E),
        S = null != o && o.id !== c?.id && E.type !== eA.R.BUNDLE && O.type !== eA.R.NAMEPLATE && !a;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)("div", {
                className: v()(eb.QU, s),
                children: (0, i.jsx)(eS.D, {
                    label: e_.intl.string(e_.t.PpoJzt),
                    children:
                        S &&
                        (0, i.jsx)(
                            eh.Y,
                            {
                                targetElementRef: p,
                                align: "center",
                                shouldShow: _,
                                onRequestClose: () => m(!1),
                                preload: () => (0, eR.A)(o.id, o.getAvatarURL(null, 80)),
                                renderPopout: (e) =>
                                    (0, i.jsx)(eN.A, {
                                        ...e,
                                        user: o,
                                        pendingAvatar: o.getAvatarURL(null, (0, eP.FT)(eP._3.SIZE_80)),
                                        pendingAvatarDecoration: (0, ey.T)(O) ? O : null,
                                        pendingProfileEffect: (0, eM.C3)(O) ? O : null,
                                        pendingProfileFrame: (0, ej.s)(O) ? O : null,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideExampleButton: !0,
                                    }),
                                children: (e) => {
                                    let { onClick: t, onMouseDown: n, ...l } = e;
                                    return (0, i.jsx)(L.D, {
                                        ...l,
                                        className: eb.Nx,
                                        innerRef: p,
                                        onClick: (e) => {
                                            m((e) => !e), t?.(e);
                                        },
                                        onMouseDown: (e) => {
                                            _ ? e.stopPropagation() : n?.(e);
                                        },
                                        children: (0, i.jsx)(eg.E, {
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
                className: v()(eb.i1, null != u ? eb.cN : eb.no),
                children: [
                    (0, i.jsxs)("div", {
                        className: eb.Ug,
                        children: [
                            (0, i.jsx)(eF.O, { product: E }),
                            (0, i.jsxs)("div", {
                                className: eb.JZ,
                                children: [
                                    (0, i.jsx)(eg.E, { variant: "text-md/semibold", children: A }),
                                    (0, i.jsx)(ex.D, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children:
                                            E?.type === eA.R.BUNDLE
                                                ? null
                                                : O.type === eA.R.AVATAR_DECORATION
                                                  ? e_.intl.string(e_.t["7v0T9P"])
                                                  : O.type === eA.R.NAMEPLATE
                                                    ? e_.intl.string(e_.t.x5CoXR)
                                                    : O.type === eA.R.PROFILE_EFFECT
                                                      ? e_.intl.string(e_.t.wR5wOo)
                                                      : O.type === eA.R.PROFILE_FRAME
                                                        ? e_.intl.string(e_.t.GWrZOd)
                                                        : null,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(eD.x, {
                                priceAmount: n,
                                priceCurrency: l,
                                discount: T,
                                discountOfferAmount: I,
                                variant: "text-md/bold",
                            }),
                        ],
                    }),
                    null != u &&
                        (0, i.jsx)("div", {
                            className: eb.Wh,
                            children: (0, i.jsx)(eg.E, {
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
    eK = n(966327),
    eB = n(427262);
let eW = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: l, recipients: r } = e,
        { giftRecipient: s, setGiftRecipient: a } = (0, B.Pv)();
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
                      label: `${eB.Ay.getUserTag(e)}`,
                      leading: (0, i.jsx)(eK.A, { user: e, size: eP._3.SIZE_20 }),
                  })),
              }),
          });
};
var eV = n(735438),
    eY = n.n(eV),
    eZ = n(427358),
    ez = n(570287),
    eX = n(994500);
function eq() {
    let e = (0, P.yK)([eX.A], () => eX.A.getFriendIDs()),
        t = (0, P.yK)([eZ.A], () =>
            eZ.A.getUserAffinities()
                .filter((e) => {
                    let { isFriend: t, communicationProbability: n, vcProbability: l, otherUserId: r } = e,
                        i = (0, ez.q)(r);
                    return !t && (n >= 0.1 || l >= 0.1) && i;
                })
                .map((e) => {
                    let { otherUserId: t } = e;
                    return t;
                }),
        ),
        n = h.useMemo(() => eY().uniq([...e, ...t]), [e, t]);
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
var eQ = n(871181),
    eJ = n(318007),
    e$ = n(285719),
    e0 = n(976860),
    e1 = n(652215),
    e2 = n(353791);
function e7(e) {
    let { handleClose: t, selectedSkuId: n } = e,
        { analyticsLocations: l } = (0, K.Ay)(E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL);
    return (0, i.jsx)(eT.Q, {
        text: e_.intl.string(e_.t.J82mpK),
        onClick: function () {
            t(),
                (0, a.closeAllModals)(),
                null == n
                    ? (0, eI.Cz)({ analyticsLocations: l, analyticsSource: E.A.COLLECTIBLES_GIFT_CUSTOMIZATION_MODAL })
                    : (0, e0.pX)(`${e1.BVt.COLLECTIBLES_SHOP}#itemSkuId=${n}`);
        },
        textVariant: "text-sm/medium",
    });
}
var e8 = n(818348);
let e6 = (0, h.createContext)({
        setCustomConfettiVisible: () => {},
        confettiCanvas: null,
        hideConfirmStepConfetti: !1,
        skuIDs: [],
    }),
    e3 = (e) => {
        let { hideConfirmStepConfetti: t, confettiCanvas: n } = (0, h.useContext)(e6),
            { analyticsLocations: l } = (0, K.Ay)();
        return (0, i.jsx)(eE, { analyticsLocations: l, hideConfetti: t, confettiCanvas: n, ...e });
    },
    e5 = {
        [o.pn.GIFT_CUSTOMIZATION]: () => e_.intl.string(e_.t["JCFN/y"]),
        [o.pn.AWAITING_PURCHASE_TOKEN_AUTH]: () => e_.intl.string(e_.t.lDbi6H),
        [o.pn.CONFIRM]: () => "",
    },
    e4 = (e) => {
        let { step: t } = e,
            n = e5[t];
        return null == n ? null : (0, i.jsx)(G.rQ, { title: n(), titleTextVariant: "heading-lg/semibold" });
    },
    e9 = {
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
                            } = (0, B.Pv)(),
                            { selectedSkuId: C, checkoutInvoicePreview: p } = (0, er.t4)((e) => ({
                                selectedSkuId: e.selectedSkuId,
                                checkoutInvoicePreview: e.checkoutInvoicePreview,
                            })),
                            _ = (0, el.gU)(),
                            E = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                            T = eq(),
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
                                    m.default.track(e1.HAw.COLLECTIBLES_GIFTING_SHOP_ITEM_CLICKED, { sku_id: C }),
                                I(u, C));
                        });
                        let O = () =>
                            (0, i.jsx)(eQ.A, {
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
                                let e = (0, eO.pA)({ invoicePreview: p, selectedSkuId: C, skusById: _ });
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
                                                  recipients: T,
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
                            ctaDisabled: null != s || null == u || u.id === E?.id || l.length > ep.Jo,
                            loading: o,
                        };
                    })({ handleStepChange: t, handleClose: n }),
                    u = h.useMemo(() => ({ loading: o, disabled: a }), [o, a]);
                return (0, i.jsx)(nd, {
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
            tenantProvidesPaymentContext: !0,
            CustomTenantProvider: (e) => {
                let { skuId: t, renderModalProps: n, additionalOptions: l, children: r, ...s } = e,
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
                            n = h.useRef(new V.OH()),
                            [l, r] = h.useState(null),
                            [i, s] = h.useState(!1),
                            a = h.useMemo(() => (0, z.AB)({ purchaseType: X.gs.FIAT, skuId: t }), [t]);
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
                        let { skuIDs: t, onClose: n, onComplete: l, setCustomConfettiVisible: r } = e,
                            i = t[0] ?? null,
                            s = h.useCallback(() => {
                                r(!0), l?.();
                            }, [l, r]);
                        return {
                            paymentModalSkuId: i,
                            paymentModalOnClose: h.useCallback(
                                (e) => {
                                    r(!1), n(e), Y.h.dispatch({ type: "SKU_PURCHASE_MODAL_CLOSE", error: null });
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
                        skuIDs: _,
                        setCustomConfettiVisible: d,
                    }),
                    O = null != l ? l.onStepChange : void 0,
                    A = (0, h.useMemo)(
                        () => ({
                            skuId: E,
                            onClose: T,
                            onComplete: I,
                            applicationId: e1.FYj,
                            initialPlanId: null,
                            onStepChange: O,
                            hideShadow: !0,
                            transitionState: n.transitionState,
                            returnRef: n.returnRef,
                        }),
                        [E, T, I, n.transitionState, n.returnRef, O],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(J, {
                            environment: a,
                            setConfettiCanvas: u,
                            customConfettiDisplayOptions: C,
                            customConfettiVisible: c,
                        }),
                        (0, i.jsx)(W.PaymentContextProvider, {
                            ...s,
                            skuIDs: _,
                            stepConfigs: s.stepConfigs,
                            activeSubscription: null,
                            purchaseType: e8.VV.ONE_TIME,
                            excludeSubscriptionPlansBySKU: !0,
                            children: (0, i.jsx)(e6.Provider, {
                                value: m,
                                children: (0, i.jsx)(nC.g, { customPaymentModalProps: A, children: r }),
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
            return n ? (0, i.jsx)(e4, { step: t }) : null;
        },
        CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(e3, { ...e }), options: Q },
    };
var te = n(67480),
    tt = n(328968),
    tn = n(371794),
    tl = n(565756);
o.pn.GIFT_CUSTOMIZATION;
let tr = {
    CHECKOUT_FLOW: r.C.PREMIUM_APPS_OTP_CHECKOUT,
    CHECKOUT_STEPS: {
        [o.pn.GIFT_CUSTOMIZATION]: (e) => {
            let { customGiftMessage: t = "", setCustomGiftMessage: n, giftRecipient: l } = (0, B.Pv)(),
                s = (0, er.t4)((e) => e.selectedSkuId),
                a = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                o = (0, P.bG)([te.A], () => (null != s ? te.A.get(s) : null), [s]),
                u = eq(),
                c = (0, P.bG)([tt.A], () => (null != s ? tt.A.getForSKU(s) : null), [s]),
                d =
                    c?.headerBackground != null && o?.applicationId != null
                        ? (0, tn.YE)(o.applicationId, c.headerBackground, 256)
                        : void 0,
                C = async (e, t) => {},
                p = null == l || l.id === a?.id || t.length > ep.Jo,
                _ = h.useMemo(() => ({ disabled: p }), [p]);
            return (0, i.jsx)(nd, {
                onBackClick: e.handleClose,
                paymentModalStepProps: e,
                layout: r.X.TWO_COLUMN,
                renderLeftColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tl.P6,
                        children: [
                            o?.name != null &&
                                (0, i.jsx)(ex.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: o.name,
                                }),
                            null != d && (0, i.jsx)("img", { src: d, alt: o?.name ?? "", className: tl.LC }),
                        ],
                    }),
                renderRightColumn: () =>
                    (0, i.jsxs)("div", {
                        className: tl.P6,
                        children: [
                            (0, i.jsx)(eW, { recipients: u, selectedSkuId: s, validateSelectedGift: C }),
                            (0, i.jsx)(eQ.A, {
                                onTextChange: (e) => n?.(e),
                                pendingText: t,
                                currentText: t,
                                disableThemedBackground: !0,
                                className: tl.iX,
                                innerClassName: tl.pt,
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
var ti = n(429913),
    ts = n(733391),
    ta = n(821609),
    to = n(318254),
    tu = n(262427),
    tc = n(510022),
    td = n(317560),
    tC = n(366523),
    tp = n(208733);
function t_(e) {
    let { handleClose: t } = e,
        { analyticsLocations: n } = (0, K.Ay)(),
        { selectedSkuId: l, entitlementsGranted: r } = (0, er.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            entitlementsGranted: e.entitlementsGranted,
        })),
        { application: s } = (0, et.V)(),
        a = (0, el.gU)(),
        { isGift: o, giftRecipient: u } = (0, B.Pv)();
    O()(null != l, "Expected selectedSkuId"), O()(null != s, "Expected application");
    let c = a[l];
    O()(null != c, "Expected sku");
    let d = r.find((e) => e.sku_id === l),
        C = d?.metadata?.orbs_reward;
    if (
        (h.useEffect(() => {
            o || ((0, td.j)(), t(), (0, tc.n)({ sku: c, application: s, analyticsLocations: n, orbsReward: C }));
        }, [o, c, s, t, n, C]),
        !o)
    )
        return null;
    let p = null != C && C > 0;
    return (0, i.jsxs)(ed.dZ, {
        children: [
            (0, i.jsx)(eC.A, {}),
            (0, i.jsxs)("div", {
                className: tp.EL,
                children: [
                    (0, i.jsx)(tC.e, { sku: c, shape: "square", containerClassName: tp.LC }),
                    (0, i.jsx)(ex.D, {
                        variant: "heading-xl/semibold",
                        className: tp.RS,
                        children: e_.intl.string(e_.t["5glWta"]),
                    }),
                    (0, i.jsx)(eg.E, {
                        variant: "text-md/normal",
                        children: e_.intl.formatToPlainString(e_.t["2VjPTw"], {
                            itemName: c.name,
                            giftRecipient: u?.username ?? "your recipient",
                        }),
                    }),
                    p &&
                        (0, i.jsx)("div", {
                            className: tp.Is,
                            children: (0, i.jsx)(tu.J, {
                                Icon: to.C,
                                text: e_.intl.format(e_.t["ZV+aS9"], { orbCount: C }),
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: tp.UD,
                        children: (0, i.jsx)(ta.$, { onClick: t, text: e_.intl.string(e_.t.cpT0Cq), fullWidth: !0 }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var tm = n(889137),
    tE = n(742158),
    tT = n(683071),
    tI = n(313961),
    tO = n(238017),
    tA = n(650588),
    tS = n(723090),
    th = n(763827),
    tP = n(403362),
    tg = n(871123),
    tx = n(832163),
    tN = n(44724),
    tf = n(980094),
    tR = n(806931),
    tU = n(107610);
function tv(e) {
    let { handleClose: t, sku: n, application: l } = e,
        r = h.useCallback(() => {
            (0, tN.G)({ applicationId: n.applicationId });
        }, [n.applicationId]),
        s = h.useCallback(() => {
            t();
            let e = tx.A.getStorefrontStateForApplicationId(n.applicationId)?.activePage;
            (0, tg.uV)({
                pathname: window.location.pathname,
                search: window.location.search,
                applicationId: n.applicationId,
                pageIndex: e ?? 0,
                guildId: l?.guildId,
                skuId: n.id,
            }) ||
                ((0, a.closeAllModals)(),
                (0, tN.default)({ applicationId: n.applicationId, pageIndex: e ?? 0, skuId: n.id, slug: n.slug }));
        }, [n.applicationId, n.id, n.slug, t, l]);
    return (0, i.jsx)("div", {
        className: tU.$O,
        children: (0, i.jsx)(eT.Q, {
            text: e_.intl.string(e_.t.ImioFL),
            onMouseDown: r,
            onClick: s,
            textVariant: "text-sm/medium",
            lineClamp: void 0,
        }),
    });
}
let tL = {
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
                            additionalUserIds: E,
                        } = (0, B.Pv)(),
                        T = (0, er.t4)((e) => e.selectedSkuId),
                        { application: I } = (0, et.V)(),
                        O = (0, P.bG)([eU.default], () => eU.default.getCurrentUser()),
                        A =
                            ((t = O?.id),
                            (n = eq()),
                            (l = (function (e) {
                                let t = (0, P.bG)([th.A], () => (th.A.isConnected() ? th.A.getChannelId() : null)),
                                    [n, l] = h.useState([]);
                                return (
                                    h.useEffect(() => {
                                        let n = null != t ? tI.A.getParticipants(t) : [],
                                            r = [],
                                            i = new Set();
                                        for (let t of n)
                                            (!(0, tR.Xw)(t) && !(0, tR.Ay)(t)) ||
                                                t.user.id === e ||
                                                i.has(t.user.id) ||
                                                (i.add(t.user.id), r.push(t));
                                        r.sort((e, t) =>
                                            (0, tR.Ay)(e) && !(0, tR.Ay)(t)
                                                ? -1
                                                : (0, tR.Ay)(t) && !(0, tR.Ay)(e)
                                                  ? 1
                                                  : 0,
                                        ),
                                            l(r.map((e) => e.user));
                                    }, [t, e]),
                                    n
                                );
                            })(t)),
                            (r = (0, P.yK)([eU.default], () => E?.map(eU.default.getUser).filter(tP.Vq) ?? [], [E])),
                            h.useMemo(
                                () =>
                                    eY().uniqWith(
                                        [...(null != c ? [c] : []), ...r, ...l, ...n],
                                        (e, t) => e.id === t.id,
                                    ),
                                [c, r, l, n],
                            )),
                        S = (0, P.bG)([te.A], () => (null != T ? te.A.get(T) : null), [T]),
                        { normalPrice: g, discountedPrice: x } = (0, tS.CD)({
                            sku: S,
                            priceSetAssignmentPurchaseType: e1.lid.GIFT,
                        }),
                        N = (0, tg.fq)(S),
                        f = (0, tg.xf)(S),
                        R = async (e, t) => {},
                        U = (e) => {
                            null != _ && _(null == e ? void 0 : e);
                        },
                        v = () =>
                            (0, i.jsxs)("div", {
                                className: tU.mT,
                                children: [
                                    null != N &&
                                        (0, i.jsx)(tC.A, {
                                            containerClassName: tU.T3,
                                            cardImage: N,
                                            cardBackgroundImage: f,
                                            altText: S?.name ?? "",
                                            shape: "square",
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: tU._T,
                                        children: [
                                            (0, i.jsx)(tA.A, { sound: C, onSelect: U }),
                                            (0, i.jsx)(tO.A, {
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
                                className: tU.Tc,
                                children: [
                                    null != c && (m === ep.vQ.USER_PROFILE_WISHLIST || m === ep.vQ.DM_CHANNEL_WISHLIST)
                                        ? (0, i.jsx)(e$.Z, { giftRecipient: c })
                                        : (0, i.jsx)(eW, { selectedSkuId: T, validateSelectedGift: R, recipients: A }),
                                    (0, i.jsx)(eQ.A, {
                                        onTextChange: (e) => u?.(e),
                                        pendingText: o,
                                        currentText: o,
                                        disableThemedBackground: !0,
                                        className: tU.iX,
                                        innerClassName: tU.pt,
                                    }),
                                    null == S
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: tU.AN,
                                              children: [
                                                  (0, i.jsx)(tE.z, {
                                                      className: tU.jr,
                                                      children: e_.intl.string(e_.t.PpoJzt),
                                                  }),
                                                  (0, i.jsxs)("div", {
                                                      className: tU.Wx,
                                                      children: [
                                                          (0, i.jsx)("div", {
                                                              className: tU.Xb,
                                                              children:
                                                                  null != S &&
                                                                  null != N &&
                                                                  (0, i.jsx)(tC.A, {
                                                                      containerClassName: tU.Iy,
                                                                      cardImage: N,
                                                                      cardBackgroundImage: f,
                                                                      altText: S.name,
                                                                      shape: "square",
                                                                  }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              className: tU.vz,
                                                              children: [
                                                                  null != I && (0, i.jsx)(tf.Q, { application: I }),
                                                                  (0, i.jsx)(eg.E, {
                                                                      variant: "text-sm/semibold",
                                                                      children: S.name,
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(eg.E, {
                                                              variant: "text-md/semibold",
                                                              children: x ?? g,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                    null != S &&
                                        (0, tg.Ri)(S) &&
                                        (0, i.jsx)(tT.w, { type: "info", children: e_.intl.string(e_.t.lORYb6) }),
                                    null != e &&
                                        e > 0 &&
                                        (0, i.jsx)(tu.J, {
                                            Icon: to.C,
                                            text: e_.intl.format(e_.t["ZV+aS9"], { orbCount: e }),
                                        }),
                                    null != S && (0, i.jsx)(tv, { handleClose: a, sku: S, application: I }),
                                ],
                            });
                        };
                    return {
                        renderStepBody: () => (0, i.jsxs)("div", { className: tU.Du, children: [v(), L()] }),
                        getLeftColumnComponent: v,
                        getRightColumnComponent: L,
                        onStepChange: s,
                        onBackClick: a,
                        disabled: null == c || c.id === O?.id || o.length > ep.Jo,
                    };
                })({ handleStepChange: t, handleClose: n }),
                a = h.useMemo(() => ({ disabled: s }), [s]);
            return (0, i.jsx)(nd, {
                paymentModalStepProps: e,
                layout: r.X.CUSTOM_STEP_BODY,
                renderStepBody: l,
                primaryCTAButtonProps: a,
            });
        },
        [o.pn.REVIEW]: T._M,
    },
    CUSTOM_CONFIRM_STEP_CONFIG: { renderStep: (e) => (0, i.jsx)(t_, { ...e }) },
    TENANT_PROVIDER_CONFIGS: {
        tenantProvidesPaymentContext: !0,
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
                    l = (0, ti.h)(t);
                h.useEffect(() => {
                    null == l ||
                        null == l.guildId ||
                        null == n ||
                        tt.A.isFetchingForSKU(n) ||
                        null != te.A.get(n) ||
                        (0, ts.qf)(l.guildId, n);
                }, [l, n]);
            })({ applicationId: r, skuId: a });
            let d = o.onClose,
                C = h.useCallback(() => {
                    d();
                }, [d]),
                p = h.useMemo(() => ({ onClose: C, analyticsObject: u }), [C, u]);
            return (0, i.jsx)(W.PaymentContextProvider, {
                loadId: l,
                discoverySessionId: n,
                applicationId: r,
                skuIDs: [a],
                purchaseType: e8.VV.ONE_TIME,
                isGift: s,
                ...c,
                activeSubscription: null,
                children: (0, i.jsx)(nC.g, { customPaymentModalProps: p, children: t }),
            });
        },
        tenantAnalyticsLocation: E.A.SLAYER_STOREFRONT_PAYMENT_MODAL,
    },
    CustomHeaderComponent: function (e) {
        let { step: t } = e,
            n = (0, tm.YW)(t)
                .with(o.pn.GIFT_CUSTOMIZATION, () => e_.intl.string(e_.t["JCFN/y"]))
                .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => e_.intl.string(e_.t.lDbi6H))
                .with(o.pn.CONFIRM, () => "")
                .otherwise(() => null);
        return null == n ? null : (0, i.jsx)(G.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
    },
};
var ty = n(717925),
    tM = n(480642),
    tj = n(944355),
    tk = n(977445),
    tF = n(908419),
    tD = n(211287),
    tw = n(623373),
    tb = n(739508),
    tH = n(715054);
(0, s.A)();
var tG = n(136857),
    tK = n(158317),
    tB = n(566980),
    tW = n(855104),
    tV = n(120700),
    tY = n(742810),
    tZ = n(426398);
n(322076);
var tz =
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
    tX = n(289873),
    tq = n(241989),
    tQ = n(576052),
    tJ = n(120992),
    t$ = n(194256),
    t0 = n(319820),
    t1 = n(327105),
    t2 = n(200766);
let t7 = (e) => {
        let { sku: t, orbPriceAmount: n } = e,
            { product: l, isSocialLayerGameItem: r } = (0, t0.AO)({ sku: t }),
            s = (0, t$.oO)(l);
        r ? (s = e_.intl.string(t1.default.qwSlCO)) : (0, tw.Ab)(l) && (s = e_.intl.string(e_.t["0TmQRG"]));
        let a = (0, t$.dL)(t),
            o = (0, X.EZ)(t.id) ? tQ.m[t.id].render({ className: t2.$ }) : (0, i.jsx)(tq.WH, { sku: t, product: l });
        return (0, i.jsx)(tq.f7, {
            label: a,
            description: s,
            graphic: o,
            price: null != n ? `${n}` : "",
            PriceIcon: to.C,
        });
    },
    t8 = (e) => {
        let { skuId: t, orbPriceAmount: n } = e;
        (0, tJ.c)({ applicationId: (0, _.P)(t), skuIDs: [t] });
        let l = (0, $.bG)([te.A], () => te.A.get(t), [t]);
        return null == l
            ? (0, i.jsx)(tX.y, { type: tX.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(t7, { sku: l, orbPriceAmount: n });
    },
    t6 = (e) => {
        let { orbBalance: t } = e;
        return (0, i.jsx)(tj.vW, { label: e_.intl.string(e_.t.y0WGqP), value: null != t ? `${t}` : "", Icon: to.C });
    },
    t3 = () => e_.intl.string(e_.t.wmcDyu);
function t5() {
    let { immediateDelivery: e } = (0, tF.U)(),
        t = t3();
    return (0, i.jsx)(tj._P, {
        variant: { type: tj.I0.OrbsRedemption, purchaseButtonText: t },
        paymentSourceType: null,
        immediateDelivery: e,
    });
}
let t4 = (0, h.createContext)({
        isRedeeming: !1,
        orbRedemptionError: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: () => {},
        skuId: "",
        analyticsSourceLocation: void 0,
    }),
    t9 = {
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
                    } = (0, h.useContext)(t4),
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
                            { enabled: c } = tD.A.useConfig({ location: "orb_checkout_review_step" }),
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
                                        orbProductContext: r,
                                        analyticsSourceLocation: i,
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
                                    C = (0, tW.gN)(),
                                    p = (0, h.useRef)(C),
                                    { emitOrbCheckoutPaymentFlowEvent: E } = ((e) => {
                                        let {
                                                skuId: t,
                                                orbProductContext: n,
                                                analyticsLocations: l,
                                                analyticsSourceLocation: r,
                                            } = e,
                                            { activitySessionId: i } = (0, et.V)(),
                                            { hasPaymentSources: s } = (0, tZ.jm)(),
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
                                                    activity_session_id: i,
                                                    payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                    ...(null != n && {
                                                        price: n.orbPriceAmount ?? void 0,
                                                        regular_price: n.orbPriceAmount ?? void 0,
                                                    }),
                                                    currency: e1.Yri.DISCORD_ORB,
                                                    ...(null != r && { source: r }),
                                                    ...((e = (0, tY.q1)({
                                                        location: "OrbCheckoutModal",
                                                        unifiedCheckoutFlow: tV.C.ORB_CHECKOUT,
                                                    })),
                                                    {
                                                        payment_type: e1.frM[e1.VVm.ONE_TIME],
                                                        is_gift: !1,
                                                        eligible_for_trial: !1,
                                                        payment_modal_version: "v2",
                                                        checkout_design: e ? tY.rS.UNIFIED : tY.rS.LEGACY,
                                                        checkout_flow: tV.C.ORB_CHECKOUT,
                                                    }),
                                                };
                                            }, [a, c, i, t, l, r, n]);
                                        return {
                                            emitOrbCheckoutPaymentFlowEvent: (0, h.useCallback)(
                                                (e, t) => {
                                                    let n = Date.now() - u;
                                                    e === e1.HAw.PAYMENT_FLOW_STARTED
                                                        ? m.default.track(e1.HAw.PAYMENT_FLOW_STARTED, {
                                                              ...d,
                                                              has_saved_payment_source: s,
                                                              payment_gateway: e8.ps.VIRTUAL_CURRENCY,
                                                              continue_session_initial_step: null,
                                                          })
                                                        : e === e1.HAw.PAYMENT_FLOW_LOADED
                                                          ? m.default.track(e1.HAw.PAYMENT_FLOW_LOADED, {
                                                                ...d,
                                                                has_saved_payment_source: s,
                                                                initial_step: o.pn.REVIEW,
                                                                duration_ms: n,
                                                            })
                                                          : e === e1.HAw.PAYMENT_FLOW_CANCELED
                                                            ? m.default.track(e1.HAw.PAYMENT_FLOW_CANCELED, {
                                                                  ...d,
                                                                  duration_ms: n,
                                                              })
                                                            : e === e1.HAw.PAYMENT_FLOW_COMPLETED
                                                              ? m.default.track(e1.HAw.PAYMENT_FLOW_COMPLETED, {
                                                                    ...d,
                                                                    duration_ms: n,
                                                                })
                                                              : e === e1.HAw.PAYMENT_FLOW_SUCCEEDED
                                                                ? m.default.track(e1.HAw.PAYMENT_FLOW_SUCCEEDED, {
                                                                      ...d,
                                                                      duration_ms: n,
                                                                  })
                                                                : e === e1.HAw.PAYMENT_FLOW_FAILED &&
                                                                  m.default.track(e1.HAw.PAYMENT_FLOW_FAILED, {
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
                                        null !== p.current &&
                                        (E(e1.HAw.PAYMENT_FLOW_FAILED, l), (p.current = null));
                                }, [l, E]);
                                let T = (0, h.useCallback)(() => {
                                        (p.current = C),
                                            E(e1.HAw.PAYMENT_FLOW_COMPLETED),
                                            n((e) => {
                                                c(tB.h.COMPLETED),
                                                    s(o.pn.CONFIRM, { fulfillment: { entitlements: e } });
                                            });
                                    }, [n, c, C, E, s]),
                                    I = p.current ?? C,
                                    O = null != r ? r.orbPriceAmount : null;
                                return {
                                    isStepLoading: null == r,
                                    showCollectiblesDiscountWarning: (0, ew.vw)({ skuId: t, isOrbsPurchase: !0 }),
                                    errorMessage: (0, h.useMemo)(
                                        () =>
                                            (function (e, t) {
                                                if (null == e) return null;
                                                if (e instanceof tK.FY && null != t)
                                                    switch (t) {
                                                        case tz.INSUFFICIENT_ORB_BALANCE:
                                                            return e_.intl.string(e_.t.keFvXM);
                                                        case tz.SKU_ALREADY_OWNED:
                                                            return e_.intl.string(e_.t.m371Mx);
                                                        default:
                                                            return e_.intl.string(e_.t.fqJZ11);
                                                    }
                                                return e.code === tG.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                                                    ? e_.intl.string(e_.t.keFvXM)
                                                    : e.code === tG.tG.ALREADY_PURCHASED
                                                      ? e_.intl.string(e_.t.m371Mx)
                                                      : e_.intl.string(e_.t.fqJZ11);
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
                            S = (0, P.bG)([te.A], () => te.A.get(t), [t]),
                            g = (0, tk.u)(S?.applicationId),
                            {
                                disabled: x,
                                tooltipText: N,
                                text: f,
                            } = ((e) => {
                                let { orbBalance: t, orbPriceAmount: n, isInTestMode: l = !1 } = e,
                                    { disabled: r, tooltipText: i } = (0, h.useMemo)(
                                        () =>
                                            null == n
                                                ? { disabled: !0, tooltipText: e_.intl.string(e_.t["c/rcUu"]) }
                                                : !l && (null == t || n > t)
                                                  ? { disabled: !0, tooltipText: e_.intl.string(e_.t.keFvXM) }
                                                  : { disabled: !1, tooltipText: null },
                                        [n, t, l],
                                    );
                                return { disabled: r, tooltipText: i, text: t3() };
                            })({ orbBalance: T, orbPriceAmount: c ? d : E, isInTestMode: g }),
                            R = (0, h.useMemo)(
                                () => ({ onClick: I, loading: r, text: f, disabled: x, tooltipText: N }),
                                [I, r, f, x, N],
                            ),
                            U = O ? e_.intl.format(e_.t.fsOXXO, {}) : null,
                            v = g ? e_.intl.string(e_.t.OvMyMd) : null;
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
                            purchaseItemContent: (0, i.jsx)(t8, { skuId: t, orbPriceAmount: c ? C : E }),
                            paymentMethodContent: (0, i.jsx)(t6, { orbBalance: T }),
                            legalContent: (0, i.jsx)(t5, {}),
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
                        (0, i.jsx)(ed.dZ, { children: (0, i.jsx)(ty.T, { ...d }) }),
                        (0, i.jsx)(ed.UX, { children: (0, i.jsx)(tM.lo, { primaryButtonProps: c }) }),
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
                        renderModalProps: r,
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
                        let { skuId: t, loadId: n, onCheckoutSuccess: l, onSignFailure: r, order: i } = e,
                            s = (0, P.bG)([eU.default], () => ev.Ay.canUseShopDiscounts(eU.default.getCurrentUser())),
                            a = (0, P.bG)([te.A], () => te.A.get(t), [t]),
                            o = (0, tS.JL)({ sku: a }),
                            { product: u } = (0, eL.q)(t),
                            c = (0, h.useMemo)(() => {
                                if (null != o) return { orbPriceAmount: o.amount };
                                if (null != u) {
                                    let e = (0, tw.CW)({ product: u, hasShopDiscount: s });
                                    return { orbPriceAmount: null !== e ? e.amount : null };
                                }
                                return null;
                            }, [o, u, s]);
                        c?.orbPriceAmount == null &&
                            (0, tb.hD)("Orb price not found for product", { tags: { sku_id: t } });
                        let {
                                redeemVirtualCurrency: d,
                                isSubmitting: C,
                                error: p,
                            } = (0, tH.Q)({ skuId: t, loadId: n, order: i, onSignFailure: r }),
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
                    })({ onClose: r.onClose, orbProductContext: c, overrideAnalyticParams: s }),
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
                return (0, i.jsx)(t4.Provider, {
                    value: m,
                    children: (0, i.jsx)(nC.g, { customPaymentModalProps: _, children: a }),
                });
            },
            overrideAnalyticParams: { payment_gateway: e8.kM.VIRTUAL_CURRENCY, currency: e1.Yri.DISCORD_ORB },
        },
    },
    ne = {
        [r.C.ORB_CHECKOUT]: {
            flowType: r.C.ORB_CHECKOUT,
            implemented: !0,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: t9,
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            flowType: r.C.COLLECTIBLES_CHECKOUT,
            implemented: !0,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: e9,
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.SLAYER_STOREFRONT_CHECKOUT,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tL,
        },
        [r.C.PREMIUM_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_CHECKOUT },
        [r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT]: { implemented: !1, flowType: r.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            implemented: !0,
            flowType: r.C.PREMIUM_APPS_OTP_CHECKOUT,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: tr,
        },
        [r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT]: { implemented: !1, flowType: r.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            implemented: !0,
            purchaseType: e1.VVm.ONE_TIME,
            TENANT_CHECKOUT_FLOW_CONFIG: H,
            flowType: r.C.GUILD_PRODUCT_CHECKOUT,
        },
        [r.C.GUILD_ROLE_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_ROLE_CHECKOUT },
        [r.C.GUILD_BOOST_CHECKOUT]: { implemented: !1, flowType: r.C.GUILD_BOOST_CHECKOUT },
    };
var nt = n(735305),
    nn = n(295405);
let nl = (e) => {
    let { returnStep: t = o.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        r = h.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = o.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(nn.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: o.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, i.jsx)(nt.x, { ...l, onReturn: r });
};
var nr = n(86379),
    ni = n(545075);
let ns = (e) => {
        let { paymentModalStepProps: t, defaultStep: n } = e,
            l = (0, h.useRef)(!1),
            r = (0, nr.Hp)(),
            { handleStepChange: s } = t;
        return ((0, h.useEffect)(() => {
            r || l.current || (s(n), (l.current = !0));
        }, [r, s, n]),
        r)
            ? (0, i.jsx)(ni.oO, {})
            : null;
    },
    na = {
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
class no {
    checkoutFlow;
    checkoutFlowConfiguration;
    tenantCheckoutFlowConfig;
    internalCheckoutFlowControls;
    override_analytic_params;
    constructor({ checkoutFlow: e }) {
        this.checkoutFlow = e;
        const t = ne[e];
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
        if (null != e) return (t, n, l) => (0, i.jsx)(e, { plan: t, onClose: n, step: l });
    }
    getPredicateStepConfig() {
        let { predicateStepType: e } = this.internalCheckoutFlowControls;
        return "one_time_payment" === e
            ? c.kJ
            : "unified" === e
              ? { key: null, renderStep: (e) => (0, i.jsx)(ns, { paymentModalStepProps: e, defaultStep: o.pn.REVIEW }) }
              : { key: null, renderStep: (e) => (0, i.jsx)(u.I, { ...e }) };
    }
    getAddPaymentStepConfig(e) {
        let { isGift: t } = e,
            { allowGiftCustomization: n } = this.internalCheckoutFlowControls;
        if (this.checkoutFlow !== r.C.ORB_CHECKOUT)
            return {
                key: o.pn.ADD_PAYMENT_STEPS,
                renderStep: (e) =>
                    (0, i.jsx)(nl, {
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
            ? (0, _.P)(e)
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
            c = (0, tY.q1)({ location: "UnifiedCheckoutFlowManager", unifiedCheckoutFlow: this.checkoutFlow });
        m.default.track(e1.HAw.PAYMENT_FLOW_CANCELED, {
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
            checkout_design: c ? tY.rS.UNIFIED : tY.rS.LEGACY,
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
            x = !!(null != r && r.isGift),
            N = !1;
        return (0, a.openModalLazy)(
            async () => {
                let { WrappedUnifiedPaymentModal: e } = await n.e("87298").then(n.bind(n, 246681)),
                    t = this.generateCheckoutStepConfigs({ isGift: x });
                return (n) =>
                    (0, i.jsx)(e, {
                        checkoutFlow: this.checkoutFlow,
                        checkoutFlowConfiguration: this.checkoutFlowConfiguration,
                        tenantCheckoutFlowConfig: this.tenantCheckoutFlowConfig,
                        stepConfigs: t,
                        onComplete: (e) => {
                            null != o && o(e), (N = !0);
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
                        giftContextProps: r,
                        additionalOptions: l,
                    });
            },
            {
                ...t,
                onCloseRequest: () => {
                    null != t.onCloseRequest && t.onCloseRequest(N, O.current), (0, a.closeModal)(h);
                },
                onCloseCallback: () => {
                    N ||
                        (p({ checkoutSucceeded: N, order: A.current }),
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
                        null != t.onCloseCallback && t.onCloseCallback(N),
                        null != u && u(N, c);
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
        { hasPaymentSources: d } = (0, tZ.jm)(),
        C = d ? o.pn.REVIEW : o.pn.ADD_PAYMENT_STEPS,
        p = h.useCallback(() => t(C), [t, C]),
        _ = h.useMemo(
            () =>
                n === r.X.CUSTOM_STEP_BODY
                    ? l()
                    : n === r.X.TWO_COLUMN
                      ? (0, i.jsxs)("div", { className: nc.D, children: [s(), a()] })
                      : null,
            [n, l, s, a],
        ),
        m = h.useMemo(() => ({ ...u, onClick: p, text: e_.intl.string(e_.t.XiOHRX) }), [u, p]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ed.dZ, { children: _ }),
            (0, i.jsx)(ed.UX, { children: (0, i.jsx)(nu.cy, { onBackClick: c, primaryCTAButtonProps: m }) }),
        ],
    });
};
var nC = n(551892);
let np = null,
    n_ = null,
    nm = null,
    nE = null,
    nT = null,
    nI = {
        [r.C.ORB_CHECKOUT]: {
            get: function () {
                return null == np && (np = new no({ checkoutFlow: r.C.ORB_CHECKOUT })), np;
            },
        },
        [r.C.COLLECTIBLES_CHECKOUT]: {
            get: function () {
                return null == n_ && (n_ = new no({ checkoutFlow: r.C.COLLECTIBLES_CHECKOUT })), n_;
            },
        },
        [r.C.SLAYER_STOREFRONT_CHECKOUT]: {
            get: function () {
                return null == nm && (nm = new no({ checkoutFlow: r.C.SLAYER_STOREFRONT_CHECKOUT })), nm;
            },
        },
        [r.C.PREMIUM_APPS_OTP_CHECKOUT]: {
            get: function () {
                return null == nE && (nE = new no({ checkoutFlow: r.C.PREMIUM_APPS_OTP_CHECKOUT })), nE;
            },
        },
        [r.C.GUILD_PRODUCT_CHECKOUT]: {
            get: function () {
                return null == nT && (nT = new no({ checkoutFlow: r.C.GUILD_PRODUCT_CHECKOUT })), nT;
            },
        },
    };
