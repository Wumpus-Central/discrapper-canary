"use strict";
n.d(t, { A: () => h });
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(223273),
    c = n(317607),
    o = n(880405),
    d = n(676937),
    u = n(778591),
    m = n(985018),
    x = n(107701);
let h = function (e) {
    let { detectedGame: t } = e,
        { reviews: n, applicationId: h } = t,
        f = n?.steam ?? { rating: void 0, ratingCount: void 0 },
        g = (0, u.I)(h),
        p = (0, c.j)(f.rating, f.ratingCount),
        _ = (0, d.y)(p),
        [v, j] = l.useState(!1),
        A = l.useCallback(() => {
            j(!0);
        }, []),
        E = l.useCallback(() => {
            j(!1);
        }, []),
        I = l.useCallback(() => {
            null != g && window.open((0, o.L)(g), "_blank", "noreferrer noopener");
        }, [g]);
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
                  (0, a.jsx)(i.m, {
                      text: m.intl.string(m.t.YNC5Di),
                      shouldShow: !v,
                      children: (0, a.jsx)(r.DUT, {
                          onClick: I,
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
                                                  (0, a.jsx)(r.NXQ, {
                                                      size: "sm",
                                                      color: r.LU0.colors.ICON_STRONG.css,
                                                  }),
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
                                                      p === s.vI.NO_USER_REVIEWS
                                                          ? m.intl.string(m.t.CLMt8J)
                                                          : m.intl
                                                                .format(m.t["lzANJ/"], {
                                                                    rating: f.rating,
                                                                    rating_count: f.ratingCount?.toLocaleString(),
                                                                })
                                                                .toString(),
                                                  onTooltipShow: A,
                                                  onTooltipHide: E,
                                                  children: (0, a.jsxs)("div", {
                                                      className: x.Z0,
                                                      children: [
                                                          (0, a.jsx)(r.Text, {
                                                              variant: "text-xs/medium",
                                                              color: _,
                                                              children: (0, d.a)(p),
                                                          }),
                                                          null != f.ratingCount &&
                                                              p !== s.vI.NO_USER_REVIEWS &&
                                                              (0, a.jsx)(r.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "text-subtle",
                                                                  children: m.intl
                                                                      .format(m.t.sgIoin, {
                                                                          rating_count: f.ratingCount?.toLocaleString(),
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
                  }),
              ],
          });
};
