(t.d(l, { Ew: () => p, LZ: () => a, RD: () => i }), t(582128));
var e = t(318254),
    u = t(278416),
    r = t(403581);
let o = { ORBS: e.C, TAG: u.TagIcon, NITRO: r.t };
function a(n) {
    return null != n ? o[n] : void 0;
}
function i(n) {
    return null != n ? new Date(n) : null;
}
let c = "{value}";
function p(n, l) {
    return null == n ? null : n.includes(c) ? (null == l ? null : n.replaceAll(c, String(l))) : n;
}
