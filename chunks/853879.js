n.d(t, { Z: () => o });
var r = n(463424),
    i = n(441349);
let o = {
    isWebpFile: a,
    findOffsets: s,
};
function a(e) {
    let t = 0,
        n = "RIFF",
        i = 8,
        o = "WEBP";
    return !!e && (0, r.oH)(e, t, n.length) === n && (0, r.oH)(e, i, o.length) === o;
}
function s(e) {
    let t,
        n,
        o,
        a,
        s = 4,
        l = "Exif\0\0",
        c = 8,
        u = 12,
        d = !1;
    for (; u + c < e.byteLength; ) {
        let f = (0, r.oH)(e, u, 4),
            _ = e.getUint32(u + s, !0);
        i.Z.USE_EXIF && "EXIF" === f
            ? ((d = !0), (t = (0, r.oH)(e, u + c, l.length) === l ? u + c + l.length : u + c))
            : i.Z.USE_XMP && "XMP " === f
              ? ((d = !0),
                (n = [
                    {
                        dataOffset: u + c,
                        length: _,
                    },
                ]))
              : i.Z.USE_ICC && "ICCP" === f
                ? ((d = !0),
                  (o = [
                      {
                          offset: u + c,
                          length: _,
                          chunkNumber: 1,
                          chunksTotal: 1,
                      },
                  ]))
                : "VP8X" === f && ((d = !0), (a = u + c)),
            (u += c + (_ % 2 == 0 ? _ : _ + 1));
    }
    return {
        hasAppMarkers: d,
        tiffHeaderOffset: t,
        xmpChunks: n,
        iccChunks: o,
        vp8xChunkOffset: a,
    };
}
