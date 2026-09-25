n.d(t, { default: () => q });
var i = n(477900),
    s = n(582128),
    l = n(435558),
    r = n.n(l),
    a = n(17928),
    o = n(189213),
    u = n(224640),
    d = n(430993),
    c = n(696208),
    g = n(123292),
    m = n(935462),
    A = n(289873),
    E = n(683071),
    h = n(821609),
    S = n(820739),
    x = n(793574),
    p = n(688810),
    T = n(277984),
    f = n(531260),
    I = n(725836),
    _ = n(169797),
    N = n(235986),
    C = n(543767),
    b = n(253390),
    y = n(489254),
    v = n(43594),
    j = n(735164),
    O = n(683433),
    L = n(692440),
    R = n(178368),
    D = n(97352),
    P = n(166403),
    G = n(473145),
    M = n(158045),
    U = n(580630),
    V = n(682502),
    k = n(816571),
    w = n(802790),
    F = n(202541),
    B = n(818348),
    z = n(375708),
    Y = n(119757);
function X(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: s,
            showImage: l,
            onNext: r,
            onClose: a,
            transitionState: u,
        } = e,
        d = z.intl.format(z.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (d = z.intl.format(z.t.HbpFLg, {
              paymentGatewayName: B.qm[t.paymentGateway],
              subscriptionManagementLink: (0, M.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (d = z.intl.format(z.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : s && (d = z.intl.format(z.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = s ? z.intl.string(z.t.iIoSd6) : z.intl.string(z.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: a },
                  { variant: "primary", text: z.intl.string(z.t.PDTjLN), onClick: r },
              ];
    return (0, i.jsx)(o.a, {
        transitionState: u,
        onClose: a,
        size: "sm",
        title: c,
        actions: g,
        children: (0, i.jsxs)("div", {
            className: Y.rf,
            children: [l && (0, i.jsx)("div", { className: Y.OC }), (0, i.jsx)("div", { children: d })],
        }),
    });
}
async function H(e, t, n, i) {
    let s,
        l,
        a =
            null != i
                ? i
                : ((s = Object.values(R.A.boostSlots)),
                  null !=
                  (l = r().sortBy(
                      s.filter((e) => !(0, G.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, M.aE)(e, t);
    (await (0, S.HJ)(a),
        await (0, T.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, M.UC)(o, e.currency, e.paymentSourceId),
            n,
        ));
}
function K(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: l,
            transitionState: r,
            useRefreshHeader: o,
            onBack: S,
            onNext: T,
            onClose: f,
        } = e,
        [y, v] = s.useState(!1),
        [R, P] = s.useState(null),
        [G, V] = s.useMemo(() => {
            try {
                return [(0, b.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        k = s.useRef(f);
    (s.useEffect(() => {
        k.current = f;
    }),
        s.useEffect(() => {
            V && k.current();
        }, [V]));
    let { premiumSubscriptionPlan: B, premiumGuildPlan: X } = (0, a.cf)([D.A], () => {
            let e = D.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? D.A.getForSkuAndInterval((0, M.mH)(F.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, p.Ay)(),
        [W] = (0, C.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != X ? (0, M.Om)(t, G[0]?.quantity ?? 0, X.id) : null,
        [q] = (0, C.YV)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == B || null == X || null == W;
    if (o && Q)
        return (0, i.jsxs)(u.d, {
            transitionState: r,
            onClose: f,
            "aria-label": z.intl.string(z.t.CRwE7n),
            children: [
                (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                (0, i.jsx)(d.c, { children: (0, i.jsx)("div", { className: Y.Lq, children: (0, i.jsx)(A.y, {}) }) }),
            ],
        });
    if (Q) return (0, i.jsx)(A.y, {});
    let $ =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !F.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !F.pW.has(t);
            }) != null,
        J = G.some((e) => {
            let { planId: t } = e;
            return F.pW.has(t);
        }),
        ee = $ || J ? q.total - W.total : -W.total,
        { interval: et, intervalCount: en } = B,
        ei = z.intl.format(z.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    async function es() {
        try {
            (v(!0), P(null), await H(t, G, K, n), T());
        } catch (e) {
            (P(z.intl.string(z.t["5mlOCW"])), v(!1));
        }
    }
    return (t.isPausedForFractionalPremium &&
        l.fetched &&
        (ei = z.intl.format(z.t.eb0xgS, { expirationDate: l.endsAt.toDate() })),
    o)
        ? (0, i.jsxs)(u.d, {
              transitionState: r,
              onClose: f,
              "aria-label": z.intl.string(z.t.CRwE7n),
              children: [
                  (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                  (0, i.jsx)(d.c, {
                      children: (0, i.jsxs)("div", {
                          className: Y.rf,
                          children: [
                              null !== R &&
                                  (0, i.jsx)("div", {
                                      className: Y.z3,
                                      children: (0, i.jsx)(E.w, { type: "critical", children: R }),
                                  }),
                              (0, i.jsx)("div", { children: ei }),
                              (0, i.jsxs)(j.Yx, {
                                  className: Y.S,
                                  children: [
                                      (0, i.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                      (0, i.jsx)(j.oR, {
                                          label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                          className: Y.Au,
                                      }),
                                      null != Z && Z.length > 0
                                          ? (0, i.jsxs)("div", {
                                                children: [
                                                    (0, i.jsx)(j.pK, {}),
                                                    (0, i.jsx)(L.Hc, { renewalInvoice: q, isUpdate: !0 }),
                                                ],
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(c.H, {
                      leading: (0, i.jsx)(g.Q, {
                          text: z.intl.string(z.t["13/7kX"]),
                          onClick: S,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: z.intl.string(z.t["/AS/gM"]),
                              disabled: y,
                              loading: y,
                              onClick: es,
                          },
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.A, { "data-migration-pending": !0, onClose: f }),
                  (0, i.jsxs)(m.$m, {
                      "data-migration-pending": !0,
                      className: Y.rf,
                      children: [
                          null !== R &&
                              (0, i.jsx)("div", {
                                  className: Y.z3,
                                  children: (0, i.jsx)(E.w, { type: "critical", children: R }),
                              }),
                          (0, i.jsx)("div", { children: ei }),
                          (0, i.jsxs)(j.Yx, {
                              className: Y.S,
                              children: [
                                  (0, i.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                  (0, i.jsx)(j.oR, {
                                      label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                      className: Y.Au,
                                  }),
                                  null != Z && Z.length > 0
                                      ? (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(j.pK, {}),
                                                (0, i.jsx)(L.Hc, { renewalInvoice: q, isUpdate: !0 }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsxs)(m.jl, {
                      "data-migration-pending": !0,
                      align: N.A.Align.CENTER,
                      justify: N.A.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(h.$, {
                              variant: "critical-primary",
                              text: z.intl.string(z.t["/AS/gM"]),
                              disabled: y,
                              onClick: es,
                          }),
                          (0, i.jsx)(O.A, { onClick: S }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: s, onClose: l, transitionState: r } = e,
        a = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (a = n.endsAt.toDate());
    let u = [{ variant: "primary", text: z.intl.string(z.t.BddRzS), onClick: l }];
    return (0, i.jsx)(o.a, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: z.intl.string(z.t["fZzV/B"]),
        actions: u,
        children: (0, i.jsxs)("div", {
            className: Y.rf,
            children: [
                s && (0, i.jsx)("div", { className: Y.OC }),
                (0, i.jsx)("div", { children: z.intl.format(z.t["H+z0ns"], { endDate: a }) }),
            ],
        }),
    });
}
function Z(e) {
    let { step: t } = e;
    throw new V.f({ message: `Unexpected step: ${t}`, extraSentryInformation: { step: t } });
}
function q(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        P.A.hasFetchedSubscriptions() || (0, T.hP)();
    }, []);
    let o = (0, a.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        c = (0, f.A)(),
        [g, E] = s.useState(1),
        h = (0, v.D)("GuildBoostSlotCancellationModal"),
        S = (0, y.n)("GuildBoostSlotCancellationModal"),
        N = "control" !== h || S,
        C = !N,
        { analyticsLocations: b } = (0, p.Ay)(x.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == o)
        t = N
            ? (0, i.jsxs)(u.d, {
                  transitionState: l,
                  onClose: r,
                  "aria-label": z.intl.string(z.t.CRwE7n),
                  children: [
                      (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                      (0, i.jsx)(d.c, {
                          children: (0, i.jsx)("div", { className: Y.Lq, children: (0, i.jsx)(A.y, {}) }),
                      }),
                  ],
              })
            : (0, i.jsx)(m.$m, { "data-migration-pending": !0, children: (0, i.jsx)(A.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(X, {
                    premiumSubscription: o,
                    fractionalPremiumInfo: c,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: C,
                    onNext: () => E(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = N
                    ? (0, i.jsx)(K, {
                          premiumSubscription: o,
                          guildBoostSlotId: n.id,
                          fractionalPremiumInfo: c,
                          transitionState: l,
                          useRefreshHeader: !0,
                          onBack: () => E(1),
                          onNext: () => E(3),
                          onClose: r,
                      })
                    : (0, i.jsx)(m.EO, {
                          "data-migration-pending": !0,
                          transitionState: l,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, i.jsx)(K, {
                              premiumSubscription: o,
                              guildBoostSlotId: n.id,
                              fractionalPremiumInfo: c,
                              transitionState: l,
                              useRefreshHeader: !1,
                              onBack: () => E(1),
                              onNext: () => E(3),
                              onClose: r,
                          }),
                      });
                break;
            case 3:
                t = (0, i.jsx)(W, {
                    premiumSubscription: o,
                    fractionalPremiumInfo: c,
                    showImage: C,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                t = (0, i.jsx)(Z, { step: g });
        }
    return (0, i.jsx)(p.f5, {
        value: b,
        children: (0, i.jsx)(k.d, { errorHandlingBehavior: "close-and-alert", guildBoostSlot: n, children: t }),
    });
}
