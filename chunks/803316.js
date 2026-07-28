"use strict";
n.d(t, { N7: () => c, PK: () => A, XW: () => I, bc: () => h, e7: () => E, fW: () => _ });
var i = n(376304),
    r = n(202803),
    a = n(68935),
    s = n(403362),
    l = n(998218),
    o = n(19575),
    d = n(229531);
let c = "png",
    u = "cdn.discordapp.com";
function _(e) {
    return !((0, a.NO)(e) || (0, i.XD)(e));
}
function E(e, t, n) {
    let i = o.Ay.canSaveImage(e, n ?? t),
        r = l.A.isDiscordAssetUrl(e, t, n),
        a = _(e);
    return i && r && a;
}
function A(e, t, n) {
    let i = o.Ay.canCopyImage(e),
        r = l.A.isDiscordAssetUrl(e, t, n),
        a = _(e);
    return i && r && a;
}
function h(e, t) {
    if ((0, s.iT)()) return e ?? t;
    if (null != e) {
        let n = l.A.toURLSafe(t);
        if (null != n && (0, r.BX)(n)) return e;
    }
    return t;
}
function I(e, t, n, i) {
    let r = l.A.toURLSafe(e);
    if (null == r || r.host === u) return e;
    let a = (0, d.U)(e, t),
        o = !1;
    if (
        ("https://media.discordapp.net" === r.origin && (o = !0),
        (0, s.iT)() && "http://localhost:4000" === r.origin && (o = !0),
        r.searchParams.delete("width"),
        r.searchParams.delete("height"),
        r.searchParams.delete("quality"),
        r.searchParams.delete("size"),
        o)
    )
        if ((0, s.iT)()) {
            if (l.A.isOriginalContentTypeDifferent(t, n)) return r.toString();
            (r.host = "localhost"),
                (r.port = "3000"),
                r.pathname.startsWith("/attachments/") && (r.pathname = "/channels/" + r.pathname.substring(13));
        } else r.host = u;
    return r.searchParams.delete("format"), null == a && null != i && r.searchParams.append("format", i), r.toString();
}
