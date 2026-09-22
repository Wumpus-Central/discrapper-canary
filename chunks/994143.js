(n.d(t, { RL: () => en, oO: () => z, dL: () => Z }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(403581),
    s = n(278416),
    o = n(318254),
    u = n(262427),
    c = n(120700),
    d = n(377058),
    m = n(38785),
    p = n(270537),
    C = n(241989),
    h = n(263532),
    f = n(993408),
    E = n(758461),
    S = n(1076),
    y = n(223311),
    I = n(65238),
    A = n(151115),
    g = n(518865),
    P = n(652215),
    v = n(812095),
    _ = n(287809),
    x = n(486020),
    T = n(158045),
    N = n(580630),
    b = n(240248),
    j = n(951305),
    R = n(284009),
    M = n.n(R),
    O = n(17928),
    L = n(10716),
    k = n(206828),
    w = n(20015),
    U = n(31823),
    D = n(427675),
    G = n(977445),
    F = n(331329),
    B = n(566980),
    H = n(375708),
    W = n(319820),
    Y = n(52635),
    V = n(583741),
    K = n(181666);
function Z(e) {
    return e.name;
}
let q = {
    [r.R.BUNDLE]: () => H.intl.string(V.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => H.intl.string(V.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => H.intl.string(V.default.eTYAvF),
    [r.R.NAMEPLATE]: () => H.intl.string(V.default.of9bom),
    [r.R.PROFILE_FRAME]: () => H.intl.string(V.default.HzDn6w),
};
function z(e) {
    let t = H.intl.string(V.default.iZe9Wy);
    if (null == e);
    else if (e.type in q) return (0, q[e.type])();
    return t;
}
function Q(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = H.intl.string(V.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(C.WH, { sku: t, product: n }),
        u = Z(t);
    return (0, l.jsx)(C.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function $(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, W.AO)({ sku: n }),
        r = i ? H.intl.string(V.default.qwSlCO) : H.intl.string(V.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: x.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(Q, { ...e, description: r, ...a });
}
function J(e) {
    let t = H.intl.string(V.default.hewwdA);
    return (0, l.jsx)(Q, { ...e, description: t });
}
function X(e) {
    let { sku: t } = e,
        { product: n } = (0, W.AO)({ sku: t }),
        i = z(n),
        r =
            null != n
                ? (function (e) {
                      let t = _.default.getCurrentUser(),
                          n = T.Ay.canUseShopDiscounts(t),
                          l = (0, f.xM)(t),
                          i = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === f.D0.NITRO)
                              return { PriceIcon: a.t, priceTooltip: H.intl.string(V.default.YUNJJa) };
                          if (l === f.D0.THIRDPARTY)
                              return { PriceIcon: s.TagIcon, priceTooltip: H.intl.string(K.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(Q, { ...e, description: i, collectiblesProduct: n, ...r });
}
function ee(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                { setCollectedModalOverrideTitle: l, setCollectedModalGradientColor: r } = (0, S.z)(),
                a = (0, y.A)(P.FYj),
                s = null != n ? (0, A.L)(n, a) : null,
                o = (0, I.ml)(s)?.reward,
                u = null != o ? s?.rewardConfig?.discount?.id : null,
                c = null != u && t?.getDiscountIdIfExists() === String(u);
            (0, i.useEffect)(() => {
                let e = c ? o : null;
                (l(e?.collected?.overrideTitle), r(null != e ? (0, g.lG)(e.flavor) : void 0));
            }, [c, o, l, r]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
function et(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, h.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: C } = (0, j.Pv)(),
        {
            sku: f,
            application: S,
            eligiblePaymentGateways: y,
            disabled: _,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, h.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, U.V)(),
                l = (0, D.gU)();
            M()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                M()(null != i, "SKU must exist and be fetched."),
                M()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === B.h.PURCHASING || t === B.h.COMPLETED,
                }
            );
        })(),
        x = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === c.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(Y.EB, {
                              paymentSourceType: i,
                              skuId: n,
                              isGift: r,
                              hasSeparateAccountLinkNotice: !0,
                          })
                        : (0, l.jsx)(Y.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        { upperInlineNoticeProps: T, footerInlineNoticeProps: R } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, O.bG)([L.A], () => L.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, k.RD)(n),
                o = (0, G.uS)(n.id),
                u = null != t && t.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, w.n)(n, P.gfo.EMBEDDED) && r === L.$.ERROR,
                d = u && a && !s && !l ? (0, F.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: H.intl.string(H.t.OvMyMd),
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: H.intl.string(H.t.tAmECt),
                                key: "dev-shelf-error-notice",
                            }),
                        e.length > 0 ? e : null
                    );
                }, [o, c]),
                footerInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        null != d &&
                            e.push({ type: "info", message: d, key: "social-layer-game-item-disclaimer-notice" }),
                        e.length > 0 ? e : null
                    );
                }, [d]),
            };
        })({ sku: f, application: S, isGift: s }),
        K = i.useMemo(() => ({ paymentGatewayRestrictions: y, shouldUseUnifiedCheckoutUI: !0 }), [y]),
        q = (0, l.jsx)(d.N, {
            label: H.intl.string(H.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: K,
            disabled: _,
        }),
        { product: z } = (0, W.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: et, priceText: en } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, W.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: Z(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: H.intl.string(H.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: H.intl.string(V.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, N.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: f, invoicePreview: r }),
            [f, r],
        ),
        el = i.useMemo(() => (null != et ? (0, l.jsx)(p.Vm, { ...et }) : null), [et]),
        ei = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: en, sku: f, application: S, giftRecipient: C }),
                e === c.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)($, { ...t })
                    : e === c.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(J, { ...t })
                      : e === c.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(X, { ...t })
                        : (0, l.jsx)(Q, { ...t })
            );
        }, [n, f, S, C, en]),
        er = i.useMemo(() => (null != r ? (0, N.$g)(r.total, r.currency) : void 0), [r]),
        ea = (0, E.HH)(),
        es = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, product: r, promotion: a, productLine: s } = t;
                    if (e === c.C.COLLECTIBLES_CHECKOUT) {
                        if (null == r) return null;
                        let e = (0, g.PY)(r, a),
                            t = (0, I.ml)(e)?.reward,
                            n = t?.checkout?.offerNotice,
                            i = t?.flavor,
                            s = n?.text;
                        return (0, b.uJ)(s)
                            ? null
                            : (0, l.jsx)(u.J, {
                                  Icon: (0, A.s)(n?.icon),
                                  text: (0, v.U)(s),
                                  gradientColor: (0, g.aJ)(i),
                              });
                    }
                    if (e === c.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? H.t["ZV+aS9"] : H.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.C,
                            text: H.intl.format(t, { orbCount: e }),
                            gradientColor: s === P.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, product: z, promotion: ea, productLine: f.productLine }),
            [n, r, s, z, ea, f.productLine],
        ),
        eo = i.useMemo(() => (null != es ? { headerBadgeText: H.intl.string(V.default.Fjpyfj) } : {}), [es]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === c.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(ee, { requiredCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: z }),
            (0, l.jsx)(m.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: eo,
                purchaseItemContent: ei,
                invoiceSummaryContent: el,
                paymentMethodContent: q,
                legalContent: x,
                promotionalNoticeContent: es,
                upperInlineNoticeProps: T,
                footerInlineNoticeProps: R,
                invoiceTotalDueLabel: H.intl.string(V.default.Zxav97),
                invoiceTotalDueValue: er,
            }),
        ],
    });
}
function en(e) {
    let { isCheckoutDataLoading: t } = (0, h.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(m.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(et, { ...e });
}
