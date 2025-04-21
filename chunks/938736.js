n.d(t, {
    $s: () => d,
    Hg: () => u,
    Kn: () => c
});
var i = n(704215),
    r = n(605236),
    s = n(533525),
    l = n(796634),
    a = n(388032);
let o = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: r } = e;
        return t
            ? a.intl.format(a.t['3OYZMT'], { helpdeskArticle: r })
            : n
              ? a.intl.format(a.t.EkWiZm, {
                    numFriends: l.Q - i,
                    helpdeskArticle: r
                })
              : a.intl.format(a.t.FjrXCg, {
                    numFriends: l.Q,
                    helpdeskArticle: r
                });
    },
    c = (e) => {
        let t = (0, s.b)(e),
            n = (0, r.wE)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    d = (e) => {
        let { hasSentAll: t } = e;
        return t ? a.intl.string(a.t.M47CJS) : a.intl.string(a.t.USo4s7);
    },
    u = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return o({
            hasSentAll: n.sent >= l.Q,
            hasSentAtLeastOne: n.sent >= 1,
            numSentUsers: n.sent,
            helpdeskArticle: t
        });
    };
