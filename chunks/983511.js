i.d(t, { default: () => q });
var n = i(477900),
    s = i(582128),
    l = i(435558),
    r = i.n(l),
    a = i(189213),
    o = i(17928),
    u = i(224640),
    d = i(430993),
    c = i(696208),
    g = i(123292),
    m = i(935462),
    A = i(289873),
    h = i(683071),
    E = i(821609),
    S = i(820739),
    T = i(793574),
    x = i(688810),
    p = i(277984),
    f = i(531260),
    N = i(725836),
    _ = i(480642),
    I = i(235986),
    C = i(543767),
    b = i(253390),
    v = i(489254),
    y = i(43594),
    j = i(735164),
    O = i(683433),
    R = i(692440),
    L = i(178368),
    D = i(97352),
    P = i(166403),
    G = i(473145),
    M = i(428262),
    U = i(580630),
    V = i(682502),
    k = i(816571),
    w = i(802790),
    F = i(202541),
    B = i(818348),
    z = i(375708),
    Y = i(257488);
function X(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: i,
            isInventory: s,
            showImage: l,
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
          ? (d = z.intl.format(z.t.Hzqe6y, { expirationDate: i.endsAt.toDate() }))
          : s && (d = z.intl.format(z.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = s ? z.intl.string(z.t.iIoSd6) : z.intl.string(z.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: z.intl.string(z.t.PDTjLN), onClick: r },
              ];
    return (0, n.jsx)(a.Modal, {
        transitionState: u,
        onClose: o,
        size: "sm",
        title: c,
        actions: g,
        children: (0, n.jsxs)("div", {
            className: Y.rf,
            children: [l && (0, n.jsx)("div", { className: Y.OC }), (0, n.jsx)("div", { children: d })],
        }),
    });
}
async function H(e, t, i, n) {
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
    let o = (0, M.aE)(e, t);
    await (0, S.HJ)(a),
        await (0, p.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, M.UC)(o, e.currency, e.paymentSourceId),
            i,
        );
}
function K(e) {
    let {
            premiumSubscription: t,
            guildBoostSlotId: i,
            fractionalPremiumInfo: l,
            transitionState: r,
            useRefreshHeader: a,
            onBack: S,
            onNext: p,
            onClose: f,
        } = e,
        [v, y] = s.useState(!1),
        [L, P] = s.useState(null),
        [G, V] = s.useMemo(() => {
            try {
                return [(0, b.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        k = s.useRef(f);
    s.useEffect(() => {
        k.current = f;
    }),
        s.useEffect(() => {
            V && k.current();
        }, [V]);
    let { premiumSubscriptionPlan: B, premiumGuildPlan: X } = (0, o.cf)([D.A], () => {
            let e = D.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? D.A.getForSkuAndInterval((0, M.mH)(F.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, x.Ay)(),
        [W] = (0, C.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: T.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != X ? (0, M.Om)(t, G[0]?.quantity ?? 0, X.id) : null,
        [q] = (0, C.YV)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: T.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == B || null == X || null == W;
    if (a && Q)
        return (0, n.jsxs)(u.d, {
            transitionState: r,
            onClose: f,
            "aria-label": z.intl.string(z.t.CRwE7n),
            children: [
                (0, n.jsx)(N.e0, { children: (0, n.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                (0, n.jsx)(d.c, { children: (0, n.jsx)("div", { className: Y.Lq, children: (0, n.jsx)(A.y, {}) }) }),
            ],
        });
    if (Q) return (0, n.jsx)(A.y, {});
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
        { interval: et, intervalCount: ei } = B,
        en = z.intl.format(z.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    async function es() {
        try {
            y(!0), P(null), await H(t, G, K, i), p();
        } catch (e) {
            P(z.intl.string(z.t["5mlOCW"])), y(!1);
        }
    }
    return (t.isPausedForFractionalPremium &&
        l.fetched &&
        (en = z.intl.format(z.t.eb0xgS, { expirationDate: l.endsAt.toDate() })),
    a)
        ? (0, n.jsxs)(u.d, {
              transitionState: r,
              onClose: f,
              "aria-label": z.intl.string(z.t.CRwE7n),
              children: [
                  (0, n.jsx)(N.e0, { children: (0, n.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                  (0, n.jsx)(d.c, {
                      children: (0, n.jsxs)("div", {
                          className: Y.rf,
                          children: [
                              null !== L &&
                                  (0, n.jsx)("div", {
                                      className: Y.z3,
                                      children: (0, n.jsx)(h.w, { type: "critical", children: L }),
                                  }),
                              (0, n.jsx)("div", { children: en }),
                              (0, n.jsxs)(j.Yx, {
                                  className: Y.S,
                                  children: [
                                      (0, n.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                      (0, n.jsx)(j.oR, {
                                          label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, U.CE)((0, U.$g)(ee, t.currency), et, ei),
                                          className: Y.Au,
                                      }),
                                      null != Z && Z.length > 0
                                          ? (0, n.jsxs)("div", {
                                                children: [
                                                    (0, n.jsx)(j.pK, {}),
                                                    (0, n.jsx)(R.Hc, { renewalInvoice: q, isUpdate: !0 }),
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
                          text: z.intl.string(z.t["13/7kX"]),
                          onClick: S,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: z.intl.string(z.t["/AS/gM"]),
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
                  (0, n.jsx)(w.A, { "data-migration-pending": !0, onClose: f }),
                  (0, n.jsxs)(m.$m, {
                      "data-migration-pending": !0,
                      className: Y.rf,
                      children: [
                          null !== L &&
                              (0, n.jsx)("div", {
                                  className: Y.z3,
                                  children: (0, n.jsx)(h.w, { type: "critical", children: L }),
                              }),
                          (0, n.jsx)("div", { children: en }),
                          (0, n.jsxs)(j.Yx, {
                              className: Y.S,
                              children: [
                                  (0, n.jsx)(j.Xd, { children: z.intl.string(z.t.iqhIp4) }),
                                  (0, n.jsx)(j.oR, {
                                      label: z.intl.format(z.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, U.CE)((0, U.$g)(ee, t.currency), et, ei),
                                      className: Y.Au,
                                  }),
                                  null != Z && Z.length > 0
                                      ? (0, n.jsxs)("div", {
                                            children: [
                                                (0, n.jsx)(j.pK, {}),
                                                (0, n.jsx)(R.Hc, { renewalInvoice: q, isUpdate: !0 }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  (0, n.jsxs)(m.jl, {
                      "data-migration-pending": !0,
                      align: I.A.Align.CENTER,
                      justify: I.A.Justify.BETWEEN,
                      children: [
                          (0, n.jsx)(E.$, {
                              variant: "critical-primary",
                              text: z.intl.string(z.t["/AS/gM"]),
                              disabled: v,
                              onClick: es,
                          }),
                          (0, n.jsx)(O.A, { onClick: S }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: i, showImage: s, onClose: l, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = i.endsAt.toDate());
    let u = [{ variant: "primary", text: z.intl.string(z.t.BddRzS), onClick: l }];
    return (0, n.jsx)(a.Modal, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: z.intl.string(z.t["fZzV/B"]),
        actions: u,
        children: (0, n.jsxs)("div", {
            className: Y.rf,
            children: [
                s && (0, n.jsx)("div", { className: Y.OC }),
                (0, n.jsx)("div", { children: z.intl.format(z.t["H+z0ns"], { endDate: o }) }),
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
        { guildBoostSlot: i, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        P.A.hasFetchedSubscriptions() || (0, p.hP)();
    }, []);
    let a = (0, o.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        c = (0, f.A)(),
        [g, h] = s.useState(1),
        E = (0, y.D)("GuildBoostSlotCancellationModal"),
        S = (0, v.n)("GuildBoostSlotCancellationModal"),
        I = "control" !== E || S,
        C = !I,
        { analyticsLocations: b } = (0, x.Ay)(T.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = I
            ? (0, n.jsxs)(u.d, {
                  transitionState: l,
                  onClose: r,
                  "aria-label": z.intl.string(z.t.CRwE7n),
                  children: [
                      (0, n.jsx)(N.e0, { children: (0, n.jsx)(_.s3, { title: z.intl.string(z.t.CRwE7n) }) }),
                      (0, n.jsx)(d.c, {
                          children: (0, n.jsx)("div", { className: Y.Lq, children: (0, n.jsx)(A.y, {}) }),
                      }),
                  ],
              })
            : (0, n.jsx)(m.$m, { "data-migration-pending": !0, children: (0, n.jsx)(A.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, n.jsx)(X, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    isInventory: null == i.premiumGuildSubscription,
                    showImage: C,
                    onNext: () => h(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = I
                    ? (0, n.jsx)(K, {
                          premiumSubscription: a,
                          guildBoostSlotId: i.id,
                          fractionalPremiumInfo: c,
                          transitionState: l,
                          useRefreshHeader: !0,
                          onBack: () => h(1),
                          onNext: () => h(3),
                          onClose: r,
                      })
                    : (0, n.jsx)(m.EO, {
                          "data-migration-pending": !0,
                          transitionState: l,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, n.jsx)(K, {
                              premiumSubscription: a,
                              guildBoostSlotId: i.id,
                              fractionalPremiumInfo: c,
                              transitionState: l,
                              useRefreshHeader: !1,
                              onBack: () => h(1),
                              onNext: () => h(3),
                              onClose: r,
                          }),
                      });
                break;
            case 3:
                t = (0, n.jsx)(W, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    showImage: C,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                t = (0, n.jsx)(Z, { step: g });
        }
    return (0, n.jsx)(x.f5, {
        value: b,
        children: (0, n.jsx)(k.d, { errorHandlingBehavior: "close-and-alert", guildBoostSlot: i, children: t }),
    });
}
