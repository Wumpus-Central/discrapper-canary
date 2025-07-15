n.d(t, { G: () => l });
var r = n(818083),
    i = n(427164),
    a = n(480218);
let o = (0, r.B)({
        kind: 'user',
        id: '2025-07_resumable_attachment_uploads',
        label: 'Resumable attachment uploads',
        defaultConfig: { enableResumableUploads: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enableResumableUploads: !1 }
            },
            {
                id: 1,
                label: 'Resumable Uploads Enabled',
                config: { enableResumableUploads: !0 }
            }
        ]
    }),
    s = (0, i.le)({
        name: '2025-07-resumable-attachment-uploads',
        kind: 'user',
        defaultConfig: { enableResumableUploads: !1 },
        variations: {
            0: { enableResumableUploads: !1 },
            1: { enableResumableUploads: !0 }
        }
    });
function l(e) {
    let { location: t } = e,
        { isInHoldout: n } = a._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return (
        n || s.getConfig({ location: t }),
        o.getCurrentConfig(
            { location: t },
            {
                disable: n,
                autoTrackExposure: !0
            }
        )
    );
}
