n.d(t, { I: () => u }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(963458), n(47120), n(230036);
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
