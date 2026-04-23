n.d(t, { Ho: () => p, K7: () => h, f7: () => A });
var i = n(419954),
    s = n(954571),
    l = n(115063),
    a = n(253932),
    r = n(780964),
    o = n(612025),
    d = n(112469),
    u = n(542457),
    c = n(355097),
    g = n(652215),
    m = n(985018),
    _ = n(395277);
let A = () => (0, d.Tx)() !== o.YG;
function h() {
    return m.intl.string(_.default.WhdCGP);
}
let p = (0, i.zD)(r.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: h,
    useSubtitle: () => m.intl.string(_.default.UQ9RHJ),
    useValue: () => {
        let e = (0, d.Tx)();
        return !a.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = o.xk.getState().selectedGuildId,
            n = (0, l.Kk)();
        e ? n.delete(t) : n.add(t),
            a.JG.updateSetting([...n]),
            s.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: u.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: c.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: A,
});
