n.d(t, { Z: () => I });
var i = n(200651),
    r = n(239091),
    l = n(32300),
    o = n(603618),
    a = n(926086),
    s = n(353038),
    d = n(761374),
    c = n(340101),
    u = n(273816),
    h = n(2923),
    _ = n(586742),
    p = n(243487),
    f = n(430561),
    g = n(134849),
    m = n(501787),
    v = n(981631),
    E = n(388032);
let I = {
    [v.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: o } = e;
            return (0, i.jsx)(_.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * l - 2 * o,
                width: 'auto' === r.width ? 0 : r.width - 2 * l - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (l) => {
                            var o, a, s;
                            return (
                                (o = l),
                                (a = e),
                                (s = t),
                                void (
                                    (0, c.js)(a) &&
                                    (0, r.jW)(o, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            s(!0),
                                            (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    widget: a,
                                                    onClose: () => s(!1)
                                                })
                                        );
                                    })
                                )
                            );
                        }
                    }),
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, c.js)(t)
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
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(p.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: v.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                return (
                                    t(!0),
                                    (n) =>
                                        (0, i.jsx)(e, {
                                            ...n,
                                            onClose: () => t(!1)
                                        })
                                );
                            });
                        }
                    }),
                    (0, i.jsx)(f.RT, {
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
        renderTitle: () => (0, i.jsx)(f.PI, { children: 'Click Zone Tester' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                return (
                                    t(!0),
                                    (n) =>
                                        (0, i.jsx)(e, {
                                            ...n,
                                            onClose: () => t(!1)
                                        })
                                );
                            });
                        }
                    }),
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(u.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(f.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    },
    [v.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: l, dragStart: o, anchorTop: a, anchorLeft: s } = e;
            return (0, c.ZL)(n)
                ? (0, i.jsx)(d.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      anchorTop: a,
                      anchorLeft: s,
                      widget: v.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: o,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t['386XRk']) }),
        renderButtons(e, t) {
            var l;
            return (0, c.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.ls, {
                              onClick: (l) => {
                                  var o, a, s;
                                  return (
                                      (o = l),
                                      (a = e),
                                      (s = t),
                                      void (
                                          (0, c.ZL)(a) &&
                                          (0, r.jW)(o, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  s(!0),
                                                  (t) =>
                                                      (0, i.jsx)(e, {
                                                          ...t,
                                                          widget: a,
                                                          onClose: () => s(!1)
                                                      })
                                              );
                                          })
                                      )
                                  );
                              }
                          }),
                          (0, i.jsx)(f.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (l = e.meta.showAllStreams) || void 0 === l || l
                          }),
                          (0, i.jsx)(f.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: o } = e,
                a = 2 * r + 2 * l,
                d = i.width - a,
                c = i.height - a,
                u = d / c,
                h = c / d,
                _ = (() => {
                    switch (t) {
                        case s.B.RESIZE_NORTH:
                        case s.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * u + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * h + a)
                            };
                    }
                })();
            return _.width > o.maxX && ((_.width = o.maxX), (_.height = (o.maxX - a) * h + a)), _.height > o.maxY && ((_.height = o.maxY), (_.width = (o.maxY - a) * u + a)), _;
        }
    },
    [v.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(h.Z, { locked: t });
        }
    },
    [v.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(g.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            (0, r.jW)(e, async () => {
                                let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                return (
                                    t(!0),
                                    (n) =>
                                        (0, i.jsx)(e, {
                                            ...n,
                                            onClose: () => t(!1)
                                        })
                                );
                            });
                        }
                    }),
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.ACTIVITY]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(o.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t['6gwSFR']) }),
        renderButtons: () => null,
        predicate: () => (0, l.Rb)('ActivityPopout').allowActivityWidget
    }
};
