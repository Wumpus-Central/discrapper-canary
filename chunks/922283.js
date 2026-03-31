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
    h = n(778591),
    g = n(465736),
    f = n(985018),
    _ = n(511858);
function p(e) {
    let { detectedGame: t, url: n, trackAction: i } = e,
        { reviews: m } = t,
        h = m?.steam ?? { rating: void 0, ratingCount: void 0 },
        g = (0, x.A)(),
        p = (0, o.j)(h.rating, h.ratingCount),
        v = (0, u.y)(p),
        A = l.useCallback(() => {
            i(d.Ws.SteamReviews), g(n);
        }, [g, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: A,
        className: _.nf,
        role: "link",
        "aria-label": f.intl.string(f.t.YNC5Di),
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
                            children: f.intl.string(f.t.whmopT),
                        }),
                    ],
                }),
                (0, a.jsx)(
                    r.m,
                    {
                        text:
                            p === c.vI.NO_USER_REVIEWS
                                ? f.intl.string(f.t.CLMt8J)
                                : f.intl
                                      .format(f.t["lzANJ/"], {
                                          rating: h.rating,
                                          rating_count: h.ratingCount?.toLocaleString(),
                                      })
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: _.Z0,
                            children: [
                                (0, a.jsx)(s.Text, { variant: "text-xs/medium", color: v, children: (0, u.a)(p) }),
                                null != h.ratingCount &&
                                    p !== c.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: f.intl
                                            .format(f.t.sgIoin, { rating_count: h.ratingCount?.toLocaleString() })
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
function v(e) {
    let { detectedGame: t, url: n, trackAction: i } = e,
        { reviews: r } = t,
        o = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        m = o.tier,
        h = o.topCriticRating ?? -1,
        g = o.topCriticRatingCount ?? -1,
        p = (h <= 0 || g <= 0) && null == m,
        v = (0, x.A)(),
        E = l.useCallback(() => {
            i(d.Ws.OpenCriticReviews), v(n);
        }, [v, i, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: E,
        className: _.nf,
        role: "link",
        "aria-label": f.intl.string(f.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: _.Ur,
            children: [
                (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: f.intl.string(f.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: _.WA,
                    children: [
                        null != m ? (0, a.jsx)(A, { tier: m }) : null,
                        null != m && h > 0 && g > 0 ? (0, a.jsx)(j, { rating: h, tier: m }) : null,
                        p
                            ? (0, a.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: (0, u.y)(c.vI.NO_USER_REVIEWS),
                                  children: f.intl.string(f.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function A(e) {
    let { tier: t } = e,
        n = (0, m.a)(t),
        l = (0, m.GE)(t);
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
function j(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (0, m.ff)(n);
    return (0, a.jsx)(
        r.m,
        {
            text: f.intl.string(f.t.Ub4YR1),
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
let E = function (e) {
    let { detectedGame: t, trackAction: n } = e,
        { applicationId: l } = t,
        r = (0, h.I)(l),
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
                          children: f.intl.string(f.t.GaAQXP),
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
                                    children: (0, a.jsx)(v, { detectedGame: t, url: c, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
