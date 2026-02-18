i.d(e, { r: () => x }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(158954),
    a = i(397927),
    s = i(975571),
    u = i(927578),
    o = i(473702),
    c = i(916974),
    d = i(788868),
    m = i(88001),
    f = i(652215),
    g = i(519412),
    p = i(985018);
let x = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: s,
                premiumSubscription: m,
                paymentsBlocked: f,
                planId: x,
                handleCancellation: P,
            } = (0, c.X)(),
            [y, C] = (0, r.useState)(!1),
            [v, E] = (0, r.useState)(!1),
            D = async () => {
                C(!0), E(!1);
                try {
                    await P(), e();
                } catch (t) {
                    E(!0), C(!1);
                }
            },
            j =
                (m.items.some((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) &&
                    null == m.renewalMutations) ||
                m.renewalMutations?.items.find((t) => {
                    let { planId: e } = t;
                    return !d.JM.has(e);
                }) != null,
            _ = [];
        _.push({ text: p.intl.string(p.t.h9tkAK), onClick: () => e(), variant: "secondary" }),
            j
                ? _.push({
                      text: p.intl.string(p.t.PDTjLN),
                      onClick: () => s(o.g.PREVIEW),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  })
                : _.push({
                      text: p.intl.string(p.t["cY+Oob"]),
                      onClick: () => D(),
                      disabled: y,
                      variant: "critical-primary",
                      loading: y,
                  });
        let A = (0, u.Zb)(x),
            S = A
                ? p.intl.string(g.default.qbDPGM)
                : p.intl.formatToPlainString(p.t.LZunzZ, { planPremiumType: u.Ay.getTierDisplayNameByPlanId(`${x}`) });
        return (0, n.jsx)(l.Modal, {
            size: "md",
            transitionState: t,
            title: S,
            subtitle: h(f, i, m, A),
            actions: _,
            onClose: async () => e(),
            children: v ? (0, n.jsx)(a.wx6, { type: "critical", children: p.intl.string(p.t["5mlOCW"]) }) : null,
        });
    },
    h = (t, e, i, n) => {
        switch (i.status) {
            case f.Dmq.PAST_DUE:
            case f.Dmq.PAUSED:
            case f.Dmq.BILLING_RETRY:
                return p.intl.string(p.t.FClXh9);
            default:
                if (n)
                    return p.intl.formatToPlainString(g.default.MI8Rml, {
                        endDate: i.currentPeriodEnd,
                        premiumGroupProductName: (0, m.DP)(),
                    });
                switch (e) {
                    case d.PremiumTypes.TIER_0:
                        return t
                            ? p.intl.format(p.t["l+A50F"], {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.Y6Wfaw, { date: i.currentPeriodEnd });
                    case d.PremiumTypes.TIER_1:
                        return t
                            ? p.intl.format(p.t.QN7eIt, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.X7i9D8, { date: i.currentPeriodEnd });
                    default:
                        return t
                            ? p.intl.format(p.t.vuSNhj, {
                                  date: i.currentPeriodEnd,
                                  helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                              })
                            : p.intl.format(p.t.fCdmNs, { date: i.currentPeriodEnd });
                }
        }
    };
