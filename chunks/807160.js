n.d(t, { Z: () => em }), n(953529), n(388685), n(539854), n(997841);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    c = n.n(l),
    u = n(91192),
    d = n(314877),
    f = n(442837),
    _ = n(159691),
    p = n(481060),
    h = n(37234),
    m = n(782568),
    g = n(812206),
    E = n(593061),
    b = n(600164),
    y = n(925329),
    O = n(267101),
    v = n(240864),
    I = n(942833),
    T = n(916001),
    S = n(298243),
    A = n(539290),
    C = n(336197),
    N = n(690221),
    R = n(307643),
    P = n(378233),
    w = n(419922),
    D = n(46141),
    x = n(485386),
    L = n(430824),
    j = n(853872),
    M = n(509545),
    k = n(230307),
    U = n(259580),
    G = n(572004),
    B = n(55935),
    Z = n(630388),
    F = n(74538),
    V = n(937615),
    H = n(244526),
    Y = n(981631),
    W = n(474936),
    K = n(231338),
    z = n(388032),
    q = n(982710);
function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = et(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function et(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let en = 14,
    er = 5,
    ei = 2,
    ea = (e) => "https://".concat(Y.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    eo = 24,
    es = [Y.epS.DURABLE_PRIMARY, Y.epS.DURABLE, Y.epS.CONSUMABLE],
    el = [Y.PyE.FAILED, Y.PyE.REVERSED, Y.PyE.CANCELED],
    ec = [K.gg.APPLE],
    eu = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: q.paymentDetail,
            children: (0, i.jsxs)(b.Z, {
                justify: b.Z.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function ed(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [o, s] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, G.JG)(t, () => {
                c(!0), s(!0);
            });
        };
    return (0, i.jsx)(p.ua7, {
        forceOpen: l,
        text: o ? r : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: r } = e,
                a = ee(e, ["onMouseEnter", "onMouseLeave"]);
            return (0, i.jsx)(
                p.P3F,
                $(Q({}, a), {
                    onMouseEnter: () => {
                        o && s(!1), "function" == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), "function" == typeof r && r();
                    },
                    onClick: u,
                    children: (0, i.jsx)("div", {
                        className: q.copiableContainer,
                        children: t,
                    }),
                }),
            );
        },
    });
}
let ef = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: q.guildProductDetail,
        children: (0, i.jsxs)(b.Z, {
            justify: b.Z.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function e_(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, O.hO)(t, n, { requireCurrentGuild: !1 }),
        o = (0, I.C)(r),
        s = (0, f.e7)([L.Z], () => L.Z.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? z.intl.string(z.t.H11qcX)
                : o,
        c = a.useCallback(async () => {
            (null == s ? void 0 : s.features.has(Y.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, C.Z)(Y.Z5c.GUILD_PRODUCT(t, n))
                : await (0, C.Z)(Y.Z5c.CHANNEL(t)),
                (0, h.xf)();
        }, [s, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(ef, {
                    description: z.intl.string(z.t.lXPbJS),
                    detail: l,
                }),
            null != s &&
                (0, i.jsx)(ef, {
                    description: z.intl.string(z.t.Wpn8z8),
                    detail: (0, i.jsx)(N.Z, {
                        onClick: c,
                        children: s.name,
                    }),
                }),
        ],
    });
}
function ep(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        o = (0, O.hO)(r, a, { requireCurrentGuild: !1 }),
        s = (0, f.e7)([v.Z], () => v.Z.getGuildProductFetchState(a) === v.M.FETCHING),
        l = null == o ? void 0 : o.role_id,
        c = (0, f.e7)([x.Z], () => (null != l ? x.Z.getRole(r, l) : void 0), [r, l]),
        u = (0, S.Z)({
            guildId: r,
            productId: a,
        }),
        d = (null != (n = null == o || null == (t = o.attachments) ? void 0 : t.length) ? n : 0) > 0,
        h = null != c;
    return s
        ? (0, i.jsx)("div", {
              className: q.guildProductBenefits,
              children: (0, i.jsx)(p.$jN, {}),
          })
        : null != o && (d || h)
          ? (0, i.jsxs)("div", {
                className: q.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: q.guildProductBenefitLabel,
                                    children: z.intl.string(z.t.hxawo6),
                                }),
                                (0, i.jsx)(_.zx, Q({}, u)),
                            ],
                        }),
                    h &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: q.divider }),
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: q.guildProductBenefitLabel,
                                    children: z.intl.string(z.t.gWBNen),
                                }),
                                (0, i.jsx)(T.Z, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class eh extends (r = a.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return c()().diff(n, "days");
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
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
    renderStatus() {
        let { payment: e } = this.props;
        switch (e.status) {
            case Y.PyE.PENDING:
                return (0, i.jsx)("span", {
                    className: q.statusTagGrey,
                    children: z.intl.string(z.t.y7F0RU),
                });
            case Y.PyE.FAILED:
                return (0, i.jsx)("span", {
                    className: q.statusTagRed,
                    children: z.intl.string(z.t.Yo4ru7),
                });
            case Y.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: q.statusTagGreen,
                        children: z.intl.string(z.t.lYbZz8),
                    });
                return (0, i.jsx)("span", {
                    className: q.statusTagGreen,
                    children: z.intl.string(z.t.ZBb6ND),
                });
            case Y.PyE.REVERSED:
                return (0, i.jsx)("span", {
                    className: q.statusTagRed,
                    children: z.intl.string(z.t.YQv9Li),
                });
            case Y.PyE.CANCELED:
                return (0, i.jsx)("span", {
                    className: q.statusTagRed,
                    children: z.intl.string(z.t.ttkBh4),
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", {
            className: q.price,
            children: (0, V.T4)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: q.paymentDetail,
            children: (0, i.jsxs)("div", {
                className: q.paymentInfo,
                children: [
                    (0, i.jsx)("div", { children: z.intl.string(z.t["UQim+v"]) }),
                    (0, i.jsx)(ed, {
                        value: e.id,
                        copyText: z.intl.string(z.t["Mdk9+P"]),
                        copyFeedbackText: z.intl.string(z.t["7eIrAw"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: r, tax: o, amount: l, amountRefunded: c, currency: u } = e,
            d = null == n ? void 0 : n.guildId;
        return (0, i.jsxs)("div", {
            className: s()(q.paymentText, q.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(H.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: q.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === K.gg.APPLE_PARTNER
                      ? (0, i.jsx)(H.Z, {
                            paymentSource: new D.$z({}),
                            locale: t,
                            descriptionClassName: q.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !r && o > 0
                            ? (0, i.jsxs)(a.Fragment, {
                                  children: [
                                      (0, i.jsx)(eu, {
                                          description: e.description,
                                          cost: (0, V.T4)(l - o, u),
                                      }),
                                      (0, i.jsx)(eu, {
                                          description: z.intl.string(z.t.QgWXho),
                                          cost: (0, V.T4)(o, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eu, {
                            description: z.intl.string(z.t.txajQE),
                            cost: (0, V.T4)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(e_, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eu, {
                                        description: z.intl.string(z.t["A+I0AA"]),
                                        cost: (0, V.T4)(c, u),
                                    }),
                                    (0, i.jsx)(eu, {
                                        description: z.intl.string(z.t.xER6Wl),
                                        cost: (0, V.T4)(l - c, u),
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
        return (0, i.jsx)(E.Z, { payment: e });
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
            r = this.validateRefundRules();
        if (
            r.includes("PAYMENT_GATEWAY") ||
            r.includes("PAYMENT_STATUS") ||
            r.includes("ALREADY_REFUNDED") ||
            r.includes("SKU_STICKER_PACK") ||
            r.includes("SUBSCRIPTION_TYPE") ||
            r.includes("GUILD_PRODUCT")
        )
            return null;
        let o = 0 === r.length,
            s = ea(t),
            l = this.isPremium ? er : en;
        return (
            (e = r.includes("SKU_TYPE")
                ? z.intl.format(z.t["5lvoVV"], { supportURL: s })
                : o
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? z.intl.format(z.t.EPYteX, {
                            dateLimit: l,
                            supportURL: s,
                        })
                      : n.isGift
                        ? z.intl.format(z.t["16eP/P"], {
                              dateLimit: l,
                              supportURL: s,
                          })
                        : z.intl.format(z.t["1LDI4O"], {
                              dateLimit: l,
                              playtimeLimit: ei,
                              supportURL: s,
                          })
                  : n.isCollectible
                    ? z.intl.string(z.t.s9TZMz)
                    : n.isGift
                      ? z.intl.formatToPlainString(z.t.owlOWV, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? z.intl.formatToPlainString(z.t.dk7vyM, { dateLimit: l })
                        : z.intl.formatToPlainString(z.t.s4Kk0N, {
                              dateLimit: l,
                              playtimeLimit: ei,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(p.H, {
                        className: q.paymentHeader,
                        children: z.intl.string(z.t["n/27pq"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: q.paymentText,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(r)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, r) {
        return (0, i.jsxs)(
            "div",
            {
                className: q.refundCriteria,
                children: [
                    (0, i.jsx)(p.H, {
                        className: q.refundSubHeader,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: q.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: q.refundCriteriaIcon,
                                color: "currentColor",
                            }),
                            null != n && (0, i.jsx)("div", { children: n }),
                        ],
                    }),
                ],
            },
            r,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: n } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let r = e.includes("PURCHASE_DATE") ? p.Dio : p.dz2;
        return (0, i.jsxs)("div", {
            className: q.refundActions,
            children: [
                (0, i.jsx)("div", {
                    className: q.refundRules,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            z.intl.string(z.t.H0RNz8),
                            r,
                            z.intl.formatToPlainString(z.t["7dtXa2"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(p.eee, {
                    href: ea(t),
                    children: z.intl.string(z.t.re5nOD),
                }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: r, application: o, guild: s, stickerPack: l, plan: u } = this.props,
            { expanded: d } = this.state,
            f = r.sku,
            _ = r.subscription,
            h = null != r.paymentSource && Y.Uk1.has(r.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                a = null;
            if (_.type === Y.NYc.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, F.uZ)(t)
                        ? (n.push(F.ZP.getDisplayName(t, !1, h)), (a = (0, F.Wz)(W.GP[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(F.ZP.getDisplayName(t, !1, h))),
                          null == a && (a = (0, F.Wz)(W.GP[t].skuId)));
                });
            else if (_.type === Y.NYc.GUILD) {
                if (null != u) {
                    let e = u.interval === W.rV.YEAR ? z.t.V6UFQE : z.t["6oq129"];
                    n.push(z.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                _.type === Y.NYc.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != o
                        ? n.push(z.intl.formatToPlainString(z.t["0wL/VF"], { tier: null == f ? void 0 : f.name }))
                        : n.push(z.intl.string(z.t["9czSYm"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(y.Z, {
                    className: q.descriptionIcon,
                    guildClassName: q.guildDescriptionIcon,
                    game: o,
                    guild: s,
                    size: y.Z.Sizes.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var m;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? z.intl.string(z.t.O7uLm5) : f.name),
                null != l)
            ) {
                let t = (0, P.Zt)(l);
                e = (0, i.jsx)(w.Z, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: q.descriptionIcon,
                    size: eo,
                });
            } else
                e =
                    (null == (m = r.sku) ? void 0 : m.productLine) === Y.POd.COLLECTIBLES
                        ? (0, i.jsx)(p.EOn, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: q.shopIcon,
                          })
                        : (0, i.jsx)(y.Z, {
                              className: q.descriptionIcon,
                              guildClassName: q.guildDescriptionIcon,
                              game: o,
                              guild: s,
                              size: y.Z.Sizes.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(p.SrA, {
                size: "md",
                color: "currentColor",
                className: q.descriptionIcon,
            })),
                (t = r.description);
        let g = (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: q.date,
                children: (0, B.vc)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            E = r.isGift
                ? (0, i.jsx)(p.ua7, {
                      text: z.intl.string(z.t.QddTpq),
                      children: (e) =>
                          (0, i.jsx)(
                              p.OgN,
                              Q(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                      className: q.giftIcon,
                                  },
                                  e,
                              ),
                          ),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: q.description,
                  children: [
                      e,
                      (0, i.jsxs)("div", {
                          children: [t, g],
                      }),
                      E,
                  ],
              })
            : (0, i.jsxs)(a.Fragment, {
                  children: [
                      g,
                      (0, i.jsxs)("div", {
                          className: q.description,
                          children: [e, (0, i.jsx)("div", { children: t }), E],
                      }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            r = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: q.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(A.Z, {
                                className: q.warningBlock,
                                buttonPosition: A.E.RIGHT,
                                notice: z.intl.string(z.t["3AvulJ"]),
                                ctaLabel: z.intl.string(z.t.zoztQE),
                                onClick: () => (0, m.Z)(ea(n)),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(ep, {
                                guildId: r,
                                guildProductListingId: e.sku.id,
                            }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(p.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: q.expandedInfo,
                children: [
                    (0, i.jsx)(p.H, {
                        className: q.paymentHeader,
                        children: z.intl.string(z.t.nyzoFR),
                    }),
                    this.renderPaymentBreakdown(),
                    this.renderGuildProductBenefits(),
                    this.renderInvoiceDownload(),
                    this.renderRefundDetails(),
                ],
            }),
        });
    }
    render() {
        let { payment: e, className: t, compactMode: n } = this.props,
            { expanded: r } = this.state;
        return (0, i.jsx)(u.mh, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(
                    p.P3F,
                    $(
                        Q(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: s()(q.payment, t, { [q.compact]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(b.Z, {
                                    className: q.summaryInfo,
                                    align: b.Z.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: q.amount,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(U.Z, {
                                            className: q.expand,
                                            direction: r ? U.Z.Directions.UP : U.Z.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                r ? this.renderExpandedSection() : null,
                            ],
                        },
                    ),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            X(this, "state", { expanded: !1 }),
            X(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? er : en;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== Y.epS.CONSUMABLE;
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
                        return !el.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !ec.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, Z.yE)(e.sku.flags, Y.l4R.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== Y.NYc.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== Y.NYc.APPLICATION
                        );
                    },
                },
                {
                    rule: "GUILD_PRODUCT",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, Z.yE)(e.sku.flags, d.l.GUILD_PRODUCT);
                    },
                },
                {
                    rule: "COLLECTIBLE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !e.isCollectible;
                    },
                },
            ]),
            X(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function em(e) {
    var t, n;
    let { payment: r, locale: o, compactMode: s, className: l } = e,
        c = null != r.sku && es.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        _ = (null == (n = r.subscription) ? void 0 : n.type) === Y.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: m,
        } = (0, f.cj)([j.Z, k.Z, g.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? k.Z.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (t = g.Z.getApplication(null != u ? u : ""))
                        ? t
                        : null == (e = r.sku)
                          ? void 0
                          : e.application,
                paymentSources: j.Z.paymentSources,
            };
        }),
        E = (0, f.e7)([g.Z], () => (null != d ? g.Z.getApplication(d) : null)),
        b = null;
    a.useEffect(() => {
        _ && null != d && (0, R.UM)(d);
    }, [d, _]);
    let y = (0, f.e7)([L.Z], () => L.Z.getGuild(null == h ? void 0 : h.guildId)),
        O = c ? h : void 0,
        v = r.subscription,
        I = (0, f.e7)([M.Z], () => (null != v && v.type !== Y.NYc.PREMIUM ? M.Z.get(v.items[0].planId) : null));
    return (0, i.jsx)(eh, {
        applicationStatistics: p,
        application: _ ? E : O,
        guild: y,
        stickerPack: b,
        paymentSources: m,
        locale: o,
        compactMode: s,
        className: l,
        payment: r,
        plan: I,
    });
}
X(eh, "defaultProps", { compactMode: !1 });
