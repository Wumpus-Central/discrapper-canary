n.d(t, {
    Z: () => m,
    o: () => h,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(810568),
    c = n(168524),
    u = n(388032),
    d = n(932366);
function p(e) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, a] = i.useState(!1),
        s = null != n ? n : u.intl.string(u.t.GIWFlJ);
    return l || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": s,
              className: d.fallback,
              children: (0, r.jsx)(o.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: s,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: s,
              className: d.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function g(e) {
    let { imageSrc: t, gameName: n, applicationId: i, userId: l, className: g, hideTooltip: m = !1 } = e,
        b = (0, c.Z)({
            location: "GameCover",
            applicationId: i,
            source: s.m1.UserProfile,
            sourceUserId: l,
            trackEntryPointImpression: !0,
        }),
        _ = null != n ? n : u.intl.string(u.t.GIWFlJ),
        O = u.intl.formatToPlainString(u.t["8QLQBw"], { gameName: _ }),
        E = (e) =>
            m
                ? e()
                : (0, r.jsx)(o.ua7, {
                      text: _,
                      children: (t) => e(t),
                  });
    return E(
        null == b
            ? (e) =>
                  (0, r.jsx)(
                      "div",
                      f(p({ className: g }, e), {
                          children: (0, r.jsx)(h, {
                              imageSrc: t,
                              gameName: n,
                          }),
                      }),
                  )
            : (e) =>
                  (0, r.jsx)(
                      o.P3F,
                      f(p({}, e), {
                          onClick: b,
                          "aria-label": O,
                          className: a()(d.clickable, g),
                          children: (0, r.jsx)(h, {
                              imageSrc: t,
                              gameName: n,
                          }),
                      }),
                  ),
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
    let c = a()(d.coverContainer, i);
    return l
        ? (0, r.jsx)("div", {
              className: c,
              children: (0, r.jsx)(h, p({}, s)),
          })
        : (0, r.jsx)(
              g,
              p(
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
