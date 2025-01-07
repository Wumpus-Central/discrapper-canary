n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
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
    f = n(55935),
    p = n(428530),
    b = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    C = n(912130),
    T = n(941469);
function _(e) {
    return parseFloat(e.toFixed(3));
}
let S = [
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
            return ''.concat(_(t.time), ' ms');
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
    return (0, r.jsx)(d.ScrollerThin, {
        children: (0, r.jsx)(v.Z, {
            columns: S,
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
                a = c()(n.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(b.E, {
                        className: C.actionProperties,
                        children: [
                            (0, r.jsx)(b.Z9, {
                                name: 'Created at',
                                children: (0, r.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(a, 'LLLL'),
                                    children: (0, f.Y4)(a)
                                })
                            }),
                            (0, r.jsxs)(b.Z9, {
                                name: 'Total Time',
                                children: [_(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, r.jsx)(d.ScrollerThin, {
                        className: C.inspectorContainer,
                        children: (0, r.jsx)(p.Z, { data: n.action })
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
function k(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = a.useMemo(
            () =>
                t.error
                    ? [
                          ...y,
                          {
                              id: 'error',
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(x.Z, { className: C.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(C.errorToolbar, T.toolbar),
                                              children: (0, r.jsx)('div', {
                                                  className: T.toolbarGroup,
                                                  children: (0, r.jsx)(d.Button, {
                                                      className: T.toolbarButton,
                                                      size: d.Button.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, r.jsx)(d.ScrollerThin, {
                                              className: C.inspectorContainer,
                                              children: (0, r.jsx)(p.Z, { data: t.error })
                                          })
                                      ]
                                  });
                              }
                          }
                      ]
                    : y,
            [t]
        ),
        { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: l }, [l]);
    return (0, r.jsxs)(g.Z, {
        className: C.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, r.jsx)(o, {}),
            (0, r.jsxs)(h.ZP, {
                className: i()(T.headerBar, C.subPanelHeaderBar),
                children: [
                    (0, r.jsx)(h.ZP.Icon, {
                        icon: d.ReceiptIcon,
                        tooltip: t.name
                    }),
                    (0, r.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let I = [
    {
        key: 'action',
        cellClassName: C.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [t.error && (0, r.jsx)(x.Z, { className: C.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: C.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(_(t.totalTime), ' ms');
        }
    }
];
function E() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (function (e) {
            let [t, n] = a.useState(e.logs),
                r = a.useCallback(() => n([...e.logs]), [e]);
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
        [c, h] = a.useState(s),
        [x, f] = a.useState(s),
        [p, b] = a.useState(!1),
        [g, j] = a.useState(),
        _ = a.useRef(null),
        S = a.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            f(t);
                            return;
                        }
                        _.current = (0, o.uniqueId)();
                        let n = await (0, m.H)(
                            t,
                            (e) => {
                                let { actionLog: t } = e;
                                return t.name;
                            },
                            e,
                            !0
                        );
                        if (null != _.current) f(n);
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
        if (p) {
            S(t, null != c ? c : s);
            return;
        }
        S(t, s);
    }, [p, t, S, s, c]),
        a.useEffect(() => {
            _.current = null;
        }, []);
    let y = t.trim().length > 0,
        E = a.useMemo(() => (y ? x : p ? c : s), [s, x, y, p, c]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(T.panel, C.panel),
        children: [
            (0, r.jsxs)('div', {
                className: C.toolbar,
                children: [
                    (0, r.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: C.pausedEvents,
                        children: (0, r.jsx)(d.Switch, {
                            checked: !p,
                            onChange: (e) => N(!e)
                        })
                    }),
                    (0, r.jsx)(d.SearchBar, {
                        className: C.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, r.jsx)(v.Z, {
                columns: I,
                data: E,
                selectedRowKey: null == g ? void 0 : g.id.toString(),
                onClickRow: (e) => j(e.actionLog)
            }),
            null != g &&
                (0, r.jsx)(k, {
                    actionLog: g,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
