n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(493773),
    i = n(996733),
    a = n(636298),
    c = n(404975),
    s = n(924052),
    u = n(59662),
    d = n(996435),
    f = n(4640);
function b(e) {
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    var t;
    let {
            root: n,
            directory: y,
            target: j,
            defaultTarget: m,
            onClose: v,
            sidebarHeader: g,
            sidebarFooter: h,
            onPanelChange: O,
            emptyState: x,
        } = e,
        P = null != j ? j : m;
    (0, o.ZP)(() => {
        var e;
        let t = null == (e = y.entry(P)) ? void 0 : e.targetPanel;
        return (
            d.Z.setState({
                targetKey: P,
                currentPanel: t,
                showNavigationMobile: null == j,
            }),
            () => d.Z.resetState()
        );
    });
    let S = d.Z.useField("currentPanel"),
        C = d.Z.useField("targetKey"),
        [_, w] = l.useState(() => y.typedGet(S)),
        E = l.useCallback(() => k(void 0), []),
        [N, k] = l.useState({
            target: P,
            targetAccordion: null == (t = y.entry(P)) ? void 0 : t.parentAccordion,
            animateScroll: !1,
            complete: E,
        }),
        { navigateWithValidation: T } = (0, s.Cu)();
    l.useEffect(() => {
        if (null == C) return;
        let e = y.entry(C);
        if (null == e) return void i.Z.setState({ query: "" });
        if (null == e.targetPanel) return void d.Z.setState({ targetKey: void 0 });
        let t = {
            target: C,
            targetAccordion: e.parentAccordion,
            complete: E,
        };
        if (e.targetPanel.key !== (null == S ? void 0 : S.key)) {
            let n = e.targetPanel;
            T(() => {
                d.Z.setState({
                    targetKey: void 0,
                    currentPanel: n,
                    showNavigationMobile: !1,
                }),
                    k(p(b({}, t), { animateScroll: !1 })),
                    w(n),
                    null == O || O(n.key);
            });
        } else k(p(b({}, t), { animateScroll: !0 })), d.Z.setState({ targetKey: void 0 });
    }, [S, C, E, y, T, O]);
    let Z = l.useMemo(() => ({ navTransition: N }), [N]),
        D = () => T(v);
    return (0, r.jsx)(u.j.Provider, {
        value: Z,
        children: (0, r.jsxs)("div", {
            className: f.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: n,
                    header: g,
                    footer: h,
                    onClose: D,
                    emptyState: x,
                }),
                (0, r.jsx)(a.Z, {
                    onClose: D,
                    setting: null != S ? S : _,
                }),
            ],
        }),
    });
}
function j(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(y, b({}, e)) });
}
