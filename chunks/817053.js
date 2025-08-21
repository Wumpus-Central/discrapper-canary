r.d(t, { Z: () => O }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
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
function p(e) {
    let { imageSrc: t, gameName: r } = e,
        [i, a] = l.useState(!1),
        c = null != r ? r : u.intl.string(u.t.GIWFlJ);
    return i || null == t
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
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function b(e) {
    let { imageSrc: t, gameName: r, applicationId: l, userId: i, className: b, hideTooltip: O = !1 } = e,
        m = (0, s.Z)({
            location: "GameCover",
            applicationId: l,
            source: c.m1.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        }),
        j = null != r ? r : u.intl.string(u.t.GIWFlJ),
        y = u.intl.formatToPlainString(u.t["8QLQBw"], { gameName: j }),
        v = (e) =>
            O
                ? e()
                : (0, n.jsx)(o.ua7, {
                      text: j,
                      children: (t) => e(t),
                  });
    return v(
        null == m
            ? (e) =>
                  (0, n.jsx)(
                      "div",
                      g(f({ className: b }, e), {
                          children: (0, n.jsx)(p, {
                              imageSrc: t,
                              gameName: r,
                          }),
                      }),
                  )
            : (e) =>
                  (0, n.jsx)(
                      o.P3F,
                      g(f({}, e), {
                          onClick: m,
                          "aria-label": y,
                          className: a()(d.clickable, b),
                          children: (0, n.jsx)(p, {
                              imageSrc: t,
                              gameName: r,
                          }),
                      }),
                  ),
    );
}
function O(e) {
    var { applicationId: t, userId: r, className: l, disableInteraction: i = !1, hideTooltip: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
    let s = a()(d.coverContainer, l);
    return i
        ? (0, n.jsx)("div", {
              className: s,
              children: (0, n.jsx)(p, f({}, c)),
          })
        : (0, n.jsx)(
              b,
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
