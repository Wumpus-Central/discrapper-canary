n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(441167),
    s = n(695346),
    l = n(131951),
    c = n(435064),
    u = n(779618),
    d = n(39604),
    f = n(388032);
function _() {
    let e = s.tU.useSetting(),
        { enableViewerClipping: t } = o.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
        { viewerClipsEnabled: n } = (0, i.cj)([c.Z], () => c.Z.getSettings()),
        _ = (0, u.Z)(l.Z);
    return (0, r.jsxs)(a.l09, {
        children: [
            (0, r.jsx)(a.rsf, {
                label: f.intl.string(f.t.AGDDkH),
                description: f.intl.string(f.t["wW9/zQ"]),
                checked: e,
                onChange: (e) => d.yg({ allowVoiceRecording: e }),
            }),
            t &&
                _ &&
                (0, r.jsx)(a.rsf, {
                    label: f.intl.string(f.t.NWw7kY),
                    description: f.intl.string(f.t["0vjy8N"]),
                    checked: n,
                    onChange: (e) =>
                        d.yl({
                            enabled: e,
                            trackAnalytics: !0,
                        }),
                }),
        ],
    });
}
