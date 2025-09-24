n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(636298),
    o = n(404975),
    s = n(924052),
    a = n(59662),
    u = n(990757);
function c(e) {
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
    let { root: g, directory: y, target: O, onClose: E, sidebarHeader: b, sidebarFooter: p } = e,
        [v, T] = i.useState(!0),
        [j, N] = i.useState(null == (t = y.entry(O)) ? void 0 : t.parentPanel),
        [S, m] = i.useState(() => y.typedGet(j)),
        C = i.useCallback(() => P(void 0), []),
        [_, P] = i.useState({
            target: O,
            targetAccordion: null == (n = y.entry(O)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: C,
        }),
        { navigateWithValidation: x } = (0, s.Cu)(),
        I = i.useMemo(
            () => ({
                currentPanel: y.typedGet(j),
                navigateTo: (e) => {
                    let t = y.entry(e);
                    if ((null == t ? void 0 : t.parentPanel) == null) return;
                    let n = {
                        target: e,
                        targetAccordion: t.parentAccordion,
                        complete: C,
                    };
                    if (t.parentPanel.key !== (null == j ? void 0 : j.key)) {
                        let e = t.parentPanel;
                        x(() => {
                            P(d(c({}, n), { animateScroll: !1 })), m(e), N(e);
                        });
                    } else P(d(c({}, n), { animateScroll: !0 }));
                },
                navTransition: _,
                showNavigationMobile: v,
                setShowNavigationMobile: T,
            }),
            [y, j, _, v, C, x],
        );
    return (0, r.jsx)(a.j.Provider, {
        value: I,
        children: (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsx)(o.P, {
                    root: g,
                    header: b,
                    footer: p,
                }),
                (0, r.jsx)(l.Z, {
                    onClose: () => x(E),
                    setting: null != (f = I.currentPanel) ? f : S,
                }),
            ],
        }),
    });
}
function g(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(f, c({}, e)) });
}
