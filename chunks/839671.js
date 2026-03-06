"use strict";
n.d(t, { A: () => v, K: () => j });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    r = n(505779),
    s = n(990078),
    c = n(397927),
    o = n(409626),
    d = n(880405),
    u = n(985018),
    m = n(728528),
    x = n(612617);
let h = [r.V.OFFICIAL, r.V.TWITTER, r.V.YOUTUBE],
    f = { colorClass: x.wP },
    g = { size: "xs", colorClass: x.wP };
function p(e, t) {
    switch (e.category) {
        case r.V.OFFICIAL:
            return { icon: (0, l.jsx)(c.L_e, { ...t }), action: o.Ws.WebsiteLink, title: u.intl.string(u.t.fOUKvg) };
        case r.V.TWITTER:
            return { icon: (0, l.jsx)(c.p3p, { ...t }), action: o.Ws.XLink, title: u.intl.string(u.t.INic4y) };
        case r.V.YOUTUBE:
            return { action: o.Ws.YouTubeLink, icon: (0, l.jsx)(c.CiD, { ...t }), title: u.intl.string(u.t.lNmxbE) };
        case r.V.FACEBOOK:
            return { icon: (0, l.jsx)(c.Zc1, { ...t }), action: o.Ws.FacebookLink, title: u.intl.string(u.t.FjyREK) };
        case r.V.INSTAGRAM:
            return {
                icon: (0, l.jsx)(c.LyU, { ...t }),
                action: o.Ws.InstagramLink,
                title: u.intl.string(u.t["cgR+IK"]),
            };
        case r.V.BLUESKY:
            return { icon: (0, l.jsx)(c.akf, { ...t }), action: o.Ws.BlueskyLink, title: u.intl.string(u.t["D/PHq5"]) };
        case r.V.REDDIT:
            return { icon: (0, l.jsx)(c.T1e, { ...t }), action: o.Ws.RedditLink, title: u.intl.string(u.t["Hgb+fc"]) };
        case r.V.TWITCH:
            return { icon: (0, l.jsx)(c.aWO, { ...t }), action: o.Ws.TwitchLink, title: u.intl.string(u.t["7xtz4G"]) };
        default:
            throw Error("Unknown website category");
    }
}
function _(e) {
    let { website: t, trackClick: n } = e,
        { action: a, icon: i, title: r } = p(t, f);
    return (0, l.jsx)(s.m, {
        text: r,
        children: (0, l.jsx)(c.MzZ, {
            onClick: () => {
                n(a);
            },
            className: x.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: i,
        }),
    });
}
let v = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return h.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.Heading, {
                      className: m.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: u.intl.string(u.t["Oj3o1/"]),
                  }),
                  (0, l.jsx)("div", {
                      className: i()(m.nM, m.mX),
                      children: a.map((e) => (0, l.jsx)(_, { website: e, trackClick: n }, e.url)),
                  }),
              ],
          });
};
function j(e) {
    let { website: t, trackClick: n } = e,
        { action: a, icon: i, title: r } = p(t, g);
    return (0, l.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, l.jsx)(c.DUT, {
            tag: "a",
            onClick: () => {
                n(a);
            },
            className: x.yO,
            title: r,
            href: (0, d.L)(t.url),
            target: "_blank",
            rel: "noreferrer noopener",
            children: i,
        }),
    });
}
