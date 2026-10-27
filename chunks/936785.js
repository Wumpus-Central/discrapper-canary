(l.d(e, { Ew: () => f, LZ: () => i, RD: () => a }), l(582128));
var n = l(318254),
    r = l(278416),
    u = l(403581);
let o = { ORBS: n.C, TAG: r.TagIcon, NITRO: u.t };
function i(t) {
    return null != t ? o[t] : void 0;
}
function a(t) {
    return null != t ? new Date(t) : null;
}
let c = "{value}";
function f(t, e) {
    return null == t ? null : t.includes(c) ? (null == e ? null : t.replaceAll(c, String(e))) : t;
}
