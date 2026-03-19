n.d(t, { A: () => f });
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(223273),
    c = n(317607),
    o = n(676937),
    d = n(37948),
    u = n(778591),
    m = n(985018),
    x = n(107701);
let f = function (e) {
    let { detectedGame: t } = e,
        { reviews: n, applicationId: f } = t,
        h = n?.steam ?? { rating: void 0, ratingCount: void 0 },
        g = (0, u.I)(f),
        p = (0, d.A)(),
        _ = (0, c.j)(h.rating, h.ratingCount),
        v = (0, o.y)(_),
        j = l.useCallback(() => {
            p(g);
        }, [p, g]);
    return null == g
        ? null
        : (0, a.jsxs)("div", {
              className: x.uW,
              children: [
                  (0, a.jsx)("div", {
                      className: x.Gf,
                      children: (0, a.jsx)(r.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: m.intl.string(m.t.GaAQXP),
                      }),
                  }),
                  (0, a.jsx)(r.DUT, {
                      onClick: j,
                      className: x.nf,
                      role: "link",
                      "aria-label": m.intl.string(m.t.YNC5Di),
                      children: (0, a.jsx)("div", {
                          className: x.kL,
                          children: (0, a.jsx)("div", {
                              className: x.WH,
                              children: (0, a.jsxs)("div", {
                                  className: x.U6,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: x.tN,
                                          children: [
                                              (0, a.jsx)(r.NXQ, { size: "sm", color: r.LU0.colors.ICON_STRONG.css }),
                                              (0, a.jsx)(r.Heading, {
                                                  variant: "heading-sm/medium",
                                                  color: "text-strong",
                                                  children: m.intl.string(m.t.whmopT),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)(
                                          i.m,
                                          {
                                              text:
                                                  _ === s.vI.NO_USER_REVIEWS
                                                      ? m.intl.string(m.t.CLMt8J)
                                                      : m.intl
                                                            .format(m.t["lzANJ/"], {
                                                                rating: h.rating,
                                                                rating_count: h.ratingCount?.toLocaleString(),
                                                            })
                                                            .toString(),
                                              children: (0, a.jsxs)("div", {
                                                  className: x.Z0,
                                                  children: [
                                                      (0, a.jsx)(r.Text, {
                                                          variant: "text-xs/medium",
                                                          color: v,
                                                          children: (0, o.a)(_),
                                                      }),
                                                      null != h.ratingCount &&
                                                          _ !== s.vI.NO_USER_REVIEWS &&
                                                          (0, a.jsx)(r.Text, {
                                                              variant: "text-xs/medium",
                                                              color: "text-subtle",
                                                              children: m.intl
                                                                  .format(m.t.sgIoin, {
                                                                      rating_count: h.ratingCount?.toLocaleString(),
                                                                  })
                                                                  .toString(),
                                                          }),
                                                  ],
                                              }),
                                          },
                                          "open-steam-page",
                                      ),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
};
