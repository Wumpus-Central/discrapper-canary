n.d(t, { default: () => k }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(296009),
    s = n(442837),
    d = n(82659),
    c = n(481060),
    u = n(313201),
    p = n(594174),
    b = n(804919),
    g = n(86419),
    f = n(810473),
    j = n(747101),
    O = n(985748),
    m = n(566007),
    y = n(173951),
    h = n(455731),
    w = n(247397),
    x = n(388032),
    v = n(663161);
let A = {
    [a.l.FAVORITE_GAMES]: {
        component: m.Z,
        getAriaLabel: () => x.intl.string(x.t.xJtdIi),
    },
    [a.l.CURRENT_GAMES]: {
        component: O.Z,
        getAriaLabel: () => x.intl.string(x.t.Ae8tRk),
    },
    [a.l.PLAYED_GAMES]: {
        component: y.Z,
        getAriaLabel: () => x.intl.string(x.t["pBR+4u"]),
    },
    [a.l.WANT_TO_PLAY_GAMES]: {
        component: h.Z,
        getAriaLabel: () => x.intl.string(x.t.NtoBi4),
    },
};
function P(e) {
    let { widgetType: t, user: n, widget: l, isGameFetching: a, onAddWidget: s, disabled: d } = e,
        p = i.useRef(null),
        b = (0, u.Dt)(),
        f = i.useCallback(() => {
            (0, g.qH)(t), s();
        }, [t, s]);
    if (null == l) return null;
    let { component: j, getAriaLabel: O } = A[t];
    return (0, r.jsx)("li", {
        children: (0, r.jsxs)("div", {
            ref: p,
            onClick: d ? void 0 : f,
            className: o()(v.addButtonContainer, d && v.disabled),
            children: [
                (0, r.jsx)("div", {
                    className: v.addButton,
                    children: (0, r.jsx)(c.zxk, {
                        text: x.intl.string(x.t.onajm5),
                        variant: "overlay-primary",
                        "aria-label": O(),
                        "aria-describedby": d ? b : void 0,
                        focusProps: { ringTarget: p },
                        onClick: (e) => {
                            e.stopPropagation(), f();
                        },
                        disabled: d,
                    }),
                }),
                d &&
                    (0, r.jsxs)("div", {
                        className: v.widgetAdded,
                        children: [
                            (0, r.jsx)(c.kmB, {
                                size: "sm",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                "aria-hidden": !0,
                                children: x.intl.string(x.t["UEZy/f"]),
                            }),
                            (0, r.jsx)(c.nn4, {
                                id: b,
                                children: x.intl.string(x.t.d8WVXF),
                            }),
                        ],
                    }),
                (0, r.jsx)(c.nn4, { children: x.intl.string(x.t.e9eskJ) }),
                (0, r.jsx)(j, {
                    widget: l,
                    user: n,
                    isGameFetching: a,
                    containerClassName: d && v.disabledWidget,
                    disableInteraction: !0,
                }),
            ],
        }),
    });
}
function k(e) {
    var t,
        n,
        { onClose: l } = e,
        o = (function (e, t) {
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
        })(e, ["onClose"]);
    let a = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
        c = (0, f.Z)(),
        u = (0, b.oD)(),
        { widgets: g, isGameFetching: O } = (0, j.Z)(u),
        m = new Map(g.map((e) => [e.type, e])),
        y = i.useMemo(() => {
            let e = new Set(c),
                t = [],
                n = [];
            return (
                w.r.forEach((r) => {
                    e.has(r) ? t.push(r) : n.push(r);
                }),
                [...t, ...n]
            );
        }, [c]);
    return null == a
        ? null
        : (0, r.jsx)(
              d.Modal,
              ((t = (function (e) {
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
              })(
                  {
                      title: x.intl.string(x.t.grUgR0),
                      actions: [],
                      onClose: l,
                  },
                  o,
              )),
              (n = n =
                  {
                      children: (0, r.jsx)("ul", {
                          "aria-label": x.intl.string(x.t["+EIBSE"]),
                          className: v.options,
                          children: y.map((e) =>
                              (0, r.jsx)(
                                  P,
                                  {
                                      widgetType: e,
                                      user: a,
                                      widget: m.get(e),
                                      isGameFetching: O,
                                      disabled: !c.includes(e),
                                      onAddWidget: l,
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
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t),
          );
}
