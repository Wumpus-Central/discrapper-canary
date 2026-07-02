n.d(t, { u: () => a });
var i = n(951001),
    l = n(265422),
    s = n(763827),
    r = n(309010),
    o = n(652215);
let a = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!s.A.isConnected()) return !1;
        let e = s.A.getGuildId() ?? o.ME,
            t = r.A.getChannelId(e);
        return (0, l.i)(e, t), i.A.channelListScrollTo(e, s.A.getChannelId()), !1;
    },
};
