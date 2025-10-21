n.d(t, { Z: () => g });
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    c = n(782568),
    s = n(163379),
    u = n(31336),
    d = n(906467),
    f = n(63063),
    b = n(604227),
    p = n(924983),
    y = n(981631),
    j = n(388032),
    m = n(989281);
function v(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.v2r, {
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(a.kSQ, {
            children: [
                (0, r.jsx)(a.sNh, {
                    id: "changelog",
                    label: j.intl.string(j.t.LRmNAl),
                    action: () => (0, s.Z)(!0),
                }),
                (0, r.jsx)(a.sNh, {
                    id: "acknowledgements",
                    label: j.intl.string(j.t["0nUKy3"]),
                    action: () => (0, c.Z)(y.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(a.sNh, {
                    id: "support",
                    label: j.intl.string(j.t["Yl/Riu"]),
                    action: () => (0, c.Z)(f.w),
                }),
            ],
        }),
    });
}
function g() {
    let e = l.useRef(null),
        t = d.Z.isDeveloper;
    return (0, r.jsxs)("div", {
        children: [
            t &&
                (0, r.jsx)(a.P3F, {
                    className: m.devToolsEducation,
                    onClick: () => (0, u.d8)(),
                    children: (0, r.jsx)(p.$, { legacy: !1 }),
                }),
            (0, r.jsx)(b.Z, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: m.links,
                children: [
                    (0, r.jsx)(a.Anchor, {
                        href: y.EYA.PRIVACY,
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: j.intl.string(j.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: m.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(a.Anchor, {
                        href: y.EYA.TERMS,
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: j.intl.string(j.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: m.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(a.yRy, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: a.yRy.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(v, { onClose: t });
                        },
                        children: (t, n) => {
                            var l, o;
                            return (0, r.jsx)(
                                a.Anchor,
                                ((l = (function (e) {
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
                                (o = o =
                                    {
                                        ref: e,
                                        useDefaultUnderlineStyles: !1,
                                        className: i()(m.moreButton, { [m.active]: n.isShown }),
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: j.intl.string(j.t["UKOtz+"]),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                l),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
}
