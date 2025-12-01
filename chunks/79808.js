n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(55160),
    o = n(493773),
    a = n(996733),
    s = n(636298),
    c = n(404975),
    u = n(924052),
    d = n(59662),
    f = n(996435),
    p = n(990757);
function b(e) {
    var t;
    let {
            root: n,
            directory: b,
            target: y,
            defaultTarget: g,
            onClose: v,
            sidebarHeader: m,
            sidebarFooter: h,
            onPanelChange: x,
            emptyState: j,
        } = e,
        O = null != y && (null == (t = b.entry(y)) ? void 0 : t.parentPanelKey) != null ? y : g,
        C = f.Z.useField("currentPanelKey"),
        [P, S] = l.useState(b),
        _ = l.useMemo(() => P.get(null != C ? C : O), [P, C, O]),
        { navigateWithValidation: E } = (0, u.Cu)();
    (0, o.ZP)(() => {
        var e, t;
        let n = b.entry(O).parentPanelKey,
            r = null == (e = b.entry(O)) ? void 0 : e.parentCategoryKey,
            l = null == (t = b.entry(O)) ? void 0 : t.parentAccordionKey;
        return (
            f.Z.setState({
                currentPanelKey: n,
                currentCategoryKey: r,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: O,
                    targetAccordionKey: l,
                    animateScroll: !1,
                },
                showNavigationMobile: null == y,
            }),
            () => f.Z.resetState()
        );
    }),
        l.useEffect(
            () =>
                f.Z.subscribe(
                    (e) => ({
                        requestedTargetKey: e.requestedTargetKey,
                        currentPanelKey: e.currentPanelKey,
                    }),
                    (e) => {
                        let { requestedTargetKey: t, currentPanelKey: n } = e;
                        if (null == t) return;
                        let r = b.entry(t);
                        if (null == r) return void a.Z.setState({ query: "" });
                        let l = r.parentPanelKey;
                        if (null == l) return void f.Z.setState({ requestedTargetKey: void 0 });
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
                            ? E(() => {
                                  i(), null == x || x(l);
                              })
                            : i();
                    },
                    { equalityFn: i.X },
                ),
            [b, E, x],
        );
    let w = l.useMemo(
            () => ({
                directory: b,
                fallbackDirectory: P,
            }),
            [b, P],
        ),
        k = () => E(v),
        N = null != C ? b.get(C) : void 0;
    return (0, r.jsx)(d.j.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: p.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: n,
                    header: m,
                    footer: h,
                    onClose: k,
                    emptyState: j,
                }),
                (0, r.jsx)(s.Z, {
                    onClose: k,
                    setting: null != N ? N : _,
                }),
            ],
        }),
    });
}
function y(e) {
    return (0, r.jsx)(u.Ri, {
        children: (0, r.jsx)(
            b,
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
