n.d(t, {
    $s: () => u,
    Hg: () => m,
    Kn: () => d
});
var i = n(704215),
    r = n(266454),
    s = n(53521),
    a = n(533525),
    l = n(796634),
    o = n(388032);
let c = (e) => {
        let { hasSentAll: t, hasSentAtLeastOne: n, numSentUsers: i, helpdeskArticle: r } = e,
            a = s.Z.getCurrentConfig({ location: 'getStandardExperienceSubheaderCopy' }, { autoTrackExposure: !1 });
        return t
            ? a.enabled
                ? o.intl.format(o.t['TYu+MD'], { helpdeskArticle: r })
                : o.intl.format(o.t['3OYZMT'], { helpdeskArticle: r })
            : n
              ? a.enabled
                  ? o.intl.format(o.t['omMr+f'], { helpdeskArticle: r })
                  : o.intl.format(o.t.EkWiZm, {
                        numFriends: l.Q - i,
                        helpdeskArticle: r
                    })
              : a.enabled
                ? o.intl.format(o.t['omMr+f'], { helpdeskArticle: r })
                : o.intl.format(o.t.FjrXCg, {
                      numFriends: l.Q,
                      helpdeskArticle: r
                  });
    },
    d = (e) => {
        let t = (0, a.b)(e),
            n = (0, r.Nj)(i.z.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
        return t && !n;
    },
    u = (e) => {
        let { hasSentAll: t } = e,
            n = s.Z.getCurrentConfig({ location: 'getHeaderCopy' }, { autoTrackExposure: !1 });
        return t ? (n.enabled ? o.intl.string(o.t.USo4s7) : o.intl.string(o.t.M47CJS)) : o.intl.string(o.t.USo4s7);
    },
    m = (e) => {
        let { helpdeskArticle: t, referralsStatuses: n } = e;
        return c({
            hasSentAll: n.sent >= l.Q,
            hasSentAtLeastOne: n.sent >= 1,
            numSentUsers: n.sent,
            helpdeskArticle: t
        });
    };
