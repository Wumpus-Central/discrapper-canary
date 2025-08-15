n.d(t, {
    $s: () => c,
    Bx: () => l,
});
var r = n(818083),
    i = n(592125),
    a = n(944486),
    o = n(594174);
let s = (0, r.B)({
    kind: "guild",
    id: "2025-08_go_live_guild_notification",
    label: "Go live notification guild experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Go live notification on by default",
            config: { enabled: !0 },
        },
        {
            id: 2,
            label: "Go live notification includes game data if available",
            config: { enabled: !0 },
        },
    ],
});
function l(e) {
    let { guildId: t, location: n } = e;
    return (
        null != t &&
        s.getCurrentConfig({
            guildId: t,
            location: n,
        }).enabled
    );
}
function c(e, t) {
    let n = e;
    if (null == n) {
        if (null == o.default.getCurrentUser()) return !1;
        n = a.Z.getVoiceChannelId();
    }
    if (null == n) return !1;
    let r = i.Z.getChannel(n);
    return l({
        guildId: null == r ? void 0 : r.guild_id,
        location: t,
    });
}
