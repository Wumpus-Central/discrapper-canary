n.d(t, { Z: () => I });
var i = n(200651),
    l = n(239091),
    r = n(32300),
    o = n(603618),
    a = n(926086),
    s = n(353038),
    d = n(761374),
    u = n(340101),
    c = n(273816),
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
            let { widget: t, locked: n, size: l, padding: r, borderWidth: o } = e;
            return (0, i.jsx)(_.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === l.height ? 0 : l.height - 2 * r - 2 * o,
                width: 'auto' === l.width ? 0 : l.width - 2 * r - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (r) => {
                            var o, a, s;
                            return (
                                (o = r),
                                (a = e),
                                (s = t),
                                void (
                                    (0, u.js)(a) &&
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return (0, u.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, m.vZ),
                          height: Math.min(n.height, 2 * m.mo + 2 * i + 2 * l)
                      }
                    : {
                          height: Math.max(n.height, m.vZ),
                          width: Math.min(n.width, 2 * m.mo + 2 * i + 2 * l)
                      }
                : n;
        }
    },
    [v.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(p.Z, {
                anchorLeft: n,
                id: t.id,
                locked: l,
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.PERFORMANCE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: l } = e;
            return (0, i.jsx)(c.Z, {
                id: t.id,
                anchorLeft: l,
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
            let { widget: n, locked: l, size: r, dragStart: o, anchorTop: a, anchorLeft: s } = e;
            return (0, u.ZL)(n)
                ? (0, i.jsx)(d.Z, {
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: r,
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
            var r;
            return (0, u.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.ls, {
                              onClick: (r) => {
                                  var o, a, s;
                                  return (
                                      (o = r),
                                      (a = e),
                                      (s = t),
                                      void (
                                          (0, u.ZL)(a) &&
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
                          (0, i.jsx)(f.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (r = e.meta.showAllStreams) || void 0 === r || r
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
            let { operation: t, computedSize: n, originSize: i, borderWidth: l, padding: r, containerSpecs: o } = e,
                a = 2 * l + 2 * r,
                d = i.width - a,
                u = i.height - a,
                c = d / u,
                h = u / d,
                _ = (() => {
                    switch (t) {
                        case s.B.RESIZE_NORTH:
                        case s.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * c + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * h + a)
                            };
                    }
                })();
            return _.width > o.maxX && ((_.width = o.maxX), (_.height = (o.maxX - a) * h + a)), _.height > o.maxY && ((_.height = o.maxY), (_.width = (o.maxY - a) * c + a)), _;
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
            return (0, i.jsx)(o.ZP, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: E.intl.string(E.t['6gwSFR']) }),
        renderButtons: () => null,
        predicate: () => (0, r.Rb)('ActivityPopout').allowActivityWidget
    }
};
