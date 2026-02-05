i.d(e, { U: () => g });
var n = i(419954),
    l = i(954571),
    s = i(975571),
    r = i(115063),
    a = i(253932),
    u = i(780964),
    o = i(612025),
    d = i(112469),
    T = i(542457),
    A = i(355097),
    S = i(652215),
    E = i(985018);
let g = (0, n.zD)(u.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: () => E.intl.string(E.t["T+nevN"]),
    useSubtitle: () =>
        E.intl.format(E.t.jXKQCu, { helpdeskArticle: s.A.getArticleURL(S.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: () => {
        let t = (0, d.Tx)();
        return !a.pE.useSetting().includes(t);
    },
    setValue: (t) => {
        let e = o.xk.getState().selectedGuildId,
            i = (0, r.CN)();
        t ? i.delete(e) : i.add(e),
            a.pE.updateSetting([...i]),
            l.default.track(S.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: T.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: A.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: e,
            });
    },
    usePredicate: () => (0, d.Tx)() !== o.YG,
});
