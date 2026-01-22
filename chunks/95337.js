n.d(t, { r: () => m }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(975571),
    l = n(927578),
    c = n(473702),
    u = n(916974),
    d = n(788868),
    f = n(88001),
    p = n(652215),
    _ = n(519412),
    h = n(985018);
let m = () => {
        var e;
        let {
                transitionState: t,
                onClose: n,
                premiumType: o,
                setStep: f,
                premiumSubscription: p,
                paymentsBlocked: m,
                planId: E,
                handleCancellation: b,
            } = (0, u.X)(),
            [y, O] = (0, i.useState)(!1),
            [A, v] = (0, i.useState)(!1),
            S = async () => {
                O(!0), v(!1);
                try {
                    await b(), n();
                } catch (e) {
                    v(!0), O(!1);
                }
            },
            I =
                (p.items.some((e) => {
                    let { planId: t } = e;
                    return !d.JM.has(t);
                }) &&
                    null == p.renewalMutations) ||
                (null == (e = p.renewalMutations)
                    ? void 0
                    : e.items.find((e) => {
                          let { planId: t } = e;
                          return !d.JM.has(t);
                      })) != null,
            T = [];
        T.push({
            text: h.intl.string(h.t.h9tkAK),
            onClick: () => n(),
            variant: "secondary",
        }),
            I
                ? T.push({
                      text: h.intl.string(h.t.PDTjLN),
                      onClick: () => f(c.g.PREVIEW),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  })
                : T.push({
                      text: h.intl.string(h.t["cY+Oob"]),
                      onClick: () => S(),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  });
        let C = (0, l.Zb)(E),
            N = C
                ? h.intl.string(_.default.qbDPGM)
                : h.intl.formatToPlainString(h.t.LZunzZ, {
                      planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(E)),
                  });
        return (0, r.jsx)(a.Modal, {
            size: "md",
            transitionState: t,
            title: N,
            subtitle: g(m, o, p, C),
            actions: T,
            onClose: async () => n(),
            children: A
                ? (0, r.jsx)(s.wx6, {
                      type: "critical",
                      children: h.intl.string(h.t["5mlOCW"]),
                  })
                : null,
        });
    },
    g = (e, t, n, r) => {
        switch (n.status) {
            case p.Dmq.PAST_DUE:
            case p.Dmq.PAUSED:
            case p.Dmq.BILLING_RETRY:
                return h.intl.string(h.t.FClXh9);
            default:
                if (r)
                    return h.intl.formatToPlainString(_.default.MI8Rml, {
                        endDate: n.currentPeriodEnd,
                        premiumGroupProductName: (0, f.DP)(),
                    });
                switch (t) {
                    case d.PremiumTypes.TIER_0:
                        return e
                            ? h.intl.format(h.t["l+A50F"], {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.Y6Wfaw, { date: n.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return e
                            ? h.intl.format(h.t.QN7eIt, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.X7i9D8, { date: n.currentPeriodEnd });
                    default:
                        return e
                            ? h.intl.format(h.t.vuSNhj, {
                                  date: n.currentPeriodEnd,
                                  helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                              })
                            : h.intl.format(h.t.fCdmNs, { date: n.currentPeriodEnd });
                }
        }
    };
