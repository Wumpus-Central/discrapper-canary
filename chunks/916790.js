n.d(t, { Z: () => k }), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(481060),
    u = n(570140),
    h = n(665149),
    m = n(301801),
    x = n(4912),
    p = n(55935),
    f = n(428530),
    b = n(257785),
    _ = n(484036),
    g = n(681619),
    v = n(621060),
    j = n(981015),
    C = n(841699);
function y(e) {
    return parseFloat(e.toFixed(3));
}
let O = [
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
            return ''.concat(y(t.time), ' ms');
        }
    }
];
function N(e) {
    let { actionLog: t } = e,
        n = a.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e
                })),
            [t]
        );
    return (0, r.jsx)(d.zJl, {
        children: (0, r.jsx)(g.Z, {
            columns: O,
            data: n
        })
    });
}
let T = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let { actionLog: n } = e,
                a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(b.E, {
                        className: j.actionProperties,
                        children: [
                            (0, r.jsx)(b.Z9, {
                                name: 'Created at',
                                children: (0, r.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, p.vc)(a, 'LLLL'),
                                    children: (0, p.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(b.Z9, {
                                name: 'Total Time',
                                children: [y(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(d.zJl, {
                        className: j.inspectorContainer,
                        children: (0, r.jsx)(f.Z, { data: n.action })
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
            return (0, r.jsx)(N, { actionLog: t });
        }
    }
];
function E(e) {
    let { actionLog: t, initialHeight: n } = e,
        i = a.useMemo(
            () =>
                t.error
                    ? [
                          ...T,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(x.Z, { className: j.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: l()(j.errorToolbar, C.toolbar),
                                              children: (0, r.jsx)('div', {
                                                  className: C.toolbarGroup,
                                                  children: (0, r.jsx)(d.zxk, {
                                                      className: C.toolbarButton,
                                                      size: d.zxk.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, r.jsx)(d.zJl, {
                                              className: j.inspectorContainer,
                                              children: (0, r.jsx)(f.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : T,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, v.Z)({ tabs: i }, [i]);
    return (0, r.jsxs)(_.Z, {
        className: j.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(h.ZP, {
                className: l()(C.headerBar, j.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(h.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let S = [
    {
        key: 'action',
        cellClassName: j.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [t.error && (0, r.jsx)(x.Z, { className: j.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: j.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(y(t.totalTime), ' ms');
        }
    }
];
function k() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        i = (function (e) {
            let [t, n] = a.useState(e.logs),
                r = a.useCallback(() => {
                    (0, o.debounce)(() => {
                        n([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                a.useEffect(
                    () => (
                        e.on('log', r),
                        () => {
                            e.off('log', r);
                        }
                    ),
                    [e, r]
                ),
                t
            );
        })(u.Z.actionLogger),
        s = a.useMemo(
            () =>
                i.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [i]
        ),
        [c, h] = a.useState(s),
        [x, p] = a.useState(s),
        [f, b] = a.useState(!1),
        [_, v] = a.useState(),
        y = a.useRef(null),
        O = a.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            p(t);
                            return;
                        }
                        y.current = (0, o.uniqueId)();
                        let n = await (0, m.H)(
                            t,
                            (e) => {
                                let { actionLog: t } = e;
                                return t.name;
                            },
                            e,
                            !0
                        );
                        null != y.current && p(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        N = a.useCallback(
            (e) => {
                h(s), b(e);
            },
            [s]
        );
    a.useEffect(() => {
        if (f) {
            O(t, null != c ? c : s);
            return;
        }
        O(t, s);
    }, [f, t, O, s, c]),
        a.useEffect(() => {
            y.current = null;
        }, []);
    let T = t.trim().length > 0,
        k = a.useMemo(() => (T ? x : f ? c : s), [s, x, T, f, c]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(C.panel, j.panel),
        children: [
            (0, r.jsxs)('div', {
                className: j.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: j.pausedEvents,
                        children: (0, r.jsx)(d.rsf, {
                            checked: !f,
                            onChange: (e) => N(!e)
                        })
                    }),
                    (0, r.jsx)(d.E1j, {
                        className: j.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, r.jsx)(g.Z, {
                columns: S,
                data: k,
                selectedRowKey: null == _ ? void 0 : _.id.toString(),
                onClickRow: (e) => v(e.actionLog)
            }),
            null != _ &&
                (0, r.jsx)(E, {
                    actionLog: _,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
