"use strict";
n.d(t, { A: () => a });
var r = n(723702),
    i = n(734066),
    s = n(731854);
function a(e) {
    let { ignorePlatformRestriction: t } = i.L_.getConfig({ location: "isClipsClientCapable" });
    return t || (r.isDesktop() && e.getMediaEngine().supports(s.O5.CLIPS));
}
