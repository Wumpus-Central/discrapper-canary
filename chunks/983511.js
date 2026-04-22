n.d(t, { default: () => K });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(189213),
    o = n(311907),
    d = n(224640),
    u = n(430993),
    c = n(696208),
    g = n(123292),
    m = n(289873),
    _ = n(683071),
    A = n(935462),
    h = n(821609),
    p = n(923408),
    x = n(793574),
    E = n(688810),
    T = n(323082),
    S = n(531260),
    f = n(725836),
    b = n(169797),
    C = n(235986),
    v = n(543767),
    N = n(253390),
    I = n(489254),
    y = n(43594),
    j = n(735164),
    O = n(683433),
    R = n(692440),
    L = n(178368),
    D = n(97352),
    P = n(166403),
    G = n(473145),
    M = n(927578),
    U = n(580630),
    k = n(802790),
    w = n(788868),
    V = n(818348),
    B = n(985018),
    F = n(308808);
function z(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: s,
            showImage: l,
            onNext: a,
            onClose: o,
            transitionState: d,
        } = e,
        u = B.intl.format(B.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (u = B.intl.format(B.t.HbpFLg, {
              paymentGatewayName: V.qm[t.paymentGateway],
              subscriptionManagementLink: (0, M.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (u = B.intl.format(B.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : s && (u = B.intl.format(B.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = s ? B.intl.string(B.t.iIoSd6) : B.intl.string(B.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: B.intl.string(B.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: B.intl.string(B.t.PDTjLN), onClick: a },
              ];
    return (0, i.jsx)(r.Modal, {
        transitionState: d,
        onClose: o,
        size: "sm",
        title: c,
        actions: g,
        children: (0, i.jsxs)("div", {
            className: F.rf,
            children: [l && (0, i.jsx)("div", { className: F.OC }), (0, i.jsx)("div", { children: u })],
        }),
    });
}
async function H(e, t, n, i) {
    let s,
        l,
        r =
            null != i
                ? i
                : ((s = Object.values(L.A.boostSlots)),
                  null !=
                  (l = a().sortBy(
                      s.filter((e) => !(0, G.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, M.aE)(e, t);
    await (0, p.HJ)(r),
        await (0, T.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, M.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}
function Y(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: l,
            transitionState: a,
            useRefreshHeader: r,
            onBack: p,
            onNext: T,
            onClose: S,
        } = e,
        [I, y] = s.useState(!1),
        [L, P] = s.useState(null),
        [G, V] = s.useMemo(() => {
            try {
                return [(0, N.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        z = s.useRef(S);
    s.useEffect(() => {
        z.current = S;
    }),
        s.useEffect(() => {
            V && z.current();
        }, [V]);
    let { premiumSubscriptionPlan: Y, premiumGuildPlan: X } = (0, o.cf)([D.A], () => {
            let e = D.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? D.A.getForSkuAndInterval((0, M.mH)(w.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, E.Ay)(),
        [W] = (0, v.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != X ? (0, M.Om)(t, G[0]?.quantity ?? 0, X.id) : null,
        [q] = (0, v.Kq)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == Y || null == X || null == W;
    if (r && Q)
        return (0, i.jsxs)(d.d, {
            transitionState: a,
            onClose: S,
            children: [
                (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                (0, i.jsx)(u.c, { children: (0, i.jsx)("div", { className: F.Lq, children: (0, i.jsx)(m.y, {}) }) }),
            ],
        });
    if (Q) return (0, i.jsx)(m.y, {});
    let J =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !w.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !w.pW.has(t);
            }) != null,
        $ = G.some((e) => {
            let { planId: t } = e;
            return w.pW.has(t);
        }),
        ee = J || $ ? q.total - W.total : -W.total,
        { interval: et, intervalCount: en } = Y,
        ei = B.intl.format(B.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    t.isPausedForFractionalPremium &&
        l.fetched &&
        (ei = B.intl.format(B.t.eb0xgS, { expirationDate: l.endsAt.toDate() }));
    let es = async () => {
        try {
            y(!0), P(null), await H(t, G, K, n), T();
        } catch (e) {
            P(B.intl.string(B.t["5mlOCW"])), y(!1);
        }
    };
    return r
        ? (0, i.jsxs)(d.d, {
              transitionState: a,
              onClose: S,
              children: [
                  (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                  (0, i.jsx)(u.c, {
                      children: (0, i.jsxs)("div", {
                          className: F.rf,
                          children: [
                              null !== L &&
                                  (0, i.jsx)("div", {
                                      className: F.z3,
                                      children: (0, i.jsx)(_.w, { type: "critical", children: L }),
                                  }),
                              (0, i.jsx)("div", { children: ei }),
                              (0, i.jsxs)(j.Yx, {
                                  className: F.S,
                                  children: [
                                      (0, i.jsx)(j.Xd, { children: B.intl.string(B.t.iqhIp4) }),
                                      (0, i.jsx)(j.oR, {
                                          label: B.intl.format(B.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                          className: F.Au,
                                      }),
                                      null != Z && Z.length > 0
                                          ? (0, i.jsxs)("div", {
                                                children: [
                                                    (0, i.jsx)(j.pK, {}),
                                                    (0, i.jsx)(R.m0, {
                                                        premiumSubscription: t,
                                                        renewalInvoice: q,
                                                        isUpdate: !0,
                                                    }),
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
                          text: B.intl.string(B.t["13/7kX"]),
                          onClick: p,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: B.intl.string(B.t["/AS/gM"]),
                              disabled: I,
                              loading: I,
                              onClick: es,
                          },
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(k.A, { "data-migration-pending": !0, onClose: S }),
                  (0, i.jsxs)(A.$m, {
                      "data-migration-pending": !0,
                      className: F.rf,
                      children: [
                          null !== L &&
                              (0, i.jsx)("div", {
                                  className: F.z3,
                                  children: (0, i.jsx)(_.w, { type: "critical", children: L }),
                              }),
                          (0, i.jsx)("div", { children: ei }),
                          (0, i.jsxs)(j.Yx, {
                              className: F.S,
                              children: [
                                  (0, i.jsx)(j.Xd, { children: B.intl.string(B.t.iqhIp4) }),
                                  (0, i.jsx)(j.oR, {
                                      label: B.intl.format(B.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, U.CE)((0, U.$g)(ee, t.currency), et, en),
                                      className: F.Au,
                                  }),
                                  null != Z && Z.length > 0
                                      ? (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(j.pK, {}),
                                                (0, i.jsx)(R.m0, {
                                                    premiumSubscription: t,
                                                    renewalInvoice: q,
                                                    isUpdate: !0,
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsxs)(A.jl, {
                      "data-migration-pending": !0,
                      align: C.A.Align.CENTER,
                      justify: C.A.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(h.$, {
                              variant: "critical-primary",
                              text: B.intl.string(B.t["/AS/gM"]),
                              disabled: I,
                              onClick: es,
                          }),
                          (0, i.jsx)(O.A, { onClick: p }),
                      ],
                  }),
              ],
          });
}
function X(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: s, onClose: l, transitionState: a } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let d = [{ variant: "primary", text: B.intl.string(B.t.BddRzS), onClick: l }];
    return (0, i.jsx)(r.Modal, {
        transitionState: a,
        onClose: l,
        size: "sm",
        title: B.intl.string(B.t["fZzV/B"]),
        actions: d,
        children: (0, i.jsxs)("div", {
            className: F.rf,
            children: [
                s && (0, i.jsx)("div", { className: F.OC }),
                (0, i.jsx)("div", { children: B.intl.format(B.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function K(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: a } = e;
    s.useEffect(() => {
        P.A.hasFetchedSubscriptions() || (0, T.hP)();
    }, []);
    let r = (0, o.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        c = (0, S.A)(),
        [g, _] = s.useState(1),
        h = (0, y.D)("GuildBoostSlotCancellationModal"),
        p = (0, I.n)("GuildBoostSlotCancellationModal"),
        C = "control" !== h || p,
        v = !C,
        { analyticsLocations: N } = (0, E.Ay)(x.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r)
        t = C
            ? (0, i.jsxs)(d.d, {
                  transitionState: l,
                  onClose: a,
                  children: [
                      (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                      (0, i.jsx)(u.c, {
                          children: (0, i.jsx)("div", { className: F.Lq, children: (0, i.jsx)(m.y, {}) }),
                      }),
                  ],
              })
            : (0, i.jsx)(A.$m, { "data-migration-pending": !0, children: (0, i.jsx)(m.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(z, {
                    premiumSubscription: r,
                    fractionalPremiumInfo: c,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: v,
                    onNext: () => _(2),
                    onClose: a,
                    transitionState: l,
                });
                break;
            case 2:
                t = C
                    ? (0, i.jsx)(Y, {
                          premiumSubscription: r,
                          guildBoostSlotId: n.id,
                          fractionalPremiumInfo: c,
                          transitionState: l,
                          useRefreshHeader: !0,
                          onBack: () => _(1),
                          onNext: () => _(3),
                          onClose: a,
                      })
                    : (0, i.jsx)(A.EO, {
                          "data-migration-pending": !0,
                          transitionState: l,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, i.jsx)(Y, {
                              premiumSubscription: r,
                              guildBoostSlotId: n.id,
                              fractionalPremiumInfo: c,
                              transitionState: l,
                              useRefreshHeader: !1,
                              onBack: () => _(1),
                              onNext: () => _(3),
                              onClose: a,
                          }),
                      });
                break;
            case 3:
                t = (0, i.jsx)(X, {
                    premiumSubscription: r,
                    fractionalPremiumInfo: c,
                    showImage: v,
                    onClose: a,
                    transitionState: l,
                });
                break;
            default:
                throw Error(`Unexpected step: ${g}`);
        }
    return (0, i.jsx)(E.f5, { value: N, children: t });
}
