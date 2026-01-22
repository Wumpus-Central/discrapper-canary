i.d(e, {
    U: () => _,
}),
    i(896048);
var n = i(419954),
    l = i(954571),
    s = i(975571),
    r = i(115063),
    u = i(253932),
    a = i(780964),
    o = i(612025),
    T = i(112469),
    A = i(542457),
    S = i(355097),
    E = i(652215),
    d = i(985018);
let _ = (0, n.zD)(a.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => d.intl.string(d.t["T+nevN"]),
    useSubtitle: () =>
        d.intl.format(d.t.jXKQCu, {
            helpdeskArticle: s.A.getArticleURL(E.MVz.ACTIVITY_STATUS_SETTINGS),
        }),
    useValue: () => {
        let t = (0, T.Tx)();
        return !u.pE.useSetting().includes(t);
    },
    setValue: (t) => {
        let e = o.xk.getState().selectedGuildId,
            i = (0, r.CN)();
        t ? i.delete(e) : i.add(e),
            u.pE.updateSetting([...i]),
            l.default.track(E.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: A.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: S.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: e,
            });
    },
    usePredicate: () => (0, T.Tx)() !== o.YG,
});
