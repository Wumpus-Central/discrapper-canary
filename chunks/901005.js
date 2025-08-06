e.d(t, { i: () => f });
var r = e(818083),
    g = e(981631),
    v = e(647086);
let n = (0, r.B)({
    kind: "guild",
    id: "2025-07_guild_tag_badge_packs_wave_1",
    label: "Guild Tag Badge Packs Wave 1",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Guild Tag Badge Packs Wave 1",
            config: { enabled: !0 },
        },
    ],
});
function f(A, t) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = null != A && A !== v._ && A !== g.I_8;
    return n.useExperiment(
        {
            guildId: A,
            location: t,
        },
        {
            disable: !r,
            autoTrackExposure: e,
        },
    ).enabled;
}
