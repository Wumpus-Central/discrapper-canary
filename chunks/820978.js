n.d(e, { Z: () => S });
var i = n(442837),
    l = n(435064),
    u = n(779618),
    r = n(39604),
    s = n(441167),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    E = n(388032);
let S = (0, a.qs)(c.n.CLIPS_VIEWER_CLIPS_ENABLED, {
    useTitle: () => E.intl.string(E.t.NWw7kY),
    useSubtitle: () => E.intl.string(E.t["0vjy8N"]),
    useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().viewerClipsEnabled),
    usePredicate: () => {
        let { enableViewerClipping: t } = s.Z.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
            e = (0, u.Z)(o.Z);
        return t && e;
    },
    setValue: (t) =>
        r.yl({
            enabled: t,
            trackAnalytics: !0,
        }),
});
