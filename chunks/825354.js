n.d(t, { Z: () => f });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(239091),
    a = n(314897),
    c = n(86419),
    s = n(388032);
function d(e) {
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
function u(e, t) {
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
    let { widget: t } = e,
        f = l.useRef(null),
        p = (e) => {
            if (e.shiftKey) return void (0, c.y8)(t.type);
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        u(d({}, n), {
                            userId: a.default.getId(),
                            widget: t,
                        }),
                    );
            });
        };
    return (0, r.jsx)(i.yRy, {
        targetElementRef: f,
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
                "aria-label": s.intl.string(s.t.xpSHSk),
                children: (0, r.jsx)(i.kSQ, {
                    children: (0, r.jsx)(i.sNh, {
                        id: "remove-widget",
                        label: s.intl.string(s.t.Mm07YW),
                        action: p,
                        color: "danger",
                        icon: i.XHJ,
                    }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                i.hU,
                u(d({}, e), {
                    buttonRef: f,
                    icon: i.xhG,
                    variant: "secondary",
                    "aria-label": s.intl.string(s.t.xpSHSk),
                    size: "sm",
                }),
            ),
    });
}
