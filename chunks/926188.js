n.d(t, { I: () => u }), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(724083), n(388685), n(642613);
var r = n(309651),
    i = n(802667);
let a = Uint8Array.of(36, 202, 177, 122, 122, 248, 236, 43, 130, 180, 18, 185, 45, 171, 25, 46),
    o = {
        N: 16384,
        r: 8,
        p: 2,
        dkLen: 64
    };
function c(e, t) {
    for (let n = 0; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e[n] - t[n];
    return e.length - t.length;
}
async function u(e, t, n, u, l) {
    let s = await Promise.all([(0, r.x)(e, t, n), (0, r.x)(e, u, l)]);
    s.sort(c);
    let E = new Uint8Array(s[0].byteLength + s[1].byteLength);
    return E.set(s[0], 0), E.set(s[1], s[0].byteLength), new Uint8Array(await (0, i.E)(E, a, o));
}
