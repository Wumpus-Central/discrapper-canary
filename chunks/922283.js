n.d(t, { A: () => j });
var a = n(627968),
    l = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(397927),
    o = n(223273),
    c = n(317607),
    d = n(409626),
    u = n(676937),
    m = n(187384),
    f = n(133580),
    x = n(37948),
    h = n(778591),
    g = n(465736),
    p = n(985018),
    _ = n(99392);
function v(e) {
    let { url: t, trackAction: n, title: i, rating: m, ratingCount: f, isRecentReview: h = !1 } = e,
        g = (0, x.A)(),
        v = (0, c.j)(m, f),
        A = (0, u.y)(v),
        b = l.useCallback(() => {
            n(d.Ws.SteamReviews), g(t);
        }, [g, n, t]);
    return (0, a.jsx)(s.DUT, {
        onClick: b,
        className: _.nf,
        role: "link",
        "aria-label": p.intl.string(p.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: _.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: _.tN,
                    children: [
                        (0, a.jsx)(s.NXQ, { size: "sm", color: s.LU0.colors.ICON_STRONG.css }),
                        (0, a.jsx)(s.Heading, { variant: "heading-sm/medium", color: "text-strong", children: i }),
                    ],
                }),
                (0, a.jsx)(
                    r.m,
                    {
                        text:
                            v === o.vI.NO_USER_REVIEWS
                                ? p.intl.string(p.t.CLMt8J)
                                : p.intl
                                      .format(h ? p.t.TzvC0k : p.t["lzANJ/"], {
                                          rating: m,
                                          rating_count: f?.toLocaleString(),
                                      })
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: _.Z0,
                            children: [
                                (0, a.jsx)(s.Text, { variant: "text-xs/medium", color: A, children: (0, u.a)(v) }),
                                null != f &&
                                    v !== o.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: p.intl
                                            .format(p.t.sgIoin, { rating_count: f.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    h ? "open-steam-page-recent" : "open-steam-page",
                ),
            ],
        }),
    });
}
function A(e) {
    let { game: t, url: n, trackAction: i } = e,
        { reviews: r } = t,
        c = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        m = c.tier,
        f = c.topCriticRating ?? -1,
        h = c.topCriticRatingCount ?? -1,
        g = (f <= 0 || h <= 0) && null == m,
        v = (0, x.A)(),
        A = l.useCallback(() => {
            i(d.Ws.OpenCriticReviews), v(n);
        }, [v, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: A,
        className: _.nf,
        role: "link",
        "aria-label": p.intl.string(p.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: _.Ur,
            children: [
                (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: p.intl.string(p.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: _.WA,
                    children: [
                        null != m ? (0, a.jsx)(b, { tier: m }) : null,
                        null != m && f > 0 && h > 0 ? (0, a.jsx)(E, { rating: f, tier: m }) : null,
                        g
                            ? (0, a.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: (0, u.y)(o.vI.NO_USER_REVIEWS),
                                  children: p.intl.string(p.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function b(e) {
    let { tier: t } = e,
        n = (0, f.a)(t),
        l = (0, f.GE)(t);
    return (0, a.jsx)(
        r.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: _.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function E(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (0, f.ff)(n);
    return (0, a.jsx)(
        r.m,
        {
            text: p.intl.string(p.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: _.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(g.A, { rating: t, strokeColor: l }),
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
let j = function (e) {
    let { game: t, trackAction: n } = e,
        { applicationId: l } = t,
        r = (0, h.I)(l),
        d = t.opencriticUrl,
        u = m.p.useConfig({ location: "GameProfileReviews" }),
        f = u.recentEnabled || u.englishEnabled,
        x = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r,
        g = t.reviews?.steam,
        b = (0, c.j)(g?.recentRating, g?.recentRatingCount),
        E = x && u.recentEnabled && b !== o.vI.NO_USER_REVIEWS,
        j = t.reviews?.opencritic != null && null != d;
    return x || E || j
        ? (0, a.jsxs)("div", {
              className: _.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: _.Gf,
                      children: (0, a.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: p.intl.string(p.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: _.kL,
                      children: [
                          E && null != r
                              ? (0, a.jsx)("div", {
                                    className: _.WH,
                                    children: (0, a.jsx)(v, {
                                        url: r,
                                        trackAction: n,
                                        title: p.intl.string(p.t.MQGNsN),
                                        rating: g?.recentRating,
                                        ratingCount: g?.recentRatingCount,
                                        isRecentReview: !0,
                                    }),
                                })
                              : null,
                          x && null != r
                              ? (0, a.jsx)("div", {
                                    className: _.WH,
                                    children: (0, a.jsx)(v, {
                                        url: r,
                                        trackAction: n,
                                        title: p.intl.string(f ? p.t["8e4LiB"] : p.t.whmopT),
                                        rating: g?.rating,
                                        ratingCount: g?.ratingCount,
                                    }),
                                })
                              : null,
                          j && null != d
                              ? (0, a.jsx)("div", {
                                    className: _.WH,
                                    children: (0, a.jsx)(A, { game: t, url: d, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
