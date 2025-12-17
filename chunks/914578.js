n.d(t, { Z: () => g });
var r = n(54381),
    o = n(473749),
    a = n(120356),
    i = n.n(a),
    l = n(481060),
    c = n(782568),
    s = n(163379),
    u = n(63063),
    f = n(604227),
    d = n(981631),
    b = n(388032),
    y = n(205904);
function p(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(l.v2r, {
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(l.kSQ, {
            children: [
                (0, r.jsx)(l.sNh, {
                    id: "changelog",
                    label: b.intl.string(b.t.LRmNAl),
                    action: () => (0, s.Z)(!0),
                }),
                (0, r.jsx)(l.sNh, {
                    id: "acknowledgements",
                    label: b.intl.string(b.t["0nUKy3"]),
                    action: () => (0, c.Z)(d.EYA.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(l.sNh, {
                    id: "support",
                    label: b.intl.string(b.t["Yl/Riu"]),
                    action: () => (0, c.Z)(u.w),
                }),
            ],
        }),
    });
}
function g() {
    let e = o.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.Z, { compact: !0 }),
            (0, r.jsxs)("div", {
                className: y.links,
                children: [
                    (0, r.jsx)(l.Anchor, {
                        href: d.EYA.PRIVACY,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: b.intl.string(b.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: y.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(l.Anchor, {
                        href: d.EYA.TERMS,
                        children: (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: b.intl.string(b.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", {
                        className: y.bullet,
                        "aria-hidden": "true",
                        children: "\u2022",
                    }),
                    (0, r.jsx)(l.yRy, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: l.yRy.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(p, { onClose: t });
                        },
                        children: (t, n) => {
                            var o, a;
                            return (0, r.jsx)(
                                l.Anchor,
                                ((o = (function (e) {
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
                                (a = a =
                                    {
                                        ref: e,
                                        useDefaultUnderlineStyles: !1,
                                        className: i()(y.moreButton, { [y.active]: n.isShown }),
                                        children: (0, r.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "currentColor",
                                            children: b.intl.string(b.t["UKOtz+"]),
                                        }),
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                o),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
}
