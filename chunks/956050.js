"use strict";
n.d(t, { m: () => s });
var i = n(367974),
    r = n(696016);
async function s(e, t) {
    let n,
        s = document.createElement("video");
    (s.volume = 0), (s.src = e), (s.currentTime = t);
    try {
        await Promise.race([
            s.play(),
            new Promise((e, t) => {
                n = setTimeout(() => t(Error("createThumbnailFromVideo: playback start timed out")), 5e3);
            }),
        ]),
            s.pause();
        let e = r.vZ / s.videoWidth,
            t = r.s3 / s.videoHeight,
            i = Math.min(e, t),
            a = s.videoWidth * i,
            o = s.videoHeight * i,
            l = document.createElement("canvas");
        (l.width = a), (l.height = o);
        let u = l.getContext("2d");
        if (null == u) throw Error("Could not create canvas context");
        return u.drawImage(s, 0, 0, s.videoWidth, s.videoHeight, 0, 0, a, o), l.toDataURL("image/jpeg", 0.9);
    } finally {
        null != n && clearTimeout(n), (0, i.A)(s);
    }
}
