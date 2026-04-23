n.d(e, { N7: () => c, PK: () => p, XW: () => m, bc: () => g, e7: () => h, fW: () => u });
var a = n(376304),
    i = n(202803),
    r = n(68935),
    l = n(403362),
    s = n(998218),
    o = n(19575);
let c = "png",
    d = "cdn.discordapp.com";
function u(t) {
    return !((0, r.NO)(t) || (0, a.XD)(t));
}
function h(t, e, n) {
    let a = o.Ay.canSaveImage(t, n ?? e),
        i = s.A.isDiscordAssetUrl(t, e, n),
        r = u(t);
    return a && i && r;
}
function p(t, e, n) {
    let a = o.Ay.canCopyImage(t),
        i = s.A.isDiscordAssetUrl(t, e, n),
        r = u(t);
    return a && i && r;
}
function g(t, e) {
    if ((0, l.iT)()) return t ?? e;
    if (null != t) {
        let n = s.A.toURLSafe(e);
        if (null != n && (0, i.BX)(n)) return t;
    }
    return e;
}
function m(t, e, n, a) {
    let i = s.A.toURLSafe(t);
    if (null == i || i.host === d) return t;
    let r = (0, o.UB)(t, e),
        c = !1;
    if (
        ("https://media.discordapp.net" === i.origin && (c = !0),
        (0, l.iT)() && "http://localhost:4000" === i.origin && (c = !0),
        i.searchParams.delete("width"),
        i.searchParams.delete("height"),
        i.searchParams.delete("quality"),
        i.searchParams.delete("size"),
        c)
    )
        if ((0, l.iT)()) {
            if (s.A.isOriginalContentTypeDifferent(e, n)) return i.toString();
            (i.host = "localhost"),
                (i.port = "3000"),
                i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13));
        } else i.host = d;
    return i.searchParams.delete("format"), null == r && null != a && i.searchParams.append("format", a), i.toString();
}
