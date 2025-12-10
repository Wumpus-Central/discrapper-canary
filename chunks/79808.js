n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(55160),
    l = n(493773),
    a = n(636298),
    c = n(404975),
    s = n(924052),
    u = n(59662),
    b = n(131051),
    f = n(996435),
    d = n(990757);
function y(e) {
    var t;
    let {
            partialRoot: n,
            target: y,
            defaultTarget: p,
            onClose: g,
            sidebarFooter: O,
            onPanelChange: m,
            emptyState: j,
            searchQuery: v,
            onSearchChange: h,
        } = e,
        x = f.Z.useField("currentPanelKey"),
        { node: S, visibleDirectory: P, accessibleDirectory: C } = (0, b.ZP)(n, null != v ? v : ""),
        _ = null != y && (null == (t = P.entry(y)) ? void 0 : t.parentPanelKey) != null ? y : p,
        w = o.useMemo(() => C.get(null != x ? x : _), [x, C, _]),
        { navigateWithValidation: T } = (0, s.Cu)();
    (0, l.ZP)(() => {
        var e, t, n;
        let r = P.entry(_).parentPanelKey,
            o = null == (e = P.entry(_)) ? void 0 : e.parentTabKey,
            i = null == (t = P.entry(_)) ? void 0 : t.parentCategoryKey,
            l = null == (n = P.entry(_)) ? void 0 : n.parentAccordionKey;
        return (
            f.Z.setState({
                currentPanelKey: r,
                currentTabKeys: null != o ? new Map([[r, o]]) : new Map(),
                currentCategoryKey: i,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: _,
                    targetAccordionKey: l,
                    animateScroll: !1,
                },
                showNavigationMobile: null == y,
            }),
            () => f.Z.resetState()
        );
    }),
        o.useEffect(
            () =>
                f.Z.subscribe(
                    (e) => ({
                        requestedTargetKey: e.requestedTargetKey,
                        currentPanelKey: e.currentPanelKey,
                    }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: n } = e;
                        if (null == t) return;
                        let r = P.entry(t);
                        if (null == r) {
                            null == h || h("");
                            return;
                        }
                        let o = r.parentPanelKey;
                        if (null == o) return void f.Z.setState({ requestedTargetKey: void 0 });
                        let i = f.Z.getField("currentTabKeys"),
                            l = null != r.parentTabKey ? new Map(i).set(o, r.parentTabKey) : i,
                            a = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === i.get(o)),
                            c = () => {
                                f.Z.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: r.parentPanelKey,
                                    currentTabKeys: l,
                                    currentCategoryKey: r.parentCategoryKey,
                                    disableSidebarCategoryAutoSelect: !0,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: r.parentAccordionKey,
                                        animateScroll: a,
                                    },
                                });
                            };
                        r.parentPanelKey !== n
                            ? T(() => {
                                  c(), null == m || m(o);
                              })
                            : c();
                    },
                    { equalityFn: i.X },
                ),
            [P, T, m, h],
        );
    let k = o.useMemo(
            () => ({
                visibleDirectory: P,
                accessibleDirectory: C,
            }),
            [P, C],
        ),
        E = () => T(g),
        N = null != x ? P.get(x) : void 0;
    return (0, r.jsx)(u.j.Provider, {
        value: k,
        children: (0, r.jsxs)("div", {
            className: d.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: S,
                    footer: O,
                    onClose: E,
                    emptyState: j,
                    searchQuery: v,
                    onSearchChange: h,
                }),
                (0, r.jsx)(a.Z, {
                    onClose: E,
                    setting: null != N ? N : w,
                }),
            ],
        }),
    });
}
function p(e) {
    return (0, r.jsx)(s.Ri, {
        children: (0, r.jsx)(
            y,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        ),
    });
}
