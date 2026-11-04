var i = n(435558),
    r = n(628856);
function a(e) {
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
function s(e) {
    return e?.expiresAt != null && 1e3 * e.expiresAt < Date.now();
}
n.d(
    t,
    {},
    {
        Xq: a,
        bS: s,
        kn: function (e, t) {
            return null == e || null == t ? e === t : (0, i.isEqual)(a(e), a(t));
        },
        uZ: function (e, t) {
            return null != t && !s(e?.avatarDecoration) && e?.avatarDecoration?.asset != null;
        },
    },
);
