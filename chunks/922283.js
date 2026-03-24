n.d(t, { A: () => E });
var a = n(627968),
    l = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(397927),
    c = n(223273),
    o = n(317607),
    d = n(409626),
    u = n(676937),
    m = n(133580),
    x = n(37948),
    f = n(778591),
    h = n(465736),
    g = n(985018),
    _ = n(719187);
function p(e) {
    let { detectedGame: t, url: n, trackAction: i } = e,
        { reviews: m } = t,
        f = m?.steam ?? { rating: void 0, ratingCount: void 0 },
        h = (0, x.A)(),
        p = (0, o.j)(f.rating, f.ratingCount),
        A = (0, u.y)(p),
        v = l.useCallback(() => {
            i(d.Ws.SteamReviews), h(n);
        }, [h, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: v,
        className: _.nf,
        role: "link",
        "aria-label": g.intl.string(g.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: _.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: _.tN,
                    children: [
                        (0, a.jsx)(s.NXQ, { size: "sm", color: s.LU0.colors.ICON_STRONG.css }),
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: g.intl.string(g.t.whmopT),
                        }),
                    ],
                }),
                (0, a.jsx)(
                    r.m,
                    {
                        text:
                            p === c.vI.NO_USER_REVIEWS
                                ? g.intl.string(g.t.CLMt8J)
                                : g.intl
                                      .format(g.t["lzANJ/"], {
                                          rating: f.rating,
                                          rating_count: f.ratingCount?.toLocaleString(),
                                      })
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: _.Z0,
                            children: [
                                (0, a.jsx)(s.Text, { variant: "text-xs/medium", color: A, children: (0, u.a)(p) }),
                                null != f.ratingCount &&
                                    p !== c.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: g.intl
                                            .format(g.t.sgIoin, { rating_count: f.ratingCount?.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    "open-steam-page",
                ),
            ],
        }),
    });
}
function A(e) {
    let { detectedGame: t, url: n, trackAction: i } = e,
        { reviews: r } = t,
        o = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        m = o.tier,
        f = o.topCriticRating ?? -1,
        h = o.topCriticRatingCount ?? -1,
        p = (f <= 0 || h <= 0) && null == m,
        A = (0, x.A)(),
        E = l.useCallback(() => {
            i(d.Ws.OpenCriticReviews), A(n);
        }, [A, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: E,
        className: _.nf,
        role: "link",
        "aria-label": g.intl.string(g.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: _.Ur,
            children: [
                (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: g.intl.string(g.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: _.WA,
                    children: [
                        null != m ? (0, a.jsx)(v, { tier: m }) : null,
                        null != m && f > 0 && h > 0 ? (0, a.jsx)(j, { rating: f, tier: m }) : null,
                        p
                            ? (0, a.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: (0, u.y)(c.vI.NO_USER_REVIEWS),
                                  children: g.intl.string(g.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function v(e) {
    let { tier: t } = e,
        n = (0, m.a)(t),
        l = (0, m.GE)(t);
    return (0, a.jsx)(
        r.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: _.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32 }),
            }),
        },
        "open-critic-tier",
    );
}
function j(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (0, m.ff)(n);
    return (0, a.jsx)(
        r.m,
        {
            text: g.intl.string(g.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: _.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(h.A, { rating: t, strokeColor: l }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: _.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let E = function (e) {
    let { detectedGame: t, trackAction: n } = e,
        { applicationId: l } = t,
        r = (0, f.I)(l),
        c = t.opencriticUrl,
        o = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r,
        d = t.reviews?.opencritic != null && null != c;
    return o || d
        ? (0, a.jsxs)("div", {
              className: _.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: _.Gf,
                      children: (0, a.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: g.intl.string(g.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: _.kL,
                      children: [
                          o
                              ? (0, a.jsx)("div", {
                                    className: _.WH,
                                    children: (0, a.jsx)(p, { detectedGame: t, url: r, trackAction: n }),
                                })
                              : null,
                          d
                              ? (0, a.jsx)("div", {
                                    className: _.WH,
                                    children: (0, a.jsx)(A, { detectedGame: t, url: c, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
