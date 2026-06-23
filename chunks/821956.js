"use strict";
n.d(t, { Xq: () => s, bS: () => a, kn: () => o, uZ: () => l });
var i = n(735438),
    r = n(628856);
function s(e) {
    if ("object" != typeof e || null == e) return null;
    let t = (0, r.V)(e);
    if (null == t) return null;
    let n = { skuId: t };
    return (
        "asset" in e && "string" == typeof e.asset && (n.asset = e.asset),
        "expires_at" in e && "number" == typeof e.expires_at && (n.expiresAt = e.expires_at),
        "expiresAt" in e && "number" == typeof e.expiresAt && (n.expiresAt = e.expiresAt),
        n
    );
}
function a(e) {
    return e?.expiresAt != null && 1e3 * e.expiresAt < Date.now();
}
function o(e, t) {
    return null == e || null == t ? e === t : (0, i.isEqual)(s(e), s(t));
}
function l(e, t) {
    return null != t && !a(e?.avatarDecoration) && e?.avatarDecoration?.asset != null;
}
