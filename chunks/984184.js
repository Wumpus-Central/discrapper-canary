(n.d(t, { RL: () => eS, oO: () => eu, dL: () => es }), n(321073));
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
    E = n(682689),
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
    j = n(65238),
    R = n(436912),
    O = n(306396),
    L = n(248180),
    M = n(664749),
    k = n(518865),
    w = n(536572),
    D = n(652215),
    U = n(792996),
    G = n(651365),
    F = n(812095),
    B = n(240248),
    H = n(305037),
    W = n(669470),
    V = n(808598),
    Y = n(22007),
    K = n(865830),
    Z = n(773669),
    q = n(287809),
    z = n(448645),
    $ = n(379912),
    Q = n(337091);
function J(e) {
    let { requiredCheckoutFlow: t, invoicePreview: n, product: l } = e;
    return (
        !(function (e) {
            let { invoicePreview: t, product: n } = e,
                {
                    setCollectedModalOverrideTitle: l,
                    setCollectedModalOverrideDescription: r,
                    setCollectedModalGradientColor: a,
                    setCompletesCollectAndClaimPromotion: o,
                } = (0, _.z)(),
                u = (0, N.A)(D.FYj),
                c = (0, j.d3)(u)?.collectionId,
                d = (0, s.bG)([R.A], () => (null != c ? R.A.getSequencedOffersForCollection(c) : null));
            (0, i.useEffect)(() => {
                let e = u?.tenantMetadata?.collectibles;
                switch (e?.type) {
                    case b.hE.COLLECT_AND_CLAIM: {
                        if (null == n) break;
                        let t = (0, M.L0)(n, u),
                            i = t?.progress;
                        if (null == i) break;
                        let s = Math.min(i.current + (0, O.oO)(n, e.collectionId), i.target);
                        t?.rewardStatus === T.GM.IN_PROGRESS
                            ? l(U.intl.formatToPlainString(U.t.Jkxtln, { current: s, target: i.target }))
                            : l(void 0);
                        let c = t?.rewardStatus === T.GM.IN_PROGRESS && s >= i.target;
                        (r(
                            U.intl.formatToPlainString(c ? U.t.OUIULI : U.t["8yvdPi"], {
                                collectibleTitle: (0, w.VG)(n),
                            }),
                        ),
                            a(void 0),
                            o(c));
                        return;
                    }
                    case b.hE.TARGETED_OFFER: {
                        let n = e.reward,
                            i = null != n && (0, M.g5)(t, u) ? n : null;
                        (l(i?.collected?.overrideTitle), r(void 0), a(null != i ? (0, k.lG)(i.flavor) : void 0), o(!1));
                        return;
                    }
                    case b.hE.COLLECTION_SALE: {
                        let e = (0, L.G)(u);
                        if (null == e || !(0, M.g5)(t, u)) break;
                        (l(U.intl.formatToPlainString(U.t.VuV3Td, { discountOfferAmount: e })),
                            r(void 0),
                            a(void 0),
                            o(!1));
                        return;
                    }
                    case b.hE.COLLECTION_SEQUENCED_OFFER: {
                        if (null == n || !(0, M.g5)(t, u)) break;
                        let { position: i } = e,
                            s = d?.promotions.some((e) => e.position > i) === !0;
                        (l(U.intl.formatToPlainString(U.t.LoVrW5, { day: i })),
                            r(
                                s
                                    ? U.intl.formatToPlainString(U.t.st59ZX, { collectibleTitle: (0, w.VG)(n) })
                                    : U.intl.formatToPlainString(U.t["4kp0AB"], { itemName: (0, w.VG)(n) }),
                            ),
                            a(void 0),
                            o(!1));
                        return;
                    }
                }
                (l(void 0), r(void 0), a(void 0), o(!1));
            }, [u, n, t, d, l, r, a, o]);
        })({ invoicePreview: n, product: l }),
        null
    );
}
var X = n(418200),
    ee = n(284009),
    et = n.n(ee),
    en = n(31823),
    el = n(427675),
    ei = n(566980),
    er = n(319820),
    ea = n(52635);
function es(e) {
    return e.name;
}
let eo = {
    [r.R.BUNDLE]: () => U.intl.string($.default["jM8/71"]),
    [r.R.AVATAR_DECORATION]: () => U.intl.string($.default.r29Oel),
    [r.R.PROFILE_EFFECT]: () => U.intl.string($.default.eTYAvF),
    [r.R.NAMEPLATE]: () => U.intl.string($.default.of9bom),
    [r.R.PROFILE_FRAME]: () => U.intl.string($.default.HzDn6w),
};
function eu(e) {
    let t = U.intl.string($.default.iZe9Wy);
    if (null == e);
    else if (e.type in eo) return (0, eo[e.type])();
    return t;
}
function ec(e) {
    let {
            sku: t,
            collectiblesProduct: n,
            priceText: i,
            description: r = U.intl.string($.default.iZe9Wy),
            giftRecipient: a,
            ...s
        } = e,
        o = (0, l.jsx)(f.WH, { sku: t, product: n }),
        u = es(t);
    return (0, l.jsx)(f.f7, {
        description: r,
        price: i,
        graphic: o,
        label: u,
        target: null != a ? { type: "gift", user: a } : void 0,
        ...s,
    });
}
function ed(e) {
    let { application: t, sku: n } = e,
        { isSocialLayerGameItem: i } = (0, er.AO)({ sku: n }),
        r = i ? U.intl.string($.default.qwSlCO) : U.intl.string($.default.iZe9Wy),
        a = i
            ? { header: t.name, headerIconSrc: y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 16 }) }
            : {};
    return (0, l.jsx)(ec, { ...e, description: r, ...a });
}
function em(e) {
    let t = U.intl.string($.default.hewwdA);
    return (0, l.jsx)(ec, { ...e, description: t });
}
function ep(e) {
    let { sku: t } = e,
        { product: n } = (0, er.AO)({ sku: t }),
        i = eu(n),
        r =
            null != n
                ? (function (e) {
                      let t = q.default.getCurrentUser(),
                          n = z.Ay.canUseShopDiscounts(t),
                          l = (0, x.xM)(t),
                          i = (0, x.WD)(e, { hasShopDiscount: n, discount: (0, x.fT)(e, n) });
                      if (null != i && !i.showDefaultPriceOnly && i.showDiscountPrice) {
                          if (l === x.D0.NITRO)
                              return { PriceIcon: P.NitroWheelIcon, priceTooltip: U.intl.string($.default.YUNJJa) };
                          if (l === x.D0.THIRDPARTY)
                              return { PriceIcon: v.TagIcon, priceTooltip: U.intl.string(Q.default.DePOcS) };
                      }
                      return {};
                  })(n)
                : {};
    return (0, l.jsx)(ec, { ...e, description: i, collectiblesProduct: n, ...r });
}
function eh(e) {
    let { productLine: t, application: n, isGift: r } = e,
        a = (0, I.o)({ application: n, productLine: t, isGift: r }),
        s = i.useMemo(() => {
            let e = [];
            return (null != a && e.push(a), e.length > 0 ? e : null);
        }, [a]);
    return (0, l.jsx)(h.Wl, { footerInlineNoticeProps: s });
}
function eC(e) {
    let { productLine: t, application: n, isGift: i } = e;
    return (0, E.t4)((e) => e.unifiedCheckoutFlow) === d.C.SLAYER_STOREFRONT_CHECKOUT
        ? (0, l.jsx)(eh, { productLine: t, application: n, isGift: i })
        : null;
}
function ef(e) {
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
                        message: U.intl.string(U.t.OvMyMd),
                        role: "none",
                        key: "test-mode-warning-notice",
                    }),
                o &&
                    e.push({
                        type: "critical",
                        message: U.intl.string(U.t.tAmECt),
                        role: "alert",
                        key: "dev-shelf-error-notice",
                    }),
                e.length > 0 ? e : null
            );
        }, [r, o]);
    return (0, l.jsx)(h.zJ, { upperInlineNoticeProps: u, shouldShowGlobalNotices: !0 });
}
function eE(e) {
    let { application: t } = e,
        n = (0, E.t4)((e) => e.unifiedCheckoutFlow);
    return n === d.C.SLAYER_STOREFRONT_CHECKOUT || n === d.C.PREMIUM_APPS_OTP_CHECKOUT
        ? (0, l.jsx)(ef, { application: t })
        : (0, l.jsx)(h.zJ, { upperInlineNoticeProps: null, shouldShowGlobalNotices: !0 });
}
function eS(e) {
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
        { isGift: s, giftRecipient: c } = (0, X.Pv)(),
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
                { application: n } = (0, en.V)(),
                l = (0, el.gU)();
            et()(null != e, "Expected selectedSkuId");
            let i = l[e],
                r = i?.eligiblePaymentGateways;
            return (
                et()(null != i, "SKU must exist and be fetched."),
                et()(null != n, "Application must exist."),
                {
                    sku: i,
                    application: n,
                    eligiblePaymentGateways: r,
                    disabled: t === ei.h.PURCHASING || t === ei.h.COMPLETED,
                }
            );
        })(),
        P = i.useMemo(
            () =>
                (function (e, t) {
                    let { skuId: n, paymentSourceType: i, isGift: r } = t;
                    return e === d.C.SLAYER_STOREFRONT_CHECKOUT
                        ? (0, l.jsx)(ea.EB, { paymentSourceType: i, skuId: n, isGift: r })
                        : (0, l.jsx)(ea.T3, { paymentSourceType: i });
                })(n, { skuId: f.id, paymentSourceType: a, isGift: s }),
            [n, f.id, a, s],
        ),
        x = i.useMemo(() => ({ paymentGatewayRestrictions: I, shouldUseUnifiedCheckoutUI: !0 }), [I]),
        _ = (0, l.jsx)(p.N, {
            label: U.intl.string(U.t["u+Cw58"]),
            location: "OneTimePurchaseReviewStepBody",
            onPaymentSourceAdd: t,
            additionalPaymentSourceDropdownProps: x,
            disabled: y,
        }),
        { product: N } = (0, er.AO)({ sku: f }),
        { unifiedInvoiceSummaryProps: j, priceText: R } = i.useMemo(
            () =>
                (function (e) {
                    let { sku: t, invoicePreview: n } = e,
                        l = [];
                    if (null != n) {
                        let { discount: e, basePrice: i, showTaxes: r } = (0, er.yh)({ invoicePreview: n });
                        (l.push({ id: "sku", label: es(t), amount: i }),
                            null != e &&
                                l.push({
                                    id: "discount",
                                    label: e.description,
                                    amount: e.amount > 0 ? -1 * e.amount : e.amount,
                                }),
                            r && l.push({ id: "tax", label: U.intl.string(U.t["/I8zmP"]), amount: n.tax }));
                        let a = (0, m.Dn)(n);
                        return (
                            null != a && l.push(a),
                            {
                                unifiedInvoiceSummaryProps: {
                                    lineItems: l,
                                    label: U.intl.string($.default.eoXh7B),
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
                    ? (0, l.jsx)(ed, { ...t })
                    : e === d.C.GUILD_PRODUCT_CHECKOUT
                      ? (0, l.jsx)(em, { ...t })
                      : e === d.C.COLLECTIBLES_CHECKOUT
                        ? (0, l.jsx)(ep, { ...t })
                        : (0, l.jsx)(ec, { ...t })
            );
        }, [n, f, g, c, R]),
        M = i.useMemo(() => (null != r ? (0, A.$g)(r.getAmountDue(), r.currency) : void 0), [r]),
        w = (0, S.g)(N ?? null),
        q = i.useMemo(
            () =>
                (function (e, t) {
                    let { invoicePreview: n, isGift: i, promotion: r, productLine: a } = t;
                    if (e === d.C.COLLECTIBLES_CHECKOUT) {
                        let e = (function (e, t, n) {
                            let l = e?.tenantMetadata?.collectibles?.blocks?.[G.D.CHECKOUT_OFFER_NOTICE];
                            if (null == e || null == l || !(0, W.IT)(e)) return null;
                            let i = (0, H.o)({ block: l, promotion: e, locale: n, orbsBack: t });
                            return null == i
                                ? null
                                : { label: i.label, countdown: i.countdown, style: l.style, Icon: (0, Y.s)(l.icon) };
                        })(r, (null != n ? n.orbsReward : null) ?? null, Z.default.locale);
                        if (null != e) return (0, l.jsx)(K.Q, { ...e });
                        let t = (function (e, t) {
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
                                              let n = (0, V.X)(e.endsAt);
                                              return null == n
                                                  ? null
                                                  : {
                                                        Icon: v.TagIcon,
                                                        text: U.intl.formatToPlainString(U.t["/nFLZv"], {
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
                                    if ((0, B.uJ)(l)) return null;
                                    return {
                                        Icon: (0, Y.s)(t?.icon),
                                        text: (0, F.U)(l),
                                        gradientColor: (0, k.aJ)(e?.flavor),
                                    };
                                }
                                default:
                                    return null;
                            }
                        })(r, i);
                        return null == t ? null : (0, l.jsx)(u.J, { ...t });
                    }
                    if (e === d.C.SLAYER_STOREFRONT_CHECKOUT) {
                        let e = n?.orbsReward;
                        if (null == e || e <= 0) return null;
                        let t = i ? U.t["ZV+aS9"] : U.t["0StwHe"];
                        return (0, l.jsx)(u.J, {
                            Icon: o.OrbsIcon,
                            text: U.intl.format(t, { orbCount: e }),
                            gradientColor: a === D.EZt.SOCIAL_LAYER_GAME_ITEM ? "green" : "default",
                        });
                    }
                    return null;
                })(n, { invoicePreview: r, isGift: s, promotion: w, productLine: f.productLine }),
            [n, r, s, w, f.productLine],
        ),
        z = i.useMemo(() => (null != q ? { headerBadgeText: U.intl.string($.default.Fjpyfj) } : {}), [q]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n === d.C.COLLECTIBLES_CHECKOUT &&
                (0, l.jsx)(J, { requiredCheckoutFlow: d.C.COLLECTIBLES_CHECKOUT, invoicePreview: r, product: N }),
            (0, l.jsx)(h.T_, {
                headerBadgeConfig: z,
                purchaseItemContent: L,
                invoiceSummaryContent: O,
                paymentMethodContent: _,
                legalContent: P,
                promotionalNoticeContent: q,
                upperInlineNoticeContent: (0, l.jsx)(eE, { application: g }),
                footerInlineNoticeContent: (0, l.jsx)(eC, { productLine: f.productLine, application: g, isGift: s }),
                invoiceTotalDueLabel: U.intl.string($.default.Zxav97),
                invoiceTotalDueValue: M,
            }),
        ],
    });
}
