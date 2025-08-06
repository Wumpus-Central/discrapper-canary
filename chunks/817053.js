n.d(t, { Z: () => p }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(810568),
    a = n(168524),
    c = n(388032),
    s = n(467514);
function d(e) {
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
function u(e) {
    let { imageSrc: t, gameName: n } = e,
        [i, a] = l.useState(!1),
        d = null != n ? n : c.intl.string(c.t.GIWFlJ);
    return i || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": d,
              className: s.fallback,
              children: (0, r.jsx)(o.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: d,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: d,
              className: s.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function f(e) {
    let { imageSrc: t, gameName: n, applicationId: l, userId: d } = e,
        f = (0, a.Z)({
            location: "GameCover",
            applicationId: l,
            source: i.m1.UserProfile,
            sourceUserId: d,
            trackEntryPointImpression: !0,
        });
    if (null == f)
        return (0, r.jsx)(u, {
            imageSrc: t,
            gameName: n,
        });
    let p = c.intl.formatToPlainString(c.t["8QLQBw"], { gameName: null != n ? n : c.intl.string(c.t.GIWFlJ) });
    return (0, r.jsx)(o.P3F, {
        onClick: f,
        "aria-label": p,
        className: s.clickable,
        children: (0, r.jsx)(u, {
            imageSrc: t,
            gameName: n,
        }),
    });
}
function p(e) {
    var { applicationId: t, userId: n, disableInteraction: l = !1 } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["applicationId", "userId", "disableInteraction"]);
    return l
        ? (0, r.jsx)(u, d({}, o))
        : (0, r.jsx)(
              f,
              d(
                  {
                      applicationId: t,
                      userId: n,
                  },
                  o,
              ),
          );
}
