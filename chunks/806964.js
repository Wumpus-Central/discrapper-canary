n.d(t, { u: () => l });
var r = n(951001),
    i = n(265422),
    a = n(383501),
    s = n(309010),
    o = n(652215);
let l = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!a.A.isConnected()) return !1;
        let t = null != (e = a.A.getGuildId()) ? e : o.ME,
            n = s.A.getChannelId(t);
        return (0, i.i)(t, n), r.A.channelListScrollTo(t, a.A.getChannelId()), !1;
    },
};
