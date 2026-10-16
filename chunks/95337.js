(n.d(e, { r: () => g }), n(321073));
var i = n(477900),
    r = n(582128),
    l = n(189213),
    a = n(683071),
    s = n(975571),
    o = n(158045),
    u = n(473702),
    c = n(916974),
    d = n(202541),
    m = n(88001),
    f = n(652215),
    p = n(148155),
    C = n(105292);
let g = () => {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            setStep: g,
            premiumSubscription: x,
            paymentsBlocked: h,
            planId: y,
            handleCancellation: P,
        } = (0, c.X)(),
        [v, E] = (0, r.useState)(!1),
        [D, j] = (0, r.useState)(!1);
    async function S() {
        (E(!0), j(!1));
        try {
            (await P(), e());
        } catch (t) {
            (j(!0), E(!1));
        }
    }
    let T =
            (x.items.some((t) => {
                let { planId: e } = t;
                return !d.JM.has(e);
            }) &&
                null == x.renewalMutations) ||
            x.renewalMutations?.items.find((t) => {
                let { planId: e } = t;
                return !d.JM.has(e);
            }) != null,
        A = [];
    (A.push({ text: C.intl.string(C.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
        T
            ? A.push({
                  text: C.intl.string(C.t.PDTjLN),
                  onClick: () => g(u.g.PREVIEW),
                  disabled: v,
                  variant: "critical-primary",
                  loading: v,
              })
            : A.push({
                  text: C.intl.string(C.t["cY+Oob"]),
                  onClick: () => S(),
                  disabled: v,
                  variant: "critical-primary",
                  loading: v,
              }));
    let N = (0, o.Zb)(y),
        b = N ? C.intl.string(p.default.qbDPGM) : C.intl.string(C.t.LZunzZ);
    return (0, i.jsx)(l.a, {
        size: "md",
        transitionState: t,
        title: b,
        subtitle: (function (t, e, n, i) {
            switch (n.status) {
                case f.Dmq.PAST_DUE:
                case f.Dmq.PAUSED:
                case f.Dmq.BILLING_RETRY:
                    return C.intl.string(C.t.FClXh9);
                default:
                    if (i)
                        return C.intl.formatToPlainString(p.default.MI8Rml, {
                            endDate: n.currentPeriodEnd,
                            premiumGroupProductName: (0, m.DP)(),
                        });
                    switch (e) {
                        case d.PremiumTypes.TIER_0:
                            return t
                                ? C.intl.format(C.t["l+A50F"], {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : C.intl.format(C.t.Y6Wfaw, { date: n.currentPeriodEnd });
                        case d.PremiumTypes.TIER_1:
                            return t
                                ? C.intl.format(C.t.QN7eIt, {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : C.intl.format(C.t.X7i9D8, { date: n.currentPeriodEnd });
                        default:
                            return t
                                ? C.intl.format(C.t.vuSNhj, {
                                      date: n.currentPeriodEnd,
                                      helpdeskArticle: s.A.getArticleURL(f.MVz.BLOCKED_PAYMENTS),
                                  })
                                : C.intl.format(C.t.fCdmNs, { date: n.currentPeriodEnd });
                    }
            }
        })(h, n, x, N),
        actions: A,
        onClose: async () => e(),
        children: D
            ? (0, i.jsx)(a.w, { type: "critical", message: C.intl.string(C.t["5mlOCW"]), role: "alert" })
            : null,
    });
};
