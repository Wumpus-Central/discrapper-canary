n.d(t, { A: () => s });
var i = n(723702),
    r = n(734066),
    a = n(731854);
function s(e) {
    let { ignorePlatformRestriction: t } = r.L_.getConfig({ location: "isClipsClientCapable" });
    return t || (i.isDesktop() && e.getMediaEngine().supports(a.O5.CLIPS));
}
