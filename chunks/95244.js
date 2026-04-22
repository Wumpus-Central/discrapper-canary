i.d(t, { OH: () => s, vN: () => a });
var n = i(761799),
    r = i(643479),
    o = i(298003);
function a(e, t) {
    var i, n, a, s, l, c, d, f, p, m, g, h, y, A, v, T, b, P, S, F, I, C, x, E, M, U, O;
    let k,
        w,
        { length: L, contentOffset: _ } =
            ((i = e),
            (n = t),
            0 === (k = i.getUint32(n))
                ? { length: i.byteLength - n, contentOffset: n + 4 + 4 }
                : 1 === k && ((a = i), (s = n), 0 === a.getUint32(s + 8))
                  ? { length: i.getUint32(n + 12), contentOffset: n + 4 + 4 + 8 }
                  : { length: k, contentOffset: n + 4 + 4 });
    if (L < 8) return;
    let D = e.getUint32(t + 4);
    if (0x66747970 === D) {
        return (l = e), (c = _), (d = L), { type: "ftyp", majorBrand: (0, r.hT)(l, c, 4), length: d };
    }
    if (0x69707270 === D) {
        return (f = e), (p = t), { type: "iprp", subBoxes: u(f, (m = _), (g = L) - (m - p)), length: g };
    }
    if (0x6970636f === D) {
        return (h = e), (y = t), { type: "ipco", properties: u(h, (A = _), (v = L) - (A - y)), length: v };
    }
    if (0x636f6c72 === D) {
        return (
            (T = e),
            (b = _),
            (P = L),
            {
                type: "colr",
                icc: (function (e, t) {
                    let i = (0, r.hT)(e, t, 4);
                    if ("prof" === i || "rICC" === i)
                        return { offset: t + 4, length: e.getUint32(t + 4), chunkNumber: 1, chunksTotal: 1 };
                })(T, b),
                length: P,
            }
        );
    }
    let R = e.getUint8(_);
    return 0x6d657461 === D
        ? ((S = e), (F = t), { type: "meta", subBoxes: u(S, (I = _ + 1) + 3, (C = L) - (I + 3 - F)), length: C })
        : 0x696c6f63 === D
          ? (0, o.N)(e, R, _ + 1, L)
          : 0x69696e66 === D
            ? (function (e, t, i, n, r) {
                  var o;
                  let a,
                      s,
                      { offsets: l } =
                          ((o = i),
                          (a = { entryCount: n + 3 }),
                          (s = {}),
                          0 === o ? (s.entryCount = 2) : (s.entryCount = 4),
                          (a.itemInfos = a.entryCount + s.entryCount),
                          { offsets: a });
                  return { type: "iinf", itemInfos: u(e, l.itemInfos, r - (l.itemInfos - t)), length: r };
              })(e, t, R, _ + 1, L)
            : 0x696e6665 === D
              ? ((x = e),
                (E = t),
                (M = R),
                (U = _ + 1),
                (U += 3),
                (w = { type: "infe", length: (O = L) }),
                (0 === M || 1 === M) &&
                    ((w.itemId = x.getUint16(U)),
                    (U += 2),
                    (w.itemProtectionIndex = x.getUint16(U)),
                    (U += 2),
                    (w.itemName = (0, r.BD)(x, U)),
                    (U += w.itemName.length + 1)),
                M >= 2 &&
                    (2 === M
                        ? ((w.itemId = x.getUint16(U)), (U += 2))
                        : 3 === M && ((w.itemId = x.getUint32(U)), (U += 4)),
                    (w.itemProtectionIndex = x.getUint16(U)),
                    (U += 2),
                    (w.itemType = x.getUint32(U)),
                    (U += 4),
                    (w.itemName = (0, r.BD)(x, U)),
                    (U += w.itemName.length + 1),
                    0x6d696d65 === w.itemType
                        ? ((w.contentType = (0, r.BD)(x, U)),
                          E + O > (U += w.contentType.length + 1) &&
                              ((w.contentEncoding = (0, r.BD)(x, U)), (U += w.contentEncoding.length + 1)))
                        : 0x75726920 === w.itemType && ((w.itemUri = (0, r.BD)(x, U)), (U += w.itemUri.length + 1))),
                w)
              : { type: void 0, length: L };
}
function s(e) {
    if (n.A.USE_EXIF || n.A.USE_XMP || n.A.USE_ICC) {
        let t = {},
            i = (function (e) {
                let t = 0;
                for (; t + 4 + 4 <= e.byteLength; ) {
                    let i = a(e, t);
                    if (void 0 === i) break;
                    if ("meta" === i.type) return i;
                    t += i.length;
                }
            })(e);
        return i
            ? (n.A.USE_EXIF &&
                  (t.tiffHeaderOffset = (function (e, t) {
                      try {
                          var i, n;
                          let r = t.subBoxes
                                  .find((e) => "iinf" === e.type)
                                  .itemInfos.find((e) => 0x45786966 === e.itemType).itemId,
                              o = l(t, r),
                              a = o.baseOffset + o.extents[0].extentOffset;
                          return (i = e), (n = a) + 4 + i.getUint32(n);
                      } catch (e) {
                          return;
                      }
                  })(e, i)),
              n.A.USE_XMP &&
                  (t.xmpChunks = (function (e) {
                      try {
                          let t = e.subBoxes
                                  .find((e) => "iinf" === e.type)
                                  .itemInfos.find(
                                      (e) => 0x6d696d65 === e.itemType && "application/rdf+xml" === e.contentType,
                                  ).itemId,
                              i = l(e, t),
                              n = l(e, t).extents[0];
                          return [{ dataOffset: i.baseOffset + n.extentOffset, length: n.extentLength }];
                      } catch (e) {
                          return;
                      }
                  })(i)),
              n.A.USE_ICC &&
                  (t.iccChunks = (function (e) {
                      try {
                          let t = e.subBoxes
                              .find((e) => "iprp" === e.type)
                              .subBoxes.find((e) => "ipco" === e.type)
                              .properties.find((e) => "colr" === e.type).icc;
                          if (t) return [t];
                      } catch (e) {}
                  })(i)),
              (t.hasAppMarkers = void 0 !== t.tiffHeaderOffset || void 0 !== t.xmpChunks || void 0 !== t.iccChunks),
              t)
            : { hasAppMarkers: !1 };
    }
    return {};
}
function l(e, t) {
    return e.subBoxes.find((e) => "iloc" === e.type).items.find((e) => e.itemId === t);
}
function u(e, t, i) {
    let n = [0x45786966, 0x6d696d65],
        r = [],
        o = t;
    for (; o < t + i; ) {
        let t = a(e, o);
        if (void 0 === t) break;
        void 0 !== t.type && (void 0 === t.itemType || -1 !== n.indexOf(t.itemType)) && r.push(t), (o += t.length);
    }
    return r;
}
