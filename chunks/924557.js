n.d(t, {
    Go: () => d,
    NS: () => m,
    NV: () => l,
    PP: () => p,
    Zq: () => f,
    iL: () => _,
    ln: () => u,
    n7: () => h,
});
var r = n(818083),
    i = n(441167),
    a = n(131951);
n(74538);
var o = n(435064),
    s = n(779618);
n(474936);
let l = (0, r.B)({
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
    c = (0, r.B)({
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
function u() {
    if (!(0, s.Z)(a.Z)) return !1;
    let { enableClips: e } = c.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        { enableClips: t } = l.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 }),
        n = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: r } = i.Z.getCurrentConfig({ location: "areClipsEnabled" }, { autoTrackExposure: !1 });
    return e || t || n || r;
}
function d() {
    let e = (0, s.Z)(a.Z),
        { enableClips: t } = c.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        { enableClips: n } = l.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 }),
        r = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: u } = i.Z.useExperiment({ location: "useEnableClips" }, { autoTrackExposure: !1 });
    return (n || t || r || u) && e;
}
let f = (e) => {
    let { autoTrackExposure: t } = e,
        n = (0, s.Z)(a.Z),
        { enablePremiumEarlyAccessGoLiveRoadblock: r } = c.useExperiment(
            { location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock" },
            { autoTrackExposure: t && n },
        );
    return !!n && r;
};
function _() {
    let { enableScreenshotKeybind: e } = l.getCurrentConfig(
        { location: "isScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function p() {
    let { enableScreenshotKeybind: e } = l.useExperiment(
        { location: "useScreenshotKeybindEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function h() {
    let { enableVoiceOnlyClips: e } = l.getCurrentConfig(
        { location: "areVoiceOnlyClipsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function m() {
    let { enableAdvancedSignals: e } = l.getCurrentConfig(
        { location: "areAdvancedSignalsEnabled" },
        { autoTrackExposure: !1 },
    );
    return e;
}
