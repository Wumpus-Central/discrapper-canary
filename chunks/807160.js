n.d(t, { Z: () => eS }), n(953529), n(388685), n(539854), n(997841);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    c = n.n(l),
    u = n(91192),
    d = n(314877),
    f = n(95015),
    _ = n(442837),
    p = n(159691),
    h = n(481060),
    m = n(782568),
    g = n(100527),
    E = n(906732),
    b = n(535139),
    y = n(812206),
    O = n(593061),
    v = n(600164),
    I = n(925329),
    T = n(267101),
    S = n(240864),
    A = n(942833),
    C = n(916001),
    N = n(298243),
    R = n(336197),
    P = n(690221),
    D = n(307643),
    w = n(164670),
    L = n(517730),
    x = n(378233),
    M = n(419922),
    k = n(313789),
    j = n(342386),
    U = n(518596),
    G = n(46141),
    B = n(485386),
    Z = n(430824),
    F = n(594174),
    V = n(853872),
    H = n(509545),
    Y = n(230307),
    W = n(259580),
    K = n(626135),
    z = n(572004),
    q = n(55935),
    X = n(74538),
    Q = n(937615),
    J = n(51144),
    $ = n(244526),
    ee = n(981631),
    et = n(474936),
    en = n(231338),
    er = n(388032),
    ei = n(982710);
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ec(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eu(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ed = 14,
    ef = 5,
    e_ = 2,
    ep = (e) => "https://".concat(ee.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    eh = 24,
    em = [ee.epS.DURABLE_PRIMARY, ee.epS.DURABLE, ee.epS.CONSUMABLE],
    eg = [ee.PyE.FAILED, ee.PyE.REVERSED, ee.PyE.CANCELED],
    eE = [en.gg.APPLE],
    eb = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: ei.paymentDetail,
            children: (0, i.jsxs)(v.Z, {
                justify: v.Z.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function ey(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [o, s] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, z.JG)(t, () => {
                c(!0), s(!0);
            });
        };
    return (0, i.jsx)(h.aML, {
        "data-migration-pending": !0,
        forceOpen: l,
        text: o ? r : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: r } = e,
                a = ec(e, ["onMouseEnter", "onMouseLeave"]);
            return (0, i.jsx)(
                h.P3F,
                el(eo({}, a), {
                    onMouseEnter: () => {
                        o && s(!1), "function" == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), "function" == typeof r && r();
                    },
                    onClick: u,
                    children: (0, i.jsx)("div", {
                        className: ei.copiableContainer,
                        children: t,
                    }),
                }),
            );
        },
    });
}
let eO = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: ei.guildProductDetail,
        children: (0, i.jsxs)(v.Z, {
            justify: v.Z.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function ev(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, T.hO)(t, n, { requireCurrentGuild: !1 }),
        o = (0, A.C)(r),
        s = (0, _.e7)([Z.Z], () => Z.Z.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? er.intl.string(er.t.H11qcT)
                : o,
        c = a.useCallback(async () => {
            (null == s ? void 0 : s.features.has(ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, R.Z)(ee.Z5c.GUILD_PRODUCT(t, n))
                : await (0, R.Z)(ee.Z5c.CHANNEL(t)),
                (0, j.default)();
        }, [s, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(eO, {
                    description: er.intl.string(er.t.lXPbJb),
                    detail: l,
                }),
            null != s &&
                (0, i.jsx)(eO, {
                    description: er.intl.string(er.t.Wpn8z8),
                    detail: (0, i.jsx)(P.Z, {
                        onClick: c,
                        children: s.name,
                    }),
                }),
        ],
    });
}
function eI(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        o = (0, T.hO)(r, a, { requireCurrentGuild: !1 }),
        s = (0, _.e7)([S.Z], () => S.Z.getGuildProductFetchState(a) === S.M.FETCHING),
        l = null == o ? void 0 : o.role_id,
        c = (0, _.e7)([B.Z], () => (null != l ? B.Z.getRole(r, l) : void 0), [r, l]),
        u = (0, N.Z)({
            guildId: r,
            productId: a,
        }),
        d = (null != (n = null == o || null == (t = o.attachments) ? void 0 : t.length) ? n : 0) > 0,
        f = null != c;
    return s
        ? (0, i.jsx)("div", {
              className: ei.guildProductBenefits,
              children: (0, i.jsx)(h.$jN, {}),
          })
        : null != o && (d || f)
          ? (0, i.jsxs)("div", {
                className: ei.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: ei.guildProductBenefitLabel,
                                    children: er.intl.string(er.t.hxawoy),
                                }),
                                (0, i.jsx)(p.zxk, eo({}, u)),
                            ],
                        }),
                    f &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: ei.divider }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/semibold",
                                    color: "header-secondary",
                                    className: ei.guildProductBenefitLabel,
                                    children: er.intl.string(er.t.gWBNet),
                                }),
                                (0, i.jsx)(C.Z, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class eT extends (r = a.PureComponent) {
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
            case ee.PyE.PENDING:
                return (0, i.jsx)("span", {
                    className: ei.statusTagGrey,
                    children: er.intl.string(er.t.y7F0Re),
                });
            case ee.PyE.FAILED:
                return (0, i.jsx)("span", {
                    className: ei.statusTagRed,
                    children: er.intl.string(er.t.Yo4ru6),
                });
            case ee.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: ei.statusTagGreen,
                        children: er.intl.string(er.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: ei.statusTagGreen,
                    children: er.intl.string(er.t.ZBb6NK),
                });
            case ee.PyE.REVERSED:
                return (0, i.jsx)("span", {
                    className: ei.statusTagRed,
                    children: er.intl.string(er.t.YQv9Li),
                });
            case ee.PyE.CANCELED:
                return (0, i.jsx)("span", {
                    className: ei.statusTagRed,
                    children: er.intl.string(er.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, w.K$)(e.sku) && e.status === ee.PyE.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", {
                      className: ei.statusTagGreen,
                      children: er.intl.string(er.t.Osji1u),
                  })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", {
                            className: ei.statusTagGreen,
                            children: er.intl.string(er.t.lIsIFo),
                        })
                      : (0, i.jsx)("span", {
                            className: ei.statusTagYellow,
                            children: er.intl.string(er.t["+tqSi3"]),
                        })
                  : t
                    ? (0, i.jsx)("span", {
                          className: ei.statusTagYellow,
                          children: er.intl.string(er.t.y7F0Re),
                      })
                    : (0, i.jsx)("span", {
                          className: ei.statusTagYellow,
                          children: er.intl.string(er.t.HHC5Z4),
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
            className: ei.price,
            children: (0, Q.T4)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: ei.paymentDetail,
            children: (0, i.jsxs)("div", {
                className: ei.paymentInfo,
                children: [
                    (0, i.jsx)("div", { children: er.intl.string(er.t["UQim+r"]) }),
                    (0, i.jsx)(ey, {
                        value: e.id,
                        copyText: er.intl.string(er.t["Mdk9+A"]),
                        copyFeedbackText: er.intl.string(er.t["7eIrA2"]),
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
            className: s()(ei.paymentText, ei.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)($.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: ei.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === en.gg.APPLE_PARTNER
                      ? (0, i.jsx)($.Z, {
                            paymentSource: new G.$z({}),
                            locale: t,
                            descriptionClassName: ei.paymentText,
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
                                      (0, i.jsx)(eb, {
                                          description: e.description,
                                          cost: (0, Q.T4)(l - o, u),
                                      }),
                                      (0, i.jsx)(eb, {
                                          description: er.intl.string(er.t.QgWXht),
                                          cost: (0, Q.T4)(o, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eb, {
                            description: er.intl.string(er.t.txajQG),
                            cost: (0, Q.T4)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(ev, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eb, {
                                        description: er.intl.string(er.t["A+I0AP"]),
                                        cost: (0, Q.T4)(c, u),
                                    }),
                                    (0, i.jsx)(eb, {
                                        description: er.intl.string(er.t.xER6Wi),
                                        cost: (0, Q.T4)(l - c, u),
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
        return (0, i.jsx)(O.Z, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        var e, t, n;
        let {
                claimedGiftUser: r,
                payment: o,
                hasLinkedToApplication: s,
                application: l,
                locale: c,
                analyticsLocations: u,
            } = this.props,
            d = null == (e = o.entitlements) ? void 0 : e.some((e) => e.isFulfilled());
        return o.status === ee.PyE.REFUNDED
            ? (0, i.jsxs)(a.Fragment, {
                  children: [
                      (0, i.jsx)(h.H, {
                          className: ei.paymentHeader,
                          children: er.intl.string(er.t["gIGB/A"]),
                      }),
                      (0, i.jsx)("div", {
                          className: ei.paymentText,
                          children: er.intl.format(er.t.IBtGwC, { applicationName: null == l ? void 0 : l.name }),
                      }),
                  ],
              })
            : o.isGift
              ? (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(h.H, {
                            className: ei.paymentHeader,
                            children: er.intl.string(er.t["gIGB/A"]),
                        }),
                        (0, i.jsx)("div", {
                            className: ei.paymentText,
                            children:
                                null != r
                                    ? er.intl.format(er.t.vfUW65, { username: J.ZP.getName(r) })
                                    : er.intl.string(er.t["18wIqp"]),
                        }),
                        null == r &&
                            (0, i.jsx)("div", {
                                className: ei.additionalInformationButtonContainer,
                                children: (0, i.jsx)(p.zxk, {
                                    variant: "primary",
                                    text: er.intl.string(er.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, U.openUserSettings)(k.n.GIFT_PANEL, { section: ee.oAB.INVENTORY }),
                                }),
                            }),
                    ],
                })
              : d
                ? null
                : (0, i.jsxs)(a.Fragment, {
                      children: [
                          (0, i.jsx)(h.H, {
                              className: ei.paymentHeader,
                              children: er.intl.string(er.t["gIGB/A"]),
                          }),
                          (0, i.jsx)("div", {
                              className: ei.paymentText,
                              children: s
                                  ? er.intl.format(er.t.DQQCAw, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (t = o.sku) ? void 0 : t.name,
                                    })
                                  : er.intl.format(er.t.ED2BqF, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (n = o.sku) ? void 0 : n.name,
                                    }),
                          }),
                          (0, i.jsx)("div", {
                              className: ei.additionalInformationButtonContainer,
                              children: s
                                  ? (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: er.intl.string(er.t.zoztQA),
                                        onClick: () => (0, m.Z)(ep(c)),
                                    })
                                  : (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: er.intl.string(er.t["jCqvk/"]),
                                        onClick: () => {
                                            null != o.sku &&
                                                null != l &&
                                                (K.default.track(
                                                    ee.rMx.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    {
                                                        sku_id: o.sku.id,
                                                        application_id: l.id,
                                                        location_stack: u,
                                                    },
                                                ),
                                                (0, L.I)({
                                                    sku: o.sku,
                                                    application: l,
                                                    analyticsLocations: u,
                                                }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, w.K$)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            s = ep(t),
            l = this.isPremium ? ef : ed;
        return (
            (e = r.includes("SKU_TYPE")
                ? er.intl.format(er.t["5lvoVS"], { supportURL: s })
                : o
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? er.intl.format(er.t.EPYteX, {
                            dateLimit: l,
                            supportURL: s,
                        })
                      : n.isGift
                        ? er.intl.format(er.t["16eP/L"], {
                              dateLimit: l,
                              supportURL: s,
                          })
                        : er.intl.format(er.t["1LDI4J"], {
                              dateLimit: l,
                              playtimeLimit: e_,
                              supportURL: s,
                          })
                  : n.isCollectible
                    ? er.intl.string(er.t.s9TZM1)
                    : n.isGift
                      ? er.intl.formatToPlainString(er.t.owlOWc, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? er.intl.formatToPlainString(er.t.dk7vyL, { dateLimit: l })
                        : er.intl.formatToPlainString(er.t.s4Kk0C, {
                              dateLimit: l,
                              playtimeLimit: e_,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(h.H, {
                        className: ei.paymentHeader,
                        children: er.intl.string(er.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: ei.paymentText,
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
                className: ei.refundCriteria,
                children: [
                    (0, i.jsx)(h.H, {
                        className: ei.refundSubHeader,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: ei.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: ei.refundCriteriaIcon,
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
        let r = e.includes("PURCHASE_DATE") ? h.Dio : h.dz2;
        return (0, i.jsxs)("div", {
            className: ei.refundActions,
            children: [
                (0, i.jsx)("div", {
                    className: ei.refundRules,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            er.intl.string(er.t.H0RNz4),
                            r,
                            er.intl.formatToPlainString(er.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(h.Anchor, {
                    href: ep(t),
                    children: er.intl.string(er.t.re5nOB),
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
            p = null != r.paymentSource && ee.Uk1.has(r.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                a = null;
            if (_.type === ee.NYc.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, X.uZ)(t)
                        ? (n.push(X.ZP.getDisplayName(t, !1, p)), (a = (0, X.Wz)(et.GP[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(X.ZP.getDisplayName(t, !1, p))),
                          null == a && (a = (0, X.Wz)(et.GP[t].skuId)));
                });
            else if (_.type === ee.NYc.GUILD) {
                if (null != u) {
                    let e = u.interval === et.rV.YEAR ? er.t.V6UFQM : er.t["6oq128"];
                    n.push(er.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                _.type === ee.NYc.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != o
                        ? n.push(er.intl.formatToPlainString(er.t["0wL/VI"], { tier: null == f ? void 0 : f.name }))
                        : n.push(er.intl.string(er.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(I.Z, {
                    className: ei.descriptionIcon,
                    guildClassName: ei.guildDescriptionIcon,
                    game: o,
                    guild: s,
                    size: I.A.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var m;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? er.intl.string(er.t.O7uLmw) : f.name),
                null != l)
            ) {
                let t = (0, x.Zt)(l);
                e = (0, i.jsx)(M.Z, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: ei.descriptionIcon,
                    size: eh,
                });
            } else
                e =
                    (null == (m = r.sku) ? void 0 : m.productLine) === ee.POd.COLLECTIBLES
                        ? (0, i.jsx)(h.EOn, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: ei.shopIcon,
                          })
                        : (0, i.jsx)(I.Z, {
                              className: ei.descriptionIcon,
                              guildClassName: ei.guildDescriptionIcon,
                              game: o,
                              guild: s,
                              size: I.A.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: ei.descriptionIcon,
            })),
                (t = r.description);
        let g = (0, i.jsx)(h.Text, {
                variant: "text-sm/normal",
                className: ei.date,
                children: (0, q.vc)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            E = r.isGift
                ? (0, i.jsx)(h.aML, {
                      "data-migration-pending": !0,
                      text: er.intl.string(er.t.QddTpm),
                      children: (e) =>
                          (0, i.jsx)(
                              h.OgN,
                              eo(
                                  {
                                      size: "md",
                                      color: "currentColor",
                                      className: ei.giftIcon,
                                  },
                                  e,
                              ),
                          ),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: ei.description,
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
                          className: ei.description,
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
                      (0, i.jsx)("div", { className: ei.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(h.Wn, {
                                messageType: h.QYI.WARNING,
                                action: (0, i.jsx)(p.zxk, {
                                    variant: "overlay-secondary",
                                    text: er.intl.string(er.t.zoztQA),
                                    onClick: () => (0, m.Z)(ep(n)),
                                }),
                                children: er.intl.string(er.t["3AvulN"]),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(eI, {
                                guildId: r,
                                guildProductListingId: e.sku.id,
                            }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(h.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: ei.expandedInfo,
                children: [
                    (0, i.jsx)(h.H, {
                        className: ei.paymentHeader,
                        children: er.intl.string(er.t.nyzoFb),
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
                    h.P3F,
                    el(
                        eo(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: s()(ei.payment, t, { [ei.compact]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(v.Z, {
                                    className: ei.summaryInfo,
                                    align: v.Z.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: ei.amount,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(W.Z, {
                                            className: ei.expand,
                                            direction: r ? W.Z.Directions.UP : W.Z.Directions.DOWN,
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
            ea(this, "state", { expanded: !1 }),
            ea(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ef : ed;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== ee.epS.CONSUMABLE;
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
                        return !eg.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !eE.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, f.yE)(e.sku.flags, ee.l4R.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== ee.NYc.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== ee.NYc.APPLICATION
                        );
                    },
                },
                {
                    rule: "GUILD_PRODUCT",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, f.yE)(e.sku.flags, d.l.GUILD_PRODUCT);
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
            ea(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function eS(e) {
    var t, n;
    let { payment: r, locale: o, compactMode: s, className: l } = e,
        c = null != r.sku && em.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        f = (null == (n = r.subscription) ? void 0 : n.type) === ee.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: m,
        } = (0, _.cj)([V.Z, Y.Z, y.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? Y.Z.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (t = y.Z.getApplication(null != u ? u : ""))
                        ? t
                        : null == (e = r.sku)
                          ? void 0
                          : e.application,
                paymentSources: V.Z.paymentSources,
            };
        }),
        { hasAlreadyLinked: O } = (0, b.F)((0, w.K$)(r.sku) ? h : void 0),
        v = (0, _.e7)([y.Z], () => (null != d ? y.Z.getApplication(d) : null)),
        I = null;
    a.useEffect(() => {
        f && null != d && (0, D.UM)(d);
    }, [d, f]);
    let T = (0, _.e7)([Z.Z], () => Z.Z.getGuild(null == h ? void 0 : h.guildId)),
        S = c ? h : void 0,
        A = r.subscription,
        C = (0, _.e7)([H.Z], () => (null != A && A.type !== ee.NYc.PREMIUM ? H.Z.get(A.items[0].planId) : null)),
        N = (0, _.e7)([F.default], () => {
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
                : null != (i = F.default.getUser(null != (n = null == (t = a.user) ? void 0 : t.id) ? n : null))
                  ? i
                  : null == a
                    ? void 0
                    : a.user;
        }, [r]),
        { analyticsLocations: R } = (0, E.ZP)(g.Z.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eT, {
        applicationStatistics: p,
        application: f ? v : S,
        analyticsLocations: R,
        guild: T,
        stickerPack: I,
        paymentSources: m,
        locale: o,
        compactMode: s,
        className: l,
        payment: r,
        plan: C,
        claimedGiftUser: N,
        hasLinkedToApplication: O,
    });
}
ea(eT, "defaultProps", { compactMode: !1 });
