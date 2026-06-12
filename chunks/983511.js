i.d(t, { default: () => W });
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
    S = i(820739),
    T = i(793574),
    x = i(688810),
    p = i(753390),
    f = i(531260),
    N = i(529427),
    _ = i(725836),
    I = i(480642),
    C = i(235986),
    b = i(543767),
    y = i(253390),
    v = i(489254),
    j = i(43594),
    O = i(735164),
    R = i(683433),
    D = i(458785),
    L = i(178368),
    P = i(97352),
    G = i(166403),
    M = i(473145),
    U = i(428262),
    V = i(580630),
    k = i(802790),
    w = i(788868),
    F = i(818348),
    B = i(375708),
    z = i(308808);
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
        d = B.intl.format(B.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (d = B.intl.format(B.t.HbpFLg, {
              paymentGatewayName: F.qm[t.paymentGateway],
              subscriptionManagementLink: (0, U.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (d = B.intl.format(B.t.Hzqe6y, { expirationDate: i.endsAt.toDate() }))
          : s && (d = B.intl.format(B.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = s ? B.intl.string(B.t.iIoSd6) : B.intl.string(B.t.Skzv0u),
        g = t.isPurchasedExternally
            ? []
            : [
                  { variant: "secondary", text: B.intl.string(B.t["ETE/oC"]), onClick: o },
                  { variant: "primary", text: B.intl.string(B.t.PDTjLN), onClick: r },
              ];
    return (0, n.jsx)(a.Modal, {
        transitionState: u,
        onClose: o,
        size: "sm",
        title: c,
        actions: g,
        children: (0, n.jsxs)("div", {
            className: z.rf,
            children: [l && (0, n.jsx)("div", { className: z.OC }), (0, n.jsx)("div", { children: d })],
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
                      s.filter((e) => !(0, M.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? l.id
                      : null);
    if (null == a) throw Error("No slot to cancel");
    let o = (0, U.aE)(e, t);
    await (0, S.HJ)(a),
        await (0, p.nV)(
            e,
            { items: o },
            { amount: 0, currency: e.currency },
            (0, U.UC)(o, e.currency, e.paymentSourceId),
            i,
        );
}
function H(e) {
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
        [N, v] = s.useState(!1),
        [j, L] = s.useState(null),
        [G, M] = s.useMemo(() => {
            try {
                return [(0, y.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        F = s.useRef(f);
    s.useEffect(() => {
        F.current = f;
    }),
        s.useEffect(() => {
            M && F.current();
        }, [M]);
    let { premiumSubscriptionPlan: X, premiumGuildPlan: H } = (0, o.cf)([P.A], () => {
            let e = P.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? P.A.getForSkuAndInterval((0, U.mH)(w.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, x.Ay)(),
        [W] = (0, b.YV)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: T.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != H ? (0, U.Om)(t, G[0]?.quantity ?? 0, H.id) : null,
        [q] = (0, b.YV)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: T.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        Q = null == q || null == X || null == H || null == W;
    if (a && Q)
        return (0, n.jsxs)(u.d, {
            transitionState: r,
            onClose: f,
            "aria-label": B.intl.string(B.t.CRwE7n),
            children: [
                (0, n.jsx)(_.e0, { children: (0, n.jsx)(I.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                (0, n.jsx)(d.c, { children: (0, n.jsx)("div", { className: z.Lq, children: (0, n.jsx)(m.y, {}) }) }),
            ],
        });
    if (Q) return (0, n.jsx)(m.y, {});
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
        { interval: et, intervalCount: ei } = X,
        en = B.intl.format(B.t["0W23cu"], { endDate: q.subscriptionPeriodStart });
    t.isPausedForFractionalPremium &&
        l.fetched &&
        (en = B.intl.format(B.t.eb0xgS, { expirationDate: l.endsAt.toDate() }));
    let es = async () => {
        try {
            v(!0), L(null), await Y(t, G, K, i), p();
        } catch (e) {
            L(B.intl.string(B.t["5mlOCW"])), v(!1);
        }
    };
    return a
        ? (0, n.jsxs)(u.d, {
              transitionState: r,
              onClose: f,
              "aria-label": B.intl.string(B.t.CRwE7n),
              children: [
                  (0, n.jsx)(_.e0, { children: (0, n.jsx)(I.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                  (0, n.jsx)(d.c, {
                      children: (0, n.jsxs)("div", {
                          className: z.rf,
                          children: [
                              null !== j &&
                                  (0, n.jsx)("div", {
                                      className: z.z3,
                                      children: (0, n.jsx)(A.w, { type: "critical", children: j }),
                                  }),
                              (0, n.jsx)("div", { children: en }),
                              (0, n.jsxs)(O.Yx, {
                                  className: z.S,
                                  children: [
                                      (0, n.jsx)(O.Xd, { children: B.intl.string(B.t.iqhIp4) }),
                                      (0, n.jsx)(O.oR, {
                                          label: B.intl.format(B.t["Vg+LRr"], { subscriptionCount: 1 }),
                                          value: (0, V.CE)((0, V.$g)(ee, t.currency), et, ei),
                                          className: z.Au,
                                      }),
                                      null != Z && Z.length > 0
                                          ? (0, n.jsxs)("div", {
                                                children: [
                                                    (0, n.jsx)(O.pK, {}),
                                                    (0, n.jsx)(D.m0, { renewalInvoice: q, isUpdate: !0 }),
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
                          text: B.intl.string(B.t["13/7kX"]),
                          onClick: S,
                          variant: "secondary",
                      }),
                      actions: [
                          {
                              variant: "critical-primary",
                              text: B.intl.string(B.t["/AS/gM"]),
                              disabled: N,
                              loading: N,
                              onClick: es,
                          },
                      ],
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(k.A, { "data-migration-pending": !0, onClose: f }),
                  (0, n.jsxs)(h.$m, {
                      "data-migration-pending": !0,
                      className: z.rf,
                      children: [
                          null !== j &&
                              (0, n.jsx)("div", {
                                  className: z.z3,
                                  children: (0, n.jsx)(A.w, { type: "critical", children: j }),
                              }),
                          (0, n.jsx)("div", { children: en }),
                          (0, n.jsxs)(O.Yx, {
                              className: z.S,
                              children: [
                                  (0, n.jsx)(O.Xd, { children: B.intl.string(B.t.iqhIp4) }),
                                  (0, n.jsx)(O.oR, {
                                      label: B.intl.format(B.t["Vg+LRr"], { subscriptionCount: 1 }),
                                      value: (0, V.CE)((0, V.$g)(ee, t.currency), et, ei),
                                      className: z.Au,
                                  }),
                                  null != Z && Z.length > 0
                                      ? (0, n.jsxs)("div", {
                                            children: [
                                                (0, n.jsx)(O.pK, {}),
                                                (0, n.jsx)(D.m0, { renewalInvoice: q, isUpdate: !0 }),
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
                              text: B.intl.string(B.t["/AS/gM"]),
                              disabled: N,
                              onClick: es,
                          }),
                          (0, n.jsx)(R.A, { onClick: S }),
                      ],
                  }),
              ],
          });
}
function K(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: i, showImage: s, onClose: l, transitionState: r } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = i.endsAt.toDate());
    let u = [{ variant: "primary", text: B.intl.string(B.t.BddRzS), onClick: l }];
    return (0, n.jsx)(a.Modal, {
        transitionState: r,
        onClose: l,
        size: "sm",
        title: B.intl.string(B.t["fZzV/B"]),
        actions: u,
        children: (0, n.jsxs)("div", {
            className: z.rf,
            children: [
                s && (0, n.jsx)("div", { className: z.OC }),
                (0, n.jsx)("div", { children: B.intl.format(B.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function W(e) {
    let t,
        { guildBoostSlot: i, transitionState: l, onClose: r } = e;
    s.useEffect(() => {
        G.A.hasFetchedSubscriptions() || (0, p.hP)();
    }, []);
    let a = (0, o.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        c = (0, f.A)(),
        [g, A] = s.useState(1),
        E = (0, j.D)("GuildBoostSlotCancellationModal"),
        S = (0, v.n)("GuildBoostSlotCancellationModal"),
        C = "control" !== E || S,
        b = !C,
        { analyticsLocations: y } = (0, x.Ay)(T.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a)
        t = C
            ? (0, n.jsxs)(u.d, {
                  transitionState: l,
                  onClose: r,
                  "aria-label": B.intl.string(B.t.CRwE7n),
                  children: [
                      (0, n.jsx)(_.e0, { children: (0, n.jsx)(I.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                      (0, n.jsx)(d.c, {
                          children: (0, n.jsx)("div", { className: z.Lq, children: (0, n.jsx)(m.y, {}) }),
                      }),
                  ],
              })
            : (0, n.jsx)(h.$m, { "data-migration-pending": !0, children: (0, n.jsx)(m.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, n.jsx)(X, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    isInventory: null == i.premiumGuildSubscription,
                    showImage: b,
                    onNext: () => A(2),
                    onClose: r,
                    transitionState: l,
                });
                break;
            case 2:
                t = C
                    ? (0, n.jsx)(H, {
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
                          children: (0, n.jsx)(H, {
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
                t = (0, n.jsx)(K, {
                    premiumSubscription: a,
                    fractionalPremiumInfo: c,
                    showImage: b,
                    onClose: r,
                    transitionState: l,
                });
                break;
            default:
                throw new N.vd({ message: `Unexpected step: ${g}`, extraSentryInformation: { step: g } });
        }
    return (0, n.jsx)(x.f5, { value: y, children: t });
}
