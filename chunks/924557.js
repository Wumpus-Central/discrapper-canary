n.d(t, {
    Go: () => _,
    NV: () => u,
    Zq: () => p,
    ln: () => f,
    nM: () => h,
    xt: () => m
});
var r = n(818083),
    i = n(441167),
    o = n(131951),
    a = n(74538),
    s = n(435064),
    l = n(779618),
    c = n(474936);
let u = (0, r.B)({
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
    d = (0, r.B)({
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
function f() {
    if (!(0, l.Z)(o.Z)) return !1;
    let { enableClips: e } = d.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        { enableClips: t } = u.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        n = s.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: r } = i.Z.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 });
    return e || t || n || r;
}
function _() {
    let e = (0, l.Z)(o.Z),
        { enableClips: t } = d.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        { enableClips: n } = u.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        r = s.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: a } = i.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 });
    return (n || t || r || a) && e;
}
let p = (e) => {
        let { autoTrackExposure: t } = e,
            n = (0, l.Z)(o.Z),
            { enablePremiumEarlyAccessGoLiveRoadblock: r } = d.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: t && n });
        return !!n && r;
    },
    h = (e) => {
        let { autoTrackExposure: t } = e,
            n = (0, l.Z)(o.Z),
            { enablePremiumEarlyAccessAnnouncementCoachmark: r } = d.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: t && n });
        return !!n && r;
    };
function m(e) {
    return a.ZP.isPremiumAtLeast(e.premiumType, c.p9.TIER_2);
}
