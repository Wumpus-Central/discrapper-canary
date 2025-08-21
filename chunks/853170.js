n.d(t, { e: () => s });
var r = n(818083),
    i = n(751823),
    a = n(875527);
let o = (0, r.B)({
    kind: "user",
    id: "2025-08_audio_context_menu_refresh",
    label: "Audio context menu refresh experiment",
    defaultConfig: { showRefreshedAudioContextMenu: !1 },
    treatments: [
        {
            id: 1,
            label: "Show refreshed audio context menu",
            config: { showRefreshedAudioContextMenu: !0 },
        },
    ],
});
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.useExperiment({ location: t }, { autoTrackExposure: n }),
        s = (0, a.Hu)({
            location: t,
            autoTrackExposure: !1,
        });
    return o.useExperiment(
        { location: t },
        {
            disable: r || s,
            autoTrackExposure: n,
        },
    );
}
