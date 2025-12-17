n.d(t, {
    Z: () => E,
    o: () => b,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(810568),
    d = n(168524),
    p = n(592183),
    f = n(224724),
    g = n(388032),
    h = n(713603);
function m(e) {
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
function b(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, a] = i.useState(!1),
        o = null != n ? n : g.intl.string(g.t.GIWFlF);
    return l || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": o,
              className: h.fallback,
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
              className: h.gameCoverImage,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}
function _(e) {
    let { imageSrc: t, gameName: n, applicationId: l, userId: m, className: _, hideTooltip: E = !1, coverRef: O } = e,
        v = (0, o.e7)([f.Z], () => f.Z.hasUnsavedChanges()),
        y = (0, d.Z)({
            location: "GameCover",
            applicationId: l,
            source: u.m1.UserProfile,
            sourceUserId: m,
            trackEntryPointImpression: !0,
        }),
        I = null != n ? n : g.intl.string(g.t.GIWFlF),
        C = g.intl.formatToPlainString(g.t["8QLQB+"], { gameName: I }),
        S = i.useCallback(
            (e) => {
                if (v) {
                    e.preventDefault(), e.stopPropagation(), p.Z.notifyUnsavedWidgets();
                    return;
                }
                null == y || y(e);
            },
            [v, y],
        ),
        T = (e) =>
            E
                ? e
                : (0, r.jsx)(s.u, {
                      text: I,
                      ariaHidden: !0,
                      children: e,
                  });
    return T(
        null == y
            ? (0, r.jsx)(c.tEY, {
                  children: (0, r.jsx)("div", {
                      ref: O,
                      className: _,
                      tabIndex: -1,
                      children: (0, r.jsx)(b, {
                          imageSrc: t,
                          gameName: n,
                      }),
                  }),
              })
            : (0, r.jsx)(c.P3F, {
                  innerRef: O,
                  onClick: S,
                  "aria-label": C,
                  className: a()(h.clickable, _),
                  children: (0, r.jsx)(b, {
                      imageSrc: t,
                      gameName: n,
                  }),
              }),
    );
}
function E(e) {
    var { applicationId: t, userId: n, className: i, disableInteraction: l = !1, hideTooltip: o, coverRef: s } = e,
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
    let d = a()(h.coverContainer, i);
    return l
        ? (0, r.jsx)(c.tEY, {
              children: (0, r.jsx)("div", {
                  ref: s,
                  className: d,
                  tabIndex: -1,
                  children: (0, r.jsx)(b, m({}, u)),
              }),
          })
        : (0, r.jsx)(
              _,
              m(
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
