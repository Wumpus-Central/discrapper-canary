r.d(t, {
    Z: () => m,
    o: () => b,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    c = r(810568),
    s = r(168524),
    u = r(388032),
    d = r(932366);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e) {
    let { imageSrc: t, gameName: r } = e,
        [a, l] = i.useState(!1),
        c = null != r ? r : u.intl.string(u.t.GIWFlJ);
    return a || null == t
        ? (0, n.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: d.fallback,
              children: (0, n.jsx)(o.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: c,
              }),
          })
        : (0, n.jsx)("img", {
              src: t,
              alt: c,
              className: d.gameCoverImage,
              onError: () => l(!0),
              onLoad: () => l(!1),
          });
}
function p(e) {
    let { imageSrc: t, gameName: r, applicationId: i, userId: a, className: p, hideTooltip: m = !1 } = e,
        O = (0, s.Z)({
            location: "GameCover",
            applicationId: i,
            source: c.m1.UserProfile,
            sourceUserId: a,
            trackEntryPointImpression: !0,
        }),
        j = null != r ? r : u.intl.string(u.t.GIWFlJ),
        y = u.intl.formatToPlainString(u.t["8QLQBw"], { gameName: j }),
        x = (e) =>
            m
                ? e()
                : (0, n.jsx)(o.ua7, {
                      text: j,
                      children: (t) => e(t),
                  });
    return x(
        null == O
            ? (e) =>
                  (0, n.jsx)(
                      "div",
                      g(f({ className: p }, e), {
                          children: (0, n.jsx)(b, {
                              imageSrc: t,
                              gameName: r,
                          }),
                      }),
                  )
            : (e) =>
                  (0, n.jsx)(
                      o.P3F,
                      g(f({}, e), {
                          onClick: O,
                          "aria-label": y,
                          className: l()(d.clickable, p),
                          children: (0, n.jsx)(b, {
                              imageSrc: t,
                              gameName: r,
                          }),
                      }),
                  ),
    );
}
function m(e) {
    var { applicationId: t, userId: r, className: i, disableInteraction: a = !1, hideTooltip: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
    let s = l()(d.coverContainer, i);
    return a
        ? (0, n.jsx)("div", {
              className: s,
              children: (0, n.jsx)(b, f({}, c)),
          })
        : (0, n.jsx)(
              p,
              f(
                  {
                      className: s,
                      applicationId: t,
                      userId: r,
                      hideTooltip: o,
                  },
                  c,
              ),
          );
}
