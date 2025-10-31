n.d(e, { Z: () => E });
var i = n(442837),
    l = n(435064),
    r = n(779618),
    u = n(39604),
    s = n(441167),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(388032);
let E = (0, a.qs)(c.n.CLIPS_VIEWER_CLIPS_ENABLED, {
    useTitle: () => d.intl.string(d.t.NWw7kY),
    useSubtitle: () => d.intl.string(d.t["0vjy8N"]),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().viewerClipsEnabled),
    usePredicate: () => {
        let { enableViewerClipping: t } = s.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
            e = (0, r.Z)(o.Z);
        return t && e;
    },
    setValue: (t) =>
        u.yl({
            enabled: t,
            trackAnalytics: !0,
        }),
});
