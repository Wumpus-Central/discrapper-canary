n.d(t, { default: () => k });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(923408),
    u = n(793574),
    m = n(688810),
    g = n(323082),
    _ = n(531260),
    x = n(235986),
    A = n(543767),
    h = n(253390),
    p = n(43594),
    T = n(735164),
    f = n(683433),
    S = n(692440),
    E = n(178368),
    b = n(97352),
    C = n(166403),
    v = n(473145),
    N = n(927578),
    I = n(580630),
    j = n(802790),
    y = n(788868),
    O = n(818348),
    R = n(985018),
    L = n(910200);
function P(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: s,
            showImage: l,
            onNext: r,
            onClose: o,
            transitionState: d,
        } = e,
        c = R.intl.format(R.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = R.intl.format(R.t.HbpFLg, {
              paymentGatewayName: O.qm[t.paymentGateway],
              subscriptionManagementLink: (0, N.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = R.intl.format(R.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : s && (c = R.intl.format(R.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let u = s ? R.intl.string(R.t.iIoSd6) : R.intl.string(R.t.Skzv0u),
        m = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: R.intl.string(R.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: R.intl.string(R.t.PDTjLN), onClick: r },
              ];
    return (0, i.jsx)(a.Modal, {
        transitionState: d,
        onClose: o,
        size: "sm",
        title: u,
        actions: m,
        children: (0, i.jsxs)("div", {
            className: L.rf,
            children: [l && (0, i.jsx)("div", { className: L.OC }), (0, i.jsx)("div", { children: c })],
        }),
    });
}
async function D(e, t, n, i) {
    let s,
        l,
        a =
            null != i
                ? i
                : ((s = Object.values(E.A.boostSlots)),
                  null !=
                  (l = r().sortBy(
                      s.filter((e) => !(0, v.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, N.aE)(e, t);
    await (0, c.HJ)(a),
        await (0, g.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, N.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}
function G(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, fractionalPremiumInfo: l, onBack: r, onNext: a, onClose: c } = e,
        [g, _] = s.useState(!1),
        [p, E] = s.useState(null),
        [C, v] = s.useMemo(() => {
            try {
                return [(0, h.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        O = s.useRef(c);
    s.useEffect(() => {
        O.current = c;
    }),
        s.useEffect(() => {
            v && O.current();
        }, [v]);
    let { premiumSubscriptionPlan: P, premiumGuildPlan: G } = (0, o.cf)([b.A], () => {
            let e = b.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? b.A.getForSkuAndInterval((0, N.mH)(y.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: M } = (0, m.Ay)(),
        [k] = (0, A.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: M,
            analyticsLocation: u.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        U = null != G ? (0, N.Om)(t, C[0]?.quantity ?? 0, G.id) : null,
        [w] = (0, A.Kq)({
            subscriptionId: t.id,
            items: U,
            renewal: !0,
            analyticsLocations: M,
            analyticsLocation: u.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == w || null == P || null == G || null == k) return (0, i.jsx)(d.y$y, {});
    let V =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !y.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !y.pW.has(t);
            }) != null,
        B = C.some((e) => {
            let { planId: t } = e;
            return y.pW.has(t);
        }),
        F = V || B ? w.total - k.total : -k.total,
        { interval: H, intervalCount: z } = P,
        Y = R.intl.format(R.t["0W23cu"], { endDate: w.subscriptionPeriodStart });
    return (
        t.isPausedForFractionalPremium &&
            l.fetched &&
            (Y = R.intl.format(R.t.eb0xgS, { expirationDate: l.endsAt.toDate() })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.A, { "data-migration-pending": !0, onClose: c }),
                (0, i.jsxs)(d.$mQ, {
                    "data-migration-pending": !0,
                    className: L.rf,
                    children: [
                        null !== p &&
                            (0, i.jsx)("div", {
                                className: L.z3,
                                children: (0, i.jsx)(d.wx6, { type: "critical", children: p }),
                            }),
                        (0, i.jsx)("div", { children: Y }),
                        (0, i.jsxs)(T.Yx, {
                            className: L.S,
                            children: [
                                (0, i.jsx)(T.Xd, { children: R.intl.string(R.t.iqhIp4) }),
                                (0, i.jsx)(T.oR, {
                                    label: R.intl.format(R.t["Vg+LRr"], { subscriptionCount: 1 }),
                                    value: (0, I.CE)((0, I.$g)(F, t.currency), H, z),
                                    className: L.Au,
                                }),
                                null != U && U.length > 0
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(T.pK, {}),
                                              (0, i.jsx)(S.m0, {
                                                  premiumSubscription: t,
                                                  renewalInvoice: w,
                                                  isUpdate: !0,
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)(d.jlY, {
                    "data-migration-pending": !0,
                    align: x.A.Align.CENTER,
                    justify: x.A.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(d.Button, {
                            variant: "critical-primary",
                            text: R.intl.string(R.t["/AS/gM"]),
                            disabled: g,
                            onClick: async () => {
                                try {
                                    _(!0), E(null), await D(t, C, M, n), a();
                                } catch (e) {
                                    E(R.intl.string(R.t["5mlOCW"])), _(!1);
                                }
                            },
                        }),
                        (0, i.jsx)(f.A, { onClick: r }),
                    ],
                }),
            ],
        })
    );
}
function M(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: s, onClose: l, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let d = [{ variant: "primary", text: R.intl.string(R.t.BddRzS), onClick: l }];
    return (0, i.jsx)(a.Modal, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: R.intl.string(R.t["fZzV/B"]),
        actions: d,
        children: (0, i.jsxs)("div", {
            className: L.rf,
            children: [
                s && (0, i.jsx)("div", { className: L.OC }),
                (0, i.jsx)("div", { children: R.intl.format(R.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function k(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        C.A.hasFetchedSubscriptions() || (0, g.hP)();
    }, []);
    let a = (0, o.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        c = (0, _.A)(),
        [x, A] = s.useState(1),
        h = "control" === (0, p.D)("GuildBoostSlotCancellationModal"),
        { analyticsLocations: T } = (0, m.Ay)(u.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a) t = (0, i.jsx)(d.$mQ, { "data-migration-pending": !0, children: (0, i.jsx)(d.y$y, {}) });
    else
        switch (x) {
            case 1:
                t = (0, i.jsx)(P, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: h,
                    onNext: () => A(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = (0, i.jsx)(d.EOs, {
                    "data-migration-pending": !0,
                    transitionState: l,
                    parentComponent: "GuildBoostSlotCancellationModal",
                    children: (0, i.jsx)(G, {
                        premiumSubscription: a,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: c,
                        onBack: () => A(1),
                        onNext: () => A(3),
                        onClose: r,
                    }),
                });
                break;
            case 3:
                t = (0, i.jsx)(M, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    showImage: h,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                throw Error(`Unexpected step: ${x}`);
        }
    return (0, i.jsx)(m.f5, { value: T, children: t });
}
