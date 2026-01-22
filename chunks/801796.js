n.d(t, {
    BD: () => b,
    US: () => g,
    X8: () => y,
    mH: () => m,
});
var r = n(757942),
    i = n(455234),
    a = n(366811),
    s = n(95701),
    o = n(734057),
    l = n(222823),
    c = n(309010),
    u = n(543465),
    d = n(652215),
    f = n(790782);
let p = (e, t) => {
        let n = o.A.getChannel(t);
        return (
            null != n &&
            ((0, s.Gw)(n.type) || d.kvI.GUILD_VOCAL.has(n.type)
                ? l.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t
                : (!u.Ay.isChannelMuted(e, t) || l.Ay.getMentionCount(t) > 0) && (0, i.Y)(n))
        );
    },
    _ = (e, t) =>
        t === f.P.GUILD_EVENT ? !u.Ay.isMuteScheduledEventsEnabled(e) && l.Ay.hasUnread(e, t) : l.Ay.hasUnread(e, t),
    h = (e, t) => {
        let n = o.A.getChannel(t);
        return (
            null != n &&
            !!d.kvI.GUILD_VOCAL.has(n.type) &&
            (l.Ay.getMentionCount(t) > 0 || (c.A.getVoiceChannelId() === t && l.Ay.getUnreadCount(t) > 0))
        );
    },
    m = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = a.A.getState().guildId) ? e : d.ME;
            return (
                (0, r.A)(1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === t || !u.Ay.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    g = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = a.A.getState().guildId) ? e : d.ME;
            return (
                (0, r.A)(-1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === t || !u.Ay.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    E = (e, t) => l.Ay.getMentionCount(t) > 0,
    b = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.A)(1, {
                channelPredicate: E,
                ensureChatIsVisible: h,
                withVoiceChannels: !0,
            }),
            !1
        ),
    },
    y = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.A)(-1, {
                channelPredicate: E,
                ensureChatIsVisible: h,
                withVoiceChannels: !0,
            }),
            !1
        ),
    };
