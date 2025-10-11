n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(636298),
    i = n(404975),
    a = n(924052),
    s = n(59662),
    c = n(990757);
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
    let {
            root: m,
            directory: b,
            target: p,
            onClose: j,
            sidebarHeader: x,
            sidebarFooter: v,
            onPanelChange: y,
            emptyState: h,
        } = e,
        [g, O] = l.useState(!0),
        [C, S] = l.useState(null == (t = b.entry(p)) ? void 0 : t.targetPanel),
        [_, P] = l.useState(() => b.typedGet(C)),
        E = l.useCallback(() => T(void 0), []),
        [N, T] = l.useState({
            target: p,
            targetAccordion: null == (n = b.entry(p)) ? void 0 : n.parentAccordion,
            animateScroll: !1,
            complete: E,
        }),
        { navigateWithValidation: k } = (0, a.Cu)(),
        w = l.useMemo(
            () => ({
                currentPanel: b.typedGet(C),
                navigateTo: (e) => {
                    let t = b.entry(e);
                    if ((null == t ? void 0 : t.targetPanel) == null) return;
                    let n = {
                        target: e,
                        targetAccordion: t.parentAccordion,
                        complete: E,
                    };
                    if (t.targetPanel.key !== (null == C ? void 0 : C.key)) {
                        let e = t.targetPanel;
                        k(() => {
                            T(d(u({}, n), { animateScroll: !1 })), P(e), S(e), null == y || y(e.key);
                        });
                    } else T(d(u({}, n), { animateScroll: !0 }));
                },
                navTransition: N,
                showNavigationMobile: g,
                setShowNavigationMobile: O,
            }),
            [b, C, N, g, E, k, y],
        ),
        Z = () => k(j);
    return (0, r.jsx)(s.j.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: c.container,
            children: [
                (0, r.jsx)(i.P, {
                    root: m,
                    header: x,
                    footer: v,
                    onClose: Z,
                    emptyState: h,
                }),
                (0, r.jsx)(o.Z, {
                    onClose: Z,
                    setting: null != (f = w.currentPanel) ? f : _,
                }),
            ],
        }),
    });
}
function m(e) {
    return (0, r.jsx)(a.Ri, { children: (0, r.jsx)(f, u({}, e)) });
}
