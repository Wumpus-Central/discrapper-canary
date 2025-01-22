n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
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
    f = n(55935),
    p = n(428530),
    b = n(257785),
    g = n(484036),
    v = n(681619),
    j = n(621060),
    _ = n(912130),
    C = n(941469);
function T(e) {
    return parseFloat(e.toFixed(3));
}
let N = [
    {
        key: 'store',
        cellClassName: _.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        }
    },
    {
        key: 'time',
        cellClassName: _.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return ''.concat(T(t.time), ' ms');
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
    return (0, a.jsx)(d.ScrollerThin, {
        children: (0, a.jsx)(v.Z, {
            columns: N,
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
                    (0, a.jsxs)(b.E, {
                        className: _.actionProperties,
                        children: [
                            (0, a.jsx)(b.Z9, {
                                name: 'Created at',
                                children: (0, a.jsx)('time', {
                                    dateTime: null === (t = n.createdAt) || void 0 === t ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(r, 'LLLL'),
                                    children: (0, f.Y4)(r)
                                })
                            }),
                            (0, a.jsxs)(b.Z9, {
                                name: 'Total Time',
                                children: [T(n.totalTime), ' ms']
                            })
                        ]
                    }),
                    (0, a.jsx)(d.ScrollerThin, {
                        className: _.inspectorContainer,
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
            return (0, a.jsx)(S, { actionLog: t });
        }
    }
];
function I(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...y,
                          {
                              id: 'error',
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(x.Z, { className: _.errorIcon }), 'Error']
                              }),
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: i()(_.errorToolbar, C.toolbar),
                                              children: (0, a.jsx)('div', {
                                                  className: C.toolbarGroup,
                                                  children: (0, a.jsx)(d.Button, {
                                                      className: C.toolbarButton,
                                                      size: d.Button.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: 'Log to Console'
                                                  })
                                              })
                                          }),
                                          (0, a.jsx)(d.ScrollerThin, {
                                              className: _.inspectorContainer,
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
        { TabBar: o, renderSelectedTab: s } = (0, j.Z)({ tabs: l }, [l]);
    return (0, a.jsxs)(g.Z, {
        className: _.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(o, {}),
            (0, a.jsxs)(h.ZP, {
                className: i()(C.headerBar, _.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: d.ReceiptIcon,
                        tooltip: t.name
                    }),
                    (0, a.jsx)(h.ZP.Title, { children: t.name })
                ]
            }),
            s({ actionLog: t })
        ]
    });
}
let E = [
    {
        key: 'action',
        cellClassName: _.actionColumn,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [t.error && (0, a.jsx)(x.Z, { className: _.errorIcon }), t.name]
            });
        }
    },
    {
        key: 'total time',
        cellClassName: _.totalTimeColumn,
        render(e) {
            let { actionLog: t } = e;
            return ''.concat(T(t.totalTime), ' ms');
        }
    }
];
function Z() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (function (e) {
            let [t, n] = r.useState(e.logs),
                a = r.useCallback(() => n([...e.logs]), [e]);
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
        [x, f] = r.useState(s),
        [p, b] = r.useState(!1),
        [g, j] = r.useState(),
        T = r.useRef(null),
        N = r.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            f(t);
                            return;
                        }
                        T.current = (0, o.uniqueId)();
                        let n = await (0, m.H)(
                            t,
                            (e) => {
                                let { actionLog: t } = e;
                                return t.name;
                            },
                            e,
                            !0
                        );
                        if (null != T.current) f(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        S = r.useCallback(
            (e) => {
                h(s), b(e);
            },
            [s]
        );
    r.useEffect(() => {
        if (p) {
            N(t, null != c ? c : s);
            return;
        }
        N(t, s);
    }, [p, t, N, s, c]),
        r.useEffect(() => {
            T.current = null;
        }, []);
    let y = t.trim().length > 0,
        Z = r.useMemo(() => (y ? x : p ? c : s), [s, x, y, p, c]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(C.panel, _.panel),
        children: [
            (0, a.jsxs)('div', {
                className: _.toolbar,
                children: [
                    (0, a.jsx)('div', {
                        title: 'Toggles the flow of Actions',
                        className: _.pausedEvents,
                        children: (0, a.jsx)(d.Switch, {
                            checked: !p,
                            onChange: (e) => S(!e)
                        })
                    }),
                    (0, a.jsx)(d.SearchBar, {
                        className: _.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: 'Search by action name'
                    })
                ]
            }),
            (0, a.jsx)(v.Z, {
                columns: E,
                data: Z,
                selectedRowKey: null == g ? void 0 : g.id.toString(),
                onClickRow: (e) => j(e.actionLog)
            }),
            null != g &&
                (0, a.jsx)(I, {
                    actionLog: g,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
                })
        ]
    });
}
