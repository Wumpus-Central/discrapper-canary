async function t(e) {
    return null;
}
s.d(a, { WY: () => p, gT: () => r, Sx: () => i, BW: () => n, LM: () => g });
class r extends Error {
    kind;
    constructor(e, a) {
        super(a), (this.name = "ArboriumError"), (this.kind = e);
    }
}
function n(e, a) {
    if (0 === a.length) return [0, 0];
    let s = c.encode(a),
        t = e._malloc(s.length);
    return e.HEAPU8.set(s, t), [t, s.length];
}
function i(e, a, s) {
    return 0 === s ? "" : l.decode(e.HEAPU8.subarray(a, a + s));
}
async function g(e) {
    return e instanceof URL ? o(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function p(e) {
    if ("string" == typeof e) return e;
    let a = await o(e);
    return l.decode(a);
}
async function o(e) {
    let a = await t(e);
    if (a) return a;
    let s = await fetch(e);
    if (!s.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let c = new TextEncoder(),
    l = new TextDecoder();
