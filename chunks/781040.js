r.d(t, { Z: () => v });
var n = r(951288);
r(647438);
var i = r(120356),
    o = r.n(i),
    a = r(79116),
    l = r(481060),
    c = r(239091),
    s = r(313201),
    u = r(314897),
    d = r(785717),
    f = r(86419),
    g = r(872269),
    p = r(228168),
    b = r(388032),
    m = r(176870);
function O(e) {
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
function y(e, t) {
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
let j = (e) => {
        let { widgetTitle: t, children: r } = e,
            { isDragging: i } = (0, a.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, n.jsx)(l.ua7, {
            "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: t }),
            text: (0, n.jsx)(x, {}),
            position: "top",
            shouldShow: !0 !== i,
            children: r,
        });
    },
    x = () =>
        (0, n.jsxs)("div", {
            className: m.dragClickTooltipText,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t["7cdwho"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    h = (e) => {
        let { children: t, widget: i, targetRef: o, additionalMenuItems: a } = e,
            { trackUserProfileEditAction: s } = (0, d.KZ)(),
            m = (e) => {
                if (e.shiftKey) {
                    (0, f.y8)(i.type),
                        s({
                            action: "WIDGET_REMOVED",
                            widgetEdited: i.type,
                        }),
                        (0, g.L$)(p.qb.WIDGET_REMOVED);
                    return;
                }
                (0, l.ZDy)(
                    async () => {
                        let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                y(O({}, t), {
                                    userId: u.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: s,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, n.jsx)(l.yRy, {
            targetElementRef: o,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(l.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, c.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": b.intl.string(b.t.xpSHSk),
                    children: (0, n.jsxs)(l.kSQ, {
                        children: [
                            a,
                            (0, n.jsx)(l.sNh, {
                                id: "remove-widget",
                                label: b.intl.string(b.t.Mm07YW),
                                action: m,
                                color: "danger",
                                icon: l.XHJ,
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    },
    v = (e) => {
        let { widget: t, className: r, buttonRef: i, additionalMenuItems: a } = e,
            c = (0, f.mR)(t),
            u = (0, s.Dt)();
        return (0, n.jsx)(j, {
            widgetTitle: c,
            children: (e) =>
                (0, n.jsx)(h, {
                    targetRef: i,
                    widget: t,
                    additionalMenuItems: a,
                    children: (t) =>
                        (0, n.jsxs)(
                            l.P3F,
                            y(
                                O(
                                    {
                                        innerRef: i,
                                        className: o()(m.dragHandleButton, r),
                                        "data-dnd-name": c,
                                        "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: c }),
                                        "aria-describedby": u,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, n.jsx)(l.Vni, { size: "sm" }),
                                        (0, n.jsx)(l.nn4, {
                                            id: u,
                                            children: b.intl.string(b.t.bsuqFh),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
        });
    };
