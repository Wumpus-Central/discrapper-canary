n.d(t, { Z: () => P }), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(481060),
    u = n(570140),
    m = n(665149),
    h = n(886118),
    x = n(301801),
    p = n(4912),
    b = n(55935),
    f = n(428530),
    _ = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    y = n(159185),
    C = n(710662);
function T(e) {
    return parseFloat(e.toFixed(3));
}
let S = [
    {
        key: 'store',
        cellClassName: y.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: y.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(T(t.time), ' ms');
        }
    }
];
function O(e) {
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
        children: (0, r.jsx)(v.Z, {
            columns: S,
            data: n
        })
    });
}
let N = [
    {
        id: 'action',
        name: 'Action',
        render(e) {
            var t;
            let { actionLog: n } = e,
                a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(_.E, {
                        className: y.actionProperties,
                        children: [
                            (0, r.jsx)(_.Z9, {
                                name: 'Created at',
                                children: (0, r.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, b.vc)(a, 'LLLL'),
                                    children: (0, b.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(_.Z9, {
                                name: 'Total Time',
                                children: [T(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(d.zJl, {
                        className: y.inspectorContainer,
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
            return (0, r.jsx)(O, { actionLog: t });
        }
    }
];
function k(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = a.useMemo(
            () =>
                t.error
                    ? [
                          ...N,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(p.Z, { className: y.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(y.errorToolbar, C.toolbar),
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
                                              className: y.inspectorContainer,
                                              children: (0, r.jsx)(f.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : N,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: l }, [l]);
    return (0, r.jsxs)(g.Z, {
        className: y.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(m.ZP, {
                className: i()(C.headerBar, y.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(m.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, r.jsx)(m.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let E = [
        {
            key: 'action',
            cellClassName: y.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(p.Z, { className: y.errorIcon }), t.name]
                });
            }
        },
        {
            key: 'total time',
            cellClassName: y.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return ''.concat(T(t.totalTime), ' ms');
            }
        }
    ],
    w = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100
    };
function P() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (function (e) {
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
                l.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [l]
        ),
        [c, m] = a.useState(s),
        [h, p] = a.useState(s),
        [b, f] = a.useState(!1),
        [_, g] = a.useState(),
        j = a.useCallback((e) => {
            p(e);
        }, []);
    (0, x.BO)(t, b ? c : s, j, w);
    let T = a.useCallback(
            (e) => {
                m(s), f(e);
            },
            [s]
        ),
        S = t.trim().length > 0,
        O = a.useMemo(() => (S ? h : b ? c : s), [s, h, S, b, c]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(C.panel, y.panel),
        children: [
            (0, r.jsxs)('div', {
                className: y.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: y.pausedEvents,
                        children: (0, r.jsx)(d.rsf, {
                            checked: !b,
                            onChange: (e) => T(!e)
                        })
                    }),
                    (0, r.jsx)(d.E1j, {
                        className: y.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, r.jsx)(v.Z, {
                columns: E,
                data: O,
                selectedRowKey: null == _ ? void 0 : _.id.toString(),
                onClickRow: (e) => g(e.actionLog)
            }),
            null != _ &&
                (0, r.jsx)(k, {
                    actionLog: _,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
