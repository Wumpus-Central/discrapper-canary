r.d(e, { N7: () => h, PK: () => f, XW: () => g, bc: () => m, e7: () => d, fW: () => p });
var a = r(376304),
    n = r(202803),
    s = r(68935),
    i = r(403362),
    l = r(998218),
    o = r(19575),
    c = r(229531);
let h = "png",
    u = "cdn.discordapp.com";
function p(t) {
    return !((0, s.NO)(t) || (0, a.XD)(t));
}
function d(t, e, r) {
    let a = o.Ay.canSaveImage(t, r ?? e),
        n = l.A.isDiscordAssetUrl(t, e, r),
        s = p(t);
    return a && n && s;
}
function f(t, e, r) {
    let a = o.Ay.canCopyImage(t),
        n = l.A.isDiscordAssetUrl(t, e, r),
        s = p(t);
    return a && n && s;
}
function m(t, e) {
    if ((0, i.iT)()) return t ?? e;
    if (null != t) {
        let r = l.A.toURLSafe(e);
        if (null != r && (0, n.BX)(r)) return t;
    }
    return e;
}
function g(t, e, r, a) {
    let n = l.A.toURLSafe(t);
    if (null == n || n.host === u) return t;
    let s = (0, c.U)(t, e),
        o = !1;
    if (
        ("https://media.discordapp.net" === n.origin && (o = !0),
        (0, i.iT)() && "http://localhost:4000" === n.origin && (o = !0),
        n.searchParams.delete("width"),
        n.searchParams.delete("height"),
        n.searchParams.delete("quality"),
        n.searchParams.delete("size"),
        o)
    )
        if ((0, i.iT)()) {
            if (l.A.isOriginalContentTypeDifferent(e, r)) return n.toString();
            (n.host = "localhost"),
                (n.port = "3000"),
                n.pathname.startsWith("/attachments/") && (n.pathname = "/channels/" + n.pathname.substring(13));
        } else n.host = u;
    return n.searchParams.delete("format"), null == s && null != a && n.searchParams.append("format", a), n.toString();
}
