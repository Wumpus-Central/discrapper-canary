n.d(t, { Z: () => eo }), n(47120), n(653041), n(789020);
var i,
    s = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(913527),
    c = n.n(o),
    d = n(91192),
    u = n(314877),
    h = n(442837),
    m = n(481060),
    g = n(37234),
    x = n(782568),
    _ = n(812206),
    p = n(593061),
    E = n(600164),
    C = n(925329),
    N = n(267101),
    f = n(240864),
    I = n(942833),
    T = n(400916),
    S = n(916001),
    j = n(539290),
    v = n(336197),
    b = n(690221),
    A = n(219929),
    O = n(307643),
    R = n(378233),
    D = n(419922),
    P = n(46141),
    y = n(430824),
    Z = n(853872),
    L = n(509545),
    k = n(230307),
    B = n(259580),
    M = n(572004),
    V = n(55935),
    w = n(630388),
    U = n(74538),
    G = n(937615),
    F = n(244526),
    z = n(712358),
    Y = n(362786),
    H = n(981631),
    W = n(474936),
    K = n(231338),
    X = n(388032),
    q = n(594944);
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
let Q = (e) => 'https://'.concat(H.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    $ = [H.epS.DURABLE_PRIMARY, H.epS.DURABLE, H.epS.CONSUMABLE],
    ee = [H.PyE.FAILED, H.PyE.REVERSED, H.PyE.CANCELED],
    et = [K.gg.APPLE],
    en = (e) => {
        let { description: t, cost: n } = e;
        return (0, s.jsx)('li', {
            className: q.paymentDetail,
            children: (0, s.jsxs)(E.Z, {
                justify: E.Z.Justify.BETWEEN,
                children: [(0, s.jsx)('div', { children: t }), (0, s.jsx)('div', { children: n })]
            })
        });
    };
function ei(e) {
    let { value: t, copyText: n, copyFeedbackText: i } = e,
        [r, a] = l.useState(!1),
        [o, c] = l.useState(!1),
        d = () => {
            (0, M.JG)(t), c(!0), a(!0);
        };
    return (0, s.jsx)(m.ua7, {
        forceOpen: o,
        text: r ? i : n,
        children: (e) => {
            let { onMouseEnter: n, onMouseLeave: i, ...l } = e;
            return (0, s.jsx)(m.P3F, {
                ...l,
                onMouseEnter: () => {
                    r && a(!1), 'function' == typeof n && n();
                },
                onMouseLeave: () => {
                    c(!1), 'function' == typeof i && i();
                },
                onClick: d,
                children: (0, s.jsx)('div', {
                    className: q.copiableContainer,
                    children: t
                })
            });
        }
    });
}
let es = (e) => {
    let { description: t, detail: n } = e;
    return (0, s.jsx)('li', {
        className: q.guildProductDetail,
        children: (0, s.jsxs)(E.Z, {
            justify: E.Z.Justify.BETWEEN,
            children: [(0, s.jsx)('div', { children: t }), (0, s.jsx)('div', { children: n })]
        })
    });
};
function el(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, N.hO)(t, n, { requireCurrentGuild: !1 }),
        r = (0, I.C)(i),
        a = (0, h.e7)([y.Z], () => y.Z.getGuild(t)),
        o = (null == i ? void 0 : i.role_id) != null && (null == i ? void 0 : i.attachments_count) === 0 ? X.intl.string(X.t.H11qcX) : r,
        c = l.useCallback(async () => {
            (null == a ? void 0 : a.hasFeature(H.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, v.Z)(H.Z5c.GUILD_PRODUCT(t, n)) : await (0, v.Z)(H.Z5c.CHANNEL(t)), (0, g.xf)();
        }, [a, t, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != o &&
                (0, s.jsx)(es, {
                    description: X.intl.string(X.t.lXPbJS),
                    detail: o
                }),
            null != a &&
                (0, s.jsx)(es, {
                    description: X.intl.string(X.t.Wpn8z8),
                    detail: (0, s.jsx)(b.Z, {
                        onClick: c,
                        children: a.name
                    })
                })
        ]
    });
}
function er(e) {
    var t, n;
    let { guildId: i, guildProductListingId: l } = e,
        r = (0, N.hO)(i, l, { requireCurrentGuild: !1 }),
        a = (0, h.e7)([f.Z], () => f.Z.getGuildProductFetchState(l) === f.M.FETCHING),
        o = null == r ? void 0 : r.role_id,
        c = (0, h.e7)([y.Z], () => (null != o ? y.Z.getRole(i, o) : void 0), [i, o]),
        d = (null !== (n = null == r ? void 0 : null === (t = r.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0,
        u = null != c;
    return a
        ? (0, s.jsx)('div', {
              className: q.guildProductBenefits,
              children: (0, s.jsx)(m.$jN, {})
          })
        : null != r && (d || u)
          ? (0, s.jsxs)('div', {
                className: q.guildProductBenefits,
                children: [
                    d &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: q.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.hxawo6)
                                }),
                                (0, s.jsx)(T.Z, {
                                    guildId: i,
                                    productId: r.id
                                })
                            ]
                        }),
                    u &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                d && (0, s.jsx)('div', { className: q.divider }),
                                (0, s.jsx)(m.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: q.guildProductBenefitLabel,
                                    children: X.intl.string(X.t.gWBNen)
                                }),
                                (0, s.jsx)(S.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ea extends (i = l.PureComponent) {
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
        return e instanceof P.qo ? A.ZP.Types.PAYPAL : e instanceof P.dm ? A.ZP.getType(e.brand) : A.ZP.Types.UNKNOWN;
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
                return (0, s.jsx)('span', {
                    className: q.statusTagGrey,
                    children: X.intl.string(X.t.y7F0RU)
                });
            case H.PyE.FAILED:
                return (0, s.jsx)('span', {
                    className: q.statusTagRed,
                    children: X.intl.string(X.t.Yo4ru7)
                });
            case H.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, s.jsx)('span', {
                        className: q.statusTagGreen,
                        children: X.intl.string(X.t.lYbZz8)
                    });
                return (0, s.jsx)('span', {
                    className: q.statusTagGreen,
                    children: X.intl.string(X.t.ZBb6ND)
                });
            case H.PyE.REVERSED:
                return (0, s.jsx)('span', {
                    className: q.statusTagRed,
                    children: X.intl.string(X.t.YQv9Li)
                });
            case H.PyE.CANCELED:
                return (0, s.jsx)('span', {
                    className: q.statusTagRed,
                    children: X.intl.string(X.t.ttkBh4)
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, s.jsx)('span', {
            className: q.price,
            children: (0, G.T4)(t, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, s.jsx)('li', {
            className: q.paymentDetail,
            children: (0, s.jsxs)('div', {
                className: q.paymentInfo,
                children: [
                    (0, s.jsx)('div', { children: X.intl.string(X.t['UQim+v']) }),
                    (0, s.jsx)(ei, {
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
            { taxInclusive: i, tax: r, amount: o, amountRefunded: c, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, s.jsxs)('div', {
            className: a()(q.paymentText, q.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, s.jsx)(F.Z, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: q.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === K.gg.APPLE_PARTNER
                      ? (0, s.jsx)(F.Z, {
                            paymentSource: new P.$z({}),
                            locale: t,
                            descriptionClassName: q.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, s.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !i && r > 0
                            ? (0, s.jsxs)(l.Fragment, {
                                  children: [
                                      (0, s.jsx)(en, {
                                          description: e.description,
                                          cost: (0, G.T4)(o - r, d)
                                      }),
                                      (0, s.jsx)(en, {
                                          description: X.intl.string(X.t.QgWXho),
                                          cost: (0, G.T4)(r, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, s.jsx)(en, {
                            description: X.intl.string(X.t.txajQE),
                            cost: (0, G.T4)(o, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, s.jsx)(el, {
                                guildId: u,
                                guildProductListingId: e.sku.id
                            }),
                        c > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(en, {
                                        description: X.intl.string(X.t['A+I0AA']),
                                        cost: (0, G.T4)(c, d)
                                    }),
                                    (0, s.jsx)(en, {
                                        description: X.intl.string(X.t.xER6Wl),
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
        let r = 0 === i.length,
            a = Q(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = i.includes('SKU_TYPE')
                ? X.intl.format(X.t['5lvoVV'], { supportURL: a })
                : r
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? X.intl.format(X.t.EPYteX, {
                            dateLimit: o,
                            supportURL: a
                        })
                      : n.isGift
                        ? X.intl.format(X.t['16eP/P'], {
                              dateLimit: o,
                              supportURL: a
                          })
                        : X.intl.format(X.t['1LDI4O'], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: a
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
            this.isPremium && (0, z.U)() && (e = null),
            (0, s.jsxs)(l.Fragment, {
                children: [
                    (0, s.jsx)(m.H, {
                        className: q.paymentHeader,
                        children: X.intl.string(X.t['n/27pq'])
                    }),
                    (0, s.jsxs)('div', {
                        className: q.paymentText,
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
                className: q.refundCriteria,
                children: [
                    (0, s.jsx)(m.H, {
                        className: q.refundSubHeader,
                        children: e
                    }),
                    (0, s.jsxs)('div', {
                        className: q.refundIconContainer,
                        children: [
                            (0, s.jsx)(t, {
                                className: q.refundCriteriaIcon,
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
        let { locale: i, payment: l } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let r = e.includes('PURCHASE_DATE') ? m.Dio : m.dz2;
        if (!this.isPremium || !(0, z.U)())
            return (0, s.jsxs)('div', {
                className: q.refundActions,
                children: [
                    (0, s.jsx)('div', {
                        className: q.refundRules,
                        children: !l.isCollectible && this.renderRefundCriteria(X.intl.string(X.t.H0RNz8), r, X.intl.formatToPlainString(X.t['7dtXa2'], { daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, s.jsx)(m.eee, {
                        href: Q(i),
                        children: X.intl.string(X.t.re5nOD)
                    })
                ]
            });
        let a = (null !== (t = l.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [Y.d$.OTHER])[0],
            o = null != a || 0 !== e.length || l.isPurchasedExternally;
        return (0, s.jsxs)('div', {
            className: q.refundActions,
            children: [
                (0, s.jsx)(m.ua7, {
                    shouldShow: o,
                    text: (function (e) {
                        switch (e) {
                            case Y.d$.ALREADY_REFUNDED_PREMIUM:
                                return X.intl.string(X.t['GBu+VV']);
                            case Y.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return X.intl.string(X.t['7bNM5+']);
                            case Y.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return X.intl.string(X.t['2yOjur']);
                            default:
                                return X.intl.string(X.t.iFF3T0);
                        }
                    })(a),
                    children: (e) =>
                        (0, s.jsx)(m.zxk, {
                            ...e,
                            color: m.zxk.Colors.PRIMARY,
                            disabled: o,
                            onClick: () =>
                                (0, m.ZDy)(async () => {
                                    let { default: e } = await n.e('69473').then(n.bind(n, 436022));
                                    return (t) =>
                                        (0, s.jsx)(e, {
                                            payment: l,
                                            reportProblemUrl: Q(i),
                                            ...t
                                        });
                                }),
                            children: X.intl.string(X.t.qC9V9P)
                        })
                }),
                (0, s.jsx)(m.eee, {
                    href: Q(i),
                    children: X.intl.string(X.t.re5nOD)
                })
            ]
        });
    }
    renderDescription() {
        let e, t;
        let { compactMode: n, payment: i, application: r, guild: a, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            h = i.sku,
            g = i.subscription,
            x = null != i.paymentSource && H.Uk1.has(i.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let n = [],
                l = null;
            if (g.type === H.NYc.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, U.uZ)(t) ? (n.push(U.ZP.getDisplayName(t, !1, x)), (l = (0, U.Wz)(W.GP[t].skuId))) : (n.push(''.concat(i > 1 ? ''.concat(i, 'x ') : '').concat(U.ZP.getDisplayName(t, !1, x))), null == l && (l = (0, U.Wz)(W.GP[t].skuId)));
                });
            else if (g.type === H.NYc.GUILD) {
                if (null != d) {
                    let e = d.interval === W.rV.YEAR ? X.t.V6UFQE : X.t['6oq129'];
                    n.push(X.intl.format(e, { planName: d.name })), (l = d.skuId);
                }
            } else g.type === H.NYc.APPLICATION && (null != d && (l = d.skuId), null != r ? n.push(X.intl.formatToPlainString(X.t['0wL/VF'], { tier: null == h ? void 0 : h.name })) : n.push(X.intl.string(X.t['9czSYm'])));
            (t = 0 !== n.length ? n.join(', ') : i.description),
                (e = (0, s.jsx)(C.Z, {
                    className: q.descriptionIcon,
                    guildClassName: q.guildDescriptionIcon,
                    game: r,
                    guild: a,
                    size: C.Z.Sizes.XSMALL,
                    skuId: null != l ? l : null == h ? void 0 : h.id
                }));
        } else if (null != h) {
            var _;
            if (((t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? X.intl.string(X.t.O7uLm5) : h.name), null != o)) {
                let t = (0, R.Zt)(o);
                e = (0, s.jsx)(D.ZP, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: q.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (_ = i.sku) || void 0 === _ ? void 0 : _.productLine) === H.POd.COLLECTIBLES
                        ? (0, s.jsx)(m.EOn, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: q.shopIcon
                          })
                        : (0, s.jsx)(C.Z, {
                              className: q.descriptionIcon,
                              guildClassName: q.guildDescriptionIcon,
                              game: r,
                              guild: a,
                              size: C.Z.Sizes.XSMALL,
                              skuId: h.id
                          });
        } else
            (e = (0, s.jsx)(m.SrA, {
                size: 'md',
                color: 'currentColor',
                className: q.descriptionIcon
            })),
                (t = i.description);
        let p = (0, s.jsx)('div', {
                className: q.date,
                children: (0, V.vc)(c()(i.createdAt), 'MM/DD/YYYY')
            }),
            E = i.isGift
                ? (0, s.jsx)(m.ua7, {
                      text: X.intl.string(X.t.QddTpq),
                      children: (e) =>
                          (0, s.jsx)(m.OgN, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.giftIcon,
                              ...e
                          })
                  })
                : null;
        return n
            ? (0, s.jsxs)('div', {
                  className: q.description,
                  children: [
                      e,
                      (0, s.jsxs)('div', {
                          children: [t, p]
                      }),
                      E
                  ]
              })
            : (0, s.jsxs)(l.Fragment, {
                  children: [
                      p,
                      (0, s.jsxs)('div', {
                          className: q.description,
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
                      (0, s.jsx)('div', { className: q.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, s.jsx)(j.Z, {
                                className: q.warningBlock,
                                buttonPosition: j.E.RIGHT,
                                notice: X.intl.string(X.t['3AvulJ']),
                                ctaLabel: X.intl.string(X.t.zoztQE),
                                onClick: () => (0, x.Z)(Q(n))
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, s.jsx)(er, {
                                guildId: i,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, s.jsx)(m.P3F, {
            onClick: (e) => e.stopPropagation(),
            children: (0, s.jsxs)('div', {
                className: q.expandedInfo,
                children: [
                    (0, s.jsx)(m.H, {
                        className: q.paymentHeader,
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
        return (0, s.jsx)(d.mh, {
            id: e.id,
            children: (e) =>
                (0, s.jsxs)(m.P3F, {
                    onClick: this.handleExpandInfo,
                    className: a()(i ? q.payment : q.hoverablePayment, t, { [q.compact]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, s.jsxs)(E.Z, {
                            className: q.summaryInfo,
                            align: E.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                (0, s.jsxs)('div', {
                                    className: q.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }),
                                (0, s.jsx)(B.Z, {
                                    className: q.expand,
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
                        return null == e.sku || !(0, w.yE)(e.sku.flags, H.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (null === (e = n.subscription) || void 0 === e ? void 0 : e.type) !== H.NYc.GUILD && (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) !== H.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, w.yE)(e.sku.flags, u.l.GUILD_PRODUCT);
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
    let { payment: i, locale: r, compactMode: a, className: o } = e,
        c = null != i.sku && $.includes(i.sku.type),
        d = null != i.sku && c ? i.sku.applicationId : null,
        u = null === (t = i.sku) || void 0 === t ? void 0 : t.applicationId,
        m = (null === (n = i.subscription) || void 0 === n ? void 0 : n.type) === H.NYc.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: x,
            paymentSources: p
        } = (0, h.cj)([Z.Z, k.Z, _.Z], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? k.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (t = _.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = i.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: Z.Z.paymentSources
            };
        }),
        E = (0, h.e7)([_.Z], () => (null != u ? _.Z.getApplication(u) : null));
    l.useEffect(() => {
        m && null != u && (0, O.UM)(u);
    }, [u, m]);
    let C = (0, h.e7)([y.Z], () => y.Z.getGuild(null == x ? void 0 : x.guildId)),
        N = c ? x : void 0,
        f = i.subscription,
        I = (0, h.e7)([L.Z], () => (null != f && f.type !== H.NYc.PREMIUM ? L.Z.get(f.items[0].planId) : null));
    return (0, s.jsx)(ea, {
        applicationStatistics: g,
        application: m ? E : N,
        guild: C,
        stickerPack: null,
        paymentSources: p,
        locale: r,
        compactMode: a,
        className: o,
        payment: i,
        plan: I
    });
}
J(ea, 'defaultProps', { compactMode: !1 });
