(n.d(t, { RL: () => ed, oO: () => en, dL: () => ee }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(575593),
    a = n(991690),
    s = n(855986),
    o = n(318254),
    u = n(262427),
    c = n(10716),
    d = n(120700),
    m = n(854354),
    p = n(886767),
    h = n(69882),
    C = n(744615),
    f = n(241989),
    E = n(316363),
    S = n(818296),
    g = n(977445),
    I = n(525877),
    y = n(486020),
    A = n(580630),
    P = n(403581),
    v = n(278416),
    x = n(993408),
    _ = n(1076),
    T = n(288106),
    b = n(604913),
    N = n(223311),
    j = n(306396),
    R = n(248180),
    O = n(151115),
    M = n(518865),
    L = n(536572),
    k = n(652215),
    w = n(792996),
    D = n(812095),
    U = n(240248),
    G = n(808598),
    F = n(22007),
    B = n(287809),
    H = n(448645),
    W = n(379912),
    V = n(337091);
function Y(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                    setCompletesCollectAndClaimPromotion: s,
                } = (0, _.z)(),
                o = (0, N.A)(k.FYj);
            (0, i.useEffect)(() => {
                let e = o?.tenantMetadata?.collectibles;
                switch (e?.type) {
                    case b.hE.COLLECT_AND_CLAIM: {
                        if (null == n) break;
                        let t = (0, O.L)(n, o),
                            i = t?.progress;
                        if (null == i) break;
                        let u = Math.min(i.current + (0, j.oO)(n, e.collectionId), i.target);
                        t?.rewardStatus === T.GM.IN_PROGRESS
                            ? l(w.intl.formatToPlainString(w.t.Jkxtln, { current: u, target: i.target }))
                            : l(void 0);
                        let c = t?.rewardStatus === T.GM.IN_PROGRESS && u >= i.target;
                        (r(
                            w.intl.formatToPlainString(c ? w.t.OUIULI : w.t["8yvdPi"], {
                                collectibleTitle: (0, L.VG)(n),
                            }),
                        ),
                            a(void 0),
                            s(c));
                        return;
                    }
                    case b.hE.TARGETED_OFFER: {
                        let n = e.reward,
                            i = null != n && (0, O.g)(t, o) ? n : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, M.lG)(i.flavor) : void 0), s(!1));
                        return;
                    }
                    case b.hE.COLLECTION_SALE: {
                        let e = (0, R.S)(o);
                        if (null == e || !(0, O.g)(t, o)) break;
                        (l(w.intl.formatToPlainString(w.t.VuV3Td, { discountOfferAmount: e })),
                            r(void 0),
                            a(void 0),
                            s(!1));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0), s(!1));
            }, [o, n, t, l, r, a, s]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
var K = n(418200),
    Z = n(284009),
    q = n.n(Z),
    z = n(31823),
    $ = n(427675),
    Q = n(566980),
    J = n(319820),
    X = n(52635);
function ee(e) {
    return e.name;
}
let et = {
    [r.R.BUNDLE]: () => w.intl.string(W.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => w.intl.string(W.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => w.intl.string(W.default.eTYAvF),
    [r.R.NAMEPLATE]: () => w.intl.string(W.default.of9bom),
    [r.R.PROFILE_FRAME]: () => w.intl.string(W.default.HzDn6w),
};
function en(e) {
    let t = w.intl.string(W.default.iZe9Wy);
    if (null == e);
    else if (e.type in et) return (0, et[e.type])();
    return t;
}
function el(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = w.intl.string(W.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(f.WH, { sku: t, product: n }),
        u = ee(t);
    return (0, l.jsx)(f.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function ei(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, J.AO)({ sku: n }),
        r = i ? w.intl.string(W.default.qwSlCO) : w.intl.string(W.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(el, { ...e, description: r, ...a });
}
function er(e) {
    let t = w.intl.string(W.default.hewwdA);
    return (0, l.jsx)(el, { ...e, description: t });
}
function ea(e) {
    let { sku: t } = e,
        { product: n } = (0, J.AO)({ sku: t }),
        i = en(n),
        r =
            null != n
                ? (function (e) {
                      let t = B.default.getCurrentUser(),
                          n = H.Ay.canUseShopDiscounts(t),
                          l = (0, x.xM)(t),
                          i = (0, x.WD)(e, { hasShopDiscount: n, discount: (0, x.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === x.D0.NITRO)
                              return { PriceIcon: P.NitroWheelIcon, priceTooltip: w.intl.string(W.default.YUNJJa) };
                          if (l === x.D0.THIRDPARTY)
                              return { PriceIcon: v.TagIcon, priceTooltip: w.intl.string(V.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(el, { ...e, description: i, collectiblesProduct: n, ...r });
}
function es(e) {
    let { productLine: t, application: n, isGift: r } = e,
        a = (0, I.o)({ application: n, productLine: t, isGift: r }),
        s = i.useMemo(() => {
            let e = [];
            return (null != a && e.push(a), e.length > 0 ? e : null);
        }, [a]);
    return (0, l.jsx)(h.Wl, { footerInlineNoticeProps: s });
}
function eo(e) {
    let { productLine: t, application: n, isGift: i } = e;
    return (0, E.t4)((e) => e.unifiedCheckoutFlow) === d.C.SLAYER_STOREFRONT_CHECKOUT
        ? (0, l.jsx)(es, { productLine: t, application: n, isGift: i })
        : null;
}
function eu(e) {
    let { application: t } = e,
        n = (0, s.bG)([c.A], () => c.A.getFetchState()),
        r = (0, g.uS)(t.id),
        o = t.supportsEmbeddedSurface(a.U.MAIN) && n === c.$.ERROR,
        u = i.useMemo(() => {
            let e = [];
            return (
                r &&
                    e.push({
                        type: "warning",
                        message: w.intl.string(w.t.OvMyMd),
                        role: "none",
                        key: "test-mode-warning-notice",
                    }),
                o &&
                    e.push({
                        type: "critical",
                        message: w.intl.string(w.t.tAmECt),
                        role: "alert",
                        key: "dev-shelf-error-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [r, o]);
    return (0, l.jsx)(h.zJ, { upperInlineNoticeProps: u, shouldShowGlobalNotices: !0 });
}
function ec(e) {
    let { application: t } = e,
        n = (0, E.t4)((e) => e.unifiedCheckoutFlow);
    return n === d.C.SLAYER_STOREFRONT_CHECKOUT || n === d.C.PREMIUM_APPS_OTP_CHECKOUT
        ? (0, l.jsx)(eu, { application: t })
        : (0, l.jsx)(h.zJ, { upperInlineNoticeProps: null, shouldShowGlobalNotices: !0 });
}
function ed(e) {
    let { handlePaymentSourceAdd: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutInvoicePreview: r,
            paymentSourceType: a,
        } = (0, E.t4)((e) => {
            let t = e.get("checkoutSelectedPaymentSource");
            return {
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                paymentSourceType: null != t ? t.type : null,
            };
        }),
        { isGift: s, giftRecipient: c } = (0, K.Pv)(),
        {
            sku: f,
            application: g,
            eligiblePaymentGateways: I,
            disabled: y,
        } = (function () {
            let { selectedSkuId: e, purchaseState: t } = (0, E.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    purchaseState: e.purchaseState,
                })),
                { application: n } = (0, z.V)(),
                l = (0, $.gU)();
            q()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                q()(null != i, "SKU must exist and be fetched."),
                q()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === Q.h.PURCHASING || t === Q.h.COMPLETED,
                }
            );
        })(),
        P = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === d.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(X.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(X.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        x = i.useMemo(() => ({ paymentGatewayRestrictions: I, shouldUseUnifiedCheckoutUI: !0 }), [I]),
        _ = (0, l.jsx)(p.N, {
            label: w.intl.string(w.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: x,
            disabled: y,
        }),
        { product: N } = (0, J.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: j, priceText: R } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, J.yh)({ invoicePreview: n });
                        (l.push({ id: "sku", label: ee(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: w.intl.string(w.t["/I8zmP"]), amount: n.tax }));
                        let a = (0, m.Dn)(n);
                        return (
                            null != a && l.push(a),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: w.intl.string(W.default.eoXh7B),
                                    currency: n.currency,
                                    defaultExpanded: null != e || null != a,
                                },
                                priceText: (0, A.$g)(i, n.currency),
                                discount: e,
                            }
                        );
                    }
                    return { unifiedInvoiceSummaryProps: null, priceText: "", discount: null };
                })({ sku: f, invoicePreview: r }),
            [f, r],
        ),
        O = i.useMemo(() => (null != j ? (0, l.jsx)(C.Vm, { ...j }) : null), [j]),
        L = i.useMemo(() => {
            var e, t;
            return (
                (e = n),
                (t = { priceText: R, sku: f, application: g, giftRecipient: c }),
                e === d.C.SLAYER_STOREFRONT_CHECKOUT
                    ? (0, l.jsx)(ei, { ...t })
                    : e === d.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(er, { ...t })
                      : e === d.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(ea, { ...t })
                        : (0, l.jsx)(el, { ...t })
            );
        }, [n, f, g, c, R]),
        B = i.useMemo(() => (null != r ? (0, A.$g)(r.getAmountDue(), r.currency) : void 0), [r]),
        H = (0, S.g)(N ?? null),
        V = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, promotion: r, productLine: a } = t;
                    if (e === d.C.COLLECTIBLES_CHECKOUT) {
                        let e;
                        return null ==
                            (e = (function (e, t) {
                                if (null == e) return null;
                                let n = e.tenantMetadata?.collectibles;
                                switch (n?.type) {
                                    case b.hE.COLLECT_AND_CLAIM:
                                        return t
                                            ? null
                                            : (function (e) {
                                                  if (e.rewardStatus !== T.GM.IN_PROGRESS) return null;
                                                  let t = e.progress;
                                                  if (null == t || null == e.endsAt) return null;
                                                  let n = (0, G.X)(e.endsAt);
                                                  return null == n
                                                      ? null
                                                      : {
                                                            Icon: v.TagIcon,
                                                            text: w.intl.formatToPlainString(w.t["/nFLZv"], {
                                                                current: t.current,
                                                                target: t.target,
                                                                numDays: n,
                                                            }),
                                                            gradientColor: "promotion",
                                                            textVariant: "body-sm/normal",
                                                            textColor: "text-overlay-light",
                                                        };
                                              })(e);
                                    case b.hE.TARGETED_OFFER: {
                                        let e = n.reward,
                                            t = e?.checkout?.offerNotice,
                                            l = t?.text;
                                        if ((0, U.uJ)(l)) return null;
                                        return {
                                            Icon: (0, F.s)(t?.icon),
                                            text: (0, D.U)(l),
                                            gradientColor: (0, M.aJ)(e?.flavor),
                                        };
                                    }
                                    default:
                                        return null;
                                }
                            })(r, i))
                            ? null
                            : (0, l.jsx)(u.J, { ...e });
                    }
                    if (e === d.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? w.t["ZV+aS9"] : w.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.OrbsIcon,
                            text: w.intl.format(t, { orbCount: e }),
                            gradientColor: a === k.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, promotion: H, productLine: f.productLine }),
            [n, r, s, H, f.productLine],
        ),
        Z = i.useMemo(() => (null != V ? { headerBadgeText: w.intl.string(W.default.Fjpyfj) } : {}), [V]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === d.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(Y, { requiredCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: N }),
            (0, l.jsx)(h.T_, {
                headerBadgeConfig: Z,
                purchaseItemContent: L,
                invoiceSummaryContent: O,
                paymentMethodContent: _,
                legalContent: P,
                promotionalNoticeContent: V,
                upperInlineNoticeContent: (0, l.jsx)(ec, { application: g }),
                footerInlineNoticeContent: (0, l.jsx)(eo, { productLine: f.productLine, application: g, isGift: s }),
                invoiceTotalDueLabel: w.intl.string(W.default.Zxav97),
                invoiceTotalDueValue: B,
            }),
        ],
    });
}
