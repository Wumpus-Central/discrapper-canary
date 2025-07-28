n.d(t, { i: () => s });
var r = n(818083),
    i = n(981631),
    l = n(647086);
let a = (0, r.B)({
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
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = null != e && e !== l._ && e !== i.I_8;
    return a.useExperiment(
        {
            guildId: e,
            location: t
        },
        {
            disable: !r,
            autoTrackExposure: n
        }
    ).enabled;
}
