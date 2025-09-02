n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(323946),
    l = n(481060),
    a = n(239091),
    o = n(314897),
    c = n(785717),
    s = n(86419),
    u = n(872269),
    d = n(228168),
    f = n(388032),
    g = n(176870);
function b(e) {
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
function p(e, t) {
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
let m = (e) => {
        let { children: t } = e,
            { isDragging: n } = (0, i.f)((e) => ({ isDragging: e.isDragging() }));
        return (0, r.jsx)(l.ua7, {
            "aria-label": f.intl.string(f.t.HWNJJC),
            text: (0, r.jsx)(O, {}),
            position: "top",
            shouldShow: !0 !== n,
            children: t,
        });
    },
    O = () =>
        (0, r.jsxs)("div", {
            className: g.dragClickTooltipText,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["7cdwho"], {
                        emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                    }),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t["4e0rMz"], {
                        emphasizeHook: (e) => (0, r.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
    j = (e) => {
        let { children: t, widget: i, targetRef: g } = e,
            { trackUserProfileAction: m } = (0, c.KZ)(),
            O = (e) => {
                if (e.shiftKey) {
                    (0, s.y8)(i.type), (0, u.L$)(d.qb.WIDGET_REMOVED);
                    return;
                }
                (0, l.ZDy)(
                    async () => {
                        let { default: e } = await n.e("70887").then(n.bind(n, 37668));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                p(b({}, t), {
                                    userId: o.default.getId(),
                                    widget: i,
                                    trackUserProfileAction: m,
                                }),
                            );
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, r.jsx)(l.yRy, {
            targetElementRef: g,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(l.v2r, {
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, a.Zy)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": f.intl.string(f.t.xpSHSk),
                    children: (0, r.jsx)(l.kSQ, {
                        children: (0, r.jsx)(l.sNh, {
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
    y = (e) => {
        let { widget: t, className: n, buttonRef: i } = e;
        return (0, r.jsx)(m, {
            children: (e) =>
                (0, r.jsx)(j, {
                    targetRef: i,
                    widget: t,
                    children: (t) =>
                        (0, r.jsx)(
                            l.P3F,
                            p(
                                b(
                                    {
                                        innerRef: i,
                                        className: n,
                                    },
                                    e,
                                    t,
                                ),
                                { children: (0, r.jsx)(l.Vni, { size: "sm" }) },
                            ),
                        ),
                }),
        });
    };
