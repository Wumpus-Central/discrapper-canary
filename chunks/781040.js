n.d(t, { Z: () => x });
var r = n(951288);
n(647438);
var i = n(120356),
    o = n.n(i),
    a = n(79116),
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
            { isDragging: i } = (0, a.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(l.ua7, {
            "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: t }),
            text: (0, r.jsx)(v, {}),
            position: "top",
            shouldShow: !0 !== i,
            children: n,
        });
    },
    v = () =>
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
    h = (e) => {
        let { children: t, widget: i, targetRef: o } = e,
            { trackUserProfileEditAction: a } = (0, d.KZ)(),
            s = (e) => {
                if (e.shiftKey) {
                    (0, f.y8)(i.type),
                        a({
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
                                    trackUserProfileEditAction: a,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, r.jsx)(l.yRy, {
            targetElementRef: o,
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
                    children: (0, r.jsx)(l.kSQ, {
                        children: (0, r.jsx)(l.sNh, {
                            id: "remove-widget",
                            label: b.intl.string(b.t.Mm07YW),
                            action: s,
                            color: "danger",
                            icon: l.XHJ,
                        }),
                    }),
                });
            },
            children: t,
        });
    },
    x = (e) => {
        let { widget: t, className: n, buttonRef: i } = e,
            a = (0, f.mR)(t),
            c = (0, s.Dt)();
        return (0, r.jsx)(j, {
            widgetTitle: a,
            children: (e) =>
                (0, r.jsx)(h, {
                    targetRef: i,
                    widget: t,
                    children: (t) =>
                        (0, r.jsxs)(
                            l.P3F,
                            y(
                                O(
                                    {
                                        innerRef: i,
                                        className: o()(m.dragHandleButton, n),
                                        "data-dnd-name": a,
                                        "aria-label": b.intl.formatToPlainString(b.t.HWNJJC, { widgetTitle: a }),
                                        "aria-describedby": c,
                                    },
                                    e,
                                    t,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(l.Vni, { size: "sm" }),
                                        (0, r.jsx)(l.nn4, {
                                            id: c,
                                            children: b.intl.string(b.t.bsuqFh),
                                        }),
                                    ],
                                },
                            ),
                        ),
                }),
        });
    };
