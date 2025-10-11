n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(79116),
    l = n(481060),
    c = n(239091),
    s = n(313201),
    u = n(314897),
    d = n(785717),
    f = n(86419),
    g = n(872269),
    p = n(228168),
    b = n(388032),
    m = n(176870);
function O(e) {
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
function y(e, t) {
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
let j = (e) => {
        let { widgetTitle: t, children: n } = e,
            { isDragging: i } = (0, o.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(l.ua7, {
            "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: t }),
            text: (0, r.jsx)(x, {}),
            position: "top",
            shouldShow: !0 !== i,
            children: n,
        });
    },
    x = () =>
        (0, r.jsxs)("div", {
            className: m.dragClickTooltipText,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t["7cdwho"], {
                        emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                    }),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: b.intl.format(b.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    v = (e) => {
        let { children: t, widget: i, targetRef: a, additionalMenuItems: o } = e,
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
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
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
        return (0, r.jsx)(l.yRy, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(l.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, c.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": b.intl.string(b.t.xpSHSk),
                    children: (0, r.jsxs)(l.kSQ, {
                        children: [
                            o,
                            (0, r.jsx)(l.sNh, {
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
    h = (e) => {
        let { widget: t, className: n, buttonRef: i, additionalMenuItems: o } = e,
            c = (0, f.mR)(t),
            u = (0, s.Dt)();
        return (0, r.jsx)(j, {
            widgetTitle: c,
            children: (e) =>
                (0, r.jsx)(v, {
                    targetRef: i,
                    widget: t,
                    additionalMenuItems: o,
                    children: (t) =>
                        (0, r.jsxs)(
                            l.P3F,
                            y(
                                O(
                                    {
                                        innerRef: i,
                                        className: a()(m.dragHandleButton, n),
                                        "data-dnd-name": c,
                                        "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: c }),
                                        "aria-describedby": u,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(l.Vni, { size: "sm" }),
                                        (0, r.jsx)(l.nn4, {
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
