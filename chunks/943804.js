n.d(t, { n: () => m });
var i = n(64700),
    s = n(665260),
    l = n(171316),
    a = n(419954),
    r = n(115063),
    o = n(253932),
    d = n(780964),
    c = n(652215),
    u = n(985018);
let m = (0, a.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
    useTitle: () => u.intl.string(u.t.qsMfsH),
    useValue: () => {
        let e = o.FA.useSetting(),
            t = i.useMemo(() => (0, r.Lx)(e), [e]);
        return t.all || t.mutualGuilds;
    },
    setValue: (e) => {
        let t = o.FA.getSetting();
        o.FA.updateSetting(e ? s.UI(t, c.dzt.MUTUAL_GUILDS) : s.iE(t, c.dzt.MUTUAL_GUILDS, c.dzt.NO_RELATION));
    },
    useDisabled: () => (0, l.uM)(),
});
