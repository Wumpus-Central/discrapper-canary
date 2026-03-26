n.d(t, { X8: () => l, dB: () => a });
var i = n(664654),
    s = n(985018);
let l = (e) => {
        let { hasSentAll: t } = e;
        return s.intl.string(s.t.USo4s7);
    },
    a = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return ((e) => {
            let { hasSentAll: t, hasSentAtLeastOne: n, helpdeskArticle: i } = e;
            return t
                ? s.intl.format(s.t["TYu+MH"], { helpdeskArticle: i })
                : s.intl.format(s.t["omMr+V"], { helpdeskArticle: i });
        })({ hasSentAll: n.sent >= i.Z, hasSentAtLeastOne: n.sent >= 1, helpdeskArticle: t });
    };
