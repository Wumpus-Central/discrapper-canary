r.d(t, { Z: () => f }), r(539854), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(481060),
    l = r(785717),
    o = r(86419),
    c = r(286957),
    s = r(388032),
    u = r(44258);
let d = a.memo(function (e) {
    let { currentTags: t, onTagSelect: r, onNoneSelect: a, onClose: l } = e;
    return (0, n.jsx)(i.v2r, {
        navId: "widget-game-tags",
        "aria-label": s.intl.string(s.t.r6EJOj),
        onClose: l,
        onSelect: () => {},
        children: Object.entries(c.aE).map((e) => {
            let [l, o] = e,
                u = ((e, l) => {
                    let o = [];
                    return (
                        l.type === c.kd.RADIO &&
                            o.push(
                                (0, n.jsx)(
                                    i.k5B,
                                    {
                                        id: "".concat(e, "-none"),
                                        group: e,
                                        label: s.intl.string(s.t.PoWNfX),
                                        checked: !l.tags.some((e) => t.includes(e)),
                                        action: () => a(l.tags),
                                    },
                                    "none",
                                ),
                            ),
                        l.tags.forEach((a) => {
                            let s = c.XV[a];
                            null != s &&
                                (l.type === c.kd.RADIO
                                    ? o.push(
                                          (0, n.jsx)(
                                              i.k5B,
                                              {
                                                  id: a,
                                                  group: e,
                                                  label: s.getText(),
                                                  checked: t.includes(a),
                                                  action: () => r(a, !0),
                                              },
                                              a,
                                          ),
                                      )
                                    : o.push(
                                          (0, n.jsx)(
                                              i.S89,
                                              {
                                                  id: a,
                                                  label: s.getText(),
                                                  checked: t.includes(a),
                                                  action: () => r(a, !1),
                                              },
                                              a,
                                          ),
                                      ));
                        }),
                        o
                    );
                })(l, o);
            return (0, n.jsx)(
                i.kSQ,
                {
                    label: o.getLabel(),
                    children: u,
                },
                l,
            );
        }),
    });
});
function f(e) {
    let { tags: t, widgetType: r, applicationId: f, ref: g } = e,
        b = (0, a.useRef)(null),
        { trackUserProfileAction: p } = (0, l.KZ)(),
        m = (0, a.useMemo)(() => (null != t ? t : []), [t]),
        O = (0, a.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = new Set(m);
                if (t) {
                    let t = Object.values(c.aE).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            n.delete(e);
                        }),
                        n.add(e),
                        p({ action: "EDIT_ACTION" }));
                } else n.has(e) ? n.delete(e) : n.add(e), p({ action: "EDIT_ACTION" });
                (0, o.n$)(r, f, Array.from(n));
            },
            [m, p, r, f],
        ),
        j = (0, a.useCallback)(
            (e) => {
                let t = new Set(m);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    p({ action: "EDIT_ACTION" }),
                    (0, o.n$)(r, f, Array.from(t));
            },
            [m, p, r, f],
        );
    return (0, n.jsx)(i.yRy, {
        targetElementRef: b,
        position: "right",
        align: "top",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(d, {
                currentTags: m,
                onTagSelect: O,
                onNoneSelect: j,
                onClose: t,
            });
        },
        children: (e) => {
            var t, r;
            return (0, n.jsx)("div", {
                ref: (e) => (
                    null != e && ((b.current = e), (g.current = e)),
                    () => {
                        (b.current = null), (g.current = null);
                    }
                ),
                children: (0, n.jsx)(
                    i.P3F,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (r = r =
                        {
                            className: u.addButton,
                            "aria-label": s.intl.string(s.t.r6EJOj),
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-xxs/medium",
                                color: "none",
                                children: s.intl.string(s.t.fZSej4),
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t),
                ),
            });
        },
    });
}
