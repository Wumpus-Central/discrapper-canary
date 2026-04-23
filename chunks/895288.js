n.d(t, { K7: () => h, UK: () => p, f7: () => A });
var i = n(419954),
    s = n(954571),
    l = n(975571),
    a = n(115063),
    r = n(253932),
    o = n(780964),
    d = n(612025),
    u = n(112469),
    c = n(542457),
    g = n(355097),
    m = n(652215),
    _ = n(985018);
let A = () => (0, u.Tx)() !== d.YG;
function h() {
    return _.intl.string(_.t["T+nevN"]);
}
let p = (0, i.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: h,
    useSubtitle: () =>
        _.intl.format(_.t.jXKQCu, { helpdeskArticle: l.A.getArticleURL(m.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: () => {
        let e = (0, u.Tx)();
        return !r.pE.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = d.xk.getState().selectedGuildId,
            n = (0, a.CN)();
        e ? n.delete(t) : n.add(t),
            r.pE.updateSetting([...n]),
            s.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: c.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: g.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: A,
});
