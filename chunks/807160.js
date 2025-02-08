n.d(t, { Z: () => eo }), n(47120), n(653041), n(789020);
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    c = n.n(o),
    d = n(91192),
    u = n(314877),
    m = n(442837),
    g = n(481060),
    h = n(37234),
    x = n(782568),
    _ = n(812206),
    p = n(593061),
    E = n(600164),
    C = n(925329),
    f = n(267101),
    T = n(240864),
    N = n(942833),
    I = n(400916),
    S = n(916001),
    b = n(539290),
    v = n(336197),
    j = n(690221),
    A = n(219929),
    O = n(307643),
    R = n(378233),
    P = n(419922),
    D = n(46141),
    y = n(430824),
    Z = n(853872),
    k = n(509545),
    L = n(230307),
    B = n(259580),
    M = n(572004),
    w = n(55935),
    V = n(630388),
    U = n(74538),
    G = n(937615),
    F = n(244526),
    H = n(712358),
    z = n(362786),
    Y = n(981631),
    W = n(474936),
    K = n(231338),
    q = n(388032),
    X = n(943857);
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
let Q = (e) => 'https://'.concat(Y.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    $ = [Y.epS.DURABLE_PRIMARY, Y.epS.DURABLE, Y.epS.CONSUMABLE],
    ee = [Y.PyE.FAILED, Y.PyE.REVERSED, Y.PyE.CANCELED],
    et = [K.gg.APPLE],
    en = (e) => {
        let { description: t, cost: n } = e;
        return (0, s.jsx)('li', {
            className: X.paymentDetail,
            children: (0, s.jsxs)(E.Z, {
                justify: E.Z.Justify.BETWEEN,
                children: [(0, s.jsx)('div', { children: t }), (0, s.jsx)('div', { children: n })]
            })
        });
    };
function ei(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [l, a] = r.useState(!1),
        [o, c] = r.useState(!1),
        d = () => {
            (0, M.JG)(t), c(!0), a(!0);
        };
    return (0, s.jsx)(g.ua7, {
        forceOpen: o,
        text: l ? i : n,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i, ...r } = e;
            return (0, s.jsx)(g.P3F, {
                ...r,
                onMouseEnter: () => {
                    l && a(!1), 'function' == typeof n && n();
                },
                onMouseLeave: () => {
                    c(!1), 'function' == typeof i && i();
                },
                onClick: d,
                children: (0, s.jsx)('div', {
                    className: X.copiableContainer,
                    children: t
                })
            });
        }
    });
}
let es = (e) => {
    let { description: t, detail: n } = e;
    return (0, s.jsx)('li', {
        className: X.guildProductDetail,
        children: (0, s.jsxs)(E.Z, {
            justify: E.Z.Justify.BETWEEN,
            children: [(0, s.jsx)('div', { children: t }), (0, s.jsx)('div', { children: n })]
        })
    });
};
function er(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, f.hO)(t, n, { requireCurrentGuild: !1 }),
        l = (0, N.C)(i),
        a = (0, m.e7)([y.Z], () => y.Z.getGuild(t)),
        o = (null == i ? void 0 : i.role_id) != null && (null == i ? void 0 : i.attachments_count) === 0 ? q.intl.string(q.t.H11qcX) : l,
        c = r.useCallback(async () => {
            (null == a ? void 0 : a.hasFeature(Y.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, v.Z)(Y.Z5c.GUILD_PRODUCT(t, n)) : await (0, v.Z)(Y.Z5c.CHANNEL(t)), (0, h.xf)();
        }, [a, t, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != o &&
                (0, s.jsx)(es, {
                    description: q.intl.string(q.t.lXPbJS),
                    detail: o
                }),
            null != a &&
                (0, s.jsx)(es, {
                    description: q.intl.string(q.t.Wpn8z8),
                    detail: (0, s.jsx)(j.Z, {
                        onClick: c,
                        children: a.name
                    })
                })
        ]
    });
}
function el(e) {
    var t, n;
    let { guildId: i, guildProductListingId: r } = e,
        l = (0, f.hO)(i, r, { requireCurrentGuild: !1 }),
        a = (0, m.e7)([T.Z], () => T.Z.getGuildProductFetchState(r) === T.M.FETCHING),
        o = null == l ? void 0 : l.role_id,
        c = (0, m.e7)([y.Z], () => (null != o ? y.Z.getRole(i, o) : void 0), [i, o]),
        d = (null !== (n = null == l ? void 0 : null === (t = l.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        u = null != c;
    return a
        ? (0, s.jsx)('div', {
              className: X.guildProductBenefits,
              children: (0, s.jsx)(g.$jN, {})
          })
        : null != l && (d || u)
          ? (0, s.jsxs)('div', {
                className: X.guildProductBenefits,
                children: [
                    d &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: X.guildProductBenefitLabel,
                                    children: q.intl.string(q.t.hxawo6)
                                }),
                                (0, s.jsx)(I.Z, {
                                    guildId: i,
                                    productId: l.id
                                })
                            ]
                        }),
                    u &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                d && (0, s.jsx)('div', { className: X.divider }),
                                (0, s.jsx)(g.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: X.guildProductBenefitLabel,
                                    children: q.intl.string(q.t.gWBNen)
                                }),
                                (0, s.jsx)(S.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ea extends (i = r.PureComponent) {
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
        return e instanceof D.qo ? A.ZP.Types.PAYPAL : e instanceof D.dm ? A.ZP.getType(e.brand) : A.ZP.Types.UNKNOWN;
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
                return (0, s.jsx)('span', {
                    className: X.statusTagGrey,
                    children: q.intl.string(q.t.y7F0RU)
                });
            case Y.PyE.FAILED:
                return (0, s.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.intl.string(q.t.Yo4ru7)
                });
            case Y.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, s.jsx)('span', {
                        className: X.statusTagGreen,
                        children: q.intl.string(q.t.lYbZz8)
                    });
                return (0, s.jsx)('span', {
                    className: X.statusTagGreen,
                    children: q.intl.string(q.t.ZBb6ND)
                });
            case Y.PyE.REVERSED:
                return (0, s.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.intl.string(q.t.YQv9Li)
                });
            case Y.PyE.CANCELED:
                return (0, s.jsx)('span', {
                    className: X.statusTagRed,
                    children: q.intl.string(q.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, s.jsx)('span', {
            className: X.price,
            children: (0, G.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, s.jsx)('li', {
            className: X.paymentDetail,
            children: (0, s.jsxs)('div', {
                className: X.paymentInfo,
                children: [
                    (0, s.jsx)('div', { children: q.intl.string(q.t['UQim+v']) }),
                    (0, s.jsx)(ei, {
                        value: e.id,
                        copyText: q.intl.string(q.t['Mdk9+P']),
                        copyFeedbackText: q.intl.string(q.t['7eIrAw'])
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: i, tax: l, amount: o, amountRefunded: c, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, s.jsxs)('div', {
            className: a()(X.paymentText, X.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, s.jsx)(F.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: X.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === K.gg.APPLE_PARTNER
                      ? (0, s.jsx)(F.Z, {
                            paymentSource: new D.$z({}),
                            locale: t,
                            descriptionClassName: X.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, s.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !i && l > 0
                            ? (0, s.jsxs)(r.Fragment, {
                                  children: [
                                      (0, s.jsx)(en, {
                                          description: e.description,
                                          cost: (0, G.T4)(o - l, d)
                                      }),
                                      (0, s.jsx)(en, {
                                          description: q.intl.string(q.t.QgWXho),
                                          cost: (0, G.T4)(l, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, s.jsx)(en, {
                            description: q.intl.string(q.t.txajQE),
                            cost: (0, G.T4)(o, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, s.jsx)(er, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        c > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(en, {
                                        description: q.intl.string(q.t['A+I0AA']),
                                        cost: (0, G.T4)(c, d)
                                    }),
                                    (0, s.jsx)(en, {
                                        description: q.intl.string(q.t.xER6Wl),
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
        return (0, s.jsx)(p.Z, { payment: e });
    }
    renderRefundDetails() {
        let e;
        let { locale: t, payment: n } = this.props,
            i = this.validateRefundRules();
        if (i.includes('PAYMENT_GATEWAY') || i.includes('PAYMENT_STATUS') || i.includes('ALREADY_REFUNDED') || i.includes('SKU_STICKER_PACK') || i.includes('SUBSCRIPTION_TYPE') || i.includes('GUILD_PRODUCT')) return null;
        let l = 0 === i.length,
            a = Q(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = i.includes('SKU_TYPE')
                ? q.intl.format(q.t['5lvoVV'], { supportURL: a })
                : l
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? q.intl.format(q.t.EPYteX, {
                            dateLimit: o,
                            supportURL: a
                        })
                      : n.isGift
                        ? q.intl.format(q.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: a
                          })
                        : q.intl.format(q.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: a
                          })
                  : n.isCollectible
                    ? q.intl.string(q.t.s9TZMz)
                    : n.isGift
                      ? q.intl.formatToPlainString(q.t.owlOWV, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? q.intl.formatToPlainString(q.t.dk7vyM, { dateLimit: o })
                        : q.intl.formatToPlainString(q.t.s4Kk0N, {
                              dateLimit: o,
                              playtimeLimit: 2
                          })),
            this.isPremium && (0, H.U)() && (e = null),
            (0, s.jsxs)(r.Fragment, {
                children: [
                    (0, s.jsx)(g.H, {
                        className: X.paymentHeader,
                        children: q.intl.string(q.t['n/27pq'])
                    }),
                    (0, s.jsxs)('div', {
                        className: X.paymentText,
                        children: [(0, s.jsx)('div', { children: e }), this.renderRefundActions(i)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, t, n, i) {
        return (0, s.jsxs)(
            'div',
            {
                className: X.refundCriteria,
                children: [
                    (0, s.jsx)(g.H, {
                        className: X.refundSubHeader,
                        children: e
                    }),
                    (0, s.jsxs)('div', {
                        className: X.refundIconContainer,
                        children: [
                            (0, s.jsx)(t, {
                                className: X.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != n && (0, s.jsx)('div', { children: n })
                        ]
                    })
                ]
            },
            i
        );
    }
    renderRefundActions(e) {
        var t;
        let { locale: i, payment: r } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let l = e.includes('PURCHASE_DATE') ? g.Dio : g.dz2;
        if (!this.isPremium || !(0, H.U)())
            return (0, s.jsxs)('div', {
                className: X.refundActions,
                children: [
                    (0, s.jsx)('div', {
                        className: X.refundRules,
                        children: !r.isCollectible && this.renderRefundCriteria(q.intl.string(q.t.H0RNz8), l, q.intl.formatToPlainString(q.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, s.jsx)(g.eee, {
                        href: Q(i),
                        children: q.intl.string(q.t.re5nOD)
                    })
                ]
            });
        let a = (null !== (t = r.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [z.d$.OTHER])[0],
            o = null != a || 0 !== e.length || r.isPurchasedExternally;
        return (0, s.jsxs)('div', {
            className: X.refundActions,
            children: [
                (0, s.jsx)(g.ua7, {
                    shouldShow: o,
                    text: (function (e) {
                        switch (e) {
                            case z.d$.ALREADY_REFUNDED_PREMIUM:
                                return q.intl.string(q.t['GBu+VV']);
                            case z.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return q.intl.string(q.t['7bNM5+']);
                            case z.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return q.intl.string(q.t['2yOjur']);
                            default:
                                return q.intl.string(q.t.iFF3T0);
                        }
                    })(a),
                    children: (e) =>
                        (0, s.jsx)(g.zxk, {
                            ...e,
                            color: g.zxk.Colors.PRIMARY,
                            disabled: o,
                            onClick: () =>
                                (0, g.ZDy)(async () => {
                                    let { default: e } = await n.e('69473').then(n.bind(n, 436022));
                                    return (t) =>
                                        (0, s.jsx)(e, {
                                            payment: r,
                                            reportProblemUrl: Q(i),
                                            ...t
                                        });
                                }),
                            children: q.intl.string(q.t.qC9V9P)
                        })
                }),
                (0, s.jsx)(g.eee, {
                    href: Q(i),
                    children: q.intl.string(q.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e, t;
        let { compactMode: n, payment: i, application: l, guild: a, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            m = i.sku,
            h = i.subscription,
            x = null != i.paymentSource && Y.Uk1.has(i.paymentSource.type);
        if (null != h && 0 !== h.items.length) {
            let n = [],
                r = null;
            if (h.type === Y.NYc.PREMIUM)
                h.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, U.uZ)(t) ? (n.push(U.ZP.getDisplayName(t, !1, x)), (r = (0, U.Wz)(W.GP[t].skuId))) : (n.push(''.concat(i > 1 ? ''.concat(i, 'x ') : '').concat(U.ZP.getDisplayName(t, !1, x))), null == r && (r = (0, U.Wz)(W.GP[t].skuId)));
                });
            else if (h.type === Y.NYc.GUILD) {
                if (null != d) {
                    let e = d.interval === W.rV.YEAR ? q.t.V6UFQE : q.t['6oq129'];
                    n.push(q.intl.format(e, { planName: d.name })), (r = d.skuId);
                }
            } else h.type === Y.NYc.APPLICATION && (null != d && (r = d.skuId), null != l ? n.push(q.intl.formatToPlainString(q.t['0wL/VF'], { tier: null == m ? void 0 : m.name })) : n.push(q.intl.string(q.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : i.description),
                (e = (0, s.jsx)(C.Z, {
                    className: X.descriptionIcon,
                    guildClassName: X.guildDescriptionIcon,
                    game: l,
                    guild: a,
                    size: C.Z.Sizes.XSMALL,
                    skuId: null != r ? r : null == m ? void 0 : m.id
                }));
        } else if (null != m) {
            var _;
            if (((t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? q.intl.string(q.t.O7uLm5) : m.name), null != o)) {
                let t = (0, R.Zt)(o);
                e = (0, s.jsx)(P.ZP, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: X.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (_ = i.sku) || void 0 === _ ? void 0 : _.productLine) === Y.POd.COLLECTIBLES
                        ? (0, s.jsx)(g.EOn, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: X.shopIcon
                          })
                        : (0, s.jsx)(C.Z, {
                              className: X.descriptionIcon,
                              guildClassName: X.guildDescriptionIcon,
                              game: l,
                              guild: a,
                              size: C.Z.Sizes.XSMALL,
                              skuId: m.id
                          });
        } else
            (e = (0, s.jsx)(g.SrA, {
                size: 'md',
                color: 'currentColor',
                className: X.descriptionIcon
            })),
                (t = i.description);
        let p = (0, s.jsx)('div', {
                className: X.date,
                children: (0, w.vc)(c()(i.createdAt), 'MM/DD/YYYY')
            }),
            E = i.isGift
                ? (0, s.jsx)(g.ua7, {
                      text: q.intl.string(q.t.QddTpq),
                      children: (e) =>
                          (0, s.jsx)(g.OgN, {
                              size: 'md',
                              color: 'currentColor',
                              className: X.giftIcon,
                              ...e
                          })
                  })
                : null;
        return n
            ? (0, s.jsxs)('div', {
                  className: X.description,
                  children: [
                      e,
                      (0, s.jsxs)('div', {
                          children: [t, p]
                      }),
                      E
                  ]
              })
            : (0, s.jsxs)(r.Fragment, {
                  children: [
                      p,
                      (0, s.jsxs)('div', {
                          className: X.description,
                          children: [e, (0, s.jsx)('div', { children: t }), E]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            i = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)('div', { className: X.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, s.jsx)(b.Z, {
                                className: X.warningBlock,
                                buttonPosition: b.E.RIGHT,
                                notice: q.intl.string(q.t['3AvulJ']),
                                ctaLabel: q.intl.string(q.t.zoztQE),
                                onClick: () => (0, x.Z)(Q(n))
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, s.jsx)(el, {
                                guildId: i,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, s.jsx)(g.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, s.jsxs)('div', {
                className: X.expandedInfo,
                children: [
                    (0, s.jsx)(g.H, {
                        className: X.paymentHeader,
                        children: q.intl.string(q.t.nyzoFR)
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
        return (0, s.jsx)(d.mh, {
            id: e.id,
            children: (e) =>
                (0, s.jsxs)(g.P3F, {
                    onClick: this.handleExpandInfo,
                    className: a()(i ? X.payment : X.hoverablePayment, t, { [X.compact]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, s.jsxs)(E.Z, {
                            className: X.summaryInfo,
                            align: E.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                (0, s.jsxs)('div', {
                                    className: X.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }),
                                (0, s.jsx)(B.Z, {
                                    className: X.expand,
                                    direction: i ? B.Z.Directions.UP : B.Z.Directions.DOWN
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
                        return null == e.sku || e.sku.type !== Y.epS.CONSUMABLE;
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
                        return null == e.sku || !(0, V.yE)(e.sku.flags, Y.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== Y.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== Y.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, V.yE)(e.sku.flags, u.l.GUILD_PRODUCT);
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
function eo(e) {
    var t, n;
    let { payment: i, locale: l, compactMode: a, className: o } = e,
        c = null != i.sku && $.includes(i.sku.type),
        d = null != i.sku && c ? i.sku.applicationId : null,
        u = null === (t = i.sku) || void 0 === t ? void 0 : t.applicationId,
        g = (null === (n = i.subscription) || void 0 === n ? void 0 : n.type) === Y.NYc.APPLICATION,
        {
            applicationStatistics: h,
            gameApplication: x,
            paymentSources: p
        } = (0, m.cj)([Z.Z, L.Z, _.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? L.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (t = _.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = i.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: Z.Z.paymentSources
            };
        }),
        E = (0, m.e7)([_.Z], () => (null != u ? _.Z.getApplication(u) : null));
    r.useEffect(() => {
        g && null != u && (0, O.UM)(u);
    }, [u, g]);
    let C = (0, m.e7)([y.Z], () => y.Z.getGuild(null == x ? void 0 : x.guildId)),
        f = c ? x : void 0,
        T = i.subscription,
        N = (0, m.e7)([k.Z], () => (null != T && T.type !== Y.NYc.PREMIUM ? k.Z.get(T.items[0].planId) : null));
    return (0, s.jsx)(ea, {
        applicationStatistics: h,
        application: g ? E : f,
        guild: C,
        stickerPack: null,
        paymentSources: p,
        locale: l,
        compactMode: a,
        className: o,
        payment: i,
        plan: N
    });
}
J(ea, 'defaultProps', { compactMode: !1 });
