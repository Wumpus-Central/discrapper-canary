n.d(t, {
    NS: () => h,
    NV: () => s,
    PP: () => _,
    Zq: () => d,
    iL: () => f,
    n7: () => p,
    w2: () => c,
    w9: () => u,
});
var r = n(818083),
    i = n(441167),
    a = n(131951);
n(74538);
var o = n(779618);
n(474936);
let s = (0, r.B)({
        kind: "user",
        id: "2022-11_clips_experiment",
        label: "Clips Experiment",
        defaultConfig: {
            enableClips: !1,
            ignorePlatformRestriction: !1,
            showClipsHeaderEntrypoint: !1,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Clips without upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 2,
                label: "Clips with upsells",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 99,
                label: "Clips 4 da Developerz",
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !0,
                    showClipsHeaderEntrypoint: !0,
                    enableScreenshotKeybind: !0,
                    enableVoiceOnlyClips: !0,
                    enableAdvancedSignals: !0,
                },
            },
        ],
    }),
    l = (0, r.B)({
        kind: "user",
        id: "2023-09_clips_nitro_early_access",
        label: "Clips (Nitro EA)",
        defaultConfig: {
            enableClips: !1,
            enablePremiumEarlyAccessAnnouncementCoachmark: !1,
            enablePremiumEarlyAccessGoLiveRoadblock: !1,
            enableScreenshotKeybind: !1,
            enableVoiceOnlyClips: !1,
            enableAdvancedSignals: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Clips Nitro EA Upsells Visible",
                config: {
                    enableClips: !1,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !0,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
            {
                id: 2,
                label: "Clips Enabled (Nitro)",
                config: {
                    enableClips: !0,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !1,
                    enableScreenshotKeybind: !1,
                    enableVoiceOnlyClips: !1,
                    enableAdvancedSignals: !1,
                },
            },
        ],
    });
function c() {
    if (!(0, o.Z)(a.Z)) return !1;
    let { enableClips: e } = l.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableClips: t } = s.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableViewerClipping: n } = i.Z.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 });
    return e || t || n;
}
function u() {
    let e = (0, o.Z)(a.Z),
        { enableClips: t } = l.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableClips: n } = s.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableViewerClipping: r } = i.Z.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 });
    return (n || t || r) && e;
}
let d = (e) => {
    let { autoTrackExposure: t } = e,
        n = (0, o.Z)(a.Z),
        { enablePremiumEarlyAccessGoLiveRoadblock: r } = l.useExperiment(
            { location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock" },
            { autoTrackExposure: t && n },
        );
    return !!n && r;
};
function f() {
    let { enableScreenshotKeybind: e } = s.getCurrentConfig(
        { location: "isScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function _() {
    let { enableScreenshotKeybind: e } = s.useExperiment(
        { location: "useScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function p() {
    let { enableVoiceOnlyClips: e } = s.getCurrentConfig(
        { location: "areVoiceOnlyClipsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function h() {
    let { enableAdvancedSignals: e } = s.getCurrentConfig(
        { location: "areAdvancedSignalsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
