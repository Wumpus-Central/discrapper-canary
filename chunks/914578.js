n.d(t, { Z: () => g });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(782568),
    c = n(163379),
    u = n(63063),
    d = n(604227),
    f = n(981631),
    p = n(388032),
    b = n(989281);
function y(e) {
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
                    label: p.intl.string(p.t.LRmNAl),
                    action: () => (0, c.Z)(!0),
                }),
                (0, r.jsx)(a.sNh, {
                    id: "acknowledgements",
                    label: p.intl.string(p.t["0nUKy3"]),
                    action: () => (0, s.Z)(f.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(a.sNh, {
                    id: "support",
                    label: p.intl.string(p.t["Yl/Riu"]),
                    action: () => (0, s.Z)(u.w),
                }),
            ],
        }),
    });
}
function g() {
    let e = l.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(d.Z, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: b.links,
                children: [
                    (0, r.jsx)(a.Anchor, {
                        href: f.EYA.PRIVACY,
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: p.intl.string(p.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: b.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(a.Anchor, {
                        href: f.EYA.TERMS,
                        children: (0, r.jsx)(a.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: p.intl.string(p.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: b.bullet,
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
                            return (0, r.jsx)(y, { onClose: t });
                        },
                        children: (t, n) => {
                            var l, i;
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
                                (i = i =
                                    {
                                        ref: e,
                                        useDefaultUnderlineStyles: !1,
                                        className: o()(b.moreButton, { [b.active]: n.isShown }),
                                        children: (0, r.jsx)(a.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: p.intl.string(p.t["UKOtz+"]),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
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
