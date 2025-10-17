n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(79116),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(607070),
    d = n(313201),
    f = n(314897),
    g = n(785717),
    p = n(86419),
    m = n(872269),
    b = n(228168),
    h = n(388032),
    v = n(176870);
function y(e) {
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
function j(e, t) {
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
let O = (e) => {
        let { widgetTitle: t, children: n } = e,
            i = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
            { isDragging: a } = (0, l.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(s.aML, {
            "aria-label": h.intl.formatToPlainString(h.t.HWNJJC, { widgetTitle: t }),
            text: () =>
                (0, r.jsxs)("div", {
                    className: v.dragClickTooltipText,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.intl.format(i ? h.t["zvln/v"] : h.t["7cdwho"], {
                                emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                            }),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.intl.format(h.t["4e0rMz"], {
                                emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                            }),
                        }),
                    ],
                }),
            position: "top",
            shouldShow: !0 !== a,
            children: n,
        });
    },
    x = (e) => {
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
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                j(y({}, t), {
                                    userId: f.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: o,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, r.jsx)(s.yRy, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(s.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, c.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": h.intl.string(h.t.xpSHSk),
                    children: (0, r.jsxs)(s.kSQ, {
                        children: [
                            l,
                            (0, r.jsx)(s.sNh, {
                                id: "remove-widget",
                                label: h.intl.string(h.t.Mm07YW),
                                action: u,
                                color: "danger",
                                icon: s.XHJ,
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    },
    _ = (e) => {
        let { widget: t, className: n, buttonRef: i, additionalMenuItems: l } = e,
            o = (0, p.mR)(t),
            c = (0, d.Dt)();
        return (0, r.jsx)(O, {
            widgetTitle: o,
            children: (e) =>
                (0, r.jsx)(x, {
                    targetRef: i,
                    widget: t,
                    additionalMenuItems: l,
                    children: (t) =>
                        (0, r.jsxs)(
                            s.P3F,
                            j(
                                y(
                                    {
                                        innerRef: i,
                                        className: a()(v.dragHandleButton, n),
                                        "data-dnd-name": o,
                                        "aria-label": h.intl.formatToPlainString(h.t.HWNJJC, { widgetTitle: o }),
                                        "aria-describedby": c,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(s.Vni, { size: "sm" }),
                                        (0, r.jsx)(s.nn4, {
                                            id: c,
                                            children: h.intl.string(h.t.bsuqFh),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
        });
    };
