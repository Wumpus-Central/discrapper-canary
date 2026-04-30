"use strict";
n.d(t, { N7: () => u, PK: () => f, XW: () => p, bc: () => h, e7: () => _, fW: () => d });
var i = n(376304),
    r = n(202803),
    s = n(68935),
    a = n(403362),
    o = n(998218),
    l = n(19575);
let u = "png",
    c = "cdn.discordapp.com";
function d(e) {
    return !((0, s.NO)(e) || (0, i.XD)(e));
}
function _(e, t, n) {
    let i = l.Ay.canSaveImage(e, n ?? t),
        r = o.A.isDiscordAssetUrl(e, t, n),
        s = d(e);
    return i && r && s;
}
function f(e, t, n) {
    let i = l.Ay.canCopyImage(e),
        r = o.A.isDiscordAssetUrl(e, t, n),
        s = d(e);
    return i && r && s;
}
function h(e, t) {
    if ((0, a.iT)()) return e ?? t;
    if (null != e) {
        let n = o.A.toURLSafe(t);
        if (null != n && (0, r.BX)(n)) return e;
    }
    return t;
}
function p(e, t, n, i) {
    let r = o.A.toURLSafe(e);
    if (null == r || r.host === c) return e;
    let s = (0, l.UB)(e, t),
        u = !1;
    if (
        ("https://media.discordapp.net" === r.origin && (u = !0),
        (0, a.iT)() && "http://localhost:4000" === r.origin && (u = !0),
        r.searchParams.delete("width"),
        r.searchParams.delete("height"),
        r.searchParams.delete("quality"),
        r.searchParams.delete("size"),
        u)
    )
        if ((0, a.iT)()) {
            if (o.A.isOriginalContentTypeDifferent(t, n)) return r.toString();
            (r.host = "localhost"),
                (r.port = "3000"),
                r.pathname.startsWith("/attachments/") && (r.pathname = "/channels/" + r.pathname.substring(13));
        } else r.host = c;
    return r.searchParams.delete("format"), null == s && null != i && r.searchParams.append("format", i), r.toString();
}
