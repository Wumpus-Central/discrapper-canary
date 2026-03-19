n.d(t, { K7: () => x, UK: () => h, f7: () => A });
var i = n(419954),
    s = n(954571),
    l = n(975571),
    a = n(115063),
    r = n(253932),
    o = n(780964),
    d = n(612025),
    c = n(112469),
    u = n(542457),
    _ = n(355097),
    m = n(652215),
    g = n(985018);
let A = () => (0, c.Tx)() !== d.YG;
function x() {
    return g.intl.string(g.t["T+nevN"]);
}
let h = (0, i.zD)(o.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
    useTitle: x,
    useSubtitle: () =>
        g.intl.format(g.t.jXKQCu, { helpdeskArticle: l.A.getArticleURL(m.MVz.ACTIVITY_STATUS_SETTINGS) }),
    useValue: () => {
        let e = (0, c.Tx)();
        return !r.pE.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = d.xk.getState().selectedGuildId,
            n = (0, a.CN)();
        e ? n.delete(t) : n.add(t),
            r.pE.updateSetting([...n]),
            s.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: u.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                ingress: _.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: A,
});
