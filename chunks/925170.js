n.d(e, { default: () => h }), n(388685);
var r = n(255367);
n(73800);
var i = n(296009),
    o = n(442837),
    l = n(82659),
    c = n(481060),
    a = n(594174),
    s = n(804919),
    p = n(747101),
    u = n(985748),
    b = n(566007),
    d = n(173951),
    g = n(455731),
    O = n(231338),
    f = n(388032),
    j = n(789101);
let y = {
    [i.l.FAVORITE_GAMES]: {
        component: b.Z,
        getAriaLabel: () => f.intl.string(f.t.xJtdIi),
    },
    [i.l.CURRENT_GAMES]: {
        component: u.Z,
        getAriaLabel: () => f.intl.string(f.t.Ae8tRk),
    },
    [i.l.PLAYED_GAMES]: {
        component: d.Z,
        getAriaLabel: () => f.intl.string(f.t["pBR+4u"]),
    },
    [i.l.WANT_TO_PLAY_GAMES]: {
        component: g.Z,
        getAriaLabel: () => f.intl.string(f.t.NtoBi4),
    },
};
function m(t) {
    let { widgetType: e, user: n, widget: i, isGameFetching: o, onClick: l } = t;
    if (null == i) return null;
    let { component: a, getAriaLabel: s } = y[e];
    return (0, r.jsx)("li", {
        children: (0, r.jsxs)(c.kL8, {
            onClick: l,
            className: j.addButton,
            "aria-label": s(),
            children: [
                (0, r.jsx)(c.nn4, { children: f.intl.string(f.t.e9eskJ) }),
                (0, r.jsx)(a, {
                    widget: i,
                    user: n,
                    isGameFetching: o,
                    disableInteraction: !0,
                }),
            ],
        }),
    });
}
function h(t) {
    var e, n;
    let i = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, s.oD)(),
        { widgets: u, isGameFetching: b } = (0, p.Z)(c),
        d = new Map(u.map((t) => [t.type, t]));
    return null == i
        ? null
        : (0, r.jsx)(
              l.Modal,
              ((e = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              }),
                          )),
                          r.forEach(function (e) {
                              var r;
                              (r = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (t[e] = r);
                          });
                  }
                  return t;
              })(
                  {
                      title: f.intl.string(f.t.grUgR0),
                      actions: [],
                  },
                  t,
              )),
              (n = n =
                  {
                      children: (0, r.jsx)("ul", {
                          "aria-label": f.intl.string(f.t["+EIBSE"]),
                          className: j.options,
                          children: Object.keys(y).map((t) =>
                              (0, r.jsx)(
                                  m,
                                  {
                                      widgetType: t,
                                      user: i,
                                      widget: d.get(t),
                                      isGameFetching: b,
                                      onClick: O.dG,
                                  },
                                  t,
                              ),
                          ),
                      }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : (function (t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }),
              e),
          );
}
