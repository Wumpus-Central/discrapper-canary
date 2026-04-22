i.d(e, { r: () => x }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(189213),
    a = i(683071),
    s = i(975571),
    u = i(927578),
    o = i(473702),
    c = i(916974),
    d = i(788868),
    m = i(88001),
    f = i(652215),
    p = i(466919),
    g = i(985018);
let x = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: s,
                premiumSubscription: m,
                paymentsBlocked: f,
                planId: x,
                handleCancellation: C,
            } = (0, c.X)(),
            [P, y] = (0, r.useState)(!1),
            [v, E] = (0, r.useState)(!1),
            j = async () => {
                y(!0), E(!1);
                try {
                    await C(), e();
                } catch (t) {
                    E(!0), y(!1);
                }
            },
            _ =
                (m.items.some((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) &&
                    null == m.renewalMutations) ||
                m.renewalMutations?.items.find((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) != null,
            D = [];
        D.push({ text: g.intl.string(g.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
            _
                ? D.push({
                      text: g.intl.string(g.t.PDTjLN),
                      onClick: () => s(o.g.PREVIEW),
                      disabled: P,
                      variant: "critical-primary",
                      loading: P,
                  })
                : D.push({
                      text: g.intl.string(g.t["cY+Oob"]),
                      onClick: () => j(),
                      disabled: P,
                      variant: "critical-primary",
                      loading: P,
                  });
        let N = (0, u.Zb)(x),
            S = N ? g.intl.string(p.default.qbDPGM) : g.intl.string(g.t.LZunzZ);
        return (0, n.jsx)(l.Modal, {
            size: "md",
            transitionState: t,
            title: S,
            subtitle: h(f, i, m, N),
            actions: D,
            onClose: async () => e(),
            children: v ? (0, n.jsx)(a.w, { type: "critical", children: g.intl.string(g.t["5mlOCW"]) }) : null,
        });
    },
    h = (t, e, i, n) => {
        switch (i.status) {
            case f.Dmq.PAST_DUE:
            case f.Dmq.PAUSED:
            case f.Dmq.BILLING_RETRY:
                return g.intl.string(g.t.FClXh9);
            default:
                if (n)
                    return g.intl.formatToPlainString(p.default.MI8Rml, {
                        endDate: i.currentPeriodEnd,
                        premiumGroupProductName: (0, m.DP)(),
                    });
                switch (e) {
                    case d.PremiumTypes.TIER_0:
                        return t
                            ? g.intl.format(g.t["l+A50F"], {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : g.intl.format(g.t.Y6Wfaw, { date: i.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return t
                            ? g.intl.format(g.t.QN7eIt, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : g.intl.format(g.t.X7i9D8, { date: i.currentPeriodEnd });
                    default:
                        return t
                            ? g.intl.format(g.t.vuSNhj, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : g.intl.format(g.t.fCdmNs, { date: i.currentPeriodEnd });
                }
        }
    };
