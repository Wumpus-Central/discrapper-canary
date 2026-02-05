"use strict";
n.d(t, { OH: () => y, vN: () => g });
var r = n(761799),
    i = n(643479),
    a = n(298003);
let s = 0x66747970,
    o = 0x69707270,
    l = 0x6d657461,
    u = 0x696c6f63,
    c = 0x69696e66,
    d = 0x696e6665,
    _ = 0x6970636f,
    f = 0x636f6c72,
    p = 0x45786966,
    h = 0x6d696d65,
    m = 0x75726920;
function g(e, t) {
    let n = 4,
        r = 8,
        i = 1,
        { length: p, contentOffset: h } = E(e, t);
    if (p < r) return;
    let m = e.getUint32(t + n);
    if (m === s) return L(e, h, p);
    if (m === o) return w(e, t, h, p);
    if (m === _) return x(e, t, h, p);
    if (m === f) return P(e, h, p);
    let g = e.getUint8(h);
    return m === l
        ? k(e, t, h + i, p)
        : m === u
          ? (0, a.N)(e, g, h + i, p)
          : m === c
            ? G(e, t, g, h + i, p)
            : m === d
              ? F(e, t, g, h + i, p)
              : { type: void 0, length: p };
}
function E(e, t) {
    let n = 4,
        r = 4,
        i = 8,
        a = 12,
        s = e.getUint32(t);
    return A(s)
        ? { length: e.byteLength - t, contentOffset: t + n + r }
        : I(s) && T(e, t)
          ? { length: e.getUint32(t + a), contentOffset: t + n + r + i }
          : { length: s, contentOffset: t + n + r };
}
function A(e) {
    return 0 === e;
}
function I(e) {
    return 1 === e;
}
function T(e, t) {
    let n = 8;
    return 0 === e.getUint32(t + n);
}
function y(e) {
    if (r.A.USE_EXIF || r.A.USE_XMP || r.A.USE_ICC) {
        let t = {},
            n = S(e);
        return n
            ? (r.A.USE_EXIF && (t.tiffHeaderOffset = v(e, n)),
              r.A.USE_XMP && (t.xmpChunks = R(n)),
              r.A.USE_ICC && (t.iccChunks = D(n)),
              (t.hasAppMarkers = void 0 !== t.tiffHeaderOffset || void 0 !== t.xmpChunks || void 0 !== t.iccChunks),
              t)
            : { hasAppMarkers: !1 };
    }
    return {};
}
function S(e) {
    let t = 4,
        n = 4,
        r = 0;
    for (; r + t + n <= e.byteLength; ) {
        let t = g(e, r);
        if (void 0 === t) break;
        if ("meta" === t.type) return t;
        r += t.length;
    }
}
function v(e, t) {
    try {
        let n = C(t).itemId,
            r = b(t, n),
            i = r.baseOffset + r.extents[0].extentOffset;
        return N(e, i);
    } catch (e) {
        return;
    }
}
function C(e) {
    return e.subBoxes.find((e) => "iinf" === e.type).itemInfos.find((e) => e.itemType === p);
}
function b(e, t) {
    return e.subBoxes.find((e) => "iloc" === e.type).items.find((e) => e.itemId === t);
}
function N(e, t) {
    return t + 4 + e.getUint32(t);
}
function R(e) {
    try {
        let t = O(e).itemId,
            n = b(e, t),
            r = b(e, t).extents[0];
        return [{ dataOffset: n.baseOffset + r.extentOffset, length: r.extentLength }];
    } catch (e) {
        return;
    }
}
function O(e) {
    return e.subBoxes
        .find((e) => "iinf" === e.type)
        .itemInfos.find((e) => e.itemType === h && "application/rdf+xml" === e.contentType);
}
function D(e) {
    try {
        let t = e.subBoxes
            .find((e) => "iprp" === e.type)
            .subBoxes.find((e) => "ipco" === e.type)
            .properties.find((e) => "colr" === e.type).icc;
        if (t) return [t];
    } catch (e) {}
}
function L(e, t, n) {
    let r = 4;
    return { type: "ftyp", majorBrand: (0, i.hT)(e, t, r), length: n };
}
function w(e, t, n, r) {
    return { type: "iprp", subBoxes: U(e, n, r - (n - t)), length: r };
}
function x(e, t, n, r) {
    return { type: "ipco", properties: U(e, n, r - (n - t)), length: r };
}
function P(e, t, n) {
    return { type: "colr", icc: M(e, t), length: n };
}
function M(e, t) {
    let n = 4,
        r = (0, i.hT)(e, t, n);
    if ("prof" === r || "rICC" === r)
        return { offset: t + n, length: e.getUint32(t + n), chunkNumber: 1, chunksTotal: 1 };
}
function k(e, t, n, r) {
    return { type: "meta", subBoxes: U(e, n + 3, r - (n + 3 - t)), length: r };
}
function U(e, t, n) {
    let r = [p, h],
        i = [],
        a = t;
    for (; a < t + n; ) {
        let t = g(e, a);
        if (void 0 === t) break;
        void 0 !== t.type && (void 0 === t.itemType || -1 !== r.indexOf(t.itemType)) && i.push(t), (a += t.length);
    }
    return i;
}
function G(e, t, n, r, i) {
    let { offsets: a } = V(n, r);
    return { type: "iinf", itemInfos: U(e, a.itemInfos, i - (a.itemInfos - t)), length: i };
}
function V(e, t) {
    let n = { entryCount: t + 3 },
        r = {};
    return (
        0 === e ? (r.entryCount = 2) : (r.entryCount = 4), (n.itemInfos = n.entryCount + r.entryCount), { offsets: n }
    );
}
function F(e, t, n, r, a) {
    r += 3;
    let s = { type: "infe", length: a };
    return (
        (0 === n || 1 === n) &&
            ((s.itemId = e.getUint16(r)),
            (r += 2),
            (s.itemProtectionIndex = e.getUint16(r)),
            (r += 2),
            (s.itemName = (0, i.BD)(e, r)),
            (r += s.itemName.length + 1)),
        n >= 2 &&
            (2 === n ? ((s.itemId = e.getUint16(r)), (r += 2)) : 3 === n && ((s.itemId = e.getUint32(r)), (r += 4)),
            (s.itemProtectionIndex = e.getUint16(r)),
            (r += 2),
            (s.itemType = e.getUint32(r)),
            (r += 4),
            (s.itemName = (0, i.BD)(e, r)),
            (r += s.itemName.length + 1),
            s.itemType === h
                ? ((s.contentType = (0, i.BD)(e, r)),
                  t + a > (r += s.contentType.length + 1) &&
                      ((s.contentEncoding = (0, i.BD)(e, r)), (r += s.contentEncoding.length + 1)))
                : s.itemType === m && ((s.itemUri = (0, i.BD)(e, r)), (r += s.itemUri.length + 1))),
        s
    );
}
