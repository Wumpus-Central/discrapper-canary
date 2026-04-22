n.d(t, { c: () => l });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_voice_channel_list_invite_embed",
    label: "Voice Channel List Invite Embed",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: !0 } }],
});
function l(e) {
    let { guildId: t, location: n } = e;
    return i.getCurrentConfig({ guildId: t, location: n });
}
