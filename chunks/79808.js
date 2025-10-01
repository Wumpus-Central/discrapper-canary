n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(636298),
    i = n(404975),
    a = n(924052),
    s = n(59662),
    c = n(4640);
function u(e) {
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
function d(e, t) {
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
function f(e) {
    var t, n, f;
    let { root: b, directory: m, target: p, onClose: j, sidebarHeader: x, sidebarFooter: v, onPanelChange: y } = e,
        [g, h] = o.useState(!0),
        [O, C] = o.useState(null == (t = m.entry(p)) ? void 0 : t.parentPanel),
        [_, P] = o.useState(() => m.typedGet(O)),
        S = o.useCallback(() => N(void 0), []),
        [E, N] = o.useState({
            target: p,
            targetAccordion: null == (n = m.entry(p)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: S,
        }),
        { navigateWithValidation: T } = (0, a.Cu)(),
        k = o.useMemo(
            () => ({
                currentPanel: m.typedGet(O),
                navigateTo: (e) => {
                    let t = m.entry(e);
                    if ((null == t ? void 0 : t.parentPanel) == null) return;
                    let n = {
                        target: e,
                        targetAccordion: t.parentAccordion,
                        complete: S,
                    };
                    if (t.parentPanel.key !== (null == O ? void 0 : O.key)) {
                        let e = t.parentPanel;
                        T(() => {
                            N(d(u({}, n), { animateScroll: !1 })), P(e), C(e), null == y || y(e.key);
                        });
                    } else N(d(u({}, n), { animateScroll: !0 }));
                },
                navTransition: E,
                showNavigationMobile: g,
                setShowNavigationMobile: h,
            }),
            [m, O, E, g, S, T, y],
        ),
        w = () => T(j);
    return (0, r.jsx)(s.j.Provider, {
        value: k,
        children: (0, r.jsxs)("div", {
            className: c.container,
            children: [
                (0, r.jsx)(i.P, {
                    root: b,
                    header: x,
                    footer: v,
                    onClose: w,
                }),
                (0, r.jsx)(l.Z, {
                    onClose: w,
                    setting: null != (f = k.currentPanel) ? f : _,
                }),
            ],
        }),
    });
}
function b(e) {
    return (0, r.jsx)(a.Ri, { children: (0, r.jsx)(f, u({}, e)) });
}
