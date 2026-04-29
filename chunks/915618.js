"use strict";
n.d(t, { A: () => a });
var i = n(723702),
    r = n(734066),
    s = n(731854);
function a(e) {
    let { ignorePlatformRestriction: t } = r.L_.getConfig({ location: "isClipsClientCapable" });
    return t || (i.isDesktop() && e.getMediaEngine().supports(s.O5.CLIPS));
}
