n.d(t, { Z: () => ed }), n(266796), n(47120), n(653041), n(789020);
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    c = n.n(o),
    d = n(91192),
    u = n(314877),
    m = n(442837),
    g = n(481060),
    p = n(37234),
    h = n(782568),
    f = n(812206),
    N = n(593061),
    x = n(600164),
    b = n(925329),
    _ = n(267101),
    E = n(240864),
    j = n(942833),
    C = n(400916),
    O = n(916001),
    v = n(539290),
    S = n(336197),
    T = n(690221),
    I = n(219929),
    y = n(307643),
    A = n(378233),
    P = n(419922),
    R = n(46141),
    D = n(430824),
    Z = n(853872),
    w = n(509545),
    k = n(230307),
    W = n(259580),
    L = n(572004),
    B = n(55935),
    M = n(630388),
    U = n(74538),
    V = n(937615),
    G = n(244526),
    F = n(712358),
    H = n(362786),
    z = n(981631),
    Y = n(474936),
    K = n(231338),
    q = n(388032),
    X = n(49076);
function J(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                J(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ee = (e) => 'https://'.concat(z.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    et = [z.epS.DURABLE_PRIMARY, z.epS.DURABLE, z.epS.CONSUMABLE],
    en = [z.PyE.FAILED, z.PyE.REVERSED, z.PyE.CANCELED],
    er = [K.gg.APPLE],
    ei = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)('li', {
            className: X.paymentDetail,
            children: (0, i.jsxs)(x.Z, {
                justify: x.Z.Justify.BETWEEN,
                children: [(0, i.jsx)('div', { children: t }), (0, i.jsx)('div', { children: n })]
            })
        });
    };
function es(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [a, l] = s.useState(!1),
        [o, c] = s.useState(!1),
        d = () => {
            (0, L.JG)(t), c(!0), l(!0);
        };
    return (0, i.jsx)(g.ua7, {
        forceOpen: o,
        text: a ? r : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: r } = e,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['onMouseEnter', 'onMouseLeave']);
            return (0, i.jsx)(
                g.P3F,
                $(Q({}, s), {
                    onMouseEnter: () => {
                        a && l(!1), 'function' == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), 'function' == typeof r && r();
                    },
                    onClick: d,
                    children: (0, i.jsx)('div', {
                        className: X.copiableContainer,
                        children: t
                    })
                })
            );
        }
    });
}
let ea = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)('li', {
        className: X.guildProductDetail,
        children: (0, i.jsxs)(x.Z, {
            justify: x.Z.Justify.BETWEEN,
            children: [(0, i.jsx)('div', { children: t }), (0, i.jsx)('div', { children: n })]
        })
    });
};
function el(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, _.hO)(t, n, { requireCurrentGuild: !1 }),
        a = (0, j.C)(r),
        l = (0, m.e7)([D.Z], () => D.Z.getGuild(t)),
        o = (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0 ? q.NW.string(q.t.H11qcX) : a,
        c = s.useCallback(async () => {
            (null == l ? void 0 : l.hasFeature(z.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, S.Z)(z.Z5c.GUILD_PRODUCT(t, n)) : await (0, S.Z)(z.Z5c.CHANNEL(t)), (0, p.xf)();
        }, [l, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o &&
                (0, i.jsx)(ea, {
                    description: q.NW.string(q.t.lXPbJS),
                    detail: o
                }),
            null != l &&
                (0, i.jsx)(ea, {
                    description: q.NW.string(q.t.Wpn8z8),
                    detail: (0, i.jsx)(T.Z, {
                        onClick: c,
                        children: l.name
                    })
                })
        ]
    });
}
function eo(e) {
    var t, n;
    let { guildId: r, guildProductListingId: s } = e,
        a = (0, _.hO)(r, s, { requireCurrentGuild: !1 }),
        l = (0, m.e7)([E.Z], () => E.Z.getGuildProductFetchState(s) === E.M.FETCHING),
        o = null == a ? void 0 : a.role_id,
        c = (0, m.e7)([D.Z], () => (null != o ? D.Z.getRole(r, o) : void 0), [r, o]),
        d = (null !== (n = null == a ? void 0 : null === (t = a.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        u = null != c;
    return l
        ? (0, i.jsx)('div', {
              className: X.guildProductBenefits,
              children: (0, i.jsx)(g.$jN, {})
          })
        : null != a && (d || u)
          ? (0, i.jsxs)('div', {
                className: X.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: X.guildProductBenefitLabel,
                                    children: q.NW.string(q.t.hxawo6)
                                }),
                                (0, i.jsx)(C.Z, {
                                    guildId: r,
                                    productId: a.id
                                })
                            ]
                        }),
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)('div', { className: X.divider }),
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: X.guildProductBenefitLabel,
                                    children: q.NW.string(q.t.gWBNen)
                                }),
                                (0, i.jsx)(O.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ec extends (r = s.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return c()().diff(n, 'days');
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
    get typeString() {
        let {
            payment: { paymentSource: e }
        } = this.props;
        return e instanceof R.qo ? I.ZP.Types.PAYPAL : e instanceof R.dm ? I.ZP.getType(e.brand) : I.ZP.Types.UNKNOWN;
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
            case z.PyE.PENDING:
                return (0, i.jsx)('span', {
                    className: X.statusTagGrey,
                    children: q.NW.string(q.t.y7F0RU)
                });
            case z.PyE.FAILED:
                return (0, i.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.NW.string(q.t.Yo4ru7)
                });
            case z.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)('span', {
                        className: X.statusTagGreen,
                        children: q.NW.string(q.t.lYbZz8)
                    });
                return (0, i.jsx)('span', {
                    className: X.statusTagGreen,
                    children: q.NW.string(q.t.ZBb6ND)
                });
            case z.PyE.REVERSED:
                return (0, i.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.NW.string(q.t.YQv9Li)
                });
            case z.PyE.CANCELED:
                return (0, i.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.NW.string(q.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)('span', {
            className: X.price,
            children: (0, V.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)('li', {
            className: X.paymentDetail,
            children: (0, i.jsxs)('div', {
                className: X.paymentInfo,
                children: [
                    (0, i.jsx)('div', { children: q.NW.string(q.t['UQim+v']) }),
                    (0, i.jsx)(es, {
                        value: e.id,
                        copyText: q.NW.string(q.t['Mdk9+P']),
                        copyFeedbackText: q.NW.string(q.t['7eIrAw'])
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: r, tax: a, amount: o, amountRefunded: c, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, i.jsxs)('div', {
            className: l()(X.paymentText, X.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(G.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: X.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === K.gg.APPLE_PARTNER
                      ? (0, i.jsx)(G.Z, {
                            paymentSource: new R.$z({}),
                            locale: t,
                            descriptionClassName: X.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, i.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !r && a > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(ei, {
                                          description: e.description,
                                          cost: (0, V.T4)(o - a, d)
                                      }),
                                      (0, i.jsx)(ei, {
                                          description: q.NW.string(q.t.QgWXho),
                                          cost: (0, V.T4)(a, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(ei, {
                            description: q.NW.string(q.t.txajQE),
                            cost: (0, V.T4)(o, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(el, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ei, {
                                        description: q.NW.string(q.t['A+I0AA']),
                                        cost: (0, V.T4)(c, d)
                                    }),
                                    (0, i.jsx)(ei, {
                                        description: q.NW.string(q.t.xER6Wl),
                                        cost: (0, V.T4)(o - c, d)
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderInvoiceDownload() {
        let { payment: e } = this.props;
        return (0, i.jsx)(N.Z, { payment: e });
    }
    renderRefundDetails() {
        let e;
        let { locale: t, payment: n } = this.props,
            r = this.validateRefundRules();
        if (r.includes('PAYMENT_GATEWAY') || r.includes('PAYMENT_STATUS') || r.includes('ALREADY_REFUNDED') || r.includes('SKU_STICKER_PACK') || r.includes('SUBSCRIPTION_TYPE') || r.includes('GUILD_PRODUCT')) return null;
        let a = 0 === r.length,
            l = ee(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = r.includes('SKU_TYPE')
                ? q.NW.format(q.t['5lvoVV'], { supportURL: l })
                : a
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? q.NW.format(q.t.EPYteX, {
                            dateLimit: o,
                            supportURL: l
                        })
                      : n.isGift
                        ? q.NW.format(q.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: l
                          })
                        : q.NW.format(q.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: l
                          })
                  : n.isCollectible
                    ? q.NW.string(q.t.s9TZMz)
                    : n.isGift
                      ? q.NW.formatToPlainString(q.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? q.NW.formatToPlainString(q.t.dk7vyM, { dateLimit: o })
                        : q.NW.formatToPlainString(q.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            this.isPremium && (0, F.U)() && (e = null),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(g.H, {
                        className: X.paymentHeader,
                        children: q.NW.string(q.t['n/27pq'])
                    }),
                    (0, i.jsxs)('div', {
                        className: X.paymentText,
                        children: [(0, i.jsx)('div', { children: e }), this.renderRefundActions(r)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, t, n, r) {
        return (0, i.jsxs)(
            'div',
            {
                className: X.refundCriteria,
                children: [
                    (0, i.jsx)(g.H, {
                        className: X.refundSubHeader,
                        children: e
                    }),
                    (0, i.jsxs)('div', {
                        className: X.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: X.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != n && (0, i.jsx)('div', { children: n })
                        ]
                    })
                ]
            },
            r
        );
    }
    renderRefundActions(e) {
        var t;
        let { locale: r, payment: s } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let a = e.includes('PURCHASE_DATE') ? g.Dio : g.dz2;
        if (!this.isPremium || !(0, F.U)())
            return (0, i.jsxs)('div', {
                className: X.refundActions,
                children: [
                    (0, i.jsx)('div', {
                        className: X.refundRules,
                        children: !s.isCollectible && this.renderRefundCriteria(q.NW.string(q.t.H0RNz8), a, q.NW.formatToPlainString(q.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, i.jsx)(g.eee, {
                        href: ee(r),
                        children: q.NW.string(q.t.re5nOD)
                    })
                ]
            });
        let l = (null !== (t = s.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [H.d$.OTHER])[0],
            o = null != l || 0 !== e.length || s.isPurchasedExternally;
        return (0, i.jsxs)('div', {
            className: X.refundActions,
            children: [
                (0, i.jsx)(g.ua7, {
                    shouldShow: o,
                    text: (function (e) {
                        switch (e) {
                            case H.d$.ALREADY_REFUNDED_PREMIUM:
                                return q.NW.string(q.t['GBu+VV']);
                            case H.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return q.NW.string(q.t['7bNM5+']);
                            case H.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return q.NW.string(q.t['2yOjur']);
                            default:
                                return q.NW.string(q.t.iFF3T0);
                        }
                    })(l),
                    children: (e) =>
                        (0, i.jsx)(
                            g.zxk,
                            $(Q({}, e), {
                                color: g.zxk.Colors.PRIMARY,
                                disabled: o,
                                onClick: () =>
                                    (0, g.ZDy)(async () => {
                                        let { default: e } = await n.e('69473').then(n.bind(n, 436022));
                                        return (t) =>
                                            (0, i.jsx)(
                                                e,
                                                Q(
                                                    {
                                                        payment: s,
                                                        reportProblemUrl: ee(r)
                                                    },
                                                    t
                                                )
                                            );
                                    }),
                                children: q.NW.string(q.t.qC9V9P)
                            })
                        )
                }),
                (0, i.jsx)(g.eee, {
                    href: ee(r),
                    children: q.NW.string(q.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e, t;
        let { compactMode: n, payment: r, application: a, guild: l, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            m = r.sku,
            p = r.subscription,
            h = null != r.paymentSource && z.Uk1.has(r.paymentSource.type);
        if (null != p && 0 !== p.items.length) {
            let n = [],
                s = null;
            if (p.type === z.NYc.PREMIUM)
                p.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, U.uZ)(t) ? (n.push(U.ZP.getDisplayName(t, !1, h)), (s = (0, U.Wz)(Y.GP[t].skuId))) : (n.push(''.concat(r > 1 ? ''.concat(r, 'x ') : '').concat(U.ZP.getDisplayName(t, !1, h))), null == s && (s = (0, U.Wz)(Y.GP[t].skuId)));
                });
            else if (p.type === z.NYc.GUILD) {
                if (null != d) {
                    let e = d.interval === Y.rV.YEAR ? q.t.V6UFQE : q.t['6oq129'];
                    n.push(q.NW.format(e, { planName: d.name })), (s = d.skuId);
                }
            } else p.type === z.NYc.APPLICATION && (null != d && (s = d.skuId), null != a ? n.push(q.NW.formatToPlainString(q.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(q.NW.string(q.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : r.description),
                (e = (0, i.jsx)(b.Z, {
                    className: X.descriptionIcon,
                    guildClassName: X.guildDescriptionIcon,
                    game: a,
                    guild: l,
                    size: b.Z.Sizes.XSMALL,
                    skuId: null != s ? s : null == m ? void 0 : m.id
                }));
        } else if (null != m) {
            var f;
            if (((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? q.NW.string(q.t.O7uLm5) : m.name), null != o)) {
                let t = (0, A.Zt)(o);
                e = (0, i.jsx)(P.ZP, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: X.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (f = r.sku) || void 0 === f ? void 0 : f.productLine) === z.POd.COLLECTIBLES
                        ? (0, i.jsx)(g.EOn, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: X.shopIcon
                          })
                        : (0, i.jsx)(b.Z, {
                              className: X.descriptionIcon,
                              guildClassName: X.guildDescriptionIcon,
                              game: a,
                              guild: l,
                              size: b.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            (e = (0, i.jsx)(g.SrA, {
                size: 'md',
                color: 'currentColor',
                className: X.descriptionIcon
            })),
                (t = r.description);
        let N = (0, i.jsx)('div', {
                className: X.date,
                children: (0, B.vc)(c()(r.createdAt), 'MM/DD/YYYY')
            }),
            x = r.isGift
                ? (0, i.jsx)(g.ua7, {
                      text: q.NW.string(q.t.QddTpq),
                      children: (e) =>
                          (0, i.jsx)(
                              g.OgN,
                              Q(
                                  {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: X.giftIcon
                                  },
                                  e
                              )
                          )
                  })
                : null;
        return n
            ? (0, i.jsxs)('div', {
                  className: X.description,
                  children: [
                      e,
                      (0, i.jsxs)('div', {
                          children: [t, N]
                      }),
                      x
                  ]
              })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      N,
                      (0, i.jsxs)('div', {
                          className: X.description,
                          children: [e, (0, i.jsx)('div', { children: t }), x]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            r = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', { className: X.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(v.Z, {
                                className: X.warningBlock,
                                buttonPosition: v.E.RIGHT,
                                notice: q.NW.string(q.t['3AvulJ']),
                                ctaLabel: q.NW.string(q.t.zoztQE),
                                onClick: () => (0, h.Z)(ee(n))
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(eo, {
                                guildId: r,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(g.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)('div', {
                className: X.expandedInfo,
                children: [
                    (0, i.jsx)(g.H, {
                        className: X.paymentHeader,
                        children: q.NW.string(q.t.nyzoFR)
                    }),
                    this.renderPaymentBreakdown(),
                    this.renderGuildProductBenefits(),
                    this.renderInvoiceDownload(),
                    this.renderRefundDetails()
                ]
            })
        });
    }
    render() {
        let { payment: e, className: t, compactMode: n } = this.props,
            { expanded: r } = this.state;
        return (0, i.jsx)(d.mh, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(
                    g.P3F,
                    $(
                        Q(
                            {
                                onClick: this.handleExpandInfo,
                                className: l()(r ? X.payment : X.hoverablePayment, t, { [X.compact]: n }),
                                focusProps: { offset: 4 }
                            },
                            e
                        ),
                        {
                            children: [
                                (0, i.jsxs)(x.Z, {
                                    className: X.summaryInfo,
                                    align: x.Z.Align.CENTER,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)('div', {
                                            className: X.amount,
                                            children: [this.renderStatus(), this.renderPrice()]
                                        }),
                                        (0, i.jsx)(W.Z, {
                                            className: X.expand,
                                            direction: r ? W.Z.Directions.UP : W.Z.Directions.DOWN
                                        })
                                    ]
                                }),
                                r ? this.renderExpandedSection() : null
                            ]
                        }
                    )
                )
        });
    }
    constructor(...e) {
        super(...e),
            J(this, 'state', { expanded: !1 }),
            J(this, 'refundRules', [
                {
                    rule: 'PURCHASE_DATE',
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                        return this.daysSincePurchase <= t;
                    }
                },
                {
                    rule: 'SKU_TYPE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== z.epS.CONSUMABLE;
                    }
                },
                {
                    rule: 'ALREADY_REFUNDED',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return e.amountRefunded < e.amount;
                    }
                },
                {
                    rule: 'PAYMENT_STATUS',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !en.includes(e.status);
                    }
                },
                {
                    rule: 'PAYMENT_GATEWAY',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !er.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, M.yE)(e.sku.flags, z.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== z.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== z.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, M.yE)(e.sku.flags, u.l.GUILD_PRODUCT);
                    }
                },
                {
                    rule: 'COLLECTIBLE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !e.isCollectible;
                    }
                }
            ]),
            J(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function ed(e) {
    var t, n;
    let { payment: r, locale: a, compactMode: l, className: o } = e,
        c = null != r.sku && et.includes(r.sku.type),
        d = null != r.sku && c ? r.sku.applicationId : null,
        u = null === (t = r.sku) || void 0 === t ? void 0 : t.applicationId,
        g = (null === (n = r.subscription) || void 0 === n ? void 0 : n.type) === z.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: N
        } = (0, m.cj)([Z.Z, k.Z, f.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? k.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (t = f.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = r.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: Z.Z.paymentSources
            };
        }),
        x = (0, m.e7)([f.Z], () => (null != u ? f.Z.getApplication(u) : null));
    s.useEffect(() => {
        g && null != u && (0, y.UM)(u);
    }, [u, g]);
    let b = (0, m.e7)([D.Z], () => D.Z.getGuild(null == h ? void 0 : h.guildId)),
        _ = c ? h : void 0,
        E = r.subscription,
        j = (0, m.e7)([w.Z], () => (null != E && E.type !== z.NYc.PREMIUM ? w.Z.get(E.items[0].planId) : null));
    return (0, i.jsx)(ec, {
        applicationStatistics: p,
        application: g ? x : _,
        guild: b,
        stickerPack: null,
        paymentSources: N,
        locale: a,
        compactMode: l,
        className: o,
        payment: r,
        plan: j
    });
}
J(ec, 'defaultProps', { compactMode: !1 });
