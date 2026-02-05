"use strict";
n.d(t, { A: () => a });
var r = n(643479),
    i = n(761799);
let a = { isWebpFile: s, findOffsets: o };
function s(e) {
    let t = 0,
        n = "RIFF",
        i = 8,
        a = "WEBP";
    return !!e && (0, r.hT)(e, t, n.length) === n && (0, r.hT)(e, i, a.length) === a;
}
function o(e) {
    let t,
        n,
        a,
        s,
        o = 4,
        l = "Exif\0\0",
        u = 8,
        c = 12,
        d = !1;
    for (; c + u < e.byteLength; ) {
        let _ = (0, r.hT)(e, c, 4),
            f = e.getUint32(c + o, !0);
        i.A.USE_EXIF && "EXIF" === _
            ? ((d = !0), (t = (0, r.hT)(e, c + u, l.length) === l ? c + u + l.length : c + u))
            : i.A.USE_XMP && "XMP " === _
              ? ((d = !0), (n = [{ dataOffset: c + u, length: f }]))
              : i.A.USE_ICC && "ICCP" === _
                ? ((d = !0), (a = [{ offset: c + u, length: f, chunkNumber: 1, chunksTotal: 1 }]))
                : "VP8X" === _ && ((d = !0), (s = c + u)),
            (c += u + (f % 2 == 0 ? f : f + 1));
    }
    return { hasAppMarkers: d, tiffHeaderOffset: t, xmpChunks: n, iccChunks: a, vp8xChunkOffset: s };
}
