n.d(t, { Z: () => el }), n(266796), n(47120), n(653041), n(789020);
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
    b = n(593061),
    N = n(600164),
    x = n(925329),
    _ = n(267101),
    E = n(240864),
    j = n(942833),
    O = n(400916),
    C = n(916001),
    S = n(539290),
    v = n(336197),
    T = n(690221),
    I = n(307643),
    y = n(378233),
    A = n(419922),
    P = n(46141),
    R = n(430824),
    D = n(853872),
    Z = n(509545),
    w = n(230307),
    k = n(259580),
    W = n(572004),
    L = n(55935),
    B = n(630388),
    M = n(74538),
    U = n(937615),
    V = n(244526),
    G = n(981631),
    F = n(474936),
    H = n(231338),
    z = n(388032),
    Y = n(468590);
function K(e, t, n) {
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
function q(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
let J = (e) => 'https://'.concat(G.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    Q = [G.epS.DURABLE_PRIMARY, G.epS.DURABLE, G.epS.CONSUMABLE],
    $ = [G.PyE.FAILED, G.PyE.REVERSED, G.PyE.CANCELED],
    ee = [H.gg.APPLE],
    et = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)('li', {
            className: Y.paymentDetail,
            children: (0, i.jsxs)(N.Z, {
                justify: N.Z.Justify.BETWEEN,
                children: [(0, i.jsx)('div', { children: t }), (0, i.jsx)('div', { children: n })]
            })
        });
    };
function en(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [a, l] = s.useState(!1),
        [o, c] = s.useState(!1),
        d = () => {
            (0, W.JG)(t), c(!0), l(!0);
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
                X(q({}, s), {
                    onMouseEnter: () => {
                        a && l(!1), 'function' == typeof n && n();
                    },
                    onMouseLeave: () => {
                        c(!1), 'function' == typeof r && r();
                    },
                    onClick: d,
                    children: (0, i.jsx)('div', {
                        className: Y.copiableContainer,
                        children: t
                    })
                })
            );
        }
    });
}
let er = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)('li', {
        className: Y.guildProductDetail,
        children: (0, i.jsxs)(N.Z, {
            justify: N.Z.Justify.BETWEEN,
            children: [(0, i.jsx)('div', { children: t }), (0, i.jsx)('div', { children: n })]
        })
    });
};
function ei(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, _.hO)(t, n, { requireCurrentGuild: !1 }),
        a = (0, j.C)(r),
        l = (0, m.e7)([R.Z], () => R.Z.getGuild(t)),
        o = (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0 ? z.NW.string(z.t.H11qcX) : a,
        c = s.useCallback(async () => {
            (null == l ? void 0 : l.hasFeature(G.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, v.Z)(G.Z5c.GUILD_PRODUCT(t, n)) : await (0, v.Z)(G.Z5c.CHANNEL(t)), (0, p.xf)();
        }, [l, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o &&
                (0, i.jsx)(er, {
                    description: z.NW.string(z.t.lXPbJS),
                    detail: o
                }),
            null != l &&
                (0, i.jsx)(er, {
                    description: z.NW.string(z.t.Wpn8z8),
                    detail: (0, i.jsx)(T.Z, {
                        onClick: c,
                        children: l.name
                    })
                })
        ]
    });
}
function es(e) {
    var t, n;
    let { guildId: r, guildProductListingId: s } = e,
        a = (0, _.hO)(r, s, { requireCurrentGuild: !1 }),
        l = (0, m.e7)([E.Z], () => E.Z.getGuildProductFetchState(s) === E.M.FETCHING),
        o = null == a ? void 0 : a.role_id,
        c = (0, m.e7)([R.Z], () => (null != o ? R.Z.getRole(r, o) : void 0), [r, o]),
        d = (null != (n = null == a || null == (t = a.attachments) ? void 0 : t.length) ? n : 0) > 0,
        u = null != c;
    return l
        ? (0, i.jsx)('div', {
              className: Y.guildProductBenefits,
              children: (0, i.jsx)(g.$jN, {})
          })
        : null != a && (d || u)
          ? (0, i.jsxs)('div', {
                className: Y.guildProductBenefits,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: Y.guildProductBenefitLabel,
                                    children: z.NW.string(z.t.hxawo6)
                                }),
                                (0, i.jsx)(O.Z, {
                                    guildId: r,
                                    productId: a.id
                                })
                            ]
                        }),
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)('div', { className: Y.divider }),
                                (0, i.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: Y.guildProductBenefitLabel,
                                    children: z.NW.string(z.t.gWBNen)
                                }),
                                (0, i.jsx)(C.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ea extends (r = s.PureComponent) {
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
            case G.PyE.PENDING:
                return (0, i.jsx)('span', {
                    className: Y.statusTagGrey,
                    children: z.NW.string(z.t.y7F0RU)
                });
            case G.PyE.FAILED:
                return (0, i.jsx)('span', {
                    className: Y.statusTagRed,
                    children: z.NW.string(z.t.Yo4ru7)
                });
            case G.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)('span', {
                        className: Y.statusTagGreen,
                        children: z.NW.string(z.t.lYbZz8)
                    });
                return (0, i.jsx)('span', {
                    className: Y.statusTagGreen,
                    children: z.NW.string(z.t.ZBb6ND)
                });
            case G.PyE.REVERSED:
                return (0, i.jsx)('span', {
                    className: Y.statusTagRed,
                    children: z.NW.string(z.t.YQv9Li)
                });
            case G.PyE.CANCELED:
                return (0, i.jsx)('span', {
                    className: Y.statusTagRed,
                    children: z.NW.string(z.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)('span', {
            className: Y.price,
            children: (0, U.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)('li', {
            className: Y.paymentDetail,
            children: (0, i.jsxs)('div', {
                className: Y.paymentInfo,
                children: [
                    (0, i.jsx)('div', { children: z.NW.string(z.t['UQim+v']) }),
                    (0, i.jsx)(en, {
                        value: e.id,
                        copyText: z.NW.string(z.t['Mdk9+P']),
                        copyFeedbackText: z.NW.string(z.t['7eIrAw'])
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
            className: l()(Y.paymentText, Y.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(V.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: Y.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === H.gg.APPLE_PARTNER
                      ? (0, i.jsx)(V.Z, {
                            paymentSource: new P.$z({}),
                            locale: t,
                            descriptionClassName: Y.paymentText,
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
                                      (0, i.jsx)(et, {
                                          description: e.description,
                                          cost: (0, U.T4)(o - a, d)
                                      }),
                                      (0, i.jsx)(et, {
                                          description: z.NW.string(z.t.QgWXho),
                                          cost: (0, U.T4)(a, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsx)(et, {
                            description: z.NW.string(z.t.txajQE),
                            cost: (0, U.T4)(o, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(ei, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(et, {
                                        description: z.NW.string(z.t['A+I0AA']),
                                        cost: (0, U.T4)(c, d)
                                    }),
                                    (0, i.jsx)(et, {
                                        description: z.NW.string(z.t.xER6Wl),
                                        cost: (0, U.T4)(o - c, d)
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
        return (0, i.jsx)(b.Z, { payment: e });
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
            r = this.validateRefundRules();
        if (r.includes('PAYMENT_GATEWAY') || r.includes('PAYMENT_STATUS') || r.includes('ALREADY_REFUNDED') || r.includes('SKU_STICKER_PACK') || r.includes('SUBSCRIPTION_TYPE') || r.includes('GUILD_PRODUCT')) return null;
        let a = 0 === r.length,
            l = J(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = r.includes('SKU_TYPE')
                ? z.NW.format(z.t['5lvoVV'], { supportURL: l })
                : a
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? z.NW.format(z.t.EPYteX, {
                            dateLimit: o,
                            supportURL: l
                        })
                      : n.isGift
                        ? z.NW.format(z.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: l
                          })
                        : z.NW.format(z.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: l
                          })
                  : n.isCollectible
                    ? z.NW.string(z.t.s9TZMz)
                    : n.isGift
                      ? z.NW.formatToPlainString(z.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? z.NW.formatToPlainString(z.t.dk7vyM, { dateLimit: o })
                        : z.NW.formatToPlainString(z.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(g.H, {
                        className: Y.paymentHeader,
                        children: z.NW.string(z.t['n/27pq'])
                    }),
                    (0, i.jsxs)('div', {
                        className: Y.paymentText,
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
                className: Y.refundCriteria,
                children: [
                    (0, i.jsx)(g.H, {
                        className: Y.refundSubHeader,
                        children: e
                    }),
                    (0, i.jsxs)('div', {
                        className: Y.refundIconContainer,
                        children: [
                            (0, i.jsx)(t, {
                                className: Y.refundCriteriaIcon,
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
        let { locale: t, payment: n } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let r = e.includes('PURCHASE_DATE') ? g.Dio : g.dz2;
        return (0, i.jsxs)('div', {
            className: Y.refundActions,
            children: [
                (0, i.jsx)('div', {
                    className: Y.refundRules,
                    children: !n.isCollectible && this.renderRefundCriteria(z.NW.string(z.t.H0RNz8), r, z.NW.formatToPlainString(z.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                }),
                (0, i.jsx)(g.eee, {
                    href: J(t),
                    children: z.NW.string(z.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: r, application: a, guild: l, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            m = r.sku,
            p = r.subscription,
            h = null != r.paymentSource && G.Uk1.has(r.paymentSource.type);
        if (null != p && 0 !== p.items.length) {
            let n = [],
                s = null;
            if (p.type === G.NYc.PREMIUM)
                p.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, M.uZ)(t) ? (n.push(M.ZP.getDisplayName(t, !1, h)), (s = (0, M.Wz)(F.GP[t].skuId))) : (n.push(''.concat(r > 1 ? ''.concat(r, 'x ') : '').concat(M.ZP.getDisplayName(t, !1, h))), null == s && (s = (0, M.Wz)(F.GP[t].skuId)));
                });
            else if (p.type === G.NYc.GUILD) {
                if (null != d) {
                    let e = d.interval === F.rV.YEAR ? z.t.V6UFQE : z.t['6oq129'];
                    n.push(z.NW.format(e, { planName: d.name })), (s = d.skuId);
                }
            } else p.type === G.NYc.APPLICATION && (null != d && (s = d.skuId), null != a ? n.push(z.NW.formatToPlainString(z.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(z.NW.string(z.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : r.description),
                (e = (0, i.jsx)(x.Z, {
                    className: Y.descriptionIcon,
                    guildClassName: Y.guildDescriptionIcon,
                    game: a,
                    guild: l,
                    size: x.Z.Sizes.XSMALL,
                    skuId: null != s ? s : null == m ? void 0 : m.id
                }));
        } else if (null != m) {
            var f;
            if (((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? z.NW.string(z.t.O7uLm5) : m.name), null != o)) {
                let t = (0, y.Zt)(o);
                e = (0, i.jsx)(A.Z, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: Y.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null == (f = r.sku) ? void 0 : f.productLine) === G.POd.COLLECTIBLES
                        ? (0, i.jsx)(g.EOn, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: Y.shopIcon
                          })
                        : (0, i.jsx)(x.Z, {
                              className: Y.descriptionIcon,
                              guildClassName: Y.guildDescriptionIcon,
                              game: a,
                              guild: l,
                              size: x.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            (e = (0, i.jsx)(g.SrA, {
                size: 'md',
                color: 'currentColor',
                className: Y.descriptionIcon
            })),
                (t = r.description);
        let b = (0, i.jsx)('div', {
                className: Y.date,
                children: (0, L.vc)(c()(r.createdAt), 'MM/DD/YYYY')
            }),
            N = r.isGift
                ? (0, i.jsx)(g.ua7, {
                      text: z.NW.string(z.t.QddTpq),
                      children: (e) =>
                          (0, i.jsx)(
                              g.OgN,
                              q(
                                  {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: Y.giftIcon
                                  },
                                  e
                              )
                          )
                  })
                : null;
        return n
            ? (0, i.jsxs)('div', {
                  className: Y.description,
                  children: [
                      e,
                      (0, i.jsxs)('div', {
                          children: [t, b]
                      }),
                      N
                  ]
              })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      b,
                      (0, i.jsxs)('div', {
                          className: Y.description,
                          children: [e, (0, i.jsx)('div', { children: t }), N]
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
                      (0, i.jsx)('div', { className: Y.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(S.Z, {
                                className: Y.warningBlock,
                                buttonPosition: S.E.RIGHT,
                                notice: z.NW.string(z.t['3AvulJ']),
                                ctaLabel: z.NW.string(z.t.zoztQE),
                                onClick: () => (0, h.Z)(J(n))
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(es, {
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
                className: Y.expandedInfo,
                children: [
                    (0, i.jsx)(g.H, {
                        className: Y.paymentHeader,
                        children: z.NW.string(z.t.nyzoFR)
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
                    X(
                        q(
                            {
                                onClick: this.handleExpandInfo,
                                className: l()(r ? Y.payment : Y.hoverablePayment, t, { [Y.compact]: n }),
                                focusProps: { offset: 4 }
                            },
                            e
                        ),
                        {
                            children: [
                                (0, i.jsxs)(N.Z, {
                                    className: Y.summaryInfo,
                                    align: N.Z.Align.CENTER,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)('div', {
                                            className: Y.amount,
                                            children: [this.renderStatus(), this.renderPrice()]
                                        }),
                                        (0, i.jsx)(k.Z, {
                                            className: Y.expand,
                                            direction: r ? k.Z.Directions.UP : k.Z.Directions.DOWN
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
            K(this, 'state', { expanded: !1 }),
            K(this, 'refundRules', [
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
                        return null == e.sku || e.sku.type !== G.epS.CONSUMABLE;
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
                        return !$.includes(e.status);
                    }
                },
                {
                    rule: 'PAYMENT_GATEWAY',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !ee.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, B.yE)(e.sku.flags, G.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null == (e = n.subscription) ? void 0 : e.type) !== G.NYc.GUILD && (null == (t = n.subscription) ? void 0 : t.type) !== G.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, B.yE)(e.sku.flags, u.l.GUILD_PRODUCT);
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
            K(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function el(e) {
    var t, n;
    let { payment: r, locale: a, compactMode: l, className: o } = e,
        c = null != r.sku && Q.includes(r.sku.type),
        d = null != r.sku && c ? r.sku.applicationId : null,
        u = null == (t = r.sku) ? void 0 : t.applicationId,
        g = (null == (n = r.subscription) ? void 0 : n.type) === G.NYc.APPLICATION,
        {
            applicationStatistics: p,
            gameApplication: h,
            paymentSources: b
        } = (0, m.cj)([D.Z, w.Z, f.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? w.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null != (t = f.Z.getApplication(null != d ? d : '')) ? t : null == (e = r.sku) ? void 0 : e.application,
                paymentSources: D.Z.paymentSources
            };
        }),
        N = (0, m.e7)([f.Z], () => (null != u ? f.Z.getApplication(u) : null));
    s.useEffect(() => {
        g && null != u && (0, I.UM)(u);
    }, [u, g]);
    let x = (0, m.e7)([R.Z], () => R.Z.getGuild(null == h ? void 0 : h.guildId)),
        _ = c ? h : void 0,
        E = r.subscription,
        j = (0, m.e7)([Z.Z], () => (null != E && E.type !== G.NYc.PREMIUM ? Z.Z.get(E.items[0].planId) : null));
    return (0, i.jsx)(ea, {
        applicationStatistics: p,
        application: g ? N : _,
        guild: x,
        stickerPack: null,
        paymentSources: b,
        locale: a,
        compactMode: l,
        className: o,
        payment: r,
        plan: j
    });
}
K(ea, 'defaultProps', { compactMode: !1 });
