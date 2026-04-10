n.d(t, { default: () => B });
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(732955),
    c = n(397927),
    u = n(923408),
    m = n(793574),
    g = n(688810),
    _ = n(323082),
    x = n(531260),
    h = n(725836),
    A = n(169797),
    p = n(235986),
    T = n(543767),
    f = n(253390),
    S = n(489254),
    E = n(43594),
    b = n(735164),
    C = n(683433),
    v = n(692440),
    N = n(178368),
    I = n(97352),
    j = n(166403),
    y = n(473145),
    O = n(927578),
    R = n(580630),
    L = n(802790),
    P = n(788868),
    D = n(818348),
    G = n(985018),
    M = n(910200);
function k(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: s,
            showImage: l,
            onNext: r,
            onClose: o,
            transitionState: d,
        } = e,
        c = G.intl.format(G.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (c = G.intl.format(G.t.HbpFLg, {
              paymentGatewayName: D.qm[t.paymentGateway],
              subscriptionManagementLink: (0, O.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (c = G.intl.format(G.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : s && (c = G.intl.format(G.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let u = s ? G.intl.string(G.t.iIoSd6) : G.intl.string(G.t.Skzv0u),
        m = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: G.intl.string(G.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: G.intl.string(G.t.PDTjLN), onClick: r },
              ];
    return (0, i.jsx)(a.Modal, {
        transitionState: d,
        onClose: o,
        size: "sm",
        title: u,
        actions: m,
        children: (0, i.jsxs)("div", {
            className: M.rf,
            children: [l && (0, i.jsx)("div", { className: M.OC }), (0, i.jsx)("div", { children: c })],
        }),
    });
}
async function U(e, t, n, i) {
    let s,
        l,
        a =
            null != i
                ? i
                : ((s = Object.values(N.A.boostSlots)),
                  null !=
                  (l = r().sortBy(
                      s.filter((e) => !(0, y.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, O.aE)(e, t);
    await (0, u.HJ)(a),
        await (0, _.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, O.UC)(o, e.currency, e.paymentSourceId),
            n,
        );
}
function w(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: n,
            fractionalPremiumInfo: l,
            transitionState: r,
            useRefreshHeader: a,
            onBack: u,
            onNext: _,
            onClose: x,
        } = e,
        [S, E] = s.useState(!1),
        [N, j] = s.useState(null),
        [y, D] = s.useMemo(() => {
            try {
                return [(0, f.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        k = s.useRef(x);
    s.useEffect(() => {
        k.current = x;
    }),
        s.useEffect(() => {
            D && k.current();
        }, [D]);
    let { premiumSubscriptionPlan: w, premiumGuildPlan: V } = (0, o.cf)([I.A], () => {
            let e = I.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? I.A.getForSkuAndInterval((0, O.mH)(P.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: B } = (0, g.Ay)(),
        [F] = (0, T.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: B,
            analyticsLocation: m.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        H = null != V ? (0, O.Om)(t, y[0]?.quantity ?? 0, V.id) : null,
        [z] = (0, T.Kq)({
            subscriptionId: t.id,
            items: H,
            renewal: !0,
            analyticsLocations: B,
            analyticsLocation: m.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Y = null == z || null == w || null == V || null == F;
    if (a && Y)
        return (0, i.jsxs)(d.dWK, {
            transitionState: r,
            onClose: x,
            children: [
                (0, i.jsx)(h.e0, { children: (0, i.jsx)(A.s3, { title: G.intl.string(G.t.CRwE7n) }) }),
                (0, i.jsx)(d.cwr, {
                    children: (0, i.jsx)("div", { className: M.Lq, children: (0, i.jsx)(c.y$y, {}) }),
                }),
            ],
        });
    if (Y) return (0, i.jsx)(c.y$y, {});
    let X =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !P.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !P.pW.has(t);
            }) != null,
        K = y.some((e) => {
            let { planId: t } = e;
            return P.pW.has(t);
        }),
        W = X || K ? z.total - F.total : -F.total,
        { interval: Z, intervalCount: q } = w,
        Q = G.intl.format(G.t["0W23cu"], { endDate: z.subscriptionPeriodStart });
    t.isPausedForFractionalPremium &&
        l.fetched &&
        (Q = G.intl.format(G.t.eb0xgS, { expirationDate: l.endsAt.toDate() }));
    let J = async () => {
        try {
            E(!0), j(null), await U(t, y, B, n), _();
        } catch (e) {
            j(G.intl.string(G.t["5mlOCW"])), E(!1);
        }
    };
    return a
        ? (0, i.jsxs)(d.dWK, {
              transitionState: r,
              onClose: x,
              children: [
                  (0, i.jsx)(h.e0, { children: (0, i.jsx)(A.s3, { title: G.intl.string(G.t.CRwE7n) }) }),
                  (0, i.jsx)(d.cwr, {
                      children: (0, i.jsxs)("div", {
                          className: M.rf,
                          children: [
                              null !== N &&
                                  (0, i.jsx)("div", {
                                      className: M.z3,
                                      children: (0, i.jsx)(c.wx6, { type: "critical", children: N }),
                                  }),
                              (0, i.jsx)("div", { children: Q }),
                              (0, i.jsxs)(b.Yx, {
                                  className: M.S,
                                  children: [
                                      (0, i.jsx)(b.Xd, { children: G.intl.string(G.t.iqhIp4) }),
                                      (0, i.jsx)(b.oR, {
                                          label: G.intl.format(G.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, R.CE)((0, R.$g)(W, t.currency), Z, q),
                                          className: M.Au,
                                      }),
                                      null != H && H.length > 0
                                          ? (0, i.jsxs)("div", {
                                                children: [
                                                    (0, i.jsx)(b.pK, {}),
                                                    (0, i.jsx)(v.m0, {
                                                        premiumSubscription: t,
                                                        renewalInvoice: z,
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
                  (0, i.jsx)(d.H7u, {
                      leading: (0, i.jsx)(d.QWc, {
                          text: G.intl.string(G.t["13/7kX"]),
                          onClick: u,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: G.intl.string(G.t["/AS/gM"]),
                              disabled: S,
                              loading: S,
                              onClick: J,
                          },
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(L.A, { "data-migration-pending": !0, onClose: x }),
                  (0, i.jsxs)(c.$mQ, {
                      "data-migration-pending": !0,
                      className: M.rf,
                      children: [
                          null !== N &&
                              (0, i.jsx)("div", {
                                  className: M.z3,
                                  children: (0, i.jsx)(c.wx6, { type: "critical", children: N }),
                              }),
                          (0, i.jsx)("div", { children: Q }),
                          (0, i.jsxs)(b.Yx, {
                              className: M.S,
                              children: [
                                  (0, i.jsx)(b.Xd, { children: G.intl.string(G.t.iqhIp4) }),
                                  (0, i.jsx)(b.oR, {
                                      label: G.intl.format(G.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, R.CE)((0, R.$g)(W, t.currency), Z, q),
                                      className: M.Au,
                                  }),
                                  null != H && H.length > 0
                                      ? (0, i.jsxs)("div", {
                                            children: [
                                                (0, i.jsx)(b.pK, {}),
                                                (0, i.jsx)(v.m0, {
                                                    premiumSubscription: t,
                                                    renewalInvoice: z,
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
                      align: p.A.Align.CENTER,
                      justify: p.A.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(c.Button, {
                              variant: "critical-primary",
                              text: G.intl.string(G.t["/AS/gM"]),
                              disabled: S,
                              onClick: J,
                          }),
                          (0, i.jsx)(C.A, { onClick: u }),
                      ],
                  }),
              ],
          });
}
function V(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: s, onClose: l, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let d = [{ variant: "primary", text: G.intl.string(G.t.BddRzS), onClick: l }];
    return (0, i.jsx)(a.Modal, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: G.intl.string(G.t["fZzV/B"]),
        actions: d,
        children: (0, i.jsxs)("div", {
            className: M.rf,
            children: [
                s && (0, i.jsx)("div", { className: M.OC }),
                (0, i.jsx)("div", { children: G.intl.format(G.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function B(e) {
    let t,
        { guildBoostSlot: n, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        j.A.hasFetchedSubscriptions() || (0, _.hP)();
    }, []);
    let a = (0, o.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        u = (0, x.A)(),
        [p, T] = s.useState(1),
        f = (0, E.D)("GuildBoostSlotCancellationModal"),
        b = (0, S.n)("GuildBoostSlotCancellationModal"),
        C = "control" !== f || b,
        v = !C,
        { analyticsLocations: N } = (0, g.Ay)(m.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = C
            ? (0, i.jsxs)(d.dWK, {
                  transitionState: l,
                  onClose: r,
                  children: [
                      (0, i.jsx)(h.e0, { children: (0, i.jsx)(A.s3, { title: G.intl.string(G.t.CRwE7n) }) }),
                      (0, i.jsx)(d.cwr, {
                          children: (0, i.jsx)("div", { className: M.Lq, children: (0, i.jsx)(c.y$y, {}) }),
                      }),
                  ],
              })
            : (0, i.jsx)(c.$mQ, { "data-migration-pending": !0, children: (0, i.jsx)(c.y$y, {}) });
    else
        switch (p) {
            case 1:
                t = (0, i.jsx)(k, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: u,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: v,
                    onNext: () => T(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = C
                    ? (0, i.jsx)(w, {
                          premiumSubscription: a,
                          guildBoostSlotId: n.id,
                          fractionalPremiumInfo: u,
                          transitionState: l,
                          useRefreshHeader: !0,
                          onBack: () => T(1),
                          onNext: () => T(3),
                          onClose: r,
                      })
                    : (0, i.jsx)(c.EOs, {
                          "data-migration-pending": !0,
                          transitionState: l,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, i.jsx)(w, {
                              premiumSubscription: a,
                              guildBoostSlotId: n.id,
                              fractionalPremiumInfo: u,
                              transitionState: l,
                              useRefreshHeader: !1,
                              onBack: () => T(1),
                              onNext: () => T(3),
                              onClose: r,
                          }),
                      });
                break;
            case 3:
                t = (0, i.jsx)(V, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: u,
                    showImage: v,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                throw Error(`Unexpected step: ${p}`);
        }
    return (0, i.jsx)(g.f5, { value: N, children: t });
}
