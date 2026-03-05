"use strict";
n.d(t, { A: () => g, R: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(505779),
    s = n(990078),
    c = n(397927),
    o = n(409626),
    d = n(985018),
    u = n(851822),
    m = n(307291);
let x = [r.V.OFFICIAL, r.V.TWITTER, r.V.YOUTUBE];
function h(e) {
    switch (e.category) {
        case r.V.OFFICIAL:
            return {
                icon: (0, i.jsx)(c.L_e, { colorClass: m.wP }),
                action: o.Ws.WebsiteLink,
                title: d.intl.string(d.t.fOUKvg),
            };
        case r.V.TWITTER:
            return {
                icon: (0, i.jsx)(c.p3p, { colorClass: m.wP }),
                action: o.Ws.XLink,
                title: d.intl.string(d.t.INic4y),
            };
        case r.V.YOUTUBE:
            return {
                action: o.Ws.YouTubeLink,
                icon: (0, i.jsx)(c.CiD, { colorClass: m.wP }),
                title: d.intl.string(d.t.lNmxbE),
            };
        default:
            throw Error("Unknown website category");
    }
}
function f(e) {
    let { website: t, trackClick: n } = e,
        { action: l, icon: a, title: r } = h(t);
    return (0, i.jsx)(s.m, {
        text: r,
        children: (0, i.jsx)(c.MzZ, {
            onClick: () => {
                n(l);
            },
            className: m.yO,
            href: t.url,
            target: "_blank",
            "aria-label": r,
            children: a,
        }),
    });
}
let g = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(c.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(u.nM, u.mX),
                      children: l.map((e) => (0, i.jsx)(f, { website: e, trackClick: n }, e.url)),
                  }),
              ],
          });
};
function _(e) {
    let { website: t, trackClick: n } = e,
        { action: l, icon: a, title: r } = h(t);
    return (0, i.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, i.jsx)(c.DUT, {
            tag: "a",
            onClick: () => {
                n(l);
            },
            className: m.yO,
            title: r,
            href: t.url,
            target: "_blank",
            rel: "noreferrer noopener",
            children: a,
        }),
    });
}
function p(e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let l = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(c.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, i.jsx)("div", {
                      className: a()(u.nM, u.mX),
                      children: l.map((e) => (0, i.jsx)(_, { website: e, trackClick: n }, e.url)),
                  }),
              ],
          });
}
