r.d(t, { Z: () => j });
var n = r(951288);
r(647438);
var i = r(323946),
    l = r(481060),
    a = r(239091),
    o = r(314897),
    c = r(785717),
    s = r(86419),
    u = r(872269),
    d = r(228168),
    f = r(388032),
    g = r(176870);
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
let m = (e) => {
        let { children: t } = e,
            { isDragging: r } = (0, i.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, n.jsx)(l.ua7, {
            "aria-label": f.intl.string(f.t.HWNJJC),
            text: (0, n.jsx)(O, {}),
            position: "top",
            shouldShow: !0 !== r,
            children: t,
        });
    },
    O = () =>
        (0, n.jsxs)("div", {
            className: g.dragClickTooltipText,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["7cdwho"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, n.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    y = (e) => {
        let { children: t, widget: i, targetRef: g } = e,
            { trackUserProfileEditAction: m } = (0, c.KZ)(),
            O = (e) => {
                if (e.shiftKey) {
                    (0, s.y8)(i.type),
                        m({
                            action: "WIDGET_REMOVED",
                            widgetEdited: i.type,
                        }),
                        (0, u.L$)(d.qb.WIDGET_REMOVED);
                    return;
                }
                (0, l.ZDy)(
                    async () => {
                        let { default: e } = await r.e("70887").then(r.bind(r, 37668));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                p(b({}, t), {
                                    userId: o.default.getId(),
                                    widget: i,
                                    trackUserProfileEditAction: m,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, n.jsx)(l.yRy, {
            targetElementRef: g,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(l.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, a.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": f.intl.string(f.t.xpSHSk),
                    children: (0, n.jsx)(l.kSQ, {
                        children: (0, n.jsx)(l.sNh, {
                            id: "remove-widget",
                            label: f.intl.string(f.t.Mm07YW),
                            action: O,
                            color: "danger",
                            icon: l.XHJ,
                        }),
                    }),
                });
            },
            children: t,
        });
    },
    j = (e) => {
        let { widget: t, className: r, buttonRef: i } = e;
        return (0, n.jsx)(m, {
            children: (e) =>
                (0, n.jsx)(y, {
                    targetRef: i,
                    widget: t,
                    children: (t) =>
                        (0, n.jsx)(
                            l.P3F,
                            p(
                                b(
                                    {
                                        innerRef: i,
                                        className: r,
                                    },
                                    e,
                                    t,
                                ),
                                { children: (0, n.jsx)(l.Vni, { size: "sm" }) },
                            ),
                        ),
                }),
        });
    };
