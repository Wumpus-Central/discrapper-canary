r.d(n, {
    Go: function () {
        return h;
    },
    NV: function () {
        return d;
    },
    Zq: function () {
        return _;
    },
    ln: function () {
        return p;
    },
    nM: function () {
        return m;
    },
    xt: function () {
        return g;
    }
});
var i = r(818083),
    a = r(441167),
    o = r(131951),
    s = r(74538),
    l = r(435064),
    u = r(779618),
    c = r(474936);
let d = (0, i.B)({
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
    f = (0, i.B)({
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
function p() {
    if (!(0, u.Z)(o.Z)) return !1;
    let { enableClips: e } = f.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        { enableClips: n } = d.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 }),
        r = l.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: i } = a.Z.getCurrentConfig({ location: 'areClipsEnabled' }, { autoTrackExposure: !1 });
    return e || n || r || i;
}
function h() {
    let e = (0, u.Z)(o.Z),
        { enableClips: n } = f.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        { enableClips: r } = d.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 }),
        i = l.Z.isDecoupledGameClippingEnabled(),
        { enableViewerClipping: s } = a.Z.useExperiment({ location: 'useEnableClips' }, { autoTrackExposure: !1 });
    return (r || n || i || s) && e;
}
let _ = (e) => {
        let { autoTrackExposure: n } = e,
            r = (0, u.Z)(o.Z),
            { enablePremiumEarlyAccessGoLiveRoadblock: i } = f.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: n && r });
        return !!r && i;
    },
    m = (e) => {
        let { autoTrackExposure: n } = e,
            r = (0, u.Z)(o.Z),
            { enablePremiumEarlyAccessAnnouncementCoachmark: i } = f.useExperiment({ location: 'useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock' }, { autoTrackExposure: n && r });
        return !!r && i;
    };
function g(e) {
    return s.ZP.isPremiumAtLeast(e.premiumType, c.p9.TIER_2);
}
