n.d(t, { N7: () => d, PK: () => m, XW: () => g, bc: () => p, e7: () => h, fW: () => c });
var i = n(376304),
    l = n(202803),
    r = n(378058),
    a = n(403362),
    s = n(998218),
    o = n(837921);
let d = "png",
    u = "cdn.discordapp.com";
function c(e) {
    return !((0, r.NO)(e) || (0, i.XD)(e));
}
function h(e, t, n) {
    let i = o.Ay.canSaveImage(e, n ?? t),
        l = s.A.isDiscordAssetUrl(e, t, n),
        r = c(e);
    return i && l && r;
}
function m(e, t, n) {
    let i = o.Ay.canCopyImage(e),
        l = s.A.isDiscordAssetUrl(e, t, n),
        r = c(e);
    return i && l && r;
}
function p(e, t) {
    if ((0, a.iT)()) return e ?? t;
    if (null != e) {
        let n = s.A.toURLSafe(t);
        if (null != n && (0, l.BX)(n)) return e;
    }
    return t;
}
function g(e, t, n, i) {
    let l = s.A.toURLSafe(e);
    if (null == l || l.host === u) return e;
    let r = (0, o.UB)(e, t),
        d = !1;
    if (
        ("https://media.discordapp.net" === l.origin && (d = !0),
        (0, a.iT)() && "http://localhost:4000" === l.origin && (d = !0),
        l.searchParams.delete("width"),
        l.searchParams.delete("height"),
        l.searchParams.delete("quality"),
        l.searchParams.delete("size"),
        d)
    )
        if ((0, a.iT)()) {
            if (s.A.isOriginalContentTypeDifferent(t, n)) return l.toString();
            (l.host = "localhost"),
                (l.port = "3000"),
                l.pathname.startsWith("/attachments/") && (l.pathname = "/channels/" + l.pathname.substring(13));
        } else l.host = u;
    return l.searchParams.delete("format"), null == r && null != i && l.searchParams.append("format", i), l.toString();
}
