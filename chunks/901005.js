t.d(e, { i: () => s });
var n = t(818083),
    r = t(981631),
    l = t(647086);
let i = (0, n.B)({
    kind: 'guild',
    id: '2025-07_guild_tag_badge_packs_wave_1',
    label: 'Guild Tag Badge Packs Wave 1',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Guild Tag Badge Packs Wave 1',
            config: { enabled: !0 }
        }
    ]
});
function s(A, e) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        n = null != A && A !== l._ && A !== r.I_8;
    return i.useExperiment(
        {
            guildId: A,
            location: e
        },
        {
            disable: !n,
            autoTrackExposure: t
        }
    ).enabled;
}
