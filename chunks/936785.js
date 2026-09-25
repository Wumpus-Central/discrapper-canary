(l.d(t, { Ew: () => d, LZ: () => a, RD: () => i }), l(582128));
var e = l(318254),
    r = l(278416),
    u = l(403581);
let o = { ORBS: e.C, TAG: r.TagIcon, NITRO: u.t };
function a(n) {
    return null != n ? o[n] : void 0;
}
function i(n) {
    return null != n ? new Date(n) : null;
}
let c = "{value}";
function d(n, t) {
    return null == n ? null : n.includes(c) ? (null == t ? null : n.replaceAll(c, String(t))) : n;
}
