n.d(t, { Z: () => b });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(239091),
    c = n(726521),
    s = n(314897),
    d = n(86419),
    u = n(872269),
    f = n(228168),
    p = n(388032);
function m(e) {
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
function g(e, t) {
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
function b(e) {
    let { widget: t, userId: b } = e,
        j = l.useRef(null),
        y = (e) => {
            if (e.shiftKey) {
                (0, d.y8)(t.type), (0, u.L$)(f.qb.WIDGET_REMOVED);
                return;
            }
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        g(m({}, n), {
                            userId: s.default.getId(),
                            widget: t,
                        }),
                    );
            });
        },
        O = () => {
            (0, c.G1)(b, t);
        },
        x = (0, i.e7)([s.default], () => s.default.getId() === b);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: j,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, a.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": p.intl.string(p.t.xpSHSk),
                children: (0, r.jsx)(o.kSQ, {
                    children: x
                        ? (0, r.jsx)(o.sNh, {
                              id: "remove-widget",
                              label: p.intl.string(p.t.Mm07YW),
                              action: y,
                              color: "danger",
                              icon: o.XHJ,
                          })
                        : (0, r.jsx)(o.sNh, {
                              id: "flag-widget",
                              label: p.intl.string(p.t.D4GvHB),
                              action: O,
                              color: "danger",
                              icon: o.U65,
                          }),
                }),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                o.hU,
                g(m({}, e), {
                    buttonRef: j,
                    icon: o.xhG,
                    variant: "secondary",
                    "aria-label": p.intl.string(p.t.xpSHSk),
                    size: "sm",
                }),
            ),
    });
}
