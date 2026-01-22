n.d(t, {
    A: () => _,
    R: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(409626),
    d = n(692969),
    p = n(958805),
    f = n(61881),
    h = n(985018),
    A = n(461349);

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

function m(e) {
    let { imageSrc: t, gameName: n } = e,
        [l, a] = i.useState(!1),
        s = null != n ? n : h.intl.string(h.t.GIWFlF);
    return l || null == t
        ? (0, r.jsx)("div", {
              role: "img",
              "aria-label": s,
              className: A.Np,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xxs/medium",
                  lineClamp: 3,
                  "aria-hidden": !0,
                  children: s,
              }),
          })
        : (0, r.jsx)("img", {
              src: t,
              alt: s,
              className: A.$_,
              onError: () => a(!0),
              onLoad: () => a(!1),
          });
}

function b(e) {
    let { imageSrc: t, gameName: n, applicationId: l, userId: g, className: b, hideTooltip: _ = !1, coverRef: E } = e,
        O = (0, s.bG)([f.A], () => f.A.hasUnsavedChanges()),
        y = (0, d.A)({
            location: "GameCover",
            applicationId: l,
            source: u.Ob.UserProfile,
            sourceUserId: g,
            trackEntryPointImpression: !0,
        }),
        I = null != n ? n : h.intl.string(h.t.GIWFlF),
        v = h.intl.formatToPlainString(h.t["8QLQB+"], {
            gameName: I,
        }),
        S = i.useCallback(
            (e) => {
                if (O) {
                    e.preventDefault(), e.stopPropagation(), p.A.notifyUnsavedWidgets();
                    return;
                }
                null == y || y(e);
            },
            [O, y],
        ),
        C = (e) =>
            _
                ? e
                : (0, r.jsx)(o.m, {
                      text: I,
                      ariaHidden: !0,
                      children: e,
                  });
    return C(
        null == y
            ? (0, r.jsx)(c.vN3, {
                  children: (0, r.jsx)("div", {
                      ref: E,
                      className: b,
                      tabIndex: -1,
                      children: (0, r.jsx)(m, {
                          imageSrc: t,
                          gameName: n,
                      }),
                  }),
              })
            : (0, r.jsx)(c.DUT, {
                  innerRef: E,
                  onClick: S,
                  "aria-label": v,
                  className: a()(A.vk, b),
                  children: (0, r.jsx)(m, {
                      imageSrc: t,
                      gameName: n,
                  }),
              }),
    );
}

function _(e) {
    let { applicationId: t, userId: n, className: i, disableInteraction: l = !1, hideTooltip: s, coverRef: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]),
        d = a()(A.PY, i);
    return l
        ? (0, r.jsx)(c.vN3, {
              children: (0, r.jsx)("div", {
                  ref: o,
                  className: d,
                  tabIndex: -1,
                  children: (0, r.jsx)(m, g({}, u)),
              }),
          })
        : (0, r.jsx)(
              b,
              g(
                  {
                      className: d,
                      applicationId: t,
                      userId: n,
                      hideTooltip: s,
                      coverRef: o,
                  },
                  u,
              ),
          );
}
