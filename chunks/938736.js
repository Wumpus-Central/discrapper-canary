n.d(t, {
    $s: () => u,
    Hg: () => d,
    Kn: () => c,
});
var r = n(704215),
    i = n(266454),
    a = n(533525),
    o = n(796634),
    s = n(388032);
let l = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: r } = e;
        return t
            ? s.intl.format(s.t["TYu+MD"], { helpdeskArticle: r })
            : s.intl.format(s.t["omMr+f"], { helpdeskArticle: r });
    },
    c = (e) => {
        let t = (0, a.b)(e),
            n = (0, i.Nj)(r.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    u = (e) => {
        let { hasSentAll: t } = e;
        return s.intl.string(s.t.USo4s7);
    },
    d = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return l({
            hasSentAll: n.sent >= o.Q,
            hasSentAtLeastOne: n.sent >= 1,
            helpdeskArticle: t,
        });
    };
