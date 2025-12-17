n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    o = n(473749),
    a = n(55160),
    i = n(493773),
    l = n(636298),
    c = n(404975),
    s = n(924052),
    u = n(59662),
    f = n(131051),
    d = n(996435),
    b = n(785766);
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
        x = d.Z.useField("currentPanelKey"),
        { node: S, visibleDirectory: P, accessibleDirectory: C } = (0, f.ZP)(n, null != v ? v : ""),
        w = null != y && (null == (t = P.entry(y)) ? void 0 : t.parentPanelKey) != null ? y : p,
        T = o.useMemo(() => C.get(null != x ? x : w), [x, C, w]),
        { navigateWithValidation: k } = (0, s.Cu)();
    (0, i.ZP)(() => {
        var e, t, n;
        let r = P.entry(w).parentPanelKey,
            o = null == (e = P.entry(w)) ? void 0 : e.parentTabKey,
            a = null == (t = P.entry(w)) ? void 0 : t.parentCategoryKey,
            i = null == (n = P.entry(w)) ? void 0 : n.parentAccordionKey;
        return (
            d.Z.setState({
                currentPanelKey: r,
                currentTabKeys: null != o ? new Map([[r, o]]) : new Map(),
                currentCategoryKey: a,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: w,
                    targetAccordionKey: i,
                    animateScroll: !1,
                },
                showNavigationMobile: null == y,
            }),
            () => d.Z.resetState()
        );
    }),
        o.useEffect(
            () =>
                d.Z.subscribe(
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
                        if (null == o) return void d.Z.setState({ requestedTargetKey: void 0 });
                        let a = d.Z.getField("currentTabKeys"),
                            i = null != r.parentTabKey ? new Map(a).set(o, r.parentTabKey) : a,
                            l = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === a.get(o)),
                            c = () => {
                                d.Z.setState({
                                    requestedTargetKey: void 0,
                                    currentPanelKey: r.parentPanelKey,
                                    currentTabKeys: i,
                                    currentCategoryKey: r.parentCategoryKey,
                                    disableSidebarCategoryAutoSelect: !0,
                                    navTransition: {
                                        targetKey: t,
                                        targetAccordionKey: r.parentAccordionKey,
                                        animateScroll: l,
                                    },
                                });
                            };
                        r.parentPanelKey !== n
                            ? k(() => {
                                  c(), null == m || m(o);
                              })
                            : c();
                    },
                    { equalityFn: a.X },
                ),
            [P, k, m, h],
        );
    let E = o.useMemo(
            () => ({
                visibleDirectory: P,
                accessibleDirectory: C,
            }),
            [P, C],
        ),
        N = () => k(g),
        Z = null != x ? P.get(x) : void 0;
    return (0, r.jsx)(u.j.Provider, {
        value: E,
        children: (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: S,
                    footer: O,
                    onClose: N,
                    emptyState: j,
                    searchQuery: v,
                    onSearchChange: h,
                }),
                (0, r.jsx)(l.Z, {
                    onClose: N,
                    setting: null != Z ? Z : T,
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
