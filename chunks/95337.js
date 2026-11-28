e(321073);
var i = e(477900),
    r = e(582128),
    l = e(189213),
    a = e(834730),
    s = e(136857),
    o = e(975571),
    u = e(448645),
    c = e(473702),
    d = e(916974),
    m = e(682901),
    f = e(88001),
    p = e(652215),
    y = e(707328),
    P = e(792996);
e.d(
    n,
    {},
    {
        r: () => {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    setStep: g,
                    premiumSubscription: h,
                    paymentsBlocked: x,
                    planId: C,
                    handleCancellation: v,
                } = (0, d.X)(),
                [E, b] = (0, r.useState)(!1),
                [D, j] = (0, r.useState)(null),
                N =
                    (h.items.some((t) => {
                        let { planId: n } = t;
                        return !m.JM.has(n);
                    }) &&
                        null == h.renewalMutations) ||
                    h.renewalMutations?.items.find((t) => {
                        let { planId: n } = t;
                        return !m.JM.has(n);
                    }) != null,
                A = [];
            (A.push({ text: P.intl.string(P.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
                N
                    ? A.push({
                          text: P.intl.string(P.t.PDTjLN),
                          onClick: () => g(c.g.PREVIEW),
                          disabled: E,
                          variant: "critical-primary",
                          loading: E,
                      })
                    : A.push({
                          text: P.intl.string(P.t["cY+Oob"]),
                          onClick: () =>
                              (async function () {
                                  (b(!0), j(null));
                                  try {
                                      (await v(), n());
                                  } catch (t) {
                                      j(t instanceof s.Ay ? t : new s.Ay(t));
                                  } finally {
                                      b(!1);
                                  }
                              })(),
                          disabled: E,
                          variant: "critical-primary",
                          loading: E,
                      }));
            let S = (0, u.Zb)(C),
                T = S ? P.intl.string(y.default.qbDPGM) : P.intl.string(P.t.LZunzZ);
            return (0, i.jsx)(l.a, {
                size: "md",
                transitionState: t,
                title: T,
                subtitle: (function (t, n, e, i) {
                    switch (e.status) {
                        case p.Dmq.PAST_DUE:
                        case p.Dmq.PAUSED:
                        case p.Dmq.BILLING_RETRY:
                            return P.intl.string(P.t.FClXh9);
                        default:
                            if (i)
                                return P.intl.formatToPlainString(y.default.MI8Rml, {
                                    endDate: e.currentPeriodEnd,
                                    premiumGroupProductName: (0, f.DP)(),
                                });
                            switch (n) {
                                case m.PremiumTypes.TIER_0:
                                    return t
                                        ? P.intl.format(P.t["l+A50F"], {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : P.intl.format(P.t.Y6Wfaw, { date: e.currentPeriodEnd });
                                case m.PremiumTypes.TIER_1:
                                    return t
                                        ? P.intl.format(P.t.QN7eIt, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : P.intl.format(P.t.X7i9D8, { date: e.currentPeriodEnd });
                                default:
                                    return t
                                        ? P.intl.format(P.t.vuSNhj, {
                                              date: e.currentPeriodEnd,
                                              helpdeskArticle: o.A.getArticleURL(p.MVz.BLOCKED_PAYMENTS),
                                          })
                                        : P.intl.format(P.t.fCdmNs, { date: e.currentPeriodEnd });
                            }
                    }
                })(x, e, h, S),
                actions: A,
                onClose: async () => n(),
                children:
                    null != D
                        ? (0, i.jsx)(a.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: D.message,
                          })
                        : null,
            });
        },
    },
);
