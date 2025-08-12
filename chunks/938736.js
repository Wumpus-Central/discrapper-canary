n.d(t, {
    $s: () => d,
    Hg: () => u,
    Kn: () => c,
});
var i = n(704215),
    r = n(266454),
    s = n(533525),
    a = n(796634),
    l = n(388032);
let o = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
        return t
            ? l.intl.format(l.t["TYu+MD"], { helpdeskArticle: i })
            : l.intl.format(l.t["omMr+f"], { helpdeskArticle: i });
    },
    c = (e) => {
        let t = (0, s.b)(e),
            n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    d = (e) => {
        let { hasSentAll: t } = e;
        return l.intl.string(l.t.USo4s7);
    },
    u = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return o({
            hasSentAll: n.sent >= a.Q,
            hasSentAtLeastOne: n.sent >= 1,
            helpdeskArticle: t,
        });
    };
