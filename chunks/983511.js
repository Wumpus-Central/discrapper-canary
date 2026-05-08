i.d(t, { default: () => K });
var n = i(627968),
    s = i(64700),
    l = i(735438),
    r = i.n(l),
    a = i(189213),
    o = i(17928),
    u = i(224640),
    d = i(430993),
    c = i(696208),
    g = i(123292),
    m = i(289873),
    A = i(683071),
    h = i(935462),
    E = i(821609),
    T = i(820739),
    x = i(793574),
    S = i(688810),
    p = i(753390),
    N = i(531260),
    f = i(725836),
    _ = i(169797),
    C = i(235986),
    I = i(543767),
    b = i(253390),
    v = i(489254),
    j = i(43594),
    y = i(735164),
    O = i(683433),
    R = i(692440),
    L = i(178368),
    D = i(97352),
    P = i(166403),
    G = i(473145),
    U = i(927578),
    M = i(580630),
    V = i(802790),
    k = i(788868),
    w = i(818348),
    F = i(375708),
    B = i(308808);
function z(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: i,
            isInventory: s,
            showImage: l,
            onNext: r,
            onClose: o,
            transitionState: u,
        } = e,
        d = F.intl.format(F.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (d = F.intl.format(F.t.HbpFLg, {
              paymentGatewayName: w.qm[t.paymentGateway],
              subscriptionManagementLink: (0, U.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (d = F.intl.format(F.t.Hzqe6y, { expirationDate: i.endsAt.toDate() }))
          : s && (d = F.intl.format(F.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = s ? F.intl.string(F.t.iIoSd6) : F.intl.string(F.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: F.intl.string(F.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: F.intl.string(F.t.PDTjLN), onClick: r },
              ];
    return (0, n.jsx)(a.Modal, {
        transitionState: u,
        onClose: o,
        size: "sm",
        title: c,
        actions: g,
        children: (0, n.jsxs)("div", {
            className: B.rf,
            children: [l && (0, n.jsx)("div", { className: B.OC }), (0, n.jsx)("div", { children: d })],
        }),
    });
}
async function Y(e, t, i, n) {
    let s,
        l,
        a =
            null != n
                ? n
                : ((s = Object.values(L.A.boostSlots)),
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
    let o = (0, U.aE)(e, t);
    await (0, T.HJ)(a),
        await (0, p.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, U.UC)(o, e.currency, e.paymentSourceId),
            i,
        );
}
function X(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: i,
            fractionalPremiumInfo: l,
            transitionState: r,
            useRefreshHeader: a,
            onBack: T,
            onNext: p,
            onClose: N,
        } = e,
        [v, j] = s.useState(!1),
        [L, P] = s.useState(null),
        [G, w] = s.useMemo(() => {
            try {
                return [(0, b.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        z = s.useRef(N);
    s.useEffect(() => {
        z.current = N;
    }),
        s.useEffect(() => {
            w && z.current();
        }, [w]);
    let { premiumSubscriptionPlan: X, premiumGuildPlan: H } = (0, o.cf)([D.A], () => {
            let e = D.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? D.A.getForSkuAndInterval((0, U.mH)(k.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, S.Ay)(),
        [W] = (0, I.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != H ? (0, U.Om)(t, G[0]?.quantity ?? 0, H.id) : null,
        [q] = (0, I.YV)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: x.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == X || null == H || null == W;
    if (a && Q)
        return (0, n.jsxs)(u.d, {
            transitionState: r,
            onClose: N,
            "aria-label": F.intl.string(F.t.CRwE7n),
            children: [
                (0, n.jsx)(f.e0, { children: (0, n.jsx)(_.s3, { title: F.intl.string(F.t.CRwE7n) }) }),
                (0, n.jsx)(d.c, { children: (0, n.jsx)("div", { className: B.Lq, children: (0, n.jsx)(m.y, {}) }) }),
            ],
        });
    if (Q) return (0, n.jsx)(m.y, {});
    let J =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !k.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !k.pW.has(t);
            }) != null,
        $ = G.some((e) => {
            let { planId: t } = e;
            return k.pW.has(t);
        }),
        ee = J || $ ? q.total - W.total : -W.total,
        { interval: et, intervalCount: ei } = X,
        en = F.intl.format(F.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    t.isPausedForFractionalPremium &&
        l.fetched &&
        (en = F.intl.format(F.t.eb0xgS, { expirationDate: l.endsAt.toDate() }));
    let es = async () => {
        try {
            j(!0), P(null), await Y(t, G, K, i), p();
        } catch (e) {
            P(F.intl.string(F.t["5mlOCW"])), j(!1);
        }
    };
    return a
        ? (0, n.jsxs)(u.d, {
              transitionState: r,
              onClose: N,
              "aria-label": F.intl.string(F.t.CRwE7n),
              children: [
                  (0, n.jsx)(f.e0, { children: (0, n.jsx)(_.s3, { title: F.intl.string(F.t.CRwE7n) }) }),
                  (0, n.jsx)(d.c, {
                      children: (0, n.jsxs)("div", {
                          className: B.rf,
                          children: [
                              null !== L &&
                                  (0, n.jsx)("div", {
                                      className: B.z3,
                                      children: (0, n.jsx)(A.w, { type: "critical", children: L }),
                                  }),
                              (0, n.jsx)("div", { children: en }),
                              (0, n.jsxs)(y.Yx, {
                                  className: B.S,
                                  children: [
                                      (0, n.jsx)(y.Xd, { children: F.intl.string(F.t.iqhIp4) }),
                                      (0, n.jsx)(y.oR, {
                                          label: F.intl.format(F.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, M.CE)((0, M.$g)(ee, t.currency), et, ei),
                                          className: B.Au,
                                      }),
                                      null != Z && Z.length > 0
                                          ? (0, n.jsxs)("div", {
                                                children: [
                                                    (0, n.jsx)(y.pK, {}),
                                                    (0, n.jsx)(R.m0, {
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
                  (0, n.jsx)(c.H, {
                      leading: (0, n.jsx)(g.Q, {
                          text: F.intl.string(F.t["13/7kX"]),
                          onClick: T,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: F.intl.string(F.t["/AS/gM"]),
                              disabled: v,
                              loading: v,
                              onClick: es,
                          },
                      ],
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(V.A, { "data-migration-pending": !0, onClose: N }),
                  (0, n.jsxs)(h.$m, {
                      "data-migration-pending": !0,
                      className: B.rf,
                      children: [
                          null !== L &&
                              (0, n.jsx)("div", {
                                  className: B.z3,
                                  children: (0, n.jsx)(A.w, { type: "critical", children: L }),
                              }),
                          (0, n.jsx)("div", { children: en }),
                          (0, n.jsxs)(y.Yx, {
                              className: B.S,
                              children: [
                                  (0, n.jsx)(y.Xd, { children: F.intl.string(F.t.iqhIp4) }),
                                  (0, n.jsx)(y.oR, {
                                      label: F.intl.format(F.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, M.CE)((0, M.$g)(ee, t.currency), et, ei),
                                      className: B.Au,
                                  }),
                                  null != Z && Z.length > 0
                                      ? (0, n.jsxs)("div", {
                                            children: [
                                                (0, n.jsx)(y.pK, {}),
                                                (0, n.jsx)(R.m0, {
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
                  (0, n.jsxs)(h.jl, {
                      "data-migration-pending": !0,
                      align: C.A.Align.CENTER,
                      justify: C.A.Justify.BETWEEN,
                      children: [
                          (0, n.jsx)(E.$, {
                              variant: "critical-primary",
                              text: F.intl.string(F.t["/AS/gM"]),
                              disabled: v,
                              onClick: es,
                          }),
                          (0, n.jsx)(O.A, { onClick: T }),
                      ],
                  }),
              ],
          });
}
function H(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: i, showImage: s, onClose: l, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = i.endsAt.toDate());
    let u = [{ variant: "primary", text: F.intl.string(F.t.BddRzS), onClick: l }];
    return (0, n.jsx)(a.Modal, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: F.intl.string(F.t["fZzV/B"]),
        actions: u,
        children: (0, n.jsxs)("div", {
            className: B.rf,
            children: [
                s && (0, n.jsx)("div", { className: B.OC }),
                (0, n.jsx)("div", { children: F.intl.format(F.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function K(e) {
    let t,
        { guildBoostSlot: i, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        P.A.hasFetchedSubscriptions() || (0, p.hP)();
    }, []);
    let a = (0, o.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        c = (0, N.A)(),
        [g, A] = s.useState(1),
        E = (0, j.D)("GuildBoostSlotCancellationModal"),
        T = (0, v.n)("GuildBoostSlotCancellationModal"),
        C = "control" !== E || T,
        I = !C,
        { analyticsLocations: b } = (0, S.Ay)(x.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = C
            ? (0, n.jsxs)(u.d, {
                  transitionState: l,
                  onClose: r,
                  "aria-label": F.intl.string(F.t.CRwE7n),
                  children: [
                      (0, n.jsx)(f.e0, { children: (0, n.jsx)(_.s3, { title: F.intl.string(F.t.CRwE7n) }) }),
                      (0, n.jsx)(d.c, {
                          children: (0, n.jsx)("div", { className: B.Lq, children: (0, n.jsx)(m.y, {}) }),
                      }),
                  ],
              })
            : (0, n.jsx)(h.$m, { "data-migration-pending": !0, children: (0, n.jsx)(m.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, n.jsx)(z, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    isInventory: null == i.premiumGuildSubscription,
                    showImage: I,
                    onNext: () => A(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = C
                    ? (0, n.jsx)(X, {
                          premiumSubscription: a,
                          guildBoostSlotId: i.id,
                          fractionalPremiumInfo: c,
                          transitionState: l,
                          useRefreshHeader: !0,
                          onBack: () => A(1),
                          onNext: () => A(3),
                          onClose: r,
                      })
                    : (0, n.jsx)(h.EO, {
                          "data-migration-pending": !0,
                          transitionState: l,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, n.jsx)(X, {
                              premiumSubscription: a,
                              guildBoostSlotId: i.id,
                              fractionalPremiumInfo: c,
                              transitionState: l,
                              useRefreshHeader: !1,
                              onBack: () => A(1),
                              onNext: () => A(3),
                              onClose: r,
                          }),
                      });
                break;
            case 3:
                t = (0, n.jsx)(H, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    showImage: I,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                throw Error(`Unexpected step: ${g}`);
        }
    return (0, n.jsx)(S.f5, { value: b, children: t });
}
