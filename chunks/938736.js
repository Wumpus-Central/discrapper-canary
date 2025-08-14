n.d(t, {
    $s: () => c,
    Hg: () => d,
    Kn: () => o,
});
var i = n(704215),
    r = n(266454),
    s = n(533525),
    a = n(796634),
    l = n(388032);
let o = (e) => {
        let t = (0, s.b)(e),
            n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    c = (e) => {
        let { hasSentAll: t } = e;
        return l.intl.string(l.t.USo4s7);
    },
    d = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return ((e) => {
            let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
            return t
                ? l.intl.format(l.t["TYu+MD"], { helpdeskArticle: i })
                : l.intl.format(l.t["omMr+f"], { helpdeskArticle: i });
        })({
            hasSentAll: n.sent >= a.Q,
            hasSentAtLeastOne: n.sent >= 1,
            helpdeskArticle: t,
        });
    };
