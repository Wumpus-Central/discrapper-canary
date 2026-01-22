n.d(t, { A: () => s });
var r = n(723702),
    i = n(734066),
    a = n(731854);
function s(e) {
    let { ignorePlatformRestriction: t } = i.L_.getCurrentConfig(
        { location: "isClipsClientCapable" },
        { autoTrackExposure: !1 },
    );
    return t || (r.isDesktop() && e.getMediaEngine().supports(a.O5.CLIPS));
}
