g.d(t, {
    Z: () => o,
    l: () => H,
});
var v = g(54381);
g(473749);
var e = g(120356),
    r = g.n(e),
    f = g(481060),
    B = g(957537),
    h = g(737770),
    n = g(839008),
    C = g(685184),
    w = g(9377),
    l = g(624463),
    Q = g(388032),
    i = g(948023);
function H(A) {
    return (0, v.jsxs)("div", {
        className: r()(i.messageContainer, A.className),
        children: [
            (0, v.jsx)("div", {
                className: i.avatarContainer,
                children:
                    "string" == typeof A.avatar
                        ? (0, v.jsx)("img", {
                              className: i.avatar,
                              src: A.avatar,
                              alt: "".concat(A.username, " avatar"),
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, v.jsxs)("div", {
                className: i.contentContainer,
                children: [
                    (0, v.jsxs)("div", {
                        className: i.usernameContainer,
                        children: [
                            "string" == typeof A.username
                                ? (0, v.jsx)(f.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, v.jsx)("div", {
                                    className: i.decorationsContainer,
                                    children: A.decorations,
                                }),
                        ],
                    }),
                    null != A.message &&
                        (0, v.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: A.message,
                        }),
                    A.asset,
                ],
            }),
        ],
    });
}
let o = function (A) {
    var { className: t } = A,
        g = (function (A, t) {
            if (null == A) return {};
            var g,
                v,
                e = (function (A, t) {
                    if (null == A) return {};
                    var g,
                        v,
                        e = {},
                        r = Object.keys(A);
                    for (v = 0; v < r.length; v++) (g = r[v]), t.indexOf(g) >= 0 || (e[g] = A[g]);
                    return e;
                })(A, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(A);
                for (v = 0; v < r.length; v++)
                    (g = r[v]),
                        !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g]);
            }
            return e;
        })(A, ["className"]);
    return (0, v.jsxs)("div", {
        className: r()(i.container, t),
        children: [
            (0, v.jsx)(H, {
                className: i.unfocusedMessage,
                avatar: B.Z,
                username: "Roka",
                usernameStyle: { color: "var(--brand-400)" },
                message: Q.intl.string(l.default.bpghV6),
            }),
            (0, v.jsx)(H, {
                className: i.unfocusedMessage,
                avatar: h.Z,
                username: "hongo",
                usernameStyle: { color: "var(--green-230)" },
                message: Q.intl.string(l.default.rnpv79),
            }),
            (0, v.jsx)(H, {
                avatar: n.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: Q.intl.string(l.default.u7tjsh),
                decorations: (0, v.jsx)(
                    w.S,
                    (function (A) {
                        for (var t = 1; t < arguments.length; t++) {
                            var g = null != arguments[t] ? arguments[t] : {},
                                v = Object.keys(g);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (v = v.concat(
                                    Object.getOwnPropertySymbols(g).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(g, A).enumerable;
                                    }),
                                )),
                                v.forEach(function (t) {
                                    var v;
                                    (v = g[t]),
                                        t in A
                                            ? Object.defineProperty(A, t, {
                                                  value: v,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (A[t] = v);
                                });
                        }
                        return A;
                    })({}, g),
                ),
            }),
            (0, v.jsx)(H, {
                className: i.unfocusedMessage,
                avatar: C.Z,
                username: "sharon",
                usernameStyle: { color: "var(--brand-400)" },
                message: Q.intl.string(l.default.GlWVJH),
            }),
            (0, v.jsx)(H, {
                className: i.unfocusedMessage,
                avatar: n.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: Q.intl.string(l.default.AIp9hh),
            }),
        ],
    });
};
