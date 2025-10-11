n.d(t, {
    Z: () => m,
    o: () => h,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(481060),
    c = n(810568),
    u = n(168524),
    d = n(388032),
    p = n(932366);
function f(e) {
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
function h(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, a] = i.useState(!1),
        o = null != n ? n : d.intl.string(d.t.GIWFlJ);
    return l || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": o,
              className: p.fallback,
              children: (0, r.jsx)(s.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: o,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: o,
              className: p.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function g(e) {
    let { imageSrc: t, gameName: n, applicationId: i, userId: l, className: f, hideTooltip: g = !1 } = e,
        m = (0, u.Z)({
            location: "GameCover",
            applicationId: i,
            source: c.m1.UserProfile,
            sourceUserId: l,
            trackEntryPointImpression: !0,
        }),
        b = null != n ? n : d.intl.string(d.t.GIWFlJ),
        _ = d.intl.formatToPlainString(d.t["8QLQBw"], { gameName: b }),
        O = (e) =>
            g
                ? e
                : (0, r.jsx)(o.u, {
                      text: b,
                      children: e,
                  });
    return O(
        null == m
            ? (0, r.jsx)("div", {
                  className: f,
                  children: (0, r.jsx)(h, {
                      imageSrc: t,
                      gameName: n,
                  }),
              })
            : (0, r.jsx)(s.P3F, {
                  onClick: m,
                  "aria-label": _,
                  className: a()(p.clickable, f),
                  children: (0, r.jsx)(h, {
                      imageSrc: t,
                      gameName: n,
                  }),
              }),
    );
}
function m(e) {
    var { applicationId: t, userId: n, className: i, disableInteraction: l = !1, hideTooltip: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
    let c = a()(p.coverContainer, i);
    return l
        ? (0, r.jsx)("div", {
              className: c,
              children: (0, r.jsx)(h, f({}, s)),
          })
        : (0, r.jsx)(
              g,
              f(
                  {
                      className: c,
                      applicationId: t,
                      userId: n,
                      hideTooltip: o,
                  },
                  s,
              ),
          );
}
