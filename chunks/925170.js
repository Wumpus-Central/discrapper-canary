n.d(t, { default: () => A }), n(388685);
var i = n(255367),
    r = n(73800),
    a = n(120356),
    d = n.n(a),
    l = n(296009),
    o = n(442837),
    s = n(82659),
    c = n(481060),
    u = n(313201),
    p = n(594174),
    g = n(804919),
    b = n(747101),
    j = n(985748),
    f = n(566007),
    m = n(173951),
    y = n(455731),
    O = n(231338),
    h = n(388032),
    x = n(663161);
let w = {
    [l.l.FAVORITE_GAMES]: {
        component: f.Z,
        getAriaLabel: () => h.intl.string(h.t.xJtdIi),
    },
    [l.l.CURRENT_GAMES]: {
        component: j.Z,
        getAriaLabel: () => h.intl.string(h.t.Ae8tRk),
    },
    [l.l.PLAYED_GAMES]: {
        component: m.Z,
        getAriaLabel: () => h.intl.string(h.t["pBR+4u"]),
    },
    [l.l.WANT_TO_PLAY_GAMES]: {
        component: y.Z,
        getAriaLabel: () => h.intl.string(h.t.NtoBi4),
    },
};
function v(e) {
    let { widgetType: t, user: n, widget: a, isGameFetching: l, onClick: o, disabled: s } = e,
        p = r.useRef(null),
        g = (0, u.Dt)();
    if (null == a) return null;
    let { component: b, getAriaLabel: j } = w[t];
    return (0, i.jsx)("li", {
        children: (0, i.jsxs)("div", {
            ref: p,
            onClick: s ? void 0 : o,
            className: d()(x.addButtonContainer, s && x.disabled),
            children: [
                (0, i.jsx)("div", {
                    className: x.addButton,
                    children: (0, i.jsx)(c.zxk, {
                        text: h.intl.string(h.t.onajm5),
                        variant: "overlay-primary",
                        "aria-label": j(),
                        "aria-describedby": s ? g : void 0,
                        focusProps: { ringTarget: p },
                        onClick: (e) => {
                            e.stopPropagation(), o(e);
                        },
                        disabled: s,
                    }),
                }),
                s &&
                    (0, i.jsxs)("div", {
                        className: x.widgetAdded,
                        children: [
                            (0, i.jsx)(c.kmB, {
                                size: "sm",
                                color: "currentColor",
                            }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                "aria-hidden": !0,
                                children: h.intl.string(h.t["UEZy/f"]),
                            }),
                            (0, i.jsx)(c.nn4, {
                                id: g,
                                children: h.intl.string(h.t.d8WVXF),
                            }),
                        ],
                    }),
                (0, i.jsx)(c.nn4, { children: h.intl.string(h.t.e9eskJ) }),
                (0, i.jsx)(b, {
                    widget: a,
                    user: n,
                    isGameFetching: l,
                    containerClassName: s && x.disabledWidget,
                    disableInteraction: !0,
                }),
            ],
        }),
    });
}
function A(e) {
    var t, n;
    let r = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        a = (0, g.oD)(),
        { widgets: d, isGameFetching: l } = (0, b.Z)(a),
        c = new Map(d.map((e) => [e.type, e]));
    return null == r
        ? null
        : (0, i.jsx)(
              s.Modal,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          i.forEach(function (t) {
                              var i;
                              (i = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = i);
                          });
                  }
                  return e;
              })(
                  {
                      title: h.intl.string(h.t.grUgR0),
                      actions: [],
                  },
                  e,
              )),
              (n = n =
                  {
                      children: (0, i.jsx)("ul", {
                          "aria-label": h.intl.string(h.t["+EIBSE"]),
                          className: x.options,
                          children: Object.keys(w).map((e) =>
                              (0, i.jsx)(
                                  v,
                                  {
                                      widgetType: e,
                                      user: r,
                                      widget: c.get(e),
                                      isGameFetching: l,
                                      onClick: O.dG,
                                  },
                                  e,
                              ),
                          ),
                      }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t),
          );
}
