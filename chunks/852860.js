n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(585483),
    l = n(981631),
    c = n(388032),
    u = n(435613);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = function (e) {
    var t;
    let {
            message: n,
            errorMessage: d,
            submitting: _,
            onReset: h,
            onSave: m,
            onSaveText: g,
            onResetText: E,
            onSaveButtonColor: b,
            disabled: y,
            saveButtonTooltip: O,
        } = e,
        v = i.useRef(null),
        [I, T] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                T(!0), setTimeout(() => T(!1), 1000);
            }
            return (
                s.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    s.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)("div", {
            className: u.container,
            "data-emphasized": I,
            children: (0, r.jsx)("div", {
                className: u.flexContainer,
                ref: v,
                children: (0, r.jsxs)(o.JcV, {
                    containerRef: v,
                    children: [
                        (0, r.jsx)("div", {
                            className: u.shrinkingContainer,
                            children: (0, r.jsx)("div", {
                                className: u.message,
                                children: null != (t = null != d ? d : n) ? t : c.intl.string(c.t.GP7JLC),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: u.actions,
                            children: [
                                null != h &&
                                    (0, r.jsx)(a.zx, {
                                        className: u.resetButton,
                                        size: a.zx.Sizes.SMALL,
                                        color: a.zx.Colors.PRIMARY,
                                        look: a.zx.Looks.LINK,
                                        onClick: h,
                                        children: (0, r.jsx)("span", {
                                            children: null != E ? E : c.intl.string(c.t.yBZMsb),
                                        }),
                                    }),
                                null != m
                                    ? (0, r.jsx)(o.ua7, {
                                          text: O,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.zx,
                                                  p(
                                                      f(
                                                          {
                                                              size: a.zx.Sizes.SMALL,
                                                              color: null != b ? b : a.zx.Colors.GREEN,
                                                              submitting: _,
                                                              disabled: y,
                                                              onClick: m,
                                                          },
                                                          e,
                                                      ),
                                                      { children: null != g ? g : c.intl.string(c.t.K344S0) },
                                                  ),
                                              ),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
};
