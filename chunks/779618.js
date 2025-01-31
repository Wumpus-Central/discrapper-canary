n.d(t, { Z: () => s });
var i = n(358085),
    r = n(924557),
    a = n(65154);
function s(e) {
    let { ignorePlatformRestriction: t } = r.NV.getCurrentConfig({ location: 'isClipsClientCapable' }, { autoTrackExposure: !1 });
    return t || (i.isDesktop() && e.getMediaEngine().supports(a.AN.CLIPS));
}
