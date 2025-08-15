n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(785717),
    a = n(86419),
    c = n(286957),
    s = n(388032),
    d = n(44258);
function u(e) {
    let { tags: t, widgetType: n, applicationId: u } = e,
        f = (0, i.useRef)(null),
        { trackUserProfileAction: p } = (0, o.KZ)(),
        m = null != t ? t : [];
    return (0, r.jsx)(l.yRy, {
        targetElementRef: f,
        position: "right",
        align: "top",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.v2r, {
                navId: "widget-game-tags",
                "aria-label": s.intl.string(s.t.r6EJOj),
                onClose: t,
                onSelect: () => {},
                children: Object.entries(c.aE).map((e) => {
                    let [t, i] = e,
                        o = i.tags
                            .map((e) => {
                                let t = c.XV[e];
                                return null == t
                                    ? null
                                    : (0, r.jsx)(
                                          l.S89,
                                          {
                                              id: e,
                                              label: t.getText(),
                                              checked: m.includes(e),
                                              action: () =>
                                                  ((e) => {
                                                      let t = new Set(m);
                                                      t.has(e)
                                                          ? (t.delete(e), p({ action: "REMOVE_GAME_TAGS" }))
                                                          : (t.add(e), p({ action: "ADD_GAME_TAGS" })),
                                                          (0, a.n$)(n, u, Array.from(t));
                                                  })(e),
                                          },
                                          e,
                                      );
                            })
                            .filter(Boolean);
                    return (0, r.jsx)(
                        l.kSQ,
                        {
                            label: i.getLabel(),
                            children: o,
                        },
                        t,
                    );
                }),
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)("div", {
                ref: f,
                children: (0, r.jsx)(
                    l.P3F,
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
                    })({}, e)),
                    (n = n =
                        {
                            className: d.addButton,
                            "aria-label": s.intl.string(s.t.r6EJOj),
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-xxs/medium",
                                color: "text-secondary",
                                children: s.intl.string(s.t.fZSej4),
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
                ),
            });
        },
    });
}
