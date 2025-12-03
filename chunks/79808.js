n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(55160),
    l = n(493773),
    a = n(996733),
    c = n(636298),
    s = n(404975),
    u = n(924052),
    d = n(59662),
    f = n(996435),
    b = n(990757);
function y(e) {
    var t;
    let {
            root: n,
            directory: y,
            target: p,
            defaultTarget: g,
            onClose: O,
            sidebarHeader: j,
            sidebarFooter: v,
            onPanelChange: m,
            emptyState: h,
        } = e,
        x = null != p && (null == (t = y.entry(p)) ? void 0 : t.parentPanelKey) != null ? p : g,
        S = f.Z.useField("currentPanelKey"),
        [P, C] = o.useState(y),
        _ = o.useMemo(() => P.get(null != S ? S : x), [P, S, x]),
        { navigateWithValidation: w } = (0, u.Cu)();
    (0, l.ZP)(() => {
        var e, t;
        let n = y.entry(x).parentPanelKey,
            r = null == (e = y.entry(x)) ? void 0 : e.parentCategoryKey,
            o = null == (t = y.entry(x)) ? void 0 : t.parentAccordionKey;
        return (
            f.Z.setState({
                currentPanelKey: n,
                currentCategoryKey: r,
                disableSidebarCategoryAutoSelect: !0,
                navTransition: {
                    targetKey: x,
                    targetAccordionKey: o,
                    animateScroll: !1,
                },
                showNavigationMobile: null == p,
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
                        let r = y.entry(t);
                        if (null == r) return void a.Z.setState({ query: "" });
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
                            ? w(() => {
                                  i(), null == m || m(o);
                              })
                            : i();
                    },
                    { equalityFn: i.X },
                ),
            [y, w, m],
        );
    let k = o.useMemo(
            () => ({
                directory: y,
                fallbackDirectory: P,
            }),
            [y, P],
        ),
        N = () => w(O),
        E = null != S ? y.get(S) : void 0;
    return (0, r.jsx)(d.j.Provider, {
        value: k,
        children: (0, r.jsxs)("div", {
            className: b.container,
            children: [
                (0, r.jsx)(s.P, {
                    root: n,
                    header: j,
                    footer: v,
                    onClose: N,
                    emptyState: h,
                }),
                (0, r.jsx)(c.Z, {
                    onClose: N,
                    setting: null != E ? E : _,
                }),
            ],
        }),
    });
}
function p(e) {
    return (0, r.jsx)(u.Ri, {
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
