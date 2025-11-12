n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(79116),
    o = n(442837),
    c = n(481060),
    s = n(239091),
    u = n(607070),
    d = n(313201),
    f = n(314897),
    g = n(785717),
    p = n(86419),
    m = n(872269),
    b = n(228168),
    h = n(388032),
    y = n(680604);
function v(e) {
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
function O(e, t) {
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
function j(e) {
    let { widget: t, className: n, buttonRef: i, additionalMenuItems: l } = e,
        o = (0, p.mR)(t),
        s = (0, d.Dt)();
    return (0, r.jsx)(x, {
        children: (e) =>
            (0, r.jsx)(_, {
                targetRef: i,
                widget: t,
                additionalMenuItems: l,
                children: (t) =>
                    (0, r.jsxs)(
                        c.P3F,
                        O(
                            v(
                                {
                                    innerRef: i,
                                    className: a()(y.button, n),
                                    "data-dnd-name": o,
                                    "aria-label": h.intl.formatToPlainString(h.t.HWNJJN, { widgetTitle: o }),
                                    "aria-describedby": s,
                                    "aria-keyshortcuts": "Control+D, Meta+D",
                                },
                                e,
                                t,
                            ),
                            {
                                children: [
                                    (0, r.jsx)(c.Vni, { size: "sm" }),
                                    (0, r.jsx)(c.nn4, {
                                        id: s,
                                        children: h.intl.string(h.t.bsuqFn),
                                    }),
                                ],
                            },
                        ),
                    ),
            }),
    });
}
let x = (e) => {
        let { children: t } = e,
            n = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
            { isDragging: i } = (0, l.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(c.aML, {
            "aria-label": !1,
            text: () =>
                (0, r.jsxs)("div", {
                    className: y.tooltipText,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: h.intl.format(n ? h.t["zvln/l"] : h.t["7cdwhg"], {
                                emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                            }),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: h.intl.format(h.t["4e0rM4"], {
                                emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                            }),
                        }),
                    ],
                }),
            position: "top",
            shouldShow: !0 !== i,
            children: t,
        });
    },
    _ = (e) => {
        let { children: t, widget: i, targetRef: a, additionalMenuItems: l } = e,
            { trackUserProfileEditAction: o } = (0, g.KZ)(),
            u = (e) => {
                if (e.shiftKey) {
                    (0, p.y8)(i.type),
                        o({
                            action: "WIDGET_REMOVED",
                            widgetEdited: i.type,
                        }),
                        (0, m.L$)(b.qb.WIDGET_REMOVED);
                    return;
                }
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                O(v({}, t), {
                                    userId: f.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: o,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, r.jsx)(c.yRy, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(c.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, s.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": h.intl.string(h.t.xpSHSk),
                    className: y.menu,
                    children: (0, r.jsxs)(c.kSQ, {
                        children: [
                            l,
                            (0, r.jsx)(c.sNh, {
                                id: "remove-widget",
                                label: h.intl.string(h.t.Mm07Yc),
                                action: u,
                                color: "danger",
                                icon: c.XHJ,
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
