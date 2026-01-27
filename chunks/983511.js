n.d(t, {
    default: () => M,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(793574),
    p = n(688810),
    m = n(531260),
    g = n(235986),
    A = n(543767),
    f = n(253390),
    h = n(735164),
    b = n(683433),
    E = n(692440),
    x = n(178368),
    O = n(97352),
    C = n(166403),
    I = n(473145),
    T = n(927578),
    S = n(580630),
    j = n(802790),
    v = n(788868),
    N = n(818348),
    y = n(985018),
    P = n(397415);

function R(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: i,
            onNext: l,
            onClose: s,
            transitionState: o,
        } = e,
        c = y.intl.format(y.t.otHdfR, {
            endDate: t.currentPeriodEnd,
        });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = y.intl.format(y.t.HbpFLg, {
              paymentGatewayName: N.qm[t.paymentGateway],
              subscriptionManagementLink: (0, T.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = y.intl.format(y.t.Hzqe6y, {
                expirationDate: n.endsAt.toDate(),
            }))
          : i &&
            (c = y.intl.format(y.t.gXSnul, {
                endDate: t.currentPeriodEnd,
            }));
    let d = i ? y.intl.string(y.t.iIoSd6) : y.intl.string(y.t.Skzv0u),
        u = t.isPurchasedExternally
            ? []
            : [
                  {
                      variant: "secondary",
                      text: y.intl.string(y.t["ETE/oC"]),
                      onClick: s,
                  },
                  {
                      variant: "primary",
                      text: y.intl.string(y.t.PDTjLN),
                      onClick: l,
                  },
              ];
    return (0, r.jsx)(a.Modal, {
        transitionState: o,
        onClose: s,
        size: "sm",
        title: d,
        actions: u,
        children: (0, r.jsxs)("div", {
            className: P.rf,
            children: [
                (0, r.jsx)("div", {
                    className: P.OC,
                }),
                (0, r.jsx)("div", {
                    children: c,
                }),
            ],
        }),
    });
}
async function D(e, t, n, r) {
    let i,
        l,
        a =
            null != r
                ? r
                : ((i = Object.values(x.A.boostSlots)),
                  null !=
                  (l = s().sortBy(
                      i.filter((e) => !(0, I.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, T.aE)(e, t);
    await (0, u.HJ)(a),
        await (0, d.nV)(
            e,
            {
                items: o,
            },
            {
                amount: 0,
                currency: e.currency,
            },
            (0, T.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}

function w(e) {
    var t, n, l;
    let { premiumSubscription: s, guildBoostSlotId: a, fractionalPremiumInfo: d, onBack: u, onNext: m, onClose: x } = e,
        [C, I] = i.useState(!1),
        [N, R] = i.useState(null),
        [w, L] = i.useMemo(() => {
            try {
                return [(0, f.v)(s, -1), !1];
            } catch (e) {
                return [[], !0];
            }
        }, [s]),
        M = i.useRef(x);
    i.useEffect(() => {
        M.current = x;
    }),
        i.useEffect(() => {
            L && M.current();
        }, [L]);
    let { premiumSubscriptionPlan: U, premiumGuildPlan: G } = (0, o.cf)([O.A], () => {
            let e = O.A.get(s.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? O.A.getForSkuAndInterval((0, T.mH)(v.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: k } = (0, p.Ay)(),
        [V] = (0, A.Kq)({
            subscriptionId: s.id,
            renewal: !0,
            currency: s.currency,
            paymentSourceId: s.paymentSourceId,
            analyticsLocations: k,
            analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        H = null != G ? (0, T.Om)(s, null != (t = null == (n = w[0]) ? void 0 : n.quantity) ? t : 0, G.id) : null,
        [B] = (0, A.Kq)({
            subscriptionId: s.id,
            items: H,
            renewal: !0,
            analyticsLocations: k,
            analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == B || null == U || null == G || null == V) return (0, r.jsx)(c.y$y, {});
    let F =
            (s.items.some((e) => {
                let { planId: t } = e;
                return !v.pW.has(t);
            }) &&
                null == s.renewalMutations) ||
            (null == (l = s.renewalMutations)
                ? void 0
                : l.items.find((e) => {
                      let { planId: t } = e;
                      return !v.pW.has(t);
                  })) != null,
        Y = w.some((e) => {
            let { planId: t } = e;
            return v.pW.has(t);
        }),
        W = F || Y ? B.total - V.total : -V.total,
        { interval: z, intervalCount: K } = U,
        Z = y.intl.format(y.t["0W23cu"], {
            endDate: B.subscriptionPeriodStart,
        });
    return (
        s.isPausedForFractionalPremium &&
            d.fetched &&
            (Z = y.intl.format(y.t.eb0xgS, {
                expirationDate: d.endsAt.toDate(),
            })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(j.A, {
                    "data-migration-pending": !0,
                    onClose: x,
                }),
                (0, r.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: P.rf,
                    children: [
                        null !== N &&
                            (0, r.jsx)("div", {
                                className: P.z3,
                                children: (0, r.jsx)(c.wx6, {
                                    type: "critical",
                                    children: N,
                                }),
                            }),
                        (0, r.jsx)("div", {
                            children: Z,
                        }),
                        (0, r.jsxs)(h.Yx, {
                            className: P.S,
                            children: [
                                (0, r.jsx)(h.Xd, {
                                    children: y.intl.string(y.t.iqhIp4),
                                }),
                                (0, r.jsx)(h.oR, {
                                    label: y.intl.format(y.t["Vg+LRr"], {
                                        subscriptionCount: 1,
                                    }),
                                    value: (0, S.CE)((0, S.$g)(W, s.currency), z, K),
                                    className: P.Au,
                                }),
                                null != H && H.length > 0
                                    ? (0, r.jsxs)("div", {
                                          children: [
                                              (0, r.jsx)(h.pK, {}),
                                              (0, r.jsx)(E.m0, {
                                                  premiumSubscription: s,
                                                  renewalInvoice: B,
                                                  isUpdate: !0,
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    align: g.A.Align.CENTER,
                    justify: g.A.Justify.BETWEEN,
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "critical-primary",
                            text: y.intl.string(y.t["/AS/gM"]),
                            disabled: C,
                            onClick: async () => {
                                try {
                                    I(!0), R(null), await D(s, w, k, a), m();
                                } catch (e) {
                                    R(y.intl.string(y.t["5mlOCW"])), I(!1);
                                }
                            },
                        }),
                        (0, r.jsx)(b.A, {
                            onClick: u,
                        }),
                    ],
                }),
            ],
        })
    );
}

function L(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: i, transitionState: l } = e,
        s = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (s = n.endsAt.toDate());
    let o = [
        {
            variant: "primary",
            text: y.intl.string(y.t.BddRzS),
            onClick: i,
        },
    ];
    return (0, r.jsx)(a.Modal, {
        transitionState: l,
        onClose: i,
        size: "sm",
        title: y.intl.string(y.t["fZzV/B"]),
        actions: o,
        children: (0, r.jsxs)("div", {
            className: P.rf,
            children: [
                (0, r.jsx)("div", {
                    className: P.OC,
                }),
                (0, r.jsx)("div", {
                    children: y.intl.format(y.t["H+z0ns"], {
                        endDate: s,
                    }),
                }),
            ],
        }),
    });
}

function M(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: s } = e;
    i.useEffect(() => {
        C.A.hasFetchedSubscriptions() || (0, d.hP)();
    }, []);
    let a = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        u = (0, m.A)(),
        [g, A] = i.useState(1),
        { analyticsLocations: f } = (0, p.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = (0, r.jsx)(c.$mQ, {
            "data-migration-pending": !0,
            children: (0, r.jsx)(c.y$y, {}),
        });
    else
        switch (g) {
            case 1:
                t = (0, r.jsx)(R, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: u,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => A(2),
                    onClose: s,
                    transitionState: l,
                });
                break;
            case 2:
                t = (0, r.jsx)(c.EOs, {
                    "data-migration-pending": !0,
                    transitionState: l,
                    parentComponent: "GuildBoostSlotCancellationModal",
                    children: (0, r.jsx)(w, {
                        premiumSubscription: a,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: u,
                        onBack: () => A(1),
                        onNext: () => A(3),
                        onClose: s,
                    }),
                });
                break;
            case 3:
                t = (0, r.jsx)(L, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: u,
                    onClose: s,
                    transitionState: l,
                });
                break;
            default:
                throw Error("Unexpected step: ".concat(g));
        }
    return (0, r.jsx)(p.f5, {
        value: f,
        children: t,
    });
}
