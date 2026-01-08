n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(505805),
    o = n(442837),
    c = n(681715),
    s = n(481060),
    u = n(239091),
    d = n(607070),
    f = n(313201),
    g = n(314897),
    p = n(785717),
    m = n(86419),
    b = n(872269),
    y = n(228168),
    j = n(388032),
    h = n(203742);
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
function v(e, t) {
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
    let { widget: t, className: n, buttonRef: i, additionalMenuItems: a } = e,
        o = (0, m.mR)(t),
        c = (0, f.Dt)();
    return (0, r.jsx)(I, {
        targetRef: i,
        widget: t,
        additionalMenuItems: a,
        children: (e) =>
            (0, r.jsx)(P, {
                children: (0, r.jsxs)(
                    s.P3F,
                    v(
                        O(
                            {
                                innerRef: i,
                                className: l()(h.button, n),
                                "data-dnd-name": o,
                                "aria-label": j.intl.formatToPlainString(j.t.HWNJJN, { widgetTitle: o }),
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
                                    children: j.intl.string(j.t.bsuqFn),
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
            { isDragging: i } = (0, a.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(c.u, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: h.tooltipText,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: j.intl.format(n ? j.t["zvln/l"] : j.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: j.intl.format(j.t["4e0rM4"], {
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
        let { children: t, widget: i, targetRef: l, additionalMenuItems: a } = e,
            { trackUserProfileEditAction: o } = (0, p.KZ)(),
            c = (e) => {
                if (e.shiftKey) {
                    (0, m.y8)(i),
                        o(O({ action: "WIDGET_REMOVED" }, i.getProfileEditAnalyticsOptions())),
                        (0, b.L$)(y.qb.WIDGET_REMOVED);
                    return;
                }
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                v(O({}, t), {
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
            targetElementRef: l,
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
                    "aria-label": j.intl.string(j.t.xpSHSk),
                    className: h.menu,
                    children: (0, r.jsxs)(s.kSQ, {
                        children: [
                            a,
                            (0, r.jsx)(s.sNh, {
                                id: "remove-widget",
                                label: j.intl.string(j.t.Mm07Yc),
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
