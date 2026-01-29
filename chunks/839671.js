l.d(t, {
    A: () => h,
    R: () => j,
}),
    l(65821),
    l(638769);
var n = l(627968);
l(64700);
var i = l(503698),
    a = l.n(i),
    r = l(798236),
    s = l(990078),
    o = l(397927),
    c = l(409626),
    d = l(985018),
    u = l(851822),
    m = l(307291);
let x = [r.w.OFFICIAL, r.w.TWITTER, r.w.YOUTUBE];

function f(e) {
    switch (e.category) {
        case r.w.OFFICIAL:
            return {
                icon: (0, n.jsx)(o.L_e, {
                    colorClass: m.wP,
                }),
                action: c.Ws.WebsiteLink,
                title: d.intl.string(d.t.fOUKvg),
            };
        case r.w.TWITTER:
            return {
                icon: (0, n.jsx)(o.p3p, {
                    colorClass: m.wP,
                }),
                action: c.Ws.XLink,
                title: d.intl.string(d.t.INic4y),
            };
        case r.w.YOUTUBE:
            return {
                action: c.Ws.YouTubeLink,
                icon: (0, n.jsx)(o.CiD, {
                    colorClass: m.wP,
                }),
                title: d.intl.string(d.t.lNmxbE),
            };
        default:
            throw Error("Unknown IGDB website category");
    }
}

function g(e) {
    let { website: t, trackClick: l } = e,
        { action: i, icon: a, title: r } = f(t);
    return (0, n.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, n.jsx)(o.MzZ, {
            onClick: () => {
                l(i);
            },
            className: m.yO,
            title: r,
            href: t.url,
            target: "_blank",
            children: a,
        }),
    });
}
let h = function (e) {
    let { detectedGame: t, trackClick: l } = e;
    if (null == t.websites) return null;
    let i = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(o.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, n.jsx)("div", {
                      className: a()(u.nM, u.mX),
                      children: i.map((e) =>
                          (0, n.jsx)(
                              g,
                              {
                                  website: e,
                                  trackClick: l,
                              },
                              e.url,
                          ),
                      ),
                  }),
              ],
          });
};

function p(e) {
    let { website: t, trackClick: l } = e,
        { action: i, icon: a, title: r } = f(t);
    return (0, n.jsx)(s.m, {
        __unsupportedReactNodeAsText: t.url,
        children: (0, n.jsx)(o.DUT, {
            tag: "a",
            onClick: () => {
                l(i);
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

function j(e) {
    let { detectedGame: t, trackClick: l } = e;
    if (null == t.websites) return null;
    let i = t.websites
        .filter((e) => {
            let { category: t } = e;
            return x.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              children: [
                  (0, n.jsx)(o.Heading, {
                      className: u.bV,
                      variant: "text-xs/semibold",
                      color: "text-default",
                      children: d.intl.string(d.t["Oj3o1/"]),
                  }),
                  (0, n.jsx)("div", {
                      className: a()(u.nM, u.mX),
                      children: i.map((e) =>
                          (0, n.jsx)(
                              p,
                              {
                                  website: e,
                                  trackClick: l,
                              },
                              e.url,
                          ),
                      ),
                  }),
              ],
          });
}
