n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(782568),
    u = n(163379),
    c = n(31336),
    d = n(906467),
    f = n(63063),
    g = n(604227),
    y = n(924983),
    O = n(981631),
    E = n(388032),
    b = n(530785);
function p(e) {
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
                    label: E.intl.string(E.t.LRmNAg),
                    action: () => (0, u.Z)(!0),
                }),
                (0, r.jsx)(s.sNh, {
                    id: "acknowledgements",
                    label: E.intl.string(E.t["0nUKy8"]),
                    action: () => (0, a.Z)(O.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(s.sNh, {
                    id: "support",
                    label: E.intl.string(E.t["Yl/Rio"]),
                    action: () => (0, a.Z)(f.w),
                }),
            ],
        }),
    });
}
function v() {
    let e = i.useRef(null),
        t = d.Z.isDeveloper;
    return (0, r.jsxs)("div", {
        children: [
            t &&
                (0, r.jsx)(s.P3F, {
                    className: b.devToolsEducation,
                    onClick: () => (0, c.d8)(),
                    children: (0, r.jsx)(y.$, { legacy: !1 }),
                }),
            (0, r.jsx)(g.Z, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: b.links,
                children: [
                    (0, r.jsx)(s.eee, {
                        href: O.EYA.PRIVACY,
                        children: (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: E.intl.string(E.t["Knf/f3"]),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: b.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(s.eee, {
                        href: O.EYA.TERMS,
                        children: (0, r.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: E.intl.string(E.t.uFSTGh),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: b.bullet,
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
                            return (0, r.jsx)(p, { onClose: t });
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
                                        className: o()(b.moreButton, { [b.active]: n.isShown }),
                                        children: (0, r.jsx)(s.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: E.intl.string(E.t.UKOtz8),
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
