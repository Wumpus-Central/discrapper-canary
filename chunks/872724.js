n.d(t, { Z: () => _ });
var r = n(440769),
    i = n(140827);
let o = 943868237,
    a = 4,
    s = 2,
    l = 1,
    c = 4,
    u = 12,
    d = 1028,
    f = 5,
    _ = { read: p };
function p(e, t, n) {
    try {
        if (Array.isArray(e)) return b(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
        let { naaBlock: r, dataOffset: i } = h(e, t);
        return b(e, r, i, n);
    } catch (e) {
        return {};
    }
}
function h(e, t) {
    for (; t + u <= e.byteLength; ) {
        let n = m(e, t);
        if (g(n))
            return {
                naaBlock: n,
                dataOffset: t + n.headerSize,
            };
        t += n.headerSize + n.size + E(n);
    }
    throw Error("No IPTC NAA resource block.");
}
function m(e, t) {
    if (e.getUint32(t, !1) !== o) throw Error("Not an IPTC resource block.");
    let n = e.getUint8(t + a + s),
        r = (n % 2 == 0 ? n + 1 : n) + l;
    return {
        headerSize: a + s + r + c,
        type: e.getUint16(t + a),
        size: e.getUint32(t + a + s + r),
    };
}
function g(e) {
    return e.type === d;
}
function E(e) {
    return +(e.size % 2 != 0);
}
function b(e, t, n, r) {
    let i,
        o = {},
        a = n + t.size;
    for (; n < a && n < e.byteLength; ) {
        let { tag: t, tagSize: a } = y(e, n, o, i, r);
        if (null === t) break;
        t &&
            ("encoding" in t && (i = t.encoding),
            void 0 === o[t.name] || void 0 === t.repeatable
                ? (o[t.name] = {
                      id: t.id,
                      value: t.value,
                      description: t.description,
                  })
                : (o[t.name] instanceof Array ||
                      (o[t.name] = [
                          {
                              id: o[t.name].id,
                              value: o[t.name].value,
                              description: o[t.name].description,
                          },
                      ]),
                  o[t.name].push({
                      id: t.id,
                      value: t.value,
                      description: t.description,
                  }))),
            (n += f + a);
    }
    return o;
}
function y(e, t, n, i, o) {
    let a = 1,
        s = 3;
    if (O(e, t))
        return {
            tag: null,
            tagSize: 0,
        };
    let l = e.getUint16(t + a),
        c = e.getUint16(t + s);
    if (!o && !r.Z.iptc[l])
        return {
            tag: void 0,
            tagSize: c,
        };
    let u = v(e, t + f, c),
        d = {
            id: l,
            name: I(r.Z.iptc[l], l, u),
            value: u,
            description: A(r.Z.iptc[l], u, n, i),
        };
    return (
        R(l) && (d.repeatable = !0),
        P(l) && (d.encoding = r.Z.iptc[l].encoding_name(u)),
        {
            tag: d,
            tagSize: c,
        }
    );
}
function O(e, t) {
    let n = 28;
    return e.getUint8(t) !== n;
}
function v(e, t, n) {
    let r = [];
    for (let i = 0; i < n; i++) r.push(e.getUint8(t + i));
    return r;
}
function I(e, t, n) {
    return e ? (T(e) ? e : S(e) ? e.name(n) : e.name) : `undefined-${t}`;
}
function T(e) {
    return "string" == typeof e;
}
function S(e) {
    return "function" == typeof e.name;
}
function A(e, t, n, r) {
    if (N(e))
        try {
            return e.description(t, n);
        } catch (e) {}
    return C(e, t) ? i.Z.decode(r, t) : t;
}
function C(e, t) {
    return e && t instanceof Array;
}
function N(e) {
    return e && void 0 !== e.description;
}
function R(e) {
    return r.Z.iptc[e] && r.Z.iptc[e].repeatable;
}
function P(e) {
    return r.Z.iptc[e] && void 0 !== r.Z.iptc[e].encoding_name;
}
