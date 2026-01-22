n.d(t, {
    OH: () => A,
    vN: () => g,
});
var r = n(761799),
    i = n(643479),
    a = n(298003);
let s = 0x66747970,
    o = 0x69707270,
    l = 0x6d657461,
    c = 0x696c6f63,
    u = 0x69696e66,
    d = 0x696e6665,
    f = 0x6970636f,
    p = 0x636f6c72,
    _ = 0x45786966,
    h = 0x6d696d65,
    m = 0x75726920;

function g(e, t) {
    let n = 4,
        r = 8,
        i = 1,
        { length: _, contentOffset: h } = E(e, t);
    if (_ < r) return;
    let m = e.getUint32(t + n);
    if (m === s) return P(e, h, _);
    if (m === o) return D(e, t, h, _);
    if (m === f) return x(e, t, h, _);
    if (m === p) return L(e, h, _);
    let g = e.getUint8(h);
    return m === l
        ? M(e, t, h + i, _)
        : m === c
          ? (0, a.N)(e, g, h + i, _)
          : m === u
            ? U(e, t, g, h + i, _)
            : m === d
              ? V(e, t, g, h + i, _)
              : {
                    type: void 0,
                    length: _,
                };
}

function E(e, t) {
    let n = 4,
        r = 4,
        i = 8,
        a = 12,
        s = e.getUint32(t);
    return b(s)
        ? {
              length: e.byteLength - t,
              contentOffset: t + n + r,
          }
        : y(s) && O(e, t)
          ? {
                length: e.getUint32(t + a),
                contentOffset: t + n + r + i,
            }
          : {
                length: s,
                contentOffset: t + n + r,
            };
}

function b(e) {
    return 0 === e;
}

function y(e) {
    return 1 === e;
}

function O(e, t) {
    let n = 8;
    return 0 === e.getUint32(t + n);
}

function A(e) {
    if (r.A.USE_EXIF || r.A.USE_XMP || r.A.USE_ICC) {
        let t = {},
            n = v(e);
        return n
            ? (r.A.USE_EXIF && (t.tiffHeaderOffset = S(e, n)),
              r.A.USE_XMP && (t.xmpChunks = N(n)),
              r.A.USE_ICC && (t.iccChunks = w(n)),
              (t.hasAppMarkers = void 0 !== t.tiffHeaderOffset || void 0 !== t.xmpChunks || void 0 !== t.iccChunks),
              t)
            : {
                  hasAppMarkers: !1,
              };
    }
    return {};
}

function v(e) {
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

function S(e, t) {
    try {
        let n = I(t).itemId,
            r = T(t, n),
            i = r.baseOffset + r.extents[0].extentOffset;
        return C(e, i);
    } catch (e) {
        return;
    }
}

function I(e) {
    return e.subBoxes.find((e) => "iinf" === e.type).itemInfos.find((e) => e.itemType === _);
}

function T(e, t) {
    return e.subBoxes.find((e) => "iloc" === e.type).items.find((e) => e.itemId === t);
}

function C(e, t) {
    return t + 4 + e.getUint32(t);
}

function N(e) {
    try {
        let t = R(e).itemId,
            n = T(e, t),
            r = T(e, t).extents[0];
        return [
            {
                dataOffset: n.baseOffset + r.extentOffset,
                length: r.extentLength,
            },
        ];
    } catch (e) {
        return;
    }
}

function R(e) {
    return e.subBoxes
        .find((e) => "iinf" === e.type)
        .itemInfos.find((e) => e.itemType === h && "application/rdf+xml" === e.contentType);
}

function w(e) {
    try {
        let t = e.subBoxes
            .find((e) => "iprp" === e.type)
            .subBoxes.find((e) => "ipco" === e.type)
            .properties.find((e) => "colr" === e.type).icc;
        if (t) return [t];
    } catch (e) {}
}

function P(e, t, n) {
    let r = 4;
    return {
        type: "ftyp",
        majorBrand: (0, i.hT)(e, t, r),
        length: n,
    };
}

function D(e, t, n, r) {
    return {
        type: "iprp",
        subBoxes: k(e, n, r - (n - t)),
        length: r,
    };
}

function x(e, t, n, r) {
    return {
        type: "ipco",
        properties: k(e, n, r - (n - t)),
        length: r,
    };
}

function L(e, t, n) {
    return {
        type: "colr",
        icc: j(e, t),
        length: n,
    };
}

function j(e, t) {
    let n = 4,
        r = (0, i.hT)(e, t, n);
    if ("prof" === r || "rICC" === r)
        return {
            offset: t + n,
            length: e.getUint32(t + n),
            chunkNumber: 1,
            chunksTotal: 1,
        };
}

function M(e, t, n, r) {
    return {
        type: "meta",
        subBoxes: k(e, n + 3, r - (n + 3 - t)),
        length: r,
    };
}

function k(e, t, n) {
    let r = [_, h],
        i = [],
        a = t;
    for (; a < t + n; ) {
        let t = g(e, a);
        if (void 0 === t) break;
        void 0 !== t.type && (void 0 === t.itemType || -1 !== r.indexOf(t.itemType)) && i.push(t), (a += t.length);
    }
    return i;
}

function U(e, t, n, r, i) {
    let { offsets: a } = G(n, r);
    return {
        type: "iinf",
        itemInfos: k(e, a.itemInfos, i - (a.itemInfos - t)),
        length: i,
    };
}

function G(e, t) {
    let n = {
            entryCount: t + 3,
        },
        r = {};
    return (
        0 === e ? (r.entryCount = 2) : (r.entryCount = 4),
        (n.itemInfos = n.entryCount + r.entryCount),
        {
            offsets: n,
        }
    );
}

function V(e, t, n, r, a) {
    r += 3;
    let s = {
        type: "infe",
        length: a,
    };
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
