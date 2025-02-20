n.d(t, {
    Kc: () => a,
    Yu: () => o,
    dP: () => s
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: {
        improvedDesktopMediaViewerEnabled: !1,
        mediaViewerAffordanceEnabled: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable Improved Desktop Media Viewer',
            config: {
                improvedDesktopMediaViewerEnabled: !0,
                mediaViewerAffordanceEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Enable Improved Desktop Media Viewer with affordances',
            config: {
                improvedDesktopMediaViewerEnabled: !0,
                mediaViewerAffordanceEnabled: !0
            }
        }
    ]
});
function a(e) {
    let { improvedDesktopMediaViewerEnabled: t } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function s(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
