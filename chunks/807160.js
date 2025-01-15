n.d(t, {
    Z: function () {
        return ed;
    }
}),
    n(47120),
    n(653041),
    n(789020);
var i,
    s,
    r,
    a = n(200651),
    l = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(913527),
    u = n.n(d),
    m = n(91192),
    g = n(314877),
    h = n(442837),
    p = n(481060),
    x = n(37234),
    f = n(782568),
    _ = n(812206),
    E = n(593061),
    C = n(600164),
    T = n(925329),
    S = n(267101),
    b = n(240864),
    I = n(942833),
    N = n(400916),
    v = n(916001),
    A = n(539290),
    j = n(336197),
    R = n(690221),
    O = n(219929),
    P = n(307643),
    y = n(378233),
    D = n(419922),
    B = n(46141),
    Z = n(430824),
    L = n(853872),
    M = n(509545),
    k = n(230307),
    w = n(259580),
    F = n(572004),
    U = n(55935),
    V = n(630388),
    G = n(74538),
    H = n(937615),
    Y = n(244526),
    W = n(712358),
    z = n(362786),
    K = n(981631),
    q = n(474936),
    Q = n(231338),
    X = n(388032),
    J = n(943857);
function $(e, t, n) {
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
let ee = (e) => 'https://'.concat(K.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    et = [K.epS.DURABLE_PRIMARY, K.epS.DURABLE, K.epS.CONSUMABLE];
((r = i || (i = {})).PURCHASE_DATE = 'PURCHASE_DATE'), (r.SKU_TYPE = 'SKU_TYPE'), (r.ALREADY_REFUNDED = 'ALREADY_REFUNDED'), (r.PAYMENT_STATUS = 'PAYMENT_STATUS'), (r.PAYMENT_GATEWAY = 'PAYMENT_GATEWAY'), (r.SKU_STICKER_PACK = 'SKU_STICKER_PACK'), (r.SUBSCRIPTION_TYPE = 'SUBSCRIPTION_TYPE'), (r.GUILD_PRODUCT = 'GUILD_PRODUCT'), (r.COLLECTIBLE = 'COLLECTIBLE');
let en = [K.PyE.FAILED, K.PyE.REVERSED, K.PyE.CANCELED],
    ei = [Q.gg.APPLE],
    es = (e) => {
        let { description: t, cost: n } = e;
        return (0, a.jsx)('li', {
            className: J.paymentDetail,
            children: (0, a.jsxs)(C.Z, {
                justify: C.Z.Justify.BETWEEN,
                children: [(0, a.jsx)('div', { children: t }), (0, a.jsx)('div', { children: n })]
            })
        });
    };
function er(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [s, r] = l.useState(!1),
        [o, c] = l.useState(!1),
        d = () => {
            (0, F.JG)(t), c(!0), r(!0);
        };
    return (0, a.jsx)(p.Tooltip, {
        forceOpen: o,
        text: s ? i : n,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i, ...l } = e;
            return (0, a.jsx)(p.Clickable, {
                ...l,
                onMouseEnter: () => {
                    s && r(!1), 'function' == typeof n && n();
                },
                onMouseLeave: () => {
                    c(!1), 'function' == typeof i && i();
                },
                onClick: d,
                children: (0, a.jsx)('div', {
                    className: J.copiableContainer,
                    children: t
                })
            });
        }
    });
}
let ea = (e) => {
    let { description: t, detail: n } = e;
    return (0, a.jsx)('li', {
        className: J.guildProductDetail,
        children: (0, a.jsxs)(C.Z, {
            justify: C.Z.Justify.BETWEEN,
            children: [(0, a.jsx)('div', { children: t }), (0, a.jsx)('div', { children: n })]
        })
    });
};
function el(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, S.hO)(t, n, { requireCurrentGuild: !1 }),
        s = (0, I.C)(i),
        r = (0, h.e7)([Z.Z], () => Z.Z.getGuild(t)),
        o = (null == i ? void 0 : i.role_id) != null && (null == i ? void 0 : i.attachments_count) === 0 ? X.intl.string(X.t.H11qcX) : s,
        c = l.useCallback(async () => {
            (null == r ? void 0 : r.hasFeature(K.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, j.Z)(K.Z5c.GUILD_PRODUCT(t, n)) : await (0, j.Z)(K.Z5c.CHANNEL(t)), (0, x.xf)();
        }, [r, t, n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != o &&
                (0, a.jsx)(ea, {
                    description: X.intl.string(X.t.lXPbJS),
                    detail: o
                }),
            null != r &&
                (0, a.jsx)(ea, {
                    description: X.intl.string(X.t.Wpn8z8),
                    detail: (0, a.jsx)(R.Z, {
                        onClick: c,
                        children: r.name
                    })
                })
        ]
    });
}
function eo(e) {
    var t, n;
    let { guildId: i, guildProductListingId: s } = e,
        r = (0, S.hO)(i, s, { requireCurrentGuild: !1 }),
        l = (0, h.e7)([b.Z], () => b.Z.getGuildProductFetchState(s) === b.M.FETCHING),
        o = null == r ? void 0 : r.role_id,
        c = (0, h.e7)([Z.Z], () => (null != o ? Z.Z.getRole(i, o) : void 0), [i, o]),
        d = (null !== (n = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        u = null != c;
    return l
        ? (0, a.jsx)('div', {
              className: J.guildProductBenefits,
              children: (0, a.jsx)(p.Spinner, {})
          })
        : null != r && (d || u)
          ? (0, a.jsxs)('div', {
                className: J.guildProductBenefits,
                children: [
                    d &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.hxawo6)
                                }),
                                (0, a.jsx)(N.Z, {
                                    guildId: i,
                                    productId: r.id
                                })
                            ]
                        }),
                    u &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                d && (0, a.jsx)('div', { className: J.divider }),
                                (0, a.jsx)(p.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.gWBNen)
                                }),
                                (0, a.jsx)(v.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ec extends (s = l.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return u()().diff(n, 'days');
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
    get typeString() {
        let {
            payment: { paymentSource: e }
        } = this.props;
        return e instanceof B.qo ? O.ZP.Types.PAYPAL : e instanceof B.dm ? O.ZP.getType(e.brand) : O.ZP.Types.UNKNOWN;
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
            case K.PyE.PENDING:
                return (0, a.jsx)('span', {
                    className: J.statusTagGrey,
                    children: X.intl.string(X.t.y7F0RU)
                });
            case K.PyE.FAILED:
                return (0, a.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.Yo4ru7)
                });
            case K.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, a.jsx)('span', {
                        className: J.statusTagGreen,
                        children: X.intl.string(X.t.lYbZz8)
                    });
                return (0, a.jsx)('span', {
                    className: J.statusTagGreen,
                    children: X.intl.string(X.t.ZBb6ND)
                });
            case K.PyE.REVERSED:
                return (0, a.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.YQv9Li)
                });
            case K.PyE.CANCELED:
                return (0, a.jsx)('span', {
                    className: J.statusTagRed,
                    children: X.intl.string(X.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, a.jsx)('span', {
            className: J.price,
            children: (0, H.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, a.jsx)('li', {
            className: J.paymentDetail,
            children: (0, a.jsxs)('div', {
                className: J.paymentInfo,
                children: [
                    (0, a.jsx)('div', { children: X.intl.string(X.t['UQim+v']) }),
                    (0, a.jsx)(er, {
                        value: e.id,
                        copyText: X.intl.string(X.t['Mdk9+P']),
                        copyFeedbackText: X.intl.string(X.t['7eIrAw'])
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: i, tax: s, amount: r, amountRefunded: o, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, a.jsxs)('div', {
            className: c()(J.paymentText, J.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, a.jsx)(Y.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: J.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === Q.gg.APPLE_PARTNER
                      ? (0, a.jsx)(Y.Z, {
                            paymentSource: new B.$z({}),
                            locale: t,
                            descriptionClassName: J.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, a.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !i && s > 0
                            ? (0, a.jsxs)(l.Fragment, {
                                  children: [
                                      (0, a.jsx)(es, {
                                          description: e.description,
                                          cost: (0, H.T4)(r - s, d)
                                      }),
                                      (0, a.jsx)(es, {
                                          description: X.intl.string(X.t.QgWXho),
                                          cost: (0, H.T4)(s, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, a.jsx)(es, {
                            description: X.intl.string(X.t.txajQE),
                            cost: (0, H.T4)(r, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, a.jsx)(el, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        o > 0 &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(es, {
                                        description: X.intl.string(X.t['A+I0AA']),
                                        cost: (0, H.T4)(o, d)
                                    }),
                                    (0, a.jsx)(es, {
                                        description: X.intl.string(X.t.xER6Wl),
                                        cost: (0, H.T4)(r - o, d)
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
        return (0, a.jsx)(E.Z, { payment: e });
    }
    renderRefundDetails() {
        let e;
        let { locale: t, payment: n } = this.props,
            i = this.validateRefundRules();
        if (i.includes('PAYMENT_GATEWAY') || i.includes('PAYMENT_STATUS') || i.includes('ALREADY_REFUNDED') || i.includes('SKU_STICKER_PACK') || i.includes('SUBSCRIPTION_TYPE') || i.includes('GUILD_PRODUCT')) return null;
        let s = 0 === i.length,
            r = ee(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = i.includes('SKU_TYPE')
                ? X.intl.format(X.t['5lvoVV'], { supportURL: r })
                : s
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? X.intl.format(X.t.EPYteX, {
                            dateLimit: o,
                            supportURL: r
                        })
                      : n.isGift
                        ? X.intl.format(X.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: r
                          })
                        : X.intl.format(X.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: r
                          })
                  : n.isCollectible
                    ? X.intl.string(X.t.s9TZMz)
                    : n.isGift
                      ? X.intl.formatToPlainString(X.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? X.intl.formatToPlainString(X.t.dk7vyM, { dateLimit: o })
                        : X.intl.formatToPlainString(X.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            this.isPremium && (0, W.U)() && (e = null),
            (0, a.jsxs)(l.Fragment, {
                children: [
                    (0, a.jsx)(p.H, {
                        className: J.paymentHeader,
                        children: X.intl.string(X.t['n/27pq'])
                    }),
                    (0, a.jsxs)('div', {
                        className: J.paymentText,
                        children: [(0, a.jsx)('div', { children: e }), this.renderRefundActions(i)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, t, n, i) {
        return (0, a.jsxs)(
            'div',
            {
                className: J.refundCriteria,
                children: [
                    (0, a.jsx)(p.H, {
                        className: J.refundSubHeader,
                        children: e
                    }),
                    (0, a.jsxs)('div', {
                        className: J.refundIconContainer,
                        children: [
                            (0, a.jsx)(t, {
                                className: J.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != n && (0, a.jsx)('div', { children: n })
                        ]
                    })
                ]
            },
            i
        );
    }
    renderRefundActions(e) {
        var t;
        let { locale: i, payment: s } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let r = e.includes('PURCHASE_DATE') ? p.XSmallIcon : p.CheckmarkLargeIcon;
        if (!this.isPremium || !(0, W.U)())
            return (0, a.jsxs)('div', {
                className: J.refundActions,
                children: [
                    (0, a.jsx)('div', {
                        className: J.refundRules,
                        children: !s.isCollectible && this.renderRefundCriteria(X.intl.string(X.t.H0RNz8), r, X.intl.formatToPlainString(X.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, a.jsx)(p.Anchor, {
                        href: ee(i),
                        children: X.intl.string(X.t.re5nOD)
                    })
                ]
            });
        let l = (null !== (t = s.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [z.d$.OTHER])[0],
            o = null != l || 0 !== e.length || s.isPurchasedExternally;
        return (0, a.jsxs)('div', {
            className: J.refundActions,
            children: [
                (0, a.jsx)(p.Tooltip, {
                    shouldShow: o,
                    text: (function (e) {
                        switch (e) {
                            case z.d$.ALREADY_REFUNDED_PREMIUM:
                                return X.intl.string(X.t['GBu+VV']);
                            case z.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return X.intl.string(X.t['7bNM5+']);
                            case z.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return X.intl.string(X.t['2yOjur']);
                            default:
                                return X.intl.string(X.t.iFF3T0);
                        }
                    })(l),
                    children: (e) =>
                        (0, a.jsx)(p.Button, {
                            ...e,
                            color: p.Button.Colors.PRIMARY,
                            disabled: o,
                            onClick: () =>
                                (0, p.openModalLazy)(async () => {
                                    let { default: e } = await n.e('69473').then(n.bind(n, 436022));
                                    return (t) =>
                                        (0, a.jsx)(e, {
                                            payment: s,
                                            reportProblemUrl: ee(i),
                                            ...t
                                        });
                                }),
                            children: X.intl.string(X.t.qC9V9P)
                        })
                }),
                (0, a.jsx)(p.Anchor, {
                    href: ee(i),
                    children: X.intl.string(X.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e, t;
        let { compactMode: n, payment: i, application: s, guild: r, stickerPack: o, plan: c } = this.props,
            { expanded: d } = this.state,
            m = i.sku,
            g = i.subscription,
            h = null != i.paymentSource && K.Uk1.has(i.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let n = [],
                l = null;
            if (g.type === K.NYc.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, G.uZ)(t) ? (n.push(G.ZP.getDisplayName(t, !1, h)), (l = (0, G.Wz)(q.GP[t].skuId))) : (n.push(''.concat(i > 1 ? ''.concat(i, 'x ') : '').concat(G.ZP.getDisplayName(t, !1, h))), null == l && (l = (0, G.Wz)(q.GP[t].skuId)));
                });
            else if (g.type === K.NYc.GUILD) {
                if (null != c) {
                    let e = c.interval === q.rV.YEAR ? X.t.V6UFQE : X.t['6oq129'];
                    n.push(X.intl.format(e, { planName: c.name })), (l = c.skuId);
                }
            } else g.type === K.NYc.APPLICATION && (null != c && (l = c.skuId), null != s ? n.push(X.intl.formatToPlainString(X.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(X.intl.string(X.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : i.description),
                (e = (0, a.jsx)(T.Z, {
                    className: J.descriptionIcon,
                    guildClassName: J.guildDescriptionIcon,
                    game: s,
                    guild: r,
                    size: T.Z.Sizes.XSMALL,
                    skuId: null != l ? l : null == m ? void 0 : m.id
                }));
        } else if (null != m) {
            var x;
            if (((t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? X.intl.string(X.t.O7uLm5) : m.name), null != o)) {
                let t = (0, y.Zt)(o);
                e = (0, a.jsx)(D.ZP, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: J.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (x = i.sku) || void 0 === x ? void 0 : x.productLine) === K.POd.COLLECTIBLES
                        ? (0, a.jsx)(p.ShopIcon, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: J.shopIcon
                          })
                        : (0, a.jsx)(T.Z, {
                              className: J.descriptionIcon,
                              guildClassName: J.guildDescriptionIcon,
                              game: s,
                              guild: r,
                              size: T.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            (e = (0, a.jsx)(p.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: J.descriptionIcon
            })),
                (t = i.description);
        let f = (0, a.jsx)('div', {
                className: J.date,
                children: (0, U.vc)(u()(i.createdAt), 'MM/DD/YYYY')
            }),
            _ = i.isGift
                ? (0, a.jsx)(p.Tooltip, {
                      text: X.intl.string(X.t.QddTpq),
                      children: (e) =>
                          (0, a.jsx)(p.GiftIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: J.giftIcon,
                              ...e
                          })
                  })
                : null;
        return n
            ? (0, a.jsxs)('div', {
                  className: J.description,
                  children: [
                      e,
                      (0, a.jsxs)('div', {
                          children: [t, f]
                      }),
                      _
                  ]
              })
            : (0, a.jsxs)(l.Fragment, {
                  children: [
                      f,
                      (0, a.jsxs)('div', {
                          className: J.description,
                          children: [e, (0, a.jsx)('div', { children: t }), _]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            i = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)('div', { className: J.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, a.jsx)(A.Z, {
                                className: J.warningBlock,
                                buttonPosition: A.E.RIGHT,
                                notice: X.intl.string(X.t['3AvulJ']),
                                ctaLabel: X.intl.string(X.t.zoztQE),
                                onClick: () => (0, f.Z)(ee(n))
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, a.jsx)(eo, {
                                guildId: i,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, a.jsx)(p.Clickable, {
            onClick: (e) => e.stopPropagation(),
            children: (0, a.jsxs)('div', {
                className: J.expandedInfo,
                children: [
                    (0, a.jsx)(p.H, {
                        className: J.paymentHeader,
                        children: X.intl.string(X.t.nyzoFR)
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
        return (0, a.jsx)(m.mh, {
            id: e.id,
            children: (e) =>
                (0, a.jsxs)(p.Clickable, {
                    onClick: this.handleExpandInfo,
                    className: c()(i ? J.payment : J.hoverablePayment, t, { [J.compact]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, a.jsxs)(C.Z, {
                            className: J.summaryInfo,
                            align: C.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                (0, a.jsxs)('div', {
                                    className: J.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }),
                                (0, a.jsx)(w.Z, {
                                    className: J.expand,
                                    direction: i ? w.Z.Directions.UP : w.Z.Directions.DOWN
                                })
                            ]
                        }),
                        i ? this.renderExpandedSection() : null
                    ]
                })
        });
    }
    constructor(...e) {
        super(...e),
            $(this, 'state', { expanded: !1 }),
            $(this, 'refundRules', [
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
                        return null == e.sku || e.sku.type !== K.epS.CONSUMABLE;
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
                        return null == e.paymentGateway || !ei.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, V.yE)(e.sku.flags, K.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== K.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== K.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, V.yE)(e.sku.flags, g.l.GUILD_PRODUCT);
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
            $(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function ed(e) {
    var t, n;
    let { payment: i, locale: s, compactMode: r, className: o } = e,
        c = null != i.sku && et.includes(i.sku.type),
        d = null != i.sku && c ? i.sku.applicationId : null,
        u = null === (t = i.sku) || void 0 === t ? void 0 : t.applicationId,
        m = (null === (n = i.subscription) || void 0 === n ? void 0 : n.type) === K.NYc.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: p,
            paymentSources: x
        } = (0, h.cj)([L.Z, k.Z, _.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? k.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (t = _.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = i.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: L.Z.paymentSources
            };
        }),
        f = (0, h.e7)([_.Z], () => (null != u ? _.Z.getApplication(u) : null));
    l.useEffect(() => {
        m && null != u && (0, P.UM)(u);
    }, [u, m]);
    let E = (0, h.e7)([Z.Z], () => Z.Z.getGuild(null == p ? void 0 : p.guildId)),
        C = c ? p : void 0,
        T = i.subscription,
        S = (0, h.e7)([M.Z], () => (null != T && T.type !== K.NYc.PREMIUM ? M.Z.get(T.items[0].planId) : null));
    return (0, a.jsx)(ec, {
        applicationStatistics: g,
        application: m ? f : C,
        guild: E,
        stickerPack: null,
        paymentSources: x,
        locale: s,
        compactMode: r,
        className: o,
        payment: i,
        plan: S
    });
}
$(ec, 'defaultProps', { compactMode: !1 });
