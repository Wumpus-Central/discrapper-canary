"use strict";
n.d(t, { m: () => a, n: () => i });
var r = n(696016);
function i(e) {
    let t = document.createElement("canvas");
    (t.width = e.width), (t.height = e.height);
    let n = t.getContext("2d");
    if (null == n) throw Error("Could not create canvas context");
    return n.putImageData(new ImageData(e.data, e.width, e.height), 0, 0), t.toDataURL("image/jpeg", 0.9);
}
async function a(e, t) {
    let n = document.createElement("video");
    (n.volume = 0), (n.src = e), (n.currentTime = t), await n.play(), n.pause();
    let i = Math.min(r.vZ / n.videoWidth, r.s3 / n.videoHeight),
        a = n.videoWidth * i,
        s = n.videoHeight * i,
        o = document.createElement("canvas");
    (o.width = a), (o.height = s);
    let l = o.getContext("2d");
    if (null == l) throw Error("Could not create canvas context");
    return l.drawImage(n, 0, 0, n.videoWidth, n.videoHeight, 0, 0, a, s), o.toDataURL("image/jpeg", 0.9);
}
