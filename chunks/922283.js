n.d(t, { A: () => y });
var a = n(627968),
    l = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(534514),
    o = n(939249),
    d = n(49381),
    c = n(827734),
    u = n(834730),
    m = n(223273),
    _ = n(317607),
    h = n(409626),
    f = n(676937),
    g = n(187384),
    p = n(133580),
    x = n(37948),
    b = n(778591),
    A = n(465736),
    v = n(985018),
    E = n(99392);
function I(e) {
    let { url: t, trackAction: n, title: i, rating: g, ratingCount: p, tooltipVariant: b = "all" } = e,
        A = (0, x.A)(),
        I = (0, _.j)(g, p),
        C = (0, f.yi)(I),
        N = l.useCallback(() => {
            n(h.Ws.SteamReviews), A(t);
        }, [A, n, t]);
    return (0, a.jsx)(o.D, {
        onClick: N,
        className: E.nf,
        role: "link",
        "aria-label": v.intl.string(v.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: E.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: E.tN,
                    children: [
                        (0, a.jsx)(d.N, { size: "sm", color: c.A.colors.ICON_STRONG.css }),
                        (0, a.jsx)(s.D, { variant: "heading-sm/medium", color: "text-strong", children: i }),
                    ],
                }),
                (0, a.jsx)(
                    r.m,
                    {
                        text:
                            I === m.vI.NO_USER_REVIEWS
                                ? v.intl.string(v.t.CLMt8J)
                                : v.intl
                                      .format(
                                          "recent" === b ? v.t.TzvC0k : "localized" === b ? v.t.EOfrwm : v.t["lzANJ/"],
                                          { rating: g, rating_count: p?.toLocaleString() },
                                      )
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: E.Z0,
                            children: [
                                (0, a.jsx)(u.E, { variant: "text-xs/medium", color: C, children: (0, f.ad)(I) }),
                                null != p &&
                                    I !== m.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(u.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: v.intl
                                            .format(v.t.sgIoin, { rating_count: p.toLocaleString() })
                                            .toString(),
                                    }),
                            ],
                        }),
                    },
                    `open-steam-page-${b}`,
                ),
            ],
        }),
    });
}
function C(e) {
    let { game: t, url: n, trackAction: i } = e,
        { reviews: r } = t,
        d = r?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = d.tier,
        _ = d.topCriticRating ?? -1,
        g = d.topCriticRatingCount ?? -1,
        p = (_ <= 0 || g <= 0) && null == c,
        b = (0, x.A)(),
        A = l.useCallback(() => {
            i(h.Ws.OpenCriticReviews), b(n);
        }, [b, i, n]);
    return (0, a.jsx)(o.D, {
        onClick: A,
        className: E.nf,
        role: "link",
        "aria-label": v.intl.string(v.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: E.Ur,
            children: [
                (0, a.jsx)(s.D, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: v.intl.string(v.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: E.WA,
                    children: [
                        null != c ? (0, a.jsx)(N, { tier: c }) : null,
                        null != c && _ > 0 && g > 0 ? (0, a.jsx)(j, { rating: _, tier: c }) : null,
                        p
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: (0, f.yi)(m.vI.NO_USER_REVIEWS),
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
        l = (0, p.GE)(t);
    return (0, a.jsx)(
        r.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: E.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32, draggable: !1 }),
            }),
        },
        "open-critic-tier",
    );
}
function j(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (0, p.ff)(n);
    return (0, a.jsx)(
        r.m,
        {
            text: v.intl.string(v.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: E.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(A.A, { rating: t, strokeColor: l }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: E.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let y = function (e) {
    let { game: t, trackAction: n } = e,
        { applicationId: l } = t,
        r = (0, b.I)(l),
        o = t.opencriticUrl,
        d = g.p.useConfig({ location: "GameProfileReviews" }),
        c = d.recentEnabled || d.englishEnabled,
        u = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != r,
        h = t.reviews?.steam,
        p = (0, _.j)(h?.recentRating, h?.recentRatingCount),
        x = u && d.recentEnabled && p !== m.vI.NO_USER_REVIEWS,
        A = d.englishEnabled && (0, f.HM)(h),
        N = A ? h?.localizedRating : h?.rating,
        j = A ? h?.localizedRatingCount : h?.ratingCount,
        y = c ? (A ? v.t["aWb+V4"] : v.t["8e4LiB"]) : v.t.whmopT,
        S = t.reviews?.opencritic != null && null != o;
    return u || x || S
        ? (0, a.jsxs)("div", {
              className: E.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: E.Gf,
                      children: (0, a.jsx)(s.D, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: v.intl.string(v.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: E.kL,
                      children: [
                          x && null != r
                              ? (0, a.jsx)("div", {
                                    className: E.WH,
                                    children: (0, a.jsx)(I, {
                                        url: r,
                                        trackAction: n,
                                        title: v.intl.string(v.t.MQGNsN),
                                        rating: h?.recentRating,
                                        ratingCount: h?.recentRatingCount,
                                        tooltipVariant: "recent",
                                    }),
                                })
                              : null,
                          u && null != r
                              ? (0, a.jsx)("div", {
                                    className: E.WH,
                                    children: (0, a.jsx)(I, {
                                        url: r,
                                        trackAction: n,
                                        title: v.intl.string(y),
                                        rating: N,
                                        ratingCount: j,
                                        tooltipVariant: A ? "localized" : "all",
                                    }),
                                })
                              : null,
                          S && null != o
                              ? (0, a.jsx)("div", {
                                    className: E.WH,
                                    children: (0, a.jsx)(C, { game: t, url: o, trackAction: n }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
