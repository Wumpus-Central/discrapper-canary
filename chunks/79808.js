n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(636298),
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
function g(e) {
    var t, n;
    let { root: g, directory: f, target: y, onClose: v, sidebarHeader: E, sidebarFooter: O } = e,
        [N, b] = l.useState(!0),
        [T, _] = l.useState(null == (t = f.entry(y)) ? void 0 : t.parentPanel),
        [I, p] = l.useState({
            target: y,
            targetAccordion: null == (n = f.entry(y)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: m,
        });
    function m() {
        p(void 0);
    }
    let { navigateWithValidation: S } = (0, s.Cu)(),
        x = {
            currentPanel: f.get(T),
            navigateTo: (e) => {
                let t = f.entry(e);
                if ((null == t ? void 0 : t.parentPanel) == null) return;
                let n = {
                    target: e,
                    targetAccordion: t.parentAccordion,
                    complete: m,
                };
                if (t.parentPanel.key !== (null == T ? void 0 : T.key)) {
                    let e = t.parentPanel;
                    S(() => {
                        p(d(c({}, n), { animateScroll: !1 })), _(e);
                    });
                } else p(d(c({}, n), { animateScroll: !0 }));
            },
            navTransition: I,
            showNavigationMobile: N,
            setShowNavigationMobile: b,
        };
    return (0, r.jsx)(a.j.Provider, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsx)(o.P, {
                    root: g,
                    header: E,
                    footer: O,
                }),
                (0, r.jsx)(i.Z, {
                    onClose: () => S(v),
                    setting: x.currentPanel,
                }),
            ],
        }),
    });
}
function f(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(g, c({}, e)) });
}
