n.d(t, { A: () => L, K: () => T });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(990078),
    c = n(998445),
    d = n(274997),
    u = n(80500),
    m = n(319745),
    h = n(488225),
    f = n(967492),
    _ = n(72265),
    g = n(454346),
    p = n(349288),
    x = n(534514),
    E = n(939249),
    A = n(409626),
    v = n(37948),
    I = n(985018),
    b = n(141535),
    j = n(262420);
let N = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    C = { colorClass: j.wP },
    S = { size: "xs", colorClass: j.wP };
function y(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return { icon: (0, l.jsx)(c.L, { ...t }), action: A.Ws.WebsiteLink, title: I.intl.string(I.t.fOUKvg) };
        case s.V.TWITTER:
            return { icon: (0, l.jsx)(d.p, { ...t }), action: A.Ws.XLink, title: I.intl.string(I.t.INic4y) };
        case s.V.YOUTUBE:
            return { action: A.Ws.YouTubeLink, icon: (0, l.jsx)(u.C, { ...t }), title: I.intl.string(I.t.lNmxbE) };
        case s.V.FACEBOOK:
            return { icon: (0, l.jsx)(m.Z, { ...t }), action: A.Ws.FacebookLink, title: I.intl.string(I.t.FjyREK) };
        case s.V.INSTAGRAM:
            return { icon: (0, l.jsx)(h.L, { ...t }), action: A.Ws.InstagramLink, title: I.intl.string(I.t["cgR+IK"]) };
        case s.V.BLUESKY:
            return { icon: (0, l.jsx)(f.a, { ...t }), action: A.Ws.BlueskyLink, title: I.intl.string(I.t["D/PHq5"]) };
        case s.V.REDDIT:
            return { icon: (0, l.jsx)(_.T, { ...t }), action: A.Ws.RedditLink, title: I.intl.string(I.t["Hgb+fc"]) };
        case s.V.TWITCH:
            return { icon: (0, l.jsx)(g.a, { ...t }), action: A.Ws.TwitchLink, title: I.intl.string(I.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function R(e) {
    let { website: t, trackAction: n } = e,
        { action: i, icon: r, title: s } = y(t, C),
        c = a.useCallback(() => {
            n(i);
        }, [i, n]);
    return (0, l.jsx)(o.m, {
        text: s,
        children: (0, l.jsx)(p.Anchor, {
            onClick: c,
            className: j.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r,
        }),
    });
}
let L = function (e) {
    let { game: t, trackAction: n } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return N.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(x.D, {
                      className: b.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: I.intl.string(I.t["Oj3o1/"]),
                  }),
                  (0, l.jsx)("div", {
                      className: r()(b.nM, b.mX),
                      children: a.map((e) => (0, l.jsx)(R, { website: e, trackAction: n }, e.url)),
                  }),
              ],
          });
};
function T(e) {
    let { website: t, trackAction: n } = e,
        i = (0, v.A)(),
        { action: r, icon: s, title: c } = y(t, S),
        d = a.useCallback(() => {
            n(r), i(t.url);
        }, [r, i, n, t.url]);
    return (0, l.jsx)(o.m, {
        text: c,
        children: (0, l.jsx)(E.D, { onClick: d, className: j.yO, title: c, children: s }),
    });
}
