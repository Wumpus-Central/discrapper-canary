n.d(t, {
    Go: () => _,
    NV: () => c,
    Zq: () => p,
    ln: () => f,
    nM: () => h,
    xt: () => m
});
var i = n(818083),
    r = n(441167),
    a = n(131951),
    s = n(74538),
    o = n(435064),
    l = n(779618),
    u = n(474936);
let c = (0, i.B)({
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
    d = (0, i.B)({
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
    if (!(0, l.Z)(a.Z)) return !1;
    let { enableClips: e } = d.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        { enableClips: t } = c.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        n = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: i } = r.Z.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 });
    return e || t || n || i;
}
function _() {
    let e = (0, l.Z)(a.Z),
        { enableClips: t } = d.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        { enableClips: n } = c.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        i = o.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: s } = r.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 });
    return (n || t || i || s) && e;
}
let p = (e) => {
        let { autoTrackExposure: t } = e,
            n = (0, l.Z)(a.Z),
            { enablePremiumEarlyAccessGoLiveRoadblock: i } = d.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: t && n });
        return !!n && i;
    },
    h = (e) => {
        let { autoTrackExposure: t } = e,
            n = (0, l.Z)(a.Z),
            { enablePremiumEarlyAccessAnnouncementCoachmark: i } = d.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: t && n });
        return !!n && i;
    };
function m(e) {
    return s.ZP.isPremiumAtLeast(e.premiumType, u.p9.TIER_2);
}
