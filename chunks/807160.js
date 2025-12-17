n.d(t, { Z: () => eI }), n(953529), n(388685), n(539854), n(997841);
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
    p = n(442837),
    _ = n(681715),
    m = n(159691),
    h = n(481060),
    g = n(782568),
    E = n(100527),
    b = n(906732),
    y = n(524995),
    O = n(812206),
    v = n(593061),
    S = n(600164),
    I = n(925329),
    T = n(267101),
    C = n(240864),
    A = n(942833),
    N = n(916001),
    P = n(298243),
    R = n(336197),
    w = n(690221),
    D = n(307643),
    x = n(164670),
    L = n(517730),
    j = n(378233),
    M = n(419922),
    k = n(313789),
    U = n(342386),
    G = n(518596),
    Z = n(46141),
    F = n(485386),
    B = n(430824),
    V = n(594174),
    H = n(853872),
    Y = n(509545),
    W = n(230307),
    K = n(259580),
    z = n(626135),
    q = n(572004),
    Q = n(55935),
    X = n(74538),
    J = n(937615),
    $ = n(51144),
    ee = n(244526),
    et = n(981631),
    en = n(474936),
    er = n(231338),
    ei = n(388032),
    ea = n(354351);
function eo(e, t, n) {
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
function es(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = 14,
    ed = 5,
    ef = 2,
    ep = (e) => "https://".concat(et.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    e_ = 24,
    em = [et.epS.DURABLE_PRIMARY, et.epS.DURABLE, et.epS.CONSUMABLE],
    eh = [et.PyE.FAILED, et.PyE.REVERSED, et.PyE.CANCELED],
    eg = [er.gg.APPLE],
    eE = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: ea.paymentDetail,
            children: (0, i.jsxs)(S.Z, {
                justify: S.Z.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eb(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [o, s] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, q.JG)(t, () => {
                c(!0), s(!0);
            });
        };
    return (0, i.jsx)(_.u, {
        forceOpen: l,
        text: o ? r : n,
        children: (0, i.jsx)(h.P3F, {
            onMouseEnter: () => {
                o && s(!1);
            },
            onMouseLeave: () => {
                c(!1);
            },
            onClick: u,
            children: (0, i.jsx)("div", {
                className: ea.copiableContainer,
                children: t,
            }),
        }),
    });
}
let ey = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: ea.guildProductDetail,
        children: (0, i.jsxs)(S.Z, {
            justify: S.Z.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function eO(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, T.hO)(t, n, { requireCurrentGuild: !1 }),
        o = (0, A.C)(r),
        s = (0, p.e7)([B.Z], () => B.Z.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? ei.intl.string(ei.t.H11qcT)
                : o,
        c = a.useCallback(async () => {
            (null == s ? void 0 : s.features.has(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, R.Z)(et.Z5c.GUILD_PRODUCT(t, n))
                : await (0, R.Z)(et.Z5c.CHANNEL(t)),
                (0, U.default)();
        }, [s, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(ey, {
                    description: ei.intl.string(ei.t.lXPbJb),
                    detail: l,
                }),
            null != s &&
                (0, i.jsx)(ey, {
                    description: ei.intl.string(ei.t.Wpn8z8),
                    detail: (0, i.jsx)(w.Z, {
                        onClick: c,
                        children: s.name,
                    }),
                }),
        ],
    });
}
function ev(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        o = (0, T.hO)(r, a, { requireCurrentGuild: !1 }),
        s = (0, p.e7)([C.Z], () => C.Z.getGuildProductFetchState(a) === C.M.FETCHING),
        l = null == o ? void 0 : o.role_id,
        c = (0, p.e7)([F.Z], () => (null != l ? F.Z.getRole(r, l) : void 0), [r, l]),
        u = (0, P.Z)({
            guildId: r,
            productId: a,
        }),
        d = (null != (n = null == o || null == (t = o.attachments) ? void 0 : t.length) ? n : 0) > 0,
        f = null != c;
    return s
        ? (0, i.jsx)("div", {
              className: ea.guildProductBenefits,
              children: (0, i.jsx)(h.$jN, {}),
          })
        : null != o && (d || f)
          ? (0, i.jsxs)("div", {
                className: ea.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ea.guildProductBenefitLabel,
                                    children: ei.intl.string(ei.t.hxawoy),
                                }),
                                (0, i.jsx)(m.zxk, es({}, u)),
                            ],
                        }),
                    f &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: ea.divider }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ea.guildProductBenefitLabel,
                                    children: ei.intl.string(ei.t.gWBNet),
                                }),
                                (0, i.jsx)(N.Z, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class eS extends (r = a.PureComponent) {
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
            case et.PyE.PENDING:
                return (0, i.jsx)("span", {
                    className: ea.statusTagGrey,
                    children: ei.intl.string(ei.t.y7F0Re),
                });
            case et.PyE.FAILED:
                return (0, i.jsx)("span", {
                    className: ea.statusTagRed,
                    children: ei.intl.string(ei.t.Yo4ru6),
                });
            case et.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: ea.statusTagGreen,
                        children: ei.intl.string(ei.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: ea.statusTagGreen,
                    children: ei.intl.string(ei.t.ZBb6NK),
                });
            case et.PyE.REVERSED:
                return (0, i.jsx)("span", {
                    className: ea.statusTagRed,
                    children: ei.intl.string(ei.t.YQv9Li),
                });
            case et.PyE.CANCELED:
                return (0, i.jsx)("span", {
                    className: ea.statusTagRed,
                    children: ei.intl.string(ei.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, x.K$)(e.sku) && e.status === et.PyE.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", {
                      className: ea.statusTagGreen,
                      children: ei.intl.string(ei.t.Osji1u),
                  })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", {
                            className: ea.statusTagGreen,
                            children: ei.intl.string(ei.t.lIsIFo),
                        })
                      : (0, i.jsx)("span", {
                            className: ea.statusTagYellow,
                            children: ei.intl.string(ei.t["+tqSi3"]),
                        })
                  : t
                    ? (0, i.jsx)("span", {
                          className: ea.statusTagYellow,
                          children: ei.intl.string(ei.t.y7F0Re),
                      })
                    : (0, i.jsx)("span", {
                          className: ea.statusTagYellow,
                          children: ei.intl.string(ei.t.HHC5Z4),
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
            className: ea.price,
            children: (0, J.T4)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: ea.paymentDetail,
            children: (0, i.jsxs)("div", {
                className: ea.paymentInfo,
                children: [
                    (0, i.jsx)("div", { children: ei.intl.string(ei.t["UQim+r"]) }),
                    (0, i.jsx)(eb, {
                        value: e.id,
                        copyText: ei.intl.string(ei.t["Mdk9+A"]),
                        copyFeedbackText: ei.intl.string(ei.t["7eIrA2"]),
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
            className: s()(ea.paymentText, ea.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(ee.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: ea.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === er.gg.APPLE_PARTNER
                      ? (0, i.jsx)(ee.Z, {
                            paymentSource: new Z.$z({}),
                            locale: t,
                            descriptionClassName: ea.paymentText,
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
                                      (0, i.jsx)(eE, {
                                          description: e.description,
                                          cost: (0, J.T4)(l - o, u),
                                      }),
                                      (0, i.jsx)(eE, {
                                          description: ei.intl.string(ei.t.QgWXht),
                                          cost: (0, J.T4)(o, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eE, {
                            description: ei.intl.string(ei.t.txajQG),
                            cost: (0, J.T4)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(eO, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eE, {
                                        description: ei.intl.string(ei.t["A+I0AP"]),
                                        cost: (0, J.T4)(c, u),
                                    }),
                                    (0, i.jsx)(eE, {
                                        description: ei.intl.string(ei.t.xER6Wi),
                                        cost: (0, J.T4)(l - c, u),
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
        return (0, i.jsx)(v.Z, { payment: e });
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
        return o.status === et.PyE.REFUNDED
            ? (0, i.jsxs)(a.Fragment, {
                  children: [
                      (0, i.jsx)(h.H, {
                          className: ea.paymentHeader,
                          children: ei.intl.string(ei.t["gIGB/A"]),
                      }),
                      (0, i.jsx)("div", {
                          className: ea.paymentText,
                          children: ei.intl.format(ei.t.IBtGwC, { applicationName: null == l ? void 0 : l.name }),
                      }),
                  ],
              })
            : o.isGift
              ? (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(h.H, {
                            className: ea.paymentHeader,
                            children: ei.intl.string(ei.t["gIGB/A"]),
                        }),
                        (0, i.jsx)("div", {
                            className: ea.paymentText,
                            children:
                                null != r
                                    ? ei.intl.format(ei.t.vfUW65, { username: $.ZP.getName(r) })
                                    : ei.intl.string(ei.t["18wIqp"]),
                        }),
                        null == r &&
                            (0, i.jsx)("div", {
                                className: ea.additionalInformationButtonContainer,
                                children: (0, i.jsx)(m.zxk, {
                                    variant: "primary",
                                    text: ei.intl.string(ei.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, G.openUserSettings)(k.n.GIFT_PANEL, { section: et.oAB.INVENTORY }),
                                }),
                            }),
                    ],
                })
              : d
                ? null
                : (0, i.jsxs)(a.Fragment, {
                      children: [
                          (0, i.jsx)(h.H, {
                              className: ea.paymentHeader,
                              children: ei.intl.string(ei.t["gIGB/A"]),
                          }),
                          (0, i.jsx)("div", {
                              className: ea.paymentText,
                              children: s
                                  ? ei.intl.format(ei.t.DQQCAw, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (t = o.sku) ? void 0 : t.name,
                                    })
                                  : ei.intl.format(ei.t.ED2BqF, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (n = o.sku) ? void 0 : n.name,
                                    }),
                          }),
                          (0, i.jsx)("div", {
                              className: ea.additionalInformationButtonContainer,
                              children: s
                                  ? (0, i.jsx)(m.zxk, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t.zoztQA),
                                        onClick: () => (0, g.Z)(ep(c)),
                                    })
                                  : (0, i.jsx)(m.zxk, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t["jCqvk/"]),
                                        onClick: () => {
                                            null != o.sku &&
                                                null != l &&
                                                (z.default.track(
                                                    et.rMx.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
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
        if ((0, x.K$)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            l = this.isPremium ? ed : eu;
        return (
            (e = r.includes("SKU_TYPE")
                ? ei.intl.format(ei.t["5lvoVS"], { supportURL: s })
                : o
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ei.intl.format(ei.t.EPYteX, {
                            dateLimit: l,
                            supportURL: s,
                        })
                      : n.isGift
                        ? ei.intl.format(ei.t["16eP/L"], {
                              dateLimit: l,
                              supportURL: s,
                          })
                        : ei.intl.format(ei.t["1LDI4J"], {
                              dateLimit: l,
                              playtimeLimit: ef,
                              supportURL: s,
                          })
                  : n.isCollectible
                    ? ei.intl.string(ei.t.s9TZM1)
                    : n.isGift
                      ? ei.intl.formatToPlainString(ei.t.owlOWc, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ei.intl.formatToPlainString(ei.t.dk7vyL, { dateLimit: l })
                        : ei.intl.formatToPlainString(ei.t.s4Kk0C, {
                              dateLimit: l,
                              playtimeLimit: ef,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(h.H, {
                        className: ea.paymentHeader,
                        children: ei.intl.string(ei.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.paymentText,
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
                className: ea.refundCriteria,
                children: [
                    (0, i.jsx)(h.H, {
                        className: ea.refundSubHeader,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: ea.refundCriteriaIcon,
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
            className: ea.refundActions,
            children: [
                (0, i.jsx)("div", {
                    className: ea.refundRules,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            ei.intl.string(ei.t.H0RNz4),
                            r,
                            ei.intl.formatToPlainString(ei.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(h.Anchor, {
                    href: ep(t),
                    children: ei.intl.string(ei.t.re5nOB),
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
            p = r.subscription,
            m = null != r.paymentSource && et.Uk1.has(r.paymentSource.type);
        if (null != p && 0 !== p.items.length) {
            let n = [],
                a = null;
            if (p.type === et.NYc.PREMIUM)
                p.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, X.uZ)(t)
                        ? (n.push(X.ZP.getDisplayName(t, !1, m)), (a = (0, X.Wz)(en.GP[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(X.ZP.getDisplayName(t, !1, m))),
                          null == a && (a = (0, X.Wz)(en.GP[t].skuId)));
                });
            else if (p.type === et.NYc.GUILD) {
                if (null != u) {
                    let e = u.interval === en.rV.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
                    n.push(ei.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                p.type === et.NYc.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != o
                        ? n.push(ei.intl.formatToPlainString(ei.t["0wL/VI"], { tier: null == f ? void 0 : f.name }))
                        : n.push(ei.intl.string(ei.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(I.Z, {
                    className: ea.descriptionIcon,
                    guildClassName: ea.guildDescriptionIcon,
                    game: o,
                    guild: s,
                    size: I.A.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var g;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : f.name),
                null != l)
            ) {
                let t = (0, j.Zt)(l);
                e = (0, i.jsx)(M.Z, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: ea.descriptionIcon,
                    size: e_,
                });
            } else
                e =
                    (null == (g = r.sku) ? void 0 : g.productLine) === et.POd.COLLECTIBLES
                        ? (0, i.jsx)(h.EOn, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: ea.shopIcon,
                          })
                        : (0, i.jsx)(I.Z, {
                              className: ea.descriptionIcon,
                              guildClassName: ea.guildDescriptionIcon,
                              game: o,
                              guild: s,
                              size: I.A.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(h.SrA, {
                size: "md",
                color: "currentColor",
                className: ea.descriptionIcon,
            })),
                (t = r.description);
        let E = (0, i.jsx)(h.Text, {
                variant: "text-sm/normal",
                className: ea.date,
                children: (0, Q.vc)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            b = r.isGift
                ? (0, i.jsx)(_.u, {
                      text: ei.intl.string(ei.t.QddTpm),
                      children: (0, i.jsx)(h.OgN, {
                          size: "md",
                          color: "currentColor",
                          className: ea.giftIcon,
                      }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: ea.description,
                  children: [
                      e,
                      (0, i.jsxs)("div", {
                          children: [t, E],
                      }),
                      b,
                  ],
              })
            : (0, i.jsxs)(a.Fragment, {
                  children: [
                      E,
                      (0, i.jsxs)("div", {
                          className: ea.description,
                          children: [e, (0, i.jsx)("div", { children: t }), b],
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
                      (0, i.jsx)("div", { className: ea.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(h.Wn, {
                                messageType: h.QYI.WARNING,
                                action: (0, i.jsx)(m.zxk, {
                                    variant: "overlay-secondary",
                                    text: ei.intl.string(ei.t.zoztQA),
                                    onClick: () => (0, g.Z)(ep(n)),
                                }),
                                children: ei.intl.string(ei.t["3AvulN"]),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(ev, {
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
                className: ea.expandedInfo,
                children: [
                    (0, i.jsx)(h.H, {
                        className: ea.paymentHeader,
                        children: ei.intl.string(ei.t.nyzoFb),
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
                    ec(
                        es(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: s()(ea.payment, t, { [ea.compact]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(S.Z, {
                                    className: ea.summaryInfo,
                                    align: S.Z.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: ea.amount,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(K.Z, {
                                            className: ea.expand,
                                            direction: r ? K.Z.Directions.UP : K.Z.Directions.DOWN,
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
            eo(this, "state", { expanded: !1 }),
            eo(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ed : eu;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== et.epS.CONSUMABLE;
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
                        return !eh.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !eg.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, f.yE)(e.sku.flags, et.l4R.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== et.NYc.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== et.NYc.APPLICATION
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
            eo(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function eI(e) {
    var t, n;
    let { payment: r, locale: o, compactMode: s, className: l } = e,
        c = null != r.sku && em.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        f = (null == (n = r.subscription) ? void 0 : n.type) === et.NYc.APPLICATION,
        {
            applicationStatistics: _,
            gameApplication: m,
            paymentSources: h,
        } = (0, p.cj)([H.Z, W.Z, O.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? W.Z.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (t = O.Z.getApplication(null != u ? u : ""))
                        ? t
                        : null == (e = r.sku)
                          ? void 0
                          : e.application,
                paymentSources: H.Z.paymentSources,
            };
        }),
        { hasAlreadyLinked: g } = (0, y.FG)((0, x.K$)(r.sku) ? m : void 0),
        v = (0, p.e7)([O.Z], () => (null != d ? O.Z.getApplication(d) : null)),
        S = null;
    a.useEffect(() => {
        f && null != d && (0, D.UM)(d);
    }, [d, f]);
    let I = (0, p.e7)([B.Z], () => B.Z.getGuild(null == m ? void 0 : m.guildId)),
        T = c ? m : void 0,
        C = r.subscription,
        A = (0, p.e7)([Y.Z], () => (null != C && C.type !== et.NYc.PREMIUM ? Y.Z.get(C.items[0].planId) : null)),
        N = (0, p.e7)([V.default], () => {
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
                : null != (i = V.default.getUser(null != (n = null == (t = a.user) ? void 0 : t.id) ? n : null))
                  ? i
                  : null == a
                    ? void 0
                    : a.user;
        }, [r]),
        { analyticsLocations: P } = (0, b.ZP)(E.Z.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eS, {
        applicationStatistics: _,
        application: f ? v : T,
        analyticsLocations: P,
        guild: I,
        stickerPack: S,
        paymentSources: h,
        locale: o,
        compactMode: s,
        className: l,
        payment: r,
        plan: A,
        claimedGiftUser: N,
        hasLinkedToApplication: g,
    });
}
eo(eS, "defaultProps", { compactMode: !1 });
