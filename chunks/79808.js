n.d(t, { Z: () => p });
var r = n(54381),
    o = n(473749),
    i = n(55160),
    l = n(493773),
    a = n(636298),
    c = n(404975),
    s = n(924052),
    u = n(59662),
    f = n(131051),
    d = n(996435),
    b = n(990757);
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
        _ = null != y && (null == (t = P.entry(y)) ? void 0 : t.parentPanelKey) != null ? y : p,
        w = o.useMemo(() => C.get(null != x ? x : _), [x, C, _]),
        { navigateWithValidation: k } = (0, s.Cu)();
    (0, l.ZP)(() => {
        var e, t;
        let n = P.entry(_).parentPanelKey,
            r = null == (e = P.entry(_)) ? void 0 : e.parentCategoryKey,
            o = null == (t = P.entry(_)) ? void 0 : t.parentAccordionKey;
        return (
            d.Z.setState({
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
                        let i = () => {
                            d.Z.setState({
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
                                  i(), null == m || m(o);
                              })
                            : i();
                    },
                    { equalityFn: i.X },
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
        T = null != x ? P.get(x) : void 0;
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
                (0, r.jsx)(a.Z, {
                    onClose: N,
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
