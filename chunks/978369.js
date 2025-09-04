r.d(t, { Z: () => f }), r(539854), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(481060),
    a = r(785717),
    o = r(86419),
    c = r(286957),
    s = r(388032),
    u = r(44258);
let d = i.memo(function (e) {
    let { currentTags: t, onTagSelect: r, onNoneSelect: i, onClose: a } = e;
    return (0, n.jsx)(l.v2r, {
        navId: "widget-game-tags",
        "aria-label": s.intl.string(s.t.r6EJOj),
        onClose: a,
        onSelect: () => {},
        className: u.gameTagsMenu,
        children: Object.entries(c.aE).map((e) => {
            let [a, o] = e,
                u = ((e, a) => {
                    let o = [];
                    return (
                        a.type === c.kd.RADIO &&
                            o.push(
                                (0, n.jsx)(
                                    l.k5B,
                                    {
                                        id: "".concat(e, "-none"),
                                        group: e,
                                        label: s.intl.string(s.t.PoWNfX),
                                        checked: !a.tags.some((e) => t.includes(e)),
                                        action: () => i(a.tags),
                                    },
                                    "none",
                                ),
                            ),
                        a.tags.forEach((i) => {
                            let s = c.XV[i];
                            null != s &&
                                (a.type === c.kd.RADIO
                                    ? o.push(
                                          (0, n.jsx)(
                                              l.k5B,
                                              {
                                                  id: i,
                                                  group: e,
                                                  label: s.getText(),
                                                  checked: t.includes(i),
                                                  action: () => r(i, !0),
                                              },
                                              i,
                                          ),
                                      )
                                    : o.push(
                                          (0, n.jsx)(
                                              l.S89,
                                              {
                                                  id: i,
                                                  label: s.getText(),
                                                  checked: t.includes(i),
                                                  action: () => r(i, !1),
                                              },
                                              i,
                                          ),
                                      ));
                        }),
                        o
                    );
                })(a, o);
            return (0, n.jsx)(
                l.kSQ,
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
        b = (0, i.useRef)(null),
        { trackUserProfileEditAction: p } = (0, a.KZ)(),
        m = (0, i.useMemo)(() => (null != t ? t : []), [t]),
        O = (0, i.useCallback)(
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
                        p({
                            action: "TAG_ADDED",
                            widgetEdited: r,
                            gameId: f,
                        }));
                } else
                    n.has(e)
                        ? (n.delete(e),
                          p({
                              action: "TAG_REMOVED",
                              widgetEdited: r,
                              gameId: f,
                          }))
                        : (n.add(e),
                          p({
                              action: "TAG_ADDED",
                              widgetEdited: r,
                              gameId: f,
                          }));
                (0, o.n$)(r, f, Array.from(n));
            },
            [m, p, r, f],
        ),
        y = (0, i.useCallback)(
            (e) => {
                let t = new Set(m);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    p({
                        action: "TAG_REMOVED",
                        widgetEdited: r,
                        gameId: f,
                    }),
                    (0, o.n$)(r, f, Array.from(t));
            },
            [m, p, r, f],
        );
    return (0, n.jsx)(l.yRy, {
        targetElementRef: b,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            p({
                action: "PRESS_ADD_TAG",
                widgetEdited: r,
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(d, {
                currentTags: m,
                onTagSelect: O,
                onNoneSelect: y,
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
                    l.P3F,
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
                            children: (0, n.jsx)(l.Text, {
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
