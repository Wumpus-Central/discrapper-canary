n.d(t, { Z: () => ev }), n(953529), n(388685), n(539854), n(997841);
var r,
    i = n(54381),
    a = n(473749),
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
    m = n(535139),
    g = n(812206),
    E = n(593061),
    b = n(600164),
    y = n(925329),
    O = n(267101),
    v = n(240864),
    I = n(942833),
    T = n(916001),
    S = n(298243),
    A = n(336197),
    C = n(690221),
    N = n(307643),
    R = n(164670),
    P = n(517730),
    D = n(378233),
    w = n(419922),
    x = n(313789),
    L = n(342386),
    M = n(518596),
    k = n(46141),
    j = n(485386),
    U = n(430824),
    G = n(594174),
    B = n(853872),
    Z = n(509545),
    F = n(230307),
    V = n(259580),
    H = n(572004),
    Y = n(55935),
    W = n(630388),
    K = n(74538),
    z = n(937615),
    q = n(51144),
    X = n(244526),
    Q = n(981631),
    J = n(474936),
    $ = n(231338),
    ee = n(388032),
    et = n(982710);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
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
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = es(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let el = 14,
    ec = 5,
    eu = 2,
    ed = (e) => "https://".concat(Q.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    ef = 24,
    e_ = [Q.epS.DURABLE_PRIMARY, Q.epS.DURABLE, Q.epS.CONSUMABLE],
    ep = [Q.PyE.FAILED, Q.PyE.REVERSED, Q.PyE.CANCELED],
    eh = [$.gg.APPLE],
    em = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: et.paymentDetail,
            children: (0, i.jsxs)(b.Z, {
                justify: b.Z.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eg(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [o, s] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, H.JG)(t, () => {
                c(!0), s(!0);
            });
        };
    return (0, i.jsx)(p.aML, {
        "data-migration-pending": !0,
        forceOpen: l,
        text: o ? r : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: r } = e,
                a = eo(e, ["onMouseEnter", "onMouseLeave"]);
            return (0, i.jsx)(
                p.P3F,
                ea(er({}, a), {
                    onMouseEnter: () => {
                        o && s(!1), "function" == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), "function" == typeof r && r();
                    },
                    onClick: u,
                    children: (0, i.jsx)("div", {
                        className: et.copiableContainer,
                        children: t,
                    }),
                }),
            );
        },
    });
}
let eE = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: et.guildProductDetail,
        children: (0, i.jsxs)(b.Z, {
            justify: b.Z.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function eb(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, O.hO)(t, n, { requireCurrentGuild: !1 }),
        o = (0, I.C)(r),
        s = (0, f.e7)([U.Z], () => U.Z.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? ee.intl.string(ee.t.H11qcT)
                : o,
        c = a.useCallback(async () => {
            (null == s ? void 0 : s.features.has(Q.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, A.Z)(Q.Z5c.GUILD_PRODUCT(t, n))
                : await (0, A.Z)(Q.Z5c.CHANNEL(t)),
                (0, L.default)();
        }, [s, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(eE, {
                    description: ee.intl.string(ee.t.lXPbJb),
                    detail: l,
                }),
            null != s &&
                (0, i.jsx)(eE, {
                    description: ee.intl.string(ee.t.Wpn8z8),
                    detail: (0, i.jsx)(C.Z, {
                        onClick: c,
                        children: s.name,
                    }),
                }),
        ],
    });
}
function ey(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        o = (0, O.hO)(r, a, { requireCurrentGuild: !1 }),
        s = (0, f.e7)([v.Z], () => v.Z.getGuildProductFetchState(a) === v.M.FETCHING),
        l = null == o ? void 0 : o.role_id,
        c = (0, f.e7)([j.Z], () => (null != l ? j.Z.getRole(r, l) : void 0), [r, l]),
        u = (0, S.Z)({
            guildId: r,
            productId: a,
        }),
        d = (null != (n = null == o || null == (t = o.attachments) ? void 0 : t.length) ? n : 0) > 0,
        h = null != c;
    return s
        ? (0, i.jsx)("div", {
              className: et.guildProductBenefits,
              children: (0, i.jsx)(p.$jN, {}),
          })
        : null != o && (d || h)
          ? (0, i.jsxs)("div", {
                className: et.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: et.guildProductBenefitLabel,
                                    children: ee.intl.string(ee.t.hxawoy),
                                }),
                                (0, i.jsx)(_.zxk, er({}, u)),
                            ],
                        }),
                    h &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: et.divider }),
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: et.guildProductBenefitLabel,
                                    children: ee.intl.string(ee.t.gWBNet),
                                }),
                                (0, i.jsx)(T.Z, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class eO extends (r = a.PureComponent) {
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
    renderDefaultStatus() {
        let { payment: e } = this.props;
        switch (e.status) {
            case Q.PyE.PENDING:
                return (0, i.jsx)("span", {
                    className: et.statusTagGrey,
                    children: ee.intl.string(ee.t.y7F0Re),
                });
            case Q.PyE.FAILED:
                return (0, i.jsx)("span", {
                    className: et.statusTagRed,
                    children: ee.intl.string(ee.t.Yo4ru6),
                });
            case Q.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: et.statusTagGreen,
                        children: ee.intl.string(ee.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: et.statusTagGreen,
                    children: ee.intl.string(ee.t.ZBb6NK),
                });
            case Q.PyE.REVERSED:
                return (0, i.jsx)("span", {
                    className: et.statusTagRed,
                    children: ee.intl.string(ee.t.YQv9Li),
                });
            case Q.PyE.CANCELED:
                return (0, i.jsx)("span", {
                    className: et.statusTagRed,
                    children: ee.intl.string(ee.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, R.K$)(e.sku) && e.status === Q.PyE.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", {
                      className: et.statusTagGreen,
                      children: ee.intl.string(ee.t.Osji1u),
                  })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", {
                            className: et.statusTagGreen,
                            children: ee.intl.string(ee.t.lIsIFo),
                        })
                      : (0, i.jsx)("span", {
                            className: et.statusTagYellow,
                            children: ee.intl.string(ee.t["+tqSi3"]),
                        })
                  : t
                    ? (0, i.jsx)("span", {
                          className: et.statusTagYellow,
                          children: ee.intl.string(ee.t.y7F0Re),
                      })
                    : (0, i.jsx)("span", {
                          className: et.statusTagYellow,
                          children: ee.intl.string(ee.t.HHC5Z4),
                      })
            : null;
    }
    renderStatus() {
        var e;
        return null != (e = this.renderTenantStatusOverride()) ? e : this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", {
            className: et.price,
            children: (0, z.T4)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: et.paymentDetail,
            children: (0, i.jsxs)("div", {
                className: et.paymentInfo,
                children: [
                    (0, i.jsx)("div", { children: ee.intl.string(ee.t["UQim+r"]) }),
                    (0, i.jsx)(eg, {
                        value: e.id,
                        copyText: ee.intl.string(ee.t["Mdk9+A"]),
                        copyFeedbackText: ee.intl.string(ee.t["7eIrA2"]),
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
            className: s()(et.paymentText, et.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(X.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: et.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === $.gg.APPLE_PARTNER
                      ? (0, i.jsx)(X.Z, {
                            paymentSource: new k.$z({}),
                            locale: t,
                            descriptionClassName: et.paymentText,
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
                                      (0, i.jsx)(em, {
                                          description: e.description,
                                          cost: (0, z.T4)(l - o, u),
                                      }),
                                      (0, i.jsx)(em, {
                                          description: ee.intl.string(ee.t.QgWXht),
                                          cost: (0, z.T4)(o, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(em, {
                            description: ee.intl.string(ee.t.txajQG),
                            cost: (0, z.T4)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(eb, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(em, {
                                        description: ee.intl.string(ee.t["A+I0AP"]),
                                        cost: (0, z.T4)(c, u),
                                    }),
                                    (0, i.jsx)(em, {
                                        description: ee.intl.string(ee.t.xER6Wi),
                                        cost: (0, z.T4)(l - c, u),
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
    renderAdditionalGameItemDetails() {
        var e, t, n;
        let { claimedGiftUser: r, payment: o, hasLinkedToApplication: s, application: l, locale: c } = this.props,
            u = null == (e = o.entitlements) ? void 0 : e.some((e) => e.isFulfilled());
        return o.status === Q.PyE.REFUNDED
            ? (0, i.jsxs)(a.Fragment, {
                  children: [
                      (0, i.jsx)(p.H, {
                          className: et.paymentHeader,
                          children: ee.intl.string(ee.t["gIGB/A"]),
                      }),
                      (0, i.jsx)("div", {
                          className: et.paymentText,
                          children: ee.intl.format(ee.t.IBtGwC, { applicationName: null == l ? void 0 : l.name }),
                      }),
                  ],
              })
            : o.isGift
              ? (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(p.H, {
                            className: et.paymentHeader,
                            children: ee.intl.string(ee.t["gIGB/A"]),
                        }),
                        (0, i.jsx)("div", {
                            className: et.paymentText,
                            children:
                                null != r
                                    ? ee.intl.format(ee.t.vfUW65, { username: q.ZP.getName(r) })
                                    : ee.intl.string(ee.t["18wIqp"]),
                        }),
                        null == r &&
                            (0, i.jsx)("div", {
                                className: et.additionalInformationButtonContainer,
                                children: (0, i.jsx)(_.zxk, {
                                    variant: "primary",
                                    text: ee.intl.string(ee.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, M.openUserSettings)(x.n.GIFT_PANEL, { section: Q.oAB.INVENTORY }),
                                }),
                            }),
                    ],
                })
              : u
                ? null
                : (0, i.jsxs)(a.Fragment, {
                      children: [
                          (0, i.jsx)(p.H, {
                              className: et.paymentHeader,
                              children: ee.intl.string(ee.t["gIGB/A"]),
                          }),
                          (0, i.jsx)("div", {
                              className: et.paymentText,
                              children: s
                                  ? ee.intl.format(ee.t.DQQCAw, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (t = o.sku) ? void 0 : t.name,
                                    })
                                  : ee.intl.format(ee.t.ED2BqF, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (n = o.sku) ? void 0 : n.name,
                                    }),
                          }),
                          (0, i.jsx)("div", {
                              className: et.additionalInformationButtonContainer,
                              children: s
                                  ? (0, i.jsx)(_.zxk, {
                                        variant: "primary",
                                        text: ee.intl.string(ee.t.zoztQA),
                                        onClick: () => (0, h.Z)(ed(c)),
                                    })
                                  : (0, i.jsx)(_.zxk, {
                                        variant: "primary",
                                        text: ee.intl.string(ee.t["jCqvk/"]),
                                        onClick: () => {
                                            null != o.sku &&
                                                null != l &&
                                                (0, P.I)({
                                                    sku: o.sku,
                                                    application: l,
                                                });
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, R.K$)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            s = ed(t),
            l = this.isPremium ? ec : el;
        return (
            (e = r.includes("SKU_TYPE")
                ? ee.intl.format(ee.t["5lvoVS"], { supportURL: s })
                : o
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ee.intl.format(ee.t.EPYteX, {
                            dateLimit: l,
                            supportURL: s,
                        })
                      : n.isGift
                        ? ee.intl.format(ee.t["16eP/L"], {
                              dateLimit: l,
                              supportURL: s,
                          })
                        : ee.intl.format(ee.t["1LDI4J"], {
                              dateLimit: l,
                              playtimeLimit: eu,
                              supportURL: s,
                          })
                  : n.isCollectible
                    ? ee.intl.string(ee.t.s9TZM1)
                    : n.isGift
                      ? ee.intl.formatToPlainString(ee.t.owlOWc, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ee.intl.formatToPlainString(ee.t.dk7vyL, { dateLimit: l })
                        : ee.intl.formatToPlainString(ee.t.s4Kk0C, {
                              dateLimit: l,
                              playtimeLimit: eu,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(p.H, {
                        className: et.paymentHeader,
                        children: ee.intl.string(ee.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: et.paymentText,
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
                className: et.refundCriteria,
                children: [
                    (0, i.jsx)(p.H, {
                        className: et.refundSubHeader,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: et.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: et.refundCriteriaIcon,
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
            className: et.refundActions,
            children: [
                (0, i.jsx)("div", {
                    className: et.refundRules,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            ee.intl.string(ee.t.H0RNz4),
                            r,
                            ee.intl.formatToPlainString(ee.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(p.Anchor, {
                    href: ed(t),
                    children: ee.intl.string(ee.t.re5nOB),
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
            h = null != r.paymentSource && Q.Uk1.has(r.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                a = null;
            if (_.type === Q.NYc.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, K.uZ)(t)
                        ? (n.push(K.ZP.getDisplayName(t, !1, h)), (a = (0, K.Wz)(J.GP[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(K.ZP.getDisplayName(t, !1, h))),
                          null == a && (a = (0, K.Wz)(J.GP[t].skuId)));
                });
            else if (_.type === Q.NYc.GUILD) {
                if (null != u) {
                    let e = u.interval === J.rV.YEAR ? ee.t.V6UFQM : ee.t["6oq128"];
                    n.push(ee.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                _.type === Q.NYc.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != o
                        ? n.push(ee.intl.formatToPlainString(ee.t["0wL/VI"], { tier: null == f ? void 0 : f.name }))
                        : n.push(ee.intl.string(ee.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(y.Z, {
                    className: et.descriptionIcon,
                    guildClassName: et.guildDescriptionIcon,
                    game: o,
                    guild: s,
                    size: y.A.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var m;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ee.intl.string(ee.t.O7uLmw) : f.name),
                null != l)
            ) {
                let t = (0, D.Zt)(l);
                e = (0, i.jsx)(w.Z, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: et.descriptionIcon,
                    size: ef,
                });
            } else
                e =
                    (null == (m = r.sku) ? void 0 : m.productLine) === Q.POd.COLLECTIBLES
                        ? (0, i.jsx)(p.EOn, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: et.shopIcon,
                          })
                        : (0, i.jsx)(y.Z, {
                              className: et.descriptionIcon,
                              guildClassName: et.guildDescriptionIcon,
                              game: o,
                              guild: s,
                              size: y.A.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(p.SrA, {
                size: "md",
                color: "currentColor",
                className: et.descriptionIcon,
            })),
                (t = r.description);
        let g = (0, i.jsx)(p.Text, {
                variant: "text-sm/normal",
                className: et.date,
                children: (0, Y.vc)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            E = r.isGift
                ? (0, i.jsx)(p.aML, {
                      "data-migration-pending": !0,
                      text: ee.intl.string(ee.t.QddTpm),
                      children: (e) =>
                          (0, i.jsx)(
                              p.OgN,
                              er(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                      className: et.giftIcon,
                                  },
                                  e,
                              ),
                          ),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: et.description,
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
                          className: et.description,
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
                      (0, i.jsx)("div", { className: et.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(p.Wn, {
                                messageType: p.QYI.WARNING,
                                action: (0, i.jsx)(_.zxk, {
                                    variant: "overlay-secondary",
                                    text: ee.intl.string(ee.t.zoztQA),
                                    onClick: () => (0, h.Z)(ed(n)),
                                }),
                                children: ee.intl.string(ee.t["3AvulN"]),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(ey, {
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
                className: et.expandedInfo,
                children: [
                    (0, i.jsx)(p.H, {
                        className: et.paymentHeader,
                        children: ee.intl.string(ee.t.nyzoFb),
                    }),
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
        let { payment: e, className: t, compactMode: n } = this.props,
            { expanded: r } = this.state;
        return (0, i.jsx)(u.mh, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(
                    p.P3F,
                    ea(
                        er(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: s()(et.payment, t, { [et.compact]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(b.Z, {
                                    className: et.summaryInfo,
                                    align: b.Z.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: et.amount,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(V.Z, {
                                            className: et.expand,
                                            direction: r ? V.Z.Directions.UP : V.Z.Directions.DOWN,
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
            en(this, "state", { expanded: !1 }),
            en(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ec : el;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== Q.epS.CONSUMABLE;
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
                        return !ep.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !eh.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, W.yE)(e.sku.flags, Q.l4R.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== Q.NYc.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== Q.NYc.APPLICATION
                        );
                    },
                },
                {
                    rule: "GUILD_PRODUCT",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, W.yE)(e.sku.flags, d.l.GUILD_PRODUCT);
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
            en(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function ev(e) {
    var t, n;
    let { payment: r, locale: o, compactMode: s, className: l } = e,
        c = null != r.sku && e_.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        _ = (null == (n = r.subscription) ? void 0 : n.type) === Q.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: E,
        } = (0, f.cj)([B.Z, F.Z, g.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? F.Z.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (t = g.Z.getApplication(null != u ? u : ""))
                        ? t
                        : null == (e = r.sku)
                          ? void 0
                          : e.application,
                paymentSources: B.Z.paymentSources,
            };
        }),
        { hasAlreadyLinked: b } = (0, m.F)((0, R.K$)(r.sku) ? h : void 0),
        y = (0, f.e7)([g.Z], () => (null != d ? g.Z.getApplication(d) : null)),
        O = null;
    a.useEffect(() => {
        _ && null != d && (0, N.UM)(d);
    }, [d, _]);
    let v = (0, f.e7)([U.Z], () => U.Z.getGuild(null == h ? void 0 : h.guildId)),
        I = c ? h : void 0,
        T = r.subscription,
        S = (0, f.e7)([Z.Z], () => (null != T && T.type !== Q.NYc.PREMIUM ? Z.Z.get(T.items[0].planId) : null)),
        A = (0, f.e7)([G.default], () => {
            var e, t, n, i;
            let a = r.isGift
                ? null == (e = r.entitlements)
                    ? void 0
                    : e.find((e) => {
                          var t;
                          return (null == (t = e.user) ? void 0 : t.id) != null && null != e.gifterId;
                      })
                : null;
            return null == a
                ? null
                : null != (i = G.default.getUser(null != (n = null == (t = a.user) ? void 0 : t.id) ? n : null))
                  ? i
                  : null == a
                    ? void 0
                    : a.user;
        }, [r]);
    return (0, i.jsx)(eO, {
        applicationStatistics: p,
        application: _ ? y : I,
        guild: v,
        stickerPack: O,
        paymentSources: E,
        locale: o,
        compactMode: s,
        className: l,
        payment: r,
        plan: S,
        claimedGiftUser: A,
        hasLinkedToApplication: b,
    });
}
en(eO, "defaultProps", { compactMode: !1 });
