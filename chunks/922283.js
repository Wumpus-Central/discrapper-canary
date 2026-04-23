n.d(t, { A: () => S });
var l = n(627968),
    a = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(534514),
    o = n(939249),
    c = n(49381),
    d = n(827734),
    u = n(834730),
    m = n(223273),
    h = n(317607),
    f = n(409626),
    _ = n(676937),
    g = n(187384),
    p = n(133580),
    x = n(37948),
    E = n(778591),
    A = n(465736),
    v = n(985018),
    I = n(99392);
function b(e) {
    let { url: t, trackAction: n, title: i, rating: g, ratingCount: p, tooltipVariant: E = "all" } = e,
        A = (0, x.A)(),
        b = (0, h.j)(g, p),
        j = (0, _.yi)(b),
        N = a.useCallback(() => {
            n(f.Ws.SteamReviews), A(t);
        }, [A, n, t]);
    return (0, l.jsx)(o.D, {
        onClick: N,
        className: I.nf,
        role: "link",
        "aria-label": v.intl.string(v.t.YNC5Di),
        children: (0, l.jsxs)("div", {
            className: I.U6,
            children: [
                (0, l.jsxs)("div", {
                    className: I.tN,
                    children: [
                        (0, l.jsx)(c.N, { size: "sm", color: d.A.colors.ICON_STRONG.css }),
                        (0, l.jsx)(s.D, { variant: "heading-sm/medium", color: "text-strong", children: i }),
                    ],
                }),
                (0, l.jsx)(
                    r.m,
                    {
                        text:
                            b === m.vI.NO_USER_REVIEWS
                                ? v.intl.string(v.t.CLMt8J)
                                : v.intl
                                      .format(
                                          "recent" === E ? v.t.TzvC0k : "localized" === E ? v.t.EOfrwm : v.t["lzANJ/"],
                                          { rating: g, rating_count: p?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, l.jsxs)("div", {
                            className: I.Z0,
                            children: [
                                (0, l.jsx)(u.E, { variant: "text-xs/medium", color: j, children: (0, _.ad)(b) }),
                                null != p &&
                                    b !== m.vI.NO_USER_REVIEWS &&
                                    (0, l.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: v.intl
                                            .format(v.t.sgIoin, { rating_count: p.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${E}`,
                ),
            ],
        }),
    });
}
function j(e) {
    let { game: t, url: n, trackAction: i } = e,
        { reviews: r } = t,
        c = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        d = c.tier,
        h = c.topCriticRating ?? -1,
        g = c.topCriticRatingCount ?? -1,
        p = (h <= 0 || g <= 0) && null == d,
        E = (0, x.A)(),
        A = a.useCallback(() => {
            i(f.Ws.OpenCriticReviews), E(n);
        }, [E, i, n]);
    return (0, l.jsx)(o.D, {
        onClick: A,
        className: I.nf,
        role: "link",
        "aria-label": v.intl.string(v.t.aLNBAw),
        children: (0, l.jsxs)("div", {
            className: I.Ur,
            children: [
                (0, l.jsx)(s.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: v.intl.string(v.t["UxvER+"]),
                }),
                (0, l.jsxs)("div", {
                    className: I.WA,
                    children: [
                        null != d ? (0, l.jsx)(N, { tier: d }) : null,
                        null != d && h > 0 && g > 0 ? (0, l.jsx)(C, { rating: h, tier: d }) : null,
                        p
                            ? (0, l.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: (0, _.yi)(m.vI.NO_USER_REVIEWS),
                                  children: v.intl.string(v.t["0xYzpO"]),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function N(e) {
    let { tier: t } = e,
        n = (0, p.a)(t),
        a = (0, p.GE)(t);
    return (0, l.jsx)(
        r.m,
        {
            text: n,
            children: (0, l.jsx)("div", {
                className: I.TE,
                children: (0, l.jsx)("img", { src: a, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function C(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: a, backgroundColor: i } = (0, p.ff)(n);
    return (0, l.jsx)(
        r.m,
        {
            text: v.intl.string(v.t.Ub4YR1),
            children: (0, l.jsxs)("div", {
                className: I.TE,
                style: { backgroundColor: i },
                children: [
                    (0, l.jsx)(A.A, { rating: t, strokeColor: a }),
                    (0, l.jsx)(u.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: I.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let S = function (e) {
    let { game: t, trackAction: n } = e,
        { applicationId: a } = t,
        r = (0, E.I)(a),
        o = t.opencriticUrl,
        c = g.p.useConfig({ location: "GameProfileReviews" }),
        d = c.recentEnabled || c.englishEnabled,
        u = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r,
        f = t.reviews?.steam,
        p = (0, h.j)(f?.recentRating, f?.recentRatingCount),
        x = u && c.recentEnabled && p !== m.vI.NO_USER_REVIEWS,
        A = c.englishEnabled && (0, _.HM)(f),
        N = A ? f?.localizedRating : f?.rating,
        C = A ? f?.localizedRatingCount : f?.ratingCount,
        S = d ? (A ? v.t["aWb+V4"] : v.t["8e4LiB"]) : v.t.whmopT,
        y = t.reviews?.opencritic != null && null != o;
    return u || x || y
        ? (0, l.jsxs)("div", {
              className: I.uW,
              children: [
                  (0, l.jsx)("div", {
                      className: I.Gf,
                      children: (0, l.jsx)(s.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: v.intl.string(v.t.GaAQXP),
                      }),
                  }),
                  (0, l.jsxs)("div", {
                      className: I.kL,
                      children: [
                          x && null != r
                              ? (0, l.jsx)("div", {
                                    className: I.WH,
                                    children: (0, l.jsx)(b, {
                                        url: r,
                                        trackAction: n,
                                        title: v.intl.string(v.t.MQGNsN),
                                        rating: f?.recentRating,
                                        ratingCount: f?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          u && null != r
                              ? (0, l.jsx)("div", {
                                    className: I.WH,
                                    children: (0, l.jsx)(b, {
                                        url: r,
                                        trackAction: n,
                                        title: v.intl.string(S),
                                        rating: N,
                                        ratingCount: C,
                                        tooltipVariant: A ? "localized" : "all",
                                    }),
                                })
                              : null,
                          y && null != o
                              ? (0, l.jsx)("div", {
                                    className: I.WH,
                                    children: (0, l.jsx)(j, { game: t, url: o, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
