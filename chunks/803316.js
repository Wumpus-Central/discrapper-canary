"use strict";
n.d(t, { N7: () => u, PK: () => g, XW: () => A, bc: () => E, e7: () => m, fW: () => h });
var r = n(376304),
    i = n(202803),
    a = n(378058),
    s = n(403362),
    o = n(998218),
    l = n(837921);
let u = "png",
    c = "https://media.discordapp.net",
    d = "cdn.discordapp.com",
    _ = "localhost",
    f = "3000",
    p = "http://localhost:4000";
function h(e) {
    return !((0, a.NO)(e) || (0, r.XD)(e));
}
function m(e, t, n) {
    let r = l.Ay.canSaveImage(e, n ?? t),
        i = o.A.isDiscordAssetUrl(e, t, n),
        a = h(e);
    return r && i && a;
}
function g(e, t, n) {
    let r = l.Ay.canCopyImage(e),
        i = o.A.isDiscordAssetUrl(e, t, n),
        a = h(e);
    return r && i && a;
}
function E(e, t) {
    if ((0, s.iT)()) return e ?? t;
    if (null != e) {
        let n = o.A.toURLSafe(t);
        if (null != n && (0, i.BX)(n)) return e;
    }
    return t;
}
function A(e, t, n, r) {
    let i = o.A.toURLSafe(e);
    if (null == i || i.host === d) return e;
    let a = (0, l.UB)(e, t),
        u = !1;
    if (
        (i.origin === c && (u = !0),
        (0, s.iT)() && i.origin === p && (u = !0),
        i.searchParams.delete("width"),
        i.searchParams.delete("height"),
        i.searchParams.delete("quality"),
        i.searchParams.delete("size"),
        u)
    )
        if ((0, s.iT)()) {
            if (o.A.isOriginalContentTypeDifferent(t, n)) return i.toString();
            (i.host = _),
                (i.port = f),
                i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13));
        } else i.host = d;
    return i.searchParams.delete("format"), null == a && null != r && i.searchParams.append("format", r), i.toString();
}
