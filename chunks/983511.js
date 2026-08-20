n.d(t, { default: () => q });
var i = n(477900),
    l = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(189213),
    o = n(17928),
    u = n(224640),
    d = n(430993),
    c = n(696208),
    g = n(123292),
    m = n(935462),
    A = n(289873),
    h = n(683071),
    E = n(821609),
    S = n(820739),
    x = n(793574),
    p = n(688810),
    T = n(277984),
    f = n(531260),
    I = n(725836),
    _ = n(480642),
    N = n(235986),
    C = n(543767),
    b = n(253390),
    y = n(489254),
    v = n(43594),
    j = n(735164),
    O = n(683433),
    L = n(692440),
    D = n(178368),
    R = n(97352),
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
    X = n(119757);
function Y(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: l,
            showImage: s,
            onNext: r,
            onClose: o,
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
          : l && (d = z.intl.format(z.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = l ? z.intl.string(z.t.iIoSd6) : z.intl.string(z.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: z.intl.string(z.t.PDTjLN), onClick: r },
              ];
    return (0, i.jsx)(a.Modal, {
        transitionState: u,
        onClose: o,
        size: "sm",
        title: c,
        actions: g,
        children: (0, i.jsxs)("div", {
            className: X.rf,
            children: [s && (0, i.jsx)("div", { className: X.OC }), (0, i.jsx)("div", { children: d })],
        }),
    });
}
async function H(e, t, n, i) {
    let l,
        s,
        a =
            null != i
                ? i
                : ((l = Object.values(D.A.boostSlots)),
                  null !=
                  (s = r().sortBy(
                      l.filter((e) => !(0, G.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? s.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, M.aE)(e, t);
    await (0, S.HJ)(a),
        await (0, T.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, M.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}
function K(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: s,
            transitionState: r,
            useRefreshHeader: a,
            onBack: S,
            onNext: T,
            onClose: f,
        } = e,
        [y, v] = l.useState(!1),
        [D, P] = l.useState(null),
        [G, V] = l.useMemo(() => {
            try {
                return [(0, b.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        k = l.useRef(f);
    l.useEffect(() => {
        k.current = f;
    }),
        l.useEffect(() => {
            V && k.current();
        }, [V]);
    let { premiumSubscriptionPlan: B, premiumGuildPlan: Y } = (0, o.cf)([R.A], () => {
            let e = R.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? R.A.getForSkuAndInterval((0, M.mH)(F.pe.GUILD), e.interval, e.intervalCount) : null,
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
        Z = null != Y ? (0, M.Om)(t, G[0]?.quantity ?? 0, Y.id) : null,
        [q] = (0, C.YV)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == B || null == Y || null == W;
    if (a && Q)
        return (0, i.jsxs)(u.d, {
            transitionState: r,
            onClose: f,
            "aria-label": z.intl.string(z.t.CRwE7n),
            children: [
                (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                (0, i.jsx)(d.c, { children: (0, i.jsx)("div", { className: X.Lq, children: (0, i.jsx)(A.y, {}) }) }),
            ],
        });
    if (Q) return (0, i.jsx)(A.y, {});
    let J =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !F.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !F.pW.has(t);
            }) != null,
        $ = G.some((e) => {
            let { planId: t } = e;
            return F.pW.has(t);
        }),
        ee = J || $ ? q.total - W.total : -W.total,
        { interval: et, intervalCount: en } = B,
        ei = z.intl.format(z.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    async function el() {
        try {
            v(!0), P(null), await H(t, G, K, n), T();
        } catch (e) {
            P(z.intl.string(z.t["5mlOCW"])), v(!1);
        }
    }
    return (t.isPausedForFractionalPremium &&
        s.fetched &&
        (ei = z.intl.format(z.t.eb0xgS, { expirationDate: s.endsAt.toDate() })),
    a)
        ? (0, i.jsxs)(u.d, {
              transitionState: r,
              onClose: f,
              "aria-label": z.intl.string(z.t.CRwE7n),
              children: [
                  (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                  (0, i.jsx)(d.c, {
                      children: (0, i.jsxs)("div", {
                          className: X.rf,
                          children: [
                              null !== D &&
                                  (0, i.jsx)("div", {
                                      className: X.z3,
                                      children: (0, i.jsx)(h.w, { type: "critical", children: D }),
                                  }),
                              (0, i.jsx)("div", { children: ei }),
                              (0, i.jsxs)(j.Yx, {
                                  className: X.S,
                                  children: [
                                      (0, i.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                      (0, i.jsx)(j.oR, {
                                          label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                          className: X.Au,
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
                              onClick: el,
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
                      className: X.rf,
                      children: [
                          null !== D &&
                              (0, i.jsx)("div", {
                                  className: X.z3,
                                  children: (0, i.jsx)(h.w, { type: "critical", children: D }),
                              }),
                          (0, i.jsx)("div", { children: ei }),
                          (0, i.jsxs)(j.Yx, {
                              className: X.S,
                              children: [
                                  (0, i.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                  (0, i.jsx)(j.oR, {
                                      label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                      className: X.Au,
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
                          (0, i.jsx)(E.$, {
                              variant: "critical-primary",
                              text: z.intl.string(z.t["/AS/gM"]),
                              disabled: y,
                              onClick: el,
                          }),
                          (0, i.jsx)(O.A, { onClick: S }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: l, onClose: s, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let u = [{ variant: "primary", text: z.intl.string(z.t.BddRzS), onClick: s }];
    return (0, i.jsx)(a.Modal, {
        transitionState: r,
        onClose: s,
        size: "sm",
        title: z.intl.string(z.t["fZzV/B"]),
        actions: u,
        children: (0, i.jsxs)("div", {
            className: X.rf,
            children: [
                l && (0, i.jsx)("div", { className: X.OC }),
                (0, i.jsx)("div", { children: z.intl.format(z.t["H+z0ns"], { endDate: o }) }),
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
        { guildBoostSlot: n, transitionState: s, onClose: r } = e;
    l.useEffect(() => {
        P.A.hasFetchedSubscriptions() || (0, T.hP)();
    }, []);
    let a = (0, o.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        c = (0, f.A)(),
        [g, h] = l.useState(1),
        E = (0, v.D)("GuildBoostSlotCancellationModal"),
        S = (0, y.n)("GuildBoostSlotCancellationModal"),
        N = "control" !== E || S,
        C = !N,
        { analyticsLocations: b } = (0, p.Ay)(x.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = N
            ? (0, i.jsxs)(u.d, {
                  transitionState: s,
                  onClose: r,
                  "aria-label": z.intl.string(z.t.CRwE7n),
                  children: [
                      (0, i.jsx)(I.e0, { children: (0, i.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                      (0, i.jsx)(d.c, {
                          children: (0, i.jsx)("div", { className: X.Lq, children: (0, i.jsx)(A.y, {}) }),
                      }),
                  ],
              })
            : (0, i.jsx)(m.$m, { "data-migration-pending": !0, children: (0, i.jsx)(A.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(Y, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: C,
                    onNext: () => h(2),
                    onClose: r,
                    transitionState: s,
                });
                break;
            case 2:
                t = N
                    ? (0, i.jsx)(K, {
                          premiumSubscription: a,
                          guildBoostSlotId: n.id,
                          fractionalPremiumInfo: c,
                          transitionState: s,
                          useRefreshHeader: !0,
                          onBack: () => h(1),
                          onNext: () => h(3),
                          onClose: r,
                      })
                    : (0, i.jsx)(m.EO, {
                          "data-migration-pending": !0,
                          transitionState: s,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, i.jsx)(K, {
                              premiumSubscription: a,
                              guildBoostSlotId: n.id,
                              fractionalPremiumInfo: c,
                              transitionState: s,
                              useRefreshHeader: !1,
                              onBack: () => h(1),
                              onNext: () => h(3),
                              onClose: r,
                          }),
                      });
                break;
            case 3:
                t = (0, i.jsx)(W, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    showImage: C,
                    onClose: r,
                    transitionState: s,
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
