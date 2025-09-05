n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(636298),
    o = n(404975),
    s = n(924052),
    a = n(59662),
    u = n(4640);
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
    let { root: g, directory: f, target: y, onClose: O, sidebarHeader: v, sidebarFooter: E } = e,
        [b, N] = i.useState(!0),
        [p, T] = i.useState(null == (t = f.entry(y)) ? void 0 : t.parentPanel),
        [_, j] = i.useState({
            target: y,
            targetAccordion: null == (n = f.entry(y)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: I,
        });
    function I() {
        j(void 0);
    }
    let { navigateWithValidation: m } = (0, s.Cu)(),
        x = {
            currentPanel: f.get(p),
            navigateTo: (e) => {
                let t = f.entry(e);
                if ((null == t ? void 0 : t.parentPanel) == null) return;
                let n = {
                    target: e,
                    targetAccordion: t.parentAccordion,
                    complete: I,
                };
                if (t.parentPanel.key !== (null == p ? void 0 : p.key)) {
                    let e = t.parentPanel;
                    m(() => {
                        j(d(c({}, n), { animateScroll: !1 })), T(e);
                    });
                } else j(d(c({}, n), { animateScroll: !0 }));
            },
            navTransition: _,
            showNavigationMobile: b,
            setShowNavigationMobile: N,
        };
    return (0, r.jsx)(a.j.Provider, {
        value: x,
        children: (0, r.jsxs)("div", {
            className: u.container,
            children: [
                (0, r.jsx)(o.P, {
                    root: g,
                    header: v,
                    footer: E,
                }),
                (0, r.jsx)(l.Z, {
                    onClose: () => m(O),
                    setting: x.currentPanel,
                }),
            ],
        }),
    });
}
function f(e) {
    return (0, r.jsx)(s.Ri, { children: (0, r.jsx)(g, c({}, e)) });
}
