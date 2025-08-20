r.d(t, { Z: () => O });
var n = r(951288),
    l = r(647438),
    i = r(442837),
    a = r(481060),
    c = r(239091),
    o = r(726521),
    s = r(314897),
    u = r(86419),
    d = r(872269),
    f = r(228168),
    g = r(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function O(e) {
    let { widget: t, userId: O } = e,
        m = l.useRef(null),
        j = (e) => {
            if (e.shiftKey) {
                (0, u.y8)(t.type), (0, d.L$)(f.qb.WIDGET_REMOVED);
                return;
            }
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                    return (r) =>
                        (0, n.jsx)(
                            e,
                            p(b({}, r), {
                                userId: s.default.getId(),
                                widget: t,
                            }),
                        );
                },
                { stackingBehavior: "stack" },
            );
        },
        y = () => {
            (0, o.G1)(O, t);
        },
        v = (0, i.e7)([s.default], () => s.default.getId() === O);
    return (0, n.jsx)(a.yRy, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(a.v2r, {
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, c.Zy)(), t();
                },
                onSelect: () => {},
                "aria-label": g.intl.string(g.t.xpSHSk),
                children: (0, n.jsx)(a.kSQ, {
                    children: v
                        ? (0, n.jsx)(a.sNh, {
                              id: "remove-widget",
                              label: g.intl.string(g.t.Mm07YW),
                              action: j,
                              color: "danger",
                              icon: a.XHJ,
                          })
                        : (0, n.jsx)(a.sNh, {
                              id: "flag-widget",
                              label: g.intl.string(g.t.D4GvHB),
                              action: y,
                              color: "danger",
                              icon: a.U65,
                          }),
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(
                a.hU,
                p(b({}, e), {
                    buttonRef: m,
                    icon: a.xhG,
                    variant: "secondary",
                    "aria-label": g.intl.string(g.t.xpSHSk),
                    size: "sm",
                }),
            ),
    });
}
