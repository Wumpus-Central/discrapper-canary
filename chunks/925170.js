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
    O = n(872269),
    m = n(985748),
    y = n(566007),
    h = n(173951),
    w = n(455731),
    x = n(228168),
    v = n(247397),
    A = n(388032),
    P = n(32442);
let E = {
    [a.l.FAVORITE_GAMES]: {
        component: y.Z,
        getAriaLabel: () => A.intl.string(A.t.xJtdIi),
    },
    [a.l.CURRENT_GAMES]: {
        component: m.Z,
        getAriaLabel: () => A.intl.string(A.t.Ae8tRk),
    },
    [a.l.PLAYED_GAMES]: {
        component: h.Z,
        getAriaLabel: () => A.intl.string(A.t["pBR+4u"]),
    },
    [a.l.WANT_TO_PLAY_GAMES]: {
        component: w.Z,
        getAriaLabel: () => A.intl.string(A.t.NtoBi4),
    },
};
function _(e) {
    let { widgetType: t, user: n, widget: l, isGameFetching: a, onAddWidget: s, disabled: d } = e,
        p = i.useRef(null),
        b = (0, u.Dt)(),
        f = i.useCallback(() => {
            (0, g.qH)(t), s(), (0, O.L$)(x.qb.WIDGET_ADDED);
        }, [t, s]);
    if (null == l) return null;
    let { component: j, getAriaLabel: m } = E[t];
    return (0, r.jsx)("li", {
        children: (0, r.jsxs)("div", {
            ref: p,
            onClick: d ? void 0 : f,
            className: o()(P.addButtonContainer, d && P.disabled),
            children: [
                (0, r.jsx)("div", {
                    className: P.addButton,
                    children: (0, r.jsx)(c.zxk, {
                        text: A.intl.string(A.t.onajm5),
                        variant: "overlay-primary",
                        "aria-label": m(),
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
                        className: P.widgetAdded,
                        children: [
                            (0, r.jsx)(c.kmB, {
                                size: "sm",
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                "aria-hidden": !0,
                                children: A.intl.string(A.t["UEZy/f"]),
                            }),
                            (0, r.jsx)(c.nn4, {
                                id: b,
                                children: A.intl.string(A.t.d8WVXF),
                            }),
                        ],
                    }),
                (0, r.jsx)(c.nn4, { children: A.intl.string(A.t.e9eskJ) }),
                (0, r.jsx)(j, {
                    widget: l,
                    user: n,
                    isGameFetching: a,
                    containerClassName: d && P.disabledWidget,
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
                v.r.forEach((r) => {
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
                      title: A.intl.string(A.t.grUgR0),
                      actions: [],
                      onClose: l,
                  },
                  o,
              )),
              (n = n =
                  {
                      children: (0, r.jsx)("ul", {
                          "aria-label": A.intl.string(A.t["+EIBSE"]),
                          className: P.options,
                          children: y.map((e) =>
                              (0, r.jsx)(
                                  _,
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
