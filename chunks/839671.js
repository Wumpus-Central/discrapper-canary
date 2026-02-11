i.d(t, { A: () => f, R: () => p });
var l = i(627968);
i(64700);
var a = i(503698),
    n = i.n(a),
    s = i(798236),
    r = i(990078),
    c = i(397927),
    o = i(409626),
    d = i(985018),
    u = i(851822),
    m = i(307291);
let x = [s.w.OFFICIAL, s.w.TWITTER, s.w.YOUTUBE];
function g(e) {
    switch (e.category) {
        case s.w.OFFICIAL:
            return {
                icon: (0, l.jsx)(c.L_e, { colorClass: m.wP }),
                action: o.Ws.WebsiteLink,
                title: d.intl.string(d.t.fOUKvg),
            };
        case s.w.TWITTER:
            return {
                icon: (0, l.jsx)(c.p3p, { colorClass: m.wP }),
                action: o.Ws.XLink,
                title: d.intl.string(d.t.INic4y),
            };
        case s.w.YOUTUBE:
            return {
                action: o.Ws.YouTubeLink,
                icon: (0, l.jsx)(c.CiD, { colorClass: m.wP }),
                title: d.intl.string(d.t.lNmxbE),
            };
        default:
            throw Error("Unknown IGDB website category");
    }
}
function h(e) {
    let { website: t, trackClick: i } = e,
        { action: a, icon: n, title: s } = g(t);
    return (0, l.jsx)(r.m, {
        text: s,
        children: (0, l.jsx)(c.MzZ, {
            onClick: () => {
                i(a);
            },
            className: m.yO,
            href: t.url,
            target: "_blank",
            "aria-label": s,
            children: n,
        }),
    });
}
let f = function (e) {
    let { detectedGame: t, trackClick: i } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, l.jsx)("div", {
                      className: n()(u.nM, u.mX),
                      children: a.map((e) => (0, l.jsx)(h, { website: e, trackClick: i }, e.url)),
                  }),
              ],
          });
};
function j(e) {
    let { website: t, trackClick: i } = e,
        { action: a, icon: n, title: s } = g(t);
    return (0, l.jsx)(r.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, l.jsx)(c.DUT, {
            tag: "a",
            onClick: () => {
                i(a);
            },
            className: m.yO,
            title: s,
            href: t.url,
            target: "_blank",
            rel: "noreferrer noopener",
            children: n,
        }),
    });
}
function p(e) {
    let { detectedGame: t, trackClick: i } = e;
    if (null == t.websites) return null;
    let a = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(c.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, l.jsx)("div", {
                      className: n()(u.nM, u.mX),
                      children: a.map((e) => (0, l.jsx)(j, { website: e, trackClick: i }, e.url)),
                  }),
              ],
          });
}
