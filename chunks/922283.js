i.d(t, { A: () => x });
var n = i(627968),
    l = i(64700),
    a = i(990078),
    s = i(397927),
    r = i(524799),
    c = i(223273),
    o = i(880405),
    d = i(778591),
    u = i(985018),
    m = i(719187);
let x = function (e) {
    let { detectedGame: t } = e,
        { reviews: i, applicationId: x } = t,
        g = i?.steam ?? { rating: void 0, ratingCount: void 0 },
        h = (0, d.I)(x),
        f = (0, r.j)(g.rating, g.ratingCount),
        j = (function (e) {
            switch (e) {
                case c.vI.NO_USER_REVIEWS:
                    return "text-subtle";
                case c.vI.OVERWHELMINGLY_POSITIVE:
                case c.vI.VERY_POSITIVE:
                case c.vI.POSITIVE:
                case c.vI.MOSTLY_POSITIVE:
                    return "steam-review-text-positive";
                case c.vI.MIXED:
                    return "steam-review-text-mixed";
                case c.vI.MOSTLY_NEGATIVE:
                case c.vI.NEGATIVE:
                case c.vI.VERY_NEGATIVE:
                case c.vI.OVERWHELMINGLY_NEGATIVE:
                    return "steam-review-text-negative";
                default:
                    return "text-subtle";
            }
        })(f),
        [p, A] = l.useState(!1),
        v = l.useCallback(() => {
            A(!0);
        }, []),
        E = l.useCallback(() => {
            A(!1);
        }, []),
        I = l.useCallback(() => {
            null != h && window.open((0, o.L)(h), "_blank", "noreferrer noopener");
        }, [h]);
    return null == h
        ? null
        : (0, n.jsxs)("div", {
              className: m.uW,
              children: [
                  (0, n.jsx)("div", {
                      className: m.Gf,
                      children: (0, n.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: u.intl.string(u.t.GaAQXP),
                      }),
                  }),
                  (0, n.jsx)(a.m, {
                      text: u.intl.string(u.t.YNC5Di),
                      shouldShow: !p,
                      children: (0, n.jsx)(s.DUT, {
                          onClick: I,
                          className: m.nf,
                          role: "link",
                          "aria-label": u.intl.string(u.t.YNC5Di),
                          children: (0, n.jsx)("div", {
                              className: m.kL,
                              children: (0, n.jsx)("div", {
                                  className: m.WH,
                                  children: (0, n.jsxs)("div", {
                                      className: m.U6,
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: m.tN,
                                              children: [
                                                  (0, n.jsx)(s.NXQ, {
                                                      size: "sm",
                                                      color: s.LU0.colors.ICON_STRONG.css,
                                                  }),
                                                  (0, n.jsx)(s.Heading, {
                                                      variant: "heading-sm/medium",
                                                      color: "text-strong",
                                                      children: u.intl.string(u.t.whmopT),
                                                  }),
                                              ],
                                          }),
                                          (0, n.jsx)(
                                              a.m,
                                              {
                                                  text:
                                                      f === c.vI.NO_USER_REVIEWS
                                                          ? u.intl.string(u.t.CLMt8J)
                                                          : u.intl
                                                                .format(u.t["lzANJ/"], {
                                                                    rating: g.rating,
                                                                    rating_count: g.ratingCount?.toLocaleString(),
                                                                })
                                                                .toString(),
                                                  onTooltipShow: v,
                                                  onTooltipHide: E,
                                                  children: (0, n.jsxs)("div", {
                                                      className: m.Z0,
                                                      children: [
                                                          (0, n.jsx)(s.Text, {
                                                              variant: "text-xs/medium",
                                                              color: j,
                                                              children: (function (e) {
                                                                  switch (e) {
                                                                      case c.vI.NO_USER_REVIEWS:
                                                                          return u.intl.string(u.t.CLMt8J);
                                                                      case c.vI.OVERWHELMINGLY_POSITIVE:
                                                                          return u.intl.string(u.t["75sx1S"]);
                                                                      case c.vI.VERY_POSITIVE:
                                                                          return u.intl.string(u.t["EkOVg+"]);
                                                                      case c.vI.POSITIVE:
                                                                          return u.intl.string(u.t.ZUkFtr);
                                                                      case c.vI.MOSTLY_POSITIVE:
                                                                          return u.intl.string(u.t.M7Z09a);
                                                                      case c.vI.MIXED:
                                                                          return u.intl.string(u.t.c8yuHR);
                                                                      case c.vI.MOSTLY_NEGATIVE:
                                                                          return u.intl.string(u.t.H0MSjG);
                                                                      case c.vI.NEGATIVE:
                                                                          return u.intl.string(u.t.vpLrgz);
                                                                      case c.vI.VERY_NEGATIVE:
                                                                          return u.intl.string(u.t["5spYuX"]);
                                                                      case c.vI.OVERWHELMINGLY_NEGATIVE:
                                                                          return u.intl.string(u.t.A8uk5J);
                                                                      default:
                                                                          return null;
                                                                  }
                                                              })(f),
                                                          }),
                                                          null != g.ratingCount &&
                                                              f !== c.vI.NO_USER_REVIEWS &&
                                                              (0, n.jsx)(s.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "text-subtle",
                                                                  children: u.intl
                                                                      .format(u.t.sgIoin, {
                                                                          rating_count: g.ratingCount?.toLocaleString(),
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
