n.d(t, {
    Kc: () => s,
    Yu: () => a,
    dP: () => o
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: {
        improvedDesktopMediaViewerEnabled: !1,
        mediaViewerAffordanceEnabled: !1
    },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
function s(e) {
    let { improvedDesktopMediaViewerEnabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function o(e) {
    return a.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
