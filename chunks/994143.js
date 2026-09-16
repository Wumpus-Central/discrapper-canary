(n.d(t, { RL: () => et, oO: () => q, dL: () => K }), n(321073));
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
    h = n(241989),
    C = n(721836),
    f = n(993408),
    E = n(80151),
    S = n(629042),
    y = n(1076),
    I = n(65238),
    g = n(151115),
    A = n(812095),
    P = n(287809),
    v = n(486020),
    x = n(158045),
    _ = n(580630),
    T = n(240248),
    N = n(951305),
    b = n(284009),
    j = n.n(b),
    R = n(17928),
    M = n(10716),
    O = n(206828),
    L = n(20015),
    k = n(31823),
    w = n(427675),
    U = n(977445),
    D = n(331329),
    G = n(566980),
    F = n(652215),
    B = n(375708),
    H = n(319820),
    W = n(52635),
    Y = n(583741),
    V = n(181666);
function K(e) {
    return e.name;
}
let Z = {
    [r.R.BUNDLE]: () => B.intl.string(Y.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => B.intl.string(Y.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => B.intl.string(Y.default.eTYAvF),
    [r.R.NAMEPLATE]: () => B.intl.string(Y.default.of9bom),
    [r.R.PROFILE_FRAME]: () => B.intl.string(Y.default.HzDn6w),
};
function q(e) {
    let t = B.intl.string(Y.default.iZe9Wy);
    if (null == e);
    else if (e.type in Z) return (0, Z[e.type])();
    return t;
}
function z(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = B.intl.string(Y.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(h.WH, { sku: t, product: n }),
        u = K(t);
    return (0, l.jsx)(h.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function Q(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, H.AO)({ sku: n }),
        r = i ? B.intl.string(Y.default.qwSlCO) : B.intl.string(Y.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: v.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(z, { ...e, description: r, ...a });
}
function $(e) {
    let t = B.intl.string(Y.default.hewwdA);
    return (0, l.jsx)(z, { ...e, description: t });
}
function J(e) {
    let { sku: t } = e,
        { product: n } = (0, H.AO)({ sku: t }),
        i = q(n),
        r =
            null != n
                ? (function (e) {
                      let t = P.default.getCurrentUser(),
                          n = x.Ay.canUseShopDiscounts(t),
                          l = (0, f.xM)(t),
                          i = (0, f.WD)(e, { hasShopDiscount: n, discount: (0, f.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === f.D0.NITRO)
                              return { PriceIcon: a.t, priceTooltip: B.intl.string(Y.default.YUNJJa) };
                          if (l === f.D0.THIRDPARTY)
                              return { PriceIcon: s.TagIcon, priceTooltip: B.intl.string(V.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(z, { ...e, description: i, collectiblesProduct: n, ...r });
}
function X(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n, promotion: l } = e,
                { setCollectedModalOverrideTitle: r, setCollectedModalGradientColor: a } = (0, y.z)(),
                s = null != n ? (0, S.L0)(n, l) : null,
                o = s?.rewardConfig?.discount?.id,
                u = null != o && t?.getDiscountIdIfExists() === String(o);
            (0, i.useEffect)(() => {
                let e = u ? (0, I.ml)(s)?.reward : null;
                (r(e?.collected?.overrideTitle), a(null != e ? (0, g.KD)(e.flavor) : void 0));
            }, [u, s, r, a]);
        })({ invoicePreview: n, product: l, promotion: (0, E.A)() }),
        null
    );
}
function ee(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, C.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: h } = (0, N.Pv)(),
        {
            sku: f,
            application: y,
            eligiblePaymentGateways: P,
            disabled: v,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, C.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, k.V)(),
                l = (0, w.gU)();
            j()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                j()(null != i, "SKU must exist and be fetched."),
                j()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === G.h.PURCHASING || t === G.h.COMPLETED,
                }
            );
        })(),
        x = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === c.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(W.EB, {
                              paymentSourceType: i,
                              skuId: n,
                              isGift: r,
                              hasSeparateAccountLinkNotice: !0,
                          })
                        : (0, l.jsx)(W.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        { upperInlineNoticeProps: b, footerInlineNoticeProps: V } = (function (e) {
            let { sku: t, application: n, isGift: l } = e,
                r = (0, R.bG)([M.A], () => M.A.getFetchState()),
                { fetched: a, hasAlreadyLinked: s } = (0, O.RD)(n),
                o = (0, U.uS)(n.id),
                u = null != t && t.productLine === F.EZt.SOCIAL_LAYER_GAME_ITEM,
                c = (0, L.n)(n, F.gfo.EMBEDDED) && r === M.$.ERROR,
                d = u && a && !s && !l ? (0, D.k3)(n) : null;
            return {
                upperInlineNoticeProps: i.useMemo(() => {
                    let e = [];
                    return (
                        o &&
                            e.push({
                                type: "warning",
                                message: B.intl.string(B.t.OvMyMd),
                                key: "test-mode-warning-notice",
                            }),
                        c &&
                            e.push({
                                type: "critical",
                                message: B.intl.string(B.t.tAmECt),
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
        })({ sku: f, application: y, isGift: s }),
        Z = i.useMemo(() => ({ paymentGatewayRestrictions: P, shouldUseUnifiedCheckoutUI: !0 }), [P]),
        q = (0, l.jsx)(d.N, {
            label: B.intl.string(B.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: Z,
            disabled: v,
        }),
        { product: ee } = (0, H.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: et, priceText: en } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, H.yh)({ invoicePreview: n });
                        return (
                            l.push({ id: "sku", label: K(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: B.intl.string(B.t["/I8zmP"]), amount: n.tax }),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: B.intl.string(Y.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e,
                                },
                                priceText: (0, _.$g)(i, n.currency),
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
                (t = { priceText: en, sku: f, application: y, giftRecipient: h }),
                e === c.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(Q, { ...t })
                    : e === c.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)($, { ...t })
                      : e === c.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(J, { ...t })
                        : (0, l.jsx)(z, { ...t })
            );
        }, [n, f, y, h, en]),
        er = i.useMemo(() => (null != r ? (0, _.$g)(r.total, r.currency) : void 0), [r]),
        ea = (0, E.A)(),
        es = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, product: r, promotion: a, productLine: s } = t;
                    if (e === c.C.COLLECTIBLES_CHECKOUT) {
                        if (null == r) return null;
                        let e = (0, S.L0)(r, a),
                            t = (0, I.ml)(e)?.reward,
                            n = t?.checkout?.offerNotice,
                            i = t?.flavor,
                            s = n?.text;
                        return (0, T.uJ)(s)
                            ? null
                            : (0, l.jsx)(u.J, {
                                  Icon: (0, g.sj)(n?.icon),
                                  text: (0, A.U)(s),
                                  gradientColor: (0, g.lx)(i),
                              });
                    }
                    if (e === c.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? B.t["ZV+aS9"] : B.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.C,
                            text: B.intl.format(t, { orbCount: e }),
                            gradientColor: s === F.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, product: ee, promotion: ea, productLine: f.productLine }),
            [n, r, s, ee, ea, f.productLine],
        ),
        eo = i.useMemo(() => (null != es ? { headerBadgeText: B.intl.string(Y.default.Fjpyfj) } : {}), [es]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === c.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(X, { requiredCheckoutFlow: c.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: ee }),
            (0, l.jsx)(m.T_, {
                shouldShowGlobalNotices: !0,
                headerBadgeConfig: eo,
                purchaseItemContent: ei,
                invoiceSummaryContent: el,
                paymentMethodContent: q,
                legalContent: x,
                promotionalNoticeContent: es,
                upperInlineNoticeProps: b,
                footerInlineNoticeProps: V,
                invoiceTotalDueLabel: B.intl.string(Y.default.Zxav97),
                invoiceTotalDueValue: er,
            }),
        ],
    });
}
function et(e) {
    let { isCheckoutDataLoading: t } = (0, C.t4)((e) => ({ isCheckoutDataLoading: e.get("isCheckoutDataLoading") }));
    return t ? (0, l.jsx)(m.Ed, { shouldShowUnifiedHeader: !0 }) : (0, l.jsx)(ee, { ...e });
}
