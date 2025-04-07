n.d(t, { Z: () => Z }), n(35282), n(388685), n(49124), n(781311);
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
    x = n(886118),
    h = n(301801),
    p = n(4912),
    b = n(572004),
    f = n(55935),
    _ = n(428530),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    y = n(621060),
    C = n(981631),
    T = n(248520),
    N = n(616257);
function S(e) {
    return parseFloat(e.toFixed(3));
}
let O = [
    {
        key: 'store',
        cellClassName: T.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: T.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(S(t.time), ' ms');
        }
    }
];
function E(e) {
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
        children: (0, r.jsx)(j.Z, {
            columns: O,
            data: n
        })
    });
}
let k = [
    {
        id: 'action',
        name: 'Action',
        group: y.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(g.E, {
                        className: T.actionProperties,
                        children: [
                            (0, r.jsx)(g.Z9, {
                                name: 'Created at',
                                children: (0, r.jsx)('time', {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(a, 'LLLL'),
                                    children: (0, f.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(g.Z9, {
                                name: 'Total Time',
                                children: [S(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(d.zJl, {
                        className: T.inspectorContainer,
                        children: (0, r.jsx)(_.Z, { data: n.action })
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
            return (0, r.jsx)(E, { actionLog: t });
        }
    }
];
function w(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = a.useMemo(
            () =>
                t.error
                    ? [
                          ...k,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(p.Z, { className: T.errorIcon }), 'Error']
                              }),
                              group: y.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(T.errorToolbar, N.toolbar),
                                              children: (0, r.jsx)('div', {
                                                  className: N.toolbarGroup,
                                                  children: (0, r.jsx)(d.zxk, {
                                                      className: N.toolbarButton,
                                                      size: d.zxk.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, r.jsx)(d.zJl, {
                                              className: T.inspectorContainer,
                                              children: (0, r.jsx)(_.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : k,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, y.ZP)({ tabs: l }, [l]);
    return (0, r.jsxs)(v.Z, {
        className: T.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(m.ZP, {
                className: i()(N.headerBar, T.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(m.ZP.Icon, {
                        icon: d.xVZ,
                        tooltip: t.name
                    }),
                    (0, r.jsx)(m.ZP.Title, {
                        wrapperClassName: i()(N.headerTitle, N.dispatcherHeader),
                        className: N.headerTitleText,
                        children: t.name
                    }),
                    (0, r.jsx)(m.ZP.Icon, {
                        icon: d.TIy,
                        tooltip: 'Copy event data',
                        onClick: () => {
                            var e;
                            (0, b.JG)(
                                JSON.stringify(
                                    Object.keys((e = t.action)).reduce((t, n) => {
                                        var r;
                                        return (t[n] = ((r = e[n]), C.Jn9.test(r) ? 'REDACTED' : r)), t;
                                    }, {}),
                                    null,
                                    2
                                )
                            ),
                                (0, d.showToast)({
                                    id: 'copy-action-log-name',
                                    type: d.ToastType.SUCCESS,
                                    message: 'Copied action log data to clipboard'
                                });
                        }
                    })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let P = [
        {
            key: 'action',
            cellClassName: T.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(p.Z, { className: T.errorIcon }), t.name]
                });
            }
        },
        {
            key: 'total time',
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return ''.concat(S(t.totalTime), ' ms');
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
function Z() {
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
        [x, p] = a.useState(s),
        [b, f] = a.useState(!1),
        [_, g] = a.useState(),
        v = a.useCallback((e) => {
            p(e);
        }, []);
    (0, h.BO)(t, b ? c : s, v, I);
    let y = a.useCallback(
            (e) => {
                m(s), f(e);
            },
            [s]
        ),
        C = t.trim().length > 0,
        S = a.useMemo(() => (C ? x : b ? c : s), [s, x, C, b, c]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(N.panel, T.panel),
        children: [
            (0, r.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: T.pausedEvents,
                        children: (0, r.jsx)(d.rsf, {
                            checked: !b,
                            onChange: (e) => y(!e)
                        })
                    }),
                    (0, r.jsx)(d.E1j, {
                        className: T.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, r.jsx)(j.Z, {
                columns: P,
                data: S,
                selectedRowKey: null == _ ? void 0 : _.id.toString(),
                onClickRow: (e) => g(e.actionLog)
            }),
            null != _ &&
                (0, r.jsx)(w, {
                    actionLog: _,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
