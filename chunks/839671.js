n.d(t, { A: () => T, K: () => L });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(990078),
    d = n(998445),
    c = n(274997),
    u = n(80500),
    m = n(319745),
    _ = n(488225),
    h = n(967492),
    f = n(72265),
    g = n(454346),
    p = n(349288),
    x = n(534514),
    b = n(939249),
    A = n(409626),
    v = n(37948),
    E = n(985018),
    I = n(141535),
    C = n(262420);
let N = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    j = { colorClass: C.wP },
    y = { size: "xs", colorClass: C.wP };
function S(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return { icon: (0, a.jsx)(d.L, { ...t }), action: A.Ws.WebsiteLink, title: E.intl.string(E.t.fOUKvg) };
        case s.V.TWITTER:
            return { icon: (0, a.jsx)(c.p, { ...t }), action: A.Ws.XLink, title: E.intl.string(E.t.INic4y) };
        case s.V.YOUTUBE:
            return { action: A.Ws.YouTubeLink, icon: (0, a.jsx)(u.C, { ...t }), title: E.intl.string(E.t.lNmxbE) };
        case s.V.FACEBOOK:
            return { icon: (0, a.jsx)(m.Z, { ...t }), action: A.Ws.FacebookLink, title: E.intl.string(E.t.FjyREK) };
        case s.V.INSTAGRAM:
            return { icon: (0, a.jsx)(_.L, { ...t }), action: A.Ws.InstagramLink, title: E.intl.string(E.t["cgR+IK"]) };
        case s.V.BLUESKY:
            return { icon: (0, a.jsx)(h.a, { ...t }), action: A.Ws.BlueskyLink, title: E.intl.string(E.t["D/PHq5"]) };
        case s.V.REDDIT:
            return { icon: (0, a.jsx)(f.T, { ...t }), action: A.Ws.RedditLink, title: E.intl.string(E.t["Hgb+fc"]) };
        case s.V.TWITCH:
            return { icon: (0, a.jsx)(g.a, { ...t }), action: A.Ws.TwitchLink, title: E.intl.string(E.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function R(e) {
    let { website: t, trackAction: n } = e,
        { action: i, icon: r, title: s } = S(t, j),
        d = l.useCallback(() => {
            n(i);
        }, [i, n]);
    return (0, a.jsx)(o.m, {
        text: s,
        children: (0, a.jsx)(p.Anchor, {
            onClick: d,
            className: C.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r,
        }),
    });
}
let T = function (e) {
    let { game: t, trackAction: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return N.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(x.D, {
                      className: I.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: E.intl.string(E.t["Oj3o1/"]),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(I.nM, I.mX),
                      children: l.map((e) => (0, a.jsx)(R, { website: e, trackAction: n }, e.url)),
                  }),
              ],
          });
};
function L(e) {
    let { website: t, trackAction: n } = e,
        i = (0, v.A)(),
        { action: r, icon: s, title: d } = S(t, y),
        c = l.useCallback(() => {
            n(r), i(t.url);
        }, [r, i, n, t.url]);
    return (0, a.jsx)(o.m, {
        text: d,
        children: (0, a.jsx)(b.D, { onClick: c, className: C.yO, title: d, children: s }),
    });
}
