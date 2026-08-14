n.d(t, { u: () => o });
var i = n(951001),
    l = n(265422),
    r = n(763827),
    s = n(309010),
    a = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!r.A.isConnected()) return !1;
        let e = r.A.getGuildId() ?? a.ME,
            t = s.Ay.getChannelId(e);
        return (0, l.i)(e, t), i.A.channelListScrollTo(e, r.A.getChannelId()), !1;
    },
};
