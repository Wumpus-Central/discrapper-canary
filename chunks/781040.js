r.d(t, { Z: () => _ });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    o = r(79116),
    l = r(442837),
    c = r(481060),
    s = r(239091),
    u = r(607070),
    d = r(313201),
    g = r(314897),
    f = r(785717),
    p = r(86419),
    b = r(872269),
    m = r(228168),
    O = r(388032),
    y = r(176870);
function j(e) {
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
function x(e, t) {
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
let v = (e) => {
        let { widgetTitle: t, children: r } = e,
            i = (0, l.e7)([u.Z], () => u.Z.keyboardModeEnabled),
            { isDragging: a } = (0, o.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, n.jsx)(c.aML, {
            "aria-label": O.intl.formatToPlainString(O.t.HWNJJC, { widgetTitle: t }),
            text: () =>
                (0, n.jsxs)("div", {
                    className: y.dragClickTooltipText,
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.format(i ? O.t["zvln/v"] : O.t["7cdwho"], {
                                emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                            }),
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: O.intl.format(O.t["4e0rMz"], {
                                emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                            }),
                        }),
                    ],
                }),
            position: "top",
            shouldShow: !0 !== a,
            children: r,
        });
    },
    h = (e) => {
        let { children: t, widget: i, targetRef: a, additionalMenuItems: o } = e,
            { trackUserProfileEditAction: l } = (0, f.KZ)(),
            u = (e) => {
                if (e.shiftKey) {
                    (0, p.y8)(i.type),
                        l({
                            action: "WIDGET_REMOVED",
                            widgetEdited: i.type,
                        }),
                        (0, b.L$)(m.qb.WIDGET_REMOVED);
                    return;
                }
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                x(j({}, t), {
                                    userId: g.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: l,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, n.jsx)(c.yRy, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(c.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, s.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": O.intl.string(O.t.xpSHSk),
                    children: (0, n.jsxs)(c.kSQ, {
                        children: [
                            o,
                            (0, n.jsx)(c.sNh, {
                                id: "remove-widget",
                                label: O.intl.string(O.t.Mm07YW),
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
    },
    _ = (e) => {
        let { widget: t, className: r, buttonRef: i, additionalMenuItems: o } = e,
            l = (0, p.mR)(t),
            s = (0, d.Dt)();
        return (0, n.jsx)(v, {
            widgetTitle: l,
            children: (e) =>
                (0, n.jsx)(h, {
                    targetRef: i,
                    widget: t,
                    additionalMenuItems: o,
                    children: (t) =>
                        (0, n.jsxs)(
                            c.P3F,
                            x(
                                j(
                                    {
                                        innerRef: i,
                                        className: a()(y.dragHandleButton, r),
                                        "data-dnd-name": l,
                                        "aria-label": O.intl.formatToPlainString(O.t.HWNJJC, { widgetTitle: l }),
                                        "aria-describedby": s,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, n.jsx)(c.Vni, { size: "sm" }),
                                        (0, n.jsx)(c.nn4, {
                                            id: s,
                                            children: O.intl.string(O.t.bsuqFh),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
        });
    };
