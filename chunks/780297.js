n.d(t, {
    A: () => d,
}),
    n(747238),
    n(812715);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(567243),
    o = n(644119),
    l = n(272984),
    c = n(802571);

function u(e) {
    let t = /intl-[^/]+\//;
    return e.replace(t, "");
}

function d(e) {
    let {
        className: t,
        embed: { url: n },
    } = e;
    if (null == n) return null;
    let i = null,
        d = null;
    try {
        let e = s.parse(u(n), !0);
        (i = e.host), (d = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, o.b)(i) || null == d) return null;
    let f = d.split("/"),
        p = null != f[1] ? f[1].toLowerCase() : null,
        _ = null != f[3] ? f[3].toLowerCase() : null,
        h = f[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != p ? p : "") ||
        ("user" === p && "playlist" !== _)
    )
        return null;
    "user" === p && "playlist" === _ && null != h && (d = "/playlist/".concat(h));
    let m = 352;
    return (
        "track" === p ? (m = 80) : ("episode" === p || "show" === p) && (m = 232),
        (0, r.jsx)("iframe", {
            className: a()(c.IL, t),
            src: l.RQ.EMBED(d),
            style: {
                maxWidth: 400,
                minWidth: 300,
                width: "100%",
                height: m,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
