n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(493773),
    i = n(636298),
    a = n(404975),
    s = n(924052),
    c = n(59662),
    u = n(996435),
    d = n(990757);
function f(e) {
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
function b(e, t) {
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
function m(e) {
    var t;
    let {
            root: n,
            directory: m,
            target: v,
            defaultTarget: p,
            onClose: j,
            sidebarHeader: x,
            sidebarFooter: y,
            onPanelChange: h,
            emptyState: g,
        } = e,
        O = null != v ? v : p;
    (0, o.ZP)(() => {
        var e;
        let t = null == (e = m.entry(O)) ? void 0 : e.targetPanel;
        return (
            u.Z.setState({
                targetKey: O,
                currentPanel: t,
                showNavigationMobile: null == v,
            }),
            () => u.Z.resetState()
        );
    });
    let C = u.Z.useField("currentPanel"),
        S = u.Z.useField("targetKey"),
        [P, _] = l.useState(() => m.typedGet(C)),
        N = l.useCallback(() => T(void 0), []),
        [E, T] = l.useState({
            target: O,
            targetAccordion: null == (t = m.entry(O)) ? void 0 : t.parentAccordion,
            animateScroll: !1,
            complete: N,
        }),
        { navigateWithValidation: k } = (0, s.Cu)();
    l.useEffect(() => {
        let e = null != S ? m.entry(S) : void 0;
        if (null == S || (null == e ? void 0 : e.targetPanel) == null) return void u.Z.setState({ targetKey: void 0 });
        let t = {
            target: S,
            targetAccordion: e.parentAccordion,
            complete: N,
        };
        if (e.targetPanel.key !== (null == C ? void 0 : C.key)) {
            let n = e.targetPanel;
            k(() => {
                u.Z.setState({
                    targetKey: void 0,
                    currentPanel: n,
                    showNavigationMobile: !1,
                }),
                    T(b(f({}, t), { animateScroll: !1 })),
                    _(n),
                    null == h || h(n.key);
            });
        } else T(b(f({}, t), { animateScroll: !0 })), u.Z.setState({ targetKey: void 0 });
    }, [C, S, N, m, k, h]);
    let Z = l.useMemo(() => ({ navTransition: E }), [E]),
        w = () => k(j);
    return (0, r.jsx)(c.j.Provider, {
        value: Z,
        children: (0, r.jsxs)("div", {
            className: d.container,
            children: [
                (0, r.jsx)(a.P, {
                    root: n,
                    header: x,
                    footer: y,
                    onClose: w,
                    emptyState: g,
                }),
                (0, r.jsx)(i.Z, {
                    onClose: w,
                    setting: null != C ? C : P,
                }),
            ],
        }),
    });
}
function v(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(m, f({}, e)) });
}
