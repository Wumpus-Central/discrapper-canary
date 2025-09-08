r.d(t, { Z: () => h });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    o = r(323946),
    a = r(481060),
    c = r(239091),
    s = r(313201),
    u = r(314897),
    d = r(785717),
    g = r(86419),
    f = r(872269),
    b = r(228168),
    p = r(388032),
    O = r(176870);
function y(e) {
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
function j(e, t) {
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
let m = (e) => {
        let { widgetTitle: t, children: r } = e,
            { isDragging: i } = (0, o.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, n.jsx)(a.ua7, {
            "aria-label": p.intl.formatToPlainString(p.t.HWNJJC, { widgetTitle: t }),
            text: (0, n.jsx)(v, {}),
            position: "top",
            shouldShow: !0 !== i,
            children: r,
        });
    },
    v = () =>
        (0, n.jsxs)("div", {
            className: O.dragClickTooltipText,
            children: [
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: p.intl.format(p.t["7cdwho"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: p.intl.format(p.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    x = (e) => {
        let { children: t, widget: i, targetRef: l } = e,
            { trackUserProfileEditAction: o } = (0, d.KZ)(),
            s = (e) => {
                if (e.shiftKey) {
                    (0, g.y8)(i.type),
                        o({
                            action: "WIDGET_REMOVED",
                            widgetEdited: i.type,
                        }),
                        (0, f.L$)(b.qb.WIDGET_REMOVED);
                    return;
                }
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                j(y({}, t), {
                                    userId: u.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: o,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, n.jsx)(a.yRy, {
            targetElementRef: l,
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
                    "aria-label": p.intl.string(p.t.xpSHSk),
                    children: (0, n.jsx)(a.kSQ, {
                        children: (0, n.jsx)(a.sNh, {
                            id: "remove-widget",
                            label: p.intl.string(p.t.Mm07YW),
                            action: s,
                            color: "danger",
                            icon: a.XHJ,
                        }),
                    }),
                });
            },
            children: t,
        });
    },
    h = (e) => {
        let { widget: t, className: r, buttonRef: i } = e,
            o = (0, g.mR)(t),
            c = (0, s.Dt)();
        return (0, n.jsx)(m, {
            widgetTitle: o,
            children: (e) =>
                (0, n.jsx)(x, {
                    targetRef: i,
                    widget: t,
                    children: (t) =>
                        (0, n.jsxs)(
                            a.P3F,
                            j(
                                y(
                                    {
                                        innerRef: i,
                                        className: l()(O.dragHandleButton, r),
                                        "data-dnd-name": o,
                                        "aria-label": p.intl.formatToPlainString(p.t.HWNJJC, { widgetTitle: o }),
                                        "aria-describedby": c,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, n.jsx)(a.Vni, { size: "sm" }),
                                        (0, n.jsx)(a.nn4, {
                                            id: c,
                                            children: p.intl.string(p.t.bsuqFh),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
        });
    };
