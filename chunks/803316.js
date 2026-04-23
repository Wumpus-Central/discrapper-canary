n.d(t, { N7: () => d, PK: () => m, XW: () => p, bc: () => g, e7: () => c, fW: () => h });
var i = n(376304),
    a = n(202803),
    r = n(378058),
    l = n(403362),
    s = n(998218),
    o = n(837921);
let d = "png",
    u = "cdn.discordapp.com";
function h(e) {
    return !((0, r.NO)(e) || (0, i.XD)(e));
}
function c(e, t, n) {
    let i = o.Ay.canSaveImage(e, n ?? t),
        a = s.A.isDiscordAssetUrl(e, t, n),
        r = h(e);
    return i && a && r;
}
function m(e, t, n) {
    let i = o.Ay.canCopyImage(e),
        a = s.A.isDiscordAssetUrl(e, t, n),
        r = h(e);
    return i && a && r;
}
function g(e, t) {
    if ((0, l.iT)()) return e ?? t;
    if (null != e) {
        let n = s.A.toURLSafe(t);
        if (null != n && (0, a.BX)(n)) return e;
    }
    return t;
}
function p(e, t, n, i) {
    let a = s.A.toURLSafe(e);
    if (null == a || a.host === u) return e;
    let r = (0, o.UB)(e, t),
        d = !1;
    if (
        ("https://media.discordapp.net" === a.origin && (d = !0),
        (0, l.iT)() && "http://localhost:4000" === a.origin && (d = !0),
        a.searchParams.delete("width"),
        a.searchParams.delete("height"),
        a.searchParams.delete("quality"),
        a.searchParams.delete("size"),
        d)
    )
        if ((0, l.iT)()) {
            if (s.A.isOriginalContentTypeDifferent(t, n)) return a.toString();
            (a.host = "localhost"),
                (a.port = "3000"),
                a.pathname.startsWith("/attachments/") && (a.pathname = "/channels/" + a.pathname.substring(13));
        } else a.host = u;
    return a.searchParams.delete("format"), null == r && null != i && a.searchParams.append("format", i), a.toString();
}
