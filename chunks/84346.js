n.d(t, { Z: () => E });
var i = n(200651),
    r = n(239091),
    o = n(32300),
    l = n(603618),
    a = n(926086),
    s = n(353038),
    c = n(761374),
    u = n(340101),
    d = n(273816),
    p = n(2923),
    f = n(586742),
    h = n(243487),
    g = n(430561),
    _ = n(134849),
    m = n(501787),
    v = n(981631),
    O = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = {
    [v.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: o, borderWidth: l, showEmpty: a } = e;
            return (0, i.jsx)(f.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * o - 2 * l,
                width: 'auto' === r.width ? 0 : r.width - 2 * o - 2 * l,
                showEmpty: a
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: O.NW.string(O.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (o) => {
                            var l, a, s;
                            return (
                                (l = o),
                                (a = e),
                                (s = t),
                                void (
                                    (0, u.js)(a) &&
                                    (0, r.jW)(l, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            s(!0),
                                            (t) =>
                                                (0, i.jsx)(
                                                    e,
                                                    y(b({}, t), {
                                                        widget: a,
                                                        onClose: () => s(!1)
                                                    })
                                                )
                                        );
                                    })
                                )
                            );
                        }
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, u.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, m.vZ),
                          height: Math.min(n.height, 2 * m.mo + 2 * i + 2 * r)
                      }
                    : {
                          height: Math.max(n.height, m.vZ),
                          width: Math.min(n.width, 2 * m.mo + 2 * i + 2 * r)
                      }
                : n;
        }
    },
    [v.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r, showEmpty: o } = e;
            return (0, i.jsx)(h.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: v.Odu.VOICE,
                isPreviewingInGame: !1,
                showEmpty: o
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: O.NW.string(O.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                return t(!0), (n) => (0, i.jsx)(e, y(b({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(a.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: 'Click Zone Tester' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                return t(!0), (n) => (0, i.jsx)(e, y(b({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(d.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(g.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    },
    [v.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: o, dragStart: l, anchorTop: a, anchorLeft: s, showEmpty: d } = e;
            return (0, u.ZL)(n)
                ? (0, i.jsx)(c.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: o,
                      anchorTop: a,
                      anchorLeft: s,
                      widget: v.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2,
                      showEmpty: d
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: O.NW.string(O.t['386XRk']) }),
        renderButtons(e, t) {
            var o;
            return (0, u.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.ls, {
                              onClick: (o) => {
                                  var l, a, s;
                                  return (
                                      (l = o),
                                      (a = e),
                                      (s = t),
                                      void (
                                          (0, u.ZL)(a) &&
                                          (0, r.jW)(l, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  s(!0),
                                                  (t) =>
                                                      (0, i.jsx)(
                                                          e,
                                                          y(b({}, t), {
                                                              widget: a,
                                                              onClose: () => s(!1)
                                                          })
                                                      )
                                              );
                                          })
                                      )
                                  );
                              }
                          }),
                          (0, i.jsx)(g.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (o = e.meta.showAllStreams) || void 0 === o || o
                          }),
                          (0, i.jsx)(g.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: o, containerSpecs: l } = e,
                a = 2 * r + 2 * o,
                c = i.width - a,
                u = i.height - a,
                d = c / u,
                p = u / c,
                f = (() => {
                    switch (t) {
                        case s.B.RESIZE_NORTH:
                        case s.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * d + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * p + a)
                            };
                    }
                })();
            return f.width > l.maxX && ((f.width = l.maxX), (f.height = (l.maxX - a) * p + a)), f.height > l.maxY && ((f.height = l.maxY), (f.width = (l.maxY - a) * d + a)), f;
        }
    },
    [v.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.Z, { locked: t });
        }
    },
    [v.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t, showEmpty: n } = e;
            return (0, i.jsx)(_.Z, {
                locked: t,
                showEmpty: n
            });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: O.NW.string(O.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                return t(!0), (n) => (0, i.jsx)(e, y(b({}, n), { onClose: () => t(!1) }));
                            });
                        }
                    }),
                    (0, i.jsx)(g.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(l.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(g.PI, { children: O.NW.string(O.t['6gwSFR']) }),
        renderButtons: () => null,
        predicate: () => (0, o.Rb)('ActivityPopout').allowActivityWidget
    }
};
