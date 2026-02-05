n.d(t, { default: () => G });
var i = n(627968),
    s = n(64700),
    r = n(735438),
    a = n.n(r),
    l = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(384904),
    u = n(923408),
    _ = n(793574),
    m = n(688810),
    A = n(531260),
    g = n(235986),
    E = n(543767),
    h = n(253390),
    p = n(735164),
    C = n(683433),
    x = n(692440),
    T = n(178368),
    I = n(97352),
    S = n(166403),
    f = n(473145),
    N = n(927578),
    b = n(580630),
    R = n(802790),
    v = n(788868),
    O = n(818348),
    j = n(985018),
    P = n(397415);
function y(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: s,
            onNext: r,
            onClose: a,
            transitionState: o,
        } = e,
        c = j.intl.format(j.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = j.intl.format(j.t.HbpFLg, {
              paymentGatewayName: O.qm[t.paymentGateway],
              subscriptionManagementLink: (0, N.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = j.intl.format(j.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : s && (c = j.intl.format(j.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let d = s ? j.intl.string(j.t.iIoSd6) : j.intl.string(j.t.Skzv0u),
        u = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: a },
                  { variant: "primary", text: j.intl.string(j.t.PDTjLN), onClick: r },
              ];
    return (0, i.jsx)(l.Modal, {
        transitionState: o,
        onClose: a,
        size: "sm",
        title: d,
        actions: u,
        children: (0, i.jsxs)("div", {
            className: P.rf,
            children: [(0, i.jsx)("div", { className: P.OC }), (0, i.jsx)("div", { children: c })],
        }),
    });
}
async function L(e, t, n, i) {
    let s,
        r,
        l =
            null != i
                ? i
                : ((s = Object.values(T.A.boostSlots)),
                  null !=
                  (r = a().sortBy(
                      s.filter((e) => !(0, f.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? r.id
                      : null);
    if (null == l) throw Error("No slot to cancel");
    let o = (0, N.aE)(e, t);
    await (0, u.HJ)(l),
        await (0, d.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, N.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}
function D(e) {
    let { premiumSubscription: t, guildBoostSlotId: n, fractionalPremiumInfo: r, onBack: a, onNext: l, onClose: d } = e,
        [u, A] = s.useState(!1),
        [T, S] = s.useState(null),
        [f, O] = s.useMemo(() => {
            try {
                return [(0, h.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        y = s.useRef(d);
    s.useEffect(() => {
        y.current = d;
    }),
        s.useEffect(() => {
            O && y.current();
        }, [O]);
    let { premiumSubscriptionPlan: D, premiumGuildPlan: M } = (0, o.cf)([I.A], () => {
            let e = I.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? I.A.getForSkuAndInterval((0, N.mH)(v.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: G } = (0, m.Ay)(),
        [U] = (0, E.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: G,
            analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        k = null != M ? (0, N.Om)(t, f[0]?.quantity ?? 0, M.id) : null,
        [B] = (0, E.Kq)({
            subscriptionId: t.id,
            items: k,
            renewal: !0,
            analyticsLocations: G,
            analyticsLocation: _.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        });
    if (null == B || null == D || null == M || null == U) return (0, i.jsx)(c.y$y, {});
    let w =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !v.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !v.pW.has(t);
            }) != null,
        H = f.some((e) => {
            let { planId: t } = e;
            return v.pW.has(t);
        }),
        V = w || H ? B.total - U.total : -U.total,
        { interval: F, intervalCount: Y } = D,
        W = j.intl.format(j.t["0W23cu"], { endDate: B.subscriptionPeriodStart });
    return (
        t.isPausedForFractionalPremium &&
            r.fetched &&
            (W = j.intl.format(j.t.eb0xgS, { expirationDate: r.endsAt.toDate() })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(R.A, { "data-migration-pending": !0, onClose: d }),
                (0, i.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: P.rf,
                    children: [
                        null !== T &&
                            (0, i.jsx)("div", {
                                className: P.z3,
                                children: (0, i.jsx)(c.wx6, { type: "critical", children: T }),
                            }),
                        (0, i.jsx)("div", { children: W }),
                        (0, i.jsxs)(p.Yx, {
                            className: P.S,
                            children: [
                                (0, i.jsx)(p.Xd, { children: j.intl.string(j.t.iqhIp4) }),
                                (0, i.jsx)(p.oR, {
                                    label: j.intl.format(j.t["Vg+LRr"], { subscriptionCount: 1 }),
                                    value: (0, b.CE)((0, b.$g)(V, t.currency), F, Y),
                                    className: P.Au,
                                }),
                                null != k && k.length > 0
                                    ? (0, i.jsxs)("div", {
                                          children: [
                                              (0, i.jsx)(p.pK, {}),
                                              (0, i.jsx)(x.m0, {
                                                  premiumSubscription: t,
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
                (0, i.jsxs)(c.jlY, {
                    "data-migration-pending": !0,
                    align: g.A.Align.CENTER,
                    justify: g.A.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(c.Button, {
                            variant: "critical-primary",
                            text: j.intl.string(j.t["/AS/gM"]),
                            disabled: u,
                            onClick: async () => {
                                try {
                                    A(!0), S(null), await L(t, f, G, n), l();
                                } catch (e) {
                                    S(j.intl.string(j.t["5mlOCW"])), A(!1);
                                }
                            },
                        }),
                        (0, i.jsx)(C.A, { onClick: a }),
                    ],
                }),
            ],
        })
    );
}
function M(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, onClose: s, transitionState: r } = e,
        a = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
    let o = [{ variant: "primary", text: j.intl.string(j.t.BddRzS), onClick: s }];
    return (0, i.jsx)(l.Modal, {
        transitionState: r,
        onClose: s,
        size: "sm",
        title: j.intl.string(j.t["fZzV/B"]),
        actions: o,
        children: (0, i.jsxs)("div", {
            className: P.rf,
            children: [
                (0, i.jsx)("div", { className: P.OC }),
                (0, i.jsx)("div", { children: j.intl.format(j.t["H+z0ns"], { endDate: a }) }),
            ],
        }),
    });
}
function G(e) {
    let t,
        { guildBoostSlot: n, transitionState: r, onClose: a } = e;
    s.useEffect(() => {
        S.A.hasFetchedSubscriptions() || (0, d.hP)();
    }, []);
    let l = (0, o.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        u = (0, A.A)(),
        [g, E] = s.useState(1),
        { analyticsLocations: h } = (0, m.Ay)(_.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == l) t = (0, i.jsx)(c.$mQ, { "data-migration-pending": !0, children: (0, i.jsx)(c.y$y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(y, {
                    premiumSubscription: l,
                    fractionalPremiumInfo: u,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => E(2),
                    onClose: a,
                    transitionState: r,
                });
                break;
            case 2:
                t = (0, i.jsx)(c.EOs, {
                    "data-migration-pending": !0,
                    transitionState: r,
                    parentComponent: "GuildBoostSlotCancellationModal",
                    children: (0, i.jsx)(D, {
                        premiumSubscription: l,
                        guildBoostSlotId: n.id,
                        fractionalPremiumInfo: u,
                        onBack: () => E(1),
                        onNext: () => E(3),
                        onClose: a,
                    }),
                });
                break;
            case 3:
                t = (0, i.jsx)(M, { premiumSubscription: l, fractionalPremiumInfo: u, onClose: a, transitionState: r });
                break;
            default:
                throw Error(`Unexpected step: ${g}`);
        }
    return (0, i.jsx)(m.f5, { value: h, children: t });
}
