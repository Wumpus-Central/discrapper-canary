n.d(t, { e: () => a });
var r = n(818083),
    i = n(751823),
    o = n(875527);
let l = (0, r.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.useExperiment({ location: t }, { autoTrackExposure: n }),
        a = (0, o.Hu)({
            location: t,
            autoTrackExposure: !1,
        });
    return l.useExperiment(
        { location: t },
        {
            disable: r || a,
            autoTrackExposure: n,
        },
    );
}
