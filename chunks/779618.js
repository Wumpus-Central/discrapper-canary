r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(358085),
    a = r(924557),
    o = r(65154);
function s(e) {
    let { ignorePlatformRestriction: n } = a.NV.getCurrentConfig({ location: 'isClipsClientCapable' }, { autoTrackExposure: !1 });
    return n || (i.isDesktop() && e.getMediaEngine().supports(o.AN.CLIPS));
}
