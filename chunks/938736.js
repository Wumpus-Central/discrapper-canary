n.d(t, {
    $s: () => d,
    Hg: () => u,
    Kn: () => c
});
var r = n(704215),
    i = n(605236),
    s = n(533525),
    a = n(796634),
    l = n(388032);
let o = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: r, helpdeskArticle: i } = e;
        return t
            ? l.NW.format(l.t['3OYZMT'], { helpdeskArticle: i })
            : n
              ? l.NW.format(l.t.EkWiZm, {
                    numFriends: a.Q - r,
                    helpdeskArticle: i
                })
              : l.NW.format(l.t.FjrXCg, {
                    numFriends: a.Q,
                    helpdeskArticle: i
                });
    },
    c = (e) => {
        let t = (0, s.b)(e),
            n = (0, i.wE)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    d = (e) => {
        let { hasSentAll: t } = e;
        return t ? l.NW.string(l.t.M47CJS) : l.NW.string(l.t.USo4s7);
    },
    u = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return o({
            hasSentAll: n.sent >= a.Q,
            hasSentAtLeastOne: n.sent >= 1,
            numSentUsers: n.sent,
            helpdeskArticle: t
        });
    };
