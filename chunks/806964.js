n.d(t, { u: () => o });
var i = n(951001),
    s = n(265422),
    r = n(383501),
    a = n(309010),
    l = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!r.A.isConnected()) return !1;
        let e = r.A.getGuildId() ?? l.ME,
            t = a.A.getChannelId(e);
        return (0, s.i)(e, t), i.A.channelListScrollTo(e, r.A.getChannelId()), !1;
    },
};
