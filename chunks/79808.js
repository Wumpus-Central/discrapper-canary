n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(636298),
    o = n(404975),
    a = n(924052),
    s = n(59662),
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
    let { root: g, directory: f, target: y, onClose: O, sidebarHeader: E, sidebarFooter: v } = e,
        [T, b] = i.useState(!0),
        [N, p] = i.useState(null == (t = f.entry(y)) ? void 0 : t.parentPanel),
        [I, C] = i.useState({
            target: y,
            targetAccordion: null == (n = f.entry(y)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: m,
        });
    function m() {
        C(void 0);
    }
    let { navigateWithValidation: j } = (0, a.Cu)(),
        S = {
            currentPanel: f.typedGet(N),
            navigateTo: (e) => {
                let t = f.entry(e);
                if ((null == t ? void 0 : t.parentPanel) == null) return;
                let n = {
                    target: e,
                    targetAccordion: t.parentAccordion,
                    complete: m,
                };
                if (t.parentPanel.key !== (null == N ? void 0 : N.key)) {
                    let e = t.parentPanel;
                    j(() => {
                        C(d(c({}, n), { animateScroll: !1 })), p(e);
                    });
                } else C(d(c({}, n), { animateScroll: !0 }));
            },
            navTransition: I,
            showNavigationMobile: T,
            setShowNavigationMobile: b,
        };
    return (0, r.jsx)(s.j.Provider, {
        value: S,
        children: (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsx)(o.P, {
                    root: g,
                    header: E,
                    footer: v,
                }),
                (0, r.jsx)(l.Z, {
                    onClose: () => j(O),
                    setting: S.currentPanel,
                }),
            ],
        }),
    });
}
function f(e) {
    return (0, r.jsx)(a.Ri, { children: (0, r.jsx)(g, c({}, e)) });
}
