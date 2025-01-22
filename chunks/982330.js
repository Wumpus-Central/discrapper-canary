r.d(n, {
    Kc: function () {
        return s;
    },
    Yu: function () {
        return o;
    },
    dP: function () {
        return l;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-10_improved_media_viewer',
    label: 'Improved Desktop Media Viewer',
    defaultConfig: {
        improvedDesktopMediaViewerEnabled: !1,
        mediaViewerAffordanceEnabled: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
    let { improvedDesktopMediaViewerEnabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return n;
}
function l(e) {
    return o.useExperiment({ location: e }, { autoTrackExposure: !1 });
}
