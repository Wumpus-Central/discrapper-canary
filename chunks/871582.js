s.d(t, { X8: () => i, dB: () => n });
var r = s(664654),
    a = s(985018);
let i = (e) => {
        let { hasSentAll: t } = e;
        return a.intl.string(a.t.USo4s7);
    },
    n = (e) => {
        let { helpdeskArticle: t, referralsStatuses: s } = e;
        return ((e) => {
            let { hasSentAll: t, hasSentAtLeastOne: s, helpdeskArticle: r } = e;
            return t
                ? a.intl.format(a.t["TYu+MH"], { helpdeskArticle: r })
                : a.intl.format(a.t["omMr+V"], { helpdeskArticle: r });
        })({ hasSentAll: s.sent >= r.Z, hasSentAtLeastOne: s.sent >= 1, helpdeskArticle: t });
    };
