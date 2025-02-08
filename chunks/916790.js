n.d(t, { Z: () => R }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(481060),
    u = n(570140),
    h = n(665149),
    m = n(301801),
    x = n(4912),
    _ = n(55935),
    p = n(428530),
    f = n(257785),
    b = n(484036),
    g = n(681619),
    v = n(621060),
    j = n(912130),
    C = n(941469);
function N(e) {
    return parseFloat(e.toFixed(3));
}
let T = [
    {
        key: 'store',
        cellClassName: j.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: j.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(N(t.time), ' ms');
        }
    }
];
function E(e) {
    let { actionLog: t } = e,
        n = r.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e
                })),
            [t]
        );
    return (0, a.jsx)(d.zJl, {
        children: (0, a.jsx)(g.Z, {
            columns: T,
            data: n
        })
    });
}
let y = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let { actionLog: n } = e,
                r = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(f.E, {
                        className: j.actionProperties,
                        children: [
                            (0, a.jsx)(f.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, _.vc)(r, 'LLLL'),
                                    children: (0, _.Y4)(r)
                                })
                            }),
                            (0, a.jsxs)(f.Z9, {
                                name: 'Total Time',
                                children: [N(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, a.jsx)(d.zJl, {
                        className: j.inspectorContainer,
                        children: (0, a.jsx)(p.Z, { data: n.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(E, { actionLog: t });
        }
    }
];
function S(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...y,
                          {
                              id: 'error',
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(x.Z, { className: j.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: i()(j.errorToolbar, C.toolbar),
                                              children: (0, a.jsx)('div', {
                                                  className: C.toolbarGroup,
                                                  children: (0, a.jsx)(d.zxk, {
                                                      className: C.toolbarButton,
                                                      size: d.zxk.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, a.jsx)(d.zJl, {
                                              className: j.inspectorContainer,
                                              children: (0, a.jsx)(p.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : y,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, v.Z)({ tabs: l }, [l]);
    return (0, a.jsxs)(b.Z, {
        className: j.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(o, {}),
            (0, a.jsxs)(h.ZP, {
                className: i()(C.headerBar, j.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let k = [
    {
        key: 'action',
        cellClassName: j.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [t.error && (0, a.jsx)(x.Z, { className: j.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: j.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(N(t.totalTime), ' ms');
        }
    }
];
function R() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (function (e) {
            let [t, n] = r.useState(e.logs),
                a = r.useCallback(() => {
                    (0, o.debounce)(() => {
                        n([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                r.useEffect(
                    () => (
                        e.on('log', a),
                        () => {
                            e.off('log', a);
                        }
                    ),
                    [e, a]
                ),
                t
            );
        })(u.Z.actionLogger),
        s = r.useMemo(
            () =>
                l.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [l]
        ),
        [c, h] = r.useState(s),
        [x, _] = r.useState(s),
        [p, f] = r.useState(!1),
        [b, v] = r.useState(),
        N = r.useRef(null),
        T = r.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            _(t);
                            return;
                        }
                        N.current = (0, o.uniqueId)();
                        let n = await (0, m.H)(
                            t,
                            (e) => {
                                let { actionLog: t } = e;
                                return t.name;
                            },
                            e,
                            !0
                        );
                        null != N.current && _(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        E = r.useCallback(
            (e) => {
                h(s), f(e);
            },
            [s]
        );
    r.useEffect(() => {
        if (p) {
            T(t, null != c ? c : s);
            return;
        }
        T(t, s);
    }, [p, t, T, s, c]),
        r.useEffect(() => {
            N.current = null;
        }, []);
    let y = t.trim().length > 0,
        R = r.useMemo(() => (y ? x : p ? c : s), [s, x, y, p, c]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(C.panel, j.panel),
        children: [
            (0, a.jsxs)('div', {
                className: j.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: j.pausedEvents,
                        children: (0, a.jsx)(d.rsf, {
                            checked: !p,
                            onChange: (e) => E(!e)
                        })
                    }),
                    (0, a.jsx)(d.E1j, {
                        className: j.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, a.jsx)(g.Z, {
                columns: k,
                data: R,
                selectedRowKey: null == b ? void 0 : b.id.toString(),
                onClickRow: (e) => v(e.actionLog)
            }),
            null != b &&
                (0, a.jsx)(S, {
                    actionLog: b,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
