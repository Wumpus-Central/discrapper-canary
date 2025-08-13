n.d(t, { Z: () => m });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(239091),
    a = n(314897),
    c = n(86419),
    s = n(247989),
    d = n(228168),
    u = n(388032);
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
function m(e) {
    let { widget: t } = e,
        m = l.useRef(null),
        g = (e) => {
            if (e.shiftKey) {
                (0, c.y8)(t.type), (0, s.L$)(d.qb.WIDGET_REMOVED);
                return;
            }
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        p(f({}, n), {
                            userId: a.default.getId(),
                            widget: t,
                        }),
                    );
            });
        };
    return (0, r.jsx)(i.yRy, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(i.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, o.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": u.intl.string(u.t.xpSHSk),
                children: (0, r.jsx)(i.kSQ, {
                    children: (0, r.jsx)(i.sNh, {
                        id: "remove-widget",
                        label: u.intl.string(u.t.Mm07YW),
                        action: g,
                        color: "danger",
                        icon: i.XHJ,
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                i.hU,
                p(f({}, e), {
                    buttonRef: m,
                    icon: i.xhG,
                    variant: "secondary",
                    "aria-label": u.intl.string(u.t.xpSHSk),
                    size: "sm",
                }),
            ),
    });
}
