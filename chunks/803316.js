var a = r(376304),
    n = r(679164),
    s = r(378058),
    i = r(403362),
    l = r(998218),
    o = r(253400),
    c = r(229531);
let h = "cdn.discordapp.com";
function u(t) {
    return !((0, s.NO)(t) || (0, a.XD)(t));
}
r.d(
    e,
    {},
    {
        PK: function (t, e, r) {
            let a = o.Ay.canCopyImage(t),
                n = l.A.isDiscordAssetUrl(t, e, r),
                s = u(t);
            return a && n && s;
        },
        XW: function (t, e, r, a) {
            let n = l.A.toURLSafe(t);
            if (null == n || n.host === h) return t;
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
                    ((n.host = "localhost"),
                        (n.port = "3000"),
                        n.pathname.startsWith("/attachments/") &&
                            (n.pathname = "/channels/" + n.pathname.substring(13)));
                } else n.host = h;
            return (
                n.searchParams.delete("format"),
                null == s && null != a && n.searchParams.append("format", a),
                n.toString()
            );
        },
        bc: function (t, e) {
            if ((0, i.iT)()) return t ?? e;
            if (null != t) {
                let r = l.A.toURLSafe(e);
                if (null != r && n.BX(r)) return t;
            }
            return e;
        },
        e7: function (t, e, r) {
            let a = o.Ay.canSaveImage(t, r ?? e),
                n = l.A.isDiscordAssetUrl(t, e, r),
                s = u(t);
            return a && n && s;
        },
        fW: u,
    },
);
