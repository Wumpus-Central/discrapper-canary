i.d(t, { A: () => o });
var n = i(643479),
    r = i(761799);
let o = {
    isWebpFile: function (e) {
        let t = "RIFF",
            i = "WEBP";
        return !!e && (0, n.hT)(e, 0, t.length) === t && (0, n.hT)(e, 8, i.length) === i;
    },
    findOffsets: function (e) {
        let t,
            i,
            o,
            a,
            s = "Exif\0\0",
            l = 12,
            u = !1;
        for (; l + 8 < e.byteLength; ) {
            let c = (0, n.hT)(e, l, 4),
                d = e.getUint32(l + 4, !0);
            r.A.USE_EXIF && "EXIF" === c
                ? ((u = !0), (t = (0, n.hT)(e, l + 8, s.length) === s ? l + 8 + s.length : l + 8))
                : r.A.USE_XMP && "XMP " === c
                  ? ((u = !0), (i = [{ dataOffset: l + 8, length: d }]))
                  : r.A.USE_ICC && "ICCP" === c
                    ? ((u = !0), (o = [{ offset: l + 8, length: d, chunkNumber: 1, chunksTotal: 1 }]))
                    : "VP8X" === c && ((u = !0), (a = l + 8)),
                (l += 8 + (d % 2 == 0 ? d : d + 1));
        }
        return { hasAppMarkers: u, tiffHeaderOffset: t, xmpChunks: i, iccChunks: o, vp8xChunkOffset: a };
    },
};
