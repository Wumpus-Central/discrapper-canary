n.d(t, { Z: () => x });
var i = n(200651),
    l = n(239091),
    r = n(603618),
    o = n(926086),
    a = n(353038),
    s = n(761374),
    d = n(340101),
    c = n(273816),
    u = n(2923),
    h = n(586742),
    _ = n(243487),
    p = n(430561),
    g = n(134849),
    f = n(501787),
    m = n(981631),
    v = n(388032);
let x = {
    [m.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: l, padding: r, borderWidth: o } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === l.height ? 0 : l.height - 2 * r - 2 * o,
                width: 'auto' === l.width ? 0 : l.width - 2 * r - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (r) => {
                            var o, a, s;
                            return (
                                (o = r),
                                (a = e),
                                (s = t),
                                void (
                                    (0, d.js)(a) &&
                                    (0, l.jW)(o, async () => {
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
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return (0, d.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, f.vZ),
                          height: Math.min(n.height, 2 * f.mo + 2 * i + 2 * l)
                      }
                    : {
                          height: Math.max(n.height, f.vZ),
                          width: Math.min(n.width, 2 * f.mo + 2 * i + 2 * l)
                      }
                : n;
        }
    },
    [m.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(_.Z, {
                anchorLeft: n,
                id: t.id,
                locked: l,
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
                            (0, l.jW)(e, async () => {
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
            return (0, i.jsx)(o.Z, {
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
                            (0, l.jW)(e, async () => {
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
            let { widget: t, locked: n, anchorLeft: l } = e;
            return (0, i.jsx)(c.Z, {
                id: t.id,
                anchorLeft: l,
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
            let { widget: n, locked: l, size: r, dragStart: o, anchorTop: a, anchorLeft: c } = e;
            return (0, d.ZL)(n)
                ? (0, i.jsx)(s.Z, {
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: r,
                      anchorTop: a,
                      anchorLeft: c,
                      widget: m.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: o,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t['386XRk']) }),
        renderButtons(e, t) {
            var r;
            return (0, d.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.ls, {
                              onClick: (r) => {
                                  var o, a, s;
                                  return (
                                      (o = r),
                                      (a = e),
                                      (s = t),
                                      void (
                                          (0, d.ZL)(a) &&
                                          (0, l.jW)(o, async () => {
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
                              showAllStreams: null === (r = e.meta.showAllStreams) || void 0 === r || r
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
            let { operation: t, computedSize: n, originSize: i, borderWidth: l, padding: r, containerSpecs: o } = e,
                s = 2 * l + 2 * r,
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
            return _.width > o.maxX && ((_.width = o.maxX), (_.height = (o.maxX - s) * h + s)), _.height > o.maxY && ((_.height = o.maxY), (_.width = (o.maxY - s) * u + s)), _;
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
            return (0, i.jsx)(g.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (e) => {
                            (0, l.jW)(e, async () => {
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
        renderWidget: () => (0, i.jsx)(r.Z, {}),
        renderTitle: () => (0, i.jsx)(p.PI, { children: v.intl.string(v.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
