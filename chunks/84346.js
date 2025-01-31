n.d(t, { Z: () => v });
var i = n(200651),
    r = n(239091),
    o = n(603618),
    a = n(926086),
    l = n(353038),
    s = n(761374),
    c = n(340101),
    d = n(273816),
    u = n(2923),
    h = n(586742),
    _ = n(243487),
    m = n(430561),
    g = n(134849),
    p = n(501787),
    f = n(981631),
    x = n(388032);
let v = {
    [f.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: o, borderWidth: a } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * o - 2 * a,
                width: 'auto' === r.width ? 0 : r.width - 2 * o - 2 * a
            });
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: x.intl.string(x.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.ls, {
                        onClick: (o) => {
                            var a, l, s;
                            return (
                                (a = o),
                                (l = e),
                                (s = t),
                                void (
                                    (0, c.js)(l) &&
                                    (0, r.jW)(a, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            s(!0),
                                            (t) =>
                                                (0, i.jsx)(e, {
                                                    ...t,
                                                    widget: l,
                                                    onClose: () => s(!1)
                                                })
                                        );
                                    })
                                )
                            );
                        }
                    }),
                    (0, i.jsx)(m.RT, {
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
                          width: Math.max(n.width, p.vZ),
                          height: Math.min(n.height, 2 * p.mo + 2 * i + 2 * r)
                      }
                    : {
                          height: Math.max(n.height, p.vZ),
                          width: Math.min(n.width, 2 * p.mo + 2 * i + 2 * r)
                      }
                : n;
        }
    },
    [f.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(_.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: f.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: x.intl.string(x.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.ls, {
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
                    (0, i.jsx)(m.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [f.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(a.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: 'Click Zone Tester' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.ls, {
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
                    (0, i.jsx)(m.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [f.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(d.Z, {
                id: t.id,
                anchorLeft: r,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(m.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    },
    [f.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: o, dragStart: a, anchorTop: l, anchorLeft: d } = e;
            return (0, c.ZL)(n)
                ? (0, i.jsx)(s.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: o,
                      anchorTop: l,
                      anchorLeft: d,
                      widget: f.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: a,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: x.intl.string(x.t['386XRk']) }),
        renderButtons(e, t) {
            var o;
            return (0, c.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(m.ls, {
                              onClick: (o) => {
                                  var a, l, s;
                                  return (
                                      (a = o),
                                      (l = e),
                                      (s = t),
                                      void (
                                          (0, c.ZL)(l) &&
                                          (0, r.jW)(a, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  s(!0),
                                                  (t) =>
                                                      (0, i.jsx)(e, {
                                                          ...t,
                                                          widget: l,
                                                          onClose: () => s(!1)
                                                      })
                                              );
                                          })
                                      )
                                  );
                              }
                          }),
                          (0, i.jsx)(m.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (o = e.meta.showAllStreams) || void 0 === o || o
                          }),
                          (0, i.jsx)(m.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: o, containerSpecs: a } = e,
                s = 2 * r + 2 * o,
                c = i.width - s,
                d = i.height - s,
                u = c / d,
                h = d / c,
                _ = (() => {
                    switch (t) {
                        case l.B.RESIZE_NORTH:
                        case l.B.RESIZE_SOUTH:
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
            return _.width > a.maxX && ((_.width = a.maxX), (_.height = (a.maxX - s) * h + s)), _.height > a.maxY && ((_.height = a.maxY), (_.width = (a.maxY - s) * u + s)), _;
        }
    },
    [f.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
        }
    },
    [f.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(g.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(m.PI, { children: x.intl.string(x.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.ls, {
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
                    (0, i.jsx)(m.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [f.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(o.Z, {}),
        renderTitle: () => (0, i.jsx)(m.PI, { children: x.intl.string(x.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
