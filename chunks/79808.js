n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(493773),
    i = n(996733),
    a = n(636298),
    s = n(404975),
    c = n(924052),
    u = n(59662),
    d = n(996435),
    f = n(990757);
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
function m(e, t) {
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
function v(e) {
    var t;
    let {
            root: n,
            directory: v,
            target: p,
            defaultTarget: j,
            onClose: x,
            sidebarHeader: y,
            sidebarFooter: h,
            onPanelChange: g,
            emptyState: O,
        } = e,
        C = null != p ? p : j;
    (0, o.ZP)(() => {
        var e;
        let t = null == (e = v.entry(C)) ? void 0 : e.targetPanel;
        return (
            d.Z.setState({
                targetKey: C,
                currentPanel: t,
                showNavigationMobile: null == p,
            }),
            () => d.Z.resetState()
        );
    });
    let S = d.Z.useField("currentPanel"),
        P = d.Z.useField("targetKey"),
        [_, N] = l.useState(() => v.typedGet(S)),
        E = l.useCallback(() => k(void 0), []),
        [T, k] = l.useState({
            target: C,
            targetAccordion: null == (t = v.entry(C)) ? void 0 : t.parentAccordion,
            animateScroll: !1,
            complete: E,
        }),
        { navigateWithValidation: Z } = (0, c.Cu)();
    l.useEffect(() => {
        if (null == P) return;
        let e = v.entry(P);
        if (null == e) return void i.Z.setState({ query: "" });
        if (null == e.targetPanel) return void d.Z.setState({ targetKey: void 0 });
        let t = {
            target: P,
            targetAccordion: e.parentAccordion,
            complete: E,
        };
        if (e.targetPanel.key !== (null == S ? void 0 : S.key)) {
            let n = e.targetPanel;
            Z(() => {
                d.Z.setState({
                    targetKey: void 0,
                    currentPanel: n,
                    showNavigationMobile: !1,
                }),
                    k(m(b({}, t), { animateScroll: !1 })),
                    N(n),
                    null == g || g(n.key);
            });
        } else k(m(b({}, t), { animateScroll: !0 })), d.Z.setState({ targetKey: void 0 });
    }, [S, P, E, v, Z, g]);
    let w = l.useMemo(() => ({ navTransition: T }), [T]),
        I = () => Z(x);
    return (0, r.jsx)(u.j.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: f.container,
            children: [
                (0, r.jsx)(s.P, {
                    root: n,
                    header: y,
                    footer: h,
                    onClose: I,
                    emptyState: O,
                }),
                (0, r.jsx)(a.Z, {
                    onClose: I,
                    setting: null != S ? S : _,
                }),
            ],
        }),
    });
}
function p(e) {
    return (0, r.jsx)(c.Ri, { children: (0, r.jsx)(v, b({}, e)) });
}
