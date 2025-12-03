n.d(t, { Z: () => p });
var r = n(54381),
    o = n(473749),
    i = n(55160),
    l = n(493773),
    a = n(636298),
    c = n(404975),
    s = n(924052),
    u = n(59662),
    d = n(131051),
    f = n(996435),
    b = n(990757);
function y(e) {
    var t;
    let {
            partialRoot: n,
            target: y,
            defaultTarget: p,
            onClose: g,
            sidebarFooter: O,
            onPanelChange: j,
            emptyState: m,
            searchQuery: v,
            onSearchChange: h,
        } = e,
        x = f.Z.useField("currentPanelKey"),
        { directory: S } = (0, d.ZP)(n, ""),
        { node: P, directory: C } = (0, d.ZP)(n, v),
        _ = null != y && (null == (t = C.entry(y)) ? void 0 : t.parentPanelKey) != null ? y : p,
        w = o.useMemo(() => S.get(null != x ? x : _), [S, x, _]),
        { navigateWithValidation: k } = (0, s.Cu)();
    (0, l.ZP)(() => {
        var e, t;
        let n = C.entry(_).parentPanelKey,
            r = null == (e = C.entry(_)) ? void 0 : e.parentCategoryKey,
            o = null == (t = C.entry(_)) ? void 0 : t.parentAccordionKey;
        return (
            f.Z.setState({
                currentPanelKey: n,
                currentCategoryKey: r,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: _,
                    targetAccordionKey: o,
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
                        let r = C.entry(t);
                        if (null == r) {
                            null == h || h("");
                            return;
                        }
                        let o = r.parentPanelKey;
                        if (null == o) return void f.Z.setState({ requestedTargetKey: void 0 });
                        let i = () => {
                            f.Z.setState({
                                requestedTargetKey: void 0,
                                currentPanelKey: r.parentPanelKey,
                                currentCategoryKey: r.parentCategoryKey,
                                disableSidebarCategoryAutoSelect: !0,
                                navTransition: {
                                    targetKey: t,
                                    targetAccordionKey: r.parentAccordionKey,
                                    animateScroll: r.parentPanelKey === n,
                                },
                            });
                        };
                        r.parentPanelKey !== n
                            ? k(() => {
                                  i(), null == j || j(o);
                              })
                            : i();
                    },
                    { equalityFn: i.X },
                ),
            [C, k, j, h],
        );
    let N = o.useMemo(
            () => ({
                directory: C,
                fallbackDirectory: S,
            }),
            [C, S],
        ),
        E = () => k(g),
        T = null != x ? C.get(x) : void 0;
    return (0, r.jsx)(u.j.Provider, {
        value: N,
        children: (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: P,
                    footer: O,
                    onClose: E,
                    emptyState: m,
                    searchQuery: v,
                    onSearchChange: h,
                }),
                (0, r.jsx)(a.Z, {
                    onClose: E,
                    setting: null != T ? T : w,
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
