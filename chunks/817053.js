n.d(t, {
    Z: () => m,
    o: () => g,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
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
function g(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, a] = i.useState(!1),
        s = null != n ? n : d.intl.string(d.t.GIWFlF);
    return l || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": s,
              className: p.fallback,
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
              className: p.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function h(e) {
    let { imageSrc: t, gameName: n, applicationId: i, userId: l, className: f, hideTooltip: h = !1, coverRef: m } = e,
        _ = (0, u.Z)({
            location: "GameCover",
            applicationId: i,
            source: c.m1.UserProfile,
            sourceUserId: l,
            trackEntryPointImpression: !0,
        }),
        b = null != n ? n : d.intl.string(d.t.GIWFlF),
        E = d.intl.formatToPlainString(d.t["8QLQB+"], { gameName: b }),
        O = (e) =>
            h
                ? e
                : (0, r.jsx)(s.u, {
                      text: b,
                      ariaHidden: !0,
                      children: e,
                  });
    return O(
        null == _
            ? (0, r.jsx)(o.tEY, {
                  children: (0, r.jsx)("div", {
                      ref: m,
                      className: f,
                      tabIndex: -1,
                      children: (0, r.jsx)(g, {
                          imageSrc: t,
                          gameName: n,
                      }),
                  }),
              })
            : (0, r.jsx)(o.P3F, {
                  innerRef: m,
                  onClick: _,
                  "aria-label": E,
                  className: a()(p.clickable, f),
                  children: (0, r.jsx)(g, {
                      imageSrc: t,
                      gameName: n,
                  }),
              }),
    );
}
function m(e) {
    var { applicationId: t, userId: n, className: i, disableInteraction: l = !1, hideTooltip: s, coverRef: c } = e,
        u = (function (e, t) {
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
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
    let d = a()(p.coverContainer, i);
    return l
        ? (0, r.jsx)(o.tEY, {
              children: (0, r.jsx)("div", {
                  ref: c,
                  className: d,
                  tabIndex: -1,
                  children: (0, r.jsx)(g, f({}, u)),
              }),
          })
        : (0, r.jsx)(
              h,
              f(
                  {
                      className: d,
                      applicationId: t,
                      userId: n,
                      hideTooltip: s,
                      coverRef: c,
                  },
                  u,
              ),
          );
}
