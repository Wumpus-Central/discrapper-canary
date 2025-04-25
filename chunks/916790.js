n.d(t, { Z: () => R }), n(35282), n(388685), n(49124), n(781311);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(913527),
    c = n.n(o),
    d = n(481060),
    u = n(570140),
    m = n(665149),
    x = n(886118),
    h = n(301801),
    p = n(4912),
    b = n(572004),
    f = n(55935),
    v = n(428530),
    j = n(257785),
    g = n(484036),
    _ = n(681619),
    y = n(621060),
    O = n(981631),
    C = n(248520),
    E = n(616257);
function N(e) {
    return parseFloat(e.toFixed(3));
}
let T = [
    {
        key: 'store',
        cellClassName: C.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: C.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(N(t.time), ' ms');
        }
    }
];
function S(e) {
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
        children: (0, a.jsx)(_.Z, {
            columns: T,
            data: n
        })
    });
}
let P = [
    {
        id: 'action',
        name: 'Action',
        group: y.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                r = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(j.E, {
                        className: C.actionProperties,
                        children: [
                            (0, a.jsx)(j.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(r, 'LLLL'),
                                    children: (0, f.Y4)(r)
                                })
                            }),
                            (0, a.jsxs)(j.Z9, {
                                name: 'Total Time',
                                children: [N(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, a.jsx)(d.zJl, {
                        className: C.inspectorContainer,
                        children: (0, a.jsx)(v.Z, { data: n.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        group: y.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(S, { actionLog: t });
        }
    }
];
function w(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...P,
                          {
                              id: 'error',
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(p.Z, { className: C.errorIcon }), 'Error']
                              }),
                              group: y.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: i()(C.errorToolbar, E.toolbar),
                                              children: (0, a.jsx)('div', {
                                                  className: E.toolbarGroup,
                                                  children: (0, a.jsx)(d.zxk, {
                                                      className: E.toolbarButton,
                                                      size: d.zxk.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, a.jsx)(d.zJl, {
                                              className: C.inspectorContainer,
                                              children: (0, a.jsx)(v.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : P,
            [t]
        ),
        { TabBar: s, renderSelectedTab: o } = (0, y.ZP)({ tabs: l }, [l]);
    return (0, a.jsxs)(g.Z, {
        className: C.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(m.ZP, {
                className: i()(E.headerBar, C.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(m.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(m.ZP.Title, {
                        wrapperClassName: i()(E.headerTitle, E.dispatcherHeader),
                        className: E.headerTitleText,
                        children: t.name
                    }),
                    (0, a.jsx)(m.ZP.Icon, {
                        icon: d.TIy,
                        tooltip: 'Copy event data',
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), O.Jn9.test(a) ? 'REDACTED' : a)), t;
                                }, {}),
                                null,
                                2
                            );
                            (0, b.JG)(n, () =>
                                (0, d.showToast)({
                                    id: 'copy-action-log-name',
                                    type: d.ToastType.SUCCESS,
                                    message: 'Copied action log data to clipboard'
                                })
                            );
                        }
                    })
                ]
            }),
            o({ actionLog: t })
        ]
    });
}
let k = [
        {
            key: 'action',
            cellClassName: C.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [t.error && (0, a.jsx)(p.Z, { className: C.errorIcon }), t.name]
                });
            }
        },
        {
            key: 'total time',
            cellClassName: C.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return ''.concat(N(t.totalTime), ' ms');
            }
        }
    ],
    I = {
        searchType: x.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100
    };
function R() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (function (e) {
            let [t, n] = r.useState(e.logs),
                a = r.useCallback(() => {
                    (0, s.debounce)(() => {
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
        o = r.useMemo(
            () =>
                l.map((e) => ({
                    key: e.id.toString(),
                    actionLog: e
                })),
            [l]
        ),
        [c, m] = r.useState(o),
        [x, p] = r.useState(o),
        [b, f] = r.useState(!1),
        [v, j] = r.useState(),
        g = r.useCallback((e) => {
            p(e);
        }, []);
    (0, h.BO)(t, b ? c : o, g, I);
    let y = r.useCallback(
            (e) => {
                m(o), f(e);
            },
            [o]
        ),
        O = t.trim().length > 0,
        N = r.useMemo(() => (O ? x : b ? c : o), [o, x, O, b, c]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(E.panel, C.panel),
        children: [
            (0, a.jsxs)('div', {
                className: C.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: C.pausedEvents,
                        children: (0, a.jsx)(d.rsf, {
                            checked: !b,
                            onChange: (e) => y(!e)
                        })
                    }),
                    (0, a.jsx)(d.E1j, {
                        className: C.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, a.jsx)(_.Z, {
                columns: k,
                data: N,
                selectedRowKey: null == v ? void 0 : v.id.toString(),
                onClickRow: (e) => j(e.actionLog)
            }),
            null != v &&
                (0, a.jsx)(w, {
                    actionLog: v,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
