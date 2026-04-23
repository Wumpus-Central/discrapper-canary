n.d(t, { default: () => K });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(189213),
    o = n(17928),
    d = n(224640),
    u = n(430993),
    c = n(696208),
    g = n(123292),
    _ = n(289873),
    m = n(683071),
    h = n(935462),
    A = n(821609),
    p = n(820739),
    E = n(793574),
    T = n(688810),
    S = n(323082),
    x = n(531260),
    f = n(725836),
    b = n(169797),
    N = n(235986),
    C = n(543767),
    I = n(253390),
    v = n(489254),
    y = n(43594),
    j = n(735164),
    O = n(683433),
    R = n(692440),
    L = n(178368),
    D = n(97352),
    G = n(166403),
    P = n(473145),
    M = n(927578),
    U = n(580630),
    k = n(802790),
    V = n(788868),
    w = n(818348),
    B = n(985018),
    F = n(308808);
function z(e) {
    let {
            premiumSubscription: t,
            fractionalPremiumInfo: n,
            isInventory: l,
            showImage: s,
            onNext: a,
            onClose: o,
            transitionState: d,
        } = e,
        u = B.intl.format(B.t.otHdfR, { endDate: t.currentPeriodEnd });
    t.isPurchasedExternally && null != t.paymentGateway
        ? (u = B.intl.format(B.t.HbpFLg, {
              paymentGatewayName: w.qm[t.paymentGateway],
              subscriptionManagementLink: (0, M.tW)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
          }))
        : t.isPausedForFractionalPremium
          ? (u = B.intl.format(B.t.Hzqe6y, { expirationDate: n.endsAt.toDate() }))
          : l && (u = B.intl.format(B.t.gXSnul, { endDate: t.currentPeriodEnd }));
    let c = l ? B.intl.string(B.t.iIoSd6) : B.intl.string(B.t.Skzv0u),
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
            children: [s && (0, i.jsx)("div", { className: F.OC }), (0, i.jsx)("div", { children: u })],
        }),
    });
}
async function X(e, t, n, i) {
    let l,
        s,
        r =
            null != i
                ? i
                : ((l = Object.values(L.A.boostSlots)),
                  null !=
                  (s = a().sortBy(
                      l.filter((e) => !(0, P.I5)(e)),
                      (e) => [
                          null != e.premiumGuildSubscription,
                          null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null,
                      ],
                  )[0])
                      ? s.id
                      : null);
    if (null == r) throw Error("No slot to cancel");
    let o = (0, M.aE)(e, t);
    await (0, p.HJ)(r),
        await (0, S.nV)(
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
            fractionalPremiumInfo: s,
            transitionState: a,
            useRefreshHeader: r,
            onBack: p,
            onNext: S,
            onClose: x,
        } = e,
        [v, y] = l.useState(!1),
        [L, G] = l.useState(null),
        [P, w] = l.useMemo(() => {
            try {
                return [(0, I.v)(t, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [t]),
        z = l.useRef(x);
    l.useEffect(() => {
        z.current = x;
    }),
        l.useEffect(() => {
            w && z.current();
        }, [w]);
    let { premiumSubscriptionPlan: Y, premiumGuildPlan: H } = (0, o.cf)([D.A], () => {
            let e = D.A.get(t.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan:
                    null != e ? D.A.getForSkuAndInterval((0, M.mH)(V.pe.GUILD), e.interval, e.intervalCount) : null,
            };
        }),
        { analyticsLocations: K } = (0, T.Ay)(),
        [W] = (0, C.Kq)({
            subscriptionId: t.id,
            renewal: !0,
            currency: t.currency,
            paymentSourceId: t.paymentSourceId,
            analyticsLocations: K,
            analyticsLocation: E.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW,
        }),
        Z = null != H ? (0, M.Om)(t, P[0]?.quantity ?? 0, H.id) : null,
        [Q] = (0, C.Kq)({
            subscriptionId: t.id,
            items: Z,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: E.A.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW,
        }),
        q = null == Q || null == Y || null == H || null == W;
    if (r && q)
        return (0, i.jsxs)(d.d, {
            transitionState: a,
            onClose: x,
            children: [
                (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                (0, i.jsx)(u.c, { children: (0, i.jsx)("div", { className: F.Lq, children: (0, i.jsx)(_.y, {}) }) }),
            ],
        });
    if (q) return (0, i.jsx)(_.y, {});
    let J =
            (t.items.some((e) => {
                let { planId: t } = e;
                return !V.pW.has(t);
            }) &&
                null == t.renewalMutations) ||
            t.renewalMutations?.items.find((e) => {
                let { planId: t } = e;
                return !V.pW.has(t);
            }) != null,
        $ = P.some((e) => {
            let { planId: t } = e;
            return V.pW.has(t);
        }),
        ee = J || $ ? Q.total - W.total : -W.total,
        { interval: et, intervalCount: en } = Y,
        ei = B.intl.format(B.t["0W23cu"], { endDate: Q.subscriptionPeriodStart });
    t.isPausedForFractionalPremium &&
        s.fetched &&
        (ei = B.intl.format(B.t.eb0xgS, { expirationDate: s.endsAt.toDate() }));
    let el = async () => {
        try {
            y(!0), G(null), await X(t, P, K, n), S();
        } catch (e) {
            G(B.intl.string(B.t["5mlOCW"])), y(!1);
        }
    };
    return r
        ? (0, i.jsxs)(d.d, {
              transitionState: a,
              onClose: x,
              children: [
                  (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                  (0, i.jsx)(u.c, {
                      children: (0, i.jsxs)("div", {
                          className: F.rf,
                          children: [
                              null !== L &&
                                  (0, i.jsx)("div", {
                                      className: F.z3,
                                      children: (0, i.jsx)(m.w, { type: "critical", children: L }),
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
                                                        renewalInvoice: Q,
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
                              disabled: v,
                              loading: v,
                              onClick: el,
                          },
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(k.A, { "data-migration-pending": !0, onClose: x }),
                  (0, i.jsxs)(h.$m, {
                      "data-migration-pending": !0,
                      className: F.rf,
                      children: [
                          null !== L &&
                              (0, i.jsx)("div", {
                                  className: F.z3,
                                  children: (0, i.jsx)(m.w, { type: "critical", children: L }),
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
                                                    renewalInvoice: Q,
                                                    isUpdate: !0,
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsxs)(h.jl, {
                      "data-migration-pending": !0,
                      align: N.A.Align.CENTER,
                      justify: N.A.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(A.$, {
                              variant: "critical-primary",
                              text: B.intl.string(B.t["/AS/gM"]),
                              disabled: v,
                              onClick: el,
                          }),
                          (0, i.jsx)(O.A, { onClick: p }),
                      ],
                  }),
              ],
          });
}
function H(e) {
    let { premiumSubscription: t, fractionalPremiumInfo: n, showImage: l, onClose: s, transitionState: a } = e,
        o = t.currentPeriodEnd;
    t.isPausedForFractionalPremium && (o = n.endsAt.toDate());
    let d = [{ variant: "primary", text: B.intl.string(B.t.BddRzS), onClick: s }];
    return (0, i.jsx)(r.Modal, {
        transitionState: a,
        onClose: s,
        size: "sm",
        title: B.intl.string(B.t["fZzV/B"]),
        actions: d,
        children: (0, i.jsxs)("div", {
            className: F.rf,
            children: [
                l && (0, i.jsx)("div", { className: F.OC }),
                (0, i.jsx)("div", { children: B.intl.format(B.t["H+z0ns"], { endDate: o }) }),
            ],
        }),
    });
}
function K(e) {
    let t,
        { guildBoostSlot: n, transitionState: s, onClose: a } = e;
    l.useEffect(() => {
        G.A.hasFetchedSubscriptions() || (0, S.hP)();
    }, []);
    let r = (0, o.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        c = (0, x.A)(),
        [g, m] = l.useState(1),
        A = (0, y.D)("GuildBoostSlotCancellationModal"),
        p = (0, v.n)("GuildBoostSlotCancellationModal"),
        N = "control" !== A || p,
        C = !N,
        { analyticsLocations: I } = (0, T.Ay)(E.A.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == r)
        t = N
            ? (0, i.jsxs)(d.d, {
                  transitionState: s,
                  onClose: a,
                  children: [
                      (0, i.jsx)(f.e0, { children: (0, i.jsx)(b.s3, { title: B.intl.string(B.t.CRwE7n) }) }),
                      (0, i.jsx)(u.c, {
                          children: (0, i.jsx)("div", { className: F.Lq, children: (0, i.jsx)(_.y, {}) }),
                      }),
                  ],
              })
            : (0, i.jsx)(h.$m, { "data-migration-pending": !0, children: (0, i.jsx)(_.y, {}) });
    else
        switch (g) {
            case 1:
                t = (0, i.jsx)(z, {
                    premiumSubscription: r,
                    fractionalPremiumInfo: c,
                    isInventory: null == n.premiumGuildSubscription,
                    showImage: C,
                    onNext: () => m(2),
                    onClose: a,
                    transitionState: s,
                });
                break;
            case 2:
                t = N
                    ? (0, i.jsx)(Y, {
                          premiumSubscription: r,
                          guildBoostSlotId: n.id,
                          fractionalPremiumInfo: c,
                          transitionState: s,
                          useRefreshHeader: !0,
                          onBack: () => m(1),
                          onNext: () => m(3),
                          onClose: a,
                      })
                    : (0, i.jsx)(h.EO, {
                          "data-migration-pending": !0,
                          transitionState: s,
                          parentComponent: "GuildBoostSlotCancellationModal",
                          children: (0, i.jsx)(Y, {
                              premiumSubscription: r,
                              guildBoostSlotId: n.id,
                              fractionalPremiumInfo: c,
                              transitionState: s,
                              useRefreshHeader: !1,
                              onBack: () => m(1),
                              onNext: () => m(3),
                              onClose: a,
                          }),
                      });
                break;
            case 3:
                t = (0, i.jsx)(H, {
                    premiumSubscription: r,
                    fractionalPremiumInfo: c,
                    showImage: C,
                    onClose: a,
                    transitionState: s,
                });
                break;
            default:
                throw Error(`Unexpected step: ${g}`);
        }
    return (0, i.jsx)(T.f5, { value: I, children: t });
}
