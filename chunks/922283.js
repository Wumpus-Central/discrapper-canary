n.d(t, { A: () => j });
var l = n(627968),
    a = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(397927),
    o = n(223273),
    c = n(317607),
    d = n(409626),
    u = n(676937),
    m = n(187384),
    f = n(133580),
    h = n(37948),
    x = n(778591),
    g = n(465736),
    p = n(985018),
    _ = n(99392);
function v(e) {
    let { url: t, trackAction: n, title: i, rating: m, ratingCount: f, tooltipVariant: x = "all" } = e,
        g = (0, h.A)(),
        v = (0, c.j)(m, f),
        A = (0, u.yi)(v),
        b = a.useCallback(() => {
            n(d.Ws.SteamReviews), g(t);
        }, [g, n, t]);
    return (0, l.jsx)(s.DUT, {
        onClick: b,
        className: _.nf,
        role: "link",
        "aria-label": p.intl.string(p.t.YNC5Di),
        children: (0, l.jsxs)("div", {
            className: _.U6,
            children: [
                (0, l.jsxs)("div", {
                    className: _.tN,
                    children: [
                        (0, l.jsx)(s.NXQ, { size: "sm", color: s.LU0.colors.ICON_STRONG.css }),
                        (0, l.jsx)(s.Heading, { variant: "heading-sm/medium", color: "text-strong", children: i }),
                    ],
                }),
                (0, l.jsx)(
                    r.m,
                    {
                        text:
                            v === o.vI.NO_USER_REVIEWS
                                ? p.intl.string(p.t.CLMt8J)
                                : p.intl
                                      .format(
                                          "recent" === x ? p.t.TzvC0k : "localized" === x ? p.t.EOfrwm : p.t["lzANJ/"],
                                          { rating: m, rating_count: f?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, l.jsxs)("div", {
                            className: _.Z0,
                            children: [
                                (0, l.jsx)(s.Text, { variant: "text-xs/medium", color: A, children: (0, u.ad)(v) }),
                                null != f &&
                                    v !== o.vI.NO_USER_REVIEWS &&
                                    (0, l.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: p.intl
                                            .format(p.t.sgIoin, { rating_count: f.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${x}`,
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
        x = c.topCriticRatingCount ?? -1,
        g = (f <= 0 || x <= 0) && null == m,
        v = (0, h.A)(),
        A = a.useCallback(() => {
            i(d.Ws.OpenCriticReviews), v(n);
        }, [v, i, n]);
    return (0, l.jsx)(s.DUT, {
        onClick: A,
        className: _.nf,
        role: "link",
        "aria-label": p.intl.string(p.t.aLNBAw),
        children: (0, l.jsxs)("div", {
            className: _.Ur,
            children: [
                (0, l.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: p.intl.string(p.t["UxvER+"]),
                }),
                (0, l.jsxs)("div", {
                    className: _.WA,
                    children: [
                        null != m ? (0, l.jsx)(b, { tier: m }) : null,
                        null != m && f > 0 && x > 0 ? (0, l.jsx)(E, { rating: f, tier: m }) : null,
                        g
                            ? (0, l.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: (0, u.yi)(o.vI.NO_USER_REVIEWS),
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
        a = (0, f.GE)(t);
    return (0, l.jsx)(
        r.m,
        {
            text: n,
            children: (0, l.jsx)("div", {
                className: _.TE,
                children: (0, l.jsx)("img", { src: a, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function E(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: a, backgroundColor: i } = (0, f.ff)(n);
    return (0, l.jsx)(
        r.m,
        {
            text: p.intl.string(p.t.Ub4YR1),
            children: (0, l.jsxs)("div", {
                className: _.TE,
                style: { backgroundColor: i },
                children: [
                    (0, l.jsx)(g.A, { rating: t, strokeColor: a }),
                    (0, l.jsx)(s.Text, {
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
        { applicationId: a } = t,
        r = (0, x.I)(a),
        d = t.opencriticUrl,
        f = m.p.useConfig({ location: "GameProfileReviews" }),
        h = f.recentEnabled || f.englishEnabled,
        g = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r,
        b = t.reviews?.steam,
        E = (0, c.j)(b?.recentRating, b?.recentRatingCount),
        j = g && f.recentEnabled && E !== o.vI.NO_USER_REVIEWS,
        I = f.englishEnabled && (0, u.HM)(b),
        C = I ? b?.localizedRating : b?.rating,
        N = I ? b?.localizedRatingCount : b?.ratingCount,
        S = h ? (I ? p.t["aWb+V4"] : p.t["8e4LiB"]) : p.t.whmopT,
        T = t.reviews?.opencritic != null && null != d;
    return g || j || T
        ? (0, l.jsxs)("div", {
              className: _.uW,
              children: [
                  (0, l.jsx)("div", {
                      className: _.Gf,
                      children: (0, l.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: p.intl.string(p.t.GaAQXP),
                      }),
                  }),
                  (0, l.jsxs)("div", {
                      className: _.kL,
                      children: [
                          j && null != r
                              ? (0, l.jsx)("div", {
                                    className: _.WH,
                                    children: (0, l.jsx)(v, {
                                        url: r,
                                        trackAction: n,
                                        title: p.intl.string(p.t.MQGNsN),
                                        rating: b?.recentRating,
                                        ratingCount: b?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          g && null != r
                              ? (0, l.jsx)("div", {
                                    className: _.WH,
                                    children: (0, l.jsx)(v, {
                                        url: r,
                                        trackAction: n,
                                        title: p.intl.string(S),
                                        rating: C,
                                        ratingCount: N,
                                        tooltipVariant: I ? "localized" : "all",
                                    }),
                                })
                              : null,
                          T && null != d
                              ? (0, l.jsx)("div", {
                                    className: _.WH,
                                    children: (0, l.jsx)(A, { game: t, url: d, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
