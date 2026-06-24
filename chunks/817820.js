i.d(t, { A: () => e9 });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(284009),
    o = i.n(a),
    u = i(837381),
    d = i(17928),
    c = i(689175),
    g = i(993077),
    m = i(289873),
    A = i(834730),
    h = i(228366),
    E = i(661439),
    S = i(73825),
    T = i(928039),
    x = i(753390);
let p = (0, i(945810).mj)({
    name: "2026-06-orb-redemptions-billing-history",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = i(235986),
    N = i(408278),
    _ = i(921853),
    I = i(320448),
    C = i(375708),
    b = i(632787);
let y = s.forwardRef(function (e, t) {
    let { currentPageIndex: i, numPages: s, onChangePage: l, children: r, showPageCount: a = !0, ...o } = e,
        u = i >= s - 1,
        d = a
            ? C.intl.format(C.t.MtpIwg, { currentPage: i + 1, numPages: s })
            : C.intl.format(C.t.bKI77c, { currentPage: i + 1 });
    return (0, n.jsxs)("div", {
        ref: t,
        ...o,
        children: [
            r,
            (0, n.jsx)("div", {
                className: b.v,
                children: (0, n.jsxs)("div", {
                    className: b.U,
                    children: [
                        (0, n.jsx)(N.K, {
                            variant: "icon-only",
                            icon: _.n,
                            disabled: i <= 0,
                            onClick: () => l(i - 1),
                            "aria-label": C.intl.string(C.t.vgfxaA),
                        }),
                        (0, n.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, n.jsx)(N.K, {
                            variant: "icon-only",
                            icon: I._,
                            disabled: u,
                            onClick: () => l(i + 1),
                            "aria-label": C.intl.string(C.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
i(321073), i(938796);
var v = i(334279),
    j = i(122817),
    O = i(665260),
    R = i(315069),
    D = i(32731),
    L = i(557009),
    P = i(202613),
    G = i(243217),
    M = i(652215),
    U = i(788868);
class V extends R.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    static createFromServer(e) {
        let t = null != e.payment_source ? P.Ay.createFromServer(e.payment_source) : null,
            i = null != e.sku ? D.A.createFromServer(e.sku) : null,
            n = null != e.subscription ? G.A.createFromServer(e.subscription) : null;
        return new V({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            flags: e.flags,
            subscription: n,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: i,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => L.A.createFromServer(e)) : void 0,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.amount = e.amount),
            (this.amountRefunded = e.amountRefunded),
            (this.createdAt = e.createdAt),
            (this.currency = e.currency),
            (this.description = e.description),
            (this.paymentSource = e.paymentSource),
            (this.paymentGateway = e.paymentGateway),
            (this.status = e.status),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscription = e.subscription),
            (this.skuId = e.skuId),
            (this.skuPrice = e.skuPrice),
            (this.sku = e.sku),
            (this.flags = e.flags),
            (this.downloadableInvoice = e.downloadableInvoice),
            (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
            (this.hasInvoiceURL = e.hasInvoiceURL),
            (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs),
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons),
            (this.entitlements = e.entitlements);
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === M.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === M.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && U.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return U.pW.has(t);
                })
        );
    }
    get isGift() {
        return O.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(U.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === M.EZt.GUILD_PRODUCT || O.Lt(this.sku.flags, j.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === M.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && v.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
let k = [],
    w = !1;
function B(e) {
    let { payment: t } = e,
        i = V.createFromServer(t),
        n = k.findIndex((e) => e.id === t.id);
    -1 === n ? (k.push(i), k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (k[n] = i), (k = [...k]);
}
class F extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return k.find((t) => t.id === e);
    }
    getPayments() {
        return k;
    }
    get hasFetchedPayments() {
        return w;
    }
}
let z = new F(h.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of ((w = !0), t)) {
            let t = V.createFromServer(e),
                i = k.findIndex((t) => t.id === e.id);
            -1 !== i ? (k[i] = t) : k.push(t);
        }
        k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (k = [...k]);
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        w = !0;
    },
    PAYMENT_UPDATE: B,
    BILLING_PAYMENT_FETCH_SUCCESS: B,
    LOGOUT: function () {
        (k = []), (w = !1);
    },
});
var X = i(97352),
    Y = i(166403),
    H = i(428262),
    K = i(989349),
    W = i.n(K),
    Z = i(990078),
    Q = i(821609),
    q = i(939249),
    J = i(707554),
    $ = i(789645),
    ee = i(933832),
    et = i(349288),
    ei = i(403581),
    en = i(34188),
    es = i(597770),
    el = i(512950),
    er = i(975807),
    ea = i(793574),
    eo = i(688810),
    eu = i(46225),
    ed = i(587895),
    ec = i(636537),
    eg = i(683071),
    em = i(192308);
let eA = function (e, t) {
    (0, em.openModalLazy)(async () => {
        let { default: s } = await Promise.all([i.e("7755"), i.e("34138")]).then(i.bind(i, 206049));
        return (i) => (0, n.jsx)(s, { payment: e, paymentSource: t, ...i });
    });
};
var eh = i(818348),
    eE = i(12762);
async function eS(e) {
    try {
        return (
            await ec.Bo.get({
                url: M.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function eT(e) {
    let { payment: t } = e,
        [i, l] = s.useState(null),
        [r, a] = s.useState(null);
    async function o(e) {
        try {
            let i = await eS(t.id);
            l(i);
            let n = e ? i.refundInvoiceLinks[0] : i.invoiceLink;
            window.open(n, "_blank"), a(null);
        } catch (e) {
            a(e.body?.message);
        }
    }
    let u = null != t.paymentSource && t.status === eh.__.COMPLETED,
        d = i?.invoiceLink,
        c = i?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == i
        ? (0, n.jsxs)("div", {
              className: eE.It,
              children: [
                  (0, n.jsx)(et.Anchor, { onClick: () => o(!1), children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)(et.Anchor, {
                            className: eE.oe,
                            onClick: () => o(!0),
                            children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(eg.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: eE.It,
                children: [
                    (0, n.jsx)(et.Anchor, { href: d, children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  et.Anchor,
                                  {
                                      className: eE.oe,
                                      href: e,
                                      children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(eg.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: eE.It,
                  children: (0, n.jsx)(et.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eA(t, e);
                      },
                      children: C.intl.formatToPlainString(C.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ex = i(769015),
    ep = i(250627),
    ef = i(871109),
    eN = i(571654),
    e_ = i(411342),
    eI = i(179499),
    eC = i(741231),
    eb = i(95035),
    ey = i(337095),
    ev = i(871123),
    ej = i(510022),
    eO = i(68935),
    eR = i(148355),
    eD = i(780964),
    eL = i(830543),
    eP = i(766075),
    eG = i(106799),
    eM = i(317525),
    eU = i(71393),
    eV = i(287809),
    ek = i(295405),
    ew = i(90165),
    eB = i(147925),
    eF = i(174459),
    ez = i(957565),
    eX = i(58703),
    eY = i(580630),
    eH = i(427262),
    eK = i(219887);
let eW = (e) => `https://${M.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eZ = [M.Puh.DURABLE_PRIMARY, M.Puh.DURABLE, M.Puh.CONSUMABLE],
    eQ = [M.__0.FAILED, M.__0.REVERSED, M.__0.CANCELED],
    eq = [eh.kM.APPLE];
function eJ(e) {
    let { description: t, cost: i } = e;
    return (0, n.jsx)("li", {
        className: eE.mg,
        children: (0, n.jsxs)(f.A, {
            justify: f.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e$(e) {
    let { value: t, copyText: i, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, n.jsx)(Z.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(q.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, ez.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, n.jsx)("div", { className: eE.l9, children: t }),
        }),
    });
}
function e0(e) {
    let { description: t, detail: i } = e;
    return (0, n.jsx)("li", {
        className: eE.Iu,
        children: (0, n.jsxs)(f.A, {
            justify: f.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e1(e) {
    let { guildId: t, guildProductListingId: i } = e,
        l = (0, ep.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, eN.z)(l),
        a = (0, d.bG)([eU.A], () => eU.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? C.intl.string(C.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(M.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, eC.A)(M.BVt.GUILD_PRODUCT(t, i))
                : await (0, eC.A)(M.BVt.CHANNEL(t)),
                (0, eL.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(e0, { description: C.intl.string(C.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(e0, {
                    description: C.intl.string(C.t.Wpn8z8),
                    detail: (0, n.jsx)(eb.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e2(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, ep.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([ef.A], () => ef.A.getGuildProductFetchState(i) === ef.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([eM.A], () => (null != r ? eM.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eI.A)({ guildId: t, productId: i }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, n.jsx)("div", { className: eE.hT, children: (0, n.jsx)(m.y, {}) })
        : null != s && (u || c)
          ? (0, n.jsxs)("div", {
                className: eE.hT,
                children: [
                    u &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eE.yE,
                                    children: C.intl.string(C.t.hxawoy),
                                }),
                                (0, n.jsx)(Q.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: eE.yF }),
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eE.yE,
                                    children: C.intl.string(C.t.gWBNet),
                                }),
                                (0, n.jsx)(e_.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
class e3 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    state = { expanded: !1 };
    refundRules = [
        {
            rule: "PURCHASE_DATE",
            canRefund: () => {
                let { payment: e } = this.props,
                    t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                return this.daysSincePurchase <= t;
            },
        },
        {
            rule: "SKU_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || e.sku.type !== M.Puh.CONSUMABLE;
            },
        },
        {
            rule: "ALREADY_REFUNDED",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.amountRefunded < e.amount;
            },
        },
        {
            rule: "PAYMENT_STATUS",
            canRefund: () => {
                let { payment: e } = this.props;
                return !eQ.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eq.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, O.Lt)(e.sku.flags, M.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== M.rzx.GUILD && e.subscription?.type !== M.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, O.Lt)(e.sku.flags, j.d.GUILD_PRODUCT);
            },
        },
        {
            rule: "COLLECTIBLE",
            canRefund: () => {
                let { payment: e } = this.props;
                return !e.isShopPurchase;
            },
        },
    ];
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            i = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return W()().diff(i, "days");
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
    handleExpandInfo = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    validateRefundRules() {
        return this.refundRules
            .filter((e) => {
                let { canRefund: t } = e;
                return !t();
            })
            .map((e) => {
                let { rule: t } = e;
                return t;
            });
    }
    renderDefaultStatus() {
        let { payment: e } = this.props;
        switch (e.status) {
            case M.__0.PENDING:
                return (0, n.jsx)("span", { className: eE.Xg, children: C.intl.string(C.t.y7F0Re) });
            case M.__0.FAILED:
                return (0, n.jsx)("span", { className: eE.ob, children: C.intl.string(C.t.Yo4ru6) });
            case M.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: eE.gD, children: C.intl.string(C.t.lYbZzz) });
                return (0, n.jsx)("span", { className: eE.gD, children: C.intl.string(C.t.ZBb6NK) });
            case M.__0.REVERSED:
                return (0, n.jsx)("span", { className: eE.ob, children: C.intl.string(C.t.YQv9Li) });
            case M.__0.CANCELED:
                return (0, n.jsx)("span", { className: eE.ob, children: C.intl.string(C.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, ev.bF)(e.sku) && e.status === M.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: eE.gD, children: C.intl.string(C.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: eE.gD, children: C.intl.string(C.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: eE.Tf, children: C.intl.string(C.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: eE.Tf, children: C.intl.string(C.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: eE.Tf, children: C.intl.string(C.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let { payment: t } = this.props;
        return t.currency === eh.Yr.DISCORD_ORB
            ? (0, n.jsxs)("span", {
                  className: eE.db,
                  children: [
                      (0, n.jsx)(eG.A, { customSize: 16 }),
                      C.intl.formatToPlainString(C.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eY.$g)(e, t.currency);
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, n.jsx)("span", { className: eE.q9, children: this.renderAmount(t) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, n.jsx)("li", {
            className: eE.mg,
            children: (0, n.jsxs)("div", {
                className: eE.bx,
                children: [
                    (0, n.jsx)("div", { children: C.intl.string(C.t["UQim+r"]) }),
                    (0, n.jsx)(e$, {
                        value: e.id,
                        copyText: C.intl.string(C.t["Mdk9+A"]),
                        copyFeedbackText: C.intl.string(C.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: i } = this.props,
            { taxInclusive: l, tax: a, amount: o, amountRefunded: u } = e,
            d = i?.guildId;
        return (0, n.jsxs)("div", {
            className: r()(eE.iL, eE.W),
            children: [
                null != e.paymentSource
                    ? (0, n.jsx)(eK.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: eE.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eh.kM.APPLE_PARTNER
                      ? (0, n.jsx)(eK.A, {
                            paymentSource: new P.Pw({}),
                            locale: t,
                            descriptionClassName: eE.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, n.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !l && a > 0
                            ? (0, n.jsxs)(s.Fragment, {
                                  children: [
                                      (0, n.jsx)(eJ, { description: e.description, cost: this.renderAmount(o - a) }),
                                      (0, n.jsx)(eJ, {
                                          description: C.intl.string(C.t.QgWXht),
                                          cost: this.renderAmount(a),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(eJ, { description: C.intl.string(C.t.txajQG), cost: this.renderAmount(o) }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, n.jsx)(e1, { guildId: d, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(eJ, {
                                        description: C.intl.string(C.t["A+I0AP"]),
                                        cost: this.renderAmount(u),
                                    }),
                                    (0, n.jsx)(eJ, {
                                        description: C.intl.string(C.t.xER6Wi),
                                        cost: this.renderAmount(o - u),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    renderInvoiceDownload() {
        let { payment: e } = this.props;
        return (0, n.jsx)(eT, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: i,
                application: l,
                locale: r,
                analyticsLocations: a,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === M.__0.REFUNDED
            ? (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(J.H, { className: eE.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: eE.iL,
                          children:
                              null != e
                                  ? C.intl.format(C.t.Q1K9eg, { username: eH.Ay.getName(e) })
                                  : C.intl.format(C.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(J.H, { className: eE.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: eE.iL,
                            children:
                                null != e
                                    ? C.intl.format(C.t.vfUW65, { username: eH.Ay.getName(e) })
                                    : C.intl.string(C.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: eE.TP,
                                children: (0, n.jsx)(Q.$, {
                                    variant: "primary",
                                    text: C.intl.string(C.t["jcSP+g"]),
                                    onClick: () => (0, eP.openUserSettings)(eD.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)(J.H, { className: eE.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: eE.iL,
                              children: i
                                  ? C.intl.format(C.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : C.intl.format(C.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: eE.TP,
                              children: i
                                  ? (0, n.jsx)(Q.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t.zoztQA),
                                        onClick: () => (0, er.A)(eW(r)),
                                    })
                                  : (0, n.jsx)(Q.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (eF.default.track(
                                                    M.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, ej.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, ev.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: i } = this.props,
            l = this.validateRefundRules();
        if (
            l.includes("PAYMENT_GATEWAY") ||
            l.includes("PAYMENT_STATUS") ||
            l.includes("ALREADY_REFUNDED") ||
            l.includes("SKU_STICKER_PACK") ||
            l.includes("SUBSCRIPTION_TYPE") ||
            l.includes("GUILD_PRODUCT")
        )
            return null;
        let r = 0 === l.length,
            a = eW(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e =
                l.includes("SKU_TYPE") && !i.isShopPurchase
                    ? C.intl.format(C.t["5lvoVS"], { supportURL: a })
                    : r
                      ? i.isPremiumSubscription || i.isPremiumGuildSubscription
                          ? C.intl.format(C.t.EPYteX, { dateLimit: o, supportURL: a })
                          : i.isGift
                            ? C.intl.format(C.t["16eP/L"], { dateLimit: o, supportURL: a })
                            : C.intl.format(C.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: a })
                      : i.isShopPurchase
                        ? C.intl.string(C.t.s9TZM1)
                        : i.isGift
                          ? C.intl.formatToPlainString(C.t.owlOWc, { dateLimit: o })
                          : i.isPremiumSubscription || i.isPremiumGuildSubscription
                            ? C.intl.formatToPlainString(C.t.dk7vyL, { dateLimit: o })
                            : C.intl.formatToPlainString(C.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, n.jsxs)(s.Fragment, {
                children: [
                    (0, n.jsx)(J.H, { className: eE.mW, children: C.intl.string(C.t["n/27pr"]) }),
                    (0, n.jsxs)("div", {
                        className: eE.iL,
                        children: [(0, n.jsx)("div", { children: e }), this.renderRefundActions(l)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, i, s) {
        return (0, n.jsxs)(
            "div",
            {
                className: eE._Z,
                children: [
                    (0, n.jsx)(J.H, { className: eE.ud, children: e }),
                    (0, n.jsxs)("div", {
                        className: eE.z9,
                        children: [
                            (0, n.jsx)(t, { className: eE.xb, color: "currentColor" }),
                            null != i && (0, n.jsx)("div", { children: i }),
                        ],
                    }),
                ],
            },
            s,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: i } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let s = e.includes("PURCHASE_DATE") ? $.P : ee.A;
        return (0, n.jsxs)("div", {
            className: eE.My,
            children: [
                (0, n.jsx)("div", {
                    className: eE.Kf,
                    children:
                        !i.isShopPurchase &&
                        this.renderRefundCriteria(
                            C.intl.string(C.t.H0RNz4),
                            s,
                            C.intl.formatToPlainString(C.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)(et.Anchor, { href: eW(t), children: C.intl.string(C.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: i, payment: l, application: r, guild: a, stickerPack: o, plan: u } = this.props,
            { expanded: d } = this.state,
            c = l.sku,
            g = l.subscription,
            m = null != l.paymentSource && M.AD1.has(l.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let i = [],
                s = null;
            if (g.type === M.rzx.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: n } = e;
                    (0, H.xq)(t)
                        ? (i.push(H.Ay.getDisplayName(t, !1, m)), (s = (0, H.mH)(U.hd[t].skuId)))
                        : (i.push(`${n > 1 ? `${n}x ` : ""}${H.Ay.getDisplayName(t, !1, m)}`),
                          null == s && (s = (0, H.mH)(U.hd[t].skuId)));
                });
            else if (g.type === M.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === U.WT.YEAR ? C.t.V6UFQM : C.t["6oq128"];
                    i.push(C.intl.format(e, { planName: u.name })), (s = u.skuId);
                }
            } else
                g.type,
                    null != u && (s = u.skuId),
                    null != r
                        ? i.push(C.intl.formatToPlainString(C.t["0wL/VI"], { tier: c?.name }))
                        : i.push(C.intl.string(C.t["9czSYu"]));
            (t = 0 !== i.length ? i.join(", ") : l.description),
                (e = (0, n.jsx)(ex.A, {
                    className: eE.Sy,
                    guildClassName: eE.zA,
                    game: r,
                    guild: a,
                    size: ex.M.XSMALL,
                    skuId: s ?? c?.id,
                }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? C.intl.string(C.t.O7uLmw) : c.name),
                null != o)
            ) {
                let t = (0, eO.Id)(o);
                e = (0, n.jsx)(eR.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eE.Sy,
                    size: 24,
                });
            } else
                e = l.isFractionalPremium
                    ? (0, n.jsx)(ei.t, { size: "md", color: "currentColor", className: eE.Sy })
                    : l.isCollectible
                      ? (0, n.jsx)(en.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: eE.sV,
                        })
                      : (0, n.jsx)(ex.A, {
                            className: eE.Sy,
                            guildClassName: eE.zA,
                            game: r,
                            guild: a,
                            size: ex.M.XSMALL,
                            skuId: c.id,
                        });
        else (e = (0, n.jsx)(ei.t, { size: "md", color: "currentColor", className: eE.Sy })), (t = l.description);
        let h = (0, n.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eE.p6,
                children: (0, eX.i$)(W()(l.createdAt), "MM/DD/YYYY"),
            }),
            E = l.isGift
                ? (0, n.jsx)(Z.m, {
                      text: C.intl.string(C.t.QddTpm),
                      children: (0, n.jsx)(es.o, { size: "md", color: "currentColor", className: eE.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: eE.h_, children: [e, (0, n.jsxs)("div", { children: [t, h] }), E] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, n.jsxs)("div", { className: eE.h_, children: [e, (0, n.jsx)("div", { children: t }), E] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: i } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: eE.ts }),
                      e.isSoftDeletedProduct
                          ? (0, n.jsx)(el.p, {
                                messageType: el.Y.WARNING,
                                action: (0, n.jsx)(Q.$, {
                                    variant: "overlay-secondary",
                                    text: C.intl.string(C.t.zoztQA),
                                    onClick: () => (0, er.A)(eW(i)),
                                }),
                                children: C.intl.string(C.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(e2, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(q.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: eE.WI,
                children: [
                    (0, n.jsx)(J.H, { className: eE.mW, children: C.intl.string(C.t.nyzoFb) }),
                    this.renderPaymentBreakdown(),
                    this.renderGuildProductBenefits(),
                    this.renderInvoiceDownload(),
                    this.renderAdditionalTenantInfo(),
                    this.renderRefundDetails(),
                ],
            }),
        });
    }
    render() {
        let { payment: e, className: t, compactMode: i } = this.props,
            { expanded: s } = this.state;
        return (0, n.jsx)(u.tG, {
            id: e.id,
            children: (e) =>
                (0, n.jsxs)(q.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(eE.Ji, t, { [eE.oE]: i }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, n.jsxs)(f.A, {
                            className: eE.J7,
                            align: f.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, n.jsxs)("div", {
                                    className: eE.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, n.jsx)(eB.A, {
                                    className: eE.fT,
                                    direction: s ? eB.A.Directions.UP : eB.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e6(e) {
    let { payment: t, locale: i, compactMode: l, className: r } = e,
        a = null != t.sku && eZ.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === M.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([ek.A, ew.A, ed.A], () => ({
            applicationStatistics: null != o ? ew.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: ed.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: ek.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, eu.RD)((0, ev.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([ed.A], () => (null != u ? ed.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, ey.TA)(u);
    }, [u, c]);
    let S = (0, d.bG)([eU.A], () => eU.A.getGuild(m?.guildId)),
        T = a ? m : void 0,
        x = t.subscription,
        p = (0, d.bG)([X.A], () => (null != x && x.type !== M.rzx.PREMIUM ? X.A.get(x.items[0].planId) : null)),
        f = (0, d.bG)([eV.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eV.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, eo.Ay)(ea.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e3, {
        applicationStatistics: g,
        application: c ? E : T,
        analyticsLocations: N,
        guild: S,
        stickerPack: null,
        paymentSources: A,
        locale: i,
        compactMode: l,
        className: r,
        payment: t,
        plan: p,
        claimedGiftUser: f,
        hasLinkedToApplication: h,
    });
}
var e4 = i(687788);
function e7(e) {
    let { payments: t, locale: i, compactMode: l, numPages: a } = e,
        o = s.useRef(null),
        [d, g] = s.useState(0),
        [m, A] = s.useState(null),
        h = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let E = s.useCallback(
            (e) => {
                g(e);
                let i = t[t.length - 1].id;
                e >= a - 2 && m !== i && ((0, x.CK)(10, i), A(i));
            },
            [t, a, m],
        ),
        S = (0, T.A)("billing-history", o);
    return (0, n.jsx)(u.hD, {
        navigator: S,
        children: (0, n.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, n.jsx)(y, {
                    className: e4.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, n.jsx)(c.Ch, {
                        className: e4.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, n.jsx)(e6, { className: r()(e4.Nj, e4.Bd), payment: e, locale: i, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e5 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        h.h.wait(() => {
            (0, E.X)(), (0, x.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, n.jsxs)(g.Z, {
                className: e4.K1,
                children: [
                    (0, n.jsx)("div", {
                        className: e4.BF,
                        children: C.intl.format(C.t["6mIX6s"], { paymentGatewayName: eh.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e4.Q2,
                        children: C.intl.format(C.t.eG0uZB, {
                            paymentGatewayName: eh.qm[e.paymentGateway],
                            billingHistoryLink: (0, H.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: i, locale: s, hasFetchedPayments: l } = this.props,
            a = null != i && i.isPurchasedExternally;
        return l
            ? (0, n.jsxs)("div", {
                  className: e4.GD,
                  children: [
                      null != i && a ? this.renderPremiumExternalSubscription(i) : null,
                      t.length > 0
                          ? (0, n.jsxs)("div", {
                                className: r()(e4.PQ, e4.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, n.jsx)("div", {
                                              className: r()(e4.Nj, e4.Bd),
                                              children: (0, n.jsxs)(f.A, {
                                                  className: e4.Yi,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: eE.p6,
                                                          children: C.intl.string(C.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e4.Ir,
                                                          children: C.intl.string(C.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: eE.vj,
                                                          children: C.intl.string(C.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e7, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : a
                            ? null
                            : (0, n.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: C.intl.string(C.t.GqvDkk),
                              }),
                  ],
              })
            : (0, n.jsx)(m.y, {});
    }
}
function e8(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(U.pe).includes(t) || (0, H.ys)(i));
}
function e9(e) {
    var t;
    let i = (0, d.bG)([z], () => z.getPayments()),
        l = (0, d.bG)([Y.A], () => Y.A.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    i.filter(e8).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [i],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    i.filter(e8).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [i],
        ),
        o = (0, d.yK)([X.A], () => X.A.getPlanIdsForSkus(Array.from(a))),
        u = s.useCallback(() => o.length === r.size, [o, r]),
        c = ((t = { location: "billing_transaction_history" }), p.useConfig(t).enabled),
        g = s.useMemo(() => (c ? i : i.filter((e) => e.currency !== M.Yri.DISCORD_ORB)), [i, c]);
    s.useEffect(() => {
        u() ||
            h.h.wait(() => {
                a.forEach((e) => (0, S.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [u, a]);
    let m = (0, d.bG)([z], () => z.hasFetchedPayments);
    return (0, n.jsx)(e5, { ...e, payments: g, subscription: l, hasFetchedPayments: m });
}
