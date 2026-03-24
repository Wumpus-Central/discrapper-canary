n.d(t, { A: () => v, K: () => j });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    c = n(990078),
    o = n(397927),
    d = n(409626),
    u = n(37948),
    m = n(985018),
    x = n(851822),
    f = n(307291);
let h = [s.V.OFFICIAL, s.V.TWITTER, s.V.YOUTUBE],
    g = { colorClass: f.wP },
    _ = { size: "xs", colorClass: f.wP };
function p(e, t) {
    switch (e.category) {
        case s.V.OFFICIAL:
            return { icon: (0, a.jsx)(o.L_e, { ...t }), action: d.Ws.WebsiteLink, title: m.intl.string(m.t.fOUKvg) };
        case s.V.TWITTER:
            return { icon: (0, a.jsx)(o.p3p, { ...t }), action: d.Ws.XLink, title: m.intl.string(m.t.INic4y) };
        case s.V.YOUTUBE:
            return { action: d.Ws.YouTubeLink, icon: (0, a.jsx)(o.CiD, { ...t }), title: m.intl.string(m.t.lNmxbE) };
        case s.V.FACEBOOK:
            return { icon: (0, a.jsx)(o.Zc1, { ...t }), action: d.Ws.FacebookLink, title: m.intl.string(m.t.FjyREK) };
        case s.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(o.LyU, { ...t }),
                action: d.Ws.InstagramLink,
                title: m.intl.string(m.t["cgR+IK"]),
            };
        case s.V.BLUESKY:
            return { icon: (0, a.jsx)(o.akf, { ...t }), action: d.Ws.BlueskyLink, title: m.intl.string(m.t["D/PHq5"]) };
        case s.V.REDDIT:
            return { icon: (0, a.jsx)(o.T1e, { ...t }), action: d.Ws.RedditLink, title: m.intl.string(m.t["Hgb+fc"]) };
        case s.V.TWITCH:
            return { icon: (0, a.jsx)(o.aWO, { ...t }), action: d.Ws.TwitchLink, title: m.intl.string(m.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function A(e) {
    let { website: t, trackAction: n } = e,
        { action: i, icon: r, title: s } = p(t, g),
        d = l.useCallback(() => {
            n(i);
        }, [i, n]);
    return (0, a.jsx)(c.m, {
        text: s,
        children: (0, a.jsx)(o.MzZ, {
            onClick: d,
            className: f.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: r,
        }),
    });
}
let v = function (e) {
    let { detectedGame: t, trackAction: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return h.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: x.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: m.intl.string(m.t["Oj3o1/"]),
                  }),
                  (0, a.jsx)("div", {
                      className: r()(x.nM, x.mX),
                      children: l.map((e) => (0, a.jsx)(A, { website: e, trackAction: n }, e.url)),
                  }),
              ],
          });
};
function j(e) {
    let { website: t, trackAction: n } = e,
        i = (0, u.A)(),
        { action: r, icon: s, title: d } = p(t, _),
        m = l.useCallback(() => {
            n(r), i(t.url);
        }, [r, i, n, t.url]);
    return (0, a.jsx)(c.m, {
        text: d,
        children: (0, a.jsx)(o.DUT, { onClick: m, className: f.yO, title: d, children: s }),
    });
}
