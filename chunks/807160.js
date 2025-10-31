n.d(t, { Z: () => eh }), n(953529), n(388685), n(539854), n(997841);
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
    h = n(782568),
    m = n(812206),
    g = n(593061),
    E = n(600164),
    b = n(925329),
    y = n(267101),
    O = n(240864),
    v = n(942833),
    I = n(916001),
    T = n(298243),
    S = n(336197),
    A = n(690221),
    C = n(307643),
    N = n(378233),
    R = n(419922),
    P = n(342386),
    w = n(46141),
    D = n(485386),
    x = n(430824),
    L = n(853872),
    M = n(509545),
    j = n(230307),
    k = n(259580),
    U = n(572004),
    G = n(55935),
    B = n(630388),
    Z = n(74538),
    F = n(937615),
    V = n(244526),
    H = n(981631),
    Y = n(474936),
    W = n(231338),
    K = n(388032),
    z = n(982710);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ee(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let et = 14,
    en = 5,
    er = 2,
    ei = (e) => "https://".concat(H.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    ea = 24,
    eo = [H.epS.DURABLE_PRIMARY, H.epS.DURABLE, H.epS.CONSUMABLE],
    es = [H.PyE.FAILED, H.PyE.REVERSED, H.PyE.CANCELED],
    el = [W.gg.APPLE],
    ec = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: z.paymentDetail,
            children: (0, i.jsxs)(E.Z, {
                justify: E.Z.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eu(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [o, s] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, U.JG)(t, () => {
                c(!0), s(!0);
            });
        };
    return (0, i.jsx)(p.aML, {
        "data-migration-pending": !0,
        forceOpen: l,
        text: o ? r : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: r } = e,
                a = $(e, ["onMouseEnter", "onMouseLeave"]);
            return (0, i.jsx)(
                p.P3F,
                J(X({}, a), {
                    onMouseEnter: () => {
                        o && s(!1), "function" == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), "function" == typeof r && r();
                    },
                    onClick: u,
                    children: (0, i.jsx)("div", {
                        className: z.copiableContainer,
                        children: t,
                    }),
                }),
            );
        },
    });
}
let ed = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: z.guildProductDetail,
        children: (0, i.jsxs)(E.Z, {
            justify: E.Z.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function ef(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, y.hO)(t, n, { requireCurrentGuild: !1 }),
        o = (0, v.C)(r),
        s = (0, f.e7)([x.Z], () => x.Z.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? K.intl.string(K.t.H11qcT)
                : o,
        c = a.useCallback(async () => {
            (null == s ? void 0 : s.features.has(H.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, S.Z)(H.Z5c.GUILD_PRODUCT(t, n))
                : await (0, S.Z)(H.Z5c.CHANNEL(t)),
                (0, P.default)();
        }, [s, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(ed, {
                    description: K.intl.string(K.t.lXPbJb),
                    detail: l,
                }),
            null != s &&
                (0, i.jsx)(ed, {
                    description: K.intl.string(K.t.Wpn8z8),
                    detail: (0, i.jsx)(A.Z, {
                        onClick: c,
                        children: s.name,
                    }),
                }),
        ],
    });
}
function e_(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        o = (0, y.hO)(r, a, { requireCurrentGuild: !1 }),
        s = (0, f.e7)([O.Z], () => O.Z.getGuildProductFetchState(a) === O.M.FETCHING),
        l = null == o ? void 0 : o.role_id,
        c = (0, f.e7)([D.Z], () => (null != l ? D.Z.getRole(r, l) : void 0), [r, l]),
        u = (0, T.Z)({
            guildId: r,
            productId: a,
        }),
        d = (null != (n = null == o || null == (t = o.attachments) ? void 0 : t.length) ? n : 0) > 0,
        h = null != c;
    return s
        ? (0, i.jsx)("div", {
              className: z.guildProductBenefits,
              children: (0, i.jsx)(p.$jN, {}),
          })
        : null != o && (d || h)
          ? (0, i.jsxs)("div", {
                className: z.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: z.guildProductBenefitLabel,
                                    children: K.intl.string(K.t.hxawoy),
                                }),
                                (0, i.jsx)(_.zxk, X({}, u)),
                            ],
                        }),
                    h &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: z.divider }),
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: z.guildProductBenefitLabel,
                                    children: K.intl.string(K.t.gWBNet),
                                }),
                                (0, i.jsx)(I.Z, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class ep extends (r = a.PureComponent) {
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
            case H.PyE.PENDING:
                return (0, i.jsx)("span", {
                    className: z.statusTagGrey,
                    children: K.intl.string(K.t.y7F0Re),
                });
            case H.PyE.FAILED:
                return (0, i.jsx)("span", {
                    className: z.statusTagRed,
                    children: K.intl.string(K.t.Yo4ru6),
                });
            case H.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: z.statusTagGreen,
                        children: K.intl.string(K.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: z.statusTagGreen,
                    children: K.intl.string(K.t.ZBb6NK),
                });
            case H.PyE.REVERSED:
                return (0, i.jsx)("span", {
                    className: z.statusTagRed,
                    children: K.intl.string(K.t.YQv9Li),
                });
            case H.PyE.CANCELED:
                return (0, i.jsx)("span", {
                    className: z.statusTagRed,
                    children: K.intl.string(K.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", {
            className: z.price,
            children: (0, F.T4)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: z.paymentDetail,
            children: (0, i.jsxs)("div", {
                className: z.paymentInfo,
                children: [
                    (0, i.jsx)("div", { children: K.intl.string(K.t["UQim+r"]) }),
                    (0, i.jsx)(eu, {
                        value: e.id,
                        copyText: K.intl.string(K.t["Mdk9+A"]),
                        copyFeedbackText: K.intl.string(K.t["7eIrA2"]),
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
            className: s()(z.paymentText, z.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(V.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: z.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === W.gg.APPLE_PARTNER
                      ? (0, i.jsx)(V.Z, {
                            paymentSource: new w.$z({}),
                            locale: t,
                            descriptionClassName: z.paymentText,
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
                                      (0, i.jsx)(ec, {
                                          description: e.description,
                                          cost: (0, F.T4)(l - o, u),
                                      }),
                                      (0, i.jsx)(ec, {
                                          description: K.intl.string(K.t.QgWXht),
                                          cost: (0, F.T4)(o, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(ec, {
                            description: K.intl.string(K.t.txajQG),
                            cost: (0, F.T4)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(ef, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ec, {
                                        description: K.intl.string(K.t["A+I0AP"]),
                                        cost: (0, F.T4)(c, u),
                                    }),
                                    (0, i.jsx)(ec, {
                                        description: K.intl.string(K.t.xER6Wi),
                                        cost: (0, F.T4)(l - c, u),
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
        return (0, i.jsx)(g.Z, { payment: e });
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
            s = ei(t),
            l = this.isPremium ? en : et;
        return (
            (e = r.includes("SKU_TYPE")
                ? K.intl.format(K.t["5lvoVS"], { supportURL: s })
                : o
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? K.intl.format(K.t.EPYteX, {
                            dateLimit: l,
                            supportURL: s,
                        })
                      : n.isGift
                        ? K.intl.format(K.t["16eP/L"], {
                              dateLimit: l,
                              supportURL: s,
                          })
                        : K.intl.format(K.t["1LDI4J"], {
                              dateLimit: l,
                              playtimeLimit: er,
                              supportURL: s,
                          })
                  : n.isCollectible
                    ? K.intl.string(K.t.s9TZM1)
                    : n.isGift
                      ? K.intl.formatToPlainString(K.t.owlOWc, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? K.intl.formatToPlainString(K.t.dk7vyL, { dateLimit: l })
                        : K.intl.formatToPlainString(K.t.s4Kk0C, {
                              dateLimit: l,
                              playtimeLimit: er,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(p.H, {
                        className: z.paymentHeader,
                        children: K.intl.string(K.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: z.paymentText,
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
                className: z.refundCriteria,
                children: [
                    (0, i.jsx)(p.H, {
                        className: z.refundSubHeader,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: z.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: z.refundCriteriaIcon,
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
            className: z.refundActions,
            children: [
                (0, i.jsx)("div", {
                    className: z.refundRules,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            K.intl.string(K.t.H0RNz4),
                            r,
                            K.intl.formatToPlainString(K.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(p.Anchor, {
                    href: ei(t),
                    children: K.intl.string(K.t.re5nOB),
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
            h = null != r.paymentSource && H.Uk1.has(r.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                a = null;
            if (_.type === H.NYc.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, Z.uZ)(t)
                        ? (n.push(Z.ZP.getDisplayName(t, !1, h)), (a = (0, Z.Wz)(Y.GP[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(Z.ZP.getDisplayName(t, !1, h))),
                          null == a && (a = (0, Z.Wz)(Y.GP[t].skuId)));
                });
            else if (_.type === H.NYc.GUILD) {
                if (null != u) {
                    let e = u.interval === Y.rV.YEAR ? K.t.V6UFQM : K.t["6oq128"];
                    n.push(K.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                _.type === H.NYc.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != o
                        ? n.push(K.intl.formatToPlainString(K.t["0wL/VI"], { tier: null == f ? void 0 : f.name }))
                        : n.push(K.intl.string(K.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(b.Z, {
                    className: z.descriptionIcon,
                    guildClassName: z.guildDescriptionIcon,
                    game: o,
                    guild: s,
                    size: b.A.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var m;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? K.intl.string(K.t.O7uLmw) : f.name),
                null != l)
            ) {
                let t = (0, N.Zt)(l);
                e = (0, i.jsx)(R.Z, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: z.descriptionIcon,
                    size: ea,
                });
            } else
                e =
                    (null == (m = r.sku) ? void 0 : m.productLine) === H.POd.COLLECTIBLES
                        ? (0, i.jsx)(p.EOn, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: z.shopIcon,
                          })
                        : (0, i.jsx)(b.Z, {
                              className: z.descriptionIcon,
                              guildClassName: z.guildDescriptionIcon,
                              game: o,
                              guild: s,
                              size: b.A.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(p.SrA, {
                size: "md",
                color: "currentColor",
                className: z.descriptionIcon,
            })),
                (t = r.description);
        let g = (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: z.date,
                children: (0, G.vc)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            E = r.isGift
                ? (0, i.jsx)(p.aML, {
                      "data-migration-pending": !0,
                      text: K.intl.string(K.t.QddTpm),
                      children: (e) =>
                          (0, i.jsx)(
                              p.OgN,
                              X(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                      className: z.giftIcon,
                                  },
                                  e,
                              ),
                          ),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: z.description,
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
                          className: z.description,
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
                      (0, i.jsx)("div", { className: z.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(p.Wn, {
                                messageType: p.QYI.WARNING,
                                action: (0, i.jsx)(_.zxk, {
                                    variant: "overlay-secondary",
                                    text: K.intl.string(K.t.zoztQA),
                                    onClick: () => (0, h.Z)(ei(n)),
                                }),
                                children: K.intl.string(K.t["3AvulN"]),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(e_, {
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
                className: z.expandedInfo,
                children: [
                    (0, i.jsx)(p.H, {
                        className: z.paymentHeader,
                        children: K.intl.string(K.t.nyzoFb),
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
                    J(
                        X(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: s()(z.payment, t, { [z.compact]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(E.Z, {
                                    className: z.summaryInfo,
                                    align: E.Z.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: z.amount,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(k.Z, {
                                            className: z.expand,
                                            direction: r ? k.Z.Directions.UP : k.Z.Directions.DOWN,
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
            q(this, "state", { expanded: !1 }),
            q(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? en : et;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== H.epS.CONSUMABLE;
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
                        return !es.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !el.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, B.yE)(e.sku.flags, H.l4R.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== H.NYc.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== H.NYc.APPLICATION
                        );
                    },
                },
                {
                    rule: "GUILD_PRODUCT",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, B.yE)(e.sku.flags, d.l.GUILD_PRODUCT);
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
            q(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function eh(e) {
    var t, n;
    let { payment: r, locale: o, compactMode: s, className: l } = e,
        c = null != r.sku && eo.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        _ = (null == (n = r.subscription) ? void 0 : n.type) === H.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: g,
        } = (0, f.cj)([L.Z, j.Z, m.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? j.Z.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (t = m.Z.getApplication(null != u ? u : ""))
                        ? t
                        : null == (e = r.sku)
                          ? void 0
                          : e.application,
                paymentSources: L.Z.paymentSources,
            };
        }),
        E = (0, f.e7)([m.Z], () => (null != d ? m.Z.getApplication(d) : null)),
        b = null;
    a.useEffect(() => {
        _ && null != d && (0, C.UM)(d);
    }, [d, _]);
    let y = (0, f.e7)([x.Z], () => x.Z.getGuild(null == h ? void 0 : h.guildId)),
        O = c ? h : void 0,
        v = r.subscription,
        I = (0, f.e7)([M.Z], () => (null != v && v.type !== H.NYc.PREMIUM ? M.Z.get(v.items[0].planId) : null));
    return (0, i.jsx)(ep, {
        applicationStatistics: p,
        application: _ ? E : O,
        guild: y,
        stickerPack: b,
        paymentSources: g,
        locale: o,
        compactMode: s,
        className: l,
        payment: r,
        plan: I,
    });
}
q(ep, "defaultProps", { compactMode: !1 });
