var i = n(200651),
    l = n(239091),
    r = n(603618),
    o = n(926086),
    a = n(353038),
    s = n(761374),
    c = n(340101),
    u = n(2923),
    d = n(586742),
    h = n(243487),
    f = n(430561),
    p = n(134849),
    m = n(501787),
    v = n(981631),
    g = n(388032);
let x = {
    [v.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: l, padding: r, borderWidth: o } = e;
            return (0, i.jsx)(d.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === l.height ? 0 : l.height - 2 * r - 2 * o,
                width: 'auto' === l.width ? 0 : l.width - 2 * r - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (r) =>
                            (function (e, t, r) {
                                if (!!(0, c.js)(t))
                                    (0, l.jW)(e, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            r(!0),
                                            (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    widget: t,
                                                    onClose: () => r(!1)
                                                })
                                        );
                                    });
                            })(r, e, t)
                    }),
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return (0, c.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, m.OVERLAY_TILE_WIDTH),
                          height: Math.min(n.height, 2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l)
                      }
                    : {
                          height: Math.max(n.height, m.OVERLAY_TILE_WIDTH),
                          width: Math.min(n.width, 2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l)
                      }
                : n;
        }
    },
    [v.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(h.Z, {
                anchorLeft: n,
                id: t.id,
                locked: l,
                pinned: t.pinned,
                widget: v.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var r, o;
                            return (
                                (r = e),
                                (o = t),
                                void (0, l.jW)(r, async () => {
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
            return (0, i.jsx)(o.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: 'Click Zone Debug' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var r, o;
                            return (
                                (r = e),
                                (o = t),
                                void (0, l.jW)(r, async () => {
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: l, size: r, dragStart: o } = e;
            return (0, c.ZL)(n)
                ? (0, i.jsx)(s.Z, {
                      id: n.id,
                      locked: l,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: r,
                      widget: v.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: o,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t['386XRk']) }),
        renderButtons(e, t) {
            var r;
            return (0, c.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.ls, {
                              onClick: (r) =>
                                  (function (e, t, r) {
                                      if (!!(0, c.ZL)(t))
                                          (0, l.jW)(e, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  r(!0),
                                                  (n) =>
                                                      (0, i.jsx)(e, {
                                                          ...n,
                                                          widget: t,
                                                          onClose: () => r(!1)
                                                      })
                                              );
                                          });
                                  })(r, e, t)
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
                s = 2 * l + 2 * r,
                c = i.width - s,
                u = i.height - s,
                d = c / u,
                h = u / c,
                f = (() => {
                    switch (t) {
                        case a.B.RESIZE_NORTH:
                        case a.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - s) * d + s)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - s) * h + s)
                            };
                    }
                })();
            return f.width > o.maxX && ((f.width = o.maxX), (f.height = (o.maxX - s) * h + s)), f.height > o.maxY && ((f.height = o.maxY), (f.width = (o.maxY - s) * d + s)), f;
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
            return (0, i.jsx)(p.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var r, o;
                            return (
                                (r = e),
                                (o = t),
                                void (0, l.jW)(r, async () => {
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(r.Z, {}),
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = x;
