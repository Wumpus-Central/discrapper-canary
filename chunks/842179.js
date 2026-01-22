n.d(t, {
    LQ: () => c,
    oZ: () => l,
});
var r = n(600975),
    i = n(734057),
    a = n(309010),
    s = n(287809);
let o = (0, r.C)({
    kind: "guild",
    id: "2025-08_go_live_guild_notification",
    label: "Go live notification guild experiment",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Go live notification on by default",
            config: {
                enabled: !0,
            },
        },
        {
            id: 2,
            label: "Go live notification includes game data if available",
            config: {
                enabled: !0,
            },
        },
    ],
});

function l(e) {
    let { guildId: t, location: n } = e;
    return (
        null != t &&
        o.getCurrentConfig({
            guildId: t,
            location: n,
        }).enabled
    );
}

function c(e, t) {
    let n = e;
    if (null == n) {
        if (null == s.default.getCurrentUser()) return !1;
        n = a.A.getVoiceChannelId();
    }
    if (null == n) return !1;
    let r = i.A.getChannel(n);
    return l({
        guildId: null == r ? void 0 : r.guild_id,
        location: t,
    });
}
