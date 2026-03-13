"use strict";
n.d(t, { A: () => h });
var a = n(627968),
    l = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(223273),
    c = n(317607),
    o = n(676937),
    d = n(59544),
    u = n(778591),
    m = n(985018),
    x = n(107701);
let h = function (e) {
    let { detectedGame: t } = e,
        { reviews: n, applicationId: h } = t,
        f = n?.steam ?? { rating: void 0, ratingCount: void 0 },
        g = (0, u.I)(h),
        p = (0, d.A)(g),
        _ = (0, c.j)(f.rating, f.ratingCount),
        v = (0, o.y)(_),
        [j, A] = l.useState(!1),
        E = l.useCallback(() => {
            A(!0);
        }, []),
        I = l.useCallback(() => {
            A(!1);
        }, []),
        b = l.useCallback(() => {
            null != p && window.open(p, "_blank", "noreferrer noopener");
        }, [p]);
    return null == p
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
                      shouldShow: !j,
                      children: (0, a.jsx)(r.DUT, {
                          onClick: b,
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
                                                      _ === s.vI.NO_USER_REVIEWS
                                                          ? m.intl.string(m.t.CLMt8J)
                                                          : m.intl
                                                                .format(m.t["lzANJ/"], {
                                                                    rating: f.rating,
                                                                    rating_count: f.ratingCount?.toLocaleString(),
                                                                })
                                                                .toString(),
                                                  onTooltipShow: E,
                                                  onTooltipHide: I,
                                                  children: (0, a.jsxs)("div", {
                                                      className: x.Z0,
                                                      children: [
                                                          (0, a.jsx)(r.Text, {
                                                              variant: "text-xs/medium",
                                                              color: v,
                                                              children: (0, o.a)(_),
                                                          }),
                                                          null != f.ratingCount &&
                                                              _ !== s.vI.NO_USER_REVIEWS &&
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
