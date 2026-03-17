n.d(t, { A: () => j, K: () => _ });
var a = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(505779),
    s = n(990078),
    o = n(397927),
    c = n(409626),
    d = n(880405),
    u = n(985018),
    m = n(851822),
    x = n(307291);
let f = [r.V.OFFICIAL, r.V.TWITTER, r.V.YOUTUBE],
    h = { colorClass: x.wP },
    g = { size: "xs", colorClass: x.wP };
function p(e, t) {
    switch (e.category) {
        case r.V.OFFICIAL:
            return { icon: (0, a.jsx)(o.L_e, { ...t }), action: c.Ws.WebsiteLink, title: u.intl.string(u.t.fOUKvg) };
        case r.V.TWITTER:
            return { icon: (0, a.jsx)(o.p3p, { ...t }), action: c.Ws.XLink, title: u.intl.string(u.t.INic4y) };
        case r.V.YOUTUBE:
            return { action: c.Ws.YouTubeLink, icon: (0, a.jsx)(o.CiD, { ...t }), title: u.intl.string(u.t.lNmxbE) };
        case r.V.FACEBOOK:
            return { icon: (0, a.jsx)(o.Zc1, { ...t }), action: c.Ws.FacebookLink, title: u.intl.string(u.t.FjyREK) };
        case r.V.INSTAGRAM:
            return {
                icon: (0, a.jsx)(o.LyU, { ...t }),
                action: c.Ws.InstagramLink,
                title: u.intl.string(u.t["cgR+IK"]),
            };
        case r.V.BLUESKY:
            return { icon: (0, a.jsx)(o.akf, { ...t }), action: c.Ws.BlueskyLink, title: u.intl.string(u.t["D/PHq5"]) };
        case r.V.REDDIT:
            return { icon: (0, a.jsx)(o.T1e, { ...t }), action: c.Ws.RedditLink, title: u.intl.string(u.t["Hgb+fc"]) };
        case r.V.TWITCH:
            return { icon: (0, a.jsx)(o.aWO, { ...t }), action: c.Ws.TwitchLink, title: u.intl.string(u.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function v(e) {
    let { website: t, trackClick: n } = e,
        { action: l, icon: i, title: r } = p(t, h);
    return (0, a.jsx)(s.m, {
        text: r,
        children: (0, a.jsx)(o.MzZ, {
            onClick: () => {
                n(l);
            },
            className: x.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: i,
        }),
    });
}
let j = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return f.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: m.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: u.intl.string(u.t["Oj3o1/"]),
                  }),
                  (0, a.jsx)("div", {
                      className: i()(m.nM, m.mX),
                      children: l.map((e) => (0, a.jsx)(v, { website: e, trackClick: n }, e.url)),
                  }),
              ],
          });
};
function _(e) {
    let { website: t, trackClick: n } = e,
        { action: l, icon: i, title: r } = p(t, g);
    return (0, a.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, a.jsx)(o.DUT, {
            tag: "a",
            onClick: () => {
                n(l);
            },
            className: x.yO,
            title: r,
            href: (0, d.L$)(t.url),
            target: "_blank",
            rel: "noreferrer noopener",
            children: i,
        }),
    });
}
