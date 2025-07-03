(n.d(t, { Z: () => eo }), n(953529), n(388685), n(539854), n(997841));
var i,
    r = n(255367),
    s = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    c = n.n(o),
    d = n(91192),
    u = n(314877),
    m = n(442837),
    p = n(481060),
    g = n(37234),
    h = n(782568),
    f = n(812206),
    b = n(593061),
    x = n(600164),
    _ = n(925329),
    E = n(267101),
    j = n(240864),
    C = n(942833),
    O = n(400916),
    S = n(916001),
    v = n(539290),
    T = n(336197),
    N = n(690221),
    I = n(307643),
    y = n(378233),
    A = n(419922),
    P = n(46141),
    R = n(485386),
    D = n(430824),
    Z = n(853872),
    w = n(509545),
    k = n(230307),
    L = n(259580),
    B = n(572004),
    M = n(55935),
    U = n(630388),
    V = n(74538),
    G = n(937615),
    F = n(244526),
    H = n(981631),
    z = n(474936),
    Y = n(231338),
    W = n(388032),
    K = n(468590);
function q(e, t, n) {
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                q(e, t, n[t]);
            }));
    }
    return e;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = (e) => 'https://'.concat(H.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    $ = [H.epS.DURABLE_PRIMARY, H.epS.DURABLE, H.epS.CONSUMABLE],
    ee = [H.PyE.FAILED, H.PyE.REVERSED, H.PyE.CANCELED],
    et = [Y.gg.APPLE],
    en = (e) => {
        let { description: t, cost: n } = e;
        return (0, r.jsx)('li', {
            className: K.paymentDetail,
            children: (0, r.jsxs)(x.Z, {
                justify: x.Z.Justify.BETWEEN,
                children: [(0, r.jsx)('div', { children: t }), (0, r.jsx)('div', { children: n })]
            })
        });
    };
function ei(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, a] = s.useState(!1),
        [o, c] = s.useState(!1),
        d = () => {
            (0, B.JG)(t, () => {
                (c(!0), a(!0));
            });
        };
    return (0, r.jsx)(p.ua7, {
        forceOpen: o,
        text: l ? i : n,
        children: (e) => {
            var { onMouseEnter: n, onMouseLeave: i } = e,
                s = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                s = Object.keys(e);
                            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                    }
                    return r;
                })(e, ['onMouseEnter', 'onMouseLeave']);
            return (0, r.jsx)(
                p.P3F,
                Q(X({}, s), {
                    onMouseEnter: () => {
                        (l && a(!1), 'function' == typeof n && n());
                    },
                    onMouseLeave: () => {
                        (c(!1), 'function' == typeof i && i());
                    },
                    onClick: d,
                    children: (0, r.jsx)('div', {
                        className: K.copiableContainer,
                        children: t
                    })
                })
            );
        }
    });
}
let er = (e) => {
    let { description: t, detail: n } = e;
    return (0, r.jsx)('li', {
        className: K.guildProductDetail,
        children: (0, r.jsxs)(x.Z, {
            justify: x.Z.Justify.BETWEEN,
            children: [(0, r.jsx)('div', { children: t }), (0, r.jsx)('div', { children: n })]
        })
    });
};
function es(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, E.hO)(t, n, { requireCurrentGuild: !1 }),
        l = (0, C.C)(i),
        a = (0, m.e7)([D.Z], () => D.Z.getGuild(t)),
        o = (null == i ? void 0 : i.role_id) != null && (null == i ? void 0 : i.attachments_count) === 0 ? W.intl.string(W.t.H11qcX) : l,
        c = s.useCallback(async () => {
            ((null == a ? void 0 : a.features.has(H.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, T.Z)(H.Z5c.GUILD_PRODUCT(t, n)) : await (0, T.Z)(H.Z5c.CHANNEL(t)), (0, g.xf)());
        }, [a, t, n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o &&
                (0, r.jsx)(er, {
                    description: W.intl.string(W.t.lXPbJS),
                    detail: o
                }),
            null != a &&
                (0, r.jsx)(er, {
                    description: W.intl.string(W.t.Wpn8z8),
                    detail: (0, r.jsx)(N.Z, {
                        onClick: c,
                        children: a.name
                    })
                })
        ]
    });
}
function el(e) {
    var t, n;
    let { guildId: i, guildProductListingId: s } = e,
        l = (0, E.hO)(i, s, { requireCurrentGuild: !1 }),
        a = (0, m.e7)([j.Z], () => j.Z.getGuildProductFetchState(s) === j.M.FETCHING),
        o = null == l ? void 0 : l.role_id,
        c = (0, m.e7)([R.Z], () => (null != o ? R.Z.getRole(i, o) : void 0), [i, o]),
        d = (null != (n = null == l || null == (t = l.attachments) ? void 0 : t.length) ? n : 0) > 0,
        u = null != c;
    return a
        ? (0, r.jsx)('div', {
              className: K.guildProductBenefits,
              children: (0, r.jsx)(p.$jN, {})
          })
        : null != l && (d || u)
          ? (0, r.jsxs)('div', {
                className: K.guildProductBenefits,
                children: [
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: K.guildProductBenefitLabel,
                                    children: W.intl.string(W.t.hxawo6)
                                }),
                                (0, r.jsx)(O.Z, {
                                    guildId: i,
                                    productId: l.id
                                })
                            ]
                        }),
                    u &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                d && (0, r.jsx)('div', { className: K.divider }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: K.guildProductBenefitLabel,
                                    children: W.intl.string(W.t.gWBNen)
                                }),
                                (0, r.jsx)(S.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ea extends (i = s.PureComponent) {
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
            case H.PyE.PENDING:
                return (0, r.jsx)('span', {
                    className: K.statusTagGrey,
                    children: W.intl.string(W.t.y7F0RU)
                });
            case H.PyE.FAILED:
                return (0, r.jsx)('span', {
                    className: K.statusTagRed,
                    children: W.intl.string(W.t.Yo4ru7)
                });
            case H.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, r.jsx)('span', {
                        className: K.statusTagGreen,
                        children: W.intl.string(W.t.lYbZz8)
                    });
                return (0, r.jsx)('span', {
                    className: K.statusTagGreen,
                    children: W.intl.string(W.t.ZBb6ND)
                });
            case H.PyE.REVERSED:
                return (0, r.jsx)('span', {
                    className: K.statusTagRed,
                    children: W.intl.string(W.t.YQv9Li)
                });
            case H.PyE.CANCELED:
                return (0, r.jsx)('span', {
                    className: K.statusTagRed,
                    children: W.intl.string(W.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, r.jsx)('span', {
            className: K.price,
            children: (0, G.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, r.jsx)('li', {
            className: K.paymentDetail,
            children: (0, r.jsxs)('div', {
                className: K.paymentInfo,
                children: [
                    (0, r.jsx)('div', { children: W.intl.string(W.t['UQim+v']) }),
                    (0, r.jsx)(ei, {
                        value: e.id,
                        copyText: W.intl.string(W.t['Mdk9+P']),
                        copyFeedbackText: W.intl.string(W.t['7eIrAw'])
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: i, tax: l, amount: o, amountRefunded: c, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, r.jsxs)('div', {
            className: a()(K.paymentText, K.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, r.jsx)(F.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: K.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === Y.gg.APPLE_PARTNER
                      ? (0, r.jsx)(F.Z, {
                            paymentSource: new P.$z({}),
                            locale: t,
                            descriptionClassName: K.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, r.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !i && l > 0
                            ? (0, r.jsxs)(s.Fragment, {
                                  children: [
                                      (0, r.jsx)(en, {
                                          description: e.description,
                                          cost: (0, G.T4)(o - l, d)
                                      }),
                                      (0, r.jsx)(en, {
                                          description: W.intl.string(W.t.QgWXho),
                                          cost: (0, G.T4)(l, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(en, {
                            description: W.intl.string(W.t.txajQE),
                            cost: (0, G.T4)(o, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, r.jsx)(es, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        c > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(en, {
                                        description: W.intl.string(W.t['A+I0AA']),
                                        cost: (0, G.T4)(c, d)
                                    }),
                                    (0, r.jsx)(en, {
                                        description: W.intl.string(W.t.xER6Wl),
                                        cost: (0, G.T4)(o - c, d)
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
        return (0, r.jsx)(b.Z, { payment: e });
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
            i = this.validateRefundRules();
        if (i.includes('PAYMENT_GATEWAY') || i.includes('PAYMENT_STATUS') || i.includes('ALREADY_REFUNDED') || i.includes('SKU_STICKER_PACK') || i.includes('SUBSCRIPTION_TYPE') || i.includes('GUILD_PRODUCT')) return null;
        let l = 0 === i.length,
            a = J(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = i.includes('SKU_TYPE')
                ? W.intl.format(W.t['5lvoVV'], { supportURL: a })
                : l
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? W.intl.format(W.t.EPYteX, {
                            dateLimit: o,
                            supportURL: a
                        })
                      : n.isGift
                        ? W.intl.format(W.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: a
                          })
                        : W.intl.format(W.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: a
                          })
                  : n.isCollectible
                    ? W.intl.string(W.t.s9TZMz)
                    : n.isGift
                      ? W.intl.formatToPlainString(W.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? W.intl.formatToPlainString(W.t.dk7vyM, { dateLimit: o })
                        : W.intl.formatToPlainString(W.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            (0, r.jsxs)(s.Fragment, {
                children: [
                    (0, r.jsx)(p.H, {
                        className: K.paymentHeader,
                        children: W.intl.string(W.t['n/27pq'])
                    }),
                    (0, r.jsxs)('div', {
                        className: K.paymentText,
                        children: [(0, r.jsx)('div', { children: e }), this.renderRefundActions(i)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, t, n, i) {
        return (0, r.jsxs)(
            'div',
            {
                className: K.refundCriteria,
                children: [
                    (0, r.jsx)(p.H, {
                        className: K.refundSubHeader,
                        children: e
                    }),
                    (0, r.jsxs)('div', {
                        className: K.refundIconContainer,
                        children: [
                            (0, r.jsx)(t, {
                                className: K.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != n && (0, r.jsx)('div', { children: n })
                        ]
                    })
                ]
            },
            i
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: n } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let i = e.includes('PURCHASE_DATE') ? p.Dio : p.dz2;
        return (0, r.jsxs)('div', {
            className: K.refundActions,
            children: [
                (0, r.jsx)('div', {
                    className: K.refundRules,
                    children: !n.isCollectible && this.renderRefundCriteria(W.intl.string(W.t.H0RNz8), i, W.intl.formatToPlainString(W.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                }),
                (0, r.jsx)(p.eee, {
                    href: J(t),
                    children: W.intl.string(W.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: i, application: l, guild: a, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            m = i.sku,
            g = i.subscription,
            h = null != i.paymentSource && H.Uk1.has(i.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let n = [],
                s = null;
            if (g.type === H.NYc.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, V.uZ)(t) ? (n.push(V.ZP.getDisplayName(t, !1, h)), (s = (0, V.Wz)(z.GP[t].skuId))) : (n.push(''.concat(i > 1 ? ''.concat(i, 'x ') : '').concat(V.ZP.getDisplayName(t, !1, h))), null == s && (s = (0, V.Wz)(z.GP[t].skuId)));
                });
            else if (g.type === H.NYc.GUILD) {
                if (null != d) {
                    let e = d.interval === z.rV.YEAR ? W.t.V6UFQE : W.t['6oq129'];
                    (n.push(W.intl.format(e, { planName: d.name })), (s = d.skuId));
                }
            } else g.type === H.NYc.APPLICATION && (null != d && (s = d.skuId), null != l ? n.push(W.intl.formatToPlainString(W.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(W.intl.string(W.t['9czSYm'])));
            ((t = 0 !== n.length ? n.join(', ') : i.description),
                (e = (0, r.jsx)(_.Z, {
                    className: K.descriptionIcon,
                    guildClassName: K.guildDescriptionIcon,
                    game: l,
                    guild: a,
                    size: _.Z.Sizes.XSMALL,
                    skuId: null != s ? s : null == m ? void 0 : m.id
                })));
        } else if (null != m) {
            var f;
            if (((t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? W.intl.string(W.t.O7uLm5) : m.name), null != o)) {
                let t = (0, y.Zt)(o);
                e = (0, r.jsx)(A.Z, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: K.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null == (f = i.sku) ? void 0 : f.productLine) === H.POd.COLLECTIBLES
                        ? (0, r.jsx)(p.EOn, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: K.shopIcon
                          })
                        : (0, r.jsx)(_.Z, {
                              className: K.descriptionIcon,
                              guildClassName: K.guildDescriptionIcon,
                              game: l,
                              guild: a,
                              size: _.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            ((e = (0, r.jsx)(p.SrA, {
                size: 'md',
                color: 'currentColor',
                className: K.descriptionIcon
            })),
                (t = i.description));
        let b = (0, r.jsx)('div', {
                className: K.date,
                children: (0, M.vc)(c()(i.createdAt), 'MM/DD/YYYY')
            }),
            x = i.isGift
                ? (0, r.jsx)(p.ua7, {
                      text: W.intl.string(W.t.QddTpq),
                      children: (e) =>
                          (0, r.jsx)(
                              p.OgN,
                              X(
                                  {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: K.giftIcon
                                  },
                                  e
                              )
                          )
                  })
                : null;
        return n
            ? (0, r.jsxs)('div', {
                  className: K.description,
                  children: [
                      e,
                      (0, r.jsxs)('div', {
                          children: [t, b]
                      }),
                      x
                  ]
              })
            : (0, r.jsxs)(s.Fragment, {
                  children: [
                      b,
                      (0, r.jsxs)('div', {
                          className: K.description,
                          children: [e, (0, r.jsx)('div', { children: t }), x]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            i = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: K.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, r.jsx)(v.Z, {
                                className: K.warningBlock,
                                buttonPosition: v.E.RIGHT,
                                notice: W.intl.string(W.t['3AvulJ']),
                                ctaLabel: W.intl.string(W.t.zoztQE),
                                onClick: () => (0, h.Z)(J(n))
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, r.jsx)(el, {
                                guildId: i,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, r.jsx)(p.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, r.jsxs)('div', {
                className: K.expandedInfo,
                children: [
                    (0, r.jsx)(p.H, {
                        className: K.paymentHeader,
                        children: W.intl.string(W.t.nyzoFR)
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
            { expanded: i } = this.state;
        return (0, r.jsx)(d.mh, {
            id: e.id,
            children: (e) =>
                (0, r.jsxs)(
                    p.P3F,
                    Q(
                        X(
                            {
                                onClick: this.handleExpandInfo,
                                className: a()(i ? K.payment : K.hoverablePayment, t, { [K.compact]: n }),
                                focusProps: { offset: 4 }
                            },
                            e
                        ),
                        {
                            children: [
                                (0, r.jsxs)(x.Z, {
                                    className: K.summaryInfo,
                                    align: x.Z.Align.CENTER,
                                    children: [
                                        this.renderDescription(),
                                        (0, r.jsxs)('div', {
                                            className: K.amount,
                                            children: [this.renderStatus(), this.renderPrice()]
                                        }),
                                        (0, r.jsx)(L.Z, {
                                            className: K.expand,
                                            direction: i ? L.Z.Directions.UP : L.Z.Directions.DOWN
                                        })
                                    ]
                                }),
                                i ? this.renderExpandedSection() : null
                            ]
                        }
                    )
                )
        });
    }
    constructor(...e) {
        (super(...e),
            q(this, 'state', { expanded: !1 }),
            q(this, 'refundRules', [
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
                        return null == e.sku || e.sku.type !== H.epS.CONSUMABLE;
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
                        return !ee.includes(e.status);
                    }
                },
                {
                    rule: 'PAYMENT_GATEWAY',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !et.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, U.yE)(e.sku.flags, H.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null == (e = n.subscription) ? void 0 : e.type) !== H.NYc.GUILD && (null == (t = n.subscription) ? void 0 : t.type) !== H.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, U.yE)(e.sku.flags, u.l.GUILD_PRODUCT);
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
            q(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            }));
    }
}
function eo(e) {
    var t, n;
    let { payment: i, locale: l, compactMode: a, className: o } = e,
        c = null != i.sku && $.includes(i.sku.type),
        d = null != i.sku && c ? i.sku.applicationId : null,
        u = null == (t = i.sku) ? void 0 : t.applicationId,
        p = (null == (n = i.subscription) ? void 0 : n.type) === H.NYc.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: h,
            paymentSources: b
        } = (0, m.cj)([Z.Z, k.Z, f.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? k.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null != (t = f.Z.getApplication(null != d ? d : '')) ? t : null == (e = i.sku) ? void 0 : e.application,
                paymentSources: Z.Z.paymentSources
            };
        }),
        x = (0, m.e7)([f.Z], () => (null != u ? f.Z.getApplication(u) : null));
    s.useEffect(() => {
        p && null != u && (0, I.UM)(u);
    }, [u, p]);
    let _ = (0, m.e7)([D.Z], () => D.Z.getGuild(null == h ? void 0 : h.guildId)),
        E = c ? h : void 0,
        j = i.subscription,
        C = (0, m.e7)([w.Z], () => (null != j && j.type !== H.NYc.PREMIUM ? w.Z.get(j.items[0].planId) : null));
    return (0, r.jsx)(ea, {
        applicationStatistics: g,
        application: p ? x : E,
        guild: _,
        stickerPack: null,
        paymentSources: b,
        locale: l,
        compactMode: a,
        className: o,
        payment: i,
        plan: C
    });
}
q(ea, 'defaultProps', { compactMode: !1 });
