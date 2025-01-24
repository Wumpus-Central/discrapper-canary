var i = n(200651),
    r = n(239091),
    l = n(603618),
    o = n(926086),
    a = n(353038),
    s = n(761374),
    c = n(340101),
    d = n(273816),
    u = n(2923),
    h = n(586742),
    m = n(243487),
    p = n(430561),
    x = n(134849),
    g = n(501787),
    v = n(981631),
    f = n(388032);
let C = {
    [v.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: o } = e;
            return (0, i.jsx)(h.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * l - 2 * o,
                width: 'auto' === r.width ? 0 : r.width - 2 * l - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: f.intl.string(f.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (l) =>
                            (function (e, t, l) {
                                if (!!(0, c.js)(t))
                                    (0, r.jW)(e, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            l(!0),
                                            (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    widget: t,
                                                    onClose: () => l(!1)
                                                })
                                        );
                                    });
                            })(l, e, t)
                    }),
                    (0, i.jsx)(p.RT, {
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
                          width: Math.max(n.width, g.OVERLAY_TILE_WIDTH),
                          height: Math.min(n.height, 2 * g.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r)
                      }
                    : {
                          height: Math.max(n.height, g.OVERLAY_TILE_WIDTH),
                          width: Math.min(n.width, 2 * g.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r)
                      }
                : n;
        }
    },
    [v.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(m.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: v.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: f.intl.string(f.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (e) => {
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.CLICK_ZONE_DEBUG]: {
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
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(p.RT, {
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
        renderTitle: () => (0, i.jsx)(p.PI, { children: 'Overlay Performance' }),
        renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(p.RT, {
                    id: e.id,
                    pinned: e.pinned
                })
            })
    },
    [v.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: l, dragStart: o } = e;
            return (0, c.ZL)(n)
                ? (0, i.jsx)(s.Z, {
                      id: n.id,
                      locked: r,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      widget: v.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: o,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: f.intl.string(f.t['386XRk']) }),
        renderButtons(e, t) {
            var l;
            return (0, c.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(p.ls, {
                              onClick: (l) =>
                                  (function (e, t, l) {
                                      if (!!(0, c.ZL)(t))
                                          (0, r.jW)(e, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  l(!0),
                                                  (n) =>
                                                      (0, i.jsx)(e, {
                                                          ...n,
                                                          widget: t,
                                                          onClose: () => l(!1)
                                                      })
                                              );
                                          });
                                  })(l, e, t)
                          }),
                          (0, i.jsx)(p.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (l = e.meta.showAllStreams) || void 0 === l || l
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
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: o } = e,
                s = 2 * r + 2 * l,
                c = i.width - s,
                d = i.height - s,
                u = c / d,
                h = d / c,
                m = (() => {
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
            return m.width > o.maxX && ((m.width = o.maxX), (m.height = (o.maxX - s) * h + s)), m.height > o.maxY && ((m.height = o.maxY), (m.width = (o.maxY - s) * u + s)), m;
        }
    },
    [v.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
        }
    },
    [v.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(x.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(p.PI, { children: f.intl.string(f.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.ls, {
                        onClick: (e) => {
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(p.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(l.Z, {}),
        renderTitle: () => (0, i.jsx)(p.PI, { children: f.intl.string(f.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = C;
