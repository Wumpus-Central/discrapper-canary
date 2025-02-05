n.d(t, { Z: () => x });
var i = n(200651),
    r = n(239091),
    o = n(603618),
    l = n(926086),
    a = n(353038),
    s = n(761374),
    d = n(340101),
    c = n(273816),
    u = n(2923),
    h = n(586742),
    _ = n(243487),
    p = n(430561),
    f = n(134849),
    g = n(501787),
    m = n(981631),
    v = n(388032);
let x = {
    [m.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: o, borderWidth: l } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * o - 2 * l,
                width: 'auto' === r.width ? 0 : r.width - 2 * o - 2 * l
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (o) => {
                            var l, a, s;
                            return (
                                (l = o),
                                (a = e),
                                (s = t),
                                void (
                                    (0, d.js)(a) &&
                                    (0, r.jW)(l, async () => {
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
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, d.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, g.vZ),
                          height: Math.min(n.height, 2 * g.mo + 2 * i + 2 * r)
                      }
                    : {
                          height: Math.max(n.height, g.vZ),
                          width: Math.min(n.width, 2 * g.mo + 2 * i + 2 * r)
                      }
                : n;
        }
    },
    [m.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(_.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: m.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
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
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(l.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: 'Click Zone Tester' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
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
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(c.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(p.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    },
    [m.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: o, dragStart: l, anchorTop: a, anchorLeft: c } = e;
            return (0, d.ZL)(n)
                ? (0, i.jsx)(s.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: o,
                      anchorTop: a,
                      anchorLeft: c,
                      widget: m.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: l,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t['386XRk']) }),
        renderButtons(e, t) {
            var o;
            return (0, d.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.ls, {
                              onClick: (o) => {
                                  var l, a, s;
                                  return (
                                      (l = o),
                                      (a = e),
                                      (s = t),
                                      void (
                                          (0, d.ZL)(a) &&
                                          (0, r.jW)(l, async () => {
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
                          (0, i.jsx)(p.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (o = e.meta.showAllStreams) || void 0 === o || o
                          }),
                          (0, i.jsx)(p.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: o, containerSpecs: l } = e,
                s = 2 * r + 2 * o,
                d = i.width - s,
                c = i.height - s,
                u = d / c,
                h = c / d,
                _ = (() => {
                    switch (t) {
                        case a.B.RESIZE_NORTH:
                        case a.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - s) * u + s)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - s) * h + s)
                            };
                    }
                })();
            return _.width > l.maxX && ((_.width = l.maxX), (_.height = (l.maxX - s) * h + s)), _.height > l.maxY && ((_.height = l.maxY), (_.width = (l.maxY - s) * u + s)), _;
        }
    },
    [m.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
        }
    },
    [m.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
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
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(o.Z, {}),
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
