"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(990078),
    r = n(397927),
    s = n(223273),
    c = n(317607),
    o = n(880405),
    d = n(778591),
    u = n(985018),
    m = n(719187);
let x = function (e) {
    let { detectedGame: t } = e,
        { reviews: n, applicationId: x } = t,
        h = n?.steam ?? { rating: void 0, ratingCount: void 0 },
        f = (0, d.I)(x),
        g = (0, c.j)(h.rating, h.ratingCount),
        _ = (function (e) {
            switch (e) {
                case s.vI.NO_USER_REVIEWS:
                    return "text-subtle";
                case s.vI.OVERWHELMINGLY_POSITIVE:
                case s.vI.VERY_POSITIVE:
                case s.vI.POSITIVE:
                case s.vI.MOSTLY_POSITIVE:
                    return "steam-review-text-positive";
                case s.vI.MIXED:
                    return "steam-review-text-mixed";
                case s.vI.MOSTLY_NEGATIVE:
                case s.vI.NEGATIVE:
                case s.vI.VERY_NEGATIVE:
                case s.vI.OVERWHELMINGLY_NEGATIVE:
                    return "steam-review-text-negative";
                default:
                    return "text-subtle";
            }
        })(g),
        [p, v] = l.useState(!1),
        I = l.useCallback(() => {
            v(!0);
        }, []),
        j = l.useCallback(() => {
            v(!1);
        }, []),
        A = l.useCallback(() => {
            null != f && window.open((0, o.L)(f), "_blank", "noreferrer noopener");
        }, [f]);
    return null == f
        ? null
        : (0, i.jsxs)("div", {
              className: m.uW,
              children: [
                  (0, i.jsx)("div", {
                      className: m.Gf,
                      children: (0, i.jsx)(r.Heading, {
                          variant: "heading-sm/semibold",
                          color: "text-strong",
                          children: u.intl.string(u.t.GaAQXP),
                      }),
                  }),
                  (0, i.jsx)(a.m, {
                      text: u.intl.string(u.t.YNC5Di),
                      shouldShow: !p,
                      children: (0, i.jsx)(r.DUT, {
                          onClick: A,
                          className: m.nf,
                          role: "link",
                          "aria-label": u.intl.string(u.t.YNC5Di),
                          children: (0, i.jsx)("div", {
                              className: m.kL,
                              children: (0, i.jsx)("div", {
                                  className: m.WH,
                                  children: (0, i.jsxs)("div", {
                                      className: m.U6,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: m.tN,
                                              children: [
                                                  (0, i.jsx)(r.NXQ, {
                                                      size: "sm",
                                                      color: r.LU0.colors.ICON_STRONG.css,
                                                  }),
                                                  (0, i.jsx)(r.Heading, {
                                                      variant: "heading-sm/medium",
                                                      color: "text-strong",
                                                      children: u.intl.string(u.t.whmopT),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(
                                              a.m,
                                              {
                                                  text:
                                                      g === s.vI.NO_USER_REVIEWS
                                                          ? u.intl.string(u.t.CLMt8J)
                                                          : u.intl
                                                                .format(u.t["lzANJ/"], {
                                                                    rating: h.rating,
                                                                    rating_count: h.ratingCount?.toLocaleString(),
                                                                })
                                                                .toString(),
                                                  onTooltipShow: I,
                                                  onTooltipHide: j,
                                                  children: (0, i.jsxs)("div", {
                                                      className: m.Z0,
                                                      children: [
                                                          (0, i.jsx)(r.Text, {
                                                              variant: "text-xs/medium",
                                                              color: _,
                                                              children: (function (e) {
                                                                  switch (e) {
                                                                      case s.vI.NO_USER_REVIEWS:
                                                                          return u.intl.string(u.t.CLMt8J);
                                                                      case s.vI.OVERWHELMINGLY_POSITIVE:
                                                                          return u.intl.string(u.t["75sx1S"]);
                                                                      case s.vI.VERY_POSITIVE:
                                                                          return u.intl.string(u.t["EkOVg+"]);
                                                                      case s.vI.POSITIVE:
                                                                          return u.intl.string(u.t.ZUkFtr);
                                                                      case s.vI.MOSTLY_POSITIVE:
                                                                          return u.intl.string(u.t.M7Z09a);
                                                                      case s.vI.MIXED:
                                                                          return u.intl.string(u.t.c8yuHR);
                                                                      case s.vI.MOSTLY_NEGATIVE:
                                                                          return u.intl.string(u.t.H0MSjG);
                                                                      case s.vI.NEGATIVE:
                                                                          return u.intl.string(u.t.vpLrgz);
                                                                      case s.vI.VERY_NEGATIVE:
                                                                          return u.intl.string(u.t["5spYuX"]);
                                                                      case s.vI.OVERWHELMINGLY_NEGATIVE:
                                                                          return u.intl.string(u.t.A8uk5J);
                                                                      default:
                                                                          return null;
                                                                  }
                                                              })(g),
                                                          }),
                                                          null != h.ratingCount &&
                                                              g !== s.vI.NO_USER_REVIEWS &&
                                                              (0, i.jsx)(r.Text, {
                                                                  variant: "text-xs/medium",
                                                                  color: "text-subtle",
                                                                  children: u.intl
                                                                      .format(u.t.sgIoin, {
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
                  }),
              ],
          });
};
