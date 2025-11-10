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
    var t, n;
    let {
            root: y,
            directory: j,
            target: m,
            defaultTarget: v,
            onClose: g,
            sidebarHeader: x,
            sidebarFooter: h,
            onPanelChange: O,
            emptyState: P,
        } = e,
        S = null != m && (null == (t = j.entry(m)) ? void 0 : t.targetPanelKey) != null ? m : v;
    (0, o.ZP)(() => {
        let e = j.entry(S).targetPanelKey;
        return (
            d.Z.setState({
                targetKey: S,
                currentPanelKey: e,
                showNavigationMobile: null == m,
            }),
            () => d.Z.resetState()
        );
    });
    let C = d.Z.useField("currentPanelKey"),
        _ = d.Z.useField("targetKey"),
        [w, E] = l.useState(j),
        N = l.useMemo(() => w.get(null != C ? C : S), [w, C, S]),
        k = l.useCallback(() => Z(void 0), []),
        [T, Z] = l.useState({
            target: S,
            targetAccordionKey: null == (n = j.entry(S)) ? void 0 : n.parentAccordionKey,
            animateScroll: !1,
            complete: k,
        }),
        { navigateWithValidation: D } = (0, s.Cu)();
    l.useEffect(() => {
        if (null == _) return;
        let e = j.entry(_);
        if (null == e) return void i.Z.setState({ query: "" });
        if (null == e.targetPanelKey) return void d.Z.setState({ targetKey: void 0 });
        let t = {
            target: _,
            targetAccordion: e.parentAccordionKey,
            complete: k,
        };
        if (e.targetPanelKey !== C) {
            let n = e.targetPanelKey;
            D(() => {
                d.Z.setState({
                    targetKey: void 0,
                    currentPanelKey: n,
                    showNavigationMobile: !1,
                }),
                    Z(p(b({}, t), { animateScroll: !1 })),
                    null == O || O(n);
            });
        } else Z(p(b({}, t), { animateScroll: !0 })), d.Z.setState({ targetKey: void 0 });
    }, [C, _, k, j, D, O]);
    let I = l.useMemo(() => ({ navTransition: T }), [T]),
        R = () => D(g),
        A = null != C ? j.get(C) : void 0;
    return (0, r.jsx)(u.j.Provider, {
        value: I,
        children: (0, r.jsxs)("div", {
            className: f.container,
            children: [
                (0, r.jsx)(c.P, {
                    root: y,
                    header: x,
                    footer: h,
                    onClose: R,
                    emptyState: P,
                }),
                (0, r.jsx)(a.Z, {
                    onClose: R,
                    setting: null != A ? A : N,
                }),
            ],
        }),
    });
}
function j(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(y, b({}, e)) });
}
