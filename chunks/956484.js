n.d(t, { Z: () => u });
var r = n(463424),
    i = n(684667),
    o = n(692764),
    a = n(267236);
let s = "Exif IFD Pointer",
    l = "GPS Info IFD Pointer",
    c = "Interoperability IFD Pointer",
    u = { read: d };
function d(e, t, n) {
    let r = i.Z.getByteOrder(e, t),
        o = f(e, t, r, n);
    return {
        tags: (o = h((o = p((o = _(o, e, t, r, n)), e, t, r, n)), e, t, r, n)),
        byteOrder: r,
    };
}
function f(e, t, n, r) {
    return (0, a.N)(e, o.n1, t, (0, a.a)(e, t, n), n, r);
}
function _(e, t, n, i, l) {
    return void 0 !== e[s] ? (0, r.wB)(e, (0, a.N)(t, o.nR, n, n + e[s].value, i, l)) : e;
}
function p(e, t, n, i, s) {
    return void 0 !== e[l] ? (0, r.wB)(e, (0, a.N)(t, o.C9, n, n + e[l].value, i, s)) : e;
}
function h(e, t, n, i, s) {
    return void 0 !== e[c] ? (0, r.wB)(e, (0, a.N)(t, o.$8, n, n + e[c].value, i, s)) : e;
}
