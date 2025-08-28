n.d(t, { Z: () => N });
var i = n(951288),
    l = n(647438),
    r = n(481060),
    s = n(782568),
    a = n(163379),
    o = n(63063),
    u = n(604227),
    c = n(981631),
    d = n(388032),
    _ = n(989281);
function E(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(r.v2r, {
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, i.jsxs)(r.kSQ, {
            children: [
                (0, i.jsx)(r.sNh, {
                    id: "changelog",
                    label: d.intl.string(d.t.LRmNAg),
                    action: () => (0, a.Z)(!0),
                }),
                (0, i.jsx)(r.sNh, {
                    id: "acknowledgements",
                    label: d.intl.string(d.t["0nUKy8"]),
                    action: () => (0, s.Z)(c.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, i.jsx)(r.sNh, {
                    id: "support",
                    label: d.intl.string(d.t["Yl/Rio"]),
                    action: () => (0, s.Z)(o.w),
                }),
            ],
        }),
    });
}
function N() {
    let e = l.useRef(null);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(u.Z, { compact: !0 }),
            (0, i.jsxs)("div", {
                className: _.links,
                children: [
                    (0, i.jsx)(r.eee, {
                        href: c.EYA.PRIVACY,
                        children: (0, i.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: d.intl.string(d.t["Knf/f3"]),
                        }),
                    }),
                    (0, i.jsx)(r.eee, {
                        href: c.EYA.TERMS,
                        children: (0, i.jsx)(r.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "text-muted",
                            children: d.intl.string(d.t.uFSTGh),
                        }),
                    }),
                    (0, i.jsx)(r.yRy, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: r.yRy.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(E, { onClose: t });
                        },
                        children: (t) => {
                            var n, l;
                            return (0, i.jsx)(
                                r.eee,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = i);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (l = l =
                                    {
                                        ref: e,
                                        children: (0, i.jsx)(r.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: d.intl.string(d.t.UKOtz8),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
}
