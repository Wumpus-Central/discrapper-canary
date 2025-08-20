r.d(t, { Z: () => f }), r(539854), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(481060),
    a = r(785717),
    o = r(86419),
    c = r(286957),
    s = r(388032),
    u = r(44258);
let d = l.memo(function (e) {
    let { currentTags: t, onTagSelect: r, onNoneSelect: l, onClose: a } = e;
    return (0, n.jsx)(i.v2r, {
        navId: "widget-game-tags",
        "aria-label": s.intl.string(s.t.r6EJOj),
        onClose: a,
        onSelect: () => {},
        children: Object.entries(c.aE).map((e) => {
            let [a, o] = e,
                u = ((e, a) => {
                    let o = [];
                    return (
                        a.type === c.kd.RADIO &&
                            o.push(
                                (0, n.jsx)(
                                    i.k5B,
                                    {
                                        id: "".concat(e, "-none"),
                                        group: e,
                                        label: s.intl.string(s.t.PoWNfX),
                                        checked: !a.tags.some((e) => t.includes(e)),
                                        action: () => l(a.tags),
                                    },
                                    "none",
                                ),
                            ),
                        a.tags.forEach((l) => {
                            let s = c.XV[l];
                            null != s &&
                                (a.type === c.kd.RADIO
                                    ? o.push(
                                          (0, n.jsx)(
                                              i.k5B,
                                              {
                                                  id: l,
                                                  group: e,
                                                  label: s.getText(),
                                                  checked: t.includes(l),
                                                  action: () => r(l, !0),
                                              },
                                              l,
                                          ),
                                      )
                                    : o.push(
                                          (0, n.jsx)(
                                              i.S89,
                                              {
                                                  id: l,
                                                  label: s.getText(),
                                                  checked: t.includes(l),
                                                  action: () => r(l, !1),
                                              },
                                              l,
                                          ),
                                      ));
                        }),
                        o
                    );
                })(a, o);
            return (0, n.jsx)(
                i.kSQ,
                {
                    label: o.getLabel(),
                    children: u,
                },
                a,
            );
        }),
    });
});
function f(e) {
    let { tags: t, widgetType: r, applicationId: f, ref: g } = e,
        b = (0, l.useRef)(null),
        { trackUserProfileAction: p } = (0, a.KZ)(),
        O = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        m = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = new Set(O);
                if (t) {
                    let t = Object.values(c.aE).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            n.delete(e);
                        }),
                        n.add(e),
                        p({ action: "ADD_GAME_TAGS" }));
                } else
                    n.has(e)
                        ? (n.delete(e), p({ action: "REMOVE_GAME_TAGS" }))
                        : (n.add(e), p({ action: "ADD_GAME_TAGS" }));
                (0, o.n$)(r, f, Array.from(n));
            },
            [O, p, r, f],
        ),
        j = (0, l.useCallback)(
            (e) => {
                let t = new Set(O);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    p({ action: "REMOVE_GAME_TAGS" }),
                    (0, o.n$)(r, f, Array.from(t));
            },
            [O, p, r, f],
        );
    return (0, n.jsx)(i.yRy, {
        targetElementRef: b,
        position: "right",
        align: "top",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(d, {
                currentTags: O,
                onTagSelect: m,
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
                                color: "text-secondary",
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
