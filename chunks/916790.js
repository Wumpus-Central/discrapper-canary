n.d(t, { Z: () => w }), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(481060),
    u = n(570140),
    m = n(665149),
    h = n(886118),
    p = n(301801),
    x = n(4912),
    f = n(55935),
    b = n(428530),
    _ = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    y = n(159185),
    C = n(710662);
function N(e) {
    return parseFloat(e.toFixed(3));
}
let T = [
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
            return ''.concat(N(t.time), ' ms');
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
            columns: T,
            data: n
        })
    });
}
let S = [
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
                                    title: (0, f.vc)(a, 'LLLL'),
                                    children: (0, f.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(_.Z9, {
                                name: 'Total Time',
                                children: [N(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(d.zJl, {
                        className: y.inspectorContainer,
                        children: (0, r.jsx)(b.Z, { data: n.action })
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
function E(e) {
    let { actionLog: t, initialHeight: n } = e,
        i = a.useMemo(
            () =>
                t.error
                    ? [
                          ...S,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(x.Z, { className: y.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: l()(y.errorToolbar, C.toolbar),
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
                                              children: (0, r.jsx)(b.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : S,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: i }, [i]);
    return (0, r.jsxs)(g.Z, {
        className: y.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(m.ZP, {
                className: l()(C.headerBar, y.subPanelHeaderBar),
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
let I = [
        {
            key: 'action',
            cellClassName: y.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(x.Z, { className: y.errorIcon }), t.name]
                });
            }
        },
        {
            key: 'total time',
            cellClassName: y.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return ''.concat(N(t.totalTime), ' ms');
            }
        }
    ],
    k = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        }
    };
function w() {
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
        [c, m] = a.useState(s),
        [h, x] = a.useState(s),
        [f, b] = a.useState(!1),
        [_, g] = a.useState(),
        j = a.useCallback((e) => {
            x(e);
        }, []);
    (0, p.BO)(t, f ? c : s, j, k);
    let N = a.useCallback(
            (e) => {
                m(s), b(e);
            },
            [s]
        ),
        T = t.trim().length > 0,
        O = a.useMemo(() => (T ? h : f ? c : s), [s, h, T, f, c]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(C.panel, y.panel),
        children: [
            (0, r.jsxs)('div', {
                className: y.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: y.pausedEvents,
                        children: (0, r.jsx)(d.rsf, {
                            checked: !f,
                            onChange: (e) => N(!e)
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
                columns: I,
                data: O,
                selectedRowKey: null == _ ? void 0 : _.id.toString(),
                onClickRow: (e) => g(e.actionLog)
            }),
            null != _ &&
                (0, r.jsx)(E, {
                    actionLog: _,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
