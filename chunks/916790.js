n.d(t, { Z: () => I }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(481060),
    u = n(570140),
    m = n(665149),
    h = n(301801),
    x = n(4912),
    p = n(55935),
    f = n(428530),
    b = n(257785),
    _ = n(484036),
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
        n = l.useMemo(
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
                l = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(b.E, {
                        className: j.actionProperties,
                        children: [
                            (0, a.jsx)(b.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, p.vc)(l, 'LLLL'),
                                    children: (0, p.Y4)(l)
                                })
                            }),
                            (0, a.jsxs)(b.Z9, {
                                name: 'Total Time',
                                children: [N(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, a.jsx)(d.zJl, {
                        className: j.inspectorContainer,
                        children: (0, a.jsx)(f.Z, { data: n.action })
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
        r = l.useMemo(
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
                                              children: (0, a.jsx)(f.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : y,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, v.Z)({ tabs: r }, [r]);
    return (0, a.jsxs)(_.Z, {
        className: j.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(o, {}),
            (0, a.jsxs)(m.ZP, {
                className: i()(C.headerBar, j.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(m.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(m.ZP.Title, { children: t.name })
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
function I() {
    let e = l.useRef(null),
        [t, n] = l.useState(''),
        r = (function (e) {
            let [t, n] = l.useState(e.logs),
                a = l.useCallback(() => n([...e.logs]), [e]);
            return (
                l.useEffect(
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
        s = l.useMemo(
            () =>
                r.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [r]
        ),
        [c, m] = l.useState(s),
        [x, p] = l.useState(s),
        [f, b] = l.useState(!1),
        [_, v] = l.useState(),
        N = l.useRef(null),
        T = l.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            p(t);
                            return;
                        }
                        N.current = (0, o.uniqueId)();
                        let n = await (0, h.H)(
                            t,
                            (e) => {
                                let { actionLog: t } = e;
                                return t.name;
                            },
                            e,
                            !0
                        );
                        null != N.current && p(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        E = l.useCallback(
            (e) => {
                m(s), b(e);
            },
            [s]
        );
    l.useEffect(() => {
        if (f) {
            T(t, null != c ? c : s);
            return;
        }
        T(t, s);
    }, [f, t, T, s, c]),
        l.useEffect(() => {
            N.current = null;
        }, []);
    let y = t.trim().length > 0,
        I = l.useMemo(() => (y ? x : f ? c : s), [s, x, y, f, c]);
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
                            checked: !f,
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
                data: I,
                selectedRowKey: null == _ ? void 0 : _.id.toString(),
                onClickRow: (e) => v(e.actionLog)
            }),
            null != _ &&
                (0, a.jsx)(S, {
                    actionLog: _,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
