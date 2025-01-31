n.d(t, { sS: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_user_profile_blocker_skeleton',
    label: 'User Profile Blocker Skeleton',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable User Profile Blocker Skeleton',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
