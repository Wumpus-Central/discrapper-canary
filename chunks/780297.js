t.d(l, { A: () => u });
var r = t(627968);
t(64700);
var s = t(503698),
    n = t.n(s),
    i = t(567243),
    a = t(644119),
    o = t(272984),
    d = t(472840);
function u(e) {
    let {
        className: l,
        embed: { url: t },
    } = e;
    if (null == t) return null;
    let s = null,
        u = null;
    try {
        let e = i.parse(t.replace(/intl-[^/]+\//, ""), !0);
        (s = e.host), (u = e.pathname);
    } catch (e) {
        return null;
    }
    if (!(0, a.b)(s) || null == u) return null;
    let h = u.split("/"),
        c = null != h[1] ? h[1].toLowerCase() : null,
        m = null != h[3] ? h[3].toLowerCase() : null,
        p = h[4];
    if (
        !["track", "playlist", "album", "artist", "user", "show", "episode"].includes(c ?? "") ||
        ("user" === c && "playlist" !== m)
    )
        return null;
    "user" === c && "playlist" === m && null != p && (u = `/playlist/${p}`);
    let g = 352;
    return (
        "track" === c ? (g = 80) : ("episode" === c || "show" === c) && (g = 232),
        (0, r.jsx)("iframe", {
            className: n()(d.IL, l),
            src: o.RQ.EMBED(u),
            style: { maxWidth: 400, minWidth: 300, width: "100%", height: g },
            frameBorder: 0,
            sandbox:
                "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
            allow: "clipboard-write",
        })
    );
}
