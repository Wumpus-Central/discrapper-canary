n.d(t, {
    Z: () => b,
    o: () => p,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(28664),
    c = n(481060),
    s = n(810568),
    u = n(168524),
    d = n(388032),
    f = n(932366);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e) {
    let { imageSrc: t, gameName: n } = e,
        [a, l] = i.useState(!1),
        o = null != n ? n : d.intl.string(d.t.GIWFlJ);
    return a || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": o,
              className: f.fallback,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: o,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: o,
              className: f.gameCoverImage,
              onError: () => l(!0),
              onLoad: () => l(!1),
          });
}
function m(e) {
    let { imageSrc: t, gameName: n, applicationId: i, userId: a, className: g, hideTooltip: m = !1, coverRef: b } = e,
        h = (0, u.Z)({
            location: "GameCover",
            applicationId: i,
            source: s.m1.UserProfile,
            sourceUserId: a,
            trackEntryPointImpression: !0,
        }),
        v = null != n ? n : d.intl.string(d.t.GIWFlJ),
        y = d.intl.formatToPlainString(d.t["8QLQBw"], { gameName: v }),
        j = (e) =>
            m
                ? e
                : (0, r.jsx)(o.u, {
                      text: v,
                      children: e,
                  });
    return j(
        null == h
            ? (0, r.jsx)(c.tEY, {
                  children: (0, r.jsx)("div", {
                      ref: b,
                      className: g,
                      tabIndex: -1,
                      children: (0, r.jsx)(p, {
                          imageSrc: t,
                          gameName: n,
                      }),
                  }),
              })
            : (0, r.jsx)(c.P3F, {
                  innerRef: b,
                  onClick: h,
                  "aria-label": y,
                  className: l()(f.clickable, g),
                  children: (0, r.jsx)(p, {
                      imageSrc: t,
                      gameName: n,
                  }),
              }),
    );
}
function b(e) {
    var { applicationId: t, userId: n, className: i, disableInteraction: a = !1, hideTooltip: o, coverRef: s } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
    let d = l()(f.coverContainer, i);
    return a
        ? (0, r.jsx)(c.tEY, {
              children: (0, r.jsx)("div", {
                  ref: s,
                  className: d,
                  tabIndex: -1,
                  children: (0, r.jsx)(p, g({}, u)),
              }),
          })
        : (0, r.jsx)(
              m,
              g(
                  {
                      className: d,
                      applicationId: t,
                      userId: n,
                      hideTooltip: o,
                      coverRef: s,
                  },
                  u,
              ),
          );
}
