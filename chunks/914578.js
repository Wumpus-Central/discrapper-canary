n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(782568),
    u = n(163379),
    c = n(63063),
    d = n(604227),
    g = n(981631),
    f = n(388032),
    y = n(989281);
function v(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(s.v2r, {
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(s.kSQ, {
            children: [
                (0, r.jsx)(s.sNh, {
                    id: "changelog",
                    label: f.intl.string(f.t.LRmNAg),
                    action: () => (0, u.Z)(!0),
                }),
                (0, r.jsx)(s.sNh, {
                    id: "acknowledgements",
                    label: f.intl.string(f.t["0nUKy8"]),
                    action: () => (0, a.Z)(g.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(s.sNh, {
                    id: "support",
                    label: f.intl.string(f.t["Yl/Rio"]),
                    action: () => (0, a.Z)(c.w),
                }),
            ],
        }),
    });
}
function O() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.Z, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: y.links,
                children: [
                    (0, r.jsx)(s.eee, {
                        href: g.EYA.PRIVACY,
                        children: (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: f.intl.string(f.t["Knf/f3"]),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: y.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(s.eee, {
                        href: g.EYA.TERMS,
                        children: (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: f.intl.string(f.t.uFSTGh),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: y.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(s.yRy, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: s.yRy.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(v, { onClose: t });
                        },
                        children: (t, n) => {
                            var i, l;
                            return (0, r.jsx)(
                                s.eee,
                                ((i = (function (e) {
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
                                })({}, t)),
                                (l = l =
                                    {
                                        ref: e,
                                        useDefaultUnderlineStyles: !1,
                                        className: o()(y.moreButton, { [y.active]: n.isShown }),
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: f.intl.string(f.t.UKOtz8),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                i),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
}
