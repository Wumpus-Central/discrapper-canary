i.d(t, { A: () => ti });
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
    x = i(277984);
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
    b = i(516883);
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
    Z = i(661531),
    Q = i(990078),
    q = i(821609),
    J = i(939249),
    $ = i(403581),
    ee = i(707554),
    et = i(789645),
    ei = i(933832),
    en = i(349288),
    es = i(34188),
    el = i(597770),
    er = i(512950),
    ea = i(975807),
    eo = i(793574),
    eu = i(688810),
    ed = i(46225),
    ec = i(587895),
    eg = i(636537),
    em = i(683071),
    eA = i(192308);
let eh = function (e, t) {
    (0, eA.openModalLazy)(async () => {
        let { default: s } = await Promise.all([i.e("7755"), i.e("34138")]).then(i.bind(i, 206049));
        return (i) => (0, n.jsx)(s, { payment: e, paymentSource: t, ...i });
    });
};
var eE = i(818348),
    eS = i(600410);
async function eT(e) {
    try {
        return (
            await eg.Bo.get({
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
function ex(e) {
    let { payment: t } = e,
        [i, l] = s.useState(null),
        [r, a] = s.useState(null);
    async function o(e) {
        try {
            let i = await eT(t.id);
            l(i);
            let n = e ? i.refundInvoiceLinks[0] : i.invoiceLink;
            window.open(n, "_blank"), a(null);
        } catch (e) {
            a(e.body?.message);
        }
    }
    let u = null != t.paymentSource && t.status === eE.__.COMPLETED,
        d = i?.invoiceLink,
        c = i?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == i
        ? (0, n.jsxs)("div", {
              className: eS.It,
              children: [
                  (0, n.jsx)(en.Anchor, { onClick: () => o(!1), children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)(en.Anchor, {
                            className: eS.oe,
                            onClick: () => o(!0),
                            children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(em.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: eS.It,
                children: [
                    (0, n.jsx)(en.Anchor, { href: d, children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  en.Anchor,
                                  {
                                      className: eS.oe,
                                      href: e,
                                      children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(em.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: eS.It,
                  children: (0, n.jsx)(en.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eh(t, e);
                      },
                      children: C.intl.formatToPlainString(C.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ep = i(769015),
    ef = i(250627),
    eN = i(871109),
    e_ = i(571654),
    eI = i(411342),
    eC = i(179499),
    eb = i(741231),
    ey = i(95035),
    ev = i(576243),
    ej = i(337095),
    eO = i(871123),
    eR = i(510022),
    eD = i(68935),
    eL = i(148355),
    eP = i(780964),
    eG = i(830543),
    eM = i(766075),
    eU = i(106799),
    eV = i(317525),
    ek = i(71393),
    ew = i(287809),
    eB = i(295405),
    eF = i(90165),
    ez = i(147925),
    eX = i(174459),
    eY = i(957565),
    eH = i(58703),
    eK = i(580630),
    eW = i(427262),
    eZ = i(219887);
let eQ = (e) => `https://${M.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eq = [M.Puh.DURABLE_PRIMARY, M.Puh.DURABLE, M.Puh.CONSUMABLE],
    eJ = [M.__0.FAILED, M.__0.REVERSED, M.__0.CANCELED],
    e$ = [eE.kM.APPLE];
function e0(e) {
    let { description: t, cost: i } = e;
    return (0, n.jsx)("li", {
        className: eS.mg,
        children: (0, n.jsxs)(f.A, {
            justify: f.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e1(e) {
    let { value: t, copyText: i, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, n.jsx)(Q.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(J.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, eY.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, n.jsx)("div", { className: eS.l9, children: t }),
        }),
    });
}
function e2(e) {
    let { description: t, detail: i } = e;
    return (0, n.jsx)("li", {
        className: eS.Iu,
        children: (0, n.jsxs)(f.A, {
            justify: f.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e3(e) {
    let { guildId: t, guildProductListingId: i } = e,
        l = (0, ef.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, e_.z)(l),
        a = (0, d.bG)([ek.A], () => ek.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? C.intl.string(C.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(M.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, eb.A)(M.BVt.GUILD_PRODUCT(t, i))
                : await (0, eb.A)(M.BVt.CHANNEL(t)),
                (0, eG.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(e2, { description: C.intl.string(C.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(e2, {
                    description: C.intl.string(C.t.Wpn8z8),
                    detail: (0, n.jsx)(ey.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e6(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, ef.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([eN.A], () => eN.A.getGuildProductFetchState(i) === eN.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([eV.A], () => (null != r ? eV.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eC.A)({ guildId: t, productId: i }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, n.jsx)("div", { className: eS.hT, children: (0, n.jsx)(m.y, {}) })
        : null != s && (u || c)
          ? (0, n.jsxs)("div", {
                className: eS.hT,
                children: [
                    u &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eS.yE,
                                    children: C.intl.string(C.t.hxawoy),
                                }),
                                (0, n.jsx)(q.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: eS.yF }),
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eS.yE,
                                    children: C.intl.string(C.t.gWBNet),
                                }),
                                (0, n.jsx)(eI.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
function e4(e) {
    let { withGradient: t, compactMode: i } = e,
        s = i ? 28 : 16;
    return t
        ? (0, n.jsx)(ev.A, { size: i ? 40 : 24, iconSize: s, color: Z.A.unsafe_rawColors.NEUTRAL_1, className: eS.Sy })
        : (0, n.jsx)("div", {
              className: r()(eS.Sy, eS.uX, i ? eS.vU : eS.Xr),
              children: (0, n.jsx)($.t, { size: "custom", width: s, height: s, color: Z.A.colors.ICON_DEFAULT }),
          });
}
class e7 extends s.PureComponent {
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
                return !eJ.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !e$.includes(e.paymentGateway);
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
                return (0, n.jsx)("span", { className: eS.Xg, children: C.intl.string(C.t.y7F0Re) });
            case M.__0.FAILED:
                return (0, n.jsx)("span", { className: eS.ob, children: C.intl.string(C.t.Yo4ru6) });
            case M.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: eS.gD, children: C.intl.string(C.t.lYbZzz) });
                return (0, n.jsx)("span", { className: eS.gD, children: C.intl.string(C.t.ZBb6NK) });
            case M.__0.REVERSED:
                return (0, n.jsx)("span", { className: eS.ob, children: C.intl.string(C.t.YQv9Li) });
            case M.__0.CANCELED:
                return (0, n.jsx)("span", { className: eS.ob, children: C.intl.string(C.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eO.bF)(e.sku) && e.status === M.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: eS.gD, children: C.intl.string(C.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: eS.gD, children: C.intl.string(C.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: eS.Tf, children: C.intl.string(C.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: eS.Tf, children: C.intl.string(C.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: eS.Tf, children: C.intl.string(C.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let { payment: t } = this.props;
        return t.currency === eE.Yr.DISCORD_ORB
            ? (0, n.jsxs)("span", {
                  className: eS.db,
                  children: [
                      (0, n.jsx)(eU.A, { customSize: 16 }),
                      C.intl.formatToPlainString(C.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eK.$g)(e, t.currency);
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, n.jsx)("span", { className: eS.q9, children: this.renderAmount(t) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, n.jsx)("li", {
            className: eS.mg,
            children: (0, n.jsxs)("div", {
                className: eS.bx,
                children: [
                    (0, n.jsx)("div", { children: C.intl.string(C.t["UQim+r"]) }),
                    (0, n.jsx)(e1, {
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
            className: r()(eS.iL, eS.W),
            children: [
                null != e.paymentSource
                    ? (0, n.jsx)(eZ.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: eS.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eE.kM.APPLE_PARTNER
                      ? (0, n.jsx)(eZ.A, {
                            paymentSource: new P.Pw({}),
                            locale: t,
                            descriptionClassName: eS.iL,
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
                                      (0, n.jsx)(e0, { description: e.description, cost: this.renderAmount(o - a) }),
                                      (0, n.jsx)(e0, {
                                          description: C.intl.string(C.t.QgWXht),
                                          cost: this.renderAmount(a),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(e0, { description: C.intl.string(C.t.txajQG), cost: this.renderAmount(o) }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, n.jsx)(e3, { guildId: d, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(e0, {
                                        description: C.intl.string(C.t["A+I0AP"]),
                                        cost: this.renderAmount(u),
                                    }),
                                    (0, n.jsx)(e0, {
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
        return (0, n.jsx)(ex, { payment: e });
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
                      (0, n.jsx)(ee.H, { className: eS.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: eS.iL,
                          children:
                              null != e
                                  ? C.intl.format(C.t.Q1K9eg, { username: eW.Ay.getName(e) })
                                  : C.intl.format(C.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(ee.H, { className: eS.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: eS.iL,
                            children:
                                null != e
                                    ? C.intl.format(C.t.vfUW65, { username: eW.Ay.getName(e) })
                                    : C.intl.string(C.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: eS.TP,
                                children: (0, n.jsx)(q.$, {
                                    variant: "primary",
                                    text: C.intl.string(C.t["jcSP+g"]),
                                    onClick: () => (0, eM.openUserSettings)(eP.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)(ee.H, { className: eS.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: eS.iL,
                              children: i
                                  ? C.intl.format(C.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : C.intl.format(C.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: eS.TP,
                              children: i
                                  ? (0, n.jsx)(q.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t.zoztQA),
                                        onClick: () => (0, ea.A)(eQ(r)),
                                    })
                                  : (0, n.jsx)(q.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (eX.default.track(
                                                    M.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, eR.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, eO.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            a = eQ(t),
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
                    (0, n.jsx)(ee.H, { className: eS.mW, children: C.intl.string(C.t["n/27pr"]) }),
                    (0, n.jsxs)("div", {
                        className: eS.iL,
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
                className: eS._Z,
                children: [
                    (0, n.jsx)(ee.H, { className: eS.ud, children: e }),
                    (0, n.jsxs)("div", {
                        className: eS.z9,
                        children: [
                            (0, n.jsx)(t, { className: eS.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? et.P : ei.A;
        return (0, n.jsxs)("div", {
            className: eS.My,
            children: [
                (0, n.jsx)("div", {
                    className: eS.Kf,
                    children:
                        !i.isShopPurchase &&
                        this.renderRefundCriteria(
                            C.intl.string(C.t.H0RNz4),
                            s,
                            C.intl.formatToPlainString(C.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)(en.Anchor, { href: eQ(t), children: C.intl.string(C.t.re5nOB) }),
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
            let s = [],
                o = null;
            if (g.type === M.rzx.PREMIUM) {
                let t;
                if (
                    (g.items.forEach((e) => {
                        let { planId: i, quantity: n } = e;
                        (0, H.xq)(i)
                            ? (s.push(H.Ay.getDisplayName(i, !1, m)), (o = (0, H.mH)(U.hd[i].skuId)))
                            : (s.push(`${n > 1 ? `${n}x ` : ""}${H.Ay.getDisplayName(i, !1, m)}`),
                              null == o && (o = (0, H.mH)(U.hd[i].skuId))),
                            (0, H.z4)(i) || (t ??= i);
                    }),
                    null != t)
                ) {
                    let s = H.Ay.getPremiumType(t);
                    e = (0, n.jsx)(e4, { withGradient: s === U.PremiumTypes.TIER_2, compactMode: i });
                }
            } else if (g.type === M.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === U.WT.YEAR ? C.t.V6UFQM : C.t["6oq128"];
                    s.push(C.intl.format(e, { planName: u.name })), (o = u.skuId);
                }
            } else
                g.type,
                    null != u && (o = u.skuId),
                    null != r
                        ? s.push(C.intl.formatToPlainString(C.t["0wL/VI"], { tier: c?.name }))
                        : s.push(C.intl.string(C.t["9czSYu"]));
            (t = 0 !== s.length ? s.join(", ") : l.description),
                null == e &&
                    (e = (0, n.jsx)(ep.A, {
                        className: eS.Sy,
                        guildClassName: eS.zA,
                        game: r,
                        guild: a,
                        size: ep.M.XSMALL,
                        skuId: o ?? c?.id,
                    }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? C.intl.string(C.t.O7uLmw) : c.name),
                null != o)
            ) {
                let t = (0, eD.Id)(o);
                e = (0, n.jsx)(eL.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eS.Sy,
                    size: 24,
                });
            } else
                e = l.isFractionalPremium
                    ? (0, n.jsx)(e4, { withGradient: !0, compactMode: i })
                    : l.isCollectible
                      ? (0, n.jsx)(es.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: eS.sV,
                        })
                      : (0, n.jsx)(ep.A, {
                            className: eS.Sy,
                            guildClassName: eS.zA,
                            game: r,
                            guild: a,
                            size: ep.M.XSMALL,
                            skuId: c.id,
                        });
        else (e = (0, n.jsx)(e4, { withGradient: !1, compactMode: i })), (t = l.description);
        let h = (0, n.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eS.p6,
                children: (0, eH.i$)(W()(l.createdAt), "MM/DD/YYYY"),
            }),
            E = l.isGift
                ? (0, n.jsx)(Q.m, {
                      text: C.intl.string(C.t.QddTpm),
                      children: (0, n.jsx)(el.o, { size: "md", color: "currentColor", className: eS.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: eS.h_, children: [e, (0, n.jsxs)("div", { children: [t, h] }), E] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, n.jsxs)("div", { className: eS.h_, children: [e, (0, n.jsx)("div", { children: t }), E] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: i } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: eS.ts }),
                      e.isSoftDeletedProduct
                          ? (0, n.jsx)(er.p, {
                                messageType: er.Y.WARNING,
                                action: (0, n.jsx)(q.$, {
                                    variant: "overlay-secondary",
                                    text: C.intl.string(C.t.zoztQA),
                                    onClick: () => (0, ea.A)(eQ(i)),
                                }),
                                children: C.intl.string(C.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(e6, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(J.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: eS.WI,
                children: [
                    (0, n.jsx)(ee.H, { className: eS.mW, children: C.intl.string(C.t.nyzoFb) }),
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
                (0, n.jsxs)(J.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(eS.Ji, t, { [eS.oE]: i }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, n.jsxs)(f.A, {
                            className: eS.J7,
                            align: f.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, n.jsxs)("div", {
                                    className: eS.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, n.jsx)(ez.A, {
                                    className: eS.fT,
                                    direction: s ? ez.A.Directions.UP : ez.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e5(e) {
    let { payment: t, locale: i, compactMode: l, className: r } = e,
        a = null != t.sku && eq.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === M.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([eB.A, eF.A, ec.A], () => ({
            applicationStatistics: null != o ? eF.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: ec.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: eB.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, ed.RD)((0, eO.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([ec.A], () => (null != u ? ec.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, ej.TA)(u);
    }, [u, c]);
    let S = (0, d.bG)([ek.A], () => ek.A.getGuild(m?.guildId)),
        T = a ? m : void 0,
        x = t.subscription,
        p = (0, d.bG)([X.A], () => (null != x && x.type !== M.rzx.PREMIUM ? X.A.get(x.items[0].planId) : null)),
        f = (0, d.bG)([ew.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (ew.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, eu.Ay)(eo.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e7, {
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
var e8 = i(665644);
function e9(e) {
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
                    className: e8.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, n.jsx)(c.Ch, {
                        className: e8.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, n.jsx)(e5, { className: r()(e8.Nj, e8.Bd), payment: e, locale: i, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class te extends s.PureComponent {
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
                className: e8.K1,
                children: [
                    (0, n.jsx)("div", {
                        className: e8.BF,
                        children: C.intl.format(C.t["6mIX6s"], { paymentGatewayName: eE.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e8.Q2,
                        children: C.intl.format(C.t.eG0uZB, {
                            paymentGatewayName: eE.qm[e.paymentGateway],
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
                  className: e8.GD,
                  children: [
                      null != i && a ? this.renderPremiumExternalSubscription(i) : null,
                      t.length > 0
                          ? (0, n.jsxs)("div", {
                                className: r()(e8.PQ, e8.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, n.jsx)("div", {
                                              className: r()(e8.Nj, e8.Bd),
                                              children: (0, n.jsxs)(f.A, {
                                                  className: e8.Yi,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: eS.p6,
                                                          children: C.intl.string(C.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e8.Ir,
                                                          children: C.intl.string(C.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: eS.vj,
                                                          children: C.intl.string(C.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e9, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
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
function tt(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(U.pe).includes(t) || (0, H.ys)(i));
}
function ti(e) {
    var t;
    let i = (0, d.bG)([z], () => z.getPayments()),
        l = (0, d.bG)([Y.A], () => Y.A.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    i.filter(tt).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [i],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    i.filter(tt).map((e) => {
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
    return (0, n.jsx)(te, { ...e, payments: g, subscription: l, hasFetchedPayments: m });
}
