t.d(l, {
    A: () => d,
}),
    t(747238),
    t(812715);
var r = t(627968);
t(64700);
var n = t(503698),
    i = t.n(n),
    s = t(567243),
    a = t(644119),
    o = t(272984),
    u = t(802571);

function d(e) {
    let {
        className: l,
        embed: { url: t },
    } = e;
    if (null == t) return null;
    let n = null,
        d = null;
    try {
        let e = s.parse(t.replace(/intl-[^/]+\//, ""), !0);
        (n = e.host), (d = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, a.b)(n) || null == d) return null;
    let c = d.split("/"),
        h = null != c[1] ? c[1].toLowerCase() : null,
        p = null != c[3] ? c[3].toLowerCase() : null,
        m = c[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != h ? h : "") ||
        ("user" === h && "playlist" !== p)
    )
        return null;
    "user" === h && "playlist" === p && null != m && (d = "/playlist/".concat(m));
    let g = 352;
    return (
        "track" === h ? (g = 80) : ("episode" === h || "show" === h) && (g = 232),
        (0, r.jsx)("iframe", {
            className: i()(u.IL, l),
            src: o.RQ.EMBED(d),
            style: {
                maxWidth: 400,
                minWidth: 300,
                width: "100%",
                height: g,
            },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
