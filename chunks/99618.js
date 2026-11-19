var i = n(811091),
    l = n(682901),
    s = n(424903),
    r = n(652215);
function a(e) {
    return e.type === r.rzx.GIFT && null != e.giftSubscription && e.status !== r.Dmq.ENDED;
}
n.d(
    t,
    {},
    {
        Gx: function (e) {
            return Array.from(e)
                .filter(a)
                .sort((e, t) => i.default.compare(t.id, e.id));
        },
        MJ: function (e) {
            let { giftSubscription: t, status: n, canceledAt: i, currentPeriodEnd: l } = e,
                { recipientUserId: a } = t;
            return t.status === s.E.PENDING
                ? { kind: "pending", expiresAt: t.acceptanceExpiresAt, isCanceled: null != i }
                : n === r.Dmq.PAST_DUE || n === r.Dmq.BILLING_RETRY
                  ? { kind: "payment_failed", recipientUserId: a }
                  : null != i || t.status === s.E.ENDED
                    ? { kind: "canceled", recipientUserId: a, canResubscribe: t.status === s.E.ACTIVE }
                    : { kind: "active", renewsAt: l, recipientUserId: a };
        },
        Tr: function (e) {
            switch (e) {
                case l.MM.PREMIUM_GIFT_MONTH_TIER_2:
                    return { interval: l.WT.MONTH, intervalCount: 1 };
                case l.MM.PREMIUM_GIFT_YEAR_TIER_2:
                    return { interval: l.WT.YEAR, intervalCount: 1 };
                default:
                    return null;
            }
        },
        VF: a,
    },
);
