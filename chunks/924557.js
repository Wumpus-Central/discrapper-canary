n.d(t, {
    Go: () => d,
    NV: () => l,
    Zq: () => f,
    ln: () => u
});
var r = n(818083),
    i = n(441167),
    a = n(131951);
n(74538);
var o = n(435064),
    s = n(779618);
n(474936);
let l = (0, r.B)({
        kind: 'user',
        id: '2022-11_clips_experiment',
        label: 'Clips Experiment',
        defaultConfig: {
            enableClips: !1,
            ignorePlatformRestriction: !1,
            showClipsHeaderEntrypoint: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Clips without upsells',
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0
                }
            },
            {
                id: 2,
                label: 'Clips with upsells',
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !1,
                    showClipsHeaderEntrypoint: !0
                }
            },
            {
                id: 99,
                label: 'Clips 4 da Developerz',
                config: {
                    enableClips: !0,
                    ignorePlatformRestriction: !0,
                    showClipsHeaderEntrypoint: !0
                }
            }
        ]
    }),
    c = (0, r.B)({
        kind: 'user',
        id: '2023-09_clips_nitro_early_access',
        label: 'Clips (Nitro EA)',
        defaultConfig: {
            enableClips: !1,
            enablePremiumEarlyAccessAnnouncementCoachmark: !1,
            enablePremiumEarlyAccessGoLiveRoadblock: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Clips Nitro EA Upsells Visible',
                config: {
                    enableClips: !1,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !0
                }
            },
            {
                id: 2,
                label: 'Clips Enabled (Nitro)',
                config: {
                    enableClips: !0,
                    enablePremiumEarlyAccessAnnouncementCoachmark: !0,
                    enablePremiumEarlyAccessGoLiveRoadblock: !1
                }
            }
        ]
    });
function u() {
    if (!(0, s.Z)(a.Z)) return !1;
    let { enableClips: e } = c.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        { enableClips: t } = l.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        n = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: r } = i.Z.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 });
    return e || t || n || r;
}
function d() {
    let e = (0, s.Z)(a.Z),
        { enableClips: t } = c.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        { enableClips: n } = l.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        r = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: u } = i.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 });
    return (n || t || r || u) && e;
}
let f = (e) => {
    let { autoTrackExposure: t } = e,
        n = (0, s.Z)(a.Z),
        { enablePremiumEarlyAccessGoLiveRoadblock: r } = c.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: t && n });
    return !!n && r;
};
