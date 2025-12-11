n.d(e, { Z: () => f }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(481060),
    s = n(458044),
    o = n(388032),
    l = n(612922);
function c(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            a.forEach(function (e) {
                var a;
                (a = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = a);
            });
    }
    return t;
}
function d(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function g(t) {
    let { user: e, tagId: n, title: i, messageCount: s, reactionCount: c, activeAgo: d, tags: g, attachment: m } = t,
        { name: u, avatarSrc: f } = e;
    return (0, a.jsxs)("div", {
        className: l.post,
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsxs)("div", {
                        className: l.inline,
                        children: [
                            (0, a.jsxs)(r.Text, {
                                color: "text-strong",
                                variant: "text-xs/medium",
                                className: l.inline,
                                children: [
                                    (0, a.jsx)("img", {
                                        src: f,
                                        alt: o.intl.string(o.t.lqaIxI),
                                        width: 16,
                                        height: 16,
                                    }),
                                    u,
                                ],
                            }),
                            null != n &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)("span", {
                                            className: l.bullet,
                                            children: "\u2022",
                                        }),
                                        (0, a.jsx)(r.Text, {
                                            color: "text-strong",
                                            variant: "text-xxs/medium",
                                            className: l.inlineTag,
                                            children: g[n],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsx)(r.Heading, {
                        color: "text-strong",
                        variant: "heading-md/semibold",
                        className: l.title,
                        children: i,
                    }),
                    (0, a.jsxs)("div", {
                        className: l.inline,
                        children: [
                            (0, a.jsxs)(r.Text, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                className: l.alignCenter,
                                children: [
                                    (0, a.jsx)(r.kBi, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: l.icon,
                                    }),
                                    s,
                                ],
                            }),
                            c > 0 &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)("span", {
                                            className: l.bullet,
                                            children: "\u2022",
                                        }),
                                        (0, a.jsxs)(r.Text, {
                                            color: "text-default",
                                            variant: "text-xs/medium",
                                            className: l.alignCenter,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    role: "img",
                                                    "aria-label": o.intl.string(o.t.gHp0C4),
                                                    className: l.icon,
                                                    children: "\u2764️",
                                                }),
                                                c,
                                            ],
                                        }),
                                    ],
                                }),
                            (0, a.jsx)("span", {
                                className: l.bullet,
                                children: "\u2022",
                            }),
                            (0, a.jsx)(r.Text, {
                                color: "text-default",
                                variant: "text-xs/medium",
                                children: d,
                            }),
                        ],
                    }),
                ],
            }),
            null != m &&
                (0, a.jsx)("img", {
                    src: m,
                    alt: o.intl.formatToPlainString(o.t.MJHFt9, { name: i }),
                    className: l.attachment,
                }),
        ],
    });
}
function m(t) {
    let { author: e, content: n } = t,
        { name: i, isOP: s, avatarSrc: c } = e;
    return (0, a.jsxs)("div", {
        className: l.message,
        children: [
            (0, a.jsx)("img", {
                src: c,
                alt: o.intl.string(o.t.lqaIxI),
                width: 40,
                height: 40,
            }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsxs)("div", {
                        className: l.inline,
                        children: [
                            (0, a.jsx)(r.Text, {
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: i,
                            }),
                            s &&
                                (0, a.jsx)("span", {
                                    className: l.opTag,
                                    children: o.intl.string(o.t.fyE8sH),
                                }),
                        ],
                    }),
                    (0, a.jsx)(r.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: n,
                    }),
                ],
            }),
        ],
    });
}
function u(t) {
    let { title: e, messages: n, maxHeight: i } = t;
    return (0, a.jsx)("div", {
        className: l.previewContainer,
        style: { maxHeight: i },
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: l.preview,
            children: [
                (0, a.jsx)(r.kBi, {
                    size: "md",
                    color: "currentColor",
                    className: l.forumPostIcon,
                }),
                (0, a.jsx)(r.Heading, {
                    color: "text-strong",
                    variant: "heading-lg/semibold",
                    className: l.header,
                    children: e,
                }),
                (0, a.jsx)("div", {
                    className: l.messageContainer,
                    children: n.map((t, e) =>
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(m, c({}, t), e),
                                0 === e &&
                                    (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)("hr", { className: l.topSeparator }),
                                            (0, a.jsxs)("div", {
                                                className: l.actionBar,
                                                children: [
                                                    (0, a.jsxs)(r.Text, {
                                                        color: "text-brand",
                                                        variant: "text-xs/medium",
                                                        className: l.fakeReactions,
                                                        children: [
                                                            (0, a.jsx)("span", {
                                                                role: "img",
                                                                "aria-label": o.intl.string(o.t.gHp0C4),
                                                                className: l.icon,
                                                                children: "\u2764️",
                                                            }),
                                                            "17",
                                                        ],
                                                    }),
                                                    (0, a.jsxs)(r.Text, {
                                                        color: "text-muted",
                                                        variant: "text-xs/medium",
                                                        className: l.following,
                                                        children: [
                                                            (0, a.jsx)(r.Dkj, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                            }),
                                                            o.intl.string(o.t["3aOv+h"]),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)("hr", { className: l.bottomSeparator }),
                                        ],
                                    }),
                            ],
                        }),
                    ),
                }),
                (0, a.jsx)("div", {
                    className: l.chatInput,
                    children: (0, a.jsx)(r.Text, {
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: o.intl.string(o.t.YzpScd),
                    }),
                }),
            ],
        }),
    });
}
function f(t) {
    let { id: e } = t,
        [n, o] = i.useState(0),
        m = i.useRef(null),
        { tags: f, posts: x, postPreview: p, ariaLabel: b } = (0, s.Z)(e);
    return (
        i.useEffect(() => {
            o(0);
        }, [e]),
        i.useEffect(() => {
            var t;
            0 === n &&
                (null == m || null == (t = m.current) ? void 0 : t.clientHeight) != null &&
                o(m.current.clientHeight - 40);
        }, [n]),
        (0, a.jsxs)("div", {
            className: l.container,
            role: "image",
            "aria-label": b,
            children: [
                (0, a.jsxs)("div", {
                    ref: m,
                    className: l.browser,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsx)("div", {
                            className: l.tags,
                            children: f.map((t, e) =>
                                (0, a.jsx)(
                                    r.Text,
                                    {
                                        color: "text-strong",
                                        variant: "text-xs/medium",
                                        className: l.tag,
                                        children: t,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsx)("div", {
                            className: l.posts,
                            children: x.map((t, e) => (0, a.jsx)(g, d(c({}, t), { tags: f }), e)),
                        }),
                    ],
                }),
                (0, a.jsx)(u, d(c({}, p), { maxHeight: n })),
            ],
        })
    );
}
