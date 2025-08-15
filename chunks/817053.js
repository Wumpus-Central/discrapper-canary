n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    c = n(810568),
    s = n(168524),
    d = n(388032),
    u = n(932366);
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
function p(e) {
    let { imageSrc: t, gameName: n } = e,
        [i, o] = l.useState(!1),
        c = null != n ? n : d.intl.string(d.t.GIWFlJ);
    return i || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": c,
              className: u.fallback,
              children: (0, r.jsx)(a.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: c,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: c,
              className: u.gameCoverImage,
              onError: () => o(!0),
              onLoad: () => o(!1),
          });
}
function m(e) {
    let { imageSrc: t, gameName: n, applicationId: l, userId: i, className: f } = e,
        m = (0, s.Z)({
            location: "GameCover",
            applicationId: l,
            source: c.m1.UserProfile,
            sourceUserId: i,
            trackEntryPointImpression: !0,
        });
    if (null == m)
        return (0, r.jsx)("div", {
            className: f,
            children: (0, r.jsx)(p, {
                imageSrc: t,
                gameName: n,
            }),
        });
    let g = d.intl.formatToPlainString(d.t["8QLQBw"], { gameName: null != n ? n : d.intl.string(d.t.GIWFlJ) });
    return (0, r.jsx)(a.P3F, {
        onClick: m,
        "aria-label": g,
        className: o()(u.clickable, f),
        children: (0, r.jsx)(p, {
            imageSrc: t,
            gameName: n,
        }),
    });
}
function g(e) {
    var { applicationId: t, userId: n, className: l, disableInteraction: i = !1 } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["applicationId", "userId", "className", "disableInteraction"]);
    let c = o()(u.coverContainer, l);
    return i
        ? (0, r.jsx)("div", {
              className: c,
              children: (0, r.jsx)(p, f({}, a)),
          })
        : (0, r.jsx)(
              m,
              f(
                  {
                      className: c,
                      applicationId: t,
                      userId: n,
                  },
                  a,
              ),
          );
}
