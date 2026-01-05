n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(505805),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(239091),
    d = n(607070),
    f = n(313201),
    g = n(314897),
    p = n(785717),
    b = n(86419),
    m = n(872269),
    h = n(228168),
    y = n(388032),
    v = n(203742);
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
function x(e) {
    let { widget: t, className: n, buttonRef: i, additionalMenuItems: l } = e,
        o = (0, b.mR)(t),
        c = (0, f.Dt)();
    return (0, r.jsx)(I, {
        targetRef: i,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, r.jsx)(P, {
                children: (0, r.jsxs)(
                    s.P3F,
                    j(
                        O(
                            {
                                innerRef: i,
                                className: a()(v.button, n),
                                "data-dnd-name": o,
                                "aria-label": y.intl.formatToPlainString(y.t.HWNJJN, { widgetTitle: o }),
                                "aria-describedby": c,
                                "aria-keyshortcuts": "Control+D, Meta+D",
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, r.jsx)(s.Vni, { size: "sm" }),
                                (0, r.jsx)(s.nn4, {
                                    id: c,
                                    children: y.intl.string(y.t.bsuqFn),
                                }),
                            ],
                        },
                    ),
                ),
            }),
    });
}
let P = (e) => {
        let { children: t } = e,
            n = (0, o.e7)([d.Z], () => d.Z.keyboardModeEnabled),
            { isDragging: i } = (0, l.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(c.u, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: v.tooltipText,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: y.intl.format(n ? y.t["zvln/l"] : y.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: y.intl.format(y.t["4e0rM4"], {
                            emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                        }),
                    }),
                ],
            }),
            position: "top",
            shouldShow: !0 !== i,
            ariaHidden: !0,
            children: t,
        });
    },
    I = (e) => {
        let { children: t, widget: i, targetRef: a, additionalMenuItems: l } = e,
            { trackUserProfileEditAction: o } = (0, p.KZ)(),
            c = (e) => {
                if (e.shiftKey) {
                    (0, b.y8)(i.type),
                        o(O({ action: "WIDGET_REMOVED" }, i.getProfileEditAnalyticsOptions())),
                        (0, m.L$)(h.qb.WIDGET_REMOVED);
                    return;
                }
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                j(O({}, t), {
                                    userId: g.default.getId(),
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
                        (0, u.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": y.intl.string(y.t.xpSHSk),
                    className: v.menu,
                    children: (0, r.jsxs)(s.kSQ, {
                        children: [
                            l,
                            (0, r.jsx)(s.sNh, {
                                id: "remove-widget",
                                label: y.intl.string(y.t.Mm07Yc),
                                action: c,
                                color: "danger",
                                icon: s.XHJ,
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
