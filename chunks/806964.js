var i = n(951001),
    r = n(265422),
    a = n(495867),
    s = n(309010),
    l = n(652215);
n.d(
    t,
    {},
    {
        u: {
            binds: ["mod+alt+left"],
            comboKeysBindGlobal: !0,
            action() {
                if (!a.A.isConnected()) return !1;
                let e = a.A.getGuildId() ?? l.ME,
                    t = s.Ay.getChannelId(e);
                return ((0, r.i)(e, t), i.A.channelListScrollTo(e, a.A.getChannelId()), !1);
            },
        },
    },
);
