n.d(t, { A: () => j });
var a = n(627968),
    l = n(64700),
    i = n(792216),
    r = n(990078),
    s = n(397927),
    o = n(223273),
    c = n(317607),
    d = n(676937),
    u = n(133580),
    m = n(37948),
    x = n(778591),
    h = n(465736),
    f = n(985018),
    g = n(719187);
function _(e) {
    let { detectedGame: t, url: n } = e,
        { reviews: i } = t,
        u = i?.steam ?? { rating: void 0, ratingCount: void 0 },
        x = (0, m.A)(),
        h = (0, c.j)(u.rating, u.ratingCount),
        _ = (0, d.y)(h),
        p = l.useCallback(() => {
            x(n);
        }, [x, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: p,
        className: g.nf,
        role: "link",
        "aria-label": f.intl.string(f.t.YNC5Di),
        children: (0, a.jsxs)("div", {
            className: g.U6,
            children: [
                (0, a.jsxs)("div", {
                    className: g.tN,
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
                            h === o.vI.NO_USER_REVIEWS
                                ? f.intl.string(f.t.CLMt8J)
                                : f.intl
                                      .format(f.t["lzANJ/"], {
                                          rating: u.rating,
                                          rating_count: u.ratingCount?.toLocaleString(),
                                      })
                                      .toString(),
                        children: (0, a.jsxs)("div", {
                            className: g.Z0,
                            children: [
                                (0, a.jsx)(s.Text, { variant: "text-xs/medium", color: _, children: (0, d.a)(h) }),
                                null != u.ratingCount &&
                                    h !== o.vI.NO_USER_REVIEWS &&
                                    (0, a.jsx)(s.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: f.intl
                                            .format(f.t.sgIoin, { rating_count: u.ratingCount?.toLocaleString() })
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
function p(e) {
    let { detectedGame: t, url: n } = e,
        { reviews: i } = t,
        r = i?.opencritic ?? { topCriticRating: void 0, topCriticRatingCount: void 0, tier: void 0 },
        c = r.tier,
        u = r.topCriticRating ?? -1,
        x = r.topCriticRatingCount ?? -1,
        h = (u <= 0 || x <= 0) && null == c,
        _ = (0, m.A)(),
        p = l.useCallback(() => {
            _(n);
        }, [_, n]);
    return (0, a.jsx)(s.DUT, {
        onClick: p,
        className: g.nf,
        role: "link",
        "aria-label": f.intl.string(f.t.aLNBAw),
        children: (0, a.jsxs)("div", {
            className: g.Ur,
            children: [
                (0, a.jsx)(s.Heading, {
                    variant: "heading-sm/medium",
                    color: "text-strong",
                    children: f.intl.string(f.t["UxvER+"]),
                }),
                (0, a.jsxs)("div", {
                    className: g.WA,
                    children: [
                        null != c ? (0, a.jsx)(v, { tier: c }) : null,
                        null != c && u > 0 && x > 0 ? (0, a.jsx)(A, { rating: u, tier: c }) : null,
                        h
                            ? (0, a.jsx)(s.Text, {
                                  variant: "text-xs/medium",
                                  color: (0, d.y)(o.vI.NO_USER_REVIEWS),
                                  children: f.intl.string(f.t["0xYzpO"]),
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
        n = (0, u.a)(t),
        l = (0, u.GE)(t);
    return (0, a.jsx)(
        r.m,
        {
            text: n,
            children: (0, a.jsx)("div", {
                className: g.TE,
                children: (0, a.jsx)("img", { src: l, alt: n, width: 32, height: 32 }),
            }),
        },
        "open-critic-tier",
    );
}
function A(e) {
    let { rating: t, tier: n } = e,
        { foregroundColor: l, backgroundColor: i } = (0, u.ff)(n);
    return (0, a.jsx)(
        r.m,
        {
            text: f.intl.string(f.t.Ub4YR1),
            children: (0, a.jsxs)("div", {
                className: g.TE,
                style: { backgroundColor: i },
                children: [
                    (0, a.jsx)(h.A, { rating: t, strokeColor: l }),
                    (0, a.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        className: g.ti,
                        children: Math.floor(t),
                    }),
                ],
            }),
        },
        "open-critic-rating",
    );
}
let j = function (e) {
    let { detectedGame: t } = e,
        { applicationId: n } = t,
        l = (0, x.I)(n),
        r = t.opencriticUrl,
        o = t.steamReleaseStatus !== i.Y.RETIRED_ABANDONED && null != l,
        c = t.reviews?.opencritic != null && null != r;
    return o || c
        ? (0, a.jsxs)("div", {
              className: g.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: g.Gf,
                      children: (0, a.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: f.intl.string(f.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: g.kL,
                      children: [
                          o
                              ? (0, a.jsx)("div", {
                                    className: g.WH,
                                    children: (0, a.jsx)(_, { detectedGame: t, url: l }),
                                })
                              : null,
                          c
                              ? (0, a.jsx)("div", {
                                    className: g.WH,
                                    children: (0, a.jsx)(p, { detectedGame: t, url: r }),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
};
