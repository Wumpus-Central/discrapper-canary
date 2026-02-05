n.d(t, { BD: () => C, US: () => h, X8: () => x, mH: () => E });
var i = n(757942),
    s = n(455234),
    r = n(366811),
    a = n(95701),
    l = n(734057),
    o = n(222823),
    c = n(309010),
    d = n(543465),
    u = n(652215),
    _ = n(790782);
let m = (e, t) => {
        let n = l.A.getChannel(t);
        return (
            null != n &&
            ((0, a.Gw)(n.type) || u.kvI.GUILD_VOCAL.has(n.type)
                ? o.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t
                : (!d.Ay.isChannelMuted(e, t) || o.Ay.getMentionCount(t) > 0) && (0, s.Y)(n))
        );
    },
    A = (e, t) =>
        t === _.P.GUILD_EVENT ? !d.Ay.isMuteScheduledEventsEnabled(e) && o.Ay.hasUnread(e, t) : o.Ay.hasUnread(e, t),
    g = (e, t) => {
        let n = l.A.getChannel(t);
        return (
            null != n &&
            !!u.kvI.GUILD_VOCAL.has(n.type) &&
            (o.Ay.getMentionCount(t) > 0 || (c.A.getVoiceChannelId() === t && o.Ay.getUnreadCount(t) > 0))
        );
    },
    E = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = r.A.getState().guildId ?? u.ME;
            return (
                (0, i.A)(1, {
                    channelPredicate: m,
                    guildPredicate: (t) => t === e || !d.Ay.isMuted(t),
                    guildFeaturePredicate: A,
                    ensureChatIsVisible: g,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    h = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = r.A.getState().guildId ?? u.ME;
            return (
                (0, i.A)(-1, {
                    channelPredicate: m,
                    guildPredicate: (t) => t === e || !d.Ay.isMuted(t),
                    guildFeaturePredicate: A,
                    ensureChatIsVisible: g,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    p = (e, t) => o.Ay.getMentionCount(t) > 0,
    C = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(1, { channelPredicate: p, ensureChatIsVisible: g, withVoiceChannels: !0 }), !1),
    },
    x = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(-1, { channelPredicate: p, ensureChatIsVisible: g, withVoiceChannels: !0 }), !1),
    };
