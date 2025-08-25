n.d(t, {
    Gj: () => l,
    Ic: () => u,
    Jn: () => p,
    ZN: () => g,
    ZP: () => o,
    a0: () => _,
    oT: () => m,
    vx: () => d,
    z_: () => h,
    zi: () => c,
});
var r = n(463424),
    i = n(441349);
let o = {
        isPngFile: y,
        findPngOffsets: O,
    },
    a = "\x89PNG\r\n\x1A\n",
    s = 4,
    l = 4,
    c = 0,
    u = 4,
    d = 8,
    f = "XML:com.adobe.xmp\0",
    _ = "tEXt",
    p = "iTXt",
    h = "zTXt",
    m = "pHYs",
    g = "tIME",
    E = "eXIf",
    b = "iCCP";
function y(e) {
    return !!e && (0, r.oH)(e, 0, a.length) === a;
}
function O(e, t) {
    let n = 4,
        o = { hasAppMarkers: !1 },
        f = a.length;
    for (; f + s + l <= e.byteLength; ) {
        if (i.Z.USE_PNG_FILE && v(e, f)) (o.hasAppMarkers = !0), (o.pngHeaderOffset = f + d);
        else if (i.Z.USE_XMP && I(e, f)) {
            let t = N(e, f);
            void 0 !== t &&
                ((o.hasAppMarkers = !0),
                (o.xmpChunks = [
                    {
                        dataOffset: t,
                        length: e.getUint32(f + c) - (t - (f + d)),
                    },
                ]));
        } else if (T(e, f, t)) {
            o.hasAppMarkers = !0;
            let t = (0, r.oH)(e, f + u, l);
            o.pngTextChunks || (o.pngTextChunks = []),
                o.pngTextChunks.push({
                    length: e.getUint32(f + c),
                    type: t,
                    offset: f + d,
                });
        } else if (S(e, f)) (o.hasAppMarkers = !0), (o.tiffHeaderOffset = f + d);
        else if (i.Z.USE_ICC && t && A(e, f)) {
            o.hasAppMarkers = !0;
            let t = e.getUint32(f + c),
                n = f + d,
                { profileName: r, compressionMethod: i, compressedProfileOffset: a } = R(e, n);
            o.iccChunks || (o.iccChunks = []),
                o.iccChunks.push({
                    offset: a,
                    length: t - (a - n),
                    chunkNumber: 1,
                    chunksTotal: 1,
                    profileName: r,
                    compressionMethod: i,
                });
        } else
            C(e, f) &&
                ((o.hasAppMarkers = !0), o.pngChunkOffsets || (o.pngChunkOffsets = []), o.pngChunkOffsets.push(f + c));
        f += e.getUint32(f + c) + s + l + n;
    }
    return o;
}
function v(e, t) {
    let n = "IHDR";
    return (0, r.oH)(e, t + u, l) === n;
}
function I(e, t) {
    return (0, r.oH)(e, t + u, l) === p && (0, r.oH)(e, t + d, f.length) === f;
}
function T(e, t, n) {
    let i = (0, r.oH)(e, t + u, l);
    return i === _ || i === p || (i === h && n);
}
function S(e, t) {
    return (0, r.oH)(e, t + u, l) === E;
}
function A(e, t) {
    return (0, r.oH)(e, t + u, l) === b;
}
function C(e, t) {
    return [m, g].includes((0, r.oH)(e, t + u, l));
}
function N(e, t) {
    let n = 1,
        r = 1;
    t += d + f.length + n + r;
    let i = 0;
    for (; i < 2 && t < e.byteLength; ) 0 === e.getUint8(t) && i++, t++;
    if (!(i < 2)) return t;
}
function R(e, t) {
    let n = 1,
        i = 1,
        o = (0, r.o7)(e, t);
    return (
        (t += o.length + n),
        {
            profileName: o,
            compressionMethod: e.getUint8(t),
            compressedProfileOffset: (t += i),
        }
    );
}
