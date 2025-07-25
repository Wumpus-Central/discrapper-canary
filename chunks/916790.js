(a.d(t, { Z: () => Z }), a(35282), a(388685), a(49124), a(975844), a(781311));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a(913527),
    c = a.n(o),
    d = a(755721),
    u = a(481060),
    m = a(570140),
    x = a(665149),
    p = a(886118),
    h = a(301801),
    b = a(4912),
    f = a(572004),
    v = a(55935),
    j = a(428530),
    g = a(257785),
    _ = a(484036),
    y = a(681619),
    C = a(621060),
    O = a(981631),
    N = a(248520),
    T = a(616257);
function E(e) {
    return parseFloat(e.toFixed(3));
}
let S = [
    {
        key: 'store',
        cellClassName: N.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: N.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(E(t.time), ' ms');
        }
    }
];
function P(e) {
    let { actionLog: t } = e,
        a = r.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e
                })),
            [t]
        );
    return (0, n.jsx)(u.zJl, {
        children: (0, n.jsx)(y.Z, {
            columns: S,
            data: a
        })
    });
}
let w = [
    {
        id: 'action',
        name: 'Action',
        group: C.v0.NONE,
        render(e) {
            var t;
            let { actionLog: a } = e,
                r = c()(a.createdAt);
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)(g.E, {
                        className: N.actionProperties,
                        children: [
                            (0, n.jsx)(g.Z9, {
                                name: 'Created at',
                                children: (0, n.jsx)('time', {
                                    dateTime: null == (t = a.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, v.vc)(r, 'LLLL'),
                                    children: (0, v.Y4)(r)
                                })
                            }),
                            (0, n.jsxs)(g.Z9, {
                                name: 'Total Time',
                                children: [E(a.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, n.jsx)(u.zJl, {
                        className: N.inspectorContainer,
                        children: (0, n.jsx)(j.Z, { data: a.action })
                    })
                ]
            });
        }
    },
    {
        id: 'traces',
        name: 'Store Handlers',
        group: C.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, n.jsx)(P, { actionLog: t });
        }
    }
];
function I(e) {
    let { actionLog: t, initialHeight: a } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...w,
                          {
                              id: 'error',
                              name: (0, n.jsxs)(n.Fragment, {
                                  children: [(0, n.jsx)(b.Z, { className: N.errorIcon }), 'Error']
                              }),
                              group: C.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('div', {
                                              className: i()(N.errorToolbar, T.toolbar),
                                              children: (0, n.jsx)('div', {
                                                  className: T.toolbarGroup,
                                                  children: (0, n.jsx)(d.zx, {
                                                      className: T.toolbarButton,
                                                      size: d.zx.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, n.jsx)(u.zJl, {
                                              className: N.inspectorContainer,
                                              children: (0, n.jsx)(j.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : w,
            [t]
        ),
        { TabBar: s, renderSelectedTab: o } = (0, C.ZP)({ tabs: l }, [l]);
    return (0, n.jsxs)(_.Z, {
        className: N.subPanel,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, n.jsx)(s, {}),
            (0, n.jsxs)(x.ZP, {
                className: i()(T.headerBar, N.subPanelHeaderBar),
                children: [
                    (0, n.jsx)(x.ZP.Icon, {
                        icon: u.xVZ,
                        tooltip: t.name
                    }),
                    (0, n.jsx)(x.ZP.Title, {
                        wrapperClassName: i()(T.headerTitle, T.dispatcherHeader),
                        className: T.headerTitleText,
                        children: t.name
                    }),
                    (0, n.jsx)(x.ZP.Icon, {
                        icon: u.TIy,
                        tooltip: 'Copy event data',
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), O.Jn9.test(n) ? 'REDACTED' : n)), t);
                                }, {}),
                                null,
                                2
                            );
                            (0, f.JG)(a, () =>
                                (0, u.showToast)({
                                    id: 'copy-action-log-name',
                                    type: u.ToastType.SUCCESS,
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
let R = [
        {
            key: 'action',
            cellClassName: N.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [t.error && (0, n.jsx)(b.Z, { className: N.errorIcon }), t.name]
                });
            }
        },
        {
            key: 'total time',
            cellClassName: N.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return ''.concat(E(t.totalTime), ' ms');
            }
        },
        {
            key: 'timestamp',
            cellClassName: N.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return c()(t.createdAt).format('HH:mm:ss.SSS');
            }
        }
    ],
    k = {
        searchType: p.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100
    };
function Z() {
    let e = r.useRef(null),
        [t, a] = r.useState(''),
        l = (function (e) {
            let [t, a] = r.useState(e.logs),
                n = r.useCallback(() => {
                    (0, s.debounce)(() => {
                        a([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                r.useEffect(
                    () => (
                        e.on('log', n),
                        () => {
                            e.off('log', n);
                        }
                    ),
                    [e, n]
                ),
                t
            );
        })(m.Z.actionLogger),
        o = r.useMemo(
            () =>
                l
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e
                    }))
                    .toReversed(),
            [l]
        ),
        [c, d] = r.useState(o),
        [x, p] = r.useState(o),
        [b, f] = r.useState(!1),
        [v, j] = r.useState(),
        g = r.useCallback((e) => {
            p(e);
        }, []);
    (0, h.BO)(t, b ? c : o, g, k);
    let _ = r.useCallback(
            (e) => {
                (d(o), f(e));
            },
            [o]
        ),
        C = t.trim().length > 0,
        O = r.useMemo(() => (C ? x : b ? c : o), [o, x, C, b, c]);
    return (0, n.jsxs)('div', {
        ref: e,
        className: i()(T.panel, N.panel),
        children: [
            (0, n.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, n.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: N.pausedEvents,
                        children: (0, n.jsx)(u.rsf, {
                            checked: !b,
                            onChange: (e) => _(!e)
                        })
                    }),
                    (0, n.jsx)(u.E1j, {
                        className: N.searchBar,
                        query: t,
                        onChange: a,
                        onClear: () => a(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, n.jsx)(y.Z, {
                columns: R,
                data: O,
                selectedRowKey: null == v ? void 0 : v.id.toString(),
                onClickRow: (e) => j(e.actionLog)
            }),
            null != v &&
                (0, n.jsx)(I, {
                    actionLog: v,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
