n.d(t, { G: () => o });
var r = n(818083),
    i = n(480218);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-07_resumable_attachment_uploads',
    label: 'Resumable attachment uploads',
    defaultConfig: { enableResumableUploads: !1 },
    treatments: [
        {
            id: 1,
            label: 'Control',
            config: { enableResumableUploads: !1 }
        },
        {
            id: 2,
            label: 'Resumable Uploads Enabled',
            config: { enableResumableUploads: !0 }
        }
    ]
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
